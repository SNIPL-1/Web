jsx
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import { fetchCSV } from './lib/api'


// Your published CSV links
const DATA_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTp1LlW5tsWIyE7E5BGFiKHS2qBjzh8wGaZdR3EsQSzXVyxgq1hrh4y54KpkVHiL-4Moux0CA43c4nb/pub?gid=0&single=true&output=csv'
const IMAGES_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTp1LlW5tsWIyE7E5BGFiKHS2qBjzh8wGaZdR3EsQSzXVyxgq1hrh4y54KpkVHiL-4Moux0CA43c4nb/pub?gid=676833393&single=true&output=csv'
const CATEGORIES_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTp1LlW5tsWIyE7E5BGFiKHS2qBjzh8wGaZdR3EsQSzXVyxgq1hrh4y54KpkVHiL-4Moux0CA43c4nb/pub?gid=2136776722&single=true&output=csv'


export default function App() {
const [data, setData] = useState([])
const [images, setImages] = useState([])
const [categories, setCategories] = useState([])
const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('grotech_cart_v1') || '[]'))


useEffect(() => {
Promise.all([fetchCSV(DATA_CSV), fetchCSV(IMAGES_CSV), fetchCSV(CATEGORIES_CSV)])
.then(([d, i, c]) => { setData(d); setImages(i); setCategories(c) })
.catch(console.error)
}, [])


useEffect(() => { localStorage.setItem('grotech_cart_v1', JSON.stringify(cart)) }, [cart])


return (
<div className="min-h-screen flex flex-col">
<Header cartCount={cart.length} />
<main className="flex-1 max-w-6xl mx-auto px-4 py-8">
<Routes>
<Route path="/" element={<Home data={data} images={images} categories={categories} />} />
<Route path="/category/:name" element={<Category data={data} images={images} categories={categories} />} />
<Route path="/product/:itemCode" element={<Product data={data} images={images} addToCart={(entry) => setCart((c)=>[...c, entry])} />} />
<Route path="/cart" element={<Cart cart={cart} removeAt={(i)=> setCart((c)=>c.filter((_,idx)=>idx!==i))} clear={()=>setCart([])} />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
</div>
)
}
