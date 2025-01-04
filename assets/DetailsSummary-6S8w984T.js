import{g as D,a as T,k as P,b as A,s as k,d as v,e as I,r as h,u as O,j as e,f as R,h as Q,i as Z,M as j,m as $,T as E}from"./index-D5Wg5Tav.js";import{s as N}from"./Footer-CyLQQoHx.js";function z(t){return D("MuiCircularProgress",t)}T("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const u=44,C=P`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,S=P`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,F=typeof C!="string"?A`
        animation: ${C} 1.4s linear infinite;
      `:null,H=typeof S!="string"?A`
        animation: ${S} 1.4s ease-in-out infinite;
      `:null,B=t=>{const{classes:s,variant:r,color:n,disableShrink:d}=t,o={root:["root",r,`color${v(n)}`],svg:["svg"],circle:["circle",`circle${v(r)}`,d&&"circleDisableShrink"]};return Q(o,z,s)},L=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.root,s[r.variant],s[`color${v(r.color)}`]]}})(I(({theme:t})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("transform")}},{props:{variant:"indeterminate"},style:F||{animation:`${C} 1.4s linear infinite`}},...Object.entries(t.palette).filter(Z()).map(([s])=>({props:{color:s},style:{color:(t.vars||t).palette[s].main}}))]}))),U=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,s)=>s.svg})({display:"block"}),K=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.circle,s[`circle${v(r.variant)}`],r.disableShrink&&s.circleDisableShrink]}})(I(({theme:t})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:s})=>s.variant==="indeterminate"&&!s.disableShrink,style:H||{animation:`${S} 1.4s ease-in-out infinite`}}]}))),G=h.forwardRef(function(s,r){const n=O({props:s,name:"MuiCircularProgress"}),{className:d,color:o="primary",disableShrink:p=!1,size:a=40,style:m,thickness:i=3.6,value:l=0,variant:c="indeterminate",...g}=n,f={...n,color:o,disableShrink:p,size:a,thickness:i,value:l,variant:c},x=B(f),y={},w={},M={};if(c==="determinate"){const q=2*Math.PI*((u-i)/2);y.strokeDasharray=q.toFixed(3),M["aria-valuenow"]=Math.round(l),y.strokeDashoffset=`${((100-l)/100*q).toFixed(3)}px`,w.transform="rotate(-90deg)"}return e.jsx(L,{className:R(x.root,d),style:{width:a,height:a,...w,...m},ownerState:f,ref:r,role:"progressbar",...M,...g,children:e.jsx(U,{className:x.svg,ownerState:f,viewBox:`${u/2} ${u/2} ${u} ${u}`,children:e.jsx(K,{className:x.circle,style:y,ownerState:f,cx:u,cy:u,r:(u-i)/2,fill:"none",strokeWidth:i})})})}),J=()=>{const[t,s]=h.useState(!1),[r,n]=h.useState(!1),[d,o]=h.useState(!1),[p,a]=h.useState(!1),m=()=>{s(!0)},i=()=>{n(!0)},l=()=>{s(!1)},c=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"support",children:[e.jsx("button",{className:"support-button support-button-donut",onClick:m,children:"Поддержать сайт"}),e.jsx("button",{className:"support-button support-button-share",onClick:i,children:"Поделиться"})]}),e.jsxs(j,{open:t,title:"Поддержать автора и сайт",closeIcon:null,centered:!0,onCancel:l,footer:null,children:[e.jsx("p",{className:"support-modal-text",children:"Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать его, то вы можете поддержать меня любой суммой и любым удобным вам способом."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[e.jsx($.button,{className:"support-button support-button-sber",onClick:()=>o(!0),whileHover:{scale:1.075,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},children:"Сбербанк"})," ",e.jsxs(j,{open:d,closeIcon:null,centered:!0,className:"support-modal",title:"Поддержать на Сбербанк автора",onCancel:()=>o(!1),footer:null,children:[e.jsx("p",{children:"Вы можете перевести из любого банка по номеру банковской карты любую сумму."}),e.jsx("mark",{style:{cursor:"pointer"},className:"copy-cardnumber copy-cardnumber-sber",children:"2202202357342488"}),e.jsxs("p",{style:{textAlign:"center",fontSize:"10px",opacity:"0.75",marginTop:"-5px"},children:["Нажмите, чтобы скопировать",e.jsx("br",{}),"Получатель: Михаил Денисович Ф."]})]}),e.jsx($.button,{className:"support-button support-button-yoomoney",onClick:()=>a(!0),whileHover:{scale:1.075,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},children:"ЮMoney"}),e.jsx(j,{open:p,closeIcon:null,centered:!0,className:"support-modal",title:"Поддержать на ЮMoney автора",onCancel:()=>a(!1),footer:null,children:e.jsxs("p",{children:["Для пополнения кошелька вам нужно проделать несколько действий:",e.jsxs("ul",{children:[e.jsx("li",{children:"Зайдите в приложение своего банка."}),e.jsx("li",{children:'Откройте раздел "Платежи" и найдите в категориях "Электронные кошельки" или "Финансы" пункт "ЮMoney". Ну или в поиске введите "ЮMoney".'}),e.jsxs("li",{children:['Нажмите на номер кошелька снизу, он скопируется в буфер обмена. Вставьте этот номер в поле "Номер кошелька" приложения банка и введите любую сумму, а затем подтвердите перевод.',e.jsx("mark",{style:{cursor:"pointer"},className:"copy-cardnumber copy-cardnumber-yoomoney",children:"410016763684808"}),e.jsx("p",{style:{textAlign:"center",fontSize:"10px",opacity:"0.75",marginTop:"-5px"},children:"Нажмите, чтобы скопировать"}),e.jsxs("p",{style:{fontSize:"12px",opacity:"0.75"},children:["Или пополните баланс автору с помощью"," ",e.jsx("a",{style:{color:"var(--accent)",fontWeight:700,textDecoration:"underline"},href:"https://yoomoney.ru/to/410016763684808",children:"этой ссылки"}),"."]})]})]})]})})]})]}),e.jsx(j,{open:r,closeIcon:null,centered:!0,onCancel:c,footer:null,children:e.jsx("div",{children:'Модуль "поделиться" пока ещё не разработан'})})]})};let b=!1;const Y=()=>{b=!0},_=()=>{const t=Array.from(document.querySelectorAll(".faq-content"));let s="";return t.forEach((r,n)=>{Array.from(r.querySelectorAll(".faq-summary")).forEach((o,p)=>{if(s=`${n+1}.${p+1}`,o.hasAttribute("id")||o.setAttribute("id",s),window.location.hash===`#${s}`){const a=o.closest("details");a&&(a.setAttribute("open","true"),setTimeout(()=>{var c;const m=((c=document.querySelector("header"))==null?void 0:c.offsetHeight)??0,l=o.getBoundingClientRect().top+window.pageYOffset-m-24;window.scrollTo({top:l,behavior:"smooth"})},100))}})}),s},X=({title:t,children:s})=>{var l,c;const[r,n]=h.useState(!1),[d,o]=h.useState(!1),p=h.useRef(null),a=()=>{n(!r),!d&&!r&&o(!0)},m=()=>{var x,y;if(!b){N.warning("Копирование ссылок на пункты временно недоступно, дождитесь полной загрузки страницы");return}const g=((y=(x=p.current)==null?void 0:x.querySelector(".faq-summary"))==null?void 0:y.id)??"",f=`${window.location.origin}${window.location.pathname}#${g}`;navigator.clipboard.writeText(f),N.success(`Ссылка на пункт ${g} скопирована в буфер обмена`)},i=((c=(l=p.current)==null?void 0:l.querySelector(".faq-summary"))==null?void 0:c.id)??"";return e.jsxs("details",{ref:p,open:r,onToggle:a,children:[e.jsxs("summary",{className:"faq-summary",children:[e.jsxs("div",{className:"faq-summary-left",children:[e.jsx("span",{style:{fontFamily:"JetBrains Mono, monospace"},children:r?"-":"+"}),e.jsx("h3",{children:`${i?`${i}. `:""}${t}`})]}),e.jsx(E,{title:"Скопировать ссылку на пункт",children:e.jsx("button",{onClick:m,className:"copy_button",style:{width:"20px",height:"20px",flex:"none",filter:b?"none":"saturate(0%)",opacity:b?1:.5},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",width:"20px",height:"20px",children:e.jsx("path",{d:"M684-80q-48.33 0-82.17-33.83Q568-147.67 568-196q0-7.33 4.33-32l-293-171.33q-16.18 16.56-37.42 25.94Q220.67-364 196-364q-48.33 0-82.17-33.83Q80-431.67 80-480t33.83-82.17Q147.67-596 196-596q24 0 45 9.03T278-562l294.33-170q-2-7.67-3.16-15.5Q568-755.33 568-764q0-48.33 33.83-82.17Q635.67-880 684-880t82.17 33.83Q800-812.33 800-764t-33.83 82.17Q732.33-648 684-648q-23.52 0-44.09-8.83-20.58-8.84-36.58-23.84L307-513.33q2.67 7.66 3.83 16.16 1.17 8.5 1.17 16.84 0 8.33-.83 15.5-.84 7.16-2.84 14.83L604-280q16-15 36.4-23.5 20.39-8.5 43.7-8.5 48.57 0 82.23 33.83Q800-244.33 800-196t-33.83 82.17Q732.33-80 684-80Zm.02-66.67q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm-488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16ZM684-196ZM196-480Zm488-284Z"})})})})]}),e.jsx("section",{className:"faq-section",children:d&&s})]})};export{G as C,X as D,J as S,Y as e,_ as g};
