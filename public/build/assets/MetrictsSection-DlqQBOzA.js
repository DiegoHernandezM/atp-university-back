import{r as c,W as N,j as t}from"./app-Dkk80x56.js";import{r as n}from"./index-CAoa_Lfd.js";import{M as h}from"./index-HPKVUewT.js";import w from"./MetrictsPage-DJQvAOUC.js";import"./Metricts-CZMSzO2o.js";import"./Flip-DCQDokVg.js";import"./proxy-Nt6A4AUm.js";h.setAppElement("#app");function A({landingData:e,onSuccess:x}){const[f,l]=c.useState(!1),{setData:y,post:g,processing:v}=N(),u=typeof(e==null?void 0:e.section2_counts)=="string"?JSON.parse(e.section2_counts):e.section2_counts,[r,d]=c.useState({section2_counts:Array.isArray(u)?u:[{title:"",quantity:""},{title:"",quantity:""},{title:"",quantity:""},{title:"",quantity:""}],section:"metricts"});c.useEffect(()=>{if(e){const s=typeof e.section2_counts=="string"?JSON.parse(e.section2_counts):e.section2_counts;d({section2_counts:Array.isArray(s)?s:[{title:"",quantity:""},{title:"",quantity:""},{title:"",quantity:""},{title:"",quantity:""}],section:"metricts"})}},[e]),c.useEffect(()=>{y({section2_counts:r.section2_counts,section:"metricts"})},[r]);const j=()=>{l(!0)},i=()=>{l(!1)},m=(s,o,a)=>{const p=[...r.section2_counts];p[s][o]=a,d(C=>({...C,section2_counts:p,section:"metricts"}))},b=s=>{s.preventDefault();const o=new FormData;o.append("section2_counts",r),g("/landing",{data:o,preserveScroll:!0,onFinish:()=>{console.log("Formulario enviado con éxito"),l(!1),window.scrollTo({top:0,behavior:"smooth"}),x("Landing Page actualizada correctamente.")}})};return t.jsx("section",{className:"border p-4",children:t.jsxs("header",{children:[t.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Actualiza la información de tus Estadísticas."}),t.jsx("br",{}),r.section2_counts.map((s,o)=>t.jsxs("div",{className:"border p-6 rounded-md mb-4 space-y-2",children:[t.jsx(n.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Título del contador"}),t.jsx("input",{type:"text",value:s.title??"",onChange:a=>m(o,"title",a.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"}),t.jsx(n.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Cantidad del contador"}),t.jsx("input",{type:"number",value:s.quantity??"",onChange:a=>m(o,"quantity",a.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"})]},o)),t.jsx("div",{className:"flex flex-wrap gap-4 mt-4",children:t.jsx(n.Button,{size:"sm",variant:"gradient",className:"rounded-full flex items-center gap-3",onClick:j,children:"Previsualizar"})}),t.jsxs(h,{isOpen:f,onRequestClose:i,contentLabel:"Previsualización de Estadísticas",style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:"1200px",height:"auto",maxHeight:"800px"}},children:[t.jsx("div",{className:"absolute top-2 right-2 z-50",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"mr-3 h-10 w-10 cursor-pointer hover:scale-110 transition-transform duration-200",onClick:i,children:t.jsx("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"})})}),t.jsx("br",{}),t.jsx("div",{className:"mt-8",children:t.jsx(w,{landingData:r})}),t.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row gap-4",children:[t.jsx(n.Button,{onClick:i,children:"Cerrar"}),t.jsx(n.Button,{onClick:b,disabled:v,children:"Guardar"})]})]})]})})}export{A as default};
