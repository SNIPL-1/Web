js
// Helper to fetch CSV and parse via PapaParse
import Papa from 'papaparse'


export async function fetchCSV(url) {
const res = await fetch(url);
const text = await res.text();
return new Promise((resolve, reject) => {
Papa.parse(text, {
header: true,
skipEmptyLines: true,
complete: (results) => resolve(results.data),
error: (err) => reject(err),
})
})
}


export function uniqueBy(arr, key) {
const seen = new Set();
const out = [];
arr.forEach((r) => {
const k = typeof key === 'function' ? key(r) : r[key];
if (!seen.has(k)) { seen.add(k); out.push(r); }
});
return out;
}
