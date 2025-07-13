'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import styles from './register.module.css'

type FormData = {
  _id: string
  password: string
  name: string
}

type Errors = Partial<Record<keyof FormData, string>>

export default function Register() {
  const [temp, setTemp] = useState<FormData>({ _id: '', password: '', name: '' })
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemp({ ...temp, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    const newErrors: Errors = {}

    if (!temp._id.trim()) {
      newErrors._id = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(temp._id)) {
      newErrors._id = 'Invalid email format'
    }

    if (!temp.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!temp.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (temp.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleRegister = async () => {
    if (!validateForm()) return

    try {
      const res = await axios.post('https://backend.com/register', temp)
      setMessage(res.data.msg)
      setIsError(false)
      setErrors({})
    } catch (err: any) {
      if (err.response?.data?.msg) {
        setMessage(err.response.data.msg)
      } else {
        setMessage('Something went wrong')
      }
      setIsError(true)
    }
  }

  return (
   <div className={styles.regGp}>
     <div className={styles.register}>
      <h1 className={styles.h1}>Please Register</h1>

      <label htmlFor="register-email" className={styles.labelRegister}>Email ID</label>
      <input
        type="text"
        id="register-email"
        placeholder="Enter mail ID"
        onChange={handleChange}
        name="_id"
        value={temp._id}
        className={styles.input}
      />
      {errors._id && <p className={styles.errorLogin}>{errors._id}</p>}

      <label htmlFor="register-name" className={styles.labelRegister}>Name</label>
      <input
        type="text"
        id="register-name"
        placeholder="Enter name"
        onChange={handleChange}
        name="name"
        value={temp.name}
        className={styles.input}
      />
      {errors.name && <p className={styles.errorLogin}>{errors.name}</p>}

      <label htmlFor="register-password" className={styles.labelRegister}>Password</label>
      <input
        type="password"
        id="register-password"
        placeholder="Enter password"
        onChange={handleChange}
        name="password"
        value={temp.password}
        className={styles.input}
      />
      {errors.password && <p className={styles.errorLogin}>{errors.password}</p>}

      {message && (
        <div className={isError ? styles.errorMsg : styles.successMsg}>{message}</div>
      )}

      <button onClick={handleRegister} className={styles.button}>Register</button>

      <p className={styles.loginText}>
        Already have an account?{' '}
        <Link href="/login" className={styles.loginLink}>Login</Link>
      </p>
    </div>
   </div>
  )
}
