(this["webpackJsonpgit-pages"]=this["webpackJsonpgit-pages"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},143:function(e,t){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},174:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),i=n.n(c),s=n(12),o=n.n(s),l=(n(119),n(105)),r=n(46),j=(n(120),n(203)),b=n(213),d=n(204),u=n(107),h=n(209),O=n(210),x=n(214),m=n(202),p=n(212),f=n(205),g=n(206),v=n(207),C=n(208),y=n(196),w=n(42),F=n(78),N=n(101),S=n.n(N),T=n(102),k=n.n(T),B=n(103),D=n.n(B),A=n(104),E=n.n(A),L=n(79),I=n(66),P=n(47),R=n(211);var M=function(e){var t=e.children,n=e.value,c=e.index,i=Object(I.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(L.a)(Object(L.a)({role:"tabpanel",hidden:n!==c,id:"full-width-tabpanel-".concat(c),"aria-labelledby":"full-width-tab-".concat(c)},i),{},{children:n===c&&Object(a.jsx)(R.a,{p:3,children:Object(a.jsx)(P.a,{children:t})})}))},z=n(197),q=n(198),H=n(199),J=n(200),W=n(201),U=n(215),G=n(100),K=n.n(G);var Q=function(e){var t=e.section,n=e.item,c=e.handleOpenFn,i=(Object(I.a)(e,["section","item","handleOpenFn"]),Object(y.a)((function(e){return{root:{minWidth:250,float:"left",margin:"10px"},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:"#FF0000"}}}))());return Object(w.a)(),Object(a.jsxs)(z.a,{className:i.root,children:[Object(a.jsx)(q.a,{avatar:Object(a.jsx)(U.a,{children:"Tmp"}),title:n.Title,subheader:n.Dates}),Object(a.jsx)(H.a,{className:i.media}),Object(a.jsx)(J.a,{children:Object(a.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:n.Desc})}),Object(a.jsxs)(W.a,{children:[Object(a.jsx)(m.a,{children:Object(a.jsx)(K.a,{onClick:function(){return c(t,n)}})}),Object(a.jsx)(U.a,{children:"Python"})]})]})};var V=function(){Object(c.useEffect)((function(){fetch("./info.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var e=Object(y.a)((function(e){return{tab:{display:"block"},category:{display:"block",marginBottom:"10px","& h3":{textAlign:"center",margin:"0px auto 0px",height:"15%"}},scrollSection:{display:"flex",height:"85%","& ChevronLeftIcon":{width:"5%",margin:"10px 0px 10px 10px"},"& ChevronRightIcon":{width:"5%",margin:"10px 10px 10px 0px"}},cardsShown:{width:"90%",height:"85%",display:"flex",overflow:"scroll"},infoBox:{width:"100vw"},infoBoxTitle:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},FAB:{position:"absolute",bottom:10,right:10}}}))(),t=(Object(w.a)(),Object(c.useState)([])),n=Object(r.a)(t,2),i=n[0],s=n[1],o=Object(c.useState)({Title:"",Image:"",Desc:"",FullDesc:"",Dates:"","Source Code":"","Lessons Learned":"",Continuation:"",Links:"",Topics:[],Languages:[],Tools:[]}),N=Object(r.a)(o,2),T=N[0],B=N[1],A=Object(c.useState)(!1),L=Object(r.a)(A,2),I=L[0],P=L[1],R=function(e,t){console.log(e,t),B(t),P(!0)},z=function(){P(!1)},q=Object(c.useState)(!1),H=Object(r.a)(q,2),J=H[0],W=H[1],U=function(e,t){"clickaway"!==t&&W(!1)},G=Object(c.useState)(0),K=Object(r.a)(G,2),V=K[0],X=K[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j.a,{position:"static",children:Object(a.jsxs)(b.a,{value:V,onChange:function(e,t){X(t)},indicatorColor:"primary",textColor:"secondary",variant:"fullWidth","aria-label":"TODO",children:[Object(a.jsx)(d.a,{label:"Home",value:0}),Object(a.jsx)(d.a,{label:"Resume",value:1}),Object(a.jsx)(d.a,{label:"About Me",value:2})]})}),Object(a.jsxs)(M,{value:V,index:0,className:e.tab,children:[Object.keys(i).map((function(t){return Object(a.jsxs)(u.a,{className:e.category,children:[Object(a.jsx)("h3",{children:t}),Object(a.jsxs)("div",{className:e.scrollSection,children:[Object(a.jsx)(S.a,{}),Object(a.jsx)("div",{className:e.cardsShown,children:i[t].map((function(e){return Object(a.jsx)(Q,{section:t,item:e,handleOpenFn:R})}))}),Object(a.jsx)(k.a,{})]})]})})),Object(a.jsxs)(p.a,{open:I,onClose:z,scroll:"paper",className:e.infoBox,children:[Object(a.jsx)(f.a,{className:e.infoBoxTitle,children:T.Title}),Object(a.jsx)(g.a,{dividers:!0,children:Object(a.jsx)(v.a,{children:Object(l.a)(new Array(50)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n")})}),Object(a.jsx)(C.a,{children:Object(a.jsx)(h.a,{onClick:z,color:"primary",children:"Close"})})]})]}),Object(a.jsx)(M,{value:V,index:1,className:e.tab,children:Object(a.jsxs)(u.a,{className:e.category,children:["RESUME",Object(a.jsx)(F.Document,{file:"./Resume.pdf",children:Object(a.jsx)(F.Page,{pageNumber:1})})]})}),Object(a.jsx)(M,{value:V,index:2,className:e.tab,children:Object(a.jsx)(u.a,{className:e.category,children:"About me"})}),Object(a.jsx)(O.a,{color:"primary",onClick:function(){window.open("mailto:Risingerjmr@gmail.com?subject=Contact%20me"),W(!0)},className:e.FAB,children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:J,autoHideDuration:6e3,onClose:U,message:"Opened Email Template",action:Object(a.jsx)(c.Fragment,{children:Object(a.jsx)(m.a,{size:"small","aria-label":"close",color:"inherit",onClick:U,children:Object(a.jsx)(E.a,{fontSize:"small"})})})})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),X()}},[[174,1,2]]]);
//# sourceMappingURL=main.70bea314.chunk.js.map