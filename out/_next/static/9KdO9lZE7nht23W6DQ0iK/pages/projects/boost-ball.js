(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{B7Uh:function(e,a,t){"use strict";t.r(a);var n=t("0iUn"),l=t("sLSF"),s=t("MI3g"),r=t("a7VT"),o=t("Tit0"),i=t("q1tI"),c=t.n(i),d=(t("YFqc"),t("sNE3"));var u=function(e){return c.a.createElement("div",{className:"list-item"},c.a.createElement("div",{className:"bullet-container"},c.a.createElement("div",{className:"bullet"})),e.children)},m=function(e){function a(){return Object(n.default)(this,a),Object(s.default)(this,Object(r.default)(a).apply(this,arguments))}return Object(o.default)(a,e),Object(l.default)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(d.a,{index:0}),c.a.createElement("a",{className:"end",target:"_blank",href:"https://play.google.com/store/apps/details?id=com.ScrireGames.BoostBall&hl=en"},"Download the game here"),c.a.createElement("p",null,"The video below shows the first prototype to test the basic mechanics of what would become Boost Ball. A controllable cue ball used to pot balls in the fastest time. As the game progressed a number of issues arose."),c.a.createElement("iframe",{className:"video-main",src:"https://www.youtube.com/embed/L580kzq8R2c",frameborder:"0",allowfullscreen:!0}),c.a.createElement("p",null,"The first issue was a technical limitation. Crisp dynamic shadows are computationally expensive, causing the framerate to drop. This prompted a shift to fully diffuse lighting, removing shadows entirely, and resulting in a flat aesthetic.  Other problems were related to gameplay. Collisions were unsatisfying so a force was added along the contact vector. There was no loss state, so a ball was added to chase the player and end the game on contact. A penalty was added for hitting balls out of order to increase risk. After adding a UI the demo was set to release, with further development planned if people enjoyed the game."),c.a.createElement("iframe",{className:"video-main",src:"https://www.youtube.com/embed/vpQIs2beImI",frameborder:"0",allowfullscreen:!0}),c.a.createElement("p",null,"The game was ugly, boring, difficult, and the optimal strategy was to ignore the potting order and get lucky with the break. It would be pointless to release before reworking."),c.a.createElement(u,null,c.a.createElement("p",null,"Accuracy using touch screens was difficult so the table was redesigned to be smaller, square, and with curved walls that funnelled balls towards pockets.")),c.a.createElement(u,null,c.a.createElement("p",null,"Boost, jump, and pound abilities increased interactivity and excitement.")),c.a.createElement(u,null,c.a.createElement("p",null,"The time was switched to a countdown to increase urgency, re-enforced by visual and auditory feedback.")),c.a.createElement(u,null,c.a.createElement("p",null,"Balls were spawned in over time and assigned point values, coupled to changes in size and density, offering risk/reward mechanics.")),c.a.createElement(u,null,c.a.createElement("p",null,"Power-ups were added to increase variety and introduced a way to extend the countdown timer.")),c.a.createElement(u,null,c.a.createElement("p",null,"Different levels and an endless mode were introduced.")),c.a.createElement("p",null,"These changes introduced their own challenges. Spawning balls over time raised the questions of where and how. Some balls can cause a player to lose, so their introduction to the game must be both non-interactable and telegraphed. Spawning in the air by scaling introduced them gradually, telegraphed their position and helped the playing surface remain uncluttered. Changes to ball physics and spawn position increased airtime but their position was hard to place in space due to the lack of shadows. The solution took inspiration from tetris, implementing a semi-transparent cylinder below balls to act as a shadow."),c.a.createElement("iframe",{className:"video-main",src:"https://www.youtube.com/embed/2GlBSN1zD48",frameborder:"0",allowfullscreen:!0}),c.a.createElement("p",null,"The resulting game has 16 levels, an arcade mode, sound and music, particle effects, and high scores. It took around 6 months if learning is taken into account. The game was released for free on android, and runs well on tested devices."),c.a.createElement("a",{className:"start",target:"_blank",href:"https://play.google.com/store/apps/details?id=com.ScrireGames.BoostBall&hl=en"},"Download the game here"))}}]),a}(c.a.Component);a.default=m},ZyFw:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/boost-ball",function(){var e=t("B7Uh");return{page:e.default||e}}])},sNE3:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),s=t("YFqc"),r=t.n(s);t("z/o8");a.a=function(e){var a=["nav-sub-default","nav-sub-default","nav-sub-default","nav-sub-default","nav-sub-default"];return a[e.index]="nav-sub-selected",l.a.createElement("nav",{className:"navigation-projects"},l.a.createElement(r.a,{href:"/projects/icyoa"},l.a.createElement("h3",{className:"".concat(a[1]," interactive")},"iCYOA")),l.a.createElement(r.a,{href:"/projects/short-stories"},l.a.createElement("h3",{className:"".concat(a[2]," interactive")},"Short Stories")),l.a.createElement(r.a,{href:"/projects/boost-ball"},l.a.createElement("h3",{className:"".concat(a[0]," interactive")},"Boost Ball")),l.a.createElement(r.a,{href:"/projects/misc-projects"},l.a.createElement("h3",{className:"".concat(a[4]," interactive")},"Other Projects")))}}},[["ZyFw",1,0]]]);