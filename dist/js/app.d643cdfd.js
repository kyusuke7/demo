(function(e){function t(t){for(var a,c,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/demo/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"1a67":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a9e3");var a=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" v1 "),n("hr"),n("div",[n("h1",[e._v(" navigator user media ")]),n("div",[n("button",{on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.getCamera()}}},[e._v(" get camera ")]),n("p",[e._v(" "+e._s(e.result)+" ")])])]),n("hr"),n("div",[n("h1",[e._v(" quagga2 demo ")]),n("div",[n("div",{attrs:{id:"cameraArea"}},[e.code.length?n("img",{staticClass:"resultImg",attrs:{src:"",alt:"result"}}):e._e()]),e.code.length?n("p",{staticClass:"getMessage"},[e._v("取得できました")]):e._e(),n("p",{staticClass:"resultCode"},[e._v(e._s(e.code))]),n("button",{on:{click:e.startScan}},[e._v("Scan")]),n("button",{attrs:{"aria-label":"close"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.stopScan.apply(null,arguments)}}},[e._v(" Stop ")]),n("p",[e._v(e._s(e.errq))])])]),n("hr"),n("div",[n("h1",[e._v(" html5-qrcode demo ")]),n("div",[n("qrcode-scanner",{staticStyle:{width:"500px"},attrs:{qrbox:250,fps:10},on:{result:e.onScan}}),n("p",{staticClass:"resultCode"},[e._v(e._s(e.decodedText))]),n("p",{staticClass:"resultCode"},[e._v(e._s(e.decodedResult))])],1)])])},i=[],s=n("b85c"),u=(n("d3b7"),n("99af"),n("b0c0"),n("159b"),n("4de4"),n("be2c")),d=n.n(u),l={name:"HelloWorld",components:{},data:function(){return{Quagga:null,code:"",decodedText:"",decodedResult:"",result:"",errq:""}},computed:{},watch:{},methods:{getCamera:function(){var e=this;return console.log("aaaaaaaaaaaaaaaaaaa"),new Promise((function(t,n){navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then((function(a){e.result="then: "+a;var o=function(e){var t,n=e.getVideoTracks(),a=Object(s["a"])(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;o.enabled=!1,o.stop(),e.removeTrack(o)}}catch(r){a.e(r)}finally{a.f()}};navigator.mediaDevices.enumerateDevices().then((function(e){var n,r=[],c=Object(s["a"])(e);try{for(c.s();!(n=c.n()).done;){var i=n.value;"videoinput"===i.kind&&r.push({id:i.deviceId,label:i.label})}}catch(u){c.e(u)}finally{c.f()}o(a),t(r)})).catch((function(e){n("".concat(e.name," : ").concat(e.message))}))})).catch((function(t){e.result="err:"+t,n("".concat(t.name," : ").concat(t.message))}))}))},startScan:function(){try{this.code="",this.initQuagga()}catch(e){this.errq=e}},stopScan:function(){this.Quagga.offProcessed(this.onProcessed),this.Quagga.offDetected(this.onDetected),this.Quagga.stop()},initQuagga:function(){this.Quagga=d.a,this.Quagga.onProcessed(this.onProcessed),this.Quagga.onDetected(this.onDetected);var e={inputStream:{name:"Live",type:"LiveStream",target:document.querySelector("#cameraArea"),constraints:{facingMode:"environment"}},numOfWorkers:navigator.hardwareConcurrency||4,decoder:{readers:["ean_reader","ean_8_reader"]}};this.Quagga.init(e,this.onInit)},onInit:function(e){if(e)return console.log(e),void(this.errq=e);console.info("Initialization finished. Ready to start"),this.Quagga.start()},onDetected:function(e){this.code=e.codeResult.code;var t=document.querySelector(".resultImg");t.setAttribute("src",this.Quagga.canvas.dom.image.toDataURL()),this.Quagga.stop()},onProcessed:function(e){var t=this,n=this.Quagga.canvas.ctx.overlay,a=this.Quagga.canvas.dom.overlay;if(e){if(e.boxes){n.clearRect(0,0,a.width,a.height);var o=function(t){return t!==e.box};e.boxes.filter(o).forEach((function(e){t.Quagga.ImageDebug.drawPath(e,{x:0,y:1},n,{color:"green",lineWidth:2})}))}e.box&&this.Quagga.ImageDebug.drawPath(e.box,{x:0,y:1},n,{color:"blue",lineWidth:2}),e.codeResult&&e.codeResult.code&&this.Quagga.ImageDebug.drawPath(e.line,{x:"x",y:"y"},n,{color:"red",lineWidth:3})}},onScan:function(e,t){console.log(e,t),this.decodedText=e,this.decodedResult=t}},mounted:function(){}},f=l,g=(n("8a94"),n("2877")),p=Object(g["a"])(f,c,i,!1,null,"76b3a268",null),h=p.exports,v={name:"App",components:{HelloWorld:h}},m=v,b=(n("034f"),Object(g["a"])(m,o,r,!1,null,null,null)),y=b.exports,_=n("784e");a["a"].config.productionTip=!1,a["a"].component("qrcode-scanner",{props:{qrbox:{type:Number,default:250},fps:{type:Number,default:10}},template:'<div id="qr-code-full-region"></div>',mounted:function(){var e={fps:this.fps,qrbox:this.qrbox},t=new _["a"]("qr-code-full-region",e);t.render(this.onScanSuccess)},methods:{onScanSuccess:function(e,t){this.$emit("result",e,t)}}}),new a["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){},"8a94":function(e,t,n){"use strict";n("1a67")}});
//# sourceMappingURL=app.d643cdfd.js.map