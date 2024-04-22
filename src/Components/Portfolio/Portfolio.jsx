import React from 'react'
import './Portfolio.css'
import Card from '../Card/Card'
export default function Portfolio() {

  return (
    <>
            

      <div className='container d-flex justify-content-center align-items-center mb-5 '>
        <h1>Portfolio</h1>
        <div className='row'>
        <div className='d-flex'>
        <Card title={'web design'} />
         <Card title={'mobile app'}/>
         <Card  title={'LOGO DESIGN'}/>
        </div>

         <div className='d-flex'>
         <Card title={'WEB APPLICATION DEVELOPMENT'}/>
         <Card title={'MOBILE APPLICATION DEVELOPMENT'}/>
         <Card title={'PWD DEVELOPMENT'}/>
         </div>
        </div>
      </div>
    </>
  )
}
