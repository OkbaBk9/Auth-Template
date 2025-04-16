from flask import Flask, render_template, request, redirect, url_for, flash, session
import os
from werkzeug.security import generate_password_hash, check_password_hash
import secrets
import uuid
from datetime import datetime, timedelta

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY') or secrets.token_hex(16)

# In a real app, this would be a database
users = {}
reset_tokens = {}

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        remember = request.form.get('remember') == 'on'
        
        if email in users and check_password_hash(users[email]['password'], password):
            session['user_email'] = email
            if remember:
                # Set session to expire after 30 days
                session.permanent = True
                app.permanent_session_lifetime = timedelta(days=30)
            flash('Login successful', 'success')
            return redirect(url_for('login'))  # In a real app, redirect to dashboard
        else:
            error = 'Invalid email or password'
    
    return render_template('login.html', error=error)

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    error = None
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        terms = request.form.get('terms') == 'on'
        
        if not all([name, email, password, confirm_password, terms]):
            error = 'All fields are required'
        elif password != confirm_password:
            error = 'Passwords do not match'
        elif email in users:
            error = 'Email already registered'
        else:
            users[email] = {
                'name': name,
                'password': generate_password_hash(password),
                'created_at': datetime.now()
            }
            flash('Account created successfully', 'success')
            return redirect(url_for('login'))
    
    return render_template('signup.html', error=error)

@app.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():
    error = None
    success = None
    
    if request.method == 'POST':
        email = request.form.get('email')
        
        if email in users:
            # Generate a unique token
            token = str(uuid.uuid4())
            reset_tokens[token] = {
                'email': email,
                'expiry': datetime.now() + timedelta(hours=1)
            }
            
            # In a real app, send an email with the reset link
            reset_link = url_for('reset_password', token=token, _external=True)
            print(f"Reset link for {email}: {reset_link}")
            
            success = 'Password reset link has been sent to your email'
        else:
            error = 'Email not found'
    
    return render_template('forgot_password.html', error=error, success=success)

@app.route('/reset-password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    # Check if token is valid
    if token not in reset_tokens or reset_tokens[token]['expiry'] < datetime.now():
        flash('Invalid or expired reset link', 'error')
        return redirect(url_for('forgot_password'))
    
    error = None
    if request.method == 'POST':
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        
        if not password or not confirm_password:
            error = 'Both fields are required'
        elif password != confirm_password:
            error = 'Passwords do not match'
        else:
            email = reset_tokens[token]['email']
            users[email]['password'] = generate_password_hash(password)
            
            # Remove the used token
            del reset_tokens[token]
            
            flash('Password has been reset successfully', 'success')
            return redirect(url_for('login'))
    
    return render_template('reset_password.html', token=token, error=error)

@app.route('/logout')
def logout():
    session.pop('user_email', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
