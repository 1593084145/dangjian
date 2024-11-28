import{W as U,X as R,M as V}from"./element-plus.da7f6a44.js";import{a as D,k as p,R as C,f as m,d as L}from"./index.e69109c6.js";import{d as P,s as _,r as f,e as S,t as N,o as c,c as g,U as k,L as b,H as j,K as I,a as v,V as q,a7 as H,T as K,R as M}from"./@vue.e8706010.js";const O=P({components:{},props:{type:{type:String,default:"image"},multiple:{type:Boolean,default:!0},limit:{type:Number,default:10},data:{type:Object,default:()=>({})},showProgress:{type:Boolean,default:!1}},emits:["change","error","success"],setup(e,{emit:a}){const h=D(),n=_(),E=f(`${p.baseUrl}${p.urlPrefix}/upload/${e.type}`),F=S(()=>({token:h.token,version:p.version})),o=f(!1),u=f([]),d=(s,l,r)=>{o.value=!0,u.value=N(r)},t=(s,l,r)=>{var y;r.every(B=>B.status=="success")&&((y=n.value)==null||y.clearFiles(),o.value=!1),a("change",l),s.code==C.SUCCESS&&a("success",s),s.code==C.FAIL&&s.msg&&m.msgError(s.msg)},i=(s,l)=>{var r;m.msgError(`${l.name}\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25`),(r=n.value)==null||r.abort(l),o.value=!1,a("change",l),a("error",l)},w=()=>{m.msgError(`\u8D85\u51FA\u4E0A\u4F20\u4E0A\u9650${e.limit}\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20`)},A=()=>{var s;(s=n.value)==null||s.clearFiles(),o.value=!1},$=S(()=>{switch(e.type){case"image":return".jpg,.png,.gif,.jpeg";case"video":return".wmv,.avi,.mpg,.mpeg,.3gp,.mov,.mp4,.flv,.rmvb,.mkv";case"audio":return".mp3,.oog,.wav";default:return"*"}});return{uploadRefs:n,action:E,headers:F,visible:o,fileList:u,getAccept:$,handleProgress:d,handleSuccess:t,handleError:i,handleExceed:w,handleClose:A}}}),T={class:"upload"},W={class:"file-list p-4"},X={class:"flex-1"};function z(e,a,h,n,E,F){const o=U,u=R,d=V;return c(),g("div",T,[k(o,{ref:"uploadRefs",action:e.action,multiple:e.multiple,limit:e.limit,"show-file-list":!1,headers:e.headers,data:e.data,"on-progress":e.handleProgress,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-error":e.handleError,accept:e.getAccept},{default:b(()=>[j(e.$slots,"default")]),_:3},8,["action","multiple","limit","headers","data","on-progress","on-success","on-exceed","on-error","accept"]),e.showProgress&&e.fileList.length?(c(),I(d,{key:0,modelValue:e.visible,"onUpdate:modelValue":a[0]||(a[0]=t=>e.visible=t),title:"\u4E0A\u4F20\u8FDB\u5EA6","close-on-click-modal":!1,width:"500px",modal:!1,onClose:e.handleClose},{default:b(()=>[v("div",W,[(c(!0),g(q,null,H(e.fileList,(t,i)=>(c(),g("div",{key:i,class:"mb-5"},[v("div",null,K(t.name),1),v("div",X,[k(u,{percentage:parseInt(t.percentage)},null,8,["percentage"])])]))),128))])]),_:1},8,["modelValue","onClose"])):M("",!0)])}const Z=L(O,[["render",z]]);export{Z as U};
