import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDzfCePDh37CeaJ3VFax-AfvLSwCyvd-J8",
  authDomain: "tradevue.firebaseapp.com",
  databaseURL: "https://tradevue-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tradevue",
  storageBucket: "tradevue.appspot.com",
  messagingSenderId: "467024671519",
  appId: "1:467024671519:web:30e369ce6c7ec7cd8c362a"
})

const db = getFirestore(firebaseApp)

export const usuariosRef = collection(db, 'usuarios')
export const empresasRef = collection(db, 'empresas')
export const acoesCompradasRef = collection(db, 'acoesCompradas')
