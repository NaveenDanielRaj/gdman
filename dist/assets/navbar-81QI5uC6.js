import{r as i,u as l,j as a,L as n}from"./index-KrT0qH_M.js";import{L as o}from"./Logo-CZAZUCm6.js";const p=()=>{const[s,r]=i.useState(1),e=l(),t=c=>{r(c)};return i.useEffect(()=>{let c=e.pathname==="/"?1:e.pathname==="/aboutUs"?2:e.pathname==="/practiceAreas"||e.pathname==="/practiceAreas/family-law"||e.pathname==="/practiceAreas/divorce-law"||e.pathname==="/practiceAreas/probate-law"||e.pathname==="/practiceAreas/criminal-defence-law"||e.pathname==="/practiceAreas/traffic-defence-law"||e.pathname==="/practiceAreas/insurance-law"?3:e.pathname==="/caseResults"?4:e.pathname==="/contactUs"?5:1;r(c)},[e.pathname]),a.jsx(a.Fragment,{children:a.jsx("div",{className:"m-0 p-0 border-bottom border-dark border-1",children:a.jsx("nav",{className:" navbar navbar-expand-md bg-white w-100 px-5 border-2 border-dark",children:a.jsxs("div",{className:"container-fluid  d-flex justify-content-between ",children:[a.jsx("div",{children:a.jsx("a",{className:"navbar-brand",href:"/",children:a.jsx("img",{src:o,alt:"Logo",height:65,width:90})})}),a.jsxs("div",{children:[a.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsx("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:a.jsxs("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[a.jsx("li",{className:"nav-item",onClick:()=>t(1),children:a.jsx(n,{className:`nav-link ${s===1?"active":""}`,"aria-current":"page",to:"/",children:"Home"})}),a.jsx("li",{className:"nav-item",onClick:()=>t(2),children:a.jsx(n,{className:`nav-link ${s===2?"active":""}`,to:"/aboutUs",children:"About"})}),a.jsx("li",{className:"nav-item",onClick:()=>t(3),children:a.jsx(n,{className:`nav-link ${s===3?"active":""}`,to:"/practiceAreas",children:"Practice Areas"})}),a.jsx("li",{className:"nav-item",onClick:()=>t(4),children:a.jsx(n,{className:`nav-link ${s===4?"active":""}`,to:"/caseResults",children:"Case Results"})}),a.jsx("li",{className:"nav-item",onClick:()=>t(5),children:a.jsx(n,{className:`nav-link ${s===5?"active":""}`,to:"/contactUs",children:"Contact Us"})})]})})]})]})})})})};export{p as default};
