import{r as t,o as a,c as l,a as n,b as e,d as T,S as se,e as ae,f as re,g as ie,h as C,i as x,w as i,n as y,j as v,F as $,k as I,t as k,l as D,m as ce,p as N,D as O,q as B,M as E,s as G,u as H,v as U,T as W,x as L,y as le,z as de,A as ue,B as me,C as Z,E as _e,G as fe,H as pe,I as he,J as P,K as ge,L as xe,N as ve,O as be,P as ye,Q as we,R as $e,U as Ie}from"./vendor.dad9a744.js";const Me=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function m(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(c){if(c.ep)return;c.ep=!0;const u=m(c);fetch(c.href,u)}};Me();var _=(r,s)=>{for(const[m,o]of s)r[m]=o;return r};const ke={},je=e("div",null,"EmptyLayout",-1);function Se(r,s){const m=t("router-view");return a(),l("main",null,[je,n(m)])}var Te=_(ke,[["render",Se]]);const Ce={},De={class:"bg-white shadow sm:rounded-lg"},Ne=T('<div class="px-4 py-5 sm:p-6"><h3 class="text-lg leading-6 font-medium text-gray-900"> Update your email </h3><div class="mt-2 max-w-xl text-sm text-gray-500"><p> Change the email address you want associated with your account. </p></div><form class="mt-5 sm:flex sm:items-center"><div class="w-full sm:max-w-xs"><label for="email" class="sr-only">Email</label><input type="text" name="email" id="email" class="p-2 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"></div><button type="submit" class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Save </button></form></div>',1),Le=[Ne];function Pe(r,s){return a(),l("div",De,Le)}var X=_(Ce,[["render",Pe]]);const Ae={},Re={class:"flex p-5"},ze=T('<div class="mr-4 flex-shrink-0"><svg class="h-16 w-16 border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true"><path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0"></path></svg></div><div><h4 class="text-lg font-bold">Lorem ipsum</h4><p class="mt-1"> Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto. </p></div>',2),Oe=[ze];function Be(r,s){return a(),l("div",Re,Oe)}var V=_(Ae,[["render",Be]]);const Ee={components:{Switch:se,SwitchDescription:ae,SwitchGroup:re,SwitchLabel:ie},setup(){return{enabled:C(!1)}}},Ge={class:"flex-grow flex flex-col"},He=v("Available to hire"),Ue=v("Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.");function We(r,s,m,o,c,u){const d=t("SwitchLabel"),h=t("SwitchDescription"),g=t("Switch"),f=t("SwitchGroup");return a(),x(f,{as:"div",class:"flex items-center justify-between p-5"},{default:i(()=>[e("span",Ge,[n(d,{as:"span",class:"text-sm font-medium text-gray-900",passive:""},{default:i(()=>[He]),_:1}),n(h,{as:"span",class:"text-sm text-gray-500"},{default:i(()=>[Ue]),_:1})]),n(g,{modelValue:o.enabled,"onUpdate:modelValue":s[0]||(s[0]=w=>o.enabled=w),class:y([o.enabled?"bg-green-600":"bg-gray-200","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"])},{default:i(()=>[e("span",{"aria-hidden":"true",class:y([o.enabled?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])},null,2)]),_:1},8,["modelValue","class"])]),_:1})}var Y=_(Ee,[["render",We]]);const Ze=[{name:"Manually"},{name:"Upload CSV"},{name:"Google Sheets"}],Xe={components:{ActionPanel:X,MediaObjects:V,Toggles:Y},setup(){return{currentTab:C("Manually"),tabs:Ze}}},Ve={class:"sm:hidden"},Ye=e("label",{for:"tabs",class:"sr-only"},"Select a tab",-1),Qe={id:"tabs",name:"tabs",class:"block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"},Fe=["selected"],qe={class:"hidden sm:block"},Ke={class:"border-b border-gray-200"},Je={class:"-mb-px flex justify-around space-x-8","aria-label":"Tabs"},et=["onClick","aria-current"];function tt(r,s,m,o,c,u){const d=t("ActionPanel"),h=t("MediaObjects"),g=t("Toggles");return a(),l("div",null,[e("div",Ve,[Ye,e("select",Qe,[(a(!0),l($,null,I(o.tabs,f=>(a(),l("option",{key:f.name,selected:f.current},k(f.name),9,Fe))),128))])]),e("div",qe,[e("div",Ke,[e("nav",Je,[(a(!0),l($,null,I(o.tabs,f=>(a(),l("a",{key:f.name,onClick:w=>o.currentTab=f.name,class:y([f.name==o.currentTab?"border-green-500 text-green-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer"]),"aria-current":f.current?"page":void 0},k(f.name),11,et))),128))])])]),o.currentTab=="Manually"?(a(),x(d,{key:0})):D("",!0),o.currentTab=="Upload CSV"?(a(),x(h,{key:1})):D("",!0),o.currentTab=="Google Sheets"?(a(),x(g,{key:2})):D("",!0)])}var A=_(Xe,[["render",tt]]);const nt={components:{SpeakerphoneIcon:ce,XIcon:N}},ot={class:"bg-indigo-600"},st={class:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"},at={class:"flex items-center justify-between flex-wrap"},rt={class:"w-0 flex-1 flex items-center"},it={class:"flex p-2 rounded-lg bg-indigo-800"},ct=e("p",{class:"ml-3 font-medium text-white truncate"},[e("span",{class:"md:hidden"}," We announced a new product! "),e("span",{class:"hidden md:inline"}," Big news! We're excited to announce a brand new product. ")],-1),lt=e("div",{class:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},[e("a",{href:"#",class:"flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"}," Learn more ")],-1),dt={class:"order-2 flex-shrink-0 sm:order-3 sm:ml-3"},ut={type:"button",class:"-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"},mt=e("span",{class:"sr-only"},"Dismiss",-1);function _t(r,s,m,o,c,u){const d=t("SpeakerphoneIcon"),h=t("XIcon");return a(),l("div",ot,[e("div",st,[e("div",at,[e("div",rt,[e("span",it,[n(d,{class:"h-6 w-6 text-white","aria-hidden":"true"})]),ct]),lt,e("div",dt,[e("button",ut,[mt,n(h,{class:"h-6 w-6 text-white","aria-hidden":"true"})])])])])])}var ft=_(nt,[["render",_t]]),Q="/assets/reach-logo-white.2d51baac.svg";const pt=[{name:"Compose Copy",href:"/dashboard",icon:_e},{name:"Refer & Earn",href:"/ReferEarn",icon:fe},{name:"Profile",href:"/profile",icon:pe},{name:"Resources",href:"/resources",icon:he}],ht=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}],gt={name:"Dashboard",components:{Dialog:O,DialogOverlay:B,Menu:E,MenuButton:G,MenuItem:H,MenuItems:U,TransitionChild:W,TransitionRoot:L,QuestionMarkCircleIcon:le,MenuAlt2Icon:de,SearchIcon:ue,XIcon:N,ChevronDownIcon:me,Tab:A,TransitionRoot:L,ActionPanel:X,MediaObjects:V,Toggles:Y,Banners:ft},setup(){const r=C(!1);return{navigation:pt,userNavigation:ht,sidebarOpen:r}}},xt={class:"h-screen flex overflow-hidden bg-gray-100"},vt={class:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-green-700"},bt={class:"absolute top-0 right-0 -mr-12 pt-2"},yt=e("span",{class:"sr-only"},"Close sidebar",-1),wt=e("div",{class:"flex-shrink-0 flex items-center px-4"},[e("img",{class:"h-10 w-auto",src:Q,alt:"Workflow"})],-1),$t={class:"mt-5 flex-1 h-0 overflow-y-auto"},It={class:"px-2 space-y-1"},Mt=e("div",{class:"flex-shrink-0 w-14","aria-hidden":"true"},null,-1),kt={class:"hidden bg-green-700 md:flex md:flex-shrink-0"},jt={class:"flex flex-col w-60"},St={class:"flex flex-col flex-grow pt-2 pb-4 overflow-y-auto"},Tt=e("div",{class:"flex items-center flex-shrink-0 px-4"},[e("img",{class:"h-10 w-auto",src:Q,alt:"Workflow"})],-1),Ct={class:"mt-5 flex-1 flex flex-col"},Dt={class:"flex-1 px-2 space-y-1"},Nt={class:"flex flex-col w-0 flex-1 overflow-hidden"},Lt={class:"relative z-10 flex-shrink-0 flex h-16 bg-white shadow"},Pt=e("span",{class:"sr-only"},"Open sidebar",-1),At={class:"flex-1 px-4 flex justify-end items-center"},Rt={class:"flex items-center"},zt={type:"button",class:"group flex items-center bg-white p-1 text-sm text-gray-600 hover:text-gray-500 focus:outline-none"},Ot=e("span",{class:"sr-only"},"View notifications",-1),Bt=e("span",null,"Help",-1),Et=e("span",{class:"sr-only"},"Open user menu",-1),Gt=e("div",{class:"h-8 w-8 rounded-full",style:{"background-size":"cover","background-position":"50% 50%","background-image":'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiIGZpbGw9IiM4NjhCRUMiLz4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIgZmlsbD0iIzc1N0FFOSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHJlY3QgeD0iMTYuNjI2MiIgeT0iLTMuNzUiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNi44NzUiIHRyYW5zZm9ybT0icm90YXRlKDEuNzAxOTIgMTYuNjI2MiAtMy43NSkiIGZpbGw9IiM3NTdBRTIiLz4KPHJlY3QgeD0iMTUuNDQ2MyIgeT0iMTguMzc1IiB3aWR0aD0iMTUuMDI2IiBoZWlnaHQ9IjEyLjMyMTMiIHRyYW5zZm9ybT0icm90YXRlKDE0LjQzNDMgMTUuNDQ2MyAxOC4zNzUpIiBmaWxsPSIjNzU3QUUyIi8+CjxjaXJjbGUgY3g9IjIuODEyNSIgY3k9IjE0LjgxMjUiIHI9IjkuMTg3NSIgZmlsbD0iIzc1N0FFMiIvPgo8L2c+Cjwvc3ZnPgo=")'}},null,-1),Ht=["href"];function Ut(r,s,m,o,c,u){const d=t("DialogOverlay"),h=t("TransitionChild"),g=t("XIcon"),f=t("router-link"),w=t("Dialog"),M=t("TransitionRoot"),b=t("Banners"),S=t("MenuAlt2Icon"),F=t("QuestionMarkCircleIcon"),q=t("ChevronDownIcon"),K=t("MenuButton"),J=t("MenuItem"),ee=t("MenuItems"),te=t("Menu"),ne=t("router-view");return a(),l("div",xt,[n(M,{as:"template",show:o.sidebarOpen},{default:i(()=>[n(w,{as:"div",class:"fixed inset-0 flex z-40 md:hidden",onClose:s[1]||(s[1]=p=>o.sidebarOpen=!1)},{default:i(()=>[n(h,{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[n(d,{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})]),_:1}),n(h,{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:i(()=>[e("div",vt,[n(h,{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[e("div",bt,[e("button",{type:"button",class:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:s[0]||(s[0]=p=>o.sidebarOpen=!1)},[yt,n(g,{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),wt,e("div",$t,[e("nav",It,[(a(!0),l($,null,I(o.navigation,p=>(a(),x(f,{to:p.href,key:p.name,class:y([p.href==r.$route.path?"bg-green-800 text-white":"text-green-100 hover:bg-green-600","group flex items-center px-2 py-2 text-base font-medium rounded-md"])},{default:i(()=>[(a(),x(P(p.icon),{class:"mr-4 flex-shrink-0 h-6 w-6 text-green-300","aria-hidden":"true"})),v(" "+k(p.name),1)]),_:2},1032,["to","class"]))),128))])])])]),_:1}),Mt]),_:1})]),_:1},8,["show"]),e("div",kt,[e("div",jt,[e("div",St,[Tt,e("div",Ct,[e("nav",Dt,[(a(!0),l($,null,I(o.navigation,p=>(a(),x(f,{to:p.href,key:p.name,class:y([p.href==r.$route.path?"bg-green-800 text-white":"text-green-100 hover:bg-green-600","group flex items-center px-2 py-2 text-sm font-medium rounded-md"])},{default:i(()=>[(a(),x(P(p.icon),{class:"mr-3 flex-shrink-0 h-6 w-6 text-green-300","aria-hidden":"true"})),v(" "+k(p.name),1)]),_:2},1032,["to","class"]))),128))])])])])]),e("div",Nt,[n(b),e("div",Lt,[e("button",{type:"button",class:"md:hidden px-4 border-r border-gray-200 text-gray-500 focus:outline-none",onClick:s[2]||(s[2]=p=>o.sidebarOpen=!0)},[Pt,n(S,{class:"h-6 w-6","aria-hidden":"true"})]),e("div",At,[e("div",Rt,[e("button",zt,[Ot,n(F,{class:"h-6 w-6 mr-1 text-gray-400","aria-hidden":"true"}),Bt]),n(te,{as:"div",class:"ml-3 relative"},{default:i(()=>[e("div",null,[n(K,{class:"max-w-xs bg-white text-gray-600 hover:text-gray-500 flex items-center text-sm rounded-full focus:outline-none"},{default:i(()=>[Et,Gt,n(q,{class:"h-6 w-6","aria-hidden":"true"})]),_:1})]),n(Z,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[n(ee,{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:i(()=>[(a(!0),l($,null,I(o.userNavigation,p=>(a(),x(J,{key:p.name},{default:i(({active:oe})=>[e("a",{href:p.href,class:y([oe?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},k(p.name),11,Ht)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])])]),n(ne)])])}var j=_(gt,[["render",Ut]]);const Wt={components:{Menu:E,MenuButton:G,MenuItem:H,MenuItems:U,MenuIcon:ge,ArrowNarrowRightIcon:xe}},Zt={class:"py-1"},Xt=v(" Ideas ");function Vt(r,s,m,o,c,u){const d=t("MenuIcon"),h=t("MenuButton"),g=t("MenuItem"),f=t("ArrowNarrowRightIcon"),w=t("MenuItems"),M=t("Menu");return a(),x(M,{as:"div",class:"relative inline-block text-left"},{default:i(()=>[e("div",null,[n(h,{class:"inline-flex justify-center w-full p-2 text-white"},{default:i(()=>[n(d,{class:"ml-2 h-5 w-5","aria-hidden":"true"})]),_:1})]),n(Z,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[n(w,{class:"origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-40"},{default:i(()=>[e("div",Zt,[n(g,null,{default:i(({active:b})=>[e("a",{href:"#",class:y([b?"bg-gray-100 text-gray-900":"text-gray-700","flex justify-between px-4 py-2 text-sm"])},"Latest changes",2)]),_:1}),n(g,null,{default:i(({active:b})=>[e("a",{href:"#",class:y([b?"bg-gray-100 text-gray-900":"text-gray-700","flex justify-between px-4 py-2 text-sm"])},[Xt,n(f,{class:"w-3 transform -rotate-45"})],2)]),_:1}),n(g,null,{default:i(({active:b})=>[e("a",{href:"#",class:y([b?"bg-gray-100 text-gray-900":"text-gray-700","flex justify-between px-4 py-2 text-sm"])},"Roadmap",2)]),_:1})])]),_:1})]),_:1})]),_:1})}var Yt=_(Wt,[["render",Vt]]);const Qt={components:{Dialog:O,DialogOverlay:B,DialogTitle:ve,TransitionChild:W,TransitionRoot:L,XIcon:N,DropdownMenu:Yt},setup(){return{open:C(!1)}}},Ft={class:"absolute inset-0 overflow-hidden"},qt={class:"fixed inset-y-0 right-0 pl-10 max-w-full flex"},Kt={class:"w-screen max-w-md"},Jt={class:"h-full flex flex-col bg-white shadow-xl overflow-y-scroll"},en={class:"py-6 px-4 bg-green-700 sm:px-6"},tn={class:"flex items-center"},nn=v(" Latest changes "),on={class:"h-7 flex items-center ml-auto mr-0"},sn=e("span",{class:"sr-only"},"Close panel",-1),an=e("div",{class:"relative flex-1 py-6 px-4 sm:px-6"},[e("div",{class:"absolute inset-0 py-6 px-4 sm:px-6"},[e("div",{class:"h-full border-2 border-dashed border-gray-200","aria-hidden":"true"})])],-1);function rn(r,s,m,o,c,u){const d=t("DialogOverlay"),h=t("DropdownMenu"),g=t("DialogTitle"),f=t("XIcon"),w=t("TransitionChild"),M=t("Dialog"),b=t("TransitionRoot");return a(),l($,null,[n(b,{as:"template",show:o.open},{default:i(()=>[n(M,{as:"div",class:"fixed inset-0 overflow-hidden z-40",onClose:s[1]||(s[1]=S=>o.open=!1)},{default:i(()=>[e("div",Ft,[n(d,{class:"absolute inset-0"}),e("div",qt,[n(w,{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:i(()=>[e("div",Kt,[e("div",Jt,[e("div",en,[e("div",tn,[n(h),n(g,{class:"text-lg font-medium text-white"},{default:i(()=>[nn]),_:1}),e("div",on,[e("button",{type:"button",class:"bg-green-700 rounded-md text-green-200 hover:text-white focus:outline-none",onClick:s[0]||(s[0]=S=>o.open=!1)},[sn,n(f,{class:"h-6 w-6","aria-hidden":"true"})])])])]),an])])]),_:1})])])]),_:1})]),_:1},8,["show"]),e("button",{onClick:s[2]||(s[2]=S=>o.open=!0),type:"button",class:"fixed right-0 sm:-right-6 lg:-right-8 top-1/2 transform -rotate-90 origin-center-right block px-3 py-2 border border-transparent text-sm font-medium rounded-sm shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"}," What's new ")],64)}var cn=_(Qt,[["render",rn]]);const ln={components:{HideSidebar:cn},computed:{layout(){return this.$route.meta.layout}}};function dn(r,s,m,o,c,u){const d=t("router-view"),h=t("HideSidebar");return a(),l("div",null,[(a(),x(P(u.layout),null,{default:i(()=>[n(d)]),_:1})),n(h)])}var un=_(ln,[["render",dn]]);const mn=[{id:1}],_n={setup(){return{items:mn}}},R=r=>(be("data-v-36365d70"),r=r(),ye(),r),fn={class:"px-8 sm:w-full sm:max-w-lg"},pn=R(()=>e("h5",{class:"text-md font-medium text-gray-600 mb-5"},"Become a email and copy writing pro in seconds.",-1)),hn={role:"list",class:"text-gray-600"},gn=R(()=>e("h6",{class:"text-md font-medium mb-1"},"AI Personalised Cold Email Outreach",-1)),xn=R(()=>e("p",{class:"text-sm"},"Our AI Engine will research the internet and build a personalised intro",-1)),vn=[gn,xn],bn=T('<li class="list-item pl-8" data-v-36365d70><h6 class="text-md font-medium mb-1" data-v-36365d70>Personalised LinkedIn Outreach</h6><p data-v-36365d70>Custom AI modules to create hyper personalised messages using LinkedIn data</p></li><li class="list-item pl-8" data-v-36365d70><h6 class="text-md font-medium mb-1" data-v-36365d70>AI Marketing copy</h6><p data-v-36365d70>Our trained AI engine will help generate high converting ad copy in seconds</p></li><li class="list-item pl-8" data-v-36365d70><h6 class="text-md font-medium mb-1" data-v-36365d70>Blog Intros</h6><p data-v-36365d70>Generate catchy intros that hook your reads with no effort</p></li>',3);function yn(r,s,m,o,c,u){return a(),l("div",fn,[pn,e("ul",hn,[(a(!0),l($,null,I(o.items,d=>(a(),l("li",{key:d.id,class:"list-item pl-8"},vn))),128)),bn])])}var wn=_(_n,[["render",yn],["__scopeId","data-v-36365d70"]]),$n="/assets/reach-logo-green.67410f67.svg";const In={},Mn={class:"md:flex md:items-center md:justify-between px-4 py-2 shadow-md fixed bg-white top-0 left-0 w-full"},kn=e("div",{class:"flex-1 min-w-0"},[e("a",{href:"#"},[e("img",{src:$n,alt:"logo",class:"header-logo"})])],-1),jn=e("div",{class:"mt-4 flex md:mt-0 md:ml-4"},[e("p",{class:"inline-flex items-center text-sm font-medium text-gray-700"}," Don\u2019t have an account? "),e("button",{type:"button",class:"ml-3 inline-flex items-center text-sm font-medium text-green-500 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"}," Sign up ")],-1),Sn=[kn,jn];function Tn(r,s){return a(),l("div",Mn,Sn)}var Cn=_(In,[["render",Tn]]);const Dn={},Nn={class:"sm:w-full sm:max-w-lg"},Ln={class:"bg-white py-12 px-4 shadow sm:rounded-xs sm:px-12"},Pn=e("h4",{class:"text-center text-xl font-medium text-gray-800 mb-2"},"Welcome back!",-1),An=e("p",{class:"text-center text-sm mb-4"},"Make some magic and close some deals through the power of AI copywritng",-1),Rn={action:"#",method:"POST"},zn=T('<div class="relative mb-6"><label for="email" class="absolute top-4 left-3 block text-md text-gray-700"> Email address </label><div class="mt-1"><input id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm hover:border-gray-500 transition-colors duration-500"></div></div><a href="#" class="block text-sm text-right font-medium text-green-600 hover:text-green-500"> Forgot your password? </a><div class="relative mb-6"><label for="password" class="absolute top-4 left-3 block text-md text-gray-700"> Password </label><div class="mt-1"><input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm hover:border-gray-500 transition-colors duration-500"></div></div>',3),On=v(" Login ");function Bn(r,s){const m=t("router-link");return a(),l("div",Nn,[e("div",Ln,[Pn,An,e("form",Rn,[zn,n(m,{to:"/dashboard",class:"w-full flex justify-center py-2.5 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer rounded transition-colors duration-500"},{default:i(()=>[On]),_:1})])])])}var En=_(Dn,[["render",Bn]]);const Gn={name:"Login",components:{LoginComponent:En,Header:Cn,List:wn}},Hn={class:"min-h-screen bg-gray-50 flex justify-center py-32 sm:px-6 lg:px-8"};function Un(r,s,m,o,c,u){const d=t("Header"),h=t("LoginComponent"),g=t("List");return a(),l("div",null,[n(d),e("div",Hn,[n(h),n(g)])])}var Wn=_(Gn,[["render",Un]]),z="/assets/schedule-icon.285fd73f.svg";const Zn={components:{Tab:A}},Xn={class:"flex-1 relative overflow-y-auto focus:outline-none"},Vn=e("div",{class:"max-full mx-auto py-6 px-4 sm:px-6 md:px-8 mb-2 bg-white"},[e("h1",{class:"text-2xl font-semibold text-gray-900 flex"},[e("img",{class:"h-8 w-8 rounded-full mr-4",src:z,alt:""}),v(" PERSONALISED ICEBREAKER GENERATOR ")])],-1),Yn={class:"max-w-xl bg-white m-4"};function Qn(r,s,m,o,c,u){const d=t("Tab");return a(),l("main",Xn,[e("div",null,[Vn,e("div",Yn,[n(d)])])])}var Fn=_(Zn,[["render",Qn]]);const qn={},Kn={class:"flex-1 relative overflow-y-auto focus:outline-none"},Jn=e("div",{class:"max-w-full mx-auto py-6 px-4 sm:px-6 md:px-8 mb-2 bg-white"},[e("h1",{class:"text-2xl font-semibold text-gray-900 flex"},[e("img",{class:"h-8 w-8 rounded-full mr-4",src:z,alt:""}),v(" Refer & Earn ")])],-1),eo={class:"max-w-xl bg-white m-4"},to=e("div",null,"Project 1",-1),no=e("div",null,"Project 2",-1);function oo(r,s){const m=t("router-link"),o=t("router-view");return a(),l("main",Kn,[e("div",null,[Jn,e("div",eo,[n(m,{to:"/ReferEarn/project1"},{default:i(()=>[to]),_:1}),n(m,{to:"/ReferEarn/project2"},{default:i(()=>[no]),_:1}),n(o)])])])}var so=_(qn,[["render",oo]]);const ao={components:{Tab:A}},ro={class:"flex-1 relative overflow-y-auto focus:outline-none"},io=e("div",{class:"max-w-full mx-auto py-6 px-4 sm:px-6 md:px-8 mb-2 bg-white"},[e("h1",{class:"text-2xl font-semibold text-gray-900 flex"},[e("img",{class:"h-8 w-8 rounded-full mr-4",src:z,alt:""}),v(" Profile ")])],-1),co={class:"max-w-xl bg-white m-4"};function lo(r,s,m,o,c,u){const d=t("Tab");return a(),l("main",ro,[e("div",null,[io,e("div",co,[n(d)])])])}var uo=_(ao,[["render",lo]]);const mo={};function _o(r,s){return a(),l("main",null," Project1 sdfgdfgdfg ")}var fo=_(mo,[["render",_o]]);const po={};function ho(r,s){return a(),l("main",null," Project2 ")}var go=_(po,[["render",ho]]);const xo=[{path:"/dashboard",name:"Projects",component:Fn,meta:{layout:j}},{path:"/ReferEarn",name:"ReferEarn",component:so,meta:{layout:j},children:[{name:"project1",path:"project1",component:fo,meta:{layout:j}},{name:"project2",path:"project2",component:go,meta:{layout:j}}]},{path:"/profile",name:"Profile",component:uo,meta:{layout:j}},{path:"/login",name:"Login",component:Wn,meta:{layout:Te}}],vo=we({history:$e(),routes:xo});Ie(un).use(vo).mount("#app");
