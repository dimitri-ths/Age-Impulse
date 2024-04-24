'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { FIREBASE_AUTH, readCapteurData, readCapteursData } from '@/services/FirebaseConfig'
import { useEffect, useState } from 'react'
import CapteurData from '@/components/CapteurDataButton/CapteurDataButton'
import Navbar from '@/components/Navbar/Navbar'
import { useRouter } from 'next/navigation'
import CapteurDetails from '@/components/CapteurDetails/CapteurDetails'

export default function DetailsCapteur({ params }: { params: { id: string } }) {
  const router = useRouter()
  // const auth = FIREBASE_AUTH
  // const user = auth.currentUser
  // if (user?.displayName !== 'admin') {
  //   router.push('/')
  //   alert("You don't have the access to this page")
  // }
  console.log('erhjbedzjidfdbgdf', params.id)
  const { id } = params

  const [infoCapteur, setInfoCapteur]: any[] = useState()

  useEffect(() => {
    readCapteurData(id).then((response) => {
      setInfoCapteur(response)
    })
  }, [])

  return (
    <div>
      <Navbar />
      {infoCapteur?.map((data: any) => {
        return (
          <div key="params.id">
            <CapteurDetails capteur={data} />
          </div>
        )
      })}
    </div>
  )
}
