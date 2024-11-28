import{o as e,c as t,w as a,b as l,i as o,d as s,h as r,f as i,j as n,l as u,E as d,D as c,r as m,a as p,e as f,t as g,s as _,U as h,x,C as b,J as v,V as y,W as w,X as k,Q as C,m as S,Y as V,y as j,Z as $,T as L,_ as U,$ as B,n as W,N as z,L as N,a0 as T,a1 as F,p as I,F as q,B as E,P as G,a2 as O,a3 as A,K as D,A as H,a4 as J,a5 as K,a6 as P,k as Q,a7 as R}from"./index.134bed81.js";import{_ as X}from"./u-image.d9036226.js";import{_ as Y}from"./u-icon.3f533f9b.js";import{_ as Z,a as M}from"./u-form-item.0c864d6a.js";import{_ as ee}from"./u-verification-code.969ab25c.js";import{_ as te}from"./u-form.45d8f78b.js";import{_ as ae}from"./u-checkbox.251fb093.js";import{_ as le}from"./u-button.dbdc4bbd.js";import{_ as oe}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as se}from"./avatar-upload.ff0fe37a.js";import{_ as re}from"./u-popup.d56e1d73.js";import{u as ie}from"./useLockFn.d7328efe.js";import"./emitter.5b880544.js";import"./util.f34da83a.js";import"./_commonjsHelpers.b8add541.js";var ne=oe({name:"u-divider",props:{halfWidth:{type:[Number,String],default:150},borderColor:{type:String,default:"#dcdfe6"},type:{type:String,default:"primary"},color:{type:String,default:"#909399"},fontSize:{type:[Number,String],default:26},bgColor:{type:String,default:"#ffffff"},height:{type:[Number,String],default:"auto"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},useSlot:{type:Boolean,default:!0}},computed:{lineStyle(){let e={};return-1!=String(this.halfWidth).indexOf("%")?e.width=this.halfWidth:e.width=this.halfWidth+"rpx",this.borderColor&&(e.borderColor=this.borderColor),e}},methods:{click(){this.$emit("click")}}},[["render",function(u,d,c,m,p,f){const g=n;return e(),t(g,{class:"u-divider",style:s({height:"auto"==c.height?"auto":c.height+"rpx",backgroundColor:c.bgColor,marginBottom:c.marginBottom+"rpx",marginTop:c.marginTop+"rpx"}),onClick:f.click},{default:a((()=>[l(g,{class:o(["u-divider-line",[c.type?"u-divider-line--bordercolor--"+c.type:""]]),style:s([f.lineStyle])},null,8,["class","style"]),c.useSlot?(e(),t(g,{key:0,class:"u-divider-text",style:s({color:c.color,fontSize:c.fontSize+"rpx"})},{default:a((()=>[r(u.$slots,"default",{},void 0,!0)])),_:3},8,["style"])):i("v-if",!0),l(g,{class:o(["u-divider-line",[c.type?"u-divider-line--bordercolor--"+c.type:""]]),style:s([f.lineStyle])},null,8,["class","style"])])),_:3},8,["style","onClick"])}],["__scopeId","data-v-ba53c472"]]);const ue=u({__name:"mplogin-popup",props:{show:{type:Boolean},logo:{type:String},title:{type:String}},emits:["update:show","update"],setup(o,{emit:s}){const r=o,i=d({get:()=>r.show,set(e){s("update:show",e)}}),u=c(),k=e=>{const{nickname:t}=e.detail.value;return u.value?t?void s("update",{avatar:u.value,nickname:t}):uni.$u.toast({title:"请输入昵称"}):uni.$u.toast({title:"请添加头像"})};return(s,r)=>{const d=x,c=b,C=n,S=m(p("avatar-upload"),se),V=m(p("u-form-item"),Z),j=v,$=y,L=w,U=m(p("u-popup"),re);return e(),t(C,null,{default:a((()=>[l(U,{modelValue:_(i),"onUpdate:modelValue":r[2]||(r[2]=e=>h(i)?i.value=e:null),mode:"bottom","border-radius":"14","mask-close-able":!1},{default:a((()=>[l(C,{class:"h-[1000rpx] p-[40rpx]"},{default:a((()=>[l(C,{class:"flex items-center"},{default:a((()=>[l(d,{class:"w-[100rpx] h-[100rpx] rounded",mode:"heightFix",src:o.logo},null,8,["src"]),l(c,{class:"text-3xl ml-5 font-bold"},{default:a((()=>[f(g(o.title),1)])),_:1})])),_:1}),l(C,{class:"mt-5 text-muted"},{default:a((()=>[f(" 建议使用您的微信头像和昵称，以便获得更好的体验 ")])),_:1}),l(C,{class:"mt-[30rpx]"},{default:a((()=>[l(L,{onSubmit:k},{default:a((()=>[l(V,{required:"",label:"头像",labelWidth:120},{default:a((()=>[l(C,{class:"flex-1"},{default:a((()=>[l(S,{modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=e=>u.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),l(V,{required:"",label:"昵称",labelWidth:120},{default:a((()=>[l(j,{class:"flex-1 h-[60rpx]",name:"nickname",type:"nickname",placeholder:"请输入昵称"})])),_:1}),l(C,{class:"mt-[80rpx]"},{default:a((()=>[l($,{class:"bg-primary rounded-full text-white text-lg h-[80rpx] leading-[80rpx]","hover-class":"none","form-type":"submit"},{default:a((()=>[f(" 确定 ")])),_:1})])),_:1}),l(C,{class:"flex justify-center mt-[60rpx]"},{default:a((()=>[l(C,{class:"text-muted",onClick:r[1]||(r[1]=e=>i.value=!1)},{default:a((()=>[f("暂不登录")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}}});var de=oe(u({__name:"login",setup(s){const r=c(!0);r.value=k();const u=C(),h=S(),x=V(),v=c(""),y=c(!1),w=c(!1),oe=j({scene:1,account:"",password:"",code:""}),se=c(),re=e=>{v.value=e},de=d((()=>h.getWebsiteConfig)),ce=async()=>{var e,t;oe.account&&(null==(e=x.value)?void 0:e.canGetCode)&&(await O({scene:A.LOGIN,mobile:oe.account}),uni.$u.toast("发送成功"),null==(t=x.value)||t.start())},me=e=>{oe.scene=e},pe=e=>{var t;return null==(t=h.getLoginConfig.login_way)?void 0:t.includes(String(e))},fe=d((()=>h.getLoginConfig.wechat_auth)),ge=d((()=>1==h.getLoginConfig.login_agreement)),_e=d((()=>1==h.getLoginConfig.third_auth)),he=d((()=>1==h.getLoginConfig.coerce_mobile)),xe=async e=>{const{token:t,mobile:a}=e;if(!a&&he.value)return u.temToken=t,D({url:"/pages/bind_mobile/bind_mobile"}),void B();u.login(e.token),await u.getUser(),uni.$u.toast("登录成功"),B();const l=H();if(l.length>1){const e=l[l.length-2];W({success:()=>{const{onLoad:t,options:a}=e;t&&t(a)}})}else J.get(K)?F({url:J.get(K)}):N({url:"/pages/index/index"});J.remove(K)},{lockFn:be}=ie((async()=>{if(!w.value&&ge.value)return uni.$u.toast("请勾选已阅读并同意《服务协议》和《隐私协议》");if(1==oe.scene){if(!oe.account)return uni.$u.toast("请输入账号/手机号码");if(!oe.password)return uni.$u.toast("请输入密码")}if(2==oe.scene){if(!oe.account)return uni.$u.toast("请输入手机号码");if(!oe.code)return uni.$u.toast("请输入验证码")}U({title:"请稍后..."});try{const e=await R(oe);xe(e)}catch(e){B(),uni.$u.toast(e)}})),ve=async()=>{if(!w.value&&ge.value)return uni.$u.toast("请勾选已阅读并同意《服务协议》和《隐私协议》");r.value&&T.getUrl()},ye=async e=>{await P(e,{token:u.temToken}),y.value=!1,xe(se.value)};return $((()=>h.getLoginConfig),(e=>{e.login_way&&(oe.scene=e.login_way[0])}),{immediate:!0}),L((async()=>{try{u.isLogin&&(U({title:"请稍后..."}),await u.getUser(),B(),W())}catch(e){B()}})),z((async e=>{if(u.isLogin)return void N({url:"/pages/index/index"});const{code:t}=e;if(t){U({title:"请稍后..."});try{const e=await T.authLogin(t);xe(e)}catch(a){throw B(),F({url:"/pages/login/login"}),new Error(a)}}})),(s,u)=>{const d=m(p("u-image"),X),c=n,k=m(p("u-icon"),Y),C=m(p("u-input"),M),S=m(p("u-form-item"),Z),V=Q,j=m(p("u-verification-code"),ee),$=b,L=m(p("u-form"),te),U=m(p("u-checkbox"),ae),B=m(p("u-button"),le),W=m(p("u-divider"),ne),z=m(p("mplogin-popup"),ue);return e(),t(c,{class:"bg-white login min-h-full flex flex-col items-center px-[40rpx] pt-[80rpx] box-border"},{default:a((()=>[l(c,null,{default:a((()=>[l(d,{src:_(h).getWebsiteConfig.shop_logo,mode:"widthFix",height:"160",width:"160"},null,8,["src"])])),_:1}),l(c,{class:"mt-4 text-xl font-medium"},{default:a((()=>[f(g(_(h).getWebsiteConfig.shop_name),1)])),_:1}),l(c,{class:"w-full mt-[60rpx] pb-[60rpx]"},{default:a((()=>[l(L,{borderBottom:""},{default:a((()=>[1==oe.scene&&pe(1)?(e(),I(q,{key:0},[l(S,{borderBottom:""},{default:a((()=>[l(k,{class:"mr-2",size:36,name:"/static/images/icon/icon_user.png"}),l(C,{class:"flex-1",modelValue:oe.account,"onUpdate:modelValue":u[0]||(u[0]=e=>oe.account=e),border:!1,placeholder:"请输入账号/手机号码"},null,8,["modelValue"])])),_:1}),l(S,{borderBottom:""},{default:a((()=>[l(k,{class:"mr-2",size:36,name:"/static/images/icon/icon_password.png"}),l(C,{class:"flex-1",modelValue:oe.password,"onUpdate:modelValue":u[1]||(u[1]=e=>oe.password=e),type:"password",placeholder:"请输入密码",border:!1},null,8,["modelValue"]),l(V,{url:"/pages/forget_pwd/forget_pwd","hover-class":"none"},{default:a((()=>[l(c,{class:"border-l border-solid border-0 border-light pl-3 text-muted leading-4 ml-3"},{default:a((()=>[f(" 忘记密码？ ")])),_:1})])),_:1})])),_:1})],64)):i("v-if",!0),2==oe.scene&&pe(2)?(e(),I(q,{key:1},[l(S,{borderBottom:""},{default:a((()=>[l(k,{class:"mr-2",size:36,name:"/static/images/icon/icon_mobile.png"}),l(C,{class:"flex-1",modelValue:oe.account,"onUpdate:modelValue":u[2]||(u[2]=e=>oe.account=e),border:!1,placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1}),l(S,{borderBottom:""},{default:a((()=>[l(k,{class:"mr-2",size:36,name:"/static/images/icon/icon_code.png"}),l(C,{class:"flex-1",modelValue:oe.code,"onUpdate:modelValue":u[3]||(u[3]=e=>oe.code=e),placeholder:"请输入验证码",border:!1},null,8,["modelValue"]),l(c,{class:"border-l border-solid border-0 border-light pl-3 leading-4 ml-3 w-[180rpx]",onClick:ce},{default:a((()=>[l(j,{ref_key:"uCodeRef",ref:x,seconds:60,onChange:re,"change-text":"x秒"},null,512),l($,{class:o(oe.account?"text-primary":"text-muted")},{default:a((()=>[f(g(v.value),1)])),_:1},8,["class"])])),_:1})])),_:1})],64)):i("v-if",!0)])),_:1}),_(ge)?(e(),t(c,{key:0,class:"mt-[40rpx]"},{default:a((()=>[l(U,{modelValue:w.value,"onUpdate:modelValue":u[6]||(u[6]=e=>w.value=e),shape:"circle"},{default:a((()=>[l(c,{class:"text-xs flex"},{default:a((()=>[f(" 已阅读并同意 "),l(c,{onClick:u[4]||(u[4]=E((()=>{}),["stop"]))},{default:a((()=>[l(V,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=service"},{default:a((()=>[f(" 《服务协议》 ")])),_:1})])),_:1}),f(" 和 "),l(c,{onClick:u[5]||(u[5]=E((()=>{}),["stop"]))},{default:a((()=>[l(V,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=privacy"},{default:a((()=>[f(" 《隐私协议》 ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})):i("v-if",!0),l(c,{class:"mt-[60rpx]"},{default:a((()=>[l(B,{type:"primary",shape:"circle",onClick:u[7]||(u[7]=e=>_(be)(oe.scene))},{default:a((()=>[f(" 登 录 ")])),_:1})])),_:1}),l(c,{class:"text-content flex justify-between mt-[40rpx]"},{default:a((()=>[l(c,{class:"flex-1"},{default:a((()=>[2==oe.scene&&pe(1)?(e(),t(c,{key:0,onClick:u[8]||(u[8]=e=>me(1))},{default:a((()=>[f(" 账号密码登录 ")])),_:1})):i("v-if",!0),1==oe.scene&&pe(2)?(e(),t(c,{key:1,onClick:u[9]||(u[9]=e=>me(2))},{default:a((()=>[f(" 短信验证码登录 ")])),_:1})):i("v-if",!0)])),_:1}),l(V,{url:"/pages/register/register","hover-class":"none"},{default:a((()=>[f("注册账号")])),_:1})])),_:1}),_(_e)&&r.value?(e(),t(c,{key:1,class:"mt-[80rpx]"},{default:a((()=>[l(W,null,{default:a((()=>[f("第三方登录")])),_:1}),G("div",{class:"flex justify-center mt-[40rpx]"},[_(fe)&&r.value?(e(),I("div",{key:0,class:"flex flex-col items-center",onClick:ve},[G("img",{src:"/mobile/assets/icon_wx.a848c744.png",class:"w-[80rpx] h-[80rpx]"}),G("div",{class:"text-sm mt-[10px]"},"微信登录")])):i("v-if",!0)])])),_:1})):i("v-if",!0)])),_:1}),l(z,{show:y.value,"onUpdate:show":u[10]||(u[10]=e=>y.value=e),logo:_(de).shop_logo,title:_(de).shop_name,onUpdate:ye},null,8,["show","logo","title"])])),_:1})}}}),[["__scopeId","data-v-e905ed52"]]);export{de as default};
