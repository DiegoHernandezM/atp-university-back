import{r as u,W as O,j as e}from"./app-Dkk80x56.js";import{r as t}from"./index-CAoa_Lfd.js";import{M as j}from"./index-HPKVUewT.js";import R from"./ServicesPage-dgbQjrXg.js";import"./Services-CuYnAeyP.js";import"./proxy-Nt6A4AUm.js";j.setAppElement("#app");function V({landingData:n,onSuccess:y}){const[f,g]=u.useState(!1),[J,N]=u.useState(null),[U,k]=u.useState(null),{setData:_,post:S,processing:C}=O(),x=typeof(n==null?void 0:n.section4_services)=="string"?JSON.parse(n.section4_services):n.section4_services,[i,d]=u.useState({section4_services:Array.isArray(x)?x:[{title:"",description:"",link:"",phone:"",button_image:null,background_image:null,calendar:[{day:"",month:"",course:"",code:"",remark:""}]}],section:""});u.useEffect(()=>{if(n){const r=typeof n.section4_services=="string"?JSON.parse(n.section4_services):n.section4_services;d({section4_services:Array.isArray(r)?r:[{title:"",description:"",link:"",phone:"",button_image:null,background_image:null,calendar:[{day:"",month:"",course:"",code:"",remark:""}]}],section:"services"})}},[n]),u.useEffect(()=>{_({section4_services:i.section4_services,section:"services"})},[i]);const w=()=>{g(!0)},v=()=>{g(!1)},p=(r,s,o)=>{const c=[...i.section4_services];c[r][s]=o,d(a=>({...a,section4_services:c}))},B=(r,s)=>{const o=r.target.files[0];if(o){const c=URL.createObjectURL(o);N({url:c});const a=[...i.section4_services];a[s].button_image={url:c,file:o},d(l=>({...l,section4_services:a}))}},z=(r,s)=>{const o=r.target.files[0];if(o){const c=URL.createObjectURL(o);k({url:c});const a=[...i.section4_services];a[s].background_image={url:c,file:o},d(l=>({...l,section4_services:a}))}},h=(r,s,o,c)=>{const a=[...i.section4_services];a[r].calendar||(a[r].calendar=[]),a[r].calendar[s]={...a[r].calendar[s],[o]:c},d(l=>({...l,section4_services:a}))},A=()=>{d(r=>({...r,section4_services:[...r.section4_services,{title:"",description:"",link:"",phone:"",button_image:null,background_image:null,calendar:[{day:"",month:"",course:"",code:"",remark:""}]}]}))},M=r=>{const s=[...i.section4_services];s.splice(r,1),d(o=>({...o,section4_services:s}))},b=r=>{const s=[...i.section4_services];s[r].calendar.push({day:"",month:"",course:"",code:"",remark:""}),d(o=>({...o,section4_services:s}))},T=(r,s)=>{const o=[...i.section4_services];o[r].calendar.splice(s,1),d(c=>({...c,section4_services:o}))},E=r=>{r.preventDefault();const s=new FormData;s.append("section4_services",JSON.stringify(i.section4_services)),S("/landing",{data:s,preserveScroll:!0,onFinish:()=>{console.log("Formulario enviado con éxito"),g(!1),window.scrollTo({top:0,behavior:"smooth"}),y("Landing Page actualizada correctamente.")}})};return e.jsx("section",{className:"border p-4",children:e.jsxs("header",{children:[e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Actualiza la información de tus Servicios."}),e.jsx("br",{}),i.section4_services.map((r,s)=>{var o,c;return e.jsxs("div",{className:"border p-6 rounded-md mb-4 space-y-2",children:[e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Título del Servicio"}),e.jsx("input",{type:"text",value:r.title??"",onChange:a=>p(s,"title",a.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"}),e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Descripción"}),e.jsx("input",{type:"text",value:r.description??"",onChange:a=>p(s,"description",a.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"}),e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Link"}),e.jsx("input",{type:"text",value:r.link??"",onChange:a=>p(s,"link",a.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"}),e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Telefono"}),e.jsx("input",{type:"text",value:r.phone??"",onChange:a=>p(s,"phone",a.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"}),((o=r==null?void 0:r.calendar)==null?void 0:o.length)===0?e.jsx("div",{className:"mt-2 flex space-x-2",children:e.jsx(t.Button,{size:"sm",variant:"gradient",onClick:()=>b(s),children:"Agregar fecha"})}):(c=r==null?void 0:r.calendar)==null?void 0:c.map((a,l)=>e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex space-x-4 items-center",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Día"}),e.jsx("input",{type:"number",max:"31",value:a.day??"",onChange:m=>h(s,l,"day",m.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Mes"}),e.jsxs("select",{value:a.month??"",onChange:m=>h(s,l,"month",m.target.value),className:"mt-1 block w-full border-gray-300 rounded-md",children:[e.jsx("option",{value:"",children:"Seleccionar mes"}),e.jsx("option",{value:"Enero",children:"Enero"}),e.jsx("option",{value:"Febrero",children:"Febrero"}),e.jsx("option",{value:"Marzo",children:"Marzo"}),e.jsx("option",{value:"Abril",children:"Abril"}),e.jsx("option",{value:"Mayo",children:"Mayo"}),e.jsx("option",{value:"Junio",children:"Junio"}),e.jsx("option",{value:"Julio",children:"Julio"}),e.jsx("option",{value:"Agosto",children:"Agosto"}),e.jsx("option",{value:"Septiembre",children:"Septiembre"}),e.jsx("option",{value:"Octubre",children:"Octubre"}),e.jsx("option",{value:"Noviembre",children:"Noviembre"}),e.jsx("option",{value:"Diciembre",children:"Diciembre"})]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Curso"}),e.jsx("input",{type:"text",value:a.course??"",onChange:m=>h(s,l,"course",m.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Código"}),e.jsx("input",{type:"text",value:a.code??"",onChange:m=>h(s,l,"code",m.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Observaciones"}),e.jsx("input",{type:"text",value:a.remark??"",onChange:m=>h(s,l,"remark",m.target.value),className:"mt-1 block w-full border-gray-300 rounded-md"})]})]}),e.jsxs("div",{className:"mt-2 flex space-x-2",children:[e.jsx(t.Button,{size:"sm",variant:"gradient",onClick:()=>b(s),children:"Agregar fecha"}),e.jsx(t.Button,{size:"sm",variant:"gradient",color:"red",onClick:()=>T(s,l),children:"Eliminar fecha"})]})]},l)),e.jsxs("div",{className:"mt-4",children:[e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Agregar imagen para botón"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx("input",{type:"file",name:"button_image",id:`button_image_${s}`,className:"hidden",accept:"image/*",onChange:a=>B(a,s)}),e.jsxs(t.Button,{size:"sm",variant:"gradient",className:"rounded-full flex items-center gap-3",onClick:()=>document.getElementById(`button_image_${s}`).click(),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-5 w-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"})}),"Seleccionar imagen para botón"]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(t.Typography,{variant:"h6",color:"blue-gray",className:"mb-1",children:"Agregar imagen de fondo"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx("input",{type:"file",name:"background_image",id:`background_image_${s}`,className:"hidden",accept:"image/*",onChange:a=>z(a,s)}),e.jsxs(t.Button,{size:"sm",variant:"gradient",className:"rounded-full flex items-center gap-3",onClick:()=>document.getElementById(`background_image_${s}`).click(),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-5 w-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"})}),"Seleccionar imagen de fondo"]})]})]}),e.jsx("div",{className:"mt-4",children:e.jsx(t.Button,{size:"sm",variant:"gradient",color:"red",onClick:()=>M(s),children:"Eliminar sección"})})]},s)}),e.jsxs("div",{className:"mt-4 flex space-x-4",children:[e.jsx("div",{className:"mt-6",children:e.jsx(t.Button,{size:"sm",variant:"gradient",onClick:A,children:"Agregar Servicio"})}),e.jsx("div",{className:"mt-6",children:e.jsx(t.Button,{size:"sm",variant:"gradient",onClick:w,children:"Previsualizar"})})]}),e.jsxs(j,{isOpen:f,onRequestClose:v,contentLabel:"Previsualizar Servicios",style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:"1200px",height:"auto",maxHeight:"700px"}},children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"mr-3 h-10 w-10 cursor-pointer hover:scale-110 transition-transform duration-200",onClick:v,children:e.jsx("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"})})}),e.jsx("br",{}),e.jsx(R,{landingData:i.section4_services,isPrev:!0}),e.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row gap-4",children:[e.jsx(t.Button,{onClick:v,children:"Cerrar"}),e.jsx(t.Button,{onClick:E,disabled:C,children:"Guardar"})]})]})]})})}export{V as default};
