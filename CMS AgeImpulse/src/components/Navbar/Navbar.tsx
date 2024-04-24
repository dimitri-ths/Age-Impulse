'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/AgeImpulse.png'

import './Navbar.css'
import { FIREBASE_AUTH } from '@/services/FirebaseConfig'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const auth = FIREBASE_AUTH
  const router = useRouter()

  const signOut = async () => {
    try {
      auth.signOut()
      console.log('SignOut function is called')
      router.push('/')
    } catch (error) {
      console.log(error)
      alert('Sign Out failed: ' + error.message)
    }
  }

  return (
    <div>
      <title>AgeImpulse</title>
      <div className="navbar">
        <div className="link-pages">
          <Link href="/Home" className="link home">
            <Image src={logo} alt="logo" width={50} height={50} />
          </Link>
          <Link href="/Utilisateurs" className="link aboutme">
            Utilisateurs
          </Link>
          <Link href="/Capteurs" className="link myprojects">
            Capteurs
          </Link>
          <Link href="/Commandes" className="link myprojects">
            Commandes
          </Link>

          <button className="buttonlogout" onClick={signOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
