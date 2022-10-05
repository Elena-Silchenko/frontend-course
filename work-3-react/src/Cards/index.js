import Card from 'react-bootstrap/Card'

import Image1 from "./фото тустань.png"
import Image2 from "./фото луцький замок.png"
import Image3 from "./1200px-Городище_літописного_міста._Тустань 3.png"

export default function CardsComponent() {
  return (
    <div>
      <div className="main-content">
        <div>
          <h2>Неймовірні місця України</h2>
          <div className="main-content-border"></div>
        </div>
        <div className="cards">
          <Card className="card card1">
            <a target="_blank" href="https://uk.wikipedia.org/wiki/%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D0%B2%D0%BD%D0%B8%D0%B9_%D1%96%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%BA%D0%BE-%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BD%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BF%D0%BE%D0%B2%D1%96%D0%B4%D0%BD%D0%B8%D0%BA_%C2%AB%D0%A2%D1%83%D1%81%D1%82%D0%B0%D0%BD%D1%8C%C2%BB">
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title>Стародавній Тустань</Card.Title>
                <Card.Text className="card-text">Середньовічна наскельна фортеця-град</Card.Text>
              </Card.Body>
            </a>
          </Card>

          <Card className="card card2">
            <a target="_blank" href="https://uk.wikipedia.org/wiki/%D0%9B%D1%83%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA">
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title className="card-title">Луцький Замок</Card.Title>
                <Card.Text className="card-text">Збережений замок міста</Card.Text>
              </Card.Body>
            </a>
          </Card>

          <Card className="card card3">
            <a target="_blank" href="https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%27%D1%8F%D0%BD%D0%B0_%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B0">
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title>Кам’яна Могила</Card.Title>
                <Card.Text className="card-text">Природне утворення</Card.Text>
              </Card.Body>
            </a>
          </Card>
        </div>
      </div>
    </div>
  )
}