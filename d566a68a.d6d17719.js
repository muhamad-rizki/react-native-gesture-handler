(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(106)),o={id:"fling-gesture",title:"Fling gesture",sidebar_label:"Fling gesture"},c={unversionedId:"api2/fling-gesture",id:"api2/fling-gesture",isDocsHomePage:!1,title:"Fling gesture",description:"A discrete gesture that activates when the movement is sufficiently long and fast.",source:"@site/docs/api2/fling-gesture.md",slug:"/api2/fling-gesture",permalink:"/react-native-gesture-handler/docs/api2/fling-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api2/fling-gesture.md",version:"current",sidebar_label:"Fling gesture",sidebar:"docs",previous:{title:"Long press gesture",permalink:"/react-native-gesture-handler/docs/api2/long-press-gesture"},next:{title:"Pinch gesture",permalink:"/react-native-gesture-handler/docs/api2/pinch-gesture"}},s=[{value:"Config",id:"config",children:[{value:"<code>direction(value: Directions)</code>",id:"directionvalue-directions",children:[]},{value:"<code>numberOfPointers(value: number)</code>",id:"numberofpointersvalue-number",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A discrete gesture that activates when the movement is sufficiently long and fast.\nGesture gets ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"ACTIVE")," when movement is sufficiently long and it does not take too much time.\nWhen gesture gets activated it will turn into ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#end"}),"END")," state when finger is released.\nThe gesture will fail to recognize if the finger is lifted before being activated.\nThe gesture is implemented using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uiswipegesturerecognizer"}),"UISwipeGestureRecognizer")," on iOS and from scratch on Android."),Object(a.b)("h2",{id:"config"},"Config"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/common-gesture#config"}),"set of properties common to all gestures"),". Below is a list of properties specific to ",Object(a.b)("inlineCode",{parentName:"p"},"FlingGesture"),":"),Object(a.b)("h3",{id:"directionvalue-directions"},Object(a.b)("inlineCode",{parentName:"h3"},"direction(value: Directions)")),Object(a.b)("p",null,"Expressed allowed direction of movement. Expected values are exported as constants in the ",Object(a.b)("inlineCode",{parentName:"p"},"Directions")," object. It's possible to pass one or many directions in one parameter:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"fling.direction(Directions.RIGHT | Directions.LEFT);\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"fling.direction(Directions.DOWN);\n")),Object(a.b)("h3",{id:"numberofpointersvalue-number"},Object(a.b)("inlineCode",{parentName:"h3"},"numberOfPointers(value: number)")),Object(a.b)("p",null,"Determine exact number of points required to handle the fling gesture."),Object(a.b)("h2",{id:"event-data"},"Event data"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/common-gesture#event-data"}),"set of event attributes common to all gestures"),". Below is a list of gesture event attributes specific to ",Object(a.b)("inlineCode",{parentName:"p"},"FlingGesture"),":"),Object(a.b)("h3",{id:"x"},Object(a.b)("inlineCode",{parentName:"h3"},"x")),Object(a.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/gesture-detector"}),Object(a.b)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),Object(a.b)("h3",{id:"y"},Object(a.b)("inlineCode",{parentName:"h3"},"y")),Object(a.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/api2/gesture-detector"}),Object(a.b)("inlineCode",{parentName:"a"},"GestureDetector")),". Expressed in point units."),Object(a.b)("h3",{id:"absolutex"},Object(a.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(a.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#x"}),Object(a.b)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),Object(a.b)("h3",{id:"absolutey"},Object(a.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(a.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#y"}),Object(a.b)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."))}u.isMDXComponent=!0}}]);