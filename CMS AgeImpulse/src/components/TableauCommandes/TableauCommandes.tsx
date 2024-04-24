'use client'
import Image from 'next/image'
import './TableauCommandes.css'
import { FIREBASE_AUTH, readAllCommandes, readCapteursData, readUsersData } from '@/services/FirebaseConfig'
import { useEffect, useState } from 'react'
import UserInfo from '../UserInfo/UserInfo'
import Livraison from '../LivraisonRowHome/LivraisonRowHome'
import LivraisonRowHome from '../LivraisonRowHome/LivraisonRowHome'
import LivraisonRow from '../LivraisonRow/LivraisonRow'

const TableauCommandes = () => {
  // const router = useRouter()
  // const auth = FIREBASE_AUTH
  // const user = auth.currentUser
  // if (user?.displayName !== 'admin') {
  //   router.push('/')
  //   alert("You don't have the access to this page")
  // }

  const [listeCommandes, setListeCommandes]: any[] = useState()

  useEffect(() => {
    readAllCommandes().then((response) => {
      setListeCommandes(response)
    })
  }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Numéro de Commande</th>
            <th>Nombre de Capteurs Commandés</th>
            <th>Client</th>
            <th>Adresse</th>
            <th>Email</th>
            <th>Téléphone</th>
          </tr>
        </thead>
        {listeCommandes &&
          listeCommandes?.map((data: any) => {
            console.log('dataaa', data)
            return <LivraisonRow data={data} />
          })}
      </table>
    </div>
  )
}

export default TableauCommandes
