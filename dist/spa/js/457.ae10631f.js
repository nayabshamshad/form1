"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[457],{1457:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var a=s(9835);const i=(0,a._)("h2",{class:"text-center text-weight-bold reset-lec"},"LEC",-1),o={class:"reset-icon"},r={class:"container"},n={class:"form",autocomplete:"off"},l=(0,a._)("h4",{class:"reset-pwd-h4"},"Resetare parola",-1),c={class:"cate-list"},u=(0,a._)("label",{for:"pwd"},"Parola nouă",-1),d={class:"btn1"},m=(0,a.Uk)("RESETARE PAROLĂ");function p(e,t,s,p,h,w){const f=(0,a.up)("q-icon"),b=(0,a.up)("q-input"),g=(0,a.up)("q-btn"),P=(0,a.up)("q-card-section"),_=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(_,{class:"my-card center-card",style:{height:"100vh"}},{default:(0,a.w5)((()=>[(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[i,(0,a._)("div",o,[(0,a.Wm)(f,{name:"west",size:"xl",class:"linkcolor cursor-pointer",onClick:t[0]||(t[0]=t=>e.$router.go(-1))})]),(0,a._)("div",r,[(0,a._)("form",n,[l,(0,a._)("div",c,[u,(0,a.Wm)(b,{outlined:"",name:"pwd",type:h.isPwd?"password":"text",modelValue:h.newPass,"onUpdate:modelValue":t[2]||(t[2]=e=>h.newPass=e),placeholder:"Introduce o parolă nouă"},{append:(0,a.w5)((()=>[(0,a.Wm)(f,{name:h.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=e=>h.isPwd=!h.isPwd)},null,8,["name"])])),_:1},8,["type","modelValue"])]),(0,a._)("div",d,[(0,a.Wm)(g,{onClick:w.resetPassword,loading:h.isSubmitting,type:"button",rounded:""},{default:(0,a.w5)((()=>[m])),_:1},8,["onClick","loading"])])])])])),_:1})])),_:1})}const h={async mounted(){},data(){return{newPass:"",isSubmitting:!1,isPwd:!0}},methods:{async resetPassword(){if(this.isSubmitting)return;if(this.newPass.length<6)return void this.$q.notify({message:"Parola trebuie să aibă minim 6 caaractere.",color:"red"});this.isSubmitting=!0;let e=await this.$store.dispatch("finalizeReset",{pass:this.newPass,code:this.$route.query.oobCode});e.err?this.isSubmitting=!1:(this.$q.notify({message:"Parola a fost resetata, te rugăm să te autentifici.",color:"green",icon:"report_gmailerrorred"}),this.$router.push("/"))}}};var w=s(1639),f=s(4458),b=s(3190),g=s(2857),P=s(6611),_=s(4455),y=s(9984),k=s.n(y);const q=(0,w.Z)(h,[["render",p]]),v=q;k()(h,"components",{QCard:f.Z,QCardSection:b.Z,QIcon:g.Z,QInput:P.Z,QBtn:_.Z})}}]);