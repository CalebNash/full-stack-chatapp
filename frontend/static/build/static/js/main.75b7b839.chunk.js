(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=(n(12),n(3)),s=n(4),u=n(6),l=n(5),h=(n(13),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).state={messages:[]},o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/api/v1/chats/").then((function(t){return t.json()})).then((function(e){return t.setState({messages:e})})).catch((function(t){return console.log("Error:",t)}))}},{key:"render",value:function(){return a.a.createElement("div",null,"hello")}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.75b7b839.chunk.js.map