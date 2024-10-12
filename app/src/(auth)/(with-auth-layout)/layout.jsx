import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
        <h2>Inner Layout</h2>
      {children}
    </div>
  )
}

export default AuthLayout
