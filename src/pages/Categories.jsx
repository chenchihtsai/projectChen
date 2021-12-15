import React, { useState, useEffect } from 'react'
import Lista from './Lista.json'
import "../style/categories.css"


const Categories = () => {


  return (
    <>
      <ul>
        {Lista.map((el, i) => (
          <li key={`lista${i}`} className='textCategory'>
            {el.nombre}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Categories