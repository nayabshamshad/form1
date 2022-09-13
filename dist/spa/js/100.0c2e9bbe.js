"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[100],{5100:(e,l,t)=>{t.r(l),t.d(l,{default:()=>w});t(702);var a=t(9835),s=t(1957);const i={class:"container"},n=(0,a._)("h2",null,"Sign Up",-1),m=(0,a._)("p",null,"Please fill in this form to create an account.",-1),o={class:"cate-list"},u={class:"cate-list"},r={class:"cate-list"},d={class:"cate-list"},p={class:"cate-list"},c={class:"btn1"},b=(0,a.Uk)("Submit");function h(e,l,t,h,N,f){const g=(0,a.up)("q-input"),V=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",i,[n,(0,a._)("form",{class:"form",onSubmit:l[5]||(l[5]=(0,s.iM)(((...e)=>f.submit&&f.submit(...e)),["prevent"]))},[m,(0,a._)("div",o,[(0,a.Wm)(g,{type:"text",modelValue:N.emailInput,"onUpdate:modelValue":l[0]||(l[0]=e=>N.emailInput=e),placeholder:"Enter Email",name:"email",label:"Email Address","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",u,[(0,a.Wm)(g,{modelValue:N.firstName,"onUpdate:modelValue":l[1]||(l[1]=e=>N.firstName=e),type:"text",placeholder:"Enter First Name",name:"F-name",label:"First Name","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",r,[(0,a.Wm)(g,{type:"text",label:"Last Name","label-color":"black",modelValue:N.lastName,"onUpdate:modelValue":l[2]||(l[2]=e=>N.lastName=e),placeholder:"Enter Last Name",name:"L-name"},null,8,["modelValue"])]),(0,a._)("div",d,[(0,a.Wm)(g,{type:"tel",modelValue:N.phoneNumber,"onUpdate:modelValue":l[3]||(l[3]=e=>N.phoneNumber=e),placeholder:"+40",name:"phone number",mask:"+40 #### #####",label:"Phone Number","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",p,[(0,a.Wm)(g,{type:"password",placeholder:"Enter Password",label:"Password","label-color":"black",modelValue:N.passInput,"onUpdate:modelValue":l[4]||(l[4]=e=>N.passInput=e),name:"pwd"},null,8,["modelValue"])]),(0,a._)("div",c,[(0,a.Wm)(V,{loading:N.isSubmitting,rounded:"",color:"purple",onClick:f.submit,type:"button"},{default:(0,a.w5)((()=>[b])),_:1},8,["loading","onClick"])])],32)])}const N={data(){return{firstName:"",lastName:"",emailInput:"",passInput:"",isSubmitting:!1,phoneNumber:"+40"}},mounted(){},methods:{async submit(){if(this.isSubmitting)return;if(this.isSubmitting=!0,""==this.firstName||""==this.lastName)return this.$q.notify({color:"red",message:"Please enter a valid name"}),void(this.isSubmitting=!1);if(14!==this.phoneNumber.length)return this.$q.notify({message:"Phone Number must be formatted correctly",color:"red"}),void(this.isSubmitting=!1);let e={name:this.firstName+" "+this.lastName,email:this.emailInput,password:this.passInput,phoneNumber:this.phoneNumber};await this.$store.dispatch("signUp",e),this.isSubmitting=!1}}};var f=t(1639),g=t(6611),V=t(4455),k=t(9984),v=t.n(k);const _=(0,f.Z)(N,[["render",h]]),w=_;v()(N,"components",{QInput:g.Z,QBtn:V.Z})}}]);