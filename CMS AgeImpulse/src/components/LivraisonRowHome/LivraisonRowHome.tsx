const LivraisonRowHome = (data: any) => {
  const commande = data.data

  return (
    <tbody>
      <tr>
        <th>{commande.num_commande}</th>
        <td>{commande.nb_capteurs}</td>
        <td>{commande.client}</td>
      </tr>
    </tbody>
  )
}

export default LivraisonRowHome
