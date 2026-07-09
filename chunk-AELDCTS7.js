import{$ as Y,$a as ze,$b as ac,A as Ll,Aa as T,B as Hr,Ba as _,Bb as Yr,C as Ye,Ca as $l,Cb as bt,D as Vl,Da as W,Db as yt,E as Ia,Ea as Ge,Eb as Yi,F as jl,Fa as Wl,Fb as ec,G as Ma,Ga as xi,H as Bl,Ha as Gl,Hb as Fn,I as Pa,Ia as qi,Ib as tc,J as Ur,Ja as ql,Jb as fe,K as Me,Ka as z,Kb as Ci,L as _t,La as q,Lb as k,M as X,Ma as K,Mb as Ve,N as zl,Na as Kl,Nb as ic,O as Zt,Oa as Yl,Ob as Xr,P as $r,Pa as Xl,Pb as La,Q as vt,Qa as re,Qb as nc,R as M,Ra as C,Rb as Qr,S as R,Sa as A,T as b,Ta as de,U as Mn,Ua as Be,Ub as rc,V as d,Va as qe,W as ei,Wa as ot,Wb as oc,X as bi,Y as yi,Yb as Jr,Z as Je,Za as Pe,_ as Wr,_a as Ki,a as j,aa as J,ab as Q,b as je,ba as $,bb as Ql,c as Ie,ca as G,cb as ie,d as Ot,da as Gr,db as se,e as Il,eb as H,f as x,fa as Ce,fb as Ke,g as Qt,ga as wi,gb as ke,h as _i,ha as le,hb as O,i as Ra,ia as ce,ib as I,j as Ta,ja as D,jb as Jl,k as Ml,ka as Pn,kb as Zl,l as vi,la as qr,lb as Na,m as Pl,ma as Hl,mb as It,n as On,na as Kr,nb as ii,o as Re,oa as Ul,ob as B,p as Fl,pa as ti,pb as Xe,q as Oa,qb as He,r as me,ra as S,rb as Mt,s as gt,sa as Se,sb as ni,t as Nl,ta as Le,u as Jt,ua as Ze,v as zr,va as pe,wa as ae,x as Ae,xa as We,xb as Z,y as xe,ya as Fa,z as In,za as N}from"./chunk-XYLI7TMF.js";var fc=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(ae(pe),ae(D))};static \u0275dir=_({type:n})}return n})(),Zu=(()=>{class n extends fc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,features:[W]})}return n})(),en=new b("");var em={provide:en,useExisting:vt(()=>gc),multi:!0};function tm(){let n=La()?La().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var im=new b(""),gc=(()=>{class n extends fc{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!tm())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(ae(pe),ae(D),ae(im,8))};static \u0275dir=_({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&Q("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Z([em]),W]})}return n})();function za(n){return n==null||Ha(n)===0}function Ha(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var lo=new b(""),co=new b(""),nm=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ri=class{static min(i){return rm(i)}static max(i){return om(i)}static required(i){return am(i)}static requiredTrue(i){return sm(i)}static email(i){return lm(i)}static minLength(i){return cm(i)}static maxLength(i){return dm(i)}static pattern(i){return hm(i)}static nullValidator(i){return _c()}static compose(i){return Cc(i)}static composeAsync(i){return Sc(i)}};function rm(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function om(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function am(n){return za(n.value)?{required:!0}:null}function sm(n){return n.value===!0?null:{required:!0}}function lm(n){return za(n.value)||nm.test(n.value)?null:{email:!0}}function cm(n){return i=>{let e=i.value?.length??Ha(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function dm(n){return i=>{let e=i.value?.length??Ha(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function hm(n){if(!n)return _c;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(za(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function _c(n){return null}function vc(n){return n!=null}function bc(n){return Gl(n)?On(n):n}function yc(n){let i={};return n.forEach(e=>{i=e!=null?j(j({},i),e):i}),Object.keys(i).length===0?null:i}function wc(n,i){return i.map(e=>e(n))}function um(n){return!n.validate}function xc(n){return n.map(i=>um(i)?i:e=>i.validate(e))}function Cc(n){if(!n)return null;let i=n.filter(vc);return i.length==0?null:function(e){return yc(wc(e,i))}}function Ua(n){return n!=null?Cc(xc(n)):null}function Sc(n){if(!n)return null;let i=n.filter(vc);return i.length==0?null:function(e){let t=wc(e,i).map(bc);return zr(t).pipe(me(yc))}}function $a(n){return n!=null?Sc(xc(n)):null}function sc(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function kc(n){return n._rawValidators}function Ec(n){return n._rawAsyncValidators}function Va(n){return n?Array.isArray(n)?n:[n]:[]}function eo(n,i){return Array.isArray(n)?n.includes(i):n===i}function lc(n,i){let e=Va(i);return Va(n).forEach(r=>{eo(e,r)||e.push(r)}),e}function cc(n,i){return Va(i).filter(e=>!eo(n,e))}var to=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Ua(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=$a(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Pt=class extends to{name;get formDirective(){return null}get path(){return null}},et=class extends to{_parent=null;name=null;valueAccessor=null},io=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var hb=(()=>{class n extends io{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(ae(et,2))};static \u0275dir=_({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&B("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[W]})}return n})(),ub=(()=>{class n extends io{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(ae(Pt,10))};static \u0275dir=_({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&B("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[W]})}return n})();var Nn="VALID",Zr="INVALID",Xi="PENDING",Ln="DISABLED",oi=class{},no=class extends oi{value;source;constructor(i,e){super(),this.value=i,this.source=e}},jn=class extends oi{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Bn=class extends oi{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Qi=class extends oi{status;source;constructor(i,e){super(),this.status=i,this.source=e}},ro=class extends oi{source;constructor(i){super(),this.source=i}},Hn=class extends oi{source;constructor(i){super(),this.source=i}};function Wa(n){return(ho(n)?n.validators:n)||null}function mm(n){return Array.isArray(n)?Ua(n):n||null}function Ga(n,i){return(ho(i)?i.asyncValidators:n)||null}function pm(n){return Array.isArray(n)?$a(n):n||null}function ho(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Dc(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new $r(1e3,"");if(!t[e])throw new $r(1001,"")}function Ac(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new $r(-1002,"")})}var Ji=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return bt(this.statusReactive)}set status(i){bt(()=>this.statusReactive.set(i))}_status=yt(()=>this.statusReactive());statusReactive=Ce(void 0);get valid(){return this.status===Nn}get invalid(){return this.status===Zr}get pending(){return this.status===Xi}get disabled(){return this.status===Ln}get enabled(){return this.status!==Ln}errors;get pristine(){return bt(this.pristineReactive)}set pristine(i){bt(()=>this.pristineReactive.set(i))}_pristine=yt(()=>this.pristineReactive());pristineReactive=Ce(!0);get dirty(){return!this.pristine}get touched(){return bt(this.touchedReactive)}set touched(i){bt(()=>this.touchedReactive.set(i))}_touched=yt(()=>this.touchedReactive());touchedReactive=Ce(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(lc(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(lc(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(cc(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(cc(i,this._rawAsyncValidators))}hasValidator(i){return eo(this._rawValidators,i)}hasAsyncValidator(i){return eo(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(je(j({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Bn(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Bn(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(je(j({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new jn(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new jn(!0,t))}markAsPending(i={}){this.status=Xi;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Qi(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(je(j({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ln,this.errors=null,this._forEachChild(r=>{r.disable(je(j({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new no(this.value,t)),this._events.next(new Qi(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(je(j({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Nn,this._forEachChild(t=>{t.enable(je(j({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(je(j({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Nn||this.status===Xi)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new no(this.value,e)),this._events.next(new Qi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(je(j({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ln:Nn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Xi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=bc(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new Qi(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new $,this.statusChanges=new $}_calculateStatus(){return this._allControlsDisabled()?Ln:this.errors?Zr:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Xi)?Xi:this._anyControlsHaveStatus(Zr)?Zr:Nn}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new jn(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Bn(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){ho(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=mm(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=pm(this._rawAsyncValidators)}},Zi=class extends Ji{constructor(i,e,t){super(Wa(e),Ga(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Ac(this,!0,i),Object.keys(i).forEach(t=>{Dc(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this.controls[t];r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,je(j({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Hn(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var ja=class extends Zi{};var Un=new b("",{factory:()=>uo}),uo="always";function Rc(n,i){return[...i.path,n]}function oo(n,i,e=uo){qa(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),gm(n,i),vm(n,i),_m(n,i),fm(n,i)}function dc(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),so(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ao(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function fm(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function qa(n,i){let e=kc(n);i.validator!==null?n.setValidators(sc(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=Ec(n);i.asyncValidator!==null?n.setAsyncValidators(sc(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();ao(i._rawValidators,r),ao(i._rawAsyncValidators,r)}function so(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=kc(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=Ec(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return ao(i._rawValidators,t),ao(i._rawAsyncValidators,t),e}function gm(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Tc(n,i)})}function _m(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Tc(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function Tc(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function vm(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Oc(n,i){n==null,qa(n,i)}function bm(n,i){return so(n,i)}function Ic(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function ym(n){return Object.getPrototypeOf(n.constructor)===Zu}function Mc(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Pc(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(o=>{o.constructor===gc?e=o:ym(o)?t=o:r=o}),r||t||e||null}function wm(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var xm={provide:Pt,useExisting:vt(()=>Si)},Vn=Promise.resolve(),Si=(()=>{class n extends Pt{callSetDisabledState;get submitted(){return bt(this.submittedReactive)}_submitted=yt(()=>this.submittedReactive());submittedReactive=Ce(!1);_directives=new Set;form;ngSubmit=new $;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Zi({},Ua(e),$a(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Vn.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),oo(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Vn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Vn.then(()=>{let t=this._findContainer(e.path),r=new Zi({});Oc(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Vn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Vn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Mc(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ro(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(ae(lo,10),ae(co,10),ae(Un,8))};static \u0275dir=_({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&Q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Z([xm]),W]})}return n})();function hc(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function uc(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var zn=class extends Ji{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(Wa(e),Ga(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ho(e)&&(e.nonNullable||e.initialValueIsDefault)&&(uc(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Hn(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){hc(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){hc(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){uc(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Cm=n=>n instanceof zn;var Sm={provide:et,useExisting:vt(()=>km)},mc=Promise.resolve(),km=(()=>{class n extends et{_changeDetectorRef;callSetDisabledState;control=new zn;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new $;constructor(e,t,r,o,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=Pc(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Ic(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){oo(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){mc.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&k(t);mc.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Rc(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(ae(Pt,9),ae(lo,10),ae(co,10),ae(en,10),ae(fe,8),ae(Un,8))};static \u0275dir=_({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Z([Sm]),W,le]})}return n})();var pb=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var Ba=class extends Ji{constructor(i,e,t){super(Wa(e),Ga(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Ac(this,!1,i),i.forEach((t,r)=>{Dc(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],je(j({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Hn(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Em=(()=>{class n extends Pt{callSetDisabledState;get submitted(){return bt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=yt(()=>this._submittedReactive());_submittedReactive=Ce(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(so(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return oo(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){dc(e.control||null,e,!1),wm(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Mc(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ro(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(dc(t||null,e),Cm(r)&&(oo(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Oc(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&bm(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){qa(this.form,this),this._oldForm&&so(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(ae(lo,10),ae(co,10),ae(Un,8))};static \u0275dir=_({type:n,features:[W,le]})}return n})();var Fc=new b("");var Dm={provide:et,useExisting:vt(()=>Am)},Am=(()=>{class n extends et{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new $;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=Pc(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Ic(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Rc(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(ae(Pt,13),ae(lo,10),ae(co,10),ae(en,10),ae(Fc,8))};static \u0275dir=_({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Z([Dm]),W,le]})}return n})();var Rm={provide:Pt,useExisting:vt(()=>ki)},ki=(()=>{class n extends Em{form=null;ngSubmit=new $;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&Q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Z([Rm]),W]})}return n})();var Nc=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({})}return n})();function pc(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var fb=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return pc(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new Zi(r,o)}record(e,t=null){let r=this._reduceControls(e);return new ja(r,t)}control(e,t,r){let o={};return this.useNonNullable?(pc(t)?o=t:(o.validators=t,o.asyncValidators=r),new zn(e,je(j({},o),{nonNullable:!0}))):new zn(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new Ba(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof zn)return e;if(e instanceof Ji)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gb=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Un,useValue:e.callSetDisabledState??uo}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[Nc]})}return n})(),_b=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Fc,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Un,useValue:e.callSetDisabledState??uo}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[Nc]})}return n})();var Lc=n=>n?(...i)=>n(...i):(...i)=>fetch(...i);var tn=class extends Error{constructor(i,e="FunctionsError",t){super(i),this.name=e,this.context=t}toJSON(){return{name:this.name,message:this.message,context:this.context}}},$n=class extends tn{constructor(i){super("Failed to send a request to the Edge Function","FunctionsFetchError",i)}},nn=class extends tn{constructor(i){super("Relay Error invoking the Edge Function","FunctionsRelayError",i)}},rn=class extends tn{constructor(i){super("Edge Function returned a non-2xx status code","FunctionsHttpError",i)}},mo=(function(n){return n.Any="any",n.ApNortheast1="ap-northeast-1",n.ApNortheast2="ap-northeast-2",n.ApSouth1="ap-south-1",n.ApSoutheast1="ap-southeast-1",n.ApSoutheast2="ap-southeast-2",n.CaCentral1="ca-central-1",n.EuCentral1="eu-central-1",n.EuWest1="eu-west-1",n.EuWest2="eu-west-2",n.EuWest3="eu-west-3",n.SaEast1="sa-east-1",n.UsEast1="us-east-1",n.UsWest1="us-west-1",n.UsWest2="us-west-2",n})(mo||{});var Wn=class{constructor(i,{headers:e={},customFetch:t,region:r=mo.Any}={}){this.url=i,this.headers=e,this.region=r,this.fetch=Lc(t)}setAuth(i){this.headers.Authorization=`Bearer ${i}`}invoke(i){return Pl(this,arguments,void 0,function*(e,t={}){var r;let o,a;try{let{headers:s,method:l,body:c,signal:h,timeout:u}=t,p={},{region:m}=t;m||(m=this.region);let f=new URL(`${this.url}/${e}`);m&&m!=="any"&&(p["x-region"]=m,f.searchParams.set("forceFunctionRegion",m));let g,w=!!s&&Object.keys(s).some($e=>$e.toLowerCase()==="content-type");c&&!w?typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(p["Content-Type"]="application/octet-stream",g=c):typeof c=="string"?(p["Content-Type"]="text/plain",g=c):typeof FormData<"u"&&c instanceof FormData?g=c:(p["Content-Type"]="application/json",g=JSON.stringify(c)):c&&typeof c!="string"&&!(typeof Blob<"u"&&c instanceof Blob)&&!(c instanceof ArrayBuffer)&&!(typeof FormData<"u"&&c instanceof FormData)?g=JSON.stringify(c):g=c;let v=h;u&&(a=new AbortController,o=setTimeout(()=>a.abort(),u),h?(v=a.signal,h.addEventListener("abort",()=>a.abort())):v=a.signal);let L=yield this.fetch(f.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},p),this.headers),s),body:g,signal:v}).catch($e=>{throw new $n($e)}),P=L.headers.get("x-relay-error");if(P&&P==="true")throw new nn(L);if(!L.ok)throw new rn(L);let F=((r=L.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),ne;return F==="application/json"?ne=yield L.json():F==="application/octet-stream"||F==="application/pdf"?ne=yield L.blob():F==="text/event-stream"?ne=L:F==="multipart/form-data"?ne=yield L.formData():ne=yield L.text(),{data:ne,error:null,response:L}}catch(s){return{data:null,error:s,response:s instanceof rn||s instanceof nn?s.context:void 0}}finally{o&&clearTimeout(o)}})}};var Vc=n=>Math.min(1e3*2**n,3e4),Tm=[520,503],Hc=["GET","HEAD","OPTIONS"],Ka=class extends Error{constructor(n){super(n.message),this.name="PostgrestError",this.details=n.details,this.hint=n.hint,this.code=n.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function jc(n,i){return new Promise(e=>{if(i?.aborted){e();return}let t=setTimeout(()=>{i?.removeEventListener("abort",r),e()},n);function r(){clearTimeout(t),e()}i?.addEventListener("abort",r)})}function Om(n,i,e,t){return!(!t||e>=3||!Hc.includes(n)||!Tm.includes(i))}var Im=class{constructor(n){var i,e,t,r,o;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=n.method,this.url=n.url,this.headers=new Headers(n.headers),this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=(i=n.shouldThrowOnError)!==null&&i!==void 0?i:!1,this.signal=n.signal,this.isMaybeSingle=(e=n.isMaybeSingle)!==null&&e!==void 0?e:!1,this.shouldStripNulls=(t=n.shouldStripNulls)!==null&&t!==void 0?t:!1,this.urlLengthLimit=(r=n.urlLengthLimit)!==null&&r!==void 0?r:8e3,this.retryEnabled=(o=n.retry)!==null&&o!==void 0?o:!0,n.fetch?this.fetch=n.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(n,i){return this.headers=new Headers(this.headers),this.headers.set(n,i),this}retry(n){return this.retryEnabled=n,this}then(n,i){var e=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){let a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}let t=this.fetch,o=(async()=>{let a=0;for(;;){let c={};e.headers.forEach((u,p)=>{c[p]=u}),a>0&&(c["X-Retry-Count"]=String(a));let h;try{h=await t(e.url.toString(),{method:e.method,headers:c,body:JSON.stringify(e.body,(u,p)=>typeof p=="bigint"?p.toString():p),signal:e.signal})}catch(u){if(u?.name==="AbortError"||u?.code==="ABORT_ERR"||!Hc.includes(e.method))throw u;if(e.retryEnabled&&a<3){let p=Vc(a);a++,await jc(p,e.signal);continue}throw u}if(Om(e.method,h.status,a,e.retryEnabled)){var s,l;let u=(s=(l=h.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&s!==void 0?s:null,p=u!==null?Math.max(0,parseInt(u,10)||0)*1e3:Vc(a);await h.text(),a++,await jc(p,e.signal);continue}return await e.processResponse(h)}})();return this.shouldThrowOnError||(o=o.catch(a=>{var s;let l="",c="",h="",u=a?.cause;if(u){var p,m,f,g;let L=(p=u?.message)!==null&&p!==void 0?p:"",P=(m=u?.code)!==null&&m!==void 0?m:"";l=`${(f=a?.name)!==null&&f!==void 0?f:"FetchError"}: ${a?.message}`,l+=`

Caused by: ${(g=u?.name)!==null&&g!==void 0?g:"Error"}: ${L}`,P&&(l+=` (${P})`),u?.stack&&(l+=`
${u.stack}`)}else{var w;l=(w=a?.stack)!==null&&w!==void 0?w:""}let v=this.url.toString().length;return a?.name==="AbortError"||a?.code==="ABORT_ERR"?(h="",c="Request was aborted (timeout or manual cancellation)",v>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${v} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(u?.name==="HeadersOverflowError"||u?.code==="UND_ERR_HEADERS_OVERFLOW")&&(h="",c="HTTP headers exceeded server limits (typically 16KB)",v>this.urlLengthLimit&&(c+=`. Your request URL is ${v} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(s=a?.name)!==null&&s!==void 0?s:"FetchError"}: ${a?.message}`,details:l,hint:c,code:h},data:null,count:null,status:0,statusText:""}})),o.then(n,i)}async processResponse(n){var i=this;let e=null,t=null,r=null,o=n.status,a=n.statusText;if(n.ok){var s,l;if(i.method!=="HEAD"){var c;let p=await n.text();if(p!=="")if(i.headers.get("Accept")==="text/csv")t=p;else if(i.headers.get("Accept")&&(!((c=i.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))t=p;else try{t=JSON.parse(p)}catch{if(e={message:p},t=null,i.shouldThrowOnError)throw new Ka({message:p,details:"",hint:"",code:""})}}let h=(s=i.headers.get("Prefer"))===null||s===void 0?void 0:s.match(/count=(exact|planned|estimated)/),u=(l=n.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");h&&u&&u.length>1&&(r=parseInt(u[1])),i.isMaybeSingle&&Array.isArray(t)&&(t.length>1?(e={code:"PGRST116",details:`Results contain ${t.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},t=null,r=null,o=406,a="Not Acceptable"):t.length===1?t=t[0]:t=null)}else{let h=await n.text();try{e=JSON.parse(h),Array.isArray(e)&&n.status===404&&(t=[],e=null,o=200,a="OK")}catch{n.status===404&&h===""?(o=204,a="No Content"):e={message:h}}if(e&&i.shouldThrowOnError)throw new Ka(e)}return{success:e===null,error:e,data:t,count:r,status:o,statusText:a}}returns(){return this}overrideTypes(){return this}},Mm=class extends Im{throwOnError(){return super.throwOnError()}select(n){let i=!1,e=(n??"*").split("").map(t=>/\s/.test(t)&&!i?"":(t==='"'&&(i=!i),t)).join("");return this.url.searchParams.set("select",e),this.headers.append("Prefer","return=representation"),this}order(n,{ascending:i=!0,nullsFirst:e,foreignTable:t,referencedTable:r=t}={}){let o=r?`${r}.order`:"order",a=this.url.searchParams.get(o);return this.url.searchParams.set(o,`${a?`${a},`:""}${n}.${i?"asc":"desc"}${e===void 0?"":e?".nullsfirst":".nullslast"}`),this}limit(n,{foreignTable:i,referencedTable:e=i}={}){let t=typeof e>"u"?"limit":`${e}.limit`;return this.url.searchParams.set(t,`${n}`),this}range(n,i,{foreignTable:e,referencedTable:t=e}={}){let r=typeof t>"u"?"offset":`${t}.offset`,o=typeof t>"u"?"limit":`${t}.limit`;return this.url.searchParams.set(r,`${n}`),this.url.searchParams.set(o,`${i-n+1}`),this}abortSignal(n){return this.signal=n,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:n=!1,verbose:i=!1,settings:e=!1,buffers:t=!1,wal:r=!1,format:o="text"}={}){var a;let s=[n?"analyze":null,i?"verbose":null,e?"settings":null,t?"buffers":null,r?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${o}; for="${l}"; options=${s};`),o==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(n){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${n}`),this}},Bc=new RegExp("[,()]"),on=class extends Mm{throwOnError(){return super.throwOnError()}eq(n,i){return this.url.searchParams.append(n,`eq.${i}`),this}neq(n,i){return this.url.searchParams.append(n,`neq.${i}`),this}gt(n,i){return this.url.searchParams.append(n,`gt.${i}`),this}gte(n,i){return this.url.searchParams.append(n,`gte.${i}`),this}lt(n,i){return this.url.searchParams.append(n,`lt.${i}`),this}lte(n,i){return this.url.searchParams.append(n,`lte.${i}`),this}like(n,i){return this.url.searchParams.append(n,`like.${i}`),this}likeAllOf(n,i){return this.url.searchParams.append(n,`like(all).{${i.join(",")}}`),this}likeAnyOf(n,i){return this.url.searchParams.append(n,`like(any).{${i.join(",")}}`),this}ilike(n,i){return this.url.searchParams.append(n,`ilike.${i}`),this}ilikeAllOf(n,i){return this.url.searchParams.append(n,`ilike(all).{${i.join(",")}}`),this}ilikeAnyOf(n,i){return this.url.searchParams.append(n,`ilike(any).{${i.join(",")}}`),this}regexMatch(n,i){return this.url.searchParams.append(n,`match.${i}`),this}regexIMatch(n,i){return this.url.searchParams.append(n,`imatch.${i}`),this}is(n,i){return this.url.searchParams.append(n,`is.${i}`),this}isDistinct(n,i){return this.url.searchParams.append(n,`isdistinct.${i}`),this}in(n,i){let e=Array.from(new Set(i)).map(t=>typeof t=="string"&&Bc.test(t)?`"${t}"`:`${t}`).join(",");return this.url.searchParams.append(n,`in.(${e})`),this}notIn(n,i){let e=Array.from(new Set(i)).map(t=>typeof t=="string"&&Bc.test(t)?`"${t}"`:`${t}`).join(",");return this.url.searchParams.append(n,`not.in.(${e})`),this}contains(n,i){return typeof i=="string"?this.url.searchParams.append(n,`cs.${i}`):Array.isArray(i)?this.url.searchParams.append(n,`cs.{${i.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(i)}`),this}containedBy(n,i){return typeof i=="string"?this.url.searchParams.append(n,`cd.${i}`):Array.isArray(i)?this.url.searchParams.append(n,`cd.{${i.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(i)}`),this}rangeGt(n,i){return this.url.searchParams.append(n,`sr.${i}`),this}rangeGte(n,i){return this.url.searchParams.append(n,`nxl.${i}`),this}rangeLt(n,i){return this.url.searchParams.append(n,`sl.${i}`),this}rangeLte(n,i){return this.url.searchParams.append(n,`nxr.${i}`),this}rangeAdjacent(n,i){return this.url.searchParams.append(n,`adj.${i}`),this}overlaps(n,i){return typeof i=="string"?this.url.searchParams.append(n,`ov.${i}`):this.url.searchParams.append(n,`ov.{${i.join(",")}}`),this}textSearch(n,i,{config:e,type:t}={}){let r="";t==="plain"?r="pl":t==="phrase"?r="ph":t==="websearch"&&(r="w");let o=e===void 0?"":`(${e})`;return this.url.searchParams.append(n,`${r}fts${o}.${i}`),this}match(n){return Object.entries(n).filter(([i,e])=>e!==void 0).forEach(([i,e])=>{this.url.searchParams.append(i,`eq.${e}`)}),this}not(n,i,e){return this.url.searchParams.append(n,`not.${i}.${e}`),this}or(n,{foreignTable:i,referencedTable:e=i}={}){let t=e?`${e}.or`:"or";return this.url.searchParams.append(t,`(${n})`),this}filter(n,i,e){return this.url.searchParams.append(n,`${i}.${e}`),this}},Pm=class{constructor(n,{headers:i={},schema:e,fetch:t,urlLengthLimit:r=8e3,retry:o}){this.url=n,this.headers=new Headers(i),this.schema=e,this.fetch=t,this.urlLengthLimit=r,this.retry=o}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(n,i){let{head:e=!1,count:t}=i??{},r=e?"HEAD":"GET",o=!1,a=(n??"*").split("").map(c=>/\s/.test(c)&&!o?"":(c==='"'&&(o=!o),c)).join(""),{url:s,headers:l}=this.cloneRequestState();return s.searchParams.set("select",a),t&&l.append("Prefer",`count=${t}`),new on({method:r,url:s,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(n,{count:i,defaultToNull:e=!0}={}){var t;let r="POST",{url:o,headers:a}=this.cloneRequestState();if(i&&a.append("Prefer",`count=${i}`),e||a.append("Prefer","missing=default"),Array.isArray(n)){let s=n.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(s.length>0){let l=[...new Set(s)].map(c=>`"${c}"`);o.searchParams.set("columns",l.join(","))}}return new on({method:r,url:o,headers:a,schema:this.schema,body:n,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(n,{onConflict:i,ignoreDuplicates:e=!1,count:t,defaultToNull:r=!0}={}){var o;let a="POST",{url:s,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${e?"ignore":"merge"}-duplicates`),i!==void 0&&s.searchParams.set("on_conflict",i),t&&l.append("Prefer",`count=${t}`),r||l.append("Prefer","missing=default"),Array.isArray(n)){let c=n.reduce((h,u)=>h.concat(Object.keys(u)),[]);if(c.length>0){let h=[...new Set(c)].map(u=>`"${u}"`);s.searchParams.set("columns",h.join(","))}}return new on({method:a,url:s,headers:l,schema:this.schema,body:n,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(n,{count:i}={}){var e;let t="PATCH",{url:r,headers:o}=this.cloneRequestState();return i&&o.append("Prefer",`count=${i}`),new on({method:t,url:r,headers:o,schema:this.schema,body:n,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:n}={}){var i;let e="DELETE",{url:t,headers:r}=this.cloneRequestState();return n&&r.append("Prefer",`count=${n}`),new on({method:e,url:t,headers:r,schema:this.schema,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Gn(n){"@babel/helpers - typeof";return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Gn(n)}function Fm(n,i){if(Gn(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,i||"default");if(Gn(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function Nm(n){var i=Fm(n,"string");return Gn(i)=="symbol"?i:i+""}function Lm(n,i,e){return(i=Nm(i))in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function zc(n,i){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);i&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,t)}return e}function po(n){for(var i=1;i<arguments.length;i++){var e=arguments[i]!=null?arguments[i]:{};i%2?zc(Object(e),!0).forEach(function(t){Lm(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):zc(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}var Uc=class $c{constructor(i,{headers:e={},schema:t,fetch:r,timeout:o,urlLengthLimit:a=8e3,retry:s}={}){this.url=i,this.headers=new Headers(e),this.schemaName=t,this.urlLengthLimit=a;let l=r??globalThis.fetch;o!==void 0&&o>0?this.fetch=(c,h)=>{let u=new AbortController,p=setTimeout(()=>u.abort(),o),m=h?.signal;if(m){if(m.aborted)return clearTimeout(p),l(c,h);let f=()=>{clearTimeout(p),u.abort()};return m.addEventListener("abort",f,{once:!0}),l(c,po(po({},h),{},{signal:u.signal})).finally(()=>{clearTimeout(p),m.removeEventListener("abort",f)})}return l(c,po(po({},h),{},{signal:u.signal})).finally(()=>clearTimeout(p))}:this.fetch=l,this.retry=s}from(i){if(!i||typeof i!="string"||i.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new Pm(new URL(`${this.url}/${i}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(i){return new $c(this.url,{headers:this.headers,schema:i,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(i,e={},{head:t=!1,get:r=!1,count:o}={}){var a;let s,l=new URL(`${this.url}/rpc/${i}`),c,h=m=>m!==null&&typeof m=="object"&&(!Array.isArray(m)||m.some(h)),u=t&&Object.values(e).some(h);u?(s="POST",c=e):t||r?(s=t?"HEAD":"GET",Object.entries(e).filter(([m,f])=>f!==void 0).map(([m,f])=>[m,Array.isArray(f)?`{${f.join(",")}}`:`${f}`]).forEach(([m,f])=>{l.searchParams.append(m,f)})):(s="POST",c=e);let p=new Headers(this.headers);return u?p.set("Prefer",o?`count=${o},return=minimal`:"return=minimal"):o&&p.set("Prefer",`count=${o}`),new on({method:s,url:l,headers:p,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};var Ya=class{constructor(){}static detectEnvironment(){var i;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<"u"&&typeof e.WebSocket<"u")return{type:"native",wsConstructor:e.WebSocket};let t=typeof global<"u"?global:void 0;if(t&&typeof t.WebSocket<"u")return{type:"native",wsConstructor:t.WebSocket};if(typeof globalThis<"u"&&typeof e.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&e.EdgeRuntime||typeof navigator<"u"&&(!((i=navigator.userAgent)===null||i===void 0)&&i.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};let r=globalThis.process;if(r){let o=r.versions;if(o&&o.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){let i=this.detectEnvironment();if(i.wsConstructor)return i.wsConstructor;let e=i.error||"WebSocket not supported in this environment.";throw i.workaround&&(e+=`

Suggested solution: ${i.workaround}`),new Error(e)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}},Xa=Ya;var Wc="2.110.1";var Gc=`realtime-js/${Wc}`,qc="1.0.0",Qa="2.0.0",Kc=Qa;var Yc=1e4;var Xc=100;var wt={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},fo={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave",access_token:"access_token"};var qn={connecting:"connecting",open:"open",closing:"closing",closed:"closed"};var go=class{constructor(i){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=i??[]}encode(i,e){if(i.event===this.BROADCAST_EVENT&&!(i.payload instanceof ArrayBuffer)&&typeof i.payload.event=="string")return e(this._binaryEncodeUserBroadcastPush(i));let t=[i.join_ref,i.ref,i.topic,i.event,i.payload];return e(JSON.stringify(t))}_binaryEncodeUserBroadcastPush(i){var e;return this._isArrayBuffer((e=i.payload)===null||e===void 0?void 0:e.payload)?this._encodeBinaryUserBroadcastPush(i):this._encodeJsonUserBroadcastPush(i)}_encodeBinaryUserBroadcastPush(i){var e,t;let r=(t=(e=i.payload)===null||e===void 0?void 0:e.payload)!==null&&t!==void 0?t:new ArrayBuffer(0);return this._encodeUserBroadcastPush(i,this.BINARY_ENCODING,r)}_encodeJsonUserBroadcastPush(i){var e,t;let r=(t=(e=i.payload)===null||e===void 0?void 0:e.payload)!==null&&t!==void 0?t:{},a=new TextEncoder().encode(JSON.stringify(r)).buffer;return this._encodeUserBroadcastPush(i,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(i,e,t){var r,o;let a=i.topic,s=(r=i.ref)!==null&&r!==void 0?r:"",l=(o=i.join_ref)!==null&&o!==void 0?o:"",c=i.payload.event,h=this.allowedMetadataKeys?this._pick(i.payload,this.allowedMetadataKeys):{},u=Object.keys(h).length===0?"":JSON.stringify(h);if(l.length>255)throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);if(s.length>255)throw new Error(`ref length ${s.length} exceeds maximum of 255`);if(a.length>255)throw new Error(`topic length ${a.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);if(u.length>255)throw new Error(`metadata length ${u.length} exceeds maximum of 255`);let p=this.USER_BROADCAST_PUSH_META_LENGTH+l.length+s.length+a.length+c.length+u.length,m=new ArrayBuffer(this.HEADER_LENGTH+p),f=new DataView(m),g=0;f.setUint8(g++,this.KINDS.userBroadcastPush),f.setUint8(g++,l.length),f.setUint8(g++,s.length),f.setUint8(g++,a.length),f.setUint8(g++,c.length),f.setUint8(g++,u.length),f.setUint8(g++,e),Array.from(l,v=>f.setUint8(g++,v.charCodeAt(0))),Array.from(s,v=>f.setUint8(g++,v.charCodeAt(0))),Array.from(a,v=>f.setUint8(g++,v.charCodeAt(0))),Array.from(c,v=>f.setUint8(g++,v.charCodeAt(0))),Array.from(u,v=>f.setUint8(g++,v.charCodeAt(0)));var w=new Uint8Array(m.byteLength+t.byteLength);return w.set(new Uint8Array(m),0),w.set(new Uint8Array(t),m.byteLength),w.buffer}decode(i,e){if(this._isArrayBuffer(i)){let t=this._binaryDecode(i);return e(t)}if(typeof i=="string"){let t=JSON.parse(i),[r,o,a,s,l]=t;return e({join_ref:r,ref:o,topic:a,event:s,payload:l})}return e({})}_binaryDecode(i){let e=new DataView(i),t=e.getUint8(0),r=new TextDecoder;if(t===this.KINDS.userBroadcast)return this._decodeUserBroadcast(i,e,r)}_decodeUserBroadcast(i,e,t){let r=e.getUint8(1),o=e.getUint8(2),a=e.getUint8(3),s=e.getUint8(4),l=this.HEADER_LENGTH+4,c=t.decode(i.slice(l,l+r));l=l+r;let h=t.decode(i.slice(l,l+o));l=l+o;let u=t.decode(i.slice(l,l+a));l=l+a;let p=i.slice(l,i.byteLength),m=s===this.JSON_ENCODING?JSON.parse(t.decode(p)):p,f={type:this.BROADCAST_EVENT,event:h,payload:m};return a>0&&(f.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:f}}_isArrayBuffer(i){var e;return i instanceof ArrayBuffer||((e=i?.constructor)===null||e===void 0?void 0:e.name)==="ArrayBuffer"}_pick(i,e){return!i||typeof i!="object"?{}:Object.fromEntries(Object.entries(i).filter(([t])=>e.includes(t)))}};var he=(function(n){return n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange",n})(he||{}),Za=(n,i,e={})=>{var t;let r=(t=e.skipTypes)!==null&&t!==void 0?t:[];return i?Object.keys(i).reduce((o,a)=>(o[a]=Vm(a,n,i,r),o),{}):{}},Vm=(n,i,e,t)=>{let r=i.find(s=>s.name===n),o=r?.type,a=e[n];return o&&!t.includes(o)?Qc(o,a):Ja(a)},Qc=(n,i)=>{if(n.charAt(0)==="_"){let e=n.slice(1,n.length);return Hm(i,e)}switch(n){case he.bool:return jm(i);case he.float4:case he.float8:case he.int2:case he.int4:case he.int8:case he.numeric:case he.oid:return Bm(i);case he.json:case he.jsonb:return zm(i);case he.timestamp:return Um(i);case he.abstime:case he.date:case he.daterange:case he.int4range:case he.int8range:case he.money:case he.reltime:case he.text:case he.time:case he.timestamptz:case he.timetz:case he.tsrange:case he.tstzrange:return Ja(i);default:return Ja(i)}},Ja=n=>n,jm=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},Bm=n=>{if(typeof n=="string"){let i=parseFloat(n);if(!Number.isNaN(i))return i}return n},zm=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch{return n}return n},Hm=(n,i)=>{if(typeof n!="string")return n;let e=n.length-1,t=n[e];if(n[0]==="{"&&t==="}"){let o,a=n.slice(1,e);try{o=JSON.parse("["+a+"]")}catch{o=a?a.split(","):[]}return o.map(s=>Qc(i,s))}return n},Um=n=>typeof n=="string"?n.replace(" ","T"):n,_o=n=>{let i=new URL(n);return i.protocol=i.protocol.replace(/^ws/i,"http"),i.pathname=i.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),i.pathname===""||i.pathname==="/"?i.pathname="/api/broadcast":i.pathname=i.pathname+"/api/broadcast",i.href};var Yn=n=>typeof n=="function"?n:function(){return n},Wm=typeof self<"u"?self:null,sn=typeof window<"u"?window:null,xt=Wm||sn||globalThis,Gm="2.0.0",qm=1e4,Km=1e3,Ct={connecting:0,open:1,closing:2,closed:3},Qe={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Ft={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},es={longpoll:"longpoll",websocket:"websocket"},Ym={complete:4},ts="base64url.bearer.phx.",vo=class{constructor(n,i,e,t){this.channel=n,this.event=i,this.payload=e||function(){return{}},this.receivedResp=null,this.timeout=t,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(n){this.timeout=n,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(n,i){return this.hasReceived(n)&&i(this.receivedResp.response),this.recHooks.push({status:n,callback:i}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:n,response:i,_ref:e}){this.recHooks.filter(t=>t.status===n).forEach(t=>t.callback(i))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,n=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=n,this.matchReceive(n)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}trigger(n,i){this.channel.trigger(this.refEvent,{status:n,response:i})}},Jc=class{constructor(n,i){this.callback=n,this.timerCalc=i,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Xm=class{constructor(n,i,e){this.state=Qe.closed,this.topic=n,this.params=Yn(i||{}),this.socket=e,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new vo(this,Ft.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Jc(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Qe.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(t=>t.send()),this.pushBuffer=[]}),this.joinPush.receive("error",t=>{this.state=Qe.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,t),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Qe.closed,this.socket.remove(this)}),this.onError(t=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,t),this.isJoining()&&this.joinPush.reset(),this.state=Qe.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new vo(this,Ft.leave,Yn({}),this.timeout).send(),this.state=Qe.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Ft.reply,(t,r)=>{this.trigger(this.replyEventName(r),t)})}join(n=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=n,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Qe.closed,this.bindings=[]}onClose(n){this.on(Ft.close,n)}onError(n){return this.on(Ft.error,i=>n(i))}on(n,i){let e=this.bindingRef++;return this.bindings.push({event:n,ref:e,callback:i}),e}off(n,i){this.bindings=this.bindings.filter(e=>!(e.event===n&&(typeof i>"u"||i===e.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(n,i,e=this.timeout){if(i=i||{},!this.joinedOnce)throw new Error(`tried to push '${n}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let t=new vo(this,n,function(){return i},e);return this.canPush()?t.send():(t.startTimeout(),this.pushBuffer.push(t)),t}leave(n=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Qe.leaving;let i=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Ft.close,"leave")},e=new vo(this,Ft.leave,Yn({}),n);return e.receive("ok",()=>i()).receive("timeout",()=>i()),e.send(),this.canPush()||e.trigger("ok",{}),e}onMessage(n,i,e){return i}filterBindings(n,i,e){return!0}isMember(n,i,e,t){return this.topic!==n?!1:t&&t!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:n,event:i,payload:e,joinRef:t}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(n=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Qe.joining,this.joinPush.resend(n))}trigger(n,i,e,t){let r=this.onMessage(n,i,e,t);if(i&&!r)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let o=this.bindings.filter(a=>a.event===n&&this.filterBindings(a,i,e));for(let a=0;a<o.length;a++)o[a].callback(r,e,t||this.joinRef())}replyEventName(n){return`chan_reply_${n}`}isClosed(){return this.state===Qe.closed}isErrored(){return this.state===Qe.errored}isJoined(){return this.state===Qe.joined}isJoining(){return this.state===Qe.joining}isLeaving(){return this.state===Qe.leaving}},yo=class{static request(n,i,e,t,r,o,a){if(xt.XDomainRequest){let s=new xt.XDomainRequest;return this.xdomainRequest(s,n,i,t,r,o,a)}else if(xt.XMLHttpRequest){let s=new xt.XMLHttpRequest;return this.xhrRequest(s,n,i,e,t,r,o,a)}else{if(xt.fetch&&xt.AbortController)return this.fetchRequest(n,i,e,t,r,o,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(n,i,e,t,r,o,a){let s={method:n,headers:e,body:t},l=null;if(r){l=new AbortController;let c=setTimeout(()=>l.abort(),r);s.signal=l.signal}return xt.fetch(i,s).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&o?o():a&&a(null)}),l}static xdomainRequest(n,i,e,t,r,o,a){return n.timeout=r,n.open(i,e),n.onload=()=>{let s=this.parseJSON(n.responseText);a&&a(s)},o&&(n.ontimeout=o),n.onprogress=()=>{},n.send(t),n}static xhrRequest(n,i,e,t,r,o,a,s){n.open(i,e,!0),n.timeout=o;for(let[l,c]of Object.entries(t))n.setRequestHeader(l,c);return n.onerror=()=>s&&s(null),n.onreadystatechange=()=>{if(n.readyState===Ym.complete&&s){let l=this.parseJSON(n.responseText);s(l)}},a&&(n.ontimeout=a),n.send(r),n}static parseJSON(n){if(!n||n==="")return null;try{return JSON.parse(n)}catch{return console&&console.log("failed to parse JSON response",n),null}}static serialize(n,i){let e=[];for(var t in n){if(!Object.prototype.hasOwnProperty.call(n,t))continue;let r=i?`${i}[${t}]`:t,o=n[t];typeof o=="object"?e.push(this.serialize(o,r)):e.push(encodeURIComponent(r)+"="+encodeURIComponent(o))}return e.join("&")}static appendParams(n,i){if(Object.keys(i).length===0)return n;let e=n.match(/\?/)?"&":"?";return`${n}${e}${this.serialize(i)}`}},Qm=n=>{let i="",e=new Uint8Array(n),t=e.byteLength;for(let r=0;r<t;r++)i+=String.fromCharCode(e[r]);return btoa(i)},an=class{constructor(n,i){i&&i.length===2&&i[1].startsWith(ts)&&(this.authToken=atob(i[1].slice(ts.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(n),this.readyState=Ct.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(n){return n.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+es.websocket),"$1/"+es.longpoll)}endpointURL(){return yo.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(n,i,e){this.close(n,i,e),this.readyState=Ct.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Ct.open||this.readyState===Ct.connecting}poll(){let n={Accept:"application/json"};this.authToken&&(n["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",n,null,()=>this.ontimeout(),i=>{if(i){var{status:e,token:t,messages:r}=i;if(e===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=t}else e=0;switch(e){case 200:r.forEach(o=>{setTimeout(()=>this.onmessage({data:o}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Ct.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${e}`)}})}send(n){typeof n!="string"&&(n=Qm(n)),this.currentBatch?this.currentBatch.push(n):this.awaitingBatchAck?this.batchBuffer.push(n):(this.currentBatch=[n],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(n){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},n.join(`
`),()=>this.onerror("timeout"),i=>{this.awaitingBatchAck=!1,!i||i.status!==200?(this.onerror(i&&i.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(n,i,e){for(let r of this.reqs)r.abort();this.readyState=Ct.closed;let t=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:n,reason:i,wasClean:e});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",t)):this.onclose(t)}ajax(n,i,e,t,r){let o,a=()=>{this.reqs.delete(o),t()};o=yo.request(n,this.endpointURL(),i,e,this.timeout,a,s=>{this.reqs.delete(o),this.isActive()&&r(s)}),this.reqs.add(o)}},Zc=class Kn{constructor(i,e={}){let t=e.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=i,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(t.state,r=>{let{onJoin:o,onLeave:a,onSync:s}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Kn.syncState(this.state,r,o,a),this.pendingDiffs.forEach(l=>{this.state=Kn.syncDiff(this.state,l,o,a)}),this.pendingDiffs=[],s()}),this.channel.on(t.diff,r=>{let{onJoin:o,onLeave:a,onSync:s}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=Kn.syncDiff(this.state,r,o,a),s())})}onJoin(i){this.caller.onJoin=i}onLeave(i){this.caller.onLeave=i}onSync(i){this.caller.onSync=i}list(i){return Kn.list(this.state,i)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(i,e,t,r){let o=this.clone(i),a={},s={};return this.map(o,(l,c)=>{e[l]||(s[l]=c)}),this.map(e,(l,c)=>{let h=o[l];if(h){let u=c.metas.map(g=>g.phx_ref),p=h.metas.map(g=>g.phx_ref),m=c.metas.filter(g=>p.indexOf(g.phx_ref)<0),f=h.metas.filter(g=>u.indexOf(g.phx_ref)<0);m.length>0&&(a[l]=c,a[l].metas=m),f.length>0&&(s[l]=this.clone(h),s[l].metas=f)}else a[l]=c}),this.syncDiff(o,{joins:a,leaves:s},t,r)}static syncDiff(i,e,t,r){let{joins:o,leaves:a}=this.clone(e);return t||(t=function(){}),r||(r=function(){}),this.map(o,(s,l)=>{let c=i[s];if(i[s]=this.clone(l),c){let h=i[s].metas.map(p=>p.phx_ref),u=c.metas.filter(p=>h.indexOf(p.phx_ref)<0);i[s].metas.unshift(...u)}t(s,c,l)}),this.map(a,(s,l)=>{let c=i[s];if(!c)return;let h=l.metas.map(u=>u.phx_ref);c.metas=c.metas.filter(u=>h.indexOf(u.phx_ref)<0),r(s,c,l),c.metas.length===0&&delete i[s]}),i}static list(i,e){return e||(e=function(t,r){return r}),this.map(i,(t,r)=>e(t,r))}static map(i,e){return Object.getOwnPropertyNames(i).map(t=>e(t,i[t]))}static clone(i){return JSON.parse(JSON.stringify(i))}},bo={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(n,i){if(n.payload.constructor===ArrayBuffer)return i(this.binaryEncode(n));{let e=[n.join_ref,n.ref,n.topic,n.event,n.payload];return i(JSON.stringify(e))}},decode(n,i){if(n.constructor===ArrayBuffer)return i(this.binaryDecode(n));{let[e,t,r,o,a]=JSON.parse(n);return i({join_ref:e,ref:t,topic:r,event:o,payload:a})}},binaryEncode(n){let{join_ref:i,ref:e,event:t,topic:r,payload:o}=n,a=this.META_LENGTH+i.length+e.length+r.length+t.length,s=new ArrayBuffer(this.HEADER_LENGTH+a),l=new DataView(s),c=0;l.setUint8(c++,this.KINDS.push),l.setUint8(c++,i.length),l.setUint8(c++,e.length),l.setUint8(c++,r.length),l.setUint8(c++,t.length),Array.from(i,u=>l.setUint8(c++,u.charCodeAt(0))),Array.from(e,u=>l.setUint8(c++,u.charCodeAt(0))),Array.from(r,u=>l.setUint8(c++,u.charCodeAt(0))),Array.from(t,u=>l.setUint8(c++,u.charCodeAt(0)));var h=new Uint8Array(s.byteLength+o.byteLength);return h.set(new Uint8Array(s),0),h.set(new Uint8Array(o),s.byteLength),h.buffer},binaryDecode(n){let i=new DataView(n),e=i.getUint8(0),t=new TextDecoder;switch(e){case this.KINDS.push:return this.decodePush(n,i,t);case this.KINDS.reply:return this.decodeReply(n,i,t);case this.KINDS.broadcast:return this.decodeBroadcast(n,i,t)}},decodePush(n,i,e){let t=i.getUint8(1),r=i.getUint8(2),o=i.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,s=e.decode(n.slice(a,a+t));a=a+t;let l=e.decode(n.slice(a,a+r));a=a+r;let c=e.decode(n.slice(a,a+o));a=a+o;let h=n.slice(a,n.byteLength);return{join_ref:s,ref:null,topic:l,event:c,payload:h}},decodeReply(n,i,e){let t=i.getUint8(1),r=i.getUint8(2),o=i.getUint8(3),a=i.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,l=e.decode(n.slice(s,s+t));s=s+t;let c=e.decode(n.slice(s,s+r));s=s+r;let h=e.decode(n.slice(s,s+o));s=s+o;let u=e.decode(n.slice(s,s+a));s=s+a;let p=n.slice(s,n.byteLength),m={status:u,response:p};return{join_ref:l,ref:c,topic:h,event:Ft.reply,payload:m}},decodeBroadcast(n,i,e){let t=i.getUint8(1),r=i.getUint8(2),o=this.HEADER_LENGTH+2,a=e.decode(n.slice(o,o+t));o=o+t;let s=e.decode(n.slice(o,o+r));o=o+r;let l=n.slice(o,n.byteLength);return{join_ref:null,ref:null,topic:a,event:s,payload:l}}},ed=class{constructor(n,i={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=i.timeout||qm,this.transport=i.transport||xt.WebSocket||an,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=i.longPollFallbackMs,this.fallbackTimer=null;let e=null;try{e=xt&&xt.sessionStorage}catch{}this.sessionStore=i.sessionStorage||e,this.establishedConnections=0,this.defaultEncoder=bo.encode.bind(bo),this.defaultDecoder=bo.decode.bind(bo),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=i.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==an?(this.encode=i.encode||this.defaultEncoder,this.decode=i.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let t=null;sn&&sn.addEventListener&&(sn.addEventListener("pagehide",r=>{this.conn&&(this.disconnect(),t=this.connectClock)}),sn.addEventListener("pageshow",r=>{t===this.connectClock&&(t=null,this.connect())}),sn.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=i.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=i.autoSendHeartbeat??!0,this.heartbeatCallback=i.heartbeatCallback??(()=>{}),this.rejoinAfterMs=r=>i.rejoinAfterMs?i.rejoinAfterMs(r):[1e3,2e3,5e3][r-1]||1e4,this.reconnectAfterMs=r=>i.reconnectAfterMs?i.reconnectAfterMs(r):[10,50,100,150,200,250,500,1e3,2e3][r-1]||5e3,this.logger=i.logger||null,!this.logger&&i.debug&&(this.logger=(r,o,a)=>{console.log(`${r}: ${o}`,a)}),this.longpollerTimeout=i.longpollerTimeout||2e4,this.params=Yn(i.params||{}),this.endPoint=`${n}/${es.websocket}`,this.vsn=i.vsn||Gm,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Jc(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{i.beforeReconnect&&await i.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=i.authToken}getLongPollTransport(){return an}replaceTransport(n){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=n}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let n=yo.appendParams(yo.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return n.charAt(0)!=="/"?n:n.charAt(1)==="/"?`${this.protocol()}:${n}`:`${this.protocol()}://${location.host}${n}`}disconnect(n,i,e){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,n&&n()},i,e)}connect(n){n&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Yn(n)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==an?this.connectWithFallback(an,this.longPollFallbackMs):this.transportConnect())}log(n,i,e){this.logger&&this.logger(n,i,e)}hasLogger(){return this.logger!==null}onOpen(n){let i=this.makeRef();return this.stateChangeCallbacks.open.push([i,n]),i}onClose(n){let i=this.makeRef();return this.stateChangeCallbacks.close.push([i,n]),i}onError(n){let i=this.makeRef();return this.stateChangeCallbacks.error.push([i,n]),i}onMessage(n){let i=this.makeRef();return this.stateChangeCallbacks.message.push([i,n]),i}onHeartbeat(n){this.heartbeatCallback=n}ping(n){if(!this.isConnected())return!1;let i=this.makeRef(),e=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:i});let t=this.onMessage(r=>{r.ref===i&&(this.off([t]),n(Date.now()-e))});return!0}transportName(n){return n===an?"LongPoll":n.name}transportConnect(){this.connectClock++,this.closeWasClean=!1;let n;this.authToken&&(n=["phoenix",`${ts}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),n),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=i=>this.onConnError(i),this.conn.onmessage=i=>this.onConnMessage(i),this.conn.onclose=i=>this.onConnClose(i)}getSession(n){return this.sessionStore&&this.sessionStore.getItem(n)}storeSession(n,i){this.sessionStore&&this.sessionStore.setItem(n,i)}connectWithFallback(n,i=2500){clearTimeout(this.fallbackTimer);let e=!1,t=!0,r,o,a=this.transportName(n),s=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([r,o]),t=!1,this.replaceTransport(n),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return s("memorized");this.fallbackTimer=setTimeout(s,i),o=this.onError(l=>{this.log("transport","error",l),t&&!e&&(clearTimeout(this.fallbackTimer),s(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(e=!0,!t){let l=this.transportName(n);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(s,i),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(n){this.log("error","error in heartbeat callback",n)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Km,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(n,i,e){if(!this.conn)return n&&n();let t=this.conn;this.waitForBufferDone(t,()=>{i?t.close(i,e||""):t.close(),this.waitForSocketClosed(t,()=>{this.conn===t&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),n&&n()})})}waitForBufferDone(n,i,e=1){if(e===5||!n.bufferedAmount){i();return}setTimeout(()=>{this.waitForBufferDone(n,i,e+1)},150*e)}waitForSocketClosed(n,i,e=1){if(e===5||n.readyState===Ct.closed){i();return}setTimeout(()=>{this.waitForSocketClosed(n,i,e+1)},150*e)}onConnClose(n){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",n),this.triggerChanError(n),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",n)}onConnError(n){this.hasLogger()&&this.log("transport","error",n);let i=this.transport,e=this.establishedConnections;this.triggerStateCallbacks("error",n,i,e),(i===this.transport||e>0)&&this.triggerChanError(n)}triggerChanError(n){this.channels.forEach(i=>{i.isErrored()||i.isLeaving()||i.isClosed()||i.trigger(Ft.error,n)})}connectionState(){switch(this.conn&&this.conn.readyState){case Ct.connecting:return"connecting";case Ct.open:return"open";case Ct.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(n){this.off(n.stateChangeRefs),this.channels=this.channels.filter(i=>i!==n)}off(n){for(let i in this.stateChangeCallbacks)this.stateChangeCallbacks[i]=this.stateChangeCallbacks[i].filter(([e])=>n.indexOf(e)===-1)}channel(n,i={}){let e=new Xm(n,i,this);return this.channels.push(e),e}push(n){if(this.hasLogger()){let{topic:i,event:e,payload:t,ref:r,join_ref:o}=n;this.log("push",`${i} ${e} (${o}, ${r})`,t)}this.isConnected()?this.encode(n,i=>this.conn.send(i)):this.sendBuffer.push(()=>this.encode(n,i=>this.conn.send(i)))}makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(n){this.log("error","error in heartbeat callback",n)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(n){this.log("error","error in heartbeat callback",n)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}onConnMessage(n){this.decode(n.data,i=>{let{topic:e,event:t,payload:r,ref:o,join_ref:a}=i;if(o&&o===this.pendingHeartbeatRef){let s=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status==="ok"?"ok":"error",s)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${r.status||""} ${e} ${t} ${o&&"("+o+")"||""}`.trim(),r);for(let s=0;s<this.channels.length;s++){let l=this.channels[s];l.isMember(e,t,r,a)&&l.trigger(t,r,o,a)}this.triggerStateCallbacks("message",i)})}triggerStateCallbacks(n,...i){try{this.stateChangeCallbacks[n].forEach(([e,t])=>{try{t(...i)}catch(r){this.log("error",`error in ${n} callback`,r)}})}catch(e){this.log("error",`error triggering ${n} callbacks`,e)}}leaveOpenTopic(n){let i=this.channels.find(e=>e.topic===n&&(e.isJoined()||e.isJoining()));i&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${n}"`),i.leave())}};var xo=class n{constructor(i,e){let t=Zm(e);this.presence=new Zc(i.getChannel(),t),this.presence.onJoin((r,o,a)=>{let s=n.onJoinPayload(r,o,a);i.getChannel().trigger("presence",s)}),this.presence.onLeave((r,o,a)=>{let s=n.onLeavePayload(r,o,a);i.getChannel().trigger("presence",s)}),this.presence.onSync(()=>{i.getChannel().trigger("presence",{event:"sync"})})}get state(){return n.transformState(this.presence.state)}static transformState(i){return i=Jm(i),Object.getOwnPropertyNames(i).reduce((e,t)=>{let r=i[t];return e[t]=wo(r),e},{})}static onJoinPayload(i,e,t){let r=td(e),o=wo(t);return{event:"join",key:i,currentPresences:r,newPresences:o}}static onLeavePayload(i,e,t){let r=td(e),o=wo(t);return{event:"leave",key:i,currentPresences:r,leftPresences:o}}};function wo(n){return n.metas.map(i=>(i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i))}function Jm(n){return JSON.parse(JSON.stringify(n))}function Zm(n){return n?.events&&{events:n.events}}function td(n){return n?.metas?wo(n):[]}var Xn=class{get state(){return this.presenceAdapter.state}constructor(i,e){this.channel=i,this.presenceAdapter=new xo(this.channel.channelAdapter,e)}};function id(n){if(n instanceof Error)return n;if(typeof n=="string")return new Error(n);if(n&&typeof n=="object"){let i=n;if(typeof i.code=="number"){let e=typeof i.reason=="string"&&i.reason?` (${i.reason})`:"";return new Error(`socket closed: ${i.code}${e}`,{cause:n})}return new Error("channel error: transport failure",{cause:n})}return new Error("channel error: connection lost")}var Co=class{constructor(i,e,t){let r=ep(t);this.channel=i.getSocket().channel(e,r),this.socket=i}get state(){return this.channel.state}set state(i){this.channel.state=i}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(i,e){return this.channel.on(i,e)}off(i,e){this.channel.off(i,e)}subscribe(i){return this.channel.join(i)}unsubscribe(i){return this.channel.leave(i)}teardown(){this.channel.teardown()}onClose(i){this.channel.onClose(i)}onError(i){return this.channel.onError(i)}push(i,e,t){let r;try{r=this.channel.push(i,e,t)}catch{throw new Error(`tried to push '${i}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Xc){let o=this.channel.pushBuffer.shift();o.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${o.event}`,o.payload())}return r}updateJoinPayload(i){let e=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},e),i)}canPush(){return this.socket.isConnected()&&this.state===wt.joined}isJoined(){return this.state===wt.joined}isJoining(){return this.state===wt.joining}isClosed(){return this.state===wt.closed}isLeaving(){return this.state===wt.leaving}updateFilterBindings(i){this.channel.filterBindings=i}updatePayloadTransform(i){this.channel.onMessage=i}getChannel(){return this.channel}};function ep(n){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},n.config)}}var tp=/[,()"\\]/,ip=n=>tp.test(n)||n!==n.trim(),np=n=>`"${n.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,nd=n=>{let i=n===null?"null":String(n);return ip(i)?np(i):i},rp=n=>n===null?"null":String(n),op=(n,i)=>{if(n==="in"){let e=Array.isArray(i)?i:[i];if(e.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(e)).map(r=>nd(r)).join(",")})`}return n==="is"?`is.${rp(i)}`:`${n}.${nd(i)}`},ln=class{constructor(){this.filters=[]}add(i,e,t,r=!1){let o=r?"not.":"";return this.filters.push(`${i}=${o}${op(e,t)}`),this}eq(i,e){return this.add(i,"eq",e)}neq(i,e){return this.add(i,"neq",e)}gt(i,e){return this.add(i,"gt",e)}gte(i,e){return this.add(i,"gte",e)}lt(i,e){return this.add(i,"lt",e)}lte(i,e){return this.add(i,"lte",e)}in(i,e){return this.add(i,"in",e)}like(i,e){return this.add(i,"like",e)}ilike(i,e){return this.add(i,"ilike",e)}match(i,e){return this.add(i,"match",e)}imatch(i,e){return this.add(i,"imatch",e)}is(i,e){return this.add(i,"is",e)}isDistinct(i,e){return this.add(i,"isdistinct",e)}not(i,e,t){return this.add(i,e,t,!0)}build(){return this.filters.join(",")}toString(){return this.build()}};var cn=(function(n){return n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes",n.SYSTEM="system",n})(cn||{}),Nt=(function(n){return n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR",n})(Nt||{});var Qn=class n{get state(){return this.channelAdapter.state}set state(i){this.channelAdapter.state=i}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(i,e={config:{}},t){var r,o;if(this.topic=i,this.params=e,this.socket=t,this.bindings={},this.subTopic=i.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},e.config),this.channelAdapter=new Co(this.socket.socketAdapter,i,this.params),this.presence=new Xn(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=_o(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((o=(r=this.params.config)===null||r===void 0?void 0:r.broadcast)===null||o===void 0)&&o.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(i,e=this.timeout){var t,r,o;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:a,presence:s,private:l}}=this.params,c=(r=(t=this.bindings.postgres_changes)===null||t===void 0?void 0:t.map(m=>m.filter))!==null&&r!==void 0?r:[],h=!!this.bindings[cn.PRESENCE]&&this.bindings[cn.PRESENCE].length>0||((o=this.params.config.presence)===null||o===void 0?void 0:o.enabled)===!0,u={},p={broadcast:a,presence:Object.assign(Object.assign({},s),{enabled:h}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(m=>{i?.(Nt.CHANNEL_ERROR,id(m))}),this._onClose(()=>i?.(Nt.CLOSED)),this.updateJoinPayload(Object.assign({config:p},u)),this._updateFilterMessage(),this.channelAdapter.subscribe(e).receive("ok",async({postgres_changes:m})=>{if(this.socket._isManualToken()||this.socket.setAuth(),m===void 0){i?.(Nt.SUBSCRIBED);return}this._updatePostgresBindings(m,i)}).receive("error",m=>{this.state=wt.errored;let f=Object.values(m).join(", ")||"error";i?.(Nt.CHANNEL_ERROR,new Error(f,{cause:m}))}).receive("timeout",()=>{i?.(Nt.TIMED_OUT)})}return this}_updatePostgresBindings(i,e){var t;let r=this.bindings.postgres_changes,o=(t=r?.length)!==null&&t!==void 0?t:0,a=[];for(let s=0;s<o;s++){let l=r[s],{filter:{event:c,schema:h,table:u,filter:p}}=l,m=i&&i[s];if(m&&m.event===c&&n.isFilterValueEqual(m.schema,h)&&n.isFilterValueEqual(m.table,u)&&n.isFilterValueEqual(m.filter,p))a.push(Object.assign(Object.assign({},l),{id:m.id}));else{this.unsubscribe(),this.state=wt.errored,e?.(Nt.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=wt.errored&&e&&e(Nt.SUBSCRIBED)}presenceState(){return this.presence.state}async track(i,e={}){return await this.send({type:"presence",event:"track",payload:i},e.timeout||this.timeout)}async untrack(i={}){return await this.send({type:"presence",event:"untrack"},i)}on(i,e,t){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),o=i===cn.PRESENCE||i===cn.POSTGRES_CHANGES;if(r&&o)throw this.socket.log("channel",`cannot add \`${i}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${i}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(i,e,t)}async httpSend(i,e,t={}){var r;if(e==null)return Promise.reject(new Error("Payload is required for httpSend()"));let o=e instanceof ArrayBuffer||ArrayBuffer.isView(e),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":o?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);let s=new URL(this.broadcastEndpointURL);s.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(i)}`,this.private&&s.searchParams.set("private","true");let l={method:"POST",headers:a,body:o?e:JSON.stringify(e)},c=await this._fetchWithTimeout(s.toString(),l,(r=t.timeout)!==null&&r!==void 0?r:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let h=c.statusText;try{let u=await c.json();h=u.error||u.message||h}catch{}return Promise.reject(new Error(h))}async send(i,e={}){var t,r;if(!this.channelAdapter.canPush()&&i.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");let{event:o,payload:a}=i,s={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(s.Authorization=`Bearer ${this.socket.accessTokenValue}`);let l={method:"POST",headers:s,body:JSON.stringify({messages:[{topic:this.subTopic,event:o,payload:a,private:this.private}]})};try{let c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(t=e.timeout)!==null&&t!==void 0?t:this.timeout);return await((r=c.body)===null||r===void 0?void 0:r.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(o=>{var a,s,l;let c=this.channelAdapter.push(i.type,i,e.timeout||this.timeout);i.type==="broadcast"&&!(!((l=(s=(a=this.params)===null||a===void 0?void 0:a.config)===null||s===void 0?void 0:s.broadcast)===null||l===void 0)&&l.ack)&&o("ok"),c.receive("ok",()=>o("ok")),c.receive("error",()=>o("error")),c.receive("timeout",()=>o("timed out"))})}updateJoinPayload(i){this.channelAdapter.updateJoinPayload(i)}async unsubscribe(i=this.timeout){return new Promise(e=>{this.channelAdapter.unsubscribe(i).receive("ok",()=>e("ok")).receive("timeout",()=>e("timed out")).receive("error",()=>e("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(i,e,t){let r=new AbortController,o=setTimeout(()=>r.abort(),t),a=await this.socket.fetch(i,Object.assign(Object.assign({},e),{signal:r.signal}));return clearTimeout(o),a}_on(i,e,t){let r=i.toLocaleLowerCase(),o=e?.filter;(o instanceof ln||typeof o=="object"&&o!==null&&typeof o.build=="function")&&(e=Object.assign(Object.assign({},e),{filter:o.build()}));let a=this.channelAdapter.on(i,t),s={type:r,filter:e,callback:t,ref:a};return this.bindings[r]?this.bindings[r].push(s):this.bindings[r]=[s],this._updateFilterMessage(),this}_onClose(i){this.channelAdapter.onClose(i)}_onError(i){this.channelAdapter.onError(i)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((i,e,t)=>{var r,o,a,s,l,c,h;let u=i.event.toLocaleLowerCase();if(this._notThisChannelEvent(u,t))return!1;let p=(r=this.bindings[u])===null||r===void 0?void 0:r.find(m=>m.ref===i.ref);if(!p)return!0;if(["broadcast","presence","postgres_changes"].includes(u))if("id"in p){let m=p.id,f=(o=p.filter)===null||o===void 0?void 0:o.event;return m&&((a=e.ids)===null||a===void 0?void 0:a.includes(m))&&(f==="*"||f?.toLocaleLowerCase()===((s=e.data)===null||s===void 0?void 0:s.type.toLocaleLowerCase()))}else{let m=(c=(l=p?.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return m==="*"||m===((h=e?.event)===null||h===void 0?void 0:h.toLocaleLowerCase())}else return p.type.toLocaleLowerCase()===u})}_notThisChannelEvent(i,e){let{close:t,error:r,leave:o,join:a}=fo;return e&&[t,r,o,a].includes(i)&&e!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((i,e,t)=>{if(typeof e=="object"&&"ids"in e){let r=e.data,{schema:o,table:a,commit_timestamp:s,type:l,errors:c}=r;return Object.assign(Object.assign({},{schema:o,table:a,commit_timestamp:s,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(r))}return e})}copyBindings(i){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(let e in i.bindings)for(let t of i.bindings[e])this._on(t.type,t.filter,t.callback)}static isFilterValueEqual(i,e){return(i??void 0)===(e??void 0)}_getPayloadRecords(i){let e={new:{},old:{}};return(i.type==="INSERT"||i.type==="UPDATE")&&(e.new=Za(i.columns,i.record)),(i.type==="UPDATE"||i.type==="DELETE")&&(e.old=Za(i.columns,i.old_record)),e}};var So=class{constructor(i,e){this.socket=new ed(i,e)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(i){this.socket.heartbeatCallback=i}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(i,e,t,r=1e4){return new Promise(o=>{setTimeout(()=>o("timeout"),r),this.socket.disconnect(()=>{i(),o("ok")},e,t)})}push(i){this.socket.push(i)}log(i,e,t){this.socket.log(i,e,t)}makeRef(){return this.socket.makeRef()}onOpen(i){this.socket.onOpen(i)}onClose(i){this.socket.onClose(i)}onError(i){this.socket.onError(i)}onMessage(i){this.socket.onMessage(i)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==qn.connecting}isDisconnecting(){return this.socket.connectionState()==qn.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}};var rd={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},sp=[1e3,2e3,5e3,1e4],lp=1e4;function cp(){let n=new Map;return{get length(){return n.size},clear(){n.clear()},getItem(i){return n.has(i)?n.get(i):null},key(i){var e;return(e=Array.from(n.keys())[i])!==null&&e!==void 0?e:null},removeItem(i){n.delete(i)},setItem(i,e){n.set(i,String(e))}}}function dp(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return cp()}var hp=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,Jn=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(i,e){var t;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new go,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=o=>o?(...a)=>o(...a):(...a)=>fetch(...a),!(!((t=e?.params)===null||t===void 0)&&t.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=e.params.apikey;let r=this._initializeOptions(e);this.socketAdapter=new So(i,r),this.httpEndpoint=_o(i),this.fetch=this._resolveFetch(e?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(i){let e=i.message;throw new Error(`WebSocket not available: ${e}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(i,e){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},i,e)}getChannels(){return this.channels}async removeChannel(i){let e=await i.unsubscribe();return e==="ok"&&i.teardown(),e}async removeAllChannels(){let i=this.channels.map(async t=>{let r=await t.unsubscribe();return t.teardown(),r}),e=await Promise.all(i);return await this.disconnect(),e}log(i,e,t){this.socketAdapter.log(i,e,t)}connectionState(){return this.socketAdapter.connectionState()||qn.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(i,e={config:{}}){let t=`realtime:${i}`,r=this.getChannels().find(o=>o.topic===t);if(r)return r;{let o=new Qn(`realtime:${i}`,e,this);return this._cancelPendingDisconnect(),this.channels.push(o),o}}push(i){this.socketAdapter.push(i)}async setAuth(i=null){this._authPromise=this._performAuth(i);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(i){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(i)}_makeRef(){return this.socketAdapter.makeRef()}_remove(i){this.channels=this.channels.filter(e=>e.topic!==i.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(i=null){let e,t=!1;if(i)e=i,t=!0;else if(this.accessToken)try{e=await this.accessToken()}catch(r){this.log("error","Error fetching access token from callback",r),e=this.accessTokenValue}else e=this.accessTokenValue;t?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=e&&(this.accessTokenValue=e,this.channels.forEach(r=>{let o={access_token:e,version:Gc};e&&r.updateJoinPayload(o),r.joinedOnce&&r.channelAdapter.isJoined()&&r.channelAdapter.push(fo.access_token,{access_token:e})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(i="general"){this._isManualToken()||this.setAuth().catch(e=>{this.log("error",`Error setting auth in ${i}`,e)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log("error","error waiting for auth on connect",e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(i=>{i.ref&&i.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(i){return(e,t)=>{e!=="disconnected"&&(e=="sent"&&this._setAuthSafely(),i&&i(e,t))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");let i=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(i),this.workerRef.onerror=e=>{this.log("worker","worker error",e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(i){let e;if(i)e=i;else{let t=new Blob([hp],{type:"application/javascript"});e=URL.createObjectURL(t)}return e}_initializeOptions(i){var e,t,r,o,a,s,l,c,h,u,p,m;this.worker=(e=i?.worker)!==null&&e!==void 0?e:!1,this.accessToken=(t=i?.accessToken)!==null&&t!==void 0?t:null;let f={};f.timeout=(r=i?.timeout)!==null&&r!==void 0?r:Yc,f.heartbeatIntervalMs=(o=i?.heartbeatIntervalMs)!==null&&o!==void 0?o:rd.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=i?.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((s=i?.heartbeatIntervalMs)!==null&&s!==void 0?s:rd.HEARTBEAT_INTERVAL),f.transport=(l=i?.transport)!==null&&l!==void 0?l:Xa.getWebSocketConstructor(),f.params=i?.params,f.logger=i?.logger,f.heartbeatCallback=this._wrapHeartbeatCallback(i?.heartbeatCallback),f.sessionStorage=(c=i?.sessionStorage)!==null&&c!==void 0?c:dp(),f.reconnectAfterMs=(h=i?.reconnectAfterMs)!==null&&h!==void 0?h:L=>sp[L-1]||lp;let g,w,v=(u=i?.vsn)!==null&&u!==void 0?u:Kc;switch(v){case qc:g=(L,P)=>P(JSON.stringify(L)),w=(L,P)=>P(JSON.parse(L));break;case Qa:g=this.serializer.encode.bind(this.serializer),w=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${f.vsn}`)}if(f.vsn=v,f.encode=(p=i?.encode)!==null&&p!==void 0?p:g,f.decode=(m=i?.decode)!==null&&m!==void 0?m:w,f.beforeReconnect=this._reconnectAuth.bind(this),(i?.logLevel||i?.log_level)&&(this.logLevel=i.logLevel||i.log_level,f.params=Object.assign(Object.assign({},f.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=i?.workerUrl,f.autoSendHeartbeat=!this.worker}return f}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}};var Zn=class extends Error{constructor(n,i){super(n),this.name="IcebergError",this.status=i.status,this.icebergType=i.icebergType,this.icebergCode=i.icebergCode,this.details=i.details,this.isCommitStateUnknown=i.icebergType==="CommitStateUnknownException"||[500,502,504].includes(i.status)&&i.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function up(n,i,e){let t=new URL(i,n);if(e)for(let[r,o]of Object.entries(e))o!==void 0&&t.searchParams.set(r,o);return t.toString()}async function mp(n){return!n||n.type==="none"?{}:n.type==="bearer"?{Authorization:`Bearer ${n.token}`}:n.type==="header"?{[n.name]:n.value}:n.type==="custom"?await n.getHeaders():{}}function pp(n){let i=n.fetchImpl??globalThis.fetch;return{async request({method:e,path:t,query:r,body:o,headers:a}){let s=up(n.baseUrl,t,r),l=await mp(n.auth),c=await i(s,{method:e,headers:j(j(j({},o?{"Content-Type":"application/json"}:{}),l),a),body:o?JSON.stringify(o):void 0}),h=await c.text(),u=(c.headers.get("content-type")||"").includes("application/json"),p=u&&h?JSON.parse(h):h;if(!c.ok){let m=u?p:void 0,f=m?.error;throw new Zn(f?.message??`Request failed with status ${c.status}`,{status:c.status,icebergType:f?.type,icebergCode:f?.code,details:m})}return{status:c.status,headers:c.headers,data:p}}}}function ko(n){return n.join("")}var fp=class{constructor(n,i=""){this.client=n,this.prefix=i}async listNamespaces(n){let i=n?{parent:ko(n.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:i})).data.namespaces.map(t=>({namespace:t}))}async createNamespace(n,i){let e={namespace:n.namespace,properties:i?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:e})).data}async dropNamespace(n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ko(n.namespace)}`})}async loadNamespaceMetadata(n){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ko(n.namespace)}`})).data.properties}}async namespaceExists(n){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ko(n.namespace)}`}),!0}catch(i){if(i instanceof Zn&&i.status===404)return!1;throw i}}async createNamespaceIfNotExists(n,i){try{return await this.createNamespace(n,i)}catch(e){if(e instanceof Zn&&e.status===409)return;throw e}}};function dn(n){return n.join("")}var gp=class{constructor(n,i="",e){this.client=n,this.prefix=i,this.accessDelegation=e}async listTables(n){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${dn(n.namespace)}/tables`})).data.identifiers}async createTable(n,i){let e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${dn(n.namespace)}/tables`,body:i,headers:e})).data.metadata}async updateTable(n,i){let e=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${dn(n.namespace)}/tables/${n.name}`,body:i});return{"metadata-location":e.data["metadata-location"],metadata:e.data.metadata}}async dropTable(n,i){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${dn(n.namespace)}/tables/${n.name}`,query:{purgeRequested:String(i?.purge??!1)}})}async loadTable(n){let i={};return this.accessDelegation&&(i["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${dn(n.namespace)}/tables/${n.name}`,headers:i})).data.metadata}async tableExists(n){let i={};this.accessDelegation&&(i["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${dn(n.namespace)}/tables/${n.name}`,headers:i}),!0}catch(e){if(e instanceof Zn&&e.status===404)return!1;throw e}}async createTableIfNotExists(n,i){try{return await this.createTable(n,i)}catch(e){if(e instanceof Zn&&e.status===409)return await this.loadTable({namespace:n.namespace,name:i.name});throw e}}},od=class{constructor(n){let i="v1";n.catalogName&&(i+=`/${n.catalogName}`);let e=n.baseUrl.endsWith("/")?n.baseUrl:`${n.baseUrl}/`;this.client=pp({baseUrl:e,auth:n.auth,fetchImpl:n.fetch}),this.accessDelegation=n.accessDelegation?.join(","),this.namespaceOps=new fp(this.client,i),this.tableOps=new gp(this.client,i,this.accessDelegation)}async listNamespaces(n){return this.namespaceOps.listNamespaces(n)}async createNamespace(n,i){return this.namespaceOps.createNamespace(n,i)}async dropNamespace(n){await this.namespaceOps.dropNamespace(n)}async loadNamespaceMetadata(n){return this.namespaceOps.loadNamespaceMetadata(n)}async listTables(n){return this.tableOps.listTables(n)}async createTable(n,i){return this.tableOps.createTable(n,i)}async updateTable(n,i){return this.tableOps.updateTable(n,i)}async dropTable(n,i){await this.tableOps.dropTable(n,i)}async loadTable(n){return this.tableOps.loadTable(n)}async namespaceExists(n){return this.namespaceOps.namespaceExists(n)}async tableExists(n){return this.tableOps.tableExists(n)}async createNamespaceIfNotExists(n,i){return this.namespaceOps.createNamespaceIfNotExists(n,i)}async createTableIfNotExists(n,i){return this.tableOps.createTableIfNotExists(n,i)}};function tr(n){"@babel/helpers - typeof";return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},tr(n)}function _p(n,i){if(tr(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,i||"default");if(tr(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function vp(n){var i=_p(n,"string");return tr(i)=="symbol"?i:i+""}function bp(n,i,e){return(i=vp(i))in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function ad(n,i){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);i&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,t)}return e}function V(n){for(var i=1;i<arguments.length;i++){var e=arguments[i]!=null?arguments[i]:{};i%2?ad(Object(e),!0).forEach(function(t){bp(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):ad(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}var Ao=class extends Error{constructor(n,i="storage",e,t){super(n),this.__isStorageError=!0,this.namespace=i,this.name=i==="vectors"?"StorageVectorsError":"StorageError",this.status=e,this.statusCode=t}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Ro(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}var Eo=class extends Ao{constructor(n,i,e,t="storage"){super(n,t,i,e),this.name=t==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=i,this.statusCode=e}toJSON(){return V({},super.toJSON())}},cd=class extends Ao{constructor(n,i,e="storage"){super(n,e),this.name=e==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=i}};function Do(n,i,e){let t=V({},n),r=i.toLowerCase();for(let o of Object.keys(t))o.toLowerCase()===r&&delete t[o];return t[r]=e,t}function yp(n){let i={};for(let[e,t]of Object.entries(n))i[e.toLowerCase()]=t;return i}var wp=n=>n?(...i)=>n(...i):(...i)=>fetch(...i),xp=n=>{if(typeof n!="object"||n===null)return!1;let i=Object.getPrototypeOf(n);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},ns=n=>{if(Array.isArray(n))return n.map(e=>ns(e));if(typeof n=="function"||n!==Object(n))return n;let i={};return Object.entries(n).forEach(([e,t])=>{let r=e.replace(/([-_][a-z])/gi,o=>o.toUpperCase().replace(/[-_]/g,""));i[r]=ns(t)}),i},Cp=n=>!n||typeof n!="string"||n.length===0||n.length>100||n.trim()!==n||n.includes("/")||n.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(n),sd=n=>{if(typeof n=="object"&&n!==null){let i=n;if(typeof i.msg=="string")return i.msg;if(typeof i.message=="string")return i.message;if(typeof i.error_description=="string")return i.error_description;if(typeof i.error=="string")return i.error;if(typeof i.error=="object"&&i.error!==null){let e=i.error;if(typeof e.message=="string")return e.message}}return JSON.stringify(n)},Sp=async(n,i,e,t)=>{if(n!==null&&typeof n=="object"&&"json"in n&&typeof n.json=="function"){let r=n,o=parseInt(String(r.status),10);Number.isFinite(o)||(o=500),r.json().then(a=>{let s=a?.statusCode||a?.code||o+"";i(new Eo(sd(a),o,s,t))}).catch(()=>{let a=o+"";i(new Eo(r.statusText||`HTTP ${o} error`,o,a,t))})}else i(new cd(sd(n),n,t))},kp=(n,i,e,t)=>{let r={method:n,headers:i?.headers||{}};if(n==="GET"||n==="HEAD"||!t)return V(V({},r),e);if(xp(t)){var o;let a=i?.headers||{},s;for(let[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(s=c);r.headers=Do(a,"Content-Type",(o=s)!==null&&o!==void 0?o:"application/json"),r.body=JSON.stringify(t)}else r.body=t;return i?.duplex&&(r.duplex=i.duplex),V(V({},r),e)};async function er(n,i,e,t,r,o,a){return new Promise((s,l)=>{n(e,kp(i,t,r,o)).then(c=>{if(!c.ok)throw c;if(t?.noResolveJson)return c;if(a==="vectors"){let h=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!h||!h.includes("application/json"))return{}}return c.json()}).then(c=>s(c)).catch(c=>Sp(c,l,t,a))})}function dd(n="storage"){return{get:async(i,e,t,r)=>er(i,"GET",e,t,r,void 0,n),post:async(i,e,t,r,o)=>er(i,"POST",e,r,o,t,n),put:async(i,e,t,r,o)=>er(i,"PUT",e,r,o,t,n),head:async(i,e,t,r)=>er(i,"HEAD",e,V(V({},t),{},{noResolveJson:!0}),r,void 0,n),remove:async(i,e,t,r,o)=>er(i,"DELETE",e,r,o,t,n)}}var Ep=dd("storage"),{get:ir,post:ht,put:rs,head:Dp,remove:nr}=Ep,tt=dd("vectors"),hn=class{constructor(n,i={},e,t="storage"){this.shouldThrowOnError=!1,this.url=n,this.headers=yp(i),this.fetch=wp(e),this.namespace=t}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(n,i){return this.headers=Do(this.headers,n,i),this}async handleOperation(n){var i=this;try{return{data:await n(),error:null}}catch(e){if(i.shouldThrowOnError)throw e;if(Ro(e))return{data:null,error:e};throw e}}},hd;hd=Symbol.toStringTag;var Ap=class{constructor(n,i){this.downloadFn=n,this.shouldThrowOnError=i,this[hd]="StreamDownloadBuilder",this.promise=null}then(n,i){return this.getPromise().then(n,i)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:(await n.downloadFn()).body,error:null}}catch(i){if(n.shouldThrowOnError)throw i;if(Ro(i))return{data:null,error:i};throw i}}},ud;ud=Symbol.toStringTag;var Rp=class{constructor(n,i){this.downloadFn=n,this.shouldThrowOnError=i,this[ud]="BlobDownloadBuilder",this.promise=null}asStream(){return new Ap(this.downloadFn,this.shouldThrowOnError)}then(n,i){return this.getPromise().then(n,i)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:await(await n.downloadFn()).blob(),error:null}}catch(i){if(n.shouldThrowOnError)throw i;if(Ro(i))return{data:null,error:i};throw i}}},is={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},ld={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1},Tp=class extends hn{constructor(n,i={},e,t){super(n,i,t,"storage"),this.bucketId=e}async uploadOrUpdate(n,i,e,t){var r=this;return r.handleOperation(async()=>{let o,a=V(V({},ld),t),s=V(V({},r.headers),n==="POST"&&{"x-upsert":String(a.upsert)}),l=a.metadata;if(typeof Blob<"u"&&e instanceof Blob?(o=new FormData,o.append("cacheControl",a.cacheControl),l&&o.append("metadata",r.encodeMetadata(l)),o.append("",e)):typeof FormData<"u"&&e instanceof FormData?(o=e,o.has("cacheControl")||o.append("cacheControl",a.cacheControl),l&&!o.has("metadata")&&o.append("metadata",r.encodeMetadata(l))):(o=e,s["cache-control"]=`max-age=${a.cacheControl}`,s["content-type"]=a.contentType,l&&(s["x-metadata"]=r.toBase64(r.encodeMetadata(l))),(typeof ReadableStream<"u"&&o instanceof ReadableStream||o&&typeof o=="object"&&"pipe"in o&&typeof o.pipe=="function")&&!a.duplex&&(a.duplex="half")),t?.headers)for(let[p,m]of Object.entries(t.headers))s=Do(s,p,m);let c=r._removeEmptyFolders(i),h=r._getFinalPath(c),u=await(n=="PUT"?rs:ht)(r.fetch,`${r.url}/object/${h}`,o,V({headers:s},a?.duplex?{duplex:a.duplex}:{}));return{path:c,id:u.Id,fullPath:u.Key}})}async upload(n,i,e){return this.uploadOrUpdate("POST",n,i,e)}async uploadToSignedUrl(n,i,e,t){var r=this;let o=r._removeEmptyFolders(n),a=r._getFinalPath(o),s=new URL(r.url+`/object/upload/sign/${a}`);return s.searchParams.set("token",i),r.handleOperation(async()=>{let l,c=V(V({},ld),t),h=V(V({},r.headers),{"x-upsert":String(c.upsert)}),u=c.metadata;if(typeof Blob<"u"&&e instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),u&&l.append("metadata",r.encodeMetadata(u)),l.append("",e)):typeof FormData<"u"&&e instanceof FormData?(l=e,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),u&&!l.has("metadata")&&l.append("metadata",r.encodeMetadata(u))):(l=e,h["cache-control"]=`max-age=${c.cacheControl}`,h["content-type"]=c.contentType,u&&(h["x-metadata"]=r.toBase64(r.encodeMetadata(u))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),t?.headers)for(let[p,m]of Object.entries(t.headers))h=Do(h,p,m);return{path:o,fullPath:(await rs(r.fetch,s.toString(),l,V({headers:h},c?.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(n,i){var e=this;return e.handleOperation(async()=>{let t=e._getFinalPath(n),r=V({},e.headers);i?.upsert&&(r["x-upsert"]="true");let o=await ht(e.fetch,`${e.url}/object/upload/sign/${t}`,{},{headers:r}),a=new URL(e.url+o.url),s=a.searchParams.get("token");if(!s)throw new Ao("No token returned by API");return{signedUrl:a.toString(),path:n,token:s}})}async update(n,i,e){return this.uploadOrUpdate("PUT",n,i,e)}async move(n,i,e){var t=this;return t.handleOperation(async()=>await ht(t.fetch,`${t.url}/object/move`,{bucketId:t.bucketId,sourceKey:n,destinationKey:i,destinationBucket:e?.destinationBucket},{headers:t.headers}))}async copy(n,i,e){var t=this;return t.handleOperation(async()=>({path:(await ht(t.fetch,`${t.url}/object/copy`,{bucketId:t.bucketId,sourceKey:n,destinationKey:i,destinationBucket:e?.destinationBucket},{headers:t.headers})).Key}))}async createSignedUrl(n,i,e){var t=this;return t.handleOperation(async()=>{let r=t._getFinalPath(n),o=typeof e?.transform=="object"&&e.transform!==null&&Object.keys(e.transform).length>0,a=await ht(t.fetch,`${t.url}/object/sign/${r}`,V({expiresIn:i},o?{transform:e.transform}:{}),{headers:t.headers}),s=new URLSearchParams;e?.download&&s.set("download",e.download===!0?"":e.download),e?.cacheNonce!=null&&s.set("cacheNonce",String(e.cacheNonce));let l=s.toString();return{signedUrl:encodeURI(`${t.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(n,i,e){var t=this;return t.handleOperation(async()=>{let r=await ht(t.fetch,`${t.url}/object/sign/${t.bucketId}`,{expiresIn:i,paths:n},{headers:t.headers}),o=new URLSearchParams;e?.download&&o.set("download",e.download===!0?"":e.download),e?.cacheNonce!=null&&o.set("cacheNonce",String(e.cacheNonce));let a=o.toString();return r.map(s=>V(V({},s),{},{signedUrl:s.signedURL?encodeURI(`${t.url}${s.signedURL}${a?`&${a}`:""}`):null}))})}download(n,i,e){let t=typeof i?.transform=="object"&&i.transform!==null&&Object.keys(i.transform).length>0?"render/image/authenticated":"object",r=new URLSearchParams;i?.transform&&this.applyTransformOptsToQuery(r,i.transform),i?.cacheNonce!=null&&r.set("cacheNonce",String(i.cacheNonce));let o=r.toString(),a=this._getFinalPath(n),s=()=>ir(this.fetch,`${this.url}/${t}/${a}${o?`?${o}`:""}`,{headers:this.headers,noResolveJson:!0},e);return new Rp(s,this.shouldThrowOnError)}async info(n){var i=this;let e=i._getFinalPath(n);return i.handleOperation(async()=>ns(await ir(i.fetch,`${i.url}/object/info/${e}`,{headers:i.headers})))}async exists(n){var i=this;let e=i._getFinalPath(n);try{return await Dp(i.fetch,`${i.url}/object/${e}`,{headers:i.headers}),{data:!0,error:null}}catch(r){if(i.shouldThrowOnError)throw r;if(Ro(r)){var t;let o=r instanceof Eo?r.status:r instanceof cd?(t=r.originalError)===null||t===void 0?void 0:t.status:void 0;if(o!==void 0&&[400,404].includes(o))return{data:!1,error:r}}throw r}}getPublicUrl(n,i){let e=this._getFinalPath(n),t=new URLSearchParams;i?.download&&t.set("download",i.download===!0?"":i.download),i?.transform&&this.applyTransformOptsToQuery(t,i.transform),i?.cacheNonce!=null&&t.set("cacheNonce",String(i.cacheNonce));let r=t.toString(),o=typeof i?.transform=="object"&&i.transform!==null&&Object.keys(i.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${o}/public/${e}`)+(r?`?${r}`:"")}}}async remove(n){var i=this;return i.handleOperation(async()=>await nr(i.fetch,`${i.url}/object/${i.bucketId}`,{prefixes:n},{headers:i.headers}))}async purgeCache(n,i,e){var t=this;return t.handleOperation(async()=>{let r=t._getFinalPath(n),o=new URLSearchParams;i?.transformations&&o.set("transformations","true");let a=o.toString();return await nr(t.fetch,`${t.url}/cdn/${r}${a?`?${a}`:""}`,{},{headers:t.headers},e)})}async list(n,i,e){var t=this;return t.handleOperation(async()=>{let r=i?.sortBy?V(V({},is.sortBy),i.sortBy):is.sortBy,o=V(V(V({},is),i),{},{sortBy:r,prefix:n||""});return await ht(t.fetch,`${t.url}/object/list/${t.bucketId}`,o,{headers:t.headers},e)})}async listV2(n,i){var e=this;return e.handleOperation(async()=>{let t=V({},n);return await ht(e.fetch,`${e.url}/object/list-v2/${e.bucketId}`,t,{headers:e.headers},i)})}encodeMetadata(n){return JSON.stringify(n)}toBase64(n){return typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n)}_getFinalPath(n){return`${this.bucketId}/${n.replace(/^\/+/,"")}`}_removeEmptyFolders(n){return n.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(n,i){return i.width&&n.set("width",i.width.toString()),i.height&&n.set("height",i.height.toString()),i.resize&&n.set("resize",i.resize),i.format&&n.set("format",i.format),i.quality&&n.set("quality",i.quality.toString()),n}},Op="2.110.1",rr={"X-Client-Info":`storage-js/${Op}`},Ip=class extends hn{constructor(n,i={},e,t){let r=new URL(n);t?.useNewHostname&&/supabase\.(co|in|red)$/.test(r.hostname)&&!r.hostname.includes("storage.supabase.")&&(r.hostname=r.hostname.replace("supabase.","storage.supabase."));let o=r.href.replace(/\/$/,""),a=V(V({},rr),i);super(o,a,e,"storage")}async listBuckets(n){var i=this;return i.handleOperation(async()=>{let e=i.listBucketOptionsToQueryString(n);return await ir(i.fetch,`${i.url}/bucket${e}`,{headers:i.headers})})}async getBucket(n){var i=this;return i.handleOperation(async()=>await ir(i.fetch,`${i.url}/bucket/${n}`,{headers:i.headers}))}async createBucket(n,i={public:!1}){var e=this;return e.handleOperation(async()=>await ht(e.fetch,`${e.url}/bucket`,{id:n,name:n,type:i.type,public:i.public,file_size_limit:i.fileSizeLimit,allowed_mime_types:i.allowedMimeTypes},{headers:e.headers}))}async updateBucket(n,i){var e=this;return e.handleOperation(async()=>await rs(e.fetch,`${e.url}/bucket/${n}`,{id:n,name:n,public:i.public,file_size_limit:i.fileSizeLimit,allowed_mime_types:i.allowedMimeTypes},{headers:e.headers}))}async emptyBucket(n){var i=this;return i.handleOperation(async()=>await ht(i.fetch,`${i.url}/bucket/${n}/empty`,{},{headers:i.headers}))}async deleteBucket(n){var i=this;return i.handleOperation(async()=>await nr(i.fetch,`${i.url}/bucket/${n}`,{},{headers:i.headers}))}async purgeBucketCache(n,i,e){var t=this;return t.handleOperation(async()=>{let r=new URLSearchParams;i?.transformations&&r.set("transformations","true");let o=r.toString();return await nr(t.fetch,`${t.url}/cdn/${n}${o?`?${o}`:""}`,{},{headers:t.headers},e)})}listBucketOptionsToQueryString(n){let i={};return n&&("limit"in n&&(i.limit=String(n.limit)),"offset"in n&&(i.offset=String(n.offset)),n.search&&(i.search=n.search),n.sortColumn&&(i.sortColumn=n.sortColumn),n.sortOrder&&(i.sortOrder=n.sortOrder)),Object.keys(i).length>0?"?"+new URLSearchParams(i).toString():""}},Mp=class extends hn{constructor(n,i={},e){let t=n.replace(/\/$/,""),r=V(V({},rr),i);super(t,r,e,"storage")}async createBucket(n){var i=this;return i.handleOperation(async()=>await ht(i.fetch,`${i.url}/bucket`,{name:n},{headers:i.headers}))}async listBuckets(n){var i=this;return i.handleOperation(async()=>{let e=new URLSearchParams;n?.limit!==void 0&&e.set("limit",n.limit.toString()),n?.offset!==void 0&&e.set("offset",n.offset.toString()),n?.sortColumn&&e.set("sortColumn",n.sortColumn),n?.sortOrder&&e.set("sortOrder",n.sortOrder),n?.search&&e.set("search",n.search);let t=e.toString(),r=t?`${i.url}/bucket?${t}`:`${i.url}/bucket`;return await ir(i.fetch,r,{headers:i.headers})})}async deleteBucket(n){var i=this;return i.handleOperation(async()=>await nr(i.fetch,`${i.url}/bucket/${n}`,{},{headers:i.headers}))}from(n){var i=this;if(!Cp(n))throw new Ao("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");let e=new od({baseUrl:this.url,catalogName:n,auth:{type:"custom",getHeaders:async()=>i.headers},fetch:this.fetch}),t=this.shouldThrowOnError;return new Proxy(e,{get(r,o){let a=r[o];return typeof a!="function"?a:async(...s)=>{try{return{data:await a.apply(r,s),error:null}}catch(l){if(t)throw l;return{data:null,error:l}}}}})}},Pp=class extends hn{constructor(n,i={},e){let t=n.replace(/\/$/,""),r=V(V({},rr),{},{"Content-Type":"application/json"},i);super(t,r,e,"vectors")}async createIndex(n){var i=this;return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/CreateIndex`,n,{headers:i.headers})||{})}async getIndex(n,i){var e=this;return e.handleOperation(async()=>await tt.post(e.fetch,`${e.url}/GetIndex`,{vectorBucketName:n,indexName:i},{headers:e.headers}))}async listIndexes(n){var i=this;return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/ListIndexes`,n,{headers:i.headers}))}async deleteIndex(n,i){var e=this;return e.handleOperation(async()=>await tt.post(e.fetch,`${e.url}/DeleteIndex`,{vectorBucketName:n,indexName:i},{headers:e.headers})||{})}},Fp=class extends hn{constructor(n,i={},e){let t=n.replace(/\/$/,""),r=V(V({},rr),{},{"Content-Type":"application/json"},i);super(t,r,e,"vectors")}async putVectors(n){var i=this;if(n.vectors.length<1||n.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/PutVectors`,n,{headers:i.headers})||{})}async getVectors(n){var i=this;return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/GetVectors`,n,{headers:i.headers}))}async listVectors(n){var i=this;if(n.segmentCount!==void 0){if(n.segmentCount<1||n.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(n.segmentIndex!==void 0&&(n.segmentIndex<0||n.segmentIndex>=n.segmentCount))throw new Error(`segmentIndex must be between 0 and ${n.segmentCount-1}`)}return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/ListVectors`,n,{headers:i.headers}))}async queryVectors(n){var i=this;return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/QueryVectors`,n,{headers:i.headers}))}async deleteVectors(n){var i=this;if(n.keys.length<1||n.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/DeleteVectors`,n,{headers:i.headers})||{})}},Np=class extends hn{constructor(n,i={},e){let t=n.replace(/\/$/,""),r=V(V({},rr),{},{"Content-Type":"application/json"},i);super(t,r,e,"vectors")}async createBucket(n){var i=this;return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/CreateVectorBucket`,{vectorBucketName:n},{headers:i.headers})||{})}async getBucket(n){var i=this;return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/GetVectorBucket`,{vectorBucketName:n},{headers:i.headers}))}async listBuckets(n={}){var i=this;return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/ListVectorBuckets`,n,{headers:i.headers}))}async deleteBucket(n){var i=this;return i.handleOperation(async()=>await tt.post(i.fetch,`${i.url}/DeleteVectorBucket`,{vectorBucketName:n},{headers:i.headers})||{})}},Lp=class extends Np{constructor(n,i={}){super(n,i.headers||{},i.fetch)}from(n){return new Vp(this.url,this.headers,n,this.fetch)}async createBucket(n){var i=()=>super.createBucket,e=this;return i().call(e,n)}async getBucket(n){var i=()=>super.getBucket,e=this;return i().call(e,n)}async listBuckets(n={}){var i=()=>super.listBuckets,e=this;return i().call(e,n)}async deleteBucket(n){var i=()=>super.deleteBucket,e=this;return i().call(e,n)}},Vp=class extends Pp{constructor(n,i,e,t){super(n,i,t),this.vectorBucketName=e}async createIndex(n){var i=()=>super.createIndex,e=this;return i().call(e,V(V({},n),{},{vectorBucketName:e.vectorBucketName}))}async listIndexes(n={}){var i=()=>super.listIndexes,e=this;return i().call(e,V(V({},n),{},{vectorBucketName:e.vectorBucketName}))}async getIndex(n){var i=()=>super.getIndex,e=this;return i().call(e,e.vectorBucketName,n)}async deleteIndex(n){var i=()=>super.deleteIndex,e=this;return i().call(e,e.vectorBucketName,n)}index(n){return new jp(this.url,this.headers,this.vectorBucketName,n,this.fetch)}},jp=class extends Fp{constructor(n,i,e,t,r){super(n,i,r),this.vectorBucketName=e,this.indexName=t}async putVectors(n){var i=()=>super.putVectors,e=this;return i().call(e,V(V({},n),{},{vectorBucketName:e.vectorBucketName,indexName:e.indexName}))}async getVectors(n){var i=()=>super.getVectors,e=this;return i().call(e,V(V({},n),{},{vectorBucketName:e.vectorBucketName,indexName:e.indexName}))}async listVectors(n={}){var i=()=>super.listVectors,e=this;return i().call(e,V(V({},n),{},{vectorBucketName:e.vectorBucketName,indexName:e.indexName}))}async queryVectors(n){var i=()=>super.queryVectors,e=this;return i().call(e,V(V({},n),{},{vectorBucketName:e.vectorBucketName,indexName:e.indexName}))}async deleteVectors(n){var i=()=>super.deleteVectors,e=this;return i().call(e,V(V({},n),{},{vectorBucketName:e.vectorBucketName,indexName:e.indexName}))}},md=class extends Ip{constructor(n,i={},e,t){super(n,i,e,t)}from(n){return new Tp(this.url,this.headers,n,this.fetch)}get vectors(){return new Lp(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Mp(this.url+"/iceberg",this.headers,this.fetch)}};var To="2.110.1";var St=30*1e3,un=3,Oo=un*St,pd=2*St,fd="http://localhost:9999",gd="supabase.auth.token";var _d={"X-Client-Info":`gotrue-js/${To}`};var or="X-Supabase-Api-Version",os={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},vd=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,bd=600*1e3;var ai=class extends Error{constructor(i,e,t){super(i),this.__isAuthError=!0,this.name="AuthError",this.status=e,this.code=t}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function y(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}var Io=class extends ai{constructor(i,e,t){super(i,e,t),this.name="AuthApiError",this.status=e,this.code=t}};function yd(n){return y(n)&&n.name==="AuthApiError"}var Ue=class extends ai{constructor(i,e){super(i),this.name="AuthUnknownError",this.originalError=e}},at=class extends ai{constructor(i,e,t,r){super(i,t,r),this.name=e,this.status=t}},be=class extends at{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}};function cr(n){return y(n)&&n.name==="AuthSessionMissingError"}var Lt=class extends at{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}},Ei=class extends at{constructor(i){super(i,"AuthInvalidCredentialsError",400,void 0)}},Di=class extends at{constructor(i,e=null){super(i,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=e}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function wd(n){return y(n)&&n.name==="AuthImplicitGrantRedirectError"}var ar=class extends at{constructor(i,e=null){super(i,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=e}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},Mo=class extends at{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}};var mn=class extends at{constructor(i,e){super(i,"AuthRetryableFetchError",e,void 0)}};function as(n){return y(n)&&n.name==="AuthRetryableFetchError"}var sr=class extends at{constructor(i="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(i,"AuthRefreshDiscardedError",409,void 0)}};function xd(n){return y(n)&&n.name==="AuthRefreshDiscardedError"}var lr=class extends at{constructor(i,e,t){super(i,"AuthWeakPasswordError",e,"weak_password"),this.reasons=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}};var si=class extends at{constructor(i){super(i,"AuthInvalidJwtError",400,"invalid_jwt")}};var Po="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Cd=` 	
\r=`.split(""),Bp=(()=>{let n=new Array(128);for(let i=0;i<n.length;i+=1)n[i]=-1;for(let i=0;i<Cd.length;i+=1)n[Cd[i].charCodeAt(0)]=-2;for(let i=0;i<Po.length;i+=1)n[Po[i].charCodeAt(0)]=i;return n})();function Sd(n,i,e){if(n!==null)for(i.queue=i.queue<<8|n,i.queuedBits+=8;i.queuedBits>=6;){let t=i.queue>>i.queuedBits-6&63;e(Po[t]),i.queuedBits-=6}else if(i.queuedBits>0)for(i.queue=i.queue<<6-i.queuedBits,i.queuedBits=6;i.queuedBits>=6;){let t=i.queue>>i.queuedBits-6&63;e(Po[t]),i.queuedBits-=6}}function kd(n,i,e){let t=Bp[n];if(t>-1)for(i.queue=i.queue<<6|t,i.queuedBits+=6;i.queuedBits>=8;)e(i.queue>>i.queuedBits-8&255),i.queuedBits-=8;else{if(t===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`)}}function ss(n){let i=[],e=a=>{i.push(String.fromCodePoint(a))},t={utf8seq:0,codepoint:0},r={queue:0,queuedBits:0},o=a=>{Up(a,t,e)};for(let a=0;a<n.length;a+=1)kd(n.charCodeAt(a),r,o);return i.join("")}function zp(n,i){if(n<=127){i(n);return}else if(n<=2047){i(192|n>>6),i(128|n&63);return}else if(n<=65535){i(224|n>>12),i(128|n>>6&63),i(128|n&63);return}else if(n<=1114111){i(240|n>>18),i(128|n>>12&63),i(128|n>>6&63),i(128|n&63);return}throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`)}function Hp(n,i){for(let e=0;e<n.length;e+=1){let t=n.charCodeAt(e);if(t>55295&&t<=56319){let r=(t-55296)*1024&65535;t=(n.charCodeAt(e+1)-56320&65535|r)+65536,e+=1}zp(t,i)}}function Up(n,i,e){if(i.utf8seq===0){if(n<=127){e(n);return}for(let t=1;t<6;t+=1)if((n>>7-t&1)===0){i.utf8seq=t;break}if(i.utf8seq===2)i.codepoint=n&31;else if(i.utf8seq===3)i.codepoint=n&15;else if(i.utf8seq===4)i.codepoint=n&7;else throw new Error("Invalid UTF-8 sequence");i.utf8seq-=1}else if(i.utf8seq>0){if(n<=127)throw new Error("Invalid UTF-8 sequence");i.codepoint=i.codepoint<<6|n&63,i.utf8seq-=1,i.utf8seq===0&&e(i.codepoint)}}function li(n){let i=[],e={queue:0,queuedBits:0},t=r=>{i.push(r)};for(let r=0;r<n.length;r+=1)kd(n.charCodeAt(r),e,t);return new Uint8Array(i)}function Ed(n){let i=[];return Hp(n,e=>i.push(e)),new Uint8Array(i)}function Vt(n){let i=[],e={queue:0,queuedBits:0},t=r=>{i.push(r)};return n.forEach(r=>Sd(r,e,t)),Sd(null,e,t),i.join("")}function Dd(n){return Math.round(Date.now()/1e3)+n}function Ad(){return Symbol("auth-callback")}var Fe=()=>typeof window<"u"&&typeof document<"u",Ai={tested:!1,writable:!1},Fo=()=>{if(!Fe())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Ai.tested)return Ai.writable;let n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),Ai.tested=!0,Ai.writable=!0}catch{Ai.tested=!0,Ai.writable=!1}return Ai.writable};function Rd(n){let i={},e=new URL(n);if(e.hash&&e.hash[0]==="#")try{new URLSearchParams(e.hash.substring(1)).forEach((r,o)=>{i[o]=r})}catch{}return e.searchParams.forEach((t,r)=>{i[r]=t}),i}var No=n=>n?(...i)=>n(...i):(...i)=>fetch(...i),Td=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",Ri=async(n,i,e)=>{await n.setItem(i,JSON.stringify(e))},st=async(n,i)=>{let e=await n.getItem(i);if(!e)return null;try{return JSON.parse(e)}catch{return null}},ye=async(n,i)=>{await n.removeItem(i)},dr=class n{constructor(){this.promise=new n.promiseConstructor((i,e)=>{this.resolve=i,this.reject=e})}};dr.promiseConstructor=Promise;function hr(n){let i=n.split(".");if(i.length!==3)throw new si("Invalid JWT structure");for(let t=0;t<i.length;t++)if(!vd.test(i[t]))throw new si("JWT not in base64url format");return{header:JSON.parse(ss(i[0])),payload:JSON.parse(ss(i[1])),signature:li(i[2]),raw:{header:i[0],payload:i[1]}}}async function Od(n){return await new Promise(i=>{setTimeout(()=>i(null),n)})}function Id(n,i){return new Promise((t,r)=>{(async()=>{for(let o=0;o<1/0;o++)try{let a=await n(o);if(!i(o,null,a)){t(a);return}}catch(a){if(!i(o,a)){r(a);return}}})()})}function $p(n){return("0"+n.toString(16)).substr(-2)}function Wp(){let i=new Uint32Array(56);if(typeof crypto>"u"){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",t=e.length,r="";for(let o=0;o<56;o++)r+=e.charAt(Math.floor(Math.random()*t));return r}return crypto.getRandomValues(i),Array.from(i,$p).join("")}async function Gp(n){let e=new TextEncoder().encode(n),t=await crypto.subtle.digest("SHA-256",e),r=new Uint8Array(t);return Array.from(r).map(o=>String.fromCharCode(o)).join("")}async function qp(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;let e=await Gp(n);return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ci(n,i,e=!1){let t=Wp(),r=t;e&&(r+="/recovery"),await Ri(n,`${i}-code-verifier`,r);let o=await qp(t);return[o,t===o?"plain":"s256"]}var Kp=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Md(n){let i=n.headers.get(or);if(!i||!i.match(Kp))return null;try{return new Date(`${i}T00:00:00.0Z`)}catch{return null}}function Pd(n){if(!n)throw new Error("Missing exp claim");let i=Math.floor(Date.now()/1e3);if(n<=i)throw new Error("JWT has expired")}function Fd(n){switch(n){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}var Yp=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function kt(n){if(!Yp.test(n))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function it(n){if(!n.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Lo(){let n={};return new Proxy(n,{get:(i,e)=>{if(e==="__isUserNotAvailableProxy")return!0;if(typeof e=="symbol"){let t=e.toString();if(t==="Symbol(Symbol.toPrimitive)"||t==="Symbol(Symbol.toStringTag)"||t==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${e}" property of the session object is not supported. Please use getUser() instead.`)},set:(i,e)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${e}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(i,e)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${e}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Nd(n,i){return new Proxy(n,{get:(e,t,r)=>{if(t==="__isInsecureUserWarningProxy")return!0;if(typeof t=="symbol"){let o=t.toString();if(o==="Symbol(Symbol.toPrimitive)"||o==="Symbol(Symbol.toStringTag)"||o==="Symbol(util.inspect.custom)"||o==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(e,t,r)}return!i.value&&typeof t=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),i.value=!0),Reflect.get(e,t,r)}})}function ls(n){return JSON.parse(JSON.stringify(n))}var Ti=n=>{if(typeof n=="object"&&n!==null){let i=n;if(typeof i.msg=="string")return i.msg;if(typeof i.message=="string")return i.message;if(typeof i.error_description=="string")return i.error_description;if(typeof i.error=="string")return i.error}return JSON.stringify(n)},Xp=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function Ld(n){var i;if(!Td(n))throw new mn(Ti(n),0);if(Xp.includes(n.status))throw new mn(Ti(n),n.status);let e;try{e=await n.json()}catch(o){throw new Ue(Ti(o),o)}let t,r=Md(n);if(r&&r.getTime()>=os["2024-01-01"].timestamp&&typeof e=="object"&&e&&typeof e.code=="string"?t=e.code:typeof e=="object"&&e&&typeof e.error_code=="string"&&(t=e.error_code),t){if(t==="weak_password")throw new lr(Ti(e),n.status,((i=e.weak_password)===null||i===void 0?void 0:i.reasons)||[]);if(t==="session_not_found")throw new be}else if(typeof e=="object"&&e&&typeof e.weak_password=="object"&&e.weak_password&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.reasons.reduce((o,a)=>o&&typeof a=="string",!0))throw new lr(Ti(e),n.status,e.weak_password.reasons);throw new Io(Ti(e),n.status||500,t)}var Qp=(n,i,e,t)=>{let r={method:n,headers:i?.headers||{}};return n==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},i?.headers),r.body=JSON.stringify(t),Object.assign(Object.assign({},r),e))};async function E(n,i,e,t){var r;let o=Object.assign({},t?.headers);o[or]||(o[or]=os["2024-01-01"].name),t?.jwt&&(o.Authorization=`Bearer ${t.jwt}`);let a=(r=t?.query)!==null&&r!==void 0?r:{};t?.redirectTo&&(a.redirect_to=t.redirectTo);let s=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await Jp(n,i,e+s,{headers:o,noResolveJson:t?.noResolveJson},{},t?.body);return t?.xform?t?.xform(l):{data:Object.assign({},l),error:null}}async function Jp(n,i,e,t,r,o){let a=Qp(i,t,r,o),s;try{s=await n(e,Object.assign({},a))}catch(l){throw console.error(l),new mn(Ti(l),0)}if(s.ok||await Ld(s),t?.noResolveJson)return s;try{return await s.json()}catch(l){await Ld(l)}}function nt(n){var i;let e=null;Zp(n)&&(e=Object.assign({},n),n.expires_at||(e.expires_at=Dd(n.expires_in)));let t=(i=n.user)!==null&&i!==void 0?i:typeof n?.id=="string"?n:null;return{data:{session:e,user:t},error:null}}function cs(n){let i=nt(n);return!i.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((e,t)=>e&&typeof t=="string",!0)&&(i.data.weak_password=n.weak_password),i}function Et(n){var i;return{data:{user:(i=n.user)!==null&&i!==void 0?i:n},error:null}}function Vd(n){return{data:n,error:null}}function jd(n){let{action_link:i,email_otp:e,hashed_token:t,redirect_to:r,verification_type:o}=n,a=vi(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),s={action_link:i,email_otp:e,hashed_token:t,redirect_to:r,verification_type:o},l=Object.assign({},a);return{data:{properties:s,user:l},error:null}}function ds(n){return n}function Zp(n){return!!n.access_token&&!!n.refresh_token&&!!n.expires_in}var Vo=["global","local","others"];var pn=class{constructor({url:i="",headers:e={},fetch:t,experimental:r}){this.url=i,this.headers=e,this.fetch=No(t),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(i,e=Vo[0]){if(Vo.indexOf(e)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Vo.join(", ")}`);try{return await E(this.fetch,"POST",`${this.url}/logout?scope=${e}`,{headers:this.headers,jwt:i,noResolveJson:!0}),{data:null,error:null}}catch(t){if(y(t))return{data:null,error:t};throw t}}async inviteUserByEmail(i,e={}){try{return await E(this.fetch,"POST",`${this.url}/invite`,{body:{email:i,data:e.data},headers:this.headers,redirectTo:e.redirectTo,xform:Et})}catch(t){if(y(t))return{data:{user:null},error:t};throw t}}async generateLink(i){try{let{options:e}=i,t=vi(i,["options"]),r=Object.assign(Object.assign({},t),e);return"newEmail"in t&&(r.new_email=t?.newEmail,delete r.newEmail),await E(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:jd,redirectTo:e?.redirectTo})}catch(e){if(y(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(i){try{return await E(this.fetch,"POST",`${this.url}/admin/users`,{body:i,headers:this.headers,xform:Et})}catch(e){if(y(e))return{data:{user:null},error:e};throw e}}async listUsers(i){var e,t,r,o,a,s,l;try{let c={nextPage:null,lastPage:0,total:0},h=await E(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(t=(e=i?.page)===null||e===void 0?void 0:e.toString())!==null&&t!==void 0?t:"",per_page:(o=(r=i?.perPage)===null||r===void 0?void 0:r.toString())!==null&&o!==void 0?o:""},xform:ds});if(h.error)throw h.error;let u=await h.json(),p=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,m=(l=(s=h.headers.get("link"))===null||s===void 0?void 0:s.split(","))!==null&&l!==void 0?l:[];return m.length>0&&(m.forEach(f=>{let g=parseInt(f.split(";")[0].split("=")[1].substring(0,1)),w=JSON.parse(f.split(";")[1].split("=")[1]);c[`${w}Page`]=g}),c.total=parseInt(p)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(y(c))return{data:{users:[]},error:c};throw c}}async getUserById(i){kt(i);try{return await E(this.fetch,"GET",`${this.url}/admin/users/${i}`,{headers:this.headers,xform:Et})}catch(e){if(y(e))return{data:{user:null},error:e};throw e}}async updateUserById(i,e){kt(i);try{return await E(this.fetch,"PUT",`${this.url}/admin/users/${i}`,{body:e,headers:this.headers,xform:Et})}catch(t){if(y(t))return{data:{user:null},error:t};throw t}}async deleteUser(i,e=!1){kt(i);try{return await E(this.fetch,"DELETE",`${this.url}/admin/users/${i}`,{headers:this.headers,body:{should_soft_delete:e},xform:Et})}catch(t){if(y(t))return{data:{user:null},error:t};throw t}}async _listFactors(i){kt(i.userId);try{let{data:e,error:t}=await E(this.fetch,"GET",`${this.url}/admin/users/${i.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:e,error:t}}catch(e){if(y(e))return{data:null,error:e};throw e}}async _deleteFactor(i){kt(i.userId),kt(i.id);try{return{data:await E(this.fetch,"DELETE",`${this.url}/admin/users/${i.userId}/factors/${i.id}`,{headers:this.headers}),error:null}}catch(e){if(y(e))return{data:null,error:e};throw e}}async _listOAuthClients(i){var e,t,r,o,a,s,l;try{let c={nextPage:null,lastPage:0,total:0},h=await E(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(t=(e=i?.page)===null||e===void 0?void 0:e.toString())!==null&&t!==void 0?t:"",per_page:(o=(r=i?.perPage)===null||r===void 0?void 0:r.toString())!==null&&o!==void 0?o:""},xform:ds});if(h.error)throw h.error;let u=await h.json(),p=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,m=(l=(s=h.headers.get("link"))===null||s===void 0?void 0:s.split(","))!==null&&l!==void 0?l:[];return m.length>0&&(m.forEach(f=>{let g=parseInt(f.split(";")[0].split("=")[1].substring(0,1)),w=JSON.parse(f.split(";")[1].split("=")[1]);c[`${w}Page`]=g}),c.total=parseInt(p)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(y(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(i){try{return await E(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:i,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(y(e))return{data:null,error:e};throw e}}async _getOAuthClient(i){try{return await E(this.fetch,"GET",`${this.url}/admin/oauth/clients/${i}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(y(e))return{data:null,error:e};throw e}}async _updateOAuthClient(i,e){try{return await E(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${i}`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(y(t))return{data:null,error:t};throw t}}async _deleteOAuthClient(i){try{return await E(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${i}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(y(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(i){try{return await E(this.fetch,"POST",`${this.url}/admin/oauth/clients/${i}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(y(e))return{data:null,error:e};throw e}}async _listCustomProviders(i){try{let e={};return i?.type&&(e.type=i.type),await E(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:e,xform:t=>{var r;return{data:{providers:(r=t?.providers)!==null&&r!==void 0?r:[]},error:null}}})}catch(e){if(y(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(i){try{return await E(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:i,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(y(e))return{data:null,error:e};throw e}}async _getCustomProvider(i){try{return await E(this.fetch,"GET",`${this.url}/admin/custom-providers/${i}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(y(e))return{data:null,error:e};throw e}}async _updateCustomProvider(i,e){try{return await E(this.fetch,"PUT",`${this.url}/admin/custom-providers/${i}`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(y(t))return{data:null,error:t};throw t}}async _deleteCustomProvider(i){try{return await E(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${i}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(y(e))return{data:null,error:e};throw e}}async _adminListPasskeys(i){it(this.experimental),kt(i.userId);try{return await E(this.fetch,"GET",`${this.url}/admin/users/${i.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(y(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(i){it(this.experimental),kt(i.userId),kt(i.passkeyId);try{return await E(this.fetch,"DELETE",`${this.url}/admin/users/${i.userId}/passkeys/${i.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(y(e))return{data:null,error:e};throw e}}};function hs(n={}){return{getItem:i=>n[i]||null,setItem:(i,e)=>{n[i]=e},removeItem:i=>{delete n[i]}}}var ef={debug:!!(globalThis&&Fo()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")},jo=class extends Error{constructor(i){super(i),this.isAcquireTimeout=!0}};function Bd(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function us(n){if(!/^0x[a-fA-F0-9]{40}$/.test(n))throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);return n.toLowerCase()}function zd(n){return parseInt(n,16)}function Hd(n){let i=new TextEncoder().encode(n);return"0x"+Array.from(i,t=>t.toString(16).padStart(2,"0")).join("")}function Ud(n){var i;let{chainId:e,domain:t,expirationTime:r,issuedAt:o=new Date,nonce:a,notBefore:s,requestId:l,resources:c,scheme:h,uri:u,version:p}=n;{if(!Number.isInteger(e))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${e}`);if(!t)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(p!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${p}`);if(!((i=n.statement)===null||i===void 0)&&i.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`)}let m=us(n.address),f=h?`${h}://${t}`:t,g=n.statement?`${n.statement}
`:"",w=`${f} wants you to sign in with your Ethereum account:
${m}

${g}`,v=`URI: ${u}
Version: ${p}
Chain ID: ${e}${a?`
Nonce: ${a}`:""}
Issued At: ${o.toISOString()}`;if(r&&(v+=`
Expiration Time: ${r.toISOString()}`),s&&(v+=`
Not Before: ${s.toISOString()}`),l&&(v+=`
Request ID: ${l}`),c){let L=`
Resources:`;for(let P of c){if(!P||typeof P!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${P}`);L+=`
- ${P}`}v+=L}return`${w}
${v}`}var _e=class extends Error{constructor({message:i,code:e,cause:t,name:r}){var o;super(i,{cause:t}),this.__isWebAuthnError=!0,this.name=(o=r??(t instanceof Error?t.name:void 0))!==null&&o!==void 0?o:"Unknown Error",this.code=e}toJSON(){return{name:this.name,message:this.message,code:this.code}}},Oi=class extends _e{constructor(i,e){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e,message:i}),this.name="WebAuthnUnknownError",this.originalError=e}};function $d({error:n,options:i}){var e,t,r;let{publicKey:o}=i;if(!o)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(i.signal instanceof AbortSignal)return new _e({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else if(n.name==="ConstraintError"){if(((e=o.authenticatorSelection)===null||e===void 0?void 0:e.requireResidentKey)===!0)return new _e({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:n});if(i.mediation==="conditional"&&((t=o.authenticatorSelection)===null||t===void 0?void 0:t.userVerification)==="required")return new _e({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:n});if(((r=o.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new _e({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:n})}else{if(n.name==="InvalidStateError")return new _e({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:n});if(n.name==="NotAllowedError")return new _e({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="NotSupportedError")return o.pubKeyCredParams.filter(s=>s.type==="public-key").length===0?new _e({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:n}):new _e({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:n});if(n.name==="SecurityError"){let a=window.location.hostname;if(ms(a)){if(o.rp.id!==a)return new _e({message:`The RP ID "${o.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new _e({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="TypeError"){if(o.user.id.byteLength<1||o.user.id.byteLength>64)return new _e({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:n})}else if(n.name==="UnknownError")return new _e({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new _e({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}function Wd({error:n,options:i}){let{publicKey:e}=i;if(!e)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(i.signal instanceof AbortSignal)return new _e({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else{if(n.name==="NotAllowedError")return new _e({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="SecurityError"){let t=window.location.hostname;if(ms(t)){if(e.rpId!==t)return new _e({message:`The RP ID "${e.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new _e({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="UnknownError")return new _e({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new _e({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}var ps=class{createNewAbortSignal(){if(this.controller){let e=new Error("Cancelling existing WebAuthn API call for new one");e.name="AbortError",this.controller.abort(e)}let i=new AbortController;return this.controller=i,i.signal}cancelCeremony(){if(this.controller){let i=new Error("Manually cancelling existing WebAuthn API call");i.name="AbortError",this.controller.abort(i),this.controller=void 0}}},Ho=new ps;function fs(n){if(!n)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(n);let{challenge:i,user:e,excludeCredentials:t}=n,r=vi(n,["challenge","user","excludeCredentials"]),o=li(i).buffer,a=Object.assign(Object.assign({},e),{id:li(e.id).buffer}),s=Object.assign(Object.assign({},r),{challenge:o,user:a});if(t&&t.length>0){s.excludeCredentials=new Array(t.length);for(let l=0;l<t.length;l++){let c=t[l];s.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:li(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return s}function gs(n){if(!n)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(n);let{challenge:i,allowCredentials:e}=n,t=vi(n,["challenge","allowCredentials"]),r=li(i).buffer,o=Object.assign(Object.assign({},t),{challenge:r});if(e&&e.length>0){o.allowCredentials=new Array(e.length);for(let a=0;a<e.length;a++){let s=e[a];o.allowCredentials[a]=Object.assign(Object.assign({},s),{id:li(s.id).buffer,type:s.type||"public-key",transports:s.transports})}}return o}function _s(n){var i;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();let e=n;return{id:n.id,rawId:n.id,response:{attestationObject:Vt(new Uint8Array(n.response.attestationObject)),clientDataJSON:Vt(new Uint8Array(n.response.clientDataJSON))},type:"public-key",clientExtensionResults:n.getClientExtensionResults(),authenticatorAttachment:(i=e.authenticatorAttachment)!==null&&i!==void 0?i:void 0}}function vs(n){var i;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();let e=n,t=n.getClientExtensionResults(),r=n.response;return{id:n.id,rawId:n.id,response:{authenticatorData:Vt(new Uint8Array(r.authenticatorData)),clientDataJSON:Vt(new Uint8Array(r.clientDataJSON)),signature:Vt(new Uint8Array(r.signature)),userHandle:r.userHandle?Vt(new Uint8Array(r.userHandle)):void 0},type:"public-key",clientExtensionResults:t,authenticatorAttachment:(i=e.authenticatorAttachment)!==null&&i!==void 0?i:void 0}}function ms(n){return n==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)}function ur(){var n,i;return!!(Fe()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((n=navigator?.credentials)===null||n===void 0?void 0:n.create)=="function"&&typeof((i=navigator?.credentials)===null||i===void 0?void 0:i.get)=="function")}async function bs(n){try{let i=await navigator.credentials.create(n);return i?i instanceof PublicKeyCredential?{data:i,error:null}:{data:null,error:new Oi("Browser returned unexpected credential type",i)}:{data:null,error:new Oi("Empty credential response",i)}}catch(i){return{data:null,error:$d({error:i,options:n})}}}async function ys(n){try{let i=await navigator.credentials.get(n);return i?i instanceof PublicKeyCredential?{data:i,error:null}:{data:null,error:new Oi("Browser returned unexpected credential type",i)}:{data:null,error:new Oi("Empty credential response",i)}}catch(i){return{data:null,error:Wd({error:i,options:n})}}}var tf={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},nf={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Bo(...n){let i=r=>r!==null&&typeof r=="object"&&!Array.isArray(r),e=r=>r instanceof ArrayBuffer||ArrayBuffer.isView(r),t={};for(let r of n)if(r)for(let o in r){let a=r[o];if(a!==void 0)if(Array.isArray(a))t[o]=a;else if(e(a))t[o]=a;else if(i(a)){let s=t[o];i(s)?t[o]=Bo(s,a):t[o]=Bo(a)}else t[o]=a}return t}function rf(n,i){return Bo(tf,n,i||{})}function of(n,i){return Bo(nf,n,i||{})}var zo=class{constructor(i){this.client=i,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(i){return this.client.mfa.enroll(Object.assign(Object.assign({},i),{factorType:"webauthn"}))}async _challenge({factorId:i,webauthn:e,friendlyName:t,signal:r},o){var a;try{let{data:s,error:l}=await this.client.mfa.challenge({factorId:i,webauthn:e});if(!s)return{data:null,error:l};let c=r??Ho.createNewAbortSignal();if(s.webauthn.type==="create"){let{user:h}=s.webauthn.credential_options.publicKey;if(!h.name){let u=t;if(u)h.name=`${h.id}:${u}`;else{let m=(await this.client.getUser()).data.user,f=((a=m?.user_metadata)===null||a===void 0?void 0:a.name)||m?.email||m?.id||"User";h.name=`${h.id}:${f}`}}h.displayName||(h.displayName=h.name)}switch(s.webauthn.type){case"create":{let h=rf(s.webauthn.credential_options.publicKey,o?.create),{data:u,error:p}=await bs({publicKey:h,signal:c});return u?{data:{factorId:i,challengeId:s.id,webauthn:{type:s.webauthn.type,credential_response:u}},error:null}:{data:null,error:p}}case"request":{let h=of(s.webauthn.credential_options.publicKey,o?.request),{data:u,error:p}=await ys(Object.assign(Object.assign({},s.webauthn.credential_options),{publicKey:h,signal:c}));return u?{data:{factorId:i,challengeId:s.id,webauthn:{type:s.webauthn.type,credential_response:u}},error:null}:{data:null,error:p}}}}catch(s){return y(s)?{data:null,error:s}:{data:null,error:new Ue("Unexpected error in challenge",s)}}}async _verify({challengeId:i,factorId:e,webauthn:t}){return this.client.mfa.verify({factorId:e,challengeId:i,webauthn:t})}async _authenticate({factorId:i,webauthn:{rpId:e=typeof window<"u"?window.location.hostname:void 0,rpOrigins:t=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},o){if(!e)return{data:null,error:new ai("rpId is required for WebAuthn authentication")};try{if(!ur())return{data:null,error:new Ue("Browser does not support WebAuthn",null)};let{data:a,error:s}=await this.challenge({factorId:i,webauthn:{rpId:e,rpOrigins:t},signal:r},{request:o});if(!a)return{data:null,error:s};let{webauthn:l}=a;return this._verify({factorId:i,challengeId:a.challengeId,webauthn:{type:l.type,rpId:e,rpOrigins:t,credential_response:l.credential_response}})}catch(a){return y(a)?{data:null,error:a}:{data:null,error:new Ue("Unexpected error in authenticate",a)}}}async _register({friendlyName:i,webauthn:{rpId:e=typeof window<"u"?window.location.hostname:void 0,rpOrigins:t=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},o){if(!e)return{data:null,error:new ai("rpId is required for WebAuthn registration")};try{if(!ur())return{data:null,error:new Ue("Browser does not support WebAuthn",null)};let{data:a,error:s}=await this._enroll({friendlyName:i});if(!a)return await this.client.mfa.listFactors().then(h=>{var u;return(u=h.data)===null||u===void 0?void 0:u.all.find(p=>p.factor_type==="webauthn"&&p.friendly_name===i&&p.status!=="unverified")}).then(h=>h?this.client.mfa.unenroll({factorId:h?.id}):void 0),{data:null,error:s};let{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:e,rpOrigins:t},signal:r},{create:o});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:e,rpOrigins:t,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return y(a)?{data:null,error:a}:{data:null,error:new Ue("Unexpected error in register",a)}}}};Bd();var af={url:fd,storageKey:gd,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:_d,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}};var fn={},sf=(()=>{class n{get jwks(){var e,t;return(t=(e=fn[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){fn[this.storageKey]=Object.assign(Object.assign({},fn[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=fn[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){fn[this.storageKey]=Object.assign(Object.assign({},fn[this.storageKey]),{cachedAt:e})}constructor(e){var t,r,o;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let a=Object.assign(Object.assign({},af),e);if(this.storageKey=a.storageKey,this.instanceID=(t=n.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,n.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!a.debug,typeof a.debug=="function"&&(this.logger=a.debug),this.instanceID>0&&Fe()){let s=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(s),this.logDebugMessages&&console.trace(s)}if(this.persistSession=a.persistSession,this.autoRefreshToken=a.autoRefreshToken,this.experimental=(r=a.experimental)!==null&&r!==void 0?r:{},this.admin=new pn({url:a.url,headers:a.headers,fetch:a.fetch,experimental:this.experimental}),this.url=a.url,this.headers=a.headers,this.fetch=No(a.fetch),this.detectSessionInUrl=a.detectSessionInUrl,this.flowType=a.flowType,this.hasCustomAuthorizationHeader=a.hasCustomAuthorizationHeader,this.throwOnError=a.throwOnError,this.lockAcquireTimeout=a.lockAcquireTimeout,a.lock!=null&&(this.lock=a.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new zo(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(a.storage?this.storage=a.storage:Fo()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=hs(this.memoryStorage)),a.userStorage&&(this.userStorage=a.userStorage)):(this.memoryStorage={},this.storage=hs(this.memoryStorage)),Fe()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(s){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",s)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async s=>{this._debug("received broadcast notification from other tab or client",s),(s.data.event==="TOKEN_REFRESHED"||s.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(s.data.event,s.data.session,!1)}catch(l){this._debug("#broadcastChannel","error",l)}})}a.skipAutoInitialize||this.initialize().catch(s=>{this._debug("#initialize()","error",s)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${To}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){var e;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();let t=await this.initializePromise,r=(e=this._pendingInitNotifications)!==null&&e!==void 0?e:[];this._pendingInitNotifications=null;for(let o of r)await this._notifyAllSubscribers(o.event,o.session,o.broadcast);return t}async _initialize(){var e;try{let t={},r="none";if(Fe()&&(t=Rd(window.location.href),this._isImplicitGrantCallback(t)?r="implicit":await this._isPKCECallback(t)&&(r="pkce")),Fe()&&this.detectSessionInUrl&&r!=="none"){let{data:o,error:a}=await this._getSessionFromURL(t,r);if(a){if(this._debug("#_initialize()","error detecting session from URL",a),wd(a)){let c=(e=a.details)===null||e===void 0?void 0:e.code;if(c==="identity_already_exists"||c==="identity_not_found"||c==="single_identity_not_deletable")return{error:a}}return{error:a}}let{session:s,redirectType:l}=o;return this._debug("#_initialize()","detected session in URL",s,"redirect type",l),await this._saveSession(s),setTimeout(async()=>{l==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",s):await this._notifyAllSubscribers("SIGNED_IN",s)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return y(t)?this._returnResult({error:t}):this._returnResult({error:new Ue("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,r,o;try{let a=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(t=e?.options)===null||t===void 0?void 0:t.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(o=e?.options)===null||o===void 0?void 0:o.captchaToken}},xform:nt}),{data:s,error:l}=a;if(l||!s)return this._returnResult({data:{user:null,session:null},error:l});let c=s.session,h=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:h,session:c},error:null})}catch(a){if(y(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signUp(e){var t,r,o;try{let a;if("email"in e){let{email:u,password:p,options:m}=e,f=null,g=null;this.flowType==="pkce"&&([f,g]=await ci(this.storage,this.storageKey)),a=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:m?.emailRedirectTo,body:{email:u,password:p,data:(t=m?.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:m?.captchaToken},code_challenge:f,code_challenge_method:g},xform:nt})}else if("phone"in e){let{phone:u,password:p,options:m}=e;a=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:p,data:(r=m?.data)!==null&&r!==void 0?r:{},channel:(o=m?.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:m?.captchaToken}},xform:nt})}else throw new Ei("You must provide either an email or phone number and a password");let{data:s,error:l}=a;if(l||!s)return await ye(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:l});let c=s.session,h=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:h,session:c},error:null})}catch(a){if(await ye(this.storage,`${this.storageKey}-code-verifier`),y(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithPassword(e){try{let t;if("email"in e){let{email:a,password:s,options:l}=e;t=await E(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:a,password:s,gotrue_meta_security:{captcha_token:l?.captchaToken}},xform:cs})}else if("phone"in e){let{phone:a,password:s,options:l}=e;t=await E(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:a,password:s,gotrue_meta_security:{captcha_token:l?.captchaToken}},xform:cs})}else throw new Ei("You must provide either an email or phone number and a password");let{data:r,error:o}=t;if(o)return this._returnResult({data:{user:null,session:null},error:o});if(!r||!r.session||!r.user){let a=new Lt;return this._returnResult({data:{user:null,session:null},error:a})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:o})}catch(t){if(y(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,r,o,a;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(o=e.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(a=e.options)===null||a===void 0?void 0:a.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){let{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,r,o,a,s,l,c,h,u,p,m;let f,g;if("message"in e)f=e.message,g=e.signature;else{let{chain:w,wallet:v,statement:L,options:P}=e,F;if(Fe())if(typeof v=="object")F=v;else{let Tt=window;if("ethereum"in Tt&&typeof Tt.ethereum=="object"&&"request"in Tt.ethereum&&typeof Tt.ethereum.request=="function")F=Tt.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof v!="object"||!P?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");F=v}let ne=new URL((t=P?.url)!==null&&t!==void 0?t:window.location.href),$e=await F.request({method:"eth_requestAccounts"}).then(Tt=>Tt).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!$e||$e.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");let ue=us($e[0]),Ne=(r=P?.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!Ne){let Tt=await F.request({method:"eth_chainId"});Ne=zd(Tt)}let Qu={domain:ne.host,address:ue,statement:L,uri:ne.href,version:"1",chainId:Ne,nonce:(o=P?.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(s=(a=P?.signInWithEthereum)===null||a===void 0?void 0:a.issuedAt)!==null&&s!==void 0?s:new Date,expirationTime:(l=P?.signInWithEthereum)===null||l===void 0?void 0:l.expirationTime,notBefore:(c=P?.signInWithEthereum)===null||c===void 0?void 0:c.notBefore,requestId:(h=P?.signInWithEthereum)===null||h===void 0?void 0:h.requestId,resources:(u=P?.signInWithEthereum)===null||u===void 0?void 0:u.resources};f=Ud(Qu),g=await F.request({method:"personal_sign",params:[Hd(f),ue]})}try{let{data:w,error:v}=await E(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:g},!((p=e.options)===null||p===void 0)&&p.captchaToken?{gotrue_meta_security:{captcha_token:(m=e.options)===null||m===void 0?void 0:m.captchaToken}}:null),xform:nt});if(v)throw v;if(!w||!w.session||!w.user){let L=new Lt;return this._returnResult({data:{user:null,session:null},error:L})}return w.session&&(await this._saveSession(w.session),await this._notifyAllSubscribers("SIGNED_IN",w.session)),this._returnResult({data:Object.assign({},w),error:v})}catch(w){if(y(w))return this._returnResult({data:{user:null,session:null},error:w});throw w}}async signInWithSolana(e){var t,r,o,a,s,l,c,h,u,p,m,f;let g,w;if("message"in e)g=e.message,w=e.signature;else{let{chain:v,wallet:L,statement:P,options:F}=e,ne;if(Fe())if(typeof L=="object")ne=L;else{let ue=window;if("solana"in ue&&typeof ue.solana=="object"&&("signIn"in ue.solana&&typeof ue.solana.signIn=="function"||"signMessage"in ue.solana&&typeof ue.solana.signMessage=="function"))ne=ue.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof L!="object"||!F?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");ne=L}let $e=new URL((t=F?.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in ne&&ne.signIn){let ue=await ne.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},F?.signInWithSolana),{version:"1",domain:$e.host,uri:$e.href}),P?{statement:P}:null)),Ne;if(Array.isArray(ue)&&ue[0]&&typeof ue[0]=="object")Ne=ue[0];else if(ue&&typeof ue=="object"&&"signedMessage"in ue&&"signature"in ue)Ne=ue;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in Ne&&"signature"in Ne&&(typeof Ne.signedMessage=="string"||Ne.signedMessage instanceof Uint8Array)&&Ne.signature instanceof Uint8Array)g=typeof Ne.signedMessage=="string"?Ne.signedMessage:new TextDecoder().decode(Ne.signedMessage),w=Ne.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in ne)||typeof ne.signMessage!="function"||!("publicKey"in ne)||typeof ne!="object"||!ne.publicKey||!("toBase58"in ne.publicKey)||typeof ne.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${$e.host} wants you to sign in with your Solana account:`,ne.publicKey.toBase58(),...P?["",P,""]:[""],"Version: 1",`URI: ${$e.href}`,`Issued At: ${(o=(r=F?.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((a=F?.signInWithSolana)===null||a===void 0)&&a.notBefore?[`Not Before: ${F.signInWithSolana.notBefore}`]:[],...!((s=F?.signInWithSolana)===null||s===void 0)&&s.expirationTime?[`Expiration Time: ${F.signInWithSolana.expirationTime}`]:[],...!((l=F?.signInWithSolana)===null||l===void 0)&&l.chainId?[`Chain ID: ${F.signInWithSolana.chainId}`]:[],...!((c=F?.signInWithSolana)===null||c===void 0)&&c.nonce?[`Nonce: ${F.signInWithSolana.nonce}`]:[],...!((h=F?.signInWithSolana)===null||h===void 0)&&h.requestId?[`Request ID: ${F.signInWithSolana.requestId}`]:[],...!((p=(u=F?.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||p===void 0)&&p.length?["Resources",...F.signInWithSolana.resources.map(Ne=>`- ${Ne}`)]:[]].join(`
`);let ue=await ne.signMessage(new TextEncoder().encode(g),"utf8");if(!ue||!(ue instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");w=ue}}try{let{data:v,error:L}=await E(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:Vt(w)},!((m=e.options)===null||m===void 0)&&m.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:nt});if(L)throw L;if(!v||!v.session||!v.user){let P=new Lt;return this._returnResult({data:{user:null,session:null},error:P})}return v.session&&(await this._saveSession(v.session),await this._notifyAllSubscribers("SIGNED_IN",v.session)),this._returnResult({data:Object.assign({},v),error:L})}catch(v){if(y(v))return this._returnResult({data:{user:null,session:null},error:v});throw v}}async _exchangeCodeForSession(e){let t=await st(this.storage,`${this.storageKey}-code-verifier`),[r,o]=(t??"").split("/");try{if(!r&&this.flowType==="pkce")throw new Mo;let{data:a,error:s}=await E(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:nt});if(await ye(this.storage,`${this.storageKey}-code-verifier`),s)throw s;if(!a||!a.session||!a.user){let l=new Lt;return this._returnResult({data:{user:null,session:null,redirectType:null},error:l})}return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers(o==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",a.session)),this._returnResult({data:Object.assign(Object.assign({},a),{redirectType:o??null}),error:s})}catch(a){if(await ye(this.storage,`${this.storageKey}-code-verifier`),y(a))return this._returnResult({data:{user:null,session:null,redirectType:null},error:a});throw a}}async signInWithIdToken(e){try{let{options:t,provider:r,token:o,access_token:a,nonce:s}=e,l=await E(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:o,access_token:a,nonce:s,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:nt}),{data:c,error:h}=l;if(h)return this._returnResult({data:{user:null,session:null},error:h});if(!c||!c.session||!c.user){let u=new Lt;return this._returnResult({data:{user:null,session:null},error:u})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),this._returnResult({data:c,error:h})}catch(t){if(y(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,r,o,a,s;try{if("email"in e){let{email:l,options:c}=e,h=null,u=null;this.flowType==="pkce"&&([h,u]=await ci(this.storage,this.storageKey));let{error:p}=await E(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:l,data:(t=c?.data)!==null&&t!==void 0?t:{},create_user:(r=c?.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:c?.captchaToken},code_challenge:h,code_challenge_method:u},redirectTo:c?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:p})}if("phone"in e){let{phone:l,options:c}=e,{data:h,error:u}=await E(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:l,data:(o=c?.data)!==null&&o!==void 0?o:{},create_user:(a=c?.shouldCreateUser)!==null&&a!==void 0?a:!0,gotrue_meta_security:{captcha_token:c?.captchaToken},channel:(s=c?.channel)!==null&&s!==void 0?s:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:h?.message_id},error:u})}throw new Ei("You must provide either an email or phone number.")}catch(l){if(await ye(this.storage,`${this.storageKey}-code-verifier`),y(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async verifyOtp(e){var t,r;try{let o,a;"options"in e&&(o=(t=e.options)===null||t===void 0?void 0:t.redirectTo,a=(r=e.options)===null||r===void 0?void 0:r.captchaToken);let{data:s,error:l}=await E(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:a}}),redirectTo:o,xform:nt});if(l)throw l;if(!s)throw new Error("An error occurred on token verification.");let c=s.session,h=s.user;return c?.access_token&&(await this._saveSession(c),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c)),this._returnResult({data:{user:h,session:c},error:null})}catch(o){if(y(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async signInWithSSO(e){var t,r,o,a,s;try{let l=null,c=null;this.flowType==="pkce"&&([l,c]=await ci(this.storage,this.storageKey));let h=await E(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&r!==void 0?r:void 0}),!((o=e?.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:l,code_challenge_method:c}),headers:this.headers,xform:Vd});return!((a=h.data)===null||a===void 0)&&a.url&&Fe()&&!(!((s=e.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(h.data.url),this._returnResult(h)}catch(l){if(await ye(this.storage,`${this.storageKey}-code-verifier`),y(l))return this._returnResult({data:null,error:l});throw l}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:r}=e;if(r)throw r;if(!t)throw new be;let{error:o}=await E(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:o})})}catch(e){if(y(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{let t=`${this.url}/resend`;if("email"in e){let{email:r,type:o,options:a}=e,s=null,l=null;this.flowType==="pkce"&&([s,l]=await ci(this.storage,this.storageKey));let{error:c}=await E(this.fetch,"POST",t,{headers:this.headers,body:{email:r,type:o,gotrue_meta_security:{captcha_token:a?.captchaToken},code_challenge:s,code_challenge_method:l},redirectTo:a?.emailRedirectTo});return c&&await ye(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:c})}else if("phone"in e){let{phone:r,type:o,options:a}=e,{data:s,error:l}=await E(this.fetch,"POST",t,{headers:this.headers,body:{phone:r,type:o,gotrue_meta_security:{captcha_token:a?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:s?.message_id},error:l})}throw new Ei("You must provide either an email or phone number and a type")}catch(t){if(await ye(this.storage,`${this.storageKey}-code-verifier`),y(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){let r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await r,await t()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;let r=t();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){let o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{let t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null,t=await st(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};let r=e.expires_at?e.expires_at*1e3-Date.now()<Oo:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){let s=await st(this.userStorage,this.storageKey+"-user");s?.user?e.user=s.user:e.user=Lo()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let s={value:this.suppressGetSessionWarning};e.user=Nd(e.user,s),s.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}let{data:o,error:a}=await this._callRefreshToken(e.refresh_token);if(a){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){let l=await st(this.storage,this.storageKey);if(l&&l.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:a})}return this._returnResult({data:{session:o},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return this.lock!=null?t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):t=await this._getUser(),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await E(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Et}):await this._useSession(async t=>{var r,o,a;let{data:s,error:l}=t;if(l)throw l;return!(!((r=s.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new be}:await E(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(a=(o=s.session)===null||o===void 0?void 0:o.access_token)!==null&&a!==void 0?a:void 0,xform:Et})})}catch(t){if(y(t))return cr(t)&&(await this._removeSession(),await ye(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t)):await this._updateUser(e,t)}async _updateUser(e,t={}){try{return await this._useSession(async r=>{let{data:o,error:a}=r;if(a)throw a;if(!o.session)throw new be;let s=o.session,l=null,c=null;this.flowType==="pkce"&&e.email!=null&&([l,c]=await ci(this.storage,this.storageKey));let{data:h,error:u}=await E(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:l,code_challenge_method:c}),jwt:s.access_token,xform:Et});if(u)throw u;return s.user=h.user,await this._saveSession(s),await this._notifyAllSubscribers("USER_UPDATED",s),this._returnResult({data:{user:s.user},error:null})})}catch(r){if(await ye(this.storage,`${this.storageKey}-code-verifier`),y(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new be;let t=Date.now()/1e3,r=t,o=!0,a=null,{payload:s}=hr(e.access_token);if(s.exp&&(r=s.exp,o=r<=t),o){let{data:l,error:c}=await this._callRefreshToken(e.refresh_token);if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l)return{data:{user:null,session:null},error:null};a=l}else{let{data:l,error:c}=await this._getUser(e.access_token);if(c)return this._returnResult({data:{user:null,session:null},error:c});a={access_token:e.access_token,refresh_token:e.refresh_token,user:l.user,token_type:"bearer",expires_in:r-t,expires_at:r},await this._saveSession(a),await this._notifyAllSubscribers("SIGNED_IN",a)}return this._returnResult({data:{user:a.user,session:a},error:null})}catch(t){if(y(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async t=>{var r;if(!e){let{data:s,error:l}=t;if(l)throw l;e=(r=s.session)!==null&&r!==void 0?r:void 0}if(!e?.refresh_token)throw new be;let{data:o,error:a}=await this._callRefreshToken(e.refresh_token);return a?this._returnResult({data:{user:null,session:null},error:a}):o?this._returnResult({data:{user:o.user,session:o},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(y(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){var r;try{if(!Fe())throw new Di("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Di(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new ar("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Di("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new ar("No code detected.");let{data:F,error:ne}=await this._exchangeCodeForSession(e.code);if(ne)throw ne;let $e=new URL(window.location.href);return $e.searchParams.delete("code"),window.history.replaceState(window.history.state,"",$e.toString()),{data:{session:F.session,redirectType:(r=F.redirectType)!==null&&r!==void 0?r:null},error:null}}let{provider_token:o,provider_refresh_token:a,access_token:s,refresh_token:l,expires_in:c,expires_at:h,token_type:u}=e;if(!s||!c||!l||!u)throw new Di("No session defined in URL");let p=Math.round(Date.now()/1e3),m=parseInt(c),f=p+m;h&&(f=parseInt(h));let g=f-p;g*1e3<=St&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${m}s`);let w=f-m;p-w>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",w,f,p):p-w<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",w,f,p);let{data:v,error:L}=await this._getUser(s);if(L)throw L;let P={provider_token:o,provider_refresh_token:a,access_token:s,expires_in:m,expires_at:f,refresh_token:l,token_type:u,user:v.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:P,redirectType:e.type},error:null})}catch(o){if(y(o))return this._returnResult({data:{session:null,redirectType:null},error:o});throw o}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){let t=await st(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var r;let{data:o,error:a}=t;if(a&&!cr(a))return this._returnResult({error:a});let s=(r=o.session)===null||r===void 0?void 0:r.access_token;if(s){let{error:l}=await this.admin.signOut(s,e);if(l&&!(yd(l)&&(l.status===404||l.status===401||l.status===403)||cr(l)))return this._returnResult({error:l})}return e!=="others"&&(await this._removeSession(),await ye(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){let t=Ad(),r={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,r),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)}):await this._emitInitialSession(t)))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async t=>{var r,o;try{let{data:{session:a},error:s}=t;if(s)throw s;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",a)),this._debug("INITIAL_SESSION","callback id",e,"session",a)}catch(a){await((o=this.stateChangeEmitters.get(e))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",a),cr(a)?console.warn(a):console.error(a)}})}async resetPasswordForEmail(e,t={}){let r=null,o=null;this.flowType==="pkce"&&([r,o]=await ci(this.storage,this.storageKey,!0));try{return await E(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:o,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(a){if(await ye(this.storage,`${this.storageKey}-code-verifier`),y(a))return this._returnResult({data:null,error:a});throw a}}async getUserIdentities(){var e;try{let{data:t,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;try{let{data:r,error:o}=await this._useSession(async a=>{var s,l,c,h,u;let{data:p,error:m}=a;if(m)throw m;let f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(s=e.options)===null||s===void 0?void 0:s.redirectTo,scopes:(l=e.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=e.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return await E(this.fetch,"GET",f,{headers:this.headers,jwt:(u=(h=p.session)===null||h===void 0?void 0:h.access_token)!==null&&u!==void 0?u:void 0})});if(o)throw o;return Fe()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(r?.url),this._returnResult({data:{provider:e.provider,url:r?.url},error:null})}catch(r){if(y(r))return this._returnResult({data:{provider:e.provider,url:null},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var r;try{let{error:o,data:{session:a}}=t;if(o)throw o;let{options:s,provider:l,token:c,access_token:h,nonce:u}=e,p=await E(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=a?.access_token)!==null&&r!==void 0?r:void 0,body:{provider:l,id_token:c,access_token:h,nonce:u,link_identity:!0,gotrue_meta_security:{captcha_token:s?.captchaToken}},xform:nt}),{data:m,error:f}=p;return f?this._returnResult({data:{user:null,session:null},error:f}):!m||!m.session||!m.user?this._returnResult({data:{user:null,session:null},error:new Lt}):(m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("USER_UPDATED",m.session)),this._returnResult({data:m,error:f}))}catch(o){if(await ye(this.storage,`${this.storageKey}-code-verifier`),y(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var r,o;let{data:a,error:s}=t;if(s)throw s;return await E(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(o=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&o!==void 0?o:void 0})})}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){let t="#_refreshAccessToken()";this._debug(t,"begin");try{let r=Date.now();return await Id(async o=>(o>0&&await Od(200*Math.pow(2,o-1)),this._debug(t,"refreshing attempt",o),await E(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:nt})),(o,a)=>{let s=200*Math.pow(2,o);return a&&as(a)&&Date.now()+s-r<St})}catch(r){if(this._debug(t,"error",r),y(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){let r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",r),Fe()&&!t.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,t;let r="#_recoverAndRefresh()";this._debug(r,"begin");try{let o=await st(this.storage,this.storageKey);if(o&&this.userStorage){let s=await st(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!s&&(s={user:o.user},await Ri(this.userStorage,this.storageKey+"-user",s)),o.user=(e=s?.user)!==null&&e!==void 0?e:Lo()}else if(o&&!o.user&&!o.user){let s=await st(this.storage,this.storageKey+"-user");s&&s?.user?(o.user=s.user,await ye(this.storage,this.storageKey+"-user"),await Ri(this.storage,this.storageKey,o)):o.user=Lo()}if(this._debug(r,"session from storage",o),!this._isValidSession(o)){this._debug(r,"session is not valid"),o!==null&&await this._removeSession();return}let a=((t=o.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<Oo;if(this._debug(r,`session has${a?"":" not"} expired with margin of ${Oo}s`),a){if(this.autoRefreshToken&&o.refresh_token){let{error:s}=await this._callRefreshToken(o.refresh_token);s&&(xd(s)?this._debug(r,"refresh discarded by commit guard",s):this._debug(r,"refresh failed",s))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{let{data:s,error:l}=await this._getUser(o.access_token);!l&&s?.user?(o.user=s.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(s){console.error("Error getting user data:",s),this._debug(r,"error getting user data, skipping SIGNED_IN notification",s)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(r,"error",o),console.error(o);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var t,r;if(!e)throw new be;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;let o="#_callRefreshToken()";this._debug(o,"begin");try{this.refreshingDeferred=new dr;let a=await st(this.storage,this.storageKey),{data:s,error:l}=await this._refreshAccessToken(e);if(l)throw l;if(!s.session)throw new be;let c=await st(this.storage,this.storageKey);if(a!==null&&(c===null||c.refresh_token!==a.refresh_token)){this._debug(o,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:c?"replaced":"cleared"});let m={data:null,error:new sr};return this.refreshingDeferred.resolve(m),m}let u=this._sessionRemovalEpoch;if(await this._saveSession(s.session),this._sessionRemovalEpoch!==u){this._debug(o,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await ye(this.storage,this.storageKey),this.userStorage&&await ye(this.userStorage,this.storageKey+"-user");let m={data:null,error:new sr};return this.refreshingDeferred.resolve(m),m}await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);let p={data:s.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(p),p}catch(a){if(this._debug(o,"error",a),y(a)){let s={data:null,error:a};if(!as(a)){let l=await st(this.storage,this.storageKey);!!(l?.expires_at&&l.expires_at*1e3>Date.now())?this._debug(o,"proactive refresh failed, access token still valid \u2014 preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:s,expiresAt:Date.now()+pd},(t=this.refreshingDeferred)===null||t===void 0||t.resolve(s),s}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(a),a}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(e,t,r=!0){if(this._pendingInitNotifications!==null&&r){this._pendingInitNotifications.push({event:e,session:t,broadcast:r});return}let o=`#_notifyAllSubscribers(${e})`;this._debug(o,"begin",t,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:t});let a=[],s=Array.from(this.stateChangeEmitters.values()).map(async l=>{try{await l.callback(e,t)}catch(c){a.push(c)}});if(await Promise.all(s),a.length>0){for(let l=0;l<a.length;l+=1)console.error(a[l]);throw a[0]}}finally{this._debug(o,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await ye(this.storage,`${this.storageKey}-code-verifier`);let t=Object.assign({},e),r=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&t.user&&await Ri(this.userStorage,this.storageKey+"-user",{user:t.user});let o=Object.assign({},t);delete o.user;let a=ls(o);await Ri(this.storage,this.storageKey,a)}else{let o=ls(t);await Ri(this.storage,this.storageKey,o)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await ye(this.storage,this.storageKey),await ye(this.storage,this.storageKey+"-code-verifier"),await ye(this.storage,this.storageKey+"-user"),this.userStorage&&await ye(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Fe()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");let e=setInterval(()=>this._autoRefreshTokenTick(),St);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:r}}=t;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}let o=Math.floor((r.expires_at*1e3-e)/St);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${St}ms, refresh threshold is ${un} ticks`),o<=un&&await this._callRefreshToken(r.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof jo)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{let e=Date.now();try{await this._useSession(async t=>{let{data:{session:r}}=t;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}let o=Math.floor((r.expires_at*1e3-e)/St);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${St}ms, refresh threshold is ${un} ticks`),o<=un&&await this._callRefreshToken(r.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Fe()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;if(this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(t,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,r){let o=[`provider=${encodeURIComponent(t)}`];if(r?.redirectTo&&o.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r?.scopes&&o.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){let[a,s]=await ci(this.storage,this.storageKey),l=new URLSearchParams({code_challenge:`${encodeURIComponent(a)}`,code_challenge_method:`${encodeURIComponent(s)}`});o.push(l.toString())}if(r?.queryParams){let a=new URLSearchParams(r.queryParams);o.push(a.toString())}return r?.skipBrowserRedirect&&o.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${o.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var r;let{data:o,error:a}=t;return a?this._returnResult({data:null,error:a}):await E(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=o?.session)===null||r===void 0?void 0:r.access_token})})}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var r,o;let{data:a,error:s}=t;if(s)return this._returnResult({data:null,error:s});let l=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:c,error:h}=await E(this.fetch,"POST",`${this.url}/factors`,{body:l,headers:this.headers,jwt:(r=a?.session)===null||r===void 0?void 0:r.access_token});return h?this._returnResult({data:null,error:h}):(e.factorType==="totp"&&c.type==="totp"&&(!((o=c?.totp)===null||o===void 0)&&o.qr_code)&&(c.totp.qr_code=`data:image/svg+xml;utf-8,${c.totp.qr_code}`),this._returnResult({data:c,error:null}))})}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){let t=async()=>{try{return await this._useSession(async r=>{var o;let{data:a,error:s}=r;if(s)return this._returnResult({data:null,error:s});let l=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?_s(e.webauthn.credential_response):vs(e.webauthn.credential_response)})}:{code:e.code}),{data:c,error:h}=await E(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:l,headers:this.headers,jwt:(o=a?.session)===null||o===void 0?void 0:o.access_token});return h?this._returnResult({data:null,error:h}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+c.expires_in},c)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",c),this._returnResult({data:c,error:h}))})}catch(r){if(y(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challenge(e){let t=async()=>{try{return await this._useSession(async r=>{var o;let{data:a,error:s}=r;if(s)return this._returnResult({data:null,error:s});let l=await E(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(o=a?.session)===null||o===void 0?void 0:o.access_token});if(l.error)return l;let{data:c}=l;if(c.type!=="webauthn")return{data:c,error:null};switch(c.webauthn.type){case"create":return{data:Object.assign(Object.assign({},c),{webauthn:Object.assign(Object.assign({},c.webauthn),{credential_options:Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:fs(c.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},c),{webauthn:Object.assign(Object.assign({},c.webauthn),{credential_options:Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:gs(c.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(y(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challengeAndVerify(e){let{data:t,error:r}=await this._challenge({factorId:e.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;let{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};let o={all:[],phone:[],totp:[],webauthn:[]};for(let a of(e=t?.factors)!==null&&e!==void 0?e:[])o.all.push(a),a.status==="verified"&&o[a.factor_type].push(a);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(e){var t,r,o,a;if(e)try{let{payload:f}=hr(e),g=null;f.aal&&(g=f.aal);let w=g,{data:{user:v},error:L}=await this.getUser(e);if(L)return this._returnResult({data:null,error:L});((r=(t=v?.factors)===null||t===void 0?void 0:t.filter(ne=>ne.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(w="aal2");let F=f.amr||[];return{data:{currentLevel:g,nextLevel:w,currentAuthenticationMethods:F},error:null}}catch(f){if(y(f))return this._returnResult({data:null,error:f});throw f}let{data:{session:s},error:l}=await this.getSession();if(l)return this._returnResult({data:null,error:l});if(!s)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:c}=hr(s.access_token),h=null;c.aal&&(h=c.aal);let u=h;((a=(o=s.user.factors)===null||o===void 0?void 0:o.filter(f=>f.status==="verified"))!==null&&a!==void 0?a:[]).length>0&&(u="aal2");let m=c.amr||[];return{data:{currentLevel:h,nextLevel:u,currentAuthenticationMethods:m},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:r},error:o}=t;return o?this._returnResult({data:null,error:o}):r?await E(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:r.access_token,xform:a=>({data:a,error:null})}):this._returnResult({data:null,error:new be})})}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async r=>{let{data:{session:o},error:a}=r;if(a)return this._returnResult({data:null,error:a});if(!o)return this._returnResult({data:null,error:new be});let s=await E(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"approve"},xform:l=>({data:l,error:null})});return s.data&&s.data.redirect_url&&Fe()&&!t?.skipBrowserRedirect&&window.location.assign(s.data.redirect_url),s})}catch(r){if(y(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(e,t){try{return await this._useSession(async r=>{let{data:{session:o},error:a}=r;if(a)return this._returnResult({data:null,error:a});if(!o)return this._returnResult({data:null,error:new be});let s=await E(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"deny"},xform:l=>({data:l,error:null})});return s.data&&s.data.redirect_url&&Fe()&&!t?.skipBrowserRedirect&&window.location.assign(s.data.redirect_url),s})}catch(r){if(y(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:r}=e;return r?this._returnResult({data:null,error:r}):t?await E(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:o=>({data:o,error:null})}):this._returnResult({data:null,error:new be})})}catch(e){if(y(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:r},error:o}=t;return o?this._returnResult({data:null,error:o}):r?(await E(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new be})})}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}async fetchJwk(e,t={keys:[]}){let r=t.keys.find(l=>l.kid===e);if(r)return r;let o=Date.now();if(r=this.jwks.keys.find(l=>l.kid===e),r&&this.jwks_cached_at+bd>o)return r;let{data:a,error:s}=await E(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(s)throw s;return!a.keys||a.keys.length===0||(this.jwks=a,this.jwks_cached_at=o,r=a.keys.find(l=>l.kid===e),!r)?null:r}async getClaims(e,t={}){try{let r=e;if(!r){let{data:f,error:g}=await this.getSession();if(g||!f.session)return this._returnResult({data:null,error:g});r=f.session.access_token}let{header:o,payload:a,signature:s,raw:{header:l,payload:c}}=hr(r);if(!t?.allowExpired)try{Pd(a.exp)}catch(f){throw new si(f instanceof Error?f.message:"JWT validation failed")}let h=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!h){let{error:f}=await this.getUser(r);if(f)throw f;return{data:{claims:a,header:o,signature:s},error:null}}let u=Fd(o.alg),p=await crypto.subtle.importKey("jwk",h,u,!0,["verify"]);if(!await crypto.subtle.verify(u,p,s,Ed(`${l}.${c}`)))throw new si("Invalid JWT signature");return{data:{claims:a,header:o,signature:s},error:null}}catch(r){if(y(r))return this._returnResult({data:null,error:r});throw r}}async signInWithPasskey(e){var t,r,o;it(this.experimental);try{if(!ur())return this._returnResult({data:null,error:new Ue("Browser does not support WebAuthn",null)});let{data:a,error:s}=await this._startPasskeyAuthentication({options:{captchaToken:(t=e?.options)===null||t===void 0?void 0:t.captchaToken}});if(s||!a)return this._returnResult({data:null,error:s});let l=gs(a.options),c=(o=(r=e?.options)===null||r===void 0?void 0:r.signal)!==null&&o!==void 0?o:Ho.createNewAbortSignal(),{data:h,error:u}=await ys({publicKey:l,signal:c});if(u||!h)return this._returnResult({data:null,error:u??new Ue("WebAuthn ceremony failed",null)});let p=vs(h);return this._verifyPasskeyAuthentication({challengeId:a.challenge_id,credential:p})}catch(a){if(y(a))return this._returnResult({data:null,error:a});throw a}}async registerPasskey(e){var t,r;it(this.experimental);try{if(!ur())return this._returnResult({data:null,error:new Ue("Browser does not support WebAuthn",null)});let{data:o,error:a}=await this._startPasskeyRegistration();if(a||!o)return this._returnResult({data:null,error:a});let s=fs(o.options),l=(r=(t=e?.options)===null||t===void 0?void 0:t.signal)!==null&&r!==void 0?r:Ho.createNewAbortSignal(),{data:c,error:h}=await bs({publicKey:s,signal:l});if(h||!c)return this._returnResult({data:null,error:h??new Ue("WebAuthn ceremony failed",null)});let u=_s(c);return this._verifyPasskeyRegistration({challengeId:o.challenge_id,credential:u})}catch(o){if(y(o))return this._returnResult({data:null,error:o});throw o}}async _startPasskeyRegistration(){it(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!t)return this._returnResult({data:null,error:new be});let{data:o,error:a}=await E(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:o,error:null})})}catch(e){if(y(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){it(this.experimental);try{return await this._useSession(async t=>{let{data:{session:r},error:o}=t;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new be});let{data:a,error:s}=await E(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:r.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return s?this._returnResult({data:null,error:s}):this._returnResult({data:a,error:null})})}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}async _startPasskeyAuthentication(e){var t;it(this.experimental);try{let{data:r,error:o}=await E(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(t=e?.options)===null||t===void 0?void 0:t.captchaToken}}});return o?this._returnResult({data:null,error:o}):this._returnResult({data:r,error:null})}catch(r){if(y(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyAuthentication(e){it(this.experimental);try{let{data:t,error:r}=await E(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:nt});return r?this._returnResult({data:null,error:r}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:t,error:null}))}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}async _listPasskeys(){it(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!t)return this._returnResult({data:null,error:new be});let{data:o,error:a}=await E(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:s=>({data:s,error:null})});return a?this._returnResult({data:null,error:a}):this._returnResult({data:o,error:null})})}catch(e){if(y(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){it(this.experimental);try{return await this._useSession(async t=>{let{data:{session:r},error:o}=t;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new be});let{data:a,error:s}=await E(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,body:{friendly_name:e.friendlyName}});return s?this._returnResult({data:null,error:s}):this._returnResult({data:a,error:null})})}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}async _deletePasskey(e){it(this.experimental);try{return await this._useSession(async t=>{let{data:{session:r},error:o}=t;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new be});let{error:a}=await E(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,noResolveJson:!0});return a?this._returnResult({data:null,error:a}):this._returnResult({data:null,error:null})})}catch(t){if(y(t))return this._returnResult({data:null,error:t});throw t}}}return n.nextInstanceID={},n})(),ws=sf;var lf=ws,xs=lf;var cf="2.110.1",mr="",Wo;typeof Deno<"u"?(mr="deno",Wo=(Uo=Deno.version)===null||Uo===void 0?void 0:Uo.deno):typeof document<"u"?mr="web":typeof navigator<"u"&&navigator.product==="ReactNative"?mr="react-native":(mr="node",Wo=typeof process<"u"?($o=process.version)===null||$o===void 0?void 0:$o.replace(/^v/,""):void 0);var Uo,$o,Kd=[`runtime=${mr}`];Wo&&Kd.push(`runtime-version=${Wo}`);var df={"X-Client-Info":`supabase-js/${cf}; ${Kd.join("; ")}`},hf={headers:df},uf={schema:"public"},mf={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},pf={},ff={enabled:!1,respectSamplingDecision:!0};function gf(n,i,e,t){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(h){try{c(t.next(h))}catch(u){a(u)}}function l(h){try{c(t.throw(h))}catch(u){a(u)}}function c(h){h.done?o(h.value):r(h.value).then(s,l)}c((t=t.apply(n,i||[])).next())})}var Cs=null,_f="@opentelemetry/api";function vf(){return Cs===null&&(Cs=import(_f).catch(()=>null)),Cs}function bf(){return gf(this,void 0,void 0,function*(){try{let n=yield vf();if(!n||!n.propagation||!n.context)return null;let i={};n.propagation.inject(n.context.active(),i);let e=i.traceparent;return e?{traceparent:e,tracestate:i.tracestate,baggage:i.baggage}:null}catch{return null}})}function yf(n){if(!n||typeof n!="string")return null;let i=n.split("-");if(i.length!==4)return null;let[e,t,r,o]=i;if(e.length!==2||t.length!==32||r.length!==16||o.length!==2)return null;let a=/^[0-9a-f]+$/i;return!a.test(e)||!a.test(t)||!a.test(r)||!a.test(o)||t==="00000000000000000000000000000000"||r==="0000000000000000"?null:{version:e,traceId:t,parentId:r,traceFlags:o,isSampled:(parseInt(o,16)&1)===1}}function wf(n,i){if(!n||!i||i.length===0)return!1;let e;if(n instanceof URL)e=n;else try{e=new URL(n)}catch{return!1}for(let t of i)try{if(typeof t=="string"){if(xf(e.hostname,t))return!0}else if(t instanceof RegExp){if(t.test(e.hostname))return!0}else if(typeof t=="function"&&t(e))return!0}catch{continue}return!1}function xf(n,i){if(i===n)return!0;if(i.startsWith("*.")){let e=i.slice(2);if(n.endsWith(e)&&(n===e||n.endsWith("."+e)))return!0}return!1}function Cf(n){let i=[];try{let e=new URL(n);i.push(e.hostname)}catch{}return i.push("*.supabase.co","*.supabase.in"),i.push("localhost","127.0.0.1","[::1]"),i}function pr(n){"@babel/helpers - typeof";return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},pr(n)}function Sf(n,i){if(pr(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,i||"default");if(pr(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function kf(n){var i=Sf(n,"string");return pr(i)=="symbol"?i:i+""}function Ef(n,i,e){return(i=kf(i))in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function Gd(n,i){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);i&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,t)}return e}function we(n){for(var i=1;i<arguments.length;i++){var e=arguments[i]!=null?arguments[i]:{};i%2?Gd(Object(e),!0).forEach(function(t){Ef(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Gd(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}var Df=n=>n?(...i)=>n(...i):(...i)=>fetch(...i),Af=()=>Headers,Rf=(n,i,e,t,r)=>{let o=Df(t),a=Af(),s=r?.enabled===!0,l=r?.respectSamplingDecision!==!1,c=s?Cf(i):null;return async(h,u)=>{var p;let m=(p=await e())!==null&&p!==void 0?p:n,f=new a(u?.headers);if(f.has("apikey")||f.set("apikey",n),f.has("Authorization")||f.set("Authorization",`Bearer ${m}`),c){let g=await Tf(h,c,l);g&&(g.traceparent&&!f.has("traceparent")&&f.set("traceparent",g.traceparent),g.tracestate&&!f.has("tracestate")&&f.set("tracestate",g.tracestate),g.baggage&&!f.has("baggage")&&f.set("baggage",g.baggage))}return o(h,we(we({},u),{},{headers:f}))}};async function Tf(n,i,e){if(!wf(typeof n=="string"||n instanceof URL?n:n.url,i))return null;let t=await bf();if(!t||!t.traceparent)return null;if(e){let r=yf(t.traceparent);if(r&&!r.isSampled)return null}return t}function qd(n){return typeof n=="boolean"?{enabled:n}:n}function Of(n){return n.endsWith("/")?n:n+"/"}function If(n,i){var e,t,r,o,a,s;let{db:l,auth:c,realtime:h,global:u}=n,{db:p,auth:m,realtime:f,global:g}=i,w=qd(n.tracePropagation),v=qd(i.tracePropagation),L={db:we(we({},p),l),auth:we(we({},m),c),realtime:we(we({},f),h),storage:{},global:we(we(we({},g),u),{},{headers:we(we({},(e=g?.headers)!==null&&e!==void 0?e:{}),(t=u?.headers)!==null&&t!==void 0?t:{})}),tracePropagation:{enabled:(r=(o=w?.enabled)!==null&&o!==void 0?o:v?.enabled)!==null&&r!==void 0?r:!1,respectSamplingDecision:(a=(s=w?.respectSamplingDecision)!==null&&s!==void 0?s:v?.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return n.accessToken?L.accessToken=n.accessToken:delete L.accessToken,L}function Mf(n){let i=n?.trim();if(!i)throw new Error("supabaseUrl is required.");if(!i.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Of(i))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var Pf=class extends xs{constructor(n){super(n)}},Ff=class{constructor(n,i,e){var t,r;this.supabaseUrl=n,this.supabaseKey=i;let o=Mf(n);if(!i)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",o),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",o),this.storageUrl=new URL("storage/v1",o),this.functionsUrl=new URL("functions/v1",o);let a=`sb-${o.hostname.split(".")[0]}-auth-token`,s={db:uf,realtime:pf,auth:we(we({},mf),{},{storageKey:a}),global:hf,tracePropagation:ff},l=If(e??{},s);if(this.settings=l,this.storageKey=(t=l.auth.storageKey)!==null&&t!==void 0?t:"",this.headers=(r=l.global.headers)!==null&&r!==void 0?r:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(h,u)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=Rf(i,n,this._getAccessToken.bind(this),l.global.fetch,l.tracePropagation),this.realtime=this._initRealtimeClient(we({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(h=>this.realtime.setAuth(h)).catch(h=>console.warn("Failed to set initial Realtime auth token:",h)),this.rest=new Uc(new URL("rest/v1",o).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit}),this.storage=new md(this.storageUrl.href,this.headers,this.fetch,e?.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new Wn(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(n){return this.rest.from(n)}schema(n){return this.rest.schema(n)}rpc(n,i={},e={head:!1,get:!1,count:void 0}){return this.rest.rpc(n,i,e)}channel(n,i={config:{}}){return this.realtime.channel(n,i)}getChannels(){return this.realtime.getChannels()}removeChannel(n){return this.realtime.removeChannel(n)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var n=this,i,e;if(n.accessToken)return await n.accessToken();let{data:t}=await n.auth.getSession();return(i=(e=t.session)===null||e===void 0?void 0:e.access_token)!==null&&i!==void 0?i:n.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:n,persistSession:i,detectSessionInUrl:e,storage:t,userStorage:r,storageKey:o,flowType:a,lock:s,debug:l,throwOnError:c,experimental:h,lockAcquireTimeout:u,skipAutoInitialize:p},m,f){let g={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Pf({url:this.authUrl.href,headers:we(we({},g),m),storageKey:o,autoRefreshToken:n,persistSession:i,detectSessionInUrl:e,storage:t,userStorage:r,flowType:a,lock:s,debug:l,throwOnError:c,experimental:h,fetch:f,lockAcquireTimeout:u,skipAutoInitialize:p,hasCustomAuthorizationHeader:Object.keys(this.headers).some(w=>w.toLowerCase()==="authorization")})}_initRealtimeClient(n){return new Jn(this.realtimeUrl.href,we(we({},n),{},{params:we(we({},{apikey:this.supabaseKey}),n?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,i)=>{this._handleTokenChanged(n,"CLIENT",i?.access_token)})}_handleTokenChanged(n,i,e){(n==="TOKEN_REFRESHED"||n==="SIGNED_IN")&&this.changedAccessToken!==e?(this.changedAccessToken=e,this.realtime.setAuth(e)):n==="SIGNED_OUT"&&(this.realtime.setAuth(),i=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}},Yd=(n,i,e)=>new Ff(n,i,e);function Nf(){if(typeof window<"u")return!1;let n=globalThis.process;if(!n)return!1;let i=n.version;if(i==null)return!1;let e=i.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=20:!1}Nf()&&console.warn("\u26A0\uFE0F  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");var Ss={production:!1,supabaseUrl:"https://ccztfzlrcjqhygsxxnmi.supabase.co",supabaseKey:"sb_publishable_kIAkx4BuAH3G5iyydMehBw_a8cD1Gv5"};var Go=class n{supabase;constructor(){this.supabase=Yd(Ss.supabaseUrl,Ss.supabaseKey)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})};var Xd=class n{supabaseService=d(Go);router=d(ac);login(i,e){return On(this.executarLoginSupabase(i,e))}async executarLoginSupabase(i,e){try{let{data:t,error:r}=await this.supabaseService.supabase.auth.signInWithPassword({email:i,password:e});if(r)throw new Error("E-mail ou senha incorretos.");let{data:o,error:a}=await this.supabaseService.supabase.from("membros").select("*").eq("id",t.user.id).single();if(a||!o)throw new Error("Perfil n\xE3o encontrado.");return this.atualizarLocalStorage(o),{sucesso:!0,usuario:o}}catch(t){return{sucesso:!1,mensagem:t.message}}}atualizarLocalStorage(i){console.log({perfil:i}),localStorage.setItem("user_email",i.email),localStorage.setItem("user_nome",`${i.nome} ${i.sobrenome}`),localStorage.setItem("user_nivel",i.nivel_acesso),i.setor_responsavel?localStorage.setItem("user_setor",i.setor_responsavel):localStorage.removeItem("user_setor"),i.foto_url?localStorage.setItem("user_foto",i.foto_url):localStorage.removeItem("user_foto")}cadastrar(i){return On(this.executarCadastroSupabase(i))}async executarCadastroSupabase(i){try{let{data:e,error:t}=await this.supabaseService.supabase.auth.signUp({email:i.email,password:i.senha});if(t)throw new Error(t.message);if(!e.user)throw new Error("Erro ao gerar identifica\xE7\xE3o do usu\xE1rio.");let r=null;if(i.foto){let a=i.foto.name.split(".").pop(),s=`${e.user.id}-perfil.${a}`,{error:l}=await this.supabaseService.supabase.storage.from("fotos_membros").upload(s,i.foto,{cacheControl:"3600",upsert:!0});if(l)console.error("Erro ao subir foto:",l);else{let{data:c}=this.supabaseService.supabase.storage.from("fotos_membros").getPublicUrl(s);r=c.publicUrl}}let{error:o}=await this.supabaseService.supabase.from("membros").insert([{id:e.user.id,nome:i.nome,sobrenome:i.sobrenome,email:i.email,telefone:i.telefone,data_nascimento:i.dataNascimento||null,cargo:"MEMBRO",nivel_acesso:"USER",status:"ATIVO",foto_url:r}]);if(o)throw new Error("Erro ao salvar os dados do perfil.");return{sucesso:!0,mensagem:"Cadastro realizado com sucesso!"}}catch(e){let t=e.message;return t.includes("already registered")&&(t="Este e-mail j\xE1 est\xE1 cadastrado."),t.includes("Password should be at least")&&(t="A senha deve ter pelo menos 6 caracteres."),{sucesso:!1,mensagem:t}}}async logout(){await this.supabaseService.supabase.auth.signOut(),localStorage.removeItem("user_email"),localStorage.removeItem("user_nome"),localStorage.removeItem("user_nivel"),localStorage.removeItem("user_setor"),localStorage.removeItem("user_foto"),this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})};var Lf=new b("cdk-dir-doc",{providedIn:"root",factory:()=>d(J)}),Vf=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Qd(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Vf.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Ee=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Ce("ltr");change=new $;constructor(){let e=d(Lf,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Qd(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ks;try{ks=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ks=!1}var te=(()=>{class n{_platformId=d(Hl);isBrowser=this._platformId?rc(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ks)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function jt(n,i=0){return qo(n)?Number(n):arguments.length===2?i:0}function qo(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function rt(n){return n instanceof D?n.nativeElement:n}var ut=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(ut||{}),Ko,Ii;function Yo(){if(Ii==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ii=!1,Ii;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ii=!0;else{let n=Element.prototype.scrollTo;n?Ii=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Ii=!1}}return Ii}function gn(){if(typeof document!="object"||!document)return ut.NORMAL;if(Ko==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",n.appendChild(e),document.body.appendChild(n),Ko=ut.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Ko=n.scrollLeft===0?ut.NEGATED:ut.INVERTED),n.remove()}return Ko}var fr=class{};function gr(n){return n&&typeof n.connect=="function"&&!(n instanceof Il)}var mt=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(mt||{}),Xo=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,r,o){i.forEachOperation((a,s,l)=>{let c,h;if(a.previousIndex==null){let u=()=>t(a,s,l);c=this._insertView(u,l,e,r(a)),h=c?mt.INSERTED:mt.REPLACED}else l==null?(this._detachAndCacheView(s,e),h=mt.REMOVED):(c=this._moveView(s,l,e,r(a)),h=mt.MOVED);o&&o({context:c?.context,operation:h,record:a})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,r){let o=this._insertViewFromCache(e,t);if(o){o.context.$implicit=r;return}let a=i();return t.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,r){let o=t.get(i);return t.move(o,e),o.context.$implicit=r,o}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var ee=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({})}return n})();var jf=20,Mi=(()=>{class n{_ngZone=d(G);_platform=d(te);_renderer=d(Ze).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new x;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=jf){return this._platform.isBrowser?new Ot(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(In(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Re()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(xe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=rt(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Es=(()=>{class n{elementRef=d(D);scrollDispatcher=d(Mi);ngZone=d(G);dir=d(Ee,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new x;_renderer=d(pe);_cleanupScroll;_elementScrolled=new x;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&gn()!=ut.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),gn()==ut.INVERTED?e.left=e.right:gn()==ut.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Yo()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:t:e=="end"&&(e=a?t:r),a&&gn()==ut.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&gn()==ut.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Bf=20,lt=(()=>{class n{_platform=d(te);_listeners;_viewportSize=null;_change=new x;_document=d(J);constructor(){let e=d(G),t=d(Ze).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=Bf){return e>0?this._change.pipe(In(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Jd=new b("CDK_VIRTUAL_SCROLL_VIEWPORT");var Bt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({})}return n})(),_r=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[ee,Bt,ee,Bt]})}return n})();var Qo=class{applyChanges(i,e,t,r,o){i.forEachOperation((a,s,l)=>{let c,h;if(a.previousIndex==null){let u=t(a,s,l);c=e.createEmbeddedView(u.templateRef,u.context,u.index),h=mt.INSERTED}else l==null?(e.remove(s),h=mt.REMOVED):(c=e.get(s),e.move(c,l),h=mt.MOVED);o&&o({context:c?.context,operation:h,record:a})})}detach(){}};var $f=[[["caption"]],[["colgroup"],["col"]],"*"],Wf=["caption","colgroup, col","*"];function Gf(n,i){n&1&&H(0,2)}function qf(n,i){n&1&&(C(0,"thead",0),Pe(1,1),A(),C(2,"tbody",0),Pe(3,2)(4,3),A(),C(5,"tfoot",0),Pe(6,4),A())}function Kf(n,i){n&1&&Pe(0,1)(1,2)(2,3)(3,4)}var pt=new b("CDK_TABLE");var ea=(()=>{class n{template=d(Le);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),ta=(()=>{class n{template=d(Le);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),th=(()=>{class n{template=d(Le);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),_n=(()=>{class n{_table=d(pt,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,r,o){if(t&1&&Ke(o,ea,5)(o,ta,5)(o,th,5),t&2){let a;O(a=I())&&(r.cell=a.first),O(a=I())&&(r.headerCell=a.first),O(a=I())&&(r.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",k],stickyEnd:[2,"stickyEnd","stickyEnd",k]}})}return n})(),Zo=class{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}},ih=(()=>{class n extends Zo{constructor(){super(d(_n),d(D))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[W]})}return n})();var nh=(()=>{class n extends Zo{constructor(){let e=d(_n),t=d(D);super(e,t);let r=e._table?._getCellRole();r&&t.nativeElement.setAttribute("role",r)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[W]})}return n})();var As=(()=>{class n{template=d(Le);_differs=d(Ci);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof br?e.headerCell.template:this instanceof Rs?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,features:[le]})}return n})(),br=(()=>{class n extends As{_table=d(pt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(Le),d(Ci))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",k]},features:[W,le]})}return n})(),Rs=(()=>{class n extends As{_table=d(pt,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(d(Le),d(Ci))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",k]},features:[W,le]})}return n})(),ia=(()=>{class n extends As{_table=d(pt,{optional:!0});when;constructor(){super(d(Le),d(Ci))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[W]})}return n})(),Pi=(()=>{class n{_viewContainer=d(We);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Ts=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Pe(0,0)},dependencies:[Pi],encapsulation:2})}return n})();var Os=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Pe(0,0)},dependencies:[Pi],encapsulation:2})}return n})(),rh=(()=>{class n{templateRef=d(Le);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Zd=["top","bottom","left","right"],Ds=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(i=>this._updateCachedSizes(i)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(i,e,t=!0,r=!0,o,a,s){this._isNativeHtmlTable=i,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=a,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(i);let t=[];for(let r of i)r.nodeType===r.ELEMENT_NODE&&t.push(r,...Array.from(r.children));Se({write:()=>{for(let r of t)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(i,e,t,r=!0,o=!0){if(!i.length||!this._isBrowser||!(e.some(w=>w)||t.some(w=>w))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=i[0],s=a.children.length,l=this.direction==="rtl",c=l?"right":"left",h=l?"left":"right",u=e.lastIndexOf(!0),p=t.indexOf(!0),m,f,g;o&&this._updateStickyColumnReplayQueue({rows:[...i],stickyStartStates:[...e],stickyEndStates:[...t]}),Se({earlyRead:()=>{m=this._getCellWidths(a,r),f=this._getStickyStartColumnPositions(m,e),g=this._getStickyEndColumnPositions(m,t)},write:()=>{for(let w of i)for(let v=0;v<s;v++){let L=w.children[v];e[v]&&this._addStickyStyle(L,c,f[v],v===u),t[v]&&this._addStickyStyle(L,h,g[v],v===p)}this._positionListener&&m.some(w=>!!w)&&(this._positionListener.stickyColumnsUpdated({sizes:u===-1?[]:m.slice(0,u+1).map((w,v)=>e[v]?w:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:p===-1?[]:m.slice(p).map((w,v)=>t[v+p]?w:null).reverse()}))}},{injector:this._tableInjector})}stickRows(i,e,t){if(!this._isBrowser)return;let r=t==="bottom"?i.slice().reverse():i,o=t==="bottom"?e.slice().reverse():e,a=[],s=[],l=[];Se({earlyRead:()=>{for(let c=0,h=0;c<r.length;c++){if(!o[c])continue;a[c]=h;let u=r[c];l[c]=this._isNativeHtmlTable?Array.from(u.children):[u];let p=this._retrieveElementSize(u).height;h+=p,s[c]=p}},write:()=>{let c=o.lastIndexOf(!0);for(let h=0;h<r.length;h++){if(!o[h])continue;let u=a[h],p=h===c;for(let m of l[h])this._addStickyStyle(m,t,u,p)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:a,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:a,elements:l})}},{injector:this._tableInjector})}updateStickyFooterContainer(i,e){this._isNativeHtmlTable&&Se({write:()=>{let t=i.querySelector("tfoot");t&&(e.some(r=>!r)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(i,e){if(!i.classList.contains(this._stickCellCss))return;for(let r of e)i.style[r]="",i.classList.remove(this._borderCellCss[r]);Zd.some(r=>e.indexOf(r)===-1&&i.style[r])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,t,r){i.classList.add(this._stickCellCss),r&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${t}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){let e={top:100,bottom:10,left:1,right:1},t=0;for(let r of Zd)i.style[r]&&(t+=e[r]);return t?`${t}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],r=i.children;for(let o=0;o<r.length;o++){let a=r[o];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(i,e){let t=[],r=0;for(let o=0;o<i.length;o++)e[o]&&(t[o]=r,r+=i[o]);return t}_getStickyEndColumnPositions(i,e){let t=[],r=0;for(let o=i.length;o>0;o--)e[o]&&(t[o]=r,r+=i[o]);return t}_retrieveElementSize(i){let e=this._elemSizeCache.get(i);if(e)return e;let t=i.getBoundingClientRect(),r={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(i,r),this._resizeObserver.observe(i,{box:"border-box"})),r}_updateStickyColumnReplayQueue(i){this._removeFromStickyColumnReplayQueue(i.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(i)}_removeFromStickyColumnReplayQueue(i){let e=new Set(i);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(i){let e=!1;for(let t of i){let r=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};r.width!==this._elemSizeCache.get(t.target)?.width&&Yf(t.target)&&(e=!0),this._elemSizeCache.set(t.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Yf(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(i=>n.classList.contains(i))}var vr=new b("STICKY_POSITIONING_LISTENER");var Is=(()=>{class n{viewContainer=d(We);elementRef=d(D);constructor(){let e=d(pt);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","rowOutlet",""]]})}return n})(),Ms=(()=>{class n{viewContainer=d(We);elementRef=d(D);constructor(){let e=d(pt);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),Ps=(()=>{class n{viewContainer=d(We);elementRef=d(D);constructor(){let e=d(pt);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),Fs=(()=>{class n{viewContainer=d(We);elementRef=d(D);constructor(){let e=d(pt);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Ns=(()=>{class n{_differs=d(Ci);_changeDetectorRef=d(fe);_elementRef=d(D);_dir=d(Ee,{optional:!0});_platform=d(te);_viewRepeater;_viewportRuler=d(lt);_injector=d(Y);_virtualScrollViewport=d(Jd,{optional:!0,host:!0});_positionListener=d(vr,{optional:!0})||d(vr,{optional:!0,skipSelf:!0});_document=d(J);_data;_renderedRange;_onDestroy=new x;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new x;_footerRowStickyUpdates=new x;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new x;_dataStream=new x;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new $;viewChange=new Qt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){d(new Yi("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(X(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Xo:new Qo,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),gr(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(r,o,a)=>this._getEmbeddedViewArgs(r.item,a),r=>r.item.data,r=>{r.operation===mt.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=t.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=eh(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=eh(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let s=0;s<t.length;s++)this._renderRows[s].rowDef===o&&a.push(t[s]);this._addStickyColumnStyles(a,o)}),r.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let a=this._data[o],s=this._getRenderRowsForData(a,o,r.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let l=0;l<s.length;l++){let c=s[l],h=this._cachedRenderRowsMap.get(c.data);h.has(c.rowDef)?h.get(c.rowDef).push(c):h.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,t,r){return this._getRowDefs(e,t).map(a=>{let s=r&&r.has(a)?r.get(a):[];if(s.length){let l=s.shift();return l.dataIndex=t,l}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Jo(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Jo(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Jo(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Jo(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,s)=>{let l=!!s.getColumnsDiff();return a||l},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||r||o}_switchDataSource(e){this._data=[],gr(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;gr(this.dataSource)?e=this.dataSource.connect(this):Oa(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Re(this.dataSource)),this._renderChangeSubscription=gt([e,this.viewChange]).pipe(X(this._onDestroy)).subscribe(([t,r])=>{this._data=t||[],this._renderedRange=r,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let r=Array.from(t?.columns||[]).map(s=>{let l=this._columnDefsByName.get(s);return l}),o=r.map(s=>s.sticky),a=r.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,t){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:t}}_renderRow(e,t,r,o={}){let a=e.viewContainer.createEmbeddedView(t.template,o,r);return this._renderCellTemplateForItem(t,o),a}_renderCellTemplateForItem(e,t){for(let r of this._getCellTemplates(e))Pi.mostRecentCellOutlet&&Pi.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,r=e.length;t<r;t++){let a=e.get(t).context;a.count=r,a.first=t===0,a.last=t===r-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let r=this._columnDefsByName.get(t);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,r)=>t||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new Ds(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Re()).pipe(X(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Ta:Ra;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(In(0,t),X(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),gt([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(X(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s){let l=o.offsets[a],c=r!==0?Math.max(r-l,l):-l;for(let h of s)h.style.top=`${-c}px`}}}),gt([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(X(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let s=o.elements[a];if(s)for(let l of s)l.style.bottom=`${r+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(t){let o=r.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let s=a.querySelectorAll(e._cellSelector);for(let l=0;l<s.length;l++)s[l].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let a=e.start-r.start,s=e.end-e.start,l,c;for(let p=0;p<s;p++){let m=o.get(p+a);if(m&&m.rootNodes.length){l=c=m.rootNodes[0];break}}for(let p=s-1;p>-1;p--){let m=o.get(p+a);if(m&&m.rootNodes.length){c=m.rootNodes[m.rootNodes.length-1];break}}let h=l?.getBoundingClientRect?.(),u=c?.getBoundingClientRect?.();return h&&u?u.bottom-h.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,r,o){if(t&1&&Ke(o,rh,5)(o,_n,5)(o,ia,5)(o,br,5)(o,Rs,5),t&2){let a;O(a=I())&&(r._noDataRow=a.first),O(a=I())&&(r._contentColumnDefs=a),O(a=I())&&(r._contentRowDefs=a),O(a=I())&&(r._contentHeaderRowDefs=a),O(a=I())&&(r._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,r){t&2&&B("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",k],fixedLayout:[2,"fixedLayout","fixedLayout",k],recycleRows:[2,"recycleRows","recycleRows",k]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[Z([{provide:pt,useExisting:n},{provide:vr,useValue:null}])],ngContentSelectors:Wf,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(se($f),H(0),H(1,1),q(2,Gf,1,0),q(3,qf,7,0)(4,Kf,4,0)),t&2&&(S(2),K(r._isServer?2:-1),S(),K(r._isNativeHtmlTable?3:4))},dependencies:[Ms,Is,Fs,Ps],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function Jo(n,i){return n.concat(Array.from(i))}function eh(n,i){let e=i.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let r=t.nodeType===1?t.nodeName:null;if(r===e)return t;if(r==="TABLE")break;t=t.parentNode}return null}var oh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[_r]})}return n})();var yr=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new x;constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};function zt(n){return Array.isArray(n)?n:[n]}function De(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Ht(n){return n!=null&&`${n}`!="false"}var Xf=[[["caption"]],[["colgroup"],["col"]],"*"],Qf=["caption","colgroup, col","*"];function Jf(n,i){n&1&&H(0,2)}function Zf(n,i){n&1&&(C(0,"thead",0),Pe(1,1),A(),C(2,"tbody",2),Pe(3,3)(4,4),A(),C(5,"tfoot",0),Pe(6,5),A())}function eg(n,i){n&1&&Pe(0,1)(1,3)(2,4)(3,5)}var oC=(()=>{class n extends Ns{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,r){t&2&&B("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[Z([{provide:Ns,useExisting:n},{provide:pt,useExisting:n},{provide:vr,useValue:null}]),W],ngContentSelectors:Qf,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(se(Xf),H(0),H(1,1),q(2,Jf,1,0),q(3,Zf,7,0)(4,eg,4,0)),t&2&&(S(2),K(r._isServer?2:-1),S(),K(r._isNativeHtmlTable?3:4))},dependencies:[Ms,Is,Fs,Ps],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),aC=(()=>{class n extends ea{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","matCellDef",""]],features:[Z([{provide:ea,useExisting:n}]),W]})}return n})(),sC=(()=>{class n extends ta{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","matHeaderCellDef",""]],features:[Z([{provide:ta,useExisting:n}]),W]})}return n})();var lC=(()=>{class n extends _n{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[Z([{provide:_n,useExisting:n}]),W]})}return n})(),cC=(()=>{class n extends ih{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[W]})}return n})();var dC=(()=>{class n extends nh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[W]})}return n})();var hC=(()=>{class n extends br{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",k]},features:[Z([{provide:br,useExisting:n}]),W]})}return n})();var uC=(()=>{class n extends ia{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[Z([{provide:ia,useExisting:n}]),W]})}return n})(),mC=(()=>{class n extends Ts{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[Z([{provide:Ts,useExisting:n}]),W],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Pe(0,0)},dependencies:[Pi],encapsulation:2})}return n})();var pC=(()=>{class n extends Os{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[Z([{provide:Os,useExisting:n}]),W],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&Pe(0,0)},dependencies:[Pi],encapsulation:2})}return n})();var Ls=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[oh,ee]})}return n})(),tg=9007199254740991,ah=class extends fr{_data;_renderData=new Qt([]);_filter=new Qt("");_internalPageChanges=new x;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(i){i=Array.isArray(i)?i:[],this._data.next(i),this._renderChangesSubscription||this._filterData(i)}get filter(){return this._filter.value}set filter(i){this._filter.next(i),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(i){this._sort=i,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(i){this._paginator=i,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(i,e)=>{let t=i[e];if(qo(t)){let r=Number(t);return r<tg?r:t}return t};sortData=(i,e)=>{let t=e.active,r=e.direction;return!t||r==""?i:i.sort((o,a)=>{let s=this.sortingDataAccessor(o,t),l=this.sortingDataAccessor(a,t),c=typeof s,h=typeof l;c!==h&&(c==="number"&&(s+=""),h==="number"&&(l+=""));let u=0;return s!=null&&l!=null?s>l?u=1:s<l&&(u=-1):s!=null?u=1:l!=null&&(u=-1),u*(r=="asc"?1:-1)})};filterPredicate=(i,e)=>{let t=e.trim().toLowerCase();return Object.values(i).some(r=>`${r}`.toLowerCase().includes(t))};constructor(i=[]){super(),this._data=new Qt(i),this._updateChangeSubscription()}_updateChangeSubscription(){let i=this._sort?Ae(this._sort.sortChange,this._sort.initialized):Re(null),e=this._paginator?Ae(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Re(null),t=this._data,r=gt([t,this._filter]).pipe(me(([s])=>this._filterData(s))),o=gt([r,i]).pipe(me(([s])=>this._orderData(s))),a=gt([o,e]).pipe(me(([s])=>this._pageData(s)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(s=>this._renderData.next(s))}_filterData(i){return this.filteredData=this.filter==null||this.filter===""?i:i.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(i){return this.sort?this.sortData(i.slice(),this.sort):i}_pageData(i){if(!this.paginator)return i;let e=this.paginator.pageIndex*this.paginator.pageSize;return i.slice(e,e+this.paginator.pageSize)}_updatePaginator(i){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=i,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,r=Math.min(e.pageIndex,t);r!==e.pageIndex&&(e.pageIndex=r,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};function wr(n){return n.buttons===0||n.detail===0}function xr(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Vs;function sh(){if(Vs==null){let n=typeof document<"u"?document.head:null;Vs=!!(n&&(n.createShadowRoot||n.attachShadow))}return Vs}function js(n){if(sh()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Fi(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function Te(n){return n.composedPath?n.composedPath()[0]:n.target}var Cr;function lh(){if(Cr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Cr=!0}))}finally{Cr=Cr||!1}return Cr}function vn(n){return lh()?n:!!n.capture}var ch=new b("cdk-input-modality-detector-options"),dh={ignoreKeys:[18,17,224,91,16]},hh=650,Bs={passive:!0,capture:!0},uh=(()=>{class n{_platform=d(te);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Qt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Te(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<hh||(this._modality.next(wr(e)?"keyboard":"mouse"),this._mostRecentTarget=Te(e))};_onTouchstart=e=>{if(xr(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Te(e)};constructor(){let e=d(G),t=d(J),r=d(ch,{optional:!0});if(this._options=j(j({},dh),r),this.modalityDetected=this._modality.pipe(Ur(1)),this.modalityChanged=this.modalityDetected.pipe(Ia()),this._platform.isBrowser){let o=d(Ze).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Bs),o.listen(t,"mousedown",this._onMousedown,Bs),o.listen(t,"touchstart",this._onTouchstart,Bs)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sr=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Sr||{}),mh=new b("cdk-focus-monitor-default-options"),na=vn({passive:!0,capture:!0}),Ut=(()=>{class n{_ngZone=d(G);_platform=d(te);_inputModalityDetector=d(uh);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(J);_stopInputModalityDetector=new x;constructor(){let e=d(mh,{optional:!0});this._detectionMode=e?.detectionMode||Sr.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=Te(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=rt(e);if(!this._platform.isBrowser||r.nodeType!==1)return Re();let o=js(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let s={checkChildren:t,subject:new x,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=rt(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=rt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Sr.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Sr.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?hh:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=Te(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,na),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,na)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(X(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,na),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,na),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ra=new WeakMap,Oe=(()=>{class n{_appRef;_injector=d(Y);_environmentInjector=d(ei);load(e){let t=this._appRef=this._appRef||this._injector.get(qi),r=ra.get(t);r||(r={loaders:new Set,refs:[]},ra.set(t,r),t.onDestroy(()=>{ra.get(t)?.refs.forEach(o=>o.destroy()),ra.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Xr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var di=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),oa;function ig(){if(oa===void 0&&(oa=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(oa=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return oa}function Ni(n){return ig()?.createHTML(n)||n}function ph(n,i,e){let t=e.sanitize(ti.HTML,i);n.innerHTML=Ni(t||"")}var fh=new Set,Li,bn=(()=>{class n{_platform=d(te);_nonce=d(Ul,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):rg}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ng(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ng(n,i){if(!fh.has(n))try{Li||(Li=document.createElement("style"),i&&Li.setAttribute("nonce",i),Li.setAttribute("type","text/css"),document.head.appendChild(Li)),Li.sheet&&(Li.sheet.insertRule(`@media ${n} {body{ }}`,0),fh.add(n))}catch(e){console.error(e)}}function rg(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var kr=(()=>{class n{_mediaMatcher=d(bn);_zone=d(G);_queries=new Map;_destroySubject=new x;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return gh(zt(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=gh(zt(e)).map(a=>this._registerQuery(a).observable),o=gt(r);return o=Nl(o.pipe(Ye(1)),o.pipe(Ur(1),Hr(0))),o.pipe(me(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Ot(a=>{let s=l=>this._zone.run(()=>a.next(l));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(Me(t),me(({matches:a})=>({query:e,matches:a})),X(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function gh(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var og=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var aa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({providers:[og]})}return n})();var Us=(()=>{class n{_platform=d(te);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return sg(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=ag(fg(e));if(t&&(_h(t)===-1||!this.isVisible(t)))return!1;let r=e.nodeName.toLowerCase(),o=_h(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!mg(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return pg(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ag(n){try{return n.frameElement}catch{return null}}function sg(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function lg(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function cg(n){return hg(n)&&n.type=="hidden"}function dg(n){return ug(n)&&n.hasAttribute("href")}function hg(n){return n.nodeName.toLowerCase()=="input"}function ug(n){return n.nodeName.toLowerCase()=="a"}function yh(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function _h(n){if(!yh(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function mg(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function pg(n){return cg(n)?!1:lg(n)||dg(n)||n.hasAttribute("contenteditable")||yh(n)}function fg(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Hs=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let r=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?Se(i,{injector:this._injector}):setTimeout(i)}},$s=(()=>{class n{_checker=d(Us);_ngZone=d(G);_document=d(J);_injector=d(Y);constructor(){d(Oe).load(di)}create(e,t=!1){return new Hs(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wh=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),xh=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),gg=0,Ws=(()=>{class n{_ngZone=d(G);_defaultOptions=d(xh,{optional:!0});_liveElement;_document=d(J);_sanitizer=d(Jr);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=d(wh,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:ph(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${gg++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var hi=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(hi||{}),vh="cdk-high-contrast-black-on-white",bh="cdk-high-contrast-white-on-black",zs="cdk-high-contrast-active",Ch=(()=>{class n{_platform=d(te);_hasCheckedHighContrastMode=!1;_document=d(J);_breakpointSubscription;constructor(){this._breakpointSubscription=d(kr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return hi.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return hi.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return hi.BLACK_ON_WHITE}return hi.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(zs,vh,bh),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===hi.BLACK_ON_WHITE?e.add(zs,vh):t===hi.WHITE_ON_BLACK&&e.add(zs,bh)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Er=(()=>{class n{constructor(){d(Ch)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[aa]})}return n})();var _g=200,sa=class{_letterKeyStream=new x;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new x;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:_g;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Zt(e=>this._pressedLetters.push(e)),Hr(i),xe(()=>this._pressedLetters.length>0),me(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function ge(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var yn=class{_items;_activeItemIndex=Ce(-1);_activeItem=Ce(null);_wrap=!1;_typeaheadSubscription=Ie.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Pn?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):xi(i)&&(this._effectRef=wi(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new x;change=new x;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new sa(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||ge(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return xi(this._items)?this._items():this._items instanceof Pn?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var ji=class extends yn{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Dr=class extends yn{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Gs={},oe=class n{_appId=d(qr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Gs.hasOwnProperty(i)||(Gs[i]=0),`${i}${e?n._infix+"-":""}${Gs[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ah=" ";function wn(n,i,e){let t=da(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(Ah)))}function ui(n,i,e){let t=da(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(Ah)):n.removeAttribute(i)}function da(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var Rh="cdk-describedby-message",ca="cdk-describedby-host",Ks=0,Th=(()=>{class n{_platform=d(te);_document=d(J);_messageRegistry=new Map;_messagesContainer=null;_id=`${Ks++}`;constructor(){d(Oe).load(di),this._id=d(qr)+"-"+Ks++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=qs(t,r);typeof t!="string"?(Dh(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=qs(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ca}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ca);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");Dh(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(qs(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=da(e,"aria-describedby").filter(r=>r.indexOf(Rh)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);wn(e,"aria-describedby",r.messageElement.id),e.setAttribute(ca,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,ui(e,"aria-describedby",r.messageElement.id),e.removeAttribute(ca)}_isElementDescribedByMessage(e,t){let r=da(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qs(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Dh(n,i){n.id||(n.id=`${Rh}-${i}-${Ks++}`)}function Ys(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var xn,Oh=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Xs(){if(xn)return xn;if(typeof document!="object"||!document)return xn=new Set(Oh),xn;let n=document.createElement("input");return xn=new Set(Oh.filter(i=>(n.setAttribute("type",i),n.type===i))),xn}var Qs=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Ot(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(xe(e=>e.some(t=>t.target===i)),Pa({bufferSize:1,refCount:!0}),X(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Ih=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=d(G);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Qs(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mh={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var vg=new b("MATERIAL_ANIMATIONS"),Ph=null;function Js(){return d(vg,{optional:!0})?.animationsDisabled||d(Kr,{optional:!0})==="NoopAnimations"?"di-disabled":(Ph??=d(bn).matchMedia("(prefers-reduced-motion)").matches,Ph?"reduced-motion":"enabled")}function ve(){return Js()!=="enabled"}var bg=["notch"],yg=["matFormFieldNotchedOutline",""],wg=["*"],Fh=["iconPrefixContainer"],Nh=["textPrefixContainer"],Lh=["iconSuffixContainer"],Vh=["textSuffixContainer"],xg=["textField"],Cg=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Sg=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function kg(n,i){n&1&&de(0,"span",21)}function Eg(n,i){if(n&1&&(C(0,"label",20),H(1,1),q(2,kg,1,0,"span",21),A()),n&2){let e=ie(2);re("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),z("for",e._control.disableAutomaticLabeling?null:e._control.id),S(2),K(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Dg(n,i){if(n&1&&q(0,Eg,3,5,"label",20),n&2){let e=ie();K(e._hasFloatingLabel()?0:-1)}}function Ag(n,i){n&1&&de(0,"div",7)}function Rg(n,i){}function Tg(n,i){if(n&1&&Ge(0,Rg,0,0,"ng-template",13),n&2){ie(2);let e=It(1);re("ngTemplateOutlet",e)}}function Og(n,i){if(n&1&&(C(0,"div",9),q(1,Tg,1,1,null,13),A()),n&2){let e=ie();re("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),S(),K(e._forceDisplayInfixLabel()?-1:1)}}function Ig(n,i){n&1&&(C(0,"div",10,2),H(2,2),A())}function Mg(n,i){n&1&&(C(0,"div",11,3),H(2,3),A())}function Pg(n,i){}function Fg(n,i){if(n&1&&Ge(0,Pg,0,0,"ng-template",13),n&2){ie();let e=It(1);re("ngTemplateOutlet",e)}}function Ng(n,i){n&1&&(C(0,"div",14,4),H(2,4),A())}function Lg(n,i){n&1&&(C(0,"div",15,5),H(2,5),A())}function Vg(n,i){n&1&&de(0,"div",16)}function jg(n,i){n&1&&(C(0,"div",18),H(1,6),A())}function Bg(n,i){if(n&1&&(C(0,"mat-hint",22),He(1),A()),n&2){let e=ie(2);re("id",e._hintLabelId),S(),Mt(e.hintLabel)}}function zg(n,i){if(n&1&&(C(0,"div",19),q(1,Bg,2,2,"mat-hint",22),H(2,7),de(3,"div",23),H(4,8),A()),n&2){let e=ie();S(),K(e.hintLabel?1:-1)}}var Zs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["mat-label"]]})}return n})(),Wh=new b("MatError"),Hg=(()=>{class n{id=d(oe).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,r){t&2&&ze("id",r.id)},inputs:{id:"id"},features:[Z([{provide:Wh,useExisting:n}])]})}return n})(),el=(()=>{class n{align="start";id=d(oe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(ze("id",r.id),z("align",null),B("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Ug=new b("MatPrefix");var $g=new b("MatSuffix");var Gh=new b("FloatingLabelParent"),jh=(()=>{class n{_elementRef=d(D);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=d(Ih);_ngZone=d(G);_parent=d(Gh);_resizeSubscription=new Ie;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Wg(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&B("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Wg(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Bh="mdc-line-ripple--active",ha="mdc-line-ripple--deactivating",zh=(()=>{class n{_elementRef=d(D);_cleanupTransitionEnd;constructor(){let e=d(G),t=d(pe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ha),e.add(Bh)}deactivate(){this._elementRef.nativeElement.classList.add(ha)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(ha);e.propertyName==="opacity"&&r&&t.remove(Bh,ha)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Hh=(()=>{class n{_elementRef=d(D);_ngZone=d(G);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&ke(bg,5),t&2){let o;O(o=I())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&B("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:yg,ngContentSelectors:wg,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(se(),ot(0,"div",1),Be(1,"div",2,0),H(3),qe(),ot(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Bi=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n})}return n})();var Wt=new b("MatFormField"),Gg=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Uh="fill",qg="auto",$h="fixed",Kg="translateY(-50%)",ua=(()=>{class n{_elementRef=d(D);_changeDetectorRef=d(fe);_platform=d(te);_idGenerator=d(oe);_ngZone=d(G);_defaults=d(Gg,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Fn("iconPrefixContainer");_textPrefixContainerSignal=Fn("textPrefixContainer");_iconSuffixContainerSignal=Fn("iconSuffixContainer");_textSuffixContainerSignal=Fn("textSuffixContainer");_prefixSuffixContainers=yt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=tc(Zs);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ht(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||qg}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Uh;this._appearanceSignal.set(t)}_appearanceSignal=Ce(Uh);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||$h}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||$h}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ve();constructor(){let e=this._defaults,t=d(Ee);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),wi(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=yt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Me([void 0,void 0]),me(()=>[t.errorState,t.userAriaDescribedBy]),Ma(),xe(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(X(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ae(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ic({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=yt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",u=`${a+s}px`,m=`calc(${h} * (${u} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,f=`var(--mat-mdc-form-field-label-transform, ${Kg} translateX(${m}))`,g=a+s+l+c;return[f,g]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Jl(o,r._labelChild,Zs,5),Ke(o,Bi,5)(o,Ug,5)(o,$g,5)(o,Wh,5)(o,el,5)),t&2){Na();let a;O(a=I())&&(r._formFieldControl=a.first),O(a=I())&&(r._prefixChildren=a),O(a=I())&&(r._suffixChildren=a),O(a=I())&&(r._errorChildren=a),O(a=I())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(Zl(r._iconPrefixContainerSignal,Fh,5)(r._textPrefixContainerSignal,Nh,5)(r._iconSuffixContainerSignal,Lh,5)(r._textSuffixContainerSignal,Vh,5),ke(xg,5)(Fh,5)(Nh,5)(Lh,5)(Vh,5)(jh,5)(Hh,5)(zh,5)),t&2){Na(4);let o;O(o=I())&&(r._textField=o.first),O(o=I())&&(r._iconPrefixContainer=o.first),O(o=I())&&(r._textPrefixContainer=o.first),O(o=I())&&(r._iconSuffixContainer=o.first),O(o=I())&&(r._textSuffixContainer=o.first),O(o=I())&&(r._floatingLabel=o.first),O(o=I())&&(r._notchedOutline=o.first),O(o=I())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&B("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Z([{provide:Wt,useExisting:n},{provide:Gh,useExisting:n}])],ngContentSelectors:Sg,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(se(Cg),Ge(0,Dg,1,1,"ng-template",null,0,Yr),C(2,"div",6,1),Q("click",function(a){return r._control.onContainerClick(a)}),q(4,Ag,1,0,"div",7),C(5,"div",8),q(6,Og,2,2,"div",9),q(7,Ig,3,0,"div",10),q(8,Mg,3,0,"div",11),C(9,"div",12),q(10,Fg,1,1,null,13),H(11),A(),q(12,Ng,3,0,"div",14),q(13,Lg,3,0,"div",15),A(),q(14,Vg,1,0,"div",16),A(),C(15,"div",17),q(16,jg,2,0,"div",18)(17,zg,5,1,"div",19),A()),t&2){let o;S(2),B("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),S(2),K(!r._hasOutline()&&!r._control.disabled?4:-1),S(2),K(r._hasOutline()?6:-1),S(),K(r._hasIconPrefix?7:-1),S(),K(r._hasTextPrefix?8:-1),S(2),K(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),S(2),K(r._hasTextSuffix?12:-1),S(),K(r._hasIconSuffix?13:-1),S(),K(r._hasOutline()?-1:14),S(),B("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();S(),K((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[jh,Hh,Qr,zh,el],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var ct=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ct||{}),tl=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ct.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},qh=vn({passive:!0,capture:!0}),il=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,qh)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,qh)))}_delegateEventHandler=i=>{let e=Te(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Ar={enterDuration:225,exitDuration:150},Yg=800,Kh=vn({passive:!0,capture:!0}),Yh=["mousedown","touchstart"],Xh=["mouseup","mouseleave","touchend","touchcancel"],Xg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Rr=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new il;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=rt(t)),o&&o.get(Oe).load(Xg)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=j(j({},Ar),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||Qg(i,e,r),s=i-r.left,l=e-r.top,c=o.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${s-a}px`,h.style.top=`${l-a}px`,h.style.height=`${a*2}px`,h.style.width=`${a*2}px`,t.color!=null&&(h.style.backgroundColor=t.color),h.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(h);let u=window.getComputedStyle(h),p=u.transitionProperty,m=u.transitionDuration,f=p==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,g=new tl(this,h,t,f);h.style.transform="scale3d(1, 1, 1)",g.state=ct.FADING_IN,t.persistent||(this._mostRecentTransientRipple=g);let w=null;return!f&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let v=()=>{w&&(w.fallbackTimer=null),clearTimeout(P),this._finishRippleTransition(g)},L=()=>this._destroyRipple(g),P=setTimeout(L,c+100);h.addEventListener("transitionend",v),h.addEventListener("transitioncancel",L),w={onTransitionEnd:v,onTransitionCancel:L,fallbackTimer:P}}),this._activeRipples.set(g,w),(f||!c)&&this._finishRippleTransition(g),g}fadeOutRipple(i){if(i.state===ct.FADING_OUT||i.state===ct.HIDDEN)return;let e=i.element,t=j(j({},Ar),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=ct.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=rt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Yh.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Xh.forEach(e=>{this._triggerElement.addEventListener(e,this,Kh)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ct.FADING_IN?this._startFadeOutTransition(i):i.state===ct.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=ct.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ct.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=wr(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Yg;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!xr(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===ct.VISIBLE||i.config.terminateOnPointerUp&&i.state===ct.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Yh.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Xh.forEach(e=>i.removeEventListener(e,this,Kh)),this._pointerUpEventsRegistered=!1))}};function Qg(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var Tr=new b("mat-ripple-global-options"),Qh=(()=>{class n{_elementRef=d(D);_animationsDisabled=ve();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=d(G),t=d(te),r=d(Tr,{optional:!0}),o=d(Y);this._globalOptions=r||{},this._rippleRenderer=new Rr(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:j(j(j({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,j(j({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,j(j({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&B("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var Jh=(()=>{class n{_animationsDisabled=ve();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&B("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var zi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Jg=["text"],Zg=[[["mat-icon"]],"*"],e_=["mat-icon","*"];function t_(n,i){if(n&1&&de(0,"mat-pseudo-checkbox",1),n&2){let e=ie();re("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function i_(n,i){if(n&1&&de(0,"mat-pseudo-checkbox",3),n&2){let e=ie();re("disabled",e.disabled)}}function n_(n,i){if(n&1&&(C(0,"span",4),He(1),A()),n&2){let e=ie();S(),ni("(",e.group.label,")")}}var Ir=new b("MAT_OPTION_PARENT_COMPONENT"),Mr=new b("MatOptgroup");var Or=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},mi=(()=>{class n{_element=d(D);_changeDetectorRef=d(fe);_parent=d(Ir,{optional:!0});group=d(Mr,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=d(oe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Ce(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $;_text;_stateChanges=new x;constructor(){let e=d(Oe);e.load(zi),e.load(di),this._signalDisableRipple=!!this._parent&&xi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ge(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Or(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&ke(Jg,7),t&2){let o;O(o=I())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&Q("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(ze("id",r.id),z("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),B("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",k]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:e_,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(se(Zg),q(0,t_,1,2,"mat-pseudo-checkbox",1),H(1),C(2,"span",2,0),H(4,1),A(),q(5,i_,1,1,"mat-pseudo-checkbox",3),q(6,n_,2,1,"span",4),de(7,"div",5)),t&2&&(K(r.multiple?0:-1),S(5),K(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),S(),K(r.group&&r.group._inert?6:-1),S(),re("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Jh,Qh],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function ma(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function pa(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var Dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[aa,ua,ee]})}return n})();var Pr=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},pi=class extends Pr{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},At=class extends Pr{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},nl=class extends Pr{element;constructor(i){super(),this.element=i instanceof D?i.nativeElement:i}},Cn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof pi)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof At)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof nl)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},fa=class extends Cn{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(Fa,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||Y.NULL,o=r.get(ei,t.injector);e=Xr(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Sn=(()=>{class n extends Cn{_moduleRef=d(Fa,{optional:!0});_document=d(J);_viewContainerRef=d(We);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new $;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(r,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[W]})}return n})(),Gt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({})}return n})();var Zh=Yo();function Dn(n){return new ga(n.get(lt),n.get(J))}var ga=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=De(-this._previousScrollPosition.left),i.style.top=De(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Zh&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Zh&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function au(n,i){return new _a(n.get(Mi),n.get(G),n.get(lt),i)}var _a=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(xe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Fr=class{enable(){}disable(){}attach(){}};function rl(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return t||r||o||a})}function eu(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return t||r||o||a})}function Kt(n,i){return new va(n.get(Mi),n.get(lt),n.get(G),i)}var va=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();rl(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},su=(()=>{class n{_injector=d(Y);constructor(){}noop=()=>new Fr;close=e=>au(this._injector,e);block=()=>Dn(this._injector);reposition=e=>Kt(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qt=class{positionStrategy;scrollStrategy=new Fr;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var ba=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var lu=(()=>{class n{_attachedOverlays=[];_document=d(J);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),cu=(()=>{class n extends lu{_ngZone=d(G);_renderer=d(Ze).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),du=(()=>{class n extends lu{_platform=d(te);_ngZone=d(G);_renderer=d(Ze).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Te(e)};_clickListener=e=>{let t=Te(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(tu(s.overlayElement,t)||tu(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function tu(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var hu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),xa=(()=>{class n{_platform=d(te);_containerElement;_document=d(J);_styleLoader=d(Oe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ys()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Ys()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(hu)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ol=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function al(n){return n&&n.nodeType===1}var kn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new x;_attachments=new x;_detachments=new x;_positionStrategy;_scrollStrategy;_locationChanges=Ie.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new x;_outsidePointerEvents=new x;_afterNextRenderRef;constructor(i,e,t,r,o,a,s,l,c,h=!1,u,p){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=h,this._injector=u,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Se(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=j(j({},this._config),i),this._updateElementSize()}setDirection(i){this._config=je(j({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=De(this._config.width),i.height=De(this._config.height),i.minWidth=De(this._config.minWidth),i.minHeight=De(this._config.minHeight),i.maxWidth=De(this._config.maxWidth),i.maxHeight=De(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;al(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ol(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=zt(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Se(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},iu="cdk-overlay-connected-position-bounding-box",r_=/([A-Za-z%]+)$/;function $i(n,i){return new ya(i,n.get(lt),n.get(J),n.get(te),n.get(xa))}var ya=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new x;_resizeSubscription=Ie.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(iu),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,r,s),c=this._getOverlayPoint(l,e,s),h=this._getOverlayFit(c,e,t,s);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(h,c,t)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<h.visibleArea)&&(a={overlayFit:h,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let h=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);h>l&&(l=h,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ui(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(iu),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof D?this._origin.nativeElement:al(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=t.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=i.top+i.height/2:o=t.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=ru(e),{x:a,y:s}=i,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let h=0-a,u=a+o.width-t.width,p=0-s,m=s+o.height-t.height,f=this._subtractOverflows(o.width,h,u),g=this._subtractOverflows(o.height,p,m),w=f*g;return{visibleArea:w,isCompletelyWithinViewport:o.width*o.height===w,fitsInViewportVertically:g===o.height,fitsInViewportHorizontally:f==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=nu(this._overlayRef.getConfig().minHeight),s=nu(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,c=i.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=ru(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-t.top-i.y,0),c=Math.max(o.left-t.left-i.x,0),h=0,u=0;return r.width<=o.width?h=c||-a:h=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?u=l||-s:u=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:h,y:u},{x:i.x+h,y:i.y+u}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!o_(this._lastScrollVisibility,t)){let r=new ba(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-s+this._getViewportMarginTop();else{let m=Math.min(t.bottom-i.y+t.top,i.y),f=this._lastBoundingBoxSize.height;o=m*2,a=i.y-m,o>f&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-f/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,h,u,p;if(c)p=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=i.x-this._getViewportMarginStart();else if(l)u=i.x,h=t.right-i.x-this._getViewportMarginEnd();else{let m=Math.min(t.right-i.x+t.left,i.x),f=this._lastBoundingBoxSize.width;h=m*2,u=i.x-m,h>f&&!this._isInitialRender&&!this._growAfterOpen&&(u=i.x-f/2)}return{top:a,left:u,bottom:s,right:p,width:h,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=De(t.width),r.height=De(t.height),r.top=De(t.top)||"auto",r.bottom=De(t.bottom)||"auto",r.left=De(t.left)||"auto",r.right=De(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=De(o)),a&&(r.maxWidth=De(a))}this._lastBoundingBoxSize=t,Ui(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Ui(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ui(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let h=this._viewportRuler.getViewportScrollPosition();Ui(t,this._getExactOverlayY(e,i,h)),Ui(t,this._getExactOverlayX(e,i,h))}else t.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),t.transform=s.trim(),a.maxHeight&&(r?t.maxHeight=De(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=De(a.maxWidth):o&&(t.maxWidth="")),Ui(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=De(o.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=De(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:eu(i,t),isOriginOutsideView:rl(i,t),isOverlayClipped:eu(e,t),isOverlayOutsideView:rl(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&zt(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof D)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Ui(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function nu(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(r_);return!e||e==="px"?parseFloat(i):null}return n||null}function ru(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function o_(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var ou="cdk-global-overlay-wrapper";function An(n){return new wa}var wa=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(ou),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=t,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),h=this._xPosition,u=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",m="",f="",g="";l?g="flex-start":h==="center"?(g="center",p?f=u:m=u):p?h==="left"||h==="end"?(g="flex-end",m=u):(h==="right"||h==="start")&&(g="flex-start",f=u):h==="left"||h==="start"?(g="flex-start",m=u):(h==="right"||h==="end")&&(g="flex-end",f=u),i.position=this._cssPosition,i.marginLeft=l?"0":m,i.marginTop=c?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?"0":f,e.justifyContent=g,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(ou),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},uu=(()=>{class n{_injector=d(Y);constructor(){}global(){return An()}flexibleConnectedTo(e){return $i(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Nr=new b("OVERLAY_DEFAULT_CONFIG");function Yt(n,i){n.get(Oe).load(hu);let e=n.get(xa),t=n.get(J),r=n.get(oe),o=n.get(qi),a=n.get(Ee),s=n.get(pe,null,{optional:!0})||n.get(Ze).createRenderer(null,null),l=new qt(i),c=n.get(Nr,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in t.body?l.usePopover=i?.usePopover??c:l.usePopover=!1;let h=t.createElement("div"),u=t.createElement("div");h.id=r.getId("cdk-overlay-"),h.classList.add("cdk-overlay-pane"),u.appendChild(h),l.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return al(p)?p.after(u):p?.type==="parent"?p.element.appendChild(u):e.getContainerElement().appendChild(u),new kn(new fa(h,o,n),u,h,l,n.get(G),n.get(cu),t,n.get(nc),n.get(du),i?.disableAnimations??n.get(Kr,null,{optional:!0})==="NoopAnimations",n.get(ei),s)}var mu=(()=>{class n{scrollStrategies=d(su);_positionBuilder=d(uu);_injector=d(Y);constructor(){}create(e){return Yt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),a_=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],s_=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(Y);return()=>Kt(n)}}),En=(()=>{class n{elementRef=d(D);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),pu=new b("cdk-connected-overlay-default-config"),Ca=(()=>{class n{_dir=d(Ee,{optional:!0});_injector=d(Y);_overlayRef;_templatePortal;_backdropSubscription=Ie.EMPTY;_attachSubscription=Ie.EMPTY;_detachSubscription=Ie.EMPTY;_positionSubscription=Ie.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=d(s_);_ngZone=d(G);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new $;positionChange=new $;attach=new $;detach=new $;overlayKeydown=new $;overlayOutsideClick=new $;constructor(){let e=d(Le),t=d(We),r=d(pu,{optional:!0}),o=d(Nr,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new At(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=a_);let e=this._overlayRef=Yt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!ge(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=Te(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new qt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=$i(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof En?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof En?this.origin.elementRef.nativeElement:this.origin instanceof D?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(zl(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",k],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",k],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",k],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",k],push:[2,"cdkConnectedOverlayPush","push",k],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",k],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",k],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[le]})}return n})(),ft=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({providers:[mu],imports:[ee,Gt,_r,_r]})}return n})();var Wi=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var fi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var Rn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[ee]})}return n})();var fu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[ee]})}return n})();var Tn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[Rn,fu,mi,ee]})}return n})();var l_=["trigger"],c_=["panel"],d_=[[["mat-select-trigger"]],"*"],h_=["mat-select-trigger","*"];function u_(n,i){if(n&1&&(C(0,"span",4),He(1),A()),n&2){let e=ie();S(),Mt(e.placeholder)}}function m_(n,i){n&1&&H(0)}function p_(n,i){if(n&1&&(C(0,"span",11),He(1),A()),n&2){let e=ie(2);S(),Mt(e.triggerValue)}}function f_(n,i){if(n&1&&(C(0,"span",5),q(1,m_,1,0)(2,p_,2,1,"span",11),A()),n&2){let e=ie();S(),K(e.customTrigger?1:2)}}function g_(n,i){if(n&1){let e=Ki();C(0,"div",12,1),Q("keydown",function(r){bi(e);let o=ie();return yi(o._handleKeydown(r))}),H(2,1),A()}if(n&2){let e=ie();Xe(e.panelClass),B("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),z("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var __=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(Y);return()=>Kt(n)}}),v_=new b("MAT_SELECT_CONFIG"),b_=new b("MatSelectTrigger"),sl=class{source;value;constructor(i,e){this.source=i,this.value=e}},gu=(()=>{class n{_viewportRuler=d(lt);_changeDetectorRef=d(fe);_elementRef=d(D);_dir=d(Ee,{optional:!0});_idGenerator=d(oe);_renderer=d(pe);_parentFormField=d(Wt,{optional:!0});ngControl=d(et,{self:!0,optional:!0});_liveAnnouncer=d(Ws);_defaultOptions=d(v_,{optional:!0});_animationsDisabled=ve();_popoverLocation;_initialized=new x;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=ma(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=pa(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new sl(this,e)}_scrollStrategyFactory=d(__);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new x;_errorStateTracker;stateChanges=new x;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ce(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ri.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Jt(()=>{let e=this.options;return e?e.changes.pipe(Me(e),_t(()=>Ae(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(_t(()=>this.optionSelectionChanges))});openedChange=new $;_openedStream=this.openedChange.pipe(xe(e=>e),me(()=>{}));_closedStream=this.openedChange.pipe(xe(e=>!e),me(()=>{}));selectionChange=new $;valueChange=new $;constructor(){let e=d(Wi),t=d(Si,{optional:!0}),r=d(ki,{optional:!0}),o=d(new Yi("tabindex"),{optional:!0}),a=d(Nr,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new fi(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new yr(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(X(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(X(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Me(null),X(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ye(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&ui(this._trackedModal,"aria-owns",t),wn(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;ui(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!ge(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!ge(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ge(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof En?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ji(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ae(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(X(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ae(...this.options.map(t=>t._stateChanges)).pipe(X(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Te(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&Ke(o,b_,5)(o,mi,5)(o,Mr,5),t&2){let a;O(a=I())&&(r.customTrigger=a.first),O(a=I())&&(r.options=a),O(a=I())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&ke(l_,5)(c_,5)(Ca,5),t&2){let o;O(o=I())&&(r.trigger=o.first),O(o=I())&&(r.panel=o.first),O(o=I())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&Q("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(z("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),B("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",k],disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ve(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",k],placeholder:"placeholder",required:[2,"required","required",k],multiple:[2,"multiple","multiple",k],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",k],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ve],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",k]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Z([{provide:Bi,useExisting:n},{provide:Ir,useExisting:n}]),le],ngContentSelectors:h_,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(se(d_),C(0,"div",2,0),Q("click",function(){return r.open()}),C(3,"div",3),q(4,u_,2,1,"span",4)(5,f_,3,1,"span",5),A(),C(6,"div",6)(7,"div",7),Je(),C(8,"svg",8),de(9,"path",9),A()()()(),Ge(10,g_,3,16,"ng-template",10),Q("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=It(1);S(3),z("id",r._valueId),S(),K(r.empty?4:5),S(6),re("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[En,Ca],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var Lr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[ft,Tn,ee,Bt,Dt,Tn]})}return n})();var y_={capture:!0},w_=["focus","mousedown","mouseenter","touchstart"],ll="mat-ripple-loader-uninitialized",cl="mat-ripple-loader-class-name",_u="mat-ripple-loader-centered",Sa="mat-ripple-loader-disabled",ka=(()=>{class n{_document=d(J);_animationsDisabled=ve();_globalRippleOptions=d(Tr,{optional:!0});_platform=d(te);_ngZone=d(G);_injector=d(Y);_eventCleanups;_hosts=new Map;constructor(){let e=d(Ze).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>w_.map(t=>e.listen(this._document,t,this._onInteraction,y_)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(ll,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(cl))&&e.setAttribute(cl,t.className||""),t.centered&&e.setAttribute(_u,""),t.disabled&&e.setAttribute(Sa,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Sa,""):e.removeAttribute(Sa)}_onInteraction=e=>{let t=Te(e);if(t instanceof HTMLElement){let r=t.closest(`[${ll}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(cl)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ar.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Ar.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Sa),rippleConfig:{centered:e.hasAttribute(_u),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Rr(s,this._ngZone,t,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(ll)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var x_=["mat-icon-button",""],C_=["*"],S_=new b("MAT_BUTTON_CONFIG");function vu(n){return n==null?void 0:Ve(n)}var dl=(()=>{class n{_elementRef=d(D);_ngZone=d(G);_animationsDisabled=ve();_config=d(S_,{optional:!0});_focusMonitor=d(Ut);_cleanupClick;_renderer=d(pe);_rippleLoader=d(ka);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){d(Oe).load(zi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(z("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Xe(r.color?"mat-"+r.color:""),B("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",k],disabled:[2,"disabled","disabled",k],ariaDisabled:[2,"aria-disabled","ariaDisabled",k],disabledInteractive:[2,"disabledInteractive","disabledInteractive",k],tabIndex:[2,"tabIndex","tabIndex",vu],_tabindex:[2,"tabindex","_tabindex",vu]}})}return n})(),hl=(()=>{class n extends dl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[W],attrs:x_,ngContentSelectors:C_,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(se(),ot(0,"span",0),H(1),ot(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var k_=["matButton",""],E_=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],D_=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var bu=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),vA=(()=>{class n extends dl{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=A_(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?bu.get(this._appearance):null,o=bu.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[W],attrs:k_,ngContentSelectors:D_,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(se(E_),ot(0,"span",0),H(1),Be(2,"span",1),H(3,1),qe(),H(4,2),ot(5,"span",2)(6,"span",3)),t&2&&B("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function A_(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Gi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[Rn,ee]})}return n})();var R_=["tooltip"],T_=20;var O_=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(Y);return()=>Kt(n,{scrollThrottle:T_})}}),I_=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var yu="tooltip-panel",M_={passive:!0},P_=8,F_=8,N_=24,L_=200,wu=(()=>{class n{_elementRef=d(D);_ngZone=d(G);_platform=d(te);_ariaDescriber=d(Th);_focusMonitor=d(Ut);_dir=d(Ee);_injector=d(Y);_viewContainerRef=d(We);_mediaMatcher=d(bn);_document=d(J);_renderer=d(pe);_animationsDisabled=ve();_defaultOptions=d(I_,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=V_;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Ht(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Ht(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=jt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=jt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new x;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=P_}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(X(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new pi(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(X(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof D)return this._overlayRef;this._detach()}let t=this._injector.get(Mi).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${yu}`,o=$i(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(X(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Yt(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(O_)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(X(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(X(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(X(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(X(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(j(j({},r.main),o.main)),this._addOffset(j(j({},r.fallback),o.fallback))])}_addOffset(e){let t=F_,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Se(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:o}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=t==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let s=this._overlayRef;if(s){let l=`${this._cssClassPrefix}-${yu}-`;s.removePanelClass(l+this._currentPosition),s.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,M_))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Se({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ge(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&B("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),V_=(()=>{class n{_changeDetectorRef=d(fe);_elementRef=d(D);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ve();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new x;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>N_&&e.width>=L_}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:r),t.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&ke(R_,7),t&2){let o;O(o=I())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&Q("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&(Be(0,"div",1,0),Ql("animationend",function(a){return r._handleAnimationEnd(a)}),Be(2,"div",2),He(3),qe()()),t&2&&(Xe(r.tooltipClass),B("mdc-tooltip--multiline",r._isMultiline),S(3),Mt(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var xu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[Er,ft,ee,Bt]})}return n})();function j_(n,i){if(n&1&&(C(0,"mat-option",17),He(1),A()),n&2){let e=i.$implicit;re("value",e),S(),ni(" ",e," ")}}function B_(n,i){if(n&1){let e=Ki();C(0,"mat-form-field",14)(1,"mat-select",16,0),Q("selectionChange",function(r){bi(e);let o=ie(2);return yi(o._changePageSize(r.value))}),Yl(3,j_,2,2,"mat-option",17,Kl),A(),C(5,"div",18),Q("click",function(){bi(e);let r=It(2);return yi(r.open())}),A()()}if(n&2){let e=ie(2);re("appearance",e._formFieldAppearance)("color",e.color),S(),re("value",e.pageSize)("disabled",e.disabled),ql("aria-labelledby",e._pageSizeLabelId),re("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),S(2),Xl(e._displayedPageSizeOptions)}}function z_(n,i){if(n&1&&(C(0,"div",15),He(1),A()),n&2){let e=ie(2);S(),Mt(e.pageSize)}}function H_(n,i){if(n&1&&(C(0,"div",3)(1,"div",13),He(2),A(),q(3,B_,6,7,"mat-form-field",14),q(4,z_,2,1,"div",15),A()),n&2){let e=ie();S(),z("id",e._pageSizeLabelId),S(),ni(" ",e._intl.itemsPerPageLabel," "),S(),K(e._displayedPageSizeOptions.length>1?3:-1),S(),K(e._displayedPageSizeOptions.length<=1?4:-1)}}function U_(n,i){if(n&1){let e=Ki();C(0,"button",19),Q("click",function(){bi(e);let r=ie();return yi(r._buttonClicked(0,r._previousButtonsDisabled()))}),Je(),C(1,"svg",8),de(2,"path",20),A()()}if(n&2){let e=ie();re("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),z("aria-label",e._intl.firstPageLabel)}}function $_(n,i){if(n&1){let e=Ki();C(0,"button",21),Q("click",function(){bi(e);let r=ie();return yi(r._buttonClicked(r.getNumberOfPages()-1,r._nextButtonsDisabled()))}),Je(),C(1,"svg",8),de(2,"path",22),A()()}if(n&2){let e=ie();re("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),z("aria-label",e._intl.lastPageLabel)}}var W_=(()=>{class n{changes=new x;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,r)=>{if(r==0||t==0)return`0 of ${r}`;r=Math.max(r,0);let o=e*t,a=o<r?Math.min(o+t,r):o+t;return`${o+1} \u2013 ${a} of ${r}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),G_=50;var q_=new b("MAT_PAGINATOR_DEFAULT_OPTIONS"),K_=(()=>{class n{_intl=d(W_);_changeDetectorRef=d(fe);_formFieldAppearance;_pageSizeLabelId=d(oe).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new _i(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Ve(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new $;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=d(q_,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:r,pageSizeOptions:o,hidePageSize:a,showFirstLastButtons:s}=t;r!=null&&(this._pageSize=r),o!=null&&(this._pageSizeOptions=o),a!=null&&(this.hidePageSize=a),s!=null&&(this.showFirstLastButtons=s)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,r=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(r)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:G_),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",Ve],length:[2,"length","length",Ve],pageSize:[2,"pageSize","pageSize",Ve],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",k],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",k],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",k]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,r){t&1&&(C(0,"div",1)(1,"div",2),q(2,H_,5,4,"div",3),C(3,"div",4)(4,"div",5),He(5),A(),q(6,U_,3,5,"button",6),C(7,"button",7),Q("click",function(){return r._buttonClicked(r.pageIndex-1,r._previousButtonsDisabled())}),Je(),C(8,"svg",8),de(9,"path",9),A()(),Wr(),C(10,"button",10),Q("click",function(){return r._buttonClicked(r.pageIndex+1,r._nextButtonsDisabled())}),Je(),C(11,"svg",8),de(12,"path",11),A()(),q(13,$_,3,5,"button",12),A()()()),t&2&&(S(2),K(r.hidePageSize?-1:2),S(3),ni(" ",r._intl.getRangeLabel(r.pageIndex,r.pageSize,r.length)," "),S(),K(r.showFirstLastButtons?6:-1),S(),re("matTooltip",r._intl.previousPageLabel)("matTooltipDisabled",r._previousButtonsDisabled())("disabled",r._previousButtonsDisabled())("tabindex",r._previousButtonsDisabled()?-1:null),z("aria-label",r._intl.previousPageLabel),S(3),re("matTooltip",r._intl.nextPageLabel)("matTooltipDisabled",r._nextButtonsDisabled())("disabled",r._nextButtonsDisabled())("tabindex",r._nextButtonsDisabled()?-1:null),z("aria-label",r._intl.nextPageLabel),S(3),K(r.showFirstLastButtons?13:-1))},dependencies:[ua,gu,mi,hl,wu],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return n})(),ul=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[Gi,Lr,xu,K_]})}return n})();var Y_=new b("MAT_SORT_DEFAULT_OPTIONS"),xR=(()=>{class n{_defaultOptions;_initializedStream=new _i(1);sortables=new Map;_stateChanges=new x;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new $;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=X_(e.start||this.start,t),o=r.indexOf(this.direction)+1;return o>=r.length&&(o=0),r[o]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(t){return new(t||n)(ae(Y_,8))};static \u0275dir=_({type:n,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",k],disabled:[2,"matSortDisabled","disabled",k]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[le]})}return n})();function X_(n,i){let e=["asc","desc"];return n=="desc"&&e.reverse(),i||e.push(""),e}var ml=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[ee]})}return n})();function Q_(n,i){}var gi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var fl=(()=>{class n extends Cn{_elementRef=d(D);_focusTrapFactory=d($s);_config;_interactivityChecker=d(Us);_ngZone=d(G);_focusMonitor=d(Ut);_renderer=d(pe);_changeDetectorRef=d(fe);_injector=d(Y);_platform=d(te);_document=d(J);_portalOutlet;_focusTrapped=new x;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=d(gi,{optional:!0})||new gi,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(t)}_focusByCssSelector(e,t){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,t)}_trapFocus(e){this._isDestroyed||Se(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let r=Fi(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Fi();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Fi()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,r){if(t&1&&ke(Sn,7),t&2){let o;O(o=I())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,r){t&2&&z("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[W],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,r){t&1&&Ge(0,Q_,0,0,"ng-template",0)},dependencies:[Sn],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),Vr=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new x;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ge(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},J_=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=d(Y);return()=>Dn(n)}}),Z_=new b("DialogData"),ev=new b("DefaultDialogConfig");function tv(n){let i=Ce(n),e=new $;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var gl=(()=>{class n{_injector=d(Y);_defaultOptions=d(ev,{optional:!0});_parentDialog=d(n,{optional:!0,skipSelf:!0});_overlayContainer=d(xa);_idGenerator=d(oe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;_ariaHiddenElements=new Map;_scrollStrategy=d(J_);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Jt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Me(void 0)));constructor(){}open(e,t){let r=this._defaultOptions||new gi;t=j(j({},r),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),a=Yt(this._injector,o),s=new Vr(a,t),l=this._attachContainer(a,s,t);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(Ye(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,l,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){pl(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){pl(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),pl(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new qt({positionStrategy:e.positionStrategy||An().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,r){let o=r.injector||r.viewContainerRef?.injector,a=[{provide:gi,useValue:r},{provide:Vr,useValue:t},{provide:kn,useValue:e}],s;r.container?typeof r.container=="function"?s=r.container:(s=r.container.type,a.push(...r.container.providers(r))):s=fl;let l=new pi(s,r.viewContainerRef,Y.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,t,r,o){if(e instanceof Le){let a=this._createInjector(o,t,r,void 0),s={$implicit:o.data,dialogRef:t};o.templateContext&&(s=j(j({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new At(e,null,s,a))}else{let a=this._createInjector(o,t,r,this._injector),s=r.attachComponentPortal(new pi(e,o.viewContainerRef,a));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,r,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:Z_,useValue:e.data},{provide:Vr,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,r)):s.push(...e.providers)),e.direction&&(!a||!a.get(Ee,null,{optional:!0}))&&s.push({provide:Ee,useValue:tv(e.direction)}),Y.create({parent:a||o,providers:s})}_removeOpenDialog(e,t){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let r=t.length-1;r>-1;r--){let o=t[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function pl(n,i){let e=n.length;for(;e--;)i(n[e])}var Cu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({providers:[gl],imports:[ft,Gt,Er,Gt]})}return n})();function iv(n,i){}var Da=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},_l="mdc-dialog--open",Su="mdc-dialog--opening",ku="mdc-dialog--closing",nv=150,rv=75,ov=(()=>{class n extends fl{_animationStateChanged=new $;_animationsEnabled=!ve();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Du(this._config.enterAnimationDuration)??nv:0;_exitAnimationDuration=this._animationsEnabled?Du(this._config.exitAnimationDuration)??rv:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Eu,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Su,_l)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(_l),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(_l),this._animationsEnabled?(this._hostElement.style.setProperty(Eu,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ku)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Su,ku)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275cmp=N({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,r){t&2&&(ze("id",r._config.id),z("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),B("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[W],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,r){t&1&&(C(0,"div",0)(1,"div",1),Ge(2,iv,0,0,"ng-template",2),A()())},dependencies:[Sn],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),Eu="--mat-dialog-transition-duration";function Du(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?jt(n.substring(0,n.length-2)):n.endsWith("s")?jt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Ea=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Ea||{}),jr=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new _i(1);_beforeClosed=new _i(1);_result;_closeFallbackTimeout;_state=Ea.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(xe(r=>r.state==="opened"),Ye(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(xe(r=>r.state==="closed"),Ye(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ae(this.backdropClick(),this.keydownEvents().pipe(xe(r=>r.keyCode===27&&!this.disableClose&&!ge(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),Au(this,r.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(xe(t=>t.state==="closing"),Ye(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Ea.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Ea.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Au(n,i,e){return n._closeInteractionType=i,n.close(e)}var av=new b("MatMdcDialogData"),sv=new b("mat-mdc-dialog-default-options"),lv=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(Y);return()=>Dn(n)}}),vl=(()=>{class n{_defaultOptions=d(sv,{optional:!0});_scrollStrategy=d(lv);_parentDialog=d(n,{optional:!0,skipSelf:!0});_idGenerator=d(oe);_injector=d(Y);_dialog=d(gl);_animationsDisabled=ve();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;dialogConfigClass=Da;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Jt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Me(void 0)));constructor(){this._dialogRefConstructor=jr,this._dialogContainerType=ov,this._dialogDataToken=av}open(e,t){let r;t=j(j({},this._defaultOptions||new Da),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,je(j({},t),{positionStrategy:An(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:gi,useValue:t}]},templateContext:()=>({dialogRef:r}),providers:(a,s,l)=>(r=new this._dialogRefConstructor(a,t,l),r.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(r);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),lT=(()=>{class n{dialogRef=d(jr,{optional:!0});_elementRef=d(D);_dialog=d(vl);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Tu(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Au(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,r){t&1&&Q("click",function(a){return r._onButtonClick(a)}),t&2&&z("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[le]})}return n})(),Ru=(()=>{class n{_dialogRef=d(jr,{optional:!0});_elementRef=d(D);_dialog=d(vl);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Tu(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n})}return n})(),cT=(()=>{class n extends Ru{id=d(oe).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,r){t&2&&ze("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[W]})}return n})(),dT=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[$l([Es])]})}return n})(),hT=(()=>{class n extends Ru{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,r){t&2&&B("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[W]})}return n})();function Tu(n,i){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var bl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({providers:[vl],imports:[Cu,ft,Gt,ee]})}return n})();var cv=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),dv={passive:!0},Ou=(()=>{class n{_platform=d(te);_ngZone=d(G);_renderer=d(Ze).createRenderer(null,null);_styleLoader=d(Oe);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ml;this._styleLoader.load(cv);let t=rt(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new x,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,dv)));return this._monitoredElements.set(t,{subject:o,unlisten:l}),o}stopMonitoring(e){let t=rt(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Iu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({})}return n})();var Mu=new b("MAT_INPUT_VALUE_ACCESSOR");var hv=["button","checkbox","file","hidden","image","radio","range","reset","submit"],uv=new b("MAT_INPUT_CONFIG"),GT=(()=>{class n{_elementRef=d(D);_platform=d(te);ngControl=d(et,{optional:!0,self:!0});_autofillMonitor=d(Ou);_ngZone=d(G);_formField=d(Wt,{optional:!0});_renderer=d(pe);_uid=d(oe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=d(uv,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ht(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ri.required)??!1}set required(e){this._required=Ht(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Xs().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ht(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Xs().has(e));constructor(){let e=d(Si,{optional:!0}),t=d(ki,{optional:!0}),r=d(Wi),o=d(Mu,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?xi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new fi(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&wi(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){hv.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&Q("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(ze("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),z("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),B("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",k]},exportAs:["matInput"],features:[Z([{provide:Bi,useExisting:n}]),le]})}return n})(),Br=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[Dt,Dt,Iu,ee]})}return n})();function Pu(n){return Error(`Unable to find icon with the name "${n}"`)}function mv(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Fu(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Nu(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Xt=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Vu=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r)}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r)}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Xt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(ti.HTML,r);if(!a)throw Nu(r);let s=Ni(a);return this._addSvgIconConfig(e,t,new Xt("",s,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Xt(t,null,r))}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(ti.HTML,t);if(!o)throw Nu(t);let a=Ni(o);return this._addSvgIconSetConfig(e,new Xt("",a,r))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(ti.RESOURCE_URL,e);if(!t)throw Fu(e);let r=this._cachedIconsByUrl.get(t);return r?Re(Aa(r)):this._loadSvgIconFromConfig(new Xt(e,null)).pipe(Zt(o=>this._cachedIconsByUrl.set(t,o)),me(o=>Aa(o)))}getNamedSvgIcon(e,t=""){let r=Lu(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Fl(Pu(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Re(Aa(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(me(t=>Aa(t)))}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return Re(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ll(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(ti.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),Re(null)})));return zr(o).pipe(me(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Pu(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Zt(t=>e.svgText=t),me(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Re(null):this._fetchIcon(e).pipe(Zt(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Ni("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let t=this._svgElementFromString(Ni("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&t.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw mv();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(ti.RESOURCE_URL,t);if(!a)throw Fu(t);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(me(c=>Ni(c)),jl(()=>this._inProgressUrlFetches.delete(a)),Bl());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(Lu(e,t),r),this}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return pv(o)?new Xt(o.url,null,o.options):new Xt(o,null)}}static \u0275fac=function(t){return new(t||n)(Mn(oc,8),Mn(Jr),Mn(J,8),Mn(Gr))};static \u0275prov=M({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Aa(n){return n.cloneNode(!0)}function Lu(n,i){return n+":"+i}function pv(n){return!!(n.url&&n.options)}var fv=["*"],gv=new b("MAT_ICON_DEFAULT_OPTIONS"),_v=new b("mat-icon-location",{providedIn:"root",factory:()=>{let n=d(J),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),ju=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],vv=ju.map(n=>`[${n}]`).join(", "),bv=/^url\(['"]?#(.*?)['"]?\)$/,pO=(()=>{class n{_elementRef=d(D);_iconRegistry=d(Vu);_location=d(_v);_errorHandler=d(Gr);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ie.EMPTY;constructor(){let e=d(new Yi("aria-hidden"),{optional:!0}),t=d(gv,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(vv),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)ju.forEach(a=>{let s=t[o],l=s.getAttribute(a),c=l?l.match(bv):null;if(c){let h=r.get(s);h||(h=[],r.set(s,h)),h.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(Ye(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(z("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Xe(r.color?"mat-"+r.color:""),B("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",k],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:fv,decls:1,vars:0,template:function(t,r){t&1&&(se(),H(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),yl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[ee]})}return n})();var yv=["determinateSpinner"];function wv(n,i){if(n&1&&(Je(),C(0,"svg",11),de(1,"circle",12),A()),n&2){let e=ie();z("viewBox",e._viewBox()),S(),ii("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),z("r",e._circleRadius())}}var xv=new b("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Bu})}),Bu=100,Cv=10,EO=(()=>{class n{_elementRef=d(D);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=d(xv),t=Js(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Bu;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Cv)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&ke(yv,5),t&2){let o;O(o=I())&&(r._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(z("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),Xe("mat-"+r.color),ii("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),B("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ve],diameter:[2,"diameter","diameter",Ve],strokeWidth:[2,"strokeWidth","strokeWidth",Ve]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(Ge(0,wv,2,8,"ng-template",null,0,Yr),C(2,"div",2,1),Je(),C(4,"svg",3),de(5,"circle",4),A()(),Wr(),C(6,"div",5)(7,"div",6)(8,"div",7),Pe(9,8),A(),C(10,"div",9),Pe(11,8),A(),C(12,"div",10),Pe(13,8),A()()()),t&2){let o=It(1);S(4),z("viewBox",r._viewBox()),S(),ii("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),z("r",r._circleRadius()),S(4),re("ngTemplateOutlet",o),S(2),re("ngTemplateOutlet",o),S(2),re("ngTemplateOutlet",o)}},dependencies:[Qr],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var wl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[ee]})}return n})();var zu=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({})}return n})();var xl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[zu,Gt,ee]})}return n})();var Sv=["panel"],kv=["*"];function Ev(n,i){if(n&1&&(Be(0,"div",1,0),H(2),qe()),n&2){let e=i.id,t=ie();Xe(t._classList),B("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),ze("id",t.id),z("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var Cl=class{source;option;constructor(i,e){this.source=i,this.option=e}},Hu=new b("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),sI=(()=>{class n{_changeDetectorRef=d(fe);_elementRef=d(D);_defaults=d(Hu);_animationsDisabled=ve();_activeOptionChanges=Ie.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new $;opened=new $;closed=new $;optionActivated=new $;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=d(oe).getId("mat-autocomplete-");inertGroups;constructor(){let e=d(te);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new ji(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new Cl(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,r,o){if(t&1&&Ke(o,mi,5)(o,Mr,5),t&2){let a;O(a=I())&&(r.options=a),O(a=I())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&ke(Le,7)(Sv,5),t&2){let o;O(o=I())&&(r.template=o.first),O(o=I())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",k],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",k],requireSelection:[2,"requireSelection","requireSelection",k],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",k],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",k]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Z([{provide:Ir,useExisting:n}])],ngContentSelectors:kv,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,r){t&1&&(se(),Wl(0,Ev,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})();var Dv={provide:en,useExisting:vt(()=>Rv),multi:!0};var Av=new b("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=d(Y);return()=>Kt(n)}}),Rv=(()=>{class n{_environmentInjector=d(ei);_element=d(D);_injector=d(Y);_viewContainerRef=d(We);_zone=d(G);_changeDetectorRef=d(fe);_dir=d(Ee,{optional:!0});_formField=d(Wt,{optional:!0,host:!0});_viewportRuler=d(lt);_scrollStrategy=d(Av);_renderer=d(pe);_animationsDisabled=ve();_defaults=d(Hu,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new x;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Ie.EMPTY;_breakpointObserver=d(kr);_handsetLandscapeSubscription=Ie.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new x;_overlayPanelClass=zt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ui(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Ae(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(xe(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(xe(()=>this._overlayAttached)):Re()).pipe(me(e=>e instanceof Or?e:null))}optionSelections=Jt(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Me(e),_t(()=>Ae(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(_t(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Ot(e=>{let t=o=>{let a=Te(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,r=t.keyCode,o=ge(t);if(r===27&&!o&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,r=t.value;if(t.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Fi()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new Ot(r=>{Se(()=>{r.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(Zt(()=>this._positionStrategy.reapplyLastPosition()),Vl(0))??Re();return Ae(e,t).pipe(_t(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Ye(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),t._emitSelectEvent(r),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;wn(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new At(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=Yt(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Mh.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!ge(e)||e.keyCode===38&&ge(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new qt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=$i(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=t:a=[...t,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){t=r;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,r=ma(e,t.options,t.optionGroups);if(e===0&&r===1)t._setScrollTop(0);else if(t.panel){let o=t.options.toArray()[e];if(o){let a=o._getHostElement(),s=pa(a.offsetTop,a.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&ui(this._trackedModal,"aria-owns",t),wn(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;ui(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,r){t&1&&Q("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),t&2&&z("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",k]},exportAs:["matAutocompleteTrigger"],features:[Z([Dv]),le]})}return n})(),Sl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[ft,Tn,Bt,Tn,ee]})}return n})();var Ov=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Iv=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Mv(n,i){n&1&&(C(0,"span",3),H(1,1),A())}function Pv(n,i){n&1&&(C(0,"span",6),H(1,2),A())}var Fv=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`,Nv=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Lv=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Vv(n,i){n&1&&de(0,"span",0)}function jv(n,i){n&1&&(C(0,"span",1),H(1),A())}function Bv(n,i){n&1&&(C(0,"span",3),H(1,1),A())}function zv(n,i){n&1&&H(0,2)}function Hv(n,i){n&1&&de(0,"span",7)}function Uv(n,i){if(n&1&&q(0,zv,1,0)(1,Hv,1,0,"span",7),n&2){let e=ie();K(e.contentEditInput?0:1)}}function $v(n,i){n&1&&H(0,3)}function Wv(n,i){n&1&&(C(0,"span",6),H(1,4),A())}var qu=["*"],Gv=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`,Ku=new b("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Uu=new b("MatChipAvatar"),$u=new b("MatChipTrailingIcon"),Wu=new b("MatChipEdit"),El=new b("MatChipRemove"),Rl=new b("MatChip"),Yu=(()=>{class n{_elementRef=d(D);_parentChip=d(Rl);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){d(Oe).load(zi),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,r){t&2&&(z("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),B("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ve(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Tl=(()=>{class n extends Yu{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,r){t&1&&Q("click",function(a){return r._handleClick(a)})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(z("tabindex",r._getTabindex()),B("mdc-evolution-chip__action--presentational",!1))},features:[W]})}return n})();var FI=(()=>{class n extends Tl{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ce(n)))(r||n)}})();static \u0275dir=_({type:n,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,r){t&2&&z("aria-hidden",null)},features:[Z([{provide:El,useExisting:n}]),W]})}return n})(),Dl=(()=>{class n{_changeDetectorRef=d(fe);_elementRef=d(D);_tagName=d(ec);_ngZone=d(G);_focusMonitor=d(Ut);_globalRippleOptions=d(Tr,{optional:!0});_document=d(J);_onFocus=new x;_onBlur=new x;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ve();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=d(oe).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new $;destroyed=new $;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=d(ka);_injector=d(Y);constructor(){let e=d(Oe);e.load(zi),e.load(di),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Ae(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let r=t._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,r,o){if(t&1&&Ke(o,Uu,5)(o,Wu,5)(o,$u,5)(o,El,5)(o,Uu,5)(o,$u,5)(o,Wu,5)(o,El,5),t&2){let a;O(a=I())&&(r.leadingIcon=a.first),O(a=I())&&(r.editIcon=a.first),O(a=I())&&(r.trailingIcon=a.first),O(a=I())&&(r.removeIcon=a.first),O(a=I())&&(r._allLeadingIcons=a),O(a=I())&&(r._allTrailingIcons=a),O(a=I())&&(r._allEditIcons=a),O(a=I())&&(r._allRemoveIcons=a)}},viewQuery:function(t,r){if(t&1&&ke(Tl,5),t&2){let o;O(o=I())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,r){t&1&&Q("keydown",function(a){return r._handleKeydown(a)}),t&2&&(ze("id",r.id),z("role",r.role)("aria-label",r.ariaLabel),Xe("mat-"+(r.color||"primary")),B("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",k],highlighted:[2,"highlighted","highlighted",k],disableRipple:[2,"disableRipple","disableRipple",k],disabled:[2,"disabled","disabled",k]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Z([{provide:Rl,useExisting:n}])],ngContentSelectors:Iv,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,r){t&1&&(se(Ov),de(0,"span",0),C(1,"span",1)(2,"span",2),q(3,Mv,2,0,"span",3),C(4,"span",4),H(5),de(6,"span",5),A()()(),q(7,Pv,2,0,"span",6)),t&2&&(S(3),K(r.leadingIcon?3:-1),S(4),K(r._hasTrailingIcon()?7:-1))},dependencies:[Yu],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var kl=(()=>{class n{_elementRef=d(D);_document=d(J);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return n})(),qv=(()=>{class n extends Dl{basicChipAttrName="mat-basic-chip-row";_renderer=d(pe);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new $;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(X(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,Se(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,r,o){if(t&1&&Ke(o,kl,5),t&2){let a;O(a=I())&&(r.contentEditInput=a.first)}},viewQuery:function(t,r){if(t&1&&ke(kl,5),t&2){let o;O(o=I())&&(r.defaultEditInput=o.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,r){t&1&&Q("focus",function(){return r._handleFocus()})("click",function(a){return r._hasInteractiveActions()?r._handleClick(a):null})("dblclick",function(a){return r._handleDoubleclick(a)}),t&2&&(ze("id",r.id),z("tabindex",r.disabled?null:-1)("aria-label",null)("aria-description",null)("role",r.role),B("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-chip-editing",r._isEditing)("mat-mdc-chip-editable",r.editable)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-leading-action",r._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[Z([{provide:Dl,useExisting:n},{provide:Rl,useExisting:n}]),W],ngContentSelectors:Lv,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,r){t&1&&(se(Nv),q(0,Vv,1,0,"span",0),q(1,jv,2,0,"span",1),C(2,"span",2),q(3,Bv,2,0,"span",3),C(4,"span",4),q(5,Uv,2,1)(6,$v,1,0),de(7,"span",5),A()(),q(8,Wv,2,0,"span",6)),t&2&&(K(r._isEditing?-1:0),S(),K(r._hasLeadingActionIcon()?1:-1),S(),re("disabled",r.disabled),z("aria-description",r.ariaDescription)("aria-label",r.ariaLabel),S(),K(r.leadingIcon?3:-1),S(2),K(r._isEditing?5:6),S(3),K(r._hasTrailingIcon()?8:-1))},dependencies:[Tl,kl],styles:[Fv],encapsulation:2,changeDetection:0})}return n})(),Kv=(()=>{class n{_elementRef=d(D);_changeDetectorRef=d(fe);_dir=d(Ee,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new x;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Pn;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Me(null),_t(()=>Ae(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Me(this._chips)).subscribe(e=>{let t=[];e.forEach(r=>r._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Dr(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(X(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(X(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Me(null),X(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(X(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),a=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),s=o||a;this._isValidIndex(r)&&s&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,r,o){if(t&1&&Ke(o,Dl,5),t&2){let a;O(a=I())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,r){t&1&&Q("keydown",function(a){return r._handleKeydown(a)}),t&2&&z("role",r.role)},inputs:{disabled:[2,"disabled","disabled",k],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ve(e)]},ngContentSelectors:qu,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,r){t&1&&(se(),Be(0,"div",0),H(1),qe())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Al=class{source;value;constructor(i,e){this.source=i,this.value=e}},NI=(()=>{class n extends Kv{ngControl=d(et,{optional:!0,self:!0});controlType="mat-chip-grid";_chipInput;_defaultRole="grid";_errorStateTracker;_uid=d(oe).getId("mat-chip-grid-");_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder="";get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(ri.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new $;valueChange=new $;_chips=void 0;stateChanges=new x;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=d(Si,{optional:!0}),t=d(ki,{optional:!0}),r=d(Wi);this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new fi(r,this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(X(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),Ae(this.chipFocusChanges,this._chips.changes).pipe(X(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute("aria-describedby");return e?e.split(" "):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,r=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&ge(e,"shiftKey")&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),r?this._keyManager.setActiveItem(r):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&r){let o=this._chipActions.filter(l=>l._isPrimary===r._isPrimary&&!this._skipPredicate(l)),a=o.indexOf(r),s=e.keyCode===38?-1:1;e.preventDefault(),a>-1&&this._isValidIndex(a+s)&&this._keyManager.setActiveItem(o[a+s])}else super._handleKeydown(e);this.stateChanges.next()}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new Al(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=N({type:n,selectors:[["mat-chip-grid"]],contentQueries:function(t,r,o){if(t&1&&Ke(o,qv,5),t&2){let a;O(a=I())&&(r._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mat-mdc-chip-grid","mdc-evolution-chip-set"],hostVars:10,hostBindings:function(t,r){t&1&&Q("focus",function(){return r.focus()})("blur",function(){return r._blur()}),t&2&&(z("role",r.role)("tabindex",r.disabled||r._chips&&r._chips.length===0?-1:r.tabIndex)("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState),B("mat-mdc-chip-list-disabled",r.disabled)("mat-mdc-chip-list-invalid",r.errorState)("mat-mdc-chip-list-required",r.required))},inputs:{disabled:[2,"disabled","disabled",k],placeholder:"placeholder",required:[2,"required","required",k],value:"value",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},features:[Z([{provide:Bi,useExisting:n}]),W],ngContentSelectors:qu,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,r){t&1&&(se(),Be(0,"div",0),H(1),qe())},styles:[Gv],encapsulation:2,changeDetection:0})}return n})(),LI=(()=>{class n{_elementRef=d(D);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new $;placeholder="";id=d(oe).getId("mat-mdc-chip-list-input-");get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=d(Ku),t=d(Wt,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add("mat-mdc-form-field-input-control")}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=""}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let r,o;typeof t=="number"?(r=t,o=null):(r=t.keyCode,o=t.modifiers);let a=o?.length?ge(e,...o):!ge(e);if(r===e.keyCode&&a)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=_({type:n,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-mdc-chip-input","mat-mdc-input-element","mdc-text-field__input","mat-input-element"],hostVars:8,hostBindings:function(t,r){t&1&&Q("keydown",function(a){return r._keydown(a)})("blur",function(){return r._blur()})("focus",function(){return r._focus()})("input",function(){return r._onInput()}),t&2&&(ze("id",r.id),z("disabled",r.disabled&&!r.disabledInteractive?"":null)("placeholder",r.placeholder||null)("aria-invalid",r._chipGrid&&r._chipGrid.ngControl?r._chipGrid.ngControl.invalid:null)("aria-required",r._chipGrid&&r._chipGrid.required||null)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("readonly",r._getReadonlyAttribute())("required",r._chipGrid&&r._chipGrid.required||null))},inputs:{chipGrid:[0,"matChipInputFor","chipGrid"],addOnBlur:[2,"matChipInputAddOnBlur","addOnBlur",k],separatorKeyCodes:[0,"matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",disabled:[2,"disabled","disabled",k],readonly:[2,"readonly","readonly",k],disabledInteractive:[2,"matChipInputDisabledInteractive","disabledInteractive",k]},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[le]})}return n})();var Ol=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=R({providers:[Wi,{provide:Ku,useValue:{separatorKeyCodes:[13]}}],imports:[Rn,ee]})}return n})();var Xu=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=T({type:n});static \u0275inj=R({imports:[Ls,ul,ml,bl,Dt,Br,Lr,Gi,yl,xl,Sl,Ol,Dt,Br,Gi,wl,Ls,ul,ml,bl,Dt,Br,Lr,Gi,yl,xl,Sl,Ol,Dt,Br,Gi,wl]})};export{gc as a,ri as b,hb as c,ub as d,km as e,pb as f,Am as g,ki as h,fb as i,gb as j,_b as k,Go as l,Xd as m,oC as n,aC as o,sC as p,lC as q,cC as r,dC as s,hC as t,uC as u,mC as v,pC as w,ah as x,Zs as y,Hg as z,ua as A,mi as B,gu as C,hl as D,vA as E,K_ as F,xR as G,jr as H,av as I,vl as J,lT as K,cT as L,dT as M,hT as N,GT as O,pO as P,sI as Q,Rv as R,FI as S,qv as T,NI as U,LI as V,EO as W,Xu as X};
