import{r as h,j as e,Y as y}from"./app-Dkk80x56.js";import{r}from"./index-CAoa_Lfd.js";import{A as w}from"./AuthenticatedLayout-BGV4sc3p.js";function $({auth:a,subject:g,lessons:o,...c}){var m,x;const d=(m=c==null?void 0:c.flash)==null?void 0:m.success,[t,p]=h.useState((x=o[0])==null?void 0:x.resources[0]);let u=0,i=0;const s=h.useRef(null),b=()=>{s.current.play()},j=()=>{s.current.pause()},f=l=>{s.current.volume=l.target.value},v=()=>{s.current&&(s.current.currentTime=0,s.current.play())},N=()=>{if(t.mime_type==="video/mp4")return e.jsxs("div",{className:"relative",children:[e.jsxs("video",{ref:s,className:"h-3/4 w-full h-96",children:[e.jsx("source",{src:t.url,type:"video/mp4"}),"Tu navegador no es compatible con el componente de video."]},t.url),e.jsxs("div",{className:"flex space-x-4 mt-4 justify-center",children:[e.jsx(r.Button,{className:"mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800",onClick:b,children:"Play"}),e.jsx(r.Button,{className:"mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800",onClick:j,children:"Pause"}),e.jsx(r.Button,{className:"mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800",onClick:v,children:"Reiniciar"}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",onChange:f,className:"w-32"})]})]});if(t.mime_type==="application/pdf")return e.jsx("iframe",{src:`https://docs.google.com/viewer?url=${encodeURIComponent(t.url)}&embedded=true`,className:"h-3/4 w-full h-96",title:"PDF Viewer"})};return e.jsxs(w,{user:a.user,roles:a.roles,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:g.title}),children:[e.jsx(y,{title:"Courses"}),e.jsx("div",{children:d&&e.jsx(r.Alert,{color:"green",children:d})}),e.jsx("div",{className:"mx-auto px-4 py-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsx("div",{className:"col-span-2",children:e.jsxs("div",{className:"h-screen bg-white shadow-lg rounded-lg p-4",children:[N(),e.jsx("h2",{className:"text-xl font-bold mt-4",children:t.title})]})}),e.jsxs("div",{className:"h-full bg-white shadow-lg rounded-lg p-4",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Lecciones"}),o.map(l=>(u+=1,i=0,e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-bold mb-2",children:`${u}. ${l.title}`}),e.jsx("ul",{children:l.resources.map(n=>(i+=1,e.jsx("li",{children:e.jsx(r.Button,{onClick:()=>p(n),className:`w-full text-left p-2 mb-2 rounded ${t.id===n.id?"text-white":"bg-gray-200 text-black"} hover:bg-blue-700`,children:`${i}. ${n.title}`})},n.id)))})]},l.id)))]})]})})]})}export{$ as default};
