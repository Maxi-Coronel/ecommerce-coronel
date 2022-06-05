import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQ0eQ1xpv1N0a6NmI9Fec_hCr5XaXtCRg",
    authDomain: "ecommerce-coronel.firebaseapp.com",
    projectId: "ecommerce-coronel",
    storageBucket: "ecommerce-coronel.appspot.com",
    messagingSenderId: "466681335440",
    appId: "1:466681335440:web:1d739ac26718c16504d215"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Desición de lista completa o filtrada
export const getCollection = async(collections, filter, valueFilter) => {
  let collect = collection(db, collections);
  if (valueFilter) {
    collect = query(collect, where(filter, '==', valueFilter))
  }
  const collectionSnapshot = await getDocs(collect);
  const collectionList = collectionSnapshot.docs.map(doc => doc.data());
  return collectionList;
}

// Obtenga un producto de su base de datos
export const getById = async(id, collection) => {
  const objectById = doc(db, collection, id);
  const objectSnapshot = await getDoc(objectById)
  return objectSnapshot.data()
}

// Cargue nuevos Item desde un Array a su base de datos
export const dataToFirebase = (array) => {
  array.forEach(item => {
    const newItem = doc(collection(db, "categories"));
    setDoc(newItem, item)
  });
}

// Poner el id del documento dentro de él
export const actualizar = async() => {
  const productsCol = collection(db, 'products');
  const productSnapshot = await getDocs(productsCol);
  const productList = productSnapshot.docs;
  productList.map(i => {
    return setDoc(doc(db, "products", i.id), {id:i.id}, { merge: true })
  });
}

// Agregar una nueva orden
export const sendOrder = async(user, array, total, date) => {
  await addDoc(collection(db, "orders"), {
    user: user,
    order: array,
    total: total,
    date: date
  });
}

// Agregar un nuevo usuario
export const sendUser = async(user, id) => {
  const collectionRef = collection(db, "users");
  await setDoc(doc(collectionRef, id), {
    user: user });
}