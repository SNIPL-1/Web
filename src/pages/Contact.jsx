jsx
import React, { useState } from 'react'


const WHATSAPP_NUMBER = '917986297302'
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbymJKn0LUGpwKXTD4qGiWzjZCI_7FmnjApF9ia2VsjStKWRr2guYHJGKu_HQ9J-XiXPaw/exec' // paste your deployed apps script URL here


export default function Contact(){
const [form, setForm] = useState({name:'',email:'',mobile:'',city:'',message:''})
async function handleSubmit(e){
e.preventDefault()
if(!form.name || !form.mobile) return alert('Please fill Name and Mobile')
if(APPS_SCRIPT_URL){
try{ await fetch(APPS_SCRIPT_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) }) }catch(err){ console.error(err) }
}
const lines = [`Enquiry - GROTECH`,`Name: ${form.name}`,`City: ${form.city}`,`Mobile: ${form.mobile}`, form.email?`Email: ${form.email}`:'',`Message: ${form.message}`]
window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('
'))}`,'_blank')
setForm({name:'',email:'',mobile:'',city:'',message:''})
}
return (
<div className="bg-white p-4 rounded shadow">
<h2 className="text-lg font-semibold">Contact & Enquiry</h2>
<form className="grid gap-2 mt-3" onSubmit={handleSubmit}>
<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name*" className="p-2 border rounded" />
<input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="p-2 border rounded" />
<input value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})} placeholder="Mobile*" className="p-2 border rounded" />
<input value={form.city} onChange={e=>setForm({...form,city:e.target.value})} placeholder="City" className="p-2 border rounded" />
<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your requirements" className="p-2 border rounded" rows={4} />
<div className="flex gap-2">
<button className="px-4 py-2 bg-blue-600 text-white rounded">Send Enquiry</button>
<a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">Chat on WhatsApp</a>
</div>
</form>
</div>
)
}
