(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{9967:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Appointment",function(){return a(1091)}])},1091:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var s=a(5893);a(6501);var l=a(7294),n=a(9455),o=a(1163),i=a(5675),d=a.n(i),r={src:"/_next/static/media/ssss.8b715ff2.png",height:114,width:277,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYElEQVR4nGN8NylThImRUYbx31/O/79/cPxnZGBgZGRmYGRm/fCLlesB4+uZpZ6sX15vYP77i+0/AxJgZGT4w8E/lZHh/3/G95PSnZl+fVcACv4BGsAAVPgPRP1l5zkLAHdVIJtufdzqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},c={src:"/_next/static/media/766.8dd21477.png",height:471,width:519,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAuklEQVR42gGvAFD/AJi2vYurtlF9joGdrZilsZiEeX2JmERdcgB/pqxTd4Bac4Kbv9Ggw9KOobByjqRObYUAcZifU36OfK2/sL7MrKu4j73RdJmvVGd+AHWZpFJ9joS1yKqyvMCxupHC12aKpUxddgCkw81/oKuRp7lidoJ5lJ18lKZlhqZMZIAAWY+fkKm109zkjoaIVERLTEVQV2yETmV9ABxqhHCEj9Hc44SUq3mLonuOqGZ7lVZne6y/XYkraOh0AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7},m={src:"/_next/static/media/5.83785ecf.png",height:130,width:161,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAdklEQVR42mNABufWTGNmwAVOLelmAdEXN80TOb92ehuK5PXdq5jBkhvmGAAlC8+unHwBxD84MZ8JrOD8upme51ZPXXp+7YxCoILTFzbM9oRayQJWcHP/evazqyYvBypYeGXbYpf///8zgiWgxsI5lzbPF0d3GwB/GDT0VDm85AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},h=a(8242),u=()=>{let e=(0,o.useRouter)(),[t,a]=(0,l.useState)([]),[i,u]=(0,l.useState)(""),[x,g]=(0,l.useState)([]),[A,p]=(0,l.useState)(!1),[b,f]=(0,l.useState)("");(0,l.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/book"),t=await e.json();if(e.ok){let e=t.map(e=>({...e,meetingId:e.meetingID}));a(e)}else console.error("Failed to fetch appointments:",t.message)}catch(e){console.error("Error fetching appointments:",e)}})()},[]);let N=t=>{e.push("/meet/".concat(t)),console.log("Navigating to meeting with ID: ".concat(t))},j=async e=>{try{await fetch("/api/book?id=".concat(e),{method:"DELETE"}),g(x.filter(t=>t._id!==e)),f("Appointment has been canceled successfully."),1===x.length&&p(!1)}catch(e){console.error("Error cancelling booking:",e),f("Error cancelling the appointment.")}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"greenn min-h-screen relative",children:[(0,s.jsx)(n.Z,{className:"fixed top-0 w-full bg-white shadow-md"}),(0,s.jsxs)("div",{className:"pt-0  mr-28  ",children:[(0,s.jsxs)("div",{className:"relative pb-44 mr-24 mt-6  w-full h-screen flex justify-end items-center","data-aos":"zoom-in","data-aos-delay":"200","data-aos-easing":"ease-in-out","data-aos-duration":"1100",children:[(0,s.jsx)("div",{className:" hidden sm:block md:block absolute  h-[28rem] w-[28rem]  orangg rounded-full z-0 right-0"}),(0,s.jsx)("div",{className:" hidden sm:block md:block absolute h-[27rem] w-[27rem] mr-2 rounded-full overflow-hidden shadow-lg ",children:(0,s.jsx)(d(),{src:c,alt:"Description of the image",className:"h-full w-full object-cover"})}),(0,s.jsx)("div",{className:" hidden sm:block md:block absolute mt-72 mr-72 h-[14.5rem] w-[14.5rem]  orangg rounded-full clip-half z-0 right-0"}),(0,s.jsx)("div",{className:" hidden sm:block md:block absolute mt-72 mb-2 ml-5 mr-72 h-[14rem] w-[14rem] rounded-full overflow-hidden shadow-lg ",children:(0,s.jsx)(d(),{src:c,alt:"Doctor",className:"h-full w-full object-cover"})})]}),(0,s.jsx)(d(),{src:m,alt:"Description of the image",className:"absolute inset-0 w-36 h-32 opacity-50 md:ml-16 mt-28","data-aos":"zoom-in","data-aos-delay":"200","data-aos-easing":"ease-in-out","data-aos-duration":"2000"}),(0,s.jsxs)("div",{className:"mt-48 ml-20 md:ml-52 py-10 absolute inset-0","data-aos":"fade-down","data-aos-delay":"200","data-aos-easing":"ease-in-out","data-aos-duration":"1100",children:[A?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:"md:text-5xl text-4xl font-serif orangg-text mb-8",children:"Your Appointments"}),x.length>0?(0,s.jsx)("div",{className:"overflow-x-auto mr-10 md:mr-0 md:pr-4",children:(0,s.jsxs)("table",{className:"md:w-96 bg-white bg-opacity-70 rounded-lg shadow-sm shadow-gray-400","data-aos":"fade-up","data-aos-delay":"200","data-aos-easing":"ease-in-out","data-aos-duration":"700",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:" bg-orange-500 bg-opacity-60  text-gray-800",children:[(0,s.jsx)("th",{className:"py-2 px-7 ml-4 ",children:"Doctor Name"}),(0,s.jsx)("th",{className:"py-2 px-4 hidden sm:block",children:"Specialization"}),(0,s.jsx)("th",{className:"py-2 px-4 ",children:"Date"}),(0,s.jsx)("th",{className:"py-2 px-4 ",children:"Time"}),(0,s.jsx)("th",{className:"py-2 px-4 ",children:"Meet"}),(0,s.jsx)("th",{className:"py-2 px-4 ",children:"Action"}),"                      "]})}),(0,s.jsx)("tbody",{children:x.map((e,t)=>(0,s.jsxs)("tr",{className:"hover:bg-gray-100 hover:bg-op",children:[(0,s.jsx)("td",{className:"py-2 px-4 mr-10 ml-5 ",children:e.doctor.name}),(0,s.jsx)("td",{className:"py-2 px-4 hidden sm:block",children:e.doctor.specialization}),(0,s.jsx)("td",{className:"py-2 px-4 ",children:new Date(e.date).toLocaleDateString()}),(0,s.jsx)("td",{className:"py-2 px-4 ",children:e.time}),(0,s.jsx)("td",{className:"py-2 px-4 ",children:(0,s.jsx)("button",{onClick:()=>N(e.meetingId),className:"text-blue-500 hover:underline",children:"Join"})}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{onClick:()=>j(e._id),className:"mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none",children:"Cancel"})})]},t))})]})}):(0,s.jsx)("p",{className:"text-lg text-gray-200",children:"No appointments found for this mobile number."})]}):(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),g(t.filter(e=>e.phoneNumber===i)),p(!0)},className:"mb-8 w-3/4",children:[(0,s.jsx)("h1",{className:"mb-5 fontt text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif orangg-text",children:"Check Appointment"}),(0,s.jsx)("h1",{className:"mb-8 fontt text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif text-gray-300",children:"Enter Your Number"}),(0,s.jsx)("div",{className:"bg-white bg-opacity-20 p-3 rounded-lg shadow-lg flex space-x-3 w-96",children:(0,s.jsx)("input",{type:"tel",value:i,onChange:e=>u(e.target.value),placeholder:"Mobile Number",className:"border border-gray-300 rounded-l-lg p-3 w-full sm:w-80 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})}),(0,s.jsxs)("div",{className:"relative mt-7 ",children:[(0,s.jsx)(d(),{src:r,alt:"Submit",className:"h-11 md:h-11 w-48 ml-24 object-cover"}),(0,s.jsx)("button",{className:"absolute inset-0 md:mr-96 md:pr-60 ml-14 md:ml-7 text-white font-bold text-lg md:text-xl",type:"submit",children:"Submit"})]})]}),b&&(0,s.jsx)("p",{className:"mt-4 text-lg text-red-500",children:b})]})]})]}),(0,s.jsx)(h.Z,{})]})}},1163:function(e,t,a){e.exports=a(6036)}},function(e){e.O(0,[976,948,664,603,675,709,554,888,774,179],function(){return e(e.s=9967)}),_N_E=e.O()}]);