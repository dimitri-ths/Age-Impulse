'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { FIREBASE_AUTH, readCapteursData } from '@/services/FirebaseConfig'
import { useEffect, useState } from 'react'
import CapteurData from '@/components/CapteurDataButton/CapteurDataButton'
import Navbar from '@/components/Navbar/Navbar'
import { useRouter } from 'next/navigation'
import CapteurDataButton from '@/components/CapteurDataButton/CapteurDataButton'
import TableauCapteurs from '@/components/TableauCapteurs/TableauCapteurs'

export default function Capteurs() {
  const router = useRouter()
  // const auth = FIREBASE_AUTH
  // const user = auth.currentUser
  // if (user?.displayName !== 'admin') {
  //   router.push('/')
  //   alert("You don't have the access to this page")
  // }

  const [listeCapteurs, setListeCapteurs]: any[] = useState()

  useEffect(() => {
    readCapteursData().then((response) => {
      setListeCapteurs(response)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <TableauCapteurs />
    </div>
  )
}
