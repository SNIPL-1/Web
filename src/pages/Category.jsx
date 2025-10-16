jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'


export default function Category({ data, images }){
const { name } = useParams()
const rows = data.filter(r=>r['Category']===name)
const uniqueItems = []
const seen = new Set()
rows.forEach(r=>{ if(!seen.has(r['Item Code'])){ seen.add(r['Item Code']); uniqueItems.push(r) }})
const getImage = (code)=> images.find(i=> (i['Item Code']||i['Item'])==code)?.['Image URL'] || 'https://via.placeholder.com/300'
return (
<div>
<h2 className="text-lg font-semibold mb-3">Items in {name}</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{uniqueItems.map(it=> (
<Link key={it['Item Code']} to={`/product/${encodeURIComponent(it['Item Code'])}`} className="bg-white p-2 rounded shadow">
<div className="h-36 flex items-center justify-center overflow-hidden"><img src={getImage(it['Item Code'])} className="object-contain"/></div>
<div className="mt-2 font-medium">{it['Item Name']}</div>
<div className="text-sm text-gray-500">{it['Item Code']}</div>
</Link>
))}
</div>
</div>
)
}
