
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);


/*	
 *	jQuery dotdotdot 1.6.9
 *	
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=e.contents(),u=!1;e.empty();for(var c="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",f=0,h=s.length;h>f&&!u;f++){var p=s[f],g=t(p);"undefined"==typeof p||3==p.nodeType&&0==t.trim(p.data).length||(e.append(g),l&&e[e.is(c)?"after":"append"](l),a(i,d)&&(u=3==p.nodeType?o(g,n,i,d,l):r(g,n,i,d,l),u||(g.remove(),u=!0)),u||l&&l.detach())}return u}function o(e,n,r,o,d){var u=e[0];if(!u)return!1;var f=s(u),h=-1!==f.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":h,g=f.split(p),v=-1,w=-1,m=0,y=g.length-1;for(o.fallbackToLetter&&0==m&&0==y&&(p="",g=f.split(p),y=g.length-1);y>=m&&(0!=m||0!=y);){var b=Math.floor((m+y)/2);if(b==w)break;w=b,l(u,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(y=w,o.fallbackToLetter&&0==m&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,m=0,y=g.length-1)):(v=w,m=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.remove();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?u=c(x.contents().eq(-1-T),n):(u=c(x,n,!0),T||x.remove()),u&&(f=i(s(u),o),l(u,f),T&&d&&t(u).parent().append(d))}else f=i(g.slice(0,v+1).join(p),o),l(u,f);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function u(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function c(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return c(e.contents().last(),n)}for(o=u(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=u(e[0])}if(o)return c(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:h(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.empty().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var u=!1,c=!1;return s.afterElement&&(u=s.afterElement.clone(!0),u.show(),s.afterElement.remove()),a(g,l)&&(c="children"==l.wrap?n(g,l,u):r(g,o,g,l,u)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],c,i),s.isTruncated=c,c}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().empty().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),c&&clearInterval(c),c=setTimeout(function(){o.trigger("update.dot")},10))})}else u=d(o),c=setInterval(function(){var t=d(o);(u.width!=t.width||u.height!=t.height)&&(o.trigger("update.dot"),u=d(o))},100);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),c&&clearInterval(c),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},u={},c=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);

define("vendors/jQuery", function(){});

//Underscore 1.4.4

(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
define("vendors/underscore", function(){});

/*
 * Pixastic - JavaScript Image Processing Library - Version 0.1.3
 * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
 * MIT License [http://www.pixastic.com/lib/license.txt]
 */


