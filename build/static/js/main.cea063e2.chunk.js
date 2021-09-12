(this["webpackJsonpredux-saga-app"]=this["webpackJsonpredux-saga-app"]||[]).push([[0],{126:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),i=n.n(c),o=n(46),s=(n(126),n(58)),l=n(110),d=n(93),j=n.n(d),b=n(23),u="FETCH_TODO_REQUEST",p="FETCH_TODO_SUCCESS",O="FETCH_TODO_FAILURE",m={pending:!1,todos:[],error:null},h=Object(s.b)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(b.a)(Object(b.a)({},e),{},{pending:!0});case p:return Object(b.a)(Object(b.a)({},e),{},{pending:!1,todos:t.payload.todos,error:null});case O:return Object(b.a)(Object(b.a)({},e),{},{pending:!1,todos:[],error:t.payload.error});default:return Object(b.a)({},e)}}}),x=n(13),f=n.n(x),g=n(36),v=n(94),y=n.n(v),w=function(e){return{type:O,payload:e}},C=f.a.mark(k),N=f.a.mark(T),S=function(){return y.a.get("https://jsonplaceholder.typicode.com/todos")};function k(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(g.b)(S);case 3:return e=t.sent,t.next=6,Object(g.d)((n={todos:e.data},{type:p,payload:n}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(g.d)(w({error:t.t0.message}));case 12:case"end":return t.stop()}var n}),C,null,[[0,8]])}function T(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.e)(u,k)]);case 2:case"end":return e.stop()}}),N)}var D=T,E=f.a.mark(R);function R(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.c)(D)]);case 2:case"end":return e.stop()}}),E)}var _=Object(l.a)(),I=Object(s.c)(h,Object(s.a)(_,j.a));_.run(R);var H=I,L=n(19),F=n(108),B=n(202),P=n(197),W=n(57),z=n(17),A=n(70),M=n(14),U=n(5),K=n(176),G=n(201),J=n(196),Q=n(178),V=n(180),X=n(181),Y=n(62),q=n(200),Z=n(101),$=n.n(Z),ee=n(82),te=n.n(ee),ne="Welcome, React Sample App",ae="@".concat((new Date).getFullYear()),re=250,ce=n(2),ie=Object(K.a)((function(e){return Object(G.a)({appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:re,width:"calc(100% - ".concat(re,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},toolbar:{flex:1,display:"flex",flexDirection:"row",alignItems:"center"},title:{flex:1,display:"flex",flexDirection:"row",alignItems:"center"},menuButton:{marginRight:36},hide:{display:"none"}})})),oe=function(e){var t=e.open,n=e.handleMenuOpen,a=e.toggleTheme,r=e.useDefaultTheme,c=ie();return Object(ce.jsx)(Q.a,{position:"fixed",elevation:0,className:Object(U.a)(c.appBar,Object(M.a)({},c.appBarShift,t)),children:Object(ce.jsxs)(V.a,{className:c.toolbar,children:[Object(ce.jsxs)("div",{className:c.title,children:[Object(ce.jsx)(X.a,{color:"inherit","aria-label":"open menu",onClick:n,edge:"start",className:Object(U.a)(c.menuButton,Object(M.a)({},c.hide,t)),size:"small",children:Object(ce.jsx)($.a,{})}),Object(ce.jsx)(Y.a,{variant:"h6",noWrap:!0,children:ne})]}),Object(ce.jsx)(X.a,{onClick:a,children:r?Object(ce.jsx)(q.a,{title:"Switch to dark mode",placement:"bottom",children:Object(ce.jsx)(te.a,{style:{color:"#fff"}})}):Object(ce.jsx)(q.a,{title:"Switch to light mode",placement:"bottom",children:Object(ce.jsx)(te.a,{})})})]})})},se=n(198),le=n(107),de=n.n(le),je=n(194),be=n(183),ue=n(184),pe=n(185),Oe=n(186),me=n(75),he=n.n(me),xe=Object(K.a)((function(e){return Object(G.a)({selected:{transition:"box-shadow",transitionDuration:"1s",boxShadow:"0 0 3px ".concat(e.palette.primary.main,", 0 0 9px ").concat(e.palette.primary.main,", 0 0 11px ").concat(e.palette.primary.main,", 0 0 30px ").concat(e.palette.primary.main)},nested:{marginLeft:e.spacing(2)},listItemDisabled:{cursor:"not-allowed"}})})),fe=function(e){var t=e.route,n=xe(),a=Object(z.f)();return Object(ce.jsx)(W.b,{to:"".concat(t.path),style:{textDecoration:"none",color:"inherit"},onClick:function(e){t.enabled||e.preventDefault()},className:Object(U.a)(Object(M.a)({},n.listItemDisabled,!t.enabled)),children:Object(ce.jsx)(q.a,{title:t.tooltip||"",placement:"right",children:Object(ce.jsxs)(be.a,{button:!0,disabled:!t.enabled,children:[Object(ce.jsx)(ue.a,{children:Object(ce.jsx)(X.a,{className:Object(U.a)(Object(M.a)({},n.selected,a.pathname===t.path)),size:"small",children:Object(ce.jsx)(pe.a,{component:t.icon||he.a})})}),Object(ce.jsx)(Oe.a,{primary:t.title})]})})},t.key)},ge=n(106),ve=n.n(ge),ye=n(105),we=n.n(ye),Ce=n(22),Ne=n(153),Se=n.p+"static/media/nature-wallpaper.a72bb526.jpg",ke=n.p+"static/media/humankindness.ea7ce0e7.mp4",Te=n(187),De=n(199),Ee=n(104),Re=n.n(Ee),_e=n(109),Ie=Object(K.a)((function(){return Object(G.a)({root:{flex:1,display:"inline-flex",flexDirection:"row",justifyContent:"space-between"},messageEditor:{width:"94%",backgroundColor:"transparent",border:"none",padding:"0",outline:"none"}})})),He=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(""),r=Object(L.a)(n,2),c=r[0],i=r[1],o=Ie(),s=e.dynamicTextHandler,l=Object(_e.a)(),d=l.register,j=l.handleSubmit,u=l.reset,p=Object(a.useState)(!1),O=Object(L.a)(p,2),m=O[0],h=O[1],x=function(e){e.target.value.length&&(i(e.target.value),h(!0))};return Object(ce.jsxs)("form",{onSubmit:j((function(e){s(e.firstName),h(e.firstName),i(""),u()})),onChange:x,className:o.root,children:[Object(ce.jsx)(De.a,Object(b.a)(Object(b.a)({},d("firstName")),{},{type:"textarea",className:"message-editor",placeholder:"Type a message...",value:c,inputRef:t,onChange:function(){return x},multiline:!0,rowsMax:"2"})),Object(ce.jsx)(X.a,{type:"submit",className:"send-btn",disabled:!m,children:Object(ce.jsx)(Re.a,{})})]})},Le=(n(150),Object(K.a)((function(){return Object(G.a)({root:{display:"grid",gridTemplateRows:"1fr 16fr 1fr",height:"100vh",position:"relative"},appBar:{top:"auto",bottom:0},messageEditor:{width:"99%"},bubbleContainer:{width:"100%"},media:{height:140,minWidth:250,objectFit:"cover"},formEditor:{height:"auto",alignItems:"center",border:"none!important",flexGrow:30,display:"flow-root",marginTop:"20px",position:"absolute",bottom:"-45px",left:"0px",width:"100%"},msgEeditorContainer:{display:"flex",maxHeight:"200px",height:"40px",alignItems:"center",borderRadius:"25px!important",paddingLeft:"10px!important",backgroundColor:"#f8f8f8!important"}})}))),Fe=function(){var e=Le(),t=Object(a.useState)(["Hi","Hello guest","How are you ?","I am good you?","I am well thanks"]),n=Object(L.a)(t,2),r=n[0],c=n[1];return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(A.a,{children:Object(ce.jsxs)("title",{children:[" | ",ne]})}),Object(ce.jsx)("div",{className:e.root,children:Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)("div",{className:"conv-view-items",children:Object(ce.jsx)(ce.Fragment,{children:Object(ce.jsxs)("div",{className:e.bubbleContainer,children:[Object(ce.jsx)("div",{className:"msg-bubble",children:Object(ce.jsx)("div",{className:"msg-item",children:Object(ce.jsx)(Te.a,{className:e.media,image:Se,title:"naturel Wallpaper"})})}),Object(ce.jsx)("div",{className:"msg-bubble",children:Object(ce.jsx)("div",{className:"msg-item",children:Object(ce.jsx)(Te.a,{style:{height:"100%",width:"200",backgroundColor:"#000"},component:"video",title:"Media Title",src:ke,controls:!0})})}),r.map((function(e,t){return"undefined"!==typeof e&&null!==e&&null!==e.length&&e.length>0?Object(ce.jsx)("div",{className:"msg-bubble",children:Object(ce.jsx)("div",{className:"msg-item",children:e})},"msg"+t++):null}))]})})}),Object(ce.jsx)(Ne.a,{variant:"outlined",className:"conv-compose-container",children:Object(ce.jsx)(Ne.a,{elevation:0,className:e.msgEeditorContainer,children:Object(ce.jsx)(He,{dynamicTextHandler:function(e){c((function(t){return[].concat(Object(Ce.a)(t),[e])}))}})})})]})})]})},Be=n(79),Pe=Object(Be.a)((function(e){return e.todo.todos}),(function(e){return e})),We=Object(Be.a)((function(e){return e.todo.pending}),(function(e){return e})),ze=Object(Be.a)((function(e){return e.todo.error}),(function(e){return e})),Ae=n(7),Me=n(188),Ue=n(189),Ke=n(190),Ge=n(191),Je=n(192),Qe=n(193),Ve=Object(Ae.a)((function(){return Object(G.a)({head:{backgroundColor:"#fff",color:"#000",fontWeight:600},body:{fontSize:14,textTransform:"capitalize"}})}))(Me.a),Xe=Object(Ae.a)((function(e){return Object(G.a)({root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}})}))(Ue.a),Ye=Object(K.a)({table:{minWidth:700},container:{maxHeight:440}}),qe=function(){var e=Ye(),t=Object(o.b)(),n=Object(o.c)(We),r=Object(o.c)(Pe),c=Object(o.c)(ze);return Object(a.useEffect)((function(){t({type:u})}),[t]),Object(ce.jsx)(ce.Fragment,{children:Object(ce.jsx)("div",{style:{padding:"15px"},children:n?Object(ce.jsx)("div",{children:"Loading..."}):c?Object(ce.jsx)("div",{children:"Error"}):Object(ce.jsx)(Ke.a,{component:Ne.a,className:e.container,children:Object(ce.jsxs)(Ge.a,{className:e.table,"aria-label":"customized table",stickyHeader:!0,children:[Object(ce.jsx)(Je.a,{children:Object(ce.jsxs)(Ue.a,{children:[Object(ce.jsx)(Ve,{children:"Id"}),Object(ce.jsx)(Ve,{align:"left",children:"User Id"}),Object(ce.jsx)(Ve,{align:"left",children:"Title"})]})}),Object(ce.jsx)(Qe.a,{children:r.map((function(e,t){return Object(ce.jsxs)(Xe,{children:[Object(ce.jsx)(Ve,{component:"th",scope:"row",children:e.id}),Object(ce.jsx)(Ve,{align:"left",children:e.userId}),Object(ce.jsx)(Ve,{align:"left",children:e.title})]},++t)}))})]})})})})},Ze=[{key:"router-dashboard",title:"Chat board",tooltip:"Chat board",path:"/",enabled:!0,component:Fe,icon:we.a},{key:"router-code",title:"Profile List",tooltip:"Profile List",path:"/profile-list",enabled:!0,component:qe,icon:ve.a,appendDivider:!0}],$e=Object(K.a)((function(e){return Object(G.a)({divider:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},nested:{marginLeft:e.spacing(2)},selected:{transition:"box-shadow",transitionDuration:"1s",boxShadow:"0 0 3px ".concat(e.palette.primary.main,", 0 0 9px ").concat(e.palette.primary.main,", 0 0 11px ").concat(e.palette.primary.main,", 0 0 30px ").concat(e.palette.primary.main)}})})),et=function(){var e=$e(),t=Object(a.useState)(!1),n=Object(L.a)(t,2),r=n[0],c=n[1],i=Object(z.f)(),o=function(){c(!r)};return Object(ce.jsx)(je.a,{children:Ze.map((function(t,n){return t.subRoutes?Object(ce.jsxs)(be.a,{button:!0,onClick:o,children:[Object(ce.jsx)(ue.a,{children:Object(ce.jsx)(X.a,{className:Object(U.a)(Object(M.a)({},e.selected,!r&&t.subRoutes.some((function(e){return e.path===i.pathname})))),size:"small",children:Object(ce.jsx)(pe.a,{component:t.icon||he.a})})}),Object(ce.jsx)(Oe.a,{primary:t.title})]},"menu"+n):Object(ce.jsx)(fe,{route:t},"submenu"+n)}))})},tt=Object(K.a)((function(e){return Object(G.a)({drawer:{width:re,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:re,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(M.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(b.a)(Object(b.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),{},{background:"".concat(e.palette.primary.main)})})})),nt=function(e){var t,n,a=e.open,r=e.handleMenuClose,c=tt();return Object(ce.jsxs)(se.a,{variant:"permanent",className:Object(U.a)(c.drawer,(t={},Object(M.a)(t,c.drawerOpen,a),Object(M.a)(t,c.drawerClose,!a),t)),classes:{paper:Object(U.a)((n={},Object(M.a)(n,c.drawerOpen,a),Object(M.a)(n,c.drawerClose,!a),n))},children:[Object(ce.jsx)("div",{className:c.toolbar,children:Object(ce.jsx)(X.a,{onClick:r,children:Object(ce.jsx)(de.a,{htmlColor:"#fff"})})}),Object(ce.jsx)(et,{})]})},at=n(195),rt=Object(K.a)((function(e){return Object(G.a)({root:{flex:1,display:"flex",justifyContent:"center",background:e.palette.background.paper,minHeight:30},footer:{textTransform:"uppercase"}})})),ct=function(){var e=rt();return Object(ce.jsx)("div",{className:e.root,children:Object(ce.jsx)(at.a,{href:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL),target:"_blank",rel:"noreferrer",className:e.footer,children:ae})})},it=Object(K.a)((function(e){return Object(G.a)({root:{flex:1,display:"flex",flexDirection:"column"},content:Object(M.a)({flexGrow:1,padding:e.spacing(1),minHeight:"calc(100vh - ".concat(30,"px)"),background:e.palette.background.paper,marginLeft:e.spacing(7)+1},e.breakpoints.up("sm"),{marginLeft:e.spacing(9)+1}),toolbar:Object(b.a)({},e.mixins.toolbar),contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:re}})})),ot=function(e){var t=e.toggleTheme,n=e.useDefaultTheme,r=e.children,c=it(),i=Object(a.useReducer)((function(e){return!e}),!0),o=Object(L.a)(i,2),s=o[0],l=o[1];return Object(ce.jsxs)("div",{className:c.root,children:[Object(ce.jsx)(J.a,{}),Object(ce.jsx)(oe,{open:s,handleMenuOpen:l,toggleTheme:t,useDefaultTheme:n}),Object(ce.jsx)(nt,{open:s,handleMenuClose:l}),Object(ce.jsxs)("main",{className:Object(U.a)(c.content,Object(M.a)({},c.contentShift,s)),children:[Object(ce.jsx)("div",{className:c.toolbar}),r]}),Object(ce.jsx)("footer",{children:Object(ce.jsx)(ct,{})})]})},st=n(78),lt=n(77),dt=Object(F.a)({palette:{type:"light",primary:{main:st.a[800]},secondary:{main:lt.a[300]}}}),jt=Object(F.a)({palette:{type:"dark",primary:{main:lt.a[300]},secondary:{main:st.a[800]}}}),bt=r.a.createContext(null),ut=function(){return Object(ce.jsx)("div",{children:"No Component Defined."})};var pt=function(){var e=Object(a.useReducer)((function(e){return!e}),!0),t=Object(L.a)(e,2),n=t[0],r=t[1],c=Object(F.a)(n?dt:jt);return c=Object(B.a)(c),Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(A.a,{children:Object(ce.jsx)("title",{children:ne})}),Object(ce.jsx)(bt.Provider,{value:null,children:Object(ce.jsx)(P.a,{theme:c,children:Object(ce.jsx)(W.a,{children:Object(ce.jsx)(z.c,{children:Object(ce.jsx)(ot,{toggleTheme:r,useDefaultTheme:n,children:Ze.map((function(e,t){return e.subRoutes?e.subRoutes.map((function(e,t){return Object(ce.jsx)(z.a,{path:"".concat(e.path),component:e.component||ut,exact:!0},"r1"+t)})):Object(ce.jsx)(z.a,{path:"".concat(e.path),component:e.component||ut,exact:!0},"r2"+t)}))})})})})})]})};i.a.render(Object(ce.jsx)(r.a.StrictMode,{children:Object(ce.jsx)(o.a,{store:H,children:Object(ce.jsx)(pt,{})})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.cea063e2.chunk.js.map