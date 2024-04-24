import Link from 'next/link'
import './UserInfo.css'

const UserInfo = (user: any) => {
  const data = user.user

  return (
    <>
      {/* <Link href={`/DetailsCapteur/${capt.capteurID}`}> */}
      <tr>
        <th className="th" scope="row">
          {data.uid}
        </th>
        <td>{data.email}</td>
        <td>{data.role}</td>
      </tr>
      {/* </Link> */}
    </>
  )
}

export default UserInfo
