"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[827],{6827:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var i=n(9835);const s={class:"flex justify-center waiting-container"},r=(0,i._)("h2",null,"Request Denied",-1),a=(0,i._)("p",null," Your request has been declined, however you can ask the admins to reconsider your request. ",-1),o=(0,i.Uk)(" Request ");function u(e,t,n,u,c,d){const h=(0,i.up)("q-btn"),l=(0,i.up)("q-card-section"),g=(0,i.up)("q-card");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(g,{style:{width:"100%",height:"100%"},class:"flex justify-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[r,a,(0,i.Wm)(h,{rounded:"",color:"green",loading:c.isFetching,onClick:d.requestReconsideration},{default:(0,i.w5)((()=>[o])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])}const c={data(){return{isFetching:!1}},methods:{async requestReconsideration(){this.isFetching||(this.isFetching=!0,await this.$store.dispatch("updateUserProfile",{isAuthorized:"pending"}),this.isFetching=!1,this.$router.push("/pending"))}}};var d=n(1639),h=n(4458),l=n(3190),g=n(4455),p=n(9984),f=n.n(p);const q=(0,d.Z)(c,[["render",u]]),w=q;f()(c,"components",{QCard:h.Z,QCardSection:l.Z,QBtn:g.Z})}}]);