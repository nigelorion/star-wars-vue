(function(t){function e(e){for(var n,s,p=e[0],i=e[1],l=e[2],c=0,h=[];c<p.length;c++)s=p[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,p=1;p<a.length;p++){var i=a[p];0!==o[i]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],i=p.push.bind(p);p.push=e,p=p.slice();for(var l=0;l<p.length;l++)e(p[l]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"445c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("router-view")],1)])},r=[],s={name:"App"},p=s,i=(a("5c0b"),a("2877")),l=Object(i["a"])(p,o,r,!1,null,null,null),u=l.exports,c=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t.loading?t._e():a("form",[a("div",{staticClass:"inputBox"},[a("label",{attrs:{for:"userInput"}},[t._v("characters")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput,expression:"userInput"}],attrs:{type:"text",name:"userInput",value:"hjfdhjg"},domProps:{value:t.userInput},on:{input:function(e){e.target.composing||(t.userInput=e.target.value)}}})]),a("button",{on:{click:function(e){return e.preventDefault(),t.searchCall()}}},[t._v("search")]),a("button",{attrs:{type:"button"},on:{click:function(e){return t.randomSearch()}}},[t._v("random")])]),t.oops?a("div",[a("p",[t._v("oops! try a different search")])]):t._e(),t.loading?t._e():a("div",[a("h1",[t._v(t._s(t.peopleData.name))]),a("p",[t._v("birth year: "),a("b",[t._v(t._s(t.peopleData.birth_year))])]),a("p",[t._v("eye color: "),a("b",[t._v(t._s(t.peopleData.eye_color))])]),a("p",[t._v("gender: "),a("b",[t._v(t._s(t.peopleData.gender))])]),a("p",[t._v("hair color: "),a("b",[t._v(t._s(t.peopleData.hair_color))])]),a("p",[t._v("height: "),a("b",[t._v(t._s(t.peopleData.height))])]),a("p",[t._v("homeworld: "),a("router-link",{attrs:{to:"/planet"}},[t._v(t._s(t.planetData.name))])],1),a("p",[t._v("mass: "),a("b",[t._v(t._s(t.peopleData.mass))])]),a("p",[t._v("skin color: "),a("b",[t._v(t._s(t.peopleData.skin_color))])]),a("p",[t._v("species: "),a("b",[t._v(t._s(t.speciesData.name))])]),a("p",[t._v("language: "),a("b",[t._v(t._s(t.speciesData.language))])])])])},f=[],d=(a("7f7f"),a("bc3a")),v=a.n(d),_={name:"Home",computed:{peopleData:function(){return this.$store.state.peopleData},planetData:function(){return this.$store.state.planetData}},data:function(){return{result:"",randomNum:1,userInput:"",resultsState:!0,oops:!1,type:"people",peopleShips:"",shipsData:"",loading:!1,speciesURL:"",speciesData:"",planetURL:""}},methods:{searchCall:function(){var t=this;this.oops=!1,this.loading=!0,v.a.get("https://swapi.dev/api/"+this.type+"/?search="+this.userInput).then((function(e){t.result=e.data.results[0],t.userInput=t.result.name,t.$store.state.peopleData=t.result,console.log(t.result),null==t.result?(t.oops=!0,t.resultsState=!1):(t.resultsState=!0,t.oops=!1,t.speciesURL=t.result.species[0],t.speciesSearch(),t.planetURL=t.result.homeworld,t.planetSearch()),t.loading=!1})).catch((function(e){e&&(t.oops=!0,t.loading=!1)}))},randomSearch:function(){var t=this;this.oops=!1,this.loading=!0,this.randomGen(),v.a.get("https://swapi.dev/api/people/"+this.randomNum).then((function(e){t.result=e.data,t.userInput=t.result.name,t.$store.state.peopleData=t.result,t.speciesURL=t.result.species[0],t.speciesSearch(),t.planetURL=t.result.homeworld,t.planetSearch(),t.loading=!1})).catch((function(e){e&&(t.oops=!0,t.loading=!1),console.log(e)}))},ships:function(){var t=this;v.a.get(this.peopleShips).then((function(e){console.log(e.data),t.shipsData=e.data})).catch((function(t){console.log(t)}))},speciesSearch:function(){var t=this;v.a.get(this.speciesURL).then((function(e){console.log(e.data),t.speciesData=e.data})).catch((function(t){console.log(t)}))},planetSearch:function(){var t=this;v.a.get(this.planetURL).then((function(e){console.log(e.data),t.$store.state.planetData=e.data})).catch((function(t){console.log(t)}))},randomGen:function(){this.randomNum=Math.floor(87*Math.random())+1}}},m=_,g=(a("6dce"),Object(i["a"])(m,h,f,!1,null,"ca481772",null)),b=g.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("router-link",{attrs:{to:"/"}},[t._v("back")]),a("h1",[t._v(t._s(t.planetData.name))]),a("p",[t._v("climate: "),a("b",[t._v(t._s(t.planetData.climate))])]),a("p",[t._v("diameter: "),a("b",[t._v(t._s(t.planetData.diameter))])]),a("p",[t._v("population: "),a("b",[t._v(t._s(t.planetData.population))])]),a("p",[t._v("gravity: "),a("b",[t._v(t._s(t.planetData.gravity))])]),a("p",[t._v("terrain: "),a("b",[t._v(t._s(t.planetData.terrain))])]),a("p",[t._v("water: "),a("b",[t._v(t._s(t.planetData.surface_water))])])],1)},y=[],w={name:"Planet",computed:{planetData:function(){return this.$store.state.planetData}}},S=w,j=Object(i["a"])(S,D,y,!1,null,"4d9bed2f",null),O=j.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("h1",[t._v(t._s(t.shipData.name))])])},$=[],k={name:"Ship",computed:{shipData:function(){return this.$store.state.shipData}}},I=k,P=Object(i["a"])(I,x,$,!1,null,"63c38d8a",null),L=P.exports;n["a"].use(c["a"]);var R=new c["a"]({routes:[{path:"/",name:"Home",component:b},{path:"/planet",name:"Planet",component:O},{path:"/ship",name:"Ship",component:L}]}),U=a("2f62");n["a"].use(U["a"]);var C=new U["a"].Store({state:{planetData:{},shipData:{},peopleData:{},userInput:"",testingData:"data is working!"},mutations:{update:function(t){this.planetData=t}}});n["a"].config.productionTip=!1,new n["a"]({router:R,store:C,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("e332")},"6dce":function(t,e,a){"use strict";a("445c")},e332:function(t,e,a){}});
//# sourceMappingURL=app.177f30b4.js.map