(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],{13:function(e,t,_){"use strict";var c=_(1),a=_(14);t.a=function(){return Object(c.useContext)(a.a)}},14:function(e,t,_){"use strict";_.d(t,"a",(function(){return l}));var c=_(9),a=_(1),s=_(23),r=_(4);var n=function(e,t){var _=t.type,c=t.payload;switch(_){case"ADD_TO_DISPLAY":return Object(r.a)(Object(r.a)({},e),{},{operation:e.operation+c});case"CALCULATE":return Object(r.a)(Object(r.a)({},e),{},{result:c});case"CLEAR":return Object(r.a)(Object(r.a)({},e),{},{operation:"",result:""});case"DELETE":return 1===e.operation.length?Object(r.a)(Object(r.a)({},e),{},{operation:"",result:""}):0===e.result.length?Object(r.a)(Object(r.a)({},e),{},{operation:""}):Object(r.a)(Object(r.a)({},e),{},{operation:e.operation.slice(0,-1)});case"GET_RESULT":if(""!==e.result&&""!==e.operation)return{history:[].concat(Object(s.a)(e.history),[{operation:e.operation,result:e.result}]),operation:e.result,result:""};break;case"OPEN_SIDEMENU":return Object(r.a)(Object(r.a)({},e),{},{openSideMenu:!e.openSideMenu});default:return e}},i={operation:"",result:"",history:[],openSideMenu:!1},o=_(0),l=Object(a.createContext)();t.b=function(e){var t=e.children,_=Object(a.useReducer)(n,i),s=Object(c.a)(_,2),r=s[0],j=s[1];return Object(o.jsx)(l.Provider,{value:{state:r,dispatch:j},children:t})}},20:function(module,__webpack_exports__,__webpack_require__){"use strict";var _mnt_c_Users_Joel_Desktop_proyectos_proyectos_personales_calculadora_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_context_useAppContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),_styles_Display_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30),_styles_Display_scss__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_styles_Display_scss__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),Display=function Display(){var _useAppContext=Object(_context_useAppContext__WEBPACK_IMPORTED_MODULE_2__.a)(),state=_useAppContext.state,dispatch=_useAppContext.dispatch,operation=state.operation,result=state.result,history=state.history,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=Object(_mnt_c_Users_Joel_Desktop_proyectos_proyectos_personales_calculadora_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),swipe=_useState2[0],setSwipe=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){try{operation.match(/[0-9]$/)?dispatch({type:"CALCULATE",payload:eval(operation)}):operation.length>1&&dispatch({type:"CALCULATE",payload:eval(operation.slice(0,-1))})}catch(error){console.log("Error: No se pudo realizar la operacion")}}),[operation]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"display ".concat(swipe?"history-swipe":""),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"history-block",children:history.map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"line"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"display--box",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:e.operation})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"display--box result",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:e.result})})]})}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"display--box",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:operation})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"display--box result",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:result})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"btn-history",onClick:function(){return setSwipe(!swipe)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{})})]})};__webpack_exports__.a=Display},29:function(e,t,_){},30:function(e,t,_){},31:function(e,t,_){},32:function(e,t,_){},41:function(e,t,_){"use strict";_.r(t);var c=_(1),a=_.n(c),s=_(19),r=_.n(s),n=_(21),i=_(2),o=_(14),l=_(9),j=(_(29),_(0)),d=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),_=t[0],a=t[1],s=function(){a(!_)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"menu",children:Object(j.jsx)("div",{className:"menu--side-menu ".concat(_?"open-sidemenu":""),onClick:s,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"B\xe1sica"}),Object(j.jsx)("li",{children:"Cientifica"}),Object(j.jsx)("li",{children:"Conversi\xf3n"})]})})}),Object(j.jsx)("div",{className:"btn-options ".concat(_?"hide":""),onClick:s,children:Object(j.jsx)("span",{children:"\u26a1"})})]})},O=_(20),u=_(13),b=(_(31),function(){var e=Object(u.a)().dispatch,t=function(t){e({type:"ADD_TO_DISPLAY",payload:t.target.dataset.key})};return Object(j.jsxs)("div",{className:"keys",children:[Object(j.jsx)("div",{className:"btn operator","data-key":"(",onClick:t,children:"("}),Object(j.jsx)("div",{className:"btn operator","data-key":")",onClick:t,children:")"}),Object(j.jsx)("div",{className:"btn",onClick:function(){e({type:"DELETE"})},children:"C"}),Object(j.jsx)("div",{className:"btn",onClick:function(){e({type:"CLEAR"})},children:"AC"}),Object(j.jsx)("div",{className:"btn number","data-key":"7",onClick:t,children:"7"}),Object(j.jsx)("div",{className:"btn number","data-key":"8",onClick:t,children:"8"}),Object(j.jsx)("div",{className:"btn number","data-key":"9",onClick:t,children:"9"}),Object(j.jsx)("div",{className:"btn operator","data-key":"/",onClick:t,children:"/"}),Object(j.jsx)("div",{className:"btn number","data-key":"4",onClick:t,children:"4"}),Object(j.jsx)("div",{className:"btn number","data-key":"5",onClick:t,children:"5"}),Object(j.jsx)("div",{className:"btn number","data-key":"6",onClick:t,children:"6"}),Object(j.jsx)("div",{className:"btn operator","data-key":"*",onClick:t,children:"x"}),Object(j.jsx)("div",{className:"btn number","data-key":"1",onClick:t,children:"1"}),Object(j.jsx)("div",{className:"btn number","data-key":"2",onClick:t,children:"2"}),Object(j.jsx)("div",{className:"btn number","data-key":"3",onClick:t,children:"3"}),Object(j.jsx)("div",{className:"btn operator","data-key":"-",onClick:t,children:"-"}),Object(j.jsx)("div",{className:"btn number","data-key":"0",onClick:t,children:"0"}),Object(j.jsx)("div",{className:"btn number","data-key":".",onClick:t,children:","}),Object(j.jsx)("div",{className:"btn operator",onClick:function(){e({type:"GET_RESULT"})},children:"="}),Object(j.jsx)("div",{className:"btn operator","data-key":"+",onClick:t,children:"+"})]})});_(32);var p=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(n.a,{children:Object(j.jsxs)(o.b,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(O.a,{}),Object(j.jsx)(i.c,{children:Object(j.jsx)(i.a,{exact:!0,path:"/",component:b})})]})})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.650ed66f.chunk.js.map