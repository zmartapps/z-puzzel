(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/cdV":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){return function(){}}(),a=t("pMnS"),r=t("ZYCi"),i=function(){function n(n,l){var t=this;this.translate=n,this.router=l,this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS"]),this.translate.setDefaultLang("es");var e=this.translate.getBrowserLang();this.translate.use(e.match(/en|fr|ur|es|it|fa|de|zh-CHS/)?e:"en"),this.router.events.subscribe(function(n){n instanceof r.d&&window.innerWidth<=992&&t.isToggled()&&t.toggleSidebar()})}return n.prototype.ngOnInit=function(){this.pushRightClass="push-right"},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n.prototype.changeLang=function(n){this.translate.use(n)},n}(),u=t("A7o+"),s=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]],data:{}});function d(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,6,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Z-PUZZEL "])),(n()(),e["\u0275eld"](3,0,null,null,1,"button",[["class","navbar-toggler"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleSidebar()&&e),e},null,null)),(n()(),e["\u0275eld"](4,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bars text-muted"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,1,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,0,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null))],null,null)}var c=t("Ip0R"),g=function(){function n(n,l){var t=this;this.translate=n,this.router=l,this.collapsedEvent=new e.EventEmitter,this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var o=this.translate.getBrowserLang();this.translate.use(o.match(/en|fr|ur|es|it|fa|de/)?o:"en"),this.router.events.subscribe(function(n){n instanceof r.d&&window.innerWidth<=992&&t.isToggled()&&t.toggleSidebar()})}return n.prototype.ngOnInit=function(){this.isActive=!1,this.collapsed=!1,this.showMenu="",this.pushRightClass="push-right"},n.prototype.eventCalled=function(){this.isActive=!this.isActive},n.prototype.addExpandClass=function(n){this.showMenu=n===this.showMenu?"0":n},n.prototype.toggleCollapsed=function(){this.collapsed=!this.collapsed,this.collapsedEvent.emit(this.collapsed)},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.changeLang=function(n){this.translate.use(n)},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n}(),p=e["\u0275crt"]({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;margin-bottom:48px;border:none;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}.toggle-button[_ngcontent-%COMP%]{position:fixed;width:236px;cursor:pointer;padding:12px;bottom:0;color:#999;background:#212529;border-top:1px solid #999;transition:all .2s ease-in-out}.toggle-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:23px}.toggle-button[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.collapsed[_ngcontent-%COMP%]{width:50px}.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}"]],data:{}});function f(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,59,"nav",[["class","sidebar"]],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,c.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{sidebarPushRight:0,collapsed:1}),(n()(),e["\u0275eld"](3,0,null,null,48,"div",[["class","list-group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,10,"a",[["class","list-group-item"],["routerLink","/dashboard"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e["\u0275did"](5,671744,[[2,4]],0,r.n,[r.l,r.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275did"](6,1720320,null,2,r.m,[r.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,1,{links:1}),e["\u0275qud"](603979776,2,{linksWithHrefs:1}),e["\u0275pad"](9,1),(n()(),e["\u0275eld"](10,0,null,null,0,"i",[["class","fa fa-fw fa-dashboard"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa0 "])),(n()(),e["\u0275eld"](12,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](13,null,["",""])),e["\u0275pid"](131072,u.i,[u.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](15,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,16).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e["\u0275did"](16,671744,[[4,4]],0,r.n,[r.l,r.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](17,1),e["\u0275did"](18,1720320,null,2,r.m,[r.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,3,{links:1}),e["\u0275qud"](603979776,4,{linksWithHrefs:1}),e["\u0275pad"](21,1),(n()(),e["\u0275eld"](22,0,null,null,0,"i",[["class","fa fa-fw fa-history"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa0 "])),(n()(),e["\u0275eld"](24,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](25,null,["",""])),e["\u0275pid"](131072,u.i,[u.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](27,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,28).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e["\u0275did"](28,671744,[[6,4]],0,r.n,[r.l,r.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](29,1),e["\u0275did"](30,1720320,null,2,r.m,[r.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,5,{links:1}),e["\u0275qud"](603979776,6,{linksWithHrefs:1}),e["\u0275pad"](33,1),(n()(),e["\u0275eld"](34,0,null,null,0,"i",[["class","fa fa-fw fa-graduation-cap"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa0 "])),(n()(),e["\u0275eld"](36,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](37,null,[""," "])),e["\u0275pid"](131072,u.i,[u.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](39,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,40).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e["\u0275did"](40,671744,[[8,4]],0,r.n,[r.l,r.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](41,1),e["\u0275did"](42,1720320,null,2,r.m,[r.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,7,{links:1}),e["\u0275qud"](603979776,8,{linksWithHrefs:1}),e["\u0275pad"](45,1),(n()(),e["\u0275eld"](46,0,null,null,0,"i",[["class","fa fa-fw fa-wrench"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa0 "])),(n()(),e["\u0275eld"](48,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](49,null,["",""])),e["\u0275pid"](131072,u.i,[u.j,e.ChangeDetectorRef]),(n()(),e["\u0275eld"](51,0,null,null,0,"div",[["class","header-fields"]],null,null,null,null,null)),(n()(),e["\u0275eld"](52,0,null,null,7,"div",[["class","toggle-button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleCollapsed()&&e),e},null,null)),e["\u0275did"](53,278528,null,0,c.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](54,{collapsed:0}),(n()(),e["\u0275eld"](55,0,null,null,0,"i",[["class","fa fa-fw fa-angle-double-left"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa0 "])),(n()(),e["\u0275eld"](57,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](58,null,["",""])),e["\u0275pid"](131072,u.i,[u.j,e.ChangeDetectorRef])],function(n,l){var t=l.component,e=n(l,2,0,t.isActive,t.collapsed);n(l,1,0,"sidebar",e),n(l,5,0,"/dashboard");var o=n(l,9,0,"router-link-active");n(l,6,0,o);var a=n(l,17,0,"/workHistory");n(l,16,0,a);var r=n(l,21,0,"router-link-active");n(l,18,0,r);var i=n(l,29,0,"/education");n(l,28,0,i);var u=n(l,33,0,"router-link-active");n(l,30,0,u);var s=n(l,41,0,"/skills");n(l,40,0,s);var d=n(l,45,0,"router-link-active");n(l,42,0,d);var c=n(l,54,0,t.collapsed);n(l,53,0,"toggle-button",c)},function(n,l){n(l,4,0,e["\u0275nov"](l,5).target,e["\u0275nov"](l,5).href),n(l,13,0,e["\u0275unv"](l,13,0,e["\u0275nov"](l,14).transform("Home"))),n(l,15,0,e["\u0275nov"](l,16).target,e["\u0275nov"](l,16).href),n(l,25,0,e["\u0275unv"](l,25,0,e["\u0275nov"](l,26).transform("Classic"))),n(l,27,0,e["\u0275nov"](l,28).target,e["\u0275nov"](l,28).href),n(l,37,0,e["\u0275unv"](l,37,0,e["\u0275nov"](l,38).transform("Challange"))),n(l,39,0,e["\u0275nov"](l,40).target,e["\u0275nov"](l,40).href),n(l,49,0,e["\u0275unv"](l,49,0,e["\u0275nov"](l,50).transform("Specfic"))),n(l,58,0,e["\u0275unv"](l,58,0,e["\u0275nov"](l,59).transform("")))})}var C=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),h=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"footer",[["class","page-footer font-small blue"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"div",[["class","footer"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xa92021 Copyright:Slim Ben Ayed , V2.5 "]))],null,null)}var b=function(){function n(){}return n.prototype.ngOnInit=function(){},n.prototype.receiveCollapsed=function(n){this.collapedSideBar=n},n}(),M=e["\u0275crt"]({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{transition:margin-left .2s ease-in-out}.main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}.collapsed[_ngcontent-%COMP%]{margin-left:100px}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}@media print{.main-container[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}}"]],data:{}});function O(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,d,s)),e["\u0275did"](1,114688,null,0,i,[u.j,r.l],null,null),(n()(),e["\u0275eld"](2,0,null,null,1,"app-sidebar",[],null,[[null,"collapsedEvent"]],function(n,l,t){var e=!0;return"collapsedEvent"===l&&(e=!1!==n.component.receiveCollapsed(t)&&e),e},f,p)),e["\u0275did"](3,114688,null,0,g,[u.j,r.l],null,{collapsedEvent:"collapsedEvent"}),(n()(),e["\u0275eld"](4,0,null,null,6,"section",[["class","main-container"]],null,null,null,null,null)),e["\u0275did"](5,278528,null,0,c.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](6,{collapsed:0}),(n()(),e["\u0275eld"](7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](8,212992,null,0,r.p,[r.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null),(n()(),e["\u0275eld"](9,0,null,null,1,"app-footer",[],null,null,null,m,h)),e["\u0275did"](10,114688,null,0,C,[],null,null)],function(n,l){var t=l.component;n(l,1,0),n(l,3,0);var e=n(l,6,0,t.collapedSideBar);n(l,5,0,"main-container",e),n(l,8,0),n(l,10,0)},null)}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,O,M)),e["\u0275did"](1,114688,null,0,b,[],null,null)],function(n,l){n(l,1,0)},null)}var P=e["\u0275ccf"]("app-layout",b,_,{},{},[]),v=function(){return function(){}}(),y=t("4GxJ");t.d(l,"LayoutModuleNgFactory",function(){return k});var k=e["\u0275cmf"](o,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,P]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[e.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),e["\u0275mpd"](1073742336,r.o,r.o,[[2,r.u],[2,r.l]]),e["\u0275mpd"](1073742336,v,v,[]),e["\u0275mpd"](1073742336,u.g,u.g,[]),e["\u0275mpd"](1073742336,y.r,y.r,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,r.j,function(){return[[{path:"",component:b,children:[{path:"",redirectTo:"dashboard",pathMatch:"prefix"},{path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"workHistory",loadChildren:"./charts/charts.module#ChartsModule"},{path:"skills",loadChildren:"./tables/tables.module#TablesModule"},{path:"spec",loadChildren:"./tables1/tables1.module#Tables1Module"},{path:"clients",loadChildren:"./form/form.module#FormModule"},{path:"education",loadChildren:"./bs-element/bs-element.module#BsElementModule"},{path:"workHistory1",loadChildren:"./charts1/charts1.module#Charts1Module"},{path:"summurize",loadChildren:"./grid/grid.module#GridModule"},{path:"summurize1",loadChildren:"./grid1/grid1.module#Grid1Module"},{path:"realisations",loadChildren:"./realisation/realisation.module#RealisationModule"}]}]]},[])])})}}]);