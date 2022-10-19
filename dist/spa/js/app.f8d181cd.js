(()=>{"use strict";var e={5982:(e,t,a)=>{var r=a(1957),s=(a(702),a(1947)),i=a(499),n=a(9835);function o(e,t,a,r,s,i){const o=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(o)}var d=a(3926);const u=(0,n.aZ)({name:"App",mounted(){d.I8.onAuthStateChanged((e=>{this.isAuth=e||null}))},data(){return{isAuth:null}},watch:{isAuth:{handler:async function(){this.isAuth&&null==this.$store.getters.userData&&await this.$store.dispatch("getUserData")}}}});var c=a(1639);const l=(0,c.Z)(u,[["render",o]]),m=l;var p=a(1502),h=a(3340),g=a(8339);const v=[{path:"/",name:"",component:()=>Promise.all([a.e(736),a.e(123)]).then(a.bind(a,8123))},{path:"/edit-profile",name:"Edit Profile",component:()=>Promise.all([a.e(736),a.e(172)]).then(a.bind(a,9172))},{path:"/event-list",name:"",component:()=>Promise.all([a.e(736),a.e(819)]).then(a.bind(a,7819))},{path:"/signup_department",name:"Create Department",component:()=>Promise.all([a.e(736),a.e(649)]).then(a.bind(a,9649))},{path:"/add-event",name:"",component:()=>Promise.all([a.e(736),a.e(226)]).then(a.bind(a,226))},{path:"/view-event",name:"",component:()=>Promise.all([a.e(736),a.e(120)]).then(a.bind(a,9120))},{path:"/user-details",component:()=>Promise.all([a.e(736),a.e(735)]).then(a.bind(a,1735)),name:""},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(862)]).then(a.bind(a,1862))}],f=v,U=(0,h.BC)((function({store:e}){const t=g.r5,r=(0,g.p7)({scrollBehavior:()=>({left:0,top:0}),routes:[{path:"/",name:"Layout",component:()=>Promise.all([a.e(736),a.e(977)]).then(a.bind(a,4977)),children:f},{path:"/sign-in",name:"",component:()=>Promise.all([a.e(736),a.e(441)]).then(a.bind(a,3441))},{path:"/sign-up",name:"",component:()=>Promise.all([a.e(736),a.e(52)]).then(a.bind(a,1052))},{path:"/category-list",name:"",component:()=>Promise.all([a.e(736),a.e(172)]).then(a.bind(a,9172))},{path:"/send-reset-link",name:"Send reset link",component:()=>Promise.all([a.e(736),a.e(681)]).then(a.bind(a,4681))},{path:"/rejected",component:()=>Promise.all([a.e(736),a.e(297)]).then(a.bind(a,1297)),name:""},{path:"/pending",component:()=>Promise.all([a.e(736),a.e(758)]).then(a.bind(a,4758)),name:""},{path:"/reset_password",component:()=>Promise.all([a.e(736),a.e(457)]).then(a.bind(a,1457)),name:""}],history:t("")});return r.beforeEach(((t,a,r)=>{if(e.getters.isAuthenticated){var s,i,n,o,d,u,c,l,m,p,h,g;if("/sign-in"!=t.path&&"/sign-up"!=t.path&&"Create Department"!=t.name)return 0==(null===(s=e.getters.userData)||void 0===s?void 0:s.isUpdated)&&"/category-list"!=t.path&&1==(null===(i=e.getters.userData)||void 0===i?void 0:i.isAuthorized)?void r("/category-list"):1==(null===(n=e.state.userData)||void 0===n?void 0:n.isUpdated)&&1==(null===(o=e.state.userData)||void 0===o?void 0:o.isAuthorized)?"/category-list"!=t.path?void r():void r("/"):"pending"==(null===(d=e.state.userData)||void 0===d?void 0:d.isAuthorized)&&"/pending"!=t.path?void r("/pending"):0==(null===(u=e.state.userData)||void 0===u?void 0:u.isAuthorized)&&"/rejected"!=t.path?void r("/rejected"):void r();if(null!==(c=e.getters.userData)&&void 0!==c&&c.isUpdated&&1==(null===(l=e.getters.userData)||void 0===l?void 0:l.isAuthorized)&&"/"!=t.path)return void r("/");if(0==(null===(m=e.getters.userData)||void 0===m?void 0:m.isUpdated)&&1==(null===(p=e.state.userData)||void 0===p?void 0:p.isAuthorized)&&"/category-list"!=t.path)return void r("/category-list");if("pending"==(null===(h=e.getters.userData)||void 0===h?void 0:h.isAuthorized))return void r("/pending");if(0==(null===(g=e.state.userData)||void 0===g?void 0:g.isAuthorized))return void r("/rejected")}else"/sign-in"!=t.path&&"/sign-up"!=t.path&&"/reset_password"!=t.path&&"Create Department"!=t.name&&"/send-reset-link"!=t.path?r("/sign-in"):r()})),r}));async function b(e,t){const r=e(m);r.use(s.Z,t);const n="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:o}=await Promise.resolve().then(a.bind(a,1502)),d=(0,i.Xl)("function"===typeof U?await U({store:n}):U);return n.$router=d,{app:r,store:n,storeKey:o,router:d}}var w=a(4328);const y={config:{},plugins:{Notify:w.Z}};async function D({app:e,router:t,store:a,storeKey:r}){e.use(t),e.use(a,r),e.mount("#q-app")}b(r.ri,y).then(D)},3926:(e,t,a)=>{a.d(t,{I8:()=>o,RZ:()=>n,hs:()=>u,tO:()=>d});var r=a(7258);a(3174),a(7123),a(2028);const s={apiKey:"AIzaSyCMMQuARx0tYIv9gjS-VYZf-qH_nGt8Kd0",authDomain:"lecweb.firebaseapp.com",projectId:"lecweb",storageBucket:"lecweb.appspot.com",messagingSenderId:"664285438230",appId:"1:664285438230:web:fa3fa95a91f20fcf4ff037"},i=r.Z.initializeApp(s),n=i.firestore().collection("userListFinal"),o=i.auth(),d=i.storage().ref(),u=i.storage()},1502:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(702);var r=a(3340),s=a(3100),i=a(3926),n=a(4186),o=a(4328);const d=(0,r.h)((function(){const e=(0,s.MT)({state:{currentUser:null,userData:null,selectedEvent:{name:"",date:"",desc:"",attendanceList:[]},signedUp:!1,dateList:{},userList:[],selectedUser:[]},getters:{selectedUser(e){return e.selectedUser},userData(e){return e.userData?e.userData:null},currentUser(e){return e.currentUser},isAuthenticated(e){return!!e.currentUser},dateList(e){return e.dateList},selectedEvent(e){return e.selectedEvent},userList(e){return e.userList}},mutations:{setSignedUp(e,t){e.signedUp=t},setEvents(e,t){e.userData.eventList=t},setCurrentUser(e,t){e.currentUser=t},setUserData(e,t){e.userData=t},selectEvent(e,t){e.selectedEvent=t},setUserList(e,t){e.userList=t},approveUser(e,t){const a=e.userList.findIndex((e=>e.uid==t));e.userList[a].isAuthorized=!0},declineUser(e,t){const a=e.userList.findIndex((e=>e.uid==t));e.userList[a].isAuthorized=!1},setSelectedUser(e,t){e.selectedUser=t},setDateList(e,t){const a="admin"==e.userData.role?t.date:t;if("admin"==e.userData.role){let r=e.userList.findIndex((e=>e.uid==t.uid));e.userList[r].date=a}else e.userData.date=a;e.dateList=a}},actions:{async finalizeReset({},e){let t={err:!1};return await i.I8.confirmPasswordReset(e.code,e.pass).then((()=>{})).catch((e=>{t.err=!0,o.Z.create({message:e.message,color:"red"})})),t},async verifyReset({},e){let t={err:!1};return await i.I8.verifyPasswordResetCode(e).then((e=>{})).catch((()=>{t.err=!0,o.Z.create({message:"Codul de resetare e invalid sau expirat. Vă rugăm să trimiteți din nou o cerere de resetare.",color:"red"}),this.$router.push("/")})),t},async sendResetEmail({},e){let t={err:!1};return await i.I8.sendPasswordResetEmail(e).then((()=>{})).catch((e=>{t.err=!0,"auth/user-not-found"==e.code?(console.log(e),o.Z.create({message:"Nu există utilizator cu aceasta adresa de e-mail.",color:"red"})):"auth/invalid-email"==e.code?o.Z.create({message:"Te rugăm să introduci o adresa de e-mail validă.",color:"red"}):o.Z.create({message:e.message,color:"red"})})),t},async signOutUser({commit:e}){await i.I8.signOut(),e("setCurrentUser",null),e("setUserData",null),this.$router.push("/sign-in")},async getUserData({state:e,commit:t,dispatch:a}){await i.RZ.doc(i.I8.currentUser.uid).get().then((e=>{t("setCurrentUser",i.I8.currentUser),t("setUserData",e.data())})),"department"!=e.userData.role&&"admin"!=e.userData.role?await i.RZ.get().then((a=>{let r=[];a.forEach((e=>{r.push(e.data())}));const s=r.filter((t=>(null===t||void 0===t?void 0:t.departmentName)==e.userData.department));t("setDateList",s[0].date)})):e.userData.date&&t("setDateList",e.userData.date),"admin"!=e.userData.role&&"department"!=e.userData.role||this.dispatch("getUserList"),"/sign-in"!=this.$router.currentRoute.value.path&&"/sign-up"!=this.$router.currentRoute.value.path&&"/signup_department"!=this.$router.currentRoute.value.path&&"/send-reset-link"!=this.$router.currentRoute.value.path&&"/reset_password"!=this.$router.currentRoute.value.path||this.$router.push("/")},async signUp({dispatch:e,commit:t},a){var r=!1;t("setSignedUp",!0),await i.I8.createUserWithEmailAndPassword(a.email,a.password).then((()=>{})).catch((e=>{r=!0,"auth/email-already-in-use"==e.code?o.Z.create({message:"Adresă de e-mail este deja folosită.",color:"red"}):"auth/invalid-email"==e.code?o.Z.create({message:"Te rugăm să introduci o adresa de e-mail validă.",color:"red"}):"auth/weak-password"==e.code?o.Z.create({message:"Parola trebuie să aibă minim 6 caaractere.",color:"red"}):o.Z.create({message:e.message,color:"red"})})),r?t("setSignedUp",!1):(await i.I8.currentUser.updateProfile({displayName:a.name}).catch((e=>{r=!0,o.Z.create({message:e.message,color:"red"})})),r?t("setSignedUp",!1):(await i.RZ.doc(i.I8.currentUser.uid).set({name:a.name,isAuthorized:"pending",eventList:[],teamList:[],role:"teamLead",dateOfBirth:"",Instructor:"",Ghid:"",masterGhid:"",region:"",state:"",gender:"",etnic:"",phoneNumber:a.phoneNumber,tagList:[],clubName:"",status:"",category:"",size:"",isUpdated:!1,uid:i.I8.currentUser.uid,email:a.email,department:a.department,imgUrl:a.imgUrl}).catch((e=>(r=!0,t("setSignedUp",!1),o.Z.create({message:e.message,color:"red"}),e.message))),r||(t("setCurrentUser",i.I8.currentUser),r||(t("setUserData",{name:a.name,isAuthorized:"pending",eventList:[],teamList:[],role:"teamLead",dateOfBirth:"",Instructor:"",Ghid:"",masterGhid:"",region:"",state:"",gender:"",etnic:"",phoneNumber:a.phoneNumber,tagList:[],clubName:"",status:"",category:"",size:"",isUpdated:!1,uid:i.I8.currentUser.uid,email:a.email,department:a.department,imgUrl:a.imgUrl}),o.Z.create({message:"Înregistrare reușită! Te rugăm să aștepți aprobarea unui administrator",color:"green",icon:"report_gmailerrorred"}),e("signOutUser")),t("setSignedUp",!1))))},async signUpDepartment({commit:e},t){var a=!1;await i.I8.createUserWithEmailAndPassword(t.email,t.password).then((()=>{})).catch((e=>{a=!0,"auth/email-already-in-use"==e.code?o.Z.create({message:"Email address already in use",color:"red"}):"auth/invalid-email"==e.code?o.Z.create({message:"Please enter a valid email address",color:"red"}):"auth/weak-password"==e.code?o.Z.create({message:"Password must be atleast 6 characters long",color:"red"}):o.Z.create({message:e.message,color:"red"})})),a||(await i.I8.currentUser.updateProfile({displayName:t.name}).catch((e=>{a=!0,o.Z.create({message:e.message,color:"red"})})),a||(await i.RZ.doc(i.I8.currentUser.uid).set({name:t.name,isAuthorized:!0,eventList:[],teamList:[],role:"department",dateOfBirth:"",Instructor:"",Ghid:"",masterGhid:"",region:"",state:"",gender:"",etnic:"",phoneNumber:t.phoneNumber,tagList:[],clubName:"",status:"",category:"",size:"",isUpdated:!0,uid:i.I8.currentUser.uid,email:t.email,departmentName:t.departmentName,date:{from:"03/03/2022",to:"04/04/2022"}}).catch((e=>(a=!0,o.Z.create({message:e.message,color:"red"}),e.message))),a||(e("setCurrentUser",i.I8.currentUser),e("setUserData",{name:t.name,isAuthorized:!0,eventList:[],teamList:[],role:"department",dateOfBirth:"",Instructor:"",Ghid:"",masterGhid:"",region:"",state:"",gender:"",etnic:"",phoneNumber:t.phoneNumber,tagList:[],clubName:"",status:"",category:"",size:"",isUpdated:!0,uid:i.I8.currentUser.uid,email:t.email,departmentName:t.departmentName,date:{from:"03/03/2022",to:"04/04/2022"}}),this.$router.push("/category-list"))))},async updateUserProfile({state:e,commit:t},a){await i.RZ.doc(e.currentUser.uid).update(a),t("setUserData",a)},async updateUserProfileAdmin({commit:e},t){await i.RZ.doc(t.uid).update(t),e("setSelectedUser",t)},async signInUser({state:e,commit:t},a){await i.I8.signInWithEmailAndPassword(a.email,a.password).then((e=>{t("setCurrentUser",i.I8.currentUser)})).catch((e=>{!0,console.log(e.code),"auth/wrong-password"==e.code?o.Z.create({color:"red",message:"Te rugăm să introduci parola din nou."}):"auth/invalid-email"==e.code?o.Z.create({color:"red",message:"Te rugăm să introduci o adresa de e-mail validă."}):"auth/too-many-requests"==e.code?o.Z.create({color:"red",message:"Prea multe încercări de logare eșuate. Contul a fost inchis temporar."}):"auth/user-not-found"==e.code?o.Z.create({color:"red",message:"Nu există utilizator cu aceasta adresa de e-mail."}):o.Z.create({color:"red",message:e.message})}))},async addEvent({commit:e,state:t},a){let r=[];t.userData.eventList.forEach((e=>{r.push(e)})),r.push(a),i.RZ.doc(i.I8.currentUser.uid).update({eventList:r}),e("setEvents",r),this.$router.push("/event-list")},selectEvent({commit:e},t){e("selectEvent",t),this.$router.push("/view-event")},async updateEvent({commit:e,state:t},a){let r=t.userData.eventList.findIndex((e=>e.name==a.name)),s=[...t.userData.eventList];s.splice(r,1),s.push(a),await i.RZ.doc(i.I8.currentUser.uid).update({eventList:s}),e("setEvents",s),this.$router.push("/event-list")},async getUserList({commit:e}){var t=[];await i.RZ.get().then((a=>{a.forEach((e=>{t.push(e.data())}));const r=t.sort(((e,t)=>{if(e.name&&e.name.toLowerCase()&&t.name&&t.name.toLowerCase()){if(e.name.toLowerCase()>t.name.toLowerCase())return 1;if(e.name.toLowerCase()<t.name.toLowerCase())return-1}return 0}));e("setUserList",r)}))},async approveUser({commit:e},t){await i.RZ.doc(t).update({isAuthorized:!0}).then((()=>{})).catch((e=>{o.Z.create({color:"red",message:e.message})})),e("approveUser",t)},async declineUser({commit:e},t){await i.RZ.doc(t).update({isAuthorized:!1}).then((()=>{})).catch((e=>{o.Z.create({color:"red",message:e.message})})),e("declineUser",t)},setSelectedUser({commit:e},t){e("setSelectedUser",t)},async updatedUserDetails({commit:e},t){await i.RZ.doc(t).get().then((t=>{e("setSelectedUser",t.data())}))},async setDateRange({state:e,commit:t},a){await i.RZ.doc(a.uid).update({date:a.date}),"admin"!=e.userData.role?t("setDateList",a.date):"admin"==e.userData.role&&t("setDateList",a)}},plugins:[(0,n.Z)()],strict:!1});return e}))}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,a),i.exports}a.m=e,(()=>{var e=[];a.O=(t,r,s,i)=>{if(!r){var n=1/0;for(c=0;c<e.length;c++){for(var[r,s,i]=e[c],o=!0,d=0;d<r.length;d++)(!1&i||n>=i)&&Object.keys(a.O).every((e=>a.O[e](r[d])))?r.splice(d--,1):(o=!1,i<n&&(n=i));if(o){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,s,i]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{52:"da0f0429",120:"e9be8983",123:"89d62d15",172:"d64bc17e",226:"bb1688bc",297:"6b743e1f",441:"d225af41",457:"ae10631f",649:"5835979f",681:"2e4abf51",735:"6b113d9b",758:"9283f309",819:"61f0a0fd",862:"248d35e8",977:"dcf75eb7"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"1e90bd76",736:"8ddbfebb"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="form1-quasar:";a.l=(r,s,i,n)=>{if(e[r])e[r].push(s);else{var o,d;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){o=l;break}}o||(d=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+i),o.src=r),e[r]=[s];var m=(t,a)=>{o.onerror=o.onload=null,clearTimeout(p);var s=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((e=>e(a))),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),d&&document.head.appendChild(o)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var i=new Promise(((a,r)=>s=e[t]=[a,r]));r.push(s[2]=i);var n=a.p+a.u(t),o=new Error,d=r=>{if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var i=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",o.name="ChunkLoadError",o.type=i,o.request=n,s[1](o)}};a.l(n,d,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var s,i,[n,o,d]=r,u=0;if(n.some((t=>0!==e[t]))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(d)var c=d(a)}for(t&&t(r);u<n.length;u++)i=n[u],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(c)},r=globalThis["webpackChunkform1_quasar"]=globalThis["webpackChunkform1_quasar"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(5982)));r=a.O(r)})();