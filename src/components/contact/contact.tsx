import "./contact.css"
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import { useState,useRef} from "react";
import emailjs from "@emailjs/browser";

export default function contact() {

  const [validated, setValidated] = useState(false);
  const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  if (form.current) {
    e.preventDefault();
    emailjs.sendForm('service_nx5586o', 
                     "template_2er10ud", 
                     form.current, {publicKey:"kVw8CQFQRx8X54hXz"})
    .then(() => {
        console.log("message sent");
     }, (error) => {
            console.log("failed " + error);
    });
  } 
}

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      e.preventDefault();
      e.stopPropagation();
      sendEmail(e)
    }
    setValidated(true);
  };

  
  const styles = {
    display: validated ? "none" : ""
}

  
  return (
    <Form ref={form} validated={validated} onSubmit={handleSubmit} className="contact-form-container">
      <h2 className="contactForm-h2">{validated ? "We'll get back to you!": "We would love to talk with you. Fill out the form and we'll get in touch ASAP."}
        <br></br><br></br><b style={{color:"#2F4858",fontWeight:"500"}}>
          Want to get in touch about a shipment? Tell us about it <i>
            <a href="/quoteForm">here</a>
            </i>
            </b>
      </h2>
      <div className="styled-contactForm" style={styles}>
        <h2 style={{textAlign:"center",color:"white", marginBottom:'1em'}}>Contact Us</h2>

      <InputGroup>
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control
           aria-label="First name"
           name="name"
           required
           />
      </InputGroup>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
             type="email" 
             name="email"
             placeholder="name@example.com"
             required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>What's on your mind</Form.Label>
          <Form.Control as="textarea" rows={6} name="message" />
      </Form.Group>
      
      <Button style={{backgroundColor:"#ECE278",color:"black"}} type="submit">Submit form</Button>
      </div>
    </Form>
  )
}

