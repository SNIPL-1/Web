jsx
const variants = rows.map(r=>({
variantCode: r['Variant Code']||r['VariantCode'],
description: r['Description'],
price: r['Price/Unit']||r['Price'],
unit: r['Unit'],
moq: r['MOQ']
}))
const img = images.find(i=> (i['Item Code']||i['Item'])==itemCode)?.['Image URL'] || 'https://via.placeholder.com/400'
const whatsappNumber = '917986297302'
const whatsappLink = (variant)=>{
const lines = [`Hi, I am interested in product: ${first['Item Name']}`,'',`Item Code: ${itemCode}`,`Variant Code: ${variant.variantCode}`,`${variant.description}`,`Price/Unit: ${variant.price}`]
return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('
'))}`
}


return (
<div className="bg-white p-4 rounded shadow">
<h1 className="text-2xl font-bold">{first['Item Name']}</h1>
<p className="text-sm text-gray-500">Item Code: {itemCode} | HSN Code: {first['HSN Code']}</p>
<div className="mt-4 flex gap-6">
<div className="w-48 h-48 bg-gray-50 flex items-center justify-center"><img src={img} className="object-contain"/></div>
<div className="flex-1">
<h4 className="font-semibold">Specs</h4>
<p className="text-gray-600">{first['Specs']}</p>


<div className="mt-4 overflow-x-auto">
<table className="w-full table-auto border-collapse">
<thead><tr className="bg-gray-100"><th>Variant</th><th>Description</th><th>Price</th><th>Unit</th><th>MOQ</th><th>WhatsApp</th><th>Add</th></tr></thead>
<tbody>
{variants.map(v=> (
<tr key={v.variantCode} className="border-b">
<td className="p-2">{v.variantCode}</td>
<td className="p-2">{v.description}</td>
<td className="p-2">{v.price}</td>
<td className="p-2">{v.unit}</td>
<td className="p-2">{v.moq}</td>
<td className="p-2"><a href={whatsappLink(v)} target="_blank" rel="noreferrer" className="px-3 py-1 bg-green-600 text-white rounded">Chat</a></td>
<td className="p-2"><button onClick={()=> addToCart({ itemName:first['Item Name'], itemCode, variantCode:v.variantCode, description:v.description, price:v.price, unit:v.unit, qty:1 })} className="px-3 py-1 bg-blue-600 text-white rounded">Add</button></td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
</div>
)
}
