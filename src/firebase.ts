import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDzfCePDh37CeaJ3VFax-AfvLSwCyvd-J8",
  authDomain: "tradevue.firebaseapp.com",
  databaseURL: "https://tradevue-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tradevue",
  storageBucket: "tradevue.appspot.com",
  messagingSenderId: "467024671519",
  appId: "1:467024671519:web:30e369ce6c7ec7cd8c362a"
})

const db = getDatabase(firebaseApp)
export const usuariosRef = ref(db, 'usuarios')
export const empresasRef = ref(db, 'empresas')
export const acoesCompradasRef = ref(db, 'acoesCompradas')
