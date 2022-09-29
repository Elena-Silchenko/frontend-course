import ImageUranium from "./уран.png"

export default function Uranium() {
  return (
    <div>
      <div className="align-left">
        <img 
          src={ImageUranium} 
          alt="уран" 
          style={{ marginTop: "48px" }}
        />
      </div>
      <h2 className="align-right">Уран</h2>
      <p>
        Сьома від Сонця велика планета Сонячної системи, що належить до планет-гігантів. 
        Діаметр Урана в 4 рази, а його маса — в 14,5 раза більші за земні, що робить 
        його третьою за діаметром і четвертою за масою планетою Сонячної системи.
      </p>
    </div>
  )
}