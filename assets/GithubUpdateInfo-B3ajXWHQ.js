import{r as e,j as n}from"./index-CGj-UaYr.js";const $="aechat",w="links",y="main",E=({filePath:r})=>{const[c,s]=e.useState("Ищем информацию..."),[a,m]=e.useState(null),p=async()=>{const l=`https://api.github.com/repos/${$}/${w}/commits?path=${r}&sha=${y}`;try{const t=await fetch(l);if(!t.ok)throw new Error(`${t.status}`);const o=await t.json();if(o.length===0){s("Информация о свежести временно недоступна");return}const i=new Date(o[0].commit.author.date),h={year:"2-digit",month:"2-digit",day:"2-digit"},u={hour:"2-digit",minute:"2-digit"},g=i.toLocaleString("ru-RU",h),f=i.toLocaleString("ru-RU",u),d=o[0].commit.message,x=o[0].html_url;s(`Обновлено ${g}, ${f}: <a href="${x}" target="_blank">${d}</a>`)}catch(t){m(`${t}, информация о свежести временно недоступна`)}};return e.useEffect(()=>{p()},[r]),a?n.jsx("p",{style:{textAlign:"right",fontSize:"12px",color:"red",opacity:"0.75",whiteSpace:"pre-wrap"},children:a}):n.jsx("p",{style:{textAlign:"right",fontSize:"12px",whiteSpace:"pre-wrap",opacity:"0.5",filter:"saturate(0)"},dangerouslySetInnerHTML:{__html:c}})};export{E as G};
