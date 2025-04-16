
# JM3IA Authentication Templates

A simple authentication system built with Flask and Jinja templates.

## Features

- Login page
- Signup page
- Forgot password flow
- Reset password with token validation
- Clean, glassmorphic UI with green accent colors

## Requirements

- Python 3.7+
- Flask

## Setup

1. Create a virtual environment:
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python app.py
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5000/
   ```

## Customization

You can customize the appearance by modifying the CSS in the `templates/base.html` file.

## Security Notes

This is a demonstration project. For a production environment, consider:
- Using a proper database instead of in-memory storage
- Implementing proper email sending functionality
- Adding CSRF protection
- Setting secure cookies
- Implementing rate limiting
