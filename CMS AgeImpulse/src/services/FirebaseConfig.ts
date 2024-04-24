// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, set, get, child, onValue } from 'firebase/database'
import { activate } from 'firebase/remote-config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '*******************************',
  authDomain: 'codecamp-ageimpulse.firebaseapp.com',
  databaseURL: 'https://codecamp-ageimpulse-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'codecamp-ageimpulse',
  storageBucket: 'codecamp-ageimpulse.appspot.com',
  messagingSenderId: '1066482912760',
  appId: '1:1066482912760:web:f09ea812e9b394c52cda0d'
}

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)

export function addCapteurData(
  capteurID,
  manufacturing,
  creation_date,
  exp_date,
  batch,
  serial_nb,
  fw_version,
  hw_version
) {
  const db = getDatabase()
  const reference = ref(db, 'capteurs/' + capteurID)

  set(reference, {
    manufacturing: manufacturing,
    capteurID: capteurID,
    creation_date: creation_date,
    exp_date: exp_date,
    batch: batch,
    serial_nb: serial_nb,
    fw_version: fw_version,
    hw_version: hw_version,
    livraison: null
  })
}

export function addLivraisonData(capteurID, StockagePlace, ReceivedDate, ShippingDate, ShippingService) {
  const db = getDatabase()
  const reference = ref(db, `capteurs/${capteurID}/livraison`)

  set(reference, {
    StockagePlace: StockagePlace,
    ReceivedDate: ReceivedDate,
    ShippingDate: ShippingDate,
    ShippingService: ShippingService
  })
}

export async function readCapteurData(capteurID: any) {
  const db = getDatabase(FIREBASE_APP)
  const CaptRef = ref(db, '/capteurs/' + capteurID)
  const listeCapt: any[] = []
  await get(CaptRef).then((snapshot) => {
    listeCapt.push(snapshot.val())
  })

  return listeCapt
}

export async function readCapteursData() {
  const db = getDatabase(FIREBASE_APP)
  const CaptRef = ref(db, '/capteurs/')
  const listeCapt: any[] = []
  await get(CaptRef).then((snapshot) => {
    snapshot.forEach((childsnapShot) => {
      listeCapt.push(childsnapShot.val())
    })
  })

  return listeCapt
}

export async function readUsersData() {
  const db = getDatabase(FIREBASE_APP)
  const CaptRef = ref(db, '/users/')
  const listeCapt: any[] = []
  await get(CaptRef).then((snapshot) => {
    snapshot.forEach((childsnapShot) => {
      listeCapt.push(childsnapShot.val())
    })
  })

  return listeCapt
}

export function addNewCommande(num_commande, client, nb_capteurs, adresse, email, tel) {
  const db = getDatabase()
  const reference = ref(db, `commandes/${num_commande}`)

  set(reference, {
    num_commande: num_commande,
    client: client,
    nb_capteurs: nb_capteurs,
    adresse: adresse,
    email: email,
    tel: tel
  })
}

export async function readAllCommandes() {
  const db = getDatabase(FIREBASE_APP)
  const CaptRef = ref(db, '/commandes/')
  const listeCapt: any[] = []
  await get(CaptRef).then((snapshot) => {
    snapshot.forEach((childsnapShot) => {
      listeCapt.push(childsnapShot.val())
    })
  })

  return listeCapt
}

export function updateCapteur(
  active,
  capteurID,
  manufacturing,
  creation_date,
  exp_date,
  batch,
  serial_nb,
  fw_version,
  hw_version,
  ShippingService,
  ShippingDate,
  ReceivedDate,
  StockagePlace
) {
  const db = getDatabase()
  const reference = ref(db, 'capteurs/' + capteurID)

  set(reference, {
    active: !active,
    capteurID: capteurID,
    manufacturing: manufacturing,
    creation_date: creation_date,
    exp_date: exp_date,
    batch: batch,
    serial_nb: serial_nb,
    fw_version: fw_version,
    hw_version: hw_version,
    livraison: {
      ShippingDate: ShippingDate,
      ShippingService: ShippingService,
      ReceivedDate: ReceivedDate,
      StockagePlace: StockagePlace
    }
  })
  alert('Le capteur a bien été modifié')
}
