from flask import Flask
import random

app = Flask(__name__)

# Список случайных слов
random_words = ['Привет', 'Мир', 'Фласк', 'Обеспечение']

@app.route('/')
def index():
    # Выбор случайного слова из списка
    random_word = random.choice(random_words)
    return random_word

if __name__ == '__main__':
    app.run(debug=True)
