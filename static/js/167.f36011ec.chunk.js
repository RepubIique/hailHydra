"use strict";(self.webpackChunkhh_react_bs5=self.webpackChunkhh_react_bs5||[]).push([[167],{8167:function(e,n,t){t.r(n),t.d(n,{default:function(){return de}});var o,r=t(9439),a=t(2791),i=t(5987),c=t(1413),s=t(1694),l=t.n(s),u=t(3070),d=t(7357),f=t(8376),v=t(6382);function m(e){if((!o&&0!==o||e)&&d.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),o=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return o}var h=t(8633),x=t(9007),p=t(3201),b=t(1683),g=t(3690),Z=t(1889),N=t(4382),y=t(2709),w=t(6543),j=(0,w.Z)("modal-body"),C=t(9820),E=t(162),k=t(184),S=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],T=a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,r=e.contentClassName,a=e.centered,s=e.size,u=e.fullscreen,d=e.children,f=e.scrollable,v=(0,i.Z)(e,S);t=(0,E.vE)(t,"modal");var m="".concat(t,"-dialog"),h="string"===typeof u?"".concat(t,"-fullscreen-").concat(u):"".concat(t,"-fullscreen");return(0,k.jsx)("div",(0,c.Z)((0,c.Z)({},v),{},{ref:n,className:l()(m,o,s&&"".concat(t,"-").concat(s),a&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),u&&h),children:(0,k.jsx)("div",{className:l()("".concat(t,"-content"),r),children:d})}))}));T.displayName="ModalDialog";var I=T,R=(0,w.Z)("modal-footer"),M=t(8024),D=["bsPrefix","className","closeLabel","closeButton"],O=a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,r=e.closeLabel,a=void 0===r?"Close":r,s=e.closeButton,u=void 0!==s&&s,d=(0,i.Z)(e,D);return t=(0,E.vE)(t,"modal-header"),(0,k.jsx)(M.Z,(0,c.Z)((0,c.Z)({ref:n},d),{},{className:l()(o,t),closeLabel:a,closeButton:u}))}));O.displayName="ModalHeader";var P=O,F=(0,t(7472).Z)("h4"),L=(0,w.Z)("modal-title",{Component:F}),A=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"];function H(e){return(0,k.jsx)(y.Z,(0,c.Z)((0,c.Z)({},e),{},{timeout:null}))}function z(e){return(0,k.jsx)(y.Z,(0,c.Z)((0,c.Z)({},e),{},{timeout:null}))}var B=a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=e.style,y=e.dialogClassName,w=e.contentClassName,j=e.children,S=e.dialogAs,T=void 0===S?I:S,R=e["aria-labelledby"],M=e["aria-describedby"],D=e["aria-label"],O=e.show,P=void 0!==O&&O,F=e.animation,L=void 0===F||F,B=e.backdrop,K=void 0===B||B,_=e.keyboard,U=void 0===_||_,W=e.onEscapeKeyDown,X=e.onShow,q=e.onHide,G=e.container,J=e.autoFocus,Q=void 0===J||J,V=e.enforceFocus,Y=void 0===V||V,$=e.restoreFocus,ee=void 0===$||$,ne=e.restoreFocusOptions,te=e.onEntered,oe=e.onExit,re=e.onExiting,ae=e.onEnter,ie=e.onEntering,ce=e.onExited,se=e.backdropClassName,le=e.manager,ue=(0,i.Z)(e,A),de=(0,a.useState)({}),fe=(0,r.Z)(de,2),ve=fe[0],me=fe[1],he=(0,a.useState)(!1),xe=(0,r.Z)(he,2),pe=xe[0],be=xe[1],ge=(0,a.useRef)(!1),Ze=(0,a.useRef)(!1),Ne=(0,a.useRef)(null),ye=(0,h.Z)(),we=(0,r.Z)(ye,2),je=we[0],Ce=we[1],Ee=(0,p.Z)(n,Ce),ke=(0,x.Z)(q),Se=(0,E.SC)();t=(0,E.vE)(t,"modal");var Te=(0,a.useMemo)((function(){return{onHide:ke}}),[ke]);function Ie(){return le||(0,N.t)({isRTL:Se})}function Re(e){if(d.Z){var n=Ie().getScrollbarWidth()>0,t=e.scrollHeight>(0,f.Z)(e).documentElement.clientHeight;me({paddingRight:n&&!t?m():void 0,paddingLeft:!n&&t?m():void 0})}}var Me=(0,x.Z)((function(){je&&Re(je.dialog)}));(0,b.Z)((function(){(0,v.Z)(window,"resize",Me),null==Ne.current||Ne.current()}));var De=function(){ge.current=!0},Oe=function(e){ge.current&&je&&e.target===je.dialog&&(Ze.current=!0),ge.current=!1},Pe=function(){be(!0),Ne.current=(0,g.Z)(je.dialog,(function(){be(!1)}))},Fe=function(e){"static"!==K?Ze.current||e.target!==e.currentTarget?Ze.current=!1:null==q||q():function(e){e.target===e.currentTarget&&Pe()}(e)},Le=(0,a.useCallback)((function(e){return(0,k.jsx)("div",(0,c.Z)((0,c.Z)({},e),{},{className:l()("".concat(t,"-backdrop"),se,!L&&"show")}))}),[L,se,t]),Ae=(0,c.Z)((0,c.Z)({},s),ve);Ae.display="block";return(0,k.jsx)(C.Z.Provider,{value:Te,children:(0,k.jsx)(Z.Z,{show:P,ref:Ee,backdrop:K,container:G,keyboard:!0,autoFocus:Q,enforceFocus:Y,restoreFocus:ee,restoreFocusOptions:ne,onEscapeKeyDown:function(e){U?null==W||W(e):(e.preventDefault(),"static"===K&&Pe())},onShow:X,onHide:q,onEnter:function(e,n){e&&Re(e),null==ae||ae(e,n)},onEntering:function(e,n){null==ie||ie(e,n),(0,u.ZP)(window,"resize",Me)},onEntered:te,onExit:function(e){null==Ne.current||Ne.current(),null==oe||oe(e)},onExiting:re,onExited:function(e){e&&(e.style.display=""),null==ce||ce(e),(0,v.Z)(window,"resize",Me)},manager:Ie(),transition:L?H:void 0,backdropTransition:L?z:void 0,renderBackdrop:Le,renderDialog:function(e){return(0,k.jsx)("div",(0,c.Z)((0,c.Z)({role:"dialog"},e),{},{style:Ae,className:l()(o,t,pe&&"".concat(t,"-static"),!L&&"show"),onClick:K?Fe:void 0,onMouseUp:Oe,"aria-label":D,"aria-labelledby":R,"aria-describedby":M,children:(0,k.jsx)(T,(0,c.Z)((0,c.Z)({},ue),{},{onMouseDown:De,className:y,contentClassName:w,children:j}))}))}})})}));B.displayName="Modal";var K=Object.assign(B,{Body:j,Header:P,Title:L,Footer:R,Dialog:I,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),_=a.memo((function(e){var n=e.title,t=e.image,o=e.imagem,i=e.description,c=e.alt,s=(0,a.useState)(!1),l=(0,r.Z)(s,2),u=l[0],d=l[1],f=function(){return d(!0)};return(0,k.jsx)("div",{className:"portfolio-item",children:(0,k.jsxs)("div",{className:"hover-bg",children:[(0,k.jsx)("div",{className:"hover-text",onClick:f,children:(0,k.jsx)("h4",{children:n})}),(0,k.jsx)("div",{className:"image-container",onClick:f,children:(0,k.jsx)("img",{loading:"lazy",src:t,srcSet:"".concat(o," 400w, ").concat(t," 1200w"),sizes:"(max-width: 768px) 480px, 1200px",className:"portfolio-img",alt:c})}),(0,k.jsxs)(K,{show:u,onHide:function(){return d(!1)},children:[(0,k.jsx)(K.Header,{closeButton:!0,children:(0,k.jsx)(K.Title,{style:{colour:"#3C80C1"},children:n})}),(0,k.jsxs)(K.Body,{children:[(0,k.jsx)("img",{loading:"lazy",src:t,srcSet:"".concat(o," 400w, ").concat(t," 1200w"),sizes:"(max-width: 768px) 480px, 1200px",className:"portfolio-img",alt:c,style:{width:"100%"}}),(0,k.jsx)(K.Body,{children:i})]})]})]})})})),U=t(7022);var W=function(e,n){var t=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},X=t(7904),q=t(5746),G=Math.pow(2,31)-1;function J(e,n,t){var o=t-Date.now();e.current=o<=G?setTimeout(n,o):setTimeout((function(){return J(e,n,t)}),G)}function Q(){var e=(0,q.Z)(),n=(0,a.useRef)();return(0,b.Z)((function(){return clearTimeout(n.current)})),(0,a.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(t(),r<=G?n.current=setTimeout(o,r):J(n,o,Date.now()+r))},clear:t}}),[])}var V=t(1396),Y=t(8580),$=(0,w.Z)("carousel-caption"),ee=["as","bsPrefix","className"],ne=a.forwardRef((function(e,n){var t=e.as,o=void 0===t?"div":t,r=e.bsPrefix,a=e.className,s=(0,i.Z)(e,ee),u=l()(a,(0,E.vE)(r,"carousel-item"));return(0,k.jsx)(o,(0,c.Z)((0,c.Z)({ref:n},s),{},{className:u}))}));ne.displayName="CarouselItem";var te=ne,oe=t(1701),re=t(1380),ae=t(7202),ie=t(4083),ce=["defaultActiveIndex"],se=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];var le=a.forwardRef((function(e,n){var t=e.defaultActiveIndex,o=void 0===t?0:t,s=(0,i.Z)(e,ce),u=(0,Y.Ch)((0,c.Z)({defaultActiveIndex:o},s),{activeIndex:"onSelect"}),d=u.as,f=void 0===d?"div":d,v=u.bsPrefix,m=u.slide,h=void 0===m||m,p=u.fade,b=void 0!==p&&p,g=u.controls,Z=void 0===g||g,N=u.indicators,y=void 0===N||N,w=u.indicatorLabels,j=void 0===w?[]:w,C=u.activeIndex,S=u.onSelect,T=u.onSlide,I=u.onSlid,R=u.interval,M=void 0===R?5e3:R,D=u.keyboard,O=void 0===D||D,P=u.onKeyDown,F=u.pause,L=void 0===F?"hover":F,A=u.onMouseOver,H=u.onMouseOut,z=u.wrap,B=void 0===z||z,K=u.touch,_=void 0===K||K,U=u.onTouchStart,q=u.onTouchMove,G=u.onTouchEnd,J=u.prevIcon,$=void 0===J?(0,k.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}):J,ee=u.prevLabel,ne=void 0===ee?"Previous":ee,te=u.nextIcon,le=void 0===te?(0,k.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}):te,ue=u.nextLabel,de=void 0===ue?"Next":ue,fe=u.variant,ve=u.className,me=u.children,he=(0,i.Z)(u,se),xe=(0,E.vE)(v,"carousel"),pe=(0,E.SC)(),be=(0,a.useRef)(null),ge=(0,a.useState)("next"),Ze=(0,r.Z)(ge,2),Ne=Ze[0],ye=Ze[1],we=(0,a.useState)(!1),je=(0,r.Z)(we,2),Ce=je[0],Ee=je[1],ke=(0,a.useState)(!1),Se=(0,r.Z)(ke,2),Te=Se[0],Ie=Se[1],Re=(0,a.useState)(C||0),Me=(0,r.Z)(Re,2),De=Me[0],Oe=Me[1];(0,a.useEffect)((function(){Te||C===De||(be.current?ye(be.current):ye((C||0)>De?"next":"prev"),h&&Ie(!0),Oe(C||0))}),[C,Te,De,h]),(0,a.useEffect)((function(){be.current&&(be.current=null)}));var Pe,Fe=0;(0,oe.Ed)(me,(function(e,n){++Fe,n===C&&(Pe=e.props.interval)}));var Le=(0,X.Z)(Pe),Ae=(0,a.useCallback)((function(e){if(!Te){var n=De-1;if(n<0){if(!B)return;n=Fe-1}be.current="prev",null==S||S(n,e)}}),[Te,De,S,B,Fe]),He=(0,x.Z)((function(e){if(!Te){var n=De+1;if(n>=Fe){if(!B)return;n=0}be.current="next",null==S||S(n,e)}})),ze=(0,a.useRef)();(0,a.useImperativeHandle)(n,(function(){return{element:ze.current,prev:Ae,next:He}}));var Be=(0,x.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ze.current)&&(pe?Ae():He())})),Ke="next"===Ne?"start":"end";W((function(){h||(null==T||T(De,Ke),null==I||I(De,Ke))}),[De]);var _e="".concat(xe,"-item-").concat(Ne),Ue="".concat(xe,"-item-").concat(Ke),We=(0,a.useCallback)((function(e){(0,ae.Z)(e),null==T||T(De,Ke)}),[T,De,Ke]),Xe=(0,a.useCallback)((function(){Ie(!1),null==I||I(De,Ke)}),[I,De,Ke]),qe=(0,a.useCallback)((function(e){if(O&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(pe?He(e):Ae(e));case"ArrowRight":return e.preventDefault(),void(pe?Ae(e):He(e))}null==P||P(e)}),[O,P,Ae,He,pe]),Ge=(0,a.useCallback)((function(e){"hover"===L&&Ee(!0),null==A||A(e)}),[L,A]),Je=(0,a.useCallback)((function(e){Ee(!1),null==H||H(e)}),[H]),Qe=(0,a.useRef)(0),Ve=(0,a.useRef)(0),Ye=Q(),$e=(0,a.useCallback)((function(e){Qe.current=e.touches[0].clientX,Ve.current=0,"hover"===L&&Ee(!0),null==U||U(e)}),[L,U]),en=(0,a.useCallback)((function(e){e.touches&&e.touches.length>1?Ve.current=0:Ve.current=e.touches[0].clientX-Qe.current,null==q||q(e)}),[q]),nn=(0,a.useCallback)((function(e){if(_){var n=Ve.current;Math.abs(n)>40&&(n>0?Ae(e):He(e))}"hover"===L&&Ye.set((function(){Ee(!1)}),M||void 0),null==G||G(e)}),[_,L,Ae,He,Ye,M,G]),tn=null!=M&&!Ce&&!Te,on=(0,a.useRef)();(0,a.useEffect)((function(){var e,n;if(tn){var t=pe?Ae:He;return on.current=window.setInterval(document.visibilityState?Be:t,null!=(e=null!=(n=Le.current)?n:M)?e:void 0),function(){null!==on.current&&clearInterval(on.current)}}}),[tn,Ae,He,Le,M,Be,pe]);var rn=(0,a.useMemo)((function(){return y&&Array.from({length:Fe},(function(e,n){return function(e){null==S||S(n,e)}}))}),[y,Fe,S]);return(0,k.jsxs)(f,(0,c.Z)((0,c.Z)({ref:ze},he),{},{onKeyDown:qe,onMouseOver:Ge,onMouseOut:Je,onTouchStart:$e,onTouchMove:en,onTouchEnd:nn,className:l()(ve,xe,h&&"slide",b&&"".concat(xe,"-fade"),fe&&"".concat(xe,"-").concat(fe)),children:[y&&(0,k.jsx)("div",{className:"".concat(xe,"-indicators"),children:(0,oe.UI)(me,(function(e,n){return(0,k.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=j&&j.length?j[n]:"Slide ".concat(n+1),className:n===De?"active":void 0,onClick:rn?rn[n]:void 0,"aria-current":n===De},n)}))}),(0,k.jsx)("div",{className:"".concat(xe,"-inner"),children:(0,oe.UI)(me,(function(e,n){var t=n===De;return h?(0,k.jsx)(ie.Z,{in:t,onEnter:t?We:void 0,onEntered:t?Xe:void 0,addEndListener:re.Z,children:function(n,o){return a.cloneElement(e,(0,c.Z)((0,c.Z)({},o),{},{className:l()(e.props.className,t&&"entered"!==n&&_e,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&Ue)}))}}):a.cloneElement(e,{className:l()(e.props.className,t&&"active")})}))}),Z&&(0,k.jsxs)(k.Fragment,{children:[(B||0!==C)&&(0,k.jsxs)(V.Z,{className:"".concat(xe,"-control-prev"),onClick:Ae,children:[$,ne&&(0,k.jsx)("span",{className:"visually-hidden",children:ne})]}),(B||C!==Fe-1)&&(0,k.jsxs)(V.Z,{className:"".concat(xe,"-control-next"),onClick:He,children:[le,de&&(0,k.jsx)("span",{className:"visually-hidden",children:de})]})]})]}))}));le.displayName="Carousel";var ue=Object.assign(le,{Caption:$,Item:te});function de(e){return(0,k.jsx)("div",{id:"portfolio",className:"text-center",children:(0,k.jsxs)(U.Z,{children:[(0,k.jsxs)("div",{className:"section-title",children:[(0,k.jsx)("h2",{children:"Portfolio"}),(0,k.jsx)("p",{children:'"Showcasing two decades of superior craftsmanship in hydraulic solutions, spanning diverse sectors and featuring innovative designs, precise manufacturing, and consistent client satisfaction."'})]}),(0,k.jsx)(ue,{children:e.data?e.data.map((function(e,n){return(0,k.jsx)(ue.Item,{interval:1e3,children:(0,k.jsx)(_,{title:e.title,image:e.image,imagem:e.imgm,description:e.description,alt:e.alt})},"".concat(e.title,"-").concat(n))})):"Loading..."})]})})}}}]);
//# sourceMappingURL=167.f36011ec.chunk.js.map