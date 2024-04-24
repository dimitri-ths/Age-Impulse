'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { FIREBASE_AUTH, addNewCommande, readCapteursData } from '@/services/FirebaseConfig'
import { useEffect, useState } from 'react'
import './Commandes.css'
import Navbar from '@/components/Navbar/Navbar'
import { useRouter } from 'next/navigation'

import TableauCapteurs from '@/components/TableauCapteurs/TableauCapteurs'
import TableauCommandes from '@/components/TableauCommandes/TableauCommandes'
import Link from 'next/link'

export default function Commandes() {
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

      <TableauCommandes />
      <div className="right">
        <Link href="AddCommand" className="button-add" style={{ textDecoration: 'none' }}>
          Ajouter une nouvelle commande
        </Link>
      </div>
    </div>
  )
}
