import{j as e,Y as n}from"./app-Dkk80x56.js";import{r as c}from"./index-CAoa_Lfd.js";import{A as d}from"./AuthenticatedLayout-BGV4sc3p.js";function x({subject:s}){const t=l=>{window.location.href=`/subjects/${l.id}`};return e.jsx("div",{className:"w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4",children:e.jsxs("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden",children:[e.jsx("img",{src:s.cover,alt:s.title,className:"w-full h-36 object-cover"}),e.jsxs("div",{className:"p-3",children:[e.jsx("h5",{className:"text-md font-bold",children:s.title}),e.jsx("p",{className:"text-gray-600 mt-1 text-sm",children:s.description}),e.jsx("p",{className:"text-gray-800 font-semibold mt-1 mb-3",children:`${s.lessons_count} lecciones`}),e.jsx(c.Button,{className:"mt-2 bg-black text-white font-bold px-4 text-sm py-2 rounded hover:bg-blue-800",onClick:()=>t(s),children:"Ver Lecciones"})]})]})})}function j({auth:s,course:t,subjects:l,...r}){var a;const i=(a=r==null?void 0:r.flash)==null?void 0:a.success;return e.jsxs(d,{user:s.user,roles:s.roles,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:t.title}),children:[e.jsx(n,{title:"Courses"}),e.jsx("div",{children:i&&e.jsx(c.Alert,{color:"green",children:i})}),e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"flex flex-wrap",children:l.map(o=>e.jsx(x,{subject:o},o.id))})})]})}export{j as default};