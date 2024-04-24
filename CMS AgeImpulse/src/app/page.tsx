'use client'
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { FIREBASE_AUTH } from '@/services/FirebaseConfig'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response.user.displayName !== 'admin') {
        alert("You don't have the access to LogIn")
        auth.signOut()
        router.push('/')
      } else {
        router.push('/Home')
      }
    } catch (error: any) {
      console.log(error)
      alert('Sign In failed: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="formcontainer">
        <input className="textinput" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="formcontainer">
        <input
          className="textinput"
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <button className="button" onClick={signIn}>
            Login
          </button>
        </>
      )}
    </div>
  )
}
