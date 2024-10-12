"use client"
import React from 'react'

const page = () => {
  const n = 11;
  if(n === 10){
    throw new Error("Custom Error")
  }

  return (
    <div>
      reset password
    </div>
  )
}

export default page
