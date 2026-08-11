import{$ as y,$a as it,A as q,Ba as nt,C as d,D as B,E as H,Ea as at,Eb as ft,G as g,H as A,I as Z,J as Q,K as U,L as W,Lb as ht,M as K,Mb as _t,Q as X,R as l,S as m,T as G,Z as $,a as h,ab as ot,ba as M,bb as st,cb as rt,d as p,db as ct,ea as J,eb as R,f as P,fa as D,ga as E,ia as Y,ja as u,kb as T,la as _,lb as lt,mb as mt,nb as I,o as F,ob as dt,p as x,pa as tt,pb as pt,q as w,qb as ut,r as o,s as N,t as L,v,w as z,x as V,za as et}from"./chunk-JO3SVKCW.js";function xt(a,s){if(a&1){let t=$();l(0,"div",1)(1,"button",2),y("click",function(){N(t);let n=M();return L(n.action())}),u(2),m()()}if(a&2){let t=M();d(2),_(" ",t.data.action," ")}}var At=["label"];function Ct(a,s){}var St=Math.pow(2,31)-1,f=class{_overlayRef;instance;containerInstance;_afterDismissed=new p;_afterOpened=new p;_onAction=new p;_durationTimeoutId;_dismissedByAction=!1;constructor(s,t){this._overlayRef=t,this.containerInstance=s,s._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(s){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(s,St))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},C=new w("MatSnackBarData"),b=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},wt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),Bt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),Mt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=A({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),Dt=(()=>{class a{snackBarRef=o(f);data=o(C);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(l(0,"div",0),u(1),m(),W(2,xt,3,1,"div",1)),e&2&&(d(),_(" ",n.data.message,`
`),d(),K(n.hasAction?2:-1))},dependencies:[ft,wt,Bt,Mt],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return a})(),O="_mat-snack-bar-enter",j="_mat-snack-bar-exit",Et=(()=>{class a extends mt{_ngZone=o(V);_elementRef=o(q);_changeDetectorRef=o(et);_platform=o(it);_animationsDisabled=R();snackBarConfig=o(b);_document=o(z);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=o(v);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new p;_onExit=new p;_onEnter=new p;_animationState="void";_live;_label;_role;_liveElementId=o(rt).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===j?this._completeExit():t===O&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?B(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(O)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(O)},200)))}exit(){return this._destroyed?P(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?B(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(j)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(j),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(r=>t.classList.add(r)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,i="mdc-snackbar__label";n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let i=e[n],r=i.getAttribute("aria-owns");this._trackedModals.add(i),r?r.indexOf(t)===-1&&i.setAttribute("aria-owns",r+" "+t):i.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),n=t.querySelector("[aria-live]");if(e&&n){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(i=document.activeElement),e.removeAttribute("aria-hidden"),n.appendChild(e),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&J(I,7)(At,7),e&2){let i;D(i=E())&&(n._portalOutlet=i.first),D(i=E())&&(n._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,n){e&1&&y("animationend",function(r){return n.onAnimationEnd(r.animationName)})("animationcancel",function(r){return n.onAnimationEnd(r.animationName)}),e&2&&Y("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[Z],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(l(0,"div",1)(1,"div",2,0)(3,"div",3),Q(4,Ct,0,0,"ng-template",4),m(),G(5,"div"),m()()),e&2&&(d(5),U("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[I],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return a})(),Rt=new w("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new b}),kt=(()=>{class a{_live=o(st);_injector=o(v);_breakpointObserver=o(ot);_parentSnackBar=o(a,{optional:!0,skipSelf:!0});_defaultConfig=o(Rt);_animationsDisabled=R();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Dt;snackBarContainerComponent=Et;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let i=h(h({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=v.create({parent:n||this._injector,providers:[{provide:b,useValue:e}]}),r=new T(this.snackBarContainerComponent,e.viewContainerRef,i),c=t.attach(r);return c.instance.snackBarConfig=e,c.instance}_attach(t,e){let n=h(h(h({},new b),this._defaultConfig),e),i=this._createOverlay(n),r=this._attachSnackBarContainer(i,n),c=new f(r,i);if(t instanceof H){let k=new lt(t,null,{$implicit:n.data,snackBarRef:c});c.instance=r.attachTemplatePortal(k)}else{let k=this._createInjector(n,c),gt=new T(t,void 0,k),yt=r.attachComponentPortal(gt);c.instance=yt.instance}return this._breakpointObserver.observe(ct.HandsetPortrait).pipe(F(i.detachments())).subscribe(k=>{i.overlayElement.classList.toggle(this.handsetCssClass,k.matches)}),n.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(c,n),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new dt;e.direction=t.direction;let n=pt(this._injector),i=t.direction==="rtl",r=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!i||t.horizontalPosition==="end"&&i,c=!r&&t.horizontalPosition!=="center";return r?n.left("0"):c?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,e.disableAnimations=this._animationsDisabled,ut(this._injector,e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return v.create({parent:n||this._injector,providers:[{provide:f,useValue:e},{provide:C,useValue:t.data}]})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=x({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Tt=(a,s,t)=>({"bg-emerald-600":a,"bg-red-600":s,"bg-amber-600":t}),S=class a{data=o(C);snackBarRef=o(f);static \u0275fac=function(t){return new(t||a)};static \u0275cmp=g({type:a,selectors:[["app-custom-snackbar"]],decls:9,vars:7,consts:[[1,"flex","items-center","justify-between","gap-3","px-4","py-3.5","rounded-2xl","shadow-xl","text-white","w-full","max-w-sm","mx-auto",3,"ngClass"],[1,"flex","items-center","gap-3","flex-1","min-w-0"],[1,"shrink-0","!w-6","!h-6","!text-[24px]"],[1,"font-semibold","text-sm","leading-snug","tracking-tight","truncate"],["type","button",1,"shrink-0","w-7","h-7","flex","items-center","justify-center","rounded-full","bg-white/10","hover:bg-white/20","active:scale-95","transition-all","text-white","ml-2",3,"click"],[1,"!w-4","!h-4","!text-[16px]","leading-none","flex","items-center","justify-center"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"div",1)(2,"mat-icon",2),u(3),m(),l(4,"span",3),u(5),m()(),l(6,"button",4),y("click",function(){return e.snackBarRef.dismiss()}),l(7,"mat-icon",5),u(8,"close"),m()()()),t&2&&(X("ngClass",tt(3,Tt,e.data.tipo==="sucesso",e.data.tipo==="erro",e.data.tipo==="aviso")),d(3),_(" ",e.data.tipo==="sucesso"?"check_circle":e.data.tipo==="erro"?"error":"warning"," "),d(2),_(" ",e.data.mensagem," "))},dependencies:[at,nt,_t,ht],encapsulation:2})};var vt=class a{snackBar=o(kt);sucesso(s,t=4e3){this.mostrar(s,"sucesso",t)}erro(s,t=5e3){this.mostrar(s,"erro",t)}aviso(s,t=4e3){this.mostrar(s,"aviso",t)}mostrar(s,t,e){this.snackBar.openFromComponent(S,{data:{mensagem:s,tipo:t},duration:e,horizontalPosition:"center",verticalPosition:"top",panelClass:["custom-snackbar-container"]})}static \u0275fac=function(t){return new(t||a)};static \u0275prov=x({token:a,factory:a.\u0275fac,providedIn:"root"})};export{vt as a};
