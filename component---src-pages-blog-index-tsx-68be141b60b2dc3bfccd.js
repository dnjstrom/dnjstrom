webpackJsonp([0x5d8f8720b98e],{36:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){_.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var i=a(10),r=l(i),o=a(13),s=l(o),d=a(12),u=l(d),c=a(41),f=l(c),p=a(40),m=l(p),h=a(1),g=l(h),y=a(2),b=l(y),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},S=void 0,_=[],L=function(e,t){n().observe(e),_.push([e,t])},j=null,z=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},M=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+o+t+a+i+n+l+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},O=function(e){var t=e.style,a=e.onLoad,l=(0,f.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,m.default)({},l,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};O.propTypes={style:b.default.object,onLoad:b.default.func};var R=function(e){function t(a){(0,r.default)(this,t);var l=(0,s.default)(this,e.call(this,a)),n=!0,i=!0,o=!1,d=E(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!1,o=!0),"undefined"==typeof window&&(n=!1,i=!1),l.state={isVisible:n,imgLoaded:i,IOSupported:o},l.handleRef=l.handleRef.bind(l),l}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&L(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,l=t.alt,n=t.className,i=t.outerWrapperClassName,r=t.style,o=void 0===r?{}:r,s=t.imgStyle,d=void 0===s?{}:s,u=t.sizes,c=t.resolutions,f=t.backgroundColor,p=t.Tag,h=void 0;h="boolean"==typeof f?"lightgray":f;var y=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),b=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&z()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),g.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},g.default.createElement(p,{className:(n?n:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},g.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&g.default.createElement(O,{alt:l,title:a,src:w.base64,style:y}),w.tracedSVG&&g.default.createElement(O,{alt:l,title:a,src:w.tracedSVG,style:y}),h&&g.default.createElement(p,{title:a,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(O,{alt:l,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:b,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,m.default)({alt:l,title:a},w))}})))}if(c){var E=c,S=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},o);return"inherit"===o.display&&delete S.display,E.srcWebp&&E.srcSetWebp&&z()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),g.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},g.default.createElement(p,{className:(n?n:"")+" gatsby-image-wrapper",style:S,ref:this.handleRef},E.base64&&g.default.createElement(O,{alt:l,title:a,src:E.base64,style:y}),E.tracedSVG&&g.default.createElement(O,{alt:l,title:a,src:E.tracedSVG,style:y}),h&&g.default.createElement(p,{title:a,style:{backgroundColor:h,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&g.default.createElement(O,{alt:l,title:a,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:b,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,m.default)({alt:l,title:a,width:E.width,height:E.height},E))}})))}return null},t}(g.default.Component);R.defaultProps={fadeIn:!0,alt:"",Tag:"div"},R.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=R},55:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(1)),i=l(a(39)),r=l(a(17)),o=l(a(28)),s=l(a(29)),d=function(e){var t=e.children;return n.default.createElement("div",null,n.default.createElement(i.default,null),n.default.createElement(r.default,{spacing:"1rem"},n.default.createElement(o.default,null,"Blog."),n.default.createElement(s.default,null,"Musings on ",n.default.createElement("em",null,"tech"),", ",n.default.createElement("em",null,"leadership"),", ",n.default.createElement("em",null,"culture")," and anything inbetween."),n.default.createElement("div",null,t)))};t.default=d},154:function(e,t,a){"use strict";var l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(1)),i=l(a(36)),r=l(a(155)),o=function(e){var t=e.image,a=e.title,l=e.excerpt,o=e.tags,s=e.path,d=e.date;return console.log(t)||n.default.createElement("article",null,n.default.createElement(i.default,{title:a,alt:a,sizes:t.sizes}),n.default.createElement("h2",null,a),n.default.createElement("p",null,d),n.default.createElement("p",null,o),n.default.createElement("p",null,l),n.default.createElement(r.default,{to:s},"Read more"))};t.default=o},155:function(e,t,a){"use strict";function l(e,t){return e.raw=t,e}var n=l([""],[""]),i=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(9)),o=i(a(130)),s=r.default(o.default)(n);t.default=s},160:function(e,t,a){"use strict";function l(e){var t=e.data,a=t.allMarkdownRemark.edges;return console.log(t),i.default.createElement(r.default,null,a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return i.default.createElement(o.default,{key:t.id,title:t.frontmatter.title,path:t.frontmatter.path,date:t.frontmatter.date,excerpt:t.excerpt,tags:"",image:t.frontmatter.cover_image.childImageSharp})}))}var n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(a(1)),r=n(a(55)),o=n(a(154));t.default=l,t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-index-tsx-68be141b60b2dc3bfccd.js.map