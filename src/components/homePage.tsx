import Hero from "./homepage/hero/hero"
import ServiceList from "./homepage/serviceList/serviceList"
import HomeAbout from "./homepage/about/homeabout"

function homePage() {
  return (
    <main>
        <div  className="hero-image">
            <Hero/>
        </div>
        <div className="service-list-position">
            <ServiceList/>
            <HomeAbout/>
        </div>
    </main>
)
}

export default homePage