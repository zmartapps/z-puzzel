(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+Sv0":function(l,t,n){"use strict";n.d(t,"a",function(){return e});var e=function(){return function(){}}()},"6OTL":function(l,t,n){"use strict";n.r(t);var e=n("CcnG"),i=function(){return function(){}}(),u=n("pMnS"),s=n("NgMZ"),a=n("gIcY"),o=n("Z4CC"),r=n("Ip0R"),h=n("rk39"),c=n("kcMI"),d=(n("wBv1"),n("oVYL")),g=n("lgup"),m=n("oiff"),f=n("AilQ"),p=function(){function l(l,t,n,e,i){this.rest=l,this.gameBusiness=t,this.sanitizer=n,this.route=e,this.router=i,this.withvalue=50,this.valw="50",this.options={floor:0,ceil:100,step:1,minLimit:20,maxLimit:90},this.title="helloworld",this.widthImg=0,this.heightImg=0,this.grillex=5,this.grilley=5,this.widthcase=0,this.heightcase=0,this.status=0,this.nbdep=0,this.sel1="",this.delay=300,this.sel2="",this.level="",this.stage="",this.stageNb=1,this.cat=0,this.conf="",this.gameStatus=new g.a,this.imageConfig=new m.a,this.showorign=!1,this.tabImages=new Map,this.curStat=new Map}return l.prototype.changeStatus=function(){this.showorign=!this.showorign,document.getElementById("ddd").hidden=!this.showorign},l.prototype.ngOnInit=function(){n("fjcx");var l=this.route.snapshot.paramMap.get("config");this.stage=l.substr(1,1),this.level=l.substr(0,1),this.cat=parseInt(l.substr(2,1)),this.stageNb=parseInt(this.stage)+1,this.gameStatus.level=parseInt(this.level),this.gameStatus.stage=parseInt(this.stage),this.imageConfig=this.gameBusiness.getImageConfig(this.gameStatus),this.delay=this.imageConfig.gametime;var t=this.gameBusiness.getRandomImageIDCat(this.cat);this.imageSrc="assets/images/"+t+".jpeg",n("fjcx"),this.gameBusiness.initTable(this.tabImages,10,10)},l.prototype.ngAfterViewInit=function(){var l=this;this.timer.stop(),this.timer.countdown=!0,this.timer.startTime=this.delay,this.grillex=this.imageConfig.nbx,this.grilley=this.imageConfig.nby,this.timer.start(),setTimeout(function(){l.melanger()},1e3),this.rest.track("PUZZ","CHAL:"+this.level+"-"+this.stage).subscribe(function(l){})},l.prototype.finish=function(){this.showorign=!0,this.status=3,alert("YOU LOSE ! GAME OVER ."),document.getElementById("ddd").hidden=!0},l.prototype.dosomething=function(l){var t=this;this.initImg=l,this.widthImg=l.clientWidth,this.heightImg=l.clientHeight,this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley,this.widthcase=Math.floor(this.widthcase),this.heightcase=Math.floor(this.heightcase),document.getElementById("rrr").hidden=!0,n("fjcx"),"1"==this.level&&(this.showorign=!0),"2"==this.level&&(this.showorign=!0,setTimeout(function(){t.showorign=!1},1e3))},l.prototype.fillImage=function(l,t,e,i,u){var s=this,a=n("fjcx");a.read(this.imageSrc,function(n,o){o.crop(l,t,e,i).getBuffer(a.MIME_JPEG,function(l,t){var n=s.extract(t);s.tabImages.set(u,n)})})},l.prototype.extract=function(l){var t=new Uint8Array(l).reduce(function(l,t){return l+String.fromCharCode(t)},""),n=btoa(t);return this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,"+n)},l.prototype.checkPuzzel=function(){for(var l=this,t=!0,n=0;n<this.grillex;n++)for(var e=0;e<this.grilley;e++){var i=void 0;this.curStat.get(i=(i=""+e)+n)!=i&&(t=!1)}t&&setTimeout(function(){l.status=2,l.timer.stop(),alert("BRAVO !"),l.newimage()},1e3)},l.prototype.newimage=function(){var l=this;setTimeout(function(){l.router.navigate(["summurize1/"+l.level+l.stageNb+l.cat])},3e3)},l.prototype.melanger=function(){var l=this;this.nbdep=0,this.status=0,this.timer.reset(),this.gameBusiness.initTable(this.tabImages,10,10),this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley,this.widthcase=Math.floor(this.widthcase),this.heightcase=Math.floor(this.heightcase);for(var t=n("fjcx"),e=0,i=function(n){for(var i=function(i){var s=n*u.widthcase,a=i*u.heightcase;t.read(u.imageSrc,function(u,o){o.crop(s,a,l.widthcase,l.heightcase).getBuffer(t.MIME_JPEG,function(t,u){var s=l.extract(u),a=""+i+n;l.curStat.set(a,a),l.tabImages.set(a,s),++e==l.grillex*l.grilley&&l.startMel()})})},s=0;s<u.grilley;s++)i(s)},u=this,s=0;s<this.grillex;s++)i(s)},l.prototype.startMel=function(){var l=this;setTimeout(function(){l.gameBusiness.randomizeTables(l.tabImages,l.curStat,l.grillex,l.grilley),l.status=1,l.timer.start()},1e3)},l.prototype.handleEvent=function(l){"done"!=l.action||alert("YOU LOSE ! GAME OVER .")},l.prototype.selectCase=function(l){if(1==this.status)if(""==this.sel1)this.sel1=l;else if(l!=this.sel1){var t=this.tabImages.get(l),n=this.tabImages.get(this.sel1);this.tabImages.set(this.sel1,t),this.tabImages.set(l,n);var e=this.curStat.get(l),i=this.curStat.get(this.sel1);this.curStat.set(this.sel1,e),this.curStat.set(l,i),this.sel1="",this.nbdep++,this.checkPuzzel()}},l.prototype.ngOnDestroy=function(){this.gameBusiness.initTable(this.tabImages,10,10),this.tabImages=void 0,this.imageSrc=void 0},l}(),v=n("ZYjt"),I=n("ZYCi"),w=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["id","ddd"],["style"," width: 40%"]],[[8,"src",4]],null,null,null,null))],null,function(l,t){l(t,0,0,t.component.imageSrc)})}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,[["img2",1]],null,0,"img",[["id","rrr"]],[[8,"src",4]],[[null,"load"]],function(l,t,n){var i=!0;return"load"===t&&(i=!1!==l.component.dosomething(e["\u0275nov"](l,0))&&i),i},null,null))],null,function(l,t){l(t,0,0,t.component.imageSrc)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["src","assets/load.gif"],["style","width:220px;height:320px;"]],null,null,null,null,null))],null,null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"ng5-slider",[["class","ng5-slider"],["style"," width: 30%"]],[[2,"vertical",null],[2,"animate",null],[1,"disabled",0]],[[null,"valueChange"],["window","resize"]],function(l,t,n){var i=!0,u=l.component;return"window:resize"===t&&(i=!1!==e["\u0275nov"](l,2).onResize(n)&&i),"valueChange"===t&&(i=!1!==(u.withvalue=n)&&i),i},s.b,s.a)),e["\u0275prd"](5120,null,a.c,function(l){return[l]},[o.b]),e["\u0275did"](2,4964352,null,1,o.b,[e.Renderer2,e.ElementRef,e.ChangeDetectorRef,e.NgZone],{value:[0,"value"],options:[1,"options"]},{valueChange:"valueChange"}),e["\u0275qud"](335544320,2,{tooltipTemplate:0})],function(l,t){var n=t.component;l(t,2,0,n.withvalue,n.options)},function(l,t){l(t,0,0,e["\u0275nov"](t,2).sliderElementVerticalClass,e["\u0275nov"](t,2).sliderElementAnimateClass,e["\u0275nov"](t,2).sliderElementDisabledAttr)})}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["style","display: block; width: 100%;"]],[[8,"src",4]],[[null,"click"]],function(l,t,n){var e=!0;return"click"===t&&(e=!1!==l.component.selectCase(""+l.parent.parent.context.$implicit+l.parent.context.$implicit)&&e),e},null,null))],null,function(l,t){l(t,0,0,t.component.tabImages.get(""+t.parent.parent.context.$implicit+t.parent.context.$implicit))})}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"td",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](2,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,t){l(t,2,0,null!=t.component.tabImages.get(""+t.parent.context.$implicit+t.context.$implicit))},null)}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"tr",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"],["style","width: 100%"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,S)),e["\u0275did"](2,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pad"](3,10)],function(l,t){var n=l(t,3,0,0,1,2,3,4,5,6,7,8,9);l(t,2,0,n)},null)}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"table",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"]],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,r.NgStyle,[e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](2,{width:0}),(l()(),e["\u0275eld"](3,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,x)),e["\u0275did"](5,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pad"](6,10)],function(l,t){var n=l(t,2,0,t.component.withvalue+"%");l(t,1,0,n);var e=l(t,6,0,0,1,2,3,4,5,6,7,8,9);l(t,5,0,e)},null)}function T(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{timer:0}),(l()(),e["\u0275eld"](1,0,null,null,26,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h2",[["style","color:tomato;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["LEVEL : ",""])),(l()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"h3",[["style","color:blue;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["STAGE : ",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](10,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,["\nMoves : "," Time : "])),(l()(),e["\u0275eld"](13,0,null,null,1,"cd-timer",[["format","hms"]],null,[[null,"onComplete"]],function(l,t,n){var e=!0;return"onComplete"===t&&(e=!1!==l.component.finish()&&e),e},h.b,h.a)),e["\u0275did"](14,4374528,[[1,4],["basicTimer",4]],0,c.a,[e.ElementRef,e.Renderer2],{format:[0,"format"]},{onComplete:"onComplete"}),(l()(),e["\u0275eld"](15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](18,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](21,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](23,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](26,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](27,0,null,null,0,"br",[],null,null,null,null,null))],function(l,t){var n=t.component;l(t,10,0,n.showorign),l(t,14,0,"hms"),l(t,18,0,5!=n.status),l(t,21,0,0==n.status),l(t,23,0,1==n.status),l(t,26,0,1==n.status||3==n.status)},function(l,t){var n=t.component;l(t,1,0,void 0),l(t,5,0,n.level),l(t,8,0,n.stageNb),l(t,12,0,n.nbdep)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-grid",[],null,null,null,T,w)),e["\u0275did"](1,4440064,null,0,p,[f.a,d.a,v.c,I.a,I.l],null,null)],function(l,t){l(t,1,0)},null)}var M=e["\u0275ccf"]("app-grid",p,N,{},{},[]),O=function(){return function(){}}(),B=n("+Sv0"),A=n("WB5j");n.d(t,"GridModuleNgFactory",function(){return D});var D=e["\u0275cmf"](i,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,M]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,a.j,a.j,[]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,I.o,I.o,[[2,I.u],[2,I.l]]),e["\u0275mpd"](1073742336,O,O,[]),e["\u0275mpd"](1073742336,B.a,B.a,[]),e["\u0275mpd"](1073742336,A.a,A.a,[]),e["\u0275mpd"](1073742336,a.i,a.i,[]),e["\u0275mpd"](1073742336,a.a,a.a,[]),e["\u0275mpd"](1073742336,o.a,o.a,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,I.j,function(){return[[{path:"",component:p}]]},[])])})}}]);