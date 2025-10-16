jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { uniqueBy } from '../lib/api'


export default function Home({ data, categories, images }){
const uniqueCats = [...new Set(data.map(r=>r['Category']))]
const getCatImage = (cat) => {
const found = categories.find(c=>c['Category']?.toLowerCase()===cat?.toLowerCase())
return found?.['Image URL'] || found?.['ImageURL'] || 'https://via.placeholder.com/400x300?text='+encodeURIComponent(cat)
}
return (
<div>
<section className="mb-6 bg-white p-6 rounded shadow">
<h1 className="text-2xl font-bold">GROTECH — Hand & Garden Tools Exporter</h1>
<p className="text-gray-600 mt-2">Bulk manufacturing & exports from Ludhiana, India. Since 2012.</p>
</section>


<section>
<h2 className="text-lg font-semibold mb-3">Product Categories</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{uniqueCats.map(cat=> (
<Link to={`/category/${encodeURIComponent(cat)}`} key={cat} className="bg-white rounded shadow p-2">
<div className="h-36 flex items-center justify-center overflow-hidden">
<img src={getCatImage(cat)} alt={cat} className="object-contain" />
</div>
<div className="mt-2 text-center font-medium">{cat}</div>
</Link>
))}
</div>
</section>
</div>
)
}
