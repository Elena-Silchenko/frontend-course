import Image from "./img.png"
import ImageBlazon from "./герб.png"

export default function Additional() {
  return (
    <div>
      <div className="align-center">
        <img 
          src={Image} 
          alt="програміст" 
          style={{ marginTop: "204px" }}
        />
      </div>
      <p>Не забувайте про: &lt;p&gt;...&lt;/p&gt;, h1, h2, &lt;span&gt;...&lt;/span&gt;, 
        &lt;br&gt;.<br/> Текст, наприклад, <a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BD%D1%86%D0%B5">Сонця</a>, є посиланнями на Вікіпедії сторінки з 
        відповідною інформацією і прописуються в тег &lt;a&gt;.
      </p>
      <p className="align-center" style={{ fontSize: "20px", marginTop: "82px" }}>
        Успіху у навчанні і мирного неба!<br/>
        Все буде Україна
      </p>

      <div className="align-center">
        <img 
          src={ImageBlazon} 
          alt="герб" 
          style={{ marginTop: "-57px", marginLeft: "-59px" }}
        />
      </div>
    </div>
  )
}