import{j as r}from"./app-Dkk80x56.js";import{r as s}from"./index-CAoa_Lfd.js";function d({landingData:l,isPrev:c=!1}){return r.jsx("section",{id:"simulators",className:"py-0 relative overflow-hidden bg-transparent",children:r.jsxs("div",{className:"container mx-auto px-4 text-center",children:[r.jsx("h2",{className:"text-4xl font-bold mb-12",children:"SIMULADORES"}),c?r.jsx(s.Carousel,{autoplay:!0,loop:!0,className:"rounded-xl relative",children:l.map((e,o)=>{var t;return r.jsxs("div",{className:"relative h-96 w-full",children:[r.jsx("img",{src:((t=e==null?void 0:e.image)==null?void 0:t.url)??"https://via.placeholder.com/1280",alt:e.title,className:"h-full w-full rounded-lg object-cover"}),r.jsx("figcaption",{className:"absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm",children:r.jsxs("div",{children:[r.jsx(s.Typography,{variant:"h5",color:"blue-gray",children:e.title??"Sin dato"}),r.jsx(s.Typography,{color:"gray",className:"mt-2 font-normal",children:e.description??"Sin dato"})]})})]},`simulator-prev-${o}`)})}):l.section5_simulators&&JSON.parse(l.section5_simulators).length>0?r.jsx(s.Carousel,{autoplay:!0,loop:!0,className:"rounded-xl relative",children:JSON.parse(l==null?void 0:l.section5_simulators).map((e,o)=>{var t;return r.jsxs("div",{className:"relative h-96 w-full",children:[r.jsx("img",{src:(t=e==null?void 0:e.image)!=null&&t.url?`/storage/images/${e.image.url}`:"https://via.placeholder.com/1280",alt:e.title,className:"h-full w-full rounded-lg object-cover"},`file-${o}`),r.jsx("figcaption",{className:"absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm",children:r.jsxs("div",{children:[r.jsx(s.Typography,{variant:"h5",color:"blue-gray",children:(e==null?void 0:e.title)??"No existe titulo"}),r.jsx(s.Typography,{color:"gray",className:"mt-2 font-normal",children:(e==null?void 0:e.description)??"No existe descripcion"})]})})]},`simulator-${o}`)})}):null]})})}export{d as S};