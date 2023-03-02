/* 
  Create a crypto wallet object. The wallet must contain the name of the owner,
  several currencies Bitcoin, Ethereum, Stellar and in each currency there is an additional
  currency name, logo, a few coins and the current rate. Also in object
  the wallet is a method, when called, it takes the name of the currency and outputs to
  page information.
  "Good afternoon, ... ! There are N coins left on your balance (Currency name and logo),
  if you sell them today, you will get ... UAH. The page output should be
  beautifully designed using css and html.
  
  Создайте объект криптокошилек. В кошельке должно хранится имя владельца, 
  несколько валют Bitcoin, Ethereum, Stellar и в каждой валюте дополнительно есть 
  имя валюты, логотип, несколько монет и курс на сегодняшний день. Также в объекте 
  кошелек есть метод при вызове которого он принимает имя валюты и выводит на 
  страницу информацию. 
  "Добрый день, ... ! На вашем балансе (Название валюты и логотип) осталось N монет, 
  если вы сегодня продадите их то, получите ...грн. Вывод на страницу должен быть 
  красиво офрмлен с использованием css и html.
*/

const wallet = {
  name: "Elena",
  btc: {
    name: "Bitcoin",
    logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' />",
    coin: "54",
    rate: "23501.96"
  },
  ehr: {
    name: "Ethereum",
    logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' />",
    coin: "27",
    rate: "1640.62"
  },
  xlm: {
    name: "Stellar",
    logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/512.png' />",
    coin: "37",
    rate: "0.08741"
  },

  show: function(nameCoin) {
    document.getElementById("wallet").innerHTML = `Добрый день, ${wallet.name}! 
    На вашем балансе ${wallet[nameCoin].name} ${wallet[nameCoin].logo} осталось ${wallet[nameCoin].coin} монет, 
    если вы сегодня продадите их то, получите ${(wallet[nameCoin].rate * wallet[nameCoin].coin * 31).toFixed(2)} грн.`
  }
}

wallet.show(prompt("Введите название валюты:", "btc, ehr, xlm"));
