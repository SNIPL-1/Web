jsx
import React from 'react'
import { Link } from 'react-router-dom'
export default function Header({ cartCount }){
return (
<header className="bg-white shadow">
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="flex items-center gap-3">
<div className="h-10 w-10 rounded bg-red-600 text-white flex items-center justify-center font-bold">G</div>
<div>
<div className="font-bold">GROTECH</div>
<div className="text-xs text-gray-500">Sri Neelkanth Impex Pvt. Ltd.</div>
</div>
</Link>
<nav className="flex items-center gap-3">
<Link to="/">Home</Link>
<Link to="/contact">Contact</Link>
<Link to="/cart" className="border px-2 py-1 rounded">Cart ({cartCount})</Link>
</nav>
</div>
</header>
)
}
