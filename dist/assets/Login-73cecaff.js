import{n as _,q as l,v as x,_ as m,B as h,I as w,c as n,D as a,G as s,H as c,E as d,ak as v,L as V,z as b,C as k}from"./index-7c7db64b.js";import{b as y,a as S}from"./firebase-c87023ff.js";import{j as B}from"./VAvatar-04a00f10.js";import{V as u}from"./VTextField-553e4953.js";import{V as C}from"./VBtn-1a376f6a.js";import{V as p}from"./VCard-10989986.js";import{V as L}from"./VDialog-c29b2826.js";import"./index-53c4966a.js";import"./forwardRefs-e658ad70.js";import"./group-059c7191.js";import"./VOverlay-a2d7cb61.js";import"./lazy-4eee2d09.js";const M={name:"LoginMain",data(){return{user:{account:"",pwd:""},visible:!0,dialogtext:"",isShow:!1}},methods:{loginBtn(){y(S,this.user.account,this.user.pwd).then(()=>{this.$nextTick(()=>{this.dialogtext="登入成功",this.setLoginState(!0),this.isShow=!0,_("true"),l.push({name:"DashBoard"})})}).catch(r=>{switch(r.code){case"auth/invalid-email":this.dialogtext="請輸入正確的電子郵件",this.isShow=!0;break;case"auth/missing-password":this.dialogtext="密碼請勿留白",this.isShow=!0;break;case"auth/invalid-credential":this.dialogtext="密碼錯誤",this.isShow=!0;break}})},ForgotPwd(){l.push({name:"ForgotPwd"})},Register(){l.push({name:"Register"})},toggleVisibility(){this.visible=!this.visible},...x("user",["setUser","setLoginState"])}},F={class:"pt-16 h-screen",style:{background:"linear-gradient(to right, #e2e2e2, #d7f0e5)"}},I=s("div",{class:"text-h4 mb-2 text-center"},"登入會員",-1),P={class:"text-center mb-16"},D=s("span",{style:{color:"red","text-decoration":"underline"}}," 立即註冊 ",-1),E={class:"mb-3"},U={class:"text-center mb-5"},K={class:"text-center"},N={class:"mt-7 mb-5"};function R(r,e,g,f,t,i){return h(),w("main",F,[n(p,{class:"mx-auto pa-13 pb-8",elevation:"8","max-width":"448",rounded:"lg","data-aos":"flip-left","data-aos-duration":"1000"},{default:a(()=>[I,s("div",P,[s("a",{class:"fw-4 text-caption",href:"#",rel:"noopener noreferrer",onClick:e[0]||(e[0]=c(o=>i.Register(),["prevent"]))},[d(" 還不是會員？"),D,d("享 $1000 折扣 "),n(B,{icon:"mdi-chevron-right"})])]),n(u,{density:"compact",placeholder:"Email...",variant:"outlined",modelValue:t.user.account,"onUpdate:modelValue":e[1]||(e[1]=o=>t.user.account=o),style:{"caret-color":"pink"}},null,8,["modelValue"]),n(u,{"append-inner-icon":t.visible?"mdi-eye-off":"mdi-eye",type:t.visible?"password":"text",density:"compact",placeholder:"密碼...",variant:"outlined",style:{"caret-color":"pink"},modelValue:t.user.pwd,"onUpdate:modelValue":e[2]||(e[2]=o=>t.user.pwd=o),"onClick:appendInner":i.toggleVisibility,onKeydown:v(i.loginBtn,["enter"])},null,8,["append-inner-icon","type","modelValue","onClick:appendInner","onKeydown"]),s("div",E,[n(C,{block:"",class:"",color:"blue",size:"large",variant:"outlined",onClick:i.loginBtn},{default:a(()=>[d("登入")]),_:1},8,["onClick"])]),s("div",U,[s("a",{onClick:e[3]||(e[3]=c((...o)=>i.ForgotPwd&&i.ForgotPwd(...o),["prevent"])),class:"text-caption",href:"#",rel:"noopener noreferrer",target:"_blank",style:{"text-decoration":"underline"}}," 忘記密碼 ?")])]),_:1}),n(L,{modelValue:t.isShow,"onUpdate:modelValue":e[4]||(e[4]=o=>t.isShow=o),"max-width":"350px",transition:"dialog-top-transition",class:"mt-n16"},{default:a(()=>[s("div",K,[n(p,null,{default:a(()=>[s("div",N,[s("div",null,V(t.dialogtext),1)])]),_:1})])]),_:1},8,["modelValue"])])}const T=m(M,[["render",R]]),z={name:"Login",components:{LoginMain:T}};function j(r,e,g,f,t,i){const o=b("Login-Main");return h(),k(o)}const ee=m(z,[["render",j]]);export{ee as default};