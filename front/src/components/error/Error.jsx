import React from 'react'
import styles from './error.module.css'
import imgError from '../../assets/404.jpg'

export default function Error() {
  return (
    <div className={styles.container} >
      <img src={imgError} alt="" />
    </div>
  )
}
