import React from 'react';
import Image from 'next/image';

const notFound = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex'>
        <Image src='/images/room.jpg' width={200} height={200}></Image>
      404  |  Not Found Page
      </div>
    </div>
  )
}

export default notFound
