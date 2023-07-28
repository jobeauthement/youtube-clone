import{r as c,o as r,c as d,a as g,u as l,w as b,F as h,Z as y,b as e,d as w,e as k,v as V,i as F,t as n,f as u,O as C}from"./app-aa2f7841.js";import{_ as M}from"./NavLayout-a77313ea.js";import"./_plugin-vue_export-helper-c27b6911.js";const P={class:"max-w-xl mx-auto px-4"},j=e("div",{class:"text-white font-extrabold text-3xl py-10"},"Add Video",-1),B=["onSubmit"],D=e("div",{class:"text-gray-200"},"Title",-1),N={key:0,class:"text-red-500"},O=e("div",{class:"my-5"},null,-1),S={class:"flex justify-center"},T={class:"w-full"},A=e("div",{class:"text-gray-200"},"Thumbnail",-1),U={key:0,class:"text-red-500"},E={key:1,class:"text-red-500"},I=e("div",{class:"my-5"},null,-1),R={class:"flex justify-center"},Y={class:"w-full"},Z=e("div",{class:"text-gray-200"},"Video/MP4",-1),q={key:0,class:"text-red-500"},z={key:1,class:"text-red-500"},G=e("div",{class:"my-5"},null,-1),H=e("div",{class:"float-right"},[e("button",{type:"submit",class:"text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded cursor-pointer"}," Upload Video ")],-1),Q={__name:"AddVideo",props:{errors:Object},setup(i){let a=c(""),v=c(""),f=c(""),t=c({title:null,image:null,video:null});const p=()=>{let o=!1;if(t.value.title=null,t.value.image=null,t.value.video=null,a.value||(t.value.title="Please enter a title",o=!0),v.value||(t.value.image="Please select a thumbnail",o=!0),f.value||(t.value.video="Please select a video",o=!0),o)return;let s=new FormData;s.append("title",a.value),s.append("image",v.value),s.append("video",f.value),C.post("/videos",s)},_=o=>f.value=o.target.files[0],x=o=>v.value=o.target.files[0];return(o,s)=>(r(),d(h,null,[g(l(y),{title:"Youtube"}),g(M,null,{default:b(()=>[e("div",P,[j,e("form",{onSubmit:w(p,["prevent"])},[e("div",null,[D,k(e("input",{"onUpdate:modelValue":s[0]||(s[0]=m=>F(a)?a.value=m:a=m),type:"text",class:"form-control block w-full px-5 py-1.5 text-xl font-normal text-gray-200 bg-black placeholder-gray-400 bg-clip-padding border border-solid border-gray-600 rounded transition ease-in-out m-0 border-transparent focus:ring-0",placeholder:"My cool video"},null,512),[[V,l(a)]]),l(t).title?(r(),d("span",N,n(l(t).title),1)):u("",!0)]),O,e("div",null,[e("div",S,[e("div",T,[A,e("input",{onChange:x,class:"form-control block w-full px-3 py-1.5 border text-white border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none",type:"file",id:"formFile"},null,32)])]),l(t).image?(r(),d("span",U,n(l(t).image),1)):u("",!0),i.errors&&i.errors.image?(r(),d("span",E,n(i.errors.image),1)):u("",!0)]),I,e("div",null,[e("div",R,[e("div",Y,[Z,e("input",{onChange:_,class:"form-control block w-full px-3 py-1.5 border text-white border-solid border-gray-600 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none",type:"file",id:"formFile"},null,32),l(t).video?(r(),d("span",q,n(l(t).video),1)):u("",!0),i.errors&&i.errors.video?(r(),d("span",z,n(i.errors.video),1)):u("",!0)])])]),G,H],40,B)])]),_:1})],64))}};export{Q as default};
