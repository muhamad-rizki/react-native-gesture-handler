(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{121:function(e,a,t){"use strict";var n=t(2),r=t(0),i=t.n(r),l=t(109),o=t(110),c=t(107),s=t(128),m=t(122),b=t(116),d=t(129),v=t(118),u=t(119),g=t(112),h=t(48),f=t.n(h),E=t(123),k=t(113);a.a=function(){var e,a,t=Object(c.a)(),h=t.siteConfig.themeConfig,_=h.navbar,w=(_=void 0===_?{}:_).title,p=void 0===w?"":w,N=_.items,O=void 0===N?[]:N,j=_.hideOnScroll,C=void 0!==j&&j,S=h.colorMode,y=(S=void 0===S?{}:S).disableSwitch,L=void 0!==y&&y,M=t.isClient,x=Object(r.useState)(!1),I=x[0],D=x[1],T=Object(r.useState)(!1),B=T[0],H=T[1],J=Object(b.a)(),G=J.isDarkTheme,V=J.setLightTheme,A=J.setDarkTheme,K=Object(d.a)(C),P=K.navbarRef,R=K.isNavbarVisible,U=Object(g.a)(),W=U.logoLink,q=U.logoLinkProps,z=U.logoImageUrl,F=U.logoAlt;Object(v.a)(I);var Q=Object(r.useCallback)((function(){D(!0)}),[D]),X=Object(r.useCallback)((function(){D(!1)}),[D]),Y=Object(r.useCallback)((function(e){return e.target.checked?A():V()}),[V,A]),Z=Object(u.a)();Object(r.useEffect)((function(){Z===u.b.desktop&&D(!1)}),[Z]);var $=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"right")})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"right")}))}}(O),ee=$.leftItems,ae=$.rightItems;return i.a.createElement("nav",{ref:P,className:Object(l.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":I},e[f.a.navbarHideable]=C,e[f.a.navbarHidden]=!R,e))},i.a.createElement("div",{className:"navbar__inner"},i.a.createElement("div",{className:"navbar__items"},null!=O&&0!==O.length&&i.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Q,onKeyDown:Q},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),i.a.createElement(o.a,Object(n.a)({className:"navbar__brand",to:W},q),null!=p&&i.a.createElement("strong",{className:Object(l.a)("navbar__title",(a={},a[f.a.hideLogoText]=B,a))},p))),i.a.createElement("div",{className:"navbar__items navbar__items--right"},i.a.createElement("div",{className:f.a.searchBarMargin},i.a.createElement(s.a,{handleSearchBarToggle:H,isSearchBarExpanded:B})),ee.map((function(e,a){return i.a.createElement(E.a,Object(n.a)({},e,{key:a}))})),i.a.createElement("div",{className:"githubStarLink"},i.a.createElement(k.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")),ae.map((function(e,a){return i.a.createElement(E.a,Object(n.a)({},e,{key:a}))})),!L&&i.a.createElement(m.a,{className:f.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:G,onChange:Y}))),i.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:X}),i.a.createElement("div",{className:"navbar-sidebar"},i.a.createElement("div",{className:"navbar-sidebar__brand"},i.a.createElement(o.a,Object(n.a)({className:"navbar__brand",onClick:X,to:W},q),null!=z&&i.a.createElement("img",{key:M,className:"navbar__logo",src:z,alt:F}),null!=p&&i.a.createElement("strong",{className:"navbar__title"},p)),!L&&I&&i.a.createElement(m.a,{"aria-label":"Dark mode toggle in sidebar",checked:G,onChange:Y})),i.a.createElement("div",{className:"navbar-sidebar__items"},i.a.createElement("div",{className:"menu"},i.a.createElement("ul",{className:"menu__list"},O.map((function(e,a){return i.a.createElement(E.a,Object(n.a)({mobile:!0},e,{onClick:X,key:a}))})))))))}},125:function(e,a,t){"use strict";t(2),t(6);var n=t(0),r=t.n(n),i=t(109),l=t(110),o=t(107),c=t(108),s=(t(49),t(113));t(112);a.a=function(){var e=Object(o.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},m=(n.copyright,n.links,n.logo),b=void 0===m?{}:m,d=(Object(c.a)(b.src),Object(c.a)("/img/swmLogo.svg"));return t?r.a.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(l.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=d&&r.a.createElement("img",{className:"navbar__logo",src:d,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(s.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")))):null}},178:function(e){e.exports=JSON.parse("[]")}}]);