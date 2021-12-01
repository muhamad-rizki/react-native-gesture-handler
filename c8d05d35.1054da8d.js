(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(106)),i={id:"rotation-gesture",title:"Rotation gesture",sidebar_label:"Rotation gesture"},c={unversionedId:"api2/rotation-gesture",id:"api2/rotation-gesture",isDocsHomePage:!1,title:"Rotation gesture",description:"A continuous gesture that can recognize a rotation gesture and track its movement.",source:"@site/docs/api2/rotation-gesture.md",slug:"/api2/rotation-gesture",permalink:"/react-native-gesture-handler/docs/api2/rotation-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api2/rotation-gesture.md",version:"current",sidebar_label:"Rotation gesture",sidebar:"docs",previous:{title:"Pinch gesture",permalink:"/react-native-gesture-handler/docs/api2/pinch-gesture"},next:{title:"Force touch gesture (iOS only)",permalink:"/react-native-gesture-handler/docs/api2/force-touch-gesture"}},s=[{value:"Config",id:"config",children:[]},{value:"Event data",id:"event-data",children:[{value:"<code>rotation</code>",id:"rotation",children:[]},{value:"<code>velocity</code>",id:"velocity",children:[]},{value:"<code>anchorX</code>",id:"anchorx",children:[]},{value:"<code>anchorY</code>",id:"anchory",children:[]}]}],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A continuous gesture that can recognize a rotation gesture and track its movement."),Object(a.b)("p",null,"The gesture ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activates")," when fingers are placed on the screen and change position in a proper way."),Object(a.b)("p",null,"Gesture callback can be used for continuous tracking of the rotation gesture. It provides information about the gesture such as the amount rotated, the focal point of the rotation (anchor), and its instantaneous velocity."),Object(a.b)("p",null,"The gesture is implemented using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uirotationgesturerecognizer"}),"UIRotationGestureRecognizer")," on iOS and from scratch on Android."),Object(a.b)("h2",{id:"config"},"Config"),Object(a.b)("p",null,"Rotation gesture does not extend the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/common-gesture"}),"common gesture config"),"."),Object(a.b)("h2",{id:"event-data"},"Event data"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/common-gesture#event-data"}),"set of event attributes common to all gestures"),". Below is a list of gesture event attributes specific to ",Object(a.b)("inlineCode",{parentName:"p"},"RotationGesture"),":"),Object(a.b)("h3",{id:"rotation"},Object(a.b)("inlineCode",{parentName:"h3"},"rotation")),Object(a.b)("p",null,"Amount rotated, expressed in radians, from the gesture's focal point (anchor)."),Object(a.b)("h3",{id:"velocity"},Object(a.b)("inlineCode",{parentName:"h3"},"velocity")),Object(a.b)("p",null,"Instantaneous velocity, expressed in point units per second, of the gesture."),Object(a.b)("h3",{id:"anchorx"},Object(a.b)("inlineCode",{parentName:"h3"},"anchorX")),Object(a.b)("p",null,"X coordinate, expressed in points, of the gesture's central focal point (anchor)."),Object(a.b)("h3",{id:"anchory"},Object(a.b)("inlineCode",{parentName:"h3"},"anchorY")),Object(a.b)("p",null,"Y coordinate, expressed in points, of the gesture's central focal point (anchor)."))}l.isMDXComponent=!0}}]);