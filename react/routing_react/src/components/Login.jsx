import React from 'react'
import { useParams } from 'react-router-dom'
function Login() {
    const params=useParams()
  return (
    <div >
      Login page
      hey {params.username}
    </div>
  )
}

export default Login
