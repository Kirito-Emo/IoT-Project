"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1326],{70131:function(e,t,r){r.d(t,{YD:function(){return f}});var n=r(67294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=new Map,a=new WeakMap,l=0,u=void 0;function c(e,t,r,n){if(void 0===r&&(r={}),void 0===n&&(n=u),void 0===window.IntersectionObserver&&void 0!==n){var i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(e){var t=Object.keys(e).sort().filter(function(t){return void 0!==e[t]}).map(function(t){var r;return t+"_"+("root"===t?(r=e.root)?(a.has(r)||(l+=1,a.set(r,l.toString())),a.get(r)):"0":e[t])}).toString(),r=s.get(t);if(!r){var n,i=new Map,o=new IntersectionObserver(function(t){t.forEach(function(t){var r,o=t.isIntersecting&&n.some(function(e){return t.intersectionRatio>=e});e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach(function(e){e(o,t)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},s.set(t,r)}return r}(r),c=o.id,d=o.observer,h=o.elements,p=h.get(e)||[];return h.has(e)||h.set(e,p),p.push(t),d.observe(e),function(){p.splice(p.indexOf(t),1),0===p.length&&(h.delete(e),d.unobserve(e)),0===h.size&&(d.disconnect(),s.delete(c))}}var d=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function h(e){return"function"!=typeof e.children}var p=function(e){function t(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){!r.node||(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),h(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}(r=t).prototype=Object.create(e.prototype),r.prototype.constructor=r,o(r,e);var r,s=t.prototype;return s.componentDidUpdate=function(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,i=e.trackVisibility,o=e.delay,s=e.fallbackInView;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:i,delay:o},s)}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!h(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var o=this.props,s=o.children,a=o.as,l=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(o,d);return n.createElement(a||"div",i({ref:this.handleNode},l),s)},t}(n.Component);function f(e){var t=void 0===e?{}:e,r=t.threshold,i=t.delay,o=t.trackVisibility,s=t.rootMargin,a=t.root,l=t.triggerOnce,u=t.skip,d=t.initialInView,h=t.fallbackInView,p=n.useRef(),f=n.useState({inView:!!d}),v=f[0],b=f[1],g=n.useCallback(function(e){void 0!==p.current&&(p.current(),p.current=void 0),!u&&e&&(p.current=c(e,function(e,t){b({inView:e,entry:t}),t.isIntersecting&&l&&p.current&&(p.current(),p.current=void 0)},{root:a,rootMargin:s,threshold:r,trackVisibility:o,delay:i},h))},[Array.isArray(r)?r.toString():r,a,s,l,u,o,h,i]);(0,n.useEffect)(function(){p.current||!v.entry||l||u||b({inView:!!d})});var y=[g,v.inView,v.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},44593:function(e,t,r){r.d(t,{ZP:function(){return c}});var n=r(67294),i=r(95591),o=r(11753),s=r(61688);let a=Promise.resolve(),l=e=>(0,o.qC)(e?e(0,null):null)[0],u=e=>(t,r,i)=>{let u;let c=(0,n.useRef)(!1),{cache:d,initialSize:h=1,revalidateAll:p=!1,persistSize:f=!1,revalidateFirstPage:v=!0,revalidateOnMount:b=!1,parallel:g=!1}=i;try{(u=l(t))&&(u="$inf$"+u)}catch(e){}let[y,k,w]=(0,o.JN)(d,u),V=(0,n.useCallback)(()=>{let e=(0,o.o8)(y()._l)?h:y()._l;return e},[d,u,h]);(0,s.useSyncExternalStore)((0,n.useCallback)(e=>u?w(u,()=>{e()}):()=>{},[d,u]),V,V);let _=(0,n.useCallback)(()=>{let e=y()._l;return(0,o.o8)(e)?h:e},[u,h]),C=(0,n.useRef)(_());(0,o.LI)(()=>{if(!c.current){c.current=!0;return}u&&k({_l:f?C.current:_()})},[u,d]);let m=b&&!c.current,O=e(u,async e=>{let n=y()._i,s=[],a=_(),[l]=(0,o.JN)(d,e),u=l().data,c=[],h=null;for(let e=0;e<a;++e){let[a,l]=(0,o.qC)(t(e,g?null:h));if(!a)break;let[f,b]=(0,o.JN)(d,a),y=f().data,k=p||n||(0,o.o8)(y)||v&&!e&&!(0,o.o8)(u)||m||u&&!(0,o.o8)(u[e])&&!i.compare(u[e],y);if(r&&k){let t=async()=>{b({data:y=await r(l),_k:l}),s[e]=y};g?c.push(t):await t()}else s[e]=y;g||(h=y)}return g&&await Promise.all(c.map(e=>e())),k({_i:o.i_}),s},i),I=(0,n.useCallback)(function(e,t){let r="boolean"==typeof t?{revalidate:t}:t||{},n=!1!==r.revalidate;return u?(n&&((0,o.o8)(e)?k({_i:!0}):k({_i:!1})),arguments.length?O.mutate(e,{...r,revalidate:n}):O.mutate()):a},[u,d]),N=(0,n.useCallback)(e=>{let r;if(!u)return a;let[,n]=(0,o.JN)(d,u);if((0,o.mf)(e)?r=e(_()):"number"==typeof e&&(r=e),"number"!=typeof r)return a;n({_l:r}),C.current=r;let i=[],[s]=(0,o.JN)(d,u),l=null;for(let e=0;e<r;++e){let[r]=(0,o.qC)(t(e,l)),[n]=(0,o.JN)(d,r),a=r?n().data:o.i_;if((0,o.o8)(a))return I(s().data);i.push(a),l=a}return I(i)},[u,d,I,_]);return{size:_(),setSize:N,mutate:I,get data(){return O.data},get error(){return O.error},get isValidating(){return O.isValidating},get isLoading(){return O.isLoading}}},c=(0,o.xD)(i.ZP,u)}}]);