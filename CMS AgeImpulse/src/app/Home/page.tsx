'use client'
import Image from 'next/image'
import './Home.css'
import { FIREBASE_AUTH, readCapteursData } from '@/services/FirebaseConfig'
import { useEffect, useState } from 'react'
import CapteurData from '@/components/CapteurDataButton/CapteurDataButton'
import Navbar from '@/components/Navbar/Navbar'
import { useRouter } from 'next/navigation'
import TableauCommandes from '@/components/TableauCommandes/TableauCommandesHome'
import TableauCapteurs from '@/components/TableauCapteurs/TableauCapteurs'
import TableauCapteursHome from '@/components/TableauCapteursHome/TableauCapteursHome'
import TableauCommandesHome from '@/components/TableauCommandesHome/TableauCommandesHome'

export default function Home() {
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
      <div className="block">
        <div className="box">
          <TableauCapteursHome />
        </div>

        <div>
          <TableauCommandesHome />
        </div>
      </div>
    </div>
  )
}
