(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[2266],{33632:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(6293),o=r(64893),s=r(95122),a=r(48015),i=r(14776);const c=(0,n.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(i.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"}));var l=r(3967);const u=(0,r(52117).Z)(o.ToolbarButton,{shouldForwardProp:e=>"noticesCount"!==e,target:"e1urh1lw0"})("&::after{position:absolute;left:-6px;top:-6px;z-index:1;min-width:24px;padding:4px;font-size:11px;color:",(({theme:e})=>e.colors.text.white),";background:",(({theme:e})=>e.colors.primary.base),";border-radius:12px;content:'",(({noticesCount:e})=>e),"';opacity:",(({noticesCount:e})=>e?1:0),";transition:opacity 1000ms ease-in-out;}");function p(){const[e,t]=(0,n.useState)(!1),{notices:r,noticesLoaded:i}=(0,a.useSelect)((e=>({notices:e("ithemes-security/admin-notices").getNotices(),noticesLoaded:e("ithemes-security/admin-notices").areNoticesLoaded()})),[]);return(0,n.createElement)(React.Fragment,null,(0,n.createElement)(u,{"aria-expanded":e,onClick:()=>!e&&t(!0),icon:c,text:(0,s.__)("Alerts","better-wp-security"),noticesCount:r.length}),e&&(0,n.createElement)(o.Popover,{className:"itsec-admin-bar-admin-notices__content",expandOnMobile:!0,focusOnMount:"container",position:"bottom left",headerTitle:(0,s.__)("Notifications","better-wp-security"),onClose:()=>t(!1),onFocusOutside:()=>t(!1)},(0,n.createElement)(l.Z,{notices:r,loaded:i})))}},22959:(e,t,r)=>{"use strict";r.r(t);var n=r(6293),o=r(3571),s=(r(97157),r(30455)),a=r(33632),i=r(88493);r.p=window.itsecWebpackPublicPath,(0,o.registerPlugin)("itsec-admin-notices-toolbar",{render:()=>(0,n.createElement)(s.ge,null,(0,n.createElement)(a.Z,null))}),(0,o.registerPlugin)("itsec-solid-welcome",{render:()=>(0,n.createElement)(i.Z,null)})},82506:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(6293),o=r(14776);const s=(0,n.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(o.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"}))},32010:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(6293),o=r(14776);const s=(0,n.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(o.Path,{d:"M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",fillRule:"evenodd",clipRule:"evenodd"}))},65202:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(6293),o=r(14776);const s=(0,n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"}))},67527:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(6293),o=r(14776);const s=(0,n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.Path,{d:"M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",fillRule:"evenodd",clipRule:"evenodd"}))},35800:function(e,t,r){!function(e,t){"use strict";function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var n=r(t);function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var s={error:null},a=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state=s,t.resetErrorBoundary=function(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];null==t.props.onReset||(e=t.props).onReset.apply(e,n),t.reset()},t}var r,a;a=e,(r=t).prototype=Object.create(a.prototype),r.prototype.constructor=r,o(r,a),t.getDerivedStateFromError=function(e){return{error:e}};var i=t.prototype;return i.reset=function(){this.setState(s)},i.componentDidCatch=function(e,t){var r,n;null==(r=(n=this.props).onError)||r.call(n,e,t)},i.componentDidUpdate=function(e,t){var r,n,o,s,a=this.state.error,i=this.props.resetKeys;null!==a&&null!==t.error&&(void 0===(o=e.resetKeys)&&(o=[]),void 0===(s=i)&&(s=[]),o.length!==s.length||o.some((function(e,t){return!Object.is(e,s[t])})))&&(null==(r=(n=this.props).onResetKeysChange)||r.call(n,e.resetKeys,i),this.reset())},i.render=function(){var e=this.state.error,t=this.props,r=t.fallbackRender,o=t.FallbackComponent,s=t.fallback;if(null!==e){var a={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(s))return s;if("function"==typeof r)return r(a);if(o)return n.createElement(o,a);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(n.Component);e.ErrorBoundary=a,e.useErrorHandler=function(e){var t=n.useState(null),r=t[0],o=t[1];if(null!=e)throw e;if(null!=r)throw r;return o},e.withErrorBoundary=function(e,t){var r=function(r){return n.createElement(a,t,n.createElement(e,r))},o=e.displayName||e.name||"Unknown";return r.displayName="withErrorBoundary("+o+")",r},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(99196))},62845:(e,t,r)=>{"use strict";r.d(t,{r8:()=>a});var n=r(99196);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const s=Symbol(),a=e=>((e,t)=>{const r=Object.keys(t);let a=t,i=null;const c={};r.forEach((e=>{c[e]=new Set}));const l=(t,r)=>r.type===s?r.r?r.r(t):r.e:e(t,r),u=(e,t)=>{const r=r=>{return o({},r,{[e]:(n=r[e],s=t,"function"==typeof s?s(n):s)});var n,s};if(i)i({type:s,r});else{a=r(a);const t=a[e];c[e].forEach((e=>e(t)))}},p=(e,t)=>{r.forEach((r=>{const n=t[r];e[r]!==n&&c[r].forEach((e=>e(n)))}))};return{useGlobalStateProvider:()=>{const[e,t]=(0,n.useReducer)(l,a);(0,n.useEffect)((()=>{if(i)throw new Error("Only one global state provider is allowed");return i=t,t({type:s,e:a}),()=>{i=null}}),[]);const r=(0,n.useRef)(e);p(r.current,e),r.current=e,(0,n.useEffect)((()=>{a=e}),[e])},useGlobalState:e=>{const[t,r]=(0,n.useState)(a[e]);return(0,n.useEffect)((()=>(c[e].add(r),r(a[e]),()=>{c[e].delete(r)})),[e]),[t,(0,n.useCallback)((t=>u(e,t)),[e])]},getGlobalState:e=>a[e],setGlobalState:u,getState:()=>a,setState:e=>{if(i)i({type:s,e});else{const t=a;a=e,p(t,a)}},dispatch:t=>{if(i)i(t);else{const r=a;a=e(a,t),p(r,a)}return t}}})(((e,t)=>e),e)},97157:e=>{e.exports=function(){return this.itsec.core["admin-notices-api"]}()},31600:e=>{e.exports=function(){return this.itsec.packages.data}()},87514:e=>{e.exports=function(){return this.wp.apiFetch}()},64893:e=>{e.exports=function(){return this.wp.components}()},9576:e=>{e.exports=function(){return this.wp.compose}()},48015:e=>{e.exports=function(){return this.wp.data}()},82521:e=>{e.exports=function(){return this.wp.date}()},6293:e=>{e.exports=function(){return this.wp.element}()},95122:e=>{e.exports=function(){return this.wp.i18n}()},81834:e=>{e.exports=function(){return this.wp.isShallowEqual}()},81019:e=>{e.exports=function(){return this.wp.keycodes}()},3571:e=>{e.exports=function(){return this.wp.plugins}()},14776:e=>{e.exports=function(){return this.wp.primitives}()},73470:e=>{e.exports=function(){return this.wp.url}()},99196:e=>{"use strict";e.exports=window.React},91850:e=>{"use strict";e.exports=window.ReactDOM},92819:e=>{"use strict";e.exports=window.lodash},76292:e=>{"use strict";e.exports=window.moment}},e=>{e.O(0,[7271,1930,5307,5257,1511,976,6179,455,5896,8006],(()=>(22959,e(e.s=22959))));var t=e.O();((window.itsec=window.itsec||{}).core=window.itsec.core||{}).global=t}]);