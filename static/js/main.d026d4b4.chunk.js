(this["webpackJsonpgit-pages"]=this["webpackJsonpgit-pages"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},143:function(e,t){},144:function(e,t){},145:function(e,t){},146:function(e,t){},147:function(e,t){},174:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),i=n.n(a),o=n(12),s=n.n(o),l=(n(119),n(105)),r=n(46),j=(n(120),n(203)),b=n(213),d=n(204),u=n(107),h=n(205),O=n(210),x=n(214),m=n(202),p=n(212),f=n(206),g=n(207),v=n(208),C=n(209),y=n(196),w=n(42),N=n(78),S=n(101),k=n.n(S),F=n(102),T=n.n(F),B=n(103),D=n.n(B),A=n(104),E=n.n(A),L=n(79),I=n(66),P=n(47),R=n(211);var z=function(e){var t=e.children,n=e.value,a=e.index,i=Object(I.a)(e,["children","value","index"]);return Object(c.jsx)("div",Object(L.a)(Object(L.a)({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},i),{},{children:n===a&&Object(c.jsx)(R.a,{p:3,children:Object(c.jsx)(P.a,{children:t})})}))},M=n(197),q=n(198),H=n(199),J=n(200),W=n(201),U=n(215),G=n(100),K=n.n(G);var Q=function(e){var t=e.section,n=e.item,a=e.handleOpenFn,i=(Object(I.a)(e,["section","item","handleOpenFn"]),Object(y.a)((function(e){return{root:{minWidth:250,float:"left",margin:"10px",border:"2px solid black"},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:"#FF0000"}}}))());return Object(w.a)(),Object(c.jsxs)(M.a,{className:i.root,children:[Object(c.jsx)(q.a,{avatar:Object(c.jsx)(U.a,{children:"Tmp"}),title:n.Title,subheader:n.Dates}),Object(c.jsx)(H.a,{className:i.media}),Object(c.jsx)(J.a,{children:Object(c.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:n.Desc})}),Object(c.jsxs)(W.a,{children:[Object(c.jsx)(m.a,{children:Object(c.jsx)(K.a,{onClick:function(){return a(t,n)}})}),Object(c.jsx)(U.a,{children:"P"})]})]})};var V=function(){Object(a.useEffect)((function(){fetch("./info.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){S(e)}))}),[]);var e=Object(y.a)((function(e){return{tab:{display:"block",overflow:"scroll"},category:{display:"block",marginBottom:"10px","& h3":{textAlign:"center",margin:"0px auto 0px",height:"15%"}},scrollSection:{display:"flex",height:"85%","& ChevronLeftIcon":{width:"5%",margin:"10px 0px 10px 10px",fontSize:"3rem"},"& ChevronRightIcon":{width:"5%",margin:"10px 10px 10px 0px"}},cardsShown:{width:"90%",height:"85%",display:"flex",overflow:"hidden"},infoBox:{width:"100vw"},infoBoxTitle:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},FAB:{position:"absolute",bottom:10,right:10}}})),t=function(e,t){e.currentTarget.parentNode.getElementsByClassName(n.cardsShown)[0].scrollLeft+=t},n=e(),i=(Object(w.a)(),Object(a.useState)([])),o=Object(r.a)(i,2),s=o[0],S=o[1],F=Object(a.useState)({Title:"",Image:"",Desc:"",FullDesc:"",Dates:"","Source Code":"","Lessons Learned":"",Continuation:"",Links:"",Topics:[],Languages:[],Tools:[]}),B=Object(r.a)(F,2),A=B[0],L=B[1],I=Object(a.useState)(!1),P=Object(r.a)(I,2),R=P[0],M=P[1],q=function(e,t){console.log(e,t),L(t),M(!0)},H=function(){M(!1)},J=Object(a.useState)(!1),W=Object(r.a)(J,2),U=W[0],G=W[1],K=function(e,t){"clickaway"!==t&&G(!1)},V=Object(a.useState)(0),X=Object(r.a)(V,2),Y=X[0],Z=X[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j.a,{position:"static",children:Object(c.jsxs)(b.a,{value:Y,onChange:function(e,t){Z(t)},indicatorColor:"primary",textColor:"secondary",variant:"fullWidth","aria-label":"TODO",children:[Object(c.jsx)(d.a,{label:"Home",value:0}),Object(c.jsx)(d.a,{label:"Resume",value:1}),Object(c.jsx)(d.a,{label:"About Me",value:2})]})}),Object(c.jsxs)(z,{value:Y,index:0,className:n.tab,children:[Object.keys(s).map((function(e){return Object(c.jsxs)(u.a,{className:n.category,children:[Object(c.jsx)("h3",{children:e}),Object(c.jsxs)("div",{className:n.scrollSection,children:[Object(c.jsx)(h.a,{onClick:function(e){t(e,-100)},children:Object(c.jsx)(k.a,{})}),Object(c.jsx)("div",{className:n.cardsShown,children:s[e].map((function(t){return Object(c.jsx)(Q,{section:e,item:t,handleOpenFn:q})}))}),Object(c.jsx)(h.a,{onClick:function(e){t(e,100)},children:Object(c.jsx)(T.a,{})})]})]})})),Object(c.jsxs)(p.a,{open:R,onClose:H,scroll:"paper",className:n.infoBox,children:[Object(c.jsx)(f.a,{className:n.infoBoxTitle,children:A.Title}),Object(c.jsx)(g.a,{dividers:!0,children:Object(c.jsx)(v.a,{children:Object(l.a)(new Array(50)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n")})}),Object(c.jsx)(C.a,{children:Object(c.jsx)(h.a,{onClick:H,color:"primary",children:"Close"})})]})]}),Object(c.jsx)(z,{value:Y,index:1,className:n.tab,children:Object(c.jsxs)(u.a,{className:n.category,children:["RESUME",Object(c.jsx)(N.Document,{file:"./Resume.pdf",children:Object(c.jsx)(N.Page,{pageNumber:1})})]})}),Object(c.jsx)(z,{value:Y,index:2,className:n.tab,children:Object(c.jsx)(u.a,{className:n.category,children:"About me"})}),Object(c.jsx)(O.a,{color:"primary",onClick:function(){window.open("mailto:Risingerjmr@gmail.com?subject=Contact%20me"),G(!0)},className:n.FAB,children:Object(c.jsx)(D.a,{})}),Object(c.jsx)(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:U,autoHideDuration:6e3,onClose:K,message:"Opened Email Template",action:Object(c.jsx)(a.Fragment,{children:Object(c.jsx)(m.a,{size:"small","aria-label":"close",color:"inherit",onClick:K,children:Object(c.jsx)(E.a,{fontSize:"small"})})})})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root")),X()}},[[174,1,2]]]);
//# sourceMappingURL=main.d026d4b4.chunk.js.map