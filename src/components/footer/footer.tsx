import "./footer.css"

function footer() {
  return (
    <div className="footer-style">
        <h2 className="footer-h2">Contact Us<hr></hr></h2>
        <section className="footer-direct">
            <ul>
                <li><b>Company</b></li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Quote</a></li>
            </ul>
            <ul>
                <li><b>Services</b></li>
                <li><a href="">Sprinter Van Dedicated</a></li>
                <li><a href="">Contract Services</a></li>
                <li><a href="">LTL Services</a></li>
                <li><a href="">Parcel Shipments</a></li>
            </ul>
        </section>
    </div>
    )
}

export default footer