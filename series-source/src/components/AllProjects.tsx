import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {labProjects, labCategories} from '../data/lab';
import {projects, type Project} from '../data/portfolio';
import {useScrollLock} from '../hooks/smoothScroll';
import './ProjectLab.css';

const resources = [['LLMs-from-scratch','llms-from-scratch'],['awesome-llm-apps','awesome-llm-apps'],['ai-engineering-hub','ai-engineering-hub'],['Project Ideas and Resources','project-ideas']];
export default function AllProjects({onOpenCaseStudy}:{onOpenCaseStudy:(p:Project)=>void}) {
  const [search,setSearch]=useState('');
  const [category,setCategory]=useState('All categories');
  const [active,setActive]=useState(()=>new URLSearchParams(location.search).get('project'));
  const [copied,setCopied]=useState(false);
  const selected=labProjects.find(p=>p.slug===active);
  const closeRef=useRef<HTMLButtonElement>(null);
  const opener=useRef<HTMLElement|null>(null);
  useScrollLock(Boolean(selected));
  const open=(slug:string)=>{opener.current=document.activeElement as HTMLElement;setActive(slug);setCopied(false);const u=new URL(location.href);u.searchParams.set('project',slug);u.hash='originals';history.pushState({},'',u)};
  const close=()=>{setActive(null);const u=new URL(location.href);u.searchParams.delete('project');history.replaceState({},'',u);opener.current?.focus()};
  useEffect(()=>{const pop=()=>setActive(new URLSearchParams(location.search).get('project'));window.addEventListener('popstate',pop);return()=>window.removeEventListener('popstate',pop)},[]);
  useEffect(()=>{if(!selected)return;const background=document.getElementById('root');background?.setAttribute('inert','');closeRef.current?.focus();const key=(e:KeyboardEvent)=>{if(e.key==='Escape')close()};window.addEventListener('keydown',key);return()=>{window.removeEventListener('keydown',key);background?.removeAttribute('inert')}},[selected]);
  const filtered=labProjects.filter(p=>(category==='All categories'||p.category===category)&&(p.title+' '+p.description).toLowerCase().includes(search.toLowerCase()));
  return <div className="pl-wrap gutter">
    <header className="pl-heading"><p className="pl-kicker">PROJECT LAB · EPISODE 03</p><h2>ALL PROJECTS</h2><p>50 interactive demos. Five portfolio case studies. One place to explore the work.</p><div className="pl-meta"><span>50 demos</span><span>10 categories</span><span>Open source</span><a href="https://github.com/Akr246/Akr246.github.io/tree/main/series/lab" target="_blank" rel="noreferrer">Browse source ↗</a></div></header>
    <p className="pl-notice">Portfolio prototypes: each demo explains its scope. AI models, remote collaboration, payments, cloud infrastructure and hardware are not connected where noted.</p>
    <div className="pl-tools"><label>Search all demos<input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search projects…"/></label><label>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option>All categories</option>{labCategories.map(c=><option key={c}>{c}</option>)}</select></label><span role="status">{filtered.length} projects</span></div>
    <div className="pl-grid">{filtered.map(p=><button key={p.id} className="pl-card" onClick={()=>open(p.slug)} aria-label={`Open ${p.title}`}><span className="pl-art" style={{'--pl-hue':String((p.module-1)*32)} as React.CSSProperties}><span className="pl-number">{String(p.id).padStart(2,'0')}</span><span className="pl-play">▶</span><span className="pl-cat">{p.category}</span></span><span className="pl-card-body"><strong>{p.title}</strong><span>{p.description}</span><small>{p.mode}</small><em>Play project ↗</em></span></button>)}</div>
    {!filtered.length&&<p className="pl-empty">No matching projects. Try a different search or category.</p>}
    <section className="pl-studies"><p className="pl-kicker">THE ORIGINAL PORTFOLIO</p><h3>Case studies & academic work</h3><div className="pl-grid">{projects.map(p=><button className="pl-card pl-case" key={p.id} onClick={()=>onOpenCaseStudy(p)}><small>{p.genre}</small><strong>{p.title}</strong><span>{p.logline}</span><em>Read case study →</em></button>)}</div></section>
    <section className="pl-studies"><p className="pl-kicker">KEEP LEARNING</p><h3>Resources & original sources</h3><p>Attributed learning guides; third-party repositories remain credited to their authors.</p><div className="pl-resources">{resources.map(([name,slug])=><a key={slug} href={`/series/lab/resources/${slug}.html`} target="_blank" rel="noreferrer">{name} ↗</a>)}</div></section>
    {selected&&createPortal(<div className="pl-overlay" role="dialog" aria-modal="true" aria-labelledby="pl-dialog-title"><div className="pl-modal"><header><div><small>EPISODE 03 · PROJECT {String(selected.id).padStart(2,'0')}</small><h2 id="pl-dialog-title">{selected.title}</h2></div><div className="pl-modal-actions"><button onClick={async()=>{try{await navigator.clipboard.writeText(location.href);setCopied(true)}catch{setCopied(false)}}}>{copied?'Link copied':'Copy link'}</button><a href={`https://github.com/Akr246/Akr246.github.io/blob/main/series/lab/modules/${selected.module}.mjs`} target="_blank" rel="noreferrer">Source ↗</a><button ref={closeRef} onClick={close} aria-label="Close project">✕ Close</button></div></header><iframe key={selected.slug} title={`${selected.title} interactive demo`} src={`/series/lab/${selected.slug}/?embedded=1`} allow="camera; microphone; publickey-credentials-create; publickey-credentials-get"/><footer><span>{selected.mode}</span><button onClick={close}>← Back to Episode 3</button></footer></div></div>,document.body)}
  </div>;
}
