webpackJsonp([1],{"F3r/":function(t,e){},"H6K/":function(t,e){},Kcvw:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},s,!1,function(t){i("Kcvw")},null,null).exports,a=i("/ocq"),c={name:"Item",props:{item:{type:Object,default:function(){return{title:"",id:-1}}}},methods:{addItem:function(t){this.$store.commit("ADD_ITEM",t)}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),i("button",{on:{click:function(e){t.addItem(t.item.id)}}},[t._v("ADD TO CART")])])},staticRenderFns:[]};var u=i("VU/8")(c,o,!1,function(t){i("eWvO")},"data-v-4aec2c94",null).exports,m={name:"TitleBar",props:{title:{type:String,default:""}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.title))]),this._v(" "),e("div",{staticClass:"divider"}),this._v(" "),e("div",{staticClass:"divider"})])},staticRenderFns:[]};var d=i("VU/8")(m,l,!1,function(t){i("ekf3")},"data-v-f6fed4d2",null).exports,v={name:"RouterButton",props:{text:{type:String,default:""},path:{type:String,default:""}}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("router-link",{staticClass:"router-button",attrs:{tag:"button",to:this.path}},[this._v("\n  "+this._s(this.text)+"\n")])},staticRenderFns:[]};var p=i("VU/8")(v,f,!1,function(t){i("TF5h")},"data-v-779dcbe2",null).exports,h={name:"Home",components:{"title-bar":d,"router-button":p,item:u},computed:{items:function(){return this.$store.state.items},cartCounts:function(){return"Cart ("+this.$store.getters.cartProducts+")"}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("header",[e("title-bar",{attrs:{title:"Home"}})],1),this._v(" "),e("div",{staticClass:"items"},this._l(this.items,function(t){return e("div",{key:t.id},[e("item",{staticClass:"item",attrs:{item:t}})],1)})),this._v(" "),e("router-button",{attrs:{text:this.cartCounts,path:"/cart"}})],1)},staticRenderFns:[]};var b=i("VU/8")(h,_,!1,function(t){i("H6K/")},"data-v-e5c62296",null).exports,C={name:"CartItem",props:{count:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100}},methods:{minus:function(){this.count>this.min&&this.$emit("update",this.count-1)},plus:function(){this.count<this.max&&this.$emit("update",this.count+1)}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"label-spinner"},[i("button",{on:{click:t.minus}},[t._v("-")]),t._v(" "),i("span",[t._v(t._s(t.count))]),t._v(" "),i("button",{on:{click:t.plus}},[t._v("+")])])},staticRenderFns:[]};var x={name:"CartItem",components:{"label-spinner":i("VU/8")(C,E,!1,function(t){i("F3r/")},"data-v-362c5b62",null).exports},props:{item:{type:Object,default:function(){return{title:"",id:-1,count:0}}}},methods:{updateCount:function(t){this.$store.commit("UPDATE_COUNT",{id:this.item.id,count:t})},remove:function(){this.$store.commit("REMOVE_ITEM",this.item.id)}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-item"},[t._v("\n  "+t._s(t.item.title)+"\n  "),i("div",{staticClass:"list-item-left"},[i("label-spinner",{attrs:{min:1,max:9,count:t.item.count},on:{update:t.updateCount}}),t._v(" "),i("button",{staticClass:"remove-button",on:{click:function(e){t.remove(t.item.id)}}},[t._v("Delete")])],1)])},staticRenderFns:[]};var I={name:"Cart",components:{"title-bar":d,"router-button":p,"list-item":i("VU/8")(x,$,!1,function(t){i("UgbM")},"data-v-33f7f944",null).exports},computed:{items:function(){return this.$store.state.cart.items}}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("header",[e("title-bar",{attrs:{title:"Cart"}})],1),this._v(" "),e("div",{staticClass:"items"},[e("div",{staticClass:"items-header"},[this._v("Product")]),this._v(" "),this._l(this.items,function(t){return e("div",{key:t.id},[e("list-item",{attrs:{item:t}})],1)})],2),this._v(" "),e("router-button",{attrs:{text:"Home",path:"/"}})],1)},staticRenderFns:[]};var U=i("VU/8")(I,T,!1,function(t){i("njHr")},"data-v-bd6900c2",null).exports;n.a.use(a.a);var g=new a.a({routes:[{path:"/",name:"Home",component:b},{path:"/cart",name:"Cart",component:U}]}),F=i("Dd8w"),R=i.n(F),k=i("NYxO");n.a.use(k.a);var y=new k.a.Store({state:{items:[{id:1,title:"Item A"},{id:2,title:"Item B"},{id:3,title:"Item C"},{id:4,title:"Item D"},{id:5,title:"Item E"},{id:6,title:"Item F"}],cart:{items:[]}},mutations:{ADD_ITEM:function(t,e){var i=t.items.find(function(t){return t.id===e});if(i){var n=t.cart.items.find(function(t){return t.id===e});n?n.count<9&&(n.count+=1):t.cart.items.push(R()({},i,{count:1}))}},UPDATE_COUNT:function(t,e){var i=e.id,n=e.count,s=t.cart.items.find(function(t){return t.id===i});s&&(s.count=n)},REMOVE_ITEM:function(t,e){for(var i=-1,n=0;n<t.cart.items.length;n+=1)if(t.cart.items[n].id===e){i=n;break}-1!==i&&t.cart.items.splice(i,1)}},getters:{cartProducts:function(t){return t.cart.items.length}}});n.a.config.productionTip=!1,new n.a({el:"#app",router:g,store:y,components:{App:r},template:"<App/>"})},TF5h:function(t,e){},UgbM:function(t,e){},eWvO:function(t,e){},ekf3:function(t,e){},njHr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.67d787ed0d09eeb44f69.js.map