"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[383],{2383:(e,t,l)=>{l.r(t),l.d(t,{default:()=>_});l(702);var a=l(9835),s=l(1957);const i={class:"container"},n=(0,a._)("h2",null,"Înregistrare",-1),m={class:"cate-list"},o={class:"cate-list"},u={class:"cate-list"},r={class:"cate-list"},d={class:"cate-list"},p={class:"btn1"},b=(0,a.Uk)("Trimite");function c(e,t,l,c,h,f){const N=(0,a.up)("q-input"),g=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",i,[n,(0,a._)("form",{class:"form",onSubmit:t[5]||(t[5]=(0,s.iM)(((...e)=>f.submit&&f.submit(...e)),["prevent"]))},[(0,a._)("div",m,[(0,a.Wm)(N,{modelValue:h.firstName,"onUpdate:modelValue":t[0]||(t[0]=e=>h.firstName=e),type:"text",name:"F-name",label:"Nume","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",o,[(0,a.Wm)(N,{type:"text",label:"Prenume","label-color":"black",modelValue:h.lastName,"onUpdate:modelValue":t[1]||(t[1]=e=>h.lastName=e),name:"L-name"},null,8,["modelValue"])]),(0,a._)("div",u,[(0,a.Wm)(N,{type:"tel",modelValue:h.phoneNumber,"onUpdate:modelValue":t[2]||(t[2]=e=>h.phoneNumber=e),placeholder:"+40",name:"phone number",mask:"+40 #### #####",label:"Număr de telefon","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",r,[(0,a.Wm)(N,{type:"text",modelValue:h.emailInput,"onUpdate:modelValue":t[3]||(t[3]=e=>h.emailInput=e),name:"email",label:"Adresă de E-mail","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",d,[(0,a.Wm)(N,{type:"password",label:"Parolă","label-color":"black",modelValue:h.passInput,"onUpdate:modelValue":t[4]||(t[4]=e=>h.passInput=e),name:"pwd"},null,8,["modelValue"])]),(0,a._)("div",p,[(0,a.Wm)(g,{loading:h.isSubmitting,rounded:"",color:"purple",onClick:f.submit,type:"button"},{default:(0,a.w5)((()=>[b])),_:1},8,["loading","onClick"])])],32)])}const h={data(){return{firstName:"",lastName:"",emailInput:"",passInput:"",isSubmitting:!1,phoneNumber:"+40"}},mounted(){},methods:{async submit(){if(this.isSubmitting)return;if(this.isSubmitting=!0,""==this.firstName||""==this.lastName)return this.$q.notify({color:"red",message:"Please enter a valid name"}),void(this.isSubmitting=!1);if(14!==this.phoneNumber.length)return this.$q.notify({message:"Phone Number must be formatted correctly",color:"red"}),void(this.isSubmitting=!1);let e={name:this.firstName+" "+this.lastName,email:this.emailInput,password:this.passInput,phoneNumber:this.phoneNumber};await this.$store.dispatch("signUp",e),this.isSubmitting=!1}}};var f=l(1639),N=l(6611),g=l(4455),V=l(9984),k=l.n(V);const v=(0,f.Z)(h,[["render",c]]),_=v;k()(h,"components",{QInput:N.Z,QBtn:g.Z})}}]);