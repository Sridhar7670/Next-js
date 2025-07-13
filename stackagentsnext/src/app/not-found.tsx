import React from 'react'
import styles from './error.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFoundBackground}>
      <div className={styles.container}>
        <h1>Oops! Page Not Found</h1>
        <p>Sorry, this page does not exist.</p>
      </div>
    </div>
  )
}
