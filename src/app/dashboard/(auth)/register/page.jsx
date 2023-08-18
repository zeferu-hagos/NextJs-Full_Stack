"use client"

import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name, email, password
        })
      });

      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setErr(true)
    }
  }
 
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type='text'className={styles.input} placeholder='User name' required />
        <input type='email'className={styles.input} placeholder='Email' required/>
        <input type='password'className={styles.input} placeholder='Password' required />
        <button className={styles.button}>Register</button>
      </form>
      {err && "somthing want error"}
      <Link href="/dashboard/login">Login with existing account</Link>
    </div>
  )
}

export default Register
