import{_ as y}from"./index.1c00187d.js";import{R as k,I as x,G as R,H,C as N,B as U,w as I,D as S}from"./element-plus.da7f6a44.js";import{r as B}from"./index.e69109c6.js";import{d as C,$ as q,af as E,o as n,c as G,U as e,L as t,M as F,K as _,a as i,R as T,S as a,T as K}from"./@vue.e8706010.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.389eebc4.js";import"./axios.1da4aec9.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.8ea337b2.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.2f4f8b9c.js";import"./color.4de71c9d.js";import"./clone.33ea348d.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.45e63973.js";import"./ms.a9ae1d6d.js";import"./nprogress.f6aab5cc.js";import"./vue-clipboard3.8fce0f2c.js";import"./clipboard.88653269.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";function L(p){return B.post({url:"/channel.web_page_setting/setConfig",params:p})}function M(){return B.get({url:"/channel.web_page_setting/getConfig"})}const $=a("\u5F00\u542F"),j=a("\u5173\u95ED"),z=i("div",{class:"form-tips"},"\u72B6\u6001\u4E3A\u5173\u95ED\u65F6\uFF0C\u5C06\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",-1),J=a("\u7A7A\u9875\u9762"),O=a("\u81EA\u5B9A\u4E49\u94FE\u63A5"),P={class:"w-80"},Q={class:"flex-1 min-w-0 break-words"},W=a("\u590D\u5236"),X=a("\u4FDD\u5B58"),Y=C({name:"h5Config"}),Ut=C({...Y,setup(p){const o=q({status:0,page_status:0,page_url:"",url:""}),m=async()=>{const d=await M();for(const u in o)o[u]=d[u]},b=async()=>{await L(o),m()};return m(),(d,u)=>{const D=k,c=x,s=R,f=H,r=N,h=U,g=I,w=S,v=y,V=E("copy"),A=E("perms");return n(),G("div",null,[e(c,{class:"!border-none",shadow:"never"},{default:t(()=>[e(D,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1AH5\u8BBE\u7F6E",closable:!1,"show-icon":""})]),_:1}),e(c,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[e(w,{ref:"formRef",model:o,"label-width":"120px"},{default:t(()=>[e(r,{label:"\u6E20\u9053\u72B6\u6001",required:"",prop:"status"},{default:t(()=>[i("div",null,[e(f,{modelValue:o.status,"onUpdate:modelValue":u[0]||(u[0]=l=>o.status=l)},{default:t(()=>[e(s,{label:1},{default:t(()=>[$]),_:1}),e(s,{label:0},{default:t(()=>[j]),_:1})]),_:1},8,["modelValue"]),z])]),_:1}),e(r,{label:"\u5173\u95ED\u540E\u8BBF\u95EE\u9875\u9762",prop:"page_status"},{default:t(()=>[e(f,{modelValue:o.page_status,"onUpdate:modelValue":u[1]||(u[1]=l=>o.page_status=l)},{default:t(()=>[e(s,{label:0},{default:t(()=>[J]),_:1}),e(s,{label:1},{default:t(()=>[O]),_:1})]),_:1},8,["modelValue"])]),_:1}),o.page_status==1?(n(),_(r,{key:0,label:"",prop:"page_url"},{default:t(()=>[i("div",P,[e(h,{modelValue:o.page_url,"onUpdate:modelValue":u[2]||(u[2]=l=>o.page_url=l),placeholder:"\u8BF7\u8F93\u5165\u5B8C\u6574\u7684url"},null,8,["modelValue"])])]),_:1})):T("",!0),e(r,{label:"\u8BBF\u95EE\u94FE\u63A5"},{default:t(()=>[i("div",Q,[a(K(o.url)+" ",1),F((n(),_(g,null,{default:t(()=>[W]),_:1})),[[V,o.url]])])]),_:1})]),_:1},8,["model"])]),_:1}),F((n(),_(v,null,{default:t(()=>[e(g,{type:"primary",onClick:b},{default:t(()=>[X]),_:1})]),_:1})),[[A,["channel.web_page_setting/setConfig"]]])])}}});export{Ut as default};
