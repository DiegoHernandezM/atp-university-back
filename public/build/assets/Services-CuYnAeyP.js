import{r,j as t}from"./app-Dkk80x56.js";import{r as n}from"./index-CAoa_Lfd.js";import{m as f}from"./proxy-Nt6A4AUm.js";function p({title:e,titleId:s,...a},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":s},a),e?r.createElement("title",{id:s},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"}))}const j=r.forwardRef(p);function b({title:e,titleId:s,...a},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":s},a),e?r.createElement("title",{id:s},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"}))}const w=r.forwardRef(b);function y({flights:e}){return t.jsxs("div",{className:"flight-table",children:[t.jsx("style",{jsx:!0,children:`
        @font-face {
          font-family: 'DS Digital';
          src: url('/fonts/ds-digital.ttf') format('truetype');
        }

        .flight-table {
          background-color: #1a1a1a;
          color: #ffc107;
          font-family: 'DS Digital', monospace;
          width: 100%;
          max-width: 800px;
          margin: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 15px;
          text-align: left;
          font-size: 1.5rem;
          border-bottom: 2px solid #333;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
        }

        th {
          color: #fff;
          font-weight: bold;
        }

        td {
          font-family: 'DS Digital', monospace;
        }

        td.cancelled {
          color: red;
        }

        td.delayed {
          color: orange;
        }

        @media (max-width: 768px) {
          .flight-table th, .flight-table td {
            font-size: 1rem;
            padding: 10px;
          }
        }
      `}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"DIA"}),t.jsx("th",{children:"MES"}),t.jsx("th",{children:"CURSO"}),t.jsx("th",{children:"CODIGO"}),t.jsx("th",{children:"REMARKS"})]})}),t.jsx("tbody",{children:e==null?void 0:e.map((s,a)=>t.jsxs("tr",{children:[t.jsx("td",{children:s.day}),t.jsx("td",{children:s.month}),t.jsx("td",{children:s.course}),t.jsx("td",{children:s.code}),t.jsx("td",{children:s.remark})]},a))})]})]})}function N({open:e,onClose:s,selectedService:a,isPrev:o=!1}){var m,d;const[i,c]=r.useState(!1),x=()=>c(!i);return t.jsxs(n.Dialog,{open:e,size:"xxl",handler:s,className:"bg-gradient-to-b from-[#B0B0B0] to-[#EEEEEE] relative",children:[t.jsx("div",{className:"absolute top-2 right-2 z-50",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"mr-3 h-10 w-10 cursor-pointer hover:scale-110 transition-transform duration-200",onClick:s,children:t.jsx("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"})})}),t.jsxs(n.DialogHeader,{className:"relative",children:[t.jsx("div",{className:"absolute inset-0 bg-cover bg-center opacity-60",style:{backgroundImage:o?`url(${(m=a==null?void 0:a.background_image)==null?void 0:m.url})`:`url('/storage/images/${(d=a==null?void 0:a.background_image)==null?void 0:d.url}')`}}),t.jsx("div",{className:"absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-white opacity-50 h-16 sm:h-20 lg:h-24 xl:h-32"}),t.jsx("div",{className:"relative z-10 p-4 sm:p-6 lg:p-8",children:t.jsx(n.Typography,{variant:"h1",className:"text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",style:{color:"#203764"},children:(a==null?void 0:a.title)||""})})]}),t.jsxs(n.DialogBody,{divider:!0,className:"overflow-auto max-h-[70vh] p-4 sm:p-6 lg:p-8 mt-20",children:[t.jsx(n.Typography,{variant:"h2",className:"text-black text-base sm:text-lg lg:text-xl",children:(a==null?void 0:a.title)||""}),t.jsx(n.Typography,{variant:"h1",className:"text-black text-sm sm:text-base lg:text-xl mt-10 mb-20",children:(a==null?void 0:a.description)||""}),t.jsx(n.Dialog,{open:i,size:"sm",handler:x,className:"bg-gradient-to-b from-gray-100 to-white",children:t.jsx(y,{flights:a==null?void 0:a.calendar})})]}),t.jsx(n.DialogFooter,{className:"flex justify-center space-x-2 mt-20",children:t.jsxs("div",{className:"flex justify-center space-x-4 sm:space-x-6 lg:space-x-10 mt-6 sm:mt-8 lg:mt-10",children:[t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("a",{href:(a==null?void 0:a.link)||"/",className:"shadow-xl shadow-gray-500/50 bg-[#E0E0E0] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-400 flex items-center justify-center text-center text-blue-800 hover:text-white hover:bg-[#203764] transition-colors",children:t.jsx(w,{className:"h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"})}),t.jsx("span",{className:"text-[#203764] font-bold mt-2 text-sm sm:text-lg lg:text-xl",children:"Aplicación"})]}),t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("button",{onClick:x,className:"shadow-xl shadow-white-500/50 bg-[#E0E0E0] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-400 flex items-center justify-center text-center text-blue-800 hover:text-white hover:bg-[#203764] transition-colors",children:t.jsx(j,{className:"h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"})}),t.jsx("span",{className:"text-[#203764] font-bold mt-2 text-sm sm:text-lg lg:text-xl",children:"Calendario"})]}),t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("a",{href:`https://wa.me/${a==null?void 0:a.phone}`,target:"_blank",rel:"noopener noreferrer",className:"shadow-xl shadow-gray-500/50 bg-[#E0E0E0] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-400 flex items-center justify-center text-center text-blue-800 hover:text-white hover:bg-[#203764] transition-colors",children:t.jsx("img",{src:"/storage/wp.png",alt:"WhatsApp",className:"w-full h-full object-contain rounded-full"})}),t.jsx("span",{className:"text-[#203764] font-bold mt-2 text-sm sm:text-lg lg:text-xl",children:"Información"})]})]})})]})}function D({landingData:e,containerVariants:s,isPrev:a}){const[o,i]=r.useState(!1),[c,x]=r.useState(null),m=l=>{x(l),i(!0)},d=()=>{i(!1),x(null)},u={hidden:{opacity:0,scale:.5},visible:{opacity:1,scale:1}};return t.jsx("section",{id:"services",className:"services-section py-20 relative",children:t.jsxs("div",{className:"container mx-auto px-4 text-center relative z-10",children:[t.jsx("h2",{className:"text-4xl font-bold mb-12",children:"NUESTROS SERVICIOS"}),t.jsx(f.div,{variants:s,initial:"hidden",whileInView:"visible",transition:{duration:2.5},className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center",children:a?e.map((l,g)=>{var h;return t.jsx(f.div,{variants:u,className:"w-full flex justify-center items-center cursor-pointer",onClick:()=>m(l),children:t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("div",{className:"w-32 h-32 rounded-full bg-gray-400 mb-4 flex justify-center items-center shadow-xl shadow-gray-500/50",children:t.jsx("img",{src:((h=l==null?void 0:l.button_image)==null?void 0:h.url)??"https://via.placeholder.com/128",alt:l.title,className:"w-full h-full rounded-full object-cover"})}),t.jsx("h3",{className:"text-xl font-semibold",children:l.title})]})},`service-prev-${g}`)}):e.section4_services?JSON.parse(e.section4_services).map((l,g)=>{var h;return t.jsx(f.div,{variants:u,className:"w-full flex justify-center items-center cursor-pointer",onClick:()=>m(l),children:t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("div",{className:"w-32 h-32 rounded-full bg-gray-400 mb-4 flex justify-center items-center shadow-xl shadow-gray-500/50",children:t.jsx("img",{src:`/storage/images/${(h=l==null?void 0:l.button_image)==null?void 0:h.url}`,alt:l.title,className:"w-full h-full rounded-full object-cover"})}),t.jsx("h3",{className:"text-xl font-semibold",children:l==null?void 0:l.title})]})},`service-div-${g}`)}):null}),t.jsx(N,{open:o,onClose:d,selectedService:c,isPrev:a})]})})}export{D as S};
