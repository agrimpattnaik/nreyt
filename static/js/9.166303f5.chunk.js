(this.webpackJsonpylight=this.webpackJsonpylight||[]).push([[9],{296:function(e,t,i){"use strict";i.r(t);var n=i(62),a=i(8),s=i(0),c=i.n(s),l=i(44),r=i(21),o=(i(118),i(168)),d=i(237),p=i(280),h=i(212),u=i(50),b=i(238),j=i(2),m=new(0,i(285).XmlEntities),v={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},x={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}};t.default=function(e){var t=e.videos,i=Object(l.c)(!1,!0),g=Object(a.a)(i,2),y=g[0],f=g[1],O=Object(s.useContext)(r.a),T=Object(a.a)(O,2);Object(n.a)(T[0]);var C=T[1],I=function(e){var t;t={id:e.id.videoId,title:m.decode(e.snippet.title,{level:"xml"}),channelTitle:m.decode(e.snippet.channelTitle,{level:"xml"}),maxThumbnail:"https://img.youtube.com/vi/".concat(e.id.videoId,"/maxresdefault.jpg"),sdThumbnail:"https://img.youtube.com/vi/".concat(e.id.videoId,"/sddefault.jpg")},C({type:"setCurrentVideoSnippet",snippet:t})};c.a.useEffect((function(){setTimeout((function(){}),100),f(!0)}),[]);var w=t.map((function(e){var t=e.snippet;return Object(j.jsxs)(l.b.div,{variants:v,children:[Object(j.jsxs)(o.a,{alignItems:"flex-start",button:!0,onClick:function(){return I(e)},children:[Object(j.jsx)(d.a,{children:Object(j.jsx)(p.a,{className:"searchThumb",style:{width:"60px",height:"60px",marginRight:"15px"},alt:t.title,src:t.thumbnails.high.url})}),Object(j.jsx)(h.a,{primary:m.decode(t.title,{level:"xml"}),secondary:Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u.a,{component:"span",variant:"body2",color:"textPrimary",children:t.channelTitle})})})]}),Object(j.jsx)(b.a,{})]},e.id.videoId)}));return Object(j.jsx)(l.b.div,{variants:x,initial:!1,animate:y?"open":"closed",children:w})}}}]);
//# sourceMappingURL=9.166303f5.chunk.js.map