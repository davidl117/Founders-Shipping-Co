import { Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import "./hero.css"

export default function Hero() {
    return (
        <Container>    
            <div className="hero-styles">
            <h2 className="hero-h2">We provide local sprinter van shipping services
                 in the Volusia County area and beyond. 
                We are <span className="hero-span">dedicated</span> to you 
            </h2>
            <h5 className="hero-paragraph">We offer several different services to help you 
                and your business thrive. Feel at ease working with us.
            </h5>
            <br></br>
            <Button className="hero-button" href="/quoteForm">Free Quote</Button>
            </div>
        </Container>
    )
}
