(this["webpackJsonpgit-pages"]=this["webpackJsonpgit-pages"]||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},141:function(e,t){},142:function(e,t){},143:function(e,t){},144:function(e,t){},145:function(e,t){},172:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),i=n.n(c),s=n(12),o=n.n(s),r=(n(117),n(103)),l=n(46),j=(n(118),n(201)),b=n(211),u=n(202),d=n(105),O=n(207),h=n(208),m=n(212),p=n(200),x=n(210),f=n(203),g=n(204),v=n(205),C=n(206),F=n(194),y=n(42),T=n(79),N=n(101),k=n.n(N),S=n(102),w=n.n(S),B=n(80),D=n(65),A=n(47),E=n(209);var L=function(e){var t=e.children,n=e.value,c=e.index,i=Object(D.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(B.a)(Object(B.a)({role:"tabpanel",hidden:n!==c,id:"full-width-tabpanel-".concat(c),"aria-labelledby":"full-width-tab-".concat(c)},i),{},{children:n===c&&Object(a.jsx)(E.a,{p:3,children:Object(a.jsx)(A.a,{children:t})})}))},M=n(195),P=n(196),R=n(197),z=n(198),I=n(199),q=n(213),H=n(78),J=n.n(H);var W=function(e){var t=e.section,n=e.item,c=e.handleOpenFn,i=(Object(D.a)(e,["section","item","handleOpenFn"]),Object(F.a)((function(e){return{root:{maxWidth:150,float:"left",backgroundColor:"primary"},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:"#FF0000"}}}))());return Object(y.a)(),Object(a.jsx)("div",{children:Object(a.jsxs)(M.a,{className:i.root,children:[Object(a.jsx)(P.a,{avatar:Object(a.jsx)(q.a,{children:"Tmp"}),title:n.Title,subheader:n.Dates}),Object(a.jsx)(R.a,{className:i.media}),Object(a.jsx)(z.a,{children:Object(a.jsx)(A.a,{variant:"body2",color:"textSecondary",component:"p",children:n.Desc})}),Object(a.jsx)(I.a,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(J.a,{onClick:function(){return c(t,n)}})})})]})})};var U=function(){Object(c.useEffect)((function(){fetch("./info.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var e=Object(F.a)((function(e){return{tab:{},infoBox:{width:"100vw"},infoBoxTitle:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},paper:{display:"flex"},FAB:{position:"absolute",bottom:10,right:10}}}))(),t=(Object(y.a)(),Object(c.useState)([])),n=Object(l.a)(t,2),i=n[0],s=n[1],o=Object(c.useState)({Title:"",Image:"",Desc:"",FullDesc:"",Dates:"","Source Code":"","Lessons Learned":"",Continuation:"",Links:"",Topics:[],Languages:[],Tools:[]}),N=Object(l.a)(o,2),S=N[0],B=N[1],D=Object(c.useState)(!1),A=Object(l.a)(D,2),E=A[0],M=A[1],P=function(e,t){console.log(e,t),B(t),M(!0)},R=function(){M(!1)},z=Object(c.useState)(!1),I=Object(l.a)(z,2),q=I[0],H=I[1],J=function(e,t){"clickaway"!==t&&H(!1)},U=Object(c.useState)(0),G=Object(l.a)(U,2),K=G[0],Q=G[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j.a,{position:"static",children:Object(a.jsxs)(b.a,{value:K,onChange:function(e,t){Q(t)},indicatorColor:"primary",textColor:"secondary",variant:"fullWidth","aria-label":"TODO",children:[Object(a.jsx)(u.a,{label:"Home",value:0}),Object(a.jsx)(u.a,{label:"Resume",value:1}),Object(a.jsx)(u.a,{label:"About Me",value:2})]})}),Object(a.jsxs)(L,{value:K,index:0,className:e.tab,children:[Object.keys(i).map((function(t){return Object(a.jsxs)(d.a,{className:e.paper,children:[Object(a.jsx)("h3",{children:t}),i[t].map((function(e){return Object(a.jsx)(W,{section:t,item:e,handleOpenFn:P})}))]})})),Object(a.jsxs)(x.a,{open:E,onClose:R,scroll:"paper",className:e.infoBox,children:[Object(a.jsx)(f.a,{className:e.infoBoxTitle,children:S.Title}),Object(a.jsx)(g.a,{dividers:!0,children:Object(a.jsx)(v.a,{children:Object(r.a)(new Array(50)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n")})}),Object(a.jsx)(C.a,{children:Object(a.jsx)(O.a,{onClick:R,color:"primary",children:"Close"})})]})]}),Object(a.jsx)(L,{value:K,index:1,className:e.tab,children:Object(a.jsxs)(d.a,{className:e.paper,children:["RESUME",Object(a.jsx)(T.Document,{file:"./Resume.pdf",children:Object(a.jsx)(T.Page,{pageNumber:1})})]})}),Object(a.jsx)(L,{value:K,index:2,className:e.tab,children:Object(a.jsx)(d.a,{className:e.paper,children:"About me"})}),Object(a.jsx)(h.a,{color:"primary",onClick:function(){window.open("mailto:Risingerjmr@gmail.com?subject=Contact%20me"),H(!0)},className:e.FAB,children:Object(a.jsx)(k.a,{})}),Object(a.jsx)(m.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:q,autoHideDuration:6e3,onClose:J,message:"Opened Email Template",action:Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(p.a,{size:"small","aria-label":"close",color:"inherit",onClick:J,children:Object(a.jsx)(w.a,{fontSize:"small"})})})})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),G()}},[[172,1,2]]]);
//# sourceMappingURL=main.775f088e.chunk.js.map