import Button from "react-bootstrap/Button"

import ImageUkraine from "./7e edukation.png"

export default function MainComponent() {
  return (
    <div>
      <div className="main-container2-header">
        <div className="main-container2">
          <div className="main-container2-title">Наша Україна переможе</div>
          <div className="main-container2-border"></div>
        </div>
      </div>
      <div className="container-image">
        <img 
          className="main-container2-image" 
          src={ImageUkraine} 
          alt="Україна" 
        />
      </div>
      <div className="container-button">
        <Button>Go</Button>
      </div>
    </div>
  )
}