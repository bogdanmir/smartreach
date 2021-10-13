import{M as L,a as A,b as B,c as z,r as ee,d as te,e as s,o as a,f as k,w as i,g as e,h as t,n as x,T as P,i as v,D as O,j as R,k as se,l as H,m as j,p as N,q as C,s as d,F as b,t as $,u as ne,v as oe,x as D,y as re,z as I,S as ae,A as ie,B as ce,C as le,E as de,G as ue,H as me,I as fe,J as _e,K as pe,L as he,N as ge,O as G,P as xe,Q as ve,R as be}from"./vendor.1e004e46.js";const ye=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const r of u.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function _(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerpolicy&&(u.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?u.credentials="include":l.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=_(l);fetch(l.href,u)}};ye();var p=(c,n)=>{for(const[_,o]of n)c[_]=o;return c};const we={components:{Menu:L,MenuButton:A,MenuItem:B,MenuItems:z,MenuIcon:ee,ArrowNarrowRightIcon:te}},$e={class:"py-1"},Ie=v(" Ideas ");function Me(c,n,_,o,l,u){const r=s("MenuIcon"),m=s("MenuButton"),h=s("MenuItem"),y=s("ArrowNarrowRightIcon"),w=s("MenuItems"),M=s("Menu");return a(),k(M,{as:"div",class:"relative inline-block text-left"},{default:i(()=>[e("div",null,[t(m,{class:"inline-flex justify-center w-full p-2 text-white"},{default:i(()=>[t(r,{class:"ml-2 h-5 w-5","aria-hidden":"true"})]),_:1})]),t(P,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[t(w,{class:"origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-40"},{default:i(()=>[e("div",$e,[t(h,null,{default:i(({active:g})=>[e("a",{href:"#",class:x([g?"bg-gray-100 text-gray-900":"text-gray-700","flex justify-between px-4 py-2 text-sm"])},"Latest changes",2)]),_:1}),t(h,null,{default:i(({active:g})=>[e("a",{href:"#",class:x([g?"bg-gray-100 text-gray-900":"text-gray-700","flex justify-between px-4 py-2 text-sm"])},[Ie,t(y,{class:"w-3 transform -rotate-45"})],2)]),_:1}),t(h,null,{default:i(({active:g})=>[e("a",{href:"#",class:x([g?"bg-gray-100 text-gray-900":"text-gray-700","flex justify-between px-4 py-2 text-sm"])},"Roadmap",2)]),_:1})])]),_:1})]),_:1})]),_:1})}var ke=p(we,[["render",Me]]);const Se={components:{Dialog:O,DialogOverlay:R,DialogTitle:se,TransitionChild:H,TransitionRoot:j,XIcon:N,DropdownMenu:ke},setup(){return{open:C(!1)}}},De={class:"absolute inset-0 overflow-hidden"},je={class:"fixed inset-y-0 right-0 pl-10 max-w-full flex"},Ne={class:"w-screen max-w-md"},Ce={class:"h-full flex flex-col bg-white shadow-xl overflow-y-scroll"},Te={class:"py-6 px-4 bg-green-700 sm:px-6"},Le={class:"flex items-center"},Ae=v(" Latest changes "),Be={class:"h-7 flex items-center ml-auto mr-0"},ze=e("span",{class:"sr-only"},"Close panel",-1),Pe=e("div",{class:"relative flex-1 py-6 px-4 sm:px-6"},[e("div",{class:"absolute inset-0 py-6 px-4 sm:px-6"},[e("div",{class:"h-full border-2 border-dashed border-gray-200","aria-hidden":"true"})])],-1);function Oe(c,n,_,o,l,u){const r=s("DialogOverlay"),m=s("DropdownMenu"),h=s("DialogTitle"),y=s("XIcon"),w=s("TransitionChild"),M=s("Dialog"),g=s("TransitionRoot");return a(),d(b,null,[t(g,{as:"template",show:o.open},{default:i(()=>[t(M,{as:"div",class:"fixed inset-0 overflow-hidden z-40",onClose:n[1]||(n[1]=S=>o.open=!1)},{default:i(()=>[e("div",De,[t(r,{class:"absolute inset-0"}),e("div",je,[t(w,{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:i(()=>[e("div",Ne,[e("div",Ce,[e("div",Te,[e("div",Le,[t(m),t(h,{class:"text-lg font-medium text-white"},{default:i(()=>[Ae]),_:1}),e("div",Be,[e("button",{type:"button",class:"bg-green-700 rounded-md text-green-200 hover:text-white focus:outline-none",onClick:n[0]||(n[0]=S=>o.open=!1)},[ze,t(y,{class:"h-6 w-6","aria-hidden":"true"})])])])]),Pe])])]),_:1})])])]),_:1})]),_:1},8,["show"]),e("button",{onClick:n[2]||(n[2]=S=>o.open=!0),type:"button",class:"fixed right-0 sm:-right-6 lg:-right-8 top-1/2 transform -rotate-90 origin-center-right block px-3 py-2 border border-transparent text-sm font-medium rounded-sm shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"}," What's new ")],64)}var Re=p(Se,[["render",Oe]]);const He={components:{HideSidebar:Re}};function Ge(c,n,_,o,l,u){const r=s("router-view"),m=s("HideSidebar");return a(),d("div",null,[t(r),t(m)])}var Ee=p(He,[["render",Ge]]);const Ue=[{id:1}],We={setup(){return{items:Ue}}},T=c=>(ne("data-v-36365d70"),c=c(),oe(),c),Ze={class:"px-8 sm:w-full sm:max-w-lg"},Xe=T(()=>e("h5",{class:"text-md font-medium text-gray-600 mb-5"},"Become a email and copy writing pro in seconds.",-1)),Ye={role:"list",class:"text-gray-600"},Ve=T(()=>e("h6",{class:"text-md font-medium mb-1"},"AI Personalised Cold Email Outreach",-1)),Qe=T(()=>e("p",{class:"text-sm"},"Our AI Engine will research the internet and build a personalised intro",-1)),Fe=[Ve,Qe],qe=D('<li class="list-item pl-8" data-v-36365d70><h6 class="text-md font-medium mb-1" data-v-36365d70>Personalised LinkedIn Outreach</h6><p data-v-36365d70>Custom AI modules to create hyper personalised messages using LinkedIn data</p></li><li class="list-item pl-8" data-v-36365d70><h6 class="text-md font-medium mb-1" data-v-36365d70>AI Marketing copy</h6><p data-v-36365d70>Our trained AI engine will help generate high converting ad copy in seconds</p></li><li class="list-item pl-8" data-v-36365d70><h6 class="text-md font-medium mb-1" data-v-36365d70>Blog Intros</h6><p data-v-36365d70>Generate catchy intros that hook your reads with no effort</p></li>',3);function Ke(c,n,_,o,l,u){return a(),d("div",Ze,[Xe,e("ul",Ye,[(a(!0),d(b,null,$(o.items,r=>(a(),d("li",{key:r.id,class:"list-item pl-8"},Fe))),128)),qe])])}var Je=p(We,[["render",Ke],["__scopeId","data-v-36365d70"]]),et="/assets/reach-logo-green.67410f67.svg";const tt={},st={class:"md:flex md:items-center md:justify-between px-4 py-2 shadow-md fixed bg-white top-0 left-0 w-full"},nt=e("div",{class:"flex-1 min-w-0"},[e("a",{href:"#"},[e("img",{src:et,alt:"logo",class:"header-logo"})])],-1),ot=e("div",{class:"mt-4 flex md:mt-0 md:ml-4"},[e("p",{class:"inline-flex items-center text-sm font-medium text-gray-700"}," Don\u2019t have an account? "),e("button",{type:"button",class:"ml-3 inline-flex items-center text-sm font-medium text-green-500 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"}," Sign up ")],-1),rt=[nt,ot];function at(c,n){return a(),d("div",st,rt)}var it=p(tt,[["render",at]]);const ct={},lt={class:"sm:w-full sm:max-w-lg"},dt={class:"bg-white py-12 px-4 shadow sm:rounded-xs sm:px-12"},ut=e("h4",{class:"text-center text-xl font-medium text-gray-800 mb-2"},"Welcome back!",-1),mt=e("p",{class:"text-center text-sm mb-4"},"Make some magic and close some deals through the power of AI copywritng",-1),ft={action:"#",method:"POST"},_t=D('<div class="relative mb-6"><label for="email" class="absolute top-4 left-3 block text-md text-gray-700"> Email address </label><div class="mt-1"><input id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm hover:border-gray-500 transition-colors duration-500"></div></div><a href="#" class="block text-sm text-right font-medium text-green-600 hover:text-green-500"> Forgot your password? </a><div class="relative mb-6"><label for="password" class="absolute top-4 left-3 block text-md text-gray-700"> Password </label><div class="mt-1"><input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm hover:border-gray-500 transition-colors duration-500"></div></div>',3),pt=v(" Login ");function ht(c,n){const _=s("router-link");return a(),d("div",lt,[e("div",dt,[ut,mt,e("form",ft,[_t,t(_,{to:"/dashboard",class:"w-full flex justify-center py-2.5 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer rounded transition-colors duration-500"},{default:i(()=>[pt]),_:1})])])])}var gt=p(ct,[["render",ht]]);const xt={name:"Login",components:{LoginComponent:gt,Header:it,List:Je}},vt={class:"min-h-screen bg-gray-50 flex justify-center py-32 sm:px-6 lg:px-8"};function bt(c,n,_,o,l,u){const r=s("Header"),m=s("LoginComponent"),h=s("List");return a(),d("div",null,[t(r),e("div",vt,[t(m),t(h)])])}var yt=p(xt,[["render",bt]]);const wt=[{name:"Projects",href:"#",current:!1},{name:"Project Nero",href:"#",current:!0}],$t={components:{HomeIcon:re},setup(){return{pages:wt}}},It={class:"flex","aria-label":"Breadcrumb"},Mt={role:"list",class:"flex items-center space-x-4"},kt={href:"#",class:"text-gray-400 hover:text-gray-500"},St=e("span",{class:"sr-only"},"Projects",-1),Dt={class:"flex items-center"},jt=e("svg",{class:"flex-shrink-0 h-5 w-5 text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true"},[e("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})],-1),Nt=["href","aria-current"];function Ct(c,n,_,o,l,u){const r=s("HomeIcon");return a(),d("nav",It,[e("ol",Mt,[e("li",null,[e("div",null,[e("a",kt,[t(r,{class:"flex-shrink-0 h-5 w-5","aria-hidden":"true"}),St])])]),(a(!0),d(b,null,$(o.pages,m=>(a(),d("li",{key:m.name},[e("div",Dt,[jt,e("a",{href:m.href,class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700","aria-current":m.current?"page":void 0},I(m.name),9,Nt)])]))),128))])])}var Tt=p($t,[["render",Ct]]);const Lt=[{name:"Manually",href:"#",current:!1},{name:"Upload CSV",href:"#",current:!0},{name:"Google Sheets",href:"#",current:!1}],At={setup(){return{tabs:Lt}}},Bt={class:"sm:hidden"},zt=e("label",{for:"tabs",class:"sr-only"},"Select a tab",-1),Pt={id:"tabs",name:"tabs",class:"block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"},Ot=["selected"],Rt={class:"hidden sm:block"},Ht={class:"border-b border-gray-200"},Gt={class:"-mb-px flex justify-around space-x-8","aria-label":"Tabs"},Et=["href","aria-current"];function Ut(c,n,_,o,l,u){return a(),d("div",null,[e("div",Bt,[zt,e("select",Pt,[(a(!0),d(b,null,$(o.tabs,r=>(a(),d("option",{key:r.name,selected:r.current},I(r.name),9,Ot))),128))])]),e("div",Rt,[e("div",Ht,[e("nav",Gt,[(a(!0),d(b,null,$(o.tabs,r=>(a(),d("a",{key:r.name,href:r.href,class:x([r.current?"border-green-500 text-green-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]),"aria-current":r.current?"page":void 0},I(r.name),11,Et))),128))])])])])}var Wt=p(At,[["render",Ut]]);const Zt={},Xt={class:"bg-white shadow sm:rounded-lg mb-5"},Yt=D('<div class="px-4 py-5 sm:p-6"><h3 class="text-lg leading-6 font-medium text-gray-900"> Update your email </h3><div class="mt-2 max-w-xl text-sm text-gray-500"><p> Change the email address you want associated with your account. </p></div><form class="mt-5 sm:flex sm:items-center"><div class="w-full sm:max-w-xs"><label for="email" class="sr-only">Email</label><input type="text" name="email" id="email" class="p-2 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"></div><button type="submit" class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Save </button></form></div>',1),Vt=[Yt];function Qt(c,n){return a(),d("div",Xt,Vt)}var Ft=p(Zt,[["render",Qt]]);const qt={},Kt={class:"flex mb-5"},Jt=D('<div class="mr-4 flex-shrink-0"><svg class="h-16 w-16 border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true"><path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0"></path></svg></div><div><h4 class="text-lg font-bold">Lorem ipsum</h4><p class="mt-1"> Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto. </p></div>',2),es=[Jt];function ts(c,n){return a(),d("div",Kt,es)}var ss=p(qt,[["render",ts]]);const ns={components:{Switch:ae,SwitchDescription:ie,SwitchGroup:ce,SwitchLabel:le},setup(){return{enabled:C(!1)}}},os={class:"flex-grow flex flex-col"},rs=v("Available to hire"),as=v("Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.");function is(c,n,_,o,l,u){const r=s("SwitchLabel"),m=s("SwitchDescription"),h=s("Switch"),y=s("SwitchGroup");return a(),k(y,{as:"div",class:"flex items-center justify-between"},{default:i(()=>[e("span",os,[t(r,{as:"span",class:"text-sm font-medium text-gray-900",passive:""},{default:i(()=>[rs]),_:1}),t(m,{as:"span",class:"text-sm text-gray-500"},{default:i(()=>[as]),_:1})]),t(h,{modelValue:o.enabled,"onUpdate:modelValue":n[0]||(n[0]=w=>o.enabled=w),class:x([o.enabled?"bg-green-600":"bg-gray-200","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"])},{default:i(()=>[e("span",{"aria-hidden":"true",class:x([o.enabled?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])},null,2)]),_:1},8,["modelValue","class"])]),_:1})}var cs=p(ns,[["render",is]]);const ls={components:{SpeakerphoneIcon:de,XIcon:N}},ds={class:"bg-indigo-600"},us={class:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"},ms={class:"flex items-center justify-between flex-wrap"},fs={class:"w-0 flex-1 flex items-center"},_s={class:"flex p-2 rounded-lg bg-indigo-800"},ps=e("p",{class:"ml-3 font-medium text-white truncate"},[e("span",{class:"md:hidden"}," We announced a new product! "),e("span",{class:"hidden md:inline"}," Big news! We're excited to announce a brand new product. ")],-1),hs=e("div",{class:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},[e("a",{href:"#",class:"flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"}," Learn more ")],-1),gs={class:"order-2 flex-shrink-0 sm:order-3 sm:ml-3"},xs={type:"button",class:"-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"},vs=e("span",{class:"sr-only"},"Dismiss",-1);function bs(c,n,_,o,l,u){const r=s("SpeakerphoneIcon"),m=s("XIcon");return a(),d("div",ds,[e("div",us,[e("div",ms,[e("div",fs,[e("span",_s,[t(r,{class:"h-6 w-6 text-white","aria-hidden":"true"})]),ps]),hs,e("div",gs,[e("button",xs,[vs,t(m,{class:"h-6 w-6 text-white","aria-hidden":"true"})])])])])])}var ys=p(ls,[["render",bs]]),E="/assets/reach-logo-white.2d51baac.svg",ws="/assets/schedule-icon.285fd73f.svg";const $s=[{name:"Compose Copy",href:"#",icon:pe,current:!0},{name:"Refer & Earn",href:"/ReferEarn",icon:he,current:!1},{name:"Profile",href:"#",icon:ge,current:!1}],Is=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}],Ms={name:"Dashboard",components:{Dialog:O,DialogOverlay:R,Menu:L,MenuButton:A,MenuItem:B,MenuItems:z,TransitionChild:H,TransitionRoot:j,QuestionMarkCircleIcon:ue,MenuAlt2Icon:me,SearchIcon:fe,XIcon:N,ChevronDownIcon:_e,Breadcrumbs:Tt,Tab:Wt,TransitionRoot:j,ActionPanel:Ft,MediaObjects:ss,Toggles:cs,Banners:ys},setup(){const c=C(!1);return{navigation:$s,userNavigation:Is,sidebarOpen:c}}},ks={class:"h-screen flex overflow-hidden bg-gray-100"},Ss={class:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-green-700"},Ds={class:"absolute top-0 right-0 -mr-12 pt-2"},js=e("span",{class:"sr-only"},"Close sidebar",-1),Ns=e("div",{class:"flex-shrink-0 flex items-center px-4"},[e("img",{class:"h-8 w-auto",src:E,alt:"Workflow"})],-1),Cs={class:"mt-5 flex-1 h-0 overflow-y-auto"},Ts={class:"px-2 space-y-1"},Ls=["href"],As=e("div",{class:"flex-shrink-0 w-14","aria-hidden":"true"},null,-1),Bs={class:"hidden bg-green-700 md:flex md:flex-shrink-0"},zs={class:"flex flex-col w-64"},Ps={class:"flex flex-col flex-grow pt-5 pb-4 overflow-y-auto"},Os=e("div",{class:"flex items-center flex-shrink-0 px-4"},[e("img",{class:"h-8 w-auto",src:E,alt:"Workflow"})],-1),Rs={class:"mt-5 flex-1 flex flex-col"},Hs={class:"flex-1 px-2 space-y-1"},Gs=["href"],Es={class:"flex flex-col w-0 flex-1 overflow-hidden"},Us={class:"relative z-10 flex-shrink-0 flex h-16 bg-white shadow"},Ws=e("span",{class:"sr-only"},"Open sidebar",-1),Zs={class:"flex-1 px-4 flex justify-between items-center"},Xs={class:"ml-4 flex items-center md:ml-6"},Ys={type:"button",class:"group flex items-center bg-white p-1 text-sm text-gray-600 hover:text-gray-500 focus:outline-none"},Vs=e("span",{class:"sr-only"},"View notifications",-1),Qs=e("span",null,"Help",-1),Fs=e("span",{class:"sr-only"},"Open user menu",-1),qs=e("div",{class:"h-8 w-8 rounded-full",style:{"background-size":"cover","background-position":"50% 50%","background-image":'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiIGZpbGw9IiM4NjhCRUMiLz4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIgZmlsbD0iIzc1N0FFOSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHJlY3QgeD0iMTYuNjI2MiIgeT0iLTMuNzUiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNi44NzUiIHRyYW5zZm9ybT0icm90YXRlKDEuNzAxOTIgMTYuNjI2MiAtMy43NSkiIGZpbGw9IiM3NTdBRTIiLz4KPHJlY3QgeD0iMTUuNDQ2MyIgeT0iMTguMzc1IiB3aWR0aD0iMTUuMDI2IiBoZWlnaHQ9IjEyLjMyMTMiIHRyYW5zZm9ybT0icm90YXRlKDE0LjQzNDMgMTUuNDQ2MyAxOC4zNzUpIiBmaWxsPSIjNzU3QUUyIi8+CjxjaXJjbGUgY3g9IjIuODEyNSIgY3k9IjE0LjgxMjUiIHI9IjkuMTg3NSIgZmlsbD0iIzc1N0FFMiIvPgo8L2c+Cjwvc3ZnPgo=")'}},null,-1),Ks=["href"],Js={class:"flex-1 relative overflow-y-auto focus:outline-none"},en=e("div",{class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 md:px-8 mb-2 bg-white"},[e("h1",{class:"text-2xl font-semibold text-gray-900 flex"},[e("img",{class:"h-8 w-8 rounded-full mr-4",src:ws,alt:""}),v(" PERSONALISED ICEBREAKER GENERATOR ")])],-1),tn={class:"max-w-xl bg-white m-4"},sn={class:"p-6"};function nn(c,n,_,o,l,u){const r=s("DialogOverlay"),m=s("TransitionChild"),h=s("XIcon"),y=s("Dialog"),w=s("TransitionRoot"),M=s("Banners"),g=s("MenuAlt2Icon"),S=s("Breadcrumbs"),U=s("QuestionMarkCircleIcon"),W=s("ChevronDownIcon"),Z=s("MenuButton"),X=s("MenuItem"),Y=s("MenuItems"),V=s("Menu"),Q=s("Tab"),F=s("ActionPanel"),q=s("MediaObjects"),K=s("Toggles");return a(),d("div",ks,[t(w,{as:"template",show:o.sidebarOpen},{default:i(()=>[t(y,{as:"div",class:"fixed inset-0 flex z-40 md:hidden",onClose:n[1]||(n[1]=f=>o.sidebarOpen=!1)},{default:i(()=>[t(m,{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[t(r,{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})]),_:1}),t(m,{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:i(()=>[e("div",Ss,[t(m,{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[e("div",Ds,[e("button",{type:"button",class:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:n[0]||(n[0]=f=>o.sidebarOpen=!1)},[js,t(h,{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),Ns,e("div",Cs,[e("nav",Ts,[(a(!0),d(b,null,$(o.navigation,f=>(a(),d("a",{key:f.name,href:f.href,class:x([f.current?"bg-green-800 text-white":"text-green-100 hover:bg-green-600","group flex items-center px-2 py-2 text-base font-medium rounded-md"])},[(a(),k(G(f.icon),{class:"mr-4 flex-shrink-0 h-6 w-6 text-green-300","aria-hidden":"true"})),v(" "+I(f.name),1)],10,Ls))),128))])])])]),_:1}),As]),_:1})]),_:1},8,["show"]),e("div",Bs,[e("div",zs,[e("div",Ps,[Os,e("div",Rs,[e("nav",Hs,[(a(!0),d(b,null,$(o.navigation,f=>(a(),d("a",{key:f.name,href:f.href,class:x([f.current?"bg-green-800 text-white":"text-green-100 hover:bg-green-600","group flex items-center px-2 py-2 text-sm font-medium rounded-md"])},[(a(),k(G(f.icon),{class:"mr-3 flex-shrink-0 h-6 w-6 text-green-300","aria-hidden":"true"})),v(" "+I(f.name),1)],10,Gs))),128))])])])])]),e("div",Es,[t(M),e("div",Us,[e("button",{type:"button",class:"md:hidden px-4 border-r border-gray-200 text-gray-500 focus:outline-none",onClick:n[2]||(n[2]=f=>o.sidebarOpen=!0)},[Ws,t(g,{class:"h-6 w-6","aria-hidden":"true"})]),e("div",Zs,[t(S),e("div",Xs,[e("button",Ys,[Vs,t(U,{class:"h-6 w-6 mr-1 text-gray-400","aria-hidden":"true"}),Qs]),t(V,{as:"div",class:"ml-3 relative"},{default:i(()=>[e("div",null,[t(Z,{class:"max-w-xs bg-white text-gray-600 hover:text-gray-500 flex items-center text-sm rounded-full focus:outline-none"},{default:i(()=>[Fs,qs,t(W,{class:"h-6 w-6","aria-hidden":"true"})]),_:1})]),t(P,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[t(Y,{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:i(()=>[(a(!0),d(b,null,$(o.userNavigation,f=>(a(),k(X,{key:f.name},{default:i(({active:J})=>[e("a",{href:f.href,class:x([J?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},I(f.name),11,Ks)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])])]),e("main",Js,[e("div",null,[en,e("div",tn,[t(Q),e("div",sn,[t(F),t(q),t(K)])])])])])])}var on=p(Ms,[["render",nn]]);const rn=[{path:"/",name:"Dashboard",component:on},{path:"/login",name:"Login",component:yt}],an=xe({history:ve(),routes:rn});be(Ee).use(an).mount("#app");
