# how to handle form in react
```jsx
import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const App = () => {
  const [formdata,setformdata] = useState({name:"saddam" ,Email:"mdnazmulhahan@gmail.com", City:"Rangpur",Gender:"Male"})

  let vewName,vewEmail,vewCity,vewGender,profile_div = useRef();

  
  const form_data = (property,value)=>{
    setformdata(prevOBJ =>({
      ...prevOBJ,
      [property]: value
    }))
    // let name = JSON.stringify(formdata.name);
    // let email = JSON.stringify(formdata.Email);
    // let city = JSON.stringify(formdata.City);
    // let gender = JSON.stringify(formdata.Gender);

    // vewName.innerText = name;
    // vewEmail.innerText = email;
    // vewCity.innerText = city;
    // vewGender.innerText = gender;

  }
  


//  const [isSubmit,setSubmit] = useState(false);
  
 let name = JSON.stringify(formdata.name);
 let email = JSON.stringify(formdata.Email);
 let city = JSON.stringify(formdata.City);
 let gender = JSON.stringify(formdata.Gender);


  const submitData = (e)=>{
    e.preventDefault();
    // setSubmit(true);
    vewName.innerText = name;
    vewEmail.innerText = email;
    vewCity.innerText = city;
    vewGender.innerText = gender;
    profile_div.classList.remove("d-none");
  }


  
  
  return (
    <div>
       <Form className='container mt-5' onSubmit={submitData}>
        <h1>Create your acount</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={(e)=>{form_data('name',e.target.value)}} value={formdata.name} name='Name' placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" onChange={(e)=>{form_data('Email',e.target.value)}} value={formdata.Email} name='Email' placeholder="name@example.com" />
      </Form.Group>
      <Form.Select onChange={(e)=>{form_data('City',e.target.value)}} name='City' value={formdata.City} aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="Natore">Natore</option>
        <option value="Rangpur">Rangpur</option>
        <option value="Rajsahi">rajsahi</option>
        <option value="Borisahl">Borishal</option>
     </Form.Select>
     
     {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 mt-3">
          <Form.Check
            inline
            label="Male"
            name="Male"
            type={type}
            id={`inline-${type}-1`}
            checked = {formdata.Gender==='Male'}
            onChange = {(e)=>{form_data('Gender',e.target.value)}}
            value="Male"
          />
          <Form.Check
            inline
            label="Female"
            name="Female"
            type={type}
            id={`inline-${type}-2`}
            onChange={(e)=>{form_data('Gender',e.target.value)}}
            checked = {formdata.Gender==='Female'}
            value="Female"
          />

            <button className='btn btn-primary w-100 mt-3 mb-5' type='submit'>Submit</button>

        </div>
      ))}



          <div className="profilevew d-none" ref={(e)=>profile_div=e}>
            <Card className="text-center">
                <Card.Header>Profile</Card.Header>
                <Card.Body className='text-left'>
                  <div className="name"><p>Name: <span ref={(e)=>vewName=e}></span></p></div>
                  <div className="name"><p>Email: <span ref={(e)=>vewEmail=e}></span></p></div>
                  <div className="name"><p>city: <span ref={(e)=>vewCity=e}></span></p></div>
                  <div className="name"><p>Gender: <span ref={(e)=>vewGender=e}></span></p></div>
                </Card.Body>
            </Card>
          </div>  
    </Form>
    </div>
  );
};

export default App;
```