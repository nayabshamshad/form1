"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[425],{7425:(e,l,a)=>{a.r(l),a.d(l,{default:()=>S});a(702);var o=a(9835),t=a(1957);const s={class:"container"},i=(0,o._)("h2",null,"Autentificare",-1),n={class:"cate-list"},r=(0,o._)("label",{for:"uname"},[(0,o._)("b",null,"Adresa ta de E-mail")],-1),u={class:"cate-list"},d=(0,o._)("label",{for:"pwd"},[(0,o._)("b",null,"Parola")],-1),m={class:"btn1"},c=(0,o.Uk)("Conectare"),p={class:"pwd"},g=(0,o.Uk)("Utilizator nou? "),f=(0,o.Uk)("Înregistrare"),h=(0,o._)("div",{class:"flex",style:{"justify-content":"flex-end",padding:"0 30%"}},null,-1),b=(0,o._)("div",{class:"text-h6"},"Resetare parolă",-1),w=(0,o._)("p",null,"Introduce adresa de E-mail",-1),_={class:"flex justify-center"},E=(0,o.Uk)("Resetare");function y(e,l,a,y,k,C){const U=(0,o.up)("q-input"),V=(0,o.up)("q-btn"),W=(0,o.up)("router-link"),v=(0,o.up)("q-card-section"),P=(0,o.up)("q-card-actions"),q=(0,o.up)("q-card"),D=(0,o.up)("q-dialog"),Z=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",s,[(0,o._)("form",{onSubmit:l[3]||(l[3]=(0,t.iM)(((...e)=>C.loginUser&&C.loginUser(...e)),["prevent"])),class:"form",autocomplete:"off"},[i,(0,o._)("div",n,[r,(0,o.Wm)(U,{modelValue:k.userEmail,"onUpdate:modelValue":l[0]||(l[0]=e=>k.userEmail=e),type:"text",placeholder:"Adresa de E-mail",name:"uname"},null,8,["modelValue"])]),(0,o._)("div",u,[d,(0,o.Wm)(U,{type:"password",placeholder:"Parola",name:"pwd",modelValue:k.userPass,"onUpdate:modelValue":l[1]||(l[1]=e=>k.userPass=e)},null,8,["modelValue"])]),(0,o._)("div",m,[(0,o.Wm)(V,{onClick:C.loginUser,loading:k.isSubmitting,type:"button",color:"purple",rounded:""},{default:(0,o.w5)((()=>[c])),_:1},8,["onClick","loading"])]),(0,o._)("span",p,[g,(0,o.Wm)(W,{to:"/sign-up"},{default:(0,o.w5)((()=>[f])),_:1}),(0,o._)("button",{type:"button",style:{background:"none",outline:"none",border:"none",display:"block",color:"blue",cursor:"pointer"},onClick:l[2]||(l[2]=(...e)=>C.forgotPassword&&C.forgotPassword(...e))}," Am uitat parola ")])],32)]),(0,o.Wm)(D,{modelValue:k.forgotDialog,"onUpdate:modelValue":l[5]||(l[5]=e=>k.forgotDialog=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{style:{width:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[h,b])),_:1}),(0,o.Wm)(v,{class:"q-pt-none"},{default:(0,o.w5)((()=>[w,(0,o.Wm)(U,{modelValue:k.forgotEmail,"onUpdate:modelValue":l[4]||(l[4]=e=>k.forgotEmail=e),type:"email"},null,8,["modelValue"]),(0,o._)("div",_,[(0,o.Wm)(V,{onClick:C.sendResetEmail,rounder:"",style:{"margin-top":"1rem"},loading:k.sendingEmail,color:"purple"},{default:(0,o.w5)((()=>[E])),_:1},8,["onClick","loading"])])])),_:1}),(0,o.Wm)(P,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(V,{flat:"",label:"Ieșire",color:"primary"},null,512),[[Z]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}const k={data(){return{userEmail:"",userPass:"",isSubmitting:!1,forgotDialog:!1,forgotEmail:"",sendingEmail:!1,forgotCode:""}},mounted(){},methods:{async confirmReset(){await this.$store.dispatch("confirmReset",this.forgotCode)},async sendResetEmail(){if(this.sendingEmail)return;this.sendingEmail=!0;const e=await this.$store.dispatch("sendResetEmail",this.forgotEmail);e.err||(this.$q.notify({message:"Password reset email has been sent, please be sure to check your spam folder as well",color:"green"}),setTimeout((()=>{this.forgotDialog=!1}),1e3)),this.sendingEmail=!1},async forgotPassword(){this.forgotEmail=this.userEmail,this.forgotDialog=!0},async loginUser(){this.forgotDialog=!1,this.isSubmitting||(this.isSubmitting=!0,await this.$store.dispatch("signInUser",{email:this.userEmail,password:this.userPass}),this.isSubmitting=!1)}}};var C=a(1639),U=a(6611),V=a(4455),W=a(7743),v=a(4458),P=a(3190),q=a(1821),D=a(2146),Z=a(9984),Q=a.n(Z);const R=(0,C.Z)(k,[["render",y]]),S=R;Q()(k,"components",{QInput:U.Z,QBtn:V.Z,QDialog:W.Z,QCard:v.Z,QCardSection:P.Z,QCardActions:q.Z}),Q()(k,"directives",{ClosePopup:D.Z})}}]);