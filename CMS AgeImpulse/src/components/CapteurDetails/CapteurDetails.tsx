import { updateCapteur } from '@/services/FirebaseConfig'
import './CapteurDetails.css'

const CapteurDetails = (capteur: any) => {
  const capt = capteur.capteur
  console.log(capt.active)
  return (
    <div>
      <button
        className="button-update"
        onClick={() =>
          updateCapteur(
            capt.active,
            capt.capteurID,
            capt.manufacturing,
            capt.creation_date,
            capt.exp_date,
            capt.batch,
            capt.serial_nb,
            capt.fw_version,
            capt.hw_version,
            capt.livraison?.ShippingService,
            capt.livraison?.ShippingDate,
            capt.livraison?.ReceivedDate,
            capt.livraison?.StockagePlace
          )
        }
      >
        Activer / Désactiver le capteur
      </button>
      <div className="capteur-details-container">
        <div className="details-column">
          <h2 className="details-section">Informations techniques</h2>
          <div className="details-item">
            <span className="details-label">Activé :</span>
            <span>{String(capt.active)}</span>
          </div>
          <div className="details-item">
            <span className="details-label">ID :</span>
            <span>{capt.capteurID}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Manufacturier :</span>
            <span>{capt.manufacturing}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Lot :</span>
            <span>{capt.batch}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Numéro de série :</span>
            <span>{capt.serial_nb}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Date de création :</span>
            <span>{capt.creation_date}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Date d'expiration :</span>
            <span>{capt.exp_date}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Firmware Version :</span>
            <span>{capt.fw_version}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Hardware Version :</span>
            <span>{capt.hw_version}</span>
          </div>
          <h2 className="details-section">Informations de Livraison</h2>
          <div className="details-item">
            <span className="details-label">Lieu de Stockage :</span>
            <span>{capt.livraison?.StockagePlace}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Entreprise de Livraison :</span>
            <span>{capt.livraison?.ShippingService}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Date de réception de l'entreprise de livraison :</span>
            <span>{capt.livraison?.ReceivedDate}</span>
          </div>
          <div className="details-item">
            <span className="details-label">Date d'envoi de livraison :</span>
            <span>{capt.livraison?.ShippingDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapteurDetails
