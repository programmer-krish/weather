(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{190:function(e,t,n){e.exports=n(337)},195:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},337:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(42),l=n.n(r),o=(n(195),n(103)),u=n.n(o),i=n(161),m=n(33),s=(n(197),function(){return c.a.createElement("div",null,"GetCity")}),p=n(346),E=n(350),d=(n(198),function(e){var t=e.onSelectButtonClick,n=Object(a.useState)(null),r=Object(m.a)(n,2),l=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{id:"temp"},"Hello, select your city!"),c.a.createElement(p.a,null,c.a.createElement(p.a.Field,null,c.a.createElement("input",{id:"form-control",placeholder:"Enter city",onChange:function(e){return o(e.target.value)}})),c.a.createElement(E.a,{onClick:function(){return t(l)}},"Check weather")))}),h=n(345),f=n(176),y=n.n(f),b="".concat("http://api.openweathermap.org/","/data/2.5/forecast/daily?cnt=1&appId=").concat("0ef3791cdd604bb0d202c7c6071c871a","&units=metric&q=");function w(e){return y()("".concat(b).concat(e))}function g(e){var t=null,n=null;switch(e.status){case 404:case 400:console.log("case 4xx: ".concat(e.status),e),n=e.data.message;break;case 200:console.log("case 200"),t=e.data}return[t,n]}var v=n(349),j=n(348),O=n(180),k=function(e){var t=e.dt,n=e.min,a=e.max,r=e.main,l=e.icon,o=e.day,u=e.city,i=e.country,m=new Date(t);return c.a.createElement(v.a,null,c.a.createElement(O.a,{src:"http://openweathermap.org/img/wn/".concat(l,"@2x.png")}),c.a.createElement(v.a.Content,null,c.a.createElement(v.a.Header,null," City : ",u),c.a.createElement("p",null,"Country: ",i),c.a.createElement("p",null,r),c.a.createElement("p",null,m.getFullYear(),"-",m.getMonth()+1,"-",m.getDate()),c.a.createElement("p",null,"Day: ",o),c.a.createElement("p",null,"Min: ",n),c.a.createElement("p",null,"Max: ",a)))},x=function(e){var t=e.data;return c.a.createElement(v.a,null,c.a.createElement(v.a.Content,null,t&&t.list&&t.list.map((function(e,n){var a=e.dt,r=e.temp,l=e.weather;return c.a.createElement(j.a,{key:n},c.a.createElement(k,{city:t.city.name,country:t.city.country,min:r.min,max:r.max,day:r.day,dt:1e3*a,main:l[0].main,icon:l[0].icon}))}))))},C=n(177),S=n(35),B=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(null),o=Object(m.a)(l,2),p=o[0],E=o[1],f=Object(a.useState)(!1),y=Object(m.a)(f,2),b=y[0],v=y[1],j=Object(a.useState)(!1),O=Object(m.a)(j,2),k=O[0],B=O[1];Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var t,a,c,r,l,o,i,s,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,B(!0),n){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,w(n);case 6:t=e.sent,a=g(t),c=Object(m.a)(a,2),r=c[0],l=c[1],E(r),v(l),B(!1),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),o=g(e.t0.response),i=Object(m.a)(o,2),s=i[0],p=i[1],v(p),E(s),B(!1);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return c.a.createElement(C.a,null,c.a.createElement(h.a,{className:"App"},c.a.createElement(d,{onSelectButtonClick:function(e){return r(e)}}),n?k?c.a.createElement("h2",null," Loading...Please wait! "):b?c.a.createElement("h2",null," Error: ",b," "):c.a.createElement(x,{data:p}):null,c.a.createElement(S.a,{path:"./city",component:s})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[190,1,2]]]);
//# sourceMappingURL=main.cebf818f.chunk.js.map