"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[441],{3441:(s,t,e)=>{e.r(t),e.d(t,{default:()=>S});e(702);var i=e(9835),a=e(1957);const o={class:"container"},l=(0,i._)("h2",{class:"text-center showMobile text-bold q-mb-lg q-pb-lg"},"LEC",-1),n=(0,i._)("h4",null,"Autentificare",-1),r=(0,i.Uk)(" Nu ai încă cont? "),u=(0,i.Uk)("Înregistrează-te"),d={class:"cate-list"},c=(0,i._)("label",{for:"uname"}," E-mail",-1),m={class:"cate-list"},p=(0,i._)("label",{for:"pwd"},"Parola",-1),g={class:"btn1"},f=(0,i.Uk)("Conectare"),h={class:"pwd"};function b(s,t,e,b,w,_){const k=(0,i.up)("router-link"),P=(0,i.up)("q-input"),C=(0,i.up)("q-icon"),y=(0,i.up)("q-btn"),q=(0,i.up)("q-card-section"),U=(0,i.up)("q-card");return(0,i.wg)(),(0,i.j4)(U,{class:"my-card full-height sign-in"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i._)("div",o,[(0,i._)("form",{onSubmit:t[4]||(t[4]=(0,a.iM)(((...s)=>_.loginUser&&_.loginUser(...s)),["prevent"])),class:"form",autocomplete:"off"},[l,n,(0,i._)("p",null,[r,(0,i.Wm)(k,{to:"/sign-up",class:"link"},{default:(0,i.w5)((()=>[u])),_:1})]),(0,i._)("div",d,[c,(0,i.Wm)(P,{outlined:"",modelValue:w.userEmail,"onUpdate:modelValue":t[0]||(t[0]=s=>w.userEmail=s),type:"text",placeholder:"Adresa de E-mail",name:"uname"},null,8,["modelValue"])]),(0,i._)("div",m,[p,(0,i.Wm)(P,{outlined:"",placeholder:"Parola",name:"pwd",modelValue:w.userPass,"onUpdate:modelValue":t[2]||(t[2]=s=>w.userPass=s),type:w.isPwd?"password":"text"},{append:(0,i.w5)((()=>[(0,i.Wm)(C,{name:w.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=s=>w.isPwd=!w.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type"])]),(0,i._)("div",g,[(0,i.Wm)(y,{onClick:_.loginUser,loading:w.isSubmitting,class:"q-btn-item",type:"button"},{default:(0,i.w5)((()=>[f])),_:1},8,["onClick","loading"])]),(0,i._)("span",h,[(0,i._)("button",{style:{"font-size":"12px"},type:"button",class:"link",onClick:t[3]||(t[3]=(...s)=>_.forgotPassword&&_.forgotPassword(...s))}," Am uitat parola ")])],32)])])),_:1})])),_:1})}const w={data(){return{userEmail:"",userPass:"",isSubmitting:!1,forgotDialog:!1,forgotEmail:"",sendingEmail:!1,forgotCode:"",isPwd:!0}},mounted(){},methods:{async confirmReset(){await this.$store.dispatch("confirmReset",this.forgotCode)},forgotPassword(){this.$router.push("/send-reset-link")},async loginUser(){this.forgotDialog=!1,this.isSubmitting||(this.isSubmitting=!0,await this.$store.dispatch("signInUser",{email:this.userEmail.trim(),password:this.userPass}),this.isSubmitting=!1)}}};var _=e(1639),k=e(4458),P=e(3190),C=e(6611),y=e(2857),q=e(4455),U=e(9984),v=e.n(U);const E=(0,_.Z)(w,[["render",b]]),S=E;v()(w,"components",{QCard:k.Z,QCardSection:P.Z,QInput:C.Z,QIcon:y.Z,QBtn:q.Z})}}]);