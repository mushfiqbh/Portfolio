import React from 'react';
import styles from '@/app/styles/profile.module.css'


export function generateMetadata({ params }) {
  return {
    title: "Profile Page" + params,
    description: "This is description",
  };
}


const page = () => {
  return (
    <div className={styles.profile}>
      <b className='bg-red-500'>Wind</b>
      userlist
    </div>
  )
}

export default page
