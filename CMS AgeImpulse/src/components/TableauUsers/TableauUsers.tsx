'use client'
import Image from 'next/image'
import './TableauUsers.css'
import { FIREBASE_AUTH, readCapteursData, readUsersData } from '@/services/FirebaseConfig'
import { useEffect, useState } from 'react'
import UserInfo from '../UserInfo/UserInfo'

const TableauUsers = () => {
  // const router = useRouter()
  // const auth = FIREBASE_AUTH
  // const user = auth.currentUser
  // if (user?.displayName !== 'admin') {
  //   router.push('/')
  //   alert("You don't have the access to this page")
  // }

  const [listeCapteurs, setListeCapteurs]: any[] = useState()

  useEffect(() => {
    readUsersData().then((response) => {
      setListeCapteurs(response)
    })
  }, [])

  return (
    <div>
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th>UID</th>
              <th>Email</th>
              <th>Role</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {listeCapteurs &&
              listeCapteurs?.map((data: any) => {
                console.log('dataaa', data)
                return <UserInfo user={data} />
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableauUsers
