(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+Sv0":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){return function(){}}()},"3zLz":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){function e(){}return e.prototype.ngOnInit=function(){},e}()},"7LN8":function(e,t,n){var i=n("mrSG").__decorate,o=n("mrSG").__metadata;Object.defineProperty(t,"__esModule",{value:!0});var l=n("CcnG"),r=n("Ip0R"),s=n("CcnG"),a=function(){return i([s.Component({selector:"p-header",template:"<ng-content></ng-content>"})],function(){})}();t.Header=a;var p=function(){return i([s.Component({selector:"p-footer",template:"<ng-content></ng-content>"})],function(){})}();t.Footer=p;var u=function(){function e(e){this.template=e}return e.prototype.getType=function(){return this.name},i([l.Input(),o("design:type",String)],e.prototype,"type",void 0),i([l.Input("pTemplate"),o("design:type",String)],e.prototype,"name",void 0),i([l.Directive({selector:"[pTemplate]",host:{}})],e)}();t.PrimeTemplate=u;var d=function(){function e(){this.filterType="text",this.exportable=!0,this.resizable=!0,this.sortFunction=new l.EventEmitter}return e.prototype.ngAfterContentInit=function(){var e=this;this.templates.forEach(function(t){switch(t.getType()){case"header":e.headerTemplate=t.template;break;case"body":e.bodyTemplate=t.template;break;case"footer":e.footerTemplate=t.template;break;case"filter":e.filterTemplate=t.template;break;case"editor":e.editorTemplate=t.template;break;default:e.bodyTemplate=t.template}})},i([l.Input(),o("design:type",String)],e.prototype,"field",void 0),i([l.Input(),o("design:type",String)],e.prototype,"colId",void 0),i([l.Input(),o("design:type",String)],e.prototype,"sortField",void 0),i([l.Input(),o("design:type",String)],e.prototype,"filterField",void 0),i([l.Input(),o("design:type",String)],e.prototype,"header",void 0),i([l.Input(),o("design:type",String)],e.prototype,"footer",void 0),i([l.Input(),o("design:type",Object)],e.prototype,"sortable",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"editable",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"filter",void 0),i([l.Input(),o("design:type",String)],e.prototype,"filterMatchMode",void 0),i([l.Input(),o("design:type",String)],e.prototype,"filterType",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"excludeGlobalFilter",void 0),i([l.Input(),o("design:type",Number)],e.prototype,"rowspan",void 0),i([l.Input(),o("design:type",Number)],e.prototype,"colspan",void 0),i([l.Input(),o("design:type",String)],e.prototype,"scope",void 0),i([l.Input(),o("design:type",Object)],e.prototype,"style",void 0),i([l.Input(),o("design:type",String)],e.prototype,"styleClass",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"exportable",void 0),i([l.Input(),o("design:type",Object)],e.prototype,"headerStyle",void 0),i([l.Input(),o("design:type",String)],e.prototype,"headerStyleClass",void 0),i([l.Input(),o("design:type",Object)],e.prototype,"bodyStyle",void 0),i([l.Input(),o("design:type",String)],e.prototype,"bodyStyleClass",void 0),i([l.Input(),o("design:type",Object)],e.prototype,"footerStyle",void 0),i([l.Input(),o("design:type",String)],e.prototype,"footerStyleClass",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"hidden",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"expander",void 0),i([l.Input(),o("design:type",String)],e.prototype,"selectionMode",void 0),i([l.Input(),o("design:type",String)],e.prototype,"filterPlaceholder",void 0),i([l.Input(),o("design:type",Number)],e.prototype,"filterMaxlength",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"frozen",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"resizable",void 0),i([l.Output(),o("design:type",l.EventEmitter)],e.prototype,"sortFunction",void 0),i([l.ContentChildren(u),o("design:type",l.QueryList)],e.prototype,"templates",void 0),i([l.ContentChild(l.TemplateRef),o("design:type",l.TemplateRef)],e.prototype,"template",void 0),i([s.Component({selector:"p-column",template:""})],e)}();t.Column=d;var c=function(){function e(){}return i([l.ContentChildren(d),o("design:type",l.QueryList)],e.prototype,"columns",void 0),i([s.Component({selector:"p-row",template:""})],e)}();t.Row=c;var h=function(){function e(){}return i([l.Input(),o("design:type",Boolean)],e.prototype,"frozen",void 0),i([l.ContentChildren(c),o("design:type",l.QueryList)],e.prototype,"rows",void 0),i([s.Component({selector:"p-headerColumnGroup",template:""})],e)}();t.HeaderColumnGroup=h;var g=function(){function e(){}return i([l.Input(),o("design:type",Boolean)],e.prototype,"frozen",void 0),i([l.ContentChildren(c),o("design:type",l.QueryList)],e.prototype,"rows",void 0),i([s.Component({selector:"p-footerColumnGroup",template:""})],e)}();t.FooterColumnGroup=g,t.SharedModule=function(){return i([l.NgModule({imports:[r.CommonModule],exports:[a,p,d,u,c,h,g],declarations:[a,p,d,u,c,h,g]})],function(){})}()},j8B3:function(e,t,n){var i=n("mrSG").__decorate,o=n("mrSG").__metadata;Object.defineProperty(t,"__esModule",{value:!0});var l=n("CcnG"),r=n("sdDj"),s=n("7LN8"),a=n("Ip0R"),p=function(){function e(e,t,n){this.el=e,this.renderer=t,this.cd=n,this.numVisible=3,this.firstVisible=0,this.circular=!1,this.breakpoint=560,this.responsive=!0,this.autoplayInterval=0,this.effectDuration="1s",this.easing="ease-out",this.pageLinks=3,this.onPage=new l.EventEmitter,this.left=0,this.columns=0}return e.prototype.ngAfterContentInit=function(){var e=this;this.templates.forEach(function(t){switch(t.getType()){case"item":default:e.itemTemplate=t.template}})},Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(e){this._value=e,this.handleDataChange()},enumerable:!0,configurable:!0}),e.prototype.handleDataChange=function(){this.value&&this.value.length?this.value.length&&this.firstVisible>=this.value.length&&this.setPage(this.totalPages-1):this.setPage(0),this.valuesChanged=!0},e.prototype.ngAfterViewChecked=function(){this.valuesChanged&&this.containerViewChild.nativeElement.offsetParent&&(this.render(),this.valuesChanged=!1)},e.prototype.ngAfterViewInit=function(){var e=this;this.responsive&&(this.documentResponsiveListener=this.renderer.listen("window","resize",function(t){e.updateState()}))},e.prototype.updateLinks=function(){this.anchorPageLinks=[];for(var e=0;e<this.totalPages;e++)this.anchorPageLinks.push(e)},e.prototype.updateDropdown=function(){this.selectDropdownOptions=[];for(var e=0;e<this.totalPages;e++)this.selectDropdownOptions.push(e)},e.prototype.updateMobileDropdown=function(){if(this.mobileDropdownOptions=[],this.value&&this.value.length)for(var e=0;e<this.value.length;e++)this.mobileDropdownOptions.push(e)},e.prototype.render=function(){this.autoplayInterval&&this.stopAutoplay(),this.items=r.DomHandler.find(this.itemsViewChild.nativeElement,"li"),this.calculateColumns(),this.calculateItemWidths(),this.setPage(Math.floor(this.firstVisible/this.columns),!0),this.responsive||(this.containerViewChild.nativeElement.style.width=r.DomHandler.width(this.containerViewChild.nativeElement)+"px"),this.autoplayInterval&&(this.circular=!0,this.startAutoplay()),this.updateMobileDropdown(),this.updateLinks(),this.updateDropdown(),this.cd.detectChanges()},e.prototype.calculateItemWidths=function(){var e=this.items&&this.items.length?this.items[0]:null;if(e)for(var t=0;t<this.items.length;t++)this.items[t].style.width=(r.DomHandler.innerWidth(this.viewportViewChild.nativeElement)-r.DomHandler.getHorizontalMargin(e)*this.columns)/this.columns+"px"},e.prototype.calculateColumns=function(){window.innerWidth<=this.breakpoint?(this.shrinked=!0,this.columns=1):(this.shrinked=!1,this.columns=this.numVisible),this.page=Math.floor(this.firstVisible/this.columns)},e.prototype.onNextNav=function(){this.page===this.totalPages-1?this.circular&&this.setPage(0):this.setPage(this.page+1)},e.prototype.onPrevNav=function(){0!==this.page?this.setPage(this.page-1):this.circular&&this.setPage(this.totalPages-1)},e.prototype.setPageWithLink=function(e,t){this.setPage(t),e.preventDefault()},e.prototype.setPage=function(e,t){(e!==this.page||t)&&(this.page=e,this.left=r.DomHandler.innerWidth(this.viewportViewChild.nativeElement)*this.page*-1,this.firstVisible=this.page*this.columns,this.onPage.emit({page:this.page}))},e.prototype.onDropdownChange=function(e){this.setPage(parseInt(e))},Object.defineProperty(e.prototype,"displayPageLinks",{get:function(){return this.totalPages<=this.pageLinks&&!this.shrinked},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"displayPageDropdown",{get:function(){return this.totalPages>this.pageLinks&&!this.shrinked},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"totalPages",{get:function(){return this.value&&this.value.length?Math.ceil(this.value.length/this.columns):0},enumerable:!0,configurable:!0}),e.prototype.routerDisplay=function(){return window.innerWidth<=this.breakpoint},e.prototype.updateState=function(){window.innerWidth<=this.breakpoint?(this.shrinked=!0,this.columns=1):this.shrinked&&(this.shrinked=!1,this.columns=this.numVisible,this.updateLinks(),this.updateDropdown()),this.calculateItemWidths(),this.setPage(Math.floor(this.firstVisible/this.columns),!0)},e.prototype.startAutoplay=function(){var e=this;this.interval=setInterval(function(){e.setPage(e.page===e.totalPages-1?0:e.page+1)},this.autoplayInterval)},e.prototype.stopAutoplay=function(){clearInterval(this.interval)},e.prototype.ngOnDestroy=function(){this.documentResponsiveListener&&this.documentResponsiveListener(),this.autoplayInterval&&this.stopAutoplay()},i([l.Input(),o("design:type",Number)],e.prototype,"numVisible",void 0),i([l.Input(),o("design:type",Number)],e.prototype,"firstVisible",void 0),i([l.Input(),o("design:type",String)],e.prototype,"headerText",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"circular",void 0),i([l.Input(),o("design:type",Number)],e.prototype,"breakpoint",void 0),i([l.Input(),o("design:type",Boolean)],e.prototype,"responsive",void 0),i([l.Input(),o("design:type",Number)],e.prototype,"autoplayInterval",void 0),i([l.Input(),o("design:type",Object)],e.prototype,"effectDuration",void 0),i([l.Input(),o("design:type",String)],e.prototype,"easing",void 0),i([l.Input(),o("design:type",Number)],e.prototype,"pageLinks",void 0),i([l.Input(),o("design:type",Object)],e.prototype,"style",void 0),i([l.Input(),o("design:type",String)],e.prototype,"styleClass",void 0),i([l.Output(),o("design:type",l.EventEmitter)],e.prototype,"onPage",void 0),i([l.ContentChildren(s.PrimeTemplate),o("design:type",l.QueryList)],e.prototype,"templates",void 0),i([l.ViewChild("container"),o("design:type",l.ElementRef)],e.prototype,"containerViewChild",void 0),i([l.ViewChild("viewport"),o("design:type",l.ElementRef)],e.prototype,"viewportViewChild",void 0),i([l.ViewChild("items"),o("design:type",l.ElementRef)],e.prototype,"itemsViewChild",void 0),i([l.Input(),o("design:type",Array),o("design:paramtypes",[Array])],e.prototype,"value",null),i([l.Component({selector:"p-carousel",template:'\n        <div #container [ngClass]="{\'ui-carousel ui-widget ui-widget-content ui-corner-all\':true}" [ngStyle]="style" [class]="styleClass">\n            <div class="ui-carousel-header ui-widget-header ui-corner-all">\n                <span class="ui-carousel-header-title">{{headerText}}</span>\n                <span class="ui-carousel-button ui-carousel-next-button pi pi-arrow-circle-right" (click)="onNextNav()" \n                        [ngClass]="{\'ui-state-disabled\':(page === (totalPages-1)) && !circular}" *ngIf="value&&value.length"></span>\n                <span class="ui-carousel-button ui-carousel-prev-button pi pi-arrow-circle-left" (click)="onPrevNav()" \n                        [ngClass]="{\'ui-state-disabled\':(page === 0 && !circular)}" *ngIf="value&&value.length"></span>\n                <div *ngIf="displayPageLinks" class="ui-carousel-page-links">\n                    <a tabindex="0" (click)="setPageWithLink($event,i)" class="ui-carousel-page-link pi" *ngFor="let links of anchorPageLinks;let i=index" [ngClass]="{\'pi-circle-on\': page===i, \'pi-circle-off\': page !== i}"></a>\n                </div>\n                <select *ngIf="displayPageDropdown" class="ui-carousel-dropdown ui-widget ui-state-default ui-corner-left" [value]="page" (change)="onDropdownChange($event.target.value)">\n                    <option *ngFor="let option of selectDropdownOptions" [value]="option" [selected]="value == option">{{option+1}}</option>\n                </select>\n                <select *ngIf="responsive&&value&&value.length" class="ui-carousel-mobiledropdown ui-widget ui-state-default ui-corner-left" [value]="page" (change)="onDropdownChange($event.target.value)"\n                    [style.display]="shrinked ? \'block\' : \'none\'">\n                    <option *ngFor="let option of mobileDropdownOptions" [value]="option" [selected]="value == option">{{option+1}}</option>\n                </select>\n            </div>\n            <div #viewport class="ui-carousel-viewport">\n                <ul #items class="ui-carousel-items" [style.left.px]="left" [style.transitionProperty]="\'left\'" \n                            [style.transitionDuration]="effectDuration" [style.transitionTimingFunction]="easing">\n                    <li *ngFor="let item of value" class="ui-carousel-item ui-widget-content ui-corner-all">\n                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    '})],e)}();t.Carousel=p,t.CarouselModule=function(){return i([l.NgModule({imports:[a.CommonModule,s.SharedModule],exports:[p,s.SharedModule],declarations:[p]})],function(){})}()},rMXk:function(e,t,n){"use strict";var i=n("CcnG"),o=n("ZYCi"),l=n("Ip0R");n("3zLz"),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s});var r=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function s(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,12,"div",[["class","col-xl-12"]],null,null,null,null,null)),(e()(),i["\u0275eld"](2,0,null,null,1,"h2",[["class","page-header"]],null,null,null,null,null)),(e()(),i["\u0275ted"](3,null,[" "," "])),(e()(),i["\u0275eld"](4,0,null,null,9,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(e()(),i["\u0275eld"](5,0,null,null,5,"li",[["class","breadcrumb-item"]],null,null,null,null,null)),(e()(),i["\u0275eld"](6,0,null,null,0,"i",[["class","fa fa-dashboard"]],null,null,null,null,null)),(e()(),i["\u0275eld"](7,0,null,null,3,"a",[["href","Javascript:void(0)"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,t,n){var o=!0;return"click"===t&&(o=!1!==i["\u0275nov"](e,8).onClick(n.button,n.ctrlKey,n.metaKey,n.shiftKey)&&o),o},null,null)),i["\u0275did"](8,671744,null,0,o.n,[o.l,o.a,l.LocationStrategy],{routerLink:[0,"routerLink"]},null),i["\u0275pad"](9,1),(e()(),i["\u0275ted"](-1,null,["Home"])),(e()(),i["\u0275eld"](11,0,null,null,2,"li",[["class","breadcrumb-item active"]],null,null,null,null,null)),(e()(),i["\u0275eld"](12,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null)),(e()(),i["\u0275ted"](13,null,[" ",""]))],function(e,t){var n=e(t,9,0,"/dashboard");e(t,8,0,n)},function(e,t){var n=t.component;e(t,3,0,n.heading),e(t,7,0,i["\u0275nov"](t,8).target,i["\u0275nov"](t,8).href),e(t,12,0,i["\u0275inlineInterpolate"](1,"fa ",n.icon,"")),e(t,13,0,n.heading)})}},sdDj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DomHandler=function(){function e(){}return e.addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},e.addMultipleClasses=function(e,t){if(e.classList)for(var n=t.split(" "),i=0;i<n.length;i++)e.classList.add(n[i]);else for(n=t.split(" "),i=0;i<n.length;i++)e.className+=" "+n[i]},e.removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},e.hasClass=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},e.siblings=function(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})},e.find=function(e,t){return Array.from(e.querySelectorAll(t))},e.findSingle=function(e,t){return e.querySelector(t)},e.index=function(e){for(var t=e.parentNode.childNodes,n=0,i=0;i<t.length;i++){if(t[i]==e)return n;1==t[i].nodeType&&n++}return-1},e.indexWithinGroup=function(e,t){for(var n=e.parentNode.childNodes,i=0,o=0;o<n.length;o++){if(n[o]==e)return i;n[o].attributes&&n[o].attributes[t]&&1==n[o].nodeType&&i++}return-1},e.relativePosition=function(e,t){var n,i,o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=t.offsetHeight,r=t.getBoundingClientRect(),s=this.getViewport();r.top+l+o.height>s.height?r.top+(n=-1*o.height)<0&&(n=0):n=l,i=o.width>s.width?-1*r.left:r.left+o.width>s.width?-1*(r.left+o.width-s.width):0,e.style.top=n+"px",e.style.left=i+"px"},e.absolutePosition=function(e,t){var n,i,o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=o.height,r=o.width,s=t.offsetHeight,a=t.offsetWidth,p=t.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),c=this.getViewport();p.top+s+l>c.height?(n=p.top+u-l)<0&&(n=0+u):n=s+p.top+u,i=p.left+a+r>c.width?p.left+d+a-r:p.left+d,e.style.top=n+"px",e.style.left=i+"px"},e.getHiddenElementOuterHeight=function(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t},e.getHiddenElementOuterWidth=function(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t},e.getHiddenElementDimensions=function(e){var t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t},e.scrollInView=function(e,t){var n=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),l=o?parseFloat(o):0,r=e.getBoundingClientRect(),s=t.getBoundingClientRect().top+document.body.scrollTop-(r.top+document.body.scrollTop)-i-l,a=e.scrollTop,p=e.clientHeight,u=this.getOuterHeight(t);s<0?e.scrollTop=a+s:s+u>p&&(e.scrollTop=a+s-p+u)},e.fadeIn=function(e,t){e.style.opacity=0;var n=+new Date,i=0,o=function(){i=+e.style.opacity.replace(",",".")+((new Date).getTime()-n)/t,e.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()},e.fadeOut=function(e,t){var n=1,i=50/t,o=setInterval(function(){(n-=i)<=0&&(n=0,clearInterval(o)),e.style.opacity=n},50)},e.getWindowScrollTop=function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},e.getWindowScrollLeft=function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},e.matches=function(e,t){var n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(e){return-1!==[].indexOf.call(document.querySelectorAll(e),this)}).call(e,t)},e.getOuterWidth=function(e,t){var n=e.offsetWidth;if(t){var i=getComputedStyle(e);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n},e.getHorizontalPadding=function(e){var t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)},e.getHorizontalMargin=function(e){var t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)},e.innerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+(parseFloat(n.paddingLeft)+parseFloat(n.paddingRight))},e.width=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t-(parseFloat(n.paddingLeft)+parseFloat(n.paddingRight))},e.getInnerHeight=function(e){var t=e.offsetHeight,n=getComputedStyle(e);return t+(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom))},e.getOuterHeight=function(e,t){var n=e.offsetHeight;if(t){var i=getComputedStyle(e);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n},e.getHeight=function(e){var t=e.offsetHeight,n=getComputedStyle(e);return t-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth))},e.getWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t-(parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth))},e.getViewport=function(){var e=window,t=document,n=t.documentElement,i=t.getElementsByTagName("body")[0];return{width:e.innerWidth||n.clientWidth||i.clientWidth,height:e.innerHeight||n.clientHeight||i.clientHeight}},e.getOffset=function(e){var t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}},e.replaceElementWith=function(e,t){var n=e.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(t,e)},e.getUserAgent=function(){return navigator.userAgent},e.isIE=function(){var e=window.navigator.userAgent;return e.indexOf("MSIE ")>0||(e.indexOf("Trident/")>0?(e.indexOf("rv:"),!0):e.indexOf("Edge/")>0)},e.isIOS=function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},e.appendChild=function(e,t){if(this.isElement(t))t.appendChild(e);else{if(!t.el||!t.el.nativeElement)throw"Cannot append "+t+" to "+e;t.el.nativeElement.appendChild(e)}},e.removeChild=function(e,t){if(this.isElement(t))t.removeChild(e);else{if(!t.el||!t.el.nativeElement)throw"Cannot remove "+e+" from "+t;t.el.nativeElement.removeChild(e)}},e.isElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},e.calculateScrollbarWidth=function(){if(null!==this.calculatedScrollbarWidth)return this.calculatedScrollbarWidth;var e=document.createElement("div");e.className="ui-scrollbar-measure",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t},e.calculateScrollbarHeight=function(){if(null!==this.calculatedScrollbarHeight)return this.calculatedScrollbarHeight;var e=document.createElement("div");e.className="ui-scrollbar-measure",document.body.appendChild(e);var t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t},e.invokeElementMethod=function(e,t,n){e[t].apply(e,n)},e.clearSelection=function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(e){}},e.getBrowser=function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},e.resolveUserAgent=function(){var e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.isInteger=function(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},e.isHidden=function(e){return null===e.offsetParent},e.zindex=1e3,e.calculatedScrollbarWidth=null,e.calculatedScrollbarHeight=null,e}()}}]);