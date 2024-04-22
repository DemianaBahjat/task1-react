import React from 'react'
import './Skills.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default function Skills() {
  return (
    <>
        <div className='skills '>
            <div className=' main text-center  '>
                <h1>Skills</h1>
                <p className='w-75 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci fuga hic id ratione dolore harum aperiam repellendus corporis autem cum odio asperiores ut suscipit, voluptatibus vel quis molestiae voluptates at iste! Voluptates fugit dolorem, inventore dolores cupiditate quod eum voluptas incidunt possimus iusto soluta nam similique illum voluptatibus qui!</p>
            </div>

            <div item className='d-flex justify-content-center align-items-center m-5'>
                <div className='m-5'>
                    <h2>My Focus</h2>
                    <hr/>
                    <p> UI/UX Design</p>
                    <p>Resposnive Design</p>
                    <p>Web design</p>
                    <p> mobile design</p>
                </div>
                <div  className='form'>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">HTML</InputGroup.Text>
          <Form.Control
          aria-label="HTML"
          aria-describedby="basic-addon1"
         />
       </InputGroup>

       <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">CSS</InputGroup.Text>
          <Form.Control
          aria-label="HTML"
          aria-describedby="basic-addon1"
         />
       </InputGroup>
               

       <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">JAVASCRIPT</InputGroup.Text>
          <Form.Control
          aria-label="HTML"
          aria-describedby="basic-addon1"
         />
       </InputGroup>

       <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">NODE JS</InputGroup.Text>
          <Form.Control
          aria-label="HTML"
          aria-describedby="basic-addon1"
         />
       </InputGroup>
       

       <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">NEXT JS</InputGroup.Text>
          <Form.Control
          aria-label="HTML"
          aria-describedby="basic-addon1"
         />
       </InputGroup>


       <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">SOURCE CONTROL</InputGroup.Text>
          <Form.Control
          aria-label="HTML"
          aria-describedby="basic-addon1"
         />
       </InputGroup>

                </div>
            </div>

        </div>
    </>
  )
}
