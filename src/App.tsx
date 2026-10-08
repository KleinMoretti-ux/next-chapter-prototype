import {useEffect,useRef,useState} from 'react';
import Welcome from './screens/welcome';
import Profile from './screens/profile';
import Checkin from './screens/checkin';
import Pathways from './screens/pathways';
import Explore from './screens/explore';
import Match from './screens/match';
import Empty from './screens/empty';
import Search from './screens/search';
import Results from './screens/results';
import Compass from './screens/compass';
const views={welcome:Welcome,profile:Profile,checkin:Checkin,pathways:Pathways,explore:Explore,match:Match,empty:Empty,search:Search,results:Results,compass:Compass};
type View=keyof typeof views;
const labels:Record<View,string>={welcome:'Welcome',profile:'About you',checkin:'Needs check-in',pathways:'Your pathways',explore:'Opportunity hub',match:'Strong match',empty:'No strong match',search:'Search',results:'Search results',compass:'Ask Compass'};
const heights:Record<View,number>={welcome:852,profile:852,checkin:852,pathways:852,explore:852,match:852,empty:852,search:939,results:1535,compass:1329};
function initial():View{const name=location.hash.slice(1);return name in views?name as View:'welcome';}
const actionSelector='a,button,[data-action],[data-name^="Button"],[data-name^="Chip ·"],[data-name^="Suggestion ·"],[data-name^="Need ·"],[data-name^="Age "],[data-name^="Pref ·"],[data-name^="Pathway ·"],[data-name^="Tab ·"],[data-name$=" tab"],[data-name$=" icon"],[data-name="Toggle"],[data-name="Not for me"],[data-name="Save"],[data-name="AI circle"],[data-name="Hold to ask"],[data-name="Continue in Ask Compass"],[data-name="Ask Compass tab"]';
export default function App(){
 const [view,setView]=useState<View>(initial),[toast,setToast]=useState(''),[modal,setModal]=useState(''),[query,setQuery]=useState(''),[width,setWidth]=useState(innerWidth),[free,setFree]=useState(false),[morning,setMorning]=useState(false);
 const root=useRef<HTMLDivElement>(null);const current=useRef(view);current.current=view;
 const navigate=(v:View)=>{location.hash=v;setView(v);window.scrollTo(0,0);};
 const notify=(s:string)=>setToast(s);
 useEffect(()=>{const resize=()=>setWidth(innerWidth);const hash=()=>setView(initial());window.addEventListener('resize',resize);window.addEventListener('hashchange',hash);return()=>{window.removeEventListener('resize',resize);window.removeEventListener('hashchange',hash);}},[]);
 useEffect(()=>{if(toast){const timer=setTimeout(()=>setToast(''),3500);return()=>clearTimeout(timer)}},[toast]);
 useEffect(()=>{
  const node=root.current!;
  node.querySelectorAll<HTMLElement>(actionSelector).forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.setAttribute('aria-label',el.dataset.name?.replace(/.* · /,'')||el.textContent?.trim()||'Open');});
  node.querySelectorAll<HTMLElement>('p').forEach(el=>{const text=el.textContent?.trim();if(['Search','Edit','Explore as guest','Why this?','Talk to a Next Chapter guide'].includes(text||'')){el.dataset.action=text;el.tabIndex=0;el.setAttribute('role','button');}});
  const fields=[...node.querySelectorAll<HTMLElement>('[data-name^="Search field"],[data-name="Name field"],[data-name="Message field"]')];
  fields.forEach(field=>{const p=field.querySelector('p');if(!p)return;const input=document.createElement('input');input.className=p.className;const name=field.dataset.name||'';input.setAttribute('aria-label',name.startsWith('Search')?'Search activities and courses':name==='Name field'?'Your name':'Ask Compass');input.placeholder=name==='Name field'?'Your name':p.textContent?.trim()||'';input.defaultValue=name==='Name field'?(localStorage.getItem('name')||'Lin Mei'):name.includes('with query')?(query||'What can I do after retiring?'):'';input.oninput=()=>{if(name==='Name field')localStorage.setItem('name',input.value);else setQuery(input.value)};input.onkeydown=e=>{if(e.key==='Enter'){if(view==='compass') {setModal('Compass follow-up');}else navigate('results');}};p.replaceWith(input);});
  node.querySelectorAll<HTMLElement>('[data-name="Button · Save"]').forEach(el=>{let key=el.dataset.nodeId||'';el.classList.toggle('saved',localStorage.getItem('saved-'+key)==='true');});
 },[view]);
 function action(el:HTMLElement){const n=el.dataset.name||el.dataset.action||'',t=el.textContent?.trim()||'';
  if(n.includes('Clear recent')){root.current?.querySelector('[data-name="Chips"]')?.replaceChildren();notify('Recent searches cleared');return;}
  if(n.includes('Back')){navigate(view==='results'?'search':view==='compass'?'results':view==='profile'?'welcome':view==='checkin'?'profile':'explore');return;}
  if(n.includes('Button · Save')){const k='saved-'+el.dataset.nodeId;const yes=localStorage.getItem(k)!=='true';localStorage.setItem(k,String(yes));el.classList.toggle('saved',yes);el.setAttribute('aria-pressed',String(yes));notify(yes?'Saved to your list':'Removed from saved');return;}
  if(n==='Not for me'){el.closest('[data-name^="Result card"]')?.remove();notify('We’ll show you other options');return;}
  if(n.includes('Filter')){setModal('Filter options');return;}if(n.includes('Compare')||t==='Compare these two'){setModal('Compare options');return;}
  if(n.startsWith('Need ·')||n.startsWith('Age ')||n==='Toggle'){if(n.startsWith('Age '))el.parentElement?.querySelectorAll('[aria-pressed]').forEach(x=>x.setAttribute('aria-pressed','false'));el.setAttribute('aria-pressed',String(el.getAttribute('aria-pressed')!=='true'));if(n==='Toggle')el.classList.toggle('selected-toggle');return;}
  if(n.startsWith('Pref ·')){setModal(n.replace('Pref · ',''));return;}
  if(n.startsWith('Tab ·')&&!n.includes('Saved')){el.parentElement?.querySelectorAll('[aria-pressed]').forEach(x=>x.setAttribute('aria-pressed','false'));el.setAttribute('aria-pressed','true');if(view==='results'){root.current?.querySelectorAll<HTMLElement>('[data-name^="Result card"]').forEach((card,i)=>{card.style.display=t==='All'||(t==='Activities'&&i===0)||(t==='Courses'&&i>0)?'flex':'none';});}return;}
  if(n.includes('Saved')){setModal('Saved options');return;}
  if(/Why this|About AI/.test(n+' '+t)){setModal('Why this fits');return;}
  if(n.startsWith('Chip ·')||n.startsWith('Suggestion ·')){if(view==='compass'){setQuery(t);setModal('Compass follow-up');}else{setQuery(t);navigate('results');}return;}
  if(n==='Search'||n==='Search icon'||n==='Search field'){navigate(view==='search'||view==='results'?'results':'search');return;}
  if(/Compass|Hold to ask|AI circle/.test(n+' '+t)){navigate('compass');return;}
  if(/Hold to talk|Fill by voice/.test(n+' '+t)){setModal('Voice input');return;}
  if(/Home (tab|icon)/.test(n)){navigate('welcome');return;}
  if(/Explore (tab|icon)|Explore activities|See partial/.test(n+' '+t)){navigate('explore');return;}
  if(/Me tab|My Journey|Edit|Adjust my preferences/.test(n+' '+t)){navigate('profile');return;}
  if(n.startsWith('Pathway ·')){navigate('explore');return;}
  if(/Get Started|Sign In/.test(t)){navigate('profile');return;}
  if(t==='Explore as guest'){navigate('search');return;}
  if(t==='Save & Continue'){localStorage.setItem('profileComplete','true');navigate('checkin');return;}
  if(t==='Continue'){navigate('pathways');return;}
  if(t==='Join a trial'){setModal('Join a trial');return;}
  if(/View plan|Strong|Community/.test(t)&&view==='explore'){navigate('match');return;}
  if(/person|guide|Help|Inbox/.test(n+' '+t)){setModal('Talk to a person');return;}
  if(/English|Text size/.test(n+' '+t)){setModal(/English/.test(n+' '+t)?'Language':'Text size');return;}
  setModal(t.length<70&&t?t:'More options');
 }
 const Component=views[view];const scale=Math.min(1,width/393);
 return <main className="prototype"><aside className="guide"><h1>Next Chapter</h1><p>A little curiosity.<br/>A new beginning.</p><label htmlFor="view">Explore the prototype</label><select id="view" value={view} onChange={e=>navigate(e.target.value as View)}>{(Object.keys(views) as View[]).map(v=><option key={v} value={v}>{labels[v]}</option>)}</select><p className="note">Designed for mobile. Your saved options and profile stay on this device.</p></aside><div className="screen" style={{height:heights[view]*scale,width:393*scale}}><div key={view} ref={root} style={{width:393,height:heights[view],transform:`scale(${scale})`,transformOrigin:'top left'}} onClick={e=>{if((e.target as HTMLElement).tagName==='INPUT')return;let target=(e.target as HTMLElement).closest<HTMLElement>(actionSelector);if(target){e.preventDefault();action(target)}}} onKeyDown={e=>{if((e.target as HTMLElement).tagName==='INPUT')return;if(e.key==='Enter'||e.key===' '){const target=(e.target as HTMLElement).closest<HTMLElement>(actionSelector);if(target){e.preventDefault();action(target)}}}}><Component/></div></div>{toast&&<div className="toast" role="status">{toast}</div>}{modal&&<div className="modal-shade" onClick={()=>setModal('')}><section className="modal" role="dialog" aria-modal="true" aria-label={modal} onClick={e=>e.stopPropagation()}><h2>{modal}</h2>{modal==='Filter options'?<><label><input type="checkbox" checked={free} onChange={e=>setFree(e.target.checked)}/>Free options only</label><label><input type="checkbox" checked={morning} onChange={e=>setMorning(e.target.checked)}/>Weekday mornings</label><button className="primary" onClick={()=>{setModal('');notify('Filters applied');root.current?.querySelectorAll<HTMLElement>('[data-name^="Result card"]').forEach((c,i)=>{c.style.display=free&&i===1?'none':'flex'})}}>Apply filters</button></>:modal==='Join a trial'?<><p>Community Walking Group<br/>Tue 16 Apr · 10 AM</p><button className="primary" onClick={()=>{setModal('');notify('Trial added to your local plan')}}>Confirm trial</button></>:modal==='Compare options'?<p>Community Garden Workshop<br/>Sat · 10 AM · Free<br/><br/>Phone Photography for Beginners<br/>Tue · 10 AM · Public Library</p>:modal==='Why this fits'?<p>These options match your interest in Learning and Community, with opportunities to try something once before committing.</p>:modal==='Compass follow-up'?<p>For “{query}”, start with the verified options in this answer. This prototype uses the Figma sample response.</p>:modal==='Language'?<><p>Choose your preferred language.</p>{['English','中文','Melayu','தமிழ்'].map(l=><button key={l} onClick={()=>{localStorage.setItem('language',l);setModal('');notify('Language preference saved: '+l)}}>{l}</button>)}</>:modal==='Voice input'?<p>Use the editable text field to try a question in this local prototype.</p>:modal==='Saved options'?<p>{Object.keys(localStorage).filter(k=>k.startsWith('saved-')&&localStorage.getItem(k)==='true').length} options saved on this device.</p>:<p>You can explore the supplied screens using the screen selector. This local prototype does not contact providers or submit personal information.</p>}<button onClick={()=>setModal('')}>Close</button></section></div>}</main>;
}
