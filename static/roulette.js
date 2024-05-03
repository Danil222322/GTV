var cards_block = document.querySelector('.cards');
var cards = document.querySelectorAll('.cards > div');
var balanceAmount = document.getElementById('balanceAmount');
var balance = 400; // начальный баланс пользователя
var betAmount = 25; // ставка за один ход

function start() {
  if (balance < betAmount) {
    alert('Недостаточно средств на счете');
    return;
  }

  var random = Math.floor(Math.random() * 12); // От 0 до 11

  cards_block.style.left = -random * 100 + 'px';
  setTimeout(function() {
    random++;
    cards[random].style.background = '#7B90F7';
    cards[random].style.color = 'white';

    // Проверяем выпавшее число и прибавляем к балансу, если необходимо
    if (random === 6 || random === 10) {
      balance += 60; // Увеличиваем баланс на 60 гривен
      balanceAmount.textContent = balance;
      alert('Выпало число ' + (random) + '! Баланс увеличен на 60 грн.');
    } else {
      balance -= betAmount;
      balanceAmount.textContent = balance;
      if (balance <= 0) {
        alert('Ваш баланс закончился. Обновите страницу для продолжения.');
      }
    }
  }, 2000)
}

