import{d as C,r as s,c as d,a as o,w as v,v as c,b,t as V,e as P,u as q,o as u,p as I,f as k,g as $,h as U,s as A,_ as N,i as O,j as w,k as h,l as B,m as W}from"./index-czkf-KZ5.js";const x=m=>(I("data-v-0a5456ca"),m=m(),k(),m),T={class:"emailAndPwd"},D=["required"],M=["required"],j=["required"],z=x(()=>o("md-filled-button",{type:"submit"}," Registrati ",-1)),F=x(()=>o("div",{class:"line"},null,-1)),R=["required"],G=["required"],H=x(()=>o("md-filled-button",{type:"submit"}," Login ",-1)),J={key:0,class:"error-text"},K=C({__name:"EmailPwdLogin",emits:["loginStart","loginEnd"],setup(m,{emit:n}){const l=q(),g=s(null),a=s(null),r=s(null),f=s(null),_=s(null),y=s(null),S=n;async function L(){if(r.value&&f.value&&a.value){S("loginStart");const i=await $(l,r.value,f.value);U(i.user,{displayName:a.value}),S("loginEnd")}}async function E(){if(_.value&&y.value)try{await A(l,_.value,y.value),g.value=null}catch{g.value="Credenziali errate"}}function p(){const i=window.navigator.userAgent,e=/^((?!chrome|android).)*safari/i.test(i),t=/CriOS/.test(i)&&/iPhone|iPad|iPod/.test(i);return e||t}return(i,e)=>(u(),d("div",T,[o("form",{onSubmit:b(L,["prevent"])},[v(o("md-outlined-text-field",{required:!p(),label:"Nome e cognome",type:"text",onChange:e[0]||(e[0]=t=>{t.target.reportValidity()}),"onUpdate:modelValue":e[1]||(e[1]=t=>a.value=t)},null,40,D),[[c,a.value]]),v(o("md-outlined-text-field",{required:!p(),label:"Email",type:"email",onChange:e[2]||(e[2]=t=>{t.target.reportValidity()}),"onUpdate:modelValue":e[3]||(e[3]=t=>r.value=t)},null,40,M),[[c,r.value]]),v(o("md-outlined-text-field",{required:!p(),label:"Password",type:"password",onChange:e[4]||(e[4]=t=>{t.target.reportValidity()}),"onUpdate:modelValue":e[5]||(e[5]=t=>f.value=t)},null,40,j),[[c,f.value]]),z],32),F,o("form",{onSubmit:b(E,["prevent"])},[v(o("md-outlined-text-field",{label:"Email",type:"text",onChange:e[6]||(e[6]=t=>{t.target.reportValidity()}),"onUpdate:modelValue":e[7]||(e[7]=t=>_.value=t),required:!p()},null,40,R),[[c,_.value]]),v(o("md-outlined-text-field",{label:"Password",type:"password",onChange:e[8]||(e[8]=t=>{t.target.reportValidity()}),"onUpdate:modelValue":e[9]||(e[9]=t=>y.value=t),required:!p()},null,40,G),[[c,y.value]]),H,g.value?(u(),d("div",J,V(g.value),1)):P("",!0)],32)]))}}),Q=N(K,[["__scopeId","data-v-0a5456ca"]]),X={class:"login"},Y={key:0,indeterminate:""},Z={key:1,class:"toBeLogged"},ee={key:2,class:"loggedIn"},oe=C({__name:"LoginView",setup(m){const n=O(),l=s(!1);return(g,a)=>(u(),d("div",X,[!w(n)&&l.value?(u(),d("md-circular-progress",Y)):w(n)?(u(),d("div",ee," Loggato con "+V(w(n).email)+" "+V(w(n).getIdToken()),1)):(u(),d("div",Z,[h(Q,{class:"emailLogin",onLogin:a[0]||(a[0]=r=>l.value=!0)}),B(" o "),h(W,{class:"googleLogin",onLoginStart:a[1]||(a[1]=r=>l.value=!0)})]))]))}});export{oe as default};