'use client'
import Image from 'next/image'
import './TableauCapteursHome.css'
import { FIREBASE_AUTH, readCapteursData } from '@/services/FirebaseConfig'
import { useEffect, useState } from 'react'
import CapteurDataRow from '../CapteurDataRow/CapteurDataRow'
import CapteurDataRowHome from '../CapteurDataRowHome/CapteurDataRowHome'

const TableauCapteursHome = () => {
  // const router = useRouter()
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
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Lot</th>
              <th>Date de création</th>
              <th>Date d'expiration</th>
              <th>Firmware Version</th>
              <th>Hardware Version</th>
            </tr>
          </thead>
          <tbody>
            {listeCapteurs &&
              listeCapteurs?.map((data: any) => {
                console.log('dataaa', data)
                return <CapteurDataRowHome capteur={data} />
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableauCapteursHome
