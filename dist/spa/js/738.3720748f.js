"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[738],{4738:(t,o,e)=>{e.r(o),e.d(o,{default:()=>w});var n=e(9835),a=e(6970);const r={key:0,class:"top-bar"},s={class:"heading",style:{}},u=(0,n.Uk)("Sign Out"),l=(0,n.Uk)(" Dashboard "),i=(0,n.Uk)(" Events "),c={key:1,class:"top-bar"},d=(0,n.Uk)(" Sign In "),p=(0,n.Uk)(" Sign Up ");function g(t,o,e,g,k,h){var v,b,y,m,w,$;const D=(0,n.up)("q-btn"),f=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[t.isAuthenticated?((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(D,{"no-caps":"",onClick:o[0]||(o[0]=o=>t.$router.go(-1)),round:"",style:{transform:"rotate(-90deg)"},icon:"navigation"}),(0,n._)("h3",s,(0,a.zw)(t.$route.name),1),(0,n._)("div",null,[(0,n.Wm)(D,{"no-caps":"",color:"grey","text-color":"black",to:"/",type:"button",onClick:t.logOut,class:"btn"},{default:(0,n.w5)((()=>[u])),_:1},8,["onClick"]),"/"==t.$route.path||0!=(null===(v=t.userData)||void 0===v?void 0:v.isUpdated)&&"admin"!=(null===(b=t.userData)||void 0===b?void 0:b.role)||1!=(null===(y=t.userData)||void 0===y?void 0:y.isAuthorized)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(D,{key:0,"no-caps":"",color:"grey","text-color":"black",type:"button",onClick:o[1]||(o[1]=o=>t.$router.push("/")),class:"btn"},{default:(0,n.w5)((()=>[l])),_:1})),"/event-list"!=t.$route.path&&null!==(m=t.userData)&&void 0!==m&&m.status&&"admin"!=(null===(w=t.userData)||void 0===w?void 0:w.role)&&1==(null===($=t.userData)||void 0===$?void 0:$.isAuthorized)?((0,n.wg)(),(0,n.j4)(D,{key:1,"no-caps":"",color:"grey","text-color":"black",type:"button",onClick:o[2]||(o[2]=o=>t.$router.push("/event-list")),class:"btn"},{default:(0,n.w5)((()=>[i])),_:1})):(0,n.kq)("",!0)])])):((0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(D,{"no-caps":"",onClick:o[3]||(o[3]=o=>t.$router.go(-1)),round:"",style:{transform:"rotate(-90deg)"},icon:"navigation"}),(0,n._)("h3",null,(0,a.zw)(t.$route.name),1),(0,n._)("div",null,["/sign-in"!=t.$route.path?((0,n.wg)(),(0,n.j4)(D,{key:0,"no-caps":"",color:"grey","text-color":"black",onClick:o[4]||(o[4]=o=>t.$router.push("/sign-in")),type:"button",class:"btn"},{default:(0,n.w5)((()=>[d])),_:1})):(0,n.kq)("",!0),"/sign-up"!=t.$route.path?((0,n.wg)(),(0,n.j4)(D,{key:1,"no-caps":"",color:"grey","text-color":"black",type:"button",onClick:o[5]||(o[5]=o=>t.$router.push("/sign-up")),class:"btn"},{default:(0,n.w5)((()=>[p])),_:1})):(0,n.kq)("",!0)])])),(0,n.Wm)(f)],64)}e(3926);const k=(0,n.aZ)({name:"MainLayout",components:{},data(){return{}},methods:{logOut(){this.$store.dispatch("signOutUser")}},computed:{userData(){return this.$store.getters.userData},isAuthenticated(){return this.$store.getters.isAuthenticated}}});var h=e(1639),v=e(4455),b=e(9984),y=e.n(b);const m=(0,h.Z)(k,[["render",g]]),w=m;y()(k,"components",{QBtn:v.Z})}}]);