(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{121:function(e,a,t){"use strict";var n=t(2),r=t(0),l=t.n(r),i=t(109),c=t(110),o=t(107),s=t(128),m=t(122),u=t(116),b=t(129),d=t(118),v=t(119),h=t(112),g=t(48),f=t.n(g),k=t(123),E=t(113);a.a=function(){var e,a,t=Object(o.a)(),g=t.siteConfig.themeConfig,_=g.navbar,p=(_=void 0===_?{}:_).title,O=void 0===p?"":p,j=_.items,N=void 0===j?[]:j,w=_.hideOnScroll,C=void 0!==w&&w,y=g.colorMode,I=(y=void 0===y?{}:y).disableSwitch,M=void 0!==I&&I,S=t.isClient,L=Object(r.useState)(!1),x=L[0],P=L[1],B=Object(r.useState)(!1),D=B[0],T=B[1],H=Object(u.a)(),W=H.isDarkTheme,A=H.setLightTheme,G=H.setDarkTheme,J=Object(b.a)(C),R=J.navbarRef,U=J.isNavbarVisible,V=Object(h.a)(),K=V.logoLink,Y=V.logoLinkProps,q=V.logoImageUrl,z=V.logoAlt;Object(d.a)(x);var F=Object(r.useCallback)((function(){P(!0)}),[P]),Q=Object(r.useCallback)((function(){P(!1)}),[P]),X=Object(r.useCallback)((function(e){return e.target.checked?G():A()}),[A,G]),Z=Object(v.a)();Object(r.useEffect)((function(){Z===v.b.desktop&&P(!1)}),[Z]);var $=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:"right")})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:"right")}))}}(N),ee=$.leftItems,ae=$.rightItems;return l.a.createElement("nav",{ref:R,className:Object(i.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":x},e[f.a.navbarHideable]=C,e[f.a.navbarHidden]=!U,e))},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=N&&0!==N.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:F,onKeyDown:F},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(c.a,Object(n.a)({className:"navbar__brand",to:K},Y),null!=O&&l.a.createElement("strong",{className:Object(i.a)("navbar__title",(a={},a[f.a.hideLogoText]=D,a))},O))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},l.a.createElement("div",{className:f.a.searchBarMargin},l.a.createElement(s.a,{handleSearchBarToggle:T,isSearchBarExpanded:D})),ee.map((function(e,a){return l.a.createElement(k.a,Object(n.a)({},e,{key:a}))})),l.a.createElement("div",{className:"githubStarLink"},l.a.createElement(E.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")),ae.map((function(e,a){return l.a.createElement(k.a,Object(n.a)({},e,{key:a}))})),!M&&l.a.createElement(m.a,{className:f.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:W,onChange:X}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Q}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(c.a,Object(n.a)({className:"navbar__brand",onClick:Q,to:K},Y),null!=q&&l.a.createElement("img",{key:S,className:"navbar__logo",src:q,alt:z}),null!=O&&l.a.createElement("strong",{className:"navbar__title"},O)),!M&&x&&l.a.createElement(m.a,{"aria-label":"Dark mode toggle in sidebar",checked:W,onChange:X})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},N.map((function(e,a){return l.a.createElement(k.a,Object(n.a)({mobile:!0},e,{onClick:Q,key:a}))})))))))}},125:function(e,a,t){"use strict";t(2),t(6);var n=t(0),r=t.n(n),l=t(109),i=t(110),c=t(107),o=t(108),s=(t(49),t(113));t(112);a.a=function(){var e=Object(c.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},m=(n.copyright,n.links,n.logo),u=void 0===m?{}:m,b=(Object(o.a)(u.src),Object(o.a)("/img/swmLogo.svg"));return t?r.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(i.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=b&&r.a.createElement("img",{className:"navbar__logo",src:b,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(s.a,{href:"https://github.com/software-mansion/react-native-gesture-handler","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-gesture-handler on GitHub"},"Star")))):null}},163:function(e,a,t){"use strict";var n=t(2),r=t(6),l=t(0),i=t.n(l),c=t(109),o=t(107),s=t(138),m=t(118),u=t(119),b=t(112),d=t(142),v=t(110),h=t(111),g=t(59),f=t.n(g);var k=function e(a,t){return"link"===a.type?(n=a.href,r=t,(l=function(e){return e.endsWith("/")?e:e+"/"})(n)===l(r)):"category"===a.type&&a.items.some((function(a){return e(a,t)}));var n,r,l};function E(e){var a,t,o,s=e.item,m=e.onItemClick,u=e.collapsible,b=e.activePath,d=Object(r.a)(e,["item","onItemClick","collapsible","activePath"]),v=s.items,h=s.label,g=k(s,b),E=(t=g,o=Object(l.useRef)(t),Object(l.useEffect)((function(){o.current=t}),[t]),o.current),_=Object(l.useState)((function(){return!!u&&(!g&&s.collapsed)})),O=_[0],j=_[1];Object(l.useEffect)((function(){g&&!E&&O&&j(!1)}),[g,E,O]);var N=Object(l.useCallback)((function(e){e.preventDefault(),j((function(e){return!e}))}),[j]);return 0===v.length?null:i.a.createElement("li",{className:Object(c.a)("menu__list-item",{"menu__list-item--collapsed":O}),key:h},i.a.createElement("a",Object(n.a)({className:Object(c.a)("menu__link",(a={"menu__link--sublist":u,"menu__link--active":u&&g},a[f.a.menuLinkText]=!u,a)),onClick:u?N:void 0,href:u?"#!":void 0},d),h),i.a.createElement("ul",{className:"menu__list"},v.map((function(e){return i.a.createElement(p,{tabIndex:O?"-1":"0",key:e.label,item:e,onItemClick:m,collapsible:u,activePath:b})}))))}function _(e){var a=e.item,t=e.onItemClick,l=e.activePath,o=(e.collapsible,Object(r.a)(e,["item","onItemClick","activePath","collapsible"])),s=a.href,m=a.label,u=k(a,l);return i.a.createElement("li",{className:"menu__list-item",key:m},i.a.createElement(v.a,Object(n.a)({className:Object(c.a)("menu__link",{"menu__link--active":u}),to:s},Object(h.a)(s)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},o),m))}function p(e){switch(e.item.type){case"category":return i.a.createElement(E,e);case"link":default:return i.a.createElement(_,e)}}a.a=function(e){var a,t,r=e.path,h=e.sidebar,g=e.sidebarCollapsible,k=void 0===g||g,E=Object(l.useState)(!1),_=E[0],O=E[1],j=Object(o.a)(),N=j.siteConfig,w=(N=void 0===N?{}:N).themeConfig,C=(w=void 0===w?{}:w).navbar,y=(C=void 0===C?{}:C).title,I=void 0===y?"":y,M=C.hideOnScroll,S=void 0!==M&&M,L=j.isClient,x=Object(b.a)(),P=x.logoLink,B=x.logoLinkProps,D=x.logoImageUrl,T=x.logoAlt,H=Object(s.a)().isAnnouncementBarClosed,W=Object(d.a)().scrollY;Object(m.a)(_);var A=Object(u.a)();return Object(l.useEffect)((function(){A===u.b.desktop&&O(!1)}),[A]),i.a.createElement("div",{className:Object(c.a)(f.a.sidebar,(a={},a[f.a.sidebarWithHideableNavbar]=S,a))},S&&i.a.createElement(v.a,Object(n.a)({tabIndex:-1,className:f.a.sidebarLogo,to:P},B),null!=D&&i.a.createElement("img",{key:L,src:D,alt:T}),null!=I&&i.a.createElement("strong",null,I)),i.a.createElement("div",{className:Object(c.a)("menu","menu--responsive",f.a.menu,(t={"menu--show":_},t[f.a.menuWithAnnouncementBar]=!H&&0===W,t))},i.a.createElement("button",{"aria-label":_?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button "+(_?"":"shadow--tl"),type:"button",onClick:function(){O(!_)}},_?i.a.createElement("span",{className:Object(c.a)(f.a.sidebarMenuIcon,f.a.sidebarMenuCloseIcon)},"\xd7"):i.a.createElement("svg",{"aria-label":"Menu",className:f.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),i.a.createElement("ul",{className:"menu__list"},h.map((function(e){return i.a.createElement(p,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),O(!1)},collapsible:k,activePath:r})})))))}}}]);