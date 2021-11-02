import{c as L,a as N,b as T,u as v,o as c,d as r,e as i,t as _,F as d,r as x,f as b,g as p,h as I,i as f,j as u,w,k as A,v as B,l as m,m as g,n as k,p as C,q as V,s as E}from"./vendor.a3965532.js";const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}};F();var M={"nav-categories":{"clear-filter":"Clear filter",title:"Categories","selected-category":"You have selected:"},"application-list":{"application-item":{currency:"\u20AC","free-label":"Free"},error:"There was an error processing the data.","error-subtitle":"Please try again later.","no-records":"No records were found","search-input":"Search by app"}},O={"nav-categories":{"clear-filter":"Limpar filtro",title:"Categorias","selected-category":"Voc\xEA selecionou:"},"application-list":{"application-item":{currency:"\u20AC","free-label":"Gr\xE1tis"},error:"Houve um erro ao processar a requisi\xE7\xE3o.","error-subtitle":"Por favor, tente novamente mais tarde.","no-records":"Nenhum registro encontrado","search-input":"Buscar por aplicativo"}};const j=L({legacy:!1,locale:"en",fallbackLocale:"en",messages:{en:M,pt:O}}),D=({categories:e=[],name:t=""},s=void 0,o=void 0)=>{const a=!o||e.includes(o),n=!s||t.toLowerCase().includes(s.toLowerCase());return a&&n},q=(e,t)=>S(e)-S(t),H=({name:e},{name:t})=>e.localeCompare(t),S=({subscriptions:e=[]})=>e.reduce((t,s)=>t+(s.price||0),0);var G=e=>{const{apps:t=[],category:s,pageIndex:o,pageSize:a,term:n}=e,l=t.filter(y=>D(y,n,s)).sort(H).sort(q);return{list:l.slice(o*a,(o+1)*a),total:l.length,totalPages:Math.ceil(l.length/a)}},K=e=>{var o,a;const t=(a=(o=e.apps)==null?void 0:o.map(n=>n.categories))!=null?a:[],s=Array.prototype.concat.apply([],t);return[...new Set(s)].sort()};function U(){return N.get("./apps.json")}const Y={apps:[],category:null,error:null,loading:!1,pageIndex:0,pageSize:6,term:null},J={applications:G,categories:K,category:e=>e.category,error:e=>e.error,loading:e=>e.loading,pageIndex:e=>e.pageIndex,pageSize:e=>e.pageSize},Q={setApps(e,t){e.apps=t},setCategory(e,t){e.category=t},setError(e,t){e.error=t},setLoading(e,t){e.loading=t},setPageIndex(e,t){e.pageIndex=t},setPageSize(e,t){e.pageSize=t},setTerm(e,t){e.term=t}},R={async fetchInitialData({commit:e}){try{e("setLoading",!0);const t=await U();e("setApps",t.data)}catch(t){e("setError",t)}finally{setTimeout(()=>{e("setLoading",!1)},1e3)}},setCategory({commit:e,state:t},s){e("setCategory",t.category===s?null:s),e("setPageIndex",0)},setPageIndex({commit:e},t){e("setPageIndex",t)},setPageSize({commit:e},t){e("setPageSize",t)},setTerm({commit:e},t){e("setTerm",t),e("setPageIndex",0)}},W=T({state:Y,getters:J,mutations:Q,actions:R});const X={class:"application-item"},Z={class:"application-item__content"},ee={class:"application-item__description"},te={class:"application-item__title"},ae={class:"application-item__description"},se={class:"application-item__tags"},ne={class:"application-item__subscriptions"},ie={class:"application-item__subscription-name"},oe={class:"application-item__subscription-price"},ce={class:"application-item__subscription-currency"},re={props:{application:Object},setup(e){const{tm:t}=v();return(s,o)=>(c(),r("article",X,[i("div",Z,[i("div",ee,[i("h1",te,_(e.application.name),1),i("p",ae,_(e.application.description),1)]),i("div",se,[(c(!0),r(d,null,x(e.application.categories,(a,n)=>(c(),r("span",{class:"application-item__tag",key:`${n}_tags`},_(a),1))),128))])]),i("div",ne,[i("ul",null,[(c(!0),r(d,null,x(e.application.subscriptions,(a,n)=>(c(),r("li",{class:"application-item__subscription",key:`${n}_subscription`},[i("span",ie,_(a.name),1),i("h3",oe,[a.price?(c(),r(d,{key:0},[b(_(a.price.toFixed(2))+" ",1),i("sup",ce,_(p(t)("application-list.application-item.currency")),1)],64)):(c(),r(d,{key:1},[b(_(p(t)("application-list.application-item.free-label")),1)],64))])]))),128))])])]))}};const le={class:"search"},pe=["disabled","placeholder","aria-label"],_e={setup(e){const t=I(null),s=f(),{tm:o}=v(),a=u(()=>s.getters.error);return w(t,n=>s.dispatch("setTerm",n)),(n,l)=>(c(),r("div",le,[A(i("input",{type:"search",class:"search__input",disabled:p(a),placeholder:p(o)("application-list.search-input"),"onUpdate:modelValue":l[0]||(l[0]=h=>t.value=h),"aria-label":p(o)("application-list.search-input")},null,8,pe),[[B,t.value]])]))}};const de={class:"application-list__items"},ue={key:0},ge={class:"application-list__title"},he={class:"application-list__subtitle"},me={key:1},ye={class:"application-list__title"},ve={setup(e){const t=f(),{tm:s}=v(),o=u(()=>t.getters.applications),a=u(()=>t.getters.error);return(n,l)=>(c(),r(d,null,[m(_e),i("ul",de,[(c(!0),r(d,null,x(p(o).list,h=>(c(),r("li",{class:"application-list__item",key:h.id},[m(re,{application:h},null,8,["application"])]))),128)),p(a)?(c(),r("li",ue,[i("p",ge,_(p(s)("application-list.error")),1),i("p",he,_(p(s)("application-list.error-subtitle")),1)])):g("",!0),!p(o).list.length&&!p(a)?(c(),r("li",me,[i("p",ye,_(p(s)("application-list.no-records")),1)])):g("",!0)])],64))}};const xe={class:"pagination"},fe={class:"pagination__item"},$e=["disabled"],be={class:"pagination__item"},Ie=["disabled"],ke={key:0,class:"pagination__item"},Ce={key:1,class:"pagination__item"},Se={class:"pagination__item",type:"button"},Pe={class:"pagination__index pagination__index--active"},ze={key:2,class:"pagination__item"},Le={key:3,class:"pagination__item"},Ne={class:"pagination__item"},Te=["disabled"],we={class:"pagination__item"},Ae=["disabled"],P="page-change",Be={props:{pageIndex:Number,pagingSize:Number},emits:[P],setup(e,{emit:t}){const s=(o=0)=>t(P,o);return(o,a)=>(c(),r("ul",xe,[i("li",fe,[i("button",{type:"button",class:"pagination__index",disabled:e.pageIndex===0,onClick:a[0]||(a[0]=n=>s(0))}," << ",8,$e)]),i("li",be,[i("button",{type:"button",class:"pagination__index",disabled:e.pageIndex===0,onClick:a[1]||(a[1]=n=>s(e.pageIndex-1))}," < ",8,Ie)]),e.pageIndex===e.pagingSize-1&&e.pagingSize>2?(c(),r("li",ke,[i("button",{type:"button",class:"pagination__index",onClick:a[2]||(a[2]=n=>s(e.pageIndex-2))},_(e.pageIndex-1),1)])):g("",!0),e.pageIndex-1>=0?(c(),r("li",Ce,[i("button",{type:"button",class:"pagination__index",onClick:a[3]||(a[3]=n=>s(e.pageIndex-1))},_(e.pageIndex),1)])):g("",!0),i("li",Se,[i("button",Pe,_(e.pageIndex+1),1)]),e.pageIndex+1<e.pagingSize?(c(),r("li",ze,[i("button",{type:"button",class:"pagination__index",onClick:a[4]||(a[4]=n=>s(e.pageIndex+1))},_(e.pageIndex+2),1)])):g("",!0),e.pageIndex===0&&e.pagingSize>2?(c(),r("li",Le,[i("button",{type:"button",class:"pagination__index",onClick:a[5]||(a[5]=n=>s(e.pageIndex+2))},_(e.pageIndex+3),1)])):g("",!0),i("li",Ne,[i("button",{type:"button",class:"pagination__index",disabled:e.pageIndex===e.pagingSize-1,onClick:a[6]||(a[6]=n=>s(e.pageIndex+1))}," > ",8,Te)]),i("li",we,[i("button",{type:"button",class:"pagination__index",disabled:e.pageIndex===e.pagingSize-1,onClick:a[7]||(a[7]=n=>s(e.pagingSize-1))}," >> ",8,Ae)])]))}},Ve={setup(e){const t=f(),s=u(()=>t.getters.applications),o=u(()=>t.getters.pageIndex),a=(n=0)=>t.dispatch("setPageIndex",n);return(n,l)=>(c(),r("footer",null,[p(s).totalPages>0?(c(),k(Be,{key:0,"page-index":p(o),"paging-size":p(s).totalPages,onPageChange:a},null,8,["page-index","paging-size"])):g("",!0)]))}};const Ee={class:"language"},Fe=["onClick"],Me={setup(e){const{locale:t}=v(),s=I([{locale:"en",text:"EN"},{locale:"pt",text:"PT"}]),o=a=>t.value=a;return(a,n)=>(c(),r("div",Ee,[(c(!0),r(d,null,x(s.value,l=>(c(),r("button",{key:l.locale,class:C(["language__item",{"language__item--active":p(t)===l.locale}]),onClick:h=>o(l.locale)},_(l.text),11,Fe))),128))]))}};const Oe={class:"header"},je=i("h1",{class:"header__title"},"App Store",-1),De=i("h2",{class:"header__subtitle"},"Made \u2665 Vue",-1),qe={setup(e){return(t,s)=>(c(),r("header",Oe,[je,De,m(Me)]))}};var He=(e,t)=>{for(const[s,o]of t)e[s]=o;return e};const Ge={},Ke={class:"loading"},Ue=i("div",null,null,-1),Ye=i("div",null,null,-1),Je=i("div",null,null,-1),Qe=i("div",null,null,-1),Re=[Ue,Ye,Je,Qe];function We(e,t){return c(),r("div",Ke,Re)}var Xe=He(Ge,[["render",We]]);const Ze={class:"nav-categories"},et={class:"nav-categories__title"},tt={class:"nav-categories__list"},at=["onClick"],st={setup(e){const t=f(),{tm:s}=v(),o=u(()=>t.getters.category),a=u(()=>t.getters.categories),n=l=>t.dispatch("setCategory",l);return(l,h)=>(c(),r("nav",Ze,[i("h1",et,_(p(s)("nav-categories.title")),1),i("ul",tt,[(c(!0),r(d,null,x(p(a),(y,z)=>(c(),r("li",{class:"nav-categories__item",key:`${z}_nav`},[i("button",{class:C(["nav-categories__category",{"nav-categories__category--active":p(o)===y}]),onClick:ct=>n(y)},_(y),11,at)]))),128))])]))}},nt={key:0,class:"app__sidebar"},it={class:"app__main"},ot={setup(e){const t=f(),s=u(()=>t.getters.error),o=u(()=>t.getters.loading),a=n=>t.dispatch("setPageSize",n);return V(()=>{t.dispatch("fetchInitialData"),a(3)}),(n,l)=>p(o)?(c(),k(Xe,{key:0})):(c(),r(d,{key:1},[m(qe,{class:"app__header"}),p(s)?g("",!0):(c(),r("aside",nt,[m(st)])),i("main",it,[m(ve)]),m(Ve,{class:"app__footer"})],64))}};const $=E(ot);$.use(W);$.use(j);$.mount("#app");