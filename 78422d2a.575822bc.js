(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||b[d]||c;return r?n.a.createElement(g,i(i({ref:t},u),{},{components:r})):n.a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<c;u++)s[u]=r[u];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return l}));var a=r(2),n=r(6),c=(r(0),r(106)),s={id:"gesture",title:"Gesture",sidebar_label:"Gesture"},i={unversionedId:"api2/gesture",id:"api2/gesture",isDocsHomePage:!1,title:"Gesture",description:"Gesture is the object that allows you to create and compose gestures.",source:"@site/docs/api2/gesture.md",slug:"/api2/gesture",permalink:"/react-native-gesture-handler/docs/api2/gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api2/gesture.md",version:"current",sidebar_label:"Gesture",sidebar:"docs",previous:{title:"Quick start",permalink:"/react-native-gesture-handler/docs/api2/quickstart"},next:{title:"Events",permalink:"/react-native-gesture-handler/docs/api2/events"}},o=[{value:"Gesture.Tap(): TapGesture",id:"gesturetap-tapgesture",children:[]},{value:"Gesture.Pan(): PanGesture",id:"gesturepan-pangesture",children:[]},{value:"Gesture.LongPress(): LongPressGesture",id:"gesturelongpress-longpressgesture",children:[]},{value:"Gesture.Fling(): FlingGesture",id:"gesturefling-flinggesture",children:[]},{value:"Gesture.Pinch(): PinchGesture",id:"gesturepinch-pinchgesture",children:[]},{value:"Gesture.Rotation(): RotationGesture",id:"gesturerotation-rotationgesture",children:[]},{value:"Gesture.ForceTouch(): ForceTouchGesture",id:"gestureforcetouch-forcetouchgesture",children:[]}],u={rightToc:o};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Gesture")," is the object that allows you to create and compose gestures."),Object(c.b)("h3",{id:"gesturetap-tapgesture"},"Gesture.Tap(): ",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"/react-native-gesture-handler/docs/api2/tap-gesture"}),"TapGesture")),Object(c.b)("p",null,"Creates a new instance of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/tap-gesture"}),Object(c.b)("inlineCode",{parentName:"a"},"TapGesture"))," with its default config and no callbacks."),Object(c.b)("h3",{id:"gesturepan-pangesture"},"Gesture.Pan(): ",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"/react-native-gesture-handler/docs/api2/pan-gesture"}),"PanGesture")),Object(c.b)("p",null,"Creates a new instance of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/pan-gesture"}),Object(c.b)("inlineCode",{parentName:"a"},"PanGesture"))," with its default config and no callbacks."),Object(c.b)("h3",{id:"gesturelongpress-longpressgesture"},"Gesture.LongPress(): ",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"/react-native-gesture-handler/docs/api2/long-press-gesture"}),"LongPressGesture")),Object(c.b)("p",null,"Creates a new instance of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/long-press-gesture"}),Object(c.b)("inlineCode",{parentName:"a"},"LongPressGesture"))," with its default config and no callbacks."),Object(c.b)("h3",{id:"gesturefling-flinggesture"},"Gesture.Fling(): ",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"/react-native-gesture-handler/docs/api2/fling-gesture"}),"FlingGesture")),Object(c.b)("p",null,"Creates a new instance of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/fling-gesture"}),Object(c.b)("inlineCode",{parentName:"a"},"FlingGesture"))," with its default config and no callbacks."),Object(c.b)("h3",{id:"gesturepinch-pinchgesture"},"Gesture.Pinch(): ",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"/react-native-gesture-handler/docs/api2/pinch-gesture"}),"PinchGesture")),Object(c.b)("p",null,"Creates a new instance of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/pinch-gesture"}),Object(c.b)("inlineCode",{parentName:"a"},"PinchGesture"))," with its default config and no callbacks."),Object(c.b)("h3",{id:"gesturerotation-rotationgesture"},"Gesture.Rotation(): ",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"/react-native-gesture-handler/docs/api2/rotation-gesture"}),"RotationGesture")),Object(c.b)("p",null,"Creates a new instance of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/rotation-gesture"}),Object(c.b)("inlineCode",{parentName:"a"},"RotationGesture"))," with its default config and no callbacks."),Object(c.b)("h3",{id:"gestureforcetouch-forcetouchgesture"},"Gesture.ForceTouch(): ",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"/react-native-gesture-handler/docs/api2/force-touch-gesture"}),"ForceTouchGesture")),Object(c.b)("p",null,"Creates a new instance of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/force-touch-gesture"}),Object(c.b)("inlineCode",{parentName:"a"},"ForceTouchGesture"))," with its default config and no callbacks."))}l.isMDXComponent=!0}}]);