(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{UE8e:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=function(){return function(){}}(),i=e("4GxJ"),o=e("Ip0R"),a=e("gIcY"),r=t["\u0275crt"]({encapsulation:2,styles:["ngb-alert{display:block}"],data:{}});function s(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.closeHandler()&&t),t},null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\xd7"]))],null,null)}function d(l){return t["\u0275vid"](2,[(l()(),t["\u0275and"](16777216,null,null,1,null,s)),t["\u0275did"](1,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275ncd"](null,0)],function(l,n){l(n,1,0,n.component.dismissible)},null)}function c(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ngb-alert",[["class","alert"],["role","alert"]],[[2,"alert-dismissible",null]],null,null,d,r)),t["\u0275did"](1,638976,null,0,i.d,[i.e,t.Renderer2,t.ElementRef],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,t["\u0275nov"](n,1).dismissible)})}var g=t["\u0275ccf"]("ngb-alert",i.d,c,{dismissible:"dismissible",type:"type"},{close:"close"},["*"]),h=e("pMnS"),f=e("NgMZ"),m=e("Z4CC"),p=e("rk39"),v=e("kcMI"),b=(e("wBv1"),e("oVYL")),C=e("AilQ"),I=function(){function l(l,n,e,t,u){this.rest=l,this.gameBusiness=n,this.sanitizer=e,this.route=t,this.router=u,this.withvalue=50,this.valw="50",this.options={floor:0,ceil:100,step:1,minLimit:20,maxLimit:90},this.title="helloworld",this.widthImg=0,this.heightImg=0,this.grillex=5,this.grilley=5,this.widthcase=0,this.heightcase=0,this.status=0,this.nbdep=0,this.sel1="",this.sel2="",this.showorign=!0,this.tabImages=new Map,this.curStat=new Map}return l.prototype.getLarge=function(){return"50%"},l.prototype.changeStatus=function(){this.showorign=!this.showorign,document.getElementById("ddd").hidden=!this.showorign},l.prototype.ngOnInit=function(){e("fjcx");var l=new Date,n=1e3+(30*l.getMonth()+l.getUTCDate());this.imageSrc="assets/images/"+n+".jpeg",e("fjcx"),this.gameBusiness.initTable(this.tabImages,10,10),this.rest.track("PUZZ","HOME").subscribe(function(l){})},l.prototype.ngAfterViewInit=function(){this.timer.stop(),this.timer.reset()},l.prototype.dosomething=function(l){this.initImg=l,this.widthImg=l.clientWidth,this.heightImg=l.clientHeight,this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley,this.widthcase=Math.floor(this.widthcase),this.heightcase=Math.floor(this.heightcase),e("fjcx"),document.getElementById("rrr").hidden=!0},l.prototype.extract=function(l){var n=new Uint8Array(l).reduce(function(l,n){return l+String.fromCharCode(n)},""),e=btoa(n);return this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,"+e)},l.prototype.getRandomInt=function(l,n){return Math.floor(Math.random()*(n-l+1))+l},l.prototype.checkPuzzel=function(){for(var l=this,n=!0,e=0;e<this.grillex;e++)for(var t=0;t<this.grilley;t++){var u=void 0;this.curStat.get(u=(u=""+t)+e)!=u&&(n=!1)}n&&setTimeout(function(){l.timer.stop(),alert("BRAVO !")},1e3)},l.prototype.startMel=function(){var l=this;setTimeout(function(){l.gameBusiness.randomizeTables(l.tabImages,l.curStat,l.grillex,l.grilley),l.status=2,l.timer.start()},1e3)},l.prototype.melanger=function(){var l=this;if(1!=this.status){this.nbdep=0,this.status=1,this.timer.reset(),this.gameBusiness.initTable(this.tabImages,10,10),this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley,this.widthcase=Math.floor(this.widthcase),this.heightcase=Math.floor(this.heightcase);for(var n=e("fjcx"),t=0,u=function(e){for(var u=function(u){var o=e*i.widthcase,a=u*i.heightcase;n.read(i.imageSrc,function(i,r){r.crop(o,a,l.widthcase,l.heightcase).getBuffer(n.MIME_JPEG,function(n,i){var o=l.extract(i),a=""+u+e;l.curStat.set(a,a),l.tabImages.set(a,o),++t==l.grillex*l.grilley&&l.startMel()})})},o=0;o<i.grilley;o++)u(o)},i=this,o=0;o<this.grillex;o++)u(o)}},l.prototype.handleEvent=function(l){"done"!=l.action||alert("YOU LOSE ! GAME OVER .")},l.prototype.selectCase=function(l){if(""==this.sel1)this.sel1=l;else if(l!=this.sel1){var n=this.tabImages.get(l),e=this.tabImages.get(this.sel1);this.tabImages.set(this.sel1,n),this.tabImages.set(l,e);var t=this.curStat.get(l),u=this.curStat.get(this.sel1);this.curStat.set(this.sel1,t),this.curStat.set(l,u),this.sel1="",this.nbdep++,this.checkPuzzel()}},l.prototype.ngOnDestroy=function(){this.gameBusiness.initTable(this.tabImages,10,10),this.tabImages=void 0,this.imageSrc=void 0},l}(),w=e("ZYjt"),R=e("ZYCi"),y=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,a.g,[t.ElementRef,t.Renderer2,[2,a.h]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,a.k,[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit)})}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,a.g,[t.ElementRef,t.Renderer2,[2,a.h]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,a.k,[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),t["\u0275ted"](3,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit)})}function T(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["id","ddd"],["style"," width: 40%"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.imageSrc)})}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,[["img2",1]],null,0,"img",[["id","rrr"]],[[8,"src",4]],[[null,"load"]],function(l,n,e){var u=!0;return"load"===n&&(u=!1!==l.component.dosomething(t["\u0275nov"](l,0))&&u),u},null,null))],null,function(l,n){l(n,0,0,n.component.imageSrc)})}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["src","assets/load.gif"],["style","width:220px;height:320px;"]],null,null,null,null,null))],null,null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ng5-slider",[["class","ng5-slider"],["style"," width: 30%"]],[[2,"vertical",null],[2,"animate",null],[1,"disabled",0]],[[null,"valueChange"],["window","resize"]],function(l,n,e){var u=!0,i=l.component;return"window:resize"===n&&(u=!1!==t["\u0275nov"](l,2).onResize(e)&&u),"valueChange"===n&&(u=!1!==(i.withvalue=e)&&u),u},f.b,f.a)),t["\u0275prd"](5120,null,a.c,function(l){return[l]},[m.b]),t["\u0275did"](2,4964352,null,1,m.b,[t.Renderer2,t.ElementRef,t.ChangeDetectorRef,t.NgZone],{value:[0,"value"],options:[1,"options"]},{valueChange:"valueChange"}),t["\u0275qud"](335544320,2,{tooltipTemplate:0})],function(l,n){var e=n.component;l(n,2,0,e.withvalue,e.options)},function(l,n){l(n,0,0,t["\u0275nov"](n,2).sliderElementVerticalClass,t["\u0275nov"](n,2).sliderElementAnimateClass,t["\u0275nov"](n,2).sliderElementDisabledAttr)})}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"img",[["style","display: block; width: 100%;"]],[[8,"src",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.selectCase(""+l.parent.parent.context.$implicit+l.parent.context.$implicit)&&t),t},null,null))],null,function(l,n){l(n,0,0,n.component.tabImages.get(""+n.parent.parent.context.$implicit+n.parent.context.$implicit))})}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"td",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](2,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,null!=n.component.tabImages.get(""+n.parent.context.$implicit+n.context.$implicit))},null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"tr",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"],["style","width: 100%"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,2,null,D)),t["\u0275did"](2,278528,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](3,10)],function(l,n){var e=l(n,3,0,0,1,2,3,4,5,6,7,8,9);l(n,2,0,e)},null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"table",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"]],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,o.NgStyle,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](2,{width:0}),(l()(),t["\u0275eld"](3,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,2,null,k)),t["\u0275did"](5,278528,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](6,10)],function(l,n){var e=l(n,2,0,n.component.withvalue+"%");l(n,1,0,e);var t=l(n,6,0,0,1,2,3,4,5,6,7,8,9);l(n,5,0,t)},null)}function V(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{timer:0}),(l()(),t["\u0275eld"](1,0,null,null,47,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" IMAGE OF THE DAY "])),(l()(),t["\u0275eld"](4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.melanger()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Play"])),(l()(),t["\u0275ted"](-1,null,[" X-Case : "])),(l()(),t["\u0275eld"](8,0,null,null,8,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var u=!0,i=l.component;return"change"===n&&(u=!1!==t["\u0275nov"](l,9).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,9).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(i.grillex=e)&&u),u},null,null)),t["\u0275did"](9,16384,null,0,a.h,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,a.c,function(l){return[l]},[a.h]),t["\u0275did"](11,671744,null,0,a.f,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,a.d,null,[a.f]),t["\u0275did"](13,16384,null,0,a.e,[[4,a.d]],null,null),(l()(),t["\u0275and"](16777216,null,null,2,null,E)),t["\u0275did"](15,278528,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](16,7),(l()(),t["\u0275ted"](-1,null,[" Y-Case : "])),(l()(),t["\u0275eld"](18,0,null,null,8,"select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var u=!0,i=l.component;return"change"===n&&(u=!1!==t["\u0275nov"](l,19).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,19).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(i.grilley=e)&&u),u},null,null)),t["\u0275did"](19,16384,null,0,a.h,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,a.c,function(l){return[l]},[a.h]),t["\u0275did"](21,671744,null,0,a.f,[[8,null],[8,null],[8,null],[6,a.c]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,a.d,null,[a.f]),t["\u0275did"](23,16384,null,0,a.e,[[4,a.d]],null,null),(l()(),t["\u0275and"](16777216,null,null,2,null,x)),t["\u0275did"](25,278528,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](26,7),(l()(),t["\u0275ted"](-1,null,[" Show Origin: "])),(l()(),t["\u0275eld"](28,0,null,null,0,"input",[["type","checkbox"]],[[8,"checked",0]],[[null,"change"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==l.component.changeStatus()&&t),t},null,null)),(l()(),t["\u0275eld"](29,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](32,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](34,null,["\nNb Coups : "," Time : "])),(l()(),t["\u0275eld"](35,0,null,null,1,"cd-timer",[["format","hms"],["id","basicTimer"]],null,null,null,p.b,p.a)),t["\u0275did"](36,4374528,[[1,4],["basicTimer",4]],0,v.a,[t.ElementRef,t.Renderer2],{format:[0,"format"]},null),(l()(),t["\u0275eld"](37,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](39,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](40,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](42,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](44,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](45,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,L)),t["\u0275did"](47,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](48,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){var e=n.component;l(n,11,0,e.grillex);var t=l(n,16,0,3,4,5,6,7,8,9);l(n,15,0,t),l(n,21,0,e.grilley);var u=l(n,26,0,3,4,5,6,7,8,9);l(n,25,0,u),l(n,32,0,e.showorign),l(n,36,0,"hms"),l(n,39,0,5!=e.status),l(n,42,0,1==e.status),l(n,44,0,2==e.status),l(n,47,0,2==e.status)},function(l,n){var e=n.component;l(n,1,0,void 0),l(n,8,0,t["\u0275nov"](n,13).ngClassUntouched,t["\u0275nov"](n,13).ngClassTouched,t["\u0275nov"](n,13).ngClassPristine,t["\u0275nov"](n,13).ngClassDirty,t["\u0275nov"](n,13).ngClassValid,t["\u0275nov"](n,13).ngClassInvalid,t["\u0275nov"](n,13).ngClassPending),l(n,18,0,t["\u0275nov"](n,23).ngClassUntouched,t["\u0275nov"](n,23).ngClassTouched,t["\u0275nov"](n,23).ngClassPristine,t["\u0275nov"](n,23).ngClassDirty,t["\u0275nov"](n,23).ngClassValid,t["\u0275nov"](n,23).ngClassInvalid,t["\u0275nov"](n,23).ngClassPending),l(n,28,0,e.showorign),l(n,34,0,e.nbdep)})}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-dashboard",[],null,null,null,V,y)),t["\u0275did"](1,4440064,null,0,I,[C.a,b.a,w.c,R.a,R.l],null,null)],function(l,n){l(n,1,0)},null)}var A=t["\u0275ccf"]("app-dashboard",I,F,{},{},[]),P=e("WB5j"),B=function(){return function(){}}(),z=function(){return function(){}}();e.d(n,"DashboardModuleNgFactory",function(){return $});var $=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[g,h.a,A]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[t.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,a.j,a.j,[]),t["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),t["\u0275mpd"](1073742336,i.k,i.k,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,a.i,a.i,[]),t["\u0275mpd"](1073742336,a.a,a.a,[]),t["\u0275mpd"](1073742336,i.f,i.f,[]),t["\u0275mpd"](1073742336,R.o,R.o,[[2,R.u],[2,R.l]]),t["\u0275mpd"](1073742336,B,B,[]),t["\u0275mpd"](1073742336,m.a,m.a,[]),t["\u0275mpd"](1073742336,z,z,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,R.j,function(){return[[{path:"",component:I}]]},[])])})}}]);