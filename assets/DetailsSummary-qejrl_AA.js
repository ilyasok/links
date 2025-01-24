import{g as D,a as E,k as $,b as T,s as k,d as w,e as I,r as p,u as H,j as e,f as O,h as z,i as Q,c as P,m as y,M as v,R as q,T as Z}from"./index-DhO3Hgp6.js";import{b as B,s as S}from"./Footer-5YRRkYwv.js";function F(t){return D("MuiCircularProgress",t)}E("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const x=44,C=$`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,b=$`
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
`,K=typeof C!="string"?T`
        animation: ${C} 1.4s linear infinite;
      `:null,L=typeof b!="string"?T`
        animation: ${b} 1.4s ease-in-out infinite;
      `:null,U=t=>{const{classes:s,variant:a,color:n,disableShrink:m}=t,i={root:["root",a,`color${w(n)}`],svg:["svg"],circle:["circle",`circle${w(a)}`,m&&"circleDisableShrink"]};return z(i,F,s)},V=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,s[a.variant],s[`color${w(a.color)}`]]}})(I(({theme:t})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("transform")}},{props:{variant:"indeterminate"},style:K||{animation:`${C} 1.4s linear infinite`}},...Object.entries(t.palette).filter(Q()).map(([s])=>({props:{color:s},style:{color:(t.vars||t).palette[s].main}}))]}))),W=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,s)=>s.svg})({display:"block"}),G=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.circle,s[`circle${w(a.variant)}`],a.disableShrink&&s.circleDisableShrink]}})(I(({theme:t})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:s})=>s.variant==="indeterminate"&&!s.disableShrink,style:L||{animation:`${b} 1.4s ease-in-out infinite`}}]}))),ee=p.forwardRef(function(s,a){const n=H({props:s,name:"MuiCircularProgress"}),{className:m,color:i="primary",disableShrink:c=!1,size:l=40,style:g,thickness:d=3.6,value:u=0,variant:h="indeterminate",...o}=n,r={...n,color:i,disableShrink:c,size:l,thickness:d,value:u,variant:h},j=U(r),f={},M={},A={};if(h==="determinate"){const N=2*Math.PI*((x-d)/2);f.strokeDasharray=N.toFixed(3),A["aria-valuenow"]=Math.round(u),f.strokeDashoffset=`${((100-u)/100*N).toFixed(3)}px`,M.transform="rotate(-90deg)"}return e.jsx(V,{className:O(j.root,m),style:{width:l,height:l,...M,...g},ownerState:r,ref:a,role:"progressbar",...A,...o,children:e.jsx(W,{className:j.svg,ownerState:r,viewBox:`${x/2} ${x/2} ${x} ${x}`,children:e.jsx(G,{className:j.circle,style:f,ownerState:r,cx:x,cy:x,r:(x-d)/2,fill:"none",strokeWidth:d})})})}),J=P(e.jsx("path",{d:"M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1"}),"CoffeeRounded"),Y=P(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m7.46 7.12-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3M9.13 4.54l1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59M4.54 14.87l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96l-1.17 2.78c-2.1-.81-3.77-2.48-4.58-4.59m10.34 4.59-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58"}),"SupportRounded"),se=()=>{const[t,s]=p.useState(!1),[a,n]=p.useState(!1),[m,i]=p.useState(!1),[c,l]=p.useState(!1),g=()=>{s(!0)},d=()=>{n(!0)},u=()=>{s(!1)},h=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"support",children:[e.jsxs(y.button,{className:"modal-button in-page",onClick:d,style:{padding:"10px",fontSize:"0.8125rem",filter:"saturate(0.5)"},whileHover:{scale:1.075,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},children:[e.jsx(Y,{}),"Сообщить о проблеме"]}),e.jsxs(y.button,{className:"modal-button in-page",style:{padding:"10px",fontSize:"0.8125rem",filter:"saturate(1.25)"},whileHover:{scale:1.075,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},onClick:g,children:[e.jsx(J,{}),"Поддержать сайт"]})]}),e.jsx(v,{open:t,closeIcon:null,centered:!0,onCancel:u,footer:null,children:e.jsxs("div",{className:"modal",children:[e.jsx("div",{className:"modal-title",children:"Поддержать проект"}),e.jsx("p",{children:"Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать его, то вы можете поддержать меня любой суммой и любым удобным вам способом."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginBlockEnd:"10px",marginInline:"10px"},children:[e.jsx(y.button,{className:"sber",onClick:()=>i(!0),whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},children:"Сбербанк"}),e.jsx(v,{open:m,closeIcon:null,centered:!0,className:"support-modal",onCancel:()=>i(!1),footer:null,children:e.jsxs("div",{className:"modal",children:[e.jsx("div",{className:"modal-title",children:"Поддержать на Сбербанк"}),e.jsx("p",{children:"Вы можете перевести из любого банка по номеру банковской карты любую сумму."}),e.jsx(y.mark,{whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},className:"sber",children:"2202202357342488"}),e.jsxs("p",{style:{textAlign:"center",fontSize:"0.6875rem",opacity:"0.75",marginBlockEnd:"10px"},children:["Нажмите на номер карты, чтобы скопировать его в буфер обмена",e.jsx("br",{}),"Получатель: Михаил Денисович Ф."]})]})}),e.jsx(y.button,{className:"yoomoney",onClick:()=>l(!0),whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},children:"ЮMoney"}),e.jsx(v,{open:c,closeIcon:null,centered:!0,className:"support-modal",onCancel:()=>l(!1),footer:null,children:e.jsxs("div",{className:"modal",children:[e.jsx("div",{className:"modal-title",children:"Поддержать на ЮMoney"}),e.jsx("p",{children:"Для пополнения кошелька вам нужно проделать несколько действий:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Зайдите в приложение своего банка."}),e.jsx("li",{children:'Откройте раздел "Платежи" и найдите в категориях "Электронные кошельки" или "Финансы" пункт "ЮMoney". Ну или в поиске введите "ЮMoney".'}),e.jsxs("li",{children:['Нажмите на номер кошелька снизу, он скопируется в буфер обмена. Вставьте этот номер в поле "Номер кошелька" приложения банка и введите любую сумму, а затем подтвердите перевод.',e.jsx(y.mark,{whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},className:"yoomoney",children:"410016763684808"}),e.jsx("p",{style:{textAlign:"center",fontSize:"0.625rem",opacity:"0.75",marginTop:"-5px"},children:"Нажмите, чтобы скопировать"}),e.jsxs("p",{style:{fontSize:"0.75rem",opacity:"0.75"},children:["Или пополните баланс автору с помощью"," ",e.jsx("a",{style:{color:"var(--accent)",fontWeight:700,textDecoration:"underline"},href:"https://yoomoney.ru/to/410016763684808",children:"этой ссылки"}),"."]})]})]})]})})]})]})}),e.jsx(v,{open:a,closeIcon:null,centered:!0,onCancel:h,footer:null,children:e.jsxs("div",{className:"modal",children:[e.jsx("div",{className:"modal-title",children:"Сообщить о проблеме"}),e.jsx("p",{children:"Вы можете предложить улучшить материал или сообщить о каком-то баге или странном поведении сайта. Для этого напишите мне на почту и я постараюсь учесть ваши предложения."}),e.jsx(y.a,{whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},style:{textDecoration:"none",fontSize:"1.125rem",textAlign:"center"},className:"modal-button",href:`mailto:me@m1sh3r.ru?subject=Пишу по поводу ${location.pathname.replace(/\/$/,"")} (${navigator.userAgent.replace(/ /g," ")})`,children:"Написать на почту"}),e.jsx("p",{className:"modal-message",children:"Нажимая на кнопку, вы соглашаетесь с тем, что вы передаёте данные о user-agent браузера. Эти данные можно удалить в заголовке при отправке письма, но лучше оставить, если вы сообщаете о каком-то баге."}),e.jsx(B,{children:"Разделы с частыми вопросами находятся в разработке и иногда обновляются, поэтому могут быть неточности в действиях, выводах и тексте. Мнение автора и мнение читателя могут отличаться."})]})})]})},R=p.createContext(!1),te=()=>p.useContext(R),re=()=>{const t=Array.from(document.querySelectorAll(".faq-content"));let s="";return t.forEach((a,n)=>{Array.from(a.querySelectorAll(".faq-summary")).forEach((i,c)=>{if(s=`${n+1}.${c+1}`,i.hasAttribute("id")||i.setAttribute("id",s),window.location.hash===`#${s}`){const l=i.closest("details");l&&!l.hasAttribute("data-anchor-processed")&&(l.setAttribute("open","true"),l.setAttribute("data-anchor-processed","true"),setTimeout(()=>{var h;const g=((h=document.querySelector("header"))==null?void 0:h.offsetHeight)??0,u=i.getBoundingClientRect().top+window.pageYOffset-g-24;window.scrollTo({top:u,behavior:"smooth"})},100))}})}),s},ae=({title:t,children:s,tag:a})=>{var u,h;const[n,m]=p.useState(!1),i=!s||typeof s=="string"&&s.trim()===""||typeof s=="object"&&!Array.isArray(s)&&Object.keys(s).length===0||Array.isArray(s)&&s.length===0||q.Children.count(s)===0||q.Children.count(s)===1,c=p.useRef(null);p.useEffect(()=>{if(c.current){const o=new MutationObserver(()=>{var r;m(((r=c.current)==null?void 0:r.open)||!1)});return o.observe(c.current,{attributes:!0,attributeFilter:["open"]}),()=>o.disconnect()}},[]),p.useEffect(()=>{const o=r=>{r.ctrlKey&&r.altKey&&r.shiftKey&&r.key==="A"&&(document.querySelectorAll("details").forEach(f=>{f.setAttribute("open","true")}),S.success("Вжух, и все спойлеры раскрылись!"))};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[]);const l=o=>{const r=o.currentTarget;r.open&&setTimeout(()=>{window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search)},5e3),r.hasAttribute("data-anchor-processed")&&r.removeAttribute("data-anchor-processed")},g=()=>{var j,f;const o=((f=(j=c.current)==null?void 0:j.querySelector(".faq-summary"))==null?void 0:f.id)??"";if(!o){S.warning("Копирование ссылок на пункты временно недоступно, дождитесь полной загрузки страницы");return}const r=`${window.location.origin}${window.location.pathname}#${o}`;navigator.clipboard.writeText(r),S.success(`Теперь вы можете поделиться пунктом ${o} с другими пользователями`)},d=((h=(u=c.current)==null?void 0:u.querySelector(".faq-summary"))==null?void 0:h.id)??"";return e.jsxs("details",{ref:c,open:n,onToggle:l,"data-tags":a,children:[e.jsxs(y.summary,{whileHover:{scale:1.025,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{opacity:.75},className:"faq-summary",children:[e.jsxs("div",{className:"faq-summary-left",children:[e.jsx("span",{style:{fontFamily:"JetBrains Mono, monospace"},children:n?"-":"+"}),e.jsx("h3",{children:`${d?`${d}. `:""}${t}`})]}),e.jsx(Z,{title:"Скопировать ссылку на пункт",children:e.jsx("button",{onClick:g,className:"copy_button",style:{width:"20px",height:"20px",flex:"none",filter:d?"none":"saturate(0) opacity(0.25)"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",width:"20px",height:"20px",children:e.jsx("path",{d:"M684-80q-48.33 0-82.17-33.83Q568-147.67 568-196q0-7.33 4.33-32l-293-171.33q-16.18 16.56-37.42 25.94Q220.67-364 196-364q-48.33 0-82.17-33.83Q80-431.67 80-480t33.83-82.17Q147.67-596 196-596q24 0 45 9.03T278-562l294.33-170q-2-7.67-3.16-15.5Q568-755.33 568-764q0-48.33 33.83-82.17Q635.67-880 684-880t82.17 33.83Q800-812.33 800-764t-33.83 82.17Q732.33-648 684-648q-23.52 0-44.09-8.83-20.58-8.84-36.58-23.84L307-513.33q2.67 7.66 3.83 16.16 1.17 8.5 1.17 16.84 0 8.33-.83 15.5-.84 7.16-2.84 14.83L604-280q16-15 36.4-23.5 20.39-8.5 43.7-8.5 48.57 0 82.23 33.83Q800-244.33 800-196t-33.83 82.17Q732.33-80 684-80Zm.02-66.67q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm-488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16ZM684-196ZM196-480Zm488-284Z"})})})})]}),e.jsx(R.Provider,{value:n,children:e.jsxs("section",{className:"faq-section",children:[i?e.jsx("p",{style:{textAlign:"center",fontWeight:"700",opacity:"0.75",fontSize:"0.95rem",fontStyle:"italic"},children:"Когда-нибудь здесь будет ответ..."}):s,a&&e.jsxs("div",{className:"faq-tags",children:[e.jsx("span",{children:"Дополнительные теги для поиска:"}),a.split(", ").map((o,r)=>e.jsx("mark",{className:"tag",children:o},r))]})]})})]})};export{ee as C,ae as D,se as S,re as g,te as u};
