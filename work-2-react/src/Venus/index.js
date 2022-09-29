import ImageVenus from "./венера.png"

export default function Venus() {
  return (
    <div>
      <div className="align-left">
        <img 
          src={ImageVenus} 
          alt="венера" 
          className="venus" 
          style={{ marginTop: "62px" }}
        />
      </div>
      <h2 className="align-right">Венера</h2>
      <p>Друга від Сонця та шоста за розміром планета 
        <a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BD%D1%8F%D1%87%D0%BD%D0%B0_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0"> Сонячної системи</a>.
        <a href="https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D1%96%D0%BE%D0%B4_%D0%BE%D0%B1%D0%B5%D1%80%D1%82%D0%B0%D0%BD%D0%BD%D1%8F"> Період обертання</a> навколо Сонця — 224,7 земних діб. Названа на честь Венери, 
        богині кохання з римського пантеону. Це єдина з восьми планет Сонячної 
        системи, яка отримала назву на честь жіночого божества. За розміром майже 
        така ж, як і Земля.
      </p>
    </div>
  )
}