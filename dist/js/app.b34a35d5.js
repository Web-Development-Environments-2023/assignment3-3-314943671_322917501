(()=>{"use strict";var e={906:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var n=r(144),o=r(1939),i=r.n(o),a=r(9669),s=r.n(a),u=r(5002),c=(r(7024),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),e._v("| "),t("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),e._v("| "+e._s(!e.$root.store.username)+" "),e.$root.store.username?t("span",[e._v(" "+e._s(e.$root.store.username)+": "),t("button",{on:{click:e.Logout}},[e._v("Logout")]),e._v("| ")]):t("span",[e._v(" Guest: "),t("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),e._v("| "),t("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")]),e._v("| ")],1)],1),t("router-view")],1)}),l=[];const p={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},d=p;var v=r(1001),m=(0,v.Z)(d,c,l,!1,null,null,null);const f=m.exports;r(8783),r(3948);var h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Main Page")]),t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Randome Recipes"}}),e.$root.store.username?e._e():t("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")]),e._v(" "+e._s(!e.$root.store.username)+" "),t("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)},g=[],_=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},b=[],y=r(6835),w=r(5957),k=r(8534),C=function(){var e=this,t=e._self._c;return t("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"recipe-body"},[e.image_load?t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}):e._e()]),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])])])])},L=[];const P={mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(t){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0}}},x=P;var O=(0,v.Z)(x,C,L,!1,null,"979dc5d4",null);const R=O.exports,j={name:"RecipePreviewList",components:{RecipePreview:R},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,k.Z)((0,y.Z)().mark((function t(){var r,n,o;return(0,y.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 3:n=t.sent,o=n.data.recipes,e.recipes=[],(r=e.recipes).push.apply(r,(0,w.Z)(o)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},S=j;var E=(0,v.Z)(S,_,b,!1,null,"65c27bd3",null);const $=E.exports,T={components:{RecipePreviewList:$}},Z=T;var A=(0,v.Z)(Z,h,g,!1,null,"9bc62956",null);const F=A.exports;var N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},I=[],q={},M=(0,v.Z)(q,N,I,!1,null,null,null);const B=M.exports;var D=[{path:"/",name:"main",component:F},{path:"/register",name:"register",component:function(){return r.e(271).then(r.bind(r,2271))}},{path:"/login",name:"login",component:function(){return r.e(137).then(r.bind(r,137))}},{path:"/search",name:"search",component:function(){return r.e(110).then(r.bind(r,5110))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return r.e(836).then(r.bind(r,5836))}},{path:"*",name:"notFound",component:B}];const G=D;var H=r(8345),U=r(8620),V=r(508),Y=r(7563),K=r(7419),X=r(1869),z=r(295),J=r(3090),Q=r(794),W=r(4063),ee=r(8793),te=r(7772);n["default"].use(u.XG7),n["default"].use(H.Z);var re=new H.Z({routes:G});[V.E,Y.w6,K.g,X.SY,z.xL,J.u3,Q.v5,W.F,ee.m$,te.A6].forEach((function(e){return n["default"].use(e)})),n["default"].use(U.ZP),s().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(i(),s()),n["default"].config.productionTip=!1;var ne={username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(ne),new n["default"]({router:re,data:function(){return{store:ne}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(f)}}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],s=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{110:"d3d01303",137:"72713b23",271:"67d96d52",836:"a72bd58f"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{137:"828ea5ba",271:"b49cde70",836:"cf199a3d"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-3-3:";r.l=(n,o,i,a)=>{if(e[n])e[n].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var p=c[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+i){s=p;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[o];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(v);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),n(u)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){o=a[n],i=o.getAttribute("data-href");if(i===e||i===t)return o}},n=n=>new Promise(((o,i)=>{var a=r.miniCssF(n),s=r.p+a;if(t(a,s))return o();e(n,s,o,i)})),o={143:0};r.f.miniCss=(e,t)=>{var r={137:1,271:1,836:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=i);var a=r.p+r.u(t),s=new Error,u=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};r.l(a,u,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,s,u]=n,c=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var l=u(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(906)));n=r.O(n)})();
//# sourceMappingURL=app.b34a35d5.js.map