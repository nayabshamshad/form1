"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[697],{697:(e,l,t)=>{t.r(l),t.d(l,{default:()=>H});var a=t(9835),i=t(6970);const o={class:"container"},s={class:"form"},r=(0,a._)("h2",null,"Completați informațiile",-1),n={class:"cate-list"},u=(0,a._)("label",{for:"Gender"},[(0,a._)("b",null,"Sex:")],-1),d={class:"cate-list"},c={class:"cate-list"},m=(0,a._)("label",{style:{"margin-bottom":"0","margin-top":"1rem",display:"block","font-size":"16px","font-weight":"500"}},"Data nașterii:",-1),p={class:"row items-center justify-end"},h={class:"cate-list"},f={class:"cate-list"},g={class:"cate-list"},b={class:"cate-list"},I={class:"cate-list"},V={class:"cate-list"},_={class:"cate-list"},v={class:"cate-list"},y={style:{display:"flex","justify-content":"space-between","padding-right":"2rem",margin:"1rem 0"}},k=(0,a._)("label",{for:"status"},[(0,a._)("b",null,"Status:")],-1),w={key:0,class:"cate-list"},U={style:{"flex-wrap":"nowrap"},class:"flex justify-space-between"},W=(0,a._)("label",{for:"list"},[(0,a._)("b",null,"Lista copiilor:")],-1),C=(0,a.Uk)("+"),x=(0,a.Uk)("-"),G={class:"submit"},S=(0,a.Uk)("Trimite"),D=(0,a._)("div",{class:"text-h6"},"Alert",-1);function q(e,l,t,q,L,M){const Y=(0,a.up)("q-select"),Z=(0,a.up)("q-radio"),z=(0,a.up)("q-btn"),Q=(0,a.up)("q-date"),$=(0,a.up)("q-popup-proxy"),O=(0,a.up)("q-icon"),B=(0,a.up)("q-input"),T=(0,a.up)("q-card-section"),A=(0,a.up)("q-card-actions"),N=(0,a.up)("q-card"),X=(0,a.up)("q-dialog"),F=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",o,[(0,a._)("form",s,[r,(0,a._)("div",n,[(0,a.Wm)(Y,{options:["Română","Maghiară"],label:"Etnie","label-color":"black",modelValue:L.userInfo.etnic,"onUpdate:modelValue":l[0]||(l[0]=e=>L.userInfo.etnic=e)},null,8,["modelValue"])]),(0,a._)("div",null,[u,(0,a._)("div",null,[(0,a.Wm)(Z,{modelValue:L.userInfo.gender,"onUpdate:modelValue":l[1]||(l[1]=e=>L.userInfo.gender=e),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"Male",label:"Masculin"},null,8,["modelValue"]),(0,a.Wm)(Z,{modelValue:L.userInfo.gender,"onUpdate:modelValue":l[2]||(l[2]=e=>L.userInfo.gender=e),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:"Female",label:"Femenin"},null,8,["modelValue"])])]),(0,a._)("div",d,[(0,a.Wm)(Y,{modelValue:L.userInfo.size,"onUpdate:modelValue":l[3]||(l[3]=e=>L.userInfo.size=e),options:L.sizeOptions,"label-color":"black",label:"Mărime tricou:"},null,8,["modelValue","options"])]),(0,a._)("div",c,[m,(0,a.Wm)(B,{filled:"",modelValue:L.dateOfBirth,"onUpdate:modelValue":l[5]||(l[5]=e=>L.dateOfBirth=e),mask:"##/##/####",onFocus:M.openModal},{append:(0,a.w5)((()=>[(0,a.Wm)(O,{onClick:M.openModal,ref:"dateIcon",name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)($,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{modelValue:L.userInfo.dateOfBirth,"onUpdate:modelValue":[l[4]||(l[4]=e=>L.userInfo.dateOfBirth=e),M.handleDateChange]},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.wy)((0,a.Wm)(z,{label:"Close",color:"primary",flat:""},null,512),[[F]])])])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["onClick"])])),_:1},8,["modelValue","onFocus"])]),(0,a._)("div",h,[(0,a.Wm)(Y,{modelValue:L.userInfo.category,"onUpdate:modelValue":l[6]||(l[6]=e=>L.userInfo.category=e),label:"Categoria:","label-color":"black",options:["Licurici","Companioni","Exploratori"]},null,8,["modelValue"])]),(0,a._)("div",f,[(0,a.Wm)(B,{type:"text",modelValue:L.userInfo.clubName,"onUpdate:modelValue":l[7]||(l[7]=e=>L.userInfo.clubName=e),placeholder:"Clubul",name:"Club",label:"Clubul:","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",g,[(0,a.Wm)(B,{type:"text",modelValue:L.tagsInput,"onUpdate:modelValue":l[8]||(l[8]=e=>L.tagsInput=e),placeholder:"Separate de virgulă",name:"tags",label:"Specializări pe care le poți preda (max 5):","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",b,[(0,a.Wm)(B,{type:"text",modelValue:L.userInfo.region,"onUpdate:modelValue":l[9]||(l[9]=e=>L.userInfo.region=e),placeholder:"ex. Târgu Mureș",label:"Zona:","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",I,[(0,a.Wm)(B,{type:"text",modelValue:L.userInfo.state,"onUpdate:modelValue":l[10]||(l[10]=e=>L.userInfo.state=e),placeholder:"Comunitate",label:"Comunitatea în care activezi: ","label-color":"black"},null,8,["modelValue"])]),(0,a._)("div",V,[(0,a.Wm)(B,{type:"text",modelValue:L.userInfo.Instructor,"onUpdate:modelValue":l[11]||(l[11]=e=>L.userInfo.Instructor=e),"label-color":"black",label:"Anul investiturii ca Instructor:",placeholder:"YYYY",name:"Instructor",mask:"####"},null,8,["modelValue"])]),(0,a._)("div",_,[(0,a.Wm)(B,{type:"text",modelValue:L.userInfo.Ghid,"onUpdate:modelValue":l[12]||(l[12]=e=>L.userInfo.Ghid=e),placeholder:"YYYY",label:"Anul investiturii ca Ghid:","label-color":"black",mask:"####"},null,8,["modelValue"])]),(0,a._)("div",v,[(0,a.Wm)(B,{type:"text",modelValue:L.userInfo.masterGhid,"onUpdate:modelValue":l[13]||(l[13]=e=>L.userInfo.masterGhid=e),placeholder:"YYYY",mask:"####","label-color":"black",label:"Anul investiturii ca Master Ghid:"},null,8,["modelValue"])]),(0,a._)("div",y,[(0,a._)("div",null,[k,(0,a._)("div",null,[(0,a.Wm)(Z,{modelValue:L.userInfo.status,"onUpdate:modelValue":l[14]||(l[14]=e=>L.userInfo.status=e),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:!0,label:"Activ"},null,8,["modelValue"]),(0,a.Wm)(Z,{modelValue:L.userInfo.status,"onUpdate:modelValue":l[15]||(l[15]=e=>L.userInfo.status=e),"checked-icon":"task_alt","unchecked-icon":"panorama_fish_eye",val:!1,label:"InActiv"},null,8,["modelValue"])])])]),L.userInfo.status?((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",U,[W,(0,a.Wm)(z,{onClick:M.addMember,type:"button",round:"",color:"purple"},{default:(0,a.w5)((()=>[C])),_:1},8,["onClick"])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(L.userInfo.teamList,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l,style:{display:"flex","align-items":"center","justify-content":"space-between"}},[(0,a.Wm)(B,{type:"text",modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,placeholder:"Nume copil",style:{width:"70%"}},null,8,["modelValue","onUpdate:modelValue"]),(0,a.Wm)(z,{onClick:e=>M.removeMember(l),type:"button",round:"",color:"red",style:{width:"35px",height:"35px"}},{default:(0,a.w5)((()=>[x])),_:2},1032,["onClick"])])))),128))])):(0,a.kq)("",!0),(0,a._)("div",G,[(0,a.Wm)(z,{type:"button",loading:L.isSubmitting,onClick:M.submit,color:"purple",class:"signupbtn"},{default:(0,a.w5)((()=>[S])),_:1},8,["loading","onClick"])])])]),(0,a.Wm)(X,{modelValue:L.errorDialog,"onUpdate:modelValue":l[16]||(l[16]=e=>L.errorDialog=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[D])),_:1}),(0,a.Wm)(T,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(L.error),1)])),_:1}),(0,a.Wm)(A,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(z,{flat:"",label:"OK",color:"primary"},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}const L={name:"CategoryListView",components:{},data(){return{userInfo:{teamList:[{name:""}],dateOfBirth:"2022/03/21",Instructor:"",Ghid:"",masterGhid:"",region:"",state:"",gender:"Male",etnic:"",tagList:[],clubName:"",status:!1,category:"",size:"",isUpdated:!1},dateOfBirth:"21/03/2022",tagsInput:"",isSubmitting:!1,sizeOptions:["x-Small","Small","Medium","Large","X-Large","XX-Large","XXX-Large"],error:"Te rugăm să reverifici datele introduse.",errorDialog:!1}},methods:{openModal(){this.$refs.dateIcon.$el.click(),this.$refs.dateIcon.$el.focus()},handleDateChange(e,l,t){let a=1==`${t.day}`.length?"0"+t.day:t.day,i=1==`${t.month}`.length?"0"+t.month:t.month;this.dateOfBirth=a+"/"+i+"/"+t.year},async submit(){if(this.isSubmitting)return;let e;if(this.isSubmitting=!0,e={...this.userInfo},""!=this.tagsInput){if(this.tagsInput.split(",").length>5)return this.error="Nu poți să introduci mai mult de 5 specializări.",this.errorDialog=!0,void(this.isSubmitting=!1);e.tagList=this.tagsInput.split(",")}e.isUpdated=!0,e.status||(e.teamList=[]);var l=!1;return e.status&&e.teamList.forEach((e=>{""==e.name&&(l=!0)})),l?(this.isSubmitting=!1,this.errorDialog=!0,void(this.error="Verificați lista cu copii")):e.tagList.length<1?(this.errorDialog=!0,this.error="Te rugăm să introduci minim o specializare",void(this.isSubmitting=!1)):""==e.dateOfBirth||""==e.region||""==e.state||""==e.gender||""==e.etnic||""==e.clubName||""==e.category||""==e.size?(this.errorDialog=!0,this.error="Te rugăm să reverifici datele introduse.",void(this.isSubmitting=!1)):4!==e.Instructor.length&&""!=e.Instructor||4!==e.Ghid.length&&""!=e.Ghid||4!==e.masterGhid.length&&""!=e.masterGhid?(this.$q.notify({color:"red",message:"Formatul anului introdus este incorect"}),void(this.isSubmitting=!1)):e.Instructor>e.Ghid&&""!=e.Instructor&&""!=e.Ghid||e.Ghid>e.masterGhid&&""!=e.Ghid&&""!=e.masterGhid||e.Instructor>e.masterGhid&&""!=e.instructor&&""!=e.masterGhid?(this.$q.notify({color:"red",message:"Te rugăm să verifici ordinea investiturii ca Instructor, Ghid, Master Ghid."}),void(this.isSubmitting=!1)):(await this.$store.dispatch("updateUserProfile",e),this.isSubmitting=!1,void this.$router.push("/"))},addMember(){this.userInfo.teamList.push({name:""})},removeMember(e){this.userInfo.teamList.length>1?this.userInfo.teamList.splice(e,1):(this.errorDialog=!0,this.error="Te rugăm să completezi lista cu copii.")}},mounted(){var e;null!==(e=this.storeUserInfo)&&void 0!==e&&e.isUpdated&&this.$router.push("/")},computed:{storeUserInfo(){return this.$store.getters.userData}}};var M=t(1639),Y=t(9812),Z=t(1480),z=t(6611),Q=t(2857),$=t(2765),O=t(7088),B=t(4455),T=t(7743),A=t(4458),N=t(3190),X=t(1821),F=t(2146),j=t(9984),P=t.n(j);const E=(0,M.Z)(L,[["render",q]]),H=E;P()(L,"components",{QSelect:Y.Z,QRadio:Z.Z,QInput:z.Z,QIcon:Q.Z,QPopupProxy:$.Z,QDate:O.Z,QBtn:B.Z,QDialog:T.Z,QCard:A.Z,QCardSection:N.Z,QCardActions:X.Z}),P()(L,"directives",{ClosePopup:F.Z})}}]);