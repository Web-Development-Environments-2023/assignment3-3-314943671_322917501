(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[836],{5836:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var n=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",[e._v(e._s(e.recipe.title))]),r("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("div",{staticClass:"mb-3"},[r("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),r("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")])]),e._v(" Ingredients: "),r("ul",e._l(e.recipe.extendedIngredients,(function(t,n){return r("li",{key:n+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]),r("div",{staticClass:"wrapped"},[e._v(" Instructions: "),r("ol",e._l(e.recipe._instructions,(function(t){return r("li",{key:t.number},[e._v(" "+e._s(t.step)+" ")])})),0)])])])]):e._e()])},a=[],i=t(6835),s=t(5957),c=t(8534);t(4916),t(5306),t(5827),t(1539),t(1249),t(8309),t(2222);const o={data:function(){return{recipe:null}},created:function(){var e=this;return(0,c.Z)((0,i.Z)().mark((function r(){var t,n,a,c,o,u,l,v,p,d,f;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.prev=1,r.next=4,e.axios.get(e.$root.store.server_domain+"/recipes/info",{params:{id:e.$route.params.recipeId}});case 4:t=r.sent,200!==t.status&&e.$router.replace("/NotFound"),r.next=13;break;case 8:return r.prev=8,r.t0=r["catch"](1),console.log("error.response.status",r.t0.response.status),e.$router.replace("/NotFound"),r.abrupt("return");case 13:n=t.data.recipe,a=n.analyzedInstructions,c=n.instructions,o=n.extendedIngredients,u=n.aggregateLikes,l=n.readyInMinutes,v=n.image,p=n.title,d=a.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,r){return[].concat((0,s.Z)(e),(0,s.Z)(r))}),[]),f={instructions:c,_instructions:d,analyzedInstructions:a,extendedIngredients:o,aggregateLikes:u,readyInMinutes:l,image:v,title:p},e.recipe=f,r.next=22;break;case 19:r.prev=19,r.t1=r["catch"](0),console.log(r.t1);case 22:case"end":return r.stop()}}),r,null,[[0,19],[1,8]])})))()}},u=o;var l=t(1001),v=(0,l.Z)(u,n,a,!1,null,"59ac6e8a",null);const p=v.exports},1530:(e,r,t)=>{"use strict";var n=t(8710).charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},3671:(e,r,t)=>{var n=t(9662),a=t(7908),i=t(8361),s=t(6244),c=TypeError,o=function(e){return function(r,t,o,u){n(t);var l=a(r),v=i(l),p=s(l),d=e?p-1:0,f=e?-1:1;if(o<2)while(1){if(d in v){u=v[d],d+=f;break}if(d+=f,e?d<0:p<=d)throw c("Reduce of empty array with no initial value")}for(;e?d>=0:p>d;d+=f)d in v&&(u=t(u,v[d],d,l));return u}};e.exports={left:o(!1),right:o(!0)}},7207:e=>{var r=TypeError,t=9007199254740991;e.exports=function(e){if(e>t)throw r("Maximum allowed index exceeded");return e}},7007:(e,r,t)=>{"use strict";t(4916);var n=t(1702),a=t(8052),i=t(2261),s=t(7293),c=t(5112),o=t(8880),u=c("species"),l=RegExp.prototype;e.exports=function(e,r,t,v){var p=c(e),d=!s((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),f=d&&!s((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[u]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!d||!f||t){var g=n(/./[p]),h=r(p,""[e],(function(e,r,t,a,s){var c=n(e),o=r.exec;return o===i||o===l.exec?d&&!s?{done:!0,value:g(r,t,a)}:{done:!0,value:c(t,r,a)}:{done:!1}}));a(String.prototype,e,h[0]),a(l,p,h[1])}v&&o(l[p],"sham",!0)}},647:(e,r,t)=>{var n=t(1702),a=t(7908),i=Math.floor,s=n("".charAt),c=n("".replace),o=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,v,p){var d=t+e.length,f=n.length,g=l;return void 0!==v&&(v=a(v),g=u),c(p,g,(function(a,c){var u;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return o(r,0,t);case"'":return o(r,d);case"<":u=v[o(c,1,-1)];break;default:var l=+c;if(0===l)return a;if(l>f){var p=i(l/10);return 0===p?a:p<=f?void 0===n[p-1]?s(c,1):n[p-1]+s(c,1):a}u=n[l-1]}return void 0===u?"":u}))}},7651:(e,r,t)=>{var n=t(6916),a=t(9670),i=t(614),s=t(4326),c=t(2261),o=TypeError;e.exports=function(e,r){var t=e.exec;if(i(t)){var u=n(t,e,r);return null!==u&&a(u),u}if("RegExp"===s(e))return n(c,e,r);throw o("RegExp#exec called on incompatible receiver")}},2222:(e,r,t)=>{"use strict";var n=t(2109),a=t(7293),i=t(3157),s=t(111),c=t(7908),o=t(6244),u=t(7207),l=t(6135),v=t(5417),p=t(1194),d=t(5112),f=t(7392),g=d("isConcatSpreadable"),h=f>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),x=p("concat"),m=function(e){if(!s(e))return!1;var r=e[g];return void 0!==r?!!r:i(e)},_=!h||!x;n({target:"Array",proto:!0,arity:1,forced:_},{concat:function(e){var r,t,n,a,i,s=c(this),p=v(s,0),d=0;for(r=-1,n=arguments.length;r<n;r++)if(i=-1===r?s:arguments[r],m(i))for(a=o(i),u(d+a),t=0;t<a;t++,d++)t in i&&l(p,d,i[t]);else u(d+1),l(p,d++,i);return p.length=d,p}})},1249:(e,r,t)=>{"use strict";var n=t(2109),a=t(2092).map,i=t(1194),s=i("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5827:(e,r,t)=>{"use strict";var n=t(2109),a=t(3671).left,i=t(9341),s=t(7392),c=t(5268),o=i("reduce"),u=!c&&s>79&&s<83;n({target:"Array",proto:!0,forced:!o||u},{reduce:function(e){var r=arguments.length;return a(this,e,r,r>1?arguments[1]:void 0)}})},5306:(e,r,t)=>{"use strict";var n=t(2104),a=t(6916),i=t(1702),s=t(7007),c=t(7293),o=t(9670),u=t(614),l=t(9303),v=t(7466),p=t(1340),d=t(4488),f=t(1530),g=t(8173),h=t(647),x=t(7651),m=t(5112),_=m("replace"),y=Math.max,k=Math.min,$=i([].concat),b=i([].push),w=i("".indexOf),I=i("".slice),C=function(e){return void 0===e?e:String(e)},M=function(){return"$0"==="a".replace(/./,"$0")}(),E=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),Z=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,r,t){var i=E?"$":"$0";return[function(e,t){var n=d(this),i=void 0==e?void 0:g(e,_);return i?a(i,e,n,t):a(r,p(n),e,t)},function(e,a){var s=o(this),c=p(e);if("string"==typeof a&&-1===w(a,i)&&-1===w(a,"$<")){var d=t(r,s,c,a);if(d.done)return d.value}var g=u(a);g||(a=p(a));var m=s.global;if(m){var _=s.unicode;s.lastIndex=0}var M=[];while(1){var E=x(s,c);if(null===E)break;if(b(M,E),!m)break;var Z=p(E[0]);""===Z&&(s.lastIndex=f(c,v(s.lastIndex),_))}for(var A="",R=0,L=0;L<M.length;L++){E=M[L];for(var S=p(E[0]),T=y(k(l(E.index),c.length),0),z=[],F=1;F<E.length;F++)b(z,C(E[F]));var N=E.groups;if(g){var O=$([S],z,T,c);void 0!==N&&b(O,N);var j=p(n(a,void 0,O))}else j=h(S,c,T,z,N,a);T>=R&&(A+=I(c,R,T)+j,R=T+S.length)}return A+I(c,R)}]}),!Z||!M||E)}}]);
//# sourceMappingURL=836.a72bd58f.js.map