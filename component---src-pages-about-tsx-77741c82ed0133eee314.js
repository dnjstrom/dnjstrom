webpackJsonp([0x8682650a63cd],{39:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=a.call(e),t=a.call(t),s(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=l(e),d=l(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(c=f[i],!s(e[c],t[c],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,l=n(41),u=n(40),s=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},40:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},41:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},42:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},28:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){v.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var i=n(10),a=r(i),l=n(14),u=r(l),s=n(13),c=r(s),f=n(51),d=r(f),p=n(32),T=r(p),E=n(1),h=r(E),m=n(2),y=r(m),b=function(e){var t=(0,T.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},A={},g=function(e){var t=b(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!A[n]||(A[n]=!0,!1)},S=void 0,v=[],C=function(e,t){o().observe(e),v.push([e,t])},w=null,_=function(){if(null!==w)return w;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return w=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',a=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1",s=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+a+l+t+n+i+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+s+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},R=function(e){var t=e.style,n=e.onLoad,r=(0,d.default)(e,["style","onLoad"]);return h.default.createElement("img",(0,T.default)({},r,{onLoad:n,style:(0,T.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};R.propTypes={style:y.default.object,onLoad:y.default.func};var M=function(e){function t(n){(0,a.default)(this,t);var r=(0,u.default)(this,e.call(this,n)),o=!0,i=!0,l=!1,s=g(n);return!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,i=!1,l=!0),"undefined"==typeof window&&(o=!1,i=!1),r.state={isVisible:o,imgLoaded:i,IOSupported:l},r.handleRef=r.handleRef.bind(r),r}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&C(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),n=t.title,r=t.alt,o=t.className,i=t.outerWrapperClassName,a=t.style,l=void 0===a?{}:a,u=t.imgStyle,s=void 0===u?{}:u,c=t.sizes,f=t.resolutions,d=t.backgroundColor,p=t.Tag,E=void 0;E="boolean"==typeof d?"lightgray":d;var m=(0,T.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},s),y=(0,T.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},s);if(c){var A=c;return A.srcWebp&&A.srcSetWebp&&_()&&(A.src=A.srcWebp,A.srcSet=A.srcSetWebp),h.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},h.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,T.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},h.default.createElement(p,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),A.base64&&h.default.createElement(R,{alt:r,title:n,src:A.base64,style:m}),A.tracedSVG&&h.default.createElement(R,{alt:r,title:n,src:A.tracedSVG,style:m}),E&&h.default.createElement(p,{title:n,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(R,{alt:r,title:n,srcSet:A.srcSet,src:A.src,sizes:A.sizes,style:y,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,T.default)({alt:r,title:n},A))}})))}if(f){var g=f,S=(0,T.default)({position:"relative",overflow:"hidden",display:"inline-block",width:g.width,height:g.height},l);return"inherit"===l.display&&delete S.display,g.srcWebp&&g.srcSetWebp&&_()&&(g.src=g.srcWebp,g.srcSet=g.srcSetWebp),h.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},h.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:S,ref:this.handleRef},g.base64&&h.default.createElement(R,{alt:r,title:n,src:g.base64,style:m}),g.tracedSVG&&h.default.createElement(R,{alt:r,title:n,src:g.tracedSVG,style:m}),E&&h.default.createElement(p,{title:n,style:{backgroundColor:E,width:g.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:g.height}}),this.state.isVisible&&h.default.createElement(R,{alt:r,title:n,width:g.width,height:g.height,srcSet:g.srcSet,src:g.src,style:y,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,T.default)({alt:r,title:n,width:g.width,height:g.height},g))}})))}return null},t}(h.default.Component);M.defaultProps={fadeIn:!0,alt:"",Tag:"div"},M.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,imgStyle:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func,Tag:y.default.string},t.default=M},44:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,l,u=n(e),s=1;s<arguments.length;s++){r=Object(arguments[s]);for(var c in r)i.call(r,c)&&(u[c]=r[c]);if(o){l=o(r);for(var f=0;f<l.length;f++)a.call(r,l[f])&&(u[l[f]]=r[l[f]])}}return u}},45:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),d=n(2),p=r(d),T=n(47),E=r(T),h=n(39),m=r(h),y=n(46),b=n(12),A=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,m.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return u({},o,(t={},t[r.type]=a,t.titleAttributes=u({},i),t));case b.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},i)});case b.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},i)})}return u({},o,(n={},n[r.type]=u({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,l=o(i,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,a),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=u({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},s(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},g=function(){return null},S=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(g),v=A(S);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},12:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},46:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),l=r(a),u=n(44),s=r(u),c=n(12),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=m(e,c.TAG_NAMES.TITLE),n=m(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=m(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},h=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],u=l.toLowerCase();t.indexOf(u)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(l)===-1||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],u=(0,s.default)({},r[l],o[l]);r[l]=u}return e},[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:m(e,c.HELMET_PROPS.DEFER),encode:m(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:h(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:h(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:h(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),A=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},C=null,w=function(e){C&&S(C),e.defer?C=g(function(){_(e,function(){C=null})}):(_(e),C=null)},_=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;M(c.TAG_NAMES.BODY,r),M(c.TAG_NAMES.HTML,o),R(d,p);var T={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,i),metaTags:P(c.TAG_NAMES.META,a),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,l),scriptTags:P(c.TAG_NAMES.SCRIPT,s),styleTags:P(c.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=T[e].oldTags)}),t&&t(),u(e,E,h)},O=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=O(e)),M(c.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var u=a[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),o.indexOf(u)===-1&&o.push(u);var f=i.indexOf(u);f!==-1&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},L=function(e,t,n,r){var o=I(n),i=O(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[l.default.createElement(c.TAG_NAMES.TITLE,i,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),l.default.createElement(e,o)})},x=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return L(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return N(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(c.TAG_NAMES.BASE,t,r),bodyAttributes:x(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(c.ATTRIBUTE_NAMES.HTML,o,r),link:x(c.TAG_NAMES.LINK,i,r),meta:x(c.TAG_NAMES.META,a,r),noscript:x(c.TAG_NAMES.NOSCRIPT,l,r),script:x(c.TAG_NAMES.SCRIPT,u,r),style:x(c.TAG_NAMES.STYLE,s,r),title:x(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=w,t.mapStateOnServer=U,t.reducePropsToState=y,t.requestAnimationFrame=g,t.warn=v}).call(t,function(){return this}())},47:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function d(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return s.createElement(l,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=c.canUseDOM,E}}var u=n(1),s=r(u),c=r(n(42)),f=r(n(48));e.exports=l},48:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var s=i[u];if(!l(s))return!1;var c=e[s],f=t[s];if(o=n?n.call(r,c,f,s):void 0,o===!1||void 0===o&&c!==f)return!1}return!0}},66:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),i=function(){return o.default.createElement("a",{href:"https://github.com/dnjstrom"},o.default.createElement("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:50,height:50,strokeWidth:3},role:"img","aria-label":"Github - Click here to browse my code."},o.default.createElement("title",null,"Github"),o.default.createElement("desc",null,"Click here to browse my code."),o.default.createElement("g",{id:"github"},o.default.createElement("path",{id:"Oval",d:"M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",transform:"translate(2 2)",stroke:"#828282","stroke-width":"3"}),o.default.createElement("path",{id:"Shape","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 8.38939C0 12.0953 2.34412 15.2399 5.59535 16.3493C6.0047 16.4265 6.15388 16.1675 6.15388 15.945C6.15388 15.7457 6.14685 15.2183 6.14283 14.5184C3.86702 15.0252 3.38684 13.3937 3.38684 13.3937C3.01466 12.4244 2.47823 12.1664 2.47823 12.1664C1.73536 11.6457 2.53448 11.6566 2.53448 11.6566C3.3557 11.7158 3.78766 12.5212 3.78766 12.5212C4.51797 13.8031 5.70284 13.4328 6.16895 13.218C6.24329 12.6758 6.45474 12.3065 6.6883 12.0964C4.87157 11.8847 2.96142 11.1652 2.96142 7.9506C2.96142 7.03442 3.28036 6.2856 3.80373 5.69901C3.71985 5.48683 3.43908 4.63399 3.8841 3.47935C3.8841 3.47935 4.57121 3.25327 6.13379 4.33889C6.78675 4.15298 7.48642 4.05976 8.18207 4.05667C8.87722 4.05976 9.57689 4.15298 10.2309 4.33889C11.7924 3.25327 12.4785 3.47935 12.4785 3.47935C12.9246 4.63399 12.6438 5.48683 12.5599 5.69901C13.0843 6.2856 13.4007 7.03442 13.4007 7.9506C13.4007 11.173 11.488 11.8821 9.66529 12.0902C9.95912 12.3492 10.2203 12.8612 10.2203 13.6434C10.2203 14.7651 10.2108 15.67 10.2108 15.945C10.2108 16.1695 10.3579 16.4301 10.7733 16.3482C14.0215 15.2369 16.3636 12.0948 16.3636 8.38939C16.3636 3.75591 12.7 0 8.18106 0C3.6636 0 0 3.75591 0 8.38939Z",transform:"translate(8.81818 8.81818)",fill:"#828282"}))))};t.default=i},67:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),i=function(){return o.default.createElement("a",{href:"https://www.linkedin.com/in/dnjstrom/"},o.default.createElement("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:50,height:50,strokeWidth:3},role:"img","aria-label":"Linkedin - Click here to visit my professional profile."},o.default.createElement("title",null,"LinkedIn"),o.default.createElement("desc",null,"Click here to visit my professional profile."),o.default.createElement("g",{id:"linkedin"},o.default.createElement("path",{id:"Oval",d:"M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",transform:"translate(2 2)",stroke:"#828282",strokeWidth:"3"}),o.default.createElement("path",{id:"Shape",fillRule:"evenodd",clipRule:"evenodd",d:"M0.343956 4.37258H3.0018V13.6355H0.343956V4.37258ZM1.60513 3.21395H1.58588C0.62377 3.21395 0 2.50585 0 1.60916C0 0.694129 0.642211 0 1.62357 0C2.60412 0 3.20705 0.692383 3.22629 1.60654C3.22629 2.50323 2.60412 3.21395 1.60513 3.21395ZM13.6364 13.6364H10.6225V8.84207C10.6225 7.5874 10.1511 6.73174 9.11443 6.73174C8.32148 6.73174 7.88052 7.30887 7.67527 7.8668C7.5983 8.06587 7.61032 8.34439 7.61032 8.62379V13.6364H4.62456C4.62456 13.6364 4.66305 5.14441 4.62456 4.37258H7.61032V5.82632C7.78671 5.19069 8.74081 4.28352 10.2634 4.28352C12.1523 4.28352 13.6364 5.61677 13.6364 8.48496V13.6364Z",transform:"translate(10.1818 10.1818)",fill:"#828282"}))))};t.default=i},68:function(e,t,n){"use strict";function r(e,t){return e.raw=t,e}var o=r(["\n  display: flex;\n  justify-content: space-around;\n\n  ",";\n"],["\n  display: flex;\n  justify-content: space-around;\n\n  ",";\n"]),i=r(["\n    & > * {\n      margin-left: "," !important;\n      margin-right: "," !important;\n\n      &:first-child {\n        margin-left: 0 !important;\n      }\n\n      &:last-child {\n        margin-right: 0 !important;\n      }\n    }\n  "],["\n    & > * {\n      margin-left: "," !important;\n      margin-right: "," !important;\n\n      &:first-child {\n        margin-left: 0 !important;\n      }\n\n      &:last-child {\n        margin-right: 0 !important;\n      }\n    }\n  "]),a=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(n(4)),u=l.default.div(o,function(e){var t=e.spacing,n=void 0===t?"0.5rem":t;return l.css(i,n,n)});t.default=u},69:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),i=function(){return o.default.createElement("a",{href:"https://twitter.com/dnjstrom"},o.default.createElement("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:50,height:50,strokeWidth:3},role:"img","aria-label":"Twitter - Click here to visit my feed."},o.default.createElement("title",null,"Twitter"),o.default.createElement("desc",null,"Click here to visit my feed."),o.default.createElement("g",{id:"twitter"},o.default.createElement("path",{id:"Oval",d:"M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",transform:"translate(2 2)",stroke:"#828282","stroke-width":"3"}),o.default.createElement("path",{id:"Shape","fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.6315 1.94027C13.2382 1.55736 13.7038 0.950192 13.9223 0.226912C13.3542 0.582347 12.7264 0.839396 12.0566 0.978556C11.5221 0.375822 10.7582 0 9.91272 0C8.29071 0 6.9763 1.38717 6.9763 3.09788C6.9763 3.34074 7.00067 3.5774 7.0511 3.80343C4.61053 3.67402 2.44645 2.44196 0.996734 0.566393C0.743769 1.02553 0.599217 1.55736 0.599217 2.12464C0.599217 3.19892 1.11775 4.14734 1.90607 4.70398C1.42451 4.68803 0.971522 4.5471 0.574845 4.31664V4.35475C0.574845 5.85627 1.58671 7.10872 2.93221 7.39236C2.68513 7.46504 2.42628 7.50138 2.15735 7.50138C1.96826 7.50138 1.78336 7.48276 1.6052 7.44642C1.97834 8.67671 3.06332 9.57372 4.34916 9.59765C3.34318 10.4291 2.07667 10.9237 0.700908 10.9237C0.46391 10.9237 0.229434 10.9104 0 10.8811C1.30012 11.7595 2.84397 12.2727 4.50295 12.2727C9.90683 12.2727 12.8601 7.5519 12.8601 3.45774C12.8601 3.32301 12.8584 3.18917 12.8525 3.0571C13.4265 2.62012 13.9257 2.07411 14.3182 1.45277C13.7912 1.69918 13.2248 1.86582 12.6315 1.94027Z",
transform:"translate(10.1818 11.5454)",fill:"#828282"}))))};t.default=i},161:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(1)),i=r(n(28)),a=r(n(18)),l=r(n(30)),u=r(n(31)),s=r(n(68)),c=r(n(67)),f=r(n(69)),d=r(n(66)),p=r(n(50)),T=n(45),E=function(e){var t=e.data;return o.default.createElement("div",null,o.default.createElement(T.Helmet,null,o.default.createElement("title",null,"Daniel Ström - About")),o.default.createElement(p.default,null),o.default.createElement(a.default,{spacing:"1rem"},o.default.createElement(l.default,null,"About."),o.default.createElement(i.default,{title:"An image of me, Daniel",alt:"An image of me, Daniel",sizes:t.imgAvatar.sizes}),o.default.createElement(u.default,null,"My full name is ",o.default.createElement("em",null,"Daniel")," ",o.default.createElement("em",{style:{fontSize:"1.2rem"}},"Nils Johan")," ",o.default.createElement("em",null,"Ström")," (hence dnjstrom) and I’m a software engineer and UX designer based out of Uppsala, Sweden. The past years I’ve worked a lot with full stack web development using React and Node but enjoy pretty much any topic related to software production."),o.default.createElement(u.default,null,"If you’d like to get in contact with me you can find me on any of the below sites:"),o.default.createElement(s.default,null,o.default.createElement(c.default,null),o.default.createElement(f.default,null),o.default.createElement(d.default,null))))};t.default=E,t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-about-tsx-77741c82ed0133eee314.js.map