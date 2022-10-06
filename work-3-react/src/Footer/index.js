export default function Footer() {
  return (
    <div className="footer">
      <div className="logo" style={{ padding: 0 }}>
        <a href="">
          <span className="logo-blue">Strong</span> <span className="logo-yellow">Ukraine</span>
        </a>
      </div>

      <div className="links">
        <a href="mailto:ukrinfo123@gmail.com">ukrinfo123@gmail.com</a>
        <a href="tel:+38088881114">+3808 888 1114</a>
      </div>

      <div className="footer-icons">
        <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube"></i></a>
      </div>
    </div>
  )
}