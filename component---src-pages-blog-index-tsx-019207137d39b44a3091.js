webpackJsonp([0x5d8f8720b98e],{28:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){_.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var r=a(10),i=n(r),o=a(14),s=n(o),d=a(13),u=n(d),f=a(51),c=n(f),p=a(32),m=n(p),g=a(1),h=n(g),y=a(2),b=n(y),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},S=void 0,_=[],L=function(e,t){l().observe(e),_.push([e,t])},z=null,j=function(){if(null!==z)return z;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return z=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},M=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+o+t+a+r+l+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},O=function(e){var t=e.style,a=e.onLoad,n=(0,c.default)(e,["style","onLoad"]);return h.default.createElement("img",(0,m.default)({},n,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};O.propTypes={style:b.default.object,onLoad:b.default.func};var R=function(e){function t(a){(0,i.default)(this,t);var n=(0,s.default)(this,e.call(this,a)),l=!0,r=!0,o=!1,d=E(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=!1,r=!1,o=!0),"undefined"==typeof window&&(l=!1,r=!1),n.state={isVisible:l,imgLoaded:r,IOSupported:o},n.handleRef=n.handleRef.bind(n),n}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&L(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,n=t.alt,l=t.className,r=t.outerWrapperClassName,i=t.style,o=void 0===i?{}:i,s=t.imgStyle,d=void 0===s?{}:s,u=t.sizes,f=t.resolutions,c=t.backgroundColor,p=t.Tag,g=void 0;g="boolean"==typeof c?"lightgray":c;var y=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),b=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&j()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),h.default.createElement(p,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},h.default.createElement(p,{className:(l?l:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},h.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&h.default.createElement(O,{alt:n,title:a,src:w.base64,style:y}),w.tracedSVG&&h.default.createElement(O,{alt:n,title:a,src:w.tracedSVG,style:y}),g&&h.default.createElement(p,{title:a,style:{backgroundColor:g,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(O,{alt:n,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:b,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,m.default)({alt:n,title:a},w))}})))}if(f){var E=f,S=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},o);return"inherit"===o.display&&delete S.display,E.srcWebp&&E.srcSetWebp&&j()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),h.default.createElement(p,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},h.default.createElement(p,{className:(l?l:"")+" gatsby-image-wrapper",style:S,ref:this.handleRef},E.base64&&h.default.createElement(O,{alt:n,title:a,src:E.base64,style:y}),E.tracedSVG&&h.default.createElement(O,{alt:n,title:a,src:E.tracedSVG,style:y}),g&&h.default.createElement(p,{title:a,style:{backgroundColor:g,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&h.default.createElement(O,{alt:n,title:a,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:b,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,m.default)({alt:n,title:a,width:E.width,height:E.height},E))}})))}return null},t}(h.default.Component);R.defaultProps={fadeIn:!0,alt:"",Tag:"div"},R.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=R},65:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(1)),r=n(a(50)),i=n(a(18)),o=n(a(30)),s=n(a(31)),d=function(e){var t=e.children;return l.default.createElement("div",null,l.default.createElement(r.default,null),l.default.createElement(i.default,{spacing:"1rem"},l.default.createElement(o.default,null,"Blog."),l.default.createElement(s.default,null,"Musings on ",l.default.createElement("em",null,"tech"),", ",l.default.createElement("em",null,"leadership"),", ",l.default.createElement("em",null,"culture")," and anything inbetween."),l.default.createElement("div",null,t)))};t.default=d},155:function(e,t,a){"use strict";function n(e,t){return e.raw=t,e}var l=n(["\n  font-size: 2rem;\n  margin-bottom: 0;\n  margin-top: 1rem;\n"],["\n  font-size: 2rem;\n  margin-bottom: 0;\n  margin-top: 1rem;\n"]),r=n(["\n  margin: 0;\n  font-style: italic;\n"],["\n  margin: 0;\n  font-style: italic;\n"]),i=n(["\n  margin: 0;\n  margin-bottom: 1rem;\n"],["\n  margin: 0;\n  margin-bottom: 1rem;\n"]),o=n(["\n  margin: 1rem 0;\n"],["\n  margin: 1rem 0;\n"]),s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=s(a(1)),u=s(a(28)),f=s(a(157)),c=s(a(4)),p=c.default.h2(l),m=c.default.p(r),g=c.default.p(i),h=c.default.p(o),y=function(e){var t=e.image,a=e.title,n=e.excerpt,l=e.tags,r=e.path,i=e.date;return d.default.createElement("article",null,d.default.createElement(f.default,{to:r},d.default.createElement(p,null,a)),d.default.createElement(m,null,i),d.default.createElement(g,null,l),d.default.createElement(f.default,{to:r},d.default.createElement(u.default,{title:a,alt:a,sizes:t.sizes})),d.default.createElement(h,null,n),d.default.createElement(f.default,{to:r},"Read more"))};t.default=y},157:function(e,t,a){"use strict";function n(e,t){return e.raw=t,e}var l=n([""],[""]),r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(a(4)),o=r(a(43)),s=i.default(o.default)(l);t.default=s},162:function(e,t,a){"use strict";function n(e){var t=e.data,a=t.allMarkdownRemark.edges;return r.default.createElement(i.default,null,a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return r.default.createElement(o.default,{key:t.id,title:t.frontmatter.title,path:t.frontmatter.path,date:t.frontmatter.date,excerpt:t.excerpt,tags:t.frontmatter.tags,image:t.frontmatter.cover_image.childImageSharp})}))}var l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(1)),i=l(a(65)),o=l(a(155));t.default=n,t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-index-tsx-019207137d39b44a3091.js.map