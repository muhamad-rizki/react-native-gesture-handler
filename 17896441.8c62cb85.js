(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(117),c=a(107),i=a(108),o=a(110);var s=a(124);var m=function(){var e=Object(c.a)().siteConfig.title,t=Object(s.useActivePlugin)({failfast:!0}).pluginId,a=Object(s.useActiveVersion)(t),n=Object(s.useDocVersionSuggestions)(t),r=n.latestDocSuggestion,i=n.latestVersionSuggestion;if(!i)return l.a.createElement(l.a.Fragment,null);var m,d=null!=r?r:(m=i).docs.find((function(e){return e.id===m.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===a.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,a.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,a.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(o.a,{to:d.path},"latest version"))," ","(",i.label,")."))};var d=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],c=l[1];Object(n.useEffect)((function(){var n,l;function i(){var i=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var l=n[e],r=l.getBoundingClientRect().top;r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){var o=0,s=!1;for(l=document.getElementsByClassName(e);o<l.length&&!s;){var m=l[o],d=m.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));i.id===u&&(r&&r.classList.remove(t),m.classList.add(t),c(m),s=!0),o+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}))},u=a(56),g=a.n(u);function v(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(v,{isChild:!0,headings:e.children}))}))):null}var E=function(e){var t=e.headings;return d("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:g.a.tableOfContents},l.a.createElement(v,{headings:t}))},f=a(109),p=a(57),b=a.n(p);t.default=function(e){var t,a=Object(c.a)().siteConfig,n=void 0===a?{}:a,o=n.url,d=n.title,u=e.content,g=u.metadata,v=g.description,p=g.title,h=g.permalink,N=(g.editUrl,g.lastUpdatedAt,g.lastUpdatedBy,u.frontMatter),O=N.image,j=N.keywords,w=N.hide_title,y=N.hide_table_of_contents,_=void 0===y||y,k=Object(s.useActivePlugin)({failfast:!0}).pluginId,C=Object(s.useVersions)(k),I=Object(s.useActiveVersion)(k),L=C.length>1,T=p?p+" | "+d:d,V=Object(i.a)(O,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,T),l.a.createElement("meta",{property:"og:title",content:T}),v&&l.a.createElement("meta",{name:"description",content:v}),v&&l.a.createElement("meta",{property:"og:description",content:v}),j&&j.length&&l.a.createElement("meta",{name:"keywords",content:j.join(",")}),O&&l.a.createElement("meta",{property:"og:image",content:V}),O&&l.a.createElement("meta",{property:"twitter:image",content:V}),O&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),h&&l.a.createElement("meta",{property:"og:url",content:o+h}),h&&l.a.createElement("link",{rel:"canonical",href:o+h})),l.a.createElement("div",{className:Object(f.a)("container padding-vert--lg",b.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(f.a)("col",(t={},t[b.a.docItemCol]=!_,t))},l.a.createElement(m,null),l.a.createElement("div",{className:b.a.docItemContainer},l.a.createElement("article",null,L&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",I.label)),!w&&l.a.createElement("header",null,l.a.createElement("h1",{className:b.a.docTitle},p)),l.a.createElement("div",{className:"markdown"},l.a.createElement(u,null))))),!_&&u.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(E,{headings:u.rightToc})))))}}}]);