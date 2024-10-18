import{W as F,r as c,j as e,R as B,Y as T}from"./app-Dkk80x56.js";import{r as s}from"./index-CAoa_Lfd.js";import{A as z}from"./AuthenticatedLayout-BGV4sc3p.js";import{I as N}from"./InputError-B4DMRjhS.js";import{F as D,a as I}from"./TrashIcon-CfRVNdQ-.js";import{F as L,a as P}from"./PlusIcon-DqfJkVix.js";const R=({open:d,onClose:t,onSuccess:m,currentUser:r})=>{const n=!!r,{data:l,setData:x,post:h,reset:p,errors:o,put:g}=F({name:"",email:"",password:""}),[j,u]=c.useState(!1);c.useEffect(()=>{n?x({name:r.name,email:r.email,password:""}):p()},[r,n]);const b=i=>{i.preventDefault(),u(!0),n?g(route("administrators.update",r.id),{...l,onSuccess:()=>{u(!1),m("Administrador actualizado correctamente."),t()},onError:f=>{console.error(f),u(!1)}}):h(route("administrators.store"),{onSuccess:()=>{u(!1),p(),m("Administrador creado correctamente."),t()},onError:f=>{console.error(f),u(!1)}})};return e.jsx(B.Fragment,{children:e.jsxs(s.Drawer,{placement:"right",open:d,onClose:t,className:"p-4",size:500,children:[e.jsxs("div",{className:"flex items-center justify-between px-4 pb-2",children:[e.jsx("h3",{className:"text-lg font-bold",children:n?"Editar Administrador":"Agregar Nuevo Administrador"}),e.jsx(s.IconButton,{variant:"text",color:"blue-gray",onClick:t,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-5 w-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"p-4",children:e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(s.Input,{id:"name",name:"name",value:l.name,type:"text",size:"lg",label:"Nombre",placeholder:"Nombre del Administrador",className:"!border-t-blue-gray-200 focus:!border-t-gray-900",labelProps:{className:"before:content-none after:content-none"},onChange:i=>x("name",i.target.value)}),o.name&&e.jsx(N,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(s.Input,{id:"email",name:"email",value:l.email,type:"email",size:"lg",label:"Correo Electrónico",placeholder:"ejemplo@correo.com",className:"!border-t-blue-gray-200 focus:!border-t-gray-900",labelProps:{className:"before:content-none after:content-none"},onChange:i=>x("email",i.target.value)}),o.email&&e.jsx(N,{message:o.email,className:"mt-2"})," "]}),e.jsxs("div",{className:"mb-4",children:[e.jsx(s.Input,{id:"password",name:"password",value:l.password,type:"password",size:"lg",label:" Contraseña",placeholder:"********",className:" !border-t-blue-gray-200 focus:!border-t-gray-900",labelProps:{className:"before:content-none after:content-none"},onChange:i=>x("password",i.target.value)}),o.password&&e.jsx(N,{message:o.password,className:"mt-2"})," "]}),e.jsx(s.Button,{type:"submit",color:"blue-gray",fullWidth:!0,disabled:j,children:j?"Enviando...":n?"Actualizar Administrador":"Crear Administrador"})]})})]})})},M=({users:d})=>{const[t,m]=c.useState(""),[r,n]=c.useState(d),[l,x]=c.useState(1),[h]=c.useState(5),[p,o]=c.useState(!1),[g,j]=c.useState(null),[u,b]=c.useState(null);c.useEffect(()=>{const a=d.filter(y=>y.name.toLowerCase().includes(t.toLowerCase()));n(a)},[t,d]);const i=l*h,f=i-h,v=r.slice(f,i),w=a=>x(a),A=()=>o(!0),C=()=>{b(null),o(!1)},S=a=>{j(a),setTimeout(()=>j(null),3e3)},E=a=>{b(a),o(!0)};return e.jsxs(e.Fragment,{children:[g&&e.jsx(s.Alert,{color:"green",children:g}),e.jsxs(s.Card,{className:"h-full w-full",children:[e.jsx(s.CardHeader,{floated:!1,shadow:!1,className:"rounded-none",children:e.jsxs("div",{className:"mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center",children:[e.jsxs("div",{children:[e.jsx(s.Typography,{variant:"h5",color:"blue-gray",children:"Lista de Administradores"}),e.jsx(s.Typography,{color:"gray",className:"mt-1 font-normal",children:"Administra tus usuarios a continuación"})]}),e.jsxs("div",{className:"flex w-full shrink-0 gap-2 md:w-max",children:[e.jsx("div",{className:"w-full md:w-72",children:e.jsx(s.Input,{label:"Buscar nombre",icon:e.jsx(D,{className:"h-5 w-5"}),value:t,onChange:a=>m(a.target.value)})}),e.jsxs(s.Button,{className:"flex items-center gap-3",size:"sm",onClick:A,children:[e.jsx(L,{strokeWidth:2,className:"h-4 w-4"})," Nuevo"]})]})]})}),e.jsx(s.CardBody,{className:"overflow-scroll px-0",children:e.jsxs("table",{className:"w-full min-w-max table-auto text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:"Nombre"}),e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:"Correo"}),e.jsx("th",{className:"border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",children:"Acciones"})]})}),e.jsx("tbody",{children:v.map((a,y)=>e.jsxs("tr",{children:[e.jsx("td",{className:"p-4",children:e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(s.Typography,{className:"font-bold",children:a.name})})}),e.jsx("td",{className:"p-4",children:a.email}),e.jsx("td",{className:"p-4",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s.Tooltip,{content:"Editar",children:e.jsx(s.IconButton,{variant:"text",onClick:()=>E(a),children:e.jsx(P,{className:"h-4 w-4"})})}),e.jsxs("form",{method:"POST",action:route("administrators.destroy",a.id),onSubmit:k=>{window.confirm(`¿Estás seguro que deseas eliminar a ${a.name}?`)||k.preventDefault()},children:[e.jsx("input",{type:"hidden",name:"_token",value:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}),e.jsx("input",{type:"hidden",name:"_method",value:"DELETE"}),e.jsx(s.Tooltip,{content:"Eliminar",children:e.jsx(s.IconButton,{type:"submit",variant:"text",color:"red",children:e.jsx(I,{className:"h-4 w-4"})})})]})]})})]},a.id))})]})}),e.jsxs(s.CardFooter,{className:"flex items-center justify-between border-t border-blue-gray-50 p-4",children:[e.jsx(s.Button,{variant:"outlined",size:"sm",onClick:()=>w(l-1),disabled:l===1,children:"Anterior"}),e.jsx(s.Button,{variant:"outlined",size:"sm",onClick:()=>w(l+1),disabled:l===Math.ceil(r.length/h),children:"Siguiente"})]})]}),e.jsx(R,{open:p,onClose:C,onSuccess:S,currentUser:u})]})},O=M;function Y({auth:d,users:t,...m}){var n;const r=(n=m==null?void 0:m.flash)==null?void 0:n.success;return e.jsxs(z,{user:d.user,roles:d.roles,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Administradores"}),children:[e.jsx(T,{title:"Administrators"}),e.jsx("div",{children:r&&e.jsx(s.Alert,{color:"green",children:r})}),e.jsx("div",{className:"mt-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:e.jsx(O,{users:t})})})]})}export{Y as default};
