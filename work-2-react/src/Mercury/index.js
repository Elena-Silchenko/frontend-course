import ImageMercury from './меркурій.png'

export default function Mercury() {
  return (
    <div>
      <div className="title">HW 1-2</div>
      <h1>ПЛАНЕТИ СОНЯЧНОЇ СИСТЕМИ</h1>
      <div className="align-center">
        <img 
          src={ImageMercury} 
          alt="меркурій" 
          style={{ marginTop: '55px' }}
        />
      </div>
      <h2 class="align-left">Меркурій</h2>
      <p>Найближча до <a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BD%D1%86%D0%B5">Сонця</a> планета Сонячної системи. Обертається навколо Сонця 
        за 87,969 земних діб. Меркурій належить до внутрішніх планет, оскільки його 
        орбіта лежить ближче до Сонця, ніж пояс астероїдів. Після позбавлення Плутона 
        статусу планети Меркурій є найменшою планетою Сонячної системи.
      </p>
    </div>
  )
}
