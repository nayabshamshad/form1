"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[172],{9172:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ce});i(702);var l=i(9835),a=i(6970);const o={class:"container"},s={class:"form"},r={key:0,class:"flex justify-end"},n=(0,l.Uk)("Deconectare "),u=(0,l._)("h4",null,"Completați informațiile",-1),d={class:"profile-img-holder q-mt-lg"},m={key:0,align:"right",class:"flex no-wrap q-mb-none"},c=(0,l._)("p",null,"Adaugă o fotografie tip buletin cu tine",-1),p={key:1,class:"flex no-wrap q-mb-none"},h={class:"add-img q-mx-auto"},f=["src"],g=(0,l._)("p",null,"Adaugă o fotografie tip buletin cu tine",-1),I={class:"cate-list cate-margin gender"},b=(0,l._)("label",{for:"Gender"},"Gen:",-1),v={class:"flex no-wrap"},y={class:"cate-list q-pl-sm right margin"},U=(0,l._)("label",{for:"uname"},"Data nașterii:",-1),V={class:"row items-center justify-end"},w={class:"cate-list left"},_=(0,l._)("label",{for:"uname"},"Mărimea tricou",-1),k={class:"cate-list q-mb-none"},W=(0,l._)("label",{for:"uname",style:{display:"block",width:"20px","padding-left":"4px"}},"Categoria",-1),x={style:{"justify-content":"space-between",display:"flex"}},C={class:"cate-list left"},q=(0,l._)("label",{for:"uname"},"Clubul",-1),D={class:"cate-list right"},G=(0,l._)("label",{for:"uname"},"Zonă",-1),L={class:"cate-list"},O=(0,l._)("label",{for:"uname"},"Comunitate",-1),$={class:"cate-list"},S=(0,l._)("label",{for:"uname"},"Specializări pe care le poți preda",-1),z=(0,l._)("label",{for:"uname"},"Anii investiturii:",-1),M={class:"cate-list",style:{display:"flex","justify-content":"space-between","margin-top":"0px",gap:"2px"}},Z={class:"cate-list cate-margin"},B=(0,l._)("label",{for:"status"},"Status:",-1),Q={class:"flex",style:{gap:"2rem"}},N={key:1,class:"cate-list"},T={style:{"flex-wrap":"nowrap"},class:"flex justify-space-between"},j=(0,l._)("label",{for:"list"},"Lista copiilor:",-1),A={class:"submit"},F=(0,l.Uk)("Trimite"),P=(0,l._)("div",{class:"text-h6"},"Alertă",-1);function R(e,t,i,R,J,E){const X=(0,l.up)("q-icon"),H=(0,l.up)("q-btn"),K=(0,l.up)("q-radio"),Y=(0,l.up)("q-date"),ee=(0,l.up)("q-popup-proxy"),te=(0,l.up)("q-input"),ie=(0,l.up)("q-select"),le=(0,l.up)("q-card-section"),ae=(0,l.up)("q-card"),oe=(0,l.up)("q-card-actions"),se=(0,l.up)("q-dialog"),re=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(ae,{class:(0,a.C_)(["my-card sign-up category-list","/edit-profile"==e.$route.path?"info":""])},{default:(0,l.w5)((()=>[(0,l.Wm)(le,null,{default:(0,l.w5)((()=>{var i;return[(0,l._)("div",o,[(0,l._)("form",s,["/category-list"==this.$route.path?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(H,{"no-caps":"",color:"black",flat:"",type:"button",onClick:t[0]||(t[0]=t=>e.$store.dispatch("signOutUser")),class:"btn log-out",style:{"font-size":"12px","font-weight":"300",width:"auto","background-color":"transparent"}},{default:(0,l.w5)((()=>[n,(0,l.Wm)(X,{class:"",style:{"font-size":"30px",color:"rgba(150, 150, 150, 1)"},name:"exit_to_app"})])),_:1})])):(0,l.kq)("",!0),u,(0,l._)("input",{ref:"imgInput",accept:"image/*",onChange:t[1]||(t[1]=(...e)=>E.handleImageUpload&&E.handleImageUpload(...e)),type:"file",style:{display:"none"}},null,544),(0,l._)("div",d,[J.previewImage||J.userInfo.imgUrl&&""!=J.userInfo.imgUrl?J.previewImage||""!=(null===(i=J.userInfo)||void 0===i?void 0:i.imgUrl)?((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",h,[(0,l.Wm)(H,{onClick:t[3]||(t[3]=e=>{J.userInfo.imgUrl="",J.previewImage=""}),round:"",color:"green",size:"xs",icon:"remove"}),(0,l._)("img",{class:"add-event-img",onClick:t[4]||(t[4]=(...e)=>E.selectImage&&E.selectImage(...e)),src:J.previewImage?J.previewImage:J.userInfo.imgUrl,alt:""},null,8,f)]),g])):(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",{class:"add-img",onClick:t[2]||(t[2]=(...e)=>E.selectImage&&E.selectImage(...e))},[(0,l.Wm)(X,{class:"text-grey",name:"photo_camera"})]),c]))]),(0,l._)("div",I,[b,(0,l._)("div",v,[(0,l.Wm)(K,{modelValue:J.userInfo.gender,"onUpdate:modelValue":t[5]||(t[5]=e=>J.userInfo.gender=e),val:"Masculin",color:"black",label:"Masculin"},null,8,["modelValue"]),(0,l.Wm)(K,{modelValue:J.userInfo.gender,"onUpdate:modelValue":t[6]||(t[6]=e=>J.userInfo.gender=e),color:"black",val:"Feminin",label:"Feminin"},null,8,["modelValue"])])]),(0,l._)("div",y,[U,(0,l.Wm)(te,{modelValue:J.dateOfBirth,"onUpdate:modelValue":t[8]||(t[8]=e=>J.dateOfBirth=e),mask:"##/##/####",onFocus:E.openModal},{append:(0,l.w5)((()=>[(0,l.Wm)(X,{color:"black",onClick:E.openModal,ref:"dateIcon",name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(ee,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(Y,{modelValue:J.userInfo.dateOfBirth,"onUpdate:modelValue":[t[7]||(t[7]=e=>J.userInfo.dateOfBirth=e),E.handleDateChange]},{default:(0,l.w5)((()=>[(0,l._)("div",V,[(0,l.wy)((0,l.Wm)(H,{label:"Close",color:"primary",flat:""},null,512),[[re]])])])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["onClick"])])),_:1},8,["modelValue","onFocus"])]),(0,l._)("div",w,[_,(0,l.Wm)(ie,{outlined:"",modelValue:J.userInfo.size,"onUpdate:modelValue":t[9]||(t[9]=e=>J.userInfo.size=e),options:J.sizeOptions},null,8,["modelValue","options"])]),(0,l._)("div",k,[W,(0,l._)("div",x,[(0,l.Wm)(K,{modelValue:J.userInfo.category,"onUpdate:modelValue":t[10]||(t[10]=e=>J.userInfo.category=e),val:"Licurici",color:"black",label:"Licurici"},null,8,["modelValue"]),(0,l.Wm)(K,{modelValue:J.userInfo.category,"onUpdate:modelValue":t[11]||(t[11]=e=>J.userInfo.category=e),val:"Exploratori",color:"black",label:"Exploratori"},null,8,["modelValue"]),(0,l.Wm)(K,{modelValue:J.userInfo.category,"onUpdate:modelValue":t[12]||(t[12]=e=>J.userInfo.category=e),val:"Companioni",color:"black",label:"Companioni"},null,8,["modelValue"])])]),(0,l._)("div",C,[q,(0,l.Wm)(te,{outlined:"",type:"text",modelValue:J.userInfo.clubName,"onUpdate:modelValue":t[13]||(t[13]=e=>J.userInfo.clubName=e),placeholder:"Denumirea clubului"},null,8,["modelValue"])]),(0,l._)("div",D,[G,(0,l.Wm)(te,{outlined:"",type:"text",modelValue:J.userInfo.region,"onUpdate:modelValue":t[14]||(t[14]=e=>J.userInfo.region=e),placeholder:"Zona în care activezi"},null,8,["modelValue"])]),(0,l._)("div",L,[O,(0,l.Wm)(te,{outlined:"",type:"text",modelValue:J.userInfo.state,"onUpdate:modelValue":t[15]||(t[15]=e=>J.userInfo.state=e),placeholder:"Comunitatea în care activezi"},null,8,["modelValue"])]),(0,l._)("div",$,[S,(0,l.Wm)(te,{outlined:"",type:"text",modelValue:J.tagsInput,"onUpdate:modelValue":t[16]||(t[16]=e=>J.tagsInput=e),placeholder:"Separați cu virgula",name:"tags"},null,8,["modelValue"])]),z,(0,l._)("div",M,[(0,l.Wm)(te,{outlined:"",type:"text",modelValue:J.userInfo.Instructor,"onUpdate:modelValue":t[17]||(t[17]=e=>J.userInfo.Instructor=e),placeholder:"Instructor",name:"Instructor",mask:"####"},null,8,["modelValue"]),(0,l.Wm)(te,{outlined:"",type:"text",modelValue:J.userInfo.Ghid,"onUpdate:modelValue":t[18]||(t[18]=e=>J.userInfo.Ghid=e),placeholder:"Ghid",mask:"####"},null,8,["modelValue"]),(0,l.Wm)(te,{outlined:"",type:"text",modelValue:J.userInfo.masterGhid,"onUpdate:modelValue":t[19]||(t[19]=e=>J.userInfo.masterGhid=e),placeholder:"Master Ghid",mask:"####"},null,8,["modelValue"])]),(0,l._)("div",Z,[B,(0,l._)("div",Q,[(0,l.Wm)(K,{modelValue:J.userInfo.status,"onUpdate:modelValue":t[20]||(t[20]=e=>J.userInfo.status=e),val:!0,color:"black",label:"Activ"},null,8,["modelValue"]),(0,l.Wm)(K,{modelValue:J.userInfo.status,"onUpdate:modelValue":t[21]||(t[21]=e=>J.userInfo.status=e),val:!1,color:"black",label:"Inactiv"},null,8,["modelValue"])])]),J.userInfo.status?((0,l.wg)(),(0,l.iD)("div",N,[(0,l._)("div",T,[j,(0,l.Wm)(H,{icon:"add",onClick:E.addMember,class:"team-member-btn",type:"button",round:"",color:"green"},null,8,["onClick"])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(J.userInfo.teamList,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"member-list",key:t,style:{display:"flex","align-items":"center","justify-content":"space-between"}},[(0,l.Wm)(te,{outlined:"",type:"text",modelValue:e.name,"onUpdate:modelValue":t=>e.name=t,placeholder:"Nume copil"},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Wm)(H,{onClick:e=>E.removeMember(t),type:"button",round:"",color:"red",style:{width:"35px",height:"35px"},icon:"remove",class:"remove-button"},null,8,["onClick"])])))),128))])):(0,l.kq)("",!0),(0,l._)("div",A,[(0,l.Wm)(H,{type:"button",loading:J.isSubmitting,onClick:E.submit,class:"signupbtn"},{default:(0,l.w5)((()=>[F])),_:1},8,["loading","onClick"])])])])]})),_:1})])),_:1},8,["class"]),(0,l.Wm)(se,{modelValue:J.errorDialog,"onUpdate:modelValue":t[22]||(t[22]=e=>J.errorDialog=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(ae,null,{default:(0,l.w5)((()=>[(0,l.Wm)(le,null,{default:(0,l.w5)((()=>[P])),_:1}),(0,l.Wm)(le,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(J.error),1)])),_:1}),(0,l.Wm)(oe,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(H,{flat:"",label:"OK",color:"primary"},null,512),[[re]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}i(4641),i(3269),i(8964),i(2809);var J=i(3926);const E={name:"CategoryListView",components:{},data(){return{userInfo:{teamList:[{name:""}],dateOfBirth:"2022/03/21",Instructor:"",Ghid:"",masterGhid:"",region:"",state:"",gender:"Masculin",etnic:"",tagList:[],clubName:"",status:!1,category:"",size:"",isUpdated:!1,imgUrl:""},imgUrl:"",previewImage:"",file:null,dateOfBirth:"21/03/2022",tagsInput:"",isSubmitting:!1,sizeOptions:["S","M","L","XL","XXL"],error:"Te rugăm să reverifici datele introduse.",errorDialog:!1}},methods:{handleImageUpload(e){const t=e.target.files[0];this.previewImage=URL.createObjectURL(t),this.file=t},selectImage(){this.$refs.imgInput.click()},removeImg(){this.imgUrl="",this.previewImage="",this.file=null},openModal(){this.$refs.dateIcon.$el.click(),this.$refs.dateIcon.$el.focus()},handleDateChange(e,t,i){let l=1==`${i.day}`.length?"0"+i.day:i.day,a=1==`${i.month}`.length?"0"+i.month:i.month;this.dateOfBirth=l+"/"+a+"/"+i.year},async submit(){if(this.isSubmitting)return;let e;if(this.isSubmitting=!0,""==this.previewImage&&(!this.userInfo.imgUrl||""==this.userInfo.imgUrl))return this.$q.notify({color:"red",message:"Te rog selectează o imagine potrivită"}),void(this.isSubmitting=!1);if(""!=this.previewImage){this.userInfo.imgUrl&&""!=this.userInfo.imgUrl&&await J.hs.refFromURL(this.userInfo.imgUrl).delete().then().catch((e=>{console.log(e)}));const e=new Date+"-"+this.file.name;await J.tO.child(e).put(this.file,{contentType:this.file.type}).then((e=>e.ref.getDownloadURL())).then((e=>{this.userInfo.imgUrl=e}))}if(e={...this.userInfo},""!=this.tagsInput){if(this.tagsInput.split(",").length>5)return this.error="Nu poți să introduci mai mult de 5 specializări.",this.errorDialog=!0,void(this.isSubmitting=!1);e.tagList=this.tagsInput.split(",")}e.isUpdated=!0,e.status||(e.teamList=[]);var t=!1;if(e.status&&e.teamList.forEach((e=>{""==e.name&&(t=!0)})),t)return this.isSubmitting=!1,this.errorDialog=!0,void(this.error="Verificați lista cu copii");if(e.tagList.length<1)return this.errorDialog=!0,this.error="Te rugăm să introduci minim o specializare",void(this.isSubmitting=!1);if(""==e.dateOfBirth||""==e.region||""==e.state||""==e.gender||""==e.clubName||""==e.category||""==e.size)return this.errorDialog=!0,this.error="Te rugăm să reverifici datele introduse.",void(this.isSubmitting=!1);if(4!==e.Instructor.length&&""!=e.Instructor||4!==e.Ghid.length&&""!=e.Ghid||4!==e.masterGhid.length&&""!=e.masterGhid)return this.$q.notify({color:"red",message:"Formatul anului introdus este incorect"}),void(this.isSubmitting=!1);if(e.Instructor>e.Ghid&&""!=e.Instructor&&""!=e.Ghid||e.Ghid>e.masterGhid&&""!=e.Ghid&&""!=e.masterGhid||e.Instructor>e.masterGhid&&""!=e.instructor&&""!=e.masterGhid)return this.$q.notify({color:"red",message:"Te rugăm să verifici ordinea investiturii ca Instructor, Ghid, Master Ghid."}),void(this.isSubmitting=!1);if("department"!=this.storeUserInfo.role&&"admin"!=this.storeUserInfo.role)for(const i in this.storeUserInfo)void 0!=e[i]&&null!=e[i]||(e[i]=this.storeUserInfo[i]);"department"!=this.storeUserInfo.role&&"admin"!=this.storeUserInfo.role?(await this.$store.dispatch("updateUserProfile",e),this.$router.push("/")):(await this.$store.dispatch("updateUserProfileAdmin",e),this.$router.push("/user-details")),this.isSubmitting=!1},addMember(){this.userInfo.teamList.push({name:""})},removeMember(e){this.userInfo.teamList.length>1?this.userInfo.teamList.splice(e,1):(this.errorDialog=!0,this.error="Te rugăm să completezi lista cu copii.")}},mounted(){var e,t;if("/category-list"==this.$route.path&&null!==(e=this.storeUserInfo)&&void 0!==e&&e.isUpdated?this.$router.push("/"):"/edit-profile"==this.$route.path&&("department"!=this.storeUserInfo.role&&"admin"!=this.storeUserInfo.role?(this.userInfo=JSON.parse(JSON.stringify(this.$store.getters.userData)),this.tagsInput=this.userInfo.tagList.join(", ")):(this.userInfo=JSON.parse(JSON.stringify(this.$store.getters.selectedUser)),this.tagsInput=this.userInfo.tagList.join(", "))),null!==(t=this.userInfo)&&void 0!==t&&t.dateOfBirth){this.userInfo.dateOfBirth=this.userInfo.dateOfBirth.replaceAll("-","/");let e=this.userInfo.dateOfBirth.split("/");this.dateOfBirth=e[2]+"/"+e[1]+"/"+e[0]}},computed:{storeUserInfo(){return this.$store.getters.userData}},watch:{"userInfo.status":{handler:function(){1==this.userInfo.status&&0==this.userInfo.teamList.length&&this.addMember()}}}};var X=i(1639),H=i(4458),K=i(3190),Y=i(4455),ee=i(2857),te=i(9812),ie=i(1480),le=i(6611),ae=i(2765),oe=i(7088),se=i(7743),re=i(1821),ne=i(2146),ue=i(9984),de=i.n(ue);const me=(0,X.Z)(E,[["render",R]]),ce=me;de()(E,"components",{QCard:H.Z,QCardSection:K.Z,QBtn:Y.Z,QIcon:ee.Z,QSelect:te.Z,QRadio:ie.Z,QInput:le.Z,QPopupProxy:ae.Z,QDate:oe.Z,QDialog:se.Z,QCardActions:re.Z}),de()(E,"directives",{ClosePopup:ne.Z})}}]);