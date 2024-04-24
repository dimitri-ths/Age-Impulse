import Link from 'next/link'
import './CapteurDataRowHome.css'

const CapteurDataRowHome = (capteur: any) => {
  const capt = capteur.capteur

  return (
    <>
      {/* <Link href={`/DetailsCapteur/${capt.capteurID}`}> */}
      <tr>
        <th className="data" scope="row">
          {capt.capteurID}
        </th>
        <td className="data">{capt.batch}</td>
        <td className="data">{capt.creation_date}</td>
        <td className="data">{capt.exp_date}</td>
        <td className="data">{capt.fw_version}</td>
        <td className="data">{capt.hw_version}</td>
      </tr>
      {/* </Link> */}
    </>
  )
}

export default CapteurDataRowHome
