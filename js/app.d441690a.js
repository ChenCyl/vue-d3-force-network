(function(t){function e(e){for(var n,r,a=e[0],l=e[1],d=e[2],h=0,u=[];h<a.length;h++)r=a[h],o[r]&&u.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var c=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("3d57"),o=i.n(n);o.a},"23a3":function(t,e,i){var n=i("95b4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("85cb").default;o("d3969d80",n,!0,{sourceMap:!1,shadowMode:!1})},"3d57":function(t,e,i){var n=i("b5fe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("85cb").default;o("d0829194",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("6e6d"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("network",{attrs:{nodeList:t.nodes,linkList:t.links}})],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{width:t.svgSize.width+"px",height:t.svgSize.height+"px"},attrs:{id:"network"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.linkTextVisible,expression:"linkTextVisible"}],staticClass:"linkText",style:t.linkTextPosition,domProps:{textContent:t._s(t.linkTextContent)}}),i("svg",{style:{"background-color":t.theme.bgcolor},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.svgSize.width,height:t.svgSize.height},on:{click:t.clickEle,mouseover:function(e){return e.preventDefault(),t.svgMouseover(e)},mouseout:t.svgMouseout}},[i("g",{attrs:{id:"container"}},[i("g",t._l(t.links,function(e){return i("g",{key:e.index},[i("line",{class:e[t.linkTypeKey]+" "+e.selected+" link element",attrs:{stroke:t.theme.linkStroke,"stroke-width":t.linkWidth}}),t.showLinkText?i("text",{staticClass:"link-text",attrs:{dx:"0",dy:"0",fill:t.theme.textFill,"font-size":t.linkTextFrontSize}},[t._v(t._s(e[t.linkTextKey]))]):t._e()])}),0),i("g",{attrs:{id:"node-group"}},[t._l(t.nodes,function(e){return i("g",{key:e.index},[i("circle",{class:e[t.nodeTypeKey]+" "+(e.showText?"selected":"")+" node element",attrs:{fill:t.nodeColor(e[t.nodeTypeKey]),"stroke-width":-1==t.highlightNodes.indexOf(e.id)?3:10,stroke:-1==t.highlightNodes.indexOf(e.id)?t.theme.nodeStroke:"gold",r:t.nodeSize}}),i("text",{directives:[{name:"show",rawName:"v-show",value:e.showText,expression:"node.showText"}],staticClass:"node-text",attrs:{dx:t.nodeSize+5,dy:"0",fill:t.theme.textFill,"font-size":t.nodeTextFontSize}},[t._v(t._s(e[t.nodeTextKey]))])])}),i("g")],2)])])])},a=[],l=i("c5cf");DOMTokenList.prototype.indexOf=Array.prototype.indexOf;var d={name:"network",props:{nodeList:Array,linkList:Array,nodeSize:{type:Number,default:14},nodeTextKey:{type:String,default:"id"},nodeTypeKey:{type:String,default:"group"},nodeTextFontSize:{type:Number,default:14},linkWidth:{type:Number,default:2},showLinkText:{type:Boolean,default:!1},linkTextKey:{type:String,default:"value"},linkTypeKey:{type:String,default:"type"},linkTextFrontSize:{type:Number,default:10},linkDistance:{type:Number,default:50},svgSize:{type:Object,default:()=>{return{width:window.innerWidth,height:window.innerHeight}}},svgTheme:{type:String,default:"light"},bodyStrength:{type:Number,default:-150},highlightNodes:{type:Array,default:()=>{return[]}}},data(){return{selection:{links:[],nodes:[]},pinned:[],force:null,zoom:l["k"](),nodeColor:l["g"](l["h"]),linkTextVisible:!1,linkTextPosition:{top:0,left:0},linkTextContent:""}},computed:{nodes(){let t=this.nodeList.slice(),e=[];return t=t.filter(t=>{return-1===e.indexOf(t.id)&&(e.push(t.id),!0)}),t},links(){return this.linkList},theme(){return"light"===this.svgTheme?{bgcolor:"white",nodeStroke:"white",linkStroke:"lightgray",textFill:"black"}:{bgcolor:"black",nodeStroke:"white",linkStroke:"rgba(200,200,200)",textFill:"white"}}},watch:{bodyStrength:function(){this.initData(),this.$nextTick(function(){this.initDragTickZoom()})},linkDistance:function(){this.initData(),this.$nextTick(function(){this.initDragTickZoom()})},nodes:function(){this.initData(),this.$nextTick(function(){this.initDragTickZoom()})}},created(){this.initData()},mounted(){this.initDragTickZoom()},methods:{initData(){this.force=l["f"](this.nodes).force("link",l["d"](this.links).id(t=>t.id).distance(this.linkDistance)).force("charge",l["e"]().strength(this.bodyStrength)).force("center",l["c"](this.svgSize.width/2,this.svgSize.height/2))},initDragTickZoom(){l["j"](".node").call(this.drag(this.force)),this.force.on("tick",()=>{l["j"](".link").data(this.links).attr("x1",t=>t.source.x).attr("y1",t=>t.source.y).attr("x2",t=>t.target.x).attr("y2",t=>t.target.y),l["j"](".node").data(this.nodes).attr("cx",t=>t.x).attr("cy",t=>t.y),l["j"](".node-text").data(this.nodes).attr("x",t=>t.x).attr("y",t=>t.y),l["j"](".link-text").data(this.links).attr("x",t=>(t.source.x+t.target.x)/2).attr("y",t=>(t.source.y+t.target.y)/2)}),this.zoom.scaleExtent([.1,4]).on("zoom",this.zoomed),l["i"]("svg").call(this.zoom).on("dblclick.zoom",null)},clickLink(t){this.$emit("clickLink",t,t.target.__data__)},clickNode(t){0===this.pinned.length?this.pinnedState(t):(l["j"](".element").style("opacity",.2),this.pinned=[]),this.$emit("clickNode",t,t.target.__data__)},clickEle(t){"circle"===t.target.tagName?this.clickNode(t):"line"===t.target.tagName&&this.clickLink(t)},svgMouseover(t){"circle"===t.target.nodeName?(0===this.pinned.length&&this.selectedState(t),this.$forceUpdate(),this.$emit("hoverNode",t,t.target.__data__)):"line"===t.target.nodeName&&(this.linkTextPosition={left:t.clientX+"px",top:t.clientY-50+"px"},this.linkTextContent=t.target.__data__[this.linkTextKey],this.linkTextVisible=!0,this.$emit("hoverLink",t,t.target.__data__))},svgMouseout(t){this.linkTextVisible=!1,"circle"===t.target.nodeName&&(0===this.pinned.length&&this.noSelectedState(t),this.$forceUpdate())},selectedState(t){t.target.__data__.showText=!0,t.target.classList.add("selected"),this.selection.nodes.push(t.target.__data__),this.lightNeibor(t.target.__data__),l["j"](".element").style("opacity",.2)},noSelectedState(t){t.target.__data__.showText=!1,this.darkenNerbor(),l["j"](".element").style("opacity",1)},pinnedState(t){this.pinned.push(t.target.__data__.index),l["j"](".element").style("opacity",.05)},lightNeibor(t){this.links.forEach(e=>{e.source.index===t.index&&(e.selected="selected",this.selection.links.push(e),this.selection.nodes.push(e.target),this.lightNode(e.target)),e.target.index===t.index&&(e.selected="selected",this.selection.links.push(e),this.selection.nodes.push(e.source),this.lightNode(e.source))})},lightNode(t){this.nodes.forEach(e=>{e.index===t.index&&(e.showText=!0)})},darkenNerbor(){this.links.forEach(t=>{this.selection.links.forEach(e=>{e.id===t.id&&(t.selected="")})}),this.nodes.forEach(t=>{this.selection.nodes.forEach(e=>{e.id===t.id&&(t.showText=!1)})}),this.selection.nodes=[],this.selection.links=[]},zoomed(){l["i"]("#container").attr("transform","translate("+l["b"].transform.x+","+l["b"].transform.y+") scale("+l["b"].transform.k+")")},drag(t){function e(e){l["b"].active||t.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}function i(t){t.fx=l["b"].x,t.fy=l["b"].y}function n(e){l["b"].active||t.alphaTarget(0),e.fx=null,e.fy=null}return l["a"]().on("start",e).on("drag",i).on("end",n)}}},c=d,h=(i("bff2"),i("17cc")),u=Object(h["a"])(c,r,a,!1,null,"3b1097f2",null),f=u.exports,p=i("f753"),g=i.n(p),k={name:"app",components:{Network:f},data(){return{nodes:[],links:[]}},created(){g.a.get("/example.json").then(t=>{this.nodes=t.data.nodes,this.links=t.data.links}).catch(t=>console.log(t))}},x=k,y=(i("034f"),Object(h["a"])(x,o,s,!1,null,null,null)),b=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},"95b4":function(t,e,i){e=t.exports=i("690e")(!1),e.push([t.i,".element[data-v-3b1097f2]{-webkit-transition:opacity .5s ease;transition:opacity .5s ease}.selected[data-v-3b1097f2]{opacity:1!important}.link[data-v-3b1097f2],.node[data-v-3b1097f2]{cursor:pointer}.linkText[data-v-3b1097f2]{position:absolute;z-index:10;background-color:rgba(75,75,75,.596);border-radius:10px;color:#fff;padding:10px}",""])},b5fe:function(t,e,i){e=t.exports=i("690e")(!1),e.push([t.i,"body{margin:0}",""])},bff2:function(t,e,i){"use strict";var n=i("23a3"),o=i.n(n);o.a}});
//# sourceMappingURL=app.d441690a.js.map