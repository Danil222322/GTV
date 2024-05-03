from flask import Flask, render_template
import random

app = Flask(__name__)

# Список случайных слов
random_words = ['Мир клоунов']


@app.route('/')
def index():
    # Выбор случайного слова из списка
    random_word = random.choice(random_words)
    return render_template('index.html', random_word=random_word)


if __name__ == '__main__':
    app.run(debug=True)