var Pixastic=(function(){function addEvent(el,event,handler){if(el.addEventListener)
el.addEventListener(event,handler,false);else if(el.attachEvent)
el.attachEvent("on"+event,handler);}
function onready(handler){var handlerDone=false;var execHandler=function(){if(!handlerDone){handlerDone=true;handler();}}
document.write("<"+"script defer src=\"//:\" id=\"__onload_ie_pixastic__\"></"+"script>");var script=document.getElementById("__onload_ie_pixastic__");script.onreadystatechange=function(){if(script.readyState=="complete"){script.parentNode.removeChild(script);execHandler();}}
if(document.addEventListener)
document.addEventListener("DOMContentLoaded",execHandler,false);addEvent(window,"load",execHandler);}
function init(){var imgEls=getElementsByClass("pixastic",null,"img");var canvasEls=getElementsByClass("pixastic",null,"canvas");var elements=imgEls.concat(canvasEls);for(var i=0;i<elements.length;i++){(function(){var el=elements[i];var actions=[];var classes=el.className.split(" ");for(var c=0;c<classes.length;c++){var cls=classes[c];if(cls.substring(0,9)=="pixastic-"){var actionName=cls.substring(9);if(actionName!="")
actions.push(actionName);}}
if(actions.length){if(el.tagName.toLowerCase()=="img"){var dataImg=new Image();dataImg.src=el.src;if(dataImg.complete){for(var a=0;a<actions.length;a++){var res=Pixastic.applyAction(el,el,actions[a],null);if(res)
el=res;}}else{dataImg.onload=function(){for(var a=0;a<actions.length;a++){var res=Pixastic.applyAction(el,el,actions[a],null)
if(res)
el=res;}}}}else{setTimeout(function(){for(var a=0;a<actions.length;a++){var res=Pixastic.applyAction(el,el,actions[a],null);if(res)
el=res;}},1);}}})();}}
if(typeof pixastic_parseonload!="undefined"&&pixastic_parseonload)
onready(init);function getElementsByClass(searchClass,node,tag){var classElements=new Array();if(node==null)
node=document;if(tag==null)
tag='*';var els=node.getElementsByTagName(tag);var elsLen=els.length;var pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");for(i=0,j=0;i<elsLen;i++){if(pattern.test(els[i].className)){classElements[j]=els[i];j++;}}
return classElements;}
var debugElement;function writeDebug(text,level){if(!Pixastic.debug)return;try{switch(level){case"warn":console.warn("Pixastic:",text);break;case"error":console.error("Pixastic:",text);break;default:console.log("Pixastic:",text);}}catch(e){}
if(!debugElement){}}
var hasCanvas=(function(){var c=document.createElement("canvas");var val=false;try{val=!!((typeof c.getContext=="function")&&c.getContext("2d"));}catch(e){}
return function(){return val;}})();var hasCanvasImageData=(function(){var c=document.createElement("canvas");var val=false;var ctx;try{if(typeof c.getContext=="function"&&(ctx=c.getContext("2d"))){val=(typeof ctx.getImageData=="function");}}catch(e){}
return function(){return val;}})();var hasGlobalAlpha=(function(){var hasAlpha=false;var red=document.createElement("canvas");if(hasCanvas()&&hasCanvasImageData()){red.width=red.height=1;var redctx=red.getContext("2d");redctx.fillStyle="rgb(255,0,0)";redctx.fillRect(0,0,1,1);var blue=document.createElement("canvas");blue.width=blue.height=1;var bluectx=blue.getContext("2d");bluectx.fillStyle="rgb(0,0,255)";bluectx.fillRect(0,0,1,1);redctx.globalAlpha=0.5;redctx.drawImage(blue,0,0);var reddata=redctx.getImageData(0,0,1,1).data;hasAlpha=(reddata[2]!=255);}
return function(){return hasAlpha;}})();return{parseOnLoad:false,debug:false,applyAction:function(img,dataImg,actionName,options){options=options||{};var imageIsCanvas=(img.tagName.toLowerCase()=="canvas");if(imageIsCanvas&&Pixastic.Client.isIE()){if(Pixastic.debug)writeDebug("Tried to process a canvas element but browser is IE.");return false;}
var canvas,ctx;var hasOutputCanvas=false;if(Pixastic.Client.hasCanvas()){hasOutputCanvas=!!options.resultCanvas;canvas=options.resultCanvas||document.createElement("canvas");ctx=canvas.getContext("2d");}
var w=img.offsetWidth;var h=img.offsetHeight;if(imageIsCanvas){w=img.width;h=img.height;}
if(w==0||h==0){if(img.parentNode==null){var oldpos=img.style.position;var oldleft=img.style.left;img.style.position="absolute";img.style.left="-9999px";document.body.appendChild(img);w=img.offsetWidth;h=img.offsetHeight;document.body.removeChild(img);img.style.position=oldpos;img.style.left=oldleft;}else{if(Pixastic.debug)writeDebug("Image has 0 width and/or height.");return;}}
if(actionName.indexOf("(")>-1){var tmp=actionName;actionName=tmp.substr(0,tmp.indexOf("("));var arg=tmp.match(/\((.*?)\)/);if(arg[1]){arg=arg[1].split(";");for(var a=0;a<arg.length;a++){thisArg=arg[a].split("=");if(thisArg.length==2){if(thisArg[0]=="rect"){var rectVal=thisArg[1].split(",");options[thisArg[0]]={left:parseInt(rectVal[0],10)||0,top:parseInt(rectVal[1],10)||0,width:parseInt(rectVal[2],10)||0,height:parseInt(rectVal[3],10)||0}}else{options[thisArg[0]]=thisArg[1];}}}}}
if(!options.rect){options.rect={left:0,top:0,width:w,height:h};}else{options.rect.left=Math.round(options.rect.left);options.rect.top=Math.round(options.rect.top);options.rect.width=Math.round(options.rect.width);options.rect.height=Math.round(options.rect.height);}
var validAction=false;if(Pixastic.Actions[actionName]&&typeof Pixastic.Actions[actionName].process=="function"){validAction=true;}
if(!validAction){if(Pixastic.debug)writeDebug("Invalid action \""+actionName+"\". Maybe file not included?");return false;}
if(!Pixastic.Actions[actionName].checkSupport()){if(Pixastic.debug)writeDebug("Action \""+actionName+"\" not supported by this browser.");return false;}
if(Pixastic.Client.hasCanvas()){if(canvas!==img){canvas.width=w;canvas.height=h;}
if(!hasOutputCanvas){canvas.style.width=w+"px";canvas.style.height=h+"px";}
ctx.drawImage(dataImg,0,0,w,h);if(!img.__pixastic_org_image){canvas.__pixastic_org_image=img;canvas.__pixastic_org_width=w;canvas.__pixastic_org_height=h;}else{canvas.__pixastic_org_image=img.__pixastic_org_image;canvas.__pixastic_org_width=img.__pixastic_org_width;canvas.__pixastic_org_height=img.__pixastic_org_height;}}else if(Pixastic.Client.isIE()&&typeof img.__pixastic_org_style=="undefined"){img.__pixastic_org_style=img.style.cssText;}
var params={image:img,canvas:canvas,width:w,height:h,useData:true,options:options}
var res=Pixastic.Actions[actionName].process(params);if(!res){return false;}
if(Pixastic.Client.hasCanvas()){if(params.useData){if(Pixastic.Client.hasCanvasImageData()){canvas.getContext("2d").putImageData(params.canvasData,options.rect.left,options.rect.top);canvas.getContext("2d").fillRect(0,0,0,0);}}
if(!options.leaveDOM){canvas.title=img.title;canvas.imgsrc=img.imgsrc;if(!imageIsCanvas)canvas.alt=img.alt;if(!imageIsCanvas)canvas.imgsrc=img.src;canvas.className=img.className;canvas.style.cssText=img.style.cssText;canvas.name=img.name;canvas.tabIndex=img.tabIndex;canvas.id=img.id;if(img.parentNode&&img.parentNode.replaceChild){img.parentNode.replaceChild(canvas,img);}}
options.resultCanvas=canvas;return canvas;}
return img;},prepareData:function(params,getCopy){var ctx=params.canvas.getContext("2d");var rect=params.options.rect;var dataDesc=ctx.getImageData(rect.left,rect.top,rect.width,rect.height);var data=dataDesc.data;if(!getCopy)params.canvasData=dataDesc;return data;},process:function(img,actionName,options,callback){if(img.tagName.toLowerCase()=="img"){var dataImg=new Image();dataImg.src=img.src;if(dataImg.complete){var res=Pixastic.applyAction(img,dataImg,actionName,options);if(callback)callback(res);return res;}else{dataImg.onload=function(){var res=Pixastic.applyAction(img,dataImg,actionName,options)
if(callback)callback(res);}}}
if(img.tagName.toLowerCase()=="canvas"){var res=Pixastic.applyAction(img,img,actionName,options);if(callback)callback(res);return res;}},revert:function(img){if(Pixastic.Client.hasCanvas()){if(img.tagName.toLowerCase()=="canvas"&&img.__pixastic_org_image){img.width=img.__pixastic_org_width;img.height=img.__pixastic_org_height;img.getContext("2d").drawImage(img.__pixastic_org_image,0,0);if(img.parentNode&&img.parentNode.replaceChild){img.parentNode.replaceChild(img.__pixastic_org_image,img);}
return img;}}else if(Pixastic.Client.isIE()){if(typeof img.__pixastic_org_style!="undefined")
img.style.cssText=img.__pixastic_org_style;}},Client:{hasCanvas:hasCanvas,hasCanvasImageData:hasCanvasImageData,hasGlobalAlpha:hasGlobalAlpha,isIE:function(){return!!document.all&&!!window.attachEvent&&!window.opera;}},Actions:{}}})();if(typeof jQuery!="undefined"&&jQuery&&jQuery.fn){jQuery.fn.pixastic=function(action,options){var newElements=[];this.each(function(){if(this.tagName.toLowerCase()=="img"&&!this.complete){return;}
var res=Pixastic.process(this,action,options);if(res){newElements.push(res);}});if(newElements.length>0)
return jQuery(newElements);else
return this;};};Pixastic.Actions.blend={process:function(params){var amount=parseFloat(params.options.amount);var mode=(params.options.mode||"normal").toLowerCase();var image=params.options.image;amount=Math.max(0,Math.min(1,amount));if(!image)return false;if(Pixastic.Client.hasCanvasImageData()){var rect=params.options.rect;var data=Pixastic.prepareData(params);var w=rect.width;var h=rect.height;params.useData=false;var otherCanvas=document.createElement("canvas");otherCanvas.width=params.canvas.width;otherCanvas.height=params.canvas.height;var otherCtx=otherCanvas.getContext("2d");otherCtx.drawImage(image,0,0);var params2={canvas:otherCanvas,options:params.options};var data2=Pixastic.prepareData(params2);var dataDesc2=params2.canvasData;var p=w*h;var pix=p*4;var pix1,pix2;var r1,g1,b1;var r2,g2,b2;var r3,g3,b3;var r4,g4,b4;var dataChanged=false;switch(mode){case"normal":break;case"multiply":while(p--){data2[pix-=4]=data[pix]*data2[pix]/255;data2[pix1=pix+1]=data[pix1]*data2[pix1]/255;data2[pix2=pix+2]=data[pix2]*data2[pix2]/255;}
dataChanged=true;break;case"lighten":while(p--){if((r1=data[pix-=4])>data2[pix])
data2[pix]=r1;if((g1=data[pix1=pix+1])>data2[pix1])
data2[pix1]=g1;if((b1=data[pix2=pix+2])>data2[pix2])
data2[pix2]=b1;}
dataChanged=true;break;case"darken":while(p--){if((r1=data[pix-=4])<data2[pix])
data2[pix]=r1;if((g1=data[pix1=pix+1])<data2[pix1])
data2[pix1]=g1;if((b1=data[pix2=pix+2])<data2[pix2])
data2[pix2]=b1;}
dataChanged=true;break;case"darkercolor":while(p--){if(((r1=data[pix-=4])*0.3+(g1=data[pix1=pix+1])*0.59+(b1=data[pix2=pix+2])*0.11)<=(data2[pix]*0.3+data2[pix1]*0.59+data2[pix2]*0.11)){data2[pix]=r1;data2[pix1]=g1;data2[pix2]=b1;}}
dataChanged=true;break;case"lightercolor":while(p--){if(((r1=data[pix-=4])*0.3+(g1=data[pix1=pix+1])*0.59+(b1=data[pix2=pix+2])*0.11)>(data2[pix]*0.3+data2[pix1]*0.59+data2[pix2]*0.11)){data2[pix]=r1;data2[pix1]=g1;data2[pix2]=b1;}}
dataChanged=true;break;case"lineardodge":while(p--){if((r3=data[pix-=4]+data2[pix])>255)
data2[pix]=255;else
data2[pix]=r3;if((g3=data[pix1=pix+1]+data2[pix1])>255)
data2[pix1]=255;else
data2[pix1]=g3;if((b3=data[pix2=pix+2]+data2[pix2])>255)
data2[pix2]=255;else
data2[pix2]=b3;}
dataChanged=true;break;case"linearburn":while(p--){if((r3=data[pix-=4]+data2[pix])<255)
data2[pix]=0;else
data2[pix]=(r3-255);if((g3=data[pix1=pix+1]+data2[pix1])<255)
data2[pix1]=0;else
data2[pix1]=(g3-255);if((b3=data[pix2=pix+2]+data2[pix2])<255)
data2[pix2]=0;else
data2[pix2]=(b3-255);}
dataChanged=true;break;case"difference":while(p--){if((r3=data[pix-=4]-data2[pix])<0)
data2[pix]=-r3;else
data2[pix]=r3;if((g3=data[pix1=pix+1]-data2[pix1])<0)
data2[pix1]=-g3;else
data2[pix1]=g3;if((b3=data[pix2=pix+2]-data2[pix2])<0)
data2[pix2]=-b3;else
data2[pix2]=b3;}
dataChanged=true;break;case"screen":while(p--){data2[pix-=4]=(255-(((255-data2[pix])*(255-data[pix]))>>8));data2[pix1=pix+1]=(255-(((255-data2[pix1])*(255-data[pix1]))>>8));data2[pix2=pix+2]=(255-(((255-data2[pix2])*(255-data[pix2]))>>8));}
dataChanged=true;break;case"exclusion":var div_2_255=2/255;while(p--){data2[pix-=4]=(r1=data[pix])-(r1*div_2_255-1)*data2[pix];data2[pix1=pix+1]=(g1=data[pix1])-(g1*div_2_255-1)*data2[pix1];data2[pix2=pix+2]=(b1=data[pix2])-(b1*div_2_255-1)*data2[pix2];}
dataChanged=true;break;case"overlay":var div_2_255=2/255;while(p--){if((r1=data[pix-=4])<128)
data2[pix]=data2[pix]*r1*div_2_255;else
data2[pix]=255-(255-data2[pix])*(255-r1)*div_2_255;if((g1=data[pix1=pix+1])<128)
data2[pix1]=data2[pix1]*g1*div_2_255;else
data2[pix1]=255-(255-data2[pix1])*(255-g1)*div_2_255;if((b1=data[pix2=pix+2])<128)
data2[pix2]=data2[pix2]*b1*div_2_255;else
data2[pix2]=255-(255-data2[pix2])*(255-b1)*div_2_255;}
dataChanged=true;break;case"softlight":var div_2_255=2/255;while(p--){if((r1=data[pix-=4])<128)
data2[pix]=((data2[pix]>>1)+64)*r1*div_2_255;else
data2[pix]=255-(191-(data2[pix]>>1))*(255-r1)*div_2_255;if((g1=data[pix1=pix+1])<128)
data2[pix1]=((data2[pix1]>>1)+64)*g1*div_2_255;else
data2[pix1]=255-(191-(data2[pix1]>>1))*(255-g1)*div_2_255;if((b1=data[pix2=pix+2])<128)
data2[pix2]=((data2[pix2]>>1)+64)*b1*div_2_255;else
data2[pix2]=255-(191-(data2[pix2]>>1))*(255-b1)*div_2_255;}
dataChanged=true;break;case"hardlight":var div_2_255=2/255;while(p--){if((r2=data2[pix-=4])<128)
data2[pix]=data[pix]*r2*div_2_255;else
data2[pix]=255-(255-data[pix])*(255-r2)*div_2_255;if((g2=data2[pix1=pix+1])<128)
data2[pix1]=data[pix1]*g2*div_2_255;else
data2[pix1]=255-(255-data[pix1])*(255-g2)*div_2_255;if((b2=data2[pix2=pix+2])<128)
data2[pix2]=data[pix2]*b2*div_2_255;else
data2[pix2]=255-(255-data[pix2])*(255-b2)*div_2_255;}
dataChanged=true;break;case"colordodge":while(p--){if((r3=(data[pix-=4]<<8)/(255-(r2=data2[pix])))>255||r2==255)
data2[pix]=255;else
data2[pix]=r3;if((g3=(data[pix1=pix+1]<<8)/(255-(g2=data2[pix1])))>255||g2==255)
data2[pix1]=255;else
data2[pix1]=g3;if((b3=(data[pix2=pix+2]<<8)/(255-(b2=data2[pix2])))>255||b2==255)
data2[pix2]=255;else
data2[pix2]=b3;}
dataChanged=true;break;case"colorburn":while(p--){if((r3=255-((255-data[pix-=4])<<8)/data2[pix])<0||data2[pix]==0)
data2[pix]=0;else
data2[pix]=r3;if((g3=255-((255-data[pix1=pix+1])<<8)/data2[pix1])<0||data2[pix1]==0)
data2[pix1]=0;else
data2[pix1]=g3;if((b3=255-((255-data[pix2=pix+2])<<8)/data2[pix2])<0||data2[pix2]==0)
data2[pix2]=0;else
data2[pix2]=b3;}
dataChanged=true;break;case"linearlight":while(p--){if(((r3=2*(r2=data2[pix-=4])+data[pix]-256)<0)||(r2<128&&r3<0)){data2[pix]=0}else{if(r3>255)
data2[pix]=255;else
data2[pix]=r3;}
if(((g3=2*(g2=data2[pix1=pix+1])+data[pix1]-256)<0)||(g2<128&&g3<0)){data2[pix1]=0}else{if(g3>255)
data2[pix1]=255;else
data2[pix1]=g3;}
if(((b3=2*(b2=data2[pix2=pix+2])+data[pix2]-256)<0)||(b2<128&&b3<0)){data2[pix2]=0}else{if(b3>255)
data2[pix2]=255;else
data2[pix2]=b3;}}
dataChanged=true;break;case"vividlight":while(p--){if((r2=data2[pix-=4])<128){if(r2){if((r3=255-((255-data[pix])<<8)/(2*r2))<0)
data2[pix]=0;else
data2[pix]=r3}else{data2[pix]=0;}}else if((r3=(r4=2*r2-256))<255){if((r3=(data[pix]<<8)/(255-r4))>255)
data2[pix]=255;else
data2[pix]=r3;}else{if(r3<0)
data2[pix]=0;else
data2[pix]=r3}
if((g2=data2[pix1=pix+1])<128){if(g2){if((g3=255-((255-data[pix1])<<8)/(2*g2))<0)
data2[pix1]=0;else
data2[pix1]=g3;}else{data2[pix1]=0;}}else if((g3=(g4=2*g2-256))<255){if((g3=(data[pix1]<<8)/(255-g4))>255)
data2[pix1]=255;else
data2[pix1]=g3;}else{if(g3<0)
data2[pix1]=0;else
data2[pix1]=g3;}
if((b2=data2[pix2=pix+2])<128){if(b2){if((b3=255-((255-data[pix2])<<8)/(2*b2))<0)
data2[pix2]=0;else
data2[pix2]=b3;}else{data2[pix2]=0;}}else if((b3=(b4=2*b2-256))<255){if((b3=(data[pix2]<<8)/(255-b4))>255)
data2[pix2]=255;else
data2[pix2]=b3;}else{if(b3<0)
data2[pix2]=0;else
data2[pix2]=b3;}}
dataChanged=true;break;case"pinlight":while(p--){if((r2=data2[pix-=4])<128)
if((r1=data[pix])<(r4=2*r2))
data2[pix]=r1;else
data2[pix]=r4;else
if((r1=data[pix])>(r4=2*r2-256))
data2[pix]=r1;else
data2[pix]=r4;if((g2=data2[pix1=pix+1])<128)
if((g1=data[pix1])<(g4=2*g2))
data2[pix1]=g1;else
data2[pix1]=g4;else
if((g1=data[pix1])>(g4=2*g2-256))
data2[pix1]=g1;else
data2[pix1]=g4;if((r2=data2[pix2=pix+2])<128)
if((r1=data[pix2])<(r4=2*r2))
data2[pix2]=r1;else
data2[pix2]=r4;else
if((r1=data[pix2])>(r4=2*r2-256))
data2[pix2]=r1;else
data2[pix2]=r4;}
dataChanged=true;break;case"hardmix":while(p--){if((r2=data2[pix-=4])<128)
if(255-((255-data[pix])<<8)/(2*r2)<128||r2==0)
data2[pix]=0;else
data2[pix]=255;else if((r4=2*r2-256)<255&&(data[pix]<<8)/(255-r4)<128)
data2[pix]=0;else
data2[pix]=255;if((g2=data2[pix1=pix+1])<128)
if(255-((255-data[pix1])<<8)/(2*g2)<128||g2==0)
data2[pix1]=0;else
data2[pix1]=255;else if((g4=2*g2-256)<255&&(data[pix1]<<8)/(255-g4)<128)
data2[pix1]=0;else
data2[pix1]=255;if((b2=data2[pix2=pix+2])<128)
if(255-((255-data[pix2])<<8)/(2*b2)<128||b2==0)
data2[pix2]=0;else
data2[pix2]=255;else if((b4=2*b2-256)<255&&(data[pix2]<<8)/(255-b4)<128)
data2[pix2]=0;else
data2[pix2]=255;}
dataChanged=true;break;}
if(dataChanged)
otherCtx.putImageData(dataDesc2,0,0);if(amount!=1&&!Pixastic.Client.hasGlobalAlpha()){var p=w*h;var amount2=amount;var amount1=1-amount;while(p--){var pix=p*4;var r=(data[pix]*amount1+data2[pix]*amount2)>>0;var g=(data[pix+1]*amount1+data2[pix+1]*amount2)>>0;var b=(data[pix+2]*amount1+data2[pix+2]*amount2)>>0;data[pix]=r;data[pix+1]=g;data[pix+2]=b;}
params.useData=true;}else{var ctx=params.canvas.getContext("2d");ctx.save();ctx.globalAlpha=amount;ctx.drawImage(otherCanvas,0,0,rect.width,rect.height,rect.left,rect.top,rect.width,rect.height);ctx.globalAlpha=1;ctx.restore();}
return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.blur={process:function(params){if(typeof params.options.fixMargin=="undefined")
params.options.fixMargin=true;if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var dataCopy=Pixastic.prepareData(params,true)
var kernel=[[0,1,0],[1,2,1],[0,1,0]];var weight=0;for(var i=0;i<3;i++){for(var j=0;j<3;j++){weight+=kernel[i][j];}}
weight=1/(weight*2);var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var prevY=(y==1)?0:y-2;var nextY=(y==h)?y-1:y;var offsetYPrev=prevY*w*4;var offsetYNext=nextY*w*4;var x=w;do{var offset=offsetY+(x*4-4);var offsetPrev=offsetYPrev+((x==1)?0:x-2)*4;var offsetNext=offsetYNext+((x==w)?x-1:x)*4;data[offset]=((dataCopy[offsetPrev]
+dataCopy[offset-4]
+dataCopy[offset+4]
+dataCopy[offsetNext])*2
+dataCopy[offset]*4)*weight;data[offset+1]=((dataCopy[offsetPrev+1]
+dataCopy[offset-3]
+dataCopy[offset+5]
+dataCopy[offsetNext+1])*2
+dataCopy[offset+1]*4)*weight;data[offset+2]=((dataCopy[offsetPrev+2]
+dataCopy[offset-2]
+dataCopy[offset+6]
+dataCopy[offsetNext+2])*2
+dataCopy[offset+2]*4)*weight;}while(--x);}while(--y);return true;}else if(Pixastic.Client.isIE()){params.image.style.filter+=" progid:DXImageTransform.Microsoft.Blur(pixelradius=1.5)";if(params.options.fixMargin){params.image.style.marginLeft=(parseInt(params.image.style.marginLeft,10)||0)-2+"px";params.image.style.marginTop=(parseInt(params.image.style.marginTop,10)||0)-2+"px";}
return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvasImageData()||Pixastic.Client.isIE());}}
Pixastic.Actions.blurfast={process:function(params){var amount=parseFloat(params.options.amount)||0;var clear=!!(params.options.clear&&params.options.clear!="false");amount=Math.max(0,Math.min(5,amount));if(Pixastic.Client.hasCanvas()){var rect=params.options.rect;var ctx=params.canvas.getContext("2d");ctx.save();ctx.beginPath();ctx.rect(rect.left,rect.top,rect.width,rect.height);ctx.clip();var scale=2;var smallWidth=Math.round(params.width/scale);var smallHeight=Math.round(params.height/scale);var copy=document.createElement("canvas");copy.width=smallWidth;copy.height=smallHeight;var clear=false;var steps=Math.round(amount*20);var copyCtx=copy.getContext("2d");for(var i=0;i<steps;i++){var scaledWidth=Math.max(1,Math.round(smallWidth-i));var scaledHeight=Math.max(1,Math.round(smallHeight-i));copyCtx.clearRect(0,0,smallWidth,smallHeight);copyCtx.drawImage(params.canvas,0,0,params.width,params.height,0,0,scaledWidth,scaledHeight);if(clear)
ctx.clearRect(rect.left,rect.top,rect.width,rect.height);ctx.drawImage(copy,0,0,scaledWidth,scaledHeight,0,0,params.width,params.height);}
ctx.restore();params.useData=false;return true;}else if(Pixastic.Client.isIE()){var radius=10*amount;params.image.style.filter+=" progid:DXImageTransform.Microsoft.Blur(pixelradius="+radius+")";if(params.options.fixMargin||1){params.image.style.marginLeft=(parseInt(params.image.style.marginLeft,10)||0)-Math.round(radius)+"px";params.image.style.marginTop=(parseInt(params.image.style.marginTop,10)||0)-Math.round(radius)+"px";}
return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvas()||Pixastic.Client.isIE());}}
Pixastic.Actions.brightness={process:function(params){var brightness=parseInt(params.options.brightness,10)||0;var contrast=parseFloat(params.options.contrast)||0;var legacy=!!(params.options.legacy&&params.options.legacy!="false");if(legacy){brightness=Math.min(150,Math.max(-150,brightness));}else{var brightMul=1+Math.min(150,Math.max(-150,brightness))/150;}
contrast=Math.max(0,contrast+1);if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var rect=params.options.rect;var w=rect.width;var h=rect.height;var p=w*h;var pix=p*4,pix1,pix2;var mul,add;if(contrast!=1){if(legacy){mul=contrast;add=(brightness-128)*contrast+128;}else{mul=brightMul*contrast;add=-contrast*128+128;}}else{if(legacy){mul=1;add=brightness;}else{mul=brightMul;add=0;}}
var r,g,b;while(p--){if((r=data[pix-=4]*mul+add)>255)
data[pix]=255;else if(r<0)
data[pix]=0;else
data[pix]=r;if((g=data[pix1=pix+1]*mul+add)>255)
data[pix1]=255;else if(g<0)
data[pix1]=0;else
data[pix1]=g;if((b=data[pix2=pix+2]*mul+add)>255)
data[pix2]=255;else if(b<0)
data[pix2]=0;else
data[pix2]=b;}
return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.coloradjust={process:function(params){var red=parseFloat(params.options.red)||0;var green=parseFloat(params.options.green)||0;var blue=parseFloat(params.options.blue)||0;red=Math.round(red*255);green=Math.round(green*255);blue=Math.round(blue*255);if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var rect=params.options.rect;var p=rect.width*rect.height;var pix=p*4,pix1,pix2;var r,g,b;while(p--){pix-=4;if(red){if((r=data[pix]+red)<0)
data[pix]=0;else if(r>255)
data[pix]=255;else
data[pix]=r;}
if(green){if((g=data[pix1=pix+1]+green)<0)
data[pix1]=0;else if(g>255)
data[pix1]=255;else
data[pix1]=g;}
if(blue){if((b=data[pix2=pix+2]+blue)<0)
data[pix2]=0;else if(b>255)
data[pix2]=255;else
data[pix2]=b;}}
return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvasImageData());}}
Pixastic.Actions.colorhistogram={array256:function(default_value){arr=[];for(var i=0;i<256;i++){arr[i]=default_value;}
return arr},process:function(params){var values=[];if(typeof params.options.returnValue!="object"){params.options.returnValue={rvals:[],gvals:[],bvals:[]};}
var paint=!!(params.options.paint);var returnValue=params.options.returnValue;if(typeof returnValue.values!="array"){returnValue.rvals=[];returnValue.gvals=[];returnValue.bvals=[];}
if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);params.useData=false;var rvals=this.array256(0);var gvals=this.array256(0);var bvals=this.array256(0);var rect=params.options.rect;var p=rect.width*rect.height;var pix=p*4;while(p--){rvals[data[pix-=4]]++;gvals[data[pix+1]]++;bvals[data[pix+2]]++;}
returnValue.rvals=rvals;returnValue.gvals=gvals;returnValue.bvals=bvals;if(paint){var ctx=params.canvas.getContext("2d");var vals=[rvals,gvals,bvals];for(var v=0;v<3;v++){var yoff=(v+1)*params.height/3;var maxValue=0;for(var i=0;i<256;i++){if(vals[v][i]>maxValue)
maxValue=vals[v][i];}
var heightScale=params.height/3/maxValue;var widthScale=params.width/256;if(v==0)ctx.fillStyle="rgba(255,0,0,0.5)";else if(v==1)ctx.fillStyle="rgba(0,255,0,0.5)";else if(v==2)ctx.fillStyle="rgba(0,0,255,0.5)";for(var i=0;i<256;i++){ctx.fillRect(i*widthScale,params.height-heightScale*vals[v][i]-params.height+yoff,widthScale,vals[v][i]*heightScale);}}}
return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.crop={process:function(params){if(Pixastic.Client.hasCanvas()){var rect=params.options.rect;var width=rect.width;var height=rect.height;var top=rect.top;var left=rect.left;if(typeof params.options.left!="undefined")
left=parseInt(params.options.left,10);if(typeof params.options.top!="undefined")
top=parseInt(params.options.top,10);if(typeof params.options.height!="undefined")
width=parseInt(params.options.width,10);if(typeof params.options.height!="undefined")
height=parseInt(params.options.height,10);if(left<0)left=0;if(left>params.width-1)left=params.width-1;if(top<0)top=0;if(top>params.height-1)top=params.height-1;if(width<1)width=1;if(left+width>params.width)
width=params.width-left;if(height<1)height=1;if(top+height>params.height)
height=params.height-top;var copy=document.createElement("canvas");copy.width=params.width;copy.height=params.height;copy.getContext("2d").drawImage(params.canvas,0,0);params.canvas.width=width;params.canvas.height=height;params.canvas.getContext("2d").clearRect(0,0,width,height);params.canvas.getContext("2d").drawImage(copy,left,top,width,height,0,0,width,height);params.useData=false;return true;}},checkSupport:function(){return Pixastic.Client.hasCanvas();}}
Pixastic.Actions.desaturate={process:function(params){var useAverage=!!(params.options.average&&params.options.average!="false");if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var rect=params.options.rect;var w=rect.width;var h=rect.height;var p=w*h;var pix=p*4,pix1,pix2;if(useAverage){while(p--)
data[pix-=4]=data[pix1=pix+1]=data[pix2=pix+2]=(data[pix]+data[pix1]+data[pix2])/3}else{while(p--)
data[pix-=4]=data[pix1=pix+1]=data[pix2=pix+2]=(data[pix]*0.3+data[pix1]*0.59+data[pix2]*0.11);}
return true;}else if(Pixastic.Client.isIE()){params.image.style.filter+=" gray";return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvasImageData()||Pixastic.Client.isIE());}}
Pixastic.Actions.edges={process:function(params){var mono=!!(params.options.mono&&params.options.mono!="false");var invert=!!(params.options.invert&&params.options.invert!="false");if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var dataCopy=Pixastic.prepareData(params,true)
var c=-1/8;var kernel=[[c,c,c],[c,1,c],[c,c,c]];weight=1/c;var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var nextY=(y==h)?y-1:y;var prevY=(y==1)?0:y-2;var offsetYPrev=prevY*w*4;var offsetYNext=nextY*w*4;var x=w;do{var offset=offsetY+(x*4-4);var offsetPrev=offsetYPrev+((x==1)?0:x-2)*4;var offsetNext=offsetYNext+((x==w)?x-1:x)*4;var r=((dataCopy[offsetPrev-4]
+dataCopy[offsetPrev]
+dataCopy[offsetPrev+4]
+dataCopy[offset-4]
+dataCopy[offset+4]
+dataCopy[offsetNext-4]
+dataCopy[offsetNext]
+dataCopy[offsetNext+4])*c
+dataCopy[offset])*weight;var g=((dataCopy[offsetPrev-3]
+dataCopy[offsetPrev+1]
+dataCopy[offsetPrev+5]
+dataCopy[offset-3]
+dataCopy[offset+5]
+dataCopy[offsetNext-3]
+dataCopy[offsetNext+1]
+dataCopy[offsetNext+5])*c
+dataCopy[offset+1])*weight;var b=((dataCopy[offsetPrev-2]
+dataCopy[offsetPrev+2]
+dataCopy[offsetPrev+6]
+dataCopy[offset-2]
+dataCopy[offset+6]
+dataCopy[offsetNext-2]
+dataCopy[offsetNext+2]
+dataCopy[offsetNext+6])*c
+dataCopy[offset+2])*weight;if(mono){var brightness=(r*0.3+g*0.59+b*0.11)||0;if(invert)brightness=255-brightness;if(brightness<0)brightness=0;if(brightness>255)brightness=255;r=g=b=brightness;}else{if(invert){r=255-r;g=255-g;b=255-b;}
if(r<0)r=0;if(g<0)g=0;if(b<0)b=0;if(r>255)r=255;if(g>255)g=255;if(b>255)b=255;}
data[offset]=r;data[offset+1]=g;data[offset+2]=b;}while(--x);}while(--y);return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.edges2={process:function(params){if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var dataCopy=Pixastic.prepareData(params,true)
var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var pixel=w4+4;var hm1=h-1;var wm1=w-1;for(var y=1;y<hm1;++y){var centerRow=pixel-4;var priorRow=centerRow-w4;var nextRow=centerRow+w4;var r1=-dataCopy[priorRow]-dataCopy[centerRow]-dataCopy[nextRow];var g1=-dataCopy[++priorRow]-dataCopy[++centerRow]-dataCopy[++nextRow];var b1=-dataCopy[++priorRow]-dataCopy[++centerRow]-dataCopy[++nextRow];var rp=dataCopy[priorRow+=2];var gp=dataCopy[++priorRow];var bp=dataCopy[++priorRow];var rc=dataCopy[centerRow+=2];var gc=dataCopy[++centerRow];var bc=dataCopy[++centerRow];var rn=dataCopy[nextRow+=2];var gn=dataCopy[++nextRow];var bn=dataCopy[++nextRow];var r2=-rp-rc-rn;var g2=-gp-gc-gn;var b2=-bp-bc-bn;for(var x=1;x<wm1;++x){centerRow=pixel+4;priorRow=centerRow-w4;nextRow=centerRow+w4;var r=127+r1-rp-(rc*-8)-rn;var g=127+g1-gp-(gc*-8)-gn;var b=127+b1-bp-(bc*-8)-bn;r1=r2;g1=g2;b1=b2;rp=dataCopy[priorRow];gp=dataCopy[++priorRow];bp=dataCopy[++priorRow];rc=dataCopy[centerRow];gc=dataCopy[++centerRow];bc=dataCopy[++centerRow];rn=dataCopy[nextRow];gn=dataCopy[++nextRow];bn=dataCopy[++nextRow];r+=(r2=-rp-rc-rn);g+=(g2=-gp-gc-gn);b+=(b2=-bp-bc-bn);if(r>255)r=255;if(g>255)g=255;if(b>255)b=255;if(r<0)r=0;if(g<0)g=0;if(b<0)b=0;data[pixel]=r;data[++pixel]=g;data[++pixel]=b;pixel+=2;}
pixel+=8;}
return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.emboss={process:function(params){var strength=parseFloat(params.options.strength)||1;var greyLevel=typeof params.options.greyLevel!="undefined"?parseInt(params.options.greyLevel):180;var direction=params.options.direction||"topleft";var blend=!!(params.options.blend&&params.options.blend!="false");var dirY=0;var dirX=0;switch(direction){case"topleft":dirY=-1;dirX=-1;break;case"top":dirY=-1;dirX=0;break;case"topright":dirY=-1;dirX=1;break;case"right":dirY=0;dirX=1;break;case"bottomright":dirY=1;dirX=1;break;case"bottom":dirY=1;dirX=0;break;case"bottomleft":dirY=1;dirX=-1;break;case"left":dirY=0;dirX=-1;break;}
if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var dataCopy=Pixastic.prepareData(params,true)
var invertAlpha=!!params.options.invertAlpha;var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var otherY=dirY;if(y+otherY<1)otherY=0;if(y+otherY>h)otherY=0;var offsetYOther=(y-1+otherY)*w*4;var x=w;do{var offset=offsetY+(x-1)*4;var otherX=dirX;if(x+otherX<1)otherX=0;if(x+otherX>w)otherX=0;var offsetOther=offsetYOther+(x-1+otherX)*4;var dR=dataCopy[offset]-dataCopy[offsetOther];var dG=dataCopy[offset+1]-dataCopy[offsetOther+1];var dB=dataCopy[offset+2]-dataCopy[offsetOther+2];var dif=dR;var absDif=dif>0?dif:-dif;var absG=dG>0?dG:-dG;var absB=dB>0?dB:-dB;if(absG>absDif){dif=dG;}
if(absB>absDif){dif=dB;}
dif*=strength;if(blend){var r=data[offset]+dif;var g=data[offset+1]+dif;var b=data[offset+2]+dif;data[offset]=(r>255)?255:(r<0?0:r);data[offset+1]=(g>255)?255:(g<0?0:g);data[offset+2]=(b>255)?255:(b<0?0:b);}else{var grey=greyLevel-dif;if(grey<0){grey=0;}else if(grey>255){grey=255;}
data[offset]=data[offset+1]=data[offset+2]=grey;}}while(--x);}while(--y);return true;}else if(Pixastic.Client.isIE()){params.image.style.filter+=" progid:DXImageTransform.Microsoft.emboss()";return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvasImageData()||Pixastic.Client.isIE());}}
Pixastic.Actions.flip={process:function(params){var rect=params.options.rect;var copyCanvas=document.createElement("canvas");copyCanvas.width=rect.width;copyCanvas.height=rect.height;copyCanvas.getContext("2d").drawImage(params.image,rect.left,rect.top,rect.width,rect.height,0,0,rect.width,rect.height);var ctx=params.canvas.getContext("2d");ctx.clearRect(rect.left,rect.top,rect.width,rect.height);if(params.options.axis=="horizontal"){ctx.scale(-1,1);ctx.drawImage(copyCanvas,-rect.left-rect.width,rect.top,rect.width,rect.height)}else{ctx.scale(1,-1);ctx.drawImage(copyCanvas,rect.left,-rect.top-rect.height,rect.width,rect.height)}
params.useData=false;return true;},checkSupport:function(){return Pixastic.Client.hasCanvas();}}
Pixastic.Actions.fliph={process:function(params){if(Pixastic.Client.hasCanvas()){var rect=params.options.rect;var copyCanvas=document.createElement("canvas");copyCanvas.width=rect.width;copyCanvas.height=rect.height;copyCanvas.getContext("2d").drawImage(params.image,rect.left,rect.top,rect.width,rect.height,0,0,rect.width,rect.height);var ctx=params.canvas.getContext("2d");ctx.clearRect(rect.left,rect.top,rect.width,rect.height);ctx.scale(-1,1);ctx.drawImage(copyCanvas,-rect.left-rect.width,rect.top,rect.width,rect.height)
params.useData=false;return true;}else if(Pixastic.Client.isIE()){params.image.style.filter+=" fliph";return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvas()||Pixastic.Client.isIE());}}
Pixastic.Actions.flipv={process:function(params){if(Pixastic.Client.hasCanvas()){var rect=params.options.rect;var copyCanvas=document.createElement("canvas");copyCanvas.width=rect.width;copyCanvas.height=rect.height;copyCanvas.getContext("2d").drawImage(params.image,rect.left,rect.top,rect.width,rect.height,0,0,rect.width,rect.height);var ctx=params.canvas.getContext("2d");ctx.clearRect(rect.left,rect.top,rect.width,rect.height);ctx.scale(1,-1);ctx.drawImage(copyCanvas,rect.left,-rect.top-rect.height,rect.width,rect.height)
params.useData=false;return true;}else if(Pixastic.Client.isIE()){params.image.style.filter+=" flipv";return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvas()||Pixastic.Client.isIE());}}
Pixastic.Actions.glow={process:function(params){var amount=(parseFloat(params.options.amount)||0);var blurAmount=parseFloat(params.options.radius)||0;amount=Math.min(1,Math.max(0,amount));blurAmount=Math.min(5,Math.max(0,blurAmount));if(Pixastic.Client.hasCanvasImageData()){var rect=params.options.rect;var blurCanvas=document.createElement("canvas");blurCanvas.width=params.width;blurCanvas.height=params.height;var blurCtx=blurCanvas.getContext("2d");blurCtx.drawImage(params.canvas,0,0);var scale=2;var smallWidth=Math.round(params.width/scale);var smallHeight=Math.round(params.height/scale);var copy=document.createElement("canvas");copy.width=smallWidth;copy.height=smallHeight;var clear=true;var steps=Math.round(blurAmount*20);var copyCtx=copy.getContext("2d");for(var i=0;i<steps;i++){var scaledWidth=Math.max(1,Math.round(smallWidth-i));var scaledHeight=Math.max(1,Math.round(smallHeight-i));copyCtx.clearRect(0,0,smallWidth,smallHeight);copyCtx.drawImage(blurCanvas,0,0,params.width,params.height,0,0,scaledWidth,scaledHeight);blurCtx.clearRect(0,0,params.width,params.height);blurCtx.drawImage(copy,0,0,scaledWidth,scaledHeight,0,0,params.width,params.height);}
var data=Pixastic.prepareData(params);var blurData=Pixastic.prepareData({canvas:blurCanvas,options:params.options});var p=rect.width*rect.height;var pix=p*4,pix1=pix+1,pix2=pix+2,pix3=pix+3;while(p--){if((data[pix-=4]+=amount*blurData[pix])>255)data[pix]=255;if((data[pix1-=4]+=amount*blurData[pix1])>255)data[pix1]=255;if((data[pix2-=4]+=amount*blurData[pix2])>255)data[pix2]=255;}
return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.histogram={process:function(params){var average=!!(params.options.average&&params.options.average!="false");var paint=!!(params.options.paint&&params.options.paint!="false");var color=params.options.color||"rgba(255,255,255,0.5)";var values=[];if(typeof params.options.returnValue!="object"){params.options.returnValue={values:[]};}
var returnValue=params.options.returnValue;if(typeof returnValue.values!="array"){returnValue.values=[];}
values=returnValue.values;if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);params.useData=false;for(var i=0;i<256;i++){values[i]=0;}
var rect=params.options.rect;var p=rect.width*rect.height;var pix=p*4,pix1=pix+1,pix2=pix+2,pix3=pix+3;var round=Math.round;if(average){while(p--){values[round((data[pix-=4]+data[pix+1]+data[pix+2])/3)]++;}}else{while(p--){values[round(data[pix-=4]*0.3+data[pix+1]*0.59+data[pix+2]*0.11)]++;}}
if(paint){var maxValue=0;for(var i=0;i<256;i++){if(values[i]>maxValue){maxValue=values[i];}}
var heightScale=params.height/maxValue;var widthScale=params.width/256;var ctx=params.canvas.getContext("2d");ctx.fillStyle=color;for(var i=0;i<256;i++){ctx.fillRect(i*widthScale,params.height-heightScale*values[i],widthScale,values[i]*heightScale);}}
returnValue.values=values;return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.hsl={process:function(params){var hue=parseInt(params.options.hue,10)||0;var saturation=(parseInt(params.options.saturation,10)||0)/100;var lightness=(parseInt(params.options.lightness,10)||0)/100;if(saturation<0){var satMul=1+saturation;}else{var satMul=1+saturation*2;}
hue=(hue%360)/360;var hue6=hue*6;var rgbDiv=1/255;var light255=lightness*255;var lightp1=1+lightness;var lightm1=1-lightness;if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var rect=params.options.rect;var p=rect.width*rect.height;var pix=p*4,pix1=pix+1,pix2=pix+2,pix3=pix+3;while(p--){var r=data[pix-=4];var g=data[pix1=pix+1];var b=data[pix2=pix+2];if(hue!=0||saturation!=0){var vs=r;if(g>vs)vs=g;if(b>vs)vs=b;var ms=r;if(g<ms)ms=g;if(b<ms)ms=b;var vm=(vs-ms);var l=(ms+vs)/510;if(l>0){if(vm>0){if(l<=0.5){var s=vm/(vs+ms)*satMul;if(s>1)s=1;var v=(l*(1+s));}else{var s=vm/(510-vs-ms)*satMul;if(s>1)s=1;var v=(l+s-l*s);}
if(r==vs){if(g==ms)
var h=5+((vs-b)/vm)+hue6;else
var h=1-((vs-g)/vm)+hue6;}else if(g==vs){if(b==ms)
var h=1+((vs-r)/vm)+hue6;else
var h=3-((vs-b)/vm)+hue6;}else{if(r==ms)
var h=3+((vs-g)/vm)+hue6;else
var h=5-((vs-r)/vm)+hue6;}
if(h<0)h+=6;if(h>=6)h-=6;var m=(l+l-v);var sextant=h>>0;if(sextant==0){r=v*255;g=(m+((v-m)*(h-sextant)))*255;b=m*255;}else if(sextant==1){r=(v-((v-m)*(h-sextant)))*255;g=v*255;b=m*255;}else if(sextant==2){r=m*255;g=v*255;b=(m+((v-m)*(h-sextant)))*255;}else if(sextant==3){r=m*255;g=(v-((v-m)*(h-sextant)))*255;b=v*255;}else if(sextant==4){r=(m+((v-m)*(h-sextant)))*255;g=m*255;b=v*255;}else if(sextant==5){r=v*255;g=m*255;b=(v-((v-m)*(h-sextant)))*255;}}}}
if(lightness<0){r*=lightp1;g*=lightp1;b*=lightp1;}else if(lightness>0){r=r*lightm1+light255;g=g*lightm1+light255;b=b*lightm1+light255;}
if(r<0)
data[pix]=0
else if(r>255)
data[pix]=255
else
data[pix]=r;if(g<0)
data[pix1]=0
else if(g>255)
data[pix1]=255
else
data[pix1]=g;if(b<0)
data[pix2]=0
else if(b>255)
data[pix2]=255
else
data[pix2]=b;}
return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.invert={process:function(params){if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var invertAlpha=!!params.options.invertAlpha;var rect=params.options.rect;var p=rect.width*rect.height;var pix=p*4,pix1=pix+1,pix2=pix+2,pix3=pix+3;while(p--){data[pix-=4]=255-data[pix];data[pix1-=4]=255-data[pix1];data[pix2-=4]=255-data[pix2];if(invertAlpha)
data[pix3-=4]=255-data[pix3];}
return true;}else if(Pixastic.Client.isIE()){params.image.style.filter+=" invert";return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvasImageData()||Pixastic.Client.isIE());}}
Pixastic.Actions.laplace={process:function(params){var strength=1.0;var invert=!!(params.options.invert&&params.options.invert!="false");var contrast=parseFloat(params.options.edgeStrength)||0;var greyLevel=parseInt(params.options.greyLevel)||0;contrast=-contrast;if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var dataCopy=Pixastic.prepareData(params,true)
var kernel=[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]];var weight=1/8;var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var nextY=(y==h)?y-1:y;var prevY=(y==1)?0:y-2;var offsetYPrev=prevY*w*4;var offsetYNext=nextY*w*4;var x=w;do{var offset=offsetY+(x*4-4);var offsetPrev=offsetYPrev+((x==1)?0:x-2)*4;var offsetNext=offsetYNext+((x==w)?x-1:x)*4;var r=((-dataCopy[offsetPrev-4]
-dataCopy[offsetPrev]
-dataCopy[offsetPrev+4]
-dataCopy[offset-4]
-dataCopy[offset+4]
-dataCopy[offsetNext-4]
-dataCopy[offsetNext]
-dataCopy[offsetNext+4])
+dataCopy[offset]*8)*weight;var g=((-dataCopy[offsetPrev-3]
-dataCopy[offsetPrev+1]
-dataCopy[offsetPrev+5]
-dataCopy[offset-3]
-dataCopy[offset+5]
-dataCopy[offsetNext-3]
-dataCopy[offsetNext+1]
-dataCopy[offsetNext+5])
+dataCopy[offset+1]*8)*weight;var b=((-dataCopy[offsetPrev-2]
-dataCopy[offsetPrev+2]
-dataCopy[offsetPrev+6]
-dataCopy[offset-2]
-dataCopy[offset+6]
-dataCopy[offsetNext-2]
-dataCopy[offsetNext+2]
-dataCopy[offsetNext+6])
+dataCopy[offset+2]*8)*weight;var brightness=((r+g+b)/3)+greyLevel;if(contrast!=0){if(brightness>127){brightness+=((brightness+1)-128)*contrast;}else if(brightness<127){brightness-=(brightness+1)*contrast;}}
if(invert){brightness=255-brightness;}
if(brightness<0)brightness=0;if(brightness>255)brightness=255;data[offset]=data[offset+1]=data[offset+2]=brightness;}while(--x);}while(--y);return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.lighten={process:function(params){var amount=parseFloat(params.options.amount)||0;amount=Math.max(-1,Math.min(1,amount));if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var rect=params.options.rect;var p=rect.width*rect.height;var pix=p*4,pix1=pix+1,pix2=pix+2;var mul=amount+1;while(p--){if((data[pix-=4]=data[pix]*mul)>255)
data[pix]=255;if((data[pix1-=4]=data[pix1]*mul)>255)
data[pix1]=255;if((data[pix2-=4]=data[pix2]*mul)>255)
data[pix2]=255;}
return true;}else if(Pixastic.Client.isIE()){var img=params.image;if(amount<0){img.style.filter+=" light()";img.filters[img.filters.length-1].addAmbient(255,255,255,100*-amount);}else if(amount>0){img.style.filter+=" light()";img.filters[img.filters.length-1].addAmbient(255,255,255,100);img.filters[img.filters.length-1].addAmbient(255,255,255,100*amount);}
return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvasImageData()||Pixastic.Client.isIE());}}
Pixastic.Actions.mosaic={process:function(params){var blockSize=Math.max(1,parseInt(params.options.blockSize,10));if(Pixastic.Client.hasCanvasImageData()){var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;var ctx=params.canvas.getContext("2d");var pixel=document.createElement("canvas");pixel.width=pixel.height=1;var pixelCtx=pixel.getContext("2d");var copy=document.createElement("canvas");copy.width=w;copy.height=h;var copyCtx=copy.getContext("2d");copyCtx.drawImage(params.canvas,rect.left,rect.top,w,h,0,0,w,h);for(var y=0;y<h;y+=blockSize){for(var x=0;x<w;x+=blockSize){var blockSizeX=blockSize;var blockSizeY=blockSize;if(blockSizeX+x>w)
blockSizeX=w-x;if(blockSizeY+y>h)
blockSizeY=h-y;pixelCtx.drawImage(copy,x,y,blockSizeX,blockSizeY,0,0,1,1);var data=pixelCtx.getImageData(0,0,1,1).data;ctx.fillStyle="rgb("+data[0]+","+data[1]+","+data[2]+")";ctx.fillRect(rect.left+x,rect.top+y,blockSize,blockSize);}}
params.useData=false;return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvasImageData());}}
Pixastic.Actions.noise={process:function(params){var amount=0;var strength=0;var mono=false;if(typeof params.options.amount!="undefined")
amount=parseFloat(params.options.amount)||0;if(typeof params.options.strength!="undefined")
strength=parseFloat(params.options.strength)||0;if(typeof params.options.mono!="undefined")
mono=!!(params.options.mono&&params.options.mono!="false");amount=Math.max(0,Math.min(1,amount));strength=Math.max(0,Math.min(1,strength));var noise=128*strength;var noise2=noise/2;if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;var random=Math.random;do{var offsetY=(y-1)*w4;var x=w;do{var offset=offsetY+(x-1)*4;if(random()<amount){if(mono){var pixelNoise=-noise2+random()*noise;var r=data[offset]+pixelNoise;var g=data[offset+1]+pixelNoise;var b=data[offset+2]+pixelNoise;}else{var r=data[offset]-noise2+(random()*noise);var g=data[offset+1]-noise2+(random()*noise);var b=data[offset+2]-noise2+(random()*noise);}
if(r<0)r=0;if(g<0)g=0;if(b<0)b=0;if(r>255)r=255;if(g>255)g=255;if(b>255)b=255;data[offset]=r;data[offset+1]=g;data[offset+2]=b;}}while(--x);}while(--y);return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.posterize={process:function(params){var numLevels=256;if(typeof params.options.levels!="undefined")
numLevels=parseInt(params.options.levels,10)||1;if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);numLevels=Math.max(2,Math.min(256,numLevels));var numAreas=256/numLevels;var numValues=256/(numLevels-1);var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var x=w;do{var offset=offsetY+(x-1)*4;var r=numValues*((data[offset]/numAreas)>>0);var g=numValues*((data[offset+1]/numAreas)>>0);var b=numValues*((data[offset+2]/numAreas)>>0);if(r>255)r=255;if(g>255)g=255;if(b>255)b=255;data[offset]=r;data[offset+1]=g;data[offset+2]=b;}while(--x);}while(--y);return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.pointillize={process:function(params){var radius=Math.max(1,parseInt(params.options.radius,10));var density=Math.min(5,Math.max(0,parseFloat(params.options.density)||0));var noise=Math.max(0,parseFloat(params.options.noise)||0);var transparent=!!(params.options.transparent&&params.options.transparent!="false");if(Pixastic.Client.hasCanvasImageData()){var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;var ctx=params.canvas.getContext("2d");var canvasWidth=params.canvas.width;var canvasHeight=params.canvas.height;var pixel=document.createElement("canvas");pixel.width=pixel.height=1;var pixelCtx=pixel.getContext("2d");var copy=document.createElement("canvas");copy.width=w;copy.height=h;var copyCtx=copy.getContext("2d");copyCtx.drawImage(params.canvas,rect.left,rect.top,w,h,0,0,w,h);var diameter=radius*2;if(transparent)
ctx.clearRect(rect.left,rect.top,rect.width,rect.height);var noiseRadius=radius*noise;var dist=1/density;for(var y=0;y<h+radius;y+=diameter*dist){for(var x=0;x<w+radius;x+=diameter*dist){rndX=noise?(x+((Math.random()*2-1)*noiseRadius))>>0:x;rndY=noise?(y+((Math.random()*2-1)*noiseRadius))>>0:y;var pixX=rndX-radius;var pixY=rndY-radius;if(pixX<0)pixX=0;if(pixY<0)pixY=0;var cx=rndX+rect.left;var cy=rndY+rect.top;if(cx<0)cx=0;if(cx>canvasWidth)cx=canvasWidth;if(cy<0)cy=0;if(cy>canvasHeight)cy=canvasHeight;var diameterX=diameter;var diameterY=diameter;if(diameterX+pixX>w)
diameterX=w-pixX;if(diameterY+pixY>h)
diameterY=h-pixY;if(diameterX<1)diameterX=1;if(diameterY<1)diameterY=1;pixelCtx.drawImage(copy,pixX,pixY,diameterX,diameterY,0,0,1,1);var data=pixelCtx.getImageData(0,0,1,1).data;ctx.fillStyle="rgb("+data[0]+","+data[1]+","+data[2]+")";ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2,true);ctx.closePath();ctx.fill();}}
params.useData=false;return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvasImageData());}}
Pixastic.Actions.removenoise={process:function(params){if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var nextY=(y==h)?y-1:y;var prevY=(y==1)?0:y-2;var offsetYPrev=prevY*w*4;var offsetYNext=nextY*w*4;var x=w;do{var offset=offsetY+(x*4-4);var offsetPrev=offsetYPrev+((x==1)?0:x-2)*4;var offsetNext=offsetYNext+((x==w)?x-1:x)*4;var minR,maxR,minG,maxG,minB,maxB;minR=maxR=data[offsetPrev];var r1=data[offset-4],r2=data[offset+4],r3=data[offsetNext];if(r1<minR)minR=r1;if(r2<minR)minR=r2;if(r3<minR)minR=r3;if(r1>maxR)maxR=r1;if(r2>maxR)maxR=r2;if(r3>maxR)maxR=r3;minG=maxG=data[offsetPrev+1];var g1=data[offset-3],g2=data[offset+5],g3=data[offsetNext+1];if(g1<minG)minG=g1;if(g2<minG)minG=g2;if(g3<minG)minG=g3;if(g1>maxG)maxG=g1;if(g2>maxG)maxG=g2;if(g3>maxG)maxG=g3;minB=maxB=data[offsetPrev+2];var b1=data[offset-2],b2=data[offset+6],b3=data[offsetNext+2];if(b1<minB)minB=b1;if(b2<minB)minB=b2;if(b3<minB)minB=b3;if(b1>maxB)maxB=b1;if(b2>maxB)maxB=b2;if(b3>maxB)maxB=b3;if(data[offset]>maxR){data[offset]=maxR;}else if(data[offset]<minR){data[offset]=minR;}
if(data[offset+1]>maxG){data[offset+1]=maxG;}else if(data[offset+1]<minG){data[offset+1]=minG;}
if(data[offset+2]>maxB){data[offset+2]=maxB;}else if(data[offset+2]<minB){data[offset+2]=minB;}}while(--x);}while(--y);return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.resize={process:function(params){if(Pixastic.Client.hasCanvas()){var width=parseInt(params.options.width,10);var height=parseInt(params.options.height,10);var canvas=params.canvas;if(width<1)width=1;if(width<2)width=2;var copy=document.createElement("canvas");copy.width=width;copy.height=height;copy.getContext("2d").drawImage(canvas,0,0,width,height);canvas.width=width;canvas.height=height;canvas.getContext("2d").drawImage(copy,0,0);params.useData=false;return true;}},checkSupport:function(){return Pixastic.Client.hasCanvas();}}
Pixastic.Actions.rotate={process:function(params){if(Pixastic.Client.hasCanvas()){var canvas=params.canvas;var width=params.width;var height=params.height;var copy=document.createElement("canvas");copy.width=width;copy.height=height;copy.getContext("2d").drawImage(canvas,0,0,width,height);var angle=-parseFloat(params.options.angle)*Math.PI/180;var dimAngle=angle;if(dimAngle>Math.PI*0.5)
dimAngle=Math.PI-dimAngle;if(dimAngle<-Math.PI*0.5)
dimAngle=-Math.PI-dimAngle;var diag=Math.sqrt(width*width+height*height);var diagAngle1=Math.abs(dimAngle)-Math.abs(Math.atan2(height,width));var diagAngle2=Math.abs(dimAngle)+Math.abs(Math.atan2(height,width));var newWidth=Math.abs(Math.cos(diagAngle1)*diag);var newHeight=Math.abs(Math.sin(diagAngle2)*diag);canvas.width=newWidth;canvas.height=newHeight;var ctx=canvas.getContext("2d");ctx.translate(newWidth/2,newHeight/2);ctx.rotate(angle);ctx.drawImage(copy,-width/2,-height/2);params.useData=false;return true;}},checkSupport:function(){return Pixastic.Client.hasCanvas();}}
Pixastic.Actions.sepia={process:function(params){var mode=(parseInt(params.options.mode,10)||0);if(mode<0)mode=0;if(mode>1)mode=1;if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var x=w;do{var offset=offsetY+(x-1)*4;if(mode){var d=data[offset]*0.299+data[offset+1]*0.587+data[offset+2]*0.114;var r=(d+39);var g=(d+14);var b=(d-36);}else{var or=data[offset];var og=data[offset+1];var ob=data[offset+2];var r=(or*0.393+og*0.769+ob*0.189);var g=(or*0.349+og*0.686+ob*0.168);var b=(or*0.272+og*0.534+ob*0.131);}
if(r<0)r=0;if(r>255)r=255;if(g<0)g=0;if(g>255)g=255;if(b<0)b=0;if(b>255)b=255;data[offset]=r;data[offset+1]=g;data[offset+2]=b;}while(--x);}while(--y);return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.sharpen={process:function(params){var strength=0;if(typeof params.options.amount!="undefined")
strength=parseFloat(params.options.amount)||0;if(strength<0)strength=0;if(strength>1)strength=1;if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var dataCopy=Pixastic.prepareData(params,true)
var mul=15;var mulOther=1+3*strength;var kernel=[[0,-mulOther,0],[-mulOther,mul,-mulOther],[0,-mulOther,0]];var weight=0;for(var i=0;i<3;i++){for(var j=0;j<3;j++){weight+=kernel[i][j];}}
weight=1/weight;var rect=params.options.rect;var w=rect.width;var h=rect.height;mul*=weight;mulOther*=weight;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var nextY=(y==h)?y-1:y;var prevY=(y==1)?0:y-2;var offsetYPrev=prevY*w4;var offsetYNext=nextY*w4;var x=w;do{var offset=offsetY+(x*4-4);var offsetPrev=offsetYPrev+((x==1)?0:x-2)*4;var offsetNext=offsetYNext+((x==w)?x-1:x)*4;var r=((-dataCopy[offsetPrev]
-dataCopy[offset-4]
-dataCopy[offset+4]
-dataCopy[offsetNext])*mulOther
+dataCopy[offset]*mul);var g=((-dataCopy[offsetPrev+1]
-dataCopy[offset-3]
-dataCopy[offset+5]
-dataCopy[offsetNext+1])*mulOther
+dataCopy[offset+1]*mul);var b=((-dataCopy[offsetPrev+2]
-dataCopy[offset-2]
-dataCopy[offset+6]
-dataCopy[offsetNext+2])*mulOther
+dataCopy[offset+2]*mul);if(r<0)r=0;if(g<0)g=0;if(b<0)b=0;if(r>255)r=255;if(g>255)g=255;if(b>255)b=255;data[offset]=r;data[offset+1]=g;data[offset+2]=b;}while(--x);}while(--y);return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}}
Pixastic.Actions.solarize={process:function(params){var useAverage=!!(params.options.average&&params.options.average!="false");if(Pixastic.Client.hasCanvasImageData()){var data=Pixastic.prepareData(params);var rect=params.options.rect;var w=rect.width;var h=rect.height;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var x=w;do{var offset=offsetY+(x-1)*4;var r=data[offset];var g=data[offset+1];var b=data[offset+2];if(r>127)r=255-r;if(g>127)g=255-g;if(b>127)b=255-b;data[offset]=r;data[offset+1]=g;data[offset+2]=b;}while(--x);}while(--y);return true;}},checkSupport:function(){return(Pixastic.Client.hasCanvasImageData());}}
Pixastic.Actions.unsharpmask={process:function(params){var amount=(parseFloat(params.options.amount)||0);var blurAmount=parseFloat(params.options.radius)||0;var threshold=parseFloat(params.options.threshold)||0;amount=Math.min(500,Math.max(0,amount))/2;blurAmount=Math.min(5,Math.max(0,blurAmount))/10;threshold=Math.min(255,Math.max(0,threshold));threshold--;var thresholdNeg=-threshold;amount*=0.016;amount++;if(Pixastic.Client.hasCanvasImageData()){var rect=params.options.rect;var blurCanvas=document.createElement("canvas");blurCanvas.width=params.width;blurCanvas.height=params.height;var blurCtx=blurCanvas.getContext("2d");blurCtx.drawImage(params.canvas,0,0);var scale=2;var smallWidth=Math.round(params.width/scale);var smallHeight=Math.round(params.height/scale);var copy=document.createElement("canvas");copy.width=smallWidth;copy.height=smallHeight;var steps=Math.round(blurAmount*20);var copyCtx=copy.getContext("2d");for(var i=0;i<steps;i++){var scaledWidth=Math.max(1,Math.round(smallWidth-i));var scaledHeight=Math.max(1,Math.round(smallHeight-i));copyCtx.clearRect(0,0,smallWidth,smallHeight);copyCtx.drawImage(blurCanvas,0,0,params.width,params.height,0,0,scaledWidth,scaledHeight);blurCtx.clearRect(0,0,params.width,params.height);blurCtx.drawImage(copy,0,0,scaledWidth,scaledHeight,0,0,params.width,params.height);}
var data=Pixastic.prepareData(params);var blurData=Pixastic.prepareData({canvas:blurCanvas,options:params.options});var w=rect.width;var h=rect.height;var w4=w*4;var y=h;do{var offsetY=(y-1)*w4;var x=w;do{var offset=offsetY+(x*4-4);var difR=data[offset]-blurData[offset];if(difR>threshold||difR<thresholdNeg){var blurR=blurData[offset];blurR=amount*difR+blurR;data[offset]=blurR>255?255:(blurR<0?0:blurR);}
var difG=data[offset+1]-blurData[offset+1];if(difG>threshold||difG<thresholdNeg){var blurG=blurData[offset+1];blurG=amount*difG+blurG;data[offset+1]=blurG>255?255:(blurG<0?0:blurG);}
var difB=data[offset+2]-blurData[offset+2];if(difB>threshold||difB<thresholdNeg){var blurB=blurData[offset+2];blurB=amount*difB+blurB;data[offset+2]=blurB>255?255:(blurB<0?0:blurB);}}while(--x);}while(--y);return true;}},checkSupport:function(){return Pixastic.Client.hasCanvasImageData();}};
define("vendors/pixastic", function(){});

(function(c){c.Zebra_DatePicker=function(W,E){var ja={always_show_clear:!1,always_visible:!1,days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),days_abbr:!1,direction:0,disabled_dates:!1,first_day_of_week:1,format:"Y-m-d",inside:!0,lang_clear_date:"Clear",months:"January February March April May June July August September October November December".split(" "),months_abbr:!1,offset:[5,-5],pair:!1,readonly_element:!0,show_icon:!0,show_week_number:!1,start_date:!1,view:"days", weekend_days:[0,6],zero_pad:!0,onChange:null,onClear:null,onSelect:null},q,g,s,z,B,F,G,I,X,Q,Z,p,t,y,u,m,R,J,K,Y,S,v,w,T,L,O,ca,da,ea,C,$,a=this;a.settings={};var n=c(W),ga=function(b){b||(a.settings=c.extend({},ja,E));a.settings.readonly_element&&n.attr("readonly","readonly");var d={days:["d","j","D"],months:["F","m","M","n","t"],years:["o","Y","y"]},l=!1,f=!1,j=!1;for(type in d)c.each(d[type],function(b,c){-1<a.settings.format.indexOf(c)&&("days"==type?l=!0:"months"==type?f=!0:"years"==type&&(j= !0))});C=l&&f&&j?["years","months","days"]:!l&&f&&j?["years","months"]:!l&&!f&&j?["years"]:["years","months","days"];-1==c.inArray(a.settings.view,C)&&(a.settings.view=C[C.length-1]);Y=[];c.isArray(a.settings.disabled_dates)&&0<a.settings.disabled_dates.length&&c.each(a.settings.disabled_dates,function(){for(var a=this.split(" "),b=0;4>b;b++){a[b]||(a[b]="*");a[b]=-1<a[b].indexOf(",")?a[b].split(","):Array(a[b]);for(var d=0;d<a[b].length;d++)if(-1<a[b][d].indexOf("-")){var e=a[b][d].match(/^([0-9]+)\-([0-9]+)/); if(null!=e){for(var f=k(e[1]);f<=k(e[2]);f++)-1==c.inArray(f,a[b])&&a[b].push(f+"");a[b].splice(d,1)}}for(d=0;d<a[b].length;d++)a[b][d]=isNaN(k(a[b][d]))?a[b][d]:k(a[b][d])}Y.push(a)});var d=new Date,h=!a.settings.reference_date?n.data("zdp_reference_date")&&void 0!=n.data("zdp_reference_date")?n.data("zdp_reference_date"):d:a.settings.reference_date,e,A;w=v=void 0;p=h.getMonth();X=d.getMonth();t=h.getFullYear();Q=d.getFullYear();y=h.getDate();Z=d.getDate();if(!0===a.settings.direction)v=h;else if(!1=== a.settings.direction)w=h,O=w.getMonth(),L=w.getFullYear(),T=w.getDate();else if(!c.isArray(a.settings.direction)&&P(a.settings.direction)&&0<k(a.settings.direction)||c.isArray(a.settings.direction)&&(!0===a.settings.direction[0]||P(a.settings.direction[0])&&0<a.settings.direction[0]||(e=U(a.settings.direction[0])))&&(!1===a.settings.direction[1]||P(a.settings.direction[1])&&0<=a.settings.direction[1]||(A=U(a.settings.direction[1]))))v=e?e:new Date(t,p,y+(!c.isArray(a.settings.direction)?k(a.settings.direction): k(!0===a.settings.direction[0]?0:a.settings.direction[0]))),p=v.getMonth(),t=v.getFullYear(),y=v.getDate(),A&&+A>=+v?w=A:!A&&(!1!==a.settings.direction[1]&&c.isArray(a.settings.direction))&&(w=new Date(t,p,y+k(a.settings.direction[1]))),w&&(O=w.getMonth(),L=w.getFullYear(),T=w.getDate());else if(!c.isArray(a.settings.direction)&&P(a.settings.direction)&&0>k(a.settings.direction)||c.isArray(a.settings.direction)&&(!1===a.settings.direction[0]||P(a.settings.direction[0])&&0>a.settings.direction[0])&& (P(a.settings.direction[1])&&0<=a.settings.direction[1]||(e=U(a.settings.direction[1]))))w=new Date(t,p,y+(!c.isArray(a.settings.direction)?k(a.settings.direction):k(!1===a.settings.direction[0]?0:a.settings.direction[0]))),O=w.getMonth(),L=w.getFullYear(),T=w.getDate(),e&&+e<+w?v=e:!e&&c.isArray(a.settings.direction)&&(v=new Date(L,O,T-k(a.settings.direction[1]))),v&&(p=v.getMonth(),t=v.getFullYear(),y=v.getDate());if(D(t,p,y)){for(;D(t);)v?(t++,p=0):(t--,p=11);for(;D(t,p);)v?(p++,y=1):(p--,y=31), 11<p?(t++,p=0,y=1):0>p&&(t--,p=11,y=31);for(;D(t,p,y);)v?y++:y--;d=new Date(t,p,y);t=d.getFullYear();p=d.getMonth();y=d.getDate()}(e=U(n.val()||(a.settings.start_date?a.settings.start_date:"")))&&D(e.getFullYear(),e.getMonth(),e.getDate())&&n.val("");fa(e);if(!a.settings.always_visible&&(b||(a.settings.show_icon?(e='<button type="button" class="Zebra_DatePicker_Icon'+("disabled"==n.attr("disabled")?" Zebra_DatePicker_Icon_Disabled":"")+'">Pick a date</button>',s=c(e),a.icon=s,$=s.add(n)):$=n,$.bind("click", function(b){b.preventDefault();n.attr("disabled")||("none"!=g.css("display")?a.hide():a.show())}),void 0!=s&&s.insertAfter(W)),void 0!=s)){a.settings.inside&&s.addClass("Zebra_DatePicker_Icon_Inside");e=n.position();A=n.outerHeight(!1);var d=parseInt(n.css("marginTop"),10)||0,h=n.outerWidth(!1),r=parseInt(n.css("marginLeft"),10)||0,x=s.outerWidth(!0),V=s.outerHeight(!0);a.settings.inside?s.css({left:e.left+r+h-x,top:e.top+d+(A-V)/2}):s.css({left:e.left+h,top:e.top+(A-V)/2})}void 0!=s&&(n.is(":visible")? s.css("display","block"):s.css("display","none"));b||(e='<div class="Zebra_DatePicker"><table class="dp_header"><tr><td class="dp_previous">&laquo;</td><td class="dp_caption">&nbsp;</td><td class="dp_next">&raquo;</td></tr></table><table class="dp_daypicker"></table><table class="dp_monthpicker"></table><table class="dp_yearpicker"></table><table class="dp_footer"><tr><td>'+a.settings.lang_clear_date+"</td></tr></table></div>",g=c(e),a.datepicker=g,z=c("table.dp_header",g),B=c("table.dp_daypicker", g),F=c("table.dp_monthpicker",g),G=c("table.dp_yearpicker",g),I=c("table.dp_footer",g),a.settings.always_visible?n.attr("disabled")||(a.settings.always_visible.append(g),a.show()):c("body").append(g),g.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)","mouseover",function(){c(this).addClass("dp_hover")}).delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)","mouseout",function(){c(this).removeClass("dp_hover")}), b=c("td",z),"firefox"==M.name?b.css("MozUserSelect","none"):"explorer"==M.name?b.bind("selectstart",function(){return!1}):b.mousedown(function(){return!1}),c(".dp_previous",z).bind("click",function(){c(this).hasClass("dp_blocked")||("months"==q?m--:"years"==q?m-=12:0>--u&&(u=11,m--),N())}),c(".dp_caption",z).bind("click",function(){q="days"==q?-1<c.inArray("months",C)?"months":-1<c.inArray("years",C)?"years":"days":"months"==q?-1<c.inArray("years",C)?"years":-1<c.inArray("days",C)?"days":"months": -1<c.inArray("days",C)?"days":-1<c.inArray("months",C)?"months":"years";N()}),c(".dp_next",z).bind("click",function(){c(this).hasClass("dp_blocked")||("months"==q?m++:"years"==q?m+=12:12==++u&&(u=0,m++),N())}),B.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)","click",function(){aa(m,u,k(c(this).html()),"days",c(this))}),F.delegate("td:not(.dp_disabled)","click",function(){var b=c(this).attr("class").match(/dp\_month\_([0-9]+)/);u=k(b[1]);-1==c.inArray("days", C)?aa(m,u,1,"months",c(this)):(q="days",a.settings.always_visible&&n.val(""),N())}),G.delegate("td:not(.dp_disabled)","click",function(){m=k(c(this).html());-1==c.inArray("months",C)?aa(m,1,1,"years",c(this)):(q="months",a.settings.always_visible&&n.val(""),N())}),c("td",I).bind("click",function(b){b.preventDefault();n.val("");a.settings.always_visible||(m=u=K=J=R=null,I.css("display","none"));a.hide();if(a.settings.onClear&&"function"==typeof a.settings.onClear)a.settings.onClear(n)}),a.settings.always_visible|| c(document).bind({mousedown:a._mousedown,keyup:a._keyup}),N())};a.hide=function(){a.settings.always_visible||(ha("hide"),g.css("display","none"))};a.show=function(){q=a.settings.view;var b=U(n.val()||(a.settings.start_date?a.settings.start_date:""));b?(J=b.getMonth(),u=b.getMonth(),K=b.getFullYear(),m=b.getFullYear(),R=b.getDate(),D(K,J,R)&&(n.val(""),u=p,m=t)):(u=p,m=t);N();if(a.settings.always_visible)g.css("display","block");else{var b=g.outerWidth(),d=g.outerHeight(),l=(void 0!=s?s.offset().left+ s.outerWidth(!0):n.offset().left+n.outerWidth(!0))+a.settings.offset[0],f=(void 0!=s?s.offset().top:n.offset().top)-d+a.settings.offset[1],j=c(window).width(),h=c(window).height(),e=c(window).scrollTop(),A=c(window).scrollLeft();l+b>A+j&&(l=A+j-b);l<A&&(l=A);f+d>e+h&&(f=e+h-d);f<e&&(f=e);g.css({left:l,top:f});g.fadeIn("explorer"==M.name&&9>M.version?0:150,"linear");ha()}};a.update=function(b){a.original_direction&&(a.original_direction=a.direction);a.settings=c.extend(a.settings,b);ga(!0)};var U= function(b){b+="";if(""!=c.trim(b)){var d;d=a.settings.format.replace(/\s/g,"").replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");for(var l="dDjlNSwFmMnYy".split(""),f=[],j=[],h=0;h<l.length;h++)-1<(position=d.indexOf(l[h]))&&f.push({character:l[h],position:position});f.sort(function(a,b){return a.position-b.position});c.each(f,function(a,b){switch(b.character){case "d":j.push("0[1-9]|[12][0-9]|3[01]");break;case "D":j.push("[a-z]{3}");break;case "j":j.push("[1-9]|[12][0-9]|3[01]");break;case "l":j.push("[a-z]+"); break;case "N":j.push("[1-7]");break;case "S":j.push("st|nd|rd|th");break;case "w":j.push("[0-6]");break;case "F":j.push("[a-z]+");break;case "m":j.push("0[1-9]|1[012]+");break;case "M":j.push("[a-z]{3}");break;case "n":j.push("[1-9]|1[012]");break;case "Y":j.push("[0-9]{4}");break;case "y":j.push("[0-9]{2}")}});if(j.length&&(f.reverse(),c.each(f,function(a,b){d=d.replace(b.character,"("+j[j.length-a-1]+")")}),j=RegExp("^"+d+"$","ig"),segments=j.exec(b.replace(/\s/g,"")))){var e,m,r,n="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), V="January February March April May June July August September October November December".split(" "),g,p=!0;f.reverse();c.each(f,function(b,d){if(!p)return!0;switch(d.character){case "m":case "n":m=k(segments[b+1]);break;case "d":case "j":e=k(segments[b+1]);break;case "D":case "l":case "F":case "M":g="D"==d.character||"l"==d.character?a.settings.days:a.settings.months;p=!1;c.each(g,function(a,c){if(p)return!0;if(segments[b+1].toLowerCase()==c.substring(0,"D"==d.character||"M"==d.character?3:c.length).toLowerCase()){switch(d.character){case "D":segments[b+ 1]=n[a].substring(0,3);break;case "l":segments[b+1]=n[a];break;case "F":segments[b+1]=V[a];m=a+1;break;case "M":segments[b+1]=V[a].substring(0,3),m=a+1}p=!0}});break;case "Y":r=k(segments[b+1]);break;case "y":r="19"+k(segments[b+1])}});if(p&&(b=new Date(r,(m||1)-1,e||1),b.getFullYear()==r&&b.getDate()==(e||1)&&b.getMonth()==(m||1)-1))return b}return!1}},ia=function(){var b=(new Date(m,u+1,0)).getDate(),d=(new Date(m,u,1)).getDay(),l=(new Date(m,u,0)).getDate(),d=d-a.settings.first_day_of_week,d=0> d?7+d:d;ba(a.settings.months[u]+", "+m);var f="<tr>";a.settings.show_week_number&&(f+="<th>"+a.settings.show_week_number+"</th>");for(var j=0;7>j;j++)f+="<th>"+(c.isArray(a.settings.days_abbr)&&void 0!=a.settings.days_abbr[(a.settings.first_day_of_week+j)%7]?a.settings.days_abbr[(a.settings.first_day_of_week+j)%7]:a.settings.days[(a.settings.first_day_of_week+j)%7].substr(0,2))+"</th>";f+="</tr><tr>";for(j=0;42>j;j++){0<j&&0==j%7&&(f+="</tr><tr>");if(0==j%7&&a.settings.show_week_number){var h=new Date(m, u,j-d+1),e=h.getFullYear(),n=h.getMonth()+1,h=h.getDate(),r=void 0,k=void 0,g=void 0,p=g=void 0,q=void 0,g=k=r=void 0;3>n?(r=e-1,k=(r/4|0)-(r/100|0)+(r/400|0),g=((r-1)/4|0)-((r-1)/100|0)+((r-1)/400|0),g=k-g,p=0,q=h-1+31*(n-1)):(r=e,k=(r/4|0)-(r/100|0)+(r/400|0),g=((r-1)/4|0)-((r-1)/100|0)+((r-1)/400|0),g=k-g,p=g+1,q=h+((153*(n-3)+2)/5|0)+58+g);r=(r+k)%7;h=(q+r-p)%7;k=q+3-h;g=0>k?53-((r-g)/5|0):k>364+g?1:(k/7|0)+1;f+='<td class="dp_week_number">'+g+"</td>"}e=j-d+1;j<d?f+='<td class="dp_not_in_month">'+ x(l-d+j+1,a.settings.zero_pad?2:0)+"</td>":e>b?f+='<td class="dp_not_in_month">'+x(e-b,a.settings.zero_pad?2:0)+"</td>":(n=(a.settings.first_day_of_week+j)%7,h="",D(m,u,e)?(h=-1<c.inArray(n,a.settings.weekend_days)?"dp_weekend_disabled":h+" dp_disabled",u==X&&(m==Q&&Z==e)&&(h+=" dp_disabled_current")):(-1<c.inArray(n,a.settings.weekend_days)&&(h="dp_weekend"),u==J&&(m==K&&R==e)&&(h+=" dp_selected"),u==X&&(m==Q&&Z==e)&&(h+=" dp_current")),f+="<td"+(""!=h?' class="'+c.trim(h)+'"':"")+">"+(a.settings.zero_pad? x(e,2):e)+"</td>")}B.html(c(f+"</tr>"));a.settings.always_visible&&(ca=c("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)",B));B.css("display","")},ha=function(a){if("explorer"==M.name&&6==M.version){if(!S){var d=k(g.css("zIndex"))-1;S=jQuery("<iframe>",{src:'javascript:document.write("")',scrolling:"no",frameborder:0,allowtransparency:"true",css:{zIndex:d,position:"absolute",top:-1E3,left:-1E3,width:g.outerWidth(),height:g.outerHeight(),filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0)", display:"none"}});c("body").append(S)}switch(a){case "hide":S.css("display","none");break;default:a=g.offset(),S.css({top:a.top,left:a.left,display:"block"})}}},D=function(b,d,l){if(c.isArray(a.settings.direction)||0!==k(a.settings.direction)){var f=k(H(b,"undefined"!=typeof d?x(d,2):"","undefined"!=typeof l?x(l,2):"")),j=(f+"").length;if(8==j&&("undefined"!=typeof v&&f<k(H(t,x(p,2),x(y,2)))||"undefined"!=typeof w&&f>k(H(L,x(O,2),x(T,2))))||6==j&&("undefined"!=typeof v&&f<k(H(t,x(p,2)))||"undefined"!= typeof w&&f>k(H(L,x(O,2))))||4==j&&("undefined"!=typeof v&&f<t||"undefined"!=typeof w&&f>L))return!0}if(Y){"undefined"!=typeof d&&(d+=1);var h=!1;c.each(Y,function(){if(!h&&(-1<c.inArray(b,this[2])||-1<c.inArray("*",this[2])))if("undefined"!=typeof d&&-1<c.inArray(d,this[1])||-1<c.inArray("*",this[1]))if("undefined"!=typeof l&&-1<c.inArray(l,this[0])||-1<c.inArray("*",this[0])){if("*"==this[3])return h=!0;var a=(new Date(b,d-1,l)).getDay();if(-1<c.inArray(a,this[3]))return h=!0}});if(h)return!0}return!1}, P=function(a){return(a+"").match(/^\-?[0-9]+$/)?!0:!1},ba=function(b){c(".dp_caption",z).html(b);if(c.isArray(a.settings.direction)||0!==k(a.settings.direction)){b=m;var d=u,l,f;"days"==q?(f=0>d-1?H(b-1,"11"):H(b,x(d-1,2)),l=11<d+1?H(b+1,"00"):H(b,x(d+1,2))):"months"==q?(f=b-1,l=b+1):"years"==q&&(f=b-7,l=b+7);D(f)?(c(".dp_previous",z).addClass("dp_blocked"),c(".dp_previous",z).removeClass("dp_hover")):c(".dp_previous",z).removeClass("dp_blocked");D(l)?(c(".dp_next",z).addClass("dp_blocked"),c(".dp_next", z).removeClass("dp_hover")):c(".dp_next",z).removeClass("dp_blocked")}},N=function(){if(""==B.text()||"days"==q){if(""==B.text()){a.settings.always_visible||g.css("left",-1E3);g.css({display:"block"});ia();var b=B.outerWidth(),d=B.outerHeight();z.css("width",b);F.css({width:b,height:d});G.css({width:b,height:d});I.css("width",b);g.css({display:"none"})}else ia();F.css("display","none");G.css("display","none")}else if("months"==q){ba(m);b="<tr>";for(d=0;12>d;d++){0<d&&0==d%3&&(b+="</tr><tr>");var l= "dp_month_"+d;D(m,d)?l+=" dp_disabled":!1!==J&&J==d?l+=" dp_selected":X==d&&Q==m&&(l+=" dp_current");b+='<td class="'+c.trim(l)+'">'+(c.isArray(a.settings.months_abbr)&&void 0!=a.settings.months_abbr[d]?a.settings.months_abbr[d]:a.settings.months[d].substr(0,3))+"</td>"}F.html(c(b+"</tr>"));a.settings.always_visible&&(da=c("td:not(.dp_disabled)",F));F.css("display","");B.css("display","none");G.css("display","none")}else if("years"==q){ba(m-7+" - "+(m+4));b="<tr>";for(d=0;12>d;d++)0<d&&0==d%3&&(b+= "</tr><tr>"),l="",D(m-7+d)?l+=" dp_disabled":K&&K==m-7+d?l+=" dp_selected":Q==m-7+d&&(l+=" dp_current"),b+="<td"+(""!=c.trim(l)?' class="'+c.trim(l)+'"':"")+">"+(m-7+d)+"</td>";G.html(c(b+"</tr>"));a.settings.always_visible&&(ea=c("td:not(.dp_disabled)",G));G.css("display","");B.css("display","none");F.css("display","none")}a.settings.onChange&&("function"==typeof a.settings.onChange&&void 0!=q)&&(b="days"==q?B.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)"):"months"== q?F.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)"):G.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)"),b.each(function(){if("days"==q)c(this).data("date",m+"-"+x(u+1,2)+"-"+x(k(c(this).text()),2));else if("months"==q){var a=c(this).attr("class").match(/dp\_month\_([0-9]+)/);c(this).data("date",m+"-"+x(k(a[1])+1,2))}else c(this).data("date",k(c(this).text()))}),a.settings.onChange(q,b,n));(a.settings.always_show_clear||a.settings.always_visible|| ""!=n.val())&&"block"!=I.css("display")?I.css("display",""):I.css("display","none")},aa=function(b,d,l,f,j){var h=new Date(b,d,l,12,0,0);f="days"==f?ca:"months"==f?da:ea;var e;e="";for(var g=h.getDate(),k=h.getDay(),p=a.settings.days[k],q=h.getMonth()+1,t=a.settings.months[q-1],s=h.getFullYear()+"",v=0;v<a.settings.format.length;v++){var w=a.settings.format.charAt(v);switch(w){case "y":s=s.substr(2);case "Y":e+=s;break;case "m":q=x(q,2);case "n":e+=q;break;case "M":t=c.isArray(a.settings.months_abbr)&& void 0!=a.settings.months_abbr[q-1]?a.settings.months_abbr[q-1]:a.settings.months[q-1].substr(0,3);case "F":e+=t;break;case "d":g=x(g,2);case "j":e+=g;break;case "D":p=c.isArray(a.settings.days_abbr)&&void 0!=a.settings.days_abbr[k]?a.settings.days_abbr[k]:a.settings.days[k].substr(0,3);case "l":e+=p;break;case "N":k++;case "w":e+=k;break;case "S":e=1==g%10&&"11"!=g?e+"st":2==g%10&&"12"!=g?e+"nd":3==g%10&&"13"!=g?e+"rd":e+"th";break;default:e+=w}}n.val(e);a.settings.always_visible&&(J=h.getMonth(), u=h.getMonth(),K=h.getFullYear(),m=h.getFullYear(),R=h.getDate(),f.removeClass("dp_selected"),j.addClass("dp_selected"));a.hide();fa(h);if(a.settings.onSelect&&"function"==typeof a.settings.onSelect)a.settings.onSelect(e,b+"-"+x(d+1,2)+"-"+x(l,2),h,n)},H=function(){for(var a="",d=0;d<arguments.length;d++)a+=arguments[d]+"";return a},x=function(a,d){for(a+="";a.length<d;)a="0"+a;return a},k=function(a){return parseInt(a,10)},fa=function(b){a.settings.pair&&c.each(a.settings.pair,function(){var a=c(this); !a.data||!a.data("Zebra_DatePicker")?a.data("zdp_reference_date",b):(a=a.data("Zebra_DatePicker"),a.update({reference_date:b,direction:0==a.settings.direction?1:a.settings.direction}),a.settings.always_visible&&a.show())})};a._keyup=function(b){("block"==g.css("display")||27==b.which)&&a.hide();return!0};a._mousedown=function(b){if("block"==g.css("display")){if(a.settings.show_icon&&c(b.target).get(0)===s.get(0))return!0;0==c(b.target).parents().filter(".Zebra_DatePicker").length&&a.hide()}return!0}; var M={init:function(){this.name=this.searchString(this.dataBrowser)||"";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||""},searchString:function(a){for(var d=0;d<a.length;d++){var c=a[d].string,f=a[d].prop;this.versionSearchString=a[d].versionSearch||a[d].identity;if(c){if(-1!=c.indexOf(a[d].subString))return a[d].identity}else if(f)return a[d].identity}},searchVersion:function(a){var c=a.indexOf(this.versionSearchString);if(-1!=c)return parseFloat(a.substring(c+ this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Firefox",identity:"firefox"},{string:navigator.userAgent,subString:"MSIE",identity:"explorer",versionSearch:"MSIE"}]};M.init();ga()};c.fn.Zebra_DatePicker=function(W){return this.each(function(){if(void 0!=c(this).data("Zebra_DatePicker")){var E=c(this).data("Zebra_DatePicker");void 0!=E.icon&&E.icon.remove();E.datepicker.remove();c(document).unbind("keyup",E._keyup);c(document).unbind("mousedown",E._mousedown)}E= new c.Zebra_DatePicker(this,W);c(this).data("Zebra_DatePicker",E)})}})(jQuery);
define("vendors/zebra_datepicker", function(){});

