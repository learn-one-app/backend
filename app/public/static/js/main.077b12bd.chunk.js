(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{328:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),c=n.n(i),s=(n(171),n(12)),o=n(19),u=n.n(o),d=n(46),l=n(334),j=n(330),f=n(335),h=n(13),b=n(59),p=n(39),g=n(331),x=n(332),O=n(333),m=n(166),v=n(160),w=n.n(v),y=n(161),k=n.n(y);var C=function(e){return w()(Object(p.a)(Object(p.a)({},e),{},{headers:{"x-csrf-token":k.a.get("csrfToken")}}))},S=n(11);var P,E=function(e){var t=e.reload,n=void 0===t?b.noop:t,a=e.field,i=a.setValue,c=a.getValue,s=a.init,o=a.validate;return Object(r.useEffect)((function(){if(c("isShowing")&&"edit"===c("type")){var e=c("record");i("name",e.name),i("age",e.age)}}),[c("type"),c("isShowing")]),Object(S.jsx)(m.a,{title:c("title"),isShowing:c("isShowing"),width:"medium",onClose:function(){return i("isShowing",!1)},onCancel:function(){return i("isShowing",!1)},onOk:function(){o(function(){var e=Object(d.a)(u.a.mark((function e(t,r){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i("isProcessing",!0),a=c("record"),e.prev=2,e.next=5,C({url:"/api/user",method:"edit"===c("type")?"put":"post",data:{name:c("name"),age:c("age"),id:null===a||void 0===a?void 0:a._id}});case 5:i("isShowing",!1),n(),i("isProcessing",!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),i("isProcessing",!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())},isProcessing:c("isProcessing"),children:Object(S.jsxs)(g.a,{field:a,children:[Object(S.jsx)(g.a.Item,{label:"\u59d3\u540d",required:!0,children:Object(S.jsx)(x.a,Object(p.a)({},s("name",{rules:{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"}})))}),Object(S.jsx)(g.a.Item,{label:"\u5e74\u9f84",required:!0,children:Object(S.jsx)(O.a,Object(p.a)({style:{width:"100%"}},s("age",{rules:{required:!0,message:"\u8bf7\u8f93\u5165\u5e74\u9f84"}})))})]})})},I=n(62);var F=h.b.div(P||(P=Object(s.a)(["\n  padding: 0 24px;\n"]))),T=function(){var e=l.a.useField(),t=e.setValue,n=e.getValue,a=function(){var e=Object(d.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({url:"/api/user"});case 2:n=e.sent,t("data",Object(b.get)(n,"data.data"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),Object(S.jsxs)(F,{children:[Object(S.jsx)("h1",{children:"\u4e00\u4e2a\u7b80\u5355\u7684CRUD\u6f14\u793a(react+axios+egg+mongodb)"}),Object(S.jsx)(j.a,{type:"primary",onClick:function(){t("isShowing",!0),t("title","\u65b0\u5efa\u7528\u6237"),t("type","add")},children:"\u65b0\u5efa\u7528\u6237"}),Object(S.jsxs)(f.a,{dataSource:n("data"),style:{marginTop:16},children:[Object(S.jsx)(f.a.Column,{title:"\u59d3\u540d",dataIndex:"name",width:"40%"}),Object(S.jsx)(f.a.Column,{title:"\u5e74\u9f84",dataIndex:"age",width:"40%"}),Object(S.jsx)(f.a.Column,{title:"\u64cd\u4f5c",cell:function(e,n,r){var i=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({url:"/api/user",method:"DELETE",data:{id:r._id}});case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)(I.b,{children:[Object(S.jsx)(I.a,{onClick:function(){t("isShowing",!0),t("title","\u7f16\u8f91\u7528\u6237"),t("type","edit"),t("record",r)},children:"\u7f16\u8f91"}),Object(S.jsx)(I.a,{onClick:i,children:"\u5220\u9664"})]})},width:"20%"})]}),Object(S.jsx)(E,{reload:a,field:e})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,336)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(T,{})}),document.getElementById("root")),q()}},[[328,1,2]]]);
//# sourceMappingURL=main.077b12bd.chunk.js.map