import "./serviceList.css"

export default function serviceList() {
  return (
    <article className="serviceList-container">
        <h2 className="service-header">
          Our Services
        </h2>
        <section className="service-section">
          <h4 id="dedicated"> Sprinter Van Dedicated</h4>
          <p>Need a shipment fast and without any extra stops? A dedicated van is what you need.
            We will not make any stops you don't authorize. 
          </p>
          <br></br>
          <button><a href="/quoteForm">Contact Us</a></button>
          <hr/>
          <br></br>

          <h4 id="contact">Contract Services</h4>
          <p>Have a recurring shipment? We can work out a schedule and a price so you wont have to worry
            about finding a new carrier every time this shipment occurs.
          </p>
          <br></br>
          <button><a href="/quoteForm">Contact Us</a></button>
          <hr/>
          <br></br>

          <h4 id="LTL"> LTL Shipments</h4>
          <p>If you are shipping small freight shipments of 1-3 pallets, we got you covered.
            There is less of an opportunity of your freight getting damaged with our LTL services 
            as opposed to using a freighliner. Talk with us today to see if its the right fit for you.
          </p>
          <br></br>
          <button><a href="/quoteForm">Contact Us</a></button>
          <hr/>
          <br></br>

          <h4 id="parcel"> Parcel Shipments</h4>
          <p>If you are a retailer or ecommerce store, sending with UPS, FedEx or the like, we can help you get
            a better rate and contract. With our team of negotiators, we can secure a contract you'll be happy about.
          </p>
          <br></br>
          <button><a href="/quoteForm">Contact Us</a></button>
          <hr/>
          <br></br>

        </section>
    </article>
  )
}

