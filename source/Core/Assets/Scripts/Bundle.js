/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});

/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/*
 AngularJS v1.3.0-rc.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,Y,s){'use strict';function Q(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-rc.0/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function eb(b){if(null==b||Sa(b))return!1;var a=b.length;return 1===b.nodeType&&
a?!0:D(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(E(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d);else if(H(b)||eb(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function bc(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function ld(b,a,c){for(var d=bc(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function cc(b){return function(a,c){b(c,a)}}function md(){return++fb}function dc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function B(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});dc(b,a);return b}function V(b){return parseInt(b,10)}function ec(b,a){return B(new (B(function(){},{prototype:b})),a)}function y(){}function Fa(b){return b}function fa(b){return function(){return b}}function F(b){return"undefined"===
typeof b}function G(b){return"undefined"!==typeof b}function S(b){return null!==b&&"object"===typeof b}function D(b){return"string"===typeof b}function Ga(b){return"number"===typeof b}function ia(b){return"[object Date]"===Ha.call(b)}function E(b){return"function"===typeof b}function gb(b){return"[object RegExp]"===Ha.call(b)}function Sa(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function nd(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function od(b){var a=
{};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return K(b.nodeName||b[0].nodeName)}function pd(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ca(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ia(b,a){var c=Ca(b,a);0<=c&&b.splice(c,1);return a}function Ja(b,a,c,d){if(Sa(b)||Ta(b))throw Ua("cpws");if(a){if(b===a)throw Ua("cpi");c=c||[];d=d||[];if(S(b)){var e=Ca(c,b);if(-1!==e)return d[e];
c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Ja(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(c,b){delete a[b]});for(f in b)b.hasOwnProperty(f)&&(e=Ja(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);dc(a,g)}}else if(a=b)H(b)?a=Ja(b,[],c,d):ia(b)?a=new Date(b.getTime()):gb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):S(b)&&(e=Object.create(Object.getPrototypeOf(b)),
a=Ja(b,e,c,d));return a}function qa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(S(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ra(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ra(b[d],a[d]))return!1;return!0}}else{if(ia(b))return ia(a)?ra(b.getTime(),a.getTime()):!1;if(gb(b)&&
gb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Sa(b)||Sa(a)||H(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!E(b[d])){if(!ra(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!E(a[d]))return!1;return!0}return!1}function hb(b,a,c){return b.concat(Va.call(a,c))}function fc(b,a){var c=2<arguments.length?Va.call(arguments,2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Va.call(arguments,0))):
a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function qd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Sa(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Ta(a)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,qd,a?"  ":null)}function gc(b){return D(b)?JSON.parse(b):b}function ta(b){b=x(b).clone();try{b.empty()}catch(a){}var c=x("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,c){return"<"+K(c)})}catch(d){return K(c)}}function hc(b){try{return decodeURIComponent(b)}catch(a){}}function ic(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=hc(c[0]),G(d)&&(b=G(c[1])?hc(c[1]):!0,Fb.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Gb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}
function ib(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function rd(b,a){var c,d,e=jb.length;b=x(b);for(d=0;d<e;++d)if(c=jb[d]+a,D(c=b.attr(c)))return c;return null}function sd(b,a){var c,d,e={};r(jb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});
r(jb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==rd(c,"strict-di"),a(c,d?[d]:[],e))}function jc(b,a,c){S(c)||(c={});c=B({strictDi:!1},c);var d=function(){b=x(b);if(b.injector()){var d=b[0]===Y?"document":ta(b);throw Ua("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
a.unshift("ng");d=Hb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;P&&e.test(P.name)&&(c.debugInfoEnabled=!0,P.name=P.name.replace(e,""));if(P&&!f.test(P.name))return d();P.name=P.name.replace(f,"");xa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function td(){P.name="NG_ENABLE_DEBUG_INFO!"+P.name;P.location.reload()}function ud(b){return xa.element(b).injector().get("$$testability")}
function Wa(b,a){a=a||"_";return b.replace(vd,function(b,d){return(d?a:"")+b.toLowerCase()})}function wd(){var b;kc||((ua=P.jQuery)&&ua.fn.on?(x=ua,B(ua.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ua.cleanData,ua.cleanData=function(a){if(Ib)Ib=!1;else for(var c=0,d;null!=(d=a[c]);c++)ua(d).triggerHandler("$destroy");b(a)}):x=U,xa.element=x,kc=!0)}function Jb(b,a,c){if(!b)throw Ua("areq",a||"?",c||"required");return b}
function kb(b,a,c){c&&H(b)&&(b=b[b.length-1]);Jb(E(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ua("badname",a);}function lc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?fc(e,b):b}function lb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return x(c)}function xd(b){function a(a,b,c){return a[b]||
(a[b]=c())}var c=Q("$injector"),d=Q("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||Q;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return q}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],l=a("$injector","invoke","push",d),q={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
"provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:l,run:function(a){e.push(a);return this}};h&&l(h);return q})}})}function yd(b){B(b,{bootstrap:jc,copy:Ja,extend:B,equals:ra,element:x,forEach:r,injector:Hb,noop:y,bind:fc,toJson:sa,
fromJson:gc,identity:Fa,isUndefined:F,isDefined:G,isString:D,isFunction:E,isObject:S,isNumber:Ga,isElement:nd,isArray:H,version:zd,isDate:ia,lowercase:K,uppercase:mb,callbacks:{counter:0},getTestability:ud,$$minErr:Q,$$csp:Xa,reloadWithDebugInfo:td});Ya=xd(P);try{Ya("ngLocale")}catch(a){Ya("ngLocale",[]).provider("$locale",Ad)}Ya("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Bd});a.provider("$compile",mc).directive({a:Cd,input:nc,textarea:nc,form:Dd,script:Ed,select:Fd,style:Gd,
option:Hd,ngBind:Id,ngBindHtml:Jd,ngBindTemplate:Kd,ngClass:Ld,ngClassEven:Md,ngClassOdd:Nd,ngCloak:Od,ngController:Pd,ngForm:Qd,ngHide:Rd,ngIf:Sd,ngInclude:Td,ngInit:Ud,ngNonBindable:Vd,ngPluralize:Wd,ngRepeat:Xd,ngShow:Yd,ngStyle:Zd,ngSwitch:$d,ngSwitchWhen:ae,ngSwitchDefault:be,ngOptions:ce,ngTransclude:de,ngModel:ee,ngList:fe,ngChange:ge,pattern:oc,ngPattern:oc,required:pc,ngRequired:pc,minlength:qc,ngMinlength:qc,maxlength:rc,ngMaxlength:rc,ngValue:he,ngModelOptions:ie}).directive({ngInclude:je}).directive(nb).directive(sc);
a.provider({$anchorScroll:ke,$animate:le,$browser:me,$cacheFactory:ne,$controller:oe,$document:pe,$exceptionHandler:qe,$filter:tc,$interpolate:re,$interval:se,$http:te,$httpBackend:ue,$location:ve,$log:we,$parse:xe,$rootScope:ye,$q:ze,$$q:Ae,$sce:Be,$sceDelegate:Ce,$sniffer:De,$templateCache:Ee,$templateRequest:Fe,$$testability:Ge,$timeout:He,$window:Ie,$$rAF:Je,$$asyncCallback:Ke})}])}function Za(b){return b.replace(Le,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Me,"Moz$1")}function uc(b){b=
b.nodeType;return 1===b||!b||9===b}function Ne(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Kb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Oe.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(Pe,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=hb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function U(b){if(b instanceof U)return b;var a;
D(b)&&(b=da(b),a=!0);if(!(this instanceof U)){if(a&&"<"!=b.charAt(0))throw Lb("nosel");return new U(b)}if(a){a=Y;var c;b=(c=Qe.exec(b))?[a.createElement(c[1])]:(c=Ne(b,a))?c.childNodes:[]}vc(this,b)}function Mb(b){return b.cloneNode(!0)}function ob(b,a){a||pb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)pb(c[d])}function wc(b,a,c,d){if(G(d))throw Lb("offargs");var e=(d=qb(b))&&d.events;if(d&&d.handle)if(a)r(a.split(" "),function(a){F(c)?(b.removeEventListener(a,
e[a],!1),delete e[a]):Ia(e[a]||[],c)});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,e[a],!1),delete e[a]}function pb(b,a){var c=b.ng339,d=c&&rb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),wc(b)),delete rb[c],b.ng339=s))}function qb(b,a){var c=b.ng339,c=c&&rb[c];a&&!c&&(b.ng339=c=++Re,c=rb[c]={events:{},data:{},handle:s});return c}function Nb(b,a,c){if(uc(b)){var d=G(c),e=!d&&a&&!S(a),f=!a;b=(b=qb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&
b[a];B(b,a)}}}function Ob(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Pb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",da((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+da(a)+" "," ")))})}function Qb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=da(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});
b.setAttribute("class",da(c))}}function vc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function xc(b,a){return sb(b,"$"+(a||"ngController")+"Controller")}function sb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=x.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}function yc(b){for(ob(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function zc(b,a){a||ob(b);var c=b.parentNode;c&&c.removeChild(b)}function Ac(b,a){var c=tb[a.toLowerCase()];return c&&Bc[pa(b)]&&c}function Se(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Cc[a]}function Te(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){1<g&&(f=qa(f));for(var h=0;h<g;h++)f[h].call(b,c)}};c.elem=b;return c}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),
c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||md)():c+":"+b}function $a(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function Ue(b){return(b=b.toString().replace(Dc,"").match(Ec))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Rb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw D(c)&&c||(c=b.name||Ue(b)),Na("strictdi",c);a=b.toString().replace(Dc,"");a=a.match(Ec);r(a[1].split(Ve),
function(a){a.replace(We,function(a,b,c){d.push(c)})})}b.$inject=d}}else H(b)?(a=b.length-1,kb(b[a],"fn"),d=b.slice(0,a)):kb(b,"fn",!0);return d}function Hb(b,a){function c(a){return function(b,c){if(S(b))r(b,cc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(E(b)||H(b))b=p.instantiate(b);if(!b.$get)throw Na("pget",a);return n[a+"Provider"]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);
f[e[1]].apply(f,e[2])}}if(!k.get(a)){k.put(a,!0);try{D(a)?(c=Ya(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(p.invoke(a)):H(a)?b.push(p.invoke(a)):kb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Na("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Na("cdep",a+" <- "+m.join(" <- "));return b[a]}try{return m.unshift(a),
b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{m.shift()}}function e(b,c,f,h){"string"===typeof f&&(h=f,f=null);var g=[];h=Rb(b,a,h);var m,l,k;l=0;for(m=h.length;l<m;l++){k=h[l];if("string"!==typeof k)throw Na("itkn",k);g.push(f&&f.hasOwnProperty(k)?f[k]:d(k))}H(b)&&(b=b[m]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(H(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return S(a)||E(a)?a:d},get:d,annotate:Rb,has:function(a){return n.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},m=[],k=new $a([],!0),n={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,fa(b))}),constant:c(function(a,b){La(a,"constant");n[a]=b;l[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},p=n.$injector=g(n,function(){throw Na("unpr",m.join(" <- "));
}),l={},q=l.$injector=g(l,function(a){var b=p.get(a+"Provider");return q.invoke(b.$get,b,s,a)});r(f(b),function(a){q.invoke(a||y)});return q}function ke(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==pa(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,
0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function Ke(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Xe(b,a,c,d){function e(a){try{a.apply(null,Va.call(arguments,1))}finally{if(t--,0===t)for(;v.length;)try{v.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ea(){r(w,function(a){a()});A=b(ea,a)})()}function g(){W=null;O!=h.url()&&(O=h.url(),r(C,function(a){a(h.url())}))}
var h=this,m=a[0],k=b.location,n=b.history,p=b.setTimeout,l=b.clearTimeout,q={};h.isMock=!1;var t=0,v=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){t++};h.notifyWhenNoOutstandingRequests=function(a){r(w,function(a){a()});0===t?a():v.push(a)};var w=[],A;h.addPollFn=function(a){F(A)&&f(100,p);w.push(a);return a};var O=k.href,z=a.find("base"),W=null;h.url=function(a,c){k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){if(O!=a)return O=a,d.history?c?n.replaceState(null,
"",a):(n.pushState(null,"",a),z.attr("href",z.attr("href"))):(W=a,c?k.replace(a):k.href=a),h}else return W||k.href.replace(/%27/g,"'")};var C=[],Z=!1;h.onUrlChange=function(a){if(!Z){if(d.history)x(b).on("popstate",g);if(d.hashchange)x(b).on("hashchange",g);else h.addPollFn(g);Z=!0}C.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=z.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},L="",T=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=
encodeURIComponent(a)+"=;path="+T+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(m.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+T).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==L)for(L=m.cookie,d=L.split("; "),N={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=decodeURIComponent(e.substring(0,h)),N[a]===s&&(N[a]=decodeURIComponent(e.substring(h+1))));return N}};h.defer=function(a,
b){var c;t++;c=p(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};h.defer.cancel=function(a){return q[a]?(delete q[a],l(a),e(y),!0):!1}}function me(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Xe(b,d,a,c)}]}function ne(){this.$get=function(){function b(b,d){function e(a){a!=p&&(l?l==a&&(l=a.n):l=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw Q("$cacheFactory")("iid",b);var g=0,h=B({},d,{id:b}),m={},k=d&&d.capacity||
Number.MAX_VALUE,n={},p=null,l=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!F(b))return a in m||g++,m[a]=b,g>k&&this.remove(l.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==l&&(l=b.n);f(b.n,b.p);delete n[a]}delete m[a];g--},removeAll:function(){m={};g=0;n={};p=l=null},destroy:function(){n=h=m=null;delete a[b]},info:function(){return B({},
h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ee(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function mc(b,a){var c={},d=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,e=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,f=od("ngSrc,ngSrcset,src,srcset"),g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,d){La(a,"directive");D(a)?(Jb(d,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+"Directive",
["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var h=b.invoke(c);E(h)?h={compile:fa(h)}:!h.compile&&h.link&&(h.compile=fa(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";e.push(h)}catch(g){d(g)}});return e}])),c[a].push(d)):r(a,cc(k));return this};this.aHrefSanitizationWhitelist=function(b){return G(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return G(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var h=!0;this.debugInfoEnabled=function(a){return G(a)?(h=a,this):h};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,p,l,q,t,v,w,A,O,z){function W(a,b){try{a.addClass(b)}catch(c){}}function C(a,b,c,d,e){a instanceof x||(a=x(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&
(a[c]=x(b).wrap("<span></span>").parent()[0])});var f=Z(a,b,a,c,d,e);C.$$addScopeClass(a);var h=null,g=a,l;return function(b,c,d,e,k){Jb(b,"scope");h||(h=(k=k&&k[0])?"foreignobject"!==pa(k)&&k.toString().match(/SVG/)?"svg":"html":"html");"html"!==h&&a[0]!==l&&(g=x(U(h,x("<div>").append(a).html())));l=a[0];k=c?Ka.clone.call(g):g;if(d)for(var p in d)k.data("$"+p+"Controller",d[p].instance);C.$$addScopeInfo(k,b);c&&c(k,b);f&&f(b,k,k,e);return k}}function Z(a,b,c,d,e,f){function h(a,c,d,e){var f,l,k,
p,n,q,O;if(v)for(O=Array(c.length),p=0;p<g.length;p+=3)f=g[p],O[f]=c[f];else O=c;p=0;for(n=g.length;p<n;)l=O[g[p++]],c=g[p++],f=g[p++],c?(c.scope?(k=a.$new(),C.$$addScopeInfo(x(l),k)):k=a,q=c.transcludeOnThisElement?N(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?N(a,b):null,c(f,k,l,d,q)):f&&f(a,l.childNodes,s,e)}for(var g=[],l,k,p,n,v,q=0;q<a.length;q++){l=new Sb;k=L(a[q],[],l,0===q?d:s,e);(f=k.length?u(k,a[q],l,b,c,null,[],[],f):null)&&f.scope&&C.$$addScopeClass(l.$$element);
l=f&&f.terminal||!(p=a[q].childNodes)||!p.length?null:Z(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)g.push(q,f,l),n=!0,v=v||f;f=null}return n?h:null}function N(a,b,c,d){return function(e,f,h,g){var l=!1;e||(e=a.$new(),l=e.$$transcluded=!0);f=b(e,f,h,c,g);if(l&&!d)f.on("$destroy",function(){e.$destroy()});return f}}function L(b,f,h,g,l){var p=h.$attr,n;switch(b.nodeType){case 1:ea(f,va(pa(b)),"E",g,l);for(var v,q,O,t=b.attributes,A=0,z=t&&t.length;A<z;A++){var w=
!1,N=!1;v=t[A];if(!aa||8<=aa||v.specified){n=v.name;v=da(v.value);q=va(n);if(O=J.test(q))n=Wa(q.substr(6),"-");var W=q.replace(/(Start|End)$/,""),C;a:{var r=W;if(c.hasOwnProperty(r)){C=void 0;for(var r=a.get(r+"Directive"),u=0,T=r.length;u<T;u++)if(C=r[u],C.multiElement){C=!0;break a}}C=!1}C&&q===W+"Start"&&(w=n,N=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));q=va(n.toLowerCase());p[q]=n;if(O||!h.hasOwnProperty(q))h[q]=v,Ac(b,q)&&(h[q]=!0);ya(b,f,v,q,O);ea(f,q,"A",g,l,w,N)}}b=b.className;
if(D(b)&&""!==b)for(;n=e.exec(b);)q=va(n[2]),ea(f,q,"C",g,l)&&(h[q]=da(n[3])),b=b.substr(n.index+n[0].length);break;case 3:P(f,b.nodeValue);break;case 8:try{if(n=d.exec(b.nodeValue))q=va(n[1]),ea(f,q,"M",g,l)&&(h[q]=da(n[2]))}catch($){}}f.sort(F);return f}function T(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ka("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function R(a,
b,c){return function(d,e,f,h,g){e=T(e[0],b,c);return a(d,e,f,h,g)}}function u(a,c,d,e,f,h,g,l,k){function v(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=I.require;a.directiveName=ha;if(u===I||I.$$isolateScope)a=ga(a,{isolateScope:!0});g.push(a)}if(b){c&&(b=R(b,c,d));b.require=I.require;b.directiveName=ha;if(u===I||I.$$isolateScope)b=ga(b,{isolateScope:!0});l.push(b)}}function O(a,b,c,d){var e,f="data",h=!1;if(D(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),h=h||"?"==
e;e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||c[f]("$"+b+"Controller");if(!e&&!h)throw ka("ctreq",b,a);}else H(b)&&(e=[],r(b,function(b){e.push(O(a,b,c,d))}));return e}function A(a,e,f,h,k){function p(a,b,c){var d;Ta(a)||(c=b,b=a,a=s);B&&(d=T);c||(c=B?R.parent():R);return k(a,b,d,c)}var v,z,w,ma,T,$,R,M;c===f?(M=d,R=d.$$element):(R=x(f),M=new Sb(R,d));u&&(ma=e.$new(!0));$=k&&p;N&&(W={},T={},r(N,function(a){var b={$scope:a===u||a.$$isolateScope?ma:e,$element:R,$attrs:M,$transclude:$};w=a.controller;
"@"==w&&(w=M[a.name]);b=t(w,b,!0,a.controllerAs);T[a.name]=b;B||R.data("$"+a.name+"Controller",b.instance);W[a.name]=b}));if(u){var ea=/^\s*([@=&])(\??)\s*(\w*)\s*$/;C.$$addScopeInfo(R,ma,!0,!(Z&&(Z===u||Z===u.$$originalDirective)));C.$$addScopeClass(R,!0);h=W&&W[u.name];var L=ma;h&&h.identifier&&!0===u.bindToController&&(L=h.instance);r(u.scope,function(a,c){var d=a.match(ea)||[],f=d[3]||c,h="?"==d[2],d=d[1],g,l,k,p;ma.$$isolateBindings[c]=d+f;switch(d){case "@":M.$observe(f,function(a){ma[c]=a});
M.$$observers[f].$$scope=e;M[f]&&(L[c]=b(M[f])(e));break;case "=":if(h&&!M[f])break;l=q(M[f]);p=l.literal?ra:function(a,b){return a===b||a!==a&&b!==b};k=l.assign||function(){g=L[c]=l(e);throw ka("nonassign",M[f],u.name);};g=L[c]=l(e);h=e.$watch(q(M[f],function(a){p(a,L[c])||(p(a,g)?k(e,a=L[c]):L[c]=a);return g=a}),null,l.literal);ma.$on("$destroy",h);break;case "&":l=q(M[f]);L[c]=function(a){return l(e,a)};break;default:throw ka("iscp",u.name,c,a);}})}W&&(r(W,function(a){a()}),W=null);h=0;for(v=g.length;h<
v;h++)z=g[h],Fc(z,z.isolateScope?ma:e,R,M,z.require&&O(z.directiveName,z.require,R,T),$);h=e;u&&(u.template||null===u.templateUrl)&&(h=ma);a&&a(h,f.childNodes,s,k);for(h=l.length-1;0<=h;h--)z=l[h],Fc(z,z.isolateScope?ma:e,R,M,z.require&&O(z.directiveName,z.require,R,T),$)}k=k||{};for(var z=-Number.MAX_VALUE,w,N=k.controllerDirectives,W,u=k.newIsolateScopeDirective,Z=k.templateDirective,ea=k.nonTlbTranscludeDirective,y=!1,F=!1,B=k.hasElementTranscludeDirective,ca=d.$$element=x(c),I,ha,J,P=e,za,K=0,
ya=a.length;K<ya;K++){I=a[K];var ub=I.$$start,V=I.$$end;ub&&(ca=T(c,ub,V));J=s;if(z>I.priority)break;if(J=I.scope)I.templateUrl||(S(J)?(Q("new/isolated scope",u||w,I,ca),u=I):Q("new/isolated scope",u,I,ca)),w=w||I;ha=I.name;!I.templateUrl&&I.controller&&(J=I.controller,N=N||{},Q("'"+ha+"' controller",N[ha],I,ca),N[ha]=I);if(J=I.transclude)y=!0,I.$$tlb||(Q("transclusion",ea,I,ca),ea=I),"element"==J?(B=!0,z=I.priority,J=ca,ca=d.$$element=x(Y.createComment(" "+ha+": "+d[ha]+" ")),c=ca[0],M(f,Va.call(J,
0),c),P=C(J,e,z,h&&h.name,{nonTlbTranscludeDirective:ea})):(J=x(Mb(c)).contents(),ca.empty(),P=C(J,e));if(I.template)if(F=!0,Q("template",Z,I,ca),Z=I,J=E(I.template)?I.template(ca,d):I.template,J=X(J),I.replace){h=I;J=Kb.test(J)?x(U(I.templateNamespace,da(J))):[];c=J[0];if(1!=J.length||1!==c.nodeType)throw ka("tplrt",ha,"");M(f,ca,c);ya={$attr:{}};J=L(c,[],ya);var aa=a.splice(K+1,a.length-(K+1));u&&$(J);a=a.concat(J).concat(aa);G(d,ya);ya=a.length}else ca.html(J);if(I.templateUrl)F=!0,Q("template",
Z,I,ca),Z=I,I.replace&&(h=I),A=Ye(a.splice(K,a.length-K),ca,d,f,y&&P,g,l,{controllerDirectives:N,newIsolateScopeDirective:u,templateDirective:Z,nonTlbTranscludeDirective:ea}),ya=a.length;else if(I.compile)try{za=I.compile(ca,d,P),E(za)?v(null,za,ub,V):za&&v(za.pre,za.post,ub,V)}catch(ba){p(ba,ta(ca))}I.terminal&&(A.terminal=!0,z=Math.max(z,I.priority))}A.scope=w&&!0===w.scope;A.transcludeOnThisElement=y;A.elementTranscludeOnThisElement=B;A.templateOnThisElement=F;A.transclude=P;k.hasElementTranscludeDirective=
B;return A}function $(a){for(var b=0,c=a.length;b<c;b++)a[b]=ec(a[b],{$$isolateScope:!0})}function ea(b,d,e,f,h,g,l){if(d===h)return null;h=null;if(c.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var v=0,q=d.length;v<q;v++)try{n=d[v],(f===s||f>n.priority)&&-1!=n.restrict.indexOf(e)&&(g&&(n=ec(n,{$$start:g,$$end:l})),b.push(n),h=n)}catch(O){p(O)}}return h}function G(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),
a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(W(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Ye(a,b,c,d,e,f,h,g){var k=[],p,n,v=b[0],q=a.shift(),O=B({},q,{templateUrl:null,transclude:null,replace:null,$$originalDirective:q}),t=E(q.templateUrl)?q.templateUrl(b,c):q.templateUrl,z=q.templateNamespace;b.empty();l(A.getTrustedResourceUrl(t)).then(function(l){var A,
w;l=X(l);if(q.replace){l=Kb.test(l)?x(U(z,da(l))):[];A=l[0];if(1!=l.length||1!==A.nodeType)throw ka("tplrt",q.name,t);l={$attr:{}};M(d,b,A);var C=L(A,[],l);S(q.scope)&&$(C);a=C.concat(a);G(c,l)}else A=v,b.html(l);a.unshift(O);p=u(a,A,c,e,b,q,f,h,g);r(d,function(a,c){a==A&&(d[c]=b[0])});for(n=Z(b[0].childNodes,e);k.length;){l=k.shift();w=k.shift();var R=k.shift(),T=k.shift(),C=b[0];if(w!==v){var ea=w.className;g.hasElementTranscludeDirective&&q.replace||(C=Mb(A));M(R,x(w),C);W(x(C),ea)}w=p.transcludeOnThisElement?
N(l,p.transclude,T):T;p(n,l,C,d,w)}k=null});return function(a,b,c,d,e){a=e;k?(k.push(b),k.push(c),k.push(d),k.push(a)):(p.transcludeOnThisElement&&(a=N(b,p.transclude,e)),p(n,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){if(b)throw ka("multidir",b.name,c.name,a,ta(d));}function P(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&C.$$addBindingClass(a);return function(a,
c){var e=c.parent();b||C.$$addBindingClass(e);C.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function U(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function za(a,b){if("srcdoc"==b)return A.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return A.RESOURCE_URL}function ya(a,c,d,e,h){var l=b(d,!0);
if(l){if("multiple"===e&&"select"===pa(a))throw ka("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ka("nodomevents");if(l=b(k[e],!0,za(a,e),f[e]||h))k[e]=l(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(l,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function M(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==
d){a[h++]=c;g=h+e-1;for(var l=a.length;h<l;h++,g++)g<l?a[h]=a[g]:delete a[h];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);x(c).data(x(d).data());ua?(Ib=!0,ua.cleanData([d])):delete x.cache[d[x.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],x(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ga(a,b){return B(function(){return a.apply(null,arguments)},a,b)}function Fc(a,b,c,d,e,f){try{a(b,c,d,e,f)}catch(h){p(h,ta(c))}}
var Sb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Sb.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Gc(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=Gc(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,c,d){var e=this.$$element[0],f=Ac(e,a),
h=Se(e,a),e=a;f?(this.$$element.prop(a,b),d=f):h&&(this[h]=b,e=h);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=Wa(a,"-"));f=pa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=z(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(a=this.$$observers)&&r(a[e],function(a){try{a(b)}catch(c){p(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){e.$$inter||
b(c[a])});return function(){Ia(e,b)}}};var ha=b.startSymbol(),V=b.endSymbol(),X="{{"==ha||"}}"==V?Fa:function(a){return a.replace(/\{\{/g,ha).replace(/}}/g,V)},J=/^ngAttr[A-Z]/;C.$$addBindingInfo=h?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:y;C.$$addBindingClass=h?function(a){W(a,"ng-binding")}:y;C.$$addScopeInfo=h?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:y;C.$$addScopeClass=h?function(a,b){W(a,b?"ng-isolate-scope":
"ng-scope")}:y;return C}]}function va(b){return Za(b.replace(Ze,""))}function Gc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function oe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");S(a)?B(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!S(a.$scope))throw Q("$controller")("noscp",
d,b);a.$scope[b]=c}return function(g,h,m,k){var n,p,l;m=!0===m;k&&D(k)&&(l=k);D(g)&&(k=g.match(c),p=k[1],l=l||k[3],g=b.hasOwnProperty(p)?b[p]:lc(h.$scope,p,!0)||(a?lc(e,p,!0):s),kb(g,p,!0));if(m)return m=function(){},m.prototype=(H(g)?g[g.length-1]:g).prototype,n=new m,l&&f(h,l,n,p||g.name),B(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:l});n=d.instantiate(g,h,p);l&&f(h,l,n,p||g.name);return n}}]}function pe(){this.$get=["$window",function(b){return x(b.document)}]}function qe(){this.$get=
["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Hc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(da(b.substr(0,e)));d=da(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Ic(b){var a=S(b)?b:s;return function(c){a||(a=Hc(b));return c?a[K(c)]||null:a}}function Jc(b,a,c){if(E(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function te(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},
e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=gc(d)));return d}],transformRequest:[function(a){return S(a)&&"[object File]"!==Ha.call(a)&&"[object Blob]"!==Ha.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(d),put:qa(d),patch:qa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return G(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser",
"$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,p,l){function q(a){function b(a){var d=B({},a,{data:Jc(a.data,a.headers,c.transformResponse)});a=a.status;return 200<=a&&300>a?d:p.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=B({},a.headers),d,f,b=B({},b.common,b[K(a.method)]);a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){E(c)&&(b=c(),null!=
b?a[d]=b:delete a[d])})})(c);return c}(a);B(c,a);c.headers=d;c.method=mb(c.method);var f=[function(a){d=a.headers;var c=Jc(a.data,Ic(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===K(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],h=p.when(c);for(r(A,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=
f.shift();var g=f.shift(),h=h.then(a,g)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,c)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,c)});return h};return h}function t(c,g,l){function k(a,b,c,e){function h(){A(b,a,c,e)}R&&(200<=a&&300>a?R.put($,[a,b,Hc(c),e]):R.remove($));f?d.$applyAsync(h):(h(),d.$$phase||d.$apply())}function A(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?r.resolve:r.reject)({data:a,status:b,headers:Ic(d),config:c,statusText:e})}
function t(){var a=Ca(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,1)}var r=p.defer(),T=r.promise,R,u,$=v(c.url,c.params);q.pendingRequests.push(c);T.then(t,t);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=S(c.cache)?c.cache:S(e.cache)?e.cache:w);if(R)if(u=R.get($),G(u)){if(u&&E(u.then))return u.then(t,t),u;H(u)?A(u[1],u[0],qa(u[2]),u[3]):A(u,200,{},"OK")}else R.put($,T);F(u)&&((u=Kc(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(l[c.xsrfHeaderName||
e.xsrfHeaderName]=u),a(c.method,$,g,k,l,c.timeout,c.withCredentials,c.responseType));return T}function v(a,b){if(!b)return a;var c=[];ld(b,function(a,b){null===a||F(a)||(H(a)||(a=[a]),r(a,function(a){S(a)&&(ia(a)?a=a.toISOString():S(a)&&(a=sa(a)));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),A=[];r(g,function(a){A.unshift(D(a)?l.get(a):l.invoke(a))});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(B(c||
{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(B(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");q.defaults=e;return q}]}function $e(b){if(8>=aa&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw Q("$httpBackend")("noxhr");}function ue(){this.$get=["$browser","$window","$document",function(b,
a,c){return af(b,$e,b.defer,a.angular.callbacks,c[0])}]}function af(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,q="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),q=a.type,g="error"===a.type?404:200);c&&c(g,q)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);
return n}return function(e,h,m,k,n,p,l,q){function t(){w=-1;O&&O();z&&z.abort()}function v(a,d,e,f,g){C&&c.cancel(C);O=z=null;0===d&&(d=e?200:"file"==Aa(h).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(y)}var w;b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==K(e)){var A="_"+(d.counter++).toString(36);d[A]=function(a){d[A].data=a;d[A].called=!0};var O=f(h.replace("JSON_CALLBACK","angular.callbacks."+A),A,function(a,b){v(k,a,d[A].data,"",b);d[A]=y})}else{var z=
a(e);z.open(e,h,!0);r(n,function(a,b){G(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null,c="";-1!==w&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);-1===w&&10>aa||(c=z.statusText);v(k,w||z.status,b,a,c)}};l&&(z.withCredentials=!0);if(q)try{z.responseType=q}catch(W){if("json"!==q)throw W;}z.send(m||null)}if(0<p)var C=c(t,p);else p&&E(p.then)&&p.then(t)}}function re(){var b="{{",a="}}";this.startSymbol=function(a){return a?
(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,q,t){function v(c){return c.replace(k,b).replace(n,a)}function w(a){try{var b;var c=q?e.getTrusted(q,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;case "number":c=""+c;break;default:c=sa(c)}b=c}return b}catch(h){a=Tb("interr",f,h.toString()),d(a)}}t=!!t;for(var A,O,z=0,r=[],C=[],Z=f.length,N=[],L=[];z<
Z;)if(-1!=(A=f.indexOf(b,z))&&-1!=(O=f.indexOf(a,A+h)))z!==A&&N.push(v(f.substring(z,A))),z=f.substring(A+h,O),r.push(z),C.push(c(z,w)),z=O+m,L.push(N.length),N.push("");else{z!==Z&&N.push(v(f.substring(z)));break}if(q&&1<N.length)throw Tb("noconcat",f);if(!g||r.length){var T=function(a){for(var b=0,c=r.length;b<c;b++){if(t&&F(a[b]))return;N[L[b]]=a[b]}return N.join("")};return B(function(a){var b=0,c=r.length,e=Array(c);try{for(;b<c;b++)e[b]=C[b](a);return T(e)}catch(h){a=Tb("interr",f,h.toString()),
d(a)}},{exp:f,expressions:r,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(C,function(c,e){var f=T(c);E(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,m=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function se(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,m,k){var n=a.setInterval,p=a.clearInterval,l=0,q=G(k)&&!k,t=(q?d:c).defer(),
v=t.promise;m=G(m)?m:0;v.then(null,null,e);v.$$intervalId=n(function(){t.notify(l++);0<m&&l>=m&&(t.resolve(l),p(v.$$intervalId),delete f[v.$$intervalId]);q||b.$apply()},h);f[v.$$intervalId]=t;return v}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,
maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Ub(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ib(b[a]);return b.join("/")}function Lc(b,a,c){b=Aa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=V(b.port)||bf[b.protocol]||null}function Mc(b,a,c){var d="/"!==b.charAt(0);d&&(b=
"/"+b);b=Aa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ic(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function wa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function ab(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Vb(b){return b.substr(0,ab(b).lastIndexOf("/")+1)}function Nc(b,a){this.$$html5=!0;a=a||"";var c=Vb(b);Lc(b,this,b);this.$$parse=function(a){var e=
wa(c,a);if(!D(e))throw vb("ipthprfx",a,c);Mc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Gb(this.$$search),b=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ub(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=wa(b,d))!==s?(g=f,g=(f=wa(a,f))!==s?c+(wa("/",f)||f):b+g):(f=wa(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Wb(b,
a){var c=Vb(b);Lc(b,this,b);this.$$parse=function(d){var e=wa(b,d)||wa(c,d),e="#"==e.charAt(0)?wa(a,e):this.$$html5?e:"";if(!D(e))throw vb("ihshprfx",d,a);Mc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Gb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ub(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=
function(a,c){return ab(b)==ab(a)?(this.$$parse(a),!0):!1}}function Oc(b,a){this.$$html5=!0;Wb.apply(this,arguments);var c=Vb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==ab(d)?f=d:(g=wa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Gb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ub(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function wb(b){return function(){return this[b]}}
function Pc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ve(){var b="",a=!1;this.hashPrefix=function(a){return G(a)?(b=a,this):b};this.html5Mode=function(b){return G(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();if(a){if(!m)throw vb("nobase");m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/");
e=e.history?Nc:Oc}else m=ab(k),e=Wb;h=new e(m,"#"+b);h.$$parseLinkUrl(k,k);var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=x(a.target);"a"!==pa(b[0]);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");S(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=Aa(e.animVal).href);n.test(e)||!e||b.attr("target")||a.isDefaultPrevented()||!h.$$parseLinkUrl(e,g)||(a.preventDefault(),h.absUrl()!=d.url()&&
(c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var p=0;c.$watch(function(){var a=d.url(),b=h.$$replace;p&&a==h.absUrl()||(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),
b),g(a))}));h.$$replace=!1;return p});return h}]}function we(){var b=!0,a=this;this.debugEnabled=function(a){return G(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||y;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw oa("isecfld",a);return b}function Oa(b,a){if(b){if(b.constructor===b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||
b.prop&&b.attr&&b.find))throw oa("isecdom",a);if(b===Object)throw oa("isecobj",a);}return b}function xb(b,a,c,d){a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=b[e];g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Oa(b,d);Oa(b[e],d);return b[e]=c}function Qc(b,a,c,d,e,f){na(b,f);na(a,f);na(c,f);na(d,f);na(e,f);return function(f,h){var m=h&&h.hasOwnProperty(b)?h:f;if(null==m)return m;m=m[b];if(!a)return m;if(null==m)return s;m=m[a];if(!c)return m;if(null==m)return s;m=m[c];if(!d)return m;
if(null==m)return s;m=m[d];return e?null==m?s:m=m[e]:m}}function Rc(b,a,c){var d=Sc[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Qc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Qc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=s,a=g;while(d<f);return g};else{var g="";r(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=fa(g);d=a}return Sc[b]=d}function xe(){var b=
Object.create(null),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);G(a)&&d.$$postDigest(function(){G(f)&&e()})},c)}function f(a,b,c,d){function e(a){var b=!0;r(a,function(a){G(a)||(b=!1)});return b}var f;return f=a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(a)&&f()})},c)}function g(a,b,c,d){var e;return e=
a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.apply(this,arguments);e()},c)}function h(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return G(e)?f:e};c.$$watchDelegate=a.$$watchDelegate;return c}a.csp=d.csp;return function(d,k){var n,p,l;switch(typeof d){case "string":return l=d=d.trim(),n=b[l],n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(p=!0,d=d.substring(2)),n=new Xb(a),n=(new bb(n,c,a)).parse(d),n.constant?n.$$watchDelegate=g:p&&(n.$$watchDelegate=n.literal?f:e),b[l]=
n),h(n,k);case "function":return h(d,k);default:return h(y,k)}}}]}function ze(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Tc(function(a){b.$evalAsync(a)},a)}]}function Ae(){this.$get=["$browser","$exceptionHandler",function(b,a){return Tc(function(a){b.defer(a)},a)}]}function Tc(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=s;for(var f=0,h=e.length;f<h;++f){d=e[f][0];b=e[f][c.status];try{E(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(g){d.reject(g),a(g)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=Q("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(S(b)||E(b))d=b&&b.then;E(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(h){e[1](h),a(h)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,h=d.length;f<h;f++){e=d[f][0];b=d[f][3];try{e.notify(E(b)?
b(c):c)}catch(g){a(g)}}})}};var m=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return m(e,!1)}return d&&E(d.then)?d.then(function(){return m(a,b)},function(a){return m(a,!1)}):m(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function q(a){if(!E(a))throw h("norslvr",a);if(!(this instanceof q))return new q(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Je(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||
b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function ye(){var b=10,a=Q("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function m(){this.$id=++fb;this.$$phase=this.$parent=this.$$watchers=
this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={};this.$$applyAsyncQueue=[]}function k(b){if(t.$$phase)throw a("inprog",t.$$phase);t.$$phase=b}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function l(){for(var a=t.$$applyAsyncQueue;a.length;)try{a.shift()()}catch(b){f(b)}d=
null}function q(){null===d&&(d=h.defer(function(){t.$apply(l)}))}m.prototype={constructor:m,$new:function(a){a?(a=new m,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++fb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),a=new this.$$ChildScope);a["this"]=a;a.$parent=
this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;E(b)||(h.fn=y);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Ia(f,h);c=null}},$watchGroup:function(a,b){function c(){g=!1;k?(k=!1,b(e,e,h)):b(e,d,h)}var d=Array(a.length),e=Array(a.length),
f=[],h=this,g=!1,k=!0;if(!a.length){var l=!0;h.$evalAsync(function(){l&&b(e,e,h)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=h.$watch(a,function(a,f){e[b]=a;d[b]=f;g||(g=!0,h.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,k=0,l=g(a,function(a){d=a;var b,c,f,h;if(S(d))if(eb(d))for(e!==m&&(e=m,q=e.length=0,k++),a=d.length,
q!==a&&(k++,e.length=q=a),b=0;b<a;b++)h=e[b],f=d[b],c=h!==h&&f!==f,c||h===f||(k++,e[b]=f);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,f=d[b],h=e[b],b in e?(c=h!==h&&f!==f,c||h===f||(k++,e[b]=f)):(q++,e[b]=f,k++));if(q>a)for(b in k++,e)d.hasOwnProperty(b)||(q--,delete e[b])}else e!==d&&(e=d,k++);return k}),m=[],n={},p=!0,q=0;return this.$watch(l,function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(S(d))if(eb(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f=
{},d)Fb.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var e,g,m,n,q=this.$$asyncQueue,r=this.$$postDigestQueue,C,s,N=b,L,T=[],R,u,$;k("$digest");h.$$checkUrlChange();this===t&&null!==d&&(h.defer.cancel(d),l());c=null;do{s=!1;for(L=this;q.length;){try{$=q.shift(),$.scope.$eval($.expression)}catch(G){f(G)}c=null}a:do{if(n=L.$$watchers)for(C=n.length;C--;)try{if(e=n[C])if((g=e.get(L))!==(m=e.last)&&!(e.eq?ra(g,m):"number"===typeof g&&"number"===typeof m&&isNaN(g)&&isNaN(m)))s=!0,c=e,e.last=e.eq?
Ja(g,null):g,e.fn(g,m===p?g:m,L),5>N&&(R=4-N,T[R]||(T[R]=[]),u=E(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,u+="; newVal: "+sa(g)+"; oldVal: "+sa(m),T[R].push(u));else if(e===c){s=!1;break a}}catch(x){f(x)}if(!(n=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(n=L.$$nextSibling);)L=L.$parent}while(L=n);if((s||q.length)&&!N--)throw t.$$phase=null,a("infdig",b,sa(T));}while(s||q.length);for(t.$$phase=null;r.length;)try{r.shift()()}catch(y){f(y)}},$destroy:function(){if(!this.$$destroyed){var a=
this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==t){for(var b in this.$$listenerCount)n(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null;
this.$$listeners={};this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[];this.$destroy=this.$digest=this.$apply=y;this.$on=this.$watch=this.$watchGroup=function(){return y}}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){t.$$phase||t.$$asyncQueue.length||h.defer(function(){t.$$asyncQueue.length&&t.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{t.$$phase=
null;try{t.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.$$applyAsyncQueue.push(b);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Ca(c,b)]=null;n(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,h=!1,g={name:a,targetScope:e,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=
!0},defaultPrevented:!1},k=hb([g],arguments,1),l,m;do{d=e.$$listeners[a]||c;g.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(h)return g.currentScope=null,g;e=e.$parent}while(e);g.currentScope=null;return g},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var h=hb([e],arguments,1),g,k;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,h)}catch(l){f(l)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var t=new m;return t}]}function Bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return G(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=
function(b){return G(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!aa||8<=aa)if(f=Aa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function cf(b){if("self"===b)return b;if(D(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(gb(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function Uc(b){var a=
[];G(b)&&r(b,function(b){a.push(cf(b))});return a}function Ce(){this.SCE_CONTEXTS=la;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Uc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Uc(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Kc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===la.RESOURCE_URL){var g=Aa(e.toString()),p,l,q=!1;p=0;for(l=b.length;p<l;p++)if(d(b[p],g)){q=!0;break}if(q)for(p=0,l=a.length;p<l;p++)if(d(a[p],g)){q=!1;break}if(q)return e;throw Ba("insecurl",e.toString());}if(c===la.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Be(){var b=!0;this.enabled=function(a){arguments.length&&
(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw Ba("iequirks");var e=qa(la);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Fa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:a(c,function(a){return e.getTrusted(b,a)})};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(la,function(a,b){var c=K(b);e[Za("parse_as_"+
c)]=function(b){return f(a,b)};e[Za("get_trusted_"+c)]=function(b){return g(a,b)};e[Za("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function De(){this.$get=["$window","$document",function(b,a){var c={},d=V((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,n=!1,p=!1;if(k){for(var l in k)if(n=m.exec(l)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);
break}h||(h="WebkitOpacity"in k&&"webkit");n=!!("transition"in k||h+"Transition"in k);p=!!("animation"in k||h+"Animation"in k);!d||n&&p||(n=D(f.body.style.webkitTransition),p=D(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==aa)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xa(),vendorPrefix:h,transitions:n,animations:p,android:d,msie:aa,msieDocumentMode:g}}]}
function Fe(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){h.totalPendingRequests--;if(!f)throw ka("tpload",e);return c.reject()}var h=d;h.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();h.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Ge(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");
var g=[];r(a,function(a){var d=xa.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var m=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(m.length)return m}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}
function He(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,m,k){var n=G(k)&&!k,p=(n?d:c).defer(),l=p.promise;m=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},m);l.$$timeoutId=m;g[m]=p;return l}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b,a){var c=b;
aa&&(X.setAttribute("href",c),c=X.href);X.setAttribute("href",c);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function Kc(b){b=D(b)?Aa(b):b;return b.protocol===Vc.protocol&&b.host===Vc.host}function Ie(){this.$get=fa(P)}function tc(b){function a(c,d){if(S(c)){var e={};r(c,function(b,
c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",Wc);a("date",Xc);a("filter",df);a("json",ef);a("limitTo",ff);a("lowercase",gf);a("number",Yc);a("orderBy",Zc);a("uppercase",hf)}function df(){return function(b,a,c){if(!H(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return xa.equals(a,
b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Fb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;
case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h,g)&&d.push(h)}return d}}function Wc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return null==
b?b:$c(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Yc(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:$c(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function $c(b,a,c,d,e){if(!isFinite(b)||S(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?(g="0",b=0):(h=g,k=!0)}if(k)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(ad)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,
g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);b=(""+b).split(ad);g=b[0];b=b[1]||"";var n=0,p=a.lgSize,l=a.gSize;if(g.length>=p+l)for(n=g.length-p,k=0;k<n;k++)0===(n-k)%l&&0!==k&&(h+=c),h+=g.charAt(k);for(k=n;k<g.length;k++)0===(g.length-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function yb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<
a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function ba(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return yb(e,a,d)}}function zb(b,a){return function(c,d){var e=c["get"+b](),f=mb(a?"SHORT"+b:b);return d[f][e]}}function bd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function cd(b){return function(a){var c=bd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);
return yb(a,b)}}function Xc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=V(b[9]+b[10]),g=V(b[9]+b[11]));h.call(a,V(b[1]),V(b[2])-1,V(b[3]));f=V(b[4]||0)-f;g=V(b[5]||0)-g;h=V(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],
m,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&(c=jf.test(c)?V(c):a(c));Ga(c)&&(c=new Date(c));if(!ia(c))return c;for(;e;)(k=kf.exec(e))?(h=hb(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){m=lf[a];g+=m?m(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ef(){return function(b){return sa(b,!0)}}function ff(){return function(b,a){if(!H(b)&&!D(b))return b;a=Infinity===
Math.abs(Number(a))?Number(a):V(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Zc(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ia(a)&&ia(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}
if(!H(a)||!c)return a;c=H(c)?c:[c];c=pd(c,function(a){var c=!1,d=a||Fa;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var h=d();return e(function(a,b){return f(a[h],b[h])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ea(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return fa(b)}
function dd(b,a,c,d){function e(a,c){c=c?"-"+Wa(c,"-"):"";d.removeClass(b,(a?Pa:Qa)+c);d.addClass(b,(a?Qa:Pa)+c)}var f=this,g=b.parent().controller("form")||Ab,h=0,m=0,k=[],n=f.$error={};f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;g.$addControl(f);b.addClass(Ra);e(!0);f.$rollbackViewValue=function(){r(k,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(k,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");
k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];f.$$clearControlValidity(a);Ia(k,a)};f.$$clearControlValidity=function(a){function b(c,d){f.$setValidity(d,!0,a)}r(f.$pending,b);r(n,b);g.$$clearControlValidity(f)};f.$$setPending=function(a,b){var c=f.$pending&&f.$pending[a];c&&-1!=Ca(c,b)||(m++,f.$valid=f.$invalid=s,f.$pending=f.$pending||{},c||(c=f.$pending[a]=[]),c.push(b),g.$$setPending(a,f))};f.$setValidity=function(a,b,c){var d=n[a],k,
r=f.$pending&&f.$pending[a];r&&(k=0<=Ca(r,c))&&(Ia(r,c),m--,0===r.length&&delete f.$pending[a]);if(r=f.$pending&&0===m)f.$pending=s;if(b){if(d||k)(d&&Ia(d,c),d&&d.length)||(n[a]&&h--,h?r&&(e(!1),f.$valid=!1,f.$invalid=!0):f.$pending||(e(b),f.$valid=!0,f.$invalid=!1),n[a]=!1,e(!0,a),g.$setValidity(a,!0,f))}else{f.$pending||(f.$valid=!1,f.$invalid=!0);h||e(b);if(d){if(-1!=Ca(d,c))return}else n[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c)}};f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,
Bb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Bb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(k,function(a){a.$setPristine()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;g.$setSubmitted()}}function Yb(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function cb(b,a,c,d,e,f){var g=a.prop("validity"),h=a[0].placeholder,m={},k=K(a[0].type);d.$$validityState=g;if(!e.android){var n=!1;a.on("compositionstart",
function(a){n=!0});a.on("compositionend",function(){n=!1;p()})}var p=function(e){if(!n){var f=a.val(),l=e&&e.type;if(aa&&"input"===(e||m).type&&a[0].placeholder!==h)h=a[0].placeholder;else{"password"===k||c.ngTrim&&"false"===c.ngTrim||(f=da(f));var p=g&&d.$$hasNativeValidators;if(d.$viewValue!==f||""===f&&p)b.$$phase?d.$setViewValue(f,l,p):b.$apply(function(){d.$setViewValue(f,l,p)})}}};if(e.hasEvent("input"))a.on("input",p);else{var l,q=function(a){l||(l=f.defer(function(){p(a);l=null}))};a.on("keydown",
function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||q(a)});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",p);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Cb(b,a){return function(c){var d;return ia(c)?c:D(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0},r(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm,d.ss||0)):NaN}}function db(b,a,c,d){return function(e,f,g,h,m,k,n){Db(e,f,g,h);
cb(e,f,g,h,m,k);var p=h&&h.$options&&h.$options.timezone;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b),"UTC"===p&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):s});h.$formatters.push(function(a){return ia(a)?n("date")(a,d,p):""});g.min&&(h.$validators.min=function(a){return h.$isEmpty(a)||F(g.min)||c(a)>=c(g.min)});g.max&&(h.$validators.max=function(a){return h.$isEmpty(a)||F(g.max)||c(a)<=c(g.max)})}}function Db(b,a,c,d){(d.$$hasNativeValidators=
S(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput||c.typeMismatch?s:b})}function ed(b,a,c,d,e){if(G(d)){b=b(d);if(!b.constant)throw Q("ngModel")("constexpr",c,d);return b(a)}return e}function Zb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(D(a))return a.split(" ");if(S(a)){var b=[];r(a,function(a,c){a&&
(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!n){var k=m(l,1);h.$addClass(k)}else if(!ra(b,n)){var r=e(n),k=d(l,r),l=d(r,l),k=m(k,1),l=m(l,-1);k&&k.length&&c.addClass(g,k);l&&l.length&&c.removeClass(g,l)}}n=qa(b)}var n;f.$watch(h[b],
k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=m(k,1),h.$addClass(g)):(g=m(k,-1),h.$removeClass(g))}})}}}]}var mf=/^\/(.+)\/([a-z]*)$/,K=function(b){return D(b)?b.toLowerCase():b},Fb=Object.prototype.hasOwnProperty,mb=function(b){return D(b)?b.toUpperCase():b},aa,x,ua,Va=[].slice,nf=[].push,Ha=Object.prototype.toString,Ua=Q("ng"),xa=P.angular||(P.angular={}),Ya,fb=0;aa=V((/msie (\d+)/.exec(K(navigator.userAgent))||
[])[1]);isNaN(aa)&&(aa=V((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));y.$inject=[];Fa.$inject=[];var H=Array.isArray,da=function(b){return D(b)?b.trim():b},Xa=function(){if(G(Xa.isActive_))return Xa.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Xa.isActive_=b},jb=["ng-","data-ng-","ng:","x-ng-"],vd=/[A-Z]/g,kc=!1,Ib,zd={full:"1.3.0-rc.0",major:1,minor:3,dot:0,codeName:"sonic-boltification"};U.expando=
"ng339";var rb=U.cache={},Re=1;U._data=function(b){return this.cache[b[this.expando]]||{}};var Le=/([\:\-\_]+(.))/g,Me=/^moz([A-Z])/,of={mouseleave:"mouseout",mouseenter:"mouseover"},Lb=Q("jqLite"),Qe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Kb=/<|&#?\w+;/,Oe=/<([\w:]+)/,Pe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=U.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),U(P).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?x(this[b]):x(this[this.length+b])},
length:0,push:nf,sort:[].sort,splice:[].splice},tb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){tb[K(b)]=b});var Bc={};r("input select option textarea button form details".split(" "),function(b){Bc[b]=!0});var Cc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngPattern:"pattern"};r({data:Nb,removeData:pb},function(b,a){U[a]=b});r({data:Nb,inheritedData:sb,scope:function(b){return x.data(b,"$scope")||sb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return x.data(b,
"$isolateScope")||x.data(b,"$isolateScopeNoTemplate")},controller:xc,injector:function(b){return sb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ob,css:function(b,a,c){a=Za(a);if(G(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=K(a);if(tb[d])if(G(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||y).specified?d:s;else if(G(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,
2),null===b?s:b},prop:function(b,a,c){if(G(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(F(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(F(a)){if(b.multiple&&"select"===pa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;ob(b,!0);b.innerHTML=a},empty:yc},function(b,a){U.prototype[a]=function(a,
d){var e,f,g=this.length;if(b!==yc&&(2==b.length&&b!==Ob&&b!==xc?a:d)===s){if(S(a)){for(e=0;e<g;e++)if(b===Nb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:pb,on:function a(c,d,e,f){if(G(f))throw Lb("onargs");if(uc(c)){var g=qb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Te(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],m=g.length;m--;){d=
g[m];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,of[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:wc,one:function(a,c,d){a=x(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;ob(a);r(new U(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&
c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(1===d||11===d){c=new U(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new U(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=x(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:zc,detach:function(a){zc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=
new U(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Qb,removeClass:Pb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;F(f)&&(f=!Ob(a,c));(f?Qb:Pb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Mb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=qb(a);if(g=(g=g&&g.events)&&
g[e])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:y,type:e,target:a},c.type&&(e=B(e,c)),c=qa(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)})}},function(a,c){U.prototype[c]=function(c,e,f){for(var g,h=0,m=this.length;h<m;h++)F(g)?(g=a(this[h],c,e,f),G(g)&&(g=x(g))):vc(g,a(this[h],c,e,f));return G(g)?g:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});$a.prototype={put:function(a,
c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Ec=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ve=/,/,We=/^\s*(_?)(\S+?)\1\s*$/,Dc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Na=Q("$injector");Hb.$$annotate=Rb;var pf=Q("$animate"),le=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw pf("notcsel",c);this.$$selectors[c.substr(1)]=e;
a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback",function(a,d){function e(){f||(f=a.defer(),d(function(){f.resolve();f=null}));return f.promise}var f;return{enter:function(a,c,d){d?d.after(a):c.prepend(a);return e()},leave:function(a){a.remove();return e()},move:function(a,c,d){return this.enter(a,c,d)},addClass:function(a,c){c=D(c)?c:H(c)?c.join(" "):"";r(a,
function(a){Qb(a,c)});return e()},removeClass:function(a,c){c=D(c)?c:H(c)?c.join(" "):"";r(a,function(a){Pb(a,c)});return e()},setClass:function(a,c,d){this.addClass(a,c);this.removeClass(a,d);return e()},enabled:y,cancel:y}}]}],ka=Q("$compile");mc.$inject=["$provide","$$sanitizeUriProvider"];var Ze=/^(x[\:\-_]|data[\:\-_])/i,Tb=Q("$interpolate"),qf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,bf={http:80,https:443,ftp:21},vb=Q("$location");Oc.prototype=Wb.prototype=Nc.prototype={$$html5:!1,$$replace:!1,absUrl:wb("$$absUrl"),
url:function(a,c){if(F(a))return this.$$url;var d=qf.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:wb("$$protocol"),host:wb("$$host"),port:wb("$$port"),path:Pc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=ic(a);else if(S(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw vb("isrcharg");
break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Pc("$$hash",Fa),replace:function(){this.$$replace=!0;return this}};var oa=Q("$parse"),rf=Function.prototype.call,sf=Function.prototype.apply,tf=Function.prototype.bind,Eb=B(Object.create(null),{"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:y,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return G(d)?G(e)?d+e:d:G(e)?e:s},"-":function(a,c,d,e){d=d(a,
c);e=e(a,c);return(G(d)?d:0)-(G(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":y,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}}),uf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Xb=function(a){this.options=a};Xb.prototype={constructor:Xb,lex:function(a){this.text=a;this.index=0;this.ch=s;for(this.tokens=[];this.index<this.text.length;)if(this.ch=
this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=Eb[this.ch],e=Eb[a],f=Eb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,
text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=G(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&
e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}e&&"."===c[c.length-
1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=s));if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(f=Eb[c])d.fn=f,d.constant=!0;else{var m=Rc(c,this.options,this.text);d.fn=B(function(a,c){return m(a,c)},{assign:function(d,e){return xb(d,c,e,a.text)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+
1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=uf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=
g}this.index++}this.throwError("Unterminated quote",c)}};var bb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};bb.ZERO=B(function(){return 0},{constant:!0});bb.prototype={constructor:bb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=
this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return B(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,
c,d){return B(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return B(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=
this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){var a=this.expect(),c=this.$filter(a.text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());return fa(function(a,g,h){if(e){e[0]=h;for(h=d.length;h--;)e[h+1]=d[h](a,g);return c.apply(s,e)}return c(h)})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,
d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=
this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),
c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(bb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Rc(d,this.options,this.text);return B(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return xb(h,d,g,c.text)}})},objectIndex:function(a){var c=
this,d=this.expression();this.consume("]");return B(function(e,f){var g=a(e,f),h=d(e,f);na(h,c.text);return g?Oa(g[h],c.text):s},{assign:function(e,f,g){var h=na(d(e,g),c.text);(g=Oa(a(e,g),c.text))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var m=c?c(g,h):g,k=a(g,h,m)||y;if(f)for(var n=d.length;n--;)f[n]=d[n](g,
h);Oa(m,e);if(k){if(k.constructor===k)throw oa("isecfn",e);if(k===rf||k===sf||k===tf)throw oa("isecff",e);}m=k.apply?k.apply(m,f):k(f[0],f[1],f[2],f[3],f[4]);return Oa(m,e)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return B(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=
[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return B(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Sc=Object.create(null),Ba=Q("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ka=Q("$compile"),X=Y.createElement("a"),
Vc=Aa(P.location.href,!0);tc.$inject=["$provide"];Wc.$inject=["$locale"];Yc.$inject=["$locale"];var ad=".",lf={yyyy:ba("FullYear",4),yy:ba("FullYear",2,0,!0),y:ba("FullYear",1),MMMM:zb("Month"),MMM:zb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:zb("Day"),EEE:zb("Day",!0),a:function(a,c){return 12>
a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(yb(Math[0<a?"floor":"ceil"](a/60),2)+yb(Math.abs(a%60),2))},ww:cd(2),w:cd(1)},kf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,jf=/^\-?\d+$/;Xc.$inject=["$locale"];var gf=fa(K),hf=fa(mb);Zc.$inject=["$parse"];var Cd=fa({restrict:"E",compile:function(a,c){8>=aa&&(c.href||c.name||c.$set("href",""),a.append(Y.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,
c){var f="[object SVGAnimatedString]"===Ha.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),nb={};r(tb,function(a,c){if("multiple"!=a){var d=va("ng-"+c);nb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Cc,function(a,c){nb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(mf))){f.$set("ngPattern",new RegExp(e[1],
e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=va("ng-"+a);nb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ha.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),aa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ab={$addControl:y,$removeControl:y,$setValidity:y,$$setPending:y,$setDirty:y,$setPristine:y,$setSubmitted:y,
$$clearControlValidity:y};dd.$inject=["$element","$attrs","$scope","$animate"];var fd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:dd,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};e[0].addEventListener("submit",h,!1);e.on("$destroy",function(){c(function(){e[0].removeEventListener("submit",h,!1)},0,!1)})}var m=
e.parent().controller("form"),k=f.name||f.ngForm;k&&xb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&xb(a,k,s,k);B(g,Ab)})}}}}}]},Dd=fd(),Qd=fd(!0),vf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,wf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,xf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,gd=/^(\d{4})-(\d{2})-(\d{2})$/,hd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d))?$/,$b=/^(\d{4})-W(\d\d)$/,
id=/^(\d{4})-(\d\d)$/,jd=/^(\d\d):(\d\d)(?::(\d\d))?$/,yf=/(\s+|^)default(\s+|$)/,ac=new Q("ngModel"),kd={text:function(a,c,d,e,f,g){cb(a,c,d,e,f,g);Yb(e)},date:db("date",gd,Cb(gd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":db("datetimelocal",hd,Cb(hd,"yyyy MM dd HH mm ss".split(" ")),"yyyy-MM-ddTHH:mm:ss"),time:db("time",jd,Cb(jd,["HH","mm","ss"]),"HH:mm:ss"),week:db("week",$b,function(a){if(ia(a))return a;if(D(a)){$b.lastIndex=0;var c=$b.exec(a);if(c){a=+c[1];var d=+c[2],c=bd(a),d=7*(d-1);
return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:db("month",id,Cb(id,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Db(a,c,d,e);cb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:xf.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Ga(a))throw ac("numfmt",a);a=a.toString()}return a});d.min&&(e.$validators.min=function(a){return e.$isEmpty(a)||F(d.min)||a>=parseFloat(d.min)});d.max&&(e.$validators.max=
function(a){return e.$isEmpty(a)||F(d.max)||a<=parseFloat(d.max)})},url:function(a,c,d,e,f,g){Db(a,c,d,e);cb(a,c,d,e,f,g);Yb(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||vf.test(d)}},email:function(a,c,d,e,f,g){Db(a,c,d,e);cb(a,c,d,e,f,g);Yb(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||wf.test(d)}},radio:function(a,c,d,e){F(d.name)&&c.attr("name",++fb);c.on("click",function(f){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value,
f&&f.type)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,m){var k=ed(m,a,"ngTrueValue",d.ngTrueValue,!0),n=ed(m,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(d){a.$apply(function(){e.$setViewValue(c[0].checked,d&&d.type)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==k};e.$formatters.push(function(a){return ra(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:y,
button:y,submit:y,reset:y,file:y},nc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:function(f,g,h,m){m[0]&&(kd[K(h.type)]||kd.text)(f,g,h,m[0],c,a,d,e)}}}],Qa="ng-valid",Pa="ng-invalid",Ra="ng-pristine",Bb="ng-dirty",zf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout",function(a,c,d,e,f,g,h){function m(a,c){c=c?"-"+Wa(c,"-"):"";g.removeClass(e,(a?Pa:Qa)+c);g.addClass(e,(a?Qa:Pa)+c)}this.$modelValue=this.$viewValue=
Number.NaN;this.$validators={};this.$asyncValidators={};this.$validators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var k=f(d.ngModel),n=k.assign,p=null,l=this;this.$$setOptions=function(a){l.$options=a;if(!(n||a&&a.getterSetter))throw ac("nonassign",d.ngModel,ta(e));};this.$render=y;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var q=e.inheritedData("$formController")||
Ab,t=0,v=0,w=this.$error={};e.addClass(Ra).addClass("ng-untouched");m(!0);this.$$clearValidity=function(){g.removeClass(e,"ng-pending");r(l.$error,function(a,c){var d=Wa(c,"-");g.removeClass(e,Qa+d);g.removeClass(e,Pa+d)});l.$pending&&l.$$clearPending();t=0;w=l.$error={};q.$$clearControlValidity(l)};this.$$clearPending=function(){v=0;l.$pending=s;g.removeClass(e,"ng-pending")};this.$$setPending=function(a,c,d){function f(c){return function(){var e=l.$viewValue||"";l.$pending&&l.$pending[a]&&d===e&&
(v--,delete l.$pending[a],l.$setValidity(a,c),0===v&&(l.$$clearPending(),l.$$updateValidModelValue(e),l.$$writeModelToScope()))}}l.$pending=l.$pending||{};xa.isUndefined(l.$pending[a])&&(l.$pending[a]=!0,v++);l.$valid=l.$invalid=s;q.$$setPending(a,l);g.addClass(e,"ng-pending");g.removeClass(e,Pa);g.removeClass(e,Qa);d=d||"";c.then(f(!0),f(!1))};this.$setValidity=function(a,c){if(l.$pending||w[a]!==!c)c?(w[a]&&t--,t||v||(m(!0),l.$valid=!0,l.$invalid=!1)):w[a]||(t++,v||(m(!1),l.$invalid=!0,l.$valid=
!1)),w[a]=!c,m(c,a),q.$setValidity(a,c,l)};this.$setPristine=function(){l.$dirty=!1;l.$pristine=!0;g.removeClass(e,Bb);g.addClass(e,Ra)};this.$setUntouched=function(){l.$touched=!1;l.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){l.$touched=!0;l.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(p);l.$viewValue=l.$$lastCommittedViewValue;l.$render()};this.$validate=function(){if(l.$modelValue===l.$modelValue){var a=
l.$modelValue;l.$$runValidators(l.$$invalidModelValue||l.$modelValue,l.$viewValue);a!==l.$modelValue&&l.$$writeModelToScope()}};this.$$runValidators=function(a,c){function d(e,f){var h=!0;r(e,function(d,e){var g=d(a,c);f(e,g);h=h&&g});return h}l.$pending&&l.$$clearPending();d(l.$validators,function(a,c){l.$setValidity(a,c)})&&d(l.$asyncValidators,function(c,d){if(!d||!E(d.then))throw ac("$asyncValidators",d);l.$$setPending(c,d,a)});l.$$updateValidModelValue(a)};this.$$updateValidModelValue=function(a){l.$modelValue=
l.$valid?a:s;l.$$invalidModelValue=l.$valid?s:a};this.$commitViewValue=function(a){var c=l.$viewValue;h.cancel(p);if(a||l.$$lastCommittedViewValue!==c){l.$$lastCommittedViewValue=c;l.$pristine&&(l.$dirty=!0,l.$pristine=!1,g.removeClass(e,Ra),g.addClass(e,Bb),q.$setDirty());var d;a=c;for(var f=0;f<l.$parsers.length;f++)if(a=l.$parsers[f](a),F(a)){d=!0;break}f=l.$$parserName||"parse";d?(l.$$invalidModelValue=l.$modelValue=s,l.$$clearValidity(),l.$setValidity(f,!1),l.$$writeModelToScope()):l.$modelValue===
a||!F(l.$$invalidModelValue)&&l.$$invalidModelValue==a||(l.$setValidity(f,!0),l.$$runValidators(a,c),l.$$writeModelToScope())}};this.$$writeModelToScope=function(){var d;l.$options&&l.$options.getterSetter&&E(d=k(a))?d(l.$modelValue):n(a,l.$modelValue);r(l.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c,d){l.$viewValue=a;l.$options&&!l.$options.updateOnDefault||l.$$debounceViewValueCommit(c,d)};this.$$debounceViewValueCommit=function(a,c){var d=0,e=l.$options;
e&&G(e.debounce)&&(e=e.debounce,Ga(e)?d=e:Ga(e[a])?d=e[a]:Ga(e["default"])&&(d=e["default"]));h.cancel(p);d?p=h(function(){l.$commitViewValue(c)},d):l.$commitViewValue(c)};a.$watch(function(){var c=k(a);l.$options&&l.$options.getterSetter&&E(c)&&(c=c());if(l.$modelValue!==c&&(F(l.$$invalidModelValue)||l.$$invalidModelValue!=c)){for(var d=l.$formatters,e=d.length,f=c;e--;)f=d[e](f);l.$$runValidators(c,f);l.$viewValue!==f&&(l.$viewValue=l.$$lastCommittedViewValue=f,l.$render())}return c})}],ee=function(){return{restrict:"A",
require:["ngModel","^?form","^?ngModelOptions"],controller:zf,link:{pre:function(a,c,d,e){var f=e[0],g=e[1]||Ab;f.$$setOptions(e[2]&&e[2].$options);g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(c){a.$apply(function(){f.$$debounceViewValueCommit(c&&c.type)})});c.on("blur",function(c){f.$touched||a.$apply(function(){f.$setTouched()})})}}}},ge=fa({restrict:"A",require:"ngModel",
link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),pc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){D(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw Q("ngPattern")("noregexp",
g,a,ta(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||F(f)||f.test(a)}}}}},rc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=V(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(c)||c.length<=f}}}}},qc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=V(a)||0;e.$validate()});e.$validators.minlength=
function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},fe=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?da(f):f;e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?da(a):a)});return c}});e.$formatters.push(function(a){return H(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},Af=/^(true|false|\d+)$/,he=function(){return{restrict:"A",priority:100,compile:function(a,
c){return Af.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ie=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=da(this.$options.updateOn.replace(yf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Id=["$compile",
function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);c.$watch(f.ngBind,function(a){e.text(a==s?"":a)})}}}}],Kd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);g.$observe("ngBindTemplate",function(a){f.text(a)})}}}}],Jd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,
f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Ld=Zb("",!0),Nd=Zb("Odd",0),Md=Zb("Even",1),Od=Ea({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Pd=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],sc={},Bf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=va("ng-"+a);sc[c]=["$parse",function(d){return{restrict:"A",compile:function(e,f){var g=d(f[c]);return function(c,d){var e=K(a);d.on(e,function(a){var d=function(){g(c,{$event:a})};Bf[e]&&c.$$phase?c.$evalAsync(d):c.$apply(d)})}}}}]});var Sd=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(c){c?m||g(function(c,f){m=f;c[c.length++]=Y.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=lb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],Td=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:xa.noop,compile:function(f,g){var h=g.ngInclude||g.src,m=g.onload||"",k=g.autoscroll;return function(f,g,l,q,r){var v=0,s,A,x,z=function(){A&&(A.remove(),A=null);s&&(s.$destroy(),
s=null);x&&(d.leave(x).then(function(){A=null}),A=x,x=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!G(k)||k&&!f.$eval(k)||c()},l=++v;e?(a(e,!0).then(function(a){if(l===v){var c=f.$new();q.template=a;a=r(c,function(a){z();d.enter(a,null,g).then(h)});s=c;x=a;s.$emit("$includeContentLoaded");f.$eval(m)}},function(){l===v&&(z(),f.$emit("$includeContentError"))}),f.$emit("$includeContentRequested")):(z(),q.template=null)})}}}}],je=["$compile",function(a){return{restrict:"ECA",priority:-400,
require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],Ud=Ea({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Vd=Ea({terminal:!0,priority:1E3}),Wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,n=e.$eval(m)||{},p={},l=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(n[K(c.replace("when","").replace("Minus",
"-"))]=f.attr(g.$attr[c]))});r(n,function(a,e){p[e]=c(a.replace(d,l+h+"-"+k+q))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in n||(c=a.pluralCat(c-k));return p[c](e)},function(a){f.text(a)})}}}],Xd=["$parse","$animate",function(a,c){var d=Q("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,
$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,m=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],l=k[3],q=k[4],k=n.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!k)throw d("iidexp",n);var t=k[3]||k[1],v=k[2];if(l&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(l)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(l)))throw d("badident",
l);var w,A,G,z,y={$id:Ma};q?w=a(q):(G=function(a,c){return Ma(c)},z=function(a){return a});return function(a,f,g,k,n){w&&(A=function(c,d,e){v&&(y[v]=c);y[t]=d;y.$index=e;return w(a,y)});var q=Object.create(null);a.$watchCollection(p,function(g){var k,p,N=f[0],y,w=Object.create(null),L,F,B,D,H,M,ga;l&&(a[l]=g);if(eb(g))H=g,p=A||G;else{p=A||z;H=[];for(ga in g)g.hasOwnProperty(ga)&&"$"!=ga.charAt(0)&&H.push(ga);H.sort()}L=H.length;ga=Array(L);for(k=0;k<L;k++)if(F=g===H?k:H[k],B=g[F],D=p(F,B,k),q[D])M=
q[D],delete q[D],w[D]=M,ga[k]=M;else{if(w[D])throw r(ga,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",h,D,sa(B));ga[k]={id:D,scope:s,clone:s};w[D]=!0}for(y in q){M=q[y];D=lb(M.clone);c.leave(D);if(D[0].parent)for(k=0,p=D.length;k<p;k++)D[k].$$NG_REMOVED=!0;M.scope.$destroy()}for(k=0;k<L;k++)if(F=g===H?k:H[k],B=g[F],M=ga[k],M.scope){y=N;do y=y.nextSibling;while(y&&y.$$NG_REMOVED);M.clone[0]!=y&&c.move(lb(M.clone),null,x(N));N=M.clone[M.clone.length-1];e(M.scope,k,t,B,v,F,L)}else n(function(a,d){M.scope=
d;var f=m.cloneNode();a[a.length++]=f;c.enter(a,null,x(N));N=f;M.clone=a;w[M.id]=M;e(M.scope,k,t,B,v,F,L)});q=w})}}}}],Yd=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide")})}}}],Rd=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide")})}}}],Zd=Ea(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&
a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),$d=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],m=[],k=[];c.$watch(e.ngSwitch||e.on,function(d){var p,l;p=0;for(l=m.length;p<l;++p)a.cancel(m[p]);p=m.length=0;for(l=k.length;p<l;++p){var q=lb(h[p].clone);k[p].$destroy();(m[p]=a.leave(q)).then(function(){m.splice(p,1)})}h.length=0;k.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),
r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],ae=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),be=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=
e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),de=Ea({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw Q("ngTransclude")("orphan",ta(c));f(function(a){c.empty();c.append(a)})}}),Ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Cf=Q("ngOptions"),ce=fa({restrict:"A",terminal:!0}),Fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:y};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},n=e,p;m.databound=d.ngModel;m.init=function(a,c,d){n=a;p=d};m.addOption=function(c,d){La(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c=
"? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=y})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(B.parent()&&B.remove(),c.val(a),""===a&&y.prop("selected",!0)):F(a)&&y?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){B.parent()&&B.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;
d.$render=function(){var a=new $a(d.$viewValue);r(c.find("option"),function(c){c.selected=G(a.get(c.value))})};a.$watch(function(){ra(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(){A=!1;var a={"":[]},c=[""],d,k,s,t,w;s=g.$modelValue;t=y(e)||[];var C=n?bc(t):t,F,J,u;J={};u=!1;if(q)if(k=g.$modelValue,x&&H(k))for(u=new $a([]),d=
{},w=0;w<k.length;w++)d[m]=k[w],u.put(x(e,d),k[w]);else u=new $a(k);w=u;var E,K;for(u=0;F=C.length,u<F;u++){k=u;if(n){k=C[u];if("$"===k.charAt(0))continue;J[n]=k}J[m]=t[k];d=p(e,J)||"";(k=a[d])||(k=a[d]=[],c.push(d));q?d=G(w.remove(x?x(e,J):r(e,J))):(x?(d={},d[m]=s,d=x(e,d)===x(e,J)):d=s===r(e,J),w=w||d);E=l(e,J);E=G(E)?E:"";k.push({id:x?x(e,J):n?C[u]:u,label:E,selected:d})}q||(v||null===s?a[""].unshift({id:"",label:"",selected:!w}):w||a[""].unshift({id:"?",label:"",selected:!0}));J=0;for(C=c.length;J<
C;J++){d=c[J];k=a[d];B.length<=J?(s={element:z.clone().attr("label",d),label:k.label},t=[s],B.push(t),f.append(s.element)):(t=B[J],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));E=null;u=0;for(F=k.length;u<F;u++)d=k[u],(w=t[u+1])?(E=w.element,w.label!==d.label&&E.text(w.label=d.label),w.id!==d.id&&E.val(w.id=d.id),E[0].selected!==d.selected&&(E.prop("selected",w.selected=d.selected),aa&&E.prop("selected",w.selected))):(""===d.id&&v?K=v:(K=D.clone()).val(d.id).prop("selected",d.selected).attr("selected",
d.selected).text(d.label),t.push({element:K,label:d.label,id:d.id,selected:d.selected}),E?E.after(K):s.element.append(K),E=K);for(u++;t.length>u;)t.pop().element.remove()}for(;B.length>J;)B.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Cf("iexp",t,ta(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),r=c(k[2]?k[1]:m),y=c(k[7]),x=k[8]?c(k[8]):null,B=[[{element:f,label:""}]];v&&(a(v)(e),v.removeClass("ng-scope"),v.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,
c=y(e)||[],d={},k,l,p,t,v,w,u;if(q)for(l=[],t=0,w=B.length;t<w;t++)for(a=B[t],p=1,v=a.length;p<v;p++){if((k=a[p].element)[0].selected){k=k.val();n&&(d[n]=k);if(x)for(u=0;u<c.length&&(d[m]=c[u],x(e,d)!=k);u++);else d[m]=c[k];l.push(r(e,d))}}else if(k=f.val(),"?"==k)l=s;else if(""===k)l=null;else if(x)for(u=0;u<c.length;u++){if(d[m]=c[u],x(e,d)==k){l=r(e,d);break}}else d[m]=c[k],n&&(d[n]=k),l=r(e,d);g.$setViewValue(l);h()})});g.$render=h;e.$watchCollection(y,function(){A||(e.$$postDigest(h),A=!0)});
q&&e.$watchCollection(function(){return g.$modelValue},function(){A||(e.$$postDigest(h),A=!0)})}if(m[1]){var l=m[0];m=m[1];var q=h.multiple,t=h.ngOptions,v=!1,y,A=!1,D=x(Y.createElement("option")),z=x(Y.createElement("optgroup")),B=D.clone();h=0;for(var C=g.children(),E=C.length;h<E;h++)if(""===C[h].value){y=v=C.eq(h);break}l.init(m,v,B);q&&(m.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,m):q?n(e,g,m):k(e,g,m,l)}}}}],Hd=["$interpolate",function(a){var c={addOption:y,removeOption:y};return{restrict:"E",
priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound?d.prop("selected",!1):n=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Gd=fa({restrict:"E",terminal:!1});P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):
(wd(),yd(xa),x(Y).ready(function(){sd(Y,jc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');

/*
 AngularJS v1.3.0-rc.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(r,d,z){'use strict';function v(s,h,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,e,b,g,u){function w(){k&&(k.remove(),k=null);l&&(l.$destroy(),l=null);n&&(f.leave(n).then(function(){k=null}),k=n,n=null)}function t(){var c=s.current&&s.current.locals;if(d.isDefined(c&&c.$template)){var c=a.$new(),m=s.current;n=u(c,function(c){f.enter(c,null,n||e).then(function(){!d.isDefined(p)||p&&!a.$eval(p)||h()});w()});l=m.scope=c;l.$emit("$viewContentLoaded");
l.$eval(q)}else w()}var l,n,k,p=b.autoscroll,q=b.onload||"";a.$on("$routeChangeSuccess",t);t()}}}function x(d,h,f){return{restrict:"ECA",priority:-400,link:function(a,e){var b=f.current,g=b.locals;e.html(g.$template);var u=d(e.contents());b.controller&&(g.$scope=a,g=h(b.controller,g),b.controllerAs&&(a[b.controllerAs]=g),e.data("$ngControllerController",g),e.children().data("$ngControllerController",g));u(a)}}}r=d.module("ngRoute",["ng"]).provider("$route",function(){function s(a,e){return d.extend(new (d.extend(function(){},
{prototype:a})),e)}function h(a,d){var b=d.caseInsensitiveMatch,g={originalPath:a,regexp:a},f=g.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,e,b){a="?"===b?b:null;b="*"===b?b:null;f.push({name:e,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");g.regexp=new RegExp("^"+a+"$",b?"i":"");return g}var f={};this.when=function(a,e){f[a]=d.extend({reloadOnSearch:!0},e,a&&h(a,e));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";f[b]=d.extend({redirectTo:a},h(b,e))}return this};this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,e,b,g,h,r,t){function l(){var c=n(),m=q.current;if(c&&m&&c.$$route===m.$$route&&d.equals(c.pathParams,m.pathParams)&&!c.reloadOnSearch&&!p)m.params=c.params,d.copy(m.params,b),a.$broadcast("$routeUpdate",
m);else if(c||m)p=!1,a.$broadcast("$routeChangeStart",c,m),(q.current=c)&&c.redirectTo&&(d.isString(c.redirectTo)?e.path(k(c.redirectTo,c.params)).search(c.params).replace():e.url(c.redirectTo(c.pathParams,e.path(),e.search())).replace()),g.when(c).then(function(){if(c){var a=d.extend({},c.resolve),e,b;d.forEach(a,function(c,b){a[b]=d.isString(c)?h.get(c):h.invoke(c,null,null,b)});d.isDefined(e=c.template)?d.isFunction(e)&&(e=e(c.params)):d.isDefined(b=c.templateUrl)&&(d.isFunction(b)&&(b=b(c.params)),
b=t.getTrustedResourceUrl(b),d.isDefined(b)&&(c.loadedTemplateUrl=b,e=r(b)));d.isDefined(e)&&(a.$template=e);return g.all(a)}}).then(function(e){c==q.current&&(c&&(c.locals=e,d.copy(c.params,b)),a.$broadcast("$routeChangeSuccess",c,m))},function(d){c==q.current&&a.$broadcast("$routeChangeError",c,m,d)})}function n(){var c,a;d.forEach(f,function(b,g){var f;if(f=!a){var h=e.path();f=b.keys;var l={};if(b.regexp)if(h=b.regexp.exec(h)){for(var k=1,n=h.length;k<n;++k){var p=f[k-1],q=h[k];p&&q&&(l[p.name]=
q)}f=l}else f=null;else f=null;f=c=f}f&&(a=s(b,{params:d.extend({},e.search(),c),pathParams:c}),a.$$route=b)});return a||f[null]&&s(f[null],{params:{},pathParams:{}})}function k(a,b){var e=[];d.forEach((a||"").split(":"),function(a,c){if(0===c)e.push(a);else{var d=a.match(/(\w+)(.*)/),f=d[1];e.push(b[f]);e.push(d[2]||"");delete b[f]}});return e.join("")}var p=!1,q={routes:f,reload:function(){p=!0;a.$evalAsync(l)},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),
function(d){f.current.pathParams[d]||(b[d]=a[d])});a=d.extend({},this.current.params,a);e.path(k(this.current.$$route.originalPath,a));e.search(d.extend({},e.search(),b))}else throw y("norout");}};a.$on("$locationChangeSuccess",l);return q}]});var y=d.$$minErr("ngRoute");r.provider("$routeParams",function(){this.$get=function(){return{}}});r.directive("ngView",v);r.directive("ngView",x);v.$inject=["$route","$anchorScroll","$animate"];x.$inject=["$compile","$controller","$route"]})(window,window.angular);

!function(){function DefaultHttpRequest(){function t(t,e){for(var r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],o=e[i];t.setRequestHeader(i,o)}}this.getJSON=function(e,r){return _promiseFactory.create(function(n,i){try{var o=new XMLHttpRequest;o.open("GET",e),o.responseType="json",r&&r.headers&&t(o,r.headers),o.onload=function(){try{if(200===o.status){var t=o.response;"string"==typeof t&&(t=JSON.parse(t)),n(t)}else i(Error(o.statusText+"("+o.status+")"))}catch(e){i(e)}},o.onerror=function(){i(Error("Network error"))},o.send()}catch(s){return i(s)}})}}function DefaultPromise(t){this.then=function(e,r){var n=t.then(e,r);return new DefaultPromise(n)},this["catch"]=function(e){var r=t["catch"](e);return new DefaultPromise(r)}}function DefaultPromiseFactory(){this.resolve=function(t){return new DefaultPromise(Promise.resolve(t))},this.reject=function(t){return new DefaultPromise(Promise.reject(t))},this.create=function(t){return new DefaultPromise(new Promise(t))}}function Token(t){if(t){if(this.profile=t.profile,this.id_token=t.id_token,this.access_token=t.access_token,t.access_token)this.expires_at=parseInt(t.expires_at);else{if(!t.id_token)throw Error("Either access_token or id_token required.");this.expires_at=t.profile.exp}this.scopes=(t.scope||"").split(" "),this.session_state=t.session_state}else this.expires_at=0;Object.defineProperty(this,"expired",{get:function(){var t=parseInt(Date.now()/1e3);return this.expires_at<t}}),Object.defineProperty(this,"expires_in",{get:function(){var t=parseInt(Date.now()/1e3);return this.expires_at-t}})}function FrameLoader(t){this.url=t}function loadToken(t){if(t._token=null,t._settings.persist){var e=t._settings.store.getItem(t._settings.persistKey);if(e){var r=Token.fromJSON(e);r.expired||(t._token=r)}}}function configureTokenExpiring(t){function e(){o=null,t._callTokenExpiring()}function r(){o&&(window.clearTimeout(o),o=null)}function n(t){o=window.setTimeout(e,1e3*t)}function i(){if(r(),!t.expired){var i=t.expires_in;i>60?n(i-60):e()}}var o=null;i(),t.addOnTokenObtained(i),t.addOnTokenRemoved(r)}function configureAutoRenewToken(t){t._settings.silent_redirect_uri&&t._settings.silent_renew&&t.addOnTokenExpiring(function(){t.renewTokenSilentAsync()["catch"](function(e){t._callSilentTokenRenewFailed(),console.error(e.message||e)})})}function configureTokenExpired(t){function e(){o=null,t._token&&t.saveToken(null),t._callTokenExpired()}function r(){o&&(window.clearTimeout(o),o=null)}function n(t){o=window.setTimeout(e,1e3*t)}function i(){r(),t.expires_in>0&&n(t.expires_in+1)}var o=null;i(),t.addOnTokenObtained(i),t.addOnTokenRemoved(r)}function TokenManager(t){this._settings=t||{},this._settings.persist=this._settings.persist||!0,this._settings.store=this._settings.store||window.localStorage,this._settings.persistKey=this._settings.persistKey||"TokenManager.token",this.oidcClient=new OidcClient(this._settings),this._callbacks={tokenRemovedCallbacks:[],tokenExpiringCallbacks:[],tokenExpiredCallbacks:[],tokenObtainedCallbacks:[],silentTokenRenewFailedCallbacks:[]},Object.defineProperty(this,"profile",{get:function(){return this._token?this._token.profile:void 0}}),Object.defineProperty(this,"id_token",{get:function(){return this._token?this._token.id_token:void 0}}),Object.defineProperty(this,"access_token",{get:function(){return this._token&&!this._token.expired?this._token.access_token:void 0}}),Object.defineProperty(this,"expired",{get:function(){return this._token?this._token.expired:!0}}),Object.defineProperty(this,"expires_in",{get:function(){return this._token?this._token.expires_in:0}}),Object.defineProperty(this,"expires_at",{get:function(){return this._token?this._token.expires_at:0}}),Object.defineProperty(this,"scopes",{get:function(){return this._token?[].concat(this._token.scopes):[]}}),Object.defineProperty(this,"session_state",{get:function(){return this._token?this._token.session_state:void 0}});var e=this;loadToken(e),window.addEventListener("storage",function(t){t.key===e._settings.persistKey&&(loadToken(e),e._token?e._callTokenObtained():e._callTokenRemoved())}),configureTokenExpired(e),configureAutoRenewToken(e),window.setTimeout(function(){configureTokenExpiring(e)},0)}var _promiseFactory,_httpRequest;_httpRequest=new DefaultHttpRequest,_promiseFactory=new DefaultPromiseFactory,function(){function hex2b64(t){var e,r,n="";for(e=0;e+3<=t.length;e+=3)r=parseInt(t.substring(e,e+3),16),n+=b64map.charAt(r>>6)+b64map.charAt(63&r);if(e+1==t.length?(r=parseInt(t.substring(e,e+1),16),n+=b64map.charAt(r<<2)):e+2==t.length&&(r=parseInt(t.substring(e,e+2),16),n+=b64map.charAt(r>>2)+b64map.charAt((3&r)<<4)),b64pad)for(;(3&n.length)>0;)n+=b64pad;return n}function b64tohex(t){var e,r,n,i="",o=0;for(e=0;e<t.length&&t.charAt(e)!=b64pad;++e)n=b64map.indexOf(t.charAt(e)),0>n||(0==o?(i+=int2char(n>>2),r=3&n,o=1):1==o?(i+=int2char(r<<2|n>>4),r=15&n,o=2):2==o?(i+=int2char(r),i+=int2char(n>>2),r=3&n,o=3):(i+=int2char(r<<2|n>>4),i+=int2char(15&n),o=0));return 1==o&&(i+=int2char(r<<2)),i}function b64toBA(t){var e,r=b64tohex(t),n=new Array;for(e=0;2*e<r.length;++e)n[e]=parseInt(r.substring(2*e,2*e+2),16);return n}function BigInteger(t,e,r){null!=t&&("number"==typeof t?this.fromNumber(t,e,r):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function nbi(){return new BigInteger(null)}function am1(t,e,r,n,i,o){for(;--o>=0;){var s=e*this[t++]+r[n]+i;i=Math.floor(s/67108864),r[n++]=67108863&s}return i}function am2(t,e,r,n,i,o){for(var s=32767&e,a=e>>15;--o>=0;){var h=32767&this[t],u=this[t++]>>15,c=a*h+u*s;h=s*h+((32767&c)<<15)+r[n]+(1073741823&i),i=(h>>>30)+(c>>>15)+a*u+(i>>>30),r[n++]=1073741823&h}return i}function am3(t,e,r,n,i,o){for(var s=16383&e,a=e>>14;--o>=0;){var h=16383&this[t],u=this[t++]>>14,c=a*h+u*s;h=s*h+((16383&c)<<14)+r[n]+i,i=(h>>28)+(c>>14)+a*u,r[n++]=268435455&h}return i}function int2char(t){return BI_RM.charAt(t)}function intAt(t,e){var r=BI_RC[t.charCodeAt(e)];return null==r?-1:r}function bnpCopyTo(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s}function bnpFromInt(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0}function nbv(t){var e=nbi();return e.fromInt(t),e}function bnpFromString(t,e){var r;if(16==e)r=4;else if(8==e)r=3;else if(256==e)r=8;else if(2==e)r=1;else if(32==e)r=5;else{if(4!=e)return void this.fromRadix(t,e);r=2}this.t=0,this.s=0;for(var n=t.length,i=!1,o=0;--n>=0;){var s=8==r?255&t[n]:intAt(t,n);0>s?"-"==t.charAt(n)&&(i=!0):(i=!1,0==o?this[this.t++]=s:o+r>this.DB?(this[this.t-1]|=(s&(1<<this.DB-o)-1)<<o,this[this.t++]=s>>this.DB-o):this[this.t-1]|=s<<o,o+=r,o>=this.DB&&(o-=this.DB))}8==r&&0!=(128&t[0])&&(this.s=-1,o>0&&(this[this.t-1]|=(1<<this.DB-o)-1<<o)),this.clamp(),i&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function bnToString(t){if(this.s<0)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var r,n=(1<<e)-1,i=!1,o="",s=this.t,a=this.DB-s*this.DB%e;if(s-->0)for(a<this.DB&&(r=this[s]>>a)>0&&(i=!0,o=int2char(r));s>=0;)e>a?(r=(this[s]&(1<<a)-1)<<e-a,r|=this[--s]>>(a+=this.DB-e)):(r=this[s]>>(a-=e)&n,0>=a&&(a+=this.DB,--s)),r>0&&(i=!0),i&&(o+=int2char(r));return i?o:"0"}function bnNegate(){var t=nbi();return BigInteger.ZERO.subTo(this,t),t}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(t){var e=this.s-t.s;if(0!=e)return e;var r=this.t;if(e=r-t.t,0!=e)return this.s<0?-e:e;for(;--r>=0;)if(0!=(e=this[r]-t[r]))return e;return 0}function nbits(t){var e,r=1;return 0!=(e=t>>>16)&&(t=e,r+=16),0!=(e=t>>8)&&(t=e,r+=8),0!=(e=t>>4)&&(t=e,r+=4),0!=(e=t>>2)&&(t=e,r+=2),0!=(e=t>>1)&&(t=e,r+=1),r}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(t,e){var r;for(r=this.t-1;r>=0;--r)e[r+t]=this[r];for(r=t-1;r>=0;--r)e[r]=0;e.t=this.t+t,e.s=this.s}function bnpDRShiftTo(t,e){for(var r=t;r<this.t;++r)e[r-t]=this[r];e.t=Math.max(this.t-t,0),e.s=this.s}function bnpLShiftTo(t,e){var r,n=t%this.DB,i=this.DB-n,o=(1<<i)-1,s=Math.floor(t/this.DB),a=this.s<<n&this.DM;for(r=this.t-1;r>=0;--r)e[r+s+1]=this[r]>>i|a,a=(this[r]&o)<<n;for(r=s-1;r>=0;--r)e[r]=0;e[s]=a,e.t=this.t+s+1,e.s=this.s,e.clamp()}function bnpRShiftTo(t,e){e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)return void(e.t=0);var n=t%this.DB,i=this.DB-n,o=(1<<n)-1;e[0]=this[r]>>n;for(var s=r+1;s<this.t;++s)e[s-r-1]|=(this[s]&o)<<i,e[s-r]=this[s]>>n;n>0&&(e[this.t-r-1]|=(this.s&o)<<i),e.t=this.t-r,e.clamp()}function bnpSubTo(t,e){for(var r=0,n=0,i=Math.min(t.t,this.t);i>r;)n+=this[r]-t[r],e[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n-=t.s;r<this.t;)n+=this[r],e[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n-=t[r],e[r++]=n&this.DM,n>>=this.DB;n-=t.s}e.s=0>n?-1:0,-1>n?e[r++]=this.DV+n:n>0&&(e[r++]=n),e.t=r,e.clamp()}function bnpMultiplyTo(t,e){var r=this.abs(),n=t.abs(),i=r.t;for(e.t=i+n.t;--i>=0;)e[i]=0;for(i=0;i<n.t;++i)e[i+r.t]=r.am(0,n[i],e,i,0,r.t);e.s=0,e.clamp(),this.s!=t.s&&BigInteger.ZERO.subTo(e,e)}function bnpSquareTo(t){for(var e=this.abs(),r=t.t=2*e.t;--r>=0;)t[r]=0;for(r=0;r<e.t-1;++r){var n=e.am(r,e[r],t,2*r,0,1);(t[r+e.t]+=e.am(r+1,2*e[r],t,2*r+1,n,e.t-r-1))>=e.DV&&(t[r+e.t]-=e.DV,t[r+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(r,e[r],t,2*r,0,1)),t.s=0,t.clamp()}function bnpDivRemTo(t,e,r){var n=t.abs();if(!(n.t<=0)){var i=this.abs();if(i.t<n.t)return null!=e&&e.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=nbi());var o=nbi(),s=this.s,a=t.s,h=this.DB-nbits(n[n.t-1]);h>0?(n.lShiftTo(h,o),i.lShiftTo(h,r)):(n.copyTo(o),i.copyTo(r));var u=o.t,c=o[u-1];if(0!=c){var p=c*(1<<this.F1)+(u>1?o[u-2]>>this.F2:0),g=this.FV/p,f=(1<<this.F1)/p,l=1<<this.F2,d=r.t,y=d-u,v=null==e?nbi():e;for(o.dlShiftTo(y,v),r.compareTo(v)>=0&&(r[r.t++]=1,r.subTo(v,r)),BigInteger.ONE.dlShiftTo(u,v),v.subTo(o,o);o.t<u;)o[o.t++]=0;for(;--y>=0;){var S=r[--d]==c?this.DM:Math.floor(r[d]*g+(r[d-1]+l)*f);if((r[d]+=o.am(0,S,r,y,0,u))<S)for(o.dlShiftTo(y,v),r.subTo(v,r);r[d]<--S;)r.subTo(v,r)}null!=e&&(r.drShiftTo(u,e),s!=a&&BigInteger.ZERO.subTo(e,e)),r.t=u,r.clamp(),h>0&&r.rShiftTo(h,r),0>s&&BigInteger.ZERO.subTo(r,r)}}}function bnMod(t){var e=nbi();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(BigInteger.ZERO)>0&&t.subTo(e,e),e}function Classic(t){this.m=t}function cConvert(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function cRevert(t){return t}function cReduce(t){t.divRemTo(this.m,null,t)}function cMulTo(t,e,r){t.multiplyTo(e,r),this.reduce(r)}function cSqrTo(t,e){t.squareTo(e),this.reduce(e)}function bnpInvDigit(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function Montgomery(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function montConvert(t){var e=nbi();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(BigInteger.ZERO)>0&&this.m.subTo(e,e),e}function montRevert(t){var e=nbi();return t.copyTo(e),this.reduce(e),e}function montReduce(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;e<this.m.t;++e){var r=32767&t[e],n=r*this.mpl+((r*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(r=e+this.m.t,t[r]+=this.m.am(0,n,t,e,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function montSqrTo(t,e){t.squareTo(e),this.reduce(e)}function montMulTo(t,e,r){t.multiplyTo(e,r),this.reduce(r)}function bnpIsEven(){return 0==(this.t>0?1&this[0]:this.s)}function bnpExp(t,e){if(t>4294967295||1>t)return BigInteger.ONE;var r=nbi(),n=nbi(),i=e.convert(this),o=nbits(t)-1;for(i.copyTo(r);--o>=0;)if(e.sqrTo(r,n),(t&1<<o)>0)e.mulTo(n,i,r);else{var s=r;r=n,n=s}return e.revert(r)}function bnModPowInt(t,e){var r;return r=256>t||e.isEven()?new Classic(e):new Montgomery(e),this.exp(t,r)}function bnClone(){var t=nbi();return this.copyTo(t),t}function bnIntValue(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}function bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}function bnpChunkSize(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function bnSigNum(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function bnpToRadix(t){if(null==t&&(t=10),0==this.signum()||2>t||t>36)return"0";var e=this.chunkSize(t),r=Math.pow(t,e),n=nbv(r),i=nbi(),o=nbi(),s="";for(this.divRemTo(n,i,o);i.signum()>0;)s=(r+o.intValue()).toString(t).substr(1)+s,i.divRemTo(n,i,o);return o.intValue().toString(t)+s}function bnpFromRadix(t,e){this.fromInt(0),null==e&&(e=10);for(var r=this.chunkSize(e),n=Math.pow(e,r),i=!1,o=0,s=0,a=0;a<t.length;++a){var h=intAt(t,a);0>h?"-"==t.charAt(a)&&0==this.signum()&&(i=!0):(s=e*s+h,++o>=r&&(this.dMultiply(n),this.dAddOffset(s,0),o=0,s=0))}o>0&&(this.dMultiply(Math.pow(e,o)),this.dAddOffset(s,0)),i&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(t,e,r){if("number"==typeof e)if(2>t)this.fromInt(1);else for(this.fromNumber(t,r),this.testBit(t-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(t-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(e);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(BigInteger.ONE.shiftLeft(t-1),this);else{var n=new Array,i=7&t;n.length=(t>>3)+1,e.nextBytes(n),i>0?n[0]&=(1<<i)-1:n[0]=0,this.fromString(n,256)}}function bnToByteArray(){var t=this.t,e=new Array;e[0]=this.s;var r,n=this.DB-t*this.DB%8,i=0;if(t-->0)for(n<this.DB&&(r=this[t]>>n)!=(this.s&this.DM)>>n&&(e[i++]=r|this.s<<this.DB-n);t>=0;)8>n?(r=(this[t]&(1<<n)-1)<<8-n,r|=this[--t]>>(n+=this.DB-8)):(r=this[t]>>(n-=8)&255,0>=n&&(n+=this.DB,--t)),0!=(128&r)&&(r|=-256),0==i&&(128&this.s)!=(128&r)&&++i,(i>0||r!=this.s)&&(e[i++]=r);return e}function bnEquals(t){return 0==this.compareTo(t)}function bnMin(t){return this.compareTo(t)<0?this:t}function bnMax(t){return this.compareTo(t)>0?this:t}function bnpBitwiseTo(t,e,r){var n,i,o=Math.min(t.t,this.t);for(n=0;o>n;++n)r[n]=e(this[n],t[n]);if(t.t<this.t){for(i=t.s&this.DM,n=o;n<this.t;++n)r[n]=e(this[n],i);r.t=this.t}else{for(i=this.s&this.DM,n=o;n<t.t;++n)r[n]=e(i,t[n]);r.t=t.t}r.s=e(this.s,t.s),r.clamp()}function op_and(t,e){return t&e}function bnAnd(t){var e=nbi();return this.bitwiseTo(t,op_and,e),e}function op_or(t,e){return t|e}function bnOr(t){var e=nbi();return this.bitwiseTo(t,op_or,e),e}function op_xor(t,e){return t^e}function bnXor(t){var e=nbi();return this.bitwiseTo(t,op_xor,e),e}function op_andnot(t,e){return t&~e}function bnAndNot(t){var e=nbi();return this.bitwiseTo(t,op_andnot,e),e}function bnNot(){for(var t=nbi(),e=0;e<this.t;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t}function bnShiftLeft(t){var e=nbi();return 0>t?this.rShiftTo(-t,e):this.lShiftTo(t,e),e}function bnShiftRight(t){var e=nbi();return 0>t?this.lShiftTo(-t,e):this.rShiftTo(t,e),e}function lbit(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function bnGetLowestSetBit(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+lbit(this[t]);return this.s<0?this.t*this.DB:-1}function cbit(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function bnBitCount(){for(var t=0,e=this.s&this.DM,r=0;r<this.t;++r)t+=cbit(this[r]^e);return t}function bnTestBit(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)}function bnpChangeBit(t,e){var r=BigInteger.ONE.shiftLeft(t);return this.bitwiseTo(r,e,r),r}function bnSetBit(t){return this.changeBit(t,op_or)}function bnClearBit(t){return this.changeBit(t,op_andnot)}function bnFlipBit(t){return this.changeBit(t,op_xor)}function bnpAddTo(t,e){for(var r=0,n=0,i=Math.min(t.t,this.t);i>r;)n+=this[r]+t[r],e[r++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n+=t.s;r<this.t;)n+=this[r],e[r++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n+=t[r],e[r++]=n&this.DM,n>>=this.DB;n+=t.s}e.s=0>n?-1:0,n>0?e[r++]=n:-1>n&&(e[r++]=this.DV+n),e.t=r,e.clamp()}function bnAdd(t){var e=nbi();return this.addTo(t,e),e}function bnSubtract(t){var e=nbi();return this.subTo(t,e),e}function bnMultiply(t){var e=nbi();return this.multiplyTo(t,e),e}function bnSquare(){var t=nbi();return this.squareTo(t),t}function bnDivide(t){var e=nbi();return this.divRemTo(t,e,null),e}function bnRemainder(t){var e=nbi();return this.divRemTo(t,null,e),e}function bnDivideAndRemainder(t){var e=nbi(),r=nbi();return this.divRemTo(t,e,r),new Array(e,r)}function bnpDMultiply(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(t,e){if(0!=t){for(;this.t<=e;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}}function NullExp(){}function nNop(t){return t}function nMulTo(t,e,r){t.multiplyTo(e,r)}function nSqrTo(t,e){t.squareTo(e)}function bnPow(t){return this.exp(t,new NullExp)}function bnpMultiplyLowerTo(t,e,r){var n=Math.min(this.t+t.t,e);for(r.s=0,r.t=n;n>0;)r[--n]=0;var i;for(i=r.t-this.t;i>n;++n)r[n+this.t]=this.am(0,t[n],r,n,0,this.t);for(i=Math.min(t.t,e);i>n;++n)this.am(0,t[n],r,n,0,e-n);r.clamp()}function bnpMultiplyUpperTo(t,e,r){--e;var n=r.t=this.t+t.t-e;for(r.s=0;--n>=0;)r[n]=0;for(n=Math.max(e-this.t,0);n<t.t;++n)r[this.t+n-e]=this.am(e-n,t[n],r,0,0,this.t+n-e);r.clamp(),r.drShiftTo(1,r)}function Barrett(t){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}function barrettConvert(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var e=nbi();return t.copyTo(e),this.reduce(e),e}function barrettRevert(t){return t}function barrettReduce(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)}function barrettSqrTo(t,e){t.squareTo(e),this.reduce(e)}function barrettMulTo(t,e,r){t.multiplyTo(e,r),this.reduce(r)}function bnModPow(t,e){var r,n,i=t.bitLength(),o=nbv(1);if(0>=i)return o;r=18>i?1:48>i?3:144>i?4:768>i?5:6,n=8>i?new Classic(e):e.isEven()?new Barrett(e):new Montgomery(e);var s=new Array,a=3,h=r-1,u=(1<<r)-1;if(s[1]=n.convert(this),r>1){var c=nbi();for(n.sqrTo(s[1],c);u>=a;)s[a]=nbi(),n.mulTo(c,s[a-2],s[a]),a+=2}var p,g,f=t.t-1,l=!0,d=nbi();for(i=nbits(t[f])-1;f>=0;){for(i>=h?p=t[f]>>i-h&u:(p=(t[f]&(1<<i+1)-1)<<h-i,f>0&&(p|=t[f-1]>>this.DB+i-h)),a=r;0==(1&p);)p>>=1,--a;if((i-=a)<0&&(i+=this.DB,--f),l)s[p].copyTo(o),l=!1;else{for(;a>1;)n.sqrTo(o,d),n.sqrTo(d,o),a-=2;a>0?n.sqrTo(o,d):(g=o,o=d,d=g),n.mulTo(d,s[p],o)}for(;f>=0&&0==(t[f]&1<<i);)n.sqrTo(o,d),g=o,o=d,d=g,--i<0&&(i=this.DB-1,--f)}return n.revert(o)}function bnGCD(t){var e=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(e.compareTo(r)<0){var n=e;e=r,r=n}var i=e.getLowestSetBit(),o=r.getLowestSetBit();if(0>o)return e;for(o>i&&(o=i),o>0&&(e.rShiftTo(o,e),r.rShiftTo(o,r));e.signum()>0;)(i=e.getLowestSetBit())>0&&e.rShiftTo(i,e),(i=r.getLowestSetBit())>0&&r.rShiftTo(i,r),e.compareTo(r)>=0?(e.subTo(r,e),e.rShiftTo(1,e)):(r.subTo(e,r),r.rShiftTo(1,r));return o>0&&r.lShiftTo(o,r),r}function bnpModInt(t){if(0>=t)return 0;var e=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==e)r=this[0]%t;else for(var n=this.t-1;n>=0;--n)r=(e*r+this[n])%t;return r}function bnModInverse(t){var e=t.isEven();if(this.isEven()&&e||0==t.signum())return BigInteger.ZERO;for(var r=t.clone(),n=this.clone(),i=nbv(1),o=nbv(0),s=nbv(0),a=nbv(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),e?(i.isEven()&&o.isEven()||(i.addTo(this,i),o.subTo(t,o)),i.rShiftTo(1,i)):o.isEven()||o.subTo(t,o),o.rShiftTo(1,o);for(;n.isEven();)n.rShiftTo(1,n),e?(s.isEven()&&a.isEven()||(s.addTo(this,s),a.subTo(t,a)),s.rShiftTo(1,s)):a.isEven()||a.subTo(t,a),a.rShiftTo(1,a);r.compareTo(n)>=0?(r.subTo(n,r),e&&i.subTo(s,i),o.subTo(a,o)):(n.subTo(r,n),e&&s.subTo(i,s),a.subTo(o,a))}return 0!=n.compareTo(BigInteger.ONE)?BigInteger.ZERO:a.compareTo(t)>=0?a.subtract(t):a.signum()<0?(a.addTo(t,a),a.signum()<0?a.add(t):a):a}function bnIsProbablePrime(t){var e,r=this.abs();if(1==r.t&&r[0]<=lowprimes[lowprimes.length-1]){for(e=0;e<lowprimes.length;++e)if(r[0]==lowprimes[e])return!0;return!1}if(r.isEven())return!1;for(e=1;e<lowprimes.length;){for(var n=lowprimes[e],i=e+1;i<lowprimes.length&&lplim>n;)n*=lowprimes[i++];for(n=r.modInt(n);i>e;)if(n%lowprimes[e++]==0)return!1}return r.millerRabin(t)}function bnpMillerRabin(t){var e=this.subtract(BigInteger.ONE),r=e.getLowestSetBit();if(0>=r)return!1;var n=e.shiftRight(r);t=t+1>>1,t>lowprimes.length&&(t=lowprimes.length);for(var i=nbi(),o=0;t>o;++o){i.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var s=i.modPow(n,this);if(0!=s.compareTo(BigInteger.ONE)&&0!=s.compareTo(e)){for(var a=1;a++<r&&0!=s.compareTo(e);)if(s=s.modPowInt(2,this),0==s.compareTo(BigInteger.ONE))return!1;if(0!=s.compareTo(e))return!1}}return!0}function parseBigInt(t,e){return new BigInteger(t,e)}function linebrk(t,e){for(var r="",n=0;n+e<t.length;)r+=t.substring(n,n+e)+"\n",n+=e;return r+t.substring(n,t.length)}function byte2Hex(t){return 16>t?"0"+t.toString(16):t.toString(16)}function pkcs1pad2(t,e){if(e<t.length+11)return alert("Message too long for RSA"),null;for(var r=new Array,n=t.length-1;n>=0&&e>0;){var i=t.charCodeAt(n--);128>i?r[--e]=i:i>127&&2048>i?(r[--e]=63&i|128,r[--e]=i>>6|192):(r[--e]=63&i|128,r[--e]=i>>6&63|128,r[--e]=i>>12|224)}r[--e]=0;for(var o=new SecureRandom,s=new Array;e>2;){for(s[0]=0;0==s[0];)o.nextBytes(s);r[--e]=s[0]}return r[--e]=2,r[--e]=0,new BigInteger(r)}function oaep_mgf1_arr(t,e,r){for(var n="",i=0;n.length<e;)n+=r(String.fromCharCode.apply(String,t.concat([(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i]))),i+=1;return n}function oaep_pad(t,e,r){if(t.length+2*SHA1_SIZE+2>e)throw"Message too long for RSA";var n,i="";for(n=0;n<e-t.length-2*SHA1_SIZE-2;n+=1)i+="\x00";var o=rstr_sha1("")+i+""+t,s=new Array(SHA1_SIZE);(new SecureRandom).nextBytes(s);var a=oaep_mgf1_arr(s,o.length,r||rstr_sha1),h=[];for(n=0;n<o.length;n+=1)h[n]=o.charCodeAt(n)^a.charCodeAt(n);var u=oaep_mgf1_arr(h,s.length,rstr_sha1),c=[0];for(n=0;n<s.length;n+=1)c[n+1]=s[n]^u.charCodeAt(n);return new BigInteger(c.concat(h))}function RSAKey(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function RSASetPublic(t,e){this.isPublic=!0,"string"!=typeof t?(this.n=t,this.e=e):null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=parseBigInt(t,16),this.e=parseInt(e,16)):alert("Invalid RSA public key")}function RSADoPublic(t){return t.modPowInt(this.e,this.n)}function RSAEncrypt(t){var e=pkcs1pad2(t,this.n.bitLength()+7>>3);if(null==e)return null;var r=this.doPublic(e);if(null==r)return null;var n=r.toString(16);return 0==(1&n.length)?n:"0"+n}function RSAEncryptOAEP(t,e){var r=oaep_pad(t,this.n.bitLength()+7>>3,e);if(null==r)return null;var n=this.doPublic(r);if(null==n)return null;var i=n.toString(16);return 0==(1&i.length)?i:"0"+i}function pkcs1unpad2(t,e){for(var r=t.toByteArray(),n=0;n<r.length&&0==r[n];)++n;if(r.length-n!=e-1||2!=r[n])return null;for(++n;0!=r[n];)if(++n>=r.length)return null;for(var i="";++n<r.length;){var o=255&r[n];128>o?i+=String.fromCharCode(o):o>191&&224>o?(i+=String.fromCharCode((31&o)<<6|63&r[n+1]),++n):(i+=String.fromCharCode((15&o)<<12|(63&r[n+1])<<6|63&r[n+2]),n+=2)}return i}function oaep_mgf1_str(t,e,r){for(var n="",i=0;n.length<e;)n+=r(t+String.fromCharCode.apply(String,[(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i])),i+=1;return n}function oaep_unpad(t,e,r){t=t.toByteArray();var n;for(n=0;n<t.length;n+=1)t[n]&=255;for(;t.length<e;)t.unshift(0);if(t=String.fromCharCode.apply(String,t),t.length<2*SHA1_SIZE+2)throw"Cipher too short";var n,i=t.substr(1,SHA1_SIZE),o=t.substr(SHA1_SIZE+1),s=oaep_mgf1_str(o,SHA1_SIZE,r||rstr_sha1),a=[];for(n=0;n<i.length;n+=1)a[n]=i.charCodeAt(n)^s.charCodeAt(n);var h=oaep_mgf1_str(String.fromCharCode.apply(String,a),t.length-SHA1_SIZE,rstr_sha1),u=[];for(n=0;n<o.length;n+=1)u[n]=o.charCodeAt(n)^h.charCodeAt(n);if(u=String.fromCharCode.apply(String,u),u.substr(0,SHA1_SIZE)!==rstr_sha1(""))throw"Hash mismatch";u=u.substr(SHA1_SIZE);var c=u.indexOf(""),p=-1!=c?u.substr(0,c).lastIndexOf("\x00"):-1;if(p+1!=c)throw"Malformed data";return u.substr(c+1)}function RSASetPrivate(t,e,r){this.isPrivate=!0,"string"!=typeof t?(this.n=t,this.e=e,this.d=r):null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=parseBigInt(t,16),this.e=parseInt(e,16),this.d=parseBigInt(r,16)):alert("Invalid RSA private key")}function RSASetPrivateEx(t,e,r,n,i,o,s,a){if(this.isPrivate=!0,null==t)throw"RSASetPrivateEx N == null";if(null==e)throw"RSASetPrivateEx E == null";if(0==t.length)throw"RSASetPrivateEx N.length == 0";if(0==e.length)throw"RSASetPrivateEx E.length == 0";null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=parseBigInt(t,16),this.e=parseInt(e,16),this.d=parseBigInt(r,16),this.p=parseBigInt(n,16),this.q=parseBigInt(i,16),this.dmp1=parseBigInt(o,16),this.dmq1=parseBigInt(s,16),this.coeff=parseBigInt(a,16)):alert("Invalid RSA private key in RSASetPrivateEx")}function RSAGenerate(t,e){var r=new SecureRandom,n=t>>1;this.e=parseInt(e,16);for(var i=new BigInteger(e,16);;){for(;this.p=new BigInteger(t-n,1,r),0!=this.p.subtract(BigInteger.ONE).gcd(i).compareTo(BigInteger.ONE)||!this.p.isProbablePrime(10););for(;this.q=new BigInteger(n,1,r),0!=this.q.subtract(BigInteger.ONE).gcd(i).compareTo(BigInteger.ONE)||!this.q.isProbablePrime(10););if(this.p.compareTo(this.q)<=0){var o=this.p;this.p=this.q,this.q=o}var s=this.p.subtract(BigInteger.ONE),a=this.q.subtract(BigInteger.ONE),h=s.multiply(a);if(0==h.gcd(i).compareTo(BigInteger.ONE)){this.n=this.p.multiply(this.q),this.d=i.modInverse(h),this.dmp1=this.d.mod(s),this.dmq1=this.d.mod(a),this.coeff=this.q.modInverse(this.p);break}}this.isPrivate=!0}function RSADoPrivate(t){if(null==this.p||null==this.q)return t.modPow(this.d,this.n);for(var e=t.mod(this.p).modPow(this.dmp1,this.p),r=t.mod(this.q).modPow(this.dmq1,this.q);e.compareTo(r)<0;)e=e.add(this.p);return e.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r)}function RSADecrypt(t){var e=parseBigInt(t,16),r=this.doPrivate(e);return null==r?null:pkcs1unpad2(r,this.n.bitLength()+7>>3)}function RSADecryptOAEP(t,e){var r=parseBigInt(t,16),n=this.doPrivate(r);return null==n?null:oaep_unpad(n,this.n.bitLength()+7>>3,e)}function _rsapem_pemToBase64(t){var e=t;return e=e.replace("-----BEGIN RSA PRIVATE KEY-----",""),e=e.replace("-----END RSA PRIVATE KEY-----",""),e=e.replace(/[ \n]+/g,"")}function _rsapem_getPosArrayOfChildrenFromHex(t){var e=new Array,r=ASN1HEX.getStartPosOfV_AtObj(t,0),n=ASN1HEX.getPosOfNextSibling_AtObj(t,r),i=ASN1HEX.getPosOfNextSibling_AtObj(t,n),o=ASN1HEX.getPosOfNextSibling_AtObj(t,i),s=ASN1HEX.getPosOfNextSibling_AtObj(t,o),a=ASN1HEX.getPosOfNextSibling_AtObj(t,s),h=ASN1HEX.getPosOfNextSibling_AtObj(t,a),u=ASN1HEX.getPosOfNextSibling_AtObj(t,h),c=ASN1HEX.getPosOfNextSibling_AtObj(t,u);return e.push(r,n,i,o,s,a,h,u,c),e}function _rsapem_getHexValueArrayOfChildrenFromHex(t){var e=_rsapem_getPosArrayOfChildrenFromHex(t),r=ASN1HEX.getHexOfV_AtObj(t,e[0]),n=ASN1HEX.getHexOfV_AtObj(t,e[1]),i=ASN1HEX.getHexOfV_AtObj(t,e[2]),o=ASN1HEX.getHexOfV_AtObj(t,e[3]),s=ASN1HEX.getHexOfV_AtObj(t,e[4]),a=ASN1HEX.getHexOfV_AtObj(t,e[5]),h=ASN1HEX.getHexOfV_AtObj(t,e[6]),u=ASN1HEX.getHexOfV_AtObj(t,e[7]),c=ASN1HEX.getHexOfV_AtObj(t,e[8]),p=new Array;return p.push(r,n,i,o,s,a,h,u,c),p}function _rsapem_readPrivateKeyFromASN1HexString(t){var e=_rsapem_getHexValueArrayOfChildrenFromHex(t);this.setPrivateEx(e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}function _rsapem_readPrivateKeyFromPEMString(t){var e=_rsapem_pemToBase64(t),r=b64tohex(e),n=_rsapem_getHexValueArrayOfChildrenFromHex(r);this.setPrivateEx(n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8])}function _rsasign_getHexPaddedDigestInfoForString(t,e,r){var n=function(t){return KJUR.crypto.Util.hashString(t,r)},i=n(t);return KJUR.crypto.Util.getPaddedDigestInfoHex(i,r,e)}function _zeroPaddingOfSignature(t,e){for(var r="",n=e/4-t.length,i=0;n>i;i++)r+="0";return r+t}function _rsasign_signString(t,e){var r=function(t){return KJUR.crypto.Util.hashString(t,e)},n=r(t);return this.signWithMessageHash(n,e)}function _rsasign_signWithMessageHash(t,e){var r=KJUR.crypto.Util.getPaddedDigestInfoHex(t,e,this.n.bitLength()),n=parseBigInt(r,16),i=this.doPrivate(n),o=i.toString(16);return _zeroPaddingOfSignature(o,this.n.bitLength())}function _rsasign_signStringWithSHA1(t){return _rsasign_signString.call(this,t,"sha1")}function _rsasign_signStringWithSHA256(t){return _rsasign_signString.call(this,t,"sha256")}function pss_mgf1_str(t,e,r){for(var n="",i=0;n.length<e;)n+=hextorstr(r(rstrtohex(t+String.fromCharCode.apply(String,[(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i])))),i+=1;return n}function _rsasign_signStringPSS(t,e,r){var n=function(t){return KJUR.crypto.Util.hashHex(t,e)},i=n(rstrtohex(t));return void 0===r&&(r=-1),this.signWithMessageHashPSS(i,e,r)}function _rsasign_signWithMessageHashPSS(t,e,r){var n,i=hextorstr(t),o=i.length,s=this.n.bitLength()-1,a=Math.ceil(s/8),h=function(t){return KJUR.crypto.Util.hashHex(t,e)};if(-1===r||void 0===r)r=o;else if(-2===r)r=a-o-2;else if(-2>r)throw"invalid salt length";if(o+r+2>a)throw"data too long";var u="";r>0&&(u=new Array(r),(new SecureRandom).nextBytes(u),u=String.fromCharCode.apply(String,u));var c=hextorstr(h(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+i+u))),p=[];for(n=0;a-r-o-2>n;n+=1)p[n]=0;var g=String.fromCharCode.apply(String,p)+""+u,f=pss_mgf1_str(c,g.length,h),l=[];for(n=0;n<g.length;n+=1)l[n]=g.charCodeAt(n)^f.charCodeAt(n);var d=65280>>8*a-s&255;for(l[0]&=~d,n=0;o>n;n++)l.push(c.charCodeAt(n));return l.push(188),_zeroPaddingOfSignature(this.doPrivate(new BigInteger(l)).toString(16),this.n.bitLength())}function _rsasign_getDecryptSignatureBI(t,e,r){var n=new RSAKey;n.setPublic(e,r);var i=n.doPublic(t);return i}function _rsasign_getHexDigestInfoFromSig(t,e,r){var n=_rsasign_getDecryptSignatureBI(t,e,r),i=n.toString(16).replace(/^1f+00/,"");return i}function _rsasign_getAlgNameAndHashFromHexDisgestInfo(t){for(var e in KJUR.crypto.Util.DIGESTINFOHEAD){var r=KJUR.crypto.Util.DIGESTINFOHEAD[e],n=r.length;if(t.substring(0,n)==r){var i=[e,t.substring(n)];return i}}return[]}function _rsasign_verifySignatureWithArgs(t,e,r,n){var i=_rsasign_getHexDigestInfoFromSig(e,r,n),o=_rsasign_getAlgNameAndHashFromHexDisgestInfo(i);if(0==o.length)return!1;var s=o[0],a=o[1],h=function(t){return KJUR.crypto.Util.hashString(t,s)},u=h(t);return a==u}function _rsasign_verifyHexSignatureForMessage(t,e){var r=parseBigInt(t,16),n=_rsasign_verifySignatureWithArgs(e,r,this.n.toString(16),this.e.toString(16));return n}function _rsasign_verifyString(t,e){e=e.replace(_RE_HEXDECONLY,""),e=e.replace(/[ \n]+/g,"");var r=parseBigInt(e,16);if(r.bitLength()>this.n.bitLength())return 0;var n=this.doPublic(r),i=n.toString(16).replace(/^1f+00/,""),o=_rsasign_getAlgNameAndHashFromHexDisgestInfo(i);if(0==o.length)return!1;var s=o[0],a=o[1],h=function(t){return KJUR.crypto.Util.hashString(t,s)},u=h(t);return a==u}function _rsasign_verifyWithMessageHash(t,e){e=e.replace(_RE_HEXDECONLY,""),e=e.replace(/[ \n]+/g,"");var r=parseBigInt(e,16);if(r.bitLength()>this.n.bitLength())return 0;var n=this.doPublic(r),i=n.toString(16).replace(/^1f+00/,""),o=_rsasign_getAlgNameAndHashFromHexDisgestInfo(i);if(0==o.length)return!1;var s=(o[0],o[1]);return s==t}function _rsasign_verifyStringPSS(t,e,r,n){var i=function(t){return KJUR.crypto.Util.hashHex(t,r)},o=i(rstrtohex(t));return void 0===n&&(n=-1),this.verifyWithMessageHashPSS(o,e,r,n)
}function _rsasign_verifyWithMessageHashPSS(t,e,r,n){var i=new BigInteger(e,16);if(i.bitLength()>this.n.bitLength())return!1;var o,s=function(t){return KJUR.crypto.Util.hashHex(t,r)},a=hextorstr(t),h=a.length,u=this.n.bitLength()-1,c=Math.ceil(u/8);if(-1===n||void 0===n)n=h;else if(-2===n)n=c-h-2;else if(-2>n)throw"invalid salt length";if(h+n+2>c)throw"data too long";var p=this.doPublic(i).toByteArray();for(o=0;o<p.length;o+=1)p[o]&=255;for(;p.length<c;)p.unshift(0);if(188!==p[c-1])throw"encoded message does not end in 0xbc";p=String.fromCharCode.apply(String,p);var g=p.substr(0,c-h-1),f=p.substr(g.length,h),l=65280>>8*c-u&255;if(0!==(g.charCodeAt(0)&l))throw"bits beyond keysize not zero";var d=pss_mgf1_str(f,g.length,s),y=[];for(o=0;o<g.length;o+=1)y[o]=g.charCodeAt(o)^d.charCodeAt(o);y[0]&=~l;var v=c-h-n-2;for(o=0;v>o;o+=1)if(0!==y[o])throw"leftmost octets not zero";if(1!==y[v])throw"0x01 marker not found";return f===hextorstr(s(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+a+String.fromCharCode.apply(String,y.slice(-n)))))}function X509(){this.subjectPublicKeyRSA=null,this.subjectPublicKeyRSA_hN=null,this.subjectPublicKeyRSA_hE=null,this.hex=null,this.getSerialNumberHex=function(){return ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,1])},this.getIssuerHex=function(){return ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,3])},this.getIssuerString=function(){return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,3]))},this.getSubjectHex=function(){return ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,5])},this.getSubjectString=function(){return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,5]))},this.getNotBefore=function(){var t=ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,4,0]);return t=t.replace(/(..)/g,"%$1"),t=decodeURIComponent(t)},this.getNotAfter=function(){var t=ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,4,1]);return t=t.replace(/(..)/g,"%$1"),t=decodeURIComponent(t)},this.readCertPEM=function(t){var e=X509.pemToHex(t),r=X509.getPublicKeyHexArrayFromCertHex(e),n=new RSAKey;n.setPublic(r[0],r[1]),this.subjectPublicKeyRSA=n,this.subjectPublicKeyRSA_hN=r[0],this.subjectPublicKeyRSA_hE=r[1],this.hex=e},this.readCertPEMWithoutRSAInit=function(t){var e=X509.pemToHex(t),r=X509.getPublicKeyHexArrayFromCertHex(e);this.subjectPublicKeyRSA.setPublic(r[0],r[1]),this.subjectPublicKeyRSA_hN=r[0],this.subjectPublicKeyRSA_hE=r[1],this.hex=e}}function Base64x(){}function stoBA(t){for(var e=new Array,r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}function BAtos(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e}function BAtohex(t){for(var e="",r=0;r<t.length;r++){var n=t[r].toString(16);1==n.length&&(n="0"+n),e+=n}return e}function stohex(t){return BAtohex(stoBA(t))}function stob64(t){return hex2b64(stohex(t))}function stob64u(t){return b64tob64u(hex2b64(stohex(t)))}function b64utos(t){return BAtos(b64toBA(b64utob64(t)))}function b64tob64u(t){return t=t.replace(/\=/g,""),t=t.replace(/\+/g,"-"),t=t.replace(/\//g,"_")}function b64utob64(t){return t.length%4==2?t+="==":t.length%4==3&&(t+="="),t=t.replace(/-/g,"+"),t=t.replace(/_/g,"/")}function hextob64u(t){return b64tob64u(hex2b64(t))}function b64utohex(t){return b64tohex(b64utob64(t))}function utf8tob64(t){return hex2b64(uricmptohex(encodeURIComponentAll(t)))}function b64toutf8(t){return decodeURIComponent(hextouricmp(b64tohex(t)))}function utf8tohex(t){return uricmptohex(encodeURIComponentAll(t))}function hextoutf8(t){return decodeURIComponent(hextouricmp(t))}function hextorstr(t){for(var e="",r=0;r<t.length-1;r+=2)e+=String.fromCharCode(parseInt(t.substr(r,2),16));return e}function rstrtohex(t){for(var e="",r=0;r<t.length;r++)e+=("0"+t.charCodeAt(r).toString(16)).slice(-2);return e}function hextob64(t){return hex2b64(t)}function hextob64nl(t){var e=hextob64(t),r=e.replace(/(.{64})/g,"$1\r\n");return r=r.replace(/\r\n$/,"")}function b64nltohex(t){var e=t.replace(/[^0-9A-Za-z\/+=]*/g,""),r=b64tohex(e);return r}function uricmptohex(t){return t.replace(/%/g,"")}function hextouricmp(t){return t.replace(/(..)/g,"%$1")}function encodeURIComponentAll(t){for(var e=encodeURIComponent(t),r="",n=0;n<e.length;n++)"%"==e[n]?(r+=e.substr(n,3),n+=2):r=r+"%"+stohex(e[n]);return r}function newline_toUnix(t){return t=t.replace(/\r\n/gm,"\n")}function newline_toDos(t){return t=t.replace(/\r\n/gm,"\n"),t=t.replace(/\n/gm,"\r\n")}function DefaultHttpRequest(){function t(t,e){for(var r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],o=e[i];t.setRequestHeader(i,o)}}this.getJSON=function(e,r){return _promiseFactory.create(function(n,i){try{var o=new XMLHttpRequest;o.open("GET",e),o.responseType="json",r&&r.headers&&t(o,r.headers),o.onload=function(){try{if(200===o.status){var t=o.response;"string"==typeof t&&(t=JSON.parse(t)),n(t)}else i(Error(o.statusText+"("+o.status+")"))}catch(e){i(e)}},o.onerror=function(){i(Error("Network error"))},o.send()}catch(s){return i(s)}})}}function DefaultPromise(t){this.then=function(e,r){var n=t.then(e,r);return new DefaultPromise(n)},this["catch"]=function(e){var r=t["catch"](e);return new DefaultPromise(r)}}function DefaultPromiseFactory(){this.resolve=function(t){return new DefaultPromise(Promise.resolve(t))},this.reject=function(t){return new DefaultPromise(Promise.reject(t))},this.create=function(t){return new DefaultPromise(new Promise(t))}}function log(){}function copy(t,e){e=e||{};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function rand(){return((Date.now()+Math.random())*Math.random()).toString().replace(".","")}function error(t){return _promiseFactory.reject(Error(t))}function parseOidcResult(t){log("parseOidcResult"),t=t||location.hash;var e=t.lastIndexOf("#");e>=0&&(t=t.substr(e+1));for(var r,n={},i=/([^&=]+)=([^&]*)/g,o=0;r=i.exec(t);)if(n[decodeURIComponent(r[1])]=decodeURIComponent(r[2]),o++>50)return{error:"Response exceeded expected number of parameters"};for(var s in n)return n}function getJson(t,e){log("getJson",t);var r={};return e&&(r.headers={Authorization:"Bearer "+e}),_httpRequest.getJSON(t,r)}function OidcClient(t){this._settings=t||{},this._settings.request_state_key||(this._settings.request_state_key="OidcClient.request_state"),this._settings.request_state_store||(this._settings.request_state_store=window.localStorage),"undefined"==typeof this._settings.load_user_profile&&(this._settings.load_user_profile=!0),"undefined"==typeof this._settings.filter_protocol_claims&&(this._settings.filter_protocol_claims=!0),this._settings.authority&&this._settings.authority.indexOf(".well-known/openid-configuration")<0&&("/"!==this._settings.authority[this._settings.authority.length-1]&&(this._settings.authority+="/"),this._settings.authority+=".well-known/openid-configuration"),this._settings.response_type||(this._settings.response_type="id_token token"),Object.defineProperty(this,"isOidc",{get:function(){if(this._settings.response_type){var t=this._settings.response_type.split(/\s+/g).filter(function(t){return"id_token"===t});return!!t[0]}return!1}}),Object.defineProperty(this,"isOAuth",{get:function(){if(this._settings.response_type){var t=this._settings.response_type.split(/\s+/g).filter(function(t){return"token"===t});return!!t[0]}return!1}})}var _promiseFactory,_httpRequest,CryptoJS=CryptoJS||function(t,e){var r={},n=r.lib={},i=n.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var r=new t;return e&&r.mixIn(e),r.hasOwnProperty("init")||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=n.WordArray=i.extend({init:function(t,r){t=this.words=t||[],this.sigBytes=r!=e?r:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;i>o;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=s<<24-(n+o)%4*8}else if(r.length>65535)for(var o=0;i>o;o+=4)e[n+o>>>2]=r[o>>>2];else e.push.apply(e,r);return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],n=0;e>n;n+=4)r.push(4294967296*t.random()|0);return new o.init(r,e)}}),s=r.enc={},a=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new o.init(r,e/2)}},h=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;r>i;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;e>n;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new o.init(r,e)}},u=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},c=n.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=u.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,i=r.sigBytes,s=this.blockSize,a=4*s,h=i/a;h=e?t.ceil(h):t.max((0|h)-this._minBufferSize,0);var u=h*s,c=t.min(4*u,i);if(u){for(var p=0;u>p;p+=s)this._doProcessBlock(n,p);var g=n.splice(0,u);r.sigBytes-=c}return new o.init(g,c)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(n.Hasher=c.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){c.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}}),r.algo={});return r}(Math);!function(){var t=CryptoJS,e=t.lib,r=e.WordArray,n=e.Hasher,i=t.algo,o=[],s=i.SHA1=n.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=this._hash.words,n=r[0],i=r[1],s=r[2],a=r[3],h=r[4],u=0;80>u;u++){if(16>u)o[u]=0|t[e+u];else{var c=o[u-3]^o[u-8]^o[u-14]^o[u-16];o[u]=c<<1|c>>>31}var p=(n<<5|n>>>27)+h+o[u];p+=20>u?(i&s|~i&a)+1518500249:40>u?(i^s^a)+1859775393:60>u?(i&s|i&a|s&a)-1894007588:(i^s^a)-899497514,h=a,a=s,s=i<<30|i>>>2,i=n,n=p}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+s|0,r[3]=r[3]+a|0,r[4]=r[4]+h|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[(n+64>>>9<<4)+14]=Math.floor(r/4294967296),e[(n+64>>>9<<4)+15]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t}});t.SHA1=n._createHelper(s),t.HmacSHA1=n._createHmacHelper(s)}(),function(t){var e=CryptoJS,r=e.lib,n=r.WordArray,i=r.Hasher,o=e.algo,s=[],a=[];!function(){function e(e){for(var r=t.sqrt(e),n=2;r>=n;n++)if(!(e%n))return!1;return!0}function r(t){return 4294967296*(t-(0|t))|0}for(var n=2,i=0;64>i;)e(n)&&(8>i&&(s[i]=r(t.pow(n,.5))),a[i]=r(t.pow(n,1/3)),i++),n++}();var h=[],u=o.SHA256=i.extend({_doReset:function(){this._hash=new n.init(s.slice(0))},_doProcessBlock:function(t,e){for(var r=this._hash.words,n=r[0],i=r[1],o=r[2],s=r[3],u=r[4],c=r[5],p=r[6],g=r[7],f=0;64>f;f++){if(16>f)h[f]=0|t[e+f];else{var l=h[f-15],d=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,y=h[f-2],v=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;h[f]=d+h[f-7]+v+h[f-16]}var S=u&c^~u&p,m=n&i^n&o^i&o,b=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),_=(u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25),A=g+_+S+a[f]+h[f],w=b+m;g=p,p=c,c=u,u=s+A|0,s=o,o=i,i=n,n=A+w|0}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+u|0,r[5]=r[5]+c|0,r[6]=r[6]+p|0,r[7]=r[7]+g|0},_doFinalize:function(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;return r[i>>>5]|=128<<24-i%32,r[(i+64>>>9<<4)+14]=t.floor(n/4294967296),r[(i+64>>>9<<4)+15]=n,e.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA256=i._createHelper(u),e.HmacSHA256=i._createHmacHelper(u)}(Math),function(t){{var e=CryptoJS,r=e.lib,n=r.Base,i=r.WordArray,o=e.x64={};o.Word=n.extend({init:function(t,e){this.high=t,this.low=e}}),o.WordArray=n.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=r!=t?r:8*e.length},toX32:function(){for(var t=this.words,e=t.length,r=[],n=0;e>n;n++){var o=t[n];r.push(o.high),r.push(o.low)}return i.create(r,this.sigBytes)},clone:function(){for(var t=n.clone.call(this),e=t.words=this.words.slice(0),r=e.length,i=0;r>i;i++)e[i]=e[i].clone();return t}})}}(),function(){function t(){return o.create.apply(o,arguments)}var e=CryptoJS,r=e.lib,n=r.Hasher,i=e.x64,o=i.Word,s=i.WordArray,a=e.algo,h=[t(1116352408,3609767458),t(1899447441,602891725),t(3049323471,3964484399),t(3921009573,2173295548),t(961987163,4081628472),t(1508970993,3053834265),t(2453635748,2937671579),t(2870763221,3664609560),t(3624381080,2734883394),t(310598401,1164996542),t(607225278,1323610764),t(1426881987,3590304994),t(1925078388,4068182383),t(2162078206,991336113),t(2614888103,633803317),t(3248222580,3479774868),t(3835390401,2666613458),t(4022224774,944711139),t(264347078,2341262773),t(604807628,2007800933),t(770255983,1495990901),t(1249150122,1856431235),t(1555081692,3175218132),t(1996064986,2198950837),t(2554220882,3999719339),t(2821834349,766784016),t(2952996808,2566594879),t(3210313671,3203337956),t(3336571891,1034457026),t(3584528711,2466948901),t(113926993,3758326383),t(338241895,168717936),t(666307205,1188179964),t(773529912,1546045734),t(1294757372,1522805485),t(1396182291,2643833823),t(1695183700,2343527390),t(1986661051,1014477480),t(2177026350,1206759142),t(2456956037,344077627),t(2730485921,1290863460),t(2820302411,3158454273),t(3259730800,3505952657),t(3345764771,106217008),t(3516065817,3606008344),t(3600352804,1432725776),t(4094571909,1467031594),t(275423344,851169720),t(430227734,3100823752),t(506948616,1363258195),t(659060556,3750685593),t(883997877,3785050280),t(958139571,3318307427),t(1322822218,3812723403),t(1537002063,2003034995),t(1747873779,3602036899),t(1955562222,1575990012),t(2024104815,1125592928),t(2227730452,2716904306),t(2361852424,442776044),t(2428436474,593698344),t(2756734187,3733110249),t(3204031479,2999351573),t(3329325298,3815920427),t(3391569614,3928383900),t(3515267271,566280711),t(3940187606,3454069534),t(4118630271,4000239992),t(116418474,1914138554),t(174292421,2731055270),t(289380356,3203993006),t(460393269,320620315),t(685471733,587496836),t(852142971,1086792851),t(1017036298,365543100),t(1126000580,2618297676),t(1288033470,3409855158),t(1501505948,4234509866),t(1607167915,987167468),t(1816402316,1246189591)],u=[];!function(){for(var e=0;80>e;e++)u[e]=t()}();var c=a.SHA512=n.extend({_doReset:function(){this._hash=new s.init([new o.init(1779033703,4089235720),new o.init(3144134277,2227873595),new o.init(1013904242,4271175723),new o.init(2773480762,1595750129),new o.init(1359893119,2917565137),new o.init(2600822924,725511199),new o.init(528734635,4215389547),new o.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var r=this._hash.words,n=r[0],i=r[1],o=r[2],s=r[3],a=r[4],c=r[5],p=r[6],g=r[7],f=n.high,l=n.low,d=i.high,y=i.low,v=o.high,S=o.low,m=s.high,b=s.low,_=a.high,A=a.low,w=c.high,x=c.low,R=p.high,T=p.low,H=g.high,I=g.low,B=f,E=l,P=d,O=y,k=v,N=S,C=m,D=b,j=_,M=A,J=w,K=x,U=R,F=T,L=H,W=I,X=0;80>X;X++){var V=u[X];if(16>X)var q=V.high=0|t[e+2*X],z=V.low=0|t[e+2*X+1];else{var G=u[X-15],Z=G.high,$=G.low,Y=(Z>>>1|$<<31)^(Z>>>8|$<<24)^Z>>>7,Q=($>>>1|Z<<31)^($>>>8|Z<<24)^($>>>7|Z<<25),te=u[X-2],ee=te.high,re=te.low,ne=(ee>>>19|re<<13)^(ee<<3|re>>>29)^ee>>>6,ie=(re>>>19|ee<<13)^(re<<3|ee>>>29)^(re>>>6|ee<<26),oe=u[X-7],se=oe.high,ae=oe.low,he=u[X-16],ue=he.high,ce=he.low,z=Q+ae,q=Y+se+(Q>>>0>z>>>0?1:0),z=z+ie,q=q+ne+(ie>>>0>z>>>0?1:0),z=z+ce,q=q+ue+(ce>>>0>z>>>0?1:0);V.high=q,V.low=z}var pe=j&J^~j&U,ge=M&K^~M&F,fe=B&P^B&k^P&k,le=E&O^E&N^O&N,de=(B>>>28|E<<4)^(B<<30|E>>>2)^(B<<25|E>>>7),ye=(E>>>28|B<<4)^(E<<30|B>>>2)^(E<<25|B>>>7),ve=(j>>>14|M<<18)^(j>>>18|M<<14)^(j<<23|M>>>9),Se=(M>>>14|j<<18)^(M>>>18|j<<14)^(M<<23|j>>>9),me=h[X],be=me.high,_e=me.low,Ae=W+Se,we=L+ve+(W>>>0>Ae>>>0?1:0),Ae=Ae+ge,we=we+pe+(ge>>>0>Ae>>>0?1:0),Ae=Ae+_e,we=we+be+(_e>>>0>Ae>>>0?1:0),Ae=Ae+z,we=we+q+(z>>>0>Ae>>>0?1:0),xe=ye+le,Re=de+fe+(ye>>>0>xe>>>0?1:0);L=U,W=F,U=J,F=K,J=j,K=M,M=D+Ae|0,j=C+we+(D>>>0>M>>>0?1:0)|0,C=k,D=N,k=P,N=O,P=B,O=E,E=Ae+xe|0,B=we+Re+(Ae>>>0>E>>>0?1:0)|0}l=n.low=l+E,n.high=f+B+(E>>>0>l>>>0?1:0),y=i.low=y+O,i.high=d+P+(O>>>0>y>>>0?1:0),S=o.low=S+N,o.high=v+k+(N>>>0>S>>>0?1:0),b=s.low=b+D,s.high=m+C+(D>>>0>b>>>0?1:0),A=a.low=A+M,a.high=_+j+(M>>>0>A>>>0?1:0),x=c.low=x+K,c.high=w+J+(K>>>0>x>>>0?1:0),T=p.low=T+F,p.high=R+U+(F>>>0>T>>>0?1:0),I=g.low=I+W,g.high=H+L+(W>>>0>I>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;e[n>>>5]|=128<<24-n%32,e[(n+128>>>10<<5)+30]=Math.floor(r/4294967296),e[(n+128>>>10<<5)+31]=r,t.sigBytes=4*e.length,this._process();var i=this._hash.toX32();return i},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32});e.SHA512=n._createHelper(c),e.HmacSHA512=n._createHmacHelper(c)}();var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64pad="=",dbits,canary=0xdeadbeefcafe,j_lm=15715070==(16777215&canary);j_lm&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;for(rr="0".charCodeAt(0),vv=0;9>=vv;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1),NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=(1<<26)/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,BigInteger.prototype.square=bnSquare;var SHA1_SIZE=20;RSAKey.prototype.doPublic=RSADoPublic,RSAKey.prototype.setPublic=RSASetPublic,RSAKey.prototype.encrypt=RSAEncrypt,RSAKey.prototype.encryptOAEP=RSAEncryptOAEP,RSAKey.prototype.type="RSA";var SHA1_SIZE=20;RSAKey.prototype.doPrivate=RSADoPrivate,RSAKey.prototype.setPrivate=RSASetPrivate,RSAKey.prototype.setPrivateEx=RSASetPrivateEx,RSAKey.prototype.generate=RSAGenerate,RSAKey.prototype.decrypt=RSADecrypt,RSAKey.prototype.decryptOAEP=RSADecryptOAEP,RSAKey.prototype.readPrivateKeyFromPEMString=_rsapem_readPrivateKeyFromPEMString,RSAKey.prototype.readPrivateKeyFromASN1HexString=_rsapem_readPrivateKeyFromASN1HexString;var _RE_HEXDECONLY=new RegExp("");_RE_HEXDECONLY.compile("[^0-9a-f]","gi"),RSAKey.prototype.signWithMessageHash=_rsasign_signWithMessageHash,RSAKey.prototype.signString=_rsasign_signString,RSAKey.prototype.signStringWithSHA1=_rsasign_signStringWithSHA1,RSAKey.prototype.signStringWithSHA256=_rsasign_signStringWithSHA256,RSAKey.prototype.sign=_rsasign_signString,RSAKey.prototype.signWithSHA1=_rsasign_signStringWithSHA1,RSAKey.prototype.signWithSHA256=_rsasign_signStringWithSHA256,RSAKey.prototype.signWithMessageHashPSS=_rsasign_signWithMessageHashPSS,RSAKey.prototype.signStringPSS=_rsasign_signStringPSS,RSAKey.prototype.signPSS=_rsasign_signStringPSS,RSAKey.SALT_LEN_HLEN=-1,RSAKey.SALT_LEN_MAX=-2,RSAKey.prototype.verifyWithMessageHash=_rsasign_verifyWithMessageHash,RSAKey.prototype.verifyString=_rsasign_verifyString,RSAKey.prototype.verifyHexSignatureForMessage=_rsasign_verifyHexSignatureForMessage,RSAKey.prototype.verify=_rsasign_verifyString,RSAKey.prototype.verifyHexSignatureForByteArrayMessage=_rsasign_verifyHexSignatureForMessage,RSAKey.prototype.verifyWithMessageHashPSS=_rsasign_verifyWithMessageHashPSS,RSAKey.prototype.verifyStringPSS=_rsasign_verifyStringPSS,RSAKey.prototype.verifyPSS=_rsasign_verifyStringPSS,RSAKey.SALT_LEN_RECOVER=-2;var ASN1HEX=new function(){this.getByteLengthOfL_AtObj=function(t,e){if("8"!=t.substring(e+2,e+3))return 1;var r=parseInt(t.substring(e+3,e+4));return 0==r?-1:r>0&&10>r?r+1:-2},this.getHexOfL_AtObj=function(t,e){var r=this.getByteLengthOfL_AtObj(t,e);return 1>r?"":t.substring(e+2,e+2+2*r)},this.getIntOfL_AtObj=function(t,e){var r=this.getHexOfL_AtObj(t,e);if(""==r)return-1;var n;return n=parseInt(r.substring(0,1))<8?new BigInteger(r,16):new BigInteger(r.substring(2),16),n.intValue()},this.getStartPosOfV_AtObj=function(t,e){var r=this.getByteLengthOfL_AtObj(t,e);return 0>r?r:e+2*(r+1)},this.getHexOfV_AtObj=function(t,e){var r=this.getStartPosOfV_AtObj(t,e),n=this.getIntOfL_AtObj(t,e);return t.substring(r,r+2*n)},this.getHexOfTLV_AtObj=function(t,e){var r=t.substr(e,2),n=this.getHexOfL_AtObj(t,e),i=this.getHexOfV_AtObj(t,e);return r+n+i},this.getPosOfNextSibling_AtObj=function(t,e){var r=this.getStartPosOfV_AtObj(t,e),n=this.getIntOfL_AtObj(t,e);return r+2*n},this.getPosArrayOfChildren_AtObj=function(t,e){var r=new Array,n=this.getStartPosOfV_AtObj(t,e);r.push(n);for(var i=this.getIntOfL_AtObj(t,e),o=n,s=0;;){var a=this.getPosOfNextSibling_AtObj(t,o);if(null==a||a-n>=2*i)break;if(s>=200)break;r.push(a),o=a,s++}return r},this.getNthChildIndex_AtObj=function(t,e,r){var n=this.getPosArrayOfChildren_AtObj(t,e);return n[r]},this.getDecendantIndexByNthList=function(t,e,r){if(0==r.length)return e;var n=r.shift(),i=this.getPosArrayOfChildren_AtObj(t,e);return this.getDecendantIndexByNthList(t,i[n],r)},this.getDecendantHexTLVByNthList=function(t,e,r){var n=this.getDecendantIndexByNthList(t,e,r);return this.getHexOfTLV_AtObj(t,n)},this.getDecendantHexVByNthList=function(t,e,r){var n=this.getDecendantIndexByNthList(t,e,r);return this.getHexOfV_AtObj(t,n)}};ASN1HEX.getVbyList=function(t,e,r,n){var i=this.getDecendantIndexByNthList(t,e,r);if(void 0===i)throw"can't find nthList object";if(void 0!==n&&t.substr(i,2)!=n)throw"checking tag doesn't match: "+t.substr(i,2)+"!="+n;return this.getHexOfV_AtObj(t,i)},ASN1HEX.hextooidstr=function(t){var e=function(t,e){return t.length>=e?t:new Array(e-t.length+1).join("0")+t},r=[],n=t.substr(0,2),i=parseInt(n,16);r[0]=new String(Math.floor(i/40)),r[1]=new String(i%40);for(var o=t.substr(2),s=[],a=0;a<o.length/2;a++)s.push(parseInt(o.substr(2*a,2),16));for(var h=[],u="",a=0;a<s.length;a++)128&s[a]?u+=e((127&s[a]).toString(2),7):(u+=e((127&s[a]).toString(2),7),h.push(new String(parseInt(u,2))),u="");var c=r.join(".");return h.length>0&&(c=c+"."+h.join(".")),c},X509.pemToBase64=function(t){var e=t;return e=e.replace("-----BEGIN CERTIFICATE-----",""),e=e.replace("-----END CERTIFICATE-----",""),e=e.replace(/[ \n]+/g,"")},X509.pemToHex=function(t){var e=X509.pemToBase64(t),r=b64tohex(e);return r},X509.getSubjectPublicKeyPosFromCertHex=function(t){var e=X509.getSubjectPublicKeyInfoPosFromCertHex(t);if(-1==e)return-1;var r=ASN1HEX.getPosArrayOfChildren_AtObj(t,e);if(2!=r.length)return-1;var n=r[1];if("03"!=t.substring(n,n+2))return-1;var i=ASN1HEX.getStartPosOfV_AtObj(t,n);return"00"!=t.substring(i,i+2)?-1:i+2},X509.getSubjectPublicKeyInfoPosFromCertHex=function(t){var e=ASN1HEX.getStartPosOfV_AtObj(t,0),r=ASN1HEX.getPosArrayOfChildren_AtObj(t,e);return r.length<1?-1:"a003020102"==t.substring(r[0],r[0]+10)?r.length<6?-1:r[6]:r.length<5?-1:r[5]},X509.getPublicKeyHexArrayFromCertHex=function(t){var e=X509.getSubjectPublicKeyPosFromCertHex(t),r=ASN1HEX.getPosArrayOfChildren_AtObj(t,e);if(2!=r.length)return[];var n=ASN1HEX.getHexOfV_AtObj(t,r[0]),i=ASN1HEX.getHexOfV_AtObj(t,r[1]);return null!=n&&null!=i?[n,i]:[]},X509.getHexTbsCertificateFromCert=function(t){var e=ASN1HEX.getStartPosOfV_AtObj(t,0);return e},X509.getPublicKeyHexArrayFromCertPEM=function(t){var e=X509.pemToHex(t),r=X509.getPublicKeyHexArrayFromCertHex(e);return r},X509.hex2dn=function(t){for(var e="",r=ASN1HEX.getPosArrayOfChildren_AtObj(t,0),n=0;n<r.length;n++){var i=ASN1HEX.getHexOfTLV_AtObj(t,r[n]);e=e+"/"+X509.hex2rdn(i)}return e},X509.hex2rdn=function(t){var e=ASN1HEX.getDecendantHexTLVByNthList(t,0,[0,0]),r=ASN1HEX.getDecendantHexVByNthList(t,0,[0,1]),n="";try{n=X509.DN_ATTRHEX[e]}catch(i){n=e}r=r.replace(/(..)/g,"%$1");var o=decodeURIComponent(r);return n+"="+o},X509.DN_ATTRHEX={"0603550406":"C","060355040a":"O","060355040b":"OU","0603550403":"CN","0603550405":"SN","0603550408":"ST","0603550407":"L"},X509.getPublicKeyFromCertPEM=function(t){var e=X509.getPublicKeyInfoPropOfCertPEM(t);if("2a864886f70d010101"==e.algoid){var r=KEYUTIL.parsePublicRawRSAKeyHex(e.keyhex),n=new RSAKey;return n.setPublic(r.n,r.e),n}if("2a8648ce3d0201"==e.algoid){var i=KJUR.crypto.OID.oidhex2name[e.algparam],n=new KJUR.crypto.ECDSA({curve:i,info:e.keyhex});return n.setPublicKeyHex(e.keyhex),n}if("2a8648ce380401"==e.algoid){var o=ASN1HEX.getVbyList(e.algparam,0,[0],"02"),s=ASN1HEX.getVbyList(e.algparam,0,[1],"02"),a=ASN1HEX.getVbyList(e.algparam,0,[2],"02"),h=ASN1HEX.getHexOfV_AtObj(e.keyhex,0);h=h.substr(2);var n=new KJUR.crypto.DSA;return n.setPublic(new BigInteger(o,16),new BigInteger(s,16),new BigInteger(a,16),new BigInteger(h,16)),n}throw"unsupported key"},X509.getPublicKeyInfoPropOfCertPEM=function(t){var e={};e.algparam=null;var r=X509.pemToHex(t),n=ASN1HEX.getPosArrayOfChildren_AtObj(r,0);if(3!=n.length)throw"malformed X.509 certificate PEM (code:001)";if("30"!=r.substr(n[0],2))throw"malformed X.509 certificate PEM (code:002)";var i=ASN1HEX.getPosArrayOfChildren_AtObj(r,n[0]);if(i.length<7)throw"malformed X.509 certificate PEM (code:003)";var o=ASN1HEX.getPosArrayOfChildren_AtObj(r,i[6]);if(2!=o.length)throw"malformed X.509 certificate PEM (code:004)";var s=ASN1HEX.getPosArrayOfChildren_AtObj(r,o[0]);if(2!=s.length)throw"malformed X.509 certificate PEM (code:005)";if(e.algoid=ASN1HEX.getHexOfV_AtObj(r,s[0]),"06"==r.substr(s[1],2)?e.algparam=ASN1HEX.getHexOfV_AtObj(r,s[1]):"30"==r.substr(s[1],2)&&(e.algparam=ASN1HEX.getHexOfTLV_AtObj(r,s[1])),"03"!=r.substr(o[1],2))throw"malformed X.509 certificate PEM (code:006)";var a=ASN1HEX.getHexOfV_AtObj(r,o[1]);return e.keyhex=a.substr(2),e},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.Util=new function(){this.DIGESTINFOHEAD={sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",ripemd160:"3021300906052b2403020105000414"},this.DEFAULTPROVIDER={md5:"cryptojs",sha1:"cryptojs",sha224:"cryptojs",sha256:"cryptojs",sha384:"cryptojs",sha512:"cryptojs",ripemd160:"cryptojs",hmacmd5:"cryptojs",hmacsha1:"cryptojs",hmacsha224:"cryptojs",hmacsha256:"cryptojs",hmacsha384:"cryptojs",hmacsha512:"cryptojs",hmacripemd160:"cryptojs",MD5withRSA:"cryptojs/jsrsa",SHA1withRSA:"cryptojs/jsrsa",SHA224withRSA:"cryptojs/jsrsa",SHA256withRSA:"cryptojs/jsrsa",SHA384withRSA:"cryptojs/jsrsa",SHA512withRSA:"cryptojs/jsrsa",RIPEMD160withRSA:"cryptojs/jsrsa",MD5withECDSA:"cryptojs/jsrsa",SHA1withECDSA:"cryptojs/jsrsa",SHA224withECDSA:"cryptojs/jsrsa",SHA256withECDSA:"cryptojs/jsrsa",SHA384withECDSA:"cryptojs/jsrsa",SHA512withECDSA:"cryptojs/jsrsa",RIPEMD160withECDSA:"cryptojs/jsrsa",SHA1withDSA:"cryptojs/jsrsa",SHA224withDSA:"cryptojs/jsrsa",SHA256withDSA:"cryptojs/jsrsa",MD5withRSAandMGF1:"cryptojs/jsrsa",SHA1withRSAandMGF1:"cryptojs/jsrsa",SHA224withRSAandMGF1:"cryptojs/jsrsa",SHA256withRSAandMGF1:"cryptojs/jsrsa",SHA384withRSAandMGF1:"cryptojs/jsrsa",SHA512withRSAandMGF1:"cryptojs/jsrsa",RIPEMD160withRSAandMGF1:"cryptojs/jsrsa"},this.CRYPTOJSMESSAGEDIGESTNAME={md5:"CryptoJS.algo.MD5",sha1:"CryptoJS.algo.SHA1",sha224:"CryptoJS.algo.SHA224",sha256:"CryptoJS.algo.SHA256",sha384:"CryptoJS.algo.SHA384",sha512:"CryptoJS.algo.SHA512",ripemd160:"CryptoJS.algo.RIPEMD160"},this.getDigestInfoHex=function(t,e){if("undefined"==typeof this.DIGESTINFOHEAD[e])throw"alg not supported in Util.DIGESTINFOHEAD: "+e;
return this.DIGESTINFOHEAD[e]+t},this.getPaddedDigestInfoHex=function(t,e,r){var n=this.getDigestInfoHex(t,e),i=r/4;if(n.length+22>i)throw"key is too short for SigAlg: keylen="+r+","+e;for(var o="0001",s="00"+n,a="",h=i-o.length-s.length,u=0;h>u;u+=2)a+="ff";var c=o+a+s;return c},this.hashString=function(t,e){var r=new KJUR.crypto.MessageDigest({alg:e});return r.digestString(t)},this.hashHex=function(t,e){var r=new KJUR.crypto.MessageDigest({alg:e});return r.digestHex(t)},this.sha1=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha1",prov:"cryptojs"});return e.digestString(t)},this.sha256=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return e.digestString(t)},this.sha256Hex=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return e.digestHex(t)},this.sha512=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return e.digestString(t)},this.sha512Hex=function(t){var e=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return e.digestHex(t)},this.md5=function(t){var e=new KJUR.crypto.MessageDigest({alg:"md5",prov:"cryptojs"});return e.digestString(t)},this.ripemd160=function(t){var e=new KJUR.crypto.MessageDigest({alg:"ripemd160",prov:"cryptojs"});return e.digestString(t)},this.getCryptoJSMDByName=function(){}},KJUR.crypto.MessageDigest=function(params){var md=null,algName=null,provName=null;this.setAlgAndProvider=function(alg,prov){if(null!=alg&&void 0===prov&&(prov=KJUR.crypto.Util.DEFAULTPROVIDER[alg]),-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(alg)&&"cryptojs"==prov){try{this.md=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[alg]).create()}catch(ex){throw"setAlgAndProvider hash alg set fail alg="+alg+"/"+ex}this.updateString=function(t){this.md.update(t)},this.updateHex=function(t){var e=CryptoJS.enc.Hex.parse(t);this.md.update(e)},this.digest=function(){var t=this.md.finalize();return t.toString(CryptoJS.enc.Hex)},this.digestString=function(t){return this.updateString(t),this.digest()},this.digestHex=function(t){return this.updateHex(t),this.digest()}}if(-1!=":sha256:".indexOf(alg)&&"sjcl"==prov){try{this.md=new sjcl.hash.sha256}catch(ex){throw"setAlgAndProvider hash alg set fail alg="+alg+"/"+ex}this.updateString=function(t){this.md.update(t)},this.updateHex=function(t){var e=sjcl.codec.hex.toBits(t);this.md.update(e)},this.digest=function(){var t=this.md.finalize();return sjcl.codec.hex.fromBits(t)},this.digestString=function(t){return this.updateString(t),this.digest()},this.digestHex=function(t){return this.updateHex(t),this.digest()}}},this.updateString=function(){throw"updateString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.updateHex=function(){throw"updateHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digest=function(){throw"digest() not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digestString=function(){throw"digestString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digestHex=function(){throw"digestHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName},void 0!==params&&void 0!==params.alg&&(this.algName=params.alg,void 0===params.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName))},KJUR.crypto.Mac=function(params){var mac=null,pass=null,algName=null,provName=null,algProv=null;this.setAlgAndProvider=function(alg,prov){if(null==alg&&(alg="hmacsha1"),alg=alg.toLowerCase(),"hmac"!=alg.substr(0,4))throw"setAlgAndProvider unsupported HMAC alg: "+alg;void 0===prov&&(prov=KJUR.crypto.Util.DEFAULTPROVIDER[alg]),this.algProv=alg+"/"+prov;var hashAlg=alg.substr(4);if(-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(hashAlg)&&"cryptojs"==prov){try{var mdObj=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[hashAlg]);this.mac=CryptoJS.algo.HMAC.create(mdObj,this.pass)}catch(ex){throw"setAlgAndProvider hash alg set fail hashAlg="+hashAlg+"/"+ex}this.updateString=function(t){this.mac.update(t)},this.updateHex=function(t){var e=CryptoJS.enc.Hex.parse(t);this.mac.update(e)},this.doFinal=function(){var t=this.mac.finalize();return t.toString(CryptoJS.enc.Hex)},this.doFinalString=function(t){return this.updateString(t),this.doFinal()},this.doFinalHex=function(t){return this.updateHex(t),this.doFinal()}}},this.updateString=function(){throw"updateString(str) not supported for this alg/prov: "+this.algProv},this.updateHex=function(){throw"updateHex(hex) not supported for this alg/prov: "+this.algProv},this.doFinal=function(){throw"digest() not supported for this alg/prov: "+this.algProv},this.doFinalString=function(){throw"digestString(str) not supported for this alg/prov: "+this.algProv},this.doFinalHex=function(){throw"digestHex(hex) not supported for this alg/prov: "+this.algProv},void 0!==params&&(void 0!==params.pass&&(this.pass=params.pass),void 0!==params.alg&&(this.algName=params.alg,void 0===params.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName)))},KJUR.crypto.Signature=function(t){var e=null;if(this._setAlgNames=function(){this.algName.match(/^(.+)with(.+)$/)&&(this.mdAlgName=RegExp.$1.toLowerCase(),this.pubkeyAlgName=RegExp.$2.toLowerCase())},this._zeroPaddingOfSignature=function(t,e){for(var r="",n=e/4-t.length,i=0;n>i;i++)r+="0";return r+t},this.setAlgAndProvider=function(t,e){if(this._setAlgNames(),"cryptojs/jsrsa"!=e)throw"provider not supported: "+e;if(-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)){try{this.md=new KJUR.crypto.MessageDigest({alg:this.mdAlgName})}catch(r){throw"setAlgAndProvider hash alg set fail alg="+this.mdAlgName+"/"+r}this.init=function(t,e){var r=null;try{r=void 0===e?KEYUTIL.getKey(t):KEYUTIL.getKey(t,e)}catch(n){throw"init failed:"+n}if(r.isPrivate===!0)this.prvKey=r,this.state="SIGN";else{if(r.isPublic!==!0)throw"init failed.:"+r;this.pubKey=r,this.state="VERIFY"}},this.initSign=function(t){"string"==typeof t.ecprvhex&&"string"==typeof t.eccurvename?(this.ecprvhex=t.ecprvhex,this.eccurvename=t.eccurvename):this.prvKey=t,this.state="SIGN"},this.initVerifyByPublicKey=function(t){"string"==typeof t.ecpubhex&&"string"==typeof t.eccurvename?(this.ecpubhex=t.ecpubhex,this.eccurvename=t.eccurvename):t instanceof KJUR.crypto.ECDSA?this.pubKey=t:t instanceof RSAKey&&(this.pubKey=t),this.state="VERIFY"},this.initVerifyByCertificatePEM=function(t){var e=new X509;e.readCertPEM(t),this.pubKey=e.subjectPublicKeyRSA,this.state="VERIFY"},this.updateString=function(t){this.md.updateString(t)},this.updateHex=function(t){this.md.updateHex(t)},this.sign=function(){if(this.sHashHex=this.md.digest(),"undefined"!=typeof this.ecprvhex&&"undefined"!=typeof this.eccurvename){var t=new KJUR.crypto.ECDSA({curve:this.eccurvename});this.hSign=t.signHex(this.sHashHex,this.ecprvhex)}else if("rsaandmgf1"==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHashPSS(this.sHashHex,this.mdAlgName,this.pssSaltLen);else if("rsa"==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex,this.mdAlgName);else if(this.prvKey instanceof KJUR.crypto.ECDSA)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex);else{if(!(this.prvKey instanceof KJUR.crypto.DSA))throw"Signature: unsupported public key alg: "+this.pubkeyAlgName;this.hSign=this.prvKey.signWithMessageHash(this.sHashHex)}return this.hSign},this.signString=function(t){return this.updateString(t),this.sign()},this.signHex=function(t){return this.updateHex(t),this.sign()},this.verify=function(t){if(this.sHashHex=this.md.digest(),"undefined"!=typeof this.ecpubhex&&"undefined"!=typeof this.eccurvename){var e=new KJUR.crypto.ECDSA({curve:this.eccurvename});return e.verifyHex(this.sHashHex,t,this.ecpubhex)}if("rsaandmgf1"==this.pubkeyAlgName)return this.pubKey.verifyWithMessageHashPSS(this.sHashHex,t,this.mdAlgName,this.pssSaltLen);if("rsa"==this.pubkeyAlgName)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);if(this.pubKey instanceof KJUR.crypto.ECDSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);if(this.pubKey instanceof KJUR.crypto.DSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);throw"Signature: unsupported public key alg: "+this.pubkeyAlgName}}},this.init=function(){throw"init(key, pass) not supported for this alg:prov="+this.algProvName},this.initVerifyByPublicKey=function(){throw"initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov="+this.algProvName},this.initVerifyByCertificatePEM=function(){throw"initVerifyByCertificatePEM(certPEM) not supported for this alg:prov="+this.algProvName},this.initSign=function(){throw"initSign(prvKey) not supported for this alg:prov="+this.algProvName},this.updateString=function(){throw"updateString(str) not supported for this alg:prov="+this.algProvName},this.updateHex=function(){throw"updateHex(hex) not supported for this alg:prov="+this.algProvName},this.sign=function(){throw"sign() not supported for this alg:prov="+this.algProvName},this.signString=function(){throw"digestString(str) not supported for this alg:prov="+this.algProvName},this.signHex=function(){throw"digestHex(hex) not supported for this alg:prov="+this.algProvName},this.verify=function(){throw"verify(hSigVal) not supported for this alg:prov="+this.algProvName},this.initParams=t,void 0!==t&&(void 0!==t.alg&&(this.algName=t.alg,this.provName=void 0===t.prov?KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]:t.prov,this.algProvName=this.algName+":"+this.provName,this.setAlgAndProvider(this.algName,this.provName),this._setAlgNames()),void 0!==t.psssaltlen&&(this.pssSaltLen=t.psssaltlen),void 0!==t.prvkeypem)){if(void 0!==t.prvkeypas)throw"both prvkeypem and prvkeypas parameters not supported";try{var e=new RSAKey;e.readPrivateKeyFromPEMString(t.prvkeypem),this.initSign(e)}catch(r){throw"fatal error to load pem private key: "+r}}},KJUR.crypto.OID=new function(){this.oidhex2name={"2a864886f70d010101":"rsaEncryption","2a8648ce3d0201":"ecPublicKey","2a8648ce380401":"dsa","2a8648ce3d030107":"secp256r1","2b8104001f":"secp192k1","2b81040021":"secp224r1","2b8104000a":"secp256k1","2b81040023":"secp521r1","2b81040022":"secp384r1","2a8648ce380403":"SHA1withDSA","608648016503040301":"SHA224withDSA","608648016503040302":"SHA256withDSA"}};var utf8tob64u,b64utoutf8;"function"==typeof Buffer?(utf8tob64u=function(t){return b64tob64u(new Buffer(t,"utf8").toString("base64"))},b64utoutf8=function(t){return new Buffer(b64utob64(t),"base64").toString("utf8")}):(utf8tob64u=function(t){return hextob64u(uricmptohex(encodeURIComponentAll(t)))},b64utoutf8=function(t){return decodeURIComponent(hextouricmp(b64utohex(t)))});var jsonParse=function(){function t(t,e,r){return e?s[e]:String.fromCharCode(parseInt(r,16))}var e="(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)",r='(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',n='(?:"'+r+'*")',i=new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|"+e+"|"+n+")","g"),o=new RegExp("\\\\(?:([^u])|u(.{4}))","g"),s={'"':'"',"/":"/","\\":"\\",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"},a=new String(""),h="\\",u=({"{":Object,"[":Array},Object.hasOwnProperty);return function(e,r){var n,s=e.match(i),c=s[0],p=!1;"{"===c?n={}:"["===c?n=[]:(n=[],p=!0);for(var g,f=[n],l=1-p,d=s.length;d>l;++l){c=s[l];var y;switch(c.charCodeAt(0)){default:y=f[0],y[g||y.length]=+c,g=void 0;break;case 34:if(c=c.substring(1,c.length-1),-1!==c.indexOf(h)&&(c=c.replace(o,t)),y=f[0],!g){if(!(y instanceof Array)){g=c||a;break}g=y.length}y[g]=c,g=void 0;break;case 91:y=f[0],f.unshift(y[g||y.length]=[]),g=void 0;break;case 93:f.shift();break;case 102:y=f[0],y[g||y.length]=!1,g=void 0;break;case 110:y=f[0],y[g||y.length]=null,g=void 0;break;case 116:y=f[0],y[g||y.length]=!0,g=void 0;break;case 123:y=f[0],f.unshift(y[g||y.length]={}),g=void 0;break;case 125:f.shift()}}if(p){if(1!==f.length)throw new Error;n=n[0]}else if(f.length)throw new Error;if(r){var v=function(t,e){var n=t[e];if(n&&"object"==typeof n){var i=null;for(var o in n)if(u.call(n,o)&&n!==t){var s=v(n,o);void 0!==s?n[o]=s:(i||(i=[]),i.push(o))}if(i)for(var a=i.length;--a>=0;)delete n[i[a]]}return r.call(t,e,n)};n=v({"":n},"")}return n}}();"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.jws&&KJUR.jws||(KJUR.jws={}),KJUR.jws.JWS=function(){function t(t,e){return utf8tob64u(t)+"."+utf8tob64u(e)}function e(t){var e=t.alg,r="";if("RS256"!=e&&"RS512"!=e&&"PS256"!=e&&"PS512"!=e)throw"JWS signature algorithm not supported: "+e;return"256"==e.substr(2)&&(r="sha256"),"512"==e.substr(2)&&(r="sha512"),r}function r(t){return e(jsonParse(t))}function n(t,e,n,i,o,s){var a=new RSAKey;a.setPrivate(i,o,s);var h=r(t),u=a.signString(n,h);return u}function i(t,n,i,o,s){var a=null;a="undefined"==typeof s?r(t):e(s);var h="PS"==s.alg.substr(0,2);return o.hashAndSign?b64tob64u(o.hashAndSign(a,i,"binary","base64",h)):hextob64u(h?o.signStringPSS(i,a):o.signString(i,a))}function o(t,e,n,i){var o=new RSAKey;o.readPrivateKeyFromPEMString(i);var s=r(t),a=o.signString(n,s);return a}this.parseJWS=function(t,e){if(void 0===this.parsedJWS||!e&&void 0===this.parsedJWS.sigvalH){if(null==t.match(/^([^.]+)\.([^.]+)\.([^.]+)$/))throw"JWS signature is not a form of 'Head.Payload.SigValue'.";var r=RegExp.$1,n=RegExp.$2,i=RegExp.$3,o=r+"."+n;if(this.parsedJWS={},this.parsedJWS.headB64U=r,this.parsedJWS.payloadB64U=n,this.parsedJWS.sigvalB64U=i,this.parsedJWS.si=o,!e){var s=b64utohex(i),a=parseBigInt(s,16);this.parsedJWS.sigvalH=s,this.parsedJWS.sigvalBI=a}var h=b64utoutf8(r),u=b64utoutf8(n);if(this.parsedJWS.headS=h,this.parsedJWS.payloadS=u,!KJUR.jws.JWS.isSafeJSONString(h,this.parsedJWS,"headP"))throw"malformed JSON string for JWS Head: "+h}},this.verifyJWSByNE=function(t,e,r){return this.parseJWS(t),_rsasign_verifySignatureWithArgs(this.parsedJWS.si,this.parsedJWS.sigvalBI,e,r)},this.verifyJWSByKey=function(t,r){this.parseJWS(t);var n=e(this.parsedJWS.headP),i="PS"==this.parsedJWS.headP.alg.substr(0,2);return r.hashAndVerify?r.hashAndVerify(n,new Buffer(this.parsedJWS.si,"utf8").toString("base64"),b64utob64(this.parsedJWS.sigvalB64U),"base64",i):i?r.verifyStringPSS(this.parsedJWS.si,this.parsedJWS.sigvalH,n):r.verifyString(this.parsedJWS.si,this.parsedJWS.sigvalH)},this.verifyJWSByPemX509Cert=function(t,e){this.parseJWS(t);var r=new X509;return r.readCertPEM(e),r.subjectPublicKeyRSA.verifyString(this.parsedJWS.si,this.parsedJWS.sigvalH)},this.generateJWSByNED=function(e,r,i,o,s){if(!KJUR.jws.JWS.isSafeJSONString(e))throw"JWS Head is not safe JSON string: "+e;var a=t(e,r),h=n(e,r,a,i,o,s),u=hextob64u(h);return this.parsedJWS={},this.parsedJWS.headB64U=a.split(".")[0],this.parsedJWS.payloadB64U=a.split(".")[1],this.parsedJWS.sigvalB64U=u,a+"."+u},this.generateJWSByKey=function(e,r,n){var o={};if(!KJUR.jws.JWS.isSafeJSONString(e,o,"headP"))throw"JWS Head is not safe JSON string: "+e;var s=t(e,r),a=i(e,r,s,n,o.headP);return this.parsedJWS={},this.parsedJWS.headB64U=s.split(".")[0],this.parsedJWS.payloadB64U=s.split(".")[1],this.parsedJWS.sigvalB64U=a,s+"."+a},this.generateJWSByP1PrvKey=function(e,r,n){if(!KJUR.jws.JWS.isSafeJSONString(e))throw"JWS Head is not safe JSON string: "+e;var i=t(e,r),s=o(e,r,i,n),a=hextob64u(s);return this.parsedJWS={},this.parsedJWS.headB64U=i.split(".")[0],this.parsedJWS.payloadB64U=i.split(".")[1],this.parsedJWS.sigvalB64U=a,i+"."+a}},KJUR.jws.JWS.sign=function(t,e,r,n,i){var o=KJUR.jws.JWS;if(!o.isSafeJSONString(e))throw"JWS Head is not safe JSON string: "+sHead;var s=o.readSafeJSONString(e);""!=t&&null!=t||void 0===s.alg||(t=s.alg),""!=t&&null!=t&&void 0===s.alg&&(s.alg=t,e=JSON.stringify(s));var a=null;if(void 0===o.jwsalg2sigalg[t])throw"unsupported alg name: "+t;a=o.jwsalg2sigalg[t];var h=utf8tob64u(e),u=utf8tob64u(r),c=h+"."+u,p="";if("Hmac"==a.substr(0,4)){if(void 0===n)throw"hexadecimal key shall be specified for HMAC";var g=new KJUR.crypto.Mac({alg:a,pass:hextorstr(n)});g.updateString(c),p=g.doFinal()}else if(-1!=a.indexOf("withECDSA")){var f=new KJUR.crypto.Signature({alg:a});f.init(n,i),f.updateString(c),hASN1Sig=f.sign(),p=KJUR.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig)}else if("none"!=a){var f=new KJUR.crypto.Signature({alg:a});f.init(n,i),f.updateString(c),p=f.sign()}var l=hextob64u(p);return c+"."+l},KJUR.jws.JWS.verify=function(t,e){var r=KJUR.jws.JWS,n=t.split("."),i=n[0],o=n[1],s=i+"."+o,a=b64utohex(n[2]),h=r.readSafeJSONString(b64utoutf8(n[0])),u=null;if(void 0===h.alg)throw"algorithm not specified in header";u=h.alg;var c=null;if(void 0===r.jwsalg2sigalg[h.alg])throw"unsupported alg name: "+u;if(c=r.jwsalg2sigalg[u],"none"==c)return!0;if("Hmac"==c.substr(0,4)){if(void 0===e)throw"hexadecimal key shall be specified for HMAC";var p=new KJUR.crypto.Mac({alg:c,pass:hextorstr(e)});return p.updateString(s),hSig2=p.doFinal(),a==hSig2}if(-1!=c.indexOf("withECDSA")){var g=null;try{g=KJUR.crypto.ECDSA.concatSigToASN1Sig(a)}catch(f){return!1}var l=new KJUR.crypto.Signature({alg:c});return l.init(e),l.updateString(s),l.verify(g)}var l=new KJUR.crypto.Signature({alg:c});return l.init(e),l.updateString(s),l.verify(a)},KJUR.jws.JWS.jwsalg2sigalg={HS256:"HmacSHA256",HS512:"HmacSHA512",RS256:"SHA256withRSA",RS384:"SHA384withRSA",RS512:"SHA512withRSA",ES256:"SHA256withECDSA",ES384:"SHA384withECDSA",PS256:"SHA256withRSAandMGF1",PS384:"SHA384withRSAandMGF1",PS512:"SHA512withRSAandMGF1",none:"none"},KJUR.jws.JWS.isSafeJSONString=function(t,e,r){var n=null;try{return n=jsonParse(t),"object"!=typeof n?0:n.constructor===Array?0:(e&&(e[r]=n),1)}catch(i){return 0}},KJUR.jws.JWS.readSafeJSONString=function(t){var e=null;try{return e=jsonParse(t),"object"!=typeof e?null:e.constructor===Array?null:e}catch(r){return null}},KJUR.jws.JWS.getEncodedSignatureValueFromJWS=function(t){if(null==t.match(/^[^.]+\.[^.]+\.([^.]+)$/))throw"JWS signature is not a form of 'Head.Payload.SigValue'.";return RegExp.$1},KJUR.jws.IntDate=function(){},KJUR.jws.IntDate.get=function(t){if("now"==t)return KJUR.jws.IntDate.getNow();if("now + 1hour"==t)return KJUR.jws.IntDate.getNow()+3600;if("now + 1day"==t)return KJUR.jws.IntDate.getNow()+86400;if("now + 1month"==t)return KJUR.jws.IntDate.getNow()+2592e3;if("now + 1year"==t)return KJUR.jws.IntDate.getNow()+31536e3;if(t.match(/Z$/))return KJUR.jws.IntDate.getZulu(t);if(t.match(/^[0-9]+$/))return parseInt(t);throw"unsupported format: "+t},KJUR.jws.IntDate.getZulu=function(t){if(a=t.match(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/)){var e=parseInt(RegExp.$1),r=parseInt(RegExp.$2)-1,n=parseInt(RegExp.$3),i=parseInt(RegExp.$4),o=parseInt(RegExp.$5),s=parseInt(RegExp.$6),h=new Date(Date.UTC(e,r,n,i,o,s));return~~(h/1e3)}throw"unsupported format: "+t},KJUR.jws.IntDate.getNow=function(){var t=~~(new Date/1e3);return t},KJUR.jws.IntDate.intDate2UTCString=function(t){var e=new Date(1e3*t);return e.toUTCString()},KJUR.jws.IntDate.intDate2Zulu=function(t){var e=new Date(1e3*t),r=("0000"+e.getUTCFullYear()).slice(-4),n=("00"+(e.getUTCMonth()+1)).slice(-2),i=("00"+e.getUTCDate()).slice(-2),o=("00"+e.getUTCHours()).slice(-2),s=("00"+e.getUTCMinutes()).slice(-2),a=("00"+e.getUTCSeconds()).slice(-2);return r+n+i+o+s+a+"Z"},function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function r(t){return"object"==typeof t&&null!==t}function n(){}function i(){return function(){process.nextTick(h)}}function o(){var t=0,e=new j(h),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function s(){var t=new MessageChannel;return t.port1.onmessage=h,function(){t.port2.postMessage(0)}}function a(){return function(){setTimeout(h,1)}}function h(){for(var t=0;N>t;t+=2){var e=J[t],r=J[t+1];e(r),J[t]=void 0,J[t+1]=void 0}N=0}function u(){}function c(){return new TypeError("You cannot resolve a promise with itself")}function p(){return new TypeError("A promises callback cannot return that same promise.")}function g(t){try{return t.then}catch(e){return L.error=e,L}}function f(t,e,r,n){try{t.call(e,r,n)}catch(i){return i}}function l(t,e,r){C(function(t){var n=!1,i=f(r,e,function(r){n||(n=!0,e!==r?v(t,r):m(t,r))},function(e){n||(n=!0,b(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&i&&(n=!0,b(t,i))},t)}function d(t,e){e._state===U?m(t,e._result):t._state===F?b(t,e._result):_(e,void 0,function(e){v(t,e)},function(e){b(t,e)})}function y(t,r){if(r.constructor===t.constructor)d(t,r);else{var n=g(r);n===L?b(t,L.error):void 0===n?m(t,r):e(n)?l(t,r,n):m(t,r)}}function v(e,r){e===r?b(e,c()):t(r)?y(e,r):m(e,r)}function S(t){t._onerror&&t._onerror(t._result),A(t)}function m(t,e){t._state===K&&(t._result=e,t._state=U,0===t._subscribers.length||C(A,t))}function b(t,e){t._state===K&&(t._state=F,t._result=e,C(S,t))}function _(t,e,r,n){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+U]=r,i[o+F]=n,0===o&&t._state&&C(A,t)}function A(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n,i,o=t._result,s=0;s<e.length;s+=3)n=e[s],i=e[s+r],n?R(r,n,i,o):i(o);t._subscribers.length=0}}function w(){this.error=null}function x(t,e){try{return t(e)}catch(r){return W.error=r,W}}function R(t,r,n,i){var o,s,a,h,u=e(n);if(u){if(o=x(n,i),o===W?(h=!0,s=o.error,o=null):a=!0,r===o)return void b(r,p())}else o=i,a=!0;r._state!==K||(u&&a?v(r,o):h?b(r,s):t===U?m(r,o):t===F&&b(r,o))}function T(t,e){try{e(function(e){v(t,e)},function(e){b(t,e)})}catch(r){b(t,r)}}function H(t,e,r,n){this._instanceConstructor=t,this.promise=new t(u,n),this._abortOnReject=r,this._validateInput(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._init(),0===this.length?m(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&m(this.promise,this._result))):b(this.promise,this._validationError())}function I(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function B(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function E(t,r){this._id=Z++,this._label=r,this._state=void 0,this._result=void 0,this._subscribers=[],u!==t&&(e(t)||I(),this instanceof E||B(),T(this,t))}var P;P=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var O,k=P,N=(Date.now||function(){return(new Date).getTime()},Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return n.prototype=t,new n},0),C=function(t,e){J[N]=t,J[N+1]=e,N+=2,2===N&&O()},D="undefined"!=typeof window?window:{},j=D.MutationObserver||D.WebKitMutationObserver,M="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,J=new Array(1e3);O="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?i():j?o():M?s():a();var K=void 0,U=1,F=2,L=new w,W=new w;H.prototype._validateInput=function(t){return k(t)},H.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},H.prototype._init=function(){this._result=new Array(this.length)};var X=H;H.prototype._enumerate=function(){for(var t=this.length,e=this.promise,r=this._input,n=0;e._state===K&&t>n;n++)this._eachEntry(r[n],n)},H.prototype._eachEntry=function(t,e){var n=this._instanceConstructor;r(t)?t.constructor===n&&t._state!==K?(t._onerror=null,this._settledAt(t._state,e,t._result)):this._willSettleAt(n.resolve(t),e):(this._remaining--,this._result[e]=this._makeResult(U,e,t))},H.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===K&&(this._remaining--,this._abortOnReject&&t===F?b(n,r):this._result[e]=this._makeResult(t,e,r)),0===this._remaining&&m(n,this._result)},H.prototype._makeResult=function(t,e,r){return r},H.prototype._willSettleAt=function(t,e){var r=this;_(t,void 0,function(t){r._settledAt(U,e,t)},function(t){r._settledAt(F,e,t)})};var V=function(t,e){return new X(this,t,!0,e).promise},q=function(t,e){function r(t){v(o,t)}function n(t){b(o,t)}var i=this,o=new i(u,e);if(!k(t))return b(o,new TypeError("You must pass an array to race.")),o;for(var s=t.length,a=0;o._state===K&&s>a;a++)_(i.resolve(t[a]),void 0,r,n);return o},z=function(t,e){var r=this;if(t&&"object"==typeof t&&t.constructor===r)return t;var n=new r(u,e);return v(n,t),n},G=function(t,e){var r=this,n=new r(u,e);return b(n,t),n},Z=0,$=E;E.all=V,E.race=q,E.resolve=z,E.reject=G,E.prototype={constructor:E,then:function(t,e,r){var n=this,i=n._state;if(i===U&&!t||i===F&&!e)return this;n._onerror=null;var o=new this.constructor(u,r),s=n._result;if(i){var a=arguments[i-1];C(function(){R(i,o,a,s)})}else _(n,o,t,e);return o},"catch":function(t,e){return this.then(null,t,e)}};var Y=function(){var t;t="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;var r="Promise"in t&&"resolve"in t.Promise&&"reject"in t.Promise&&"all"in t.Promise&&"race"in t.Promise&&function(){var r;return new t.Promise(function(t){r=t}),e(r)}();r||(t.Promise=$)},Q={Promise:$,polyfill:Y};"function"==typeof define&&define.amd?define(function(){return Q}):"undefined"!=typeof module&&module.exports?module.exports=Q:"undefined"!=typeof this&&(this.ES6Promise=Q),window.Promise=window.Promise||this.ES6Promise.Promise}.call(this),_httpRequest=new DefaultHttpRequest,_promiseFactory=new DefaultPromiseFactory,OidcClient.prototype.loadMetadataAsync=function(){log("OidcClient.loadMetadataAsync");var t=this._settings;return t.metadata?_promiseFactory.resolve(t.metadata):t.authority?getJson(t.authority).then(function(e){return t.metadata=e,e},function(t){return error("Failed to load metadata ("+t.message+")")}):error("No authority configured")},OidcClient.prototype.loadX509SigningKeyAsync=function(){function t(t){if(!t.keys||!t.keys.length)return error("Signing keys empty");var e=t.keys[0];return"RSA"!==e.kty?error("Signing key not RSA"):e.x5c&&e.x5c.length?_promiseFactory.resolve(e.x5c[0]):error("RSA keys empty")}log("OidcClient.loadX509SigningKeyAsync");var e=this._settings;return e.jwks?t(e.jwks):this.loadMetadataAsync().then(function(r){return r.jwks_uri?getJson(r.jwks_uri).then(function(r){return e.jwks=r,t(r)},function(t){return error("Failed to load signing keys ("+t.message+")")}):error("Metadata does not contain jwks_uri")})},OidcClient.prototype.loadUserProfile=function(t){return log("OidcClient.loadUserProfile"),this.loadMetadataAsync().then(function(e){return e.userinfo_endpoint?getJson(e.userinfo_endpoint,t):_promiseFactory.reject(Error("Metadata does not contain userinfo_endpoint"))})},OidcClient.prototype.loadAuthorizationEndpoint=function(){return log("OidcClient.loadAuthorizationEndpoint"),this._settings.authorization_endpoint?_promiseFactory.resolve(this._settings.authorization_endpoint):this._settings.authority?this.loadMetadataAsync().then(function(t){return t.authorization_endpoint?t.authorization_endpoint:error("Metadata does not contain authorization_endpoint")}):error("No authorization_endpoint configured")},OidcClient.prototype.createTokenRequestAsync=function(){log("OidcClient.createTokenRequestAsync");var t=this,e=t._settings;return t.loadAuthorizationEndpoint().then(function(r){var n=rand(),i=r+"?state="+encodeURIComponent(n);if(t.isOidc){var o=rand();i+="&nonce="+encodeURIComponent(o)}var s=["client_id","redirect_uri","response_type","scope"];s.forEach(function(t){var r=e[t];r&&(i+="&"+t+"="+encodeURIComponent(r))});var a=["prompt","display","max_age","ui_locales","id_token_hint","login_hint","acr_values"];a.forEach(function(t){var r=e[t];r&&(i+="&"+t+"="+encodeURIComponent(r))});var h={oidc:t.isOidc,oauth:t.isOAuth,state:n};return o&&(h.nonce=o),e.request_state_store.setItem(e.request_state_key,JSON.stringify(h)),{request_state:h,url:i}})},OidcClient.prototype.createLogoutRequestAsync=function(t){log("OidcClient.createLogoutRequestAsync");var e=this._settings;return this.loadMetadataAsync().then(function(r){if(!r.end_session_endpoint)return error("No end_session_endpoint in metadata");var n=r.end_session_endpoint;return t&&e.post_logout_redirect_uri&&(n+="?post_logout_redirect_uri="+encodeURIComponent(e.post_logout_redirect_uri),n+="&id_token_hint="+encodeURIComponent(t)),n})},OidcClient.prototype.validateIdTokenAsync=function(t,e,r){log("OidcClient.validateIdTokenAsync");var n=this,i=n._settings;return n.loadX509SigningKeyAsync().then(function(o){var s=new KJUR.jws.JWS;if(s.verifyJWSByPemX509Cert(t,o)){var a=JSON.parse(s.parsedJWS.payloadS);return e!==a.nonce?error("Invalid nonce"):n.loadMetadataAsync().then(function(t){if(a.iss!==t.issuer)return error("Invalid issuer");if(a.aud!==i.client_id)return error("Invalid audience");var e=parseInt(Date.now()/1e3),o=e-a.iat;return o>300?error("Token issued too long ago"):a.exp<e?error("Token expired"):r&&i.load_user_profile?n.loadUserProfile(r,a).then(function(t){return copy(t,a)}):a})}return error("JWT failed to validate")})},OidcClient.prototype.validateAccessTokenAsync=function(t,e){if(log("OidcClient.validateAccessTokenAsync"),!t.at_hash)return error("No at_hash in id_token");var r=KJUR.crypto.Util.sha256(e),n=r.substr(0,r.length/2),i=hextob64u(n);return i!==t.at_hash?error("at_hash failed to validate"):_promiseFactory.resolve()},OidcClient.prototype.validateIdTokenAndAccessTokenAsync=function(t,e,r){log("OidcClient.validateIdTokenAndAccessTokenAsync");var n=this;return n.validateIdTokenAsync(t,e,r).then(function(t){return n.validateAccessTokenAsync(t,r).then(function(){return t})})},OidcClient.prototype.processResponseAsync=function(t){log("OidcClient.processResponseAsync");var e=this,r=e._settings,n=r.request_state_store.getItem(r.request_state_key);if(r.request_state_store.removeItem(r.request_state_key),!n)return error("No request state loaded");if(n=JSON.parse(n),!n)return error("No request state loaded");if(!n.state)return error("No state loaded");var i=parseOidcResult(t);if(!i)return error("No OIDC response");if(i.error)return error(i.error);if(i.state!==n.state)return error("Invalid state");if(n.oidc){if(!i.id_token)return error("No identity token");if(!n.nonce)return error("No nonce loaded")}if(n.oauth){if(!i.access_token)return error("No access token");if(!i.token_type||"bearer"!==i.token_type.toLowerCase())return error("Invalid token type");if(!i.expires_in)return error("No token expiration")}var o=_promiseFactory.resolve();return n.oidc&&n.oauth?o=e.validateIdTokenAndAccessTokenAsync(i.id_token,n.nonce,i.access_token):n.oidc&&(o=e.validateIdTokenAsync(i.id_token,n.nonce)),o.then(function(t){if(t&&r.filter_protocol_claims){var e=["nonce","at_hash","iat","nbf","exp","aud","iss","idp"];e.forEach(function(e){delete t[e]})}return{profile:t,id_token:i.id_token,access_token:i.access_token,expires_in:i.expires_in,scope:i.scope,session_state:i.session_state}})},window.OidcClient=OidcClient}();var _httpRequest=new DefaultHttpRequest,_promiseFactory=new DefaultPromiseFactory;Token.fromResponse=function(t){if(t.access_token){var e=parseInt(Date.now()/1e3);t.expires_at=e+parseInt(t.expires_in)}return new Token(t)},Token.fromJSON=function(t){if(t)try{var e=JSON.parse(t);return new Token(e)}catch(r){}return new Token(null)},Token.prototype.toJSON=function(){return JSON.stringify({profile:this.profile,id_token:this.id_token,access_token:this.access_token,expires_at:this.expires_at,scope:this.scopes.join(" "),session_state:this.session_state})},FrameLoader.prototype.loadAsync=function(t){return t=t||this.url,t?_promiseFactory.create(function(e,r){function n(){window.removeEventListener("message",o,!1),a&&window.clearTimeout(a),a=null,window.document.body.removeChild(s)}function i(){n(),r()}function o(t){a&&t.origin===location.protocol+"//"+location.host&&t.source==s.contentWindow&&(n(),e(t.data))}var s=window.document.createElement("iframe");s.style.display="none";var a=window.setTimeout(i,5e3);window.addEventListener("message",o,!1),window.document.body.appendChild(s),s.src=t
}):_promiseFactory.reject("No url provided")},TokenManager.setPromiseFactory=function(t){_promiseFactory=t},TokenManager.setHttpRequest=function(t){if("object"!=typeof t||"function"!=typeof t.getJSON)throw Error("The provided value is not a valid http request.");_httpRequest=t},TokenManager.prototype._callTokenRemoved=function(){this._callbacks.tokenRemovedCallbacks.forEach(function(t){t()})},TokenManager.prototype._callTokenExpiring=function(){this._callbacks.tokenExpiringCallbacks.forEach(function(t){t()})},TokenManager.prototype._callTokenExpired=function(){this._callbacks.tokenExpiredCallbacks.forEach(function(t){t()})},TokenManager.prototype._callTokenObtained=function(){this._callbacks.tokenObtainedCallbacks.forEach(function(t){t()})},TokenManager.prototype._callSilentTokenRenewFailed=function(){this._callbacks.silentTokenRenewFailedCallbacks.forEach(function(t){t()})},TokenManager.prototype.saveToken=function(t){!t||t instanceof Token||(t=Token.fromResponse(t)),this._token=t,this._settings.persist&&!this.expired?this._settings.store.setItem(this._settings.persistKey,t.toJSON()):this._settings.store.removeItem(this._settings.persistKey),t?this._callTokenObtained():this._callTokenRemoved()},TokenManager.prototype.addOnTokenRemoved=function(t){this._callbacks.tokenRemovedCallbacks.push(t)},TokenManager.prototype.addOnTokenObtained=function(t){this._callbacks.tokenObtainedCallbacks.push(t)},TokenManager.prototype.addOnTokenExpiring=function(t){this._callbacks.tokenExpiringCallbacks.push(t)},TokenManager.prototype.addOnTokenExpired=function(t){this._callbacks.tokenExpiredCallbacks.push(t)},TokenManager.prototype.addOnSilentTokenRenewFailed=function(t){this._callbacks.silentTokenRenewFailedCallbacks.push(t)},TokenManager.prototype.removeToken=function(){this.saveToken(null)},TokenManager.prototype.redirectForToken=function(){var t=this.oidcClient;t.createTokenRequestAsync().then(function(t){window.location=t.url},function(t){console.error("TokenManager.redirectForToken error: "+(t&&t.message||t||""))})},TokenManager.prototype.redirectForLogout=function(){var t=this;t.oidcClient.createLogoutRequestAsync(t.id_token).then(function(e){t.removeToken(),window.location=e},function(t){console.error("TokenManager.redirectForLogout error: "+(t&&t.message||t||""))})},TokenManager.prototype.processTokenCallbackAsync=function(t){var e=this;return e.oidcClient.processResponseAsync(t).then(function(t){e.saveToken(t)})},TokenManager.prototype.renewTokenSilentAsync=function(){var t=this;if(!t._settings.silent_redirect_uri)return _promiseFactory.reject("silent_redirect_uri not configured");var e=copy(t._settings);e.redirect_uri=e.silent_redirect_uri,e.prompt="none";var r=new OidcClient(e);return r.createTokenRequestAsync().then(function(e){var n=new FrameLoader(e.url);return n.loadAsync().then(function(e){return r.processResponseAsync(e).then(function(e){t.saveToken(e)})})})},TokenManager.prototype.processTokenCallbackSilent=function(t){if(window.parent&&window!==window.parent){var t=t||window.location.hash;t&&window.parent.postMessage(t,location.protocol+"//"+location.host)}},window.OidcTokenManager=TokenManager}();
/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-2 as well as the corresponding HMAC implementation
 as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2015
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
*/
'use strict';(function(T){function y(c,a,d){var b=0,f=[],k=0,g,e,n,h,m,u,r,p=!1,q=!1,t=[],v=[],x,w=!1;d=d||{};g=d.encoding||"UTF8";x=d.numRounds||1;n=J(a,g);if(x!==parseInt(x,10)||1>x)throw Error("numRounds must a integer >= 1");if("SHA-1"===c)m=512,u=K,r=U,h=160;else if(u=function(a,d){return L(a,d,c)},r=function(a,d,b,f){var k,e;if("SHA-224"===c||"SHA-256"===c)k=(d+65>>>9<<4)+15,e=16;else if("SHA-384"===c||"SHA-512"===c)k=(d+129>>>10<<5)+31,e=32;else throw Error("Unexpected error in SHA-2 implementation");
for(;a.length<=k;)a.push(0);a[d>>>5]|=128<<24-d%32;a[k]=d+b;b=a.length;for(d=0;d<b;d+=e)f=L(a.slice(d,d+e),f,c);if("SHA-224"===c)a=[f[0],f[1],f[2],f[3],f[4],f[5],f[6]];else if("SHA-256"===c)a=f;else if("SHA-384"===c)a=[f[0].a,f[0].b,f[1].a,f[1].b,f[2].a,f[2].b,f[3].a,f[3].b,f[4].a,f[4].b,f[5].a,f[5].b];else if("SHA-512"===c)a=[f[0].a,f[0].b,f[1].a,f[1].b,f[2].a,f[2].b,f[3].a,f[3].b,f[4].a,f[4].b,f[5].a,f[5].b,f[6].a,f[6].b,f[7].a,f[7].b];else throw Error("Unexpected error in SHA-2 implementation");
return a},"SHA-224"===c)m=512,h=224;else if("SHA-256"===c)m=512,h=256;else if("SHA-384"===c)m=1024,h=384;else if("SHA-512"===c)m=1024,h=512;else throw Error("Chosen SHA variant is not supported");e=z(c);this.setHMACKey=function(a,d,f){var k;if(!0===q)throw Error("HMAC key already set");if(!0===p)throw Error("Cannot set HMAC key after finalizing hash");if(!0===w)throw Error("Cannot set HMAC key after calling update");g=(f||{}).encoding||"UTF8";d=J(d,g)(a);a=d.binLen;d=d.value;k=m>>>3;f=k/4-1;if(k<
a/8){for(d=r(d,a,0,z(c));d.length<=f;)d.push(0);d[f]&=4294967040}else if(k>a/8){for(;d.length<=f;)d.push(0);d[f]&=4294967040}for(a=0;a<=f;a+=1)t[a]=d[a]^909522486,v[a]=d[a]^1549556828;e=u(t,e);b=m;q=!0};this.update=function(a){var c,d,g,h=0,p=m>>>5;c=n(a,f,k);a=c.binLen;d=c.value;c=a>>>5;for(g=0;g<c;g+=p)h+m<=a&&(e=u(d.slice(g,g+p),e),h+=m);b+=h;f=d.slice(h>>>5);k=a%m;w=!0};this.getHash=function(a,d){var g,m,n;if(!0===q)throw Error("Cannot call getHash after setting HMAC key");n=M(d);switch(a){case "HEX":g=
function(a){return N(a,n)};break;case "B64":g=function(a){return O(a,n)};break;case "BYTES":g=P;break;default:throw Error("format must be HEX, B64, or BYTES");}if(!1===p)for(e=r(f,k,b,e),m=1;m<x;m+=1)e=r(e,h,0,z(c));p=!0;return g(e)};this.getHMAC=function(a,d){var g,n,t;if(!1===q)throw Error("Cannot call getHMAC without first setting HMAC key");t=M(d);switch(a){case "HEX":g=function(a){return N(a,t)};break;case "B64":g=function(a){return O(a,t)};break;case "BYTES":g=P;break;default:throw Error("outputFormat must be HEX, B64, or BYTES");
}!1===p&&(n=r(f,k,b,e),e=u(v,z(c)),e=r(n,h,m,e));p=!0;return g(e)}}function b(c,a){this.a=c;this.b=a}function V(c,a,d){var b=c.length,f,k,e,l,n;a=a||[0];d=d||0;n=d>>>3;if(0!==b%2)throw Error("String of HEX type must be in byte increments");for(f=0;f<b;f+=2){k=parseInt(c.substr(f,2),16);if(isNaN(k))throw Error("String of HEX type contains invalid characters");l=(f>>>1)+n;for(e=l>>>2;a.length<=e;)a.push(0);a[e]|=k<<8*(3-l%4)}return{value:a,binLen:4*b+d}}function W(c,a,d){var b=[],f,k,e,l,b=a||[0];d=
d||0;k=d>>>3;for(f=0;f<c.length;f+=1)a=c.charCodeAt(f),l=f+k,e=l>>>2,b.length<=e&&b.push(0),b[e]|=a<<8*(3-l%4);return{value:b,binLen:8*c.length+d}}function X(c,a,d){var b=[],f=0,e,g,l,n,h,m,b=a||[0];d=d||0;a=d>>>3;if(-1===c.search(/^[a-zA-Z0-9=+\/]+$/))throw Error("Invalid character in base-64 string");g=c.indexOf("=");c=c.replace(/\=/g,"");if(-1!==g&&g<c.length)throw Error("Invalid '=' found in base-64 string");for(g=0;g<c.length;g+=4){h=c.substr(g,4);for(l=n=0;l<h.length;l+=1)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(h[l]),
n|=e<<18-6*l;for(l=0;l<h.length-1;l+=1){m=f+a;for(e=m>>>2;b.length<=e;)b.push(0);b[e]|=(n>>>16-8*l&255)<<8*(3-m%4);f+=1}}return{value:b,binLen:8*f+d}}function N(c,a){var d="",b=4*c.length,f,e;for(f=0;f<b;f+=1)e=c[f>>>2]>>>8*(3-f%4),d+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(e&15);return a.outputUpper?d.toUpperCase():d}function O(c,a){var d="",b=4*c.length,f,e,g;for(f=0;f<b;f+=3)for(g=f+1>>>2,e=c.length<=g?0:c[g],g=f+2>>>2,g=c.length<=g?0:c[g],g=(c[f>>>2]>>>8*(3-f%4)&255)<<16|
(e>>>8*(3-(f+1)%4)&255)<<8|g>>>8*(3-(f+2)%4)&255,e=0;4>e;e+=1)8*f+6*e<=32*c.length?d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(g>>>6*(3-e)&63):d+=a.b64Pad;return d}function P(c){var a="",d=4*c.length,b,f;for(b=0;b<d;b+=1)f=c[b>>>2]>>>8*(3-b%4)&255,a+=String.fromCharCode(f);return a}function M(c){var a={outputUpper:!1,b64Pad:"="};c=c||{};a.outputUpper=c.outputUpper||!1;a.b64Pad=c.b64Pad||"=";if("boolean"!==typeof a.outputUpper)throw Error("Invalid outputUpper formatting option");
if("string"!==typeof a.b64Pad)throw Error("Invalid b64Pad formatting option");return a}function J(c,a){var d;switch(a){case "UTF8":case "UTF16BE":case "UTF16LE":break;default:throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");}switch(c){case "HEX":d=V;break;case "TEXT":d=function(c,d,b){var e=[],l=[],n=0,h,m,u,r,p,e=d||[0];d=b||0;u=d>>>3;if("UTF8"===a)for(h=0;h<c.length;h+=1)for(b=c.charCodeAt(h),l=[],128>b?l.push(b):2048>b?(l.push(192|b>>>6),l.push(128|b&63)):55296>b||57344<=b?l.push(224|
b>>>12,128|b>>>6&63,128|b&63):(h+=1,b=65536+((b&1023)<<10|c.charCodeAt(h)&1023),l.push(240|b>>>18,128|b>>>12&63,128|b>>>6&63,128|b&63)),m=0;m<l.length;m+=1){p=n+u;for(r=p>>>2;e.length<=r;)e.push(0);e[r]|=l[m]<<8*(3-p%4);n+=1}else if("UTF16BE"===a||"UTF16LE"===a)for(h=0;h<c.length;h+=1){b=c.charCodeAt(h);"UTF16LE"===a&&(m=b&255,b=m<<8|b>>>8);p=n+u;for(r=p>>>2;e.length<=r;)e.push(0);e[r]|=b<<8*(2-p%4);n+=2}return{value:e,binLen:8*n+d}};break;case "B64":d=X;break;case "BYTES":d=W;break;default:throw Error("format must be HEX, TEXT, B64, or BYTES");
}return d}function w(c,a){return c<<a|c>>>32-a}function q(c,a){return c>>>a|c<<32-a}function v(c,a){var d=null,d=new b(c.a,c.b);return d=32>=a?new b(d.a>>>a|d.b<<32-a&4294967295,d.b>>>a|d.a<<32-a&4294967295):new b(d.b>>>a-32|d.a<<64-a&4294967295,d.a>>>a-32|d.b<<64-a&4294967295)}function Q(c,a){var d=null;return d=32>=a?new b(c.a>>>a,c.b>>>a|c.a<<32-a&4294967295):new b(0,c.a>>>a-32)}function Y(c,a,d){return c&a^~c&d}function Z(c,a,d){return new b(c.a&a.a^~c.a&d.a,c.b&a.b^~c.b&d.b)}function R(c,a,d){return c&
a^c&d^a&d}function aa(c,a,d){return new b(c.a&a.a^c.a&d.a^a.a&d.a,c.b&a.b^c.b&d.b^a.b&d.b)}function ba(c){return q(c,2)^q(c,13)^q(c,22)}function ca(c){var a=v(c,28),d=v(c,34);c=v(c,39);return new b(a.a^d.a^c.a,a.b^d.b^c.b)}function da(c){return q(c,6)^q(c,11)^q(c,25)}function ea(c){var a=v(c,14),d=v(c,18);c=v(c,41);return new b(a.a^d.a^c.a,a.b^d.b^c.b)}function fa(c){return q(c,7)^q(c,18)^c>>>3}function ga(c){var a=v(c,1),d=v(c,8);c=Q(c,7);return new b(a.a^d.a^c.a,a.b^d.b^c.b)}function ha(c){return q(c,
17)^q(c,19)^c>>>10}function ia(c){var a=v(c,19),d=v(c,61);c=Q(c,6);return new b(a.a^d.a^c.a,a.b^d.b^c.b)}function B(c,a){var d=(c&65535)+(a&65535);return((c>>>16)+(a>>>16)+(d>>>16)&65535)<<16|d&65535}function ja(c,a,d,b){var f=(c&65535)+(a&65535)+(d&65535)+(b&65535);return((c>>>16)+(a>>>16)+(d>>>16)+(b>>>16)+(f>>>16)&65535)<<16|f&65535}function C(c,a,d,b,f){var e=(c&65535)+(a&65535)+(d&65535)+(b&65535)+(f&65535);return((c>>>16)+(a>>>16)+(d>>>16)+(b>>>16)+(f>>>16)+(e>>>16)&65535)<<16|e&65535}function ka(c,
a){var d,e,f;d=(c.b&65535)+(a.b&65535);e=(c.b>>>16)+(a.b>>>16)+(d>>>16);f=(e&65535)<<16|d&65535;d=(c.a&65535)+(a.a&65535)+(e>>>16);e=(c.a>>>16)+(a.a>>>16)+(d>>>16);return new b((e&65535)<<16|d&65535,f)}function la(c,a,d,e){var f,k,g;f=(c.b&65535)+(a.b&65535)+(d.b&65535)+(e.b&65535);k=(c.b>>>16)+(a.b>>>16)+(d.b>>>16)+(e.b>>>16)+(f>>>16);g=(k&65535)<<16|f&65535;f=(c.a&65535)+(a.a&65535)+(d.a&65535)+(e.a&65535)+(k>>>16);k=(c.a>>>16)+(a.a>>>16)+(d.a>>>16)+(e.a>>>16)+(f>>>16);return new b((k&65535)<<16|
f&65535,g)}function ma(c,a,d,e,f){var k,g,l;k=(c.b&65535)+(a.b&65535)+(d.b&65535)+(e.b&65535)+(f.b&65535);g=(c.b>>>16)+(a.b>>>16)+(d.b>>>16)+(e.b>>>16)+(f.b>>>16)+(k>>>16);l=(g&65535)<<16|k&65535;k=(c.a&65535)+(a.a&65535)+(d.a&65535)+(e.a&65535)+(f.a&65535)+(g>>>16);g=(c.a>>>16)+(a.a>>>16)+(d.a>>>16)+(e.a>>>16)+(f.a>>>16)+(k>>>16);return new b((g&65535)<<16|k&65535,l)}function z(c){var a,d;if("SHA-1"===c)c=[1732584193,4023233417,2562383102,271733878,3285377520];else switch(a=[3238371032,914150663,
812702999,4144912697,4290775857,1750603025,1694076839,3204075428],d=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],c){case "SHA-224":c=a;break;case "SHA-256":c=d;break;case "SHA-384":c=[new b(3418070365,a[0]),new b(1654270250,a[1]),new b(2438529370,a[2]),new b(355462360,a[3]),new b(1731405415,a[4]),new b(41048885895,a[5]),new b(3675008525,a[6]),new b(1203062813,a[7])];break;case "SHA-512":c=[new b(d[0],4089235720),new b(d[1],2227873595),new b(d[2],4271175723),
new b(d[3],1595750129),new b(d[4],2917565137),new b(d[5],725511199),new b(d[6],4215389547),new b(d[7],327033209)];break;default:throw Error("Unknown SHA variant");}return c}function K(c,a){var d=[],b,e,k,g,l,n,h;b=a[0];e=a[1];k=a[2];g=a[3];l=a[4];for(h=0;80>h;h+=1)d[h]=16>h?c[h]:w(d[h-3]^d[h-8]^d[h-14]^d[h-16],1),n=20>h?C(w(b,5),e&k^~e&g,l,1518500249,d[h]):40>h?C(w(b,5),e^k^g,l,1859775393,d[h]):60>h?C(w(b,5),R(e,k,g),l,2400959708,d[h]):C(w(b,5),e^k^g,l,3395469782,d[h]),l=g,g=k,k=w(e,30),e=b,b=n;a[0]=
B(b,a[0]);a[1]=B(e,a[1]);a[2]=B(k,a[2]);a[3]=B(g,a[3]);a[4]=B(l,a[4]);return a}function U(c,a,b,e){var f;for(f=(a+65>>>9<<4)+15;c.length<=f;)c.push(0);c[a>>>5]|=128<<24-a%32;c[f]=a+b;b=c.length;for(a=0;a<b;a+=16)e=K(c.slice(a,a+16),e);return e}function L(c,a,d){var q,f,k,g,l,n,h,m,u,r,p,v,t,w,x,y,z,D,E,F,G,H,A=[],I;if("SHA-224"===d||"SHA-256"===d)r=64,v=1,H=Number,t=B,w=ja,x=C,y=fa,z=ha,D=ba,E=da,G=R,F=Y,I=e;else if("SHA-384"===d||"SHA-512"===d)r=80,v=2,H=b,t=ka,w=la,x=ma,y=ga,z=ia,D=ca,E=ea,G=aa,
F=Z,I=S;else throw Error("Unexpected error in SHA-2 implementation");d=a[0];q=a[1];f=a[2];k=a[3];g=a[4];l=a[5];n=a[6];h=a[7];for(p=0;p<r;p+=1)16>p?(u=p*v,m=c.length<=u?0:c[u],u=c.length<=u+1?0:c[u+1],A[p]=new H(m,u)):A[p]=w(z(A[p-2]),A[p-7],y(A[p-15]),A[p-16]),m=x(h,E(g),F(g,l,n),I[p],A[p]),u=t(D(d),G(d,q,f)),h=n,n=l,l=g,g=t(k,m),k=f,f=q,q=d,d=t(m,u);a[0]=t(d,a[0]);a[1]=t(q,a[1]);a[2]=t(f,a[2]);a[3]=t(k,a[3]);a[4]=t(g,a[4]);a[5]=t(l,a[5]);a[6]=t(n,a[6]);a[7]=t(h,a[7]);return a}var e,S;e=[1116352408,
1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,
430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];S=[new b(e[0],3609767458),new b(e[1],602891725),new b(e[2],3964484399),new b(e[3],2173295548),new b(e[4],4081628472),new b(e[5],3053834265),new b(e[6],2937671579),new b(e[7],3664609560),new b(e[8],2734883394),new b(e[9],1164996542),new b(e[10],1323610764),new b(e[11],3590304994),new b(e[12],4068182383),new b(e[13],991336113),new b(e[14],
633803317),new b(e[15],3479774868),new b(e[16],2666613458),new b(e[17],944711139),new b(e[18],2341262773),new b(e[19],2007800933),new b(e[20],1495990901),new b(e[21],1856431235),new b(e[22],3175218132),new b(e[23],2198950837),new b(e[24],3999719339),new b(e[25],766784016),new b(e[26],2566594879),new b(e[27],3203337956),new b(e[28],1034457026),new b(e[29],2466948901),new b(e[30],3758326383),new b(e[31],168717936),new b(e[32],1188179964),new b(e[33],1546045734),new b(e[34],1522805485),new b(e[35],2643833823),
new b(e[36],2343527390),new b(e[37],1014477480),new b(e[38],1206759142),new b(e[39],344077627),new b(e[40],1290863460),new b(e[41],3158454273),new b(e[42],3505952657),new b(e[43],106217008),new b(e[44],3606008344),new b(e[45],1432725776),new b(e[46],1467031594),new b(e[47],851169720),new b(e[48],3100823752),new b(e[49],1363258195),new b(e[50],3750685593),new b(e[51],3785050280),new b(e[52],3318307427),new b(e[53],3812723403),new b(e[54],2003034995),new b(e[55],3602036899),new b(e[56],1575990012),
new b(e[57],1125592928),new b(e[58],2716904306),new b(e[59],442776044),new b(e[60],593698344),new b(e[61],3733110249),new b(e[62],2999351573),new b(e[63],3815920427),new b(3391569614,3928383900),new b(3515267271,566280711),new b(3940187606,3454069534),new b(4118630271,4000239992),new b(116418474,1914138554),new b(174292421,2731055270),new b(289380356,3203993006),new b(460393269,320620315),new b(685471733,587496836),new b(852142971,1086792851),new b(1017036298,365543100),new b(1126000580,2618297676),
new b(1288033470,3409855158),new b(1501505948,4234509866),new b(1607167915,987167468),new b(1816402316,1246189591)];"function"===typeof define&&define.amd?define(function(){return y}):"undefined"!==typeof exports?"undefined"!==typeof module&&module.exports?module.exports=exports=y:exports=y:T.jsSHA=y})(this);

