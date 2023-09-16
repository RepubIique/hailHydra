"use strict";(self.webpackChunkhh_react_bs5=self.webpackChunkhh_react_bs5||[]).push([[777],{2777:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r=t(9439),a=t(2791),i=t(184),c=a.memo((function(e){var n=e.title,t=e.image,c=e.imagem,o=(e.description,e.alt),s=(0,a.useState)(!1),u=(0,r.Z)(s,2),l=(u[0],u[1]),d=function(){return l(!0)};return(0,i.jsx)("div",{className:"portfolio-item",children:(0,i.jsxs)("div",{className:"hover-bg",children:[(0,i.jsx)("div",{className:"hover-text",onClick:d,children:(0,i.jsx)("h4",{children:n})}),(0,i.jsx)("div",{className:"image-container",onClick:d,children:(0,i.jsx)("img",{loading:"lazy",src:t,srcSet:"".concat(c," 400w, ").concat(t," 1200w"),sizes:"(max-width: 768px) 480px, 1200px",className:"portfolio-img",alt:o})})]})})})),o=t(7022),s=t(1413),u=t(5987),l=t(9007);var d=function(e,n){var t=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},v=t(7904),f=t(5746),h=t(1683),m=Math.pow(2,31)-1;function p(e,n,t){var r=t-Date.now();e.current=r<=m?setTimeout(n,r):setTimeout((function(){return p(e,n,t)}),m)}function x(){var e=(0,f.Z)(),n=(0,a.useRef)();return(0,h.Z)((function(){return clearTimeout(n.current)})),(0,a.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(t(),a<=m?n.current=setTimeout(r,a):p(n,r,Date.now()+a))},clear:t}}),[])}var b=t(1691),N=t(1694),g=t.n(N),j=t(8580),Z=(0,t(6543).Z)("carousel-caption"),C=t(162),w=["as","bsPrefix","className"],y=a.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,a=e.bsPrefix,c=e.className,o=(0,u.Z)(e,w),l=g()(c,(0,C.vE)(a,"carousel-item"));return(0,i.jsx)(r,(0,s.Z)((0,s.Z)({ref:n},o),{},{className:l}))}));y.displayName="CarouselItem";var S=y,k=t(1701),I=t(933),E=t(7202),T=t(4083),M=["defaultActiveIndex"],R=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];var L=a.forwardRef((function(e,n){var t=e.defaultActiveIndex,c=void 0===t?0:t,o=(0,u.Z)(e,M),f=(0,j.Ch)((0,s.Z)({defaultActiveIndex:c},o),{activeIndex:"onSelect"}),h=f.as,m=void 0===h?"div":h,p=f.bsPrefix,N=f.slide,Z=void 0===N||N,w=f.fade,y=void 0!==w&&w,S=f.controls,L=void 0===S||S,D=f.indicators,O=void 0===D||D,A=f.indicatorLabels,P=void 0===A?[]:A,_=f.activeIndex,K=f.onSelect,z=f.onSlide,U=f.onSlid,X=f.interval,F=void 0===X?5e3:X,H=f.keyboard,q=void 0===H||H,B=f.onKeyDown,G=f.pause,J=void 0===G?"hover":G,Q=f.onMouseOver,V=f.onMouseOut,W=f.wrap,Y=void 0===W||W,$=f.touch,ee=void 0===$||$,ne=f.onTouchStart,te=f.onTouchMove,re=f.onTouchEnd,ae=f.prevIcon,ie=void 0===ae?(0,i.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}):ae,ce=f.prevLabel,oe=void 0===ce?"Previous":ce,se=f.nextIcon,ue=void 0===se?(0,i.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}):se,le=f.nextLabel,de=void 0===le?"Next":le,ve=f.variant,fe=f.className,he=f.children,me=(0,u.Z)(f,R),pe=(0,C.vE)(p,"carousel"),xe=(0,C.SC)(),be=(0,a.useRef)(null),Ne=(0,a.useState)("next"),ge=(0,r.Z)(Ne,2),je=ge[0],Ze=ge[1],Ce=(0,a.useState)(!1),we=(0,r.Z)(Ce,2),ye=we[0],Se=we[1],ke=(0,a.useState)(!1),Ie=(0,r.Z)(ke,2),Ee=Ie[0],Te=Ie[1],Me=(0,a.useState)(_||0),Re=(0,r.Z)(Me,2),Le=Re[0],De=Re[1];(0,a.useEffect)((function(){Ee||_===Le||(be.current?Ze(be.current):Ze((_||0)>Le?"next":"prev"),Z&&Te(!0),De(_||0))}),[_,Ee,Le,Z]),(0,a.useEffect)((function(){be.current&&(be.current=null)}));var Oe,Ae=0;(0,k.Ed)(he,(function(e,n){++Ae,n===_&&(Oe=e.props.interval)}));var Pe=(0,v.Z)(Oe),_e=(0,a.useCallback)((function(e){if(!Ee){var n=Le-1;if(n<0){if(!Y)return;n=Ae-1}be.current="prev",null==K||K(n,e)}}),[Ee,Le,K,Y,Ae]),Ke=(0,l.Z)((function(e){if(!Ee){var n=Le+1;if(n>=Ae){if(!Y)return;n=0}be.current="next",null==K||K(n,e)}})),ze=(0,a.useRef)();(0,a.useImperativeHandle)(n,(function(){return{element:ze.current,prev:_e,next:Ke}}));var Ue=(0,l.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ze.current)&&(xe?_e():Ke())})),Xe="next"===je?"start":"end";d((function(){Z||(null==z||z(Le,Xe),null==U||U(Le,Xe))}),[Le]);var Fe="".concat(pe,"-item-").concat(je),He="".concat(pe,"-item-").concat(Xe),qe=(0,a.useCallback)((function(e){(0,E.Z)(e),null==z||z(Le,Xe)}),[z,Le,Xe]),Be=(0,a.useCallback)((function(){Te(!1),null==U||U(Le,Xe)}),[U,Le,Xe]),Ge=(0,a.useCallback)((function(e){if(q&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(xe?Ke(e):_e(e));case"ArrowRight":return e.preventDefault(),void(xe?_e(e):Ke(e))}null==B||B(e)}),[q,B,_e,Ke,xe]),Je=(0,a.useCallback)((function(e){"hover"===J&&Se(!0),null==Q||Q(e)}),[J,Q]),Qe=(0,a.useCallback)((function(e){Se(!1),null==V||V(e)}),[V]),Ve=(0,a.useRef)(0),We=(0,a.useRef)(0),Ye=x(),$e=(0,a.useCallback)((function(e){Ve.current=e.touches[0].clientX,We.current=0,"hover"===J&&Se(!0),null==ne||ne(e)}),[J,ne]),en=(0,a.useCallback)((function(e){e.touches&&e.touches.length>1?We.current=0:We.current=e.touches[0].clientX-Ve.current,null==te||te(e)}),[te]),nn=(0,a.useCallback)((function(e){if(ee){var n=We.current;Math.abs(n)>40&&(n>0?_e(e):Ke(e))}"hover"===J&&Ye.set((function(){Se(!1)}),F||void 0),null==re||re(e)}),[ee,J,_e,Ke,Ye,F,re]),tn=null!=F&&!ye&&!Ee,rn=(0,a.useRef)();(0,a.useEffect)((function(){var e,n;if(tn){var t=xe?_e:Ke;return rn.current=window.setInterval(document.visibilityState?Ue:t,null!=(e=null!=(n=Pe.current)?n:F)?e:void 0),function(){null!==rn.current&&clearInterval(rn.current)}}}),[tn,_e,Ke,Pe,F,Ue,xe]);var an=(0,a.useMemo)((function(){return O&&Array.from({length:Ae},(function(e,n){return function(e){null==K||K(n,e)}}))}),[O,Ae,K]);return(0,i.jsxs)(m,(0,s.Z)((0,s.Z)({ref:ze},me),{},{onKeyDown:Ge,onMouseOver:Je,onMouseOut:Qe,onTouchStart:$e,onTouchMove:en,onTouchEnd:nn,className:g()(fe,pe,Z&&"slide",y&&"".concat(pe,"-fade"),ve&&"".concat(pe,"-").concat(ve)),children:[O&&(0,i.jsx)("div",{className:"".concat(pe,"-indicators"),children:(0,k.UI)(he,(function(e,n){return(0,i.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=P&&P.length?P[n]:"Slide ".concat(n+1),className:n===Le?"active":void 0,onClick:an?an[n]:void 0,"aria-current":n===Le},n)}))}),(0,i.jsx)("div",{className:"".concat(pe,"-inner"),children:(0,k.UI)(he,(function(e,n){var t=n===Le;return Z?(0,i.jsx)(T.Z,{in:t,onEnter:t?qe:void 0,onEntered:t?Be:void 0,addEndListener:I.Z,children:function(n,r){return a.cloneElement(e,(0,s.Z)((0,s.Z)({},r),{},{className:g()(e.props.className,t&&"entered"!==n&&Fe,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&He)}))}}):a.cloneElement(e,{className:g()(e.props.className,t&&"active")})}))}),L&&(0,i.jsxs)(i.Fragment,{children:[(Y||0!==_)&&(0,i.jsxs)(b.Z,{className:"".concat(pe,"-control-prev"),onClick:_e,children:[ie,oe&&(0,i.jsx)("span",{className:"visually-hidden",children:oe})]}),(Y||_!==Ae-1)&&(0,i.jsxs)(b.Z,{className:"".concat(pe,"-control-next"),onClick:Ke,children:[ue,de&&(0,i.jsx)("span",{className:"visually-hidden",children:de})]})]})]}))}));L.displayName="Carousel";var D=Object.assign(L,{Caption:Z,Item:S});function O(e){return(0,i.jsx)("div",{id:"portfolio",className:"text-center",children:(0,i.jsxs)(o.Z,{children:[(0,i.jsxs)("div",{className:"section-title",children:[(0,i.jsx)("h2",{children:"Portfolio"}),(0,i.jsx)("p",{children:'"Showcasing two decades of superior craftsmanship in hydraulic solutions, spanning diverse sectors and featuring innovative designs, precise manufacturing, and consistent client satisfaction."'})]}),(0,i.jsx)(D,{children:e.data?e.data.map((function(e,n){return(0,i.jsx)(D.Item,{interval:1e3,children:(0,i.jsx)(c,{title:e.title,image:e.image,imagem:e.imgm,description:e.description,alt:e.alt})},"".concat(e.title,"-").concat(n))})):"Loading..."})]})})}}}]);
//# sourceMappingURL=777.4a80fabe.chunk.js.map