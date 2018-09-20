/*!
 * vue-material v1.0.0-beta-10.3
 * Made with <3 by marcosmoura 2018
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=540)})({0:function(e,t){e.exports=function(e,t,n,r,o,i){var u,s,a,l,c,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(u=e,f=e.default),s="function"==typeof f?f.options:f,t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),o&&(s._scopeId=o),i?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=a):r&&(a=r),a&&(l=s.functional,c=l?s.render:s.beforeCreate,l?(s._injectStyles=a,s.render=function(e,t){return a.call(t),c(e,t)}):s.beforeCreate=c?[].concat(c,a):[a]),{esModule:u,exports:f,options:s}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=i.default.enabled,t=i.default.getThemeName,n=i.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,s.default)(t,e)},o=n(4),i=r(o),u=n(6),s=r(u)},10:function(e,t,n){(function(t){var r,o,i,u,s,a=n(14),l="undefined"==typeof window?t:window,c=["moz","webkit"],f="AnimationFrame",d=l["request"+f],p=l["cancel"+f]||l["cancelRequest"+f];for(r=0;!d&&r<c.length;r++)d=l[c[r]+"Request"+f],p=l[c[r]+"Cancel"+f]||l[c[r]+"CancelRequest"+f];d&&p||(o=0,i=0,u=[],s=1e3/60,d=function(e){if(0===u.length){var t=a(),n=Math.max(0,s-(t-o));o=n+t,setTimeout((function(){var e,t=u.slice(0);for(u.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(o)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return u.push({handle:++i,callback:e,cancelled:!1}),i},p=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=!0)}),e.exports=function(e){return d.call(l,e)},e.exports.cancel=function(){p.apply(l,arguments)},e.exports.polyfill=function(e){e||(e=l),e.requestAnimationFrame=d,e.cancelAnimationFrame=p}}).call(t,n(12))},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return Math.random().toString(36).slice(4)};t.default=r},12:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},14:function(e,t,n){(function(t){(function(){var n,r,o,i,u,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-u)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),s=1e9*t.uptime(),u=i-s):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(15))},15:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){p&&m&&(p=!1,m.length?d=m.concat(d):h=-1,d.length&&s())}function s(){var e,t;if(!p){for(e=o(u),p=!0,t=d.length;t;){for(m=d,d=[];++h<t;)m&&m[h].run();h=-1,t=d.length}m=null,p=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function l(){}var c,f,d,p,m,h,v=e.exports={};!(function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}})(),d=[],p=!1,h=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];d.push(new a(e,n)),1!==d.length||p||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=l,v.addListener=l,v.once=l,v.off=l,v.removeListener=l,v.removeAllListeners=l,v.emit=l,v.prependListener=l,v.prependOnceListener=l,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},17:function(e,t,n){"use strict";function r(e){n(23)}var o,i,u,s,a,l,c,f,d,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(18),i=n.n(o);for(u in o)"default"!==u&&(function(e){n.d(t,e,(function(){return o[e]}))})(u);s=n(26),a=n(0),l=!1,c=r,f=null,d=null,p=a(i.a,s.a,l,c,f,d),t.default=p.exports},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,s,a,l,c,f,d;Object.defineProperty(t,"__esModule",{value:!0}),o=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(10),u=r(i),s=n(1),a=r(s),l=n(11),c=r(l),f=n(22),d=r(f),t.default=new a.default({name:"MdRipple",components:{MdWave:d.default},props:{mdActive:null,mdDisabled:Boolean,mdCentered:Boolean,mdEventTrigger:{type:Boolean,default:!0}},data:function(){return{ripples:[],touchTimeout:null,eventType:null}},computed:{isDisabled:function(){return!this.$material.ripple||this.mdDisabled},rippleClasses:function(){return{"md-disabled":this.isDisabled}},waveClasses:function(){return{"md-centered":this.mdCentered}}},watch:{mdActive:function(e){var t="boolean"==typeof e,n="mouseevent"===(""+e.constructor).match(/function (\w*)/)[1].toLowerCase();t&&this.mdCentered&&e?this.startRipple({type:"mousedown"}):n&&this.startRipple(e),this.$emit("update:mdActive",!1)}},methods:{touchMoveCheck:function(){window.clearTimeout(this.touchTimeout)},touchStartCheck:function(e){var t=this;this.touchTimeout=window.setTimeout((function(){t.startRipple(e)}),100)},startRipple:function(e){var t=this;(0,u.default)((function(){var n,r,o=t.eventType,i=t.isDisabled,u=t.mdCentered;i||o&&o!==e.type||(n=t.getSize(),r=null,r=u?t.getCenteredPosition(n):t.getHitPosition(e,n),t.eventType=e.type,t.ripples.push({waveStyles:t.applyStyles(r,n),uuid:(0,c.default)()}))}))},applyStyles:function(e,t){return t+="px",o({},e,{width:t,height:t})},clearWave:function(e){this.ripples=e?this.ripples.filter((function(t){return t.uuid!==e})):[]},getSize:function(){var e=this.$el,t=e.offsetWidth,n=e.offsetHeight;return Math.round(Math.max(t,n))},getCenteredPosition:function(e){var t=-e/2+"px";return{"margin-top":t,"margin-left":t}},getHitPosition:function(e,t){var n=this.$el.getBoundingClientRect(),r=e.pageY,o=e.pageX;return"touchstart"===e.type&&(r=e.changedTouches[0].pageY,o=e.changedTouches[0].pageX),{top:r-n.top-t/2-document.documentElement.scrollTop+"px",left:o-n.left-t/2-document.documentElement.scrollLeft+"px"}}}})},19:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new o.default({name:"MdWave",data:function(){return{animating:!0}},props:{waveClasses:null,waveStyles:null},methods:{end:function(){this.animating=null,this.$emit("md-end")}}})},2:function(t,n){t.exports=e},22:function(e,t,n){"use strict";function r(e){n(24)}var o,i,u,s,a,l,c,f,d,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(19),i=n.n(o);for(u in o)"default"!==u&&(function(e){n.d(t,e,(function(){return o[e]}))})(u);s=n(25),a=n(0),l=!1,c=r,f=null,d=null,p=a(i.a,s.a,l,c,f,d),t.default=p.exports},23:function(e,t){},24:function(e,t){},25:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"md-ripple"},on:{"after-enter":e.end}},[e.animating?n("span"):e._e()])},o=[],i={render:r,staticRenderFns:o};t.a=i},26:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["md-ripple",e.rippleClasses],on:{"&touchstart":function(t){return (function(t){return e.mdEventTrigger&&e.touchStartCheck(t)})(t)},"&touchmove":function(t){return (function(t){return e.mdEventTrigger&&e.touchMoveCheck(t)})(t)},"&mousedown":function(t){return (function(t){return e.mdEventTrigger&&e.startRipple(t)})(t)}}},[e._t("default"),e._v(" "),e._l(e.ripples,(function(t){return e.isDisabled?e._e():n("md-wave",{key:t.uuid,class:["md-ripple-wave",e.waveClasses],style:t.waveStyles,on:{"md-end":function(n){e.clearWave(t.uuid)}}})}))],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},275:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,s;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),i=r(o),u=n(39),s=r(u),t.default=function(e){(0,i.default)(e),e.component(s.default.name,s.default)}},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{to:[String,Object],replace:Boolean,append:Boolean,activeClass:String,exact:Boolean,event:[String,Array],exactActiveClass:String}}},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},t,e.$options.components["router-link"].options.props)}},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,s,a;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),i=r(o),u=n(4),s=r(u),a=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return s.default.metaColors},set:function(e){s.default.metaColors=e}},theme:{get:function(){return s.default.theme},set:function(e){s.default.theme=e}},enabled:{get:function(){return s.default.enabled},set:function(e){s.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=a(),e.prototype.$material=e.material)}},31:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,u,s,a,l,c,f,d,p,m,h,v;Object.defineProperty(t,"__esModule",{value:!0}),o=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),u=r(i),s=n(41),a=r(s),l=n(38),c=r(l),f=n(28),d=r(f),p=n(29),m=r(p),h=n(45),v=r(h),t.default=new u.default({name:"MdButton",data:function(){return{rippleActive:!1}},components:{MdButtonContent:v.default},mixins:[c.default,a.default,d.default],props:{href:String,type:{type:String,default:"button"},disabled:Boolean},computed:{rippleWorks:function(){return this.mdRipple&&!this.disabled},isRouterLink:function(){return this.$router&&this.to}},render:function(e){var t,n,r=this,i=e("md-button-content",{attrs:{mdRipple:this.mdRipple,disabled:this.disabled},props:{mdRippleActive:this.rippleActive},on:{"update:mdRippleActive":function(e){return r.rippleActive=e}}},this.$slots.default),u={staticClass:"md-button",class:[this.$mdActiveTheme,{"md-ripple-off":!this.mdRipple,"md-focused":this.mdHasFocus}],attrs:o({},this.attrs,{href:this.href,disabled:this.disabled,type:!this.href&&(this.type||"button")}),on:o({},this.$listeners,{touchstart:function(e){r.rippleWorks&&(r.rippleActive=e),r.$listeners.touchstart&&r.$listeners.touchstart(e)},touchmove:function(e){r.rippleWorks&&(r.rippleActive=e),r.$listeners.touchmove&&r.$listeners.touchmove(e)},mousedown:function(e){r.rippleWorks&&(r.rippleActive=e),r.$listeners.mousedown&&r.$listeners.mousedown(e)}})},s="button";return this.href?s="a":this.isRouterLink&&(this.$options.props=(0,m.default)(this,this.$options.props),s="router-link",t=this.$props.exactActiveClass,n=(this.$props.activeClass||this.$material.router.linkActiveClass)+" md-active",u.props=o({},this.$props,{exactActiveClass:t,activeClass:n}),delete u.props.type,delete u.attrs.type,delete u.props.href,delete u.attrs.href),e(s,u,[i])}})},32:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(17),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={name:"MdButtonContent",components:{MdRipple:o.default},props:{mdRipple:Boolean,mdRippleActive:null,disabled:Boolean}}},38:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(17),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default={components:{MdRipple:o.default},props:{mdRipple:{type:Boolean,default:!0}}}},39:function(e,t,n){"use strict";function r(e){n(44)}var o,i,u,s,a,l,c,f,d,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(31),i=n.n(o);for(u in o)"default"!==u&&(function(e){n.d(t,e,(function(){return o[e]}))})(u);s=n(0),a=null,l=!1,c=r,f=null,d=null,p=s(i.a,a,l,c,f,d),t.default=p.exports},4:function(e,t,n){"use strict";var r,o,i,u,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i=null,u=null,s=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==t?o:e(i)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){u&&u.setAttribute("content",e)},setMaskColors:function(e){s&&s.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;i=document.querySelector('[name="msapplication-TileColor"]'),u=document.querySelector('[name="theme-color"]'),s=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},41:function(e,t,n){"use strict";function r(){try{var e=Object.defineProperty({},"passive",{get:function(){v={passive:!0}}});window.addEventListener("ghost",null,e)}catch(e){}}function o(e){var t=(e.keyCode,e.target);y.currentElement=t}function i(e){y.currentElement=null}function u(){h.addEventListener("keyup",o)}function s(){h.addEventListener("pointerup",i)}function a(){h.addEventListener("MSPointerUp",i)}function l(){h.addEventListener("mouseup",i),"ontouchend"in window&&h.addEventListener("touchend",i,v)}function c(){window.PointerEvent?s():window.MSPointerEvent?a():l(),u()}function f(){m||(h=document.body,r(),c(),m=!0)}var d,p,m,h,v,y;Object.defineProperty(t,"__esModule",{value:!0}),d=n(5),p=(function(e){return e&&e.__esModule?e:{default:e}})(d),m=!1,h=null,v=!1,y=new p.default({currentElement:null}),t.default={data:function(){return{mdHasFocus:!1}},computed:{focusedElement:function(){return y.currentElement}},watch:{focusedElement:function(e){this.mdHasFocus=e===this.$el}},mounted:function(){f()}}},44:function(e,t){},45:function(e,t,n){"use strict";function r(e){n(46)}var o,i,u,s,a,l,c,f,d,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(32),i=n.n(o);for(u in o)"default"!==u&&(function(e){n.d(t,e,(function(){return o[e]}))})(u);s=n(47),a=n(0),l=!1,c=r,f=null,d=null,p=a(i.a,s.a,l,c,f,d),t.default=p.exports},46:function(e,t){},47:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-ripple",{attrs:{"md-disabled":!e.mdRipple||e.disabled,"md-event-trigger":!1,"md-active":e.mdRippleActive},on:{"update:mdActive":function(t){return e.$emit("update:mdRippleActive",t)}}},[n("div",{staticClass:"md-button-content"},[e._t("default")],2)])},o=[],i={render:r,staticRenderFns:o};t.a=i},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},540:function(e,t,n){e.exports=n(275)},6:function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||i(e)}function i(e){return e.$$typeof===p}function u(e){return Array.isArray(e)?[]:{}}function s(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c(u(e),e,t):e}function a(e,t,n){return e.concat(t).map((function(e){return s(e,n)}))}function l(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=s(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=c(e[o],t[o],n):r[o]=s(t[o],n)})),r}function c(e,t,n){var r,o,i;return n=n||{},n.arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||f,r=Array.isArray(t),o=Array.isArray(e),i=r===o,i?r?n.arrayMerge(e,t,n):l(e,t,n):s(t,n)}var f,d,p,m;Object.defineProperty(t,"__esModule",{value:!0}),f=function(e){return r(e)&&!o(e)},d="function"==typeof Symbol&&Symbol.for,p=d?Symbol.for("react.element"):60103,c.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return c(e,n,t)}),{})},m=c,t.default=m},7:function(e,t){}})}));