jsx
import React from 'react'
import { saveAs } from 'file-saver'
import jsPDF from 'jspdf'


function exportPDF(cart) {
const doc = new jsPDF();
doc.setFontSize(12);
doc.text('GROTECH - Cart Enquiry', 14, 16);
let y = 24;
cart.forEach((it, idx)=>{
doc.text(`${idx+1}. ${it.itemName} | ${it.variantCode} | ${it.description} | ${it.price} | Qty: ${it.qty}`, 14, y);
y+=8;
if (y>270) { doc.addPage(); y=16 }
})
doc.save('grotech-cart.pdf')
}


function exportCSV(cart) {
const rows = cart.map(r=> [r.itemName, r.variantCode, r.description, r.price, r.qty].join(','))
const csv = ['Item Name,Variant Code,Description,Price,Qty', ...rows].join('
')
const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
saveAs(blob, 'grotech-cart.csv')
}


export default function Cart({ cart, removeAt, clear }){
return (
<div className="bg-white p-4 rounded shadow">
<h2 className="text-lg font-semibold">Cart</h2>
<p className="text-sm text-gray-600">Get special quote for below products</p>
{cart.length===0 ? <p>Your cart is empty</p> : (
<>
<table className="w-full mt-3">
<thead><tr className="bg-gray-100"><th>Name</th><th>Variant</th><th>Desc</th><th>Price</th><th>Qty</th><th>Action</th></tr></thead>
<tbody>
{cart.map((it,idx)=> (
<tr key={idx} className="border-b"><td>{it.itemName}</td><td>{it.variantCode}</td><td>{it.description}</td><td>{it.price}</td><td>{it.qty}</td><td><button className="text-red-600" onClick={()=>removeAt(idx)}>Remove</button></td></tr>
))}
</tbody>
</table>
<div className="mt-4 flex gap-2">
<button className="px-3 py-2 border" onClick={()=>exportPDF(cart)}>Download as PDF</button>
<button className="px-3 py-2 border" onClick={()=>exportCSV(cart)}>Download as CSV</button>
</div>
</>
)}
</div>
)
}
