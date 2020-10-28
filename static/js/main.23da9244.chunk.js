(this["webpackJsonpjoplin-charts"]=this["webpackJsonpjoplin-charts"]||[]).push([[0],{223:function(e,t,n){"use strict";var a=n(32),r=n.n(a),o=n(50),i=n(59),c=n(383),u=n(384),l=n(385),s=n(248),d=n(386),p=n(1),h=n(242),f=n.n(h),m=n(245),v=n(56),b=n(100),k=n(387),g=n(39);t.a=function(){var e=Object(m.a)({defaultValues:{port:41184}}),t=e.register,n=e.handleSubmit,a=e.errors,h=Object(b.b)(),j=Object(k.a)("settingForm"),O=Object(i.a)(j,2)[1],w=Object(g.f)();function x(){return(x=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleSubmit: ",t),e.prev=1,v.a.token=t.token,v.a.port=t.port,e.next=6,v.c.list(["id"]);case 6:O(v.a),h.enqueueSnackbar("\u9a8c\u8bc1\u6210\u529f\uff0c\u5373\u5c06\u8fdb\u5165\u56fe\u8868\u9875",{variant:"success",autoHideDuration:3e3}),w.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),h.enqueueSnackbar("\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u6388\u6743 token \u4ee4\u724c\u4e0e\u7aef\u53e3\u53f7\u662f\u5426\u6b63\u786e",{variant:"error",autoHideDuration:3e3});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return p.createElement(c.a,{container:!0,justify:"center",alignItems:"center",className:f.a.container},p.createElement(u.a,{maxWidth:"xs"},p.createElement(l.a,{component:"h1",variant:"h5"},"\u8bbe\u7f6e\u9875"),p.createElement("form",{onSubmit:n((function(e){return x.apply(this,arguments)}))},p.createElement(s.a,{fullWidth:!0,name:"token",label:"\u6388\u6743 Token \u4ee4\u724c",autoFocus:!0,error:!!a.token,inputRef:t({required:"token \u662f\u5fc5\u586b\u9879"}),helperText:a.token?a.token.message:" "}),p.createElement(s.a,{fullWidth:!0,name:"port",label:"\u7aef\u53e3",error:!!a.port,inputRef:t({required:"\u7aef\u53e3\u662f\u5fc5\u586b\u9879",validate:function(e){return console.log(e),!0}}),helperText:a.port?a.port.message:" "}),p.createElement(d.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"\u5b8c\u6210"))))}},224:function(e,t){},241:function(e,t,n){"use strict";var a=n(223);n.d(t,"default",(function(){return a.a}));n(224)},242:function(e,t,n){e.exports={container:"JoplinSetting_container__a3I9p"}},267:function(e,t,n){e.exports=n(382)},382:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(37),i=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(94),u=n(246),l=n(59),s=n(39),d=n(243),p=n(244),h=n(32),f=n.n(h),m=n(50),v=n(193),b=n(162),k=n(163),g=n(56),j=new(function(){function e(){Object(b.a)(this,e)}return Object(k.a)(e,[{key:"countList",value:function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.d.list();case 2:return t=e.sent,e.next=5,Promise.all(t.map(function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t.id,e.t1=t.title,e.next=4,g.d.notesByTagId(t.id);case 4:return e.t2=e.sent.length,e.abrupt("return",{id:e.t0,tag:e.t1,count:e.t2});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),O=n(440),w=n(100),x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useRef)(null);Object(a.useLayoutEffect)((function(){var e=c.b("chartdiv",v.a),t=e.series.push(new v.b);return t.data=n,t.dataFields.id="id",t.dataFields.word="tag",t.dataFields.value="count",t.heatRules.push({target:t.labels.template,property:"fill",min:c.a("#0000CC"),max:c.a("#CC00CC"),dataField:"value"}),t.labels.template.url="https://stackoverflow.com/questions/tagged/{word}",t.labels.template.urlTarget="_blank",t.labels.template.tooltipText="{word}: {value}",t.labels.template.states.create("hover").properties.fill=c.a("#FF0000"),o.current=e,function(){e.dispose()}}),[n]);var i=Object(w.b)();return Object(O.a)(Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=r,e.next=4,j.countList();case 4:e.t1=e.sent,(0,e.t0)(e.t1),i.enqueueSnackbar("Successfully loaded the joplin tag list"),e.next=13;break;case 9:e.prev=9,e.t2=e.catch(0),console.error(e.t2),i.enqueueSnackbar("Failed to load joplin tag list");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))),a.createElement("div",{id:"chartdiv",style:{width:"100%",height:"100vh"}})},y=n(187),E=(n(306),y.a.mock(20).random().graphin());console.log("data: ",E);var S=function(){return a.createElement("div",{style:{overflow:"hidden",height:"100vh"}},a.createElement(y.b,{data:E,layout:{name:"force"},options:{height:window.document.documentElement.clientHeight}}))},F=n(387),W=n(192),q=n(239),C=n.n(q),T=function(){function e(){Object(b.a)(this,e)}return Object(k.a)(e,null,[{key:"convert",value:function(e){var t=new C.a,n=new Set(e.map((function(e){return e.id})));function a(e){return t.parseInline(e.body,"")[0].children.filter((function(e){var t;return"link_open"===e.type&&(null===(t=e.attrGet("href"))||void 0===t?void 0:t.startsWith(":/"))})).map((function(e){var t;return null===(t=e.attrGet("href"))||void 0===t?void 0:t.substr(2)})).filter((function(e){return n.has(e)}))}return e.map((function(e){return{id:e.id,title:e.title,links:a(e)}}))}}]),e}(),H=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=c.b("chartdiv",W.b).series.push(new W.a);e.dataFields.linkWith="links",e.dataFields.name="title",e.dataFields.id="id",e.dataFields.value="id",e.dataFields.children="children",e.nodes.template.label.text="{name}",e.fontSize=8,e.linkWithStrength=0;var t=e.nodes.template;t.tooltipText="{name}",t.fillOpacity=1,t.label.hideOversized=!0,t.label.truncate=!0;var a=e.links.template;a.strokeWidth=1;var r=a.states.create("hover");r.properties.strokeOpacity=1,r.properties.strokeWidth=2,t.events.on("over",(function(e){e.target.dataItem.childLinks.each((function(e){e.isHover=!0}))})),t.events.on("out",(function(e){e.target.dataItem.childLinks.each((function(e){e.isHover=!1}))})),e.data=n}),[n]);var o=Object(F.a)("settingForm"),i=Object(l.a)(o,1)[0];return Object(O.a)(Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.a.token=i.token,g.a.port=i.port,e.next=4,g.c.list(["id","title","body"]);case 4:t=e.sent,r(T.convert(t));case 6:case"end":return e.stop()}}),e)})))),a.createElement("div",{id:"chartdiv",style:{width:"100%",height:"100vh"}})},I=function(){return a.createElement("div",null,"Home")},_=function(){var e=Object(w.b)();return Object(O.a)(Object(m.a)(f.a.mark((function t(){var n,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.b.list();case 2:return n=t.sent,a=n[0],t.next=6,g.c.create({title:"test title",body:"test body",parent_id:a.id});case 6:r=t.sent,e.enqueueSnackbar("Create note successfully: [".concat(r.title,"], The list of notes is: [").concat(a.title,"]"),{variant:"success",autoHideDuration:3e3});case 8:case"end":return t.stop()}}),t)})))),a.createElement("div",null,"CreateNoteDemo")},L=[{path:"/setting",component:n(241).default},{path:"/tag",component:x},{path:"/hello",component:S},{path:"/relation",component:H},{path:"/demo/create-note",component:_},{path:"/",component:I}],D=n(438),R=function(){var e=Object(F.a)("settingForm"),t=Object(l.a)(e,1)[0],n=Object(s.f)();return Object(O.a)((function(){(null===t||void 0===t?void 0:t.token)&&(null===t||void 0===t?void 0:t.port)?(g.a.token=t.token,g.a.port=t.port):n.push("/setting")})),a.createElement(a.StrictMode,null,a.createElement(D.a,{locale:window.navigator.language},a.createElement(w.a,{maxSnack:3},a.createElement(d.a,null,Object(p.a)(L)))))};n(381);c.c(u.a),i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[267,1,3]]]);
//# sourceMappingURL=main.23da9244.chunk.js.map