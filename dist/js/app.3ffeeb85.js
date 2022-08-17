(()=>{"use strict";var e={4537:(e,t,r)=>{r.d(t,{Z:()=>p});r(6699),r(5684),r(6647),r(3710),r(1539),r(9714);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"results",staticStyle:{display:"table-caption"}},[t("b-card",{staticClass:"mb-2 card",attrs:{title:e.recipe.title,"img-src":e.recipe.image,"img-alt":"Image","img-top":"",tag:"article"}},[t("div",{staticClass:"features"},[t("b-list-group",{attrs:{flush:""}},[t("b-list-group-item",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+"   Time To Make: "+e._s(e.recipe.readyInMinutes)+" ")]),e.watched.includes(e.recipe.id.toString())?t("b-list-group-item",[t("b-icon",{attrs:{icon:"eye",scale:"1"}}),e._v("Watched before! ")],1):e._e(),e.recipe.vegan?t("b-list-group-item",[t("b-icon",{attrs:{icon:"check-circle",scale:"1",variant:"success"}}),e._v("For Vegans ")],1):e._e(),e.recipe.vegetarian?t("b-list-group-item",[t("b-icon",{attrs:{icon:"check-circle",scale:"1",variant:"success"}}),e._v("For Vegetarians ")],1):e._e(),e.recipe.glutenFree?t("b-list-group-item",[t("b-icon",{attrs:{icon:"check-circle",scale:"1",variant:"success"}}),e._v("Gluten Free ")],1):e._e()],1)],1),t("b-button",{attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}},variant:"primary"}},[e._v("Instructions ")]),e.favorites.includes(e.recipe.id.toString())?t("b-button",{attrs:{disabled:"",variant:"secondary"}},[e._v("Added!")]):t("b-button",{attrs:{variant:"secondary"},on:{click:function(t){return e.addToFavorites(e.recipe.id)}}},[e._v("Add to favorites")])],1)],1)},n=[],o=r(5957),s=r(6835),i=r(8534);const c={data:function(){return{}},props:{recipe:{type:Object,required:!0},favorites:{type:Array,required:!0},watched:{type:Array,required:!0}},methods:{addToFavorites:function(e){var t=this;return(0,i.Z)((0,s.Z)().mark((function r(){return(0,s.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,!t.$root.store.username){r.next=9;break}return r.next=4,t.axios.post(t.$root.store.server_domain+"/users/favorites",{recipeId:e});case 4:r.sent,t.$root.toast("Add to favorites","Recipe was added successfully","success"),t.getFavorites(),r.next=10;break;case 9:t.$root.toast("Add to favorites","You need to login to add recipes to favorites","info");case 10:r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()},getFavorites:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function t(){var r,a,n;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/favoritesId");case 3:a=t.sent,n=a.data,(r=e.favorites).push.apply(r,(0,o.Z)(n)),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},l=c;var u=r(1001),d=(0,u.Z)(l,a,n,!1,null,"11899e94",null);const p=d.exports},6276:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login ")]),t("div",{staticClass:"mt-2"},[e._v(" Don't have an account yet? "),t("router-link",{attrs:{to:"register"}},[e._v(" Register here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},n=[],o=r(6835),s=r(8534),i=r(379);const c={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:i.C1},password:{required:i.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,a=t.$error;return r?!a:null},Login:function(){var e=this;return(0,s.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/Login",{username:e.form.username,password:e.form.password});case 3:t.sent,console.log(e.$root.store.login),e.$root.store.login(e.form.username),e.$router.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},l=c;var u=r(1001),d=(0,u.Z)(l,a,n,!1,null,"d8a152b8",null);const p=d.exports},7064:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var a=r(144),n=r(1939),o=r.n(n),s=r(9669),i=r.n(s),c=r(869),l=r(3017),u=(r(7024),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:{name:"main"}}},[t("img",{staticStyle:{width:"130px",height:"50px","object-fit":"cover",left:"1%"},attrs:{src:r(6732),width:"150",height:"100",alt:"logo"}})]),t("router-link",{attrs:{to:{name:"main"}}},[e._v("Home")]),e._v("       "),t("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),e._v("       "),t("router-link",{attrs:{to:{name:"about"}}},[e._v("About Us")]),e._v("       "),e.$root.store.username?t("span",[t("b-dropdown",{staticClass:"m-md-2",staticStyle:{"font-size":"x-large"},attrs:{id:"dropdown-1",text:"Personal",size:"lg",variant:"outline"}},[t("b-dropdown-item",[t("router-link",{attrs:{to:{name:"myrecipes"}}},[e._v("My Recipes")])],1),t("b-dropdown-item",[t("router-link",{attrs:{to:{name:"myfavorites"}}},[e._v("My Favorites")])],1),t("b-dropdown-item",[t("router-link",{attrs:{to:{name:"myfamily"}}},[e._v("My Family")])],1)],1),e._v("       Welcome back! "+e._s(e.$root.store.username)+"       "),t("b-button",{staticStyle:{"font-size":"x-large"},attrs:{pill:"",variant:"warning"},on:{click:e.Logout}},[e._v("Logout")])],1):t("span",[e._v(" Hello Guest!     "),t("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),e._v("       "),t("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")]),e._v("       ")],1),t("label",{staticClass:"toggle",staticStyle:{"font-family":"'Frank Ruhl Libre', Georgia, serif","font-size":"medium"}},[t("input",{staticStyle:{display:"left"},attrs:{type:"checkbox"},on:{click:function(t){return e.toggleDarkLight()}}}),t("span",{staticClass:"slider round"})])],1),t("router-view")],1)}),d=[];const p={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))},toggleDarkLight:function(){var e=document.body;e.classList.toggle("dark-mode")}}},m=p;var v=r(1001),f=(0,v.Z)(m,u,d,!1,null,null,null);const h=f.exports;r(8783),r(3948);var g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("div",{staticClass:"recipes"},[t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Explore these  recipes",random:"true"}}),e.$root.store.username?t("div",[t("RecipePreviewList",{class:{RandomRecipes:!1,blur:!e.$root.store.username,center:!0},staticStyle:{display:"grid"},attrs:{title:"Last Viewed Recipes",random:"false",disabled:""}})],1):t("div",[t("LoginPage")],1)],1)])},b=[],y=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),e._l(e.recipes,(function(r){return t("b-col",{key:r.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:r,favorites:e.favoritesRecipes,watched:e.watchedRecipes}})],1)})),t("div",{staticClass:"row"},[t("div",{staticClass:"col"},["true"===e.random?t("b-button",{staticClass:"center",staticStyle:{display:"flex","justify-content":"center",left:"45%"},attrs:{pill:"",variant:"primary"},on:{click:function(t){return e.updateRecipes()}}},[e._v("More Recipes")]):e._e()],1)])],2)},w=[],_=r(6835),k=r(5957),x=r(8534),$=r(4537);const Z={name:"RecipePreviewList",components:{RecipePreview:$.Z},props:{title:{type:String,required:!0},random:{type:String,required:!0}},data:function(){return{recipes:[],favoritesRecipes:[],watchedRecipes:[]}},mounted:function(){this.getFavorites(),this.getWatched(),"true"==this.random?this.updateRecipes():this.getLastViewed()},methods:{updateRecipes:function(){var e=this;return(0,x.Z)((0,_.Z)().mark((function t(){var r,a,n;return(0,_.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("https://test-for-3-2.herokuapp.com/recipes/random");case 3:a=t.sent,n=a.data,e.recipes=[],(r=e.recipes).push.apply(r,(0,k.Z)(n.recipes)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},getLastViewed:function(){var e=this;return(0,x.Z)((0,_.Z)().mark((function t(){var r,a,n;return(0,_.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/lastViewedRecipes");case 3:a=t.sent,n=a.data,e.recipes=[],console.log("this.recipes",e.recipes),console.log("recipes",n),console.log("recipes.recipes",n.recipes),(r=e.recipes).push.apply(r,(0,k.Z)(n)),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},getFavorites:function(){var e=this;return(0,x.Z)((0,_.Z)().mark((function t(){var r,a,n;return(0,_.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/favoritesId");case 3:a=t.sent,n=a.data,(r=e.favoritesRecipes).push.apply(r,(0,k.Z)(n.recipes)),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getWatched:function(){var e=this;return(0,x.Z)((0,_.Z)().mark((function t(){var r,a,n;return(0,_.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/watched");case 3:a=t.sent,n=a.data,(r=e.watchedRecipes).push.apply(r,(0,k.Z)(n.recipes)),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},C=Z;var L=(0,v.Z)(C,y,w,!1,null,"351838af",null);const S=L.exports;var P=r(6276);const R={components:{RecipePreviewList:S,LoginPage:P["default"]}},E=R;var F=(0,v.Z)(E,g,b,!1,null,"19ddd742",null);const A=F.exports;var j=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticStyle:{padding:"25px"}},[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},O=[],T={},q=(0,v.Z)(T,j,O,!1,null,null,null);const I=q.exports;var M=[{path:"/",name:"main",component:A},{path:"/register",name:"register",component:function(){return r.e(79).then(r.bind(r,1079))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(r.bind(r,6276))}},{path:"/search",name:"search",component:function(){return Promise.all([r.e(486),r.e(980)]).then(r.bind(r,1980))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return r.e(803).then(r.bind(r,5803))}},{path:"/myrecipes",name:"myrecipes",component:function(){return Promise.all([r.e(486),r.e(875)]).then(r.bind(r,2875))}},{path:"/myrecipes/:name",name:"myrecipe",component:function(){return r.e(456).then(r.bind(r,6456))}},{path:"/myfavorites",name:"myfavorites",component:function(){return Promise.all([r.e(486),r.e(717)]).then(r.bind(r,8717))}},{path:"/myfamily",name:"myfamily",component:function(){return Promise.all([r.e(486),r.e(828)]).then(r.bind(r,8828))}},{path:"/about",name:"about",component:function(){return r.e(876).then(r.bind(r,9876))}},{path:"*",name:"notFound",component:I}];const U=M;var D=r(8345),N=r(8620),V=r(508),G=r(7563),H=r(7419),z=r(1869),W=r(295),B=r(3090),Y=r(794),K=r(4063),X=r(8793),J=r(7772);i().defaults.withCredentials=!0,a["default"].use(c.XG7),a["default"].use(l.A7),a["default"].use(D.Z);var Q=new D.Z({routes:U});[V.E,G.w6,H.g,z.SY,W.xL,B.u3,Y.v5,K.F,X.m$,J.A6].forEach((function(e){return a["default"].use(e)})),a["default"].use(N.ZP),i().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),a["default"].use(o(),i()),a["default"].config.productionTip=!1;var ee={username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0},server_domain:"https://recipeideas.cs.bgu.ac.il"};console.log(ee),new a["default"]({router:Q,data:function(){return{store:ee}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:a,autoHideDelay:3e3})}},render:function(e){return e(h)}}).$mount("#app")},6732:(e,t,r)=>{e.exports=r.p+"img/homepage_icon+logo.a2cab3b1.png"}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,(()=>{var e=[];r.O=(t,a,n,o)=>{if(!a){var s=1/0;for(u=0;u<e.length;u++){for(var[a,n,o]=e[u],i=!0,c=0;c<a.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{79:"24b6f568",456:"a14ea962",486:"86494a5c",717:"7fe72cd0",803:"76b4ea0b",828:"342de205",875:"b0826320",876:"99594bff",980:"0d0cdb44"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{79:"b86f0566",456:"fe5a7507",717:"6245dd45",803:"9bfbe244",828:"e7bd11ac",875:"cbcd3a8b",980:"bced1dc0"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-3-3:";r.l=(a,n,o,s)=>{if(e[a])e[a].push(n);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[n];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(m);var n=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,n.parentNode.removeChild(n),a(c)}};return n.onerror=n.onload=o,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=r[a],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){n=s[a],o=n.getAttribute("data-href");if(o===e||o===t)return n}},a=a=>new Promise(((n,o)=>{var s=r.miniCssF(a),i=r.p+s;if(t(s,i))return n();e(a,i,n,o)})),n={143:0};r.f.miniCss=(e,t)=>{var r={79:1,456:1,717:1,803:1,828:1,875:1,980:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=a(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,a)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var o=new Promise(((r,a)=>n=e[t]=[r,a]));a.push(n[2]=o);var s=r.p+r.u(t),i=new Error,c=a=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[s,i,c]=a,l=0;if(s.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(a);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},a=self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[998],(()=>r(7064)));a=r.O(a)})();
//# sourceMappingURL=app.3ffeeb85.js.map