import{r as t,j as e,Y as E}from"./app-Dkk80x56.js";import{r as a}from"./index-CAoa_Lfd.js";import{A as T}from"./AuthenticatedLayout-BGV4sc3p.js";import{F as S,a as k}from"./TrashIcon-CfRVNdQ-.js";function B({title:r,titleId:i,...s},d){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":i},s),r?t.createElement("title",{id:i},r):null,t.createElement("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),t.createElement("path",{fillRule:"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z",clipRule:"evenodd"}))}const D=t.forwardRef(B);function R({open:r,onClose:i,currentPerson:s}){return e.jsxs(a.Dialog,{open:r,size:"md",handler:i,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs(a.DialogHeader,{className:"flex flex-col items-start",children:[" ",e.jsxs(a.Typography,{className:"mb-1",variant:"h4",children:["Nombre: ",s==null?void 0:s.name]})]}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"mr-3 h-5 w-5",onClick:i,children:e.jsx("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"})})]}),e.jsx(a.DialogBody,{children:e.jsxs("div",{className:"grid gap-6",children:[e.jsx(a.Typography,{className:"-mb-1",color:"blue-gray",variant:"h6",children:"Datos generales"}),e.jsx(a.Input,{value:s==null?void 0:s.country,label:"País",readOnly:!0}),e.jsx(a.Input,{value:s==null?void 0:s.city,label:"Ciudad",readOnly:!0}),e.jsx(a.Input,{value:s==null?void 0:s.email,label:"Correo",readOnly:!0}),e.jsx(a.Input,{value:s==null?void 0:s.school,label:"Escuela",readOnly:!0}),e.jsx(a.Textarea,{value:s==null?void 0:s.message,label:"Message",readOnly:!0})]})}),e.jsxs(a.DialogFooter,{className:"space-x-2",children:[e.jsx(a.Button,{variant:"gradient",color:"gray",onClick:i,children:"Cerrar"}),e.jsx(a.Button,{variant:"gradient",color:"gray",onClick:()=>window.location.href=`mailto:${s.email}?subject=Tu Asunto&body=Escribe tu mensaje aquí`,children:"Responder"})]})]})}const A=({informationRequests:r})=>{const[i,s]=t.useState(""),[d,c]=t.useState(r),[n,b]=t.useState(1),[o]=t.useState(5),[f,m]=t.useState(!1),[x,F]=t.useState(null),[p,h]=t.useState(null);t.useEffect(()=>{const l=r.filter(g=>g.name.toLowerCase().includes(i.toLowerCase()));c(l)},[i,r]);const j=n*o,y=j-o,N=d.slice(y,j),u=l=>b(l),v=()=>{h(null),m(!1)},w=l=>{h(l),m(!0)};return e.jsxs(e.Fragment,{children:[x&&e.jsx(a.Alert,{color:"green",children:x}),e.jsxs(a.Card,{className:"h-full w-full",children:[e.jsx(a.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:e.jsxs("div",{className:"mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center",children:[e.jsxs("div",{children:[e.jsx(a.Typography,{variant:"h5",color:"blue-gray",children:"Lista de solicitudes de información"}),e.jsx(a.Typography,{color:"gray",className:"mt-1 font-normal",children:"Administra las solicitudes a continuación"})]}),e.jsx("div",{className:"flex w-full shrink-0 gap-2 md:w-max",children:e.jsx("div",{className:"w-full md:w-72",children:e.jsx(a.Input,{label:"Buscar nombre",icon:e.jsx(S,{className:"h-5 w-5"}),value:i,onChange:l=>s(l.target.value)})})})]})}),e.jsx(a.CardBody,{className:"overflow-scroll px-0",children:e.jsxs("table",{className:"w-full min-w-max table-auto text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:"Nombre"}),e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:"Correo"}),e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:"Escuela"}),e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:"País"}),e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:"Ciudad"}),e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:"Acciones"})]})}),e.jsx("tbody",{children:N.map((l,g)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(a.Typography,{className:"font-bold",children:l.name})})}),e.jsx("td",{className:"p-4",children:l.email}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(a.Typography,{className:"font-bold",children:l.school})})}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(a.Typography,{className:"font-bold",children:l.country})})}),e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(a.Typography,{className:"font-bold",children:l.city})})}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a.Tooltip,{content:"Ver",children:e.jsx(a.IconButton,{variant:"text",onClick:()=>w(l),children:e.jsx(D,{className:"h-4 w-4"})})}),e.jsxs("form",{method:"POST",action:route("contacts.destroy",l.id),onSubmit:C=>{window.confirm(`¿Estás seguro que deseas eliminar a ${l.name}?`)||C.preventDefault()},children:[e.jsx("input",{type:"hidden",name:"_token",value:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}),e.jsx("input",{type:"hidden",name:"_method",value:"DELETE"}),e.jsx(a.Tooltip,{content:"Eliminar",children:e.jsx(a.IconButton,{type:"submit",variant:"text",color:"red",children:e.jsx(k,{className:"h-4 w-4"})})})]})]})})]},l.id))})]})}),e.jsxs(a.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[e.jsx(a.Button,{variant:"outlined",size:"sm",onClick:()=>u(n-1),disabled:n===1,children:"Anterior"}),e.jsx(a.Button,{variant:"outlined",size:"sm",onClick:()=>u(n+1),disabled:n===Math.ceil(d.length/o),children:"Siguiente"})]})]}),e.jsx(R,{open:f,onClose:v,currentPerson:p})]})},O=A;function z({auth:r,informationRequests:i,...s}){var c;const d=(c=s==null?void 0:s.flash)==null?void 0:c.success;return e.jsxs(T,{user:r.user,roles:r.roles,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Solicitud de información"}),children:[e.jsx(E,{title:"Contacts"}),e.jsx("div",{children:d&&e.jsx(a.Alert,{color:"green",children:d})}),e.jsx("div",{className:"mt-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:e.jsx(O,{informationRequests:i})})})]})}export{z as default};