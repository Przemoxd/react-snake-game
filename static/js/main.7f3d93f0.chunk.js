(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(18)},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o,i=n(3),a=n.n(i),s=n(6),r=n.n(s),c=(n(15),n(0)),u=n(1),h=n(8),d=n(7),l=n(9),f=function(){function t(e,n){Object(c.a)(this,t),this.x=void 0,this.y=void 0,this.x=e,this.y=n}return Object(u.a)(t,null,[{key:"equal",value:function(t,e){return t&&e&&t.x===e.x&&e.y===t.y}}]),t}(),v=function(){function t(e,n){Object(c.a)(this,t),this._columns=void 0,this._rows=void 0,this._columns=e,this._rows=n}return Object(u.a)(t,[{key:"getCenterPoint",value:function(){return new f(Math.round(this._columns/2),Math.round(this._rows/2))}},{key:"columns",get:function(){return this._columns},set:function(t){this._columns=t}},{key:"rows",get:function(){return this._rows},set:function(t){this._rows=t}}]),t}(),w=n(2),k=n.n(w),g=30*Math.round(.75*window.innerWidth/30),y=30*Math.round(.75*window.innerHeight/30),b="white",p=function(){function t(){Object(c.a)(this,t),this.canvas=void 0,this.context=void 0,this.canvas=document.getElementById("board"),this.canvas.width=g,this.canvas.height=y,this.context=this.canvas.getContext("2d"),console.log("BOARD is initialized with "+g+" x "+y),this.fillBoard(b)}return Object(u.a)(t,[{key:"getCountRows",value:function(){return y/30}},{key:"getCountColumns",value:function(){return g/30}},{key:"fillBoard",value:function(t){this.context.fillStyle=t,this.context.fillRect(0,0,g,y)}},{key:"drawRect",value:function(t,e){this.context.fillStyle=e,this.context.fillRect(30*t.x,30*t.y,30,30)}},{key:"drawScene",value:function(t,e){this.fillBoard(b),this.drawSnake(t),this.drawFood(e)}},{key:"drawFood",value:function(t){this.drawRect(t.point,"green")}},{key:"drawSnake",value:function(t){var e=this;w.forEach(t.body,function(t){e.drawRect(t,"blue")})}}]),t}();!function(t){t.Up="Up",t.Down="Down",t.Left="Left",t.Right="Right"}(o||(o={}));var m=function(){function t(e,n){Object(c.a)(this,t),this.body=[],this.head=void 0,this.tail=void 0,this.direction=void 0,this.board=void 0,this.eatedFood=void 0,this.board=n,console.log("Snake start on Point: "+JSON.stringify(e)),this.initSnake(e)}return Object(u.a)(t,[{key:"initSnake",value:function(t){this.addPart(t)}},{key:"addPart",value:function(t){this.body.push(t)}},{key:"changeDirection",value:function(t){this.validateDirection(t)&&(this.direction=t)}},{key:"moveSnake",value:function(){if(this.direction){var t="move"+this.direction.toString(),e=w.cloneDeep(w.first(this.body)),n=this[t](e);this.validateBoard(n),this.body.unshift(n),this.body.pop(),this.updateParts()}}},{key:"updateParts",value:function(){this.head=w.first(this.body),this.tail=w.last(this.body)}},{key:"validateBoard",value:function(t){return t.x>=this.board.columns&&(t.x=0),t.y>=this.board.rows&&(t.y=0),t.y<0&&(t.y=this.board.rows-1),t.x<0&&(t.x=this.board.columns-1),t}},{key:"validateDirection",value:function(t){return!((this.direction===o.Down||this.direction===o.Up)&&(t===o.Up||t===o.Down)||(this.direction===o.Left||this.direction===o.Right)&&(t===o.Left||t===o.Right))}},{key:"eat",value:function(){}},{key:"moveRight",value:function(t){return t.x+=1,t}},{key:"moveLeft",value:function(t){return t.x-=1,t}},{key:"moveUp",value:function(t){return t.y-=1,t}},{key:"moveDown",value:function(t){return t.y+=1,t}}]),t}(),D=function(){function t(e,n){Object(c.a)(this,t),this.point=void 0,this.columns=void 0,this.rows=void 0,this.columns=e,this.rows=n,this.generateFood()}return Object(u.a)(t,[{key:"generateFood",value:function(){this.point=new f(this.getRandomInt(0,this.columns),this.getRandomInt(0,this.rows))}},{key:"getRandomInt",value:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}}]),t}(),R=function(){function t(){Object(c.a)(this,t),this.board=void 0,this.canvas=void 0,this.snake=void 0,this.SPEED_GAME=void 0,this.food=void 0,this.pause=void 0,this.SPEED_GAME=100,this.canvas=new p,this.board=new v(this.canvas.getCountColumns(),this.canvas.getCountRows()),console.log("Board initialized with "+this.board.columns+" Columns and "+this.board.rows+" Rows"),this.snake=new m(this.board.getCenterPoint(),this.board),this.food=new D(this.canvas.getCountColumns(),this.canvas.getCountRows()),this.pause=!1,this.gameLoop()}return Object(u.a)(t,[{key:"gameLoop",value:function(){var t=this;console.log(this);var e=this;document.addEventListener("keydown",function(t){e.onKeyDown(t)}),setInterval(function(){t.canvas.drawScene(t.snake,t.food),t.snake.direction&&!t.pause&&t.snake.moveSnake(),f.equal(t.snake.head,t.food.point)&&(t.snake.eatedFood=k.a.cloneDeep(t.food),t.food.generateFood()),t.snake.eatedFood&&f.equal(t.snake.eatedFood.point,t.snake.tail)&&(t.snake.addPart(t.snake.eatedFood.point),t.snake.eatedFood=void 0)},this.SPEED_GAME)}},{key:"onKeyDown",value:function(t){switch(t.code){case"ArrowRight":this.snake.changeDirection(o.Right);break;case"ArrowLeft":this.snake.changeDirection(o.Left);break;case"ArrowUp":this.snake.changeDirection(o.Up);break;case"ArrowDown":this.snake.changeDirection(o.Down);break;case"Space":this.pause=!this.pause}}}]),t}(),x=(n(17),function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("canvas",{id:"board",className:"canvas"})))}},{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){new R}}]),e}(i.Component)),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}r.a.render(a.a.createElement(x,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/react-snake-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-snake-game","/service-worker.js");O?(function(t,e){fetch(t).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):S(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(e,t)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.7f3d93f0.chunk.js.map