import React, { useState, useEffect } from 'react'
import Lista from './Lista.json'


const Categories = () => {


  return (
    <>
      <ul>
        {Lista.map((el, i) => (
          <li key={`lista${i}`}>
            {el.nombre}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Categories