const LivraisonRow = (data: any) => {
  const commande = data.data

  return (
    <tbody>
      <tr>
        <th>{commande.num_commande}</th>
        <td>{commande.nb_capteurs}</td>
        <td>{commande.client}</td>
        <td>{commande.adresse}</td>
        <td>{commande.email}</td>
        <td>{commande.tel}</td>
      </tr>
    </tbody>
  )
}

export default LivraisonRow
