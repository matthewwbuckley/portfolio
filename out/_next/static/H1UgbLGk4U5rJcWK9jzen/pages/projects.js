(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{AwZY:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var e=a("gjpc");return{page:e.default||e}}])},RMLO:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n);t.a=function(e){var t=!("show"in e)||e.show;return i.a.createElement("div",{className:"icon"},t?e.icon:null,i.a.createElement("div",{className:"icon-text"},e.text))}},gjpc:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),i=a("sLSF"),c=a("MI3g"),s=a("a7VT"),o=a("Tit0"),r=a("q1tI"),l=a.n(r),u=a("YFqc"),m=a.n(u),d=a("z/o8"),p=a("RMLO"),f=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(c.default)(this,Object(s.default)(t).call(this,e))).refIndicator=l.a.createRef(),a}return Object(o.default)(t,e),Object(i.default)(t,[{key:"handleAnimation",value:function(e){console.log("animate",this.refIndicator);var t=e?1:0,a=e?"scale(1)":"scale(0)";d.e.to(this.refIndicator.current,.5,{opacity:t,transform:a,ease:d.a.easeOut})}},{key:"render",value:function(){var e=this,t=this.props,a=t.link,n=t.name,i=t.text,c=t.technologies;return l.a.createElement(m.a,{href:a},l.a.createElement("div",{className:"project-link-inner",onMouseEnter:function(){return e.handleAnimation(!0)},onMouseLeave:function(){return e.handleAnimation(!1)}},l.a.createElement("div",{className:"flex-row",style:{height:"32px"}},l.a.createElement("h3",null,n),l.a.createElement("div",{ref:this.refIndicator,className:"indicator-static"})),l.a.createElement("p",null,i),l.a.createElement("div",{className:"flex-row"},c.map(function(e){return l.a.createElement(p.a,{icon:e.icon,text:e.text,show:!0})}))))}}]),t}(l.a.Component),g=a("lD1V"),h=function(e){function t(){return Object(n.default)(this,t),Object(c.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f,{link:"/projects/icyoa",name:"iCYOA",text:"A site for creating interactive stories/games. Click here to find out more.",technologies:[g.a.react,g.a.mongo,g.a.express,g.a.node,g.a.strapi]}),l.a.createElement(f,{link:"/projects/short-stories",name:"Short Story Website",text:"Click here to read about an unpublished resticted CRUD app for writing short stories which could be rated and commented on.",technologies:[g.a.react,g.a.mongo,g.a.express,g.a.node]}),l.a.createElement(f,{link:"/projects/boost-ball",name:"Boost Ball",text:"Boost Ball is a psudo pool game for pulished for free on android and developed using the Unreal Engine.",technologies:[g.a.unreal]}),l.a.createElement(f,{link:"/projects/misc-projects",name:"Other Projects",text:"Other projects, including portfolio's, a Unity project, and early versions of iCYOA.",technologies:[g.a.unity,g.a.react,g.a.mongo,g.a.express,g.a.node,g.a.gatsby,g.a.next,g.a.sass]}))}}]),t}(l.a.Component);t.default=h},lD1V:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),c={html:{icon:i.a.createElement("i",{class:"devicon-html5-plain"}),text:"html5"},css:{icon:i.a.createElement("i",{class:"devicon-css3-plain"}),text:"css"},js:{icon:i.a.createElement("i",{class:"devicon-javascript-plain"}),text:"js/es6"},react:{icon:i.a.createElement("i",{class:"devicon-react-original"}),text:"react"},express:{icon:i.a.createElement("i",{class:"devicon-express-original"}),text:"express"},mongo:{icon:i.a.createElement("i",{class:"devicon-mongodb-plain"}),text:"mongo"},node:{icon:i.a.createElement("i",{class:"devicon-nodejs-plain"}),text:"nodejs"},sass:{icon:i.a.createElement("i",{class:"devicon-sass-original"}),text:"sass"},next:{icon:i.a.createElement("img",{src:"static/next-js.svg",alt:"next"}),text:"next"},gatsby:{icon:i.a.createElement("img",{src:"static/gatsby.svg",alt:"gatsby"}),text:"gatsby"},strapi:{icon:i.a.createElement("img",{src:"static/strapi.svg",alt:"strapi"}),text:"strapi"},unreal:{icon:i.a.createElement("img",{src:"static/unrealengine.svg",alt:"unreal"}),text:"unreal"},unity:{icon:i.a.createElement("img",{src:"static/unity.svg",alt:"unity"}),text:"unity"},git:{icon:i.a.createElement("i",{class:"devicon-git-plain"}),text:"git"}};t.a=c}},[["AwZY",1,0]]]);