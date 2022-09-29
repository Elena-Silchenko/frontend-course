import ImageSaturn from "./сатурн.png"

export default function Saturn() {
  return (
    <div>
      <div className="align-center">
        <img 
          src={ImageSaturn} 
          alt="сатурн" 
          style={{ marginTop: "48px" }}
        />
      </div>
      <h2 className="align-center">Сатурн</h2>
      <p>Шоста за віддаленістю від Сонця та друга за розмірами планета Сонячної 
        системи. Сатурн швидко обертається навколо своєї осі (з періодом — 10,23 години), 
        складається переважно з рідкого <a href="https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%B4%D0%B5%D0%BD%D1%8C">водню</a> 
        і <a href="https://uk.wikipedia.org/wiki/%D0%93%D0%B5%D0%BB%D1%96%D0%B9">гелію</a>, 
        має товстий шар <a href="https://uk.wikipedia.org/wiki/%D0%90%D1%82%D0%BC%D0%BE%D1%81%D1%84%D0%B5%D1%80%D0%B0_%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B8">атмосфери</a>. 
        Навколо Сонця Сатурн обертається за 29,46 земних років на середній відстані 
        1427 млн км. Екваторіальний діаметр верхньої межі хмар — 120 536 км, а 
        полярний — на кілька сотень кілометрів менший.
      </p>
    </div>
  )
}