
from flask import Flask, render_template, request, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "your-secret-key"

users = {
    "admin@example.com": {"name": "Admin", "role": "admin", "password": generate_password_hash("admin")},
    "teacher@example.com": {"name": "Teacher", "role": "teacher", "password": generate_password_hash("teacher")},
    "delegate@example.com": {"name": "Delegate", "role": "delegate", "password": generate_password_hash("delegate")},
}

@app.route("/")
def index():
    if "user" in session:
        return redirect(url_for("dashboard"))
    return redirect(url_for("login"))

@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]
        user = users.get(email)
        if user and check_password_hash(user["password"], password):
            session["user"] = {"email": email, "name": user["name"], "role": user["role"]}
            return redirect(url_for("dashboard"))
        error = "Invalid credentials"
    return render_template("auth.html", mode="login", error=error)

@app.route("/signup", methods=["GET", "POST"])
def signup():
    error = None
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        password = request.form["password"]
        role = request.form["role"]
        if email in users:
            error = "User already exists"
        elif not (name and email and password and role):
            error = "All fields required"
        else:
            users[email] = {
                "name": name,
                "role": role,
                "password": generate_password_hash(password)
            }
            session["user"] = {"email": email, "name": name, "role": role}
            return redirect(url_for("dashboard"))
    return render_template("auth.html", mode="signup", error=error)

@app.route("/dashboard", methods=["GET", "POST"])
def dashboard():
    user = session.get("user")
    if not user:
        return redirect(url_for("login"))
    # Role switcher for demo
    if request.method == "POST" and "switch_role" in request.form:
        new_role = request.form["switch_role"]
        session["user"]["role"] = new_role
        user["role"] = new_role
    return render_template("dashboard.html", user=user)

@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("login"))

if __name__ == "__main__":
    app.run(debug=True)
