webpackJsonp([0x8682650a63cd],{36:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var i=a(10),r=n(i),o=a(13),s=n(o),d=a(12),u=n(d),f=a(41),c=n(f),p=a(40),h=n(p),m=a(1),g=n(m),y=a(2),v=n(y),w=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},C={},b=function(e){var t=w(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!C[a]||(C[a]=!0,!1)},E=void 0,S=[],_=function(e,t){l().observe(e),S.push([e,t])},j=null,M=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+o+t+a+i+l+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},k=function(e){var t=e.style,a=e.onLoad,n=(0,c.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,h.default)({},n,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};k.propTypes={style:v.default.object,onLoad:v.default.func};var O=function(e){function t(a){(0,r.default)(this,t);var n=(0,s.default)(this,e.call(this,a)),l=!0,i=!0,o=!1,d=b(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=!1,i=!1,o=!0),"undefined"==typeof window&&(l=!1,i=!1),n.state={isVisible:l,imgLoaded:i,IOSupported:o},n.handleRef=n.handleRef.bind(n),n}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=w(this.props),a=t.title,n=t.alt,l=t.className,i=t.outerWrapperClassName,r=t.style,o=void 0===r?{}:r,s=t.imgStyle,d=void 0===s?{}:s,u=t.sizes,f=t.resolutions,c=t.backgroundColor,p=t.Tag,m=void 0;m="boolean"==typeof c?"lightgray":c;var y=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),v=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var C=u;return C.srcWebp&&C.srcSetWebp&&M()&&(C.src=C.srcWebp,C.srcSet=C.srcSetWebp),g.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},g.default.createElement(p,{className:(l?l:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},g.default.createElement(p,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),C.base64&&g.default.createElement(k,{alt:n,title:a,src:C.base64,style:y}),C.tracedSVG&&g.default.createElement(k,{alt:n,title:a,src:C.tracedSVG,style:y}),m&&g.default.createElement(p,{title:a,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(k,{alt:n,title:a,srcSet:C.srcSet,src:C.src,sizes:C.sizes,style:v,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,h.default)({alt:n,title:a},C))}})))}if(f){var b=f,E=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:b.width,height:b.height},o);return"inherit"===o.display&&delete E.display,b.srcWebp&&b.srcSetWebp&&M()&&(b.src=b.srcWebp,b.srcSet=b.srcSetWebp),g.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},g.default.createElement(p,{className:(l?l:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},b.base64&&g.default.createElement(k,{alt:n,title:a,src:b.base64,style:y}),b.tracedSVG&&g.default.createElement(k,{alt:n,title:a,src:b.tracedSVG,style:y}),m&&g.default.createElement(p,{title:a,style:{backgroundColor:m,width:b.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:b.height}}),this.state.isVisible&&g.default.createElement(k,{alt:n,title:a,width:b.width,height:b.height,srcSet:b.srcSet,src:b.src,style:v,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,h.default)({alt:n,title:a,width:b.width,height:b.height},b))}})))}return null},t}(g.default.Component);O.defaultProps={fadeIn:!0,alt:"",Tag:"div"},O.propTypes={responsiveResolution:v.default.object,responsiveSizes:v.default.object,resolutions:v.default.object,sizes:v.default.object,fadeIn:v.default.bool,title:v.default.string,alt:v.default.string,className:v.default.oneOfType([v.default.string,v.default.object]),outerWrapperClassName:v.default.oneOfType([v.default.string,v.default.object]),style:v.default.object,imgStyle:v.default.object,position:v.default.string,backgroundColor:v.default.oneOfType([v.default.string,v.default.bool]),onLoad:v.default.func,Tag:v.default.string},t.default=O},56:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(1)),i=function(){return l.default.createElement("a",{href:"https://github.com/dnjstrom"},l.default.createElement("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:50,height:50,strokeWidth:3}},l.default.createElement("g",{id:"github"},l.default.createElement("path",{id:"Oval",d:"M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",transform:"translate(2 2)",stroke:"#828282","stroke-width":"3"}),l.default.createElement("path",{id:"Shape","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 8.38939C0 12.0953 2.34412 15.2399 5.59535 16.3493C6.0047 16.4265 6.15388 16.1675 6.15388 15.945C6.15388 15.7457 6.14685 15.2183 6.14283 14.5184C3.86702 15.0252 3.38684 13.3937 3.38684 13.3937C3.01466 12.4244 2.47823 12.1664 2.47823 12.1664C1.73536 11.6457 2.53448 11.6566 2.53448 11.6566C3.3557 11.7158 3.78766 12.5212 3.78766 12.5212C4.51797 13.8031 5.70284 13.4328 6.16895 13.218C6.24329 12.6758 6.45474 12.3065 6.6883 12.0964C4.87157 11.8847 2.96142 11.1652 2.96142 7.9506C2.96142 7.03442 3.28036 6.2856 3.80373 5.69901C3.71985 5.48683 3.43908 4.63399 3.8841 3.47935C3.8841 3.47935 4.57121 3.25327 6.13379 4.33889C6.78675 4.15298 7.48642 4.05976 8.18207 4.05667C8.87722 4.05976 9.57689 4.15298 10.2309 4.33889C11.7924 3.25327 12.4785 3.47935 12.4785 3.47935C12.9246 4.63399 12.6438 5.48683 12.5599 5.69901C13.0843 6.2856 13.4007 7.03442 13.4007 7.9506C13.4007 11.173 11.488 11.8821 9.66529 12.0902C9.95912 12.3492 10.2203 12.8612 10.2203 13.6434C10.2203 14.7651 10.2108 15.67 10.2108 15.945C10.2108 16.1695 10.3579 16.4301 10.7733 16.3482C14.0215 15.2369 16.3636 12.0948 16.3636 8.38939C16.3636 3.75591 12.7 0 8.18106 0C3.6636 0 0 3.75591 0 8.38939Z",transform:"translate(8.81818 8.81818)",fill:"#828282"}))))};t.default=i},57:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(1)),i=function(){return l.default.createElement("a",{href:"https://www.linkedin.com/in/dnjstrom/"},l.default.createElement("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:50,height:50,strokeWidth:3}},l.default.createElement("g",{id:"linkedin"},l.default.createElement("path",{id:"Oval",d:"M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",transform:"translate(2 2)",stroke:"#828282","stroke-width":"3"}),l.default.createElement("path",{id:"Shape","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.343956 4.37258H3.0018V13.6355H0.343956V4.37258ZM1.60513 3.21395H1.58588C0.62377 3.21395 0 2.50585 0 1.60916C0 0.694129 0.642211 0 1.62357 0C2.60412 0 3.20705 0.692383 3.22629 1.60654C3.22629 2.50323 2.60412 3.21395 1.60513 3.21395ZM13.6364 13.6364H10.6225V8.84207C10.6225 7.5874 10.1511 6.73174 9.11443 6.73174C8.32148 6.73174 7.88052 7.30887 7.67527 7.8668C7.5983 8.06587 7.61032 8.34439 7.61032 8.62379V13.6364H4.62456C4.62456 13.6364 4.66305 5.14441 4.62456 4.37258H7.61032V5.82632C7.78671 5.19069 8.74081 4.28352 10.2634 4.28352C12.1523 4.28352 13.6364 5.61677 13.6364 8.48496V13.6364Z",transform:"translate(10.1818 10.1818)",fill:"#828282"}))))};t.default=i},58:function(e,t,a){"use strict";function n(e,t){return e.raw=t,e}var l=n(["\n  display: flex;\n  justify-content: space-around;\n\n  ",";\n"],["\n  display: flex;\n  justify-content: space-around;\n\n  ",";\n"]),i=n(["\n    & > * {\n      margin-left: "," !important;\n      margin-right: "," !important;\n\n      &:first-child {\n        margin-left: 0 !important;\n      }\n\n      &:last-child {\n        margin-right: 0 !important;\n      }\n    }\n  "],["\n    & > * {\n      margin-left: "," !important;\n      margin-right: "," !important;\n\n      &:first-child {\n        margin-left: 0 !important;\n      }\n\n      &:last-child {\n        margin-right: 0 !important;\n      }\n    }\n  "]),r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(a(9)),s=o.default.div(l,function(e){var t=e.spacing,a=void 0===t?"0.5rem":t;return o.css(i,a,a)});t.default=s},59:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(1)),i=function(){return l.default.createElement("a",{href:"https://twitter.com/dnjstrom"},l.default.createElement("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:50,height:50,strokeWidth:3}},l.default.createElement("g",{id:"twitter"},l.default.createElement("path",{id:"Oval",d:"M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",transform:"translate(2 2)",stroke:"#828282","stroke-width":"3"}),l.default.createElement("path",{id:"Shape","fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.6315 1.94027C13.2382 1.55736 13.7038 0.950192 13.9223 0.226912C13.3542 0.582347 12.7264 0.839396 12.0566 0.978556C11.5221 0.375822 10.7582 0 9.91272 0C8.29071 0 6.9763 1.38717 6.9763 3.09788C6.9763 3.34074 7.00067 3.5774 7.0511 3.80343C4.61053 3.67402 2.44645 2.44196 0.996734 0.566393C0.743769 1.02553 0.599217 1.55736 0.599217 2.12464C0.599217 3.19892 1.11775 4.14734 1.90607 4.70398C1.42451 4.68803 0.971522 4.5471 0.574845 4.31664V4.35475C0.574845 5.85627 1.58671 7.10872 2.93221 7.39236C2.68513 7.46504 2.42628 7.50138 2.15735 7.50138C1.96826 7.50138 1.78336 7.48276 1.6052 7.44642C1.97834 8.67671 3.06332 9.57372 4.34916 9.59765C3.34318 10.4291 2.07667 10.9237 0.700908 10.9237C0.46391 10.9237 0.229434 10.9104 0 10.8811C1.30012 11.7595 2.84397 12.2727 4.50295 12.2727C9.90683 12.2727 12.8601 7.5519 12.8601 3.45774C12.8601 3.32301 12.8584 3.18917 12.8525 3.0571C13.4265 2.62012 13.9257 2.07411 14.3182 1.45277C13.7912 1.69918 13.2248 1.86582 12.6315 1.94027Z",transform:"translate(10.1818 11.5454)",fill:"#828282"}))))};t.default=i},159:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(1)),i=n(a(36)),r=n(a(17)),o=n(a(28)),s=n(a(29)),d=n(a(58)),u=n(a(57)),f=n(a(59)),c=n(a(56)),p=n(a(39)),h=function(e){var t=e.data;return l.default.createElement("div",null,l.default.createElement(p.default,null),l.default.createElement(r.default,{spacing:"1rem"},l.default.createElement(o.default,null,"About."),l.default.createElement(i.default,{title:"An image of me, Daniel",alt:"An image of me, Daniel",sizes:t.imgAvatar.sizes}),l.default.createElement(s.default,null,"My full name is ",l.default.createElement("em",null,"Daniel")," ",l.default.createElement("em",{style:{fontSize:"1.2rem"}},"Nils Johan")," ",l.default.createElement("em",null,"Ström")," (hence dnjstrom) and I’m a software engineer and UX designer based out of Uppsala, Sweden. The past years I’ve worked a lot with full stack web development using React and Node but enjoy pretty much any topic related to software production."),l.default.createElement(s.default,null,"If you’d like to get in contact you can find me on any of the below sites:"),l.default.createElement(d.default,null,l.default.createElement(u.default,null),l.default.createElement(f.default,null),l.default.createElement(c.default,null))))};t.default=h,t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-about-tsx-91dcc3e1e856be0b79f3.js.map