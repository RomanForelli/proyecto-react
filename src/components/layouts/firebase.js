import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "proyectoreact-forelli.firebaseapp.com",
    projectId: "proyectoreact-forelli",
    storageBucket: "proyectoreact-forelli.appspot.com",
    messagingSenderId: "148221004813",
    appId: "1:148221004813:web:84b45c32dc1e5d73801944"
};
  // Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore()   

const cargarBaseDeDatos = async ()=> {
  const promise = await fetch("./json/productos.json")
  const productos = await promise.json()
  productos.forEach( async(producto) => {
    await addDoc(collection(db,"productos"), {
      nombre: producto.nombre,
      marca: producto.marca,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock,
      img: producto.img,
      idCategoria: producto.idCategoria,
    })
  })

}

  const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const prod = [producto.id, producto.data()]
    return prod
  }

  const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

const deleteProducto = async (id) => {
  const estado = await deleteDoc(doc(db,"productos", id))
  return estado
}

const createProducto = async (objProd) => {
  const estado = await addDoc(collection(db, "productos"), {
      nombre: objProd.nombre,
      marca: objProd.marca,
      descripcion: objProd.descripcion,
      precio: objProd.precio,
      stock: objProd.stock,
      img: objProd.img,
      idCategoria: objProd.idCategoria,
  })
  return estado
}

const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
  const ordenCompra = await addDoc(collection(db,"ordenCompra"), {
    precioTotal: preTotal,
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion: direccion

  })
  return ordenCompra
}

const getOdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  return ordenCompra
}

export {cargarBaseDeDatos, getProductos, getProducto, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOdenCompra}