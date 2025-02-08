import React from 'react'

function page({params}) {
  return (
    <div className='bg-gray-800'>
      In blog page of {params.slug}
    </div>
  )
}

export default page