"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[69],{2069:(e,t,s)=>{s.r(t),s.d(t,{default:()=>S});s(6727);var a=s(9835),n=s(6970);const l={class:"container"},i={class:"form category-form event-form"},r={class:"cate-list-home"},o=(0,a._)("label",{for:"name"},[(0,a._)("b",null,"Name:")],-1),c={class:"cate-list-home"},d=(0,a._)("label",{for:"date"},[(0,a._)("b",null,"Date:")],-1),m={class:"cate-list-home"},u=(0,a._)("label",{for:"Description"},[(0,a._)("b",null,"Description:")],-1),g={class:"cate-list-home"},h=(0,a._)("label",null,[(0,a._)("b",null,"List of Students:")],-1),v={style:{"text-transform":"capitalize","font-style":"italic",margin:"5px 0",width:"30%","border-bottom":"1px solid #555"}},p={key:0,style:{"font-size":"20px",color:"rgb(21, 76, 143)"}},_={key:1,style:{"font-size":"20px",color:"rgb(153, 29, 44)"}},w={class:"cate-list-home img-holder",style:{"min-height":"120px","max-height":"200px"}},b=["src","onClick"];function f(e,t,s,f,E,D){const L=(0,a.up)("q-img"),x=(0,a.up)("q-card-section"),y=(0,a.up)("q-card"),k=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",l,[(0,a._)("form",i,[(0,a._)("div",r,[o,(0,a._)("span",null,(0,n.zw)(E.currentEvent.name),1)]),(0,a._)("div",c,[d,(0,a._)("span",null,(0,n.zw)(E.currentEvent.date),1)]),(0,a._)("div",m,[u,(0,a._)("span",null,(0,n.zw)(E.currentEvent.desc),1)]),(0,a._)("div",g,[h,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(D.memberList,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"teamMember",key:t},[(0,a._)("span",v,(0,n.zw)(e),1),E.currentEvent.attendanceList.includes(e)?((0,a.wg)(),(0,a.iD)("span",p," ✓ ")):((0,a.wg)(),(0,a.iD)("span",_,"×"))])))),128))]),(0,a._)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(E.currentEvent.imageList,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"img-container"},[(0,a._)("img",{src:e,alt:"",onClick:t=>D.showImg(e)},null,8,b)])))),128))])])]),(0,a.Wm)(k,{modelValue:E.dialogBox,"onUpdate:modelValue":t[0]||(t[0]=e=>E.dialogBox=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{style:{width:"100%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{style:{background:"#ccc"},class:"q-pt-none q-pb-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{src:e.imgSrc},null,8,["src"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}s(702);const E={name:"vieweventView",components:{},data(){return{currentEvent:{name:"",desc:"",date:"",attendanceList:[],imageList:[],imgSrc:""},dialogBox:!1}},methods:{showImg(e){this.dialogBox=!0,this.imgSrc=e}},mounted(){var e;this.currentEvent={name:this.selectedEvent.name,date:this.selectedEvent.date,attendanceList:[...this.selectedEvent.attendanceList],desc:this.selectedEvent.desc,imageList:null===(e=this.selectedEvent)||void 0===e?void 0:e.imageList}},computed:{selectedEvent(){return this.$store.getters.selectedEvent},memberList(){var e;let t=[];var s,a;"admin"!=(null===(e=this.$store.getters.userData)||void 0===e?void 0:e.role)?null===(s=this.$store.getters.userData)||void 0===s||s.teamList.forEach((e=>{t.push(e.name)})):null===(a=this.$store.getters.selectedUser)||void 0===a||a.teamList.forEach((e=>{t.push(e.name)}));return t}}};var D=s(1639),L=s(7743),x=s(4458),y=s(3190),k=s(335),q=s(9984),z=s.n(q);const C=(0,D.Z)(E,[["render",f]]),S=C;z()(E,"components",{QDialog:L.Z,QCard:x.Z,QCardSection:y.Z,QImg:k.Z})}}]);