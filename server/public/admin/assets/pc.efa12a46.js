import{_ as y}from"./index.1c00187d.js";import{I as V,w as b}from"./element-plus.da7f6a44.js";import B from"./menu.b0e6b3ab.js";import P from"./preview-pc.9e32ad52.js";import{_ as h}from"./attr-setting.vue_vue_type_script_setup_true_lang.467326a3.js";import"./index.5795b30e.js";import{s as C,a as E}from"./decoration.ac77bdc4.js";import"./lodash.8ea337b2.js";import{d as _,$ as I,r as l,e as c,w as N,af as S,o as d,c as k,U as i,L as s,M,K as U,a as F,u,S as J}from"./@vue.e8706010.js";import{d as O}from"./index.e69109c6.js";import"./@vueuse.1e5a6e21.js";import"./@element-plus.196c7323.js";import"./lodash-es.29c53eac.js";import"./dayjs.389eebc4.js";import"./axios.1da4aec9.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./vue-router.12d45bc3.js";import"./pinia.dfca86b4.js";import"./vue-demi.ebc8116b.js";import"./css-color-function.2f4f8b9c.js";import"./color.4de71c9d.js";import"./clone.33ea348d.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./debug.45e63973.js";import"./ms.a9ae1d6d.js";import"./nprogress.f6aab5cc.js";import"./vue-clipboard3.8fce0f2c.js";import"./clipboard.88653269.js";import"./echarts.8d7a50ae.js";import"./zrender.1084fa23.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.2cdc8407.js";import"./attr.vue_vue_type_script_setup_true_lang.e437fa35.js";import"./index.f7f6b9c3.js";import"./picker.0052456e.js";import"./index.b75bd452.js";import"./picker.6adf8056.js";import"./index.e94240b0.js";import"./index.vue_vue_type_script_setup_true_lang.f1fbc38a.js";import"./index.9e158aa9.js";import"./index.vue_vue_type_script_setup_true_lang.f8fe6edf.js";import"./usePaging.160b82b8.js";import"./vue3-video-play.4851e3ad.js";import"./vuedraggable.a1a0fadb.js";import"./vue.b3ae8ecc.js";import"./sortablejs.0de3e377.js";import"./content.vue_vue_type_script_setup_true_lang.9b1a4da0.js";import"./decoration-img.54f6b665.js";import"./attr.vue_vue_type_script_setup_true_lang.0d811eea.js";import"./content.2cfae171.js";import"./attr.vue_vue_type_script_setup_true_lang.163b4869.js";import"./add-nav.vue_vue_type_script_setup_true_lang.3b4cbc53.js";import"./content.f03244dd.js";import"./attr.vue_vue_type_script_setup_true_lang.650574dc.js";import"./content.vue_vue_type_script_setup_true_lang.e8a99082.js";import"./attr.vue_vue_type_script_setup_true_lang.bc88ba14.js";import"./content.73203114.js";import"./attr.vue_vue_type_script_setup_true_lang.acb513fa.js";import"./content.12eb4711.js";import"./attr.vue_vue_type_script_setup_true_lang.775b5e18.js";import"./content.03600737.js";import"./attr.vue_vue_type_script_setup_true_lang.014846e8.js";import"./content.vue_vue_type_script_setup_true_lang.8dc6fb4a.js";import"./attr.vue_vue_type_script_setup_true_lang.d0ae40ff.js";import"./content.22ead1a9.js";const W={class:"decoration-pages min-w-[1100px]"},$={class:"flex h-full items-start"},K=J("\u4FDD\u5B58"),L=_({name:"decorationPc"}),T=_({...L,setup(j){const a=I({[4]:{id:4,type:4,name:"\u9996\u9875\u88C5\u4FEE",pageData:[]}}),o=l("4"),r=l(0),p=c(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData)!=null?t:[]}),f=c(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData[r.value])!=null?t:""}),n=async()=>{const e=await E({id:o.value});a[String(e.id)].pageData=JSON.parse(e.data),r.value=p.value.findIndex(t=>!t.disabled)},v=async()=>{await C({...a[o.value],data:JSON.stringify(a[o.value].pageData)}),n()};return N(o,()=>{r.value=p.value.findIndex(e=>!e.disabled),n()},{immediate:!0}),(e,t)=>{const g=V,x=b,D=y,w=S("perms");return d(),k("div",W,[i(g,{shadow:"never",class:"!border-none flex-1 flex","body-style":{flex:1}},{default:s(()=>[F("div",$,[i(B,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=m=>o.value=m),menus:a},null,8,["modelValue","menus"]),i(P,{class:"mx-4",modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=m=>r.value=m),pageData:u(p)},null,8,["modelValue","pageData"]),i(h,{class:"flex-1",widget:u(f),type:"pc"},null,8,["widget"])])]),_:1}),M((d(),U(D,{class:"mt-4",fixed:!1},{default:s(()=>[i(x,{type:"primary",onClick:v},{default:s(()=>[K]),_:1})]),_:1})),[[w,["decorate:pages:save"]]])])}}});const ne=O(T,[["__scopeId","data-v-63d3cf8a"]]);export{ne as default};
