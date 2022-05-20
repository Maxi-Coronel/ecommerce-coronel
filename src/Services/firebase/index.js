import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where, writeBatch, setDoc } from "firebase/firestore";

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
export const getProducts = async(categoryId) => {
  const productsCol = collection(db, 'products');
  if (categoryId === 'string') {
    return getProductsByCategoryId(productsCol, categoryId);
  } else {
    return getAllProducts(productsCol);
  }
}

// Obtenga la lista de productos de su base de datos
export const getAllProducts = async(collection) => {
  const productSnapshot = await getDocs(collection);
  const productList = productSnapshot.docs.map(doc => doc.data());
  return productList;
}

// Obtenga una lista de productos de su base de datos filtrada por categorias
export const getProductsByCategoryId = async(collection, categoryId) => {
  const q = query(collection, where('category', '===', categoryId))
  const productSnapshot = await getDocs(q);
  const productList = productSnapshot.docs.map(doc => doc.data());
  return productList;
}

// Obtenga un producto de su base de datos
export const getProductById = async(productTitle) => {
  const productById = doc(db, 'products', productTitle);
  const productSnapshot = await getDoc(productById).data()
  return productSnapshot
}

// Cargue nuevos Item desde un Array a su base de datos
export const dataToFirebase = (array) => {
  array.forEach(item => {
    const newItem = doc(collection(db, "products"));
    setDoc(newItem, item)
    .then(() => {
      console.log("Document written with ID: ", newItem.id)
    })
    .catch(err => {
        console.error("Error adding document: ", err);
    });
  });
}