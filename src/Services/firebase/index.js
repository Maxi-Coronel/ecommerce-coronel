import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
  setDoc
} from "firebase/firestore";

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

export const getCollection = async(collections, filter, valueFilter) => {
  let collect = collection(db, collections);
  if (valueFilter) {
    collect = query(collect, where(filter, '==', valueFilter))
  }
  const collectionSnapshot = await getDocs(collect);
  const collectionList = collectionSnapshot.docs.map(doc => doc.data());
  return collectionList;
}

export const getById = async(id, collect) => {
  const objectById = doc(db, collect, id);
  const objectSnapshot = await getDoc(objectById)
  return objectSnapshot.data()
}

export const updateStock = async(productList) => {
  productList.map(item => {
    return setDoc(doc(db, 'products', item.id), {stock:item.stock - item.quantity}, { merge: true })
  });
}

export const sendOrder = async(user, array, total, date) => {
  await addDoc(collection(db, "orders"), {
    user: user,
    order: array,
    total: total,
    date: date
  });
}

export const sendUser = async(user, id) => {
  const collectionRef = collection(db, "users");
  await setDoc(doc(collectionRef, id), {
    user: user });
}