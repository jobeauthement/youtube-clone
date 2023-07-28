import{o as l,c as d,b as e,t as o,f as F,D as $,E as k,r as v,z as V,n as x,u as a,i as p,h as g,a as n,F as m,w as _,Z as L,p as f,l as b}from"./app-aa2f7841.js";import{_ as z,T as M}from"./NavLayout-a77313ea.js";import{C as y}from"./CheckCircle-3fa7e791.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";const T={name:"ThumbDownOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},N=["aria-hidden","aria-label"],O=["fill","width","height"],B={d:"M19,15V3H23V15H19M15,3A2,2 0 0,1 17,5V15C17,15.55 16.78,16.05 16.41,16.41L9.83,23L8.77,21.94C8.5,21.67 8.33,21.3 8.33,20.88L8.36,20.57L9.31,16H3C1.89,16 1,15.1 1,14V12C1,11.74 1.05,11.5 1.14,11.27L4.16,4.22C4.46,3.5 5.17,3 6,3H15M15,5H5.97L3,12V14H11.78L10.65,19.32L15,14.97V5Z"},D={key:0};function A(i,r,s,t,u,h){return l(),d("span",$(i.$attrs,{"aria-hidden":!s.title,"aria-label":s.title,class:"material-design-icon thumb-down-outline-icon",role:"img",onClick:r[0]||(r[0]=c=>i.$emit("click",c))}),[(l(),d("svg",{fill:s.fillColor,class:"material-design-icon__svg",width:s.size,height:s.size,viewBox:"0 0 24 24"},[e("path",B,[s.title?(l(),d("title",D,o(s.title),1)):F("",!0)])],8,O))],16,N)}const I=H(T,[["render",A]]),R=["src"],S=["src"],j={class:"w-[500px]"},E={class:"px-1.5 pl-3 text-white mt-1"},Z={class:"text-[15px] pb-1.5 font-extrabold w-full cursor-pointer"},P={class:"text-[12px] text-gray-300 font-extrabold flex gap-1 items-center cursor-pointer"},U={class:"text-xs mb-1 text-gray-300 cursor-pointer"},w={__name:"RecommendedVideos",props:{vid:Object},setup(i){const r=i,{vid:s}=k(r);let t=v(!1),u=v(null);return V(()=>t.value,h=>{if(h)return u.value.play(),"";u.value.pause(),u.value.currentTime=0}),(h,c)=>(l(),d(m,null,[e("div",{onMouseover:c[0]||(c[0]=C=>p(t)?t.value=!0:t=!0),onMouseleave:c[1]||(c[1]=C=>p(t)?t.value=!1:t=!1)},[e("img",{width:"340",class:x(["aspect-video cursor-pointer rounded-lg",a(t)?"delay-350 hidden":""]),src:a(s).thumbnail||""},null,10,R),e("div",{class:x(["w-full h-full aspect-video cursor-pointer",a(t)?"":"delay-350 hidden"])},[e("video",{width:"340",ref_key:"video",ref:u,class:"rounded-lg cursor-pointer",src:a(s).video||""},null,8,S)],2)],32),e("div",j,[e("div",E,[e("div",Z,o(a(s).title),1),e("p",P,[g(o(a(s).user)+" ",1),n(y,{fillColor:"#888888",size:15})]),e("div",U,o(a(s).views),1)])])],64))}},Y={class:"xl:flex"},q={class:"p-3"},G=["src"],J={class:"text-white text-2xl font-extrabold mt-4"},K={class:"flex items-center mb-4"},Q=["src"],W={class:"pl-2 mt-1"},X={class:"text-white text-lg font-extrabold flex items-center"},ee={class:"text-gray-400 text-sm font-extrabold"},te={class:"w-[500px] p-3 block sm:hidden"},se={class:"bg-[#3F3F3F] rounded-lg w-full p-3 text-white"},ie={class:"text-white text-lg font-extrabold"},oe=e("div",{class:"text-sm font-extrabold mb-6"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1),le=e("div",{class:"text-sm font-extrabold"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",-1),de={class:"mt-6"},ne={class:"text-white text-lg font-extrabold"},ae={class:"flex items-flex mb-4 mt-2"},re=["src"],ce={class:"pl-6 mt-1"},ue={class:"text-white font-extrabold flex items-baseline"},me={class:"text-gray-400 pl-3"},he={class:"text-gray-200 text-sm font-extrabold"},_e={class:"mt-4 flex items-center"},fe={class:"text-gray-400 text-sm font-extrabold pr-10"},ve={class:"w-[500px] p-3 sm:block hidden"},ge={__name:"Video",props:{video:Object,comments:Array,recommendedVideos:Array},setup(i){return(r,s)=>(l(),d(m,null,[n(a(L),{title:"Youtube"}),n(z,null,{default:_(()=>[e("div",Y,[e("div",q,[e("video",{onMouseover:s[0]||(s[0]=t=>r.show=!0),src:i.video.video||"",controls:"",autoplay:""},null,40,G),e("div",J,o(i.video.title),1),e("div",K,[e("img",{class:"rounded-full mt-2 flex items-baseline w-12 h-12",src:`https://picsum.photos/id/${(Math.random()*100).toFixed(0)}/100`||""},null,8,Q),e("div",W,[e("div",X,[g(o(i.video.user)+" ",1),n(y,{class:"pl-2",fillColor:"#888888",size:17})]),e("div",ee,o(i.video.views),1)])]),e("div",te,[(l(!0),d(m,null,f(i.recommendedVideos,t=>(l(),d("div",{key:t},[n(a(b),{class:"flex mb-3",href:r.route("videos.show",{id:t.id})},{default:_(()=>[n(w,{vid:t},null,8,["vid"])]),_:2},1032,["href"])]))),128))]),e("div",se,[e("div",ie,o(i.video.views),1),oe,le]),e("div",de,[e("div",ne,o(i.comments.length)+" Comments",1),(l(!0),d(m,null,f(i.comments,t=>(l(),d("div",{key:t},[e("div",ae,[e("img",{class:"rounded-full mt-2 w-12 h-12",src:`https://picsum.photos/id/${(Math.random()*100).toFixed(0)}/100`||""},null,8,re),e("div",ce,[e("div",ue,[e("div",null,o(t.user),1),e("div",me,o(t.time),1)]),e("div",he,o(t.text),1),e("div",_e,[n(M,{fillColor:"#FFFFFF",size:20,class:"pr-2"}),e("div",fe,o((Math.random()*100).toFixed(0)),1),n(I,{fillColor:"#FFFFFF",size:20})])])])]))),128))])]),e("div",ve,[(l(!0),d(m,null,f(i.recommendedVideos,t=>(l(),d("div",{key:t},[n(a(b),{class:"flex mb-3",href:r.route("videos.show",{id:t.id})},{default:_(()=>[n(w,{vid:t},null,8,["vid"])]),_:2},1032,["href"])]))),128))])])]),_:1})],64))}};export{ge as default};