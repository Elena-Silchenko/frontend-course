import Banner from "./стяг.png"

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <img 
          src={Banner} 
          alt="стяг" 
          style={{ marginTop: "-113px" }}
        />
        <a href="https://7e.com.ua/webdev/" className="footer-link">https://7e.com.ua/webdev/</a>
      </div>
    </div>
  )
}