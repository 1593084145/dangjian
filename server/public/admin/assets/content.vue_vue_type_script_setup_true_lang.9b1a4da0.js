import s from"./decoration-img.54f6b665.js";import{d as c,e as r,o,c as i,a as l,U as h,u as m,_ as u}from"./@vue.e8706010.js";const d={class:"banner-image w-full h-full"},p=c({__name:"content",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},height:{type:String,default:"170px"}},setup(e){const a=e,n=r(()=>{const{data:t}=a.content;return Array.isArray(t)&&t[0]?t[0].image:""});return(t,f)=>(o(),i("div",{class:"banner",style:u(e.styles)},[l("div",d,[h(s,{width:"100%",height:e.styles.height||e.height,src:m(n),fit:"contain"},null,8,["height","src"])])],4))}});export{p as _};
