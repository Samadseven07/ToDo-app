📝 ToDo-app

A simple and efficient To-Do list application built with Django.
Manage your daily tasks effortlessly — add, edit, delete, and mark tasks as done.
Includes a clean, responsive UI and user authentication for personalized task management.

🚀 Features

 Add, edit, and delete tasks
 Mark tasks as complete/incomplete
 User registration and login system
 Simple and clean interface
 Lightweight and easy to set up
 Tech Stack

Backend: Django (Python)
Frontend: HTML, CSS, Js
Database: SQLite (default)

Installation & Setup
1. Clone the repository
git clone https://github.com/Samadseven07/ToDo-app.git

Write this in terminal
cd ToDo-app

2. Create and activate a virtual environment
For Windows:
python -m venv venv
venv\Scripts\activate

For macOS/Linux:
python3 -m venv venv
source venv/bin/activate

3. Install dependencies
pip install -r requirements.txt

4. Apply database migrations
python manage.py migrate

5. Create a superuser (optional, for admin access)
python manage.py createsuperuser

6. Run the development server
python manage.py runserver

Then open your browser and visit:
http://127.0.0.1:8000

 Usage
Register or log in to your account
Add, edit, or delete tasks
Mark tasks as complete/incomplete
Manage your day efficiently
