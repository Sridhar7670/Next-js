"use client"
import React from 'react'
import styles from './error.module.css'
import Image from 'next/image'
import { NextPageContext } from 'next'
interface ErrorProps {
  statusCode?: number
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/error.png"
        alt="Error Image"
        width={300}
        height={300}
        priority
      />
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred`
          : 'An unexpected error occurred'}
      </h1>
      <p>Sorry, something went wrong. Please try again later.</p>
    </div>
  )
}



ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 500
  return { statusCode }
}

export default ErrorPage