//! moment.js
//! version : 2.12.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

; (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () {
    'use strict';

    var hookCallback;

    function utils_hooks__hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid(flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    function isUndefined(input) {
        return input === void 0;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
                (typeof console !== 'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function isObject(input) {
        return Object.prototype.toString.call(input) === '[object Object]';
    }

    function locale_set__set(config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    // internal storage for locale config files
    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale');
                config = mergeConfigs(locales[name]._config, config);
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    config = mergeConfigs(locales[config.parentLocale]._config, config);
                } else {
                    // treat as if there is no base config
                    deprecateSimple('parentLocaleUndefined',
                            'specified parentLocale is not defined yet');
                }
            }
            locales[name] = new Locale(config);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale;
            if (locales[name] != null) {
                config = mergeConfigs(locales[name]._config, config);
            }
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function locale_locales__getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function locale_locales__listLocales() {
        return Object.keys(locales);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get(mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function get_set__set(mom, unit, value) {
        if (mom.isValid()) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    // MOMENTS

    function getSet(units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1 = /\d/;            //       0 - 9
    var match2 = /\d\d/;          //      00 - 99
    var match3 = /\d{3}/;         //     000 - 999
    var match4 = /\d{4}/;         //    0000 - 9999
    var match6 = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2 = /\d\d?/;         //       0 - 99
    var match3to4 = /\d\d\d\d?/;     //     999 - 9999
    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3 = /\d{1,3}/;       //       0 - 999
    var match1to4 = /\d{1,4}/;       //       0 - 9999
    var match1to6 = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned = /\d+/;           //       0 - inf
    var matchSigned = /[+-]?\d+/;      //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths(m, format) {
        return isArray(this._months) ? this._months[m.month()] :
            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort(m, format) {
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (typeof value !== 'number') {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')$', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')$', 'i');
    }

    function checkOverflow(m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        //the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(utils_hooks__hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    utils_hooks__hooks.ISO_8601 = function () { };

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        if (!valid__isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date(utils_hooks__hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof (input) === 'object') {
            configFromObject(config);
        } else if (typeof (input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof (locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             if (this.isValid() && other.isValid()) {
                 return other < this ? this : other;
             } else {
                 return valid__createInvalid();
             }
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return valid__createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = ((string || '').match(matcher) || []);
        var chunk = matches[matches.length - 1] || [];
        var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () { };

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
            } else if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(matchOffset, this._i));
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;

    function create__createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = { milliseconds: 0, months: 0 };

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar(time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return +this > +localInput;
        } else {
            return +localInput < +this.clone().startOf(units);
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return +this < +localInput;
        } else {
            return +this.clone().endOf(units) < +localInput;
        }
    }

    function isBetween(from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return +this === +localInput;
        } else {
            inputMs = +localInput;
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that,
            zoneDelta,
            delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString() {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format(inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    function startOf(units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf(units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf() {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix() {
        return Math.floor(+this / 1000);
    }

    function toDate() {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function moment_valid__isValid() {
        return valid__isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', matchWord);
    addRegexToken('ddd', matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays(m, format) {
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort(m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin(m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = local__createLocal([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add = add_subtract__add;
    momentPrototype__proto.calendar = moment_calendar__calendar;
    momentPrototype__proto.clone = clone;
    momentPrototype__proto.diff = diff;
    momentPrototype__proto.endOf = endOf;
    momentPrototype__proto.format = format;
    momentPrototype__proto.from = from;
    momentPrototype__proto.fromNow = fromNow;
    momentPrototype__proto.to = to;
    momentPrototype__proto.toNow = toNow;
    momentPrototype__proto.get = getSet;
    momentPrototype__proto.invalidAt = invalidAt;
    momentPrototype__proto.isAfter = isAfter;
    momentPrototype__proto.isBefore = isBefore;
    momentPrototype__proto.isBetween = isBetween;
    momentPrototype__proto.isSame = isSame;
    momentPrototype__proto.isSameOrAfter = isSameOrAfter;
    momentPrototype__proto.isSameOrBefore = isSameOrBefore;
    momentPrototype__proto.isValid = moment_valid__isValid;
    momentPrototype__proto.lang = lang;
    momentPrototype__proto.locale = locale;
    momentPrototype__proto.localeData = localeData;
    momentPrototype__proto.max = prototypeMax;
    momentPrototype__proto.min = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set = getSet;
    momentPrototype__proto.startOf = startOf;
    momentPrototype__proto.subtract = add_subtract__subtract;
    momentPrototype__proto.toArray = toArray;
    momentPrototype__proto.toObject = toObject;
    momentPrototype__proto.toDate = toDate;
    momentPrototype__proto.toISOString = moment_format__toISOString;
    momentPrototype__proto.toJSON = toJSON;
    momentPrototype__proto.toString = toString;
    momentPrototype__proto.unix = unix;
    momentPrototype__proto.valueOf = to_type__valueOf;
    momentPrototype__proto.creationData = creationData;

    // Year
    momentPrototype__proto.year = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
    momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
    momentPrototype__proto.weeksInYear = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date = getSetDayOfMonth;
    momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
    momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset = getSetOffset;
    momentPrototype__proto.utc = setOffsetToUTC;
    momentPrototype__proto.local = setOffsetToLocal;
    momentPrototype__proto.parseZone = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal = isLocal;
    momentPrototype__proto.isUtcOffset = isUtcOffset;
    momentPrototype__proto.isUtc = isUtc;
    momentPrototype__proto.isUTC = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix(input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone() {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };

    function locale_calendar__calendar(key, mom, now) {
        var output = this._calendar[key];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat(string) {
        return string;
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };

    function relative__relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar = defaultCalendar;
    prototype__proto.calendar = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat = longDateFormat;
    prototype__proto._invalidDate = defaultInvalidDate;
    prototype__proto.invalidDate = invalidDate;
    prototype__proto._ordinal = defaultOrdinal;
    prototype__proto.ordinal = ordinal;
    prototype__proto._ordinalParse = defaultOrdinalParse;
    prototype__proto.preparse = preParsePostFormat;
    prototype__proto.postformat = preParsePostFormat;
    prototype__proto._relativeTime = defaultRelativeTime;
    prototype__proto.relativeTime = relative__relativeTime;
    prototype__proto.pastFuture = pastFuture;
    prototype__proto.set = locale_set__set;

    // Month
    prototype__proto.months = localeMonths;
    prototype__proto._months = defaultLocaleMonths;
    prototype__proto.monthsShort = localeMonthsShort;
    prototype__proto._monthsShort = defaultLocaleMonthsShort;
    prototype__proto.monthsParse = localeMonthsParse;
    prototype__proto._monthsRegex = defaultMonthsRegex;
    prototype__proto.monthsRegex = monthsRegex;
    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
    prototype__proto.monthsShortRegex = monthsShortRegex;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays = localeWeekdays;
    prototype__proto._weekdays = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin = localeWeekdaysMin;
    prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort = localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse = localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get(format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list(format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths(format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort(format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays(format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort(format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin(format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract(duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds;
        var days = this._days;
        var months = this._months;
        var data = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as(units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week': return days / 7 + milliseconds / 6048e5;
                case 'day': return days + milliseconds / 864e5;
                case 'hour': return days * 24 + milliseconds / 36e5;
                case 'minute': return days * 1440 + milliseconds / 6e4;
                case 'second': return days * 86400 + milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf() {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asYears = makeAs('y');

    function duration_get__get(units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds = round(duration.as('s'));
        var minutes = round(duration.as('m'));
        var hours = round(duration.as('h'));
        var days = round(duration.as('d'));
        var months = round(duration.as('M'));
        var years = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds] ||
                minutes <= 1 && ['m'] ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours <= 1 && ['h'] ||
                hours < thresholds.h && ['hh', hours] ||
                days <= 1 && ['d'] ||
                days < thresholds.d && ['dd', days] ||
                months <= 1 && ['M'] ||
                months < thresholds.M && ['MM', months] ||
                years <= 1 && ['y'] || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize(withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days = iso_string__abs(this._days);
        var months = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs = duration_abs__abs;
    duration_prototype__proto.add = duration_add_subtract__add;
    duration_prototype__proto.subtract = duration_add_subtract__subtract;
    duration_prototype__proto.as = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds = asSeconds;
    duration_prototype__proto.asMinutes = asMinutes;
    duration_prototype__proto.asHours = asHours;
    duration_prototype__proto.asDays = asDays;
    duration_prototype__proto.asWeeks = asWeeks;
    duration_prototype__proto.asMonths = asMonths;
    duration_prototype__proto.asYears = asYears;
    duration_prototype__proto.valueOf = duration_as__valueOf;
    duration_prototype__proto._bubble = bubble;
    duration_prototype__proto.get = duration_get__get;
    duration_prototype__proto.milliseconds = milliseconds;
    duration_prototype__proto.seconds = seconds;
    duration_prototype__proto.minutes = minutes;
    duration_prototype__proto.hours = hours;
    duration_prototype__proto.days = days;
    duration_prototype__proto.weeks = weeks;
    duration_prototype__proto.months = months;
    duration_prototype__proto.years = years;
    duration_prototype__proto.humanize = humanize;
    duration_prototype__proto.toISOString = iso_string__toISOString;
    duration_prototype__proto.toString = iso_string__toISOString;
    duration_prototype__proto.toJSON = iso_string__toISOString;
    duration_prototype__proto.locale = locale;
    duration_prototype__proto.localeData = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.12.0';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn = momentPrototype;
    utils_hooks__hooks.min = min;
    utils_hooks__hooks.max = max;
    utils_hooks__hooks.now = now;
    utils_hooks__hooks.utc = create_utc__createUTC;
    utils_hooks__hooks.unix = moment__createUnix;
    utils_hooks__hooks.months = lists__listMonths;
    utils_hooks__hooks.isDate = isDate;
    utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid = valid__createInvalid;
    utils_hooks__hooks.duration = create__createDuration;
    utils_hooks__hooks.isMoment = isMoment;
    utils_hooks__hooks.weekdays = lists__listWeekdays;
    utils_hooks__hooks.parseZone = moment__createInZone;
    utils_hooks__hooks.localeData = locale_locales__getLocale;
    utils_hooks__hooks.isDuration = isDuration;
    utils_hooks__hooks.monthsShort = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale = defineLocale;
    utils_hooks__hooks.updateLocale = updateLocale;
    utils_hooks__hooks.locales = locale_locales__listLocales;
    utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    utils_hooks__hooks.prototype = momentPrototype;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.14.3 - 2015-10-23
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.datepicker","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.popover","ui.bootstrap.tooltip","ui.bootstrap.stackedMap"]),angular.module("ui.bootstrap.tpls",["template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html"]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).value("$datepickerSuppressError",!1).constant("uibDatepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null,shortcutPropagation:!1}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError",function(e,t,n,i,a,o,r,p){var l=this,s={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(n,a){l[n]=angular.isDefined(t[n])?6>a?i(t[n])(e.$parent):e.$parent.$eval(t[n]):r[n]}),angular.forEach(["minDate","maxDate"],function(i){t[i]?e.$parent.$watch(n(t[i]),function(e){l[i]=e?new Date(e):null,l.refreshView()}):l[i]=r[i]?new Date(r[i]):null}),angular.forEach(["minMode","maxMode"],function(i){t[i]?e.$parent.$watch(n(t[i]),function(n){l[i]=angular.isDefined(n)?n:t[i],e[i]=l[i],("minMode"==i&&l.modes.indexOf(e.datepickerMode)<l.modes.indexOf(l[i])||"maxMode"==i&&l.modes.indexOf(e.datepickerMode)>l.modes.indexOf(l[i]))&&(e.datepickerMode=l[i])}):(l[i]=r[i]||null,e[i]=l[i])}),e.datepickerMode=e.datepickerMode||r.datepickerMode,e.uniqueId="datepicker-"+e.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(t.initDate)?(this.activeDate=e.$parent.$eval(t.initDate)||new Date,e.$parent.$watch(t.initDate,function(e){e&&(s.$isEmpty(s.$modelValue)||s.$invalid)&&(l.activeDate=e,l.refreshView())})):this.activeDate=new Date,e.isActive=function(t){return 0===l.compare(t.date,l.activeDate)?(e.activeDateId=t.uid,!0):!1},this.init=function(e){s=e,s.$render=function(){l.render()}},this.render=function(){if(s.$viewValue){var e=new Date(s.$viewValue),t=!isNaN(e);t?this.activeDate=e:p||a.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var e=s.$viewValue?new Date(s.$viewValue):null;s.$setValidity("dateDisabled",!e||this.element&&!this.isDisabled(e))}},this.createDateObject=function(e,t){var n=s.$viewValue?new Date(s.$viewValue):null;return{date:e,label:o(e,t),selected:n&&0===this.compare(e,n),disabled:this.isDisabled(e),current:0===this.compare(e,new Date),customClass:this.customClass(e)}},this.isDisabled=function(n){return this.minDate&&this.compare(n,this.minDate)<0||this.maxDate&&this.compare(n,this.maxDate)>0||t.dateDisabled&&e.dateDisabled({date:n,mode:e.datepickerMode})},this.customClass=function(t){return e.customClass({date:t,mode:e.datepickerMode})},this.split=function(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n},e.select=function(t){if(e.datepickerMode===l.minMode){var n=s.$viewValue?new Date(s.$viewValue):new Date(0,0,0,0,0,0,0);n.setFullYear(t.getFullYear(),t.getMonth(),t.getDate()),s.$setViewValue(n),s.$render()}else l.activeDate=t,e.datepickerMode=l.modes[l.modes.indexOf(e.datepickerMode)-1]},e.move=function(e){var t=l.activeDate.getFullYear()+e*(l.step.years||0),n=l.activeDate.getMonth()+e*(l.step.months||0);l.activeDate.setFullYear(t,n,1),l.refreshView()},e.toggleMode=function(t){t=t||1,e.datepickerMode===l.maxMode&&1===t||e.datepickerMode===l.minMode&&-1===t||(e.datepickerMode=l.modes[l.modes.indexOf(e.datepickerMode)+t])},e.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var u=function(){l.element[0].focus()};e.$on("uib:datepicker.focus",u),e.keydown=function(t){var n=e.keys[t.which];if(n&&!t.shiftKey&&!t.altKey)if(t.preventDefault(),l.shortcutPropagation||t.stopPropagation(),"enter"===n||"space"===n){if(l.isDisabled(l.activeDate))return;e.select(l.activeDate)}else!t.ctrlKey||"up"!==n&&"down"!==n?(l.handleKeyDown(n,t),l.refreshView()):e.toggleMode("up"===n?1:-1)}}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(e,t,n){function i(e,t){return 1!==t||e%4!==0||e%100===0&&e%400!==0?o[t]:29}function a(e){var t=new Date(e);t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1}var o=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=t,this.init=function(t){angular.extend(t,this),e.showWeeks=t.showWeeks,t.refreshView()},this.getDates=function(e,t){for(var n,i=new Array(t),a=new Date(e),o=0;t>o;)n=new Date(a),i[o++]=n,a.setDate(a.getDate()+1);return i},this._refreshView=function(){var t=this.activeDate.getFullYear(),i=this.activeDate.getMonth(),o=new Date(this.activeDate);o.setFullYear(t,i,1);var r=this.startingDay-o.getDay(),p=r>0?7-r:-r,l=new Date(o);p>0&&l.setDate(-p+1);for(var s=this.getDates(l,42),u=0;42>u;u++)s[u]=angular.extend(this.createDateObject(s[u],this.formatDay),{secondary:s[u].getMonth()!==i,uid:e.uniqueId+"-"+u});e.labels=new Array(7);for(var c=0;7>c;c++)e.labels[c]={abbr:n(s[c].date,this.formatDayHeader),full:n(s[c].date,"EEEE")};if(e.title=n(this.activeDate,this.formatDayTitle),e.rows=this.split(s,7),e.showWeeks){e.weekNumbers=[];for(var d=(11-this.startingDay)%7,m=e.rows.length,f=0;m>f;f++)e.weekNumbers.push(a(e.rows[f][d].date))}},this.compare=function(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate())-new Date(t.getFullYear(),t.getMonth(),t.getDate())},this.handleKeyDown=function(e){var t=this.activeDate.getDate();if("left"===e)t-=1;else if("up"===e)t-=7;else if("right"===e)t+=1;else if("down"===e)t+=7;else if("pageup"===e||"pagedown"===e){var n=this.activeDate.getMonth()+("pageup"===e?-1:1);this.activeDate.setMonth(n,1),t=Math.min(i(this.activeDate.getFullYear(),this.activeDate.getMonth()),t)}else"home"===e?t=1:"end"===e&&(t=i(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(t)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(e,t,n){this.step={years:1},this.element=t,this.init=function(e){angular.extend(e,this),e.refreshView()},this._refreshView=function(){for(var t,i=new Array(12),a=this.activeDate.getFullYear(),o=0;12>o;o++)t=new Date(this.activeDate),t.setFullYear(a,o,1),i[o]=angular.extend(this.createDateObject(t,this.formatMonth),{uid:e.uniqueId+"-"+o});e.title=n(this.activeDate,this.formatMonthTitle),e.rows=this.split(i,3)},this.compare=function(e,t){return new Date(e.getFullYear(),e.getMonth())-new Date(t.getFullYear(),t.getMonth())},this.handleKeyDown=function(e){var t=this.activeDate.getMonth();if("left"===e)t-=1;else if("up"===e)t-=3;else if("right"===e)t+=1;else if("down"===e)t+=3;else if("pageup"===e||"pagedown"===e){var n=this.activeDate.getFullYear()+("pageup"===e?-1:1);this.activeDate.setFullYear(n)}else"home"===e?t=0:"end"===e&&(t=11);this.activeDate.setMonth(t)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(e,t){function n(e){return parseInt((e-1)/i,10)*i+1}var i;this.element=t,this.yearpickerInit=function(){i=this.yearRange,this.step={years:i}},this._refreshView=function(){for(var t,a=new Array(i),o=0,r=n(this.activeDate.getFullYear());i>o;o++)t=new Date(this.activeDate),t.setFullYear(r+o,0,1),a[o]=angular.extend(this.createDateObject(t,this.formatYear),{uid:e.uniqueId+"-"+o});e.title=[a[0].label,a[i-1].label].join(" - "),e.rows=this.split(a,5)},this.compare=function(e,t){return e.getFullYear()-t.getFullYear()},this.handleKeyDown=function(e){var t=this.activeDate.getFullYear();"left"===e?t-=1:"up"===e?t-=5:"right"===e?t+=1:"down"===e?t+=5:"pageup"===e||"pagedown"===e?t+=("pageup"===e?-1:1)*this.step.years:"home"===e?t=n(this.activeDate.getFullYear()):"end"===e&&(t=n(this.activeDate.getFullYear())+i-1),this.activeDate.setFullYear(t)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(e,t){return t.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(e,t,n,i){var a=i[0],o=i[1];a.init(o)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:function(e,t){return t.templateUrl||"template/datepicker/day.html"},require:["^?uibDatepicker","uibDaypicker","^?datepicker"],controller:"UibDaypickerController",link:function(e,t,n,i){var a=i[0]||i[2],o=i[1];o.init(a)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:function(e,t){return t.templateUrl||"template/datepicker/month.html"},require:["^?uibDatepicker","uibMonthpicker","^?datepicker"],controller:"UibMonthpickerController",link:function(e,t,n,i){var a=i[0]||i[2],o=i[1];o.init(a)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:function(e,t){return t.templateUrl||"template/datepicker/year.html"},require:["^?uibDatepicker","uibYearpicker","^?datepicker"],controller:"UibYearpickerController",link:function(e,t,n,i){var a=i[0]||i[2];angular.extend(a,i[1]),a.yearpickerInit(),a.refreshView()}}}).constant("uibDatepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"template/datepicker/popup.html",datepickerTemplateUrl:"template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0,onOpenFocus:!0}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$parse","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout",function(e,t,n,i,a,o,r,p,l,s,u,c){function d(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function m(t){if(angular.isNumber(t)&&(t=new Date(t)),t){if(angular.isDate(t)&&!isNaN(t))return t;if(angular.isString(t)){var n=s.parse(t,v,e.date);return isNaN(n)?void 0:n}return void 0}return null}function f(e,t){var i=e||t;if(!n.ngRequired&&!i)return!0;if(angular.isNumber(i)&&(i=new Date(i)),i){if(angular.isDate(i)&&!isNaN(i))return!0;if(angular.isString(i)){var a=s.parse(i,v);return!isNaN(a)}return!1}return!0}function h(n){var i=T[0],a=t[0].contains(n.target),o=void 0!==i.contains&&i.contains(n.target);!e.isOpen||a||o||e.$apply(function(){e.isOpen=!1})}function g(n){27===n.which&&e.isOpen?(n.preventDefault(),n.stopPropagation(),e.$apply(function(){e.isOpen=!1}),t[0].focus()):40!==n.which||e.isOpen||(n.preventDefault(),n.stopPropagation(),e.$apply(function(){e.isOpen=!0}))}var v,b,D,k,$,y,w,M,x,T,C={},O=!1;e.watchData={},this.init=function(p){if(x=p,b=angular.isDefined(n.closeOnDateSelection)?e.$parent.$eval(n.closeOnDateSelection):u.closeOnDateSelection,D=angular.isDefined(n.datepickerAppendToBody)?e.$parent.$eval(n.datepickerAppendToBody):u.appendToBody,k=angular.isDefined(n.onOpenFocus)?e.$parent.$eval(n.onOpenFocus):u.onOpenFocus,$=angular.isDefined(n.datepickerPopupTemplateUrl)?n.datepickerPopupTemplateUrl:u.datepickerPopupTemplateUrl,y=angular.isDefined(n.datepickerTemplateUrl)?n.datepickerTemplateUrl:u.datepickerTemplateUrl,e.showButtonBar=angular.isDefined(n.showButtonBar)?e.$parent.$eval(n.showButtonBar):u.showButtonBar,u.html5Types[n.type]?(v=u.html5Types[n.type],O=!0):(v=n.datepickerPopup||n.uibDatepickerPopup||u.datepickerPopup,n.$observe("uibDatepickerPopup",function(e){var t=e||u.datepickerPopup;if(t!==v&&(v=t,x.$modelValue=null,!v))throw new Error("uibDatepickerPopup must have a date format specified.")})),!v)throw new Error("uibDatepickerPopup must have a date format specified.");if(O&&n.datepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");if(w=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),w.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":$}),M=angular.element(w.children()[0]),M.attr("template-url",y),O&&"month"===n.type&&(M.attr("datepicker-mode",'"month"'),M.attr("min-mode","month")),n.datepickerOptions){var c=e.$parent.$eval(n.datepickerOptions);c&&c.initDate&&(e.initDate=c.initDate,M.attr("init-date","initDate"),delete c.initDate),angular.forEach(c,function(e,t){M.attr(d(t),e)})}angular.forEach(["minMode","maxMode","minDate","maxDate","datepickerMode","initDate","shortcutPropagation"],function(t){if(n[t]){var i=a(n[t]);if(e.$parent.$watch(i,function(n){e.watchData[t]=n,("minDate"===t||"maxDate"===t)&&(C[t]=new Date(n))}),M.attr(d(t),"watchData."+t),"datepickerMode"===t){var o=i.assign;e.$watch("watchData."+t,function(t,n){angular.isFunction(o)&&t!==n&&o(e.$parent,t)})}}}),n.dateDisabled&&M.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),n.showWeeks&&M.attr("show-weeks",n.showWeeks),n.customClass&&M.attr("custom-class","customClass({ date: date, mode: mode })"),O?x.$formatters.push(function(t){return e.date=t,t}):(x.$$parserName="date",x.$validators.date=f,x.$parsers.unshift(m),x.$formatters.push(function(t){return e.date=t,x.$isEmpty(t)?t:l(t,v)})),x.$viewChangeListeners.push(function(){e.date=s.parse(x.$viewValue,v,e.date)}),t.bind("keydown",g),T=i(w)(e),w.remove(),D?o.find("body").append(T):t.after(T),e.$on("$destroy",function(){e.isOpen===!0&&(r.$$phase||e.$apply(function(){e.isOpen=!1})),T.remove(),t.unbind("keydown",g),o.unbind("click",h)})},e.getText=function(t){return e[t+"Text"]||u[t+"Text"]},e.isDisabled=function(t){return"today"===t&&(t=new Date),e.watchData.minDate&&e.compare(t,C.minDate)<0||e.watchData.maxDate&&e.compare(t,C.maxDate)>0},e.compare=function(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate())-new Date(t.getFullYear(),t.getMonth(),t.getDate())},e.dateSelection=function(n){angular.isDefined(n)&&(e.date=n);var i=e.date?l(e.date,v):null;t.val(i),x.$setViewValue(i),b&&(e.isOpen=!1,t[0].focus())},e.keydown=function(n){27===n.which&&(e.isOpen=!1,t[0].focus())},e.select=function(t){if("today"===t){var n=new Date;angular.isDate(e.date)?(t=new Date(e.date),t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate())):t=new Date(n.setHours(0,0,0,0))}e.dateSelection(t)},e.close=function(){e.isOpen=!1,t[0].focus()},e.$watch("isOpen",function(n){n?(e.position=D?p.offset(t):p.position(t),e.position.top=e.position.top+t.prop("offsetHeight"),c(function(){k&&e.$broadcast("uib:datepicker.focus"),o.bind("click",h)},0,!1)):o.unbind("click",h)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(e,t,n,i){var a=i[0],o=i[1];o.init(a)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(e,t){return t.templateUrl||"template/datepicker/popup.html"}}}),angular.module("ui.bootstrap.datepicker").value("$datepickerSuppressWarning",!1).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$log","dateFilter","uibDatepickerConfig","$datepickerSuppressError","$datepickerSuppressWarning",function(e,t,n,i,a,o,r,p,l){l||a.warn("DatepickerController is now deprecated. Use UibDatepickerController instead.");var s=this,u={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","showWeeks","startingDay","yearRange","shortcutPropagation"],function(n,a){s[n]=angular.isDefined(t[n])?6>a?i(t[n])(e.$parent):e.$parent.$eval(t[n]):r[n]}),angular.forEach(["minDate","maxDate"],function(i){t[i]?e.$parent.$watch(n(t[i]),function(e){s[i]=e?new Date(e):null,s.refreshView()}):s[i]=r[i]?new Date(r[i]):null}),angular.forEach(["minMode","maxMode"],function(i){t[i]?e.$parent.$watch(n(t[i]),function(n){s[i]=angular.isDefined(n)?n:t[i],e[i]=s[i],("minMode"==i&&s.modes.indexOf(e.datepickerMode)<s.modes.indexOf(s[i])||"maxMode"==i&&s.modes.indexOf(e.datepickerMode)>s.modes.indexOf(s[i]))&&(e.datepickerMode=s[i])}):(s[i]=r[i]||null,e[i]=s[i])}),e.datepickerMode=e.datepickerMode||r.datepickerMode,e.uniqueId="datepicker-"+e.$id+"-"+Math.floor(1e4*Math.random()),angular.isDefined(t.initDate)?(this.activeDate=e.$parent.$eval(t.initDate)||new Date,e.$parent.$watch(t.initDate,function(e){e&&(u.$isEmpty(u.$modelValue)||u.$invalid)&&(s.activeDate=e,s.refreshView())})):this.activeDate=new Date,e.isActive=function(t){return 0===s.compare(t.date,s.activeDate)?(e.activeDateId=t.uid,!0):!1},this.init=function(e){u=e,u.$render=function(){s.render()}},this.render=function(){if(u.$viewValue){var e=new Date(u.$viewValue),t=!isNaN(e);t?this.activeDate=e:p||a.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var e=u.$viewValue?new Date(u.$viewValue):null;u.$setValidity("dateDisabled",!e||this.element&&!this.isDisabled(e))}},this.createDateObject=function(e,t){var n=u.$viewValue?new Date(u.$viewValue):null;return{date:e,label:o(e,t),selected:n&&0===this.compare(e,n),disabled:this.isDisabled(e),current:0===this.compare(e,new Date),customClass:this.customClass(e)}},this.isDisabled=function(n){return this.minDate&&this.compare(n,this.minDate)<0||this.maxDate&&this.compare(n,this.maxDate)>0||t.dateDisabled&&e.dateDisabled({date:n,mode:e.datepickerMode})},this.customClass=function(t){return e.customClass({date:t,mode:e.datepickerMode})},this.split=function(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n},this.fixTimeZone=function(e){var t=e.getHours();e.setHours(23===t?t+2:0)},e.select=function(t){if(e.datepickerMode===s.minMode){var n=u.$viewValue?new Date(u.$viewValue):new Date(0,0,0,0,0,0,0);n.setFullYear(t.getFullYear(),t.getMonth(),t.getDate()),u.$setViewValue(n),u.$render()}else s.activeDate=t,e.datepickerMode=s.modes[s.modes.indexOf(e.datepickerMode)-1]},e.move=function(e){var t=s.activeDate.getFullYear()+e*(s.step.years||0),n=s.activeDate.getMonth()+e*(s.step.months||0);s.activeDate.setFullYear(t,n,1),s.refreshView()},e.toggleMode=function(t){t=t||1,e.datepickerMode===s.maxMode&&1===t||e.datepickerMode===s.minMode&&-1===t||(e.datepickerMode=s.modes[s.modes.indexOf(e.datepickerMode)+t])},e.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var c=function(){s.element[0].focus()};e.$on("uib:datepicker.focus",c),e.keydown=function(t){var n=e.keys[t.which];if(n&&!t.shiftKey&&!t.altKey)if(t.preventDefault(),s.shortcutPropagation||t.stopPropagation(),"enter"===n||"space"===n){if(s.isDisabled(s.activeDate))return;e.select(s.activeDate)}else!t.ctrlKey||"up"!==n&&"down"!==n?(s.handleKeyDown(n,t),s.refreshView()):e.toggleMode("up"===n?1:-1)}}]).directive("datepicker",["$log","$datepickerSuppressWarning",function(e,t){return{replace:!0,templateUrl:function(e,t){return t.templateUrl||"template/datepicker/datepicker.html"},scope:{datepickerMode:"=?",dateDisabled:"&",customClass:"&",shortcutPropagation:"&?"},require:["datepicker","^ngModel"],controller:"DatepickerController",controllerAs:"datepicker",link:function(n,i,a,o){t||e.warn("datepicker is now deprecated. Use uib-datepicker instead.");var r=o[0],p=o[1];r.init(p)}}}]).directive("daypicker",["$log","$datepickerSuppressWarning",function(e,t){return{replace:!0,templateUrl:"template/datepicker/day.html",require:["^datepicker","daypicker"],controller:"UibDaypickerController",link:function(n,i,a,o){t||e.warn("daypicker is now deprecated. Use uib-daypicker instead.");var r=o[0],p=o[1];p.init(r)}}}]).directive("monthpicker",["$log","$datepickerSuppressWarning",function(e,t){return{replace:!0,templateUrl:"template/datepicker/month.html",require:["^datepicker","monthpicker"],controller:"UibMonthpickerController",link:function(n,i,a,o){t||e.warn("monthpicker is now deprecated. Use uib-monthpicker instead.");var r=o[0],p=o[1];p.init(r)}}}]).directive("yearpicker",["$log","$datepickerSuppressWarning",function(e,t){return{replace:!0,templateUrl:"template/datepicker/year.html",require:["^datepicker","yearpicker"],controller:"UibYearpickerController",link:function(n,i,a,o){t||e.warn("yearpicker is now deprecated. Use uib-yearpicker instead.");var r=o[0];angular.extend(r,o[1]),r.yearpickerInit(),r.refreshView()}}}]).directive("datepickerPopup",["$log","$datepickerSuppressWarning",function(e,t){return{require:["ngModel","datepickerPopup"],controller:"UibDatepickerPopupController",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&",customClass:"&"},link:function(n,i,a,o){t||e.warn("datepicker-popup is now deprecated. Use uib-datepicker-popup instead.");var r=o[0],p=o[1];p.init(r)}}}]).directive("datepickerPopupWrap",["$log","$datepickerSuppressWarning",function(e,t){return{replace:!0,transclude:!0,templateUrl:function(e,t){return t.templateUrl||"template/datepicker/popup.html"},link:function(){t||e.warn("datepicker-popup-wrap is now deprecated. Use uib-datepicker-popup-wrap instead.")}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","orderByFilter",function(e,t,n){function i(e){var t=[],i=e.split("");return angular.forEach(r,function(n,a){var o=e.indexOf(a);if(o>-1){e=e.split(""),i[o]="("+n.regex+")",e[o]="$";for(var r=o+1,p=o+a.length;p>r;r++)i[r]="",e[r]="$";e=e.join(""),t.push({index:o,apply:n.apply})}}),{regex:new RegExp("^"+i.join("")+"$"),map:n(t,"index")}}function a(e,t,n){return 1>n?!1:1===t&&n>28?29===n&&(e%4===0&&e%100!==0||e%400===0):3===t||5===t||8===t||10===t?31>n:!0}var o,r,p=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){o=t.id,this.parsers={},r={yyyy:{regex:"\\d{4}",apply:function(e){this.year=+e}},yy:{regex:"\\d{2}",apply:function(e){this.year=+e+2e3}},y:{regex:"\\d{1,4}",apply:function(e){this.year=+e}},MMMM:{regex:t.DATETIME_FORMATS.MONTH.join("|"),apply:function(e){this.month=t.DATETIME_FORMATS.MONTH.indexOf(e)}},MMM:{regex:t.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(e){this.month=t.DATETIME_FORMATS.SHORTMONTH.indexOf(e)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(e){this.month=e-1}},M:{regex:"[1-9]|1[0-2]",apply:function(e){this.month=e-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(e){this.date=+e}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(e){this.date=+e}},EEEE:{regex:t.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:t.DATETIME_FORMATS.SHORTDAY.join("|")},HH:{regex:"(?:0|1)[0-9]|2[0-3]",apply:function(e){this.hours=+e}},hh:{regex:"0[0-9]|1[0-2]",apply:function(e){this.hours=+e}},H:{regex:"1?[0-9]|2[0-3]",apply:function(e){this.hours=+e}},h:{regex:"[0-9]|1[0-2]",apply:function(e){this.hours=+e}},mm:{regex:"[0-5][0-9]",apply:function(e){this.minutes=+e}},m:{regex:"[0-9]|[1-5][0-9]",apply:function(e){this.minutes=+e}},sss:{regex:"[0-9][0-9][0-9]",apply:function(e){this.milliseconds=+e}},ss:{regex:"[0-5][0-9]",apply:function(e){this.seconds=+e}},s:{regex:"[0-9]|[1-5][0-9]",apply:function(e){this.seconds=+e}},a:{regex:t.DATETIME_FORMATS.AMPMS.join("|"),apply:function(e){12===this.hours&&(this.hours=0),"PM"===e&&(this.hours+=12)}}}},this.init(),this.parse=function(n,r,l){if(!angular.isString(n)||!r)return n;r=t.DATETIME_FORMATS[r]||r,r=r.replace(p,"\\$&"),t.id!==o&&this.init(),this.parsers[r]||(this.parsers[r]=i(r));var s=this.parsers[r],u=s.regex,c=s.map,d=n.match(u);if(d&&d.length){var m,f;angular.isDate(l)&&!isNaN(l.getTime())?m={year:l.getFullYear(),month:l.getMonth(),date:l.getDate(),hours:l.getHours(),minutes:l.getMinutes(),seconds:l.getSeconds(),milliseconds:l.getMilliseconds()}:(l&&e.warn("dateparser:","baseDate is not a valid date"),m={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var h=1,g=d.length;g>h;h++){var v=c[h-1];v.apply&&v.apply.call(m,d[h])}return a(m.year,m.month,m.date)&&(angular.isDate(l)&&!isNaN(l.getTime())?(f=new Date(l),f.setFullYear(m.year,m.month,m.date,m.hours,m.minutes,m.seconds,m.milliseconds||0)):f=new Date(m.year,m.month,m.date,m.hours,m.minutes,m.seconds,m.milliseconds||0)),f}}}]),angular.module("ui.bootstrap.dateparser").value("$dateParserSuppressWarning",!1).service("dateParser",["$log","$dateParserSuppressWarning","uibDateParser",function(e,t,n){t||e.warn("dateParser is now deprecated. Use uibDateParser instead."),angular.extend(this,n)}]),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function i(e){return"static"===(n(e,"position")||"static")}var a=function(t){for(var n=e[0],a=t.offsetParent||n;a&&a!==n&&i(a);)a=a.offsetParent;return a||n};return{position:function(t){var n=this.offset(t),i={top:0,left:0},o=a(t[0]);o!=e[0]&&(i=this.offset(angular.element(o)),i.top+=o.clientTop-o.scrollTop,i.left+=o.clientLeft-o.scrollLeft);var r=t[0].getBoundingClientRect();return{width:r.width||t.prop("offsetWidth"),height:r.height||t.prop("offsetHeight"),top:n.top-i.top,left:n.left-i.left}},offset:function(n){var i=n[0].getBoundingClientRect();return{width:i.width||n.prop("offsetWidth"),height:i.height||n.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}},positionElements:function(e,t,n,i){var a,o,r,p,l=n.split("-"),s=l[0],u=l[1]||"center";a=i?this.offset(e):this.position(e),o=t.prop("offsetWidth"),r=t.prop("offsetHeight");var c={center:function(){return a.left+a.width/2-o/2},left:function(){return a.left},right:function(){return a.left+a.width}},d={center:function(){return a.top+a.height/2-r/2},top:function(){return a.top},bottom:function(){return a.top+a.height}};switch(s){case"right":p={top:d[u](),left:c[s]()};break;case"left":p={top:d[u](),left:a.left-o};break;case"bottom":p={top:d[s](),left:c[u]()};break;default:p={top:a.top-r,left:c[u]()}}return p}}}]),angular.module("ui.bootstrap.position").value("$positionSuppressWarning",!1).service("$position",["$log","$positionSuppressWarning","$uibPosition",function(e,t,n){t||e.warn("$position is now deprecated. Use $uibPosition instead."),angular.extend(this,n)}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(e,t){t.addClass("popover")}}}).directive("uibPopoverTemplate",["$uibTooltip",function(e){return e("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(e,t){t.addClass("popover")}}}).directive("uibPopoverHtml",["$uibTooltip",function(e){return e("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(e,t){t.addClass("popover")}}}).directive("uibPopover",["$uibTooltip",function(e){return e("uibPopover","popover","click")}]),angular.module("ui.bootstrap.popover").value("$popoverSuppressWarning",!1).directive("popoverTemplatePopup",["$log","$popoverSuppressWarning",function(e,t){return{replace:!0,scope:{title:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/popover/popover-template.html",link:function(n,i){t||e.warn("popover-template-popup is now deprecated. Use uib-popover-template-popup instead."),i.addClass("popover")}}}]).directive("popoverTemplate",["$tooltip",function(e){return e("popoverTemplate","popover","click",{useContentExp:!0})}]).directive("popoverHtmlPopup",["$log","$popoverSuppressWarning",function(e,t){return{replace:!0,scope:{contentExp:"&",title:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover-html.html",link:function(n,i){t||e.warn("popover-html-popup is now deprecated. Use uib-popover-html-popup instead."),i.addClass("popover")}}}]).directive("popoverHtml",["$tooltip",function(e){return e("popoverHtml","popover","click",{useContentExp:!0})}]).directive("popoverPopup",["$log","$popoverSuppressWarning",function(e,t){return{replace:!0,scope:{title:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html",link:function(n,i){t||e.warn("popover-popup is now deprecated. Use uib-popover-popup instead."),i.addClass("popover")}}}]).directive("popover",["$tooltip",function(e){return e("popover","popover","click")}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function e(e){var t=/[A-Z]/g,n="-";return e.replace(t,function(e,t){return(t?n:"")+e.toLowerCase()})}var t={placement:"top",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},n={mouseenter:"mouseleave",click:"click",focus:"blur",none:""},i={};this.options=function(e){angular.extend(i,e)},this.setTriggers=function(e){angular.extend(n,e)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(a,o,r,p,l,s,u,c,d){var m=d.createNew();return p.on("keypress",function(e){if(27===e.which){var t=m.top();t&&(t.value.close(),m.removeTop(),t=null)}}),function(a,u,d,f){function h(e){var t=(e||f.trigger||d).split(" "),i=t.map(function(e){return n[e]||e});return{show:t,hide:i}}f=angular.extend({},t,i,f);var g=e(a),v=s.startSymbol(),b=s.endSymbol(),D="<div "+g+'-popup title="'+v+"title"+b+'" '+(f.useContentExp?'content-exp="contentExp()" ':'content="'+v+"content"+b+'" ')+'placement="'+v+"placement"+b+'" popup-class="'+v+"popupClass"+b+'" animation="animation" is-open="isOpen"origin-scope="origScope" style="visibility: hidden; display: block; top: -9999px; left: -9999px;"></div>';return{compile:function(){var e=o(D);return function(t,n,i){function o(){A.isOpen?d():s()}function s(){(!Y||t.$eval(i[u+"Enable"]))&&(D(),y(),A.popupDelay?P||(P=r(g,A.popupDelay,!1)):g())}function d(){v(),A.popupCloseDelay?U||(U=r(b,A.popupCloseDelay,!1)):b()}function g(){return v(),D(),A.content?(k(),void A.$evalAsync(function(){A.isOpen=!0,w(!0),R()})):angular.noop}function v(){P&&(r.cancel(P),P=null),S&&(r.cancel(S),S=null)}function b(){v(),D(),A&&A.$evalAsync(function(){A.isOpen=!1,w(!1),A.animation?E||(E=r($,150,!1)):$()})}function D(){U&&(r.cancel(U),U=null),E&&(r.cancel(E),E=null)}function k(){C||(O=A.$new(),C=e(O,function(e){F?p.find("body").append(e):n.after(e)}),M())}function $(){x(),E=null,C&&(C.remove(),C=null),O&&(O.$destroy(),O=null)}function y(){A.title=i[u+"Title"],A.content=N?N(t):i[a],A.popupClass=i[u+"Class"],A.placement=angular.isDefined(i[u+"Placement"])?i[u+"Placement"]:f.placement;var e=parseInt(i[u+"PopupDelay"],10),n=parseInt(i[u+"PopupCloseDelay"],10);A.popupDelay=isNaN(e)?f.popupDelay:e,A.popupCloseDelay=isNaN(n)?f.popupCloseDelay:n
}function w(e){H&&angular.isFunction(H.assign)&&H.assign(t,e)}function M(){I.length=0,N?(I.push(t.$watch(N,function(e){A.content=e,!e&&A.isOpen&&b()})),I.push(O.$watch(function(){W||(W=!0,O.$$postDigest(function(){W=!1,A&&A.isOpen&&R()}))}))):I.push(i.$observe(a,function(e){A.content=e,!e&&A.isOpen?b():R()})),I.push(i.$observe(u+"Title",function(e){A.title=e,A.isOpen&&R()})),I.push(i.$observe(u+"Placement",function(e){A.placement=e?e:f.placement,A.isOpen&&R()}))}function x(){I.length&&(angular.forEach(I,function(e){e()}),I.length=0)}function T(){var e=i[u+"Trigger"];q(),V=h(e),"none"!==V.show&&V.show.forEach(function(e,t){e===V.hide[t]?n[0].addEventListener(e,o):e&&(n[0].addEventListener(e,s),V.hide[t].split(" ").forEach(function(e){n[0].addEventListener(e,d)})),n.on("keypress",function(e){27===e.which&&d()})})}var C,O,E,P,U,S,F=angular.isDefined(f.appendToBody)?f.appendToBody:!1,V=h(void 0),Y=angular.isDefined(i[u+"Enable"]),A=t.$new(!0),W=!1,H=angular.isDefined(i[u+"IsOpen"])?c(i[u+"IsOpen"]):!1,N=f.useContentExp?c(i[a]):!1,I=[],R=function(){C&&C.html()&&(S||(S=r(function(){C.css({top:0,left:0});var e=l.positionElements(n,C,A.placement,F);e.top+="px",e.left+="px",e.visibility="visible",C.css(e),S=null},0,!1)))};A.origScope=t,A.isOpen=!1,m.add(A,{close:b}),A.contentExp=function(){return A.content},i.$observe("disabled",function(e){e&&v(),e&&A.isOpen&&b()}),H&&t.$watch(H,function(e){A&&!e===A.isOpen&&o()});var q=function(){V.show.forEach(function(e){n.unbind(e,s)}),V.hide.forEach(function(e){e.split(" ").forEach(function(e){n[0].removeEventListener(e,d)})})};T();var B=t.$eval(i[u+"Animation"]);A.animation=angular.isDefined(B)?!!B:f.animation;var j=t.$eval(i[u+"AppendToBody"]);F=angular.isDefined(j)?j:F,F&&t.$on("$locationChangeSuccess",function(){A.isOpen&&b()}),t.$on("$destroy",function(){v(),D(),q(),$(),m.remove(A),A=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(e,t,n,i){return{link:function(a,o,r){var p,l,s,u=a.$eval(r.tooltipTemplateTranscludeScope),c=0,d=function(){l&&(l.remove(),l=null),p&&(p.$destroy(),p=null),s&&(e.leave(s).then(function(){l=null}),l=s,s=null)};a.$watch(t.parseAsResourceUrl(r.uibTooltipTemplateTransclude),function(t){var r=++c;t?(i(t,!0).then(function(i){if(r===c){var a=u.$new(),l=i,m=n(l)(a,function(t){d(),e.enter(t,o)});p=a,s=m,p.$emit("$includeContentLoaded",t)}},function(){r===c&&(d(),a.$emit("$includeContentError",t))}),a.$emit("$includeContentRequested",t)):d()}),a.$on("$destroy",d)}}}]).directive("uibTooltipClasses",function(){return{restrict:"A",link:function(e,t,n){e.placement&&t.addClass(e.placement),e.popupClass&&t.addClass(e.popupClass),e.animation()&&t.addClass(n.tooltipAnimationClass)}}}).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(e,t){t.addClass("tooltip")}}}).directive("uibTooltip",["$uibTooltip",function(e){return e("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(e,t){t.addClass("tooltip")}}}).directive("uibTooltipTemplate",["$uibTooltip",function(e){return e("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(e,t){t.addClass("tooltip")}}}).directive("uibTooltipHtml",["$uibTooltip",function(e){return e("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.tooltip").value("$tooltipSuppressWarning",!1).provider("$tooltip",["$uibTooltipProvider",function(e){angular.extend(this,e),this.$get=["$log","$tooltipSuppressWarning","$injector",function(t,n,i){return n||t.warn("$tooltip is now deprecated. Use $uibTooltip instead."),i.invoke(e.$get)}]}]).directive("tooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest","$log","$tooltipSuppressWarning",function(e,t,n,i,a,o){return{link:function(r,p,l){o||a.warn("tooltip-template-transclude is now deprecated. Use uib-tooltip-template-transclude instead.");var s,u,c,d=r.$eval(l.tooltipTemplateTranscludeScope),m=0,f=function(){u&&(u.remove(),u=null),s&&(s.$destroy(),s=null),c&&(e.leave(c).then(function(){u=null}),u=c,c=null)};r.$watch(t.parseAsResourceUrl(l.tooltipTemplateTransclude),function(t){var a=++m;t?(i(t,!0).then(function(i){if(a===m){var o=d.$new(),r=i,l=n(r)(o,function(t){f(),e.enter(t,p)});s=o,c=l,s.$emit("$includeContentLoaded",t)}},function(){a===m&&(f(),r.$emit("$includeContentError",t))}),r.$emit("$includeContentRequested",t)):f()}),r.$on("$destroy",f)}}}]).directive("tooltipClasses",["$log","$tooltipSuppressWarning",function(e,t){return{restrict:"A",link:function(n,i,a){t||e.warn("tooltip-classes is now deprecated. Use uib-tooltip-classes instead."),n.placement&&i.addClass(n.placement),n.popupClass&&i.addClass(n.popupClass),n.animation()&&i.addClass(a.tooltipAnimationClass)}}}]).directive("tooltipPopup",["$log","$tooltipSuppressWarning",function(e,t){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html",link:function(n,i){t||e.warn("tooltip-popup is now deprecated. Use uib-tooltip-popup instead."),i.addClass("tooltip")}}}]).directive("tooltip",["$tooltip",function(e){return e("tooltip","tooltip","mouseenter")}]).directive("tooltipTemplatePopup",["$log","$tooltipSuppressWarning",function(e,t){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"template/tooltip/tooltip-template-popup.html",link:function(n,i){t||e.warn("tooltip-template-popup is now deprecated. Use uib-tooltip-template-popup instead."),i.addClass("tooltip")}}}]).directive("tooltipTemplate",["$tooltip",function(e){return e("tooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("tooltipHtmlPopup",["$log","$tooltipSuppressWarning",function(e,t){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-popup.html",link:function(n,i){t||e.warn("tooltip-html-popup is now deprecated. Use uib-tooltip-html-popup instead."),i.addClass("tooltip")}}}]).directive("tooltipHtml",["$tooltip",function(e){return e("tooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var e=[];return{add:function(t,n){e.push({key:t,value:n})},get:function(t){for(var n=0;n<e.length;n++)if(t==e[n].key)return e[n]},keys:function(){for(var t=[],n=0;n<e.length;n++)t.push(e[n].key);return t},top:function(){return e[e.length-1]},remove:function(t){for(var n=-1,i=0;i<e.length;i++)if(t==e[i].key){n=i;break}return e.splice(n,1)[0]},removeTop:function(){return e.splice(e.length-1,1)[0]},length:function(){return e.length}}}}}),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(e){e.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(e){e.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(e){e.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(e){e.put("template/datepicker/popup.html",'<ul class="dropdown-menu" dropdown-nested ng-if="isOpen" style="display: block" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(e){e.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{::dt.uid}}" ng-class="::dt.customClass">\n        <button type="button" style="min-width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/popover/popover-html.html",[]).run(["$templateCache",function(e){e.put("template/popover/popover-html.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover-template.html",[]).run(["$templateCache",function(e){e.put("template/popover/popover-template.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(e){e.put("template/popover/popover.html",'<div tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-html-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-template-popup.html",'<div\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]);
/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/oidc-token-manager.min.js" />

(function (angular) {
    var app = angular.module("ttidAdm", []);

    function config($httpProvider) {
        function intercept($q, idAdmTokenManager, idAdmErrorService) {
            return {
                'request': function (config) {
                    idAdmErrorService.clear();
                    var token = idAdmTokenManager.access_token;
                    if (token) {
                        config.headers['Authorization'] = 'Bearer ' + token;
                    }
                    return config;
                },
                'responseError': function (response) {
                    if (response.status === 401) {
                        //idAdmTokenManager.removeToken();
                    }
                    if (response.status === 403) {
                        //idAdmTokenManager.removeToken();
                    }
                    return $q.reject(response);
                }
            };
        };
        intercept.$inject = ["$q", "idAdmTokenManager", "idAdmErrorService"];
        $httpProvider.interceptors.push(intercept);
    };
    config.$inject = ["$httpProvider"];
    app.config(config);

    function idAdmErrorService($rootScope, $timeout) {
        var svc = {
            show: function (err) {
                $timeout(function () {
                    if (err instanceof Array) {
                        $rootScope.errors = err;
                    }
                    else {
                        $rootScope.errors = [err];
                    }
                }, 100);
            },
            clear: function () {
                $rootScope.errors = null;
            }
        };

        return svc;
    }
    idAdmErrorService.$inject = ["$rootScope", "$timeout"];
    app.factory("idAdmErrorService", idAdmErrorService);

    function idAdmTokenManager(OidcTokenManager, oauthSettings, PathBase, $window, $rootScope) {

        oauthSettings.response_type = "token";
        Object.assign(oauthSettings, oauthSettings.options);

        var mgr = new OidcTokenManager(oauthSettings);

        var applyFuncs = [
                "_callTokenRemoved", "_callTokenExpiring",
                "_callTokenExpired", "_callTokenObtained",
                "_callSilentTokenRenewFailed"
        ];
        applyFuncs.forEach(function (name) {
            var tmp = mgr[name].bind(mgr);
            mgr[name] = function () {
                $rootScope.$applyAsync(function () {
                    tmp();
                });
            }
        });

        return mgr;
    }
    idAdmTokenManager.$inject = ["OidcTokenManager", "oauthSettings", "PathBase", "$window", "$rootScope"];
    app.factory("idAdmTokenManager", idAdmTokenManager);

    function idAdmApi(idAdmTokenManager, $http, $q, PathBase,$location) {
        var cache = null;

        idAdmTokenManager.addOnTokenRemoved(function () {
            cache = null;
        });

        return {
            get: function () {
                if (cache) {
                    var d = $q.defer();
                    d.resolve(cache);
                    return d.promise;
                }

                return $http.get(PathBase + "/api").then(function (resp) {
                    cache = resp.data;
                    return cache;
                }, function (resp) {
                    cache = null;
                    console.log(resp)
                    if (resp.status === 401) {
                        $location.path('/error');
                        throw 'You are not authorized to use this service.';
                    }
                    else {
                        throw (resp.data && (resp.data.exceptionMessage || resp.data.message)) || 'Failed to access IdentityAdmin API.';
                    }
                });
            }
        };
    }
    idAdmApi.$inject = ["idAdmTokenManager", "$http", "$q", "PathBase",'$location'];
    app.factory("idAdmApi", idAdmApi);

    //clients
    function idAdmClients($http, idAdmApi, $log) {
        function nop() {
        }
        function mapResponseData(response) {
            return response.data;
        }
        function errorHandler(msg) {
            msg = msg || "Unexpected Error";
            return function (response) {
                if (response.data.exceptionMessage) {
                    $log.error(response.data.exceptionMessage);
                }
                throw (response.data.errors || response.data.message || msg);
            }
        }

        var svc = idAdmApi.get().then(function (api) {
            svc.getClients = function (filter, start, count) {
                return $http.get(api.links.clients, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Clients"));
            };
            svc.getClient = function (subject) {
                return $http.get(api.links.clients + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting Clients"));
            };
            if (api.links.createClient) {
                svc.createClient = function (properties) {
                    return $http.post(api.links.createClient.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating Client"));
                };
            }
            svc.deleteClient = function (client) {
                return $http.delete(client.links.delete)
                    .then(nop, errorHandler("Error Deleting Client"));
            };
            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };
            //Claim
            svc.addClientClaim = function (claims, claim) {
                return $http.post(claims.links.create, claim)
                    .then(nop, errorHandler("Error Adding Claim"));
            };
            svc.removeClientClaim = function (claim) {
                return $http.delete(claim.links.delete)
                    .then(nop, errorHandler("Error Removing Claim"));
            };
            //Client Secret
            svc.addClientSecret = function (clientSecrets, clientSecret) {
                return $http.post(clientSecrets.links.create, clientSecret)
                    .then(nop, errorHandler("Error Adding Client Secret"));
            };
            svc.removeClientSecret = function (clientSecret) {
                return $http.delete(clientSecret.links.delete)
                    .then(nop, errorHandler("Error Removing Client Secret"));
            };
            //IdentityProviderRestriction
            svc.addIdentityProviderRestriction = function (identityProviderRestrictions, identityProviderRestriction) {
                return $http.post(identityProviderRestrictions.links.create, identityProviderRestriction)
                    .then(nop, errorHandler("Error Adding identityProvider Restriction"));
            };
            svc.removeIdentityProviderRestriction = function (identityProviderRestriction) {
                return $http.delete(identityProviderRestriction.links.delete)
                    .then(nop, errorHandler("Error Removing identityProvider Restriction"));
            };
            //PostLogoutRedirectUri
            svc.addPostLogoutRedirectUri = function (postLogoutRedirectUris, postLogoutRedirectUri) {
                return $http.post(postLogoutRedirectUris.links.create, postLogoutRedirectUri)
                    .then(nop, errorHandler("Error adding post Logout redirect uri"));
            };
            svc.removePostLogoutRedirectUri = function (postLogoutRedirectUri) {
                return $http.delete(postLogoutRedirectUri.links.delete)
                    .then(nop, errorHandler("Error removing post Logout redirect uri"));
            };
            //RedirectUri
            svc.addRedirectUri = function (redirectUris, redirectUri) {
                return $http.post(redirectUris.links.create, redirectUri)
                    .then(nop, errorHandler("Error adding redirect uri"));
            };
            svc.removeRedirectUri = function (redirectUri) {
                return $http.delete(redirectUri.links.delete)
                    .then(nop, errorHandler("Error removing redirect uri"));
            };
            //AllowedCorsOrigin
            svc.addAllowedCorsOrigin = function (allowedCorsOrigins, allowedCorsOrigin) {
                return $http.post(allowedCorsOrigins.links.create, allowedCorsOrigin)
                    .then(nop, errorHandler("Error adding allowed cor"));
            };
            svc.removeAllowedCorsOrigin = function (allowedCorsOrigin) {
                return $http.delete(allowedCorsOrigin.links.delete)
                    .then(nop, errorHandler("Error removing allowed cor"));
            };
            //GrantType
            svc.addAllowedCustomGrantType = function (grantTypes, grantType) {
                return $http.post(grantTypes.links.create, grantType)
                    .then(nop, errorHandler("Error adding grant type"));
            };
            svc.removeAllowedCustomGrantType = function (grantType) {
                return $http.delete(grantType.links.delete)
                    .then(nop, errorHandler("Error removing grant type"));
            };
            //Scope
            svc.addAllowedScope = function (scopes, scope) {
                return $http.post(scopes.links.create, scope)
                    .then(nop, errorHandler("Error adding scope"));
            };
            svc.removeAllowedScope = function (scope) {
                return $http.delete(scope.links.delete)
                    .then(nop, errorHandler("Error removing scope"));
            };
        });

        return svc;
    }
    idAdmClients.$inject = ["$http", "idAdmApi", "$log"];
    app.factory("idAdmClients", idAdmClients);

    //scopes
    function idAdmScopes($http, idAdmApi, $log) {
        function nop() {
        }
        function mapResponseData(response) {
            return response.data;
        }
        function errorHandler(msg) {
            msg = msg || "Unexpected Error";
            return function (response) {
                if (response.data.exceptionMessage) {
                    $log.error(response.data.exceptionMessage);
                }
                throw (response.data.errors || response.data.message || msg);
            }
        }

        var svc = idAdmApi.get().then(function (api) {
            svc.getScopes = function (filter, start, count) {
                return $http.get(api.links.scopes, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Scopes"));
            };
            svc.getScope = function (subject) {
                return $http.get(api.links.scopes + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting Scopes"));
            };
            if (api.links.createScope) {
                svc.createScope = function (properties) {
                    return $http.post(api.links.createScope.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating Scope"));
                };
            }
            svc.deleteScope = function (scope) {
                return $http.delete(scope.links.delete)
                    .then(nop, errorHandler("Error Deleting Client"));
            };
            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };
            //Scope Claim
            svc.addScopeClaim = function (scopeClaims, scopeClaim) {
                return $http.post(scopeClaims.links.create, scopeClaim)
                    .then(nop, errorHandler("Error Adding Scope Claim"));
            };
            svc.removeScopeClaim = function (scopeClaim) {
                return $http.delete(scopeClaim.links.delete)
                    .then(nop, errorHandler("Error Removing Scope Claim"));
            };
            svc.updateScopeClaim = function (claim) {
                return $http.put(claim.links.update, claim.data)
                    .then(nop, errorHandler("Error updating Scope Claim"));
            };

            //Scope Secret
            svc.addScopeSecret = function (scopeSecrets, scopeSecret) {
                return $http.post(scopeSecrets.links.create, scopeSecret)
                    .then(nop, errorHandler("Error Adding Scope Secret"));
            };
            svc.removeScopeSecret = function (scopeSecret) {
                return $http.delete(scopeSecret.links.delete)
                    .then(nop, errorHandler("Error Removing Scope Secret"));
            };
            svc.updateScopeSecret = function (scopeSecret) {
                return $http.put(scopeSecret.links.update, scopeSecret.data)
                    .then(nop, errorHandler("Error updating Scope Secret"));
            };
        });

        return svc;
    }
    idAdmScopes.$inject = ["$http", "idAdmApi", "$log"];
    app.factory("idAdmScopes", idAdmScopes);

})(angular);

(function (angular) {
    var model = document.getElementById("model").textContent.trim();
    model = JSON.parse(model);

    for (var key in model) {
        angular.module("ttidAdm").constant(key, model[key]);
    }
    angular.module("ttidAdm").constant("OidcTokenManager", OidcTokenManager);
})(angular);

/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {
    var app = angular.module("ttidAdmUI", []);

    app.factory("ttFeedback", function () {
        function Feedback() {
            var self = this;
            var _errors;
            var _message;

            self.clear = function () {
                _errors = null;
                _message = null;
            };

            Object.defineProperty(this, "message", {
                get: function () {
                    return _message;
                },
                set: function (value) {
                    self.clear();
                    _message = value;
                }
            });
            Object.defineProperty(this, "errors", {
                get: function () {
                    return _errors;
                },
                set: function (value) {
                    self.clear();
                    if (value instanceof Array) {
                        _errors = value;
                    }
                    else {
                        _errors = [value];
                    }
                }
            });

            self.messageHandler = function (message) {
                self.message = message;
            };
            self.errorHandler = function (errors) {
                self.errors = errors;
            };
            self.createMessageHandler = function (msg) {
                return function () {
                    self.message = msg;
                };
            };
            self.createErrorHandler = function (msg) {
                return function (errors) {
                    self.errors = errors || msg;
                };
            };
        }
        return Feedback;
    });

    function ttFocus() {
        return {
            link: function (scope, elem) {
                scope.$on("$routeChangeSuccess", function () {
                    scope.$applyAsync(function(){
                        elem.find("input:visible:first").focus();
                    });
                });
            }
        }
    }
    ttFocus.$inject = [];
    app.directive("ttFocus", ttFocus);

    function ttMatch($timeout) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                function check() {
                    if (ctrl.$dirty) {
                        var thisVal = elem.val();
                        var otherVal = scope.$eval(attrs.ttMatch);
                        if (!thisVal || thisVal === otherVal) {
                            ctrl.$setValidity('ttMatch', true);
                        }
                        else {
                            ctrl.$setValidity('ttMatch', false);
                        }
                    }
                }
                elem.on("input", function () {
                    $timeout(function () {
                        scope.$apply(check);
                    });
                });
                scope.$watch(attrs.ttMatch, function (val) {
                    check();
                });
            }
        }
    }
    ttMatch.$inject = ["$timeout"];
    app.directive("ttMatch", ttMatch);

    function ttPropertyEditor(PathBase){
        return {
            restrict:'E',
            templateUrl: PathBase + '/assets/Templates.editor.property.html',
            replace: true,
            scope: {
                property: '=',
                setProperty: '=setProperty'
            },
            link: function (scope, elem, attrs, ctrl) {
            }
        };
    }
    ttPropertyEditor.$inject = ["PathBase"];
    app.directive("ttPropertyEditor", ttPropertyEditor);

    function ttPrompt(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.modal.html',
            replace: true,
            transclude: true,
            scope: {
                id: '@',
                action: '@'
            },
            link: function (scope, elem, attrs, ctrl) {
                elem.id = scope.id.trim();
                elem.find(".btn-primary.confirm").on("click", function () {
                    elem.trigger("confirm");
                });
            }
        }
    }
    ttPrompt.$inject = ["PathBase"];
    app.directive("ttPrompt", ttPrompt);

    function ttPagerButtons(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.pager.buttons.html',
            scope: {
                pager: '=',
                path: "@"
            }
        }
    }
    ttPagerButtons.$inject = ["PathBase"];
    app.directive("ttPagerButtons", ttPagerButtons);

    function ttPagerSummary(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.pager.summary.html',
            scope: {
                pager: '='
            }
        }
    }
    ttPagerSummary.$inject = ["PathBase"];
    app.directive("ttPagerSummary", ttPagerSummary);

    function idAdmPager($sce) {
        function Pager(result, pageSize) {
            function PagerButton(text, page, enabled, current) {
                this.text = $sce.trustAsHtml(text + "");
                this.page = page;
                this.enabled = enabled;
                this.current = current;
            }

            this.start = result.start;
            this.count = result.count;
            this.total = result.total;
            this.pageSize = pageSize;
            this.filter = result.filter;

            this.totalPages = Math.ceil(this.total / pageSize);
            this.currentPage = (this.start / pageSize) + 1;
            this.canPrev = this.currentPage > 1;
            this.canNext = this.currentPage < this.totalPages;

            this.buttons = [];

            var totalButtons = 7; // ensure this is odd
            var pageSkip = 10;
            var startButton = 1;
            if (this.currentPage > Math.floor(totalButtons / 2)) startButton = this.currentPage - Math.floor(totalButtons / 2);

            var endButton = startButton + totalButtons - 1;
            if (endButton >= this.totalPages) endButton = this.totalPages;
            if (this.totalPages > totalButtons &&
                (endButton - startButton + 1) < totalButtons) {
                startButton = endButton - totalButtons + 1;
            }

            var prevPage = this.currentPage - pageSkip;
            if (prevPage < 1) prevPage = 1;

            var nextPage = this.currentPage + pageSkip;
            if (nextPage > this.totalPages) nextPage = this.totalPages;

            this.buttons.push(new PagerButton("<strong>&lt;&lt;</strong>", 1, endButton > totalButtons));
            this.buttons.push(new PagerButton("<strong>&lt;</strong>", prevPage, endButton > totalButtons));

            for (var i = startButton; i <= endButton; i++) {
                this.buttons.push(new PagerButton(i, i, true, i === this.currentPage));
            }

            this.buttons.push(new PagerButton("<strong>&gt;</strong>", nextPage, endButton < this.totalPages));
            this.buttons.push(new PagerButton("<strong>&gt;&gt;</strong>", this.totalPages, endButton < this.totalPages));
        }
        return Pager;
    }
    idAdmPager.$inject = ["$sce"];
    app.service("idAdmPager", idAdmPager);

    function ttConfirmClick() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var prevent = true;
                var cb = null;
                elem.on("click", function (e) {
                    if (prevent) {
                        e.preventDefault();
                        $(attrs.ttConfirmClick).modal('show');
                        if (!cb) {
                            cb = function () {
                                $(this).off("confirm");
                                prevent = false;
                                elem.trigger("click");
                            };
                            $(attrs.ttConfirmClick).on("confirm", cb);
                        }
                    }
                });
            }
        }
    }
    ttConfirmClick.$inject = [];
    app.directive("ttConfirmClick", ttConfirmClick);

    function idAdmMessage(PathBase) {
        return {
            restrict: 'E',
            scope: {
                model: "=message"
            },
            templateUrl: PathBase + '/assets/Templates.message.html',
            link: function (scope, elem, attrs) {
                scope.$watch("model.message", function(){
                    scope.message = scope.model.message;
                });
                scope.$watch("model.errors", function(){
                    scope.errors = scope.model.errors;
                });
            }
        };
    }
    idAdmMessage.$inject = ["PathBase"];
    app.directive("idAdmMessage", idAdmMessage);

    function idAdmPreventDefault() {
        return {
            link: function (scope, elem) {
                elem.on("click", function (e) {
                    e.preventDefault();
                });
            }
        }
    }
    idAdmPreventDefault.$inject = [];
    app.directive("idAdmPreventDefault", idAdmPreventDefault);
})(angular);

/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttidAdmClients", ['ngRoute', 'ttidAdm', 'ttidAdmUI']);
    function config($routeProvider, PathBase) {
        $routeProvider
            .when("/clients/list/:filter?/:page?", {
                controller: 'ListClientsCtrl',
                resolve: { clients: "idAdmClients" },
                templateUrl: PathBase + '/assets/Templates.clients.list.html'
            })
            .when("/clients/create", {
                controller: 'NewClientCtrl',
                resolve: {
                    api: function (idAdmApi) {
                        return idAdmApi.get();
                    }
                },
                templateUrl: PathBase + '/assets/Templates.clients.new.html'
            })
            .when("/clients/edit/:subject", {
                controller: 'EditClientCtrl',
                resolve: { clients: "idAdmClients" },
                templateUrl: PathBase + '/assets/Templates.clients.edit.html'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    function ListClientsCtrl($scope, idAdmClients, idAdmPager, $routeParams, $location) {
        var model = {
            message : null,
            clients : null,
            pager : null,
            waiting : true,
            filter : $routeParams.filter,
            page : $routeParams.page || 1
        };
        $scope.model = model;

        $scope.search = function (filter) {
            var url = "/clients/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var itemsPerPage = 10;
        var startItem = (model.page - 1) * itemsPerPage;

        idAdmClients.getClients(model.filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
            $scope.model.clients = result.data.items;
            if (result.data.items && result.data.items.length) {
                $scope.model.pager = new idAdmPager(result.data, itemsPerPage);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListClientsCtrl.$inject = ["$scope", "idAdmClients", "idAdmPager", "$routeParams", "$location"];
    app.controller("ListClientsCtrl", ListClientsCtrl);

    function NewClientCtrl($scope, idAdmClients, api, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;
        if (!api.links.createClient) {
            feedback.errors = "Create Not Supported";
            return;
        }
        else {
            var properties = api.links.createClient.meta
                .map(function (item) {
                    return {
                        meta : item,
                        data : item.dataType === 5 ? false : undefined
                    };
                });
            $scope.properties = properties;
            $scope.create = function (properties) {
                var props = properties.map(function (item) {
                    return {
                        type: item.meta.type,
                        value: item.data
                    };
                });
                idAdmClients.createClient(props)
                    .then(function (result) {
                        $scope.last = result;
                        feedback.message = "Create Success";
                    }, feedback.errorHandler);
            };
        }
    }
    NewClientCtrl.$inject = ["$scope", "idAdmClients", "api", "ttFeedback"];
    app.controller("NewClientCtrl", NewClientCtrl);

    function EditClientCtrl($scope, idAdmClients, $routeParams, ttFeedback, $location) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;

        function loadClient() {
            return idAdmClients.getClient($routeParams.subject)
                .then(function (result) {
                    $scope.client = result;
                    if (!result.data.properties) {
                        $scope.tab = 1;
                    }

                }, feedback.errorHandler);
        };
        loadClient();

        $scope.setProperty = function (property) {
            idAdmClients.setProperty(property)
                .then(function () {
                    if (property.meta.dataType !== 1) {
                        feedback.message = property.meta.name + " Changed to: " + property.data;
                    }
                    else {
                        feedback.message = property.meta.name + " Changed";
                    }
                    loadClient();
                }, feedback.errorHandler);
        };

        $scope.deleteClient = function (client) {
         idAdmClients.deleteClient(client)
                .then(function () {
                    feedback.message = "Client Deleted";
                    $scope.client = null;
                    $location.path('/clients/list');
                }, feedback.errorHandler);
        };

        //Claims
        $scope.addClientClaim = function (claims, claim) {
            idAdmClients.addClientClaim(claims, claim)
                .then(function () {
                    feedback.message = "Claim Added : " + claim.type + ", " + claim.value;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeClientClaim = function (claim) {
            idAdmClients.removeClientClaim(claim)
                .then(function () {
                    feedback.message = "Claim Removed : " + claim.data.type + ", " + claim.data.value;
                    loadClient().then(function () {
                        $scope.claim = claim.data;
                    });
                }, feedback.errorHandler);
        };
        //Client Secret
        $scope.availableHashes = {
            chosenHash: "SHA-512",
            choices:[
            {
                id: "SHA-256",
                text: "SHA-256",
                isDefault: "false"
            }, {
                id: "SHA-512",
                text: "SHA-512",
                isDefault: "true"
            }
            ]
        };
        function calculateClientHash (clientSecret) {
            var hashObj = new jsSHA(
				$scope.availableHashes.chosenHash,
				"TEXT",
				{ numRounds: parseInt(1, 10) }
			);
            hashObj.update(clientSecret.value);
            clientSecret.value = hashObj.getHash("B64");
        }
        $scope.addClientSecret = function (clientSecrets, clientSecret) {
            calculateClientHash(clientSecret);
            idAdmClients.addClientSecret(clientSecrets, clientSecret)
                .then(function () {
                    feedback.message = "Client Secret Added : " + clientSecret.type + ", " + clientSecret.value;
                    clientSecret.type = "";
                    clientSecret.value = "";
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeClientSecret = function (clientSecret) {
            idAdmClients.removeClientSecret(clientSecret)
                .then(function () {
                    feedback.message = "Client Secret Removed : " + clientSecret.data.type + ", " + clientSecret.data.value;
                    loadClient().then(function () {
                        $scope.clientSecret = clientSecret.data;
                    });
                }, feedback.errorHandler);
        };
        //IdentityProviderRestriction
        $scope.addIdentityProviderRestriction = function (identityProviderRestrictions, identityProviderRestriction) {
            idAdmClients.addIdentityProviderRestriction(identityProviderRestrictions, identityProviderRestriction)
                .then(function () {
                    feedback.message = "Client Provider Restriction Added : " + identityProviderRestriction.provider;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeIdentityProviderRestriction = function (identityProviderRestriction) {
            idAdmClients.removeIdentityProviderRestriction(identityProviderRestriction)
                .then(function () {
                    feedback.message = "Client  Provider Restriction Removed : " + identityProviderRestriction.provider;
                    loadClient().then(function () {
                        $scope.identityProviderRestriction = identityProviderRestriction.data;
                    });
                }, feedback.errorHandler);
        };
        //PostLogoutRedirectUri
        $scope.addPostLogoutRedirectUri = function (postLogoutRedirectUris, postLogoutRedirectUri) {
            idAdmClients.addPostLogoutRedirectUri(postLogoutRedirectUris, postLogoutRedirectUri)
                .then(function () {
                    feedback.message = "Client Post Logout Redirect Uri : " + postLogoutRedirectUri.uri;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removePostLogoutRedirectUri = function (postLogoutRedirectUri) {
            idAdmClients.removePostLogoutRedirectUri(postLogoutRedirectUri)
                .then(function () {
                    feedback.message = "Client Post Logout Redirect Uri  Removed : " + postLogoutRedirectUri.data.uri;
                    loadClient().then(function () {
                        $scope.postLogoutRedirectUri = postLogoutRedirectUri.data;
                    });
                }, feedback.errorHandler);
        };
        //RedirectUri
        $scope.addRedirectUri = function (redirectUris, redirectUri) {
            idAdmClients.addRedirectUri(redirectUris, redirectUri)
                .then(function () {
                    feedback.message = "Client redirect uri : " + redirectUri.uri;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeRedirectUri = function (redirectUri) {
            idAdmClients.removeRedirectUri(redirectUri)
                .then(function () {
                    feedback.message = "Client redirect uri removed : " + redirectUri.data.uri;
                    loadClient().then(function () {
                        $scope.redirectUri = redirectUri.data;
                    });
                }, feedback.errorHandler);
        };
        //AllowedCorsOrigin
        $scope.addAllowedCorsOrigin = function (allowedCorsOrigins, allowedCorsOrigin) {
            idAdmClients.addAllowedCorsOrigin(allowedCorsOrigins, allowedCorsOrigin)
                .then(function () {
                    feedback.message = "Client allowed cors : " + allowedCorsOrigin.origin;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeAllowedCorsOrigin = function (allowedCorsOrigin) {
            idAdmClients.removeAllowedCorsOrigin(allowedCorsOrigin)
                .then(function () {
                    feedback.message = "Client allowed cors removed : " + allowedCorsOrigin.data.origin;
                    loadClient().then(function () {
                        $scope.allowedCorsOrigin = allowedCorsOrigin.data;
                    });
                }, feedback.errorHandler);
        };
        //AllowedGrantType
        $scope.addAllowedCustomGrantType = function (grantTypes, grantType) {
            idAdmClients.addAllowedCustomGrantType(grantTypes, grantType)
                .then(function () {
                    feedback.message = "Client grant type : " + grantType.grantType;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeAllowedCustomGrantType = function (grantType) {
            idAdmClients.removeAllowedCustomGrantType(grantType)
                .then(function () {
                    feedback.message = "Client grant type removed : " + grantType.data.grantType;
                    loadClient().then(function () {
                        $scope.grantType = grantType.data;
                    });
                }, feedback.errorHandler);
        };
        //AllowedScope
        $scope.addAllowedScope = function (scopes, scope) {
            idAdmClients.addAllowedScope(scopes, scope)
                .then(function () {
                    feedback.message = "Client scope : " + scope.scope;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeAllowedScope = function (scope) {
            idAdmClients.removeAllowedScope(scope)
                .then(function () {
                    feedback.message = "Client scope removed : " + scope.data.scope;
                    loadClient().then(function () {
                        $scope.allowedScope = scope.data;
                    });
                }, feedback.errorHandler);
        };
    }  
    EditClientCtrl.$inject = ["$scope", "idAdmClients", "$routeParams", "ttFeedback", "$location"];
    app.controller("EditClientCtrl", EditClientCtrl);

})(angular);

/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttidAdmScopes", ['ngRoute', 'ttidAdm', 'ttidAdmUI', 'ui.bootstrap']);
    function config($routeProvider, PathBase) {
        $routeProvider
            .when("/scopes/list/:filter?/:page?", {
                controller: 'ListScopesCtrl',
                resolve: { scopes: "idAdmScopes" },
                templateUrl: PathBase + '/assets/Templates.scopes.list.html'
            })
            .when("/scopes/create", {
                controller: 'NewScopeCtrl',
                resolve: {
                    api: function (idAdmApi) {
                        return idAdmApi.get();
                    }
                },
                templateUrl: PathBase + '/assets/Templates.scopes.new.html'
            })
            .when("/scopes/edit/:subject", {
                controller: 'EditScopeCtrl',
                resolve: { scopes: "idAdmScopes" },
                templateUrl: PathBase + '/assets/Templates.scopes.edit.html'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    function ListScopesCtrl($scope, idAdmScopes, idAdmPager, $routeParams, $location) {
        var model = {
            message: null,
            scopes: null,
            pager: null,
            waiting: true,
            filter: $routeParams.filter,
            page: $routeParams.page || 1
        };
        $scope.model = model;

        $scope.search = function (filter) {
            var url = "/scopes/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var itemsPerPage = 10;
        var startItem = (model.page - 1) * itemsPerPage;

        idAdmScopes.getScopes(model.filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
   
            $scope.model.scopes = result.data.items;
            if (result.data.items && result.data.items.length) {
                $scope.model.pager = new idAdmPager(result.data, itemsPerPage);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListScopesCtrl.$inject = ["$scope", "idAdmScopes", "idAdmPager", "$routeParams", "$location"];
    app.controller("ListScopesCtrl", ListScopesCtrl);

    function NewScopeCtrl($scope, idAdmScopes, api, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;
        if (!api.links.createScope) {
            feedback.errors = "Create Not Supported";
            return;
        }
        else {
            var properties = api.links.createScope.meta
                .map(function (item) {
                    return {
                        meta: item,
                        data: item.dataType === 5 ? false : undefined
                    };
                });
            $scope.properties = properties;
            $scope.create = function (properties) {
                var props = properties.map(function (item) {
                    return {
                        type: item.meta.type,
                        value: item.data
                    };
                });
                idAdmScopes.createScope(props)
                    .then(function (result) {
                        $scope.last = result;
                        feedback.message = "Create Success";
                    }, feedback.errorHandler);
            };
        }
    }
    NewScopeCtrl.$inject = ["$scope", "idAdmScopes", "api", "ttFeedback"];
    app.controller("NewScopeCtrl", NewScopeCtrl);

    function EditScopeCtrl($scope, idAdmScopes, $routeParams, ttFeedback, $location) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;

        function loadScope() {
            return idAdmScopes.getScope($routeParams.subject)
                .then(function (result) {
                    $scope.scope = result;
                    if (!result.data.properties) {
                        $scope.tab = 1;
                    }

                }, feedback.errorHandler);
        };
        loadScope();

        $scope.setProperty = function (property) {
            idAdmScopes.setProperty(property)
                .then(function () {
                    if (property.meta.dataType !== 1) {
                        feedback.message = property.meta.name + " Changed to: " + property.data;
                    }
                    else {
                        feedback.message = property.meta.name + " Changed";
                    }
                    loadScope();
                }, feedback.errorHandler);
        };

        $scope.deleteScope = function (scope) {
            idAdmScopes.deleteScope(scope)
                   .then(function () {
                       feedback.message = "Scope Deleted";
                       $scope.scope = null;
                       $location.path('/scopes/list');
                   }, feedback.errorHandler);
        };

        //Claims
        $scope.addScopeClaim = function (scopeClaims, scopeClaim) {
            idAdmScopes.addScopeClaim(scopeClaims, scopeClaim)
                .then(function () {
                    feedback.message = "Scope Claim Added : " + scopeClaim.name + ", " + scopeClaim.description;
                    loadScope().then(function () {
                        $scope.claim = scopeClaim.data;
                    });
                    loadScope();
                }, feedback.errorHandler);
        };
        $scope.removeScopeClaim = function (scopeClaim) {
            idAdmScopes.removeScopeClaim(scopeClaim)
                .then(function () {
                    feedback.message = "Scope Claim Removed : " + scopeClaim.data.name + ", " + scopeClaim.data.description;
                    loadScope().then(function () {
                        $scope.claim = scopeClaim.data;
                    });
                }, feedback.errorHandler);
        };

        $scope.availableHashes = {
            chosenHash: "SHA-512",
            choices: [
            {
                id: "SHA-256",
                text: "SHA-256",
                isDefault: "false"
            }, {
                id: "SHA-512",
                text: "SHA-512",
                isDefault: "true"
            }
            ]
        };
        function calculateScopeScretHash(clientSecret) {
            var hashObj = new jsSHA(
				$scope.availableHashes.chosenHash,
				"TEXT",
				{ numRounds: parseInt(1, 10) }
			);
            hashObj.update(clientSecret.value);
            clientSecret.value = hashObj.getHash("B64");
        }

        //Datepicker
      
        $scope.calendar = {
            isopen: {},
            dateFormat: "yyyy/MM/dd hh:MM",
            dateOptions: {},
            open: function ($event, index) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.calendar.isopen[index] = true;
            }
        };        
        $scope.dateSelected = function (secret) {
            var value = $("[data-dateid='" + secret.data.id + "']").val();
            secret.data.expiration = value;

        }
        //Secrets
        $scope.addScopeSecret = function (scopeSecrets, scopeSecret) {
            calculateScopeScretHash(scopeSecret);
            idAdmScopes.addScopeSecret(scopeSecrets, scopeSecret)
                .then(function () {
                    feedback.message = "Scope Secret Added : " + scopeSecret.type;
                    loadScope().then(function () {
                        $scope.secret = scopeSecret.data;
                    });
                    loadScope();
                }, feedback.errorHandler);
        };
        $scope.updateScopeClaim = function (claim) {
            idAdmScopes.updateScopeClaim(claim)
                      .then(function () {
                          feedback.message = "Scope claim updated : " + claim.data.name;
                          loadScope().then(function () {
                              $scope.claim = claim.data;
                          });
                      }, feedback.errorHandler);
        }
        $scope.updateScopeSecret = function (scopeSecret) {
            idAdmScopes.updateScopeSecret(scopeSecret)
                .then(function () {
                    feedback.message = "Scope Secret updated : " + scopeSecret.data.type;
                    loadScope().then(function () {
                        $scope.secret = scopeSecret.data;
                    });
                }, feedback.errorHandler);
        };
        $scope.removeScopeSecret = function (scopeSecret) {
            idAdmScopes.removeScopeSecret(scopeSecret)
                .then(function () {
                    feedback.message = "Scope Secret Removed : " + scopeSecret.data.type;
                    loadScope().then(function () {
                        $scope.secret = scopeSecret.data;
                    });
                }, feedback.errorHandler);
        };
        
    }
    EditScopeCtrl.$inject = ["$scope", "idAdmScopes", "$routeParams", "ttFeedback", "$location"];
    app.controller("EditScopeCtrl", EditScopeCtrl);

})(angular);

/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttidAdmApp", ['ngRoute', 'ttidAdm', 'ttidAdmUI',  'ttidAdmClients', 'ttidAdmScopes']);
    function config(PathBase, $routeProvider) {
        $routeProvider
            .when("/home", {
                controller: 'HomeCtrl',
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/logout", {
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/callback/:response", {
                templateUrl: PathBase + '/assets/Templates.message.html', 
                controller: 'CallbackCtrl'
            })
            .when("/error", {
                templateUrl: PathBase + '/assets/Templates.message.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    config.$inject = ["PathBase", "$routeProvider"];
    app.config(config);

    function LayoutCtrl($rootScope, SiteName, PathBase, idAdmApi, $location, $window, idAdmTokenManager, idAdmErrorService, ShowLoginButton) {
        $rootScope.PathBase = PathBase;
        $rootScope.layout = {};
        $rootScope.layout.sitename = SiteName;

        function removed() {
            idAdmErrorService.clear();
            $rootScope.layout.username = null;
            $rootScope.layout.links = null;
            $rootScope.layout.showLogout = !idAdmTokenManager.expired;
            $rootScope.layout.showLogin = idAdmTokenManager.expired;
        }

        function load() {
            removed();

            if (!idAdmTokenManager.expired) {
                idAdmApi.get().then(function (api) {
                    $rootScope.layout.username = api.data.currentUser.username;
                    $rootScope.layout.links = api.links;
                }, function (err) {
                    idAdmErrorService.show(err);
                });
            }
        }

        idAdmTokenManager.addOnTokenObtained(load);
        idAdmTokenManager.addOnTokenRemoved(removed);
        load();

        if (idAdmTokenManager.expired &&
            $location.path() !== "/" &&
            $location.path().indexOf("/callback/") !== 0 && 
            $location.path() !== "/error" && 
            $location.path() !== "/logout") {
                $location.path("/");
        }

        idAdmTokenManager.addOnTokenExpired(function () {
            $location.path("/");
            idAdmErrorService.show("Your session has expired.");
        });

        $rootScope.login = function () {
            idAdmErrorService.clear();
            idAdmTokenManager.redirectForToken();
        }
        $rootScope.logout = function () {
            idAdmErrorService.clear();
            idAdmTokenManager.removeToken();
            $location.path("/logout");
            if (ShowLoginButton !== false) {
                $window.location = PathBase + "/logout";
            }
        }

        $rootScope.toggle = function () {
            $('.navbar-nav').toggleClass('slide-in');
            $('.side-body').toggleClass('body-slide-in');
        }
       
    }
    LayoutCtrl.$inject = ["$rootScope", "SiteName", "PathBase", "idAdmApi", "$location", "$window", "idAdmTokenManager", "idAdmErrorService", "ShowLoginButton"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl(ShowLoginButton, idAdmTokenManager, $routeParams) {
        if (ShowLoginButton === false && idAdmTokenManager.expired) {
            idAdmTokenManager.redirectForToken();
        }
    }
    HomeCtrl.$inject = ["ShowLoginButton", "idAdmTokenManager", "$routeParams"];
    app.controller("HomeCtrl", HomeCtrl);

    function CallbackCtrl(idAdmTokenManager, $location, $rootScope, $routeParams, idAdmErrorService) {
        var hash = $routeParams.response;
        if (hash.charAt(0) === "&") {
            hash = hash.substr(1);
        }
        idAdmTokenManager.processTokenCallbackAsync(hash).then(function() {
            $location.url("/");
        }, function (error) {
            idAdmErrorService.error(error && error.message || error);
        });
    }
    CallbackCtrl.$inject = ["idAdmTokenManager", "$location", "$rootScope", "$routeParams", "idAdmErrorService"];
    app.controller("CallbackCtrl", CallbackCtrl);
})(angular);