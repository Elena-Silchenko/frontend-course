/* Создайте объект криптокошилек. В кошельке должно хранится имя владельца, 
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
    rate: "23,501.96"
  },
  ehr: {
    name: "Ethereum",
    logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' />",
    coin: "27",
    rate: "1,640.62"
  },
  xlm: {
    name: "Stellar",
    logo: "<img src='https://s2.coinmarketcap.com/static/img/coins/64x64/512.png' />",
    coin: "37",
    rate: "0.08741"
  },

  show: function(nameCoin) {
    document.getElementById("wallet").innerHTML = `Добрый день, ${wallet.name}! 
    На вашем балансе ${wallet.}(Название валюты и логотип) осталось N монет, 
    если вы сегодня продадите их то, получите ...грн.`
  }
}

wallet.show();
