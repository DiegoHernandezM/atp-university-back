import{j as h,r as s,R as m,d as Ze,W as Je}from"./app-Dkk80x56.js";import{I as Qe}from"./InputError-B4DMRjhS.js";import{I as et}from"./InputLabel-DRh5EMDY.js";import{s as oe,W as x,H as $,o as y,y as L,n as D,a as K,b as _,u as Y,t as le,T as tt,l as ae,p as nt,f as xe,M as pe,c as $e,i as V,d as rt,X as Fe,F as q}from"./transition-Cqq9mRvk.js";import{T as ot}from"./TextInput-CLGQmMFw.js";function he({className:e="",disabled:t,children:n,...r}){return h.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function z(e){return oe.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let lt=s.createContext(void 0);function at(){return s.useContext(lt)}let it="span";var G=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(G||{});function ut(e,t){var n;let{features:r=1,...o}=e,l={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return $({ourProps:l,theirProps:o,slot:{},defaultTag:it,name:"Hidden"})}let ee=x(ut),ie=s.createContext(null);ie.displayName="DescriptionContext";function Te(){let e=s.useContext(ie);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Te),t}return e}function st(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=y(l=>(t(i=>[...i,l]),()=>t(i=>{let u=i.slice(),a=u.indexOf(l);return a!==-1&&u.splice(a,1),u}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return m.createElement(ie.Provider,{value:o},n.children)},[t])]}let ct="p";function dt(e,t){let n=s.useId(),r=at(),{id:o=`headlessui-description-${n}`,...l}=e,i=Te(),u=L(t);D(()=>i.register(o),[o,i.register]);let a=r||!1,d=s.useMemo(()=>({...i.slot,disabled:a}),[i.slot,a]),c={ref:u,...i.props,id:o};return $({ourProps:c,theirProps:l,slot:d,defaultTag:ct,name:i.name||"Description"})}let ft=x(dt),mt=Object.assign(ft,{});var Pe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Pe||{});let pt=s.createContext(()=>{});function ht({value:e,children:t}){return m.createElement(pt.Provider,{value:e},t)}let vt=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Le(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let i=t[o].call(n,...l);i&&(n=i,r.forEach(u=>u()))}}}function Se(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let gt=new vt(()=>Le(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function A(e,t){let n=gt.get(t),r=s.useId(),o=Se(n);if(D(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let l=o.indexOf(r),i=o.length;return l===-1&&(l=i,i+=1),l===i-1}let te=new Map,U=new Map;function ve(e){var t;let n=(t=U.get(e))!=null?t:0;return U.set(e,n+1),n!==0?()=>ge(e):(te.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>ge(e))}function ge(e){var t;let n=(t=U.get(e))!=null?t:1;if(n===1?U.delete(e):U.set(e,n-1),n!==1)return;let r=te.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,te.delete(e))}function Et(e,{allowed:t,disallowed:n}={}){let r=A(e,"inert-others");D(()=>{var o,l;if(!r)return;let i=K();for(let a of(o=n==null?void 0:n())!=null?o:[])a&&i.add(ve(a));let u=(l=t==null?void 0:t())!=null?l:[];for(let a of u){if(!a)continue;let d=z(a);if(!d)continue;let c=a.parentElement;for(;c&&c!==d.body;){for(let v of c.children)u.some(p=>v.contains(p))||i.add(ve(v));c=c.parentElement}}return i.dispose},[r,t,n])}function wt(e,t,n){let r=_(o=>{let l=o.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&n()});s.useEffect(()=>{if(!e)return;let o=t===null?null:t instanceof HTMLElement?t:t.current;if(!o)return;let l=K();if(typeof ResizeObserver<"u"){let i=new ResizeObserver(()=>r.current(o));i.observe(o),l.add(()=>i.disconnect())}if(typeof IntersectionObserver<"u"){let i=new IntersectionObserver(()=>r.current(o));i.observe(o),l.add(()=>i.disconnect())}return()=>l.dispose()},[t,r,e])}let X=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),yt=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(F||{}),ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ne||{}),bt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(bt||{});function xt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(X)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function $t(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(yt)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Me=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Me||{});function Ft(e,t=0){var n;return e===((n=z(e))==null?void 0:n.body)?!1:Y(t,{0(){return e.matches(X)},1(){let r=e;for(;r!==null;){if(r.matches(X))return!0;r=r.parentElement}return!1}})}var Tt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Tt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function T(e){e==null||e.focus({preventScroll:!0})}let Pt=["textarea","input"].join(",");function Lt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Pt))!=null?n:!1}function St(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let i=o.compareDocumentPosition(l);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?St(e):e:t&64?$t(e):xt(e);o.length>0&&i.length>1&&(i=i.filter(f=>!o.some(E=>E!=null&&"current"in E?(E==null?void 0:E.current)===f:E===f))),r=r??l.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,v=i.length,p;do{if(c>=v||c+v<=0)return 0;let f=a+c;if(t&16)f=(f+v)%v;else{if(f<0)return 3;if(f>=v)return 1}p=i[f],p==null||p.focus(d),c+=u}while(p!==l.activeElement);return t&6&&Lt(p)&&p.select(),2}function Ce(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Mt(){return/Android/gi.test(window.navigator.userAgent)}function Ct(){return Ce()||Mt()}function j(e,t,n,r){let o=_(n);s.useEffect(()=>{if(!e)return;function l(i){o.current(i)}return document.addEventListener(t,l,r),()=>document.removeEventListener(t,l,r)},[e,t,r])}function De(e,t,n,r){let o=_(n);s.useEffect(()=>{if(!e)return;function l(i){o.current(i)}return window.addEventListener(t,l,r),()=>window.removeEventListener(t,l,r)},[e,t,r])}const Ee=30;function Dt(e,t,n){let r=A(e,"outside-click"),o=_(n),l=s.useCallback(function(a,d){if(a.defaultPrevented)return;let c=d(a);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let v=function p(f){return typeof f=="function"?p(f()):Array.isArray(f)||f instanceof Set?f:[f]}(t);for(let p of v)if(p!==null&&(p.contains(c)||a.composed&&a.composedPath().includes(p)))return;return!Ft(c,Me.Loose)&&c.tabIndex!==-1&&a.preventDefault(),o.current(a,c)},[o,t]),i=s.useRef(null);j(r,"pointerdown",a=>{var d,c;i.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),j(r,"mousedown",a=>{var d,c;i.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),j(r,"click",a=>{Ct()||i.current&&(l(a,()=>i.current),i.current=null)},!0);let u=s.useRef({x:0,y:0});j(r,"touchstart",a=>{u.current.x=a.touches[0].clientX,u.current.y=a.touches[0].clientY},!0),j(r,"touchend",a=>{let d={x:a.changedTouches[0].clientX,y:a.changedTouches[0].clientY};if(!(Math.abs(d.x-u.current.x)>=Ee||Math.abs(d.y-u.current.y)>=Ee))return l(a,()=>a.target instanceof HTMLElement?a.target:null)},!0),De(r,"blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function B(...e){return s.useMemo(()=>z(...e),[...e])}function Ne(e,t,n,r){let o=_(n);s.useEffect(()=>{e=e??window;function l(i){o.current(i)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function Nt(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),l=Math.max(0,e-o);n.style(r,"paddingRight",`${l}px`)}}}function kt(){return Ce()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(l=>l()).some(l=>l.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let u=K();u.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>u.dispose()))}let l=(o=window.scrollY)!=null?o:window.pageYOffset,i=null;t.addEventListener(e,"click",u=>{if(u.target instanceof HTMLElement)try{let a=u.target.closest("a");if(!a)return;let{hash:d}=new URL(a.href),c=e.querySelector(d);c&&!r(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",u=>{if(u.target instanceof HTMLElement)if(r(u.target)){let a=u.target;for(;a.parentElement&&r(a.parentElement);)a=a.parentElement;t.style(a,"overscrollBehavior","contain")}else t.style(u.target,"touchAction","none")}),t.addEventListener(e,"touchmove",u=>{if(u.target instanceof HTMLElement){if(u.target.tagName==="INPUT")return;if(r(u.target)){let a=u.target;for(;a.parentElement&&a.dataset.headlessuiPortal!==""&&!(a.scrollHeight>a.clientHeight||a.scrollWidth>a.clientWidth);)a=a.parentElement;a.dataset.headlessuiPortal===""&&u.preventDefault()}else u.preventDefault()}},{passive:!1}),t.add(()=>{var u;let a=(u=window.scrollY)!=null?u:window.pageYOffset;l!==a&&window.scrollTo(0,l),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function At(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Rt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=Le(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:K(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Rt(n)},o=[kt(),Nt(),At()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function Ot(e,t,n=()=>({containers:[]})){let r=Se(C),o=t?r.get(t):void 0,l=o?o.count>0:!1;return D(()=>{if(!(!t||!e))return C.dispatch("PUSH",t,n),()=>C.dispatch("POP",t,n)},[e,t]),l}function It(e,t,n=()=>[document.body]){let r=A(e,"scroll-lock");Ot(r,t,o=>{var l;return{containers:[...(l=o.containers)!=null?l:[],n]}})}function ue(e,t){let n=s.useRef([]),r=y(e);s.useEffect(()=>{let o=[...n.current];for(let[l,i]of t.entries())if(n.current[l]!==i){let u=r(t,o);return n.current=t,u}},[r,...t])}function jt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let P=[];jt(()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||P[0]===t.target)return;let n=t.target;n=n.closest(X),P.unshift(n??t.target),P=P.filter(r=>r!=null&&r.isConnected),P.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ke(e){let t=y(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,le(()=>{n.current&&t()})}),[t])}let Ae=s.createContext(!1);function Ht(){return s.useContext(Ae)}function we(e){return m.createElement(Ae.Provider,{value:e.force},e.children)}function Ut(e){let t=Ht(),n=s.useContext(Oe),r=B(e),[o,l]=s.useState(()=>{var i;if(!t&&n!==null)return(i=n.current)!=null?i:null;if(oe.isServer)return null;let u=r==null?void 0:r.getElementById("headlessui-portal-root");if(u)return u;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let Re=s.Fragment,Wt=x(function(e,t){let n=e,r=s.useRef(null),o=L(tt(c=>{r.current=c}),t),l=B(r),i=Ut(r),[u]=s.useState(()=>{var c;return oe.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),a=s.useContext(re),d=ae();return D(()=>{!i||!u||i.contains(u)||(u.setAttribute("data-headlessui-portal",""),i.appendChild(u))},[i,u]),D(()=>{if(u&&a)return a.register(u)},[a,u]),ke(()=>{var c;!i||!u||(u instanceof Node&&i.contains(u)&&i.removeChild(u),i.childNodes.length<=0&&((c=i.parentElement)==null||c.removeChild(i)))}),d?!i||!u?null:Ze.createPortal($({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:Re,name:"Portal"}),u):null});function _t(e,t){let n=L(t),{enabled:r=!0,...o}=e;return r?m.createElement(Wt,{...o,ref:n}):$({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:Re,name:"Portal"})}let Bt=s.Fragment,Oe=s.createContext(null);function Vt(e,t){let{target:n,...r}=e,o={ref:L(t)};return m.createElement(Oe.Provider,{value:n},$({ourProps:o,theirProps:r,defaultTag:Bt,name:"Popover.Group"}))}let re=s.createContext(null);function Yt(){let e=s.useContext(re),t=s.useRef([]),n=y(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=y(l=>{let i=t.current.indexOf(l);i!==-1&&t.current.splice(i,1),e&&e.unregister(l)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:l}){return m.createElement(re.Provider,{value:o},l)},[o])]}let qt=x(_t),Ie=x(Vt),Gt=Object.assign(qt,{Group:Ie});function Xt(e,t=typeof document<"u"?document.defaultView:null,n){let r=A(e,"escape");Ne(t,"keydown",o=>{r&&(o.defaultPrevented||o.key===Pe.Escape&&n(o))})}function Kt(){var e;let[t]=s.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=s.useState((e=t==null?void 0:t.matches)!=null?e:!1);return D(()=>{if(!t)return;function o(l){r(l.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function zt({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=B(n),o=y(()=>{var l,i;let u=[];for(let a of e)a!==null&&(a instanceof HTMLElement?u.push(a):"current"in a&&a.current instanceof HTMLElement&&u.push(a.current));if(t!=null&&t.current)for(let a of t.current)u.push(a);for(let a of(l=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?l:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(n&&(a.contains(n)||a.contains((i=n==null?void 0:n.getRootNode())==null?void 0:i.host))||u.some(d=>a.contains(d))||u.push(a));return u});return{resolveContainers:o,contains:y(l=>o().some(i=>i.contains(l)))}}let je=s.createContext(null);function ye({children:e,node:t}){let[n,r]=s.useState(null),o=He(t??n);return m.createElement(je.Provider,{value:o},e,o===null&&m.createElement(ee,{features:G.Hidden,ref:l=>{var i,u;if(l){for(let a of(u=(i=z(l))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?u:[])if(a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a!=null&&a.contains(l)){r(a);break}}}}))}function He(e=null){var t;return(t=s.useContext(je))!=null?t:e}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Zt(){let e=s.useRef(0);return De(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ue(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Jt="div";var M=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(M||{});function Qt(e,t){let n=s.useRef(null),r=L(n,t),{initialFocus:o,initialFocusFallback:l,containers:i,features:u=15,...a}=e;ae()||(u=0);let d=B(n);rn(u,{ownerDocument:d});let c=on(u,{ownerDocument:d,container:n,initialFocus:o,initialFocusFallback:l});ln(u,{ownerDocument:d,container:n,containers:i,previousActiveElement:c});let v=Zt(),p=y(g=>{let b=n.current;b&&(S=>S())(()=>{Y(v.current,{[H.Forwards]:()=>{W(b,F.First,{skipElements:[g.relatedTarget,l]})},[H.Backwards]:()=>{W(b,F.Last,{skipElements:[g.relatedTarget,l]})}})})}),f=A(!!(u&2),"focus-trap#tab-lock"),E=nt(),R=s.useRef(!1),O={ref:r,onKeyDown(g){g.key=="Tab"&&(R.current=!0,E.requestAnimationFrame(()=>{R.current=!1}))},onBlur(g){if(!(u&4))return;let b=Ue(i);n.current instanceof HTMLElement&&b.add(n.current);let S=g.relatedTarget;S instanceof HTMLElement&&S.dataset.headlessuiFocusGuard!=="true"&&(We(b,S)||(R.current?W(n.current,Y(v.current,{[H.Forwards]:()=>F.Next,[H.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&T(g.target)))}};return m.createElement(m.Fragment,null,f&&m.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:G.Focusable}),$({ourProps:O,theirProps:a,defaultTag:Jt,name:"FocusTrap"}),f&&m.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:G.Focusable}))}let en=x(Qt),tn=Object.assign(en,{features:M});function nn(e=!0){let t=s.useRef(P.slice());return ue(([n],[r])=>{r===!0&&n===!1&&le(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=P.slice())},[e,P,t]),y(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function rn(e,{ownerDocument:t}){let n=!!(e&8),r=nn(n);ue(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&T(r())},[n]),ke(()=>{n&&T(r())})}function on(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:o}){let l=s.useRef(null),i=A(!!(e&1),"focus-trap#initial-focus"),u=xe();return ue(()=>{if(e===0)return;if(!i){o!=null&&o.current&&T(o.current);return}let a=n.current;a&&le(()=>{if(!u.current)return;let d=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===d){l.current=d;return}}else if(a.contains(d)){l.current=d;return}if(r!=null&&r.current)T(r.current);else{if(e&16){if(W(a,F.First|F.AutoFocus)!==ne.Error)return}else if(W(a,F.First)!==ne.Error)return;if(o!=null&&o.current&&(T(o.current),(t==null?void 0:t.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}l.current=t==null?void 0:t.activeElement})},[o,i,e]),l}function ln(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:o}){let l=xe(),i=!!(e&4);Ne(t==null?void 0:t.defaultView,"focus",u=>{if(!i||!l.current)return;let a=Ue(r);n.current instanceof HTMLElement&&a.add(n.current);let d=o.current;if(!d)return;let c=u.target;c&&c instanceof HTMLElement?We(a,c)?(o.current=c,T(c)):(u.preventDefault(),u.stopPropagation(),T(d)):T(o.current)},!0)}function We(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var an=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(an||{}),un=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(un||{});let sn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},se=s.createContext(null);se.displayName="DialogContext";function Z(e){let t=s.useContext(se);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Z),n}return t}function cn(e,t){return Y(t.type,sn,e,t)}let be=x(function(e,t){let n=s.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:i,role:u="dialog",autoFocus:a=!0,__demoMode:d=!1,unmount:c=!1,...v}=e,p=s.useRef(!1);u=function(){return u==="dialog"||u==="alertdialog"?u:(p.current||(p.current=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let f=$e();o===void 0&&f!==null&&(o=(f&V.Open)===V.Open);let E=s.useRef(null),R=L(E,t),O=B(E),g=o?0:1,[b,S]=s.useReducer(cn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),N=y(()=>l(!1)),ce=y(w=>S({type:0,id:w})),k=ae()?g===0:!1,[Be,Ve]=Yt(),Ye={get current(){var w;return(w=b.panelRef.current)!=null?w:E.current}},J=He(),{resolveContainers:Q}=zt({mainTreeNode:J,portals:Be,defaultContainers:[Ye]}),de=f!==null?(f&V.Closing)===V.Closing:!1;Et(d||de?!1:k,{allowed:y(()=>{var w,me;return[(me=(w=E.current)==null?void 0:w.closest("[data-headlessui-portal]"))!=null?me:null]}),disallowed:y(()=>{var w;return[(w=J==null?void 0:J.closest("body > *:not(#headlessui-portal-root)"))!=null?w:null]})}),Dt(k,Q,w=>{w.preventDefault(),N()}),Xt(k,O==null?void 0:O.defaultView,w=>{w.preventDefault(),w.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),N()}),It(d||de?!1:k,O,Q),wt(k,E,N);let[qe,Ge]=st(),Xe=s.useMemo(()=>[{dialogState:g,close:N,setTitleId:ce,unmount:c},b],[g,b,N,ce,c]),fe=s.useMemo(()=>({open:g===0}),[g]),Ke={ref:R,id:r,role:u,tabIndex:-1,"aria-modal":d?void 0:g===0?!0:void 0,"aria-labelledby":b.titleId,"aria-describedby":qe,unmount:c},ze=!Kt(),I=M.None;return k&&!d&&(I|=M.RestoreFocus,I|=M.TabLock,a&&(I|=M.AutoFocus),ze&&(I|=M.InitialFocus)),m.createElement(rt,null,m.createElement(we,{force:!0},m.createElement(Gt,null,m.createElement(se.Provider,{value:Xe},m.createElement(Ie,{target:E},m.createElement(we,{force:!1},m.createElement(Ge,{slot:fe},m.createElement(Ve,null,m.createElement(tn,{initialFocus:i,initialFocusFallback:E,containers:Q,features:I},m.createElement(ht,{value:N},$({ourProps:Ke,theirProps:v,slot:fe,defaultTag:dn,features:fn,visible:g===0,name:"Dialog"})))))))))))}),dn="div",fn=pe.RenderStrategy|pe.Static;function mn(e,t){let{transition:n=!1,open:r,...o}=e,l=$e(),i=e.hasOwnProperty("open")||l!==null,u=e.hasOwnProperty("onClose");if(!i&&!u)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!u)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!l&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!o.static?m.createElement(ye,null,m.createElement(Fe,{show:r,transition:n,unmount:o.unmount},m.createElement(be,{ref:t,...o}))):m.createElement(ye,null,m.createElement(be,{ref:t,open:r,...o}))}let pn="div";function hn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...l}=e,[{dialogState:i,unmount:u},a]=Z("Dialog.Panel"),d=L(t,a.panelRef),c=s.useMemo(()=>({open:i===0}),[i]),v=y(f=>{f.stopPropagation()}),p={ref:d,id:r,onClick:v};return m.createElement(o?q:s.Fragment,{...o?{unmount:u}:{}},$({ourProps:p,theirProps:l,slot:c,defaultTag:pn,name:"Dialog.Panel"}))}let vn="div";function gn(e,t){let{transition:n=!1,...r}=e,[{dialogState:o,unmount:l}]=Z("Dialog.Backdrop"),i=s.useMemo(()=>({open:o===0}),[o]),u={ref:t,"aria-hidden":!0};return m.createElement(n?q:s.Fragment,{...n?{unmount:l}:{}},$({ourProps:u,theirProps:r,slot:i,defaultTag:vn,name:"Dialog.Backdrop"}))}let En="h2";function wn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:i}]=Z("Dialog.Title"),u=L(t);s.useEffect(()=>(i(r),()=>i(null)),[r,i]);let a=s.useMemo(()=>({open:l===0}),[l]);return $({ourProps:{ref:u,id:r},theirProps:o,slot:a,defaultTag:En,name:"Dialog.Title"})}let yn=x(mn),_e=x(hn);x(gn);let bn=x(wn),xn=Object.assign(yn,{Panel:_e,Title:bn,Description:mt});function $n({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},i={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return h.jsx(Fe,{show:t,leave:"duration-200",children:h.jsxs(xn,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[h.jsx(q,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:h.jsx("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),h.jsx(q,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:h.jsx(_e,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${i}`,children:e})})]})})}function Fn({type:e="button",className:t="",disabled:n,children:r,...o}){return h.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Dn({className:e=""}){const[t,n]=s.useState(!1),r=s.useRef(),{data:o,setData:l,delete:i,processing:u,reset:a,errors:d}=Je({password:""}),c=()=>{n(!0)},v=f=>{f.preventDefault(),i(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>p(),onError:()=>r.current.focus(),onFinish:()=>a()})},p=()=>{n(!1),a()};return h.jsxs("section",{className:`space-y-6 ${e}`,children:[h.jsxs("header",{children:[h.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Eliminar cuenta"}),h.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Una vez que se elimine su cuenta, todos sus recursos y datos se eliminarán permanentemente. Antes de eliminar su cuenta, descargue cualquier dato o información que desee conservar."})]}),h.jsx(he,{onClick:c,children:"Eliminar cuenta"}),h.jsx($n,{show:t,onClose:p,children:h.jsxs("form",{onSubmit:v,className:"p-6",children:[h.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"¿Estas seguro de eliminar la cuenta?"}),h.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Una vez que se elimine su cuenta, todos sus recursos y datos se eliminarán permanentemente. Por favor ingrese su contraseña para confirmar que desea eliminar permanentemente su cuenta."}),h.jsxs("div",{className:"mt-6",children:[h.jsx(et,{htmlFor:"password",value:"Contraseña",className:"sr-only"}),h.jsx(ot,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:f=>l("password",f.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),h.jsx(Qe,{message:d.password,className:"mt-2"})]}),h.jsxs("div",{className:"mt-6 flex justify-end",children:[h.jsx(Fn,{onClick:p,children:"Cancelar"}),h.jsx(he,{className:"ms-3",disabled:u,children:"Eliminar cuenta"})]})]})})]})}export{Dn as default};