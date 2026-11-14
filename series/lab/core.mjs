export const $=(s)=>document.querySelector(s);
export const esc=(v)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const uid=()=>crypto.randomUUID();
export const money=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(n);
export const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem('arya-lab:'+key))??fallback}catch{return fallback}};
export const save=(key,value)=>{try{localStorage.setItem('arya-lab:'+key,JSON.stringify(value))}catch{throw Error('Storage is full or unavailable. Export a backup and free browser storage.')}};
export function download(name,data,type='text/plain'){const u=URL.createObjectURL(new Blob([data],{type}));const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),3000)}
export const out=(value)=>{$('#out').textContent=typeof value==='string'?value:JSON.stringify(value,null,2)};
export const field=(id,label,value='',type='text')=>`<label for="${id}">${esc(label)}</label><input id="${id}" type="${type}" value="${esc(value)}">`;
export const area=(id,label,value='')=>`<label for="${id}">${esc(label)}</label><textarea id="${id}">${esc(value)}</textarea>`;
export const select=(id,label,values)=>`<label for="${id}">${esc(label)}</label><select id="${id}">${values.map(v=>`<option>${esc(v)}</option>`).join('')}</select>`;
export const button=(id,label,primary=false)=>`<button id="${id}" ${primary?'class="primary"':''}>${label}</button>`;
export const output=()=>'<div id="out" class="output" role="status" aria-live="polite">Ready. Try the controls above.</div>';
export const mount=html=>{$('#workbench').innerHTML=html};
export const on=(id,fn,event='click')=>{$('#'+id).addEventListener(event,async e=>{try{await fn(e)}catch(err){if($('#out'))out('Error: '+err.message);else alert(err.message)}})};
export const val=id=>$('#'+id).value.trim();
export function num(id,min=0,max=1e9){const raw=val(id),n=Number(raw);if(raw===''||!Number.isFinite(n)||n<min||n>max)throw Error(`Enter a number between ${min} and ${max}.`);return n}
export function table(headers,rows){return `<div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}
export const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
export async function sha(text){return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))].map(v=>v.toString(16).padStart(2,'0')).join('')}
export function sync(key,fn){window.addEventListener('storage',e=>{if(e.key==='arya-lab:'+key)fn(read(key,null))})}
export function sketch(canvas,color=()=> '#15151d',done=()=>{}){let down=false,prev;const ctx=canvas.getContext('2d');const pt=e=>{const r=canvas.getBoundingClientRect();return [(e.clientX-r.left)*canvas.width/r.width,(e.clientY-r.top)*canvas.height/r.height]};canvas.onpointerdown=e=>{down=true;prev=pt(e);canvas.setPointerCapture(e.pointerId)};canvas.onpointermove=e=>{if(!down)return;const p=pt(e);ctx.strokeStyle=color();ctx.lineWidth=3;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(...prev);ctx.lineTo(...p);ctx.stroke();prev=p};canvas.onpointerup=()=>{down=false;done()};canvas.onpointercancel=()=>{down=false};return ctx}
