import{B as w,C as v,G as E,H as g,D as k}from"./element-plus.da7f6a44.js";import{P as x}from"./index.b75bd452.js";import{g as R,h}from"./dict.4dfdb16b.js";import{d as D,s as c,r as U,e as T,$ as q,o as G,c as I,U as o,L as a,u as N,S as f}from"./@vue.e8706010.js";const P={class:"edit-popup"},S=f("\u6B63\u5E38"),z=f("\u505C\u7528"),M=D({__name:"edit",emits:["success","close"],setup(A,{expose:_,emit:m}){const p=c(),r=c(),n=U("add"),B=T(()=>n.value=="edit"?"\u7F16\u8F91\u5B57\u5178\u7C7B\u578B":"\u65B0\u589E\u5B57\u5178\u7C7B\u578B"),u=q({id:"",name:"",type:"",status:1,remark:""}),F={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",trigger:["blur"]}],type:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",trigger:["blur"]}]},V=async()=>{var t,e;await((t=p.value)==null?void 0:t.validate()),n.value=="edit"?await R(u):await h(u),(e=r.value)==null||e.close(),m("success")},b=()=>{m("close")};return _({open:(t="add")=>{var e;n.value=t,(e=r.value)==null||e.open()},setFormData:t=>{for(const e in u)t[e]!=null&&t[e]!=null&&(u[e]=t[e])}}),(t,e)=>{const d=w,s=v,i=E,y=g,C=k;return G(),I("div",P,[o(x,{ref_key:"popupRef",ref:r,title:N(B),async:!0,width:"550px",onConfirm:V,onClose:b},{default:a(()=>[o(C,{class:"ls-form",ref_key:"formRef",ref:p,rules:F,model:u,"label-width":"84px"},{default:a(()=>[o(s,{label:"\u5B57\u5178\u540D\u79F0",prop:"name"},{default:a(()=>[o(d,{modelValue:u.name,"onUpdate:modelValue":e[0]||(e[0]=l=>u.name=l),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),o(s,{label:"\u5B57\u5178\u7C7B\u578B",prop:"type"},{default:a(()=>[o(d,{modelValue:u.type,"onUpdate:modelValue":e[1]||(e[1]=l=>u.type=l),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",clearable:""},null,8,["modelValue"])]),_:1}),o(s,{label:"\u5B57\u5178\u72B6\u6001",required:"",prop:"status"},{default:a(()=>[o(y,{modelValue:u.status,"onUpdate:modelValue":e[2]||(e[2]=l=>u.status=l)},{default:a(()=>[o(i,{label:1},{default:a(()=>[S]),_:1}),o(i,{label:0},{default:a(()=>[z]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"\u5907\u6CE8",prop:"remark"},{default:a(()=>[o(d,{modelValue:u.remark,"onUpdate:modelValue":e[3]||(e[3]=l=>u.remark=l),type:"textarea",autosize:{minRows:4,maxRows:6},clearable:"",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{M as _};
