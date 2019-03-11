(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(3),r=t.n(c),i=(t(16),t(1)),l=t(4),o=t(5),m=t(8),d=t(6),u=t(9),g=function(e){return n.a.createElement("div",{className:"text-center col-3",id:"game"},n.a.createElement("img",{className:e.class,id:e.id,onClick:function(){return e.handleItemClick(e.id)},src:e.image,alt:e.name}))},h=function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",{className:"row"},n.a.createElement("li",{className:"brand col-4"},n.a.createElement("a",{href:"/"},"Starcraft 2 Units: Clicky Game")),n.a.createElement("li",{className:e.class},e.stateMsg),n.a.createElement("li",{className:"col-4"},"Score: ",e.score," | Top Score: ",e.topScore)))},p=function(e){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"title"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h1",{className:""},"Starcraft 2 Units: Clicky Game"),n.a.createElement("h2",{className:""},"Click on an image to earn points, but don't click on any more than once or back to zero you go!"),n.a.createElement("a",{href:"#game",class:"btn btn-primary js-scroll-trigger"},"Play")))},f=function(e){return n.a.createElement("div",{className:"container"},e.children)},k=function(e){return n.a.createElement("div",{className:"row bg1"},e.children)},C=function(e){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"bottom"},"Clicky Game by Akop! ",n.a.createElement("img",{alt:"react",src:"assets/images/react.svg"})))},b=t(7),E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={data:b,score:0,topScore:0,stateMsg:"Click an image to begin!",thumbClass:"img-thumbnail zoom m-1 p-2 click-item",isCorrectClass:"col-4"},t.handleCorrectGuess=function(e){var a=t.state,s=a.topScore,n=a.score+1,c=Math.max(n,s);t.setState({data:t.shuffleData(e),score:n,topScore:c,stateMsg:"You got it... Keep going!",thumbClass:"img-thumbnail zoom m-1 p-2 click-item",isCorrectClass:"col-4 correct"}),setTimeout(function(){return t.setState({isCorrectClass:"col-4"})},500),12===n&&(alert("You won!"),t.setState({isCorrectClass:"col-4 correct"}))},t.handleIncorrectGuess=function(e){t.setState({data:t.resetData(e),score:0,stateMsg:"You already picked that; start over!",thumbClass:"shake img-thumbnail zoom m-1 p-2 click-item",isCorrectClass:"col-4 incorrect"})},t.resetData=function(e){var a=e.map(function(e){return Object(i.a)({},e,{clicked:!1})});return t.shuffleData(a)},t.shuffleData=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),s=e[a];e[a]=e[t],e[t]=s,a--}return e},t.handleItemClick=function(e){var a=!1,s=t.state.data.map(function(t){var s=Object(i.a)({},t);return s.id===e&&(s.clicked||(s.clicked=!0,a=!0)),s});a?t.handleCorrectGuess(s):t.handleIncorrectGuess(s)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(h,{score:this.state.score,topScore:this.state.topScore,stateMsg:this.state.stateMsg,class:this.state.isCorrectClass}),n.a.createElement(p,null),n.a.createElement(f,null,n.a.createElement(k,null,this.state.data.map(function(a){return n.a.createElement(g,{key:a.id,id:a.id,shake:!e.state.score&&e.state.topScore,handleItemClick:e.handleItemClick,image:a.image,name:a.name,class:e.state.thumbClass})}))),n.a.createElement(C,null))}}]),a}(s.Component);var S=function(){return n.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports=[{id:1,name:"Banshee",image:"./assets/images/Banshee_SC2_Head1.jpg",clicked:!1},{id:2,name:"Drone",image:"./assets/images/Drone_SC2_Head1.jpg",clicked:!1},{id:3,name:"HighTempla",image:"./assets/images/HighTemplar_SC2_Head1.jpg",clicked:!1},{id:4,name:"Hydralisk",image:"./assets/images/Hydralisk_SC2_Head1.jpg",clicked:!1},{id:5,name:"Marine",image:"./assets/images/Marine_SC2_Head2.jpg",clicked:!1},{id:6,name:"Medic",image:"./assets/images/Medic_SC2_Head1.jpg",clicked:!1},{id:7,name:"Phoenix",image:"./assets/images/Phoenix_SC2_Head1.jpg",clicked:!1},{id:8,name:"Probe",image:"./assets/images/Probe_SC2_Head1.jpg",clicked:!1},{id:9,name:"Queen",image:"./assets/images/Queen_SC2_Head2.jpg",clicked:!1},{id:10,name:"SCV",image:"./assets/images/SCV_SC2_Head1.jpg",clicked:!1},{id:11,name:"Zealot",image:"./assets/images/Zealot_SC2_Head1.jpg",clicked:!1},{id:12,name:"Zergling",image:"./assets/images/Zergling_SC2_Head1.jpg",clicked:!1}]}},[[10,1,2]]]);
//# sourceMappingURL=main.cb59d164.chunk.js.map