(this["webpackJsonpaggregion-test"]=this["webpackJsonpaggregion-test"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(8),u=n.n(o),i=n(3),s=n(1),l=n(6),f=n.n(l),b=n(9);!function(e){e[e.ADD=0]="ADD",e[e.SHIFT=1]="SHIFT",e[e.CLEAR=2]="CLEAR"}(a||(a={}));var m=function(e,t){switch(t.type){case a.ADD:return[].concat(Object(i.a)(e),[t.job]);case a.SHIFT:var n=Object(i.a)(e);return n.shift(),n;case a.CLEAR:return[];default:return e}},d=function(e,t){return t},p=function(e){var t=e.onJobFinished,n=Object(c.useReducer)(m,[]),r=Object(s.a)(n,2),o=r[0],u=r[1],i=Object(c.useReducer)(d,!1),l=Object(s.a)(i,2),p=l[0],j=l[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(f.a.mark((function e(){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o.length>0)||p){e.next=9;break}return j(!0),n=o[0],e.next=5,n.task();case 5:c=e.sent,t(c),u({type:a.SHIFT}),j(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o,p,t]),{isExecutingTask:p,addJob:function(e){u({type:a.ADD,job:e})},clearJobs:function(){u({type:a.CLEAR}),j(!1)}}},j=n(5),v=n.n(j),E=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useCallback)((function(e){var t=Object(i.a)(n);t.push(e),a(t)}),[n]),u=p({onJobFinished:o}),l=u.addJob,f=u.clearJobs,b=Object(c.useState)(),m=Object(s.a)(b,2),d=m[0],j=m[1],E=function(e){return function(){var t=new Date;l({task:function(){return new Promise((function(n){var a=setTimeout((function(){n({timeoutId:a,delay:e,actionTime:t,resultTime:new Date})}),1e3*e);j(a)}))}})}},O=Object(c.useMemo)((function(){return n.reduce((function(e,t){return e+="".concat(t.resultTime,": ").concat(t.delay," / ").concat(t.actionTime,"\n\n")}),"")}),[n]);return r.a.createElement("div",{className:v.a.container},r.a.createElement("div",{className:v.a.actions},[1,2,3].map((function(e){return r.a.createElement("button",{key:e,onClick:E(e)},"Button ",e)})),r.a.createElement("button",{onClick:function(){d&&(clearTimeout(d),j(void 0)),a([]),f()}},"Reset")),r.a.createElement("div",null,r.a.createElement("h3",null,"Logs"),r.a.createElement("textarea",{value:O,readOnly:!0,className:v.a.textarea})))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))},5:function(e,t,n){e.exports={container:"styles_container__CmSqg",actions:"styles_actions__XZD6e",textarea:"styles_textarea__gqmHf"}}},[[10,1,2]]]);
//# sourceMappingURL=main.fff4a22b.chunk.js.map