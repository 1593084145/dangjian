import{C as R,B as C,G as P,H as S,D as v}from"./element-plus.da7f6a44.js";import{b as I,c as T}from"./message.c126166b.js";import{P as w}from"./index.b75bd452.js";import{d as K,s as c,$ as U,o as p,c as x,U as u,L as l,a as A,T as Y,K as _,R as i,S as E}from"./@vue.e8706010.js";const q={class:"edit-popup"},N=E("\u5173\u95ED"),h=E("\u5F00\u542F"),z=K({__name:"edit",emits:["success"],setup(G,{expose:f,emit:F}){const d=c(),n=c(),e=U({name:"",type:"",sign:"",app_key:"",app_id:"",secret_key:"",secret_id:"",status:0}),y={sign:[{required:!0,message:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u7B7E\u540D",trigger:"blur"}],app_id:[{required:!0,message:"\u8BF7\u8F93\u5165APP_ID",trigger:"blur"}],app_key:[{required:!0,message:"\u8BF7\u8F93\u5165APP_KEY",trigger:"blur"}],secret_key:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_KEY",trigger:"blur"}],secret_id:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_ID",trigger:"blur"}]},g=async()=>{var a,t;await((a=d.value)==null?void 0:a.validate()),await I(e),(t=n.value)==null||t.close(),F("success")},V=async()=>{const a=await T({type:e.type});for(const t in a)e[t]=a[t]},B=a=>{var t;e.type=a,(t=n.value)==null||t.open(),V()},D=()=>{var a;(a=d.value)==null||a.resetFields()};return f({open:B}),(a,t)=>{const s=R,r=C,m=P,k=S,b=v;return p(),x("div",q,[u(w,{ref_key:"popupRef",ref:n,title:"\u8BBE\u7F6E\u77ED\u4FE1",async:!0,width:"550px",onConfirm:g,onClose:D},{default:l(()=>[u(b,{ref_key:"formRef",ref:d,model:e,"label-width":"120px",rules:y},{default:l(()=>[u(s,{label:"\u77ED\u4FE1\u6E20\u9053"},{default:l(()=>[A("div",null,Y(e.name),1)]),_:1}),u(s,{label:"\u77ED\u4FE1\u7B7E\u540D",prop:"sign"},{default:l(()=>[u(r,{modelValue:e.sign,"onUpdate:modelValue":t[0]||(t[0]=o=>e.sign=o),placeholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u7B7E\u540D"},null,8,["modelValue"])]),_:1}),e.type=="ali"?(p(),_(s,{key:0,label:"APP_KEY",prop:"app_key"},{default:l(()=>[u(r,{modelValue:e.app_key,"onUpdate:modelValue":t[1]||(t[1]=o=>e.app_key=o),placeholder:"\u8BF7\u8F93\u5165APP_KEY"},null,8,["modelValue"])]),_:1})):i("",!0),e.type=="tencent"?(p(),_(s,{key:1,label:"APP_ID",prop:"app_id"},{default:l(()=>[u(r,{modelValue:e.app_id,"onUpdate:modelValue":t[2]||(t[2]=o=>e.app_id=o),placeholder:"\u8BF7\u8F93\u5165APP_ID"},null,8,["modelValue"])]),_:1})):i("",!0),e.type=="tencent"?(p(),_(s,{key:2,label:"SECRET_ID",prop:"secret_id"},{default:l(()=>[u(r,{modelValue:e.secret_id,"onUpdate:modelValue":t[3]||(t[3]=o=>e.secret_id=o),placeholder:"\u8BF7\u8F93\u5165SECRET_ID"},null,8,["modelValue"])]),_:1})):i("",!0),u(s,{label:"SECRET_KEY",prop:"secret_key"},{default:l(()=>[u(r,{modelValue:e.secret_key,"onUpdate:modelValue":t[4]||(t[4]=o=>e.secret_key=o),placeholder:"\u8BF7\u8F93\u5165SECRET_KEY"},null,8,["modelValue"])]),_:1}),u(s,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[u(k,{modelValue:e.status,"onUpdate:modelValue":t[5]||(t[5]=o=>e.status=o)},{default:l(()=>[u(m,{label:0},{default:l(()=>[N]),_:1}),u(m,{label:1},{default:l(()=>[h]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{z as _};
