(()=>{var e={};e.id=635,e.ids=[635,660],e.modules={1661:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>f,default:()=>x,getServerSideProps:()=>g,getStaticPaths:()=>p,getStaticProps:()=>h,reportWebVitals:()=>b,routeModule:()=>N,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>v});var a=s(7093),i=s(5244),l=s(1323),n=s(1682),c=s.n(n),o=s(8141),d=s.n(o),u=s(8207),m=e([u]);u=(m.then?(await m)():m)[0];let x=(0,l.l)(u,"default"),h=(0,l.l)(u,"getStaticProps"),p=(0,l.l)(u,"getStaticPaths"),g=(0,l.l)(u,"getServerSideProps"),f=(0,l.l)(u,"config"),b=(0,l.l)(u,"reportWebVitals"),v=(0,l.l)(u,"unstable_getStaticProps"),j=(0,l.l)(u,"unstable_getStaticPaths"),S=(0,l.l)(u,"unstable_getStaticParams"),w=(0,l.l)(u,"unstable_getServerProps"),P=(0,l.l)(u,"unstable_getServerSideProps"),N=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/admin/users",pathname:"/admin/users",bundlePath:"",filename:""},components:{App:d(),Document:c()},userland:u});r()}catch(e){r(e)}})},5595:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>m});var a=s(997);s(4542);var i=s(1664),l=s.n(i),n=s(7197),c=s(4563),o=s(303),d=s(1163),u=e([c,o]);[c,o]=u.then?(await u)():u;let m=function(){let e=(0,d.useRouter)(),t=[{href:"/admin/users",label:"Users",icon:c.faUser},{href:"/admin/doctors",label:"Doctors",icon:c.faUserDoctor},{href:"/admin/appointments",label:"Appointments",icon:c.faCalendarCheck},{href:"/admin/chat",label:"Chat",icon:o.faRocketchat}];return(0,a.jsxs)("div",{className:"h-screen w-60 greenn shadow-lg",children:[(0,a.jsxs)("h1",{className:"text-3xl text-orange-300 font-bold pt-10 text-center font-serif",children:["Admin ",a.jsx("br",{})," Dashboard"]}),a.jsx("div",{className:"space-y-4 ml-4 pt-12",children:t.map(({href:t,label:s,icon:r})=>a.jsx("div",{className:`flex items-center h-16 w-48 rounded-lg transition-all duration-300 
                        ${e.pathname===t?"bg-white bg-opacity-45":"bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-40 "}
                        cursor-pointer`,children:(0,a.jsxs)(l(),{href:t,"aria-label":s,className:"flex  items-center w-full px-4",children:[a.jsx(n.FontAwesomeIcon,{icon:r,className:"h-10 w-10 mr-3 text-orange-300 "}),a.jsx("h1",{className:"text-lg text-gray-200 ",children:s})]})},t))})]})};r()}catch(e){r(e)}})},8207:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>c});var a=s(997),i=s(6689),l=s(5595),n=e([l]);l=(n.then?(await n)():n)[0];let c=function(){let[e,t]=(0,i.useState)([]),[s,r]=(0,i.useState)(!0),[n,c]=(0,i.useState)(null);return s?a.jsx("div",{className:"flex justify-center items-center h-screen text-lg font-semibold",children:"Loading..."}):n?(0,a.jsxs)("div",{className:"flex justify-center items-center h-screen text-lg font-semibold text-red-600",children:["Error: ",n]}):(0,a.jsxs)("div",{className:"flex flex-col md:flex-row bg-orange-100 bg-opacity-70 min-h-screen",children:[a.jsx(l.default,{}),(0,a.jsxs)("div",{className:"flex-1 p-4 md:ml-20  md:mr-20",children:[a.jsx("h1",{className:"text-6xl text-orange-400 font-serif mt-6 mb-10 text-center",children:"Users List"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.length>0?e.map(e=>(0,a.jsxs)("div",{className:"bg-white bg-opacity-60 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300",children:[a.jsx("h2",{className:"text-xl font-semibold",children:e.username}),a.jsx("p",{className:"text-gray-600",children:e.email})]},e._id)):a.jsx("p",{className:"text-center col-span-full",children:"No users found."})})]})]})};r()}catch(e){r(e)}})},4542:()=>{},7197:e=>{"use strict";e.exports=require("@fortawesome/react-fontawesome")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},303:e=>{"use strict";e.exports=import("@fortawesome/free-brands-svg-icons")},4563:e=>{"use strict";e.exports=import("@fortawesome/free-solid-svg-icons")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[682,239,664,163],()=>s(1661));module.exports=r})();