// Backbone.js 0.9.10

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var n=this,B=n.Backbone,h=[],C=h.push,u=h.slice,D=h.splice,g;g="undefined"!==typeof exports?exports:n.Backbone={};g.VERSION="0.9.10";var f=n._;!f&&"undefined"!==typeof require&&(f=require("underscore"));g.$=n.jQuery||n.Zepto||n.ender;g.noConflict=function(){n.Backbone=B;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var v=/\s+/,q=function(a,b,c,d){if(!c)return!0;if("object"===typeof c)for(var e in c)a[b].apply(a,[e,c[e]].concat(d));else if(v.test(c)){c=c.split(v);e=0;for(var f=c.length;e<
f;e++)a[b].apply(a,[c[e]].concat(d))}else return!0},w=function(a,b){var c,d=-1,e=a.length;switch(b.length){case 0:for(;++d<e;)(c=a[d]).callback.call(c.ctx);break;case 1:for(;++d<e;)(c=a[d]).callback.call(c.ctx,b[0]);break;case 2:for(;++d<e;)(c=a[d]).callback.call(c.ctx,b[0],b[1]);break;case 3:for(;++d<e;)(c=a[d]).callback.call(c.ctx,b[0],b[1],b[2]);break;default:for(;++d<e;)(c=a[d]).callback.apply(c.ctx,b)}},h=g.Events={on:function(a,b,c){if(!q(this,"on",a,[b,c])||!b)return this;this._events||(this._events=
{});(this._events[a]||(this._events[a]=[])).push({callback:b,context:c,ctx:c||this});return this},once:function(a,b,c){if(!q(this,"once",a,[b,c])||!b)return this;var d=this,e=f.once(function(){d.off(a,e);b.apply(this,arguments)});e._callback=b;this.on(a,e,c);return this},off:function(a,b,c){var d,e,t,g,j,l,k,h;if(!this._events||!q(this,"off",a,[b,c]))return this;if(!a&&!b&&!c)return this._events={},this;g=a?[a]:f.keys(this._events);j=0;for(l=g.length;j<l;j++)if(a=g[j],d=this._events[a]){t=[];if(b||
c){k=0;for(h=d.length;k<h;k++)e=d[k],(b&&b!==e.callback&&b!==e.callback._callback||c&&c!==e.context)&&t.push(e)}this._events[a]=t}return this},trigger:function(a){if(!this._events)return this;var b=u.call(arguments,1);if(!q(this,"trigger",a,b))return this;var c=this._events[a],d=this._events.all;c&&w(c,b);d&&w(d,arguments);return this},listenTo:function(a,b,c){var d=this._listeners||(this._listeners={}),e=a._listenerId||(a._listenerId=f.uniqueId("l"));d[e]=a;a.on(b,"object"===typeof b?this:c,this);
return this},stopListening:function(a,b,c){var d=this._listeners;if(d){if(a)a.off(b,"object"===typeof b?this:c,this),!b&&!c&&delete d[a._listenerId];else{"object"===typeof b&&(c=this);for(var e in d)d[e].off(b,c,this);this._listeners={}}return this}}};h.bind=h.on;h.unbind=h.off;f.extend(g,h);var r=g.Model=function(a,b){var c,d=a||{};this.cid=f.uniqueId("c");this.attributes={};b&&b.collection&&(this.collection=b.collection);b&&b.parse&&(d=this.parse(d,b)||{});if(c=f.result(this,"defaults"))d=f.defaults({},
d,c);this.set(d,b);this.changed={};this.initialize.apply(this,arguments)};f.extend(r.prototype,h,{changed:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},sync:function(){return g.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return f.escape(this.get(a))},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e,g,p,j,l,k;if(null==a)return this;"object"===typeof a?(e=a,c=b):(e={})[a]=b;c||(c={});
if(!this._validate(e,c))return!1;g=c.unset;p=c.silent;a=[];j=this._changing;this._changing=!0;j||(this._previousAttributes=f.clone(this.attributes),this.changed={});k=this.attributes;l=this._previousAttributes;this.idAttribute in e&&(this.id=e[this.idAttribute]);for(d in e)b=e[d],f.isEqual(k[d],b)||a.push(d),f.isEqual(l[d],b)?delete this.changed[d]:this.changed[d]=b,g?delete k[d]:k[d]=b;if(!p){a.length&&(this._pending=!0);b=0;for(d=a.length;b<d;b++)this.trigger("change:"+a[b],this,k[a[b]],c)}if(j)return this;
if(!p)for(;this._pending;)this._pending=!1,this.trigger("change",this,c);this._changing=this._pending=!1;return this},unset:function(a,b){return this.set(a,void 0,f.extend({},b,{unset:!0}))},clear:function(a){var b={},c;for(c in this.attributes)b[c]=void 0;return this.set(b,f.extend({},a,{unset:!0}))},hasChanged:function(a){return null==a?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._changing?
this._previousAttributes:this.attributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return null==a||!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=a.success;a.success=function(a,d,e){if(!a.set(a.parse(d,e),e))return!1;b&&b(a,d,e)};return this.sync("read",this,a)},save:function(a,b,c){var d,e,g=this.attributes;
null==a||"object"===typeof a?(d=a,c=b):(d={})[a]=b;if(d&&(!c||!c.wait)&&!this.set(d,c))return!1;c=f.extend({validate:!0},c);if(!this._validate(d,c))return!1;d&&c.wait&&(this.attributes=f.extend({},g,d));void 0===c.parse&&(c.parse=!0);e=c.success;c.success=function(a,b,c){a.attributes=g;var k=a.parse(b,c);c.wait&&(k=f.extend(d||{},k));if(f.isObject(k)&&!a.set(k,c))return!1;e&&e(a,b,c)};a=this.isNew()?"create":c.patch?"patch":"update";"patch"===a&&(c.attrs=d);a=this.sync(a,this,c);d&&c.wait&&(this.attributes=
g);return a},destroy:function(a){a=a?f.clone(a):{};var b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};a.success=function(a,b,e){(e.wait||a.isNew())&&d();c&&c(a,b,e)};if(this.isNew())return a.success(this,null,a),!1;var e=this.sync("delete",this,a);a.wait||d();return e},url:function(){var a=f.result(this,"urlRoot")||f.result(this.collection,"url")||x();return this.isNew()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},
isNew:function(){return null==this.id},isValid:function(a){return!this.validate||!this.validate(this.attributes,a)},_validate:function(a,b){if(!b.validate||!this.validate)return!0;a=f.extend({},this.attributes,a);var c=this.validationError=this.validate(a,b)||null;if(!c)return!0;this.trigger("invalid",this,c,b||{});return!1}});var s=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);void 0!==b.comparator&&(this.comparator=b.comparator);this.models=[];this._reset();this.initialize.apply(this,
arguments);a&&this.reset(a,f.extend({silent:!0},b))};f.extend(s.prototype,h,{model:r,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},sync:function(){return g.sync.apply(this,arguments)},add:function(a,b){a=f.isArray(a)?a.slice():[a];b||(b={});var c,d,e,g,p,j,l,k,h,m;l=[];k=b.at;h=this.comparator&&null==k&&!1!=b.sort;m=f.isString(this.comparator)?this.comparator:null;c=0;for(d=a.length;c<d;c++)(e=this._prepareModel(g=a[c],b))?(p=this.get(e))?b.merge&&(p.set(g===
e?e.attributes:g,b),h&&(!j&&p.hasChanged(m))&&(j=!0)):(l.push(e),e.on("all",this._onModelEvent,this),this._byId[e.cid]=e,null!=e.id&&(this._byId[e.id]=e)):this.trigger("invalid",this,g,b);l.length&&(h&&(j=!0),this.length+=l.length,null!=k?D.apply(this.models,[k,0].concat(l)):C.apply(this.models,l));j&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=l.length;c<d;c++)(e=l[c]).trigger("add",e,this,b);j&&this.trigger("sort",this,b);return this},remove:function(a,b){a=f.isArray(a)?a.slice():[a];
b||(b={});var c,d,e,g;c=0;for(d=a.length;c<d;c++)if(g=this.get(a[c]))delete this._byId[g.id],delete this._byId[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:this.length},b));return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},
b));return a},shift:function(a){var b=this.at(0);this.remove(b,a);return b},slice:function(a,b){return this.models.slice(a,b)},get:function(a){if(null!=a)return this._idAttr||(this._idAttr=this.model.prototype.idAttribute),this._byId[a.id||a.cid||a[this._idAttr]||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){if(!this.comparator)throw Error("Cannot sort a set without a comparator");
a||(a={});f.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(f.bind(this.comparator,this));a.silent||this.trigger("sort",this,a);return this},pluck:function(a){return f.invoke(this.models,"get",a)},update:function(a,b){b=f.extend({add:!0,merge:!0,remove:!0},b);b.parse&&(a=this.parse(a,b));var c,d,e,g,h=[],j=[],l={};f.isArray(a)||(a=a?[a]:[]);if(b.add&&!b.remove)return this.add(a,b);d=0;for(e=a.length;d<e;d++)c=a[d],g=this.get(c),
b.remove&&g&&(l[g.cid]=!0),(b.add&&!g||b.merge&&g)&&h.push(c);if(b.remove){d=0;for(e=this.models.length;d<e;d++)c=this.models[d],l[c.cid]||j.push(c)}j.length&&this.remove(j,b);h.length&&this.add(h,b);return this},reset:function(a,b){b||(b={});b.parse&&(a=this.parse(a,b));for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);b.previousModels=this.models.slice();this._reset();a&&this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=
a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=a.success;a.success=function(a,d,e){a[e.update?"update":"reset"](d,e);b&&b(a,d,e)};return this.sync("read",this,a)},create:function(a,b){b=b?f.clone(b):{};if(!(a=this._prepareModel(a,b)))return!1;b.wait||this.add(a,b);var c=this,d=b.success;b.success=function(a,b,f){f.wait&&c.add(a,f);d&&d(a,b,f)};a.save(null,b);return a},parse:function(a){return a},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models.length=
0;this._byId={}},_prepareModel:function(a,b){if(a instanceof r)return a.collection||(a.collection=this),a;b||(b={});b.collection=this;var c=new this.model(a,b);return!c._validate(a,b)?!1:c},_removeReference:function(a){this===a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"===a||"remove"===a)&&c!==this||("destroy"===a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],null!=b.id&&(this._byId[b.id]=
b)),this.trigger.apply(this,arguments))},sortedIndex:function(a,b,c){b||(b=this.comparator);var d=f.isFunction(b)?b:function(a){return a.get(b)};return f.sortedIndex(this.models,a,d,c)}});f.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without indexOf shuffle lastIndexOf isEmpty chain".split(" "),function(a){s.prototype[a]=function(){var b=
u.call(arguments);b.unshift(this.models);return f[a].apply(f,b)}});f.each(["groupBy","countBy","sortBy"],function(a){s.prototype[a]=function(b,c){var d=f.isFunction(b)?b:function(a){return a.get(b)};return f[a](this.models,d,c)}});var y=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},E=/\((.*?)\)/g,F=/(\(\?)?:\w+/g,G=/\*\w+/g,H=/[\-{}\[\]+?.,\\\^$|#\s]/g;f.extend(y.prototype,h,{initialize:function(){},route:function(a,b,c){f.isRegExp(a)||
(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));this.trigger("route",b,d);g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b);return this},_bindRoutes:function(){if(this.routes)for(var a,b=f.keys(this.routes);null!=(a=b.pop());)this.route(a,this.routes[a])},_routeToRegExp:function(a){a=a.replace(H,"\\$&").replace(E,"(?:$1)?").replace(F,
function(a,c){return c?a:"([^/]+)"}).replace(G,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl");"undefined"!==typeof window&&(this.location=window.location,this.history=window.history)},z=/^[#\/]|\s+$/g,I=/^\/+|\/+$/g,J=/msie [\w.]+/,K=/\/$/;m.started=!1;f.extend(m.prototype,h,{interval:50,getHash:function(a){return(a=(a||this).location.href.match(/#(.*)$/))?a[1]:""},getFragment:function(a,
b){if(null==a)if(this._hasPushState||!this._wantsHashChange||b){a=this.location.pathname;var c=this.root.replace(K,"");a.indexOf(c)||(a=a.substr(c.length))}else a=this.getHash();return a.replace(z,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this.root=this.options.root;this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!(!this.options.pushState||
!this.history||!this.history.pushState);a=this.getFragment();var b=document.documentMode,b=J.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b);this.root=("/"+this.root+"/").replace(I,"/");b&&this._wantsHashChange&&(this.iframe=g.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a));if(this._hasPushState)g.$(window).on("popstate",this.checkUrl);else if(this._wantsHashChange&&"onhashchange"in window&&!b)g.$(window).on("hashchange",this.checkUrl);
else this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=a;a=this.location;b=a.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._wantsPushState&&(this._hasPushState&&b&&a.hash)&&(this.fragment=this.getHash().replace(z,""),this.history.replaceState({},document.title,
this.root+this.fragment+a.search));if(!this.options.silent)return this.loadUrl()},stop:function(){g.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a===this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},
loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};a=this.getFragment(a||"");if(this.fragment!==a){this.fragment=a;var c=this.root+a;if(this._hasPushState)this.history[b.replace?"replaceState":"pushState"]({},document.title,c);else if(this._wantsHashChange)this._updateHash(this.location,a,b.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&
(b.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,b.replace));else return this.location.assign(c);b.trigger&&this.loadUrl(a)}},_updateHash:function(a,b,c){c?(c=a.href.replace(/(javascript:|#).*$/,""),a.replace(c+"#"+b)):a.hash="#"+b}});g.history=new m;var A=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},L=/^(\S+)\s*(.*)$/,M="model collection el id attributes className tagName events".split(" ");
f.extend(A.prototype,h,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof g.$?a:g.$(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=f.result(this,"events"))){this.undelegateEvents();for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);
if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(L),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);if(""===d)this.$el.on(e,c);else this.$el.on(e,d,c)}}},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},f.result(this,"options"),a));f.extend(this,f.pick(a,M));this.options=a},_ensureElement:function(){if(this.el)this.setElement(f.result(this,"el"),!1);else{var a=f.extend({},f.result(this,"attributes"));
this.id&&(a.id=f.result(this,"id"));this.className&&(a["class"]=f.result(this,"className"));a=g.$("<"+f.result(this,"tagName")+">").attr(a);this.setElement(a,!1)}}});var N={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=N[a];f.defaults(c||(c={}),{emulateHTTP:g.emulateHTTP,emulateJSON:g.emulateJSON});var e={type:d,dataType:"json"};c.url||(e.url=f.result(b,"url")||x());if(null==c.data&&b&&("create"===a||"update"===a||"patch"===a))e.contentType="application/json",
e.data=JSON.stringify(c.attrs||b.toJSON(c));c.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(c.emulateHTTP&&("PUT"===d||"DELETE"===d||"PATCH"===d)){e.type="POST";c.emulateJSON&&(e.data._method=d);var h=c.beforeSend;c.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d);if(h)return h.apply(this,arguments)}}"GET"!==e.type&&!c.emulateJSON&&(e.processData=!1);var m=c.success;c.success=function(a){m&&m(b,a,c);b.trigger("sync",b,a,c)};
var j=c.error;c.error=function(a){j&&j(b,a,c);b.trigger("error",b,a,c)};a=c.xhr=g.ajax(f.extend(e,c));b.trigger("request",b,a,c);return a};g.ajax=function(){return g.$.ajax.apply(g.$,arguments)};r.extend=s.extend=y.extend=A.extend=m.extend=function(a,b){var c=this,d;d=a&&f.has(a,"constructor")?a.constructor:function(){return c.apply(this,arguments)};f.extend(d,c,b);var e=function(){this.constructor=d};e.prototype=c.prototype;d.prototype=new e;a&&f.extend(d.prototype,a);d.__super__=c.prototype;return d};
var x=function(){throw Error('A "url" property or function must be specified');}}).call(this);

