(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t);n(74);var r=n(0),o=n.n(r),a=n(146),i=(n(173),n(159)),l=o.a.createRef(),u=function(){for(var e,t,n,r=[["goldenrod","orangered"],["violet","purple"],["navy","aqua"],["mediumvioletred","palevioletred"],["coral","lemonchiffon"],["crimson","salmon"],["midnightblue","powderblue"],["steelblue","deepskyblue"],["aquamarine","turquoise"]],a=[],l=-75,u=1;u>=0;u--){for(;void 0!==typeof window&&l+200<=1500;){var c=r[Math.floor(Math.random()*(r.length-1))];e=Math.floor(50*Math.random()+50),t=Math.floor(100*Math.random()+50),n=Math.floor(3e3*Math.random());var s=o.a.createRef();a.push(o.a.createElement(i.a,{ref:s,height:e,left:l,bottom:150*u,flowerSize:t,colorSet:c,delay:n,key:l})),l+=150}l=0}return a}(),c=function(){l.current.style.zIndex="-1",l.current.style.opacity="0",u.forEach(function(e){e.ref.current.grow()}),void 0!==typeof window&&window.setTimeout(function(){Object(a.navigate)("/main-page/")},12e3)};t.default=function(){return o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},o.a.createElement("div",{className:"width-100-container"},u.map(function(e){return e})),o.a.createElement("button",{className:"start-btn",ref:l,onClick:c},"Let's get Started!"))}},145:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=r(n(149)),a=r(n(150)),i=r(n(7)),l=r(n(52)),u=r(n(54)),c=r(n(4)),s=r(n(0)),f=n(22),p=n(146);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var y={activeClassName:c.default.string,activeStyle:c.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,a.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,l=t.onClick,u=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),y=t.replace,m=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=d(n);return s.default.createElement(f.Link,(0,a.default)({to:v,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),h(n,{state:c,replace:y})),!0}},m))},t}(s.default.Component);m.propTypes=(0,a.default)({},y,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=m;t.default=v;var h=function(e,t){window.___navigate(d(e),t)};t.navigate=h;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return y}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(145),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(147),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var f=n(32);n.d(t,"parsePath",function(){return f.a});var p=o.a.createContext({}),d=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,n){var r;e.exports=(r=n(148))&&r.default||r},148:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(53),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},149:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},150:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},155:function(e,t,n){"use strict";e.exports=n(156)},156:function(e,t,n){"use strict";var r=n(51),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function w(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,i,l],c=0;(e=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function S(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}function _(){}function E(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}S.prototype.isReactComponent={},S.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&w("85"),this.updater.enqueueSetState(this,e,t,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=S.prototype;var k=E.prototype=new _;k.constructor=E,r(k,S.prototype),k.isPureReactComponent=!0;var P={current:null,currentDispatcher:null},R=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r=void 0,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)R.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:P.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var $=/\/+/g,j=[];function q(e,t,n,r){if(j.length){var o=j.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>j.length&&j.push(e)}function O(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var u=!1;if(null===t)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case i:u=!0}}if(u)return r(o,t,""===n?"."+T(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=n+T(l=t[c],c);u+=e(l,s,r,o)}else if(s=null===t||"object"!=typeof t?null:"function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(l=t.next()).done;)u+=e(l=l.value,s=n+T(l,c++),r,o);else"object"===l&&w("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,function(e){return e}):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace($,"$&/")+"/"),O(e,I,t=q(t,a,r,o)),M(t)}var G={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;O(e,A,t=q(null,null,t,n)),M(t)},count:function(e){return O(e,function(){return null},null)},toArray:function(e){var t=[];return F(e,t,null,function(e){return e}),t},only:function(e){return N(e)||w("143"),e}},createRef:function(){return{current:null}},Component:S,PureComponent:E,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},Fragment:l,StrictMode:u,Suspense:y,createElement:C,cloneElement:function(e,t,n){null==e&&w("267",e);var o=void 0,i=r({},e.props),l=e.key,u=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,c=P.current),void 0!==t.key&&(l=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)R.call(t,o)&&!x.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:a,type:e.type,key:l,ref:u,props:i,_owner:c}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:N,version:"16.7.0",unstable_ConcurrentMode:p,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:P,assign:r}},L={default:G},B=L&&G||L;e.exports=B.default||B},159:function(e,t,n){"use strict";n(160),n(74),n(79),n(162);var r=n(7),o=n.n(r),a=n(155),i=n.n(a),l=(n(164),function(e){function t(t){var n;return(n=e.call(this,t)||this).displayFlower=function(){Array.from(n.flower.current.getElementsByClassName("droplet")).forEach(function(e){e.style.height=n.props.flowerSize.toString()+"px",e.style.width=n.props.flowerSize.toString()+"px",e.style.animationPlayState="running"})},n.displayLeaves=function(){Array.from(n.flower.current.getElementsByClassName("leaf")).forEach(function(e,t){e.style.transform="scale(1)",t%2==0?(e.style.left="-32px",e.style.bottom="10px"):(e.style.left="8px",e.style.bottom="41px")})},n.grow=function(){var e=window.innerHeight*n.props.height*.01-64-140,t=n.flower.current.getElementsByClassName("stem")[0];window.setTimeout(function(){t.style.height=e.toString()+"px",window.setTimeout(n.displayFlower,1800),window.setTimeout(n.displayLeaves,1500)},n.props.delay||1e3)},n.flower=i.a.createRef(),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.setTimeout(function(){e.flower.current.style.height=e.props.height.toString()+"%",e.flower.current.style.bottom=e.props.bottom.toString()+"px",e.flower.current.style.left=e.props.left.toString()+"px",Array.from(e.flower.current.getElementsByClassName("droplet")).forEach(function(t,n){t.style.backgroundColor=n%2?e.props.colorSet[1]:e.props.colorSet[0]})},5),this.props.growOnPageLoad&&this.grow()},n.render=function(){return i.a.createElement("div",{className:"flower-container",ref:this.flower},i.a.createElement("div",{className:"stem"},i.a.createElement("div",{className:"leaf leaf-1"}),i.a.createElement("div",{className:"leaf leaf-2"})),i.a.createElement("div",{className:"pot-outline"}),i.a.createElement("div",{className:"droplet",id:"no1"}),i.a.createElement("div",{className:"droplet",id:"no2"}),i.a.createElement("div",{className:"droplet",id:"no3"}),i.a.createElement("div",{className:"droplet",id:"no4"}),i.a.createElement("div",{className:"droplet",id:"no5"}),i.a.createElement("div",{className:"droplet",id:"no6"}),i.a.createElement("div",{className:"droplet",id:"no7"}),i.a.createElement("div",{className:"droplet",id:"no8"}),i.a.createElement("div",{className:"droplet",id:"no9"}),i.a.createElement("div",{className:"droplet",id:"no10"}),i.a.createElement("div",{className:"pot",onClick:this.grow}))},t}(a.Component));t.a=l},160:function(e,t,n){"use strict";n(161);var r=n(5),o=n(73),a=n(16),i=/./.toString,l=function(e){n(17)(RegExp.prototype,"toString",e,!0)};n(25)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?l(function(){var e=r(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?o.call(e):void 0)}):"toString"!=i.name&&l(function(){return i.call(this)})},161:function(e,t,n){n(16)&&"g"!=/./g.flags&&n(24).f(RegExp.prototype,"flags",{configurable:!0,get:n(73)})},162:function(e,t,n){"use strict";var r=n(18),o=n(11),a=n(26),i=n(75),l=n(76),u=n(14),c=n(163),s=n(77);o(o.S+o.F*!n(78)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,f,p=a(e),d="function"==typeof this?this:Array,y=arguments.length,m=y>1?arguments[1]:void 0,v=void 0!==m,h=0,w=s(p);if(v&&(m=r(m,y>2?arguments[2]:void 0,2)),null==w||d==Array&&l(w))for(n=new d(t=u(p.length));t>h;h++)c(n,h,v?m(p[h],h):p[h]);else for(f=w.call(p),n=new d;!(o=f.next()).done;h++)c(n,h,v?i(f,m,[o.value,h],!0):o.value);return n.length=h,n}})},163:function(e,t,n){"use strict";var r=n(24),o=n(55);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},164:function(e,t,n){},173:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-0de264a62d4ada57fcd7.js.map