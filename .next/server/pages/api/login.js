"use strict";(()=>{var e={};e.id=994,e.ids=[994],e.modules={8432:e=>{e.exports=require("bcryptjs")},1185:e=>{e.exports=require("mongoose")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5352:e=>{e.exports=require("ws")},6249:(e,r)=>{Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function e(r,n){return n in r?r[n]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,n)):"function"==typeof r&&"default"===n?r:void 0}}})},8462:(e,r,n)=>{n.r(r),n.d(r,{config:()=>p,default:()=>f,routeModule:()=>m});var t={};n.r(t),n.d(t,{default:()=>c});var o=n(1802),s=n(7153),a=n(6249),i=n(9188),l=n(9098),u=n(8432),d=n.n(u);async function c(e,r){if(await (0,i.Z)(),"POST"===e.method){let{email:n,password:t}=e.body;if(!n||!t)return r.status(400).json({error:"Email and password are required."});try{let e=await l.Z.findOne({email:n});if(!e)return r.status(400).json({error:"User not found."});if(!await d().compare(t,e.password))return r.status(400).json({error:"Invalid credentials."});r.status(200).json({message:"Login successful",user:e})}catch(e){console.error("Login error:",e),r.status(500).json({error:"Internal server error"})}}else r.setHeader("Allow",["POST"]),r.status(405).end(`Method ${e.method} Not Allowed`)}let f=(0,a.l)(t,"default"),p=(0,a.l)(t,"config"),m=new o.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/login",pathname:"/api/login",bundlePath:"",filename:""},userland:t})},9188:(e,r,n)=>{n.d(r,{Z:()=>d});var t=n(1185),o=n.n(t);let s=process.env.MONGO_URI;if(!s)throw Error("Please define the MONGO_URI variable for the MongoDB connection.");let a=global.mongo;async function i(){return a.conn||(a.promise||(a.promise=o().connect(s,{bufferCommands:!1}).then(e=>(console.log("MongoDB connected"),e))),a.conn=await a.promise),a.conn}a||(a=global.mongo={conn:null,promise:null});let l=new(n(5352)).Server({port:8080}),u={};l.on("connection",e=>{e.on("message",r=>{let n=JSON.parse(r);switch(n.type){case"join":let{roomId:t}=n;u[t]||(u[t]=[]),u[t].push(e);break;case"offer":case"answer":case"candidate":let o=u[n.roomId];o&&o.forEach(r=>{r!==e&&r.send(JSON.stringify(n))})}}),e.on("close",()=>{for(let r in u)u[r]=u[r].filter(r=>r!==e)})}),console.log("Signaling server is running on ws://localhost:8080");let d=i},9098:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(1185),o=n.n(t);let s=new(o()).Schema({username:{type:String,required:!0,trim:!0},email:{type:String,required:!0,unique:!0,lowercase:!0,trim:!0,match:[/.+\@.+\..+/,"Please fill a valid email address"]},password:{type:String,required:!0,minlength:6},isAdmin:{type:Boolean,default:!1},createdAt:{type:Date,default:Date.now}}),a=o().models.User||o().model("User",s)},7153:(e,r)=>{var n;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,r,n)=>{e.exports=n(145)}};var r=require("../../webpack-api-runtime.js");r.C(e);var n=r(r.s=8462);module.exports=n})();