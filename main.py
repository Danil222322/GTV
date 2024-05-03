from flask import Flask, render_template
import random

app = Flask(__name__)

# Список анекдотов
anekdots = [
    "Колобок повесился.",
    "Заяц застрелился.",
    "Винни-Пух попал в долговую яму."
]

@app.route('/')
def index():
    # Выбор случайного анекдота из списка
    random_anekdot = random.choice(anekdots)
    return render_template('index.html', anekdot=random_anekdot)

if __name__ == '__main__':
    app.run(debug=True)
