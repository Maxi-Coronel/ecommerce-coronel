import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import getData from '../../Services/getData';

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

// Get the list of products from your database
async function getProducts(db) {
  const productsCol = collection(db, 'products');
  const productSnapshot = await getDocs(productsCol);
  const productList = productSnapshot.docs.map(doc => doc.data());
  return productList;
}

export const prueba = () => getProducts(db);


//cargar datos
/* async function dataToFirebase() {
  getData.then(res => {
    res.forEach((item) => {
      const newItem = doc(collection(db, "products"));

      setDoc(newItem, item)
      .then(() => {
        console.log("Document written with ID: ", newItem.id)
      })
      .catch(err => {
          console.error("Error adding document: ", err);
      });
    });
  })
}

dataToFirebase() */