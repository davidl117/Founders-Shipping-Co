import "./footer.css"

export default function footer() {
  return (
    <div className="footer-style">
        <h2 className="footer-h2">Contact Us<hr></hr></h2>
        <section className="footer-direct">
            <ul>
                <li><b>Company</b></li>
                <li><a href="/homePage">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="/quoteForm">Quote</a></li>
            </ul>
            <ul>
                <li><b>Services</b></li>
                <li><a href="#dedicated">Sprinter Van Dedicated</a></li>
                <li><a href="#contract">Contract Services</a></li>
                <li><a href="#LTL">LTL Services</a></li>
                <li><a href="#parcel">Parcel Shipments</a></li>
            </ul>
        </section>
    </div>
    )
}

