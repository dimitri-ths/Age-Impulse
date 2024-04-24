'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { FIREBASE_AUTH, readCapteursData } from '@/services/FirebaseConfig'
import { useEffect, useState } from 'react'

import Navbar from '@/components/Navbar/Navbar'
import { useRouter } from 'next/navigation'
import TableauUsers from '@/components/TableauUsers/TableauUsers'

export default function Utilisateurs() {
  const router = useRouter()
  // const auth = FIREBASE_AUTH
  // const user = auth.currentUser
  // if (user?.displayName !== 'admin') {
  //   router.push('/')
  //   alert("You don't have the access to this page")
  // }

  const [test, setTest]: any[] = useState()

  useEffect(() => {
    readCapteursData().then((response) => {
      setTest(response)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <TableauUsers />
    </div>
  )
}
