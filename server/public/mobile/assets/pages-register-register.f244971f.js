import{l as e,D as a,m as o,E as s,y as l,o as t,c as r,w as u,b as d,s as m,e as p,B as c,f as n,ai as i,n as f,r as _,a as b,k as x,j as w}from"./index.134bed81.js";import{a as g,_ as h}from"./u-form-item.0c864d6a.js";import{_ as v}from"./u-form.45d8f78b.js";import{_ as y}from"./u-checkbox.251fb093.js";import{_ as V}from"./u-button.dbdc4bbd.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.3f533f9b.js";import"./emitter.5b880544.js";var k=j(e({__name:"register",setup(e){const j=a(!1),k=o(),B=s((()=>1==k.getLoginConfig.login_agreement)),$=l({account:"",password:"",password_confirm:""}),C=async()=>!j.value&&B.value?uni.$u.toast("请勾选已阅读并同意《服务协议》和《隐私协议》"):$.account?$.password?$.password_confirm?$.password!=$.password_confirm?uni.$u.toast("两次输入的密码不一致"):(await i($),void setTimeout((()=>{f()}),1500)):uni.$u.toast("请输入确认密码"):uni.$u.toast("请输入密码"):uni.$u.toast("请输入账号");return(e,a)=>{const o=_(b("u-input"),g),s=_(b("u-form-item"),h),l=_(b("u-form"),v),i=x,f=w,k=_(b("u-checkbox"),y),U=_(b("u-button"),V);return t(),r(f,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[40rpx] box-border"},{default:u((()=>[d(f,{class:"w-full"},{default:u((()=>[d(l,{borderBottom:"","label-width":150},{default:u((()=>[d(s,{label:"创建账号",borderBottom:""},{default:u((()=>[d(o,{class:"flex-1",modelValue:$.account,"onUpdate:modelValue":a[0]||(a[0]=e=>$.account=e),border:!1,placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),d(s,{label:"设置密码",borderBottom:""},{default:u((()=>[d(o,{class:"flex-1",type:"password",modelValue:$.password,"onUpdate:modelValue":a[1]||(a[1]=e=>$.password=e),placeholder:"6-20位数字+字母或符号组合",border:!1},null,8,["modelValue"])])),_:1}),d(s,{label:"确认密码",borderBottom:""},{default:u((()=>[d(o,{class:"flex-1",type:"password",modelValue:$.password_confirm,"onUpdate:modelValue":a[2]||(a[2]=e=>$.password_confirm=e),placeholder:"请确认密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),m(B)?(t(),r(f,{key:0,class:"mt-[40rpx]"},{default:u((()=>[d(k,{modelValue:j.value,"onUpdate:modelValue":a[5]||(a[5]=e=>j.value=e),shape:"circle"},{default:u((()=>[d(f,{class:"text-xs flex"},{default:u((()=>[p(" 已阅读并同意 "),d(f,{onClick:a[3]||(a[3]=c((()=>{}),["stop"]))},{default:u((()=>[d(i,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=service"},{default:u((()=>[p(" 《服务协议》 ")])),_:1})])),_:1}),p(" 和 "),d(f,{onClick:a[4]||(a[4]=c((()=>{}),["stop"]))},{default:u((()=>[d(i,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=privacy"},{default:u((()=>[p(" 《隐私协议》 ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})):n("v-if",!0),d(f,{class:"mt-[60rpx]"},{default:u((()=>[d(U,{type:"primary",shape:"circle",onClick:C},{default:u((()=>[p(" 注册 ")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-6052d898"]]);export{k as default};
