(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[911],{7911:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});r(1249),r(7327),r(1539);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("br"),t("h1",{staticClass:"title"},[e._v("Search Page")]),t("div",[t("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[t("b-form-input",{attrs:{placeholder:"Search for recipe"},model:{value:e.form.query,callback:function(t){e.$set(e.form,"query",t)},expression:"form.query"}}),t("br"),t("br"),t("b-form-group",{attrs:{"label-cols-sm":"3",label:"cuisine:","label-for":"cuisine"}},[t("b-form-select",{attrs:{id:"cuisine",options:e.cuisines},model:{value:e.form.cuisine,callback:function(t){e.$set(e.form,"cuisine",t)},expression:"form.cuisine"}})],1),t("br"),t("b-form-group",{attrs:{"label-cols-sm":"3",label:"diet:","label-for":"diet"}},[t("b-form-select",{attrs:{id:"diet",options:e.diets},model:{value:e.form.diet,callback:function(t){e.$set(e.form,"diet",t)},expression:"form.diet"}})],1),t("br"),t("b-form-group",{attrs:{"label-cols-sm":"3",label:"intolerance:","label-for":"intolerance"}},[t("b-form-select",{attrs:{id:"intolerance",options:e.intolerances},model:{value:e.form.intolerance,callback:function(t){e.$set(e.form,"intolerance",t)},expression:"form.intolerance"}})],1),t("br"),t("b-form-group",{attrs:{"label-cols-sm":"3",id:"input-group-3",label:"Number of Results:","label-for":"input-3"}},[t("b-form-select",{attrs:{id:"input-3",options:e.foods},model:{value:e.form.numResults,callback:function(t){e.$set(e.form,"numResults",t)},expression:"form.numResults"}})],1),t("div",{staticClass:"row justify-content-center"},[t("b-button",{staticClass:"btn btn-default",attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),t("b-button",{staticClass:"btn btn-default",attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)],1),e.recipes.length>0?t("div",[e._v(" Order By: "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.sortby,expression:"sortby"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sortby=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"likes"}},[e._v("Likes")]),t("option",{attrs:{value:"timetomake"}},[e._v("Time to make")])]),t("br"),e._v(" Number of results: "+e._s(e.recipes.length)+" "),e._l(e.orderedRecipes,(function(r){return t("div",{key:r.id,staticClass:"results"},[t("b-card",{staticClass:"mb-2 card",attrs:{title:r.title,"img-src":r.image,"img-alt":"Image","img-top":"",tag:"article"}},[t("b-list-group",{attrs:{flush:""}},[t("b-list-group-item",[e._v("Number of Likes: "+e._s(r.aggregateLikes))]),t("b-list-group-item",[e._v("Time To Make: "+e._s(r.readyInMinutes))]),r.vegan?t("b-list-group-item",[t("b-icon",{attrs:{icon:"check-circle",scale:"1",variant:"success"}}),e._v("for vegans ")],1):e._e(),r.vegetarian?t("b-list-group-item",[t("b-icon",{attrs:{icon:"check-circle",scale:"1",variant:"success"}}),e._v("for vegetarians ")],1):e._e()],1),t("b-button",{attrs:{to:{name:"recipe",params:{recipeId:r.id}},variant:"primary"}},[e._v("Go To Instructions")])],1)],1)}))],2):e.searched?t("div",[e._v(" No recipes found. ")]):e._e()])},i=[],a=r(6835),n=r(8534),o=r(5957);r(8862),r(2222);const l=["African","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],c=["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"],u=["Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30"];var m=r(6486),f=r.n(m);const d={name:"SearchPage",components:{},data:function(){return{form:{query:"",cuisine:"",intolerance:"",diet:"",numResults:null},text:"",cuisines:[{value:null,text:"",disabled:!0}],diets:[{value:null,text:"",disabled:!0}],intolerances:[{value:null,text:"",disabled:!0}],foods:[{text:"",value:null},"5","10","15"],recipes:[],sortby:"likes",searched:!1}},mounted:function(){var e,t,r;(e=this.cuisines).push.apply(e,(0,o.Z)(l)),(t=this.diets).push.apply(t,(0,o.Z)(u)),(r=this.intolerances).push.apply(r,(0,o.Z)(c))},computed:{orderedRecipes:function(){return"timetomake"==this.sortby?f().orderBy(this.recipes,"readyInMinutes"):f().orderBy(this.recipes,"aggregateLikes","desc")}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form)),this.sendRequst()},sendRequst:function(){var e=this;return(0,n.Z)((0,a.Z)().mark((function t(){var r,s,i;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/recipes/search/query/".concat(e.form.query,"/amount/").concat(e.form.numResults),{cuisine:e.form.cuisine,intolerance:e.form.intolerance,diet:e.form.diet});case 3:s=t.sent,i=s.data.results,e.recipes=[],(r=e.recipes).push.apply(r,(0,o.Z)(i)),console.log(e.recipes),e.searched=!0,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},onReset:function(e){var t=this;e.preventDefault(),this.form.query="",this.form.cuisine="",this.form.intolerance="",this.form.diet="",this.form.numResults=null,this.searched=!1,this.show=!1,this.$nextTick((function(){t.show=!0}))}}},p=d;var b=r(1001),v=(0,b.Z)(p,s,i,!1,null,"2ca44869",null);const h=v.exports},7207:e=>{var t=TypeError,r=9007199254740991;e.exports=function(e){if(e>r)throw t("Maximum allowed index exceeded");return e}},2222:(e,t,r)=>{"use strict";var s=r(2109),i=r(7293),a=r(3157),n=r(111),o=r(7908),l=r(6244),c=r(7207),u=r(6135),m=r(5417),f=r(1194),d=r(5112),p=r(7392),b=d("isConcatSpreadable"),v=p>=51||!i((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),h=f("concat"),g=function(e){if(!n(e))return!1;var t=e[b];return void 0!==t?!!t:a(e)},y=!v||!h;s({target:"Array",proto:!0,arity:1,forced:y},{concat:function(e){var t,r,s,i,a,n=o(this),f=m(n,0),d=0;for(t=-1,s=arguments.length;t<s;t++)if(a=-1===t?n:arguments[t],g(a))for(i=l(a),c(d+i),r=0;r<i;r++,d++)r in a&&u(f,d,a[r]);else c(d+1),u(f,d++,a);return f.length=d,f}})},7327:(e,t,r)=>{"use strict";var s=r(2109),i=r(2092).filter,a=r(1194),n=a("filter");s({target:"Array",proto:!0,forced:!n},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},1249:(e,t,r)=>{"use strict";var s=r(2109),i=r(2092).map,a=r(1194),n=a("map");s({target:"Array",proto:!0,forced:!n},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=911.f19873f1.js.map