exports.id=823,exports.ids=[823],exports.modules={8141:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let r=a(167),n=a(997),s=r._(a(6689)),o=a(5782);async function l(e){let{Component:t,ctx:a}=e;return{pageProps:await (0,o.loadGetInitialProps)(t,a)}}class i extends s.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(e,{...t})}}i.origGetInitialProps=l,i.getInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6615:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>c});var n=a(997),s=a(6689),o=a(5595),l=a(1163),i=e([o]);o=(i.then?(await i)():i)[0];let c=function(){let e=(0,l.useRouter)(),[t,a]=(0,s.useState)(!1),[r,i]=(0,s.useState)([]),[c,d]=(0,s.useState)({name:"",phoneNumber:"",date:"",time:"",message:"",doctor:{name:"Dr. John Doe",specialization:"General Medicine",experience:10,availability:"Mon-Fri"}}),u=async()=>{try{let e=await fetch("/api/book"),t=await e.json();i(t)}catch(e){console.error("Error fetching bookings:",e)}},m=e=>{let{name:t,value:a}=e.target;d({...c,[t]:a})},p=async e=>{e.preventDefault();try{let e=await fetch("/api/book",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});await e.json(),u()}catch(e){console.error("Error submitting form:",e)}},h=async e=>{try{await fetch(`/api/book?id=${e}`,{method:"DELETE"}),u()}catch(e){console.error("Error cancelling booking:",e)}},x=t=>{e.push(`/meet/${t}`),console.log(`Navigating to meeting with ID: ${t}`)};return(0,n.jsxs)("div",{className:"flex flex-col lg:flex-row bg-orange-100 bg-opacity-70",children:[n.jsx("div",{className:`fixed lg:sticky top-0 h-screen w-64 z-10 ${t?"block":"hidden"} lg:block`,children:n.jsx(o.default,{})}),n.jsx("div",{className:"lg:hidden fixed top-4 left-4 z-20",children:n.jsx("button",{onClick:()=>{a(!t)},className:"px-4 py-2 bg-gray-700 text-white rounded focus:outline-none",children:t?"Close Sidebar":"Open Sidebar"})}),(0,n.jsxs)("div",{className:"flex-grow p-4 ml-20 ",children:[n.jsx("h1",{className:"text-6xl mr-20 text-orange-400 font-serif mt-6 mb-10 text-center",children:"Appointments"}),(0,n.jsxs)("form",{onSubmit:p,className:"grid grid-cols-1 sm:grid-cols-3 pt-7 gap-4 w-full max-w-lg",children:[n.jsx("input",{type:"text",name:"name",onChange:m,placeholder:"Name",required:!0,className:"p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"}),n.jsx("input",{type:"text",name:"phoneNumber",onChange:m,placeholder:"Phone Number",required:!0,className:"p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"}),n.jsx("input",{type:"date",name:"date",onChange:m,required:!0,className:"p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"}),n.jsx("input",{type:"time",name:"time",onChange:m,required:!0,className:"p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full"}),(0,n.jsxs)("div",{className:"col-span-1 sm:col-span-2 flex flex-col sm:flex-row sm:items-start",children:[n.jsx("textarea",{name:"message",onChange:m,placeholder:"Message",className:"p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full sm:flex-1"}),n.jsx("button",{type:"submit",className:"md:mt-6 sm:mt-0 sm:ml-4 px-4 py-2 bg-orange-300 text-gray-700 rounded hover:bg-orange-400 focus:outline-none",children:"Book"})]})]}),n.jsx("h2",{className:"text-3xl font-serif text-orange-400 mt-16",children:"Existing Appointments"}),n.jsx("ul",{className:"mt-4 space-y-4 w-96",children:r.map(e=>(0,n.jsxs)("li",{className:"p-4 textg border bg-white bg-opacity-20 rounded shadow-md",children:[(0,n.jsxs)("p",{children:["Name: ",e.name]}),(0,n.jsxs)("p",{children:["Phone: ",e.phoneNumber]}),(0,n.jsxs)("p",{children:["Date: ",new Date(e.date).toLocaleDateString()]}),(0,n.jsxs)("p",{children:["Time: ",e.time]}),(0,n.jsxs)("p",{children:["Message: ",e.message]}),(0,n.jsxs)("p",{children:["Meeting ID: ",e.meetingID]}),(0,n.jsxs)("p",{children:["Doctor: ",e.doctor.name," (",e.doctor.specialization,")"]}),(0,n.jsxs)("div",{className:"mt-3 ml-3 space-x-24",children:[n.jsx("button",{onClick:()=>x(e.meetingID),className:"bg-cyan-600 text-white p-1 px-3 rounded hover:underline",children:"Join"}),n.jsx("button",{onClick:()=>h(e._id),className:" px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none",children:"Cancel Appointment"})]})]},e._id))})]})]})};r()}catch(e){r(e)}})},5595:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>m});var n=a(997);a(4542);var s=a(1664),o=a.n(s),l=a(7197),i=a(4563),c=a(303),d=a(1163),u=e([i,c]);[i,c]=u.then?(await u)():u;let m=function(){let e=(0,d.useRouter)(),t=[{href:"/admin/users",label:"Users",icon:i.faUser},{href:"/admin/doctors",label:"Doctors",icon:i.faUserDoctor},{href:"/admin/appointments",label:"Appointments",icon:i.faCalendarCheck},{href:"/admin/chat",label:"Chat",icon:c.faRocketchat}];return(0,n.jsxs)("div",{className:"h-screen w-60 greenn shadow-lg",children:[(0,n.jsxs)("h1",{className:"text-3xl text-orange-300 font-bold pt-10 text-center font-serif",children:["Admin ",n.jsx("br",{})," Dashboard"]}),n.jsx("div",{className:"space-y-4 ml-4 pt-12",children:t.map(({href:t,label:a,icon:r})=>n.jsx("div",{className:`flex items-center h-16 w-48 rounded-lg transition-all duration-300 
                        ${e.pathname===t?"bg-white bg-opacity-45":"bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-40 "}
                        cursor-pointer`,children:(0,n.jsxs)(o(),{href:t,"aria-label":a,className:"flex  items-center w-full px-4",children:[n.jsx(l.FontAwesomeIcon,{icon:r,className:"h-10 w-10 mr-3 text-orange-300 "}),n.jsx("h1",{className:"text-lg text-gray-200 ",children:a})]})},t))})]})};r()}catch(e){r(e)}})},4542:()=>{}};