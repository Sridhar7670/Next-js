'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import styles from './login.module.css'

function Login() {
//   const { setActive } = useContext(Context)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [temp, setTemp] = useState({ _id: '', password: '' })
  const [errors, setErrors] = useState<{ _id?: string; password?: string }>({})
  const router = useRouter()

  const validate = () => {
    const errs: { _id?: string; password?: string } = {}
    if (!temp._id.includes('@')) {
      errs._id = 'Invalid email format'
    }
    if (temp.password.length < 6) {
      errs.password = 'Password must be at least 6 characters'
    }
    return errs
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemp({ ...temp, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

try {
  const res = await axios.post(`https://somebackendapibySeniors.com/login`, temp)
  setMessage(res.data.msg)

  if (res.data.token) {
    Cookies.set('token', JSON.stringify(res.data.token), { expires: 1 })
    Cookies.set('name', JSON.stringify(res.data.name), { expires: 1 })
    setIsSuccess(true)

    setTimeout(() => {
      router.push('/')
    }, 1000)
  }
} catch (err) {
  const error = err as AxiosError<{ msg: string }>
  setMessage(error.response?.data?.msg || 'Login failed')
  setIsSuccess(false)
}

  }

  return (
    <div className={styles.LoginContainerGp}>
      <div className={styles.loginContainer}>
      <h1 className={styles.heading}>Please Login</h1>

      <label htmlFor="email" className={styles.label}>Email ID</label>
      <input
        type="text"
        name="_id"
        id="email"
        value={temp._id}
        onChange={handleChange}
        placeholder="Enter Mail ID"
        className={styles.input}
      />
      {errors._id && <p className={styles.error}>{errors._id}</p>}

      <label htmlFor="password" className={styles.label}>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={temp.password}
        onChange={handleChange}
        placeholder="Enter Password"
        className={styles.input}
      />
      {errors.password && <p className={styles.error}>{errors.password}</p>}

      {message && (
        <div className={isSuccess ? styles.successMsg : styles.errorMsg}>
          {message}
        </div>
      )}

      <button onClick={handleLogin} className={styles.button}>Login</button>

      <p className={styles.text}>
        Don’t have an account?{' '}
        <Link href="/register" className={styles.link}>Sign up</Link>
      </p>

      <p className={styles.text}>
        <Link href="/forgot-password" className={styles.link}>Forgot Password?</Link>
      </p>
    </div>
    </div>
  )
}

export default Login
