(this["webpackJsonpgit-pages"]=this["webpackJsonpgit-pages"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},143:function(e,t){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},174:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),i=n.n(a),o=n(12),s=n.n(o),l=(n(119),n(105)),r=n(46),j=(n(120),n(203)),b=n(213),d=n(204),u=n(107),h=n(205),O=n(210),x=n(214),m=n(202),p=n(212),f=n(206),g=n(207),v=n(208),C=n(209),y=n(196),S=n(42),w=n(78),F=n(101),N=n.n(F),k=n(102),T=n.n(k),B=n(103),L=n.n(B),D=n(104),E=n.n(D),A=n(79),R=n(66),I=n(47),P=n(211);var M=function(e){var t=e.children,n=e.value,a=e.index,i=Object(R.a)(e,["children","value","index"]);return Object(c.jsx)("div",Object(A.a)(Object(A.a)({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},i),{},{children:n===a&&Object(c.jsx)(P.a,{p:3,children:Object(c.jsx)(I.a,{children:t})})}))},z=n(197),H=n(198),q=n(199),J=n(200),W=n(201),U=n(215),G=n(100),K=n.n(G);var Q=function(e){var t=e.section,n=e.item,a=e.handleOpenFn,i=(Object(R.a)(e,["section","item","handleOpenFn"]),Object(y.a)((function(e){return{root:{minWidth:550,float:"left",margin:"10px"},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:"#FF0000"}}}))());return Object(S.a)(),Object(c.jsxs)(z.a,{className:i.root,children:[Object(c.jsx)(H.a,{avatar:Object(c.jsx)(U.a,{children:"Tmp"}),title:n.Title,subheader:n.Dates}),Object(c.jsx)(q.a,{className:i.media}),Object(c.jsx)(J.a,{children:Object(c.jsx)(I.a,{variant:"body2",color:"textSecondary",component:"p",children:n.Desc})}),Object(c.jsxs)(W.a,{children:[Object(c.jsx)(m.a,{children:Object(c.jsx)(K.a,{onClick:function(){return a(t,n)}})}),Object(c.jsx)(U.a,{children:"P"})]})]})};var V=function(){Object(a.useEffect)((function(){fetch("./info.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){o(e)}))}),[]);var e=Object(y.a)((function(e){return{tab:{display:"block"},category:{display:"block",marginBottom:"10px","& h3":{textAlign:"center",margin:"0px auto 0px",height:"15%"}},scrollSection:{display:"flex",height:"85%","& ChevronLeftIcon":{width:"5%",margin:"10px 0px 10px 10px"},"& ChevronRightIcon":{width:"5%",margin:"10px 10px 10px 0px"}},cardsShown:{width:"90%",height:"85%",display:"flex",overflow:"hidden"},infoBox:{width:"100vw"},infoBoxTitle:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},FAB:{position:"absolute",bottom:10,right:10}}}))(),t=(Object(S.a)(),Object(a.useState)([])),n=Object(r.a)(t,2),i=n[0],o=n[1],s=Object(a.useState)({Title:"",Image:"",Desc:"",FullDesc:"",Dates:"","Source Code":"","Lessons Learned":"",Continuation:"",Links:"",Topics:[],Languages:[],Tools:[]}),F=Object(r.a)(s,2),k=F[0],B=F[1],D=Object(a.useState)(!1),A=Object(r.a)(D,2),R=A[0],I=A[1],P=function(e,t){console.log(e,t),B(t),I(!0)},z=function(){I(!1)},H=Object(a.useState)(!1),q=Object(r.a)(H,2),J=q[0],W=q[1],U=function(e,t){"clickaway"!==t&&W(!1)},G=Object(a.useState)(0),K=Object(r.a)(G,2),V=K[0],X=K[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j.a,{position:"static",children:Object(c.jsxs)(b.a,{value:V,onChange:function(e,t){X(t)},indicatorColor:"primary",textColor:"secondary",variant:"fullWidth","aria-label":"TODO",children:[Object(c.jsx)(d.a,{label:"Home",value:0}),Object(c.jsx)(d.a,{label:"Resume",value:1}),Object(c.jsx)(d.a,{label:"About Me",value:2})]})}),Object(c.jsxs)(M,{value:V,index:0,className:e.tab,children:[Object.keys(i).map((function(t){return Object(c.jsxs)(u.a,{className:e.category,children:[Object(c.jsx)("h3",{children:t}),Object(c.jsxs)("div",{className:e.scrollSection,children:[Object(c.jsx)(h.a,{onClick:function(){!function(e,t,n){console.log("HELLO SCROLL");var c=document.getElementsByClassName("scrollSection");console.log(c[0])}()},children:Object(c.jsx)(N.a,{})}),Object(c.jsx)("div",{className:e.cardsShown,id:"temp",children:i[t].map((function(e){return Object(c.jsx)(Q,{section:t,item:e,handleOpenFn:P})}))}),Object(c.jsx)(h.a,{onClick:function(){console.log("right")},children:Object(c.jsx)(T.a,{})})]})]})})),Object(c.jsxs)(p.a,{open:R,onClose:z,scroll:"paper",className:e.infoBox,children:[Object(c.jsx)(f.a,{className:e.infoBoxTitle,children:k.Title}),Object(c.jsx)(g.a,{dividers:!0,children:Object(c.jsx)(v.a,{children:Object(l.a)(new Array(50)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n")})}),Object(c.jsx)(C.a,{children:Object(c.jsx)(h.a,{onClick:z,color:"primary",children:"Close"})})]})]}),Object(c.jsx)(M,{value:V,index:1,className:e.tab,children:Object(c.jsxs)(u.a,{className:e.category,children:["RESUME",Object(c.jsx)(w.Document,{file:"./Resume.pdf",children:Object(c.jsx)(w.Page,{pageNumber:1})})]})}),Object(c.jsx)(M,{value:V,index:2,className:e.tab,children:Object(c.jsx)(u.a,{className:e.category,children:"About me"})}),Object(c.jsx)(O.a,{color:"primary",onClick:function(){window.open("mailto:Risingerjmr@gmail.com?subject=Contact%20me"),W(!0)},className:e.FAB,children:Object(c.jsx)(L.a,{})}),Object(c.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:J,autoHideDuration:6e3,onClose:U,message:"Opened Email Template",action:Object(c.jsx)(a.Fragment,{children:Object(c.jsx)(m.a,{size:"small","aria-label":"close",color:"inherit",onClick:U,children:Object(c.jsx)(E.a,{fontSize:"small"})})})})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root")),X()}},[[174,1,2]]]);
//# sourceMappingURL=main.dcb8f374.chunk.js.map