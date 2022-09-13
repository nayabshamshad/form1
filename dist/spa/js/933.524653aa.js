"use strict";(globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[]).push([[933],{8933:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});a(702);var l=a(9835),i=a(6970);const n={class:"container"},s={class:"form"},o=(0,l._)("h2",null,"Adaugare întâlnire",-1),r={class:"cate-list"},d={class:"cate-list"},c=(0,l._)("label",{style:{"font-size":"16px"}},"Data întâlnirii:",-1),u={class:"row items-center justify-end"},h={class:"cate-list"},m={class:"cate-list"},p=(0,l._)("label",{style:{"font-size":"16px",display:"block"}}," Prezența: ",-1),g={style:{width:"30%","font-style":"italic","text-transform":"capitalize",display:"block","border-bottom":"1px solid","text-align":"center"}},v=["value"],f={class:"cate-list"},w=(0,l._)("label",{style:{display:"block","font-size":"16px","margin-bottom":"1rem"}},"Încarcă imaginile (max. 3)",-1),y=(0,l.Uk)("+"),D={key:0,class:"img_holder"},_=(0,l.Uk)("-"),k=["src"],I=(0,l._)("div",null,null,-1),b={key:1,style:{height:"175px"},class:"flex justify-center"},x={class:"flex justify-center"},L=(0,l.Uk)("Trimite"),U=(0,l._)("div",{class:"text-h6"},"Alert",-1);function V(e,t,a,V,C,W){const q=(0,l.up)("q-input"),Z=(0,l.up)("q-btn"),$=(0,l.up)("q-date"),F=(0,l.up)("q-popup-proxy"),Q=(0,l.up)("q-icon"),z=(0,l.up)("q-card-section"),P=(0,l.up)("q-card-actions"),T=(0,l.up)("q-card"),Y=(0,l.up)("q-dialog"),j=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",n,[(0,l._)("form",s,[o,(0,l._)("div",r,[(0,l.Wm)(q,{modelValue:C.eventName,"onUpdate:modelValue":t[0]||(t[0]=e=>C.eventName=e),type:"text",label:"Tema întâlnirii:","label-color":"black"},null,8,["modelValue"])]),(0,l._)("div",d,[c,(0,l.Wm)(q,{filled:"",modelValue:C.eventDateView,"onUpdate:modelValue":t[2]||(t[2]=e=>C.eventDateView=e),mask:"##/##/####",onFocus:W.openModal},{append:(0,l.w5)((()=>[(0,l.Wm)(Q,{onClick:W.openModal,ref:"dateIcon",name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)($,{modelValue:C.eventDate,"onUpdate:modelValue":[t[1]||(t[1]=e=>C.eventDate=e),W.handleDateChange]},{default:(0,l.w5)((()=>[(0,l._)("div",u,[(0,l.wy)((0,l.Wm)(Z,{label:"Close",color:"primary",flat:""},null,512),[[j]])])])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["onClick"])])),_:1},8,["modelValue","onFocus"])]),(0,l._)("div",h,[(0,l.Wm)(q,{label:"Descriere (max. 50 de caractere)",modelValue:C.eventDesc,"onUpdate:modelValue":t[3]||(t[3]=e=>C.eventDesc=e),type:"text","label-color":"black",rules:[e=>e.length<=50||"Please use maximum 50 characters in description"]},null,8,["modelValue","rules"])]),(0,l._)("div",m,[p,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(W.userData.teamList,((e,a)=>((0,l.wg)(),(0,l.iD)("div",{key:a,style:{display:"flex","justify-content":"space-around"}},[(0,l._)("span",g,(0,i.zw)(e.name),1),(0,l._)("input",{type:"checkbox",value:e.name,onChange:t[4]||(t[4]=(...e)=>W.addUser&&W.addUser(...e))},null,40,v)])))),128))]),(0,l._)("div",f,[(0,l._)("div",null,[(0,l._)("div",null,[w,(0,l.Wm)(Z,{color:"purple",onClick:W.openInput,round:""},{default:(0,l.w5)((()=>[y])),_:1},8,["onClick"])]),(0,l._)("input",{onChange:t[5]||(t[5]=(...e)=>W.handleImageUpload&&W.handleImageUpload(...e)),type:"file",ref:"imgInput",style:{display:"none"},name:"img",accept:"image/*"},null,544)]),C.previewImages.length>0?((0,l.wg)(),(0,l.iD)("div",D,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(C.previewImages,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"add-img",key:t,style:{width:"30%"}},[(0,l.Wm)(Z,{onClick:t=>W.removeImg(e),color:"red",round:"",size:"sm"},{default:(0,l.w5)((()=>[_])),_:2},1032,["onClick"]),(0,l._)("img",{style:{width:"100%",cursor:"pointer"},class:"add-event-img",src:e,alt:""},null,8,k),I])))),128))])):((0,l.wg)(),(0,l.iD)("div",b," Imaginiile incărcate vor apărea aici "))]),(0,l._)("div",x,[(0,l.Wm)(Z,{type:"button",class:"btn",loading:C.isFetching,color:"purple",onClick:W.addEvent},{default:(0,l.w5)((()=>[L])),_:1},8,["loading","onClick"])])])]),(0,l.Wm)(Y,{modelValue:C.errorDialog,"onUpdate:modelValue":t[6]||(t[6]=e=>C.errorDialog=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(z,null,{default:(0,l.w5)((()=>[U])),_:1}),(0,l.Wm)(z,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(C.error),1)])),_:1}),(0,l.Wm)(P,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(Z,{flat:"",label:"OK",color:"primary"},null,512),[[j]])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}a(4641),a(3269),a(6727),a(7574);var C=a(3926);const W={name:"addeventView",components:{},data(){return{eventName:"",eventDate:"2022/08/02",eventDesc:"",imageList:[],localImageList:[],isFetching:!1,previewImages:[],errorDialog:!1,error:"There was an unexpected error",attendanceList:[],eventDateView:"02/08/2022"}},methods:{openModal(){this.$refs.dateIcon.$el.click(),this.$refs.dateIcon.$el.focus()},handleDateChange(e,t,a){let l=1==`${a.day}`.length?"0"+a.day:a.day,i=1==`${a.month}`.length?"0"+a.month:a.month;this.eventDateView=l+"/"+i+"/"+a.year},openInput(){this.previewImages.length<3?this.$refs.imgInput.click():this.$q.notify({message:"You cannot upload more than three images at a time",color:"red"})},async addEvent(){if(this.isFetching)return;this.isFetching=!0;let e=[];if(this.eventDesc.length>50)return void(this.isFetching=!1);const t=this.localImageList;if(0==t.length)return this.error="You need to upload atleast one image!",this.errorDialog=!0,void(this.isFetching=!1);if(!(t.length<4))return this.error="Please select a valid number of images",this.errorDialog=!0,void(this.isFetching=!1);{let a=new Date+"-"+t[0].name;if(await C.tO.child(a).put(t[0],{contentType:t[0].type}).then((e=>e.ref.getDownloadURL())).then((t=>{e.push(t)})),t.length>1){let a=new Date+"-"+t[1].name;if(await C.tO.child(a).put(t[1],{contentType:t[1].type}).then((e=>e.ref.getDownloadURL())).then((t=>{e.push(t)})),t.length>2){let a=new Date+"-"+t[2].name;await C.tO.child(a).put(t[2],{contentType:t[2].type}).then((e=>e.ref.getDownloadURL())).then((t=>{e.push(t)}))}}this.imageList=e}return""==this.eventDate?(this.error="Please select a date for the event",void(this.errorDialog=!0)):""==this.eventDesc?(this.error="Please enter a description for the event",void(this.errorDialog=!0)):(await this.$store.dispatch("addEvent",{name:this.eventName,desc:this.eventDesc,date:this.eventDate,attendanceList:this.attendanceList,imageList:this.imageList}),void(this.isFetching=!1))},handleImageUpload(e){if(this.previewImages.length<3){const t=e.target.files[0];this.previewImages.push(URL.createObjectURL(t)),this.localImageList.push(t)}else this.previewImages.length>=3&&this.$q.notify({message:"You cannot upload more than 3 files",color:"red"})},removeImg(e){const t=this.previewImages.findIndex((t=>t===e));this.previewImages.splice(t,1),this.localImageList.splice(t,1)},addUser(e){if(this.attendanceList.includes(e.target.value)&&!e.target.checked){let t=this.attendanceList.findIndex((t=>t==e.target.value));this.attendanceList.splice(t,1)}else e.target.checked&&!this.attendanceList.includes(e.target.value)&&this.attendanceList.push(e.target.value)}},computed:{userData(){return this.$store.getters.userData}}};var q=a(1639),Z=a(6611),$=a(2857),F=a(2765),Q=a(7088),z=a(4455),P=a(7743),T=a(4458),Y=a(3190),j=a(1821),O=a(2146),R=a(9984),N=a.n(R);const A=(0,q.Z)(W,[["render",V]]),E=A;N()(W,"components",{QInput:Z.Z,QIcon:$.Z,QPopupProxy:F.Z,QDate:Q.Z,QBtn:z.Z,QDialog:P.Z,QCard:T.Z,QCardSection:Y.Z,QCardActions:j.Z}),N()(W,"directives",{ClosePopup:O.Z})}}]);