'use client'
import Navbar from '@/components/Navbar/Navbar'
import { FIREBASE_AUTH, addNewCommande } from '@/services/FirebaseConfig'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import './AddCommand.css'

export default function AddCommand() {
  const router = useRouter()
  // const auth = FIREBASE_AUTH
  // const user = auth.currentUser
  // if (user?.displayName !== 'admin') {
  //   router.push('/')
  //   alert("You don't have the access to this page")
  // }

  const [formData, setFormData] = useState({
    numeroCommande: '',
    nombreCapteurs: '',
    client: '',
    email: '',
    adresse: '',
    telephone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ajouter ici la logique pour traiter les données du formulaire, par exemple envoyer les données au backend
    console.log('Données envoyées :', formData)
    addNewCommande(
      formData.numeroCommande,
      formData.client,
      formData.nombreCapteurs,
      formData.adresse,
      formData.email,
      formData.telephone
    )

    setFormData({
      numeroCommande: '',
      nombreCapteurs: '',
      client: '',
      email: '',
      adresse: '',
      telephone: ''
    })
    router.push('/Commandes')
  }

  return (
    <div>
      <Navbar />
      <div className="container-add">
        <div className="box-add">
          <form onSubmit={handleSubmit} className="form">
            <div className="inputGroup">
              <label htmlFor="numeroCommande">Numéro de commande :</label>
              <input
                type="text"
                id="numeroCommande"
                name="numeroCommande"
                value={formData.numeroCommande}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="nombreCapteurs">Nombre de capteurs :</label>
              <input
                type="number"
                id="nombreCapteurs"
                name="nombreCapteurs"
                value={formData.nombreCapteurs}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="client">Client :</label>
              <input
                type="text"
                id="client"
                name="client"
                value={formData.client}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="Email">Email :</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="adresse">Adresse :</label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label htmlFor="telephone">Téléphone :</label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="input"
              />
            </div>
            <button type="submit" className="button-add">
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
