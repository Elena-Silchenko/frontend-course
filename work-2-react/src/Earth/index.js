import ImageEarth from "./земля.png"

export default function Earth() {
  return (
    <div>
      <div className="align-right">
        <img 
          src={ImageEarth} 
          alt="земля" 
          style={{ marginTop: "46px" }}
        />
      </div>
      <h2 className="align-center">Земля</h2>
      <p className="align-center">Третя від Сонця планета Сонячної системи, єдина планета, на якій відоме 
        життя, домівка людства. Земля належить до планет земної групи і є найбільшою 
        з цих планет у Сонячній системі. Землю іноді називають світом, латинською 
        назвою Терра або грецькою — Гея.
      </p>
    </div>
  )
}