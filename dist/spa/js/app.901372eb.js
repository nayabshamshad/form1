(()=>{"use strict";var e={7776:(e,t,a)=>{var r=a(1957),s=(a(702),a(1947)),i=a(499),n=a(9835);function o(e,t,a,r,s,i){const o=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(o)}var d=a(3926);const c=(0,n.aZ)({name:"App",mounted(){d.I8.onAuthStateChanged((e=>{this.isAuth=e||null}))},data(){return{isAuth:null}},watch:{isAuth:{handler:async function(){this.isAuth&&await this.$store.dispatch("getUserData")}}}});var u=a(1639);const l=(0,u.Z)(c,[["render",o]]),h=l;var m=a(1502),p=a(3340),g=a(8339);const v=[{path:"/",name:"",component:()=>Promise.all([a.e(736),a.e(7)]).then(a.bind(a,7))},{path:"/sign-in",name:"",component:()=>Promise.all([a.e(736),a.e(431)]).then(a.bind(a,7431))},{path:"/sign-up",name:"",component:()=>Promise.all([a.e(736),a.e(582)]).then(a.bind(a,582))},{path:"/event-list",name:"",component:()=>Promise.all([a.e(736),a.e(605)]).then(a.bind(a,3605))},{path:"/category-list",name:"",component:()=>Promise.all([a.e(736),a.e(697)]).then(a.bind(a,697))},{path:"/add-event",name:"",component:()=>Promise.all([a.e(736),a.e(476)]).then(a.bind(a,476))},{path:"/view-event",name:"",component:()=>Promise.all([a.e(736),a.e(626)]).then(a.bind(a,1626))},{path:"/pending",component:()=>Promise.all([a.e(736),a.e(137)]).then(a.bind(a,3137)),name:""},{path:"/user-details",component:()=>Promise.all([a.e(736),a.e(509)]).then(a.bind(a,509)),name:""},{path:"/rejected",component:()=>Promise.all([a.e(736),a.e(382)]).then(a.bind(a,3382)),name:""},{path:"/reset_password",component:()=>Promise.all([a.e(736),a.e(879)]).then(a.bind(a,3879)),name:""},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(862)]).then(a.bind(a,1862))}],f=v,y=(0,p.BC)((function({store:e}){const t=g.r5,r=(0,g.p7)({scrollBehavior:()=>({left:0,top:0}),routes:[{path:"/",name:"Layout",component:()=>Promise.all([a.e(736),a.e(141)]).then(a.bind(a,8141)),children:f}],history:t("")});return r.beforeEach(((t,a,r)=>{if(e.getters.isAuthenticated){var s,i,n,o,d,c,u,l,h,m,p,g;if("/sign-in"!=t.path&&"/sign-up"!=t.path)return 0==(null===(s=e.getters.userData)||void 0===s?void 0:s.isUpdated)&&"/category-list"!=t.path&&1==(null===(i=e.getters.userData)||void 0===i?void 0:i.isAuthorized)?void r("/category-list"):1==(null===(n=e.state.userData)||void 0===n?void 0:n.isUpdated)&&1==(null===(o=e.state.userData)||void 0===o?void 0:o.isAuthorized)?"/category-list"!=t.path?void r():void r("/"):"pending"==(null===(d=e.state.userData)||void 0===d?void 0:d.isAuthorized)&&"/pending"!=t.path?void r("/pending"):0==(null===(c=e.state.userData)||void 0===c?void 0:c.isAuthorized)&&"/rejected"!=t.path?void r("/rejected"):void r();if(null!==(u=e.getters.userData)&&void 0!==u&&u.isUpdated&&1==(null===(l=e.getters.userData)||void 0===l?void 0:l.isAuthorized)&&"/"!=t.path)return void r("/");if(0==(null===(h=e.getters.userData)||void 0===h?void 0:h.isUpdated)&&1==(null===(m=e.state.userData)||void 0===m?void 0:m.isAuthorized)&&"/category-list"!=t.path)return void r("/category-list");if("pending"==(null===(p=e.getters.userData)||void 0===p?void 0:p.isAuthorized))return void r("/pending");if(0==(null===(g=e.state.userData)||void 0===g?void 0:g.isAuthorized))return void r("/rejected")}else"/sign-in"!=t.path&&"/sign-up"!=t.path&&"/reset_password"!=t.path?r("/sign-in"):r()})),r}));async function w(e,t){const r=e(h);r.use(s.Z,t);const n="function"===typeof m["default"]?await(0,m["default"])({}):m["default"],{storeKey:o}=await Promise.resolve().then(a.bind(a,1502)),d=(0,i.Xl)("function"===typeof y?await y({store:n}):y);return n.$router=d,{app:r,store:n,storeKey:o,router:d}}var b=a(4328);const U={config:{},plugins:{Notify:b.Z}};async function Z({app:e,router:t,store:a,storeKey:r}){e.use(t),e.use(a,r),e.mount("#q-app")}w(r.ri,U).then(Z)},3926:(e,t,a)=>{a.d(t,{I8:()=>o,RZ:()=>n,tO:()=>d});var r=a(7258);a(3174),a(7123),a(2028);const s={apiKey:"AIzaSyCMMQuARx0tYIv9gjS-VYZf-qH_nGt8Kd0",authDomain:"lecweb.firebaseapp.com",projectId:"lecweb",storageBucket:"lecweb.appspot.com",messagingSenderId:"664285438230",appId:"1:664285438230:web:fa3fa95a91f20fcf4ff037"},i=r.Z.initializeApp(s),n=i.firestore().collection("userListFinal"),o=i.auth(),d=i.storage().ref()},1502:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(702);var r=a(3340),s=a(3100),i=a(3926),n=a(4186),o=a(4328);const d=(0,r.h)((function(){const e=(0,s.MT)({state:{currentUser:null,userData:null,selectedEvent:{name:"",date:"",desc:"",attendanceList:[]},dateList:{},userList:[],selectedUser:[]},getters:{selectedUser(e){return e.selectedUser},userData(e){return e.userData},currentUser(e){return e.currentUser},isAuthenticated(e){return!!e.currentUser},dateList(e){return e.dateList},selectedEvent(e){return e.selectedEvent},userList(e){return e.userList}},mutations:{setCurrentUser(e,t){e.currentUser=t},setUserData(e,t){e.userData=t},selectEvent(e,t){e.selectedEvent=t},setUserList(e,t){e.userList=t},approveUser(e,t){const a=e.userList.findIndex((e=>e.uid==t));e.userList[a].isAuthorized=!0},declineUser(e,t){const a=e.userList.findIndex((e=>e.uid==t));e.userList[a].isAuthorized=!1},setSelectedUser(e,t){e.selectedUser=t},setDateList(e,t){e.dateList=t}},actions:{async finalizeReset({},e){let t={err:!1};return await i.I8.confirmPasswordReset(e.code,e.pass).then((()=>{})).catch((e=>{t.err=!0,o.Z.create({message:e.message,color:"red"})})),t},async verifyReset({},e){let t={err:!1};return await i.I8.verifyPasswordResetCode(e).then((e=>{})).catch((()=>{t.err=!0,o.Z.create({message:"Your reset code is invalid, it may have already been used or expired. Please send a reset request again.",color:"red"}),this.$router.push("/")})),t},async sendResetEmail({},e){let t={err:!1};return await i.I8.sendPasswordResetEmail(e).then((()=>{})).catch((e=>{t.err=!0,"auth/user-not-found"==e.code?(console.log(e),o.Z.create({message:"Unable to find user with this email address",color:"red"})):"auth/invalid-email"==e.code?o.Z.create({message:"Please enter a valid email address",color:"red"}):o.Z.create({message:e.message,color:"red"})})),t},async signOutUser({commit:e}){await i.I8.signOut(),e("setUserData",null),e("setCurrentUser",null),this.$router.push("/sign-in")},async getUserData({commit:e}){await i.RZ.doc(i.I8.currentUser.uid).get().then((t=>{e("setCurrentUser",i.I8.currentUser),e("setUserData",t.data())})),await i.RZ.doc("dateRange").get().then((t=>{e("setDateList",t.data())})).catch((e=>{console.log(e)}))},async signUp({commit:e},t){var a=!1;await i.I8.createUserWithEmailAndPassword(t.email,t.password).then((()=>{})).catch((e=>{a=!0,"auth/email-already-in-use"==e.code?o.Z.create({message:"Email address already in use",color:"red"}):"auth/invalid-email"==e.code?o.Z.create({message:"Please enter a valid email address",color:"red"}):"auth/weak-password"==e.code?o.Z.create({message:"Password must be atleast 6 characters long",color:"red"}):o.Z.create({message:e.message,color:"red"})})),a||(await i.I8.currentUser.updateProfile({displayName:t.name}).catch((e=>{a=!0,o.Z.create({message:e.message,color:"red"})})),a||(await i.RZ.doc(i.I8.currentUser.uid).set({name:t.name,isAuthorized:"pending",eventList:[],teamList:[],role:"teamLead",dateOfBirth:"",Instructor:"",Ghid:"",masterGhid:"",region:"",state:"",gender:"",etnic:"",phoneNumber:t.phoneNumber,tagList:[],clubName:"",status:"",category:"",size:"",isUpdated:!1,uid:i.I8.currentUser.uid,email:t.email}).catch((e=>(a=!0,o.Z.create({message:e.message,color:"red"}),e.message))),a||(e("setCurrentUser",i.I8.currentUser),await i.RZ.doc(i.I8.currentUser.uid).get().then((t=>{e("setUserData",t.data())})).catch((e=>{a=!0,o.Z.create({message:e.message,color:"red"})})),a||this.$router.push("/category-list"))))},async updateUserProfile({state:e,commit:t,dispatch:a},r){await i.RZ.doc(e.currentUser.uid).update(r),await a("getUserData")},async updateUserProfileAdmin({commit:e,dispatch:t},a){await i.RZ.doc(a.uid).update(a),await t("getUserData")},async signInUser({commit:e},t){var a=!1;await i.I8.signInWithEmailAndPassword(t.email,t.password).then((t=>{e("setCurrentUser",i.I8.currentUser)})).catch((e=>{a=!0,console.log(e.code),"auth/wrong-password"==e.code?o.Z.create({color:"red",message:"Please recheck your password and try again"}):"auth/invalid-email"==e.code?o.Z.create({color:"red",message:"Please enter a valid email address"}):"auth/too-many-requests"==e.code?o.Z.create({color:"red",message:"Too many failed attempts, this account has been temporarily disabled"}):"auth/user-not-found"==e.code?o.Z.create({color:"red",message:"We cannot find a user with this email address"}):o.Z.create({color:"red",message:e.message})})),a||(await i.RZ.doc(i.I8.currentUser.uid).get().then((t=>{var a;e("setUserData",t.data()),0==(null===(a=t.data())||void 0===a?void 0:a.isUpdated)?this.$router.push("/category-list"):this.$router.push("/")})).catch((e=>(a=!0,o.Z.create({message:e.message,color:"red"}),e.message))),await i.RZ.doc("dateRange").get().then((t=>{e("setDateList",t.data())})).catch((e=>{console.log(e)})))},async addEvent({dispatch:e,state:t},a){let r=[];t.userData.eventList.forEach((e=>{r.push(e)})),r.push(a),i.RZ.doc(i.I8.currentUser.uid).update({eventList:r}),await e("getUserData"),this.$router.push("/event-list")},selectEvent({commit:e},t){e("selectEvent",t),this.$router.push("/view-event")},async updateEvent({dispatch:e,state:t},a){let r=t.userData.eventList.findIndex((e=>e.name==a.name)),s=[...t.userData.eventList];s.splice(r,1),s.push(a),await i.RZ.doc(i.I8.currentUser.uid).update({eventList:s}),await e("getUserData"),this.$router.push("/event-list")},async getUserList({commit:e}){var t=[];await i.RZ.get().then((a=>{a.forEach((e=>{t.push(e.data())})),e("setUserList",t)}))},async approveUser({commit:e},t){await i.RZ.doc(t).update({isAuthorized:!0}).then((()=>{})).catch((e=>{o.Z.create({color:"red",message:e.message})})),e("approveUser",t)},async declineUser({commit:e},t){await i.RZ.doc(t).update({isAuthorized:!1}).then((()=>{})).catch((e=>{o.Z.create({color:"red",message:e.message})})),e("declineUser",t)},setSelectedUser({commit:e},t){e("setSelectedUser",t)},async setDateRange({commit:e},t){await i.RZ.doc("dateRange").update(t),e("setDateList",t)}},plugins:[(0,n.Z)()],strict:!1});return e}))}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,a),i.exports}a.m=e,(()=>{var e=[];a.O=(t,r,s,i)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,s,i]=e[u],o=!0,d=0;d<r.length;d++)(!1&i||n>=i)&&Object.keys(a.O).every((e=>a.O[e](r[d])))?r.splice(d--,1):(o=!1,i<n&&(n=i));if(o){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,s,i]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{7:"410e0cda",137:"f2223d28",141:"5e47c615",382:"27cf8403",431:"e896053a",476:"00371ee0",509:"65cb6c25",582:"892dc74e",605:"188d312a",626:"43e908bd",697:"063e816a",862:"8d80f4bf",879:"fd230ed6"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"6cce37e9",736:"8ddbfebb"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="form1-quasar:";a.l=(r,s,i,n)=>{if(e[r])e[r].push(s);else{var o,d;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){o=l;break}}o||(d=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+i),o.src=r),e[r]=[s];var h=(t,a)=>{o.onerror=o.onload=null,clearTimeout(m);var s=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((e=>e(a))),t)return t(a)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),d&&document.head.appendChild(o)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var i=new Promise(((a,r)=>s=e[t]=[a,r]));r.push(s[2]=i);var n=a.p+a.u(t),o=new Error,d=r=>{if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var i=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",o.name="ChunkLoadError",o.type=i,o.request=n,s[1](o)}};a.l(n,d,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var s,i,[n,o,d]=r,c=0;if(n.some((t=>0!==e[t]))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(d)var u=d(a)}for(t&&t(r);c<n.length;c++)i=n[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},r=globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(7776)));r=a.O(r)})();