import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>{params.userid}</h1>
    </div>
  )
}

export default page
