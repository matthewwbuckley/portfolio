(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{afzW:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/misc-projects",function(){var e=a("xr8C");return{page:e.default||e}}])},sNE3:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("YFqc"),s=a.n(r);a("z/o8");t.a=function(e){var t=["nav-sub-default","nav-sub-default","nav-sub-default","nav-sub-default","nav-sub-default"];return t[e.index]="nav-sub-selected",i.a.createElement("nav",{className:"navigation-projects"},i.a.createElement(s.a,{href:"/projects/icyoa"},i.a.createElement("h3",{className:"".concat(t[1]," interactive")},"iCYOA")),i.a.createElement(s.a,{href:"/projects/short-stories"},i.a.createElement("h3",{className:"".concat(t[2]," interactive")},"Short Stories")),i.a.createElement(s.a,{href:"/projects/boost-ball"},i.a.createElement("h3",{className:"".concat(t[0]," interactive")},"Boost Ball")),i.a.createElement(s.a,{href:"/projects/misc-projects"},i.a.createElement("h3",{className:"".concat(t[4]," interactive")},"Other Projects")))}},vYYK:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("hfKm"),i=a.n(n);function r(e,t,a){return t in e?i()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},xr8C:function(e,t,a){"use strict";a.r(t);var n=a("vYYK"),i=a("0iUn"),r=a("sLSF"),s=a("MI3g"),o=a("a7VT"),l=a("Tit0"),c=a("q1tI"),d=a.n(c),u=(a("YFqc"),a("sNE3")),h=function(e){function t(){return Object(i.default)(this,t),Object(s.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return d.a.createElement("div",Object(n.a)({className:"start"},"className","container"),d.a.createElement(u.a,{index:4}),d.a.createElement("h4",null,"Painter"),d.a.createElement("p",null,"This is part of a planned narrative puzzle game that was never finished, made using Unity. As part of the project a procedural painting effect was developed based on ",d.a.createElement("a",{target:"_blank",href:"https://tylerxhobbs.com/essays/2017/a-generative-approach-to-simulating-watercolor-paints"},"the work of Tyler Hobbs"),"."),d.a.createElement("p",null,"The technique would take an image and draw splotches of colour. The splotches are created using overlapping semi-transparent 2D polygons, slightly modified and translated by noise functions. These would be repeatedly generated and removed with the aim to create the effect of a painting that was continually being drawn. This prototype is too computationally expensive to be used for anything other than a demonstration, and development stopped before it could be made viable."),d.a.createElement("iframe",{className:"video-main",src:"https://www.youtube.com/embed/4jgPFjjSBM0",frameborder:"0",allowfullscreen:!0}),d.a.createElement("div",{className:"spacer"}),d.a.createElement("h4",null,"Previous Versions of iCYOA"),d.a.createElement("p",null,"The goal was a site where users could write and play interactive stories, driven by variables. Initially the site was built using Wordpress using the ACF plugin. Sadly, it was discovered that the fields created by ACF were submitted to the database individually and the site had to be abandoned."),d.a.createElement("p",null,"The site allowed users to write and play interactive stories, and was built using React. The stories were built using a dynamic form, allowing the creation of pages, choices, options and upgrades which depended on author defined and user modified variables. Once created the story could be published and played on the site. The site had ~100 sign ups who started ~150 stories, but very few were ever published.\xa0"),d.a.createElement("p",null,"The site would later be rebuilt in an effort to offer a rewarding and intuitive method of story creation."),d.a.createElement("div",{className:"spacer"}),d.a.createElement("h4",null,"Old and New Portfolio"),d.a.createElement("a",{className:"start",target:"_blank",href:"https://github.com/matthewwbuckley/personal-site"},"See Old Portfolio on Github"),d.a.createElement("a",{className:"start",target:"_blank",href:"https://github.com/matthewwbuckley/portfolio"},"See New Portfolio on Github"),d.a.createElement("p",null,"This site replaces the old portfolio site, moving from Gatsby to Next while remaining on Netlify. Trying the react-transition-group library was an aim of this site, which can be seen on the fade transitions between pages, and the fade in of the site as a whole. The animations were handles by GSAP, for both the fade transitions and animating the circle indicators. During development of this site the power of Sass became much more evident, as building the site around declared variables allowed quick iterations between potential styles."))}}]),t}(d.a.Component);t.default=h}},[["afzW",1,0]]]);