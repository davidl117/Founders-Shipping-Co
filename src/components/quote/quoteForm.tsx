import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./quoteForm.css"
import states from "./states.json"
import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser"

export default  function contactForm() {

const [validated, setValidated] = useState(false);

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nx5586o', 
                     "template_7ksyypc", 
                     form.current,
                     "kVw8CQFQRx8X54hXz")
    .then((result) => {
        console.log("message sent");
     }, (error) => {
            console.log(error);
    });
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      e.preventDefault();
      e.stopPropagation();
      sendEmail
    }
    setValidated(true);
  };

  const styles = {
    display: validated ? "none" : "",
    backgroundSize: validated ? "cover" : "",
}

  // Lists states in options field
    const stateMap = states.map((state, id) => 
            <option value={id} key={id}>{state.name}</option>)
    
    return (
    <Form 
      validated={validated} 
      onSubmit={handleSubmit}
      className='contactForm-style'
      >
      <h1>{validated ? "Form Submitted" : "Contact us for a Quote" }</h1>
      <div style={styles}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Control
           type="name" 
           name="user_name"
           placeholder="Enter full name" 
           required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCompany">
          {/* <Form.Label>Company</Form.Label> */}
          <Form.Control type="name" placeholder="Company Name" required />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCompany">
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control type="name" placeholder="Email Address" required/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCompany">
          {/* <Form.Label>Phone</Form.Label> */}
          <Form.Control type="name" placeholder="Phone number" required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        {/* <Form.Label>Shipping Address</Form.Label> */}
        <Form.Control placeholder="Shipping Address" required/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control placeholder="City" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Select defaultValue="Choose..." required>
            <option>Choose...</option>
            {stateMap}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Control placeholder="Zip Code" required/>
        </Form.Group>
      </Row>
      
      <Row className="Quote-questions-container mb-3">
      <Form.Group className='Quote-questions mb-3' as={Col} controlId="formGridState">
          <Form.Select defaultValue="Service" >
            <option>Service</option>
            <option>LTL</option>
            <option>Expedited</option>
            <option>Parcel</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='Quote-questions mb-3' as={Col} controlId="formGridState">
          <Form.Select defaultValue="Hazardous" required>
            <option>Hazardous</option>
            <option>Non-Hazardous</option>
            {/* <option>No</option> */}
          </Form.Select>
        </Form.Group>

        <Form.Group className='Quote-questions mb-3' as={Col} controlId="formGridState">
          <Form.Control placeholder="Commodity being shipped" required/>
        </Form.Group>

        <Form.Group className='Quote-questions mb-3' as={Col} controlId="formGridCity">
          <Form.Control placeholder="Zip code being shipped to:" required/>
        </Form.Group>

        <Form.Group className='Quote-questions mb-3' as={Col} controlId="formGridState">
          <Form.Select defaultValue="Packaging Type..." required> 
            {/* need to add placeholder value for first option so as it can't be selected */}
            <option>Packaging Type</option>
            <option>Pallet</option>
            <option>Boxes</option>
            <option>Loose/Bulk Items</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='Quote-questions mb-3' as={Col} controlId="formGridZip">
          <Form.Control placeholder="Dimensions: L x W x H" required/>
        </Form.Group>

        <Form.Group className='Quote-questions mb-3' as={Col} controlId="formGridZip">
          <Form.Control placeholder="Weight lbs" required/>
        </Form.Group>
      </Row>


    <div className="quoteForm-submit-btn">   
      {/* <Form.Group className="mb-3" id="formGridCheckbox" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
    </div>
    </Form>
)
}

