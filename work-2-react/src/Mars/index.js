import ImageMars from './марс.png'

export default function Mars() {
  return (
    <div>
      <div className="align-center">
        <img 
          src={ImageMars} 
          alt="марс" 
          style={{ marginTop: '31px' }}
        />
      </div>
      <h2 className="align-left">Марс</h2>
      <p>Четверта планета Сонячної системи за відстанню від Сонця та сьома за 
        розміром і масою. Названа на честь <a href="https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D1%81_(%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0)">Марса</a> — давньоримського бога війни. 
        Іноді Марс називають «червоною планетою» через червонуватий колір поверхні.
      </p>
    </div>
  )
}