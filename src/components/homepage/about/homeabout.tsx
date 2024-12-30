import "./homeabout.css"

export default function homeabout() {
  return (
    <article>
        <h2 className="about-h2">About Our Company</h2>
        <div className="home-about-section">
            <img style={{width:"400px"}} src="\claudio-schwarz-a85IYeAXgxU-unsplash.jpg"/>
            <div className="home-about-section-writing">
                <h3>
                Driven by Excellence
                </h3>
                <p>At Founders Shipping Co, we believe in delivering more than just
                     goods – we deliver trust, reliability, and efficiency.</p>
            </div>
        </div>
        <div className="double-pic-align">    
            <article>
                <img src="jan-kopriva-Nvo5xeoccVg-unsplash.jpg"/>
                <h3>Customer-Centered Approach</h3>
                <p>Your satisfaction is our priority. We’re committed to tailoring our services
                     to meet your unique logistics needs.</p>
            </article>

            <article>
                <img src="\norbert-kundrak-shMymEhk86g-unsplash.jpg"/>
                <h3>A Team You Can Trust</h3>
                <p style={{paddingBottom:"70px"}}>With a team that is dedicated and has years of experience,
                    we’re here to make your logistics seamless and stress-free.</p>
            </article>
        </div>
    </article>
  )
}

