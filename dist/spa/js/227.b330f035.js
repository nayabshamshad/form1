"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[227],{4227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});a(702);var i=a(9835),l=a(6970);const n={class:"container"},s={class:"form"},o=(0,i._)("h2",null,"Adaugare întâlnire",-1),r={class:"cate-list"},c={class:"cate-list"},d=(0,i._)("label",{style:{"font-size":"16px"}},"Data întâlnirii:",-1),u={class:"row items-center justify-end"},m={class:"cate-list"},h={class:"cate-list"},p=(0,i._)("label",{style:{"font-size":"16px",display:"block"}}," Prezența: ",-1),g={style:{width:"30%","font-style":"italic","text-transform":"capitalize",display:"block","border-bottom":"1px solid","text-align":"center"}},v=["value"],f={class:"cate-list"},w=(0,i._)("label",{style:{display:"block","font-size":"16px","margin-bottom":"1rem"}},"Încarcă imaginile (max. 3)",-1),y=(0,i.Uk)("+"),D={key:0,class:"img_holder"},_=(0,i.Uk)("-"),k=["src"],I=(0,i._)("div",null,null,-1),b={key:1,style:{height:"175px"},class:"flex justify-center"},L={class:"flex justify-center"},U=(0,i.Uk)("Trimite"),V=(0,i._)("div",{class:"text-h6"},"Alertă",-1);function x(e,t,a,x,C,W){const q=(0,i.up)("q-input"),T=(0,i.up)("q-btn"),Z=(0,i.up)("q-date"),$=(0,i.up)("q-popup-proxy"),F=(0,i.up)("q-icon"),Q=(0,i.up)("q-card-section"),z=(0,i.up)("q-card-actions"),N=(0,i.up)("q-card"),j=(0,i.up)("q-dialog"),O=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",n,[(0,i._)("form",s,[o,(0,i._)("div",r,[(0,i.Wm)(q,{modelValue:C.eventName,"onUpdate:modelValue":t[0]||(t[0]=e=>C.eventName=e),type:"text",label:"Tema întâlnirii:","label-color":"black"},null,8,["modelValue"])]),(0,i._)("div",c,[d,(0,i.Wm)(q,{filled:"",modelValue:C.eventDateView,"onUpdate:modelValue":t[2]||(t[2]=e=>C.eventDateView=e),mask:"##/##/####",onFocus:W.openModal},{append:(0,i.w5)((()=>[(0,i.Wm)(F,{onClick:W.openModal,ref:"dateIcon",name:"event",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)($,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{modelValue:C.eventDate,"onUpdate:modelValue":[t[1]||(t[1]=e=>C.eventDate=e),W.handleDateChange]},{default:(0,i.w5)((()=>[(0,i._)("div",u,[(0,i.wy)((0,i.Wm)(T,{label:"Close",color:"primary",flat:""},null,512),[[O]])])])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["onClick"])])),_:1},8,["modelValue","onFocus"])]),(0,i._)("div",m,[(0,i.Wm)(q,{label:"Descriere (max. 50 de caractere)",modelValue:C.eventDesc,"onUpdate:modelValue":t[3]||(t[3]=e=>C.eventDesc=e),type:"text","label-color":"black",rules:[e=>e.length<=50||"Descrierea nu poate fi mai lungă de 50 de caractere."]},null,8,["modelValue","rules"])]),(0,i._)("div",h,[p,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(W.userData.teamList,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{key:a,style:{display:"flex","justify-content":"space-around"}},[(0,i._)("span",g,(0,l.zw)(e.name),1),(0,i._)("input",{type:"checkbox",value:e.name,onChange:t[4]||(t[4]=(...e)=>W.addUser&&W.addUser(...e))},null,40,v)])))),128))]),(0,i._)("div",f,[(0,i._)("div",null,[(0,i._)("div",null,[w,(0,i.Wm)(T,{color:"purple",onClick:W.openInput,round:""},{default:(0,i.w5)((()=>[y])),_:1},8,["onClick"])]),(0,i._)("input",{onChange:t[5]||(t[5]=(...e)=>W.handleImageUpload&&W.handleImageUpload(...e)),type:"file",ref:"imgInput",style:{display:"none"},name:"img",accept:"image/*"},null,544)]),C.previewImages.length>0?((0,i.wg)(),(0,i.iD)("div",D,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(C.previewImages,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"add-img",key:t,style:{width:"30%"}},[(0,i.Wm)(T,{onClick:t=>W.removeImg(e),color:"red",round:"",size:"sm"},{default:(0,i.w5)((()=>[_])),_:2},1032,["onClick"]),(0,i._)("img",{style:{width:"100%",cursor:"pointer"},class:"add-event-img",src:e,alt:""},null,8,k),I])))),128))])):((0,i.wg)(),(0,i.iD)("div",b," Imaginiile incărcate vor apărea aici "))]),(0,i._)("div",L,[(0,i.Wm)(T,{type:"button",class:"btn",loading:C.isFetching,color:"purple",onClick:W.addEvent},{default:(0,i.w5)((()=>[U])),_:1},8,["loading","onClick"])])])]),(0,i.Wm)(j,{modelValue:C.errorDialog,"onUpdate:modelValue":t[6]||(t[6]=e=>C.errorDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(N,null,{default:(0,i.w5)((()=>[(0,i.Wm)(Q,null,{default:(0,i.w5)((()=>[V])),_:1}),(0,i.Wm)(Q,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(C.error),1)])),_:1}),(0,i.Wm)(z,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(T,{flat:"",label:"OK",color:"primary"},null,512),[[O]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}a(4641),a(3269),a(6727),a(7574);var C=a(3926);const W={name:"addeventView",components:{},data(){return{eventName:"",eventDate:"2022/08/02",eventDesc:"",imageList:[],localImageList:[],isFetching:!1,previewImages:[],errorDialog:!1,error:"Te rugăm să reverifici datele introduse. ",attendanceList:[],eventDateView:"02/08/2022"}},methods:{openModal(){this.$refs.dateIcon.$el.click(),this.$refs.dateIcon.$el.focus()},handleDateChange(e,t,a){let i=1==`${a.day}`.length?"0"+a.day:a.day,l=1==`${a.month}`.length?"0"+a.month:a.month;this.eventDateView=i+"/"+l+"/"+a.year},openInput(){this.previewImages.length<3?this.$refs.imgInput.click():this.$q.notify({message:"Nu poți adauga mai mult de 3 (trei) fotografii.",color:"red"})},async addEvent(){if(this.isFetching)return;this.isFetching=!0;let e=[];if(this.eventDesc.length>50)return void(this.isFetching=!1);const t=this.localImageList;if(0==t.length)return this.error="Trebuie încărcată cel puțin o fotografie!",this.errorDialog=!0,void(this.isFetching=!1);if(!(t.length<4))return this.error="Poți încărca între 1-3 fotografii.",this.errorDialog=!0,void(this.isFetching=!1);{let a=new Date+"-"+t[0].name;if(await C.tO.child(a).put(t[0],{contentType:t[0].type}).then((e=>e.ref.getDownloadURL())).then((t=>{e.push(t)})),t.length>1){let a=new Date+"-"+t[1].name;if(await C.tO.child(a).put(t[1],{contentType:t[1].type}).then((e=>e.ref.getDownloadURL())).then((t=>{e.push(t)})),t.length>2){let a=new Date+"-"+t[2].name;await C.tO.child(a).put(t[2],{contentType:t[2].type}).then((e=>e.ref.getDownloadURL())).then((t=>{e.push(t)}))}}this.imageList=e}return""==this.eventDate?(this.error="Te rugăm sa selectează data întâlnirii.",void(this.errorDialog=!0)):""==this.eventDesc?(this.error="Te rugăm sa adaugi descrierea întâlnirii.",void(this.errorDialog=!0)):(await this.$store.dispatch("addEvent",{name:this.eventName,desc:this.eventDesc,date:this.eventDate,attendanceList:this.attendanceList,imageList:this.imageList}),void(this.isFetching=!1))},handleImageUpload(e){if(this.previewImages.length<3){const t=e.target.files[0];this.previewImages.push(URL.createObjectURL(t)),this.localImageList.push(t)}else this.previewImages.length>=3&&this.$q.notify({message:"Nu poți incărca mai mult de 3 fotografii.",color:"red"})},removeImg(e){const t=this.previewImages.findIndex((t=>t===e));this.previewImages.splice(t,1),this.localImageList.splice(t,1)},addUser(e){if(this.attendanceList.includes(e.target.value)&&!e.target.checked){let t=this.attendanceList.findIndex((t=>t==e.target.value));this.attendanceList.splice(t,1)}else e.target.checked&&!this.attendanceList.includes(e.target.value)&&this.attendanceList.push(e.target.value)}},computed:{userData(){return this.$store.getters.userData}}};var q=a(1639),T=a(6611),Z=a(2857),$=a(2765),F=a(7088),Q=a(4455),z=a(7743),N=a(4458),j=a(3190),O=a(1821),P=a(2146),R=a(9984),A=a.n(R);const E=(0,q.Z)(W,[["render",x]]),H=E;A()(W,"components",{QInput:T.Z,QIcon:Z.Z,QPopupProxy:$.Z,QDate:F.Z,QBtn:Q.Z,QDialog:z.Z,QCard:N.Z,QCardSection:j.Z,QCardActions:O.Z}),A()(W,"directives",{ClosePopup:P.Z})}}]);