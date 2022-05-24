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
export const getProducts = async(categoryId) => {
  const productsCol = collection(db, 'products');
  if (typeof(categoryId) === 'string') {
    return getProductsByCategoryId(productsCol, categoryId);
  } else {
    return getAllProducts(productsCol);
  }
}

// Obtenga categorias
export const getCategories = async() => {
  const categoriesCol = collection(db, 'categories');
  const productSnapshot = await getDocs(categoriesCol);
  const productList = productSnapshot.docs.map(doc => doc.data());
  return productList;
}

// Obtenga la lista de productos de su base de datos
export const getAllProducts = async(collection) => {
  const productSnapshot = await getDocs(collection);
  const productList = productSnapshot.docs.map(doc => doc.data());
  return productList;
}

// Obtenga una lista de productos de su base de datos filtrada por categorias
export const getProductsByCategoryId = async(collection, categoryId) => {
  const q = query(collection, where('category', '==', categoryId))
  const productSnapshot = await getDocs(q);
  const productList = productSnapshot.docs.map(doc => doc.data());
  return productList;
}

// Obtenga un producto de su base de datos
export const getProductById = async(productId) => {
  const productById = doc(db, 'products', productId);
  const productSnapshot = await getDoc(productById)
  return productSnapshot.data()
}

// Cargue nuevos Item desde un Array a su base de datos
export const dataToFirebase = (array) => {
  array.forEach(item => {
    const newItem = doc(collection(db, "categories"));
    setDoc(newItem, item)
    .then(() => {
      console.log("Document written with ID: ", newItem.id)
    })
    .catch(err => {
        console.error("Error adding document: ", err);
    });
  });
}

// Poner el id del documento dentro de él
export const actualizar = async() => {
  const productsCol = collection(db, 'products');
  const productSnapshot = await getDocs(productsCol);
  const productList = productSnapshot.docs;
  console.log(productList.map(doc => doc.data()));
  productList.map(i => {
    setDoc(doc(db, "products", i.id), {id:i.id}, { merge: true })
  });
}

// Agregar una nueva orden
export const exmpleSendOrder = async(user, array, total, date) => {
  await addDoc(collection(db, "orders"), {
    user: user,
    order: array,
    total: total,
    date: date
  });
}