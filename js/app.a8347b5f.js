(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-calculator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i=(n("caad"),{class:"grid-container"}),o={class:"grid-item input-area"},a={key:0,class:"nice"};function c(t,e,n,c,s,u){var p=Object(r["l"])("calc-butt");return Object(r["j"])(),Object(r["f"])("div",i,[Object(r["g"])("span",o,Object(r["m"])(t.input||0),1),(Object(r["j"])(!0),Object(r["f"])(r["a"],null,Object(r["k"])(t.digits,(function(e){return Object(r["j"])(),Object(r["d"])(p,{class:Object(r["i"])({"grid-item":!0,"wide-button":"0"==e,"gray-button":e>="0"&&e<="9"||"."==e,"darkgray-button":"+/-"==e||"AC"==e||"%"==e,"light-button":["+","-","x","/","="].includes(e),"active-operator":e==t.operator}),key:e,label:e,onClick:function(t){return u.inputDigit(e)}},null,8,["class","label","onClick"])})),128)),Object(r["h"])(r["b"],{name:"fade"},{default:Object(r["n"])((function(){return[t.nice?(Object(r["j"])(),Object(r["f"])("span",a,"nice!")):Object(r["e"])("",!0)]})),_:1})])}n("a9e3"),n("d3b7"),n("25f0");function s(t,e,n,i,o,a){return Object(r["j"])(),Object(r["f"])("button",null,Object(r["m"])(n.label),1)}var u={name:"CalcButt",props:["label"]},p=n("6b0d"),d=n.n(p);const l=d()(u,[["render",s]]);var h=l,b={name:"App",components:{CalcButt:h},data:function(){return{digits:["AC","+/-","%","/","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="],input:"",operand1:0,operand2:void 0,operator:void 0,shouldReset:!1,nice:!1}},computed:{numeric_input:function(){return Number(this.input)}},methods:{inputDigit:function(t){var e=this;switch(t){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":this.shouldReset&&(this.input=""),this.input+=t,this.shouldReset=!1;break;case"x":case"+":case"-":case"/":this.operator=t,this.operand1=this.numeric_input,this.shouldReset=!0;break;case"=":this.operand1&&this.operator&&(this.operand2=this.numeric_input,this.input=this.compute(),this.operand1=this.numeric_input,this.operand2=void 0,this.operator=void 0,this.shouldReset=!0,"69"==this.input&&(this.nice=!0,setTimeout((function(){e.nice=!1}),800)));break;case"AC":this.operator=void 0,this.operand1=0,this.operand2=void 0,this.input=void 0,this.shouldReset=!0;break;case"+/-":this.input=(-this.numeric_input).toString();break;case"%":break}},round:function(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n},compute:function(){if(!(this.operand1&&this.operand2&&this.operator))return 0;var t=0;switch(this.operator){case"+":t=this.operand1+this.operand2;break;case"-":t=this.operand1-this.operand2;break;case"x":t=this.operand1*this.operand2;break;case"/":t=this.operand1/this.operand2;break;default:return 0}return this.round(t,6)}}};n("d709");const f=d()(b,[["render",c]]);var j=f;Object(r["c"])(j).mount("#app")},5959:function(t,e,n){},d709:function(t,e,n){"use strict";n("5959")}});
//# sourceMappingURL=app.a8347b5f.js.map