(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6131],{93740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let i=r(34788),n=r(38754),o=r(61757),a=r(20224),l=o._(r(67294)),s=n._(r(42636)),c=r(97757),u=r(3735),d=r(83341);r(34210);let f=n._(r(57746)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current(i._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}function b(e){let[t,r]=l.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,l.forwardRef)((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fetchPriority:g,fill:h,placeholder:p,loading:v,srcString:w,config:y,unoptimized:_,loader:E,onLoadRef:S,onLoadingCompleteRef:j,setBlurComplete:C,setShowAltText:z,onLoad:x,onError:P}=e,O=a._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return v=f?"lazy":v,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",i._({},O,b(g),{loading:v,width:o,height:n,decoding:"async","data-nimg":h?"fill":"1",className:c,style:i._({},u,d)},r,{ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&m(e,w,p,S,j,C,_))},[w,p,S,j,C,P,_,t]),onLoad:e=>{let t=e.currentTarget;m(t,w,p,S,j,C,_)},onError:e=>{z(!0),"blur"===p&&C(!0),P&&P(e)}})))}),w=(0,l.forwardRef)((e,t)=>{let r,n;var o,{src:m,sizes:w,unoptimized:y=!1,priority:_=!1,loading:E,className:S,quality:j,width:C,height:z,fill:x,style:P,onLoad:O,onLoadingComplete:R,placeholder:k="empty",blurDataURL:I,fetchPriority:M,layout:A,objectFit:L,objectPosition:N,lazyBoundary:B,lazyRoot:D}=e,F=a._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let W=(0,l.useContext)(d.ImageConfigContext),T=(0,l.useMemo)(()=>{let e=g||W||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i._({},e,{allSizes:t,deviceSizes:r})},[W]),q=F,G=q.loader||f.default;delete q.loader;let U="__next_img_default"in G;if(U){if("custom"===T.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=G;G=t=>{let{config:r}=t,i=a._(t,["config"]);return e(i)}}if(A){"fill"===A&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(P=i._({},P,e));let t={responsive:"100vw",fill:"100vw"}[A];t&&!w&&(w=t)}let V="",J=p(C),Y=p(z);if("object"==typeof(o=m)&&(h(o)||void 0!==o.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,I=I||e.blurDataURL,V=e.src,!x){if(J||Y){if(J&&!Y){let t=J/e.width;Y=Math.round(e.height*t)}else if(!J&&Y){let t=Y/e.height;J=Math.round(e.width*t)}}else J=e.width,Y=e.height}}let H=!_&&("lazy"===E||void 0===E);(!(m="string"==typeof m?m:V)||m.startsWith("data:")||m.startsWith("blob:"))&&(y=!0,H=!1),T.unoptimized&&(y=!0),U&&m.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(y=!0),_&&(M="high");let[$,K]=(0,l.useState)(!1),[Q,X]=(0,l.useState)(!1),Z=p(j),ee=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:N}:{},Q?{}:{color:"transparent"},P),et="blur"===k&&I&&!$?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:J,heightInt:Y,blurWidth:r,blurHeight:n,blurDataURL:I,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:T,src:m,unoptimized:y,width:J,quality:Z,sizes:w,loader:G}),ei=m,en=(0,l.useRef)(O);(0,l.useEffect)(()=>{en.current=O},[O]);let eo=(0,l.useRef)(R);(0,l.useEffect)(()=>{eo.current=R},[R]);let ea=i._({isLazy:H,imgAttributes:er,heightInt:Y,widthInt:J,qualityInt:Z,className:S,imgStyle:ee,blurStyle:et,loading:E,config:T,fetchPriority:M,fill:x,unoptimized:y,placeholder:k,loader:G,srcString:ei,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:K,setShowAltText:X},q);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,i._({},ea,{ref:t})),_?l.default.createElement(s.default,null,l.default.createElement("link",i._({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:q.crossOrigin},b(M)))):null)}),y=w;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},97757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,l=i||t,s=n||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},57746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},25675:function(e,t,r){e.exports=r(93740)},82729:function(e,t,r){"use strict";function i(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{_:function(){return i}})}}]);