define(["jquery"],function(a){console.log("my.jquery.hover\u52A0\u8F7D\u4E86"),a.fn.hoverdir=function(){a(this).on("mouseenter mouseleave",function(b){var c=b.type,d=a.HoverDir._getDir(a(this),{x:b.pageX,y:b.pageY});a.HoverDir._moveTo(a(this),d,c)})},a.HoverDir={_getDir:function(a,b){var c=a.width(),d=a.height(),e=(b.x-a.offset().left-c/2)*(c>d?d/c:1),f=(b.y-a.offset().top-d/2)*(d>c?c/d:1),g=Math.round((Math.atan2(f,e)*(180/Math.PI)+180)/90+3)%4;return g},_moveTo:function(a,b,c){var d=a.find("div"),e={};"mouseenter"===c?(0===b?d.css("top","-100%").css("left","0px"):1===b?d.css("left","100%").css("top","0px"):2===b?d.css("top","100%").css("left","0px"):3===b?d.css("left","-100%").css("top","0px"):void 0,e={left:0,top:0}):0===b?e={left:0,top:"-100%"}:1===b?e={left:"100%",top:0}:2===b?e={left:0,top:"100%"}:3===b?e={left:"-100%",top:0}:void 0;d.animate(e,300)}}});