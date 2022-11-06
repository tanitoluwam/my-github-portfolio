import React from 'react'

export const Button = ({extraClass , children}) => {
  return (
   <button className={`px-2 py-2 rounded-lg text-white ${extraClass}`}>
     {children}
   </button>
  )
}
