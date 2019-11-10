(this["webpackJsonpblack-board"]=this["webpackJsonpblack-board"]||[]).push([[0],{12:function(e,t,a){e.exports=a(27)},17:function(e,t,a){},18:function(e,t,a){},24:function(e,t){},25:function(e,t){},26:function(e,t){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(10),r=a.n(o),i=(a(17),a(8)),c=a(1),l=a(2),u=a(4),h=a(3),p=a(6),m=a(5),v=(a(18),a(7)),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).options={},a.options.canvas=e.canvas?e.canvas:null,a._setBrushType(e.brushType),a._setColor(e.color),a._setSize(e.size),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getBrush",value:function(){var e=this._getBrushProp();this.options.canvas.freeDrawingBrush=new v.fabric[e.brushType](this.options.canvas),this.options.canvas.freeDrawingBrush.color=e.color,this.options.canvas.freeDrawingBrush.width=parseInt(this.options.size,10)||1,this.options.canvas.freeDrawingBrush.shadow=new v.fabric.Shadow({blur:parseInt(e.blur,10)||0,offsetX:0,offsetY:0,affectStroke:!0,color:e.color})}},{key:"_setColor",value:function(e){this.options.color=e||"#000000"}},{key:"_setSize",value:function(e){this.options.size=e?parseInt(e):5}},{key:"_setBrushType",value:function(e){this.options.brushType=e||"pen"}},{key:"setColorSizeBrush",value:function(e,t,a){this._setColor(e),this._setSize(t),this._setBrushType(a),this.setColorSize(e,t)}},{key:"_getBrushProp",value:function(){var e={};switch(this.options.brushType){case"pen":e={brushType:"PencilBrush",blur:5,color:this.options.color};break;case"pencil":e={brushType:"PencilBrush",blur:0,color:this.options.color};break;case"brush":e={brushType:"SprayBrush",blur:10,color:this.options.color};break;case"highlighter":e={brushType:"PencilBrush",blur:2,color:this.options.color+"aa"};break;default:e={brushType:"PencilBrush",blur:1,color:this.options.color}}return e}}]),t}(function(){function e(t){Object(c.a)(this,e),this.cursor=null,this.options={},this.options.canvas=t.canvas?t.canvas:null,this._setColor(t.color),this._setSize(t.size),this._setMouseHandler()}return Object(l.a)(e,[{key:"_setColor",value:function(e){this.options.color=e||"#000000"}},{key:"_setSize",value:function(e){this.options.size=e?parseInt(e):5}},{key:"setColorSize",value:function(e,t){this._setColor(e),this._setSize(t)}},{key:"_setMouseHandler",value:function(){var e=this;this.options.canvas.on("mouse:move",(function(t){e._createCursor(t.pointer),e._showCursor(t.pointer)})),this.options.canvas.on("mouse:out",(function(t){e._removeCursor(t.pointer)}))}},{key:"_createCursor",value:function(e){e&&null===this.cursor&&(this.cursor=new v.fabric.Circle({left:e.x-this.options.size/2,top:e.y-this.options.size/2,radius:this.options.size/2,stroke:this.options.color,strokeWidth:0,fill:this.options.color,customName:"customMouseCursor",hasControls:!1,hasBorders:!1,selectable:!1}),this.options.canvas.add(this.cursor).setActiveObject())}},{key:"_removeCursor",value:function(){var e=this;this.options.canvas.getObjects().forEach((function(t){"customMouseCursor"===t.customName&&(e.options.canvas.remove(t),e.options.canvas.renderAll(),e.cursor=null)}))}},{key:"_showCursor",value:function(e){this.cursor.left=e.x-this.options.size/2,this.cursor.top=e.y-this.options.size/2,this.cursor.setCoords(),this.options.canvas.renderAll()}}]),e}()),d=function(){function e(t){Object(c.a)(this,e),this.cursor=null,this.options={},this.options.canvas=t.canvas?t.canvas:null,this.redoArray=[]}return Object(l.a)(e,[{key:"action",value:function(e,t){switch(e){case"undo":this._undo();break;case"redo":this._redo();break;case"new":this._claerAll();break;case"save":this._save();break;case"open":this._open(t)}}},{key:"_undo",value:function(){var e=this.options.canvas.getObjects();if(e&&e.length){var t=e[e.length-1];this._setRedoArray(t),this.options.canvas.remove(t)}}},{key:"_redo",value:function(){this.redoArray&&this.redoArray.length&&(this.options.canvas.add(this.redoArray.pop()),this.options.canvas.renderAll())}},{key:"_setRedoArray",value:function(e){this.redoArray.push(e)}},{key:"_claerAll",value:function(){this.options.canvas&&(this.redoArray.length=0,this.options.canvas.clear())}},{key:"_getFormatedDate",value:function(){var e=new Date;return"".concat(e.getDate(),"-").concat(e.getMonth()+1,"-").concat(e.getFullYear(),"-").concat(e.getHours(),"-").concat(e.getMinutes(),"-").concat(e.getSeconds())}},{key:"_save",value:function(){if(this.options.canvas&&this.options.canvas.getObjects().length){var e=this.options.canvas.toDatalessJSON(),t=document.createElement("a");t.download="Notebook-".concat(this._getFormatedDate(),".json"),t.href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),t.click()}}},{key:"_open",value:function(e){var t=this;if(this.options.canvas&&e){this._claerAll();try{var a=new FileReader;a.onload=function(e){var a=JSON.parse(e.target.result);a.objects&&t.options.canvas.loadFromJSON(a,(function(e){t.options.canvas.renderAll()}))},a.readAsText(e)}catch(n){console.log(n)}}}},{key:"setHeight",value:function(e){this.options.canvas&&e&&(this.options.canvas.setDimensions({width:"".concat(1540,"px"),height:"".concat(e,"px")},{cssOnly:!0,backstoreOnly:!0}),console.log("test"))}}]),e}(),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).fabricBrush=null,a.fabricOperationsObj=null,a.drawingCanvasRef=s.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.setCanvas(new v.fabric.Canvas("fabricCanvas",{isDrawingMode:!0,backgroundColor:"transparent",freeDrawingCursor:"none"}),(function(t){t.setDimensions({width:"".concat(document.documentElement.offsetWidth,"px"),height:"".concat(document.documentElement.offsetHeight,"px")},{cssOnly:!0}),e.fabricBrush=new f({canvas:t,color:e.props.color,size:e.props.size,brushType:e.props.brushType}),e.fabricBrush.getBrush(),e.fabricOperationsObj=new d({canvas:t})})),this.props.setCurrentState({drawingCanvasRef:this.drawingCanvasRef.current})}},{key:"componentDidUpdate",value:function(){var e=this.props.color,t=this.props.size,a=this.props.brushType;this.fabricBrush&&(this.fabricBrush.setColorSizeBrush(e,t,a),this.fabricBrush.getBrush()),this.fabricOperationsObj&&this.fabricOperationsObj.action(this.props.action,this.props.importJson)}},{key:"render",value:function(){var e={};return this.props.BGImage&&(e.background="url('".concat(this.props.BGImage,"') no-repeat center center"),e.backgroundSize="contain"),s.a.createElement("div",{ref:this.drawingCanvasRef,className:"drawing-canvas-main ".concat(this.props.canvasBackground),style:e},s.a.createElement("canvas",{id:"fabricCanvas",width:"600",height:"600"}))}}]),t}(s.a.Component),g=a(11),C=a.n(g),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={brushClass:"fa-pen"},a.menuClick=a.menuClick.bind(Object(p.a)(a)),a.setColorAndSize=a.setColorAndSize.bind(Object(p.a)(a)),a.setBrushType=a.setBrushType.bind(Object(p.a)(a)),a.setColor=a.setColor.bind(Object(p.a)(a)),a.setSize=a.setSize.bind(Object(p.a)(a)),a.setCanvasBackground=a.setCanvasBackground.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"menuClick",value:function(e,t){this.props.setCurrentState({action:t})}},{key:"setColorAndSize",value:function(e,t,a){this.props.setCurrentState({size:t,color:a})}},{key:"setSize",value:function(e){this.props.setCurrentState({size:e.target.value})}},{key:"setColor",value:function(e){this.props.setCurrentState({color:e.target.value})}},{key:"setBrushType",value:function(e,t){var a="fa-pen";switch(t){case"pencil":a="fa-pencil-alt";break;case"brush":a="fa-paint-brush";break;case"highlighter":a="fa-highlighter";break;default:a="fa-pen"}this.setState({brushClass:a}),this.props.setCurrentState({brushType:t})}},{key:"setCanvasBackground",value:function(e,t){this.props.setCurrentState({canvasBackground:t})}},{key:"download",value:function(){C()(this.props.drawingCanvasRef,{allowTaint:!0,foreignObjectRendering:!0,useCORS:!0,backgroundColor:null}).then((function(e){var t=document.createElement("a");t.download="Notebook.png",t.href=e.toDataURL("image/png"),t.click()}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main-menu-container"},s.a.createElement("div",{className:"main-menu"},s.a.createElement("div",{className:"toolList"},s.a.createElement("i",{className:"fa fa-bars"}),s.a.createElement("ul",null,s.a.createElement("li",{onClick:function(t){return e.setCanvasBackground(t,"white")}},s.a.createElement("i",{className:"paper-white-icon ".concat("white"===this.props.canvasBackground?"paper-active":"")}),s.a.createElement("div",null,"White paper")),s.a.createElement("li",{onClick:function(t){return e.setCanvasBackground(t,"ruled")}},s.a.createElement("i",{className:"paper-ruled-icon ".concat("ruled"===this.props.canvasBackground?"paper-active":"")}),s.a.createElement("div",null,"Ruled paper")),s.a.createElement("li",{onClick:function(t){return e.setCanvasBackground(t,"landscape")}},s.a.createElement("i",{className:"paper-landscape-icon ".concat("landscape"===this.props.canvasBackground?"paper-active":"")}),s.a.createElement("div",null,"Landscape paper")),s.a.createElement("li",{onClick:function(t){return e.setCanvasBackground(t,"grid")}},s.a.createElement("i",{className:"paper-gird-icon ".concat("gird"===this.props.canvasBackground?"paper-active":"")}),s.a.createElement("div",null,"Grid paper")),s.a.createElement("li",{onClick:function(t){return e.setCanvasBackground(t,"image")}},s.a.createElement("i",{className:"fa fa-image ".concat("image"===this.props.canvasBackground?"paper-active":"")}),s.a.createElement("div",null,"Custom Image")))),s.a.createElement("div",{onClick:function(t){return e.menuClick(t,"new-confirm")}},s.a.createElement("i",{className:"fa fa-file"})),s.a.createElement("div",{onClick:function(t){return e.menuClick(t,"save")}},s.a.createElement("i",{className:"fa fa-save"})),s.a.createElement("div",{onClick:function(t){return e.menuClick(t,"open")}},s.a.createElement("i",{className:"fa fa-file-import"})),s.a.createElement("div",{onClick:function(t){return e.menuClick(t,"undo")}},s.a.createElement("i",{className:"fa fa-undo"})),s.a.createElement("div",{onClick:function(t){return e.menuClick(t,"redo")}},s.a.createElement("i",{className:"fa fa-redo"})),s.a.createElement("div",{className:"pageName"},s.a.createElement("span",null,"Notebook")),s.a.createElement("div",null,s.a.createElement("i",{onClick:function(t){return e.setColorAndSize(t,"5","#000000")},className:"fa fa-circle fa-circle-small black ".concat("#000000"===this.props.color&&"5"===this.props.size?"active":"")})),s.a.createElement("div",null,s.a.createElement("i",{onClick:function(t){return e.setColorAndSize(t,"5","#F00")},className:"fa fa-circle fa-circle-small red ".concat("#F00"===this.props.color&&"5"===this.props.size?"active":"")})),s.a.createElement("div",null,s.a.createElement("i",{onClick:function(t){return e.setColorAndSize(t,"5","#0F0")},className:"fa fa-circle fa-circle-small green ".concat("#0F0"===this.props.color&&"5"===this.props.size?"active":"")})),s.a.createElement("div",null,s.a.createElement("i",{onClick:function(t){return e.setColorAndSize(t,"5","#00F")},className:"fa fa-circle fa-circle-small blue ".concat("#00F"===this.props.color&&"5"===this.props.size?"active":"")})),s.a.createElement("div",null,s.a.createElement("i",{onClick:function(t){return e.setColorAndSize(t,"30","#009999")},className:"fa fa-circle fa-circle-big cyan ".concat("#009999"===this.props.color&&"30"===this.props.size?"active":"")})),s.a.createElement("div",null,s.a.createElement("i",{onClick:function(t){return e.setColorAndSize(t,"30","#ff6600")},className:"fa fa-circle fa-circle-big orang ".concat("#ff6600"===this.props.color&&"30"===this.props.size?"active":"")})),s.a.createElement("div",null,s.a.createElement("i",{onClick:function(t){return e.setColorAndSize(t,"30","#FFFF00")},className:"fa fa-circle fa-circle-big yellow ".concat("#FFFF00"===this.props.color&&"30"===this.props.size?"active":"")})),s.a.createElement("div",{className:"toolList"},s.a.createElement("span",{className:"size-span"},this.props.size),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("input",{type:"range",value:this.props.size,className:"size-picker",min:"1",max:"50",onChange:function(t){return e.setSize(t)}})))),s.a.createElement("div",null,s.a.createElement("input",{className:"color-picker",style:{color:this.props.color},type:"color",value:this.props.color,onChange:function(t){return e.setColor(t)}})),s.a.createElement("div",{className:"toolList"},s.a.createElement("i",{className:"fa ".concat(this.state.brushClass)}),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("i",{className:"fa fa-pen",onClick:function(t){return e.setBrushType(t,"pen")}}),s.a.createElement("div",null,"Pen")),s.a.createElement("li",{onClick:function(t){return e.setBrushType(t,"pencil")}},s.a.createElement("i",{className:"fa fa-pencil-alt"}),s.a.createElement("div",null,"Pencil")),s.a.createElement("li",{onClick:function(t){return e.setBrushType(t,"brush")}},s.a.createElement("i",{className:"fa fa-paint-brush"}),s.a.createElement("div",null,"Brush")),s.a.createElement("li",{onClick:function(t){return e.setBrushType(t,"highlighter")}},s.a.createElement("i",{className:"fa fa-highlighter"}),s.a.createElement("div",null,"Highlighter"))))))}}]),t}(s.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"upload-file"},s.a.createElement("input",{id:"canvasBackgroundImage",onChange:function(t){return e.props.setCurrentState({BGImage:t})},type:"file",accept:"image/*",className:"hide"}),s.a.createElement("label",{htmlFor:"canvasBackgroundImage"},"Select Image"))}}]),t}(s.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"upload-file"},s.a.createElement("input",{id:"importJsonInput",onChange:function(t){return e.props.setCurrentState({importJson:t})},type:"file",accept:"application/JSON",className:"hide"}),s.a.createElement("label",{htmlFor:"importJsonInput"},"Select JSON file"))}}]),t}(s.a.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).close=a.close.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"close",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),e.target.classList.contains("model-box")&&this.props.closeCallBack(null)}},{key:"render",value:function(){var e=this;return this.props.show?s.a.createElement("div",{className:"model-box",onClick:function(t){return e.close(t)}},s.a.createElement("div",{className:"model-box-body"},this.props.children)):""}}]),t}(s.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:""},s.a.createElement("div",null,this.props.messgae?this.props.messgae:"Message here"),s.a.createElement("div",null,s.a.createElement("button",{onClick:this.props.button1CallBack?this.props.button1CallBack:function(){}},this.props.button1?this.props.button1:"OK"),this.props.button2&&s.a.createElement("button",{onClick:this.props.button2Callback?this.props.button2Callback:function(){}},this.props.button2)))}}]),t}(s.a.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={canvas:null,color:"#000000",size:5,brushType:"pen",canvasBackground:"ruled",BGImage:"",showImageUploadBox:!1,drawingCanvasRef:null,action:null,saveConfirmFlag:!1,importJsonFlag:!1,importJson:null},a.setCurrentState=a.setCurrentState.bind(Object(p.a)(a)),a.setCanvas=a.setCanvas.bind(Object(p.a)(a)),a.oldCanvasBackground={image:"",type:"ruled"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setCanvas",value:function(e,t){var a=this;this.setState({canvas:e},(function(){t(a.state.canvas)}))}},{key:"resetAction",value:function(){this.setState({action:null})}},{key:"setCurrentState",value:function(e){var t=!1;if(e){if(e.action)switch(t=!0,this.setState({saveConfirmFlag:!1,action:null}),e.action){case"new-confirm":this.setState({saveConfirmFlag:!0});break;case"new":this.setState({action:"new",saveConfirmFlag:!1});break;case"open":this.setState({importJsonFlag:!0});break;case"cancel-save":this.setState({action:null,saveConfirmFlag:!1});break;default:this.setState(e)}else e.importJson?e.importJson&&e.importJson.target&&e.importJson.target.files?this.setState({importJson:e.importJson.target.files[0],importJsonFlag:!1,action:"open"}):this.setState({importJsonFlag:!1}):e.canvasBackground?(this.oldCanvasBackground.type=this.state.canvasBackground,this.setState(e),"image"===e.canvasBackground?this.setState({showImageUploadBox:!0}):this.setState({BGImage:null})):e.BGImage?(this.oldCanvasBackground.image=this.state.BGImage,e.BGImage&&e.BGImage.target&&e.BGImage.target.files?this.setState({BGImage:URL.createObjectURL(e.BGImage.target.files[0]),showImageUploadBox:!1}):this.setState({BGImage:this.oldCanvasBackground.image,canvasBackground:this.oldCanvasBackground.type,showImageUploadBox:!1})):this.setState(e);t||(this.resetAction(),t=!1)}}},{key:"checkCanvasUpdated",value:function(){return this.state.canvas&&this.state.canvas.getObjects().length>1}},{key:"render",value:function(){var e,t=this;return s.a.createElement("div",{className:"main-container"},s.a.createElement(k,{setCurrentState:this.setCurrentState,canvasBackground:this.state.canvasBackground,drawingCanvasRef:this.state.drawingCanvasRef,color:this.state.color,size:this.state.size}),s.a.createElement(b,(e={setCanvas:this.setCanvas,setCurrentState:this.setCurrentState,canvas:this.state.canvas,color:this.state.color,size:this.state.size,brushType:this.state.brushType,canvasBackground:this.state.canvasBackground,currentBGImage:this.state.BGImage,action:this.state.action},Object(i.a)(e,"brushType",this.state.brushType),Object(i.a)(e,"canvasBackground",this.state.canvasBackground),Object(i.a)(e,"BGImage",this.state.BGImage),Object(i.a)(e,"action",this.state.action),Object(i.a)(e,"importJson",this.state.importJson),Object(i.a)(e,"drawingCanvasRef",this.state.drawingCanvasRef),e)),s.a.createElement(B,{show:this.state.showImageUploadBox,closeCallBack:function(e){return t.setCurrentState({showImageUploadBox:e})}},s.a.createElement(y,{setCurrentState:this.setCurrentState})),s.a.createElement(B,{show:this.state.importJsonFlag,closeCallBack:function(e){return t.setCurrentState({importJsonFlag:e})}},s.a.createElement(E,{setCurrentState:this.setCurrentState})),s.a.createElement(B,{show:this.state.saveConfirmFlag,closeCallBack:function(){return t.setCurrentState({saveConfirmFlag:!1})}},s.a.createElement(O,{messgae:"Do you want to clear all the changes?",button1:"Yes",button2:"No",button1CallBack:function(){return t.setCurrentState({action:"new"})},button2Callback:function(){return t.setCurrentState({action:"cancel-save"})}})))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.26ff187e.chunk.js.map