var Vt=Object.create;var Ie=Object.defineProperty;var yt=Object.getOwnPropertyDescriptor;var Dt=Object.getOwnPropertyNames;var kt=Object.getPrototypeOf,Mt=Object.prototype.hasOwnProperty;var Ut=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var _t=(t,e,a,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Dt(e))!Mt.call(t,o)&&o!==a&&Ie(t,o,{get:()=>e[o],enumerable:!(u=yt(e,o))||u.enumerable});return t};var Lt=(t,e,a)=>(a=t!=null?Vt(kt(t)):{},_t(e||!t||!t.__esModule?Ie(a,"default",{value:t,enumerable:!0}):a,t));var rt=Ut((et,tt)=>{(function(t){typeof define=="function"&&define.amd?define([],t):typeof et=="object"?tt.exports=t():window.wNumb=t()})(function(){"use strict";var t=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function e(d){return d.split("").reverse().join("")}function a(d,c){return d.substring(0,c.length)===c}function u(d,c){return d.slice(-1*c.length)===c}function o(d,c,b){if((d[c]||d[b])&&d[c]===d[b])throw new Error(c)}function g(d){return typeof d=="number"&&isFinite(d)}function m(d,c){return d=d.toString().split("e"),d=Math.round(+(d[0]+"e"+(d[1]?+d[1]+c:c))),d=d.toString().split("e"),(+(d[0]+"e"+(d[1]?+d[1]-c:-c))).toFixed(c)}function C(d,c,b,p,w,J,R,I,N,X,Y,S){var B=S,T,L,W,ie="",K="";return J&&(S=J(S)),g(S)?(d!==!1&&parseFloat(S.toFixed(d))===0&&(S=0),S<0&&(T=!0,S=Math.abs(S)),d!==!1&&(S=m(S,d)),S=S.toString(),S.indexOf(".")!==-1?(L=S.split("."),W=L[0],b&&(ie=b+L[1])):W=S,c&&(W=e(W).match(/.{1,3}/g),W=e(W.join(e(c)))),T&&I&&(K+=I),p&&(K+=p),T&&N&&(K+=N),K+=W,K+=ie,w&&(K+=w),X&&(K=X(K,B)),K):!1}function P(d,c,b,p,w,J,R,I,N,X,Y,S){var B=S,T,L="";return Y&&(S=Y(S)),!S||typeof S!="string"||(I&&a(S,I)&&(S=S.replace(I,""),T=!0),p&&a(S,p)&&(S=S.replace(p,"")),N&&a(S,N)&&(S=S.replace(N,""),T=!0),w&&u(S,w)&&(S=S.slice(0,-1*w.length)),c&&(S=S.split(c).join("")),b&&(S=S.replace(b,".")),T&&(L+="-"),L+=S,L=L.replace(/[^0-9\.\-.]/g,""),L==="")||(L=Number(L),R&&(L=R(L)),!g(L))?!1:L}function x(d){var c,b,p,w={};for(d.suffix===void 0&&(d.suffix=d.postfix),c=0;c<t.length;c+=1)if(b=t[c],p=d[b],p===void 0)b==="negative"&&!w.negativeBefore?w[b]="-":b==="mark"&&w.thousand!=="."?w[b]=".":w[b]=!1;else if(b==="decimals")if(p>=0&&p<8)w[b]=p;else throw new Error(b);else if(b==="encoder"||b==="decoder"||b==="edit"||b==="undo")if(typeof p=="function")w[b]=p;else throw new Error(b);else if(typeof p=="string")w[b]=p;else throw new Error(b);return o(w,"mark","thousand"),o(w,"prefix","negative"),o(w,"prefix","negativeBefore"),w}function k(d,c,b){var p,w=[];for(p=0;p<t.length;p+=1)w.push(d[t[p]]);return w.push(b),c.apply("",w)}function M(d){if(!(this instanceof M))return new M(d);typeof d=="object"&&(d=x(d),this.to=function(c){return k(d,C,c)},this.from=function(c){return k(d,P,c)})}return M})});var $;(function(t){t.Range="range",t.Steps="steps",t.Positions="positions",t.Count="count",t.Values="values"})($||($={}));var z;(function(t){t[t.None=-1]="None",t[t.NoValue=0]="NoValue",t[t.LargeValue=1]="LargeValue",t[t.SmallValue=2]="SmallValue"})(z||(z={}));function Ot(t){return le(t)&&typeof t.from=="function"}function le(t){return typeof t=="object"&&typeof t.to=="function"}function Be(t){t.parentElement.removeChild(t)}function Ce(t){return t!=null}function Ke(t){t.preventDefault()}function Ht(t){return t.filter(function(e){return this[e]?!1:this[e]=!0},{})}function jt(t,e){return Math.round(t/e)*e}function Ft(t,e){var a=t.getBoundingClientRect(),u=t.ownerDocument,o=u.documentElement,g=Xe(u);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(g.x=0),e?a.top+g.y-o.clientTop:a.left+g.x-o.clientLeft}function q(t){return typeof t=="number"&&!isNaN(t)&&isFinite(t)}function qe(t,e,a){a>0&&(F(t,e),setTimeout(function(){oe(t,e)},a))}function Te(t){return Math.max(Math.min(t,100),0)}function fe(t){return Array.isArray(t)?t:[t]}function zt(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function F(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function oe(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Rt(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function Xe(t){var e=window.pageXOffset!==void 0,a=(t.compatMode||"")==="CSS1Compat",u=e?window.pageXOffset:a?t.documentElement.scrollLeft:t.body.scrollLeft,o=e?window.pageYOffset:a?t.documentElement.scrollTop:t.body.scrollTop;return{x:u,y:o}}function Nt(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function It(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch{}return t}function Bt(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Ae(t,e){return 100/(e-t)}function Pe(t,e,a){return e*100/(t[a+1]-t[a])}function Kt(t,e){return Pe(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function qt(t,e){return e*(t[1]-t[0])/100+t[0]}function re(t,e){for(var a=1;t>=e[a];)a+=1;return a}function Tt(t,e,a){if(a>=t.slice(-1)[0])return 100;var u=re(a,t),o=t[u-1],g=t[u],m=e[u-1],C=e[u];return m+Kt([o,g],a)/Ae(m,C)}function Wt(t,e,a){if(a>=100)return t.slice(-1)[0];var u=re(a,e),o=t[u-1],g=t[u],m=e[u-1],C=e[u];return qt([o,g],(a-m)*Ae(m,C))}function Xt(t,e,a,u){if(u===100)return u;var o=re(u,t),g=t[o-1],m=t[o];return a?u-g>(m-g)/2?m:g:e[o-1]?t[o-1]+jt(u-t[o-1],e[o-1]):u}var Ye=function(){function t(e,a,u){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[u||!1],this.xNumSteps=[!1],this.snap=a;var o,g=[];for(Object.keys(e).forEach(function(m){g.push([fe(e[m]),m])}),g.sort(function(m,C){return m[0][0]-C[0][0]}),o=0;o<g.length;o++)this.handleEntryPoint(g[o][1],g[o][0]);for(this.xNumSteps=this.xSteps.slice(0),o=0;o<this.xNumSteps.length;o++)this.handleStepPoint(o,this.xNumSteps[o])}return t.prototype.getDistance=function(e){for(var a=[],u=0;u<this.xNumSteps.length-1;u++)a[u]=Pe(this.xVal,e,u);return a},t.prototype.getAbsoluteDistance=function(e,a,u){var o=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[o+1];)o++;else e===this.xPct[this.xPct.length-1]&&(o=this.xPct.length-2);!u&&e===this.xPct[o+1]&&o++,a===null&&(a=[]);var g,m=1,C=a[o],P=0,x=0,k=0,M=0;for(u?g=(e-this.xPct[o])/(this.xPct[o+1]-this.xPct[o]):g=(this.xPct[o+1]-e)/(this.xPct[o+1]-this.xPct[o]);C>0;)P=this.xPct[o+1+M]-this.xPct[o+M],a[o+M]*m+100-g*100>100?(x=P*g,m=(C-100*g)/a[o+M],g=1):(x=a[o+M]*P/100*m,m=0),u?(k=k-x,this.xPct.length+M>=1&&M--):(k=k+x,this.xPct.length-M>=1&&M++),C=a[o+M]*m;return e+k},t.prototype.toStepping=function(e){return e=Tt(this.xVal,this.xPct,e),e},t.prototype.fromStepping=function(e){return Wt(this.xVal,this.xPct,e)},t.prototype.getStep=function(e){return e=Xt(this.xPct,this.xSteps,this.snap,e),e},t.prototype.getDefaultStep=function(e,a,u){var o=re(e,this.xPct);return(e===100||a&&e===this.xPct[o-1])&&(o=Math.max(o-1,1)),(this.xVal[o]-this.xVal[o-1])/u},t.prototype.getNearbySteps=function(e){var a=re(e,this.xPct);return{stepBefore:{startValue:this.xVal[a-2],step:this.xNumSteps[a-2],highestStep:this.xHighestCompleteStep[a-2]},thisStep:{startValue:this.xVal[a-1],step:this.xNumSteps[a-1],highestStep:this.xHighestCompleteStep[a-1]},stepAfter:{startValue:this.xVal[a],step:this.xNumSteps[a],highestStep:this.xHighestCompleteStep[a]}}},t.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(zt);return Math.max.apply(null,e)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(e){return this.getStep(this.toStepping(e))},t.prototype.handleEntryPoint=function(e,a){var u;if(e==="min"?u=0:e==="max"?u=100:u=parseFloat(e),!q(u)||!q(a[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(u),this.xVal.push(a[0]);var o=Number(a[1]);u?this.xSteps.push(isNaN(o)?!1:o):isNaN(o)||(this.xSteps[0]=o),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(e,a){if(a){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=Pe([this.xVal[e],this.xVal[e+1]],a,0)/Ae(this.xPct[e],this.xPct[e+1]);var u=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],o=Math.ceil(Number(u.toFixed(3))-1),g=this.xVal[e]+this.xNumSteps[e]*o;this.xHighestCompleteStep[e]=g}},t}(),We={to:function(t){return t===void 0?"":t.toFixed(2)},from:Number},Ge={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},G={tooltips:".__tooltips",aria:".__aria"};function Yt(t,e){if(!q(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function Gt(t,e){if(!q(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function $t(t,e){if(!q(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function Jt(t,e){if(!q(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function Zt(t,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new Ye(e,t.snap||!1,t.singleStep)}function Qt(t,e){if(e=fe(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function er(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function tr(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function rr(t,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function $e(t,e){var a=[!1],u;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(u=1;u<t.handles;u++)a.push(e);a.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a=e}t.connect=a}function ir(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Je(t,e){if(!q(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(t.margin=t.spectrum.getDistance(e))}function nr(t,e){if(!q(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function ar(t,e){var a;if(!q(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||q(e[0])||q(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],a=0;a<t.spectrum.xNumSteps.length-1;a++)if(t.padding[0][a]<0||t.padding[1][a]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var u=e[0]+e[1],o=t.spectrum.xVal[0],g=t.spectrum.xVal[t.spectrum.xVal.length-1];if(u/(g-o)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function sr(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function or(t,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var a=e.indexOf("tap")>=0,u=e.indexOf("drag")>=0,o=e.indexOf("fixed")>=0,g=e.indexOf("snap")>=0,m=e.indexOf("hover")>=0,C=e.indexOf("unconstrained")>=0,P=e.indexOf("invert-connects")>=0,x=e.indexOf("drag-all")>=0,k=e.indexOf("smooth-steps")>=0;if(o){if(t.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Je(t,t.start[1]-t.start[0])}if(P&&t.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(C&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:a||g,drag:u,dragAll:x,smoothSteps:k,fixed:o,snap:g,hover:m,unconstrained:C,invertConnects:P}}function lr(t,e){if(e!==!1)if(e===!0||le(e)){t.tooltips=[];for(var a=0;a<t.handles;a++)t.tooltips.push(e)}else{if(e=fe(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(u){if(typeof u!="boolean"&&!le(u))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function fr(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function ur(t,e){if(!le(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function cr(t,e){if(!Ot(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function hr(t,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function dr(t,e){t.documentElement=e}function vr(t,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function pr(t,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof t.cssPrefix=="string"?(t.cssClasses={},Object.keys(e).forEach(function(a){t.cssClasses[a]=t.cssPrefix+e[a]})):t.cssClasses=e}function Ze(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:We,format:We},a={step:{r:!1,t:Yt},keyboardPageMultiplier:{r:!1,t:Gt},keyboardMultiplier:{r:!1,t:$t},keyboardDefaultStep:{r:!1,t:Jt},start:{r:!0,t:Qt},connect:{r:!0,t:$e},direction:{r:!0,t:sr},snap:{r:!1,t:er},animate:{r:!1,t:tr},animationDuration:{r:!1,t:rr},range:{r:!0,t:Zt},orientation:{r:!1,t:ir},margin:{r:!1,t:Je},limit:{r:!1,t:nr},padding:{r:!1,t:ar},behaviour:{r:!0,t:or},ariaFormat:{r:!1,t:ur},format:{r:!1,t:cr},tooltips:{r:!1,t:lr},keyboardSupport:{r:!0,t:hr},documentElement:{r:!1,t:dr},cssPrefix:{r:!0,t:vr},cssClasses:{r:!0,t:pr},handleAttributes:{r:!1,t:fr}},u={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Ge,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(a).forEach(function(P){if(!Ce(t[P])&&u[P]===void 0){if(a[P].r)throw new Error("noUiSlider: '"+P+"' is required.");return}a[P].t(e,Ce(t[P])?t[P]:u[P])}),e.pips=t.pips;var o=document.createElement("div"),g=o.style.msTransform!==void 0,m=o.style.transform!==void 0;e.transformRule=m?"transform":g?"msTransform":"webkitTransform";var C=[["left","top"],["right","bottom"]];return e.style=C[e.dir][e.ort],e}function mr(t,e,a){var u=Nt(),o=Bt(),g=o&&It(),m=t,C,P,x,k,M,d,c=e.spectrum,b=[],p=[],w=[],J=0,R={},I=!1,N=t.ownerDocument,X=e.documentElement||N.documentElement,Y=N.body,S=N.dir==="rtl"||e.ort===1?0:100;function B(r,i){var n=N.createElement("div");return i&&F(n,i),r.appendChild(n),n}function T(r,i){var n=B(r,e.cssClasses.origin),s=B(n,e.cssClasses.handle);if(B(s,e.cssClasses.touchArea),s.setAttribute("data-handle",String(i)),e.keyboardSupport&&(s.setAttribute("tabindex","0"),s.addEventListener("keydown",function(f){return mt(f,i)})),e.handleAttributes!==void 0){var l=e.handleAttributes[i];Object.keys(l).forEach(function(f){s.setAttribute(f,l[f])})}return s.setAttribute("role","slider"),s.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?F(s,e.cssClasses.handleLower):i===e.handles-1&&F(s,e.cssClasses.handleUpper),n.handle=s,n}function L(r,i){return i?B(r,e.cssClasses.connect):!1}function W(r,i){P=B(i,e.cssClasses.connects),x=[],k=[],k.push(L(P,r[0]));for(var n=0;n<e.handles;n++)x.push(T(i,n)),w[n]=n,k.push(L(P,r[n+1]))}function ie(r){F(r,e.cssClasses.target),e.dir===0?F(r,e.cssClasses.ltr):F(r,e.cssClasses.rtl),e.ort===0?F(r,e.cssClasses.horizontal):F(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?F(r,e.cssClasses.textDirectionRtl):F(r,e.cssClasses.textDirectionLtr),B(r,e.cssClasses.base)}function K(r,i){return!e.tooltips||!e.tooltips[i]?!1:B(r.firstChild,e.cssClasses.tooltip)}function Ve(){return m.hasAttribute("disabled")}function ue(r){var i=x[r];return i.hasAttribute("disabled")}function nt(r){r!=null?(x[r].setAttribute("disabled",""),x[r].handle.removeAttribute("tabindex")):(m.setAttribute("disabled",""),x.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function at(r){r!=null?(x[r].removeAttribute("disabled"),x[r].handle.setAttribute("tabindex","0")):(m.removeAttribute("disabled"),x.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function ce(){d&&(ee("update"+G.tooltips),d.forEach(function(r){r&&Be(r)}),d=null)}function ye(){ce(),d=x.map(K),me("update"+G.tooltips,function(r,i,n){if(!(!d||!e.tooltips)&&d[i]!==!1){var s=r[i];e.tooltips[i]!==!0&&(s=e.tooltips[i].to(n[i])),d[i].innerHTML=s}})}function st(){ee("update"+G.aria),me("update"+G.aria,function(r,i,n,s,l){w.forEach(function(f){var v=x[f],h=ne(p,f,0,!0,!0,!0),A=ne(p,f,100,!0,!0,!0),V=l[f],y=String(e.ariaFormat.to(n[f]));h=c.fromStepping(h).toFixed(1),A=c.fromStepping(A).toFixed(1),V=c.fromStepping(V).toFixed(1),v.children[0].setAttribute("aria-valuemin",h),v.children[0].setAttribute("aria-valuemax",A),v.children[0].setAttribute("aria-valuenow",V),v.children[0].setAttribute("aria-valuetext",y)})})}function ot(r){if(r.mode===$.Range||r.mode===$.Steps)return c.xVal;if(r.mode===$.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=r.values-1,n=100/i,s=[];i--;)s[i]=i*n;return s.push(100),De(s,r.stepped)}return r.mode===$.Positions?De(r.values,r.stepped):r.mode===$.Values?r.stepped?r.values.map(function(l){return c.fromStepping(c.getStep(c.toStepping(l)))}):r.values:[]}function De(r,i){return r.map(function(n){return c.fromStepping(i?c.getStep(n):n)})}function lt(r){function i(V,y){return Number((V+y).toFixed(7))}var n=ot(r),s={},l=c.xVal[0],f=c.xVal[c.xVal.length-1],v=!1,h=!1,A=0;return n=Ht(n.slice().sort(function(V,y){return V-y})),n[0]!==l&&(n.unshift(l),v=!0),n[n.length-1]!==f&&(n.push(f),h=!0),n.forEach(function(V,y){var D,E,_,j=V,O=n[y+1],H,xe,be,we,ze,Ee,Re,Ne=r.mode===$.Steps;for(Ne&&(D=c.xNumSteps[y]),D||(D=O-j),O===void 0&&(O=j),D=Math.max(D,1e-7),E=j;E<=O;E=i(E,D)){for(H=c.toStepping(E),xe=H-A,ze=xe/(r.density||1),Ee=Math.round(ze),Re=xe/Ee,_=1;_<=Ee;_+=1)be=A+_*Re,s[be.toFixed(5)]=[c.fromStepping(be),0];we=n.indexOf(E)>-1?z.LargeValue:Ne?z.SmallValue:z.NoValue,!y&&v&&E!==O&&(we=0),E===O&&h||(s[H.toFixed(5)]=[E,we]),A=H}}),s}function ft(r,i,n){var s,l,f=N.createElement("div"),v=(s={},s[z.None]="",s[z.NoValue]=e.cssClasses.valueNormal,s[z.LargeValue]=e.cssClasses.valueLarge,s[z.SmallValue]=e.cssClasses.valueSub,s),h=(l={},l[z.None]="",l[z.NoValue]=e.cssClasses.markerNormal,l[z.LargeValue]=e.cssClasses.markerLarge,l[z.SmallValue]=e.cssClasses.markerSub,l),A=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],V=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];F(f,e.cssClasses.pips),F(f,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function y(E,_){var j=_===e.cssClasses.value,O=j?A:V,H=j?v:h;return _+" "+O[e.ort]+" "+H[E]}function D(E,_,j){if(j=i?i(_,j):j,j!==z.None){var O=B(f,!1);O.className=y(j,e.cssClasses.marker),O.style[e.style]=E+"%",j>z.NoValue&&(O=B(f,!1),O.className=y(j,e.cssClasses.value),O.setAttribute("data-value",String(_)),O.style[e.style]=E+"%",O.innerHTML=String(n.to(_)))}}return Object.keys(r).forEach(function(E){D(E,r[E][0],r[E][1])}),f}function he(){M&&(Be(M),M=null)}function de(r){he();var i=lt(r),n=r.filter,s=r.format||{to:function(l){return String(Math.round(l))}};return M=m.appendChild(ft(i,n,s)),M}function ke(){var r=C.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||C[i]:r.height||C[i]}function Z(r,i,n,s){var l=function(v){var h=ut(v,s.pageOffset,s.target||i);if(!h||Ve()&&!s.doNotReject||Rt(m,e.cssClasses.tap)&&!s.doNotReject||r===u.start&&h.buttons!==void 0&&h.buttons>1||s.hover&&h.buttons)return!1;g||h.preventDefault(),h.calcPoint=h.points[e.ort],n(h,s)},f=[];return r.split(" ").forEach(function(v){i.addEventListener(v,l,g?{passive:!0}:!1),f.push([v,l])}),f}function ut(r,i,n){var s=r.type.indexOf("touch")===0,l=r.type.indexOf("mouse")===0,f=r.type.indexOf("pointer")===0,v=0,h=0;if(r.type.indexOf("MSPointer")===0&&(f=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(s){var A=function(D){var E=D.target;return E===n||n.contains(E)||r.composed&&r.composedPath().shift()===n};if(r.type==="touchstart"){var V=Array.prototype.filter.call(r.touches,A);if(V.length>1)return!1;v=V[0].pageX,h=V[0].pageY}else{var y=Array.prototype.find.call(r.changedTouches,A);if(!y)return!1;v=y.pageX,h=y.pageY}}return i=i||Xe(N),(l||f)&&(v=r.clientX+i.x,h=r.clientY+i.y),r.pageOffset=i,r.points=[v,h],r.cursor=l||f,r}function Me(r){var i=r-Ft(C,e.ort),n=i*100/ke();return n=Te(n),e.dir?100-n:n}function ct(r){var i=100,n=!1;return x.forEach(function(s,l){if(!ue(l)){var f=p[l],v=Math.abs(f-r),h=v===100&&i===100,A=v<i,V=v<=i&&r>f;(A||V||h)&&(n=l,i=v)}}),n}function ht(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&ve(r,i)}function dt(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return ve(r,i);var n=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),s=n*100/i.baseSize;_e(n>0,s,i.locations,i.handleNumbers,i.connect)}function ve(r,i){i.handle&&(oe(i.handle,e.cssClasses.active),J-=1),i.listeners.forEach(function(n){X.removeEventListener(n[0],n[1])}),J===0&&(oe(m,e.cssClasses.drag),Se(),r.cursor&&(Y.style.cursor="",Y.removeEventListener("selectstart",Ke))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(n){Q(n,p[n],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(n){U("update",n)})),i.handleNumbers.forEach(function(n){U("change",n),U("set",n),U("end",n)})}function pe(r,i){if(!i.handleNumbers.some(ue)){var n;if(i.handleNumbers.length===1){var s=x[i.handleNumbers[0]];n=s.children[0],J+=1,F(n,e.cssClasses.active)}r.stopPropagation();var l=[],f=Z(u.move,X,dt,{target:r.target,handle:n,connect:i.connect,listeners:l,startCalcPoint:r.calcPoint,baseSize:ke(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:p.slice()}),v=Z(u.end,X,ve,{target:r.target,handle:n,listeners:l,doNotReject:!0,handleNumbers:i.handleNumbers}),h=Z("mouseout",X,ht,{target:r.target,handle:n,listeners:l,doNotReject:!0,handleNumbers:i.handleNumbers});l.push.apply(l,f.concat(v,h)),r.cursor&&(Y.style.cursor=getComputedStyle(r.target).cursor,x.length>1&&F(m,e.cssClasses.drag),Y.addEventListener("selectstart",Ke,!1)),i.handleNumbers.forEach(function(A){U("start",A)})}}function vt(r){r.stopPropagation();var i=Me(r.calcPoint),n=ct(i);n!==!1&&(e.events.snap||qe(m,e.cssClasses.tap,e.animationDuration),Q(n,i,!0,!0),Se(),U("slide",n,!0),U("update",n,!0),e.events.snap?pe(r,{handleNumbers:[n]}):(U("change",n,!0),U("set",n,!0)))}function pt(r){var i=Me(r.calcPoint),n=c.getStep(i),s=c.fromStepping(n);Object.keys(R).forEach(function(l){l.split(".")[0]==="hover"&&R[l].forEach(function(f){f.call(se,s)})})}function mt(r,i){if(Ve()||ue(i))return!1;var n=["Left","Right"],s=["Down","Up"],l=["PageDown","PageUp"],f=["Home","End"];e.dir&&!e.ort?n.reverse():e.ort&&!e.dir&&(s.reverse(),l.reverse());var v=r.key.replace("Arrow",""),h=v===l[0],A=v===l[1],V=v===s[0]||v===n[0]||h,y=v===s[1]||v===n[1]||A,D=v===f[0],E=v===f[1];if(!V&&!y&&!D&&!E)return!0;r.preventDefault();var _;if(y||V){var j=V?0:1,O=je(i),H=O[j];if(H===null)return!1;H===!1&&(H=c.getDefaultStep(p[i],V,e.keyboardDefaultStep)),A||h?H*=e.keyboardPageMultiplier:H*=e.keyboardMultiplier,H=Math.max(H,1e-7),H=(V?-1:1)*H,_=b[i]+H}else E?_=e.spectrum.xVal[e.spectrum.xVal.length-1]:_=e.spectrum.xVal[0];return Q(i,c.toStepping(_),!0,!0),U("slide",i),U("update",i),U("change",i),U("set",i),!1}function Ue(r){r.fixed||x.forEach(function(i,n){Z(u.start,i.children[0],pe,{handleNumbers:[n]})}),r.tap&&Z(u.start,C,vt,{}),r.hover&&Z(u.move,C,pt,{hover:!0}),r.drag&&k.forEach(function(i,n){if(!(i===!1||n===0||n===k.length-1)){var s=x[n-1],l=x[n],f=[i],v=[s,l],h=[n-1,n];F(i,e.cssClasses.draggable),r.fixed&&(f.push(s.children[0]),f.push(l.children[0])),r.dragAll&&(v=x,h=w),f.forEach(function(A){Z(u.start,A,pe,{handles:v,handleNumbers:h,connect:i})})}})}function me(r,i){R[r]=R[r]||[],R[r].push(i),r.split(".")[0]==="update"&&x.forEach(function(n,s){U("update",s)})}function gt(r){return r===G.aria||r===G.tooltips}function ee(r){var i=r&&r.split(".")[0],n=i?r.substring(i.length):r;Object.keys(R).forEach(function(s){var l=s.split(".")[0],f=s.substring(l.length);(!i||i===l)&&(!n||n===f)&&(!gt(f)||n===f)&&delete R[s]})}function U(r,i,n){Object.keys(R).forEach(function(s){var l=s.split(".")[0];r===l&&R[s].forEach(function(f){f.call(se,b.map(e.format.to),i,b.slice(),n||!1,p.slice(),se)})})}function ne(r,i,n,s,l,f,v){var h;return x.length>1&&!e.events.unconstrained&&(s&&i>0&&(h=c.getAbsoluteDistance(r[i-1],e.margin,!1),n=Math.max(n,h)),l&&i<x.length-1&&(h=c.getAbsoluteDistance(r[i+1],e.margin,!0),n=Math.min(n,h))),x.length>1&&e.limit&&(s&&i>0&&(h=c.getAbsoluteDistance(r[i-1],e.limit,!1),n=Math.min(n,h)),l&&i<x.length-1&&(h=c.getAbsoluteDistance(r[i+1],e.limit,!0),n=Math.max(n,h))),e.padding&&(i===0&&(h=c.getAbsoluteDistance(0,e.padding[0],!1),n=Math.max(n,h)),i===x.length-1&&(h=c.getAbsoluteDistance(100,e.padding[1],!0),n=Math.min(n,h))),v||(n=c.getStep(n)),n=Te(n),n===r[i]&&!f?!1:n}function ge(r,i){var n=e.ort;return(n?i:r)+", "+(n?r:i)}function _e(r,i,n,s,l){var f=n.slice(),v=s[0],h=e.events.smoothSteps,A=[!r,r],V=[r,!r];s=s.slice(),r&&s.reverse(),s.length>1?s.forEach(function(D,E){var _=ne(f,D,f[D]+i,A[E],V[E],!1,h);_===!1?i=0:(i=_-f[D],f[D]=_)}):A=V=[!0];var y=!1;s.forEach(function(D,E){y=Q(D,n[D]+i,A[E],V[E],!1,h)||y}),y&&(s.forEach(function(D){U("update",D),U("slide",D)}),l!=null&&U("drag",v))}function Le(r,i){return e.dir?100-r-i:r}function St(r,i){p[r]=i,b[r]=c.fromStepping(i);var n=Le(i,0)-S,s="translate("+ge(n+"%","0")+")";if(x[r].style[e.transformRule]=s,e.events.invertConnects&&p.length>1){var l=p.every(function(f,v,h){return v===0||f>=h[v-1]});if(I!==!l){Pt();return}}te(r),te(r+1),I&&(te(r-1),te(r+2))}function Se(){w.forEach(function(r){var i=p[r]>50?-1:1,n=3+(x.length+i*r);x[r].style.zIndex=String(n)})}function Q(r,i,n,s,l,f){return l||(i=ne(p,r,i,n,s,!1,f)),i===!1?!1:(St(r,i),!0)}function te(r){if(k[r]){var i=p.slice();I&&i.sort(function(h,A){return h-A});var n=0,s=100;r!==0&&(n=i[r-1]),r!==k.length-1&&(s=i[r]);var l=s-n,f="translate("+ge(Le(n,l)+"%","0")+")",v="scale("+ge(l/100,"1")+")";k[r].style[e.transformRule]=f+" "+v}}function Oe(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=c.toStepping(r)),r===!1||isNaN(r))?p[i]:r}function ae(r,i,n){var s=fe(r),l=p[0]===void 0;i=i===void 0?!0:i,e.animate&&!l&&qe(m,e.cssClasses.tap,e.animationDuration),w.forEach(function(h){Q(h,Oe(s[h],h),!0,!1,n)});var f=w.length===1?0:1;if(l&&c.hasNoSize()&&(n=!0,p[0]=0,w.length>1)){var v=100/(w.length-1);w.forEach(function(h){p[h]=h*v})}for(;f<w.length;++f)w.forEach(function(h){Q(h,p[h],!0,!0,n)});Se(),w.forEach(function(h){U("update",h),s[h]!==null&&i&&U("set",h)})}function xt(r){ae(e.start,r)}function bt(r,i,n,s){if(r=Number(r),!(r>=0&&r<w.length))throw new Error("noUiSlider: invalid handle number, got: "+r);Q(r,Oe(i,r),!0,!0,s),U("update",r),n&&U("set",r)}function He(r){if(r===void 0&&(r=!1),r)return b.length===1?b[0]:b.slice(0);var i=b.map(e.format.to);return i.length===1?i[0]:i}function wt(){for(ee(G.aria),ee(G.tooltips),Object.keys(e.cssClasses).forEach(function(r){oe(m,e.cssClasses[r])});m.firstChild;)m.removeChild(m.firstChild);delete m.noUiSlider}function je(r){var i=p[r],n=c.getNearbySteps(i),s=b[r],l=n.thisStep.step,f=null;if(e.snap)return[s-n.stepBefore.startValue||null,n.stepAfter.startValue-s||null];l!==!1&&s+l>n.stepAfter.startValue&&(l=n.stepAfter.startValue-s),s>n.thisStep.startValue?f=n.thisStep.step:n.stepBefore.step===!1?f=!1:f=s-n.stepBefore.highestStep,i===100?l=null:i===0&&(f=null);var v=c.countStepDecimals();return l!==null&&l!==!1&&(l=Number(l.toFixed(v))),f!==null&&f!==!1&&(f=Number(f.toFixed(v))),[f,l]}function Et(){return w.map(je)}function Ct(r,i){var n=He(),s=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];s.forEach(function(f){r[f]!==void 0&&(a[f]=r[f])});var l=Ze(a);s.forEach(function(f){r[f]!==void 0&&(e[f]=l[f])}),c=l.spectrum,e.margin=l.margin,e.limit=l.limit,e.padding=l.padding,e.pips?de(e.pips):he(),e.tooltips?ye():ce(),p=[],ae(Ce(r.start)?r.start:n,i),r.connect&&Fe()}function Fe(){for(;P.firstChild;)P.removeChild(P.firstChild);for(var r=0;r<=e.handles;r++)k[r]=L(P,e.connect[r]),te(r);Ue({drag:e.events.drag,fixed:!0})}function Pt(){I=!I,$e(e,e.connect.map(function(r){return!r})),Fe()}function At(){C=ie(m),W(e.connect,C),Ue(e.events),ae(e.start),e.pips&&de(e.pips),e.tooltips&&ye(),st()}At();var se={destroy:wt,steps:Et,on:me,off:ee,get:He,set:ae,setHandle:bt,reset:xt,disable:nt,enable:at,__moveHandles:function(r,i,n){_e(r,i,p,n)},options:a,updateOptions:Ct,target:m,removePips:he,removeTooltips:ce,getPositions:function(){return p.slice()},getTooltips:function(){return d},getOrigins:function(){return x},pips:de};return se}function gr(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var a=Ze(e),u=mr(t,a,e);return t.noUiSlider=u,u}var Qe={__spectrum:Ye,cssClasses:Ge,create:gr};var it=Lt(rt(),1);window.wNumb=it.default;function Sr({state:t,range:e,step:a,start:u,margin:o,limit:g,connect:m,direction:C,orientation:P,behaviour:x,tooltips:k,format:M,pips:d,ariaFormat:c}){return{state:t,slider:null,init:function(){Qe.create(this.$el,{start:u??[0],range:e??{min:0,max:100},step:a,margin:o,limit:g,connect:m,direction:C,orientation:P,behaviour:x,tooltips:k,format:M,pips:d,ariaFormat:c})}}}export{Sr as default};
