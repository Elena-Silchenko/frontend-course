import ImageJupiter from "./юпітер.png"

export default function Jupiter() {
  return (
    <div>
      <div className="align-center">
        <img 
          src={ImageJupiter} 
          alt="юпітер"
        />
      </div>
      <h2 className="align-center">Юпітер</h2>
      <p className="align-center">П'ята від Сонця та найбільша планета Сонячної системи. Відстань Юпітера від 
        Сонця змінюється в межах від 4,95 до 5,45 а. о. (740—814 млн км), середня 
        відстань 5,203 а. о. (778 млн км). Разом із Сатурном, Ураном і Нептуном Юпітер 
        класифікують як <a href="https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%B7%D0%BE%D0%B2%D1%96_%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B8#:~:text=%D0%93%D0%B0%D0%B7%D0%BE%D0%B2%D1%96%20%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B8%20(%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B8%2D%D0%B3%D1%96%D0%B3%D0%B0%D0%BD%D1%82%D0%B8%2C,%D0%B3%D0%B0%D0%B7%D1%83%20(%D0%B2%D0%BE%D0%B4%D0%B5%D0%BD%D1%8C%20%D1%96%20%D0%B3%D0%B5%D0%BB%D1%96%D0%B9).">газового гіганта</a>.
      </p>
    </div>
  )
}