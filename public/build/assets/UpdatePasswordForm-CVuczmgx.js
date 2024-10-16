import{r as p,W as g,j as s}from"./app-Dkk80x56.js";import{I as n}from"./InputError-B4DMRjhS.js";import{I as c}from"./InputLabel-DRh5EMDY.js";import{P as h}from"./PrimaryButton-F1MKKNq9.js";import{T as d}from"./TextInput-CLGQmMFw.js";import{X as v}from"./transition-Cqq9mRvk.js";function k({className:m=""}){const u=p.useRef(),l=p.useRef(),{data:r,setData:e,errors:t,put:w,reset:o,processing:x,recentlySuccessful:f}=g({current_password:"",password:"",password_confirmation:""}),j=a=>{a.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:i=>{i.password&&(o("password","password_confirmation"),u.current.focus()),i.current_password&&(o("current_password"),l.current.focus())}})};return s.jsxs("section",{className:m,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Actualizar contraseña"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Asegúrese de que su cuenta utilice una contraseña larga y aleatoria para mantenerse segura."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(c,{htmlFor:"current_password",value:"Contraseña actual"}),s.jsx(d,{id:"current_password",ref:l,value:r.current_password,onChange:a=>e("current_password",a.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(n,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password",value:"Nueva contraseña"}),s.jsx(d,{id:"password",ref:u,value:r.password,onChange:a=>e("password",a.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password_confirmation",value:"Confirme su nueva contraseña"}),s.jsx(d,{id:"password_confirmation",value:r.password_confirmation,onChange:a=>e("password_confirmation",a.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(h,{disabled:x,children:"Actualizar"}),s.jsx(v,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Actualizado."})})]})]})]})}export{k as default};