define("vendors/backbone", function(){});

/* 
 * KeyJString method, which turns a "key{ json/object }" into a usable javascript.
 */
define( "lib/KeyJString", [],function(){

  function KeyJString(){
    function Constructor( string, useEval ){
      useEval = useEval || false;
      var objectPoint, objectString, object;
      if( ( objectPoint = string.search( /{/g ) ) !== -1 ){
        objectString = string.substring( objectPoint ).replace( /`/g, '"' );
        string = string.substring( 0, objectPoint );
        while( objectString.search( /\-\>/g ) !== -1 ){
          var functionPointer = objectString.search( /\-\>/g )
          var preFunction = objectString.substr( 0, functionPointer );

          //Getting method name
          var endOfName = preFunction.lastIndexOf( '"' );
          var postName = objectString.substr( 0, endOfName );
          var startOfName = postName.lastIndexOf( '"' ) + 1;
          objectString = preFunction.substr( 0, startOfName ) + 'KEYJSMETHOD_' + objectString.substr( startOfName, endOfName - startOfName ) + '" : ' + objectString.substr( functionPointer + 2 );
        }
        if( !useEval ){
          object = JSON.parse( objectString.replace( /\\\'/g, "\\\\'" ) );
        }
        else{
          eval( "object = " + objectString );
        }

        _ConvertObjectMethods.call( this, object );
      }
      else{
        object = {};
      }

      this.key = string;
      this.object = object;
    }

    this.key;
    this.object;

    Constructor.apply( this, arguments );
  } var _self = this;

  function _DynamicMethod( startingObject, methodName, methodContext, args ){
    var currentMethod = window;
    var lastMethod = window;
    var foundMethod = true;
    for( var mp = 0; mp < methodContext.length; mp++ ){
      if( currentMethod[methodContext[mp]] !== undefined ){
        lastMethod = currentMethod;
        currentMethod = currentMethod[methodContext[mp]];

      }
      else{
        console.log( "Dynamic method found no method" );
        currentMethod = _GenerateDynamicMethod.call( _self, startingObject, methodName, methodContext );
        foundMethod = false;
      }
    }

    if( foundMethod ){
      startingObject[methodName] = currentMethod;
      startingObject[methodName].apply( lastMethod, args );
    }
  }

  function _GenerateDynamicMethod( startingObject, methodName, methodContext ){
    return function(){
      _DynamicMethod.call( this, startingObject, methodName, methodContext, arguments );
    }
  }

  function _ConvertObjectMethods( startingObject ){
    if( typeof( startingObject ) === "object" ){
      for( var obn in startingObject ){
        if( obn.substr( 0, 12 ) === "KEYJSMETHOD_" ){
          var methodPath = startingObject[obn].split( "." );
          var currentMethod = window;
          for( var mp = 0; mp < methodPath.length; mp++ ){
            if( currentMethod[methodPath[mp]] !== undefined ){
              currentMethod = currentMethod[methodPath[mp]];
            }
            else{
              currentMethod = _GenerateDynamicMethod.call( this, startingObject, obn.substr( 12 ), methodPath );
            }
          }
          delete startingObject[obn];
          startingObject[obn.substr( 12 )] = currentMethod;
        }
        else{
          _ConvertObjectMethods.call( this, startingObject[obn] );
        }
      }
    }
  }

  return KeyJString;

});
/**
 * Object for setting up a data control type.
 * @returns {undefined}
 */

define( "lib/Control", [],function(){
  function Control(){
    function Constructor( settings, type ){
      for( var ext in type ){
        this[ext] = type[ext];
      }
      if( this.Build ){
        this.Build( settings.element, settings.object );
      }
    } var _self = this;

    Constructor.apply( this, arguments );
  }

  return Control;
});
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

define( "lib/ControlManager", [ "lib/KeyJString", "lib/Control" ], function( KeyJString, Control ){

  function ControlLoadSet(){
    function Constructor( callback ){
      _callback = callback;
      _timeout = setTimeout( function(){
        _DoCallback.call( _self, false );
      }, 2500 );
    } var _self = this;

    var _totalControllers = 0;
    var _callback = function(){};
    var _startedWatch = false;

    this.Add = function( ){
      _totalControllers++;
    };

    this.AddAmount = function( amount ){
      _totalControllers += amount;
    };

    this.Remove = function(){
      _totalControllers--;

      if( _startedWatch && _totalControllers === 0 ){
        _DoCallback.call( this, true );
      }
    };

    this.Start = function(){
      _startedWatch = true;
      if( _totalControllers === 0 ){
        _DoCallback.call( this, true );
      }
    };

    function _DoCallback( success ){
      _callback( success );
    };

    Constructor.apply( this, arguments );
  };

  function ControlManager(){
    function Constructor( appCore ){
      _app = appCore;
    } var _self = this;

    var _controllerTypes = {};
    var _finderCallbacks = [];
    var _customFinders = [];

    this.FindControls = function( startingElement, callback ){
      callback = callback || null;
      var loadSet = new ControlLoadSet( function( success ){
        _IssueFinderCallbacks.call( _self, startingElement, success );
        if ( callback !== null ){
          callback();
        }
      });
      if( $(startingElement).attr( "data-control" ) ){
        loadSet.Add();
        var controlString = $(startingElement).attr( "data-control" ).split( ";" );
        for( var i = 0; i < controlString.length; i++ ){
          this.CreateControl( startingElement, controlString[i], loadSet );
        }
      }
      for( var i = 0; i < _customFinders.length; i++ ){
        if( $(startingElement).is( _customFinders[i].selector ) ){
          var propery = {};
          if( _customFinders[i].attribute != "" && $(startingElement).attr( _customFinders[i].attribute ) != "" ){
            propery = new KeyJString( propery );
          }
          _customFinders[i].method( $(startingElement), propery );
        }
        else{
          _CustomFinder.call( this, startingElement, _customFinders[i] );

        }
      }
      loadSet.AddAmount( $("*[data-control]", startingElement).length );
      $("*[data-control]", startingElement).each( function(){
        var controlString = $( this ).attr( "data-control" ).split( ";" );
        for( var i = 0; i < controlString.length; i++ ){
          _self.CreateControl( this, controlString[i], loadSet );
        }
      });

      loadSet.Start();
    };

    this.CreateControl = function( element, controlString, loadSet ){
      var conrolSettings = new KeyJString( controlString );
      conrolSettings.element = $(element);

      if( _controllerTypes[conrolSettings.key] === undefined ){
        //Try to include it//
        _RequireController.call( element, conrolSettings, loadSet );
      }
      else{
        _LoadControl.call( element, conrolSettings );
        loadSet.Remove();
      }
    };

    this.AddFinderCallback = function( callback ){
      _finderCallbacks.push(callback);
    };

    function _IssueFinderCallbacks( element, success ){
      for( var i = 0; i < _finderCallbacks.length; i++ ){
        _finderCallbacks[i]( element, success );
      }
    };

    function _RequireController( controlSettings, loadSet ){
      require( [ "controllers/" + controlSettings.key ], function( Control ){
        _controllerTypes[controlSettings.key] = Control;
        _LoadControl.call( _self, controlSettings );
        loadSet.Remove();
      } );
    }

    function _CustomFinder( element, customFinder ){
      var elements = $( customFinder.selector, element);
      for( var i = 0; i < elements.length; i++ ){
        var property = {};
        var searchElement = elements.get( i );
        if( customFinder.attribute != "" && $(searchElement).attr( customFinder.attribute ) != "" ){
          property = new KeyJString( $(searchElement).attr( customFinder.attribute ) );
        }
        customFinder.method( $(elements[i]), property );
      }
    }

    this.AddDataFinder = function( dataAttribute, method ){
      this.AddCustomFinder( "*[data-" + dataAttribute + "]", "data-" + dataAttribute, method );
    };

    this.AddCustomFinder = function( finderQuery, compileAttribute, method ){
      _customFinders.push( {
        selector: finderQuery,
        attribute : compileAttribute,
        method : method
      } );
    };

    function _LoadControl( controlSettings ){
      if( _controllerTypes[controlSettings.key] !== undefined && $.inArray( controlSettings.key, controlSettings.element.data("set") ) == -1 ){
        new Control( controlSettings, _controllerTypes[controlSettings.key] );
        if( controlSettings.element.data("set") === undefined ){
          controlSettings.element.data("set", [] );
        }
        controlSettings.element.data("set").push( controlSettings.key );
      }
    };

    var _app = null;

    Constructor.apply( this, arguments );
  }

  return ControlManager;
} );

define( "lib/Registration", [], function(){
    function Registration(){
        function Constructor(){
            _cartTotalElement = $("#cartTotal");
        } var _self = this;
        
        this.Add = function( sessionId, registerButton ){
          $(registerButton).html( "Adding" ).css( "opacity", 0.5 ).unbind();
          $.ajax( '/api/registration/add', {
            dataType: 'json',
            data:{ session:sessionId },
            type:'POST',
            success: function( data ){
              if( data.result === "success" ){
                // $(registerButton).removeClass( "blue" ).addClass( "grey" ).html( "In-cart" );
                _ChangeCartTotal.call( _self, 1 );
                window.location.href = "/cart";
              }
            },
          } );
        };
        
        var _cartTotalElement = null;
        
        function _ChangeCartTotal( amountOfChange ){
            var count = parseInt( _cartTotalElement.html() );
            _cartTotalElement.html( count + amountOfChange );
            if( parseInt( _cartTotalElement.html() ) > 0 ){
                window.core.StartSession();
            }
        }
        
        this.UpdateCartParticipants = function( value, sessionId, element  ){
            //Ajax to update the number participants//
            _self.StartPost( "participantsNumber-" + value );
            var cartItem = $(element).parent().parent();
            var courseItem = cartItem.parent().parent();
            $.ajax( '/api/registration/update-session', {
                dataType: 'json',
                type: 'POST',
                data: { session: sessionId, participants:value },
                success: function( data ){
                    if( data.result === "success" ){
                        if( value != 0 ){
                            var tuition = parseInt( $(".price", cartItem ).html() );
                            $(".total", cartItem ).html( ( tuition * parseInt( value ) ) );
                        }
                        else{
                            cartItem.remove();
                            if( $( "tbody tr", courseItem ).length === 0 ){
                                courseItem.remove();
                            }
                            
                            if( $("table.course").length == 0 ){
                                window.location.href = "/cart";
                            }
                        }
                    }
                },
                complete: function(){ _self.EndPost( "participantsNumber-" + value ); }
            } );
        };
        
        this.UpdateParticipantField = function( sessionId, participaintId, fieldName, fieldValue, callback ){
            _self.StartPost( fieldName + "-" + fieldValue );
            $.ajax( '/api/registration/update-participant', {
                dataType: 'json',
                type: 'POST',
                data:{
                    fieldName: fieldName,
                    fieldValue: fieldValue,
                    sessionId: sessionId,
                    participaintId: participaintId
                },
                success: function( data ){
                    if( data.result === "success" ){
                        callback( data );
                    }
                },
                complete: function(){ _self.EndPost( fieldName + "-" + fieldValue ); }
            } );
        };
        
        this.UpdatePurchaserField = function( fieldName, fieldValue, callback ){
            var data = { };
            if( fieldName !== null ){
                data.fieldName = fieldName;
            }
            if( fieldValue !== null ){
                data.fieldValue = fieldValue;
            }
            _self.StartPost( fieldName + "-" + fieldValue );
            $.ajax( '/api/registration/update-purchaser', {
                dataType: 'json',
                type: 'POST',
                data:data,
                success: function( data ){
                    if( data.result === "success" ){
                        callback( data );
                    }
                },
                complete: function(){ _self.EndPost( fieldName + "-" + fieldValue ); }
            });
        };
        
        var _registrants = [];
        var _purchaser = null;
        
        this.AddRegistrant = function( registrantObject ){
            _registrants.push( registrantObject );
        };
        
        this.Reconfirm = function( participantId ){
            $(".confirm").hide();
            $.ajax( '/api/registration/reconfirm', {
                dataType: 'json',
                type: 'POST',
                data: { participantId: participantId },
                success: function( data ){
                    if( data.result === "success" ){
                        $(".thanks").show();
                    }
                }
            });
        };
        
        this.SetPurchaser = function( purchaserObject ){
            _purchaser = purchaserObject;
        };
        
        this.ValidateRegistrants =  function(){
            var validates = _purchaser.ValidateFields();
            for( var i = 0; i < _registrants.length; i++ ){
                if( !_registrants[i].ValidateFields() ){
                    validates = false;
                }
            }
            
            if( !validates ){
                $('#cartErrors').show();
                window.scrollTo( 0, 0 );
                return false;
            }
            
            return true;
        };
        
        var _pendingPosts = {};
        
        this.StartPost = function( postId ){
            _pendingPosts[postId] = 1;
        }
        
        this.EndPost = function( postId ){
            delete _pendingPosts[postId];
        }
        
        this.HasPosts = function(){
            var count = 0;
            for ( var key in _pendingPosts ){
                count++;
            }
            return ( count > 0 );
        }
        
        this.SubmitRegistration = function( url, element, validate ){
          $(".retisterLoader").show();
          $(element).toggle();
          if ( _self.HasPosts() ){
            var interval = setInterval( function(){
              if ( !_self.HasPosts() ){
                clearInterval( interval );
                if ( validate ){
                  if ( _self.ValidateRegistrants() ){
                    window.location = url;
                  }
                  else{
                    $(".retisterLoader").hide();
                    $(element).toggle();
                  }
                }
                else{
                  window.location = url;
                }
              }
            }, 3000);
          }
          else{
            if ( validate ){
              if ( _self.ValidateRegistrants() ){
                window.location = url;
              }
              else{
                $(".retisterLoader").hide();
                $(element).toggle();
              }
            }
            else{
              window.location = url;
            }
          }
        }
        
        Constructor.apply( this, arguments );
        
    }
    
    return Registration;
});

define( "lib/Search", [], function(){
    function Search(){
        function Constructor(){
            
        } var _self = this;
        
        this.ChangeSort = function( type, callback ){
            _CallSearch( {
                data: {
                    cmd: 'change-sort',
                    type: type
                },
                callback: callback
            } );
        };
        
        this.ChangeView = function( view, callback ){
            _CallSearch( {
                data: {
                    cmd: 'change-view',
                    view:view
                },
                callback: callback
            } );
        };
        
        this.ChangePage = function( page, callback ){
            _CallSearch( {
                data: {
                    cmd: 'change-page',
                    page:page
                },
                callback: callback
            });
        };
        
        this.RemoveItem = function( itemType, itemIdentifier ){
            this.UpdateSearch( itemType, itemIdentifier, false );
        };
        
        function _CallSearch( settings, callback ){
            settings.callbackFrom = settings.callback || null;
            settings.callback = function(){
                $("#SearchContents").trigger( "reload" );
                if( settings.callbackFrom ){
                    settings.callbackFrom();
                }
            };
            settings.type = 'POST';
            if( $("#SearchCrit").length > 0 ){
              $("#SearchCrit").trigger( "reload", settings );
            }
            else{
              settings.callback();
            }
        }
        
        this.UpdateSearch = function( type, identifier, value, callback ){
            _CallSearch( {
                data: {
                    cmd: 'update-field',
                    type: type,
                    identifier: identifier,
                    value: value
                },
                callback: callback
            } );
        };
        
        Constructor.apply( this, arguments );
        
    }
    
    return Search;
});
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

define( "lib/Hacks", [], function(){
    function Hacks(){

        this.AlphaMenuFix = function( e ){
            
        };
    }
    
    return Hacks;
} );

define( "Core", ["lib/ControlManager", "lib/Registration", "lib/Search", "lib/Hacks"], function( ControlManager, Registration, Search, Hacks ){

    function Core(){
        function Constructor(){
            _InitSessionTimeOut.call( this );
            this.BrowserSupportCheck();
            _controlManager = new ControlManager();
            _controlManager.AddFinderCallback( function( element, success ){
              $( ".ellipse", element ).each( function(){
                $(this).dotdotdot();
              });
            });
            _registrationSystem = new Registration();
            _searchSystem = new Search();
            _hacks = new Hacks();
            window.register = _registrationSystem;
            window.search = _searchSystem;
            window.hacks = _hacks;
            window.controlManager = _controlManager;
            _controlManager.FindControls( document.body, function(){
              window.ready.FireReady();
            });
            _PreloadImages.call( this );
        }

        var _controlManager = null
        var _registrationSystem = null;
        var _searchSystem = null;
        var _hacks = null;
        var _sessionTimeOut = null;
        var _sessionStarted = false;
        var _timeoutTime = ( 60 * 60 * 1000 );
        
        function _InitSessionTimeOut(){
            var self = this;
            _sessionStarted = ( parseInt( $("#cartTotal").html() ) > 0 ) ? true : false;
            var ajaxMethod = $.ajax;
            $.ajax = function(){
                self.ResetTimeout();
                ajaxMethod.apply( $, arguments );
            };

            this.ResetTimeout();
        }
        
        this.ResetTimeout = function(){
            var self = this;
            if( _sessionTimeOut !== null ){
                clearTimeout( _sessionTimeOut );
            }
            _sessionTimeOut = setTimeout( function(){
                self.ShowTimeout();
            }, _timeoutTime );
        };
        
        this.StartSession = function(){
            _sessionStarted = true;
            this.ResetTimeout();
        };
        
        this.ShowTimeout = function(){
            if( _sessionStarted ){
                window.location = "/api/timeout";
            }
        };
        
        function _PreloadImages(){
          var preLoadImages = [ "/assets/icons/ajax-loader-small.gif" ];
          for( var i = 0; i < preLoadImages.length; i++ ){
            var image = new Image();
            image.src = preLoadImages[i];
          }
        }
        
        this.BrowserSupportCheck = function(){
            if( $("#IE7").length > 0 ){
                var bodyDiv = $("<div></div>");
                bodyDiv.css( {
                    "font-size": "25px",
                    "width":"1000px",
                    "margin":"auto",
                    "margin-top":"50px"
                } );
                if( window.location.pathname === "/cart/reg-payment" ){
                    $(bodyDiv).html( "Payment is not supported in your browser version. To complete this payment, please call +1.918.828.2504 or 1.800.821.5933, or contact CustomerService@petroskills.com" );
                }
                else if( window.location.pathname === "/cart/reconfirm-registration"  ){
                    $(bodyDiv).html( "Reconfirming your attendance is not supported in your browser version. To reconfirm your attendance, please call +1.918.828.2504 or 1.800.821.5933, or email CustomerService@petroskills.com" );
                }
                else{
                    $(bodyDiv).html( "This browser is not compatible with this version of www.petroskills.com. Wait 10 seconds to be redirected or <a href='http://www.petroskills.net'>click here</a>." );
                    setTimeout( function(){ window.location = 'http://www.petroskills.net'; }, 10000 );
                }

                $(document.body).html("").append(bodyDiv);
            }
        };

        Constructor.apply( this, arguments );
    }
    $(document).ready( function(){
        window.core = new Core();
    });
    
    return window.core;
});