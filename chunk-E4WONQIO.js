import{$ as en,$a as Y,$b as cn,A as Jn,Aa as Se,Ab as an,B as Fa,Ba as vi,C as eo,Ca as Pt,Cb as tt,D as Pa,Da as za,Db as it,E as to,Ea as Lt,Eb as rn,F as Xi,Fa as no,Fb as Wa,G as ae,Ga as y,H as Ae,Ha as O,I as j,Ia as F,Ib as xi,J as La,Ja as oo,Jb as Ua,K as gt,Ka as ao,Kb as ee,L as Zi,La as ro,Lb as b,M as Xe,Ma as G,Mb as we,N as k,Na as h,Nb as Ga,O as p,Oa as x,Ob as sn,P as d,Pa as q,Pb as lo,Q as bi,Qa as fe,Qb as qa,R as s,Ra as ve,S as bt,Sa as Ne,Sb as ln,T as Te,U as Oe,V as Ee,Va as Zt,W as Ji,Wa as at,X as L,Xa as xe,Xb as Ya,Y as z,Ya as N,Z as T,Za as on,Zb as Qa,_ as R,_a as V,a as I,ab as A,b as ge,ba as $,bb as Me,ca as Ot,cb as J,d as oe,da as ne,db as C,dc as $a,e as ot,ea as Ie,eb as w,f as _,fa as D,fb as Ha,g as Ma,ga as Ft,gb as ja,h as _i,ha as tn,hb as so,i as Ea,ia as Na,ib as Je,j as gi,ja as nn,jb as rt,k as De,ka as Va,kb as M,l as Ia,la as vt,lb as ye,m as de,mb as Ce,n as Ra,na as m,nb as et,o as Aa,oa as be,ob as xt,p as _t,pa as Ze,q as $i,qa as Fe,ra as Z,rb as U,sa as he,sc as Ka,t as me,ta as Ba,u as ie,ua as Ue,v as Zn,va as io,w as Ta,wa as S,x as Ki,xa as f,y as ke,ya as v,z as Oa,za as W}from"./chunk-IUK4T6M5.js";var or=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(he(Z),he(D))};static \u0275dir=v({type:n})}return n})(),fl=(()=>{class n extends or{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275dir=v({type:n,features:[W]})}return n})(),Mi=new d("");var _l={provide:Mi,useExisting:Xe(()=>ar),multi:!0};function gl(){let n=lo()?lo().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var bl=new d(""),ar=(()=>{class n extends or{_compositionMode;_composing=!1;constructor(e,t,i){super(e,t),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!gl())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(he(Z),he(D),he(bl,8))};static \u0275dir=v({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,i){t&1&&N("input",function(r){return i._handleInput(r.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(r){return i._compositionEnd(r.target.value)})},standalone:!1,features:[U([_l]),W]})}return n})();function po(n){return n==null||fo(n)===0}function fo(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var xn=new d(""),_o=new d(""),vl=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,yt=class{static min(o){return xl(o)}static max(o){return yl(o)}static required(o){return Cl(o)}static requiredTrue(o){return wl(o)}static email(o){return Dl(o)}static minLength(o){return kl(o)}static maxLength(o){return rr(o)}static pattern(o){return Sl(o)}static nullValidator(o){return hn()}static compose(o){return hr(o)}static composeAsync(o){return ur(o)}};function xl(n){return o=>{if(o.value==null||n==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e<n?{min:{min:n,actual:o.value}}:null}}function yl(n){return o=>{if(o.value==null||n==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e>n?{max:{max:n,actual:o.value}}:null}}function Cl(n){return po(n.value)?{required:!0}:null}function wl(n){return n.value===!0?null:{required:!0}}function Dl(n){return po(n.value)||vl.test(n.value)?null:{email:!0}}function kl(n){return o=>{let e=o.value?.length??fo(o.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function rr(n){return o=>{let e=o.value?.length??fo(o.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Sl(n){if(!n)return hn;let o,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),o=new RegExp(e)):(e=n.toString(),o=n),t=>{if(po(t.value))return null;let i=t.value;return o.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function hn(n){return null}function sr(n){return n!=null}function lr(n){return za(n)?gi(n):n}function cr(n){let o={};return n.forEach(e=>{o=e!=null?I(I({},o),e):o}),Object.keys(o).length===0?null:o}function dr(n,o){return o.map(e=>e(n))}function Ml(n){return!n.validate}function mr(n){return n.map(o=>Ml(o)?o:e=>o.validate(e))}function hr(n){if(!n)return null;let o=n.filter(sr);return o.length==0?null:function(e){return cr(dr(e,o))}}function go(n){return n!=null?hr(mr(n)):null}function ur(n){if(!n)return null;let o=n.filter(sr);return o.length==0?null:function(e){let t=dr(e,o).map(lr);return $i(t).pipe(de(cr))}}function bo(n){return n!=null?ur(mr(n)):null}function Xa(n,o){return n===null?[o]:Array.isArray(n)?[...n,o]:[n,o]}function pr(n){return n._rawValidators}function fr(n){return n._rawAsyncValidators}function co(n){return n?Array.isArray(n)?n:[n]:[]}function un(n,o){return Array.isArray(n)?n.includes(o):n===o}function Za(n,o){let e=co(o);return co(n).forEach(i=>{un(e,i)||e.push(i)}),e}function Ja(n,o){return co(o).filter(e=>!un(n,e))}var pn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=go(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=bo(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control?.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},Ct=class extends pn{name;get formDirective(){return null}get path(){return null}},Ge=class extends pn{_parent=null;name=null;valueAccessor=null},fn=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var wh=(()=>{class n extends fn{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(he(Ge,2))};static \u0275dir=v({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){t&2&&M("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[W]})}return n})(),Dh=(()=>{class n extends fn{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(he(Ct,10))};static \u0275dir=v({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,i){t&2&&M("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[W]})}return n})();var yi="VALID",dn="INVALID",Jt="PENDING",Ci="DISABLED",wt=class{},_n=class extends wt{value;source;constructor(o,e){super(),this.value=o,this.source=e}},Di=class extends wt{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},ki=class extends wt{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},ei=class extends wt{status;source;constructor(o,e){super(),this.status=o,this.source=e}},gn=class extends wt{source;constructor(o){super(),this.source=o}},Si=class extends wt{source;constructor(o){super(),this.source=o}};function vo(n){return(yn(n)?n.validators:n)||null}function El(n){return Array.isArray(n)?go(n):n||null}function xo(n,o){return(yn(o)?o.asyncValidators:n)||null}function Il(n){return Array.isArray(n)?bo(n):n||null}function yn(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function _r(n,o,e){let t=n.controls;if(!(o?Object.keys(t):t).length)throw new Zi(1e3,"");if(!t[e])throw new Zi(1001,"")}function gr(n,o,e){n._forEachChild((t,i)=>{if(e[i]===void 0)throw new Zi(-1002,"")})}var ti=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return tt(this.statusReactive)}set status(o){tt(()=>this.statusReactive.set(o))}_status=it(()=>this.statusReactive());statusReactive=$(void 0);get valid(){return this.status===yi}get invalid(){return this.status===dn}get pending(){return this.status===Jt}get disabled(){return this.status===Ci}get enabled(){return this.status!==Ci}errors;get pristine(){return tt(this.pristineReactive)}set pristine(o){tt(()=>this.pristineReactive.set(o))}_pristine=it(()=>this.pristineReactive());pristineReactive=$(!0);get dirty(){return!this.pristine}get touched(){return tt(this.touchedReactive)}set touched(o){tt(()=>this.touchedReactive.set(o))}_touched=it(()=>this.touchedReactive());touchedReactive=$(!1);get untouched(){return!this.touched}_events=new _;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(Za(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Za(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Ja(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Ja(o,this._rawAsyncValidators))}hasValidator(o){return un(this._rawValidators,o)}hasAsyncValidator(o){return un(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let t=o.sourceControl??this;o.onlySelf||this._parent?.markAsTouched(ge(I({},o),{sourceControl:t})),e&&o.emitEvent!==!1&&this._events.next(new ki(!0,t))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:t})}),o.onlySelf||this._parent?._updateTouched(o,t),e&&o.emitEvent!==!1&&this._events.next(new ki(!1,t))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let t=o.sourceControl??this;o.onlySelf||this._parent?.markAsDirty(ge(I({},o),{sourceControl:t})),e&&o.emitEvent!==!1&&this._events.next(new Di(!1,t))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),o.onlySelf||this._parent?._updatePristine(o,t),e&&o.emitEvent!==!1&&this._events.next(new Di(!0,t))}markAsPending(o={}){this.status=Jt;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new ei(this.status,e)),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.markAsPending(ge(I({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Ci,this.errors=null,this._forEachChild(i=>{i.disable(ge(I({},o),{onlySelf:!0}))}),this._updateValue();let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new _n(this.value,t)),this._events.next(new ei(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ge(I({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=yi,this._forEachChild(t=>{t.enable(ge(I({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(ge(I({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(o,e){o.onlySelf||(this._parent?.updateValueAndValidity(o),o.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===yi||this.status===Jt)&&this._runAsyncValidator(t,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new _n(this.value,e)),this._events.next(new ei(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.updateValueAndValidity(ge(I({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ci:yi}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=Jt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:o!==!1};let t=lr(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,i)=>t&&t._find(i),this)}getError(o,e){let t=e?this.get(e):this;return t?.errors?t.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,t){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||t)&&this._events.next(new ei(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,t)}_initObservables(){this.valueChanges=new T,this.statusChanges=new T}_calculateStatus(){return this._allControlsDisabled()?Ci:this.errors?dn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Jt)?Jt:this._anyControlsHaveStatus(dn)?dn:yi}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let t=!this._anyControlsDirty(),i=this.pristine!==t;this.pristine=t,o.onlySelf||this._parent?._updatePristine(o,e),i&&this._events.next(new Di(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new ki(this.touched,e)),o.onlySelf||this._parent?._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){yn(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=El(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Il(this._rawAsyncValidators)}},ii=class extends ti{constructor(o,e,t){super(vo(e),xo(t,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,e){return this.controls[o]?this.controls[o]:(this.controls[o]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(o,e,t={}){this.registerControl(o,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(o,e={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(o,e,t={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],e&&this.registerControl(o,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,e={}){gr(this,!0,o),Object.keys(o).forEach(t=>{_r(this,!0,t),this.controls[t].setValue(o[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(Object.keys(o).forEach(t=>{let i=this.controls[t];i&&i.patchValue(o[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o={},e={}){this._forEachChild((t,i)=>{t.reset(o?o[i]:null,ge(I({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Si(this))}getRawValue(){return this._reduceChildren({},(o,e,t)=>(o[t]=e.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&o(t,e)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&o(t))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(e,t,i)=>((t.enabled||this.disabled)&&(e[i]=t.value),e))}_reduceChildren(o,e){let t=o;return this._forEachChild((i,a)=>{t=e(t,i,a)}),t}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var mo=class extends ii{};var yo=new d("",{factory:()=>Co}),Co="always";function Rl(n,o){return[...o.path,n]}function ho(n,o,e=Co){wo(n,o),o.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(n.disabled),Tl(n,o),Fl(n,o),Ol(n,o),Al(n,o)}function er(n,o,e=!0){let t=()=>{};o?.valueAccessor?.registerOnChange(t),o?.valueAccessor?.registerOnTouched(t),vn(n,o),n&&(o._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function bn(n,o){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function Al(n,o){if(o.valueAccessor.setDisabledState){let e=t=>{o.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),o._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function wo(n,o){let e=pr(n);o.validator!==null?n.setValidators(Xa(e,o.validator)):typeof e=="function"&&n.setValidators([e]);let t=fr(n);o.asyncValidator!==null?n.setAsyncValidators(Xa(t,o.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let i=()=>n.updateValueAndValidity();bn(o._rawValidators,i),bn(o._rawAsyncValidators,i)}function vn(n,o){let e=!1;if(n!==null){if(o.validator!==null){let i=pr(n);if(Array.isArray(i)&&i.length>0){let a=i.filter(r=>r!==o.validator);a.length!==i.length&&(e=!0,n.setValidators(a))}}if(o.asyncValidator!==null){let i=fr(n);if(Array.isArray(i)&&i.length>0){let a=i.filter(r=>r!==o.asyncValidator);a.length!==i.length&&(e=!0,n.setAsyncValidators(a))}}}let t=()=>{};return bn(o._rawValidators,t),bn(o._rawAsyncValidators,t),e}function Tl(n,o){o.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&br(n,o)})}function Ol(n,o){o.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&br(n,o),n.updateOn!=="submit"&&n.markAsTouched()})}function br(n,o){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Fl(n,o){let e=(t,i)=>{o.valueAccessor.writeValue(t),i&&o.viewToModelUpdate(t)};n.registerOnChange(e),o._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function vr(n,o){n==null,wo(n,o)}function Pl(n,o){return vn(n,o)}function Ll(n,o){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function Nl(n){return Object.getPrototypeOf(n.constructor)===fl}function xr(n,o){n._syncPendingControls(),o.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Vl(n,o){if(!o)return null;Array.isArray(o);let e,t,i;return o.forEach(a=>{a.constructor===ar?e=a:Nl(a)?t=a:i=a}),i||t||e||null}function Bl(n,o){let e=n.indexOf(o);e>-1&&n.splice(e,1)}var zl={provide:Ct,useExisting:Xe(()=>Nt)},wi=Promise.resolve(),Nt=(()=>{class n extends Ct{callSetDisabledState;get submitted(){return tt(this.submittedReactive)}_submitted=it(()=>this.submittedReactive());submittedReactive=$(!1);_directives=new Set;form;ngSubmit=new T;options;constructor(e,t,i){super(),this.callSetDisabledState=i,this.form=new ii({},go(e),bo(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){wi.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),ho(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){wi.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){wi.then(()=>{let t=this._findContainer(e.path),i=new ii({});vr(i,e),t.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){wi.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){wi.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),xr(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new gn(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(he(xn,10),he(_o,10),he(yo,8))};static \u0275dir=v({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,i){t&1&&N("submit",function(r){return i.onSubmit(r)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[U([zl]),W]})}return n})();function tr(n,o){let e=n.indexOf(o);e>-1&&n.splice(e,1)}function ir(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var mn=class extends ti{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,t){super(vo(e),xo(t,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),yn(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ir(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Si(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){tr(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){tr(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){ir(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var Hl=n=>n instanceof mn;var Sh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var uo=class extends ti{constructor(o,e,t){super(vo(e),xo(t,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(o){return this.controls[this._adjustIndex(o)]}push(o,e={}){Array.isArray(o)?o.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(o),this._registerControl(o)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(o,e,t={}){this.controls.splice(o,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(o,e={}){let t=this._adjustIndex(o);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(o,e,t={}){let i=this._adjustIndex(o);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(o,e={}){gr(this,!1,o),o.forEach((t,i)=>{_r(this,!1,i),this.at(i).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(o.forEach((t,i)=>{this.at(i)&&this.at(i).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o=[],e={}){this._forEachChild((t,i)=>{t.reset(o[i],ge(I({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Si(this))}getRawValue(){return this.controls.map(o=>o.getRawValue())}clear(o={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:o.emitEvent}))}_adjustIndex(o){return o<0?o+this.length:o}_syncPendingControls(){let o=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){this.controls.forEach((e,t)=>{o(e,t)})}_updateValue(){this.value=this.controls.filter(o=>o.enabled||this.disabled).map(o=>o.value)}_anyControls(o){return this.controls.some(e=>e.enabled&&o(e))}_setUpControls(){this._forEachChild(o=>this._registerControl(o))}_allControlsDisabled(){for(let o of this.controls)if(o.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(o){o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)}_find(o){return this.at(o)??null}};var jl=(()=>{class n extends Ct{callSetDisabledState;get submitted(){return tt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=it(()=>this._submittedReactive());_submittedReactive=$(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(vn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return ho(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){er(e.control||null,e,!1),Bl(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,xr(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new gn(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,i=this.form.get(e.path);t!==i&&(er(t||null,e),Hl(i)&&(ho(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);vr(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Pl(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){wo(this.form,this),this._oldForm&&vn(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(he(xn,10),he(_o,10),he(yo,8))};static \u0275dir=v({type:n,features:[W,ne]})}return n})();var yr=new d("");var Wl={provide:Ge,useExisting:Xe(()=>Ul)},Ul=(()=>{class n extends Ge{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new T;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,i,a,r){super(),this._ngModelWarningConfig=r,this._parent=e,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Vl(this,a)}ngOnChanges(e){this._added||this._setUpControl(),Ll(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Rl(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(he(Ct,13),he(xn,10),he(_o,10),he(Mi,10),he(yr,8))};static \u0275dir=v({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[U([Wl]),W,ne]})}return n})();var Gl={provide:Ct,useExisting:Xe(()=>Vt)},Vt=(()=>{class n extends jl{form=null;ngSubmit=new T;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,i){t&1&&N("submit",function(r){return i.onSubmit(r)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[U([Gl]),W]})}return n})();function ql(n){return typeof n=="number"?n:parseInt(n,10)}var Yl=(()=>{class n{_validator=hn;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):hn,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,features:[ne]})}return n})();var Ql={provide:xn,useExisting:Xe(()=>$l),multi:!0},$l=(()=>{class n extends Yl{maxlength;inputName="maxlength";normalizeInput=e=>ql(e);createValidator=e=>rr(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(t,i){t&2&&y("maxlength",i._enabled?i.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[U([Ql]),W]})}return n})();var Kl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({})}return n})();function nr(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Mh=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let i=this._reduceControls(e),a={};return nr(t)?a=t:t!==null&&(a.validators=t.validator,a.asyncValidators=t.asyncValidator),new ii(i,a)}record(e,t=null){let i=this._reduceControls(e);return new mo(i,t)}control(e,t,i){let a={};return this.useNonNullable?(nr(t)?a=t:(a.validators=t,a.asyncValidators=i),new mn(e,ge(I({},a),{nonNullable:!0}))):new mn(e,t,i)}array(e,t,i){let a=e.map(r=>this._createControl(r));return new uo(a,t,i)}_reduceControls(e){let t={};return Object.keys(e).forEach(i=>{t[i]=this._createControl(e[i])}),t}_createControl(e){if(e instanceof mn)return e;if(e instanceof ti)return e;if(Array.isArray(e)){let t=e[0],i=e.length>1?e[1]:null,a=e.length>2?e[2]:null;return this.control(t,i,a)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Eh=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:yr,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:yo,useValue:e.callSetDisabledState??Co}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[Kl]})}return n})();var Cr=class n{supabaseService=s(Ka);router=s($a);ngZone=s(R);fotoUsuario$=$(localStorage.getItem("user_foto"));nomeUsuario$=$(localStorage.getItem("user_nome")||"Irm\xE3o(\xE3)");userGenero$=$(localStorage.getItem("user_genero")?Number(localStorage.getItem("user_genero")):null);constructor(){this.iniciarObservadorDeSessao()}obterUsuarioLogado(){let o=localStorage.getItem("user_genero");return{email:localStorage.getItem("user_email"),nome:localStorage.getItem("user_nome"),nivel:localStorage.getItem("user_nivel"),setor:localStorage.getItem("user_setor"),fotoUrl:localStorage.getItem("user_foto"),genero:o&&o!==""?Number(o):null}}atualizarFotoGlobal(o){this.fotoUsuario$.set(o),o?localStorage.setItem("user_foto",o):localStorage.removeItem("user_foto")}atualizarNomeGlobal(o){this.nomeUsuario$.set(o),localStorage.setItem("user_nome",o)}atualizarGeneroGlobal(o){this.userGenero$.set(o),o!==null?localStorage.setItem("user_genero",o.toString()):localStorage.removeItem("user_genero")}iniciarObservadorDeSessao(){this.supabaseService.supabase.auth.onAuthStateChange((o,e)=>{this.ngZone.run(()=>{if(o==="SIGNED_OUT")this.limparSessaoLocal(),this.router.navigate(["/login"]);else if(o==="TOKEN_REFRESHED"){let t=this.router.url;this.router.navigateByUrl("/",{skipLocationChange:!0}).then(()=>{this.router.navigate([t])})}})})}limparSessaoLocal(){localStorage.removeItem("user_email"),localStorage.removeItem("user_nome"),localStorage.removeItem("user_nivel"),localStorage.removeItem("user_setor"),localStorage.removeItem("user_foto"),localStorage.removeItem("user_genero"),this.fotoUsuario$.set(null),this.nomeUsuario$.set("Irm\xE3o(\xE3)"),this.atualizarGeneroGlobal(null)}login(o,e){return gi(this.executarLoginSupabase(o,e))}async executarLoginSupabase(o,e){try{let{data:t,error:i}=await this.supabaseService.supabase.auth.signInWithPassword({email:o,password:e});if(i)throw new Error("E-mail ou senha incorretos.");let{data:a,error:r}=await this.supabaseService.supabase.from("membros").select("*").eq("id",t.user.id).single();if(r||!a)throw new Error("Perfil n\xE3o encontrado.");if(a.status==="INATIVO")throw await this.supabaseService.supabase.auth.signOut(),new Error("Sua conta est\xE1 inativa. Entre em contato com a administra\xE7\xE3o.");return this.atualizarLocalStorage(a),{sucesso:!0,usuario:a}}catch(t){return{sucesso:!1,mensagem:t.message}}}atualizarLocalStorage(o){localStorage.setItem("user_email",o.email),localStorage.setItem("user_nivel",o.nivel_acesso||"USER"),localStorage.setItem("user_genero",o.genero?.toString()||""),o.setor_responsavel?localStorage.setItem("user_setor",o.setor_responsavel):localStorage.removeItem("user_setor"),this.atualizarNomeGlobal(`${o.nome} ${o.sobrenome}`),this.atualizarFotoGlobal(o.foto_url||null),this.atualizarGeneroGlobal(o.genero||null)}cadastrar(o){return gi(this.executarCadastroSupabase(o))}async executarCadastroSupabase(o){try{let{data:e,error:t}=await this.supabaseService.supabase.auth.signUp({email:o.email,password:o.senha});if(t)throw new Error(t.message);if(!e.user)throw new Error("Erro ao gerar identifica\xE7\xE3o do usu\xE1rio.");let i=null;if(o.foto){let r=o.foto.name.split(".").pop(),l=`${e.user.id}-perfil.${r}`,{error:c}=await this.supabaseService.supabase.storage.from("fotos_membros").upload(l,o.foto,{cacheControl:"3600",upsert:!0});if(c)console.error(...Zl("1685696037_178_10_178_59_11","Erro ao subir foto:",c));else{let{data:g}=this.supabaseService.supabase.storage.from("fotos_membros").getPublicUrl(l);i=g.publicUrl}}let{error:a}=await this.supabaseService.supabase.from("membros").insert([{id:e.user.id,nome:o.nome,sobrenome:o.sobrenome,email:o.email,telefone:o.telefone,data_nascimento:o.dataNascimento||null,cargo:o.cargo||"membro",nivel_acesso:"USER",status:"ATIVO",foto_url:i,genero:o.genero||null,estado_civil:o.estado_civil||null,nivel_escolaridade:o.nivel_escolaridade||null,endereco:o.endereco||null}]);if(a)throw new Error("Erro ao salvar os dados do perfil.");return await this.supabaseService.supabase.auth.signOut(),this.limparSessaoLocal(),{sucesso:!0,mensagem:"Cadastro realizado com sucesso!"}}catch(e){let t=e.message;return t.includes("already registered")&&(t="Este e-mail j\xE1 est\xE1 cadastrado."),t.includes("Password should be at least")&&(t="A senha deve ter pelo menos 6 caracteres."),{sucesso:!1,mensagem:t}}}async logout(){await this.supabaseService.supabase.auth.signOut(),this.limparSessaoLocal(),this.router.navigate(["/login"])}static \u0275fac=function(e){return new(e||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})};function Xl(){try{return(0,eval)("globalThis._console_ninja")||(0,eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x2a2d63=_0x5b90;function _0x50d1(){var _0x4b9cdd=['error','onmessage','props','_setNodeExpandableState','_addProperty',["localhost","127.0.0.1","example.cypress.io","10.0.2.2","luiz-Inspiron-5566","192.168.1.113"],'replace','2019936MiQjBG','android','ninjaSuppressConsole','1','emulator','reload','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','iterator','console','number','boolean','root_exp_id','symbol','toString','concat','sortProps','dockerizedApp','_sortProps','getOwnPropertySymbols','nodeModules','osName','','args','autoExpandPreviousObjects','_undefined','capped','edge','resetOnProcessingTimeAverageMs','modules','fromCharCode','onopen','now','\\x20server','stringify','_inNextEdge','...','_addFunctionsNode','Boolean','join','_sendErrorMessage','_property','call','log','bound\\x20Promise','onerror','global','date','catch','_reconnectTimeout','unref','forEach','function','[object\\x20Array]','149530MjmlHb','_setNodeQueryPath','ws://','getter','_setNodeExpressionPath','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','type','current','message','_keyStrRegExp','_allowedToConnectOnSend','autoExpandMaxDepth','_maxConnectAttemptCount','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','array','bigint','env','hrtime','logger\\x20websocket\\x20error','13097wPqOIH','Error','pop','value','depth','_dateToString','autoExpandLimit','name','_regExpToString','_socket','react-native','_WebSocket','node','path','toUpperCase','serialize','_hasSetOnItsPath','Map','[object\\x20Date]','valueOf','astro','split','10.0.2.2','RegExp','process','_isUndefined','allStrLength','next.js','_isArray','time','expId','push','autoExpand','funcName','_consoleNinjaAllowedToStart','_additionalMetadata','performance','undefined','resolve','default','get','_type','null','_addObjectProperty','HTMLAllCollection','_HTMLAllCollection','_cleanNode','data','string','resolveGetters','hostname','nan','_getOwnPropertySymbols','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_setNodeId','_disposeWebsocket','slice','2756360OpuQOD','hits','99vstWcR','_attemptToReconnectShortly','_WebSocketClass','_setNodeLabel','count','negativeZero','_allowedToSend','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','endsWith','strLength','POSITIVE_INFINITY','_capIfString','getOwnPropertyNames','_console_ninja','2778WRmYtL','_propertyName','_connecting','close','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','then','ExpoDevice','cappedElements','includes','match','Buffer','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','expressionsToEvaluate','getOwnPropertyDescriptor','_processTreeNodeResult','noFunctions','_treeNodePropertiesBeforeFullValue','object','2478136MUHGOm','_connectToHostNow','constructor','10sGPZfJ','_p_length','_quotedRegExp','cappedProps','location','NEXT_RUNTIME','reducePolicy','_setNodePermissions','autoExpandPropertyCount','String','unshift','reduceOnAccumulatedProcessingTimeMs','parse','send','port','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','startsWith','test','defaultLimits','url','_connectAttemptCount','disabledLog','perf_hooks','substr','parent','_blacklistedProperty','trace','getWebSocketClass','_inBrowser','coverage','elapsed','_isPrimitiveWrapperType','_hasMapOnItsPath','[object\\x20Map]','eventReceivedCallback','4IqDYGD','isExpressionToEvaluate','reduceOnCount','_ws','https://tinyurl.com/37x8b79t','WebSocket','level','unknown','33pLmPAl','_getOwnPropertyDescriptor','resetWhenQuietMs','totalStrLength','Symbol','index','positiveInfinity','angular','_isNegativeZero','93218tgeECX','_addLoadNode','_Symbol','_ninjaIgnoreNextError','method','_objectToString','reduceLimits',{"resolveGetters":false,"defaultLimits":{"props":100,"elements":100,"strLength":51200,"totalStrLength":51200,"autoExpandLimit":5000,"autoExpandMaxDepth":10},"reducedLimits":{"props":5,"elements":5,"strLength":256,"totalStrLength":768,"autoExpandLimit":30,"autoExpandMaxDepth":2},"reducePolicy":{"perLogpoint":{"reduceOnCount":50,"reduceOnAccumulatedProcessingTimeMs":100,"resetWhenQuietMs":500,"resetOnProcessingTimeAverageMs":100},"global":{"reduceOnCount":1000,"reduceOnAccumulatedProcessingTimeMs":300,"resetWhenQuietMs":50,"resetOnProcessingTimeAverageMs":100}}},'14201844PKiEKA','1.0.0','[object\\x20Set]','NEGATIVE_INFINITY','Promise','bind','_connected','_console_ninja_session','gateway.docker.internal','length','import(\\x27url\\x27)','_getOwnPropertyNames','versions','_treeNodePropertiesAfterFullValue','reducedLimits','origin','root_exp','map','prototype','_isSet','_isMap','perLogpoint','setter','angular','toLowerCase','_hasSymbolPropertyOnItsPath','elements','expo','sort','_webSocketErrorDocsLink','warn','_p_',"/home/luiz/.vscode/extensions/wallabyjs.console-ninja-1.0.539/node_modules",'_isPrimitiveType','timeStamp'];_0x50d1=function(){return _0x4b9cdd;};return _0x50d1();}(function(_0x52a382,_0x964dd1){var _0xde4808=_0x5b90,_0x236f12=_0x52a382();while(!![]){try{var _0x340f73=parseInt(_0xde4808(0x1f1))/0x1*(-parseInt(_0xde4808(0x225))/0x2)+-parseInt(_0xde4808(0x14b))/0x3+parseInt(_0xde4808(0x214))/0x4*(-parseInt(_0xde4808(0x1cc))/0x5)+parseInt(_0xde4808(0x1dc))/0x6*(-parseInt(_0xde4808(0x193))/0x7)+-parseInt(_0xde4808(0x1ee))/0x8+-parseInt(_0xde4808(0x1ce))/0x9*(parseInt(_0xde4808(0x180))/0xa)+parseInt(_0xde4808(0x21c))/0xb*(parseInt(_0xde4808(0x22d))/0xc);if(_0x340f73===_0x964dd1)break;else _0x236f12['push'](_0x236f12['shift']());}catch(_0x4c059c){_0x236f12['push'](_0x236f12['shift']());}}}(_0x50d1,0x7ec60));function _0x5b90(_0x488e83,_0x3a11da){var _0x50d1c6=_0x50d1();return _0x5b90=function(_0x5b90bf,_0x644c1b){_0x5b90bf=_0x5b90bf-0x12e;var _0x5276bc=_0x50d1c6[_0x5b90bf];return _0x5276bc;},_0x5b90(_0x488e83,_0x3a11da);}function z(_0xc5dc58,_0x3bdb0a,_0x2a70ad,_0x31a7f2,_0x1a155d,_0x27268b){var _0x582bee=_0x5b90,_0x1ba807,_0x2ee51b,_0x5d3d82,_0x14e222;this[_0x582bee(0x178)]=_0xc5dc58,this['host']=_0x3bdb0a,this[_0x582bee(0x1ff)]=_0x2a70ad,this[_0x582bee(0x15e)]=_0x31a7f2,this[_0x582bee(0x15b)]=_0x1a155d,this[_0x582bee(0x213)]=_0x27268b,this['_allowedToSend']=!0x0,this[_0x582bee(0x18a)]=!0x0,this[_0x582bee(0x233)]=!0x1,this['_connecting']=!0x1,this[_0x582bee(0x16d)]=((_0x2ee51b=(_0x1ba807=_0xc5dc58[_0x582bee(0x1ab)])==null?void 0x0:_0x1ba807[_0x582bee(0x190)])==null?void 0x0:_0x2ee51b[_0x582bee(0x1f6)])===_0x582bee(0x165),this[_0x582bee(0x20d)]=!((_0x14e222=(_0x5d3d82=this[_0x582bee(0x178)]['process'])==null?void 0x0:_0x5d3d82[_0x582bee(0x239)])!=null&&_0x14e222['node'])&&!this[_0x582bee(0x16d)],this[_0x582bee(0x1d0)]=null,this[_0x582bee(0x205)]=0x0,this[_0x582bee(0x18c)]=0x14,this[_0x582bee(0x13e)]=_0x582bee(0x218),this[_0x582bee(0x172)]=(this[_0x582bee(0x20d)]?_0x582bee(0x151):_0x582bee(0x200))+this[_0x582bee(0x13e)];}z[_0x2a2d63(0x133)]['getWebSocketClass']=async function(){var _0x1cdb1b=_0x2a2d63,_0x257dc2,_0x169726;if(this['_WebSocketClass'])return this[_0x1cdb1b(0x1d0)];let _0x1fee78;if(this[_0x1cdb1b(0x20d)]||this[_0x1cdb1b(0x16d)])_0x1fee78=this[_0x1cdb1b(0x178)][_0x1cdb1b(0x219)];else{if((_0x257dc2=this[_0x1cdb1b(0x178)]['process'])!=null&&_0x257dc2[_0x1cdb1b(0x19e)])_0x1fee78=(_0x169726=this[_0x1cdb1b(0x178)]['process'])==null?void 0x0:_0x169726[_0x1cdb1b(0x19e)];else try{_0x1fee78=(await new Function(_0x1cdb1b(0x1a0),_0x1cdb1b(0x204),_0x1cdb1b(0x15e),'return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());')(await(0x0,eval)('import(\\x27path\\x27)'),await(0x0,eval)(_0x1cdb1b(0x237)),this[_0x1cdb1b(0x15e)]))[_0x1cdb1b(0x1ba)];}catch{try{_0x1fee78=require(require(_0x1cdb1b(0x1a0))[_0x1cdb1b(0x171)](this[_0x1cdb1b(0x15e)],'ws'));}catch{throw new Error(_0x1cdb1b(0x1e0));}}}return this[_0x1cdb1b(0x1d0)]=_0x1fee78,_0x1fee78;},z[_0x2a2d63(0x133)]['_connectToHostNow']=function(){var _0x2158b7=_0x2a2d63;this[_0x2158b7(0x1de)]||this[_0x2158b7(0x233)]||this[_0x2158b7(0x205)]>=this[_0x2158b7(0x18c)]||(this[_0x2158b7(0x18a)]=!0x1,this[_0x2158b7(0x1de)]=!0x0,this[_0x2158b7(0x205)]++,this[_0x2158b7(0x217)]=new Promise((_0x3586a1,_0x47ad36)=>{var _0x13ccdb=_0x2158b7;this[_0x13ccdb(0x20c)]()[_0x13ccdb(0x1e1)](_0x5e26d0=>{var _0xbd365f=_0x13ccdb;let _0x1690f9=new _0x5e26d0(_0xbd365f(0x182)+(!this[_0xbd365f(0x20d)]&&this[_0xbd365f(0x15b)]?_0xbd365f(0x235):this['host'])+':'+this['port']);_0x1690f9[_0xbd365f(0x177)]=()=>{var _0x584424=_0xbd365f;this[_0x584424(0x1d4)]=!0x1,this['_disposeWebsocket'](_0x1690f9),this[_0x584424(0x1cf)](),_0x47ad36(new Error(_0x584424(0x192)));},_0x1690f9[_0xbd365f(0x169)]=()=>{var _0x48ed74=_0xbd365f;this['_inBrowser']||_0x1690f9['_socket']&&_0x1690f9['_socket'][_0x48ed74(0x17c)]&&_0x1690f9[_0x48ed74(0x19c)]['unref'](),_0x3586a1(_0x1690f9);},_0x1690f9['onclose']=()=>{var _0xcf370a=_0xbd365f;this[_0xcf370a(0x18a)]=!0x0,this[_0xcf370a(0x1ca)](_0x1690f9),this[_0xcf370a(0x1cf)]();},_0x1690f9[_0xbd365f(0x145)]=_0x551839=>{var _0x396331=_0xbd365f;try{if(!(_0x551839!=null&&_0x551839[_0x396331(0x1c2)])||!this[_0x396331(0x213)])return;let _0x5523c4=JSON[_0x396331(0x1fd)](_0x551839[_0x396331(0x1c2)]);this[_0x396331(0x213)](_0x5523c4[_0x396331(0x229)],_0x5523c4[_0x396331(0x161)],this[_0x396331(0x178)],this[_0x396331(0x20d)]);}catch{}};})[_0x13ccdb(0x1e1)](_0x16555c=>(this[_0x13ccdb(0x233)]=!0x0,this['_connecting']=!0x1,this[_0x13ccdb(0x18a)]=!0x1,this[_0x13ccdb(0x1d4)]=!0x0,this[_0x13ccdb(0x205)]=0x0,_0x16555c))[_0x13ccdb(0x17a)](_0x589414=>(this[_0x13ccdb(0x233)]=!0x1,this[_0x13ccdb(0x1de)]=!0x1,console[_0x13ccdb(0x13f)](_0x13ccdb(0x1c8)+this[_0x13ccdb(0x13e)]),_0x47ad36(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x589414&&_0x589414[_0x13ccdb(0x188)])))));}));},z[_0x2a2d63(0x133)]['_disposeWebsocket']=function(_0x2fccd9){var _0x3fadc5=_0x2a2d63;this['_connected']=!0x1,this['_connecting']=!0x1;try{_0x2fccd9['onclose']=null,_0x2fccd9[_0x3fadc5(0x177)]=null,_0x2fccd9[_0x3fadc5(0x169)]=null;}catch{}try{_0x2fccd9['readyState']<0x2&&_0x2fccd9[_0x3fadc5(0x1df)]();}catch{}},z[_0x2a2d63(0x133)][_0x2a2d63(0x1cf)]=function(){var _0x36fe10=_0x2a2d63;clearTimeout(this[_0x36fe10(0x17b)]),!(this[_0x36fe10(0x205)]>=this[_0x36fe10(0x18c)])&&(this[_0x36fe10(0x17b)]=setTimeout(()=>{var _0x52bba8=_0x36fe10,_0x3ffa28;this['_connected']||this[_0x52bba8(0x1de)]||(this[_0x52bba8(0x1ef)](),(_0x3ffa28=this['_ws'])==null||_0x3ffa28[_0x52bba8(0x17a)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x36fe10(0x17b)][_0x36fe10(0x17c)]&&this[_0x36fe10(0x17b)]['unref']());},z[_0x2a2d63(0x133)][_0x2a2d63(0x1fe)]=async function(_0x5674fa){var _0x7a195c=_0x2a2d63;try{if(!this[_0x7a195c(0x1d4)])return;this[_0x7a195c(0x18a)]&&this[_0x7a195c(0x1ef)](),(await this[_0x7a195c(0x217)])['send'](JSON['stringify'](_0x5674fa));}catch(_0xbf7f74){this['_extendedWarning']?console[_0x7a195c(0x13f)](this[_0x7a195c(0x172)]+':\\x20'+(_0xbf7f74&&_0xbf7f74[_0x7a195c(0x188)])):(this['_extendedWarning']=!0x0,console[_0x7a195c(0x13f)](this[_0x7a195c(0x172)]+':\\x20'+(_0xbf7f74&&_0xbf7f74[_0x7a195c(0x188)]),_0x5674fa)),this[_0x7a195c(0x1d4)]=!0x1,this[_0x7a195c(0x1cf)]();}};function H(_0x86f26f,_0x13a4d2,_0x156be0,_0x29ae59,_0x1048e2,_0x33f118,_0x2fb0e5,_0x5da00e=ne){var _0x59e122=_0x2a2d63;let _0x58d462=_0x156be0[_0x59e122(0x1a8)](',')[_0x59e122(0x132)](_0x4edefa=>{var _0x8ebc60=_0x59e122,_0x3699c8,_0xc8941c,_0x1a5331,_0x3554a9,_0x4c8dab,_0x221acf,_0x44a348,_0x2ba554;try{if(!_0x86f26f['_console_ninja_session']){let _0x3b665c=((_0xc8941c=(_0x3699c8=_0x86f26f[_0x8ebc60(0x1ab)])==null?void 0x0:_0x3699c8[_0x8ebc60(0x239)])==null?void 0x0:_0xc8941c['node'])||((_0x3554a9=(_0x1a5331=_0x86f26f[_0x8ebc60(0x1ab)])==null?void 0x0:_0x1a5331[_0x8ebc60(0x190)])==null?void 0x0:_0x3554a9['NEXT_RUNTIME'])===_0x8ebc60(0x165);(_0x1048e2===_0x8ebc60(0x1ae)||_0x1048e2==='remix'||_0x1048e2===_0x8ebc60(0x1a7)||_0x1048e2===_0x8ebc60(0x138))&&(_0x1048e2+=_0x3b665c?_0x8ebc60(0x16b):'\\x20browser');let _0x40e627='';_0x1048e2===_0x8ebc60(0x19d)&&(_0x40e627=(((_0x44a348=(_0x221acf=(_0x4c8dab=_0x86f26f[_0x8ebc60(0x13c)])==null?void 0x0:_0x4c8dab[_0x8ebc60(0x167)])==null?void 0x0:_0x221acf[_0x8ebc60(0x1e2)])==null?void 0x0:_0x44a348[_0x8ebc60(0x15f)])||_0x8ebc60(0x14f))[_0x8ebc60(0x139)](),_0x40e627&&(_0x1048e2+='\\x20'+_0x40e627,(_0x40e627===_0x8ebc60(0x14c)||_0x40e627==='emulator'&&((_0x2ba554=_0x86f26f[_0x8ebc60(0x1f5)])==null?void 0x0:_0x2ba554[_0x8ebc60(0x1c5)])===_0x8ebc60(0x1a9))&&(_0x13a4d2='10.0.2.2'))),_0x86f26f[_0x8ebc60(0x234)]={'id':+new Date(),'tool':_0x1048e2},_0x2fb0e5&&_0x1048e2&&!_0x3b665c&&(_0x40e627?console[_0x8ebc60(0x175)]('Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+_0x40e627+',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.'):console[_0x8ebc60(0x175)](_0x8ebc60(0x1d5)+(_0x1048e2['charAt'](0x0)[_0x8ebc60(0x1a1)]()+_0x1048e2[_0x8ebc60(0x208)](0x1))+',',_0x8ebc60(0x18d),_0x8ebc60(0x1e7)));}let _0x1dac62=new z(_0x86f26f,_0x13a4d2,_0x4edefa,_0x29ae59,_0x33f118,_0x5da00e);return _0x1dac62[_0x8ebc60(0x1fe)][_0x8ebc60(0x232)](_0x1dac62);}catch(_0x106d50){return console[_0x8ebc60(0x13f)](_0x8ebc60(0x185),_0x106d50&&_0x106d50[_0x8ebc60(0x188)]),()=>{};}});return _0x8acc0f=>_0x58d462[_0x59e122(0x17d)](_0x2a39b0=>_0x2a39b0(_0x8acc0f));}function ne(_0x1bb474,_0x2f9e2e,_0x109bf0,_0x224a92){var _0x21f2bf=_0x2a2d63;_0x224a92&&_0x1bb474===_0x21f2bf(0x150)&&_0x109bf0['location'][_0x21f2bf(0x150)]();}function b(_0x85a381){var _0x3c5a40=_0x2a2d63,_0x4ffcea,_0x221e23;let _0x4d8bb1=function(_0x1035b2,_0x4298d2){return _0x4298d2-_0x1035b2;},_0x160236;if(_0x85a381[_0x3c5a40(0x1b7)])_0x160236=function(){var _0x456dbc=_0x3c5a40;return _0x85a381[_0x456dbc(0x1b7)][_0x456dbc(0x16a)]();};else{if(_0x85a381[_0x3c5a40(0x1ab)]&&_0x85a381['process'][_0x3c5a40(0x191)]&&((_0x221e23=(_0x4ffcea=_0x85a381[_0x3c5a40(0x1ab)])==null?void 0x0:_0x4ffcea[_0x3c5a40(0x190)])==null?void 0x0:_0x221e23[_0x3c5a40(0x1f6)])!==_0x3c5a40(0x165))_0x160236=function(){var _0x252509=_0x3c5a40;return _0x85a381[_0x252509(0x1ab)]['hrtime']();},_0x4d8bb1=function(_0x106926,_0x33217d){return 0x3e8*(_0x33217d[0x0]-_0x106926[0x0])+(_0x33217d[0x1]-_0x106926[0x1])/0xf4240;};else try{let {performance:_0x1683d4}=require(_0x3c5a40(0x207));_0x160236=function(){return _0x1683d4['now']();};}catch{_0x160236=function(){return+new Date();};}}return{'elapsed':_0x4d8bb1,'timeStamp':_0x160236,'now':()=>Date[_0x3c5a40(0x16a)]()};}function X(_0x2b1e8d,_0x2db82b,_0x4da71d){var _0x3d6fdd=_0x2a2d63,_0x9f814a,_0x2318cf,_0x45a97b,_0x4686d2,_0xfdd0d,_0x581a78,_0x23e3b8;if(_0x2b1e8d[_0x3d6fdd(0x1b5)]!==void 0x0)return _0x2b1e8d[_0x3d6fdd(0x1b5)];let _0x2f1118=((_0x2318cf=(_0x9f814a=_0x2b1e8d[_0x3d6fdd(0x1ab)])==null?void 0x0:_0x9f814a['versions'])==null?void 0x0:_0x2318cf[_0x3d6fdd(0x19f)])||((_0x4686d2=(_0x45a97b=_0x2b1e8d[_0x3d6fdd(0x1ab)])==null?void 0x0:_0x45a97b[_0x3d6fdd(0x190)])==null?void 0x0:_0x4686d2['NEXT_RUNTIME'])==='edge',_0x117063=!!(_0x4da71d===_0x3d6fdd(0x19d)&&((_0xfdd0d=_0x2b1e8d[_0x3d6fdd(0x13c)])==null?void 0x0:_0xfdd0d[_0x3d6fdd(0x167)]));function _0x48998f(_0x1ee9eb){var _0x24305c=_0x3d6fdd;if(_0x1ee9eb[_0x24305c(0x201)]('/')&&_0x1ee9eb[_0x24305c(0x1d6)]('/')){let _0x131e9b=new RegExp(_0x1ee9eb[_0x24305c(0x1cb)](0x1,-0x1));return _0x4704a1=>_0x131e9b[_0x24305c(0x202)](_0x4704a1);}else{if(_0x1ee9eb['includes']('*')||_0x1ee9eb[_0x24305c(0x1e4)]('?')){let _0x5675cd=new RegExp('^'+_0x1ee9eb['replace'](/\\./g,String[_0x24305c(0x168)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x24305c(0x14a)](/\\?/g,'.')+String[_0x24305c(0x168)](0x24));return _0x96d99b=>_0x5675cd['test'](_0x96d99b);}else return _0x253f4d=>_0x253f4d===_0x1ee9eb;}}let _0x480d4b=_0x2db82b[_0x3d6fdd(0x132)](_0x48998f);return _0x2b1e8d[_0x3d6fdd(0x1b5)]=_0x2f1118||!_0x2db82b,!_0x2b1e8d['_consoleNinjaAllowedToStart']&&((_0x581a78=_0x2b1e8d['location'])==null?void 0x0:_0x581a78[_0x3d6fdd(0x1c5)])&&(_0x2b1e8d[_0x3d6fdd(0x1b5)]=_0x480d4b['some'](_0x3cdb88=>_0x3cdb88(_0x2b1e8d[_0x3d6fdd(0x1f5)][_0x3d6fdd(0x1c5)]))),_0x117063&&!_0x2b1e8d[_0x3d6fdd(0x1b5)]&&!((_0x23e3b8=_0x2b1e8d[_0x3d6fdd(0x1f5)])!=null&&_0x23e3b8[_0x3d6fdd(0x1c5)])&&(_0x2b1e8d['_consoleNinjaAllowedToStart']=!0x0),_0x2b1e8d[_0x3d6fdd(0x1b5)];}function J(_0x374f0e,_0x568a19,_0x41baa1,_0x5ca5a8,_0x438bc6,_0x36b08c){var _0x49a551=_0x2a2d63;_0x374f0e=_0x374f0e,_0x568a19=_0x568a19,_0x41baa1=_0x41baa1,_0x5ca5a8=_0x5ca5a8,_0x438bc6=_0x438bc6,_0x438bc6=_0x438bc6||{},_0x438bc6[_0x49a551(0x203)]=_0x438bc6[_0x49a551(0x203)]||{},_0x438bc6[_0x49a551(0x12f)]=_0x438bc6[_0x49a551(0x12f)]||{},_0x438bc6['reducePolicy']=_0x438bc6[_0x49a551(0x1f7)]||{},_0x438bc6[_0x49a551(0x1f7)]['perLogpoint']=_0x438bc6[_0x49a551(0x1f7)][_0x49a551(0x136)]||{},_0x438bc6[_0x49a551(0x1f7)][_0x49a551(0x178)]=_0x438bc6[_0x49a551(0x1f7)][_0x49a551(0x178)]||{};let _0x1217f4={'perLogpoint':{'reduceOnCount':_0x438bc6['reducePolicy'][_0x49a551(0x136)][_0x49a551(0x216)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x438bc6[_0x49a551(0x1f7)]['perLogpoint'][_0x49a551(0x1fc)]||0x64,'resetWhenQuietMs':_0x438bc6[_0x49a551(0x1f7)][_0x49a551(0x136)][_0x49a551(0x21e)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x438bc6[_0x49a551(0x1f7)]['perLogpoint'][_0x49a551(0x166)]||0x64},'global':{'reduceOnCount':_0x438bc6[_0x49a551(0x1f7)]['global'][_0x49a551(0x216)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x438bc6[_0x49a551(0x1f7)][_0x49a551(0x178)][_0x49a551(0x1fc)]||0x12c,'resetWhenQuietMs':_0x438bc6['reducePolicy'][_0x49a551(0x178)][_0x49a551(0x21e)]||0x32,'resetOnProcessingTimeAverageMs':_0x438bc6['reducePolicy'][_0x49a551(0x178)][_0x49a551(0x166)]||0x64}},_0x54793d=b(_0x374f0e),_0x217505=_0x54793d['elapsed'],_0xb25ae6=_0x54793d[_0x49a551(0x143)];function _0x15b081(){var _0xc701fb=_0x49a551;this[_0xc701fb(0x189)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0xc701fb(0x1f3)]=/'([^\\\\']|\\\\')*'/,this[_0xc701fb(0x163)]=_0x374f0e[_0xc701fb(0x1b8)],this[_0xc701fb(0x1c0)]=_0x374f0e[_0xc701fb(0x1bf)],this['_getOwnPropertyDescriptor']=Object[_0xc701fb(0x1e9)],this[_0xc701fb(0x238)]=Object[_0xc701fb(0x1da)],this[_0xc701fb(0x227)]=_0x374f0e[_0xc701fb(0x220)],this['_regExpToString']=RegExp['prototype'][_0xc701fb(0x158)],this[_0xc701fb(0x198)]=Date[_0xc701fb(0x133)]['toString'];}_0x15b081['prototype'][_0x49a551(0x1a2)]=function(_0x3a6afa,_0x31e171,_0x48dce2,_0x38baed){var _0x37b462=_0x49a551,_0x502140=this,_0x2eee84=_0x48dce2['autoExpand'];function _0xb3d884(_0x2ca60d,_0x721bda,_0x1d9685){var _0x205c60=_0x5b90;_0x721bda['type']=_0x205c60(0x21b),_0x721bda[_0x205c60(0x144)]=_0x2ca60d[_0x205c60(0x188)],_0x52e453=_0x1d9685['node'][_0x205c60(0x187)],_0x1d9685[_0x205c60(0x19f)]['current']=_0x721bda,_0x502140[_0x205c60(0x1ec)](_0x721bda,_0x1d9685);}let _0x129e43,_0x26742a,_0x503eca=_0x374f0e[_0x37b462(0x14d)];_0x374f0e['ninjaSuppressConsole']=!0x0,_0x374f0e[_0x37b462(0x153)]&&(_0x129e43=_0x374f0e['console']['error'],_0x26742a=_0x374f0e[_0x37b462(0x153)]['warn'],_0x129e43&&(_0x374f0e[_0x37b462(0x153)][_0x37b462(0x144)]=function(){}),_0x26742a&&(_0x374f0e[_0x37b462(0x153)][_0x37b462(0x13f)]=function(){}));try{try{_0x48dce2['level']++,_0x48dce2['autoExpand']&&_0x48dce2[_0x37b462(0x162)]['push'](_0x31e171);var _0x4064f0,_0x4a8c4e,_0xffa9a3,_0x240414,_0x27820d=[],_0x9966a4=[],_0x21e0f1,_0x1e3c42=this[_0x37b462(0x1bc)](_0x31e171),_0xad282=_0x1e3c42===_0x37b462(0x18e),_0x55c1dc=!0x1,_0x28ac1e=_0x1e3c42===_0x37b462(0x17e),_0x59220b=this[_0x37b462(0x142)](_0x1e3c42),_0x31a09e=this[_0x37b462(0x210)](_0x1e3c42),_0x17baf5=_0x59220b||_0x31a09e,_0x153e12={},_0x2dd6f9=0x0,_0x59fd18=!0x1,_0x52e453,_0xe11662=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x48dce2[_0x37b462(0x197)]){if(_0xad282){if(_0x4a8c4e=_0x31e171[_0x37b462(0x236)],_0x4a8c4e>_0x48dce2['elements']){for(_0xffa9a3=0x0,_0x240414=_0x48dce2[_0x37b462(0x13b)],_0x4064f0=_0xffa9a3;_0x4064f0<_0x240414;_0x4064f0++)_0x9966a4[_0x37b462(0x1b2)](_0x502140[_0x37b462(0x148)](_0x27820d,_0x31e171,_0x1e3c42,_0x4064f0,_0x48dce2));_0x3a6afa[_0x37b462(0x1e3)]=!0x0;}else{for(_0xffa9a3=0x0,_0x240414=_0x4a8c4e,_0x4064f0=_0xffa9a3;_0x4064f0<_0x240414;_0x4064f0++)_0x9966a4['push'](_0x502140[_0x37b462(0x148)](_0x27820d,_0x31e171,_0x1e3c42,_0x4064f0,_0x48dce2));}_0x48dce2['autoExpandPropertyCount']+=_0x9966a4[_0x37b462(0x236)];}if(!(_0x1e3c42===_0x37b462(0x1bd)||_0x1e3c42==='undefined')&&!_0x59220b&&_0x1e3c42!==_0x37b462(0x1fa)&&_0x1e3c42!==_0x37b462(0x1e6)&&_0x1e3c42!==_0x37b462(0x18f)){var _0x76913d=_0x38baed[_0x37b462(0x146)]||_0x48dce2[_0x37b462(0x146)];if(this['_isSet'](_0x31e171)?(_0x4064f0=0x0,_0x31e171['forEach'](function(_0x4958f9){var _0x458d7a=_0x37b462;if(_0x2dd6f9++,_0x48dce2[_0x458d7a(0x1f9)]++,_0x2dd6f9>_0x76913d){_0x59fd18=!0x0;return;}if(!_0x48dce2[_0x458d7a(0x215)]&&_0x48dce2[_0x458d7a(0x1b3)]&&_0x48dce2[_0x458d7a(0x1f9)]>_0x48dce2[_0x458d7a(0x199)]){_0x59fd18=!0x0;return;}_0x9966a4[_0x458d7a(0x1b2)](_0x502140[_0x458d7a(0x148)](_0x27820d,_0x31e171,'Set',_0x4064f0++,_0x48dce2,function(_0x278d00){return function(){return _0x278d00;};}(_0x4958f9)));})):this[_0x37b462(0x135)](_0x31e171)&&_0x31e171['forEach'](function(_0x17ef37,_0x310bd7){var _0x106137=_0x37b462;if(_0x2dd6f9++,_0x48dce2[_0x106137(0x1f9)]++,_0x2dd6f9>_0x76913d){_0x59fd18=!0x0;return;}if(!_0x48dce2[_0x106137(0x215)]&&_0x48dce2[_0x106137(0x1b3)]&&_0x48dce2[_0x106137(0x1f9)]>_0x48dce2['autoExpandLimit']){_0x59fd18=!0x0;return;}var _0x249b94=_0x310bd7[_0x106137(0x158)]();_0x249b94[_0x106137(0x236)]>0x64&&(_0x249b94=_0x249b94[_0x106137(0x1cb)](0x0,0x64)+_0x106137(0x16e)),_0x9966a4[_0x106137(0x1b2)](_0x502140[_0x106137(0x148)](_0x27820d,_0x31e171,'Map',_0x249b94,_0x48dce2,function(_0x2e3ffe){return function(){return _0x2e3ffe;};}(_0x17ef37)));}),!_0x55c1dc){try{for(_0x21e0f1 in _0x31e171)if(!(_0xad282&&_0xe11662[_0x37b462(0x202)](_0x21e0f1))&&!this[_0x37b462(0x20a)](_0x31e171,_0x21e0f1,_0x48dce2)){if(_0x2dd6f9++,_0x48dce2[_0x37b462(0x1f9)]++,_0x2dd6f9>_0x76913d){_0x59fd18=!0x0;break;}if(!_0x48dce2['isExpressionToEvaluate']&&_0x48dce2[_0x37b462(0x1b3)]&&_0x48dce2['autoExpandPropertyCount']>_0x48dce2[_0x37b462(0x199)]){_0x59fd18=!0x0;break;}_0x9966a4[_0x37b462(0x1b2)](_0x502140['_addObjectProperty'](_0x27820d,_0x153e12,_0x31e171,_0x1e3c42,_0x21e0f1,_0x48dce2));}}catch{}if(_0x153e12[_0x37b462(0x1f2)]=!0x0,_0x28ac1e&&(_0x153e12['_p_name']=!0x0),!_0x59fd18){var _0x50a7a2=[][_0x37b462(0x159)](this[_0x37b462(0x238)](_0x31e171))['concat'](this[_0x37b462(0x1c7)](_0x31e171));for(_0x4064f0=0x0,_0x4a8c4e=_0x50a7a2['length'];_0x4064f0<_0x4a8c4e;_0x4064f0++)if(_0x21e0f1=_0x50a7a2[_0x4064f0],!(_0xad282&&_0xe11662[_0x37b462(0x202)](_0x21e0f1[_0x37b462(0x158)]()))&&!this[_0x37b462(0x20a)](_0x31e171,_0x21e0f1,_0x48dce2)&&!_0x153e12[typeof _0x21e0f1!=_0x37b462(0x157)?'_p_'+_0x21e0f1[_0x37b462(0x158)]():_0x21e0f1]){if(_0x2dd6f9++,_0x48dce2['autoExpandPropertyCount']++,_0x2dd6f9>_0x76913d){_0x59fd18=!0x0;break;}if(!_0x48dce2['isExpressionToEvaluate']&&_0x48dce2['autoExpand']&&_0x48dce2[_0x37b462(0x1f9)]>_0x48dce2[_0x37b462(0x199)]){_0x59fd18=!0x0;break;}_0x9966a4['push'](_0x502140[_0x37b462(0x1be)](_0x27820d,_0x153e12,_0x31e171,_0x1e3c42,_0x21e0f1,_0x48dce2));}}}}}if(_0x3a6afa[_0x37b462(0x186)]=_0x1e3c42,_0x17baf5?(_0x3a6afa[_0x37b462(0x196)]=_0x31e171['valueOf'](),this[_0x37b462(0x1d9)](_0x1e3c42,_0x3a6afa,_0x48dce2,_0x38baed)):_0x1e3c42===_0x37b462(0x179)?_0x3a6afa['value']=this[_0x37b462(0x198)][_0x37b462(0x174)](_0x31e171):_0x1e3c42===_0x37b462(0x18f)?_0x3a6afa[_0x37b462(0x196)]=_0x31e171[_0x37b462(0x158)]():_0x1e3c42===_0x37b462(0x1aa)?_0x3a6afa[_0x37b462(0x196)]=this[_0x37b462(0x19b)][_0x37b462(0x174)](_0x31e171):_0x1e3c42===_0x37b462(0x157)&&this[_0x37b462(0x227)]?_0x3a6afa[_0x37b462(0x196)]=this[_0x37b462(0x227)][_0x37b462(0x133)][_0x37b462(0x158)]['call'](_0x31e171):!_0x48dce2[_0x37b462(0x197)]&&!(_0x1e3c42===_0x37b462(0x1bd)||_0x1e3c42===_0x37b462(0x1b8))&&(delete _0x3a6afa['value'],_0x3a6afa[_0x37b462(0x164)]=!0x0),_0x59fd18&&(_0x3a6afa[_0x37b462(0x1f4)]=!0x0),_0x52e453=_0x48dce2['node']['current'],_0x48dce2[_0x37b462(0x19f)][_0x37b462(0x187)]=_0x3a6afa,this[_0x37b462(0x1ec)](_0x3a6afa,_0x48dce2),_0x9966a4[_0x37b462(0x236)]){for(_0x4064f0=0x0,_0x4a8c4e=_0x9966a4[_0x37b462(0x236)];_0x4064f0<_0x4a8c4e;_0x4064f0++)_0x9966a4[_0x4064f0](_0x4064f0);}_0x27820d[_0x37b462(0x236)]&&(_0x3a6afa[_0x37b462(0x146)]=_0x27820d);}catch(_0x48657b){_0xb3d884(_0x48657b,_0x3a6afa,_0x48dce2);}this[_0x37b462(0x1b6)](_0x31e171,_0x3a6afa),this[_0x37b462(0x12e)](_0x3a6afa,_0x48dce2),_0x48dce2[_0x37b462(0x19f)][_0x37b462(0x187)]=_0x52e453,_0x48dce2[_0x37b462(0x21a)]--,_0x48dce2[_0x37b462(0x1b3)]=_0x2eee84,_0x48dce2[_0x37b462(0x1b3)]&&_0x48dce2[_0x37b462(0x162)][_0x37b462(0x195)]();}finally{_0x129e43&&(_0x374f0e['console'][_0x37b462(0x144)]=_0x129e43),_0x26742a&&(_0x374f0e[_0x37b462(0x153)]['warn']=_0x26742a),_0x374f0e['ninjaSuppressConsole']=_0x503eca;}return _0x3a6afa;},_0x15b081[_0x49a551(0x133)][_0x49a551(0x1c7)]=function(_0x4638d5){var _0x50afbc=_0x49a551;return Object['getOwnPropertySymbols']?Object[_0x50afbc(0x15d)](_0x4638d5):[];},_0x15b081[_0x49a551(0x133)][_0x49a551(0x134)]=function(_0x2cad7b){var _0x4ace80=_0x49a551;return!!(_0x2cad7b&&_0x374f0e['Set']&&this[_0x4ace80(0x22a)](_0x2cad7b)===_0x4ace80(0x22f)&&_0x2cad7b[_0x4ace80(0x17d)]);},_0x15b081['prototype'][_0x49a551(0x20a)]=function(_0x1f2b6c,_0x3abb67,_0x4eec5){var _0x44310e=_0x49a551;if(!_0x4eec5[_0x44310e(0x1c4)]){let _0x2a8f05=this[_0x44310e(0x21d)](_0x1f2b6c,_0x3abb67);if(_0x2a8f05&&_0x2a8f05[_0x44310e(0x1bb)])return!0x0;}return _0x4eec5[_0x44310e(0x1eb)]?typeof _0x1f2b6c[_0x3abb67]==_0x44310e(0x17e):!0x1;},_0x15b081[_0x49a551(0x133)]['_type']=function(_0x2e29fd){var _0x59f3ed=_0x49a551,_0x3534a1='';return _0x3534a1=typeof _0x2e29fd,_0x3534a1===_0x59f3ed(0x1ed)?this[_0x59f3ed(0x22a)](_0x2e29fd)===_0x59f3ed(0x17f)?_0x3534a1=_0x59f3ed(0x18e):this[_0x59f3ed(0x22a)](_0x2e29fd)===_0x59f3ed(0x1a5)?_0x3534a1=_0x59f3ed(0x179):this[_0x59f3ed(0x22a)](_0x2e29fd)==='[object\\x20BigInt]'?_0x3534a1=_0x59f3ed(0x18f):_0x2e29fd===null?_0x3534a1=_0x59f3ed(0x1bd):_0x2e29fd[_0x59f3ed(0x1f0)]&&(_0x3534a1=_0x2e29fd[_0x59f3ed(0x1f0)][_0x59f3ed(0x19a)]||_0x3534a1):_0x3534a1===_0x59f3ed(0x1b8)&&this[_0x59f3ed(0x1c0)]&&_0x2e29fd instanceof this[_0x59f3ed(0x1c0)]&&(_0x3534a1=_0x59f3ed(0x1bf)),_0x3534a1;},_0x15b081[_0x49a551(0x133)][_0x49a551(0x22a)]=function(_0x4368a9){var _0x37c333=_0x49a551;return Object[_0x37c333(0x133)][_0x37c333(0x158)][_0x37c333(0x174)](_0x4368a9);},_0x15b081[_0x49a551(0x133)][_0x49a551(0x142)]=function(_0x5f422c){var _0x3e6d73=_0x49a551;return _0x5f422c===_0x3e6d73(0x155)||_0x5f422c==='string'||_0x5f422c==='number';},_0x15b081[_0x49a551(0x133)][_0x49a551(0x210)]=function(_0x23a3ba){var _0x5982b9=_0x49a551;return _0x23a3ba===_0x5982b9(0x170)||_0x23a3ba==='String'||_0x23a3ba==='Number';},_0x15b081[_0x49a551(0x133)][_0x49a551(0x148)]=function(_0x2e4477,_0x224c66,_0x4f757e,_0x23cb8c,_0x1070dc,_0x3eb169){var _0x4ca308=this;return function(_0x4fe007){var _0x15e488=_0x5b90,_0x46bde3=_0x1070dc[_0x15e488(0x19f)][_0x15e488(0x187)],_0xf9cdbd=_0x1070dc[_0x15e488(0x19f)]['index'],_0x52e9c9=_0x1070dc[_0x15e488(0x19f)][_0x15e488(0x209)];_0x1070dc[_0x15e488(0x19f)][_0x15e488(0x209)]=_0x46bde3,_0x1070dc['node'][_0x15e488(0x221)]=typeof _0x23cb8c==_0x15e488(0x154)?_0x23cb8c:_0x4fe007,_0x2e4477[_0x15e488(0x1b2)](_0x4ca308['_property'](_0x224c66,_0x4f757e,_0x23cb8c,_0x1070dc,_0x3eb169)),_0x1070dc[_0x15e488(0x19f)][_0x15e488(0x209)]=_0x52e9c9,_0x1070dc[_0x15e488(0x19f)]['index']=_0xf9cdbd;};},_0x15b081[_0x49a551(0x133)]['_addObjectProperty']=function(_0x4557c3,_0x173e4f,_0xf603b,_0x520581,_0x1e2277,_0x3e2e70,_0x1c07ba){var _0x16a0f0=_0x49a551,_0x96284f=this;return _0x173e4f[typeof _0x1e2277!=_0x16a0f0(0x157)?'_p_'+_0x1e2277['toString']():_0x1e2277]=!0x0,function(_0x494cee){var _0x35c828=_0x16a0f0,_0x8c4b0a=_0x3e2e70[_0x35c828(0x19f)][_0x35c828(0x187)],_0x480538=_0x3e2e70[_0x35c828(0x19f)][_0x35c828(0x221)],_0x46a7a3=_0x3e2e70[_0x35c828(0x19f)][_0x35c828(0x209)];_0x3e2e70['node']['parent']=_0x8c4b0a,_0x3e2e70['node'][_0x35c828(0x221)]=_0x494cee,_0x4557c3[_0x35c828(0x1b2)](_0x96284f[_0x35c828(0x173)](_0xf603b,_0x520581,_0x1e2277,_0x3e2e70,_0x1c07ba)),_0x3e2e70[_0x35c828(0x19f)][_0x35c828(0x209)]=_0x46a7a3,_0x3e2e70[_0x35c828(0x19f)]['index']=_0x480538;};},_0x15b081[_0x49a551(0x133)][_0x49a551(0x173)]=function(_0x1bb7b1,_0xe6ed4d,_0x1b546e,_0x35d040,_0x4d02e3){var _0xb32bb7=_0x49a551,_0x47f1dc=this;_0x4d02e3||(_0x4d02e3=function(_0x49e8bb,_0x43d2f5){return _0x49e8bb[_0x43d2f5];});var _0x864d00=_0x1b546e[_0xb32bb7(0x158)](),_0x37827b=_0x35d040[_0xb32bb7(0x1e8)]||{},_0x2c8745=_0x35d040[_0xb32bb7(0x197)],_0x4995bf=_0x35d040[_0xb32bb7(0x215)];try{var _0x21977b=this[_0xb32bb7(0x135)](_0x1bb7b1),_0x26340f=_0x864d00;_0x21977b&&_0x26340f[0x0]==='\\x27'&&(_0x26340f=_0x26340f[_0xb32bb7(0x208)](0x1,_0x26340f[_0xb32bb7(0x236)]-0x2));var _0xca5db8=_0x35d040[_0xb32bb7(0x1e8)]=_0x37827b[_0xb32bb7(0x140)+_0x26340f];_0xca5db8&&(_0x35d040[_0xb32bb7(0x197)]=_0x35d040[_0xb32bb7(0x197)]+0x1),_0x35d040[_0xb32bb7(0x215)]=!!_0xca5db8;var _0x5dd22=typeof _0x1b546e==_0xb32bb7(0x157),_0x42da0f={'name':_0x5dd22||_0x21977b?_0x864d00:this[_0xb32bb7(0x1dd)](_0x864d00)};if(_0x5dd22&&(_0x42da0f[_0xb32bb7(0x157)]=!0x0),!(_0xe6ed4d===_0xb32bb7(0x18e)||_0xe6ed4d===_0xb32bb7(0x194))){var _0x2f7079=this['_getOwnPropertyDescriptor'](_0x1bb7b1,_0x1b546e);if(_0x2f7079&&(_0x2f7079['set']&&(_0x42da0f[_0xb32bb7(0x137)]=!0x0),_0x2f7079[_0xb32bb7(0x1bb)]&&!_0xca5db8&&!_0x35d040['resolveGetters']))return _0x42da0f[_0xb32bb7(0x183)]=!0x0,this[_0xb32bb7(0x1ea)](_0x42da0f,_0x35d040),_0x42da0f;}var _0x2198b6;try{_0x2198b6=_0x4d02e3(_0x1bb7b1,_0x1b546e);}catch(_0x16d775){return _0x42da0f={'name':_0x864d00,'type':_0xb32bb7(0x21b),'error':_0x16d775['message']},this[_0xb32bb7(0x1ea)](_0x42da0f,_0x35d040),_0x42da0f;}var _0x207a9c=this[_0xb32bb7(0x1bc)](_0x2198b6),_0x4c31d6=this[_0xb32bb7(0x142)](_0x207a9c);if(_0x42da0f[_0xb32bb7(0x186)]=_0x207a9c,_0x4c31d6)this[_0xb32bb7(0x1ea)](_0x42da0f,_0x35d040,_0x2198b6,function(){var _0x36b535=_0xb32bb7;_0x42da0f[_0x36b535(0x196)]=_0x2198b6[_0x36b535(0x1a6)](),!_0xca5db8&&_0x47f1dc[_0x36b535(0x1d9)](_0x207a9c,_0x42da0f,_0x35d040,{});});else{var _0x3309db=_0x35d040[_0xb32bb7(0x1b3)]&&_0x35d040[_0xb32bb7(0x21a)]<_0x35d040['autoExpandMaxDepth']&&_0x35d040[_0xb32bb7(0x162)]['indexOf'](_0x2198b6)<0x0&&_0x207a9c!==_0xb32bb7(0x17e)&&_0x35d040['autoExpandPropertyCount']<_0x35d040[_0xb32bb7(0x199)];_0x3309db||_0x35d040['level']<_0x2c8745||_0xca5db8?this[_0xb32bb7(0x1a2)](_0x42da0f,_0x2198b6,_0x35d040,_0xca5db8||{}):this[_0xb32bb7(0x1ea)](_0x42da0f,_0x35d040,_0x2198b6,function(){var _0x1a873e=_0xb32bb7;_0x207a9c===_0x1a873e(0x1bd)||_0x207a9c===_0x1a873e(0x1b8)||(delete _0x42da0f[_0x1a873e(0x196)],_0x42da0f[_0x1a873e(0x164)]=!0x0);});}return _0x42da0f;}finally{_0x35d040[_0xb32bb7(0x1e8)]=_0x37827b,_0x35d040[_0xb32bb7(0x197)]=_0x2c8745,_0x35d040[_0xb32bb7(0x215)]=_0x4995bf;}},_0x15b081['prototype'][_0x49a551(0x1d9)]=function(_0x38bb07,_0x54c7dc,_0x2b1459,_0x58f61a){var _0x1c72f7=_0x49a551,_0x293d55=_0x58f61a[_0x1c72f7(0x1d7)]||_0x2b1459[_0x1c72f7(0x1d7)];if((_0x38bb07===_0x1c72f7(0x1c3)||_0x38bb07===_0x1c72f7(0x1fa))&&_0x54c7dc['value']){let _0x434f8a=_0x54c7dc[_0x1c72f7(0x196)]['length'];_0x2b1459[_0x1c72f7(0x1ad)]+=_0x434f8a,_0x2b1459[_0x1c72f7(0x1ad)]>_0x2b1459['totalStrLength']?(_0x54c7dc[_0x1c72f7(0x164)]='',delete _0x54c7dc[_0x1c72f7(0x196)]):_0x434f8a>_0x293d55&&(_0x54c7dc[_0x1c72f7(0x164)]=_0x54c7dc[_0x1c72f7(0x196)]['substr'](0x0,_0x293d55),delete _0x54c7dc[_0x1c72f7(0x196)]);}},_0x15b081[_0x49a551(0x133)][_0x49a551(0x135)]=function(_0x42eac3){var _0x18e3e1=_0x49a551;return!!(_0x42eac3&&_0x374f0e[_0x18e3e1(0x1a4)]&&this[_0x18e3e1(0x22a)](_0x42eac3)===_0x18e3e1(0x212)&&_0x42eac3[_0x18e3e1(0x17d)]);},_0x15b081[_0x49a551(0x133)][_0x49a551(0x1dd)]=function(_0x1ca17e){var _0x18909c=_0x49a551;if(_0x1ca17e[_0x18909c(0x1e5)](/^\\d+$/))return _0x1ca17e;var _0x2aad6f;try{_0x2aad6f=JSON[_0x18909c(0x16c)](''+_0x1ca17e);}catch{_0x2aad6f='\\x22'+this[_0x18909c(0x22a)](_0x1ca17e)+'\\x22';}return _0x2aad6f['match'](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0x2aad6f=_0x2aad6f[_0x18909c(0x208)](0x1,_0x2aad6f[_0x18909c(0x236)]-0x2):_0x2aad6f=_0x2aad6f[_0x18909c(0x14a)](/'/g,'\\x5c\\x27')[_0x18909c(0x14a)](/\\\\"/g,'\\x22')[_0x18909c(0x14a)](/(^"|"$)/g,'\\x27'),_0x2aad6f;},_0x15b081[_0x49a551(0x133)][_0x49a551(0x1ea)]=function(_0x78f56f,_0x495e7f,_0x57ea08,_0x1c948){var _0x35cbb4=_0x49a551;this[_0x35cbb4(0x1ec)](_0x78f56f,_0x495e7f),_0x1c948&&_0x1c948(),this['_additionalMetadata'](_0x57ea08,_0x78f56f),this['_treeNodePropertiesAfterFullValue'](_0x78f56f,_0x495e7f);},_0x15b081[_0x49a551(0x133)][_0x49a551(0x1ec)]=function(_0x5b43b7,_0x2a4a49){var _0x2232e8=_0x49a551;this[_0x2232e8(0x1c9)](_0x5b43b7,_0x2a4a49),this[_0x2232e8(0x181)](_0x5b43b7,_0x2a4a49),this[_0x2232e8(0x184)](_0x5b43b7,_0x2a4a49),this[_0x2232e8(0x1f8)](_0x5b43b7,_0x2a4a49);},_0x15b081[_0x49a551(0x133)][_0x49a551(0x1c9)]=function(_0x1ba88a,_0x130a31){},_0x15b081[_0x49a551(0x133)][_0x49a551(0x181)]=function(_0x3d607a,_0x1e0791){},_0x15b081['prototype'][_0x49a551(0x1d1)]=function(_0x376d95,_0x71e0f2){},_0x15b081[_0x49a551(0x133)][_0x49a551(0x1ac)]=function(_0xf34557){var _0x262605=_0x49a551;return _0xf34557===this[_0x262605(0x163)];},_0x15b081[_0x49a551(0x133)][_0x49a551(0x12e)]=function(_0x157772,_0x9f0287){var _0x27fea7=_0x49a551;this[_0x27fea7(0x1d1)](_0x157772,_0x9f0287),this[_0x27fea7(0x147)](_0x157772),_0x9f0287['sortProps']&&this[_0x27fea7(0x15c)](_0x157772),this[_0x27fea7(0x16f)](_0x157772,_0x9f0287),this[_0x27fea7(0x226)](_0x157772,_0x9f0287),this[_0x27fea7(0x1c1)](_0x157772);},_0x15b081['prototype'][_0x49a551(0x1b6)]=function(_0x1a393d,_0x54a72d){var _0x4482d0=_0x49a551;try{_0x1a393d&&typeof _0x1a393d[_0x4482d0(0x236)]==_0x4482d0(0x154)&&(_0x54a72d['length']=_0x1a393d[_0x4482d0(0x236)]);}catch{}if(_0x54a72d[_0x4482d0(0x186)]===_0x4482d0(0x154)||_0x54a72d[_0x4482d0(0x186)]==='Number'){if(isNaN(_0x54a72d[_0x4482d0(0x196)]))_0x54a72d[_0x4482d0(0x1c6)]=!0x0,delete _0x54a72d[_0x4482d0(0x196)];else switch(_0x54a72d[_0x4482d0(0x196)]){case Number[_0x4482d0(0x1d8)]:_0x54a72d[_0x4482d0(0x222)]=!0x0,delete _0x54a72d[_0x4482d0(0x196)];break;case Number[_0x4482d0(0x230)]:_0x54a72d['negativeInfinity']=!0x0,delete _0x54a72d[_0x4482d0(0x196)];break;case 0x0:this[_0x4482d0(0x224)](_0x54a72d[_0x4482d0(0x196)])&&(_0x54a72d[_0x4482d0(0x1d3)]=!0x0);break;}}else _0x54a72d['type']==='function'&&typeof _0x1a393d['name']=='string'&&_0x1a393d[_0x4482d0(0x19a)]&&_0x54a72d['name']&&_0x1a393d['name']!==_0x54a72d[_0x4482d0(0x19a)]&&(_0x54a72d[_0x4482d0(0x1b4)]=_0x1a393d[_0x4482d0(0x19a)]);},_0x15b081['prototype'][_0x49a551(0x224)]=function(_0x45508c){var _0x52ee60=_0x49a551;return 0x1/_0x45508c===Number[_0x52ee60(0x230)];},_0x15b081[_0x49a551(0x133)][_0x49a551(0x15c)]=function(_0x126f30){var _0x245f02=_0x49a551;!_0x126f30[_0x245f02(0x146)]||!_0x126f30[_0x245f02(0x146)][_0x245f02(0x236)]||_0x126f30[_0x245f02(0x186)]===_0x245f02(0x18e)||_0x126f30[_0x245f02(0x186)]==='Map'||_0x126f30[_0x245f02(0x186)]==='Set'||_0x126f30[_0x245f02(0x146)][_0x245f02(0x13d)](function(_0x1caa43,_0x16e974){var _0x5189d6=_0x245f02,_0x4ff592=_0x1caa43['name']['toLowerCase'](),_0x205e31=_0x16e974[_0x5189d6(0x19a)]['toLowerCase']();return _0x4ff592<_0x205e31?-0x1:_0x4ff592>_0x205e31?0x1:0x0;});},_0x15b081[_0x49a551(0x133)]['_addFunctionsNode']=function(_0x1b4d06,_0x1dc32d){var _0x5cdd3b=_0x49a551;if(!(_0x1dc32d[_0x5cdd3b(0x1eb)]||!_0x1b4d06[_0x5cdd3b(0x146)]||!_0x1b4d06[_0x5cdd3b(0x146)][_0x5cdd3b(0x236)])){for(var _0x276093=[],_0x94a328=[],_0x58b46e=0x0,_0x52993b=_0x1b4d06['props'][_0x5cdd3b(0x236)];_0x58b46e<_0x52993b;_0x58b46e++){var _0x5b3b30=_0x1b4d06[_0x5cdd3b(0x146)][_0x58b46e];_0x5b3b30[_0x5cdd3b(0x186)]==='function'?_0x276093['push'](_0x5b3b30):_0x94a328['push'](_0x5b3b30);}if(!(!_0x94a328['length']||_0x276093[_0x5cdd3b(0x236)]<=0x1)){_0x1b4d06[_0x5cdd3b(0x146)]=_0x94a328;var _0x379276={'functionsNode':!0x0,'props':_0x276093};this['_setNodeId'](_0x379276,_0x1dc32d),this[_0x5cdd3b(0x1d1)](_0x379276,_0x1dc32d),this[_0x5cdd3b(0x147)](_0x379276),this['_setNodePermissions'](_0x379276,_0x1dc32d),_0x379276['id']+='\\x20f',_0x1b4d06['props'][_0x5cdd3b(0x1fb)](_0x379276);}}},_0x15b081['prototype'][_0x49a551(0x226)]=function(_0x102c3b,_0x2674c7){},_0x15b081[_0x49a551(0x133)][_0x49a551(0x147)]=function(_0x43c591){},_0x15b081[_0x49a551(0x133)][_0x49a551(0x1af)]=function(_0x3b4b05){var _0x19a280=_0x49a551;return Array['isArray'](_0x3b4b05)||typeof _0x3b4b05==_0x19a280(0x1ed)&&this['_objectToString'](_0x3b4b05)===_0x19a280(0x17f);},_0x15b081[_0x49a551(0x133)]['_setNodePermissions']=function(_0x5bf4ee,_0x27233d){},_0x15b081[_0x49a551(0x133)][_0x49a551(0x1c1)]=function(_0x5c5409){var _0x16db37=_0x49a551;delete _0x5c5409[_0x16db37(0x13a)],delete _0x5c5409[_0x16db37(0x1a3)],delete _0x5c5409[_0x16db37(0x211)];},_0x15b081['prototype'][_0x49a551(0x184)]=function(_0x2a54bb,_0x4a791f){};let _0x22c535=new _0x15b081(),_0x3663d3={'props':_0x438bc6['defaultLimits']['props']||0x64,'elements':_0x438bc6[_0x49a551(0x203)][_0x49a551(0x13b)]||0x64,'strLength':_0x438bc6[_0x49a551(0x203)]['strLength']||0x400*0x32,'totalStrLength':_0x438bc6[_0x49a551(0x203)][_0x49a551(0x21f)]||0x400*0x32,'autoExpandLimit':_0x438bc6['defaultLimits']['autoExpandLimit']||0x1388,'autoExpandMaxDepth':_0x438bc6[_0x49a551(0x203)][_0x49a551(0x18b)]||0xa},_0x27904f={'props':_0x438bc6[_0x49a551(0x12f)][_0x49a551(0x146)]||0x5,'elements':_0x438bc6[_0x49a551(0x12f)]['elements']||0x5,'strLength':_0x438bc6[_0x49a551(0x12f)][_0x49a551(0x1d7)]||0x100,'totalStrLength':_0x438bc6[_0x49a551(0x12f)]['totalStrLength']||0x100*0x3,'autoExpandLimit':_0x438bc6[_0x49a551(0x12f)]['autoExpandLimit']||0x1e,'autoExpandMaxDepth':_0x438bc6[_0x49a551(0x12f)][_0x49a551(0x18b)]||0x2};if(_0x36b08c){let _0x263df4=_0x22c535[_0x49a551(0x1a2)]['bind'](_0x22c535);_0x22c535['serialize']=function(_0x4fa890,_0x36210c,_0x7ec2b,_0x48588c){return _0x263df4(_0x4fa890,_0x36b08c(_0x36210c),_0x7ec2b,_0x48588c);};}function _0xeb4889(_0x17108f,_0x404cc0,_0x2659a1,_0x469e90,_0x26b7ce,_0x5e4e9b){var _0x130cf7=_0x49a551;let _0x3b8d11,_0x57fe2b;try{_0x57fe2b=_0xb25ae6(),_0x3b8d11=_0x41baa1[_0x404cc0],!_0x3b8d11||_0x57fe2b-_0x3b8d11['ts']>_0x1217f4['perLogpoint'][_0x130cf7(0x21e)]&&_0x3b8d11[_0x130cf7(0x1d2)]&&_0x3b8d11[_0x130cf7(0x1b0)]/_0x3b8d11[_0x130cf7(0x1d2)]<_0x1217f4[_0x130cf7(0x136)][_0x130cf7(0x166)]?(_0x41baa1[_0x404cc0]=_0x3b8d11={'count':0x0,'time':0x0,'ts':_0x57fe2b},_0x41baa1[_0x130cf7(0x1cd)]={}):_0x57fe2b-_0x41baa1[_0x130cf7(0x1cd)]['ts']>_0x1217f4[_0x130cf7(0x178)][_0x130cf7(0x21e)]&&_0x41baa1[_0x130cf7(0x1cd)][_0x130cf7(0x1d2)]&&_0x41baa1[_0x130cf7(0x1cd)]['time']/_0x41baa1[_0x130cf7(0x1cd)][_0x130cf7(0x1d2)]<_0x1217f4[_0x130cf7(0x178)][_0x130cf7(0x166)]&&(_0x41baa1[_0x130cf7(0x1cd)]={});let _0x37c9c0=[],_0x58f629=_0x3b8d11[_0x130cf7(0x22b)]||_0x41baa1[_0x130cf7(0x1cd)]['reduceLimits']?_0x27904f:_0x3663d3,_0x28cd5e=_0x711db8=>{var _0x4b1aeb=_0x130cf7;let _0x15f5df={};return _0x15f5df[_0x4b1aeb(0x146)]=_0x711db8[_0x4b1aeb(0x146)],_0x15f5df[_0x4b1aeb(0x13b)]=_0x711db8[_0x4b1aeb(0x13b)],_0x15f5df[_0x4b1aeb(0x1d7)]=_0x711db8[_0x4b1aeb(0x1d7)],_0x15f5df[_0x4b1aeb(0x21f)]=_0x711db8['totalStrLength'],_0x15f5df['autoExpandLimit']=_0x711db8['autoExpandLimit'],_0x15f5df['autoExpandMaxDepth']=_0x711db8[_0x4b1aeb(0x18b)],_0x15f5df[_0x4b1aeb(0x15a)]=!0x1,_0x15f5df[_0x4b1aeb(0x1eb)]=!_0x568a19,_0x15f5df[_0x4b1aeb(0x197)]=0x1,_0x15f5df[_0x4b1aeb(0x21a)]=0x0,_0x15f5df[_0x4b1aeb(0x1b1)]=_0x4b1aeb(0x156),_0x15f5df['rootExpression']=_0x4b1aeb(0x131),_0x15f5df[_0x4b1aeb(0x1b3)]=!0x0,_0x15f5df[_0x4b1aeb(0x162)]=[],_0x15f5df[_0x4b1aeb(0x1f9)]=0x0,_0x15f5df[_0x4b1aeb(0x1c4)]=_0x438bc6[_0x4b1aeb(0x1c4)],_0x15f5df[_0x4b1aeb(0x1ad)]=0x0,_0x15f5df[_0x4b1aeb(0x19f)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x15f5df;};for(var _0x5ba279=0x0;_0x5ba279<_0x26b7ce[_0x130cf7(0x236)];_0x5ba279++)_0x37c9c0['push'](_0x22c535[_0x130cf7(0x1a2)]({'timeNode':_0x17108f===_0x130cf7(0x1b0)||void 0x0},_0x26b7ce[_0x5ba279],_0x28cd5e(_0x58f629),{}));if(_0x17108f===_0x130cf7(0x20b)||_0x17108f===_0x130cf7(0x144)){let _0x1e6a10=Error['stackTraceLimit'];try{Error['stackTraceLimit']=0x1/0x0,_0x37c9c0[_0x130cf7(0x1b2)](_0x22c535['serialize']({'stackNode':!0x0},new Error()['stack'],_0x28cd5e(_0x58f629),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x1e6a10;}}return{'method':_0x130cf7(0x175),'version':_0x5ca5a8,'args':[{'ts':_0x2659a1,'session':_0x469e90,'args':_0x37c9c0,'id':_0x404cc0,'context':_0x5e4e9b}]};}catch(_0xc0ffa2){return{'method':_0x130cf7(0x175),'version':_0x5ca5a8,'args':[{'ts':_0x2659a1,'session':_0x469e90,'args':[{'type':_0x130cf7(0x21b),'error':_0xc0ffa2&&_0xc0ffa2['message']}],'id':_0x404cc0,'context':_0x5e4e9b}]};}finally{try{if(_0x3b8d11&&_0x57fe2b){let _0x2341ee=_0xb25ae6();_0x3b8d11[_0x130cf7(0x1d2)]++,_0x3b8d11[_0x130cf7(0x1b0)]+=_0x217505(_0x57fe2b,_0x2341ee),_0x3b8d11['ts']=_0x2341ee,_0x41baa1['hits'][_0x130cf7(0x1d2)]++,_0x41baa1['hits']['time']+=_0x217505(_0x57fe2b,_0x2341ee),_0x41baa1[_0x130cf7(0x1cd)]['ts']=_0x2341ee,(_0x3b8d11[_0x130cf7(0x1d2)]>_0x1217f4[_0x130cf7(0x136)][_0x130cf7(0x216)]||_0x3b8d11['time']>_0x1217f4[_0x130cf7(0x136)]['reduceOnAccumulatedProcessingTimeMs'])&&(_0x3b8d11[_0x130cf7(0x22b)]=!0x0),(_0x41baa1['hits']['count']>_0x1217f4['global'][_0x130cf7(0x216)]||_0x41baa1[_0x130cf7(0x1cd)][_0x130cf7(0x1b0)]>_0x1217f4[_0x130cf7(0x178)][_0x130cf7(0x1fc)])&&(_0x41baa1['hits'][_0x130cf7(0x22b)]=!0x0);}}catch{}}}return _0xeb4889;}function G(_0xd1582){var _0x2b3ae1=_0x2a2d63;if(_0xd1582&&typeof _0xd1582==_0x2b3ae1(0x1ed)&&_0xd1582[_0x2b3ae1(0x1f0)])switch(_0xd1582[_0x2b3ae1(0x1f0)]['name']){case _0x2b3ae1(0x231):return _0xd1582['hasOwnProperty'](Symbol[_0x2b3ae1(0x152)])?Promise[_0x2b3ae1(0x1b9)]():_0xd1582;case _0x2b3ae1(0x176):return Promise[_0x2b3ae1(0x1b9)]();}return _0xd1582;}((_0x1432d7,_0x451893,_0x49c99a,_0x10ef6a,_0x51a0ed,_0x779080,_0x4bc60f,_0x4a518d,_0x20623d,_0x151423,_0x3654da,_0x422bd4)=>{var _0x3a7cf0=_0x2a2d63;if(_0x1432d7[_0x3a7cf0(0x1db)])return _0x1432d7[_0x3a7cf0(0x1db)];let _0x2bc241={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x1432d7,_0x4a518d,_0x51a0ed))return _0x1432d7[_0x3a7cf0(0x1db)]=_0x2bc241,_0x1432d7[_0x3a7cf0(0x1db)];let _0x4d198f=b(_0x1432d7),_0x442097=_0x4d198f[_0x3a7cf0(0x20f)],_0x4ca05e=_0x4d198f['timeStamp'],_0x29b4da=_0x4d198f[_0x3a7cf0(0x16a)],_0x327dbd={'hits':{},'ts':{}},_0x449e95=J(_0x1432d7,_0x20623d,_0x327dbd,_0x779080,_0x422bd4,_0x51a0ed===_0x3a7cf0(0x1ae)?G:void 0x0),_0x44b0f4=(_0x2d39be,_0x56b366,_0xb22a99,_0x5f3869,_0x22d8af,_0x1ee599)=>{var _0x2ad7e8=_0x3a7cf0;let _0x248cf9=_0x1432d7[_0x2ad7e8(0x1db)];try{return _0x1432d7['_console_ninja']=_0x2bc241,_0x449e95(_0x2d39be,_0x56b366,_0xb22a99,_0x5f3869,_0x22d8af,_0x1ee599);}finally{_0x1432d7[_0x2ad7e8(0x1db)]=_0x248cf9;}},_0x13c810=_0x2e3429=>{_0x327dbd['ts'][_0x2e3429]=_0x4ca05e();},_0x9b5a3f=(_0x1fe35e,_0x366517)=>{var _0x5d6569=_0x3a7cf0;let _0x4db2f5=_0x327dbd['ts'][_0x366517];if(delete _0x327dbd['ts'][_0x366517],_0x4db2f5){let _0x2a8d05=_0x442097(_0x4db2f5,_0x4ca05e());_0x290bce(_0x44b0f4(_0x5d6569(0x1b0),_0x1fe35e,_0x29b4da(),_0x3c959e,[_0x2a8d05],_0x366517));}},_0x1db0a8=_0x143d46=>{var _0x2dd2c1=_0x3a7cf0,_0x83f8ae;return _0x51a0ed===_0x2dd2c1(0x1ae)&&_0x1432d7[_0x2dd2c1(0x130)]&&((_0x83f8ae=_0x143d46==null?void 0x0:_0x143d46[_0x2dd2c1(0x161)])==null?void 0x0:_0x83f8ae['length'])&&(_0x143d46['args'][0x0][_0x2dd2c1(0x130)]=_0x1432d7[_0x2dd2c1(0x130)]),_0x143d46;};_0x1432d7['_console_ninja']={'consoleLog':(_0x349710,_0x1bace5)=>{var _0xb55ee3=_0x3a7cf0;_0x1432d7[_0xb55ee3(0x153)][_0xb55ee3(0x175)][_0xb55ee3(0x19a)]!==_0xb55ee3(0x206)&&_0x290bce(_0x44b0f4('log',_0x349710,_0x29b4da(),_0x3c959e,_0x1bace5));},'consoleTrace':(_0x56e756,_0x324594)=>{var _0x1c9428=_0x3a7cf0,_0x2a4b8e,_0x372d06;_0x1432d7[_0x1c9428(0x153)][_0x1c9428(0x175)]['name']!=='disabledTrace'&&((_0x372d06=(_0x2a4b8e=_0x1432d7[_0x1c9428(0x1ab)])==null?void 0x0:_0x2a4b8e[_0x1c9428(0x239)])!=null&&_0x372d06[_0x1c9428(0x19f)]&&(_0x1432d7[_0x1c9428(0x228)]=!0x0),_0x290bce(_0x1db0a8(_0x44b0f4(_0x1c9428(0x20b),_0x56e756,_0x29b4da(),_0x3c959e,_0x324594))));},'consoleError':(_0x2496f8,_0x25a9d5)=>{var _0x547055=_0x3a7cf0;_0x1432d7[_0x547055(0x228)]=!0x0,_0x290bce(_0x1db0a8(_0x44b0f4(_0x547055(0x144),_0x2496f8,_0x29b4da(),_0x3c959e,_0x25a9d5)));},'consoleTime':_0x2e7c8a=>{_0x13c810(_0x2e7c8a);},'consoleTimeEnd':(_0x7a1b31,_0x5f4891)=>{_0x9b5a3f(_0x5f4891,_0x7a1b31);},'autoLog':(_0x5841a4,_0x20cfeb)=>{_0x290bce(_0x44b0f4('log',_0x20cfeb,_0x29b4da(),_0x3c959e,[_0x5841a4]));},'autoLogMany':(_0x34dffa,_0x53820d)=>{var _0x42cfcd=_0x3a7cf0;_0x290bce(_0x44b0f4(_0x42cfcd(0x175),_0x34dffa,_0x29b4da(),_0x3c959e,_0x53820d));},'autoTrace':(_0x4ce698,_0x39d345)=>{_0x290bce(_0x1db0a8(_0x44b0f4('trace',_0x39d345,_0x29b4da(),_0x3c959e,[_0x4ce698])));},'autoTraceMany':(_0x32e97b,_0xe03153)=>{_0x290bce(_0x1db0a8(_0x44b0f4('trace',_0x32e97b,_0x29b4da(),_0x3c959e,_0xe03153)));},'autoTime':(_0x480665,_0x2acd6b,_0x12c93d)=>{_0x13c810(_0x12c93d);},'autoTimeEnd':(_0x25ff36,_0xb194bd,_0x100f65)=>{_0x9b5a3f(_0xb194bd,_0x100f65);},'coverage':_0x114349=>{var _0x4fd52b=_0x3a7cf0;_0x290bce({'method':_0x4fd52b(0x20e),'version':_0x779080,'args':[{'id':_0x114349}]});}};let _0x290bce=H(_0x1432d7,_0x451893,_0x49c99a,_0x10ef6a,_0x51a0ed,_0x151423,_0x3654da),_0x3c959e=_0x1432d7['_console_ninja_session'];return _0x1432d7[_0x3a7cf0(0x1db)];})(globalThis,'127.0.0.1','37043',_0x2a2d63(0x141),_0x2a2d63(0x223),_0x2a2d63(0x22e),'1786717360514',_0x2a2d63(0x149),'',_0x2a2d63(0x160),_0x2a2d63(0x14e),_0x2a2d63(0x22c));`)}catch{}}function Zl(n,...o){try{Xl().consoleError(n,o)}catch{}return o}function Bt(n){return n.buttons===0||n.detail===0}function zt(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var Do;function wr(){if(Do==null){let n=typeof document<"u"?document.head:null;Do=!!(n&&(n.createShadowRoot||n.attachShadow))}return Do}function ko(n){if(wr()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function Ht(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let o=n.shadowRoot.activeElement;if(o===n)break;n=o}return n}function _e(n){return n.composedPath?n.composedPath()[0]:n.target}var So;try{So=typeof Intl<"u"&&Intl.v8BreakIterator}catch{So=!1}var H=(()=>{class n{_platformId=s(Na);isBrowser=this._platformId?Ya(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||So)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ei;function Dr(){if(Ei==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ei=!0}))}finally{Ei=Ei||!1}return Ei}function ni(n){return Dr()?n:!!n.capture}function st(n,o=0){return kr(n)?Number(n):arguments.length===2?o:0}function kr(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Pe(n){return n instanceof D?n.nativeElement:n}var Sr=new d("cdk-input-modality-detector-options"),Mr={ignoreKeys:[18,17,224,91,16]},Er=650,Mo={passive:!0,capture:!0},Ir=(()=>{class n{_platform=s(H);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ma(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=_e(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Er||(this._modality.next(Bt(e)?"keyboard":"mouse"),this._mostRecentTarget=_e(e))};_onTouchstart=e=>{if(zt(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=_e(e)};constructor(){let e=s(R),t=s(z),i=s(Sr,{optional:!0});if(this._options=I(I({},Mr),i),this.modalityDetected=this._modality.pipe(Xi(1)),this.modalityChanged=this.modalityDetected.pipe(Jn()),this._platform.isBrowser){let a=s(Fe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[a.listen(t,"keydown",this._onKeydown,Mo),a.listen(t,"mousedown",this._onMousedown,Mo),a.listen(t,"touchstart",this._onTouchstart,Mo)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ii=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Ii||{}),Rr=new d("cdk-focus-monitor-default-options"),Cn=ni({passive:!0,capture:!0}),Ve=(()=>{class n{_ngZone=s(R);_platform=s(H);_inputModalityDetector=s(Ir);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(z);_stopInputModalityDetector=new _;constructor(){let e=s(Rr,{optional:!0});this._detectionMode=e?.detectionMode||Ii.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=_e(e);for(let i=t;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,t=!1){let i=Pe(e);if(!this._platform.isBrowser||i.nodeType!==1)return De();let a=ko(i)||this._document,r=this._elementInfo.get(i);if(r)return t&&(r.checkChildren=!0),r.subject;let l={checkChildren:t,subject:new _,rootNode:a};return this._elementInfo.set(i,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=Pe(e),i=this._elementInfo.get(t);i&&(i.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(i))}focusVia(e,t,i){let a=Pe(e),r=this._document.activeElement;a===r?this._getClosestElementsInfo(a).forEach(([l,c])=>this._originChanged(l,t,c)):(this._setOrigin(t),typeof a.focus=="function"&&a.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ii.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Ii.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Er:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,t){let i=this._elementInfo.get(t),a=_e(e);!i||!i.checkChildren&&t!==a||this._originChanged(t,this._getFocusOrigin(a),i)}_onBlur(e,t){let i=this._elementInfo.get(t);!i||i.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(i,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,i=this._rootNodeFocusListenerCount.get(t)||0;i||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Cn),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Cn)}),this._rootNodeFocusListenerCount.set(t,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(j(this._stopInputModalityDetector)).subscribe(a=>{this._setOrigin(a,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let i=this._rootNodeFocusListenerCount.get(t);i>1?this._rootNodeFocusListenerCount.set(t,i-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Cn),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Cn),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,i){this._setClasses(e,t),this._emitOrigin(i,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((i,a)=>{(a===e||i.checkChildren&&a.contains(e))&&t.push([a,i])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let a=e.labels;if(a){for(let r=0;r<a.length;r++)if(a[r].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wn=new WeakMap,re=(()=>{class n{_appRef;_injector=s(L);_environmentInjector=s(bt);load(e){let t=this._appRef=this._appRef||this._injector.get(Lt),i=wn.get(t);i||(i={loaders:new Set,refs:[]},wn.set(t,i),t.onDestroy(()=>{wn.get(t)?.refs.forEach(a=>a.destroy()),wn.delete(t)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(sn(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Dt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return n})(),Dn;function Jl(){if(Dn===void 0&&(Dn=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Dn=n.trustedTypes.createPolicy("angular#components",{createHTML:o=>o}))}return Dn}function jt(n){return Jl()?.createHTML(n)||n}function Ar(n,o,e){let t=e.sanitize(vt.HTML,o);n.innerHTML=jt(t||"")}function lt(n){return Array.isArray(n)?n:[n]}var Tr=new Set,Wt,oi=(()=>{class n{_platform=s(H);_nonce=s(Va,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):tc}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ec(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ec(n,o){if(!Tr.has(n))try{Wt||(Wt=document.createElement("style"),o&&Wt.setAttribute("nonce",o),Wt.setAttribute("type","text/css"),document.head.appendChild(Wt)),Wt.sheet&&(Wt.sheet.insertRule(`@media ${n} {body{ }}`,0),Tr.add(n))}catch(e){console.error(e)}}function tc(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Ri=(()=>{class n{_mediaMatcher=s(oi);_zone=s(R);_queries=new Map;_destroySubject=new _;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Or(lt(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=Or(lt(e)).map(r=>this._registerQuery(r).observable),a=Ra(i);return a=Aa(a.pipe(ke(1)),a.pipe(Xi(1),Ki(0))),a.pipe(de(r=>{let l={matches:!1,breakpoints:{}};return r.forEach(({matches:c,query:g})=>{l.matches=l.matches||c,l.breakpoints[g]=c}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),a={observable:new ot(r=>{let l=c=>this._zone.run(()=>r.next(c));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(ae(t),de(({matches:r})=>({query:e,matches:r})),j(this._destroySubject)),mql:t};return this._queries.set(e,a),a}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Or(n){return n.map(o=>o.split(",")).reduce((o,e)=>o.concat(e)).map(o=>o.trim())}var ic=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({providers:[ic]})}return n})();var Ro=(()=>{class n{_platform=s(H);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return oc(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=nc(hc(e));if(t&&(Fr(t)===-1||!this.isVisible(t)))return!1;let i=e.nodeName.toLowerCase(),a=Fr(e);return e.hasAttribute("contenteditable")?a!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!dc(e)?!1:i==="audio"?e.hasAttribute("controls")?a!==-1:!1:i==="video"?a===-1?!1:a!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return mc(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function nc(n){try{return n.frameElement}catch{return null}}function oc(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function ac(n){let o=n.nodeName.toLowerCase();return o==="input"||o==="select"||o==="button"||o==="textarea"}function rc(n){return lc(n)&&n.type=="hidden"}function sc(n){return cc(n)&&n.hasAttribute("href")}function lc(n){return n.nodeName.toLowerCase()=="input"}function cc(n){return n.nodeName.toLowerCase()=="a"}function Nr(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let o=n.getAttribute("tabindex");return!!(o&&!isNaN(parseInt(o,10)))}function Fr(n){if(!Nr(n))return null;let o=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(o)?-1:o}function dc(n){let o=n.nodeName.toLowerCase(),e=o==="input"&&n.type;return e==="text"||e==="password"||o==="select"||o==="textarea"}function mc(n){return rc(n)?!1:ac(n)||sc(n)||n.hasAttribute("contenteditable")||Nr(n)}function hc(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Io=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(o){this._enabled=o,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_enabled=!0;constructor(o,e,t,i,a=!1,r){this._element=o,this._checker=e,this._ngZone=t,this._document=i,this._injector=r,a||this.attachAnchors()}destroy(){let o=this._startAnchor,e=this._endAnchor;o&&(o.removeEventListener("focus",this.startAnchorListener),o.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(o)))})}focusFirstTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(o)))})}focusLastTabbableElementWhenReady(o){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(o)))})}_getRegionBoundary(o){let e=this._element.querySelectorAll(`[cdk-focus-region-${o}], [cdkFocusRegion${o}], [cdk-focus-${o}]`);return o=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(o){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(o),!!t}return e.focus(o),!0}return this.focusFirstTabbableElement(o)}focusFirstTabbableElement(o){let e=this._getRegionBoundary("start");return e&&e.focus(o),!!e}focusLastTabbableElement(o){let e=this._getRegionBoundary("end");return e&&e.focus(o),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let e=o.children;for(let t=0;t<e.length;t++){let i=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(i)return i}return null}_getLastTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let e=o.children;for(let t=e.length-1;t>=0;t--){let i=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(i)return i}return null}_createAnchor(){let o=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,o),o.classList.add("cdk-visually-hidden"),o.classList.add("cdk-focus-trap-anchor"),o.setAttribute("aria-hidden","true"),o}_toggleAnchorTabIndex(o,e){o?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(o){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_executeOnStable(o){this._injector?be(o,{injector:this._injector}):setTimeout(o)}},Ao=(()=>{class n{_checker=s(Ro);_ngZone=s(R);_document=s(z);_injector=s(L);constructor(){s(re).load(Dt)}create(e,t=!1){return new Io(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Vr=new d("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Br=new d("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),uc=0,To=(()=>{class n{_ngZone=s(R);_defaultOptions=s(Br,{optional:!0});_liveElement;_document=s(z);_sanitizer=s(cn);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Vr,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let i=this._defaultOptions,a,r;return t.length===1&&typeof t[0]=="number"?r=t[0]:[a,r]=t,this.clear(),clearTimeout(this._previousTimeout),a||(a=i&&i.politeness?i.politeness:"polite"),r==null&&i&&(r=i.duration),this._liveElement.setAttribute("aria-live",a),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Ar(this._liveElement,e,this._sanitizer),typeof r=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let a=0;a<t.length;a++)t[a].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${uc++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let a=t[i],r=a.getAttribute("aria-owns");r?r.indexOf(e)===-1&&a.setAttribute("aria-owns",r+" "+e):a.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var kt=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(kt||{}),Pr="cdk-high-contrast-black-on-white",Lr="cdk-high-contrast-white-on-black",Eo="cdk-high-contrast-active",zr=(()=>{class n{_platform=s(H);_hasCheckedHighContrastMode=!1;_document=s(z);_breakpointSubscription;constructor(){this._breakpointSubscription=s(Ri).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return kt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,i=t&&t.getComputedStyle?t.getComputedStyle(e):null,a=(i&&i.backgroundColor||"").replace(/ /g,"");switch(e.remove(),a){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return kt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return kt.BLACK_ON_WHITE}return kt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Eo,Pr,Lr),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===kt.BLACK_ON_WHITE?e.add(Eo,Pr):t===kt.WHITE_ON_BLACK&&e.add(Eo,Lr)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ai=(()=>{class n{constructor(){s(zr)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[kn]})}return n})();var pc=200,Sn=class{_letterKeyStream=new _;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new _;selectedItem=this._selectedItem;constructor(o,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:pc;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(o),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let e=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(gt(e=>this._pressedLetters.push(e)),Ki(o),ie(()=>this._pressedLetters.length>0),de(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let i=(this._selectedItemIndex+t)%this._items.length,a=this._items[i];if(!this._skipPredicateFn?.(a)&&a.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(a);break}}this._pressedLetters=[]})}};function K(n,...o){return o.length?o.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var ai=class{_items;_activeItemIndex=$(-1);_activeItem=$(null);_wrap=!1;_typeaheadSubscription=oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,e){this._items=o,o instanceof Ft?this._itemChangesSubscription=o.changes.subscribe(t=>this._itemsChanged(t.toArray())):Pt(o)&&(this._effectRef=Ot(()=>this._itemsChanged(o()),{injector:e}))}tabOut=new _;change=new _;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Sn(e,{debounceInterval:typeof o=="number"?o:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,e=10){return this._pageUpAndDown={enabled:o,delta:e},this}setActiveItem(o){let e=this._activeItem();this.updateActiveItem(o),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(o){let e=o.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(a=>!o[a]||this._allowedModifierKeys.indexOf(a)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let a=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(a>0?a:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let a=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(a<r?a:r-1,-1);break}else return;default:(i||K(o,"shiftKey"))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let e=this._getItemsArray(),t=typeof o=="number"?o:e.indexOf(o),i=e[t];this._activeItem.set(i??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let i=(this._activeItemIndex()+o*t+e.length)%e.length,a=e[i];if(!this._skipPredicateFn(a)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,e){let t=this._getItemsArray();if(t[o]){for(;this._skipPredicateFn(t[o]);)if(o+=e,!t[o])return;this.setActiveItem(o)}}_getItemsArray(){return Pt(this._items)?this._items():this._items instanceof Ft?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let e=this._activeItem();if(e){let t=o.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Ut=class extends ai{setActiveItem(o){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(o),this.activeItem&&this.activeItem.setActiveStyles()}};var Gt=class extends ai{_origin="program";setFocusOrigin(o){return this._origin=o,this}setActiveItem(o){super.setActiveItem(o),this.activeItem&&this.activeItem.focus(this._origin)}};var Oo={},Q=class n{_appId=s(tn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,e=!1){return this._appId!=="ng"&&(o+=this._appId),Oo.hasOwnProperty(o)||(Oo[o]=0),`${o}${e?n._infix+"-":""}${Oo[o]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})};var Wr=" ";function ri(n,o,e){let t=In(n,o);e=e.trim(),!t.some(i=>i.trim()===e)&&(t.push(e),n.setAttribute(o,t.join(Wr)))}function St(n,o,e){let t=In(n,o);e=e.trim();let i=t.filter(a=>a!==e);i.length?n.setAttribute(o,i.join(Wr)):n.removeAttribute(o)}function In(n,o){return n.getAttribute(o)?.match(/\S+/g)??[]}var Ur="cdk-describedby-message",En="cdk-describedby-host",Po=0,Gr=(()=>{class n{_platform=s(H);_document=s(z);_messageRegistry=new Map;_messagesContainer=null;_id=`${Po++}`;constructor(){s(re).load(Dt),this._id=s(tn)+"-"+Po++}describe(e,t,i){if(!this._canBeDescribed(e,t))return;let a=Fo(t,i);typeof t!="string"?(jr(t,this._id),this._messageRegistry.set(a,{messageElement:t,referenceCount:0})):this._messageRegistry.has(a)||this._createMessageElement(t,i),this._isElementDescribedByMessage(e,a)||this._addMessageReference(e,a)}removeDescription(e,t,i){if(!t||!this._isElementNode(e))return;let a=Fo(t,i);if(this._isElementDescribedByMessage(e,a)&&this._removeMessageReference(e,a),typeof t=="string"){let r=this._messageRegistry.get(a);r&&r.referenceCount===0&&this._deleteMessageElement(a)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${En}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(En);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let i=this._document.createElement("div");jr(i,this._id),i.textContent=e,t&&i.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(Fo(e,t),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let a=0;a<t.length;a++)t[a].remove();let i=this._document.createElement("div");i.style.visibility="hidden",i.classList.add(e),i.classList.add("cdk-visually-hidden"),this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let t=In(e,"aria-describedby").filter(i=>i.indexOf(Ur)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let i=this._messageRegistry.get(t);ri(e,"aria-describedby",i.messageElement.id),e.setAttribute(En,this._id),i.referenceCount++}_removeMessageReference(e,t){let i=this._messageRegistry.get(t);i.referenceCount--,St(e,"aria-describedby",i.messageElement.id),e.removeAttribute(En)}_isElementDescribedByMessage(e,t){let i=In(e,"aria-describedby"),a=this._messageRegistry.get(t),r=a&&a.messageElement.id;return!!r&&i.indexOf(r)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let i=t==null?"":`${t}`.trim(),a=e.getAttribute("aria-label");return i?!a||a.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fo(n,o){return typeof n=="string"?`${o||""}/${n}`:n}function jr(n,o){n.id||(n.id=`${Ur}-${o}-${Po++}`)}var fc=new d("cdk-dir-doc",{providedIn:"root",factory:()=>s(z)}),_c=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qr(n){let o=n?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?_c.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var ue=(()=>{class n{get value(){return this.valueSignal()}valueSignal=$("ltr");change=new T;constructor(){let e=s(fc,{optional:!0});if(e){let t=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(qr(t||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var P=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({})}return n})();function se(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Be(n){return n!=null&&`${n}`!="false"}var qt;function Yr(){if(qt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return qt=!1,qt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)qt=!0;else{let n=Element.prototype.scrollTo;n?qt=!/\{\s*\[native code\]\s*\}/.test(n.toString()):qt=!1}}return qt}function Lo(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var si,Qr=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function No(){if(si)return si;if(typeof document!="object"||!document)return si=new Set(Qr),si;let n=document.createElement("input");return si=new Set(Qr.filter(o=>(n.setAttribute("type",o),n.type===o))),si}var Vo=class{_box;_destroyed=new _;_resizeSubject=new _;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new ot(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),t.unsubscribe(),this._elementObservables.delete(o)}}).pipe(ie(e=>e.some(t=>t.target===o)),to({bufferSize:1,refCount:!0}),j(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},$r=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(R);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Vo(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Kr={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var gc=new d("MATERIAL_ANIMATIONS"),Xr=null;function Bo(){return s(gc,{optional:!0})?.animationsDisabled||s(nn,{optional:!0})==="NoopAnimations"?"di-disabled":(Xr??=s(oi).matchMedia("(prefers-reduced-motion)").matches,Xr?"reduced-motion":"enabled")}function X(){return Bo()!=="enabled"}var bc=["notch"],vc=["matFormFieldNotchedOutline",""],xc=["*"],Zr=["iconPrefixContainer"],Jr=["textPrefixContainer"],es=["iconSuffixContainer"],ts=["textSuffixContainer"],yc=["textField"],Cc=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],wc=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Dc(n,o){n&1&&q(0,"span",21)}function kc(n,o){if(n&1&&(h(0,"label",20),A(1,1),O(2,Dc,1,0,"span",21),x()),n&2){let e=V(2);G("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),y("for",e._control.disableAutomaticLabeling?null:e._control.id),m(2),F(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Sc(n,o){if(n&1&&O(0,kc,3,5,"label",20),n&2){let e=V();F(e._hasFloatingLabel()?0:-1)}}function Mc(n,o){n&1&&q(0,"div",7)}function Ec(n,o){}function Ic(n,o){if(n&1&&Se(0,Ec,0,0,"ng-template",13),n&2){V(2);let e=Je(1);G("ngTemplateOutlet",e)}}function Rc(n,o){if(n&1&&(h(0,"div",9),O(1,Ic,1,1,null,13),x()),n&2){let e=V();G("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),m(),F(e._forceDisplayInfixLabel()?-1:1)}}function Ac(n,o){n&1&&(h(0,"div",10,2),A(2,2),x())}function Tc(n,o){n&1&&(h(0,"div",11,3),A(2,3),x())}function Oc(n,o){}function Fc(n,o){if(n&1&&Se(0,Oc,0,0,"ng-template",13),n&2){V();let e=Je(1);G("ngTemplateOutlet",e)}}function Pc(n,o){n&1&&(h(0,"div",14,4),A(2,4),x())}function Lc(n,o){n&1&&(h(0,"div",15,5),A(2,5),x())}function Nc(n,o){n&1&&q(0,"div",16)}function Vc(n,o){n&1&&(h(0,"div",18),A(1,6),x())}function Bc(n,o){if(n&1&&(h(0,"mat-hint",22),Ce(1),x()),n&2){let e=V(2);G("id",e._hintLabelId),m(),et(e.hintLabel)}}function zc(n,o){if(n&1&&(h(0,"div",19),O(1,Bc,2,2,"mat-hint",22),A(2,7),q(3,"div",23),A(4,8),x()),n&2){let e=V();m(),F(e.hintLabel?1:-1)}}var zo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-label"]]})}return n})(),ls=new d("MatError"),Hc=(()=>{class n{id=s(Q).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,i){t&2&&xe("id",i.id)},inputs:{id:"id"},features:[U([{provide:ls,useExisting:n}])]})}return n})(),Ho=(()=>{class n{align="start";id=s(Q).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(xe("id",i.id),y("align",null),M("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),jc=new d("MatPrefix");var cs=new d("MatSuffix"),Wc=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[U([{provide:cs,useExisting:n}])]})}return n})(),ds=new d("FloatingLabelParent"),is=(()=>{class n{_elementRef=s(D);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s($r);_ngZone=s(R);_parent=s(ds);_resizeSubscription=new oe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Uc(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&M("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function Uc(n){let o=n;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var ns="mdc-line-ripple--active",Rn="mdc-line-ripple--deactivating",os=(()=>{class n{_elementRef=s(D);_cleanupTransitionEnd;constructor(){let e=s(R),t=s(Z);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Rn),e.add(ns)}deactivate(){this._elementRef.nativeElement.classList.add(Rn)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(Rn);e.propertyName==="opacity"&&i&&t.remove(ns,Rn)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),as=(()=>{class n{_elementRef=s(D);_ngZone=s(R);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,i){if(t&1&&J(bc,5),t&2){let a;C(a=w())&&(i._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,i){t&2&&M("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:vc,ngContentSelectors:xc,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,i){t&1&&(Y(),Ne(0,"div",1),fe(1,"div",2,0),A(3),ve(),Ne(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Yt=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n})}return n})();var dt=new d("MatFormField"),Gc=new d("MAT_FORM_FIELD_DEFAULT_OPTIONS"),rs="fill",qc="auto",ss="fixed",Yc="translateY(-50%)",An=(()=>{class n{_elementRef=s(D);_changeDetectorRef=s(ee);_platform=s(H);_idGenerator=s(Q);_ngZone=s(R);_defaults=s(Gc,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=xi("iconPrefixContainer");_textPrefixContainerSignal=xi("textPrefixContainer");_iconSuffixContainerSignal=xi("iconSuffixContainer");_textSuffixContainerSignal=xi("textSuffixContainer");_prefixSuffixContainers=it(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ua(zo);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Be(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||qc}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||rs;this._appearanceSignal.set(t)}_appearanceSignal=$(rs);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ss}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ss}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new _;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=X();constructor(){let e=this._defaults,t=s(ue);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ot(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=it(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(ae([void 0,void 0]),de(()=>[t.errorState,t.userAriaDescribedBy]),eo(),ie(([[a,r],[l,c]])=>a!==l||r!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(j(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),me(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ga({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=it(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,r=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,i;if(t){let a=this._describedByIds||e;i=e.concat(t.filter(r=>r&&!a.includes(r)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=i?.getBoundingClientRect().width??0,g=a?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",B=`${r+l}px`,le=`calc(${u} * (${B} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,pe=`var(--mat-mdc-form-field-label-transform, ${Yc} translateX(${le}))`,ce=r+l+c+g;return[pe,ce]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,i,a){if(t&1&&(Ha(a,i._labelChild,zo,5),Me(a,Yt,5)(a,jc,5)(a,cs,5)(a,ls,5)(a,Ho,5)),t&2){so();let r;C(r=w())&&(i._formFieldControl=r.first),C(r=w())&&(i._prefixChildren=r),C(r=w())&&(i._suffixChildren=r),C(r=w())&&(i._errorChildren=r),C(r=w())&&(i._hintChildren=r)}},viewQuery:function(t,i){if(t&1&&(ja(i._iconPrefixContainerSignal,Zr,5)(i._textPrefixContainerSignal,Jr,5)(i._iconSuffixContainerSignal,es,5)(i._textSuffixContainerSignal,ts,5),J(yc,5)(Zr,5)(Jr,5)(es,5)(ts,5)(is,5)(as,5)(os,5)),t&2){so(4);let a;C(a=w())&&(i._textField=a.first),C(a=w())&&(i._iconPrefixContainer=a.first),C(a=w())&&(i._textPrefixContainer=a.first),C(a=w())&&(i._iconSuffixContainer=a.first),C(a=w())&&(i._textSuffixContainer=a.first),C(a=w())&&(i._floatingLabel=a.first),C(a=w())&&(i._notchedOutline=a.first),C(a=w())&&(i._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,i){t&2&&M("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[U([{provide:dt,useExisting:n},{provide:ds,useExisting:n}])],ngContentSelectors:wc,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,i){if(t&1&&(Y(Cc),Se(0,Sc,1,1,"ng-template",null,0,an),h(2,"div",6,1),N("click",function(r){return i._control.onContainerClick(r)}),O(4,Mc,1,0,"div",7),h(5,"div",8),O(6,Rc,2,2,"div",9),O(7,Ac,3,0,"div",10),O(8,Tc,3,0,"div",11),h(9,"div",12),O(10,Fc,1,1,null,13),A(11),x(),O(12,Pc,3,0,"div",14),O(13,Lc,3,0,"div",15),x(),O(14,Nc,1,0,"div",16),x(),h(15,"div",17),O(16,Vc,2,0,"div",18)(17,zc,5,1,"div",19),x()),t&2){let a;m(2),M("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),m(2),F(!i._hasOutline()&&!i._control.disabled?4:-1),m(2),F(i._hasOutline()?6:-1),m(),F(i._hasIconPrefix?7:-1),m(),F(i._hasTextPrefix?8:-1),m(2),F(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),m(2),F(i._hasTextSuffix?12:-1),m(),F(i._hasIconSuffix?13:-1),m(),F(i._hasOutline()?-1:14),m(),M("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let r=i._getSubscriptMessageType();m(),F((a=r)==="error"?16:a==="hint"?17:-1)}},dependencies:[is,as,ln,os,Ho],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var ze=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ze||{}),jo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ze.HIDDEN;constructor(o,e,t,i=!1){this._renderer=o,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},ms=ni({passive:!0,capture:!0}),Wo=class{_events=new Map;addHandler(o,e,t,i){let a=this._events.get(e);if(a){let r=a.get(t);r?r.add(i):a.set(t,new Set([i]))}else this._events.set(e,new Map([[t,new Set([i])]])),o.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ms)})}removeHandler(o,e,t){let i=this._events.get(o);if(!i)return;let a=i.get(e);a&&(a.delete(t),a.size===0&&i.delete(e),i.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,ms)))}_delegateEventHandler=o=>{let e=_e(o);e&&this._events.get(o.type)?.forEach((t,i)=>{(i===e||i.contains(e))&&t.forEach(a=>a.handleEvent(o))})}},Fi={enterDuration:225,exitDuration:150},Qc=800,hs=ni({passive:!0,capture:!0}),us=["mousedown","touchstart"],ps=["mouseup","mouseleave","touchend","touchcancel"],$c=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return n})(),Pi=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Wo;constructor(o,e,t,i,a){this._target=o,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=Pe(t)),a&&a.get(re).load($c)}fadeInRipple(o,e,t={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=I(I({},Fi),t.animation);t.centered&&(o=i.left+i.width/2,e=i.top+i.height/2);let r=t.radius||Kc(o,e,i),l=o-i.left,c=e-i.top,g=a.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${l-r}px`,u.style.top=`${c-r}px`,u.style.height=`${r*2}px`,u.style.width=`${r*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${g}ms`,this._containerElement.appendChild(u);let B=window.getComputedStyle(u),te=B.transitionProperty,le=B.transitionDuration,pe=te==="none"||le==="0s"||le==="0s, 0s"||i.width===0&&i.height===0,ce=new jo(this,u,t,pe);u.style.transform="scale3d(1, 1, 1)",ce.state=ze.FADING_IN,t.persistent||(this._mostRecentTransientRipple=ce);let Tt=null;return!pe&&(g||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ka=()=>{Tt&&(Tt.fallbackTimer=null),clearTimeout(Sa),this._finishRippleTransition(ce)},Xn=()=>this._destroyRipple(ce),Sa=setTimeout(Xn,g+100);u.addEventListener("transitionend",ka),u.addEventListener("transitioncancel",Xn),Tt={onTransitionEnd:ka,onTransitionCancel:Xn,fallbackTimer:Sa}}),this._activeRipples.set(ce,Tt),(pe||!g)&&this._finishRippleTransition(ce),ce}fadeOutRipple(o){if(o.state===ze.FADING_OUT||o.state===ze.HIDDEN)return;let e=o.element,t=I(I({},Fi),o.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",o.state=ze.FADING_OUT,(o._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let e=Pe(o);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,us.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ps.forEach(e=>{this._triggerElement.addEventListener(e,this,hs)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===ze.FADING_IN?this._startFadeOutTransition(o):o.state===ze.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let e=o===this._mostRecentTransientRipple,{persistent:t}=o.config;o.state=ze.VISIBLE,!t&&(!e||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let e=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=ze.HIDDEN,e!==null&&(o.element.removeEventListener("transitionend",e.onTransitionEnd),o.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),o.element.remove()}_onMousedown(o){let e=Bt(o),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Qc;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!zt(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=o.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let e=o.state===ze.VISIBLE||o.config.terminateOnPointerUp&&o.state===ze.FADING_IN;!o.config.persistent&&e&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(us.forEach(e=>n._eventManager.removeHandler(e,o,this)),this._pointerUpEventsRegistered&&(ps.forEach(e=>o.removeEventListener(e,this,hs)),this._pointerUpEventsRegistered=!1))}};function Kc(n,o,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),i=Math.max(Math.abs(o-e.top),Math.abs(o-e.bottom));return Math.sqrt(t*t+i*i)}var Li=new d("mat-ripple-global-options"),Tn=(()=>{class n{_elementRef=s(D);_animationsDisabled=X();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(R),t=s(H),i=s(Li,{optional:!0}),a=s(L);this._globalOptions=i||{},this._rippleRenderer=new Pi(this,e,this._elementRef,t,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:I(I(I({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,I(I({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,I(I({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,i){t&2&&M("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var fs=(()=>{class n{_animationsDisabled=X();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&M("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return n})();var mt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return n})();var Xc=["text"],Zc=[[["mat-icon"]],"*"],Jc=["mat-icon","*"];function ed(n,o){if(n&1&&q(0,"mat-pseudo-checkbox",1),n&2){let e=V();G("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function td(n,o){if(n&1&&q(0,"mat-pseudo-checkbox",3),n&2){let e=V();G("disabled",e.disabled)}}function id(n,o){if(n&1&&(h(0,"span",4),Ce(1),x()),n&2){let e=V();m(),xt("(",e.group.label,")")}}var Vi=new d("MAT_OPTION_PARENT_COMPONENT"),Bi=new d("MatOptgroup");var Ni=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}},Mt=(()=>{class n{_element=s(D);_changeDetectorRef=s(ee);_parent=s(Vi,{optional:!0});group=s(Bi,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(Q).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=$(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new T;_text;_stateChanges=new _;constructor(){let e=s(re);e.load(mt),e.load(Dt),this._signalDisableRipple=!!this._parent&&Pt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!K(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ni(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&J(Xc,7),t&2){let a;C(a=w())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&N("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(xe("id",i.id),y("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),M("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",b]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Jc,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(Y(Zc),O(0,ed,1,2,"mat-pseudo-checkbox",1),A(1),h(2,"span",2,0),A(4,1),x(),O(5,td,1,1,"mat-pseudo-checkbox",3),O(6,id,2,1,"span",4),q(7,"div",5)),t&2&&(F(i.multiple?0:-1),m(5),F(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),m(),F(i.group&&i.group._inert?6:-1),m(),G("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[fs,Tn],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return n})();function On(n,o,e){if(e.length){let t=o.toArray(),i=e.toArray(),a=0;for(let r=0;r<n+1;r++)t[r].group&&t[r].group===i[a]&&a++;return a}return 0}function Fn(n,o,e,t){return n<e?n:n+o>e+t?Math.max(0,n-t+o):e}var nt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[kn,An,P]})}return n})();var zi=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new _;constructor(o=!1,e,t=!0,i){this._multiple=o,this._emitChanges=t,this.compareWith=i,e&&e.length&&(o?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(a=>this._getConcreteValue(a)));o.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var nd=20,Qt=(()=>{class n{_ngZone=s(R);_platform=s(H);_renderer=s(Fe).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new _;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=nd){return this._platform.isBrowser?new ot(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(Zn(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):De()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(ie(a=>!a||i.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,a)=>{this._scrollableContainsElement(a,e)&&t.push(a)}),t}_scrollableContainsElement(e,t){let i=Pe(t),a=e.getElementRef().nativeElement;do if(i==a)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var od=20,He=(()=>{class n{_platform=s(H);_listeners;_viewportSize=null;_change=new _;_document=s(z);constructor(){let e=s(R),t=s(Fe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=a=>this._change.next(a);this._listeners=[t.listen("window","resize",i),t.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,a=i.getBoundingClientRect(),r=-a.top||e.body?.scrollTop||t.scrollY||i.scrollTop||0,l=-a.left||e.body?.scrollLeft||t.scrollX||i.scrollLeft||0;return{top:r,left:l}}change(e=od){return e>0?this._change.pipe(Zn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ye=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({})}return n})(),Hi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[P,Ye,P,Ye]})}return n})();var ji=class{_attachedHost=null;attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;o!=null&&(this._attachedHost=null,o.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o}},Et=class extends ji{component;viewContainerRef;injector;projectableNodes;bindings;constructor(o,e,t,i,a){super(),this.component=o,this.viewContainerRef=e,this.injector=t,this.projectableNodes=i,this.bindings=a||null}},je=class extends ji{templateRef;viewContainerRef;context;injector;constructor(o,e,t,i){super(),this.templateRef=o,this.viewContainerRef=e,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(o,e=this.context){return this.context=e,super.attach(o)}detach(){return this.context=void 0,super.detach()}},Uo=class extends ji{element;constructor(o){super(),this.element=o instanceof D?o.nativeElement:o}},li=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(o){if(o instanceof Et)return this._attachedPortal=o,this.attachComponentPortal(o);if(o instanceof je)return this._attachedPortal=o,this.attachTemplatePortal(o);if(this.attachDomPortal&&o instanceof Uo)return this._attachedPortal=o,this.attachDomPortal(o)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(o){this._disposeFn=o}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Wi=class extends li{outletElement;_appRef;_defaultInjector;constructor(o,e,t){super(),this.outletElement=o,this._appRef=e,this._defaultInjector=t}attachComponentPortal(o){let e;if(o.viewContainerRef){let t=o.injector||o.viewContainerRef.injector,i=t.get(io,null,{optional:!0})||void 0;e=o.viewContainerRef.createComponent(o.component,{index:o.viewContainerRef.length,injector:t,ngModuleRef:i,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,i=o.injector||this._defaultInjector||L.NULL,a=i.get(bt,t.injector);e=sn(o.component,{elementInjector:i,environmentInjector:a,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=o,e}attachTemplatePortal(o){let e=o.viewContainerRef,t=e.createEmbeddedView(o.templateRef,o.context,{injector:o.injector});return t.rootNodes.forEach(i=>this.outletElement.appendChild(i)),t.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(t);i!==-1&&e.remove(i)}),this._attachedPortal=o,t}attachDomPortal=o=>{let e=o.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=o,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(o){return o.hostView.rootNodes[0]}};var ci=(()=>{class n extends li{_moduleRef=s(io,{optional:!0});_document=s(z);_viewContainerRef=s(Ue);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new T;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,i=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let i=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(i,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(t,i)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[W]})}return n})(),ut=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({})}return n})();var _s=Yr();function hi(n){return new Pn(n.get(He),n.get(z))}var Pn=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(o,e){this._viewportRuler=o,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let o=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=o.style.left||"",this._previousHTMLStyles.top=o.style.top||"",o.style.left=se(-this._previousScrollPosition.left),o.style.top=se(-this._previousScrollPosition.top),o.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let o=this._document.documentElement,e=this._document.body,t=o.style,i=e.style,a=t.scrollBehavior||"",r=i.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,o.classList.remove("cdk-global-scrollblock"),_s&&(t.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),_s&&(t.scrollBehavior=a,i.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function ws(n,o){return new Ln(n.get(Qt),n.get(R),n.get(He),o)}var Ln=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(o,e,t,i){this._scrollDispatcher=o,this._ngZone=e,this._viewportRuler=t,this._config=i}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(this._scrollSubscription)return;let o=this._scrollDispatcher.scrolled(0).pipe(ie(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=o.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=o.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ui=class{enable(){}disable(){}attach(){}};function Go(n,o){return o.some(e=>{let t=n.bottom<e.top,i=n.top>e.bottom,a=n.right<e.left,r=n.left>e.right;return t||i||a||r})}function gs(n,o){return o.some(e=>{let t=n.top<e.top,i=n.bottom>e.bottom,a=n.left<e.left,r=n.right>e.right;return t||i||a||r})}function $e(n,o){return new Nn(n.get(Qt),n.get(He),n.get(R),o)}var Nn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(o,e,t,i){this._scrollDispatcher=o,this._viewportRuler=e,this._ngZone=t,this._config=i}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(!this._scrollSubscription){let o=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(o).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:i}=this._viewportRuler.getViewportSize();Go(e,[{width:t,height:i,bottom:i,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Ds=(()=>{class n{_injector=s(L);constructor(){}noop=()=>new Ui;close=e=>ws(this._injector,e);block=()=>hi(this._injector);reposition=e=>$e(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qe=class{positionStrategy;scrollStrategy=new Ui;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(o){if(o){let e=Object.keys(o);for(let t of e)o[t]!==void 0&&(this[t]=o[t])}}};var Vn=class{connectionPair;scrollableViewProperties;constructor(o,e){this.connectionPair=o,this.scrollableViewProperties=e}};var ks=(()=>{class n{_attachedOverlays=[];_document=s(z);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ss=(()=>{class n extends ks{_ngZone=s(R);_renderer=s(Fe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let i=t.length-1;i>-1;i--){let a=t[i];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ms=(()=>{class n extends ks{_platform=s(H);_ngZone=s(R);_renderer=s(Fe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,i={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,"pointerdown",this._pointerDownListener,i),a.listen(t,"click",this._clickListener,i),a.listen(t,"auxclick",this._clickListener,i),a.listen(t,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=_e(e)};_clickListener=e=>{let t=_e(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let l=a[r],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(bs(l.overlayElement,t)||bs(l.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function bs(n,o){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=o;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Es=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return n})(),Hn=(()=>{class n{_platform=s(H);_containerElement;_document=s(z);_styleLoader=s(re);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Lo()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<i.length;a++)i[a].remove()}let t=this._document.createElement("div");t.classList.add(e),Lo()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Es)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qo=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(o,e,t,i){this._renderer=e,this._ngZone=t,this.element=o.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let o=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(o,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),o.style.pointerEvents="none",o.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Yo(n){return n&&n.nodeType===1}var di=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new _;_attachments=new _;_detachments=new _;_positionStrategy;_scrollStrategy;_locationChanges=oe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new _;_outsidePointerEvents=new _;_afterNextRenderRef;constructor(o,e,t,i,a,r,l,c,g,u=!1,B,te){this._portalOutlet=o,this._host=e,this._pane=t,this._config=i,this._ngZone=a,this._keyboardDispatcher=r,this._document=l,this._location=c,this._outsideClickDispatcher=g,this._animationsDisabled=u,this._injector=B,this._renderer=te,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(o){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(o);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=be(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let o=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),o}dispose(){if(this._disposed)return;let o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,o&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()))}updateSize(o){this._config=I(I({},this._config),o),this._updateElementSize()}setDirection(o){this._config=ge(I({},this._config),{direction:o}),this._updateElementDirection()}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!0)}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!1)}getDirection(){let o=this._config.direction;return o?typeof o=="string"?o:o.value:"ltr"}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let o=this._pane.style;o.width=se(this._config.width),o.height=se(this._config.height),o.minWidth=se(this._config.minWidth),o.minHeight=se(this._config.minHeight),o.maxWidth=se(this._config.maxWidth),o.maxHeight=se(this._config.maxHeight)}_togglePointerEvents(o){this._pane.style.pointerEvents=o?"":"none"}_attachHost(){if(!this._host.parentElement){let o=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Yo(o)?o.after(this._host):o?.type==="parent"?o.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let o="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new qo(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(o))}):this._backdropRef.element.classList.add(o)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(o,e,t){let i=lt(e||[]).filter(a=>!!a);i.length&&(t?o.classList.add(...i):o.classList.remove(...i))}_detachContentWhenEmpty(){let o=!1;try{this._detachContentAfterRenderRef=be(()=>{o=!0,this._detachContent()},{injector:this._injector})}catch(e){if(o)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let o=this._scrollStrategy;o?.disable(),o?.detach?.()}},vs="cdk-overlay-connected-position-bounding-box",ad=/([A-Za-z%]+)$/;function pt(n,o){return new Bn(o,n.get(He),n.get(z),n.get(H),n.get(Hn))}var Bn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new _;_resizeSubscription=oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(o,e,t,i,a){this._viewportRuler=e,this._document=t,this._platform=i,this._overlayContainer=a,this.setOrigin(o)}attach(o){this._overlayRef&&this._overlayRef,this._validatePositions(),o.hostElement.classList.add(vs),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let o=this._originRect,e=this._overlayRect,t=this._viewportRect,i=this._containerRect,a=[],r;for(let l of this._preferredPositions){let c=this._getOriginPoint(o,i,l),g=this._getOverlayPoint(c,e,l),u=this._getOverlayFit(g,e,t,l);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(u,g,t)){a.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!r||r.overlayFit.visibleArea<u.visibleArea)&&(r={overlayFit:u,overlayPoint:g,originPoint:c,position:l,overlayRect:e})}if(a.length){let l=null,c=-1;for(let g of a){let u=g.boundingBoxRect.width*g.boundingBoxRect.height*(g.position.weight||1);u>c&&(c=u,l=g)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&$t(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(vs),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let o=this._lastPosition;o?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(o,this._getOriginPoint(this._originRect,this._containerRect,o))):this.apply()}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,o.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=!0){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=!0){return this._growAfterOpen=o,this}withPush(o=!0){return this._canPush=o,this}withLockedPosition(o=!0){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}withPopoverLocation(o){return this._popoverLocation=o,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof D?this._origin.nativeElement:Yo(this._origin)?this._origin:null}_getOriginPoint(o,e,t){let i;if(t.originX=="center")i=o.left+o.width/2;else{let r=this._isRtl()?o.right:o.left,l=this._isRtl()?o.left:o.right;i=t.originX=="start"?r:l}e.left<0&&(i-=e.left);let a;return t.originY=="center"?a=o.top+o.height/2:a=t.originY=="top"?o.top:o.bottom,e.top<0&&(a-=e.top),{x:i,y:a}}_getOverlayPoint(o,e,t){let i;t.overlayX=="center"?i=-e.width/2:t.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let a;return t.overlayY=="center"?a=-e.height/2:a=t.overlayY=="top"?0:-e.height,{x:o.x+i,y:o.y+a}}_getOverlayFit(o,e,t,i){let a=ys(e),{x:r,y:l}=o,c=this._getOffset(i,"x"),g=this._getOffset(i,"y");c&&(r+=c),g&&(l+=g);let u=0-r,B=r+a.width-t.width,te=0-l,le=l+a.height-t.height,pe=this._subtractOverflows(a.width,u,B),ce=this._subtractOverflows(a.height,te,le),Tt=pe*ce;return{visibleArea:Tt,isCompletelyWithinViewport:a.width*a.height===Tt,fitsInViewportVertically:ce===a.height,fitsInViewportHorizontally:pe==a.width}}_canFitWithFlexibleDimensions(o,e,t){if(this._hasFlexibleDimensions){let i=t.bottom-e.y,a=t.right-e.x,r=xs(this._overlayRef.getConfig().minHeight),l=xs(this._overlayRef.getConfig().minWidth),c=o.fitsInViewportVertically||r!=null&&r<=i,g=o.fitsInViewportHorizontally||l!=null&&l<=a;return c&&g}return!1}_pushOverlayOnScreen(o,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};let i=ys(e),a=this._viewportRect,r=Math.max(o.x+i.width-a.width,0),l=Math.max(o.y+i.height-a.height,0),c=Math.max(a.top-t.top-o.y,0),g=Math.max(a.left-t.left-o.x,0),u=0,B=0;return i.width<=a.width?u=g||-r:u=o.x<this._getViewportMarginStart()?a.left-t.left-o.x:0,i.height<=a.height?B=c||-l:B=o.y<this._getViewportMarginTop()?a.top-t.top-o.y:0,this._previousPushAmount={x:u,y:B},{x:o.x+u,y:o.y+B}}_applyPosition(o,e){if(this._setTransformOrigin(o),this._setOverlayElementStyles(e,o),this._setBoundingBoxStyles(e,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(o!==this._lastPosition||!this._lastScrollVisibility||!rd(this._lastScrollVisibility,t)){let i=new Vn(o,t);this._positionChanges.next(i)}this._lastScrollVisibility=t}this._lastPosition=o,this._isInitialRender=!1}_setTransformOrigin(o){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,i=o.overlayY;o.overlayX==="center"?t="center":this._isRtl()?t=o.overlayX==="start"?"right":"left":t=o.overlayX==="start"?"left":"right";for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${i}`}_calculateBoundingBoxRect(o,e){let t=this._viewportRect,i=this._isRtl(),a,r,l;if(e.overlayY==="top")r=o.y,a=t.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-o.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-l+this._getViewportMarginTop();else{let le=Math.min(t.bottom-o.y+t.top,o.y),pe=this._lastBoundingBoxSize.height;a=le*2,r=o.y-le,a>pe&&!this._isInitialRender&&!this._growAfterOpen&&(r=o.y-pe/2)}let c=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,g=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,u,B,te;if(g)te=t.width-o.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=o.x-this._getViewportMarginStart();else if(c)B=o.x,u=t.right-o.x-this._getViewportMarginEnd();else{let le=Math.min(t.right-o.x+t.left,o.x),pe=this._lastBoundingBoxSize.width;u=le*2,B=o.x-le,u>pe&&!this._isInitialRender&&!this._growAfterOpen&&(B=o.x-pe/2)}return{top:r,left:B,bottom:l,right:te,width:u,height:a}}_setBoundingBoxStyles(o,e){let t=this._calculateBoundingBoxRect(o,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=se(t.width),i.height=se(t.height),i.top=se(t.top)||"auto",i.bottom=se(t.bottom)||"auto",i.left=se(t.left)||"auto",i.right=se(t.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",a&&(i.maxHeight=se(a)),r&&(i.maxWidth=se(r))}this._lastBoundingBoxSize=t,$t(this._boundingBox.style,i)}_resetBoundingBoxStyles(){$t(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){$t(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(o,e){let t={},i=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let u=this._viewportRuler.getViewportScrollPosition();$t(t,this._getExactOverlayY(e,o,u)),$t(t,this._getExactOverlayX(e,o,u))}else t.position="static";let l="",c=this._getOffset(e,"x"),g=this._getOffset(e,"y");c&&(l+=`translateX(${c}px) `),g&&(l+=`translateY(${g}px)`),t.transform=l.trim(),r.maxHeight&&(i?t.maxHeight=se(r.maxHeight):a&&(t.maxHeight="")),r.maxWidth&&(i?t.maxWidth=se(r.maxWidth):a&&(t.maxWidth="")),$t(this._pane.style,t)}_getExactOverlayY(o,e,t){let i={top:"",bottom:""},a=this._getOverlayPoint(e,this._overlayRect,o);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),o.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;i.bottom=`${r-(a.y+this._overlayRect.height)}px`}else i.top=se(a.y);return i}_getExactOverlayX(o,e,t){let i={left:"",right:""},a=this._getOverlayPoint(e,this._overlayRect,o);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let r;if(this._isRtl()?r=o.overlayX==="end"?"left":"right":r=o.overlayX==="end"?"right":"left",r==="right"){let l=this._document.documentElement.clientWidth;i.right=`${l-(a.x+this._overlayRect.width)}px`}else i.left=se(a.x);return i}_getScrollVisibility(){let o=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:gs(o,t),isOriginOutsideView:Go(o,t),isOverlayClipped:gs(e,t),isOverlayOutsideView:Go(e,t)}}_subtractOverflows(o,...e){return e.reduce((t,i)=>t-Math.max(i,0),o)}_getNarrowedViewportRect(){let o=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+o-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:o-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(o,e){return e==="x"?o.offsetX==null?this._offsetX:o.offsetX:o.offsetY==null?this._offsetY:o.offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&lt(o).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let o=this._origin;if(o instanceof D)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();let e=o.width||0,t=o.height||0;return{top:o.y,bottom:o.y+t,left:o.x,right:o.x+e,height:t,width:e}}_getContainerRect(){let o=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();o&&(e.style.display="block");let t=e.getBoundingClientRect();return o&&(e.style.display=""),t}};function $t(n,o){for(let e in o)o.hasOwnProperty(e)&&(n[e]=o[e]);return n}function xs(n){if(typeof n!="number"&&n!=null){let[o,e]=n.split(ad);return!e||e==="px"?parseFloat(o):null}return n||null}function ys(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function rd(n,o){return n===o?!0:n.isOriginClipped===o.isOriginClipped&&n.isOriginOutsideView===o.isOriginOutsideView&&n.isOverlayClipped===o.isOverlayClipped&&n.isOverlayOutsideView===o.isOverlayOutsideView}var Cs="cdk-global-overlay-wrapper";function ui(n){return new zn}var zn=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(o){let e=o.getConfig();this._overlayRef=o,this._width&&!e.width&&o.updateSize({width:this._width}),this._height&&!e.height&&o.updateSize({height:this._height}),o.hostElement.classList.add(Cs),this._isDisposed=!1}top(o=""){return this._bottomOffset="",this._topOffset=o,this._alignItems="flex-start",this}left(o=""){return this._xOffset=o,this._xPosition="left",this}bottom(o=""){return this._topOffset="",this._bottomOffset=o,this._alignItems="flex-end",this}right(o=""){return this._xOffset=o,this._xPosition="right",this}start(o=""){return this._xOffset=o,this._xPosition="start",this}end(o=""){return this._xOffset=o,this._xPosition="end",this}width(o=""){return this._overlayRef?this._overlayRef.updateSize({width:o}):this._width=o,this}height(o=""){return this._overlayRef?this._overlayRef.updateSize({height:o}):this._height=o,this}centerHorizontally(o=""){return this.left(o),this._xPosition="center",this}centerVertically(o=""){return this.top(o),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:i,height:a,maxWidth:r,maxHeight:l}=t,c=(i==="100%"||i==="100vw")&&(!r||r==="100%"||r==="100vw"),g=(a==="100%"||a==="100vh")&&(!l||l==="100%"||l==="100vh"),u=this._xPosition,B=this._xOffset,te=this._overlayRef.getConfig().direction==="rtl",le="",pe="",ce="";c?ce="flex-start":u==="center"?(ce="center",te?pe=B:le=B):te?u==="left"||u==="end"?(ce="flex-end",le=B):(u==="right"||u==="start")&&(ce="flex-start",pe=B):u==="left"||u==="start"?(ce="flex-start",le=B):(u==="right"||u==="end")&&(ce="flex-end",pe=B),o.position=this._cssPosition,o.marginLeft=c?"0":le,o.marginTop=g?"0":this._topOffset,o.marginBottom=this._bottomOffset,o.marginRight=c?"0":pe,e.justifyContent=ce,e.alignItems=g?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let o=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Cs),t.justifyContent=t.alignItems=o.marginTop=o.marginBottom=o.marginLeft=o.marginRight=o.position="",this._overlayRef=null,this._isDisposed=!0}},Is=(()=>{class n{_injector=s(L);constructor(){}global(){return ui()}flexibleConnectedTo(e){return pt(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gi=new d("OVERLAY_DEFAULT_CONFIG");function Ke(n,o){n.get(re).load(Es);let e=n.get(Hn),t=n.get(z),i=n.get(Q),a=n.get(Lt),r=n.get(ue),l=n.get(Z,null,{optional:!0})||n.get(Fe).createRenderer(null,null),c=new Qe(o),g=n.get(Gi,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||r.value,"showPopover"in t.body?c.usePopover=o?.usePopover??g:c.usePopover=!1;let u=t.createElement("div"),B=t.createElement("div");u.id=i.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),B.appendChild(u),c.usePopover&&(B.setAttribute("popover","manual"),B.classList.add("cdk-overlay-popover"));let te=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Yo(te)?te.after(B):te?.type==="parent"?te.element.appendChild(B):e.getContainerElement().appendChild(B),new di(new Wi(u,a,n),B,u,c,n.get(R),n.get(Ss),t,n.get(qa),n.get(Ms),o?.disableAnimations??n.get(nn,null,{optional:!0})==="NoopAnimations",n.get(bt),l)}var Rs=(()=>{class n{scrollStrategies=s(Ds);_positionBuilder=s(Is);_injector=s(L);constructor(){}create(e){return Ke(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),sd=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ld=new d("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(L);return()=>$e(n)}}),mi=(()=>{class n{elementRef=s(D);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),As=new d("cdk-connected-overlay-default-config"),jn=(()=>{class n{_dir=s(ue,{optional:!0});_injector=s(L);_overlayRef;_templatePortal;_backdropSubscription=oe.EMPTY;_attachSubscription=oe.EMPTY;_detachSubscription=oe.EMPTY;_positionSubscription=oe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(ld);_ngZone=s(R);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new T;positionChange=new T;attach=new T;detach=new T;overlayKeydown=new T;overlayOutsideClick=new T;constructor(){let e=s(Ze),t=s(Ue),i=s(As,{optional:!0}),a=s(Gi,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new je(e,t),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=sd);let e=this._overlayRef=Ke(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!K(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=this._getOriginElement(),a=_e(t);(!i||i!==a&&!i.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Qe({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=pt(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof mi?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof mi?this.origin.elementRef.nativeElement:this.origin instanceof D?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(La(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",b],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",b],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",b],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",b],push:[2,"cdkConnectedOverlayPush","push",b],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",b],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",b],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ne]})}return n})(),Le=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({providers:[Rs],imports:[P,ut,Hi,Hi]})}return n})();var Kt=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var It=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(o,e,t,i,a){this._defaultMatcher=o,this.ngControl=e,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=a}updateErrorState(){let o=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,a=t?.isErrorState(i,e)??!1;a!==o&&(this.errorState=a,this._stateChanges.next())}};var Rt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[P]})}return n})();var Ts=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[P]})}return n})();var pi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[Rt,Ts,Mt,P]})}return n})();var cd=["trigger"],dd=["panel"],md=[[["mat-select-trigger"]],"*"],hd=["mat-select-trigger","*"];function ud(n,o){if(n&1&&(h(0,"span",4),Ce(1),x()),n&2){let e=V();m(),et(e.placeholder)}}function pd(n,o){n&1&&A(0)}function fd(n,o){if(n&1&&(h(0,"span",11),Ce(1),x()),n&2){let e=V(2);m(),et(e.triggerValue)}}function _d(n,o){if(n&1&&(h(0,"span",5),O(1,pd,1,0)(2,fd,2,1,"span",11),x()),n&2){let e=V();m(),F(e.customTrigger?1:2)}}function gd(n,o){if(n&1){let e=at();h(0,"div",12,1),N("keydown",function(i){Te(e);let a=V();return Oe(a._handleKeydown(i))}),A(2,1),x()}if(n&2){let e=V();ye(e.panelClass),M("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),y("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var bd=new d("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(L);return()=>$e(n)}}),vd=new d("MAT_SELECT_CONFIG"),xd=new d("MatSelectTrigger"),Qo=class{source;value;constructor(o,e){this.source=o,this.value=e}},Os=(()=>{class n{_viewportRuler=s(He);_changeDetectorRef=s(ee);_elementRef=s(D);_dir=s(ue,{optional:!0});_idGenerator=s(Q);_renderer=s(Z);_parentFormField=s(dt,{optional:!0});ngControl=s(Ge,{self:!0,optional:!0});_liveAnnouncer=s(To);_defaultOptions=s(vd,{optional:!0});_animationsDisabled=X();_popoverLocation;_initialized=new _;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=On(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Fn(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Qo(this,e)}_scrollStrategyFactory=s(bd);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new _;_errorStateTracker;stateChanges=new _;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=$(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(yt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=_t(()=>{let e=this.options;return e?e.changes.pipe(ae(e),Ae(()=>me(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ae(()=>this.optionSelectionChanges))});openedChange=new T;_openedStream=this.openedChange.pipe(ie(e=>e),de(()=>{}));_closedStream=this.openedChange.pipe(ie(e=>!e),de(()=>{}));selectionChange=new T;valueChange=new T;constructor(){let e=s(Kt),t=s(Nt,{optional:!0}),i=s(Vt,{optional:!0}),a=s(new rn("tabindex"),{optional:!0}),r=s(Gi,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new It(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new zi(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(j(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(j(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ae(null),j(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ke(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&St(this._trackedModal,"aria-owns",t),ri(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;St(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!K(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;r.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!K(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!K(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof mi?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ut(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=me(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(j(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),me(...this.options.map(t=>t._stateChanges)).pipe(j(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=_e(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&Me(a,xd,5)(a,Mt,5)(a,Bi,5),t&2){let r;C(r=w())&&(i.customTrigger=r.first),C(r=w())&&(i.options=r),C(r=w())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&J(cd,5)(dd,5)(jn,5),t&2){let a;C(a=w())&&(i.trigger=a.first),C(a=w())&&(i.panel=a.first),C(a=w())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&N("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(y("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),M("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",b],disableRipple:[2,"disableRipple","disableRipple",b],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:we(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],placeholder:"placeholder",required:[2,"required","required",b],multiple:[2,"multiple","multiple",b],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",b],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",we],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",b]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[U([{provide:Yt,useExisting:n},{provide:Vi,useExisting:n}]),ne],ngContentSelectors:hd,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(Y(md),h(0,"div",2,0),N("click",function(){return i.open()}),h(3,"div",3),O(4,ud,2,1,"span",4)(5,_d,3,1,"span",5),x(),h(6,"div",6)(7,"div",7),Ee(),h(8,"svg",8),q(9,"path",9),x()()()(),Se(10,gd,3,16,"ng-template",10),N("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),t&2){let a=Je(1);m(3),y("id",i._valueId),m(),F(i.empty?4:5),m(6),G("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[mi,jn],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0})}return n})();var qi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[Le,pi,P,Ye,nt,pi]})}return n})();var yd={capture:!0},Cd=["focus","mousedown","mouseenter","touchstart"],$o="mat-ripple-loader-uninitialized",Ko="mat-ripple-loader-class-name",Fs="mat-ripple-loader-centered",Wn="mat-ripple-loader-disabled",Un=(()=>{class n{_document=s(z);_animationsDisabled=X();_globalRippleOptions=s(Li,{optional:!0});_platform=s(H);_ngZone=s(R);_injector=s(L);_eventCleanups;_hosts=new Map;constructor(){let e=s(Fe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Cd.map(t=>e.listen(this._document,t,this._onInteraction,yd)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute($o,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Ko))&&e.setAttribute(Ko,t.className||""),t.centered&&e.setAttribute(Fs,""),t.disabled&&e.setAttribute(Wn,"")}setDisabled(e,t){let i=this._hosts.get(e);i?(i.target.rippleDisabled=t,!t&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):t?e.setAttribute(Wn,""):e.removeAttribute(Wn)}_onInteraction=e=>{let t=_e(e);if(t instanceof HTMLElement){let i=t.closest(`[${$o}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Ko)),e.append(t);let i=this._globalRippleOptions,a=this._animationsDisabled?0:i?.animation?.enterDuration??Fi.enterDuration,r=this._animationsDisabled?0:i?.animation?.exitDuration??Fi.exitDuration,l={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Wn),rippleConfig:{centered:e.hasAttribute(Fs),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:r}}},c=new Pi(l,this._ngZone,t,this._platform,this._injector),g=!l.rippleDisabled;g&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:g}),e.removeAttribute($o)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var wd=["mat-icon-button",""],Dd=["*"],kd=new d("MAT_BUTTON_CONFIG");function Ps(n){return n==null?void 0:we(n)}var Xo=(()=>{class n{_elementRef=s(D);_ngZone=s(R);_animationsDisabled=X();_config=s(kd,{optional:!0});_focusMonitor=s(Ve);_cleanupClick;_renderer=s(Z);_rippleLoader=s(Un);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(re).load(mt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,i){t&2&&(y("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),ye(i.color?"mat-"+i.color:""),M("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",b],disabled:[2,"disabled","disabled",b],ariaDisabled:[2,"aria-disabled","ariaDisabled",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b],tabIndex:[2,"tabIndex","tabIndex",Ps],_tabindex:[2,"tabindex","_tabindex",Ps]}})}return n})(),Zo=(()=>{class n extends Xo{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[W],attrs:wd,ngContentSelectors:Dd,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(Y(),Ne(0,"span",0),A(1),Ne(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return n})();var Sd=["matButton",""],Md=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ed=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Ls=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ob=(()=>{class n extends Xo{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Id(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,i=this._appearance?Ls.get(this._appearance):null,a=Ls.get(e);i&&t.remove(...i),t.add(...a),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[W],attrs:Sd,ngContentSelectors:Ed,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,i){t&1&&(Y(Md),Ne(0,"span",0),A(1),fe(2,"span",1),A(3,1),ve(),A(4,2),Ne(5,"span",2)(6,"span",3)),t&2&&M("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return n})();function Id(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Xt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[Rt,P]})}return n})();function Rd(n,o){}var At=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var ea=(()=>{class n extends li{_elementRef=s(D);_focusTrapFactory=s(Ao);_config;_interactivityChecker=s(Ro);_ngZone=s(R);_focusMonitor=s(Ve);_renderer=s(Z);_changeDetectorRef=s(ee);_injector=s(L);_platform=s(H);_document=s(z);_portalOutlet;_focusTrapped=new _;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(At,{optional:!0})||new At,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),r(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",i),r=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||be(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let i=Ht(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Ht();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ht()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(t&1&&J(ci,7),t&2){let a;C(a=w())&&(i._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){t&2&&y("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[W],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&Se(0,Rd,0,0,"ng-template",0)},dependencies:[ci],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),Yi=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new _;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!K(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}},Ad=new d("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=s(L);return()=>hi(n)}}),Td=new d("DialogData"),Od=new d("DefaultDialogConfig");function Fd(n){let o=$(n),e=new T;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var ta=(()=>{class n{_injector=s(L);_defaultOptions=s(Od,{optional:!0});_parentDialog=s(n,{optional:!0,skipSelf:!0});_overlayContainer=s(Hn);_idGenerator=s(Q);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new _;_afterOpenedAtThisLevel=new _;_ariaHiddenElements=new Map;_scrollStrategy=s(Ad);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=_t(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ae(void 0)));constructor(){}open(e,t){let i=this._defaultOptions||new At;t=I(I({},i),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),r=Ke(this._injector,a),l=new Yi(r,t),c=this._attachContainer(r,l,t);if(l.containerInstance=c,!this.openDialogs.length){let g=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(ke(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(g)}):this._hideNonDialogContentFromAssistiveTechnology(g)}return this._attachDialogContent(e,l,c,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){Jo(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Jo(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Jo(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Qe({positionStrategy:e.positionStrategy||ui().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let a=i.injector||i.viewContainerRef?.injector,r=[{provide:At,useValue:i},{provide:Yi,useValue:t},{provide:di,useValue:e}],l;i.container?typeof i.container=="function"?l=i.container:(l=i.container.type,r.push(...i.container.providers(i))):l=ea;let c=new Et(l,i.viewContainerRef,L.create({parent:a||this._injector,providers:r}));return e.attach(c).instance}_attachDialogContent(e,t,i,a){if(e instanceof Ze){let r=this._createInjector(a,t,i,void 0),l={$implicit:a.data,dialogRef:t};a.templateContext&&(l=I(I({},l),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),i.attachTemplatePortal(new je(e,null,l,r))}else{let r=this._createInjector(a,t,i,this._injector),l=i.attachComponentPortal(new Et(e,a.viewContainerRef,r));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,i,a){let r=e.injector||e.viewContainerRef?.injector,l=[{provide:Td,useValue:e.data},{provide:Yi,useValue:t}];return e.providers&&(typeof e.providers=="function"?l.push(...e.providers(t,e,i)):l.push(...e.providers)),e.direction&&(!r||!r.get(ue,null,{optional:!0}))&&l.push({provide:ue,useValue:Fd(e.direction)}),L.create({parent:r||a,providers:l})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute("aria-hidden",a):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let a=t[i];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Jo(n,o){let e=n.length;for(;e--;)o(n[e])}var Ns=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({providers:[ta],imports:[Le,ut,Ai,ut]})}return n})();function Pd(n,o){}var qn=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},ia="mdc-dialog--open",Vs="mdc-dialog--opening",Bs="mdc-dialog--closing",Ld=150,Nd=75,Vd=(()=>{class n extends ea{_animationStateChanged=new T;_animationsEnabled=!X();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Hs(this._config.enterAnimationDuration)??Ld:0;_exitAnimationDuration=this._animationsEnabled?Hs(this._config.exitAnimationDuration)??Nd:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(zs,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Vs,ia)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ia),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ia),this._animationsEnabled?(this._hostElement.style.setProperty(zs,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Bs)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Vs,Bs)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275cmp=S({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,i){t&2&&(xe("id",i._config.id),y("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),M("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[W],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(h(0,"div",0)(1,"div",1),Se(2,Pd,0,0,"ng-template",2),x()())},dependencies:[ci],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2})}return n})(),zs="--mat-dialog-transition-duration";function Hs(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?st(n.substring(0,n.length-2)):n.endsWith("s")?st(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Gn=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Gn||{}),Yn=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new _i(1);_beforeClosed=new _i(1);_result;_closeFallbackTimeout;_state=Gn.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(ie(i=>i.state==="opened"),ke(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(ie(i=>i.state==="closed"),ke(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),me(this.backdropClick(),this.keydownEvents().pipe(ie(i=>i.keyCode===27&&!this.disableClose&&!K(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),js(this,i.type==="keydown"?"keyboard":"mouse"))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(ie(t=>t.state==="closing"),ke(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Gn.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",e=""){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=Gn.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function js(n,o,e){return n._closeInteractionType=o,n.close(e)}var Bd=new d("MatMdcDialogData"),zd=new d("mat-mdc-dialog-default-options"),Hd=new d("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(L);return()=>hi(n)}}),Ws=(()=>{class n{_defaultOptions=s(zd,{optional:!0});_scrollStrategy=s(Hd);_parentDialog=s(n,{optional:!0,skipSelf:!0});_idGenerator=s(Q);_injector=s(L);_dialog=s(ta);_animationsDisabled=X();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new _;_afterOpenedAtThisLevel=new _;dialogConfigClass=qn;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=_t(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ae(void 0)));constructor(){this._dialogRefConstructor=Yn,this._dialogContainerType=Vd,this._dialogDataToken=Bd}open(e,t){let i;t=I(I({},this._defaultOptions||new qn),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,ge(I({},t),{positionStrategy:ui(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:At,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(r,l,c)=>(i=new this._dialogRefConstructor(r,t,c),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),x0=(()=>{class n{dialogRef=s(Yn,{optional:!0});_elementRef=s(D);_dialog=s(Ws);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=jd(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){js(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,i){t&1&&N("click",function(r){return i._onButtonClick(r)}),t&2&&y("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ne]})}return n})();function jd(n,o){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var na=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({providers:[Ws],imports:[Ns,Le,ut,P]})}return n})();var Wd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return n})(),Ud={passive:!0},Us=(()=>{class n{_platform=s(H);_ngZone=s(R);_renderer=s(Fe).createRenderer(null,null);_styleLoader=s(re);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ea;this._styleLoader.load(Wd);let t=Pe(e),i=this._monitoredElements.get(t);if(i)return i.subject;let a=new _,r="cdk-text-field-autofilled",l=g=>{g.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:g.target,isAutofilled:!0}))):g.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:g.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Ud)));return this._monitoredElements.set(t,{subject:a,unlisten:c}),a}stopMonitoring(e){let t=Pe(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Gs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({})}return n})();var qs=new d("MAT_INPUT_VALUE_ACCESSOR");var Gd=["button","checkbox","file","hidden","image","radio","range","reset","submit"],qd=new d("MAT_INPUT_CONFIG"),tv=(()=>{class n{_elementRef=s(D);_platform=s(H);ngControl=s(Ge,{optional:!0,self:!0});_autofillMonitor=s(Us);_ngZone=s(R);_formField=s(dt,{optional:!0});_renderer=s(Z);_uid=s(Q).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(qd,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new _;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Be(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(yt.required)??!1}set required(e){this._required=Be(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&No().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Be(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>No().has(e));constructor(){let e=s(Nt,{optional:!0}),t=s(Vt,{optional:!0}),i=s(Kt),a=s(qs,{optional:!0,self:!0}),r=this._elementRef.nativeElement,l=r.nodeName.toLowerCase();a?Pt(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new It(i,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ot(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Gd.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&N("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(xe("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),y("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),M("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",b]},exportAs:["matInput"],features:[U([{provide:Yt,useExisting:n}]),ne]})}return n})(),Qi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[nt,nt,Gs,P]})}return n})();function Ys(n){return Error(`Unable to find icon with the name "${n}"`)}function Yd(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Qs(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function $s(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var ft=class{url;svgText;options;svgElement=null;constructor(o,e,t){this.url=o,this.svgText=e,this.options=t}},Xs=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,a){return this._addSvgIconConfig(e,t,new ft(i,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,a){let r=this._sanitizer.sanitize(vt.HTML,i);if(!r)throw $s(i);let l=jt(r);return this._addSvgIconConfig(e,t,new ft("",l,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new ft(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let a=this._sanitizer.sanitize(vt.HTML,t);if(!a)throw $s(t);let r=jt(a);return this._addSvgIconSetConfig(e,new ft("",r,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(vt.RESOURCE_URL,e);if(!t)throw Qs(e);let i=this._cachedIconsByUrl.get(t);return i?De(Qn(i)):this._loadSvgIconFromConfig(new ft(e,null)).pipe(gt(a=>this._cachedIconsByUrl.set(t,a)),de(a=>Qn(a)))}getNamedSvgIcon(e,t=""){let i=Ks(t,e),a=this._svgIconConfigs.get(i);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(i,a),this._getSvgFromConfig(a);let r=this._iconSetConfigs.get(t);return r?this._getSvgFromIconSetConfigs(e,r):Ia(Ys(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?De(Qn(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(de(t=>Qn(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return De(i);let a=t.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Ta(l=>{let g=`Loading icon set URL: ${this._sanitizer.sanitize(vt.RESOURCE_URL,r.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(g)),De(null)})));return $i(a).pipe(de(()=>{let r=this._extractIconWithNameFromAnySet(e,t);if(!r)throw Ys(e);return r}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let a=t[i];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(a),l=this._extractSvgIconFromSet(r,e,a.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(gt(t=>e.svgText=t),de(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?De(null):this._fetchIcon(e).pipe(gt(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let r=a.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,i);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),i);let l=this._svgElementFromString(jt("<svg></svg>"));return l.appendChild(r),this._setSvgAttributes(l,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(jt("<svg></svg>")),i=e.attributes;for(let a=0;a<i.length;a++){let{name:r,value:l}=i[a];r!=="id"&&t.setAttribute(r,l)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,a=i?.withCredentials??!1;if(!this._httpClient)throw Yd();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let r=this._sanitizer.sanitize(vt.RESOURCE_URL,t);if(!r)throw Qs(t);let l=this._inProgressUrlFetches.get(r);if(l)return l;let c=this._httpClient.get(r,{responseType:"text",withCredentials:a}).pipe(de(g=>jt(g)),Fa(()=>this._inProgressUrlFetches.delete(r)),Pa());return this._inProgressUrlFetches.set(r,c),c}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(Ks(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let a=this._resolvers[i](t,e);if(a)return Qd(a)?new ft(a.url,null,a.options):new ft(a,null)}}static \u0275fac=function(t){return new(t||n)(bi(Qa,8),bi(cn),bi(z,8),bi(en))};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Qn(n){return n.cloneNode(!0)}function Ks(n,o){return n+":"+o}function Qd(n){return!!(n.url&&n.options)}var $d=["*"],Kd=new d("MAT_ICON_DEFAULT_OPTIONS"),Xd=new d("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(z),o=n?n.location:null;return{getPathname:()=>o?o.pathname+o.search:""}}}),Zs=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Zd=Zs.map(n=>`[${n}]`).join(", "),Jd=/^url\(['"]?#(.*?)['"]?\)$/,wv=(()=>{class n{_elementRef=s(D);_iconRegistry=s(Xs);_location=s(Xd);_errorHandler=s(en);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=oe.EMPTY;constructor(){let e=s(new rn("aria-hidden"),{optional:!0}),t=s(Kd,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,a)=>{i.forEach(r=>{a.setAttribute(r.name,`url('${e}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Zd),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)Zs.forEach(r=>{let l=t[a],c=l.getAttribute(r),g=c?c.match(Jd):null;if(g){let u=i.get(l);u||(u=[],i.set(l,u)),u.push({name:r,value:g[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(ke(1)).subscribe(a=>this._setSvgElement(a),a=>{let r=`Error retrieving icon ${t}:${i}! ${a.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(y("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),ye(i.color?"mat-"+i.color:""),M("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",b],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:$d,decls:1,vars:0,template:function(t,i){t&1&&(Y(),A(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return n})(),oa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[P]})}return n})();var em=["determinateSpinner"];function tm(n,o){if(n&1&&(Ee(),h(0,"svg",11),q(1,"circle",12),x()),n&2){let e=V();y("viewBox",e._viewBox()),m(),rt("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),y("r",e._circleRadius())}}var im=new d("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Js})}),Js=100,nm=10,Pv=(()=>{class n{_elementRef=s(D);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(im),t=Bo(),i=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Js;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-nm)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,i){if(t&1&&J(em,5),t&2){let a;C(a=w())&&(i._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,i){t&2&&(y("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),ye("mat-"+i.color),rt("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),M("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",we],diameter:[2,"diameter","diameter",we],strokeWidth:[2,"strokeWidth","strokeWidth",we]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,i){if(t&1&&(Se(0,tm,2,8,"ng-template",null,0,an),h(2,"div",2,1),Ee(),h(4,"svg",3),q(5,"circle",4),x()(),Ji(),h(6,"div",5)(7,"div",6)(8,"div",7),Zt(9,8),x(),h(10,"div",9),Zt(11,8),x(),h(12,"div",10),Zt(13,8),x()()()),t&2){let a=Je(1);m(4),y("viewBox",i._viewBox()),m(),rt("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),y("r",i._circleRadius()),m(4),G("ngTemplateOutlet",a),m(2),G("ngTemplateOutlet",a),m(2),G("ngTemplateOutlet",a)}},dependencies:[ln],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2,changeDetection:0})}return n})();var aa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[P]})}return n})();var el=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[Hi]})}return n})();var ra=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[el,P]})}return n})();var rm=["tooltip"],sm=20;var lm=new d("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(L);return()=>$e(n,{scrollThrottle:sm})}}),cm=new d("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var tl="tooltip-panel",dm={passive:!0},mm=8,hm=8,um=24,pm=200,il=(()=>{class n{_elementRef=s(D);_ngZone=s(R);_platform=s(H);_ariaDescriber=s(Gr);_focusMonitor=s(Ve);_dir=s(ue);_injector=s(L);_viewContainerRef=s(Ue);_mediaMatcher=s(oi);_document=s(z);_renderer=s(Z);_animationsDisabled=X();_defaultOptions=s(cm,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=fm;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Be(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Be(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=st(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=st(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new _;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=mm}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(j(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new Et(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(j(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof D)return this._overlayRef;this._detach()}let t=this._injector.get(Qt).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${tl}`,a=pt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(j(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ke(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(lm)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(j(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(j(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(j(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(j(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(I(I({},i.main),a.main)),this._addOffset(I(I({},i.fallback),a.fallback))])}_addOffset(e){let t=hm,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:a,y:r}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:a,y:r}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),be(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:a}=e,r;if(t==="center"?this._dir&&this._dir.value==="rtl"?r=i==="end"?"left":"right":r=i==="start"?"left":"right":r=t==="bottom"&&a==="top"?"above":"below",r!==this._currentPosition){let l=this._overlayRef;if(l){let c=`${this._cssClassPrefix}-${tl}-`;l.removePanelClass(c+this._currentPosition),l.addPanelClass(c+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,dm))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||be({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!K(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&M("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),fm=(()=>{class n{_changeDetectorRef=s(ee);_elementRef=s(D);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=X();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new _;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>um&&e.width>=pm}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:i),t.classList.add(e?i:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(t);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&J(rm,7),t&2){let a;C(a=w())&&(i._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,i){t&1&&N("mouseleave",function(r){return i._handleMouseLeave(r)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,i){t&1&&(fe(0,"div",1,0),on("animationend",function(r){return i._handleAnimationEnd(r)}),fe(2,"div",2),Ce(3),ve()()),t&2&&(ye(i.tooltipClass),M("mdc-tooltip--multiline",i._isMultiline),m(3),et(i.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2,changeDetection:0})}return n})();var nl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[Ai,Le,P,Ye]})}return n})();function _m(n,o){if(n&1&&(h(0,"mat-option",17),Ce(1),x()),n&2){let e=o.$implicit;G("value",e),m(),xt(" ",e," ")}}function gm(n,o){if(n&1){let e=at();h(0,"mat-form-field",14)(1,"mat-select",16,0),N("selectionChange",function(i){Te(e);let a=V(2);return Oe(a._changePageSize(i.value))}),ao(3,_m,2,2,"mat-option",17,oo),x(),h(5,"div",18),N("click",function(){Te(e);let i=Je(2);return Oe(i.open())}),x()()}if(n&2){let e=V(2);G("appearance",e._formFieldAppearance)("color",e.color),m(),G("value",e.pageSize)("disabled",e.disabled),no("aria-labelledby",e._pageSizeLabelId),G("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),m(2),ro(e._displayedPageSizeOptions)}}function bm(n,o){if(n&1&&(h(0,"div",15),Ce(1),x()),n&2){let e=V(2);m(),et(e.pageSize)}}function vm(n,o){if(n&1&&(h(0,"div",3)(1,"div",13),Ce(2),x(),O(3,gm,6,7,"mat-form-field",14),O(4,bm,2,1,"div",15),x()),n&2){let e=V();m(),y("id",e._pageSizeLabelId),m(),xt(" ",e._intl.itemsPerPageLabel," "),m(),F(e._displayedPageSizeOptions.length>1?3:-1),m(),F(e._displayedPageSizeOptions.length<=1?4:-1)}}function xm(n,o){if(n&1){let e=at();h(0,"button",19),N("click",function(){Te(e);let i=V();return Oe(i._buttonClicked(0,i._previousButtonsDisabled()))}),Ee(),h(1,"svg",8),q(2,"path",20),x()()}if(n&2){let e=V();G("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),y("aria-label",e._intl.firstPageLabel)}}function ym(n,o){if(n&1){let e=at();h(0,"button",21),N("click",function(){Te(e);let i=V();return Oe(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),Ee(),h(1,"svg",8),q(2,"path",22),x()()}if(n&2){let e=V();G("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),y("aria-label",e._intl.lastPageLabel)}}var Cm=(()=>{class n{changes=new _;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let a=e*t,r=a<i?Math.min(a+t,i):a+t;return`${a+1} \u2013 ${r} of ${i}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wm=50;var Dm=new d("MAT_PAGINATOR_DEFAULT_OPTIONS"),km=(()=>{class n{_intl=s(Cm);_changeDetectorRef=s(ee);_formFieldAppearance;_pageSizeLabelId=s(Q).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new _i(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>we(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new T;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=s(Dm,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:a,hidePageSize:r,showFirstLastButtons:l}=t;i!=null&&(this._pageSize=i),a!=null&&(this._pageSizeOptions=a),r!=null&&(this.hidePageSize=r),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:wm),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",we],length:[2,"length","length",we],pageSize:[2,"pageSize","pageSize",we],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",b],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",b],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",b]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(h(0,"div",1)(1,"div",2),O(2,vm,5,4,"div",3),h(3,"div",4)(4,"div",5),Ce(5),x(),O(6,xm,3,5,"button",6),h(7,"button",7),N("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),Ee(),h(8,"svg",8),q(9,"path",9),x()(),Ji(),h(10,"button",10),N("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),Ee(),h(11,"svg",8),q(12,"path",11),x()(),O(13,ym,3,5,"button",12),x()()()),t&2&&(m(2),F(i.hidePageSize?-1:2),m(3),xt(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),m(),F(i.showFirstLastButtons?6:-1),m(),G("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),y("aria-label",i._intl.previousPageLabel),m(3),G("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),y("aria-label",i._intl.nextPageLabel),m(3),F(i.showFirstLastButtons?13:-1))},dependencies:[An,Os,Mt,Zo,il],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2,changeDetection:0})}return n})(),sa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[Xt,qi,nl,km]})}return n})();var la=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[P]})}return n})();var ol=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({})}return n})();var ca=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[ol,ut,P]})}return n})();var Sm=["panel"],Mm=["*"];function Em(n,o){if(n&1&&(fe(0,"div",1,0),A(2),ve()),n&2){let e=o.id,t=V();ye(t._classList),M("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),xe("id",t.id),y("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var da=class{source;option;constructor(o,e){this.source=o,this.option=e}},al=new d("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Ly=(()=>{class n{_changeDetectorRef=s(ee);_elementRef=s(D);_defaults=s(al);_animationsDisabled=X();_activeOptionChanges=oe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new T;opened=new T;closed=new T;optionActivated=new T;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(Q).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(H);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Ut(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new da(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,i,a){if(t&1&&Me(a,Mt,5)(a,Bi,5),t&2){let r;C(r=w())&&(i.options=r),C(r=w())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&J(Ze,7)(Sm,5),t&2){let a;C(a=w())&&(i.template=a.first),C(a=w())&&(i.panel=a.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",b],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",b],requireSelection:[2,"requireSelection","requireSelection",b],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",b],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[U([{provide:Vi,useExisting:n}])],ngContentSelectors:Mm,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,i){t&1&&(Y(),vi(0,Em,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return n})();var Im={provide:Mi,useExisting:Xe(()=>Am),multi:!0};var Rm=new d("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(L);return()=>$e(n)}}),Am=(()=>{class n{_environmentInjector=s(bt);_element=s(D);_injector=s(L);_viewContainerRef=s(Ue);_zone=s(R);_changeDetectorRef=s(ee);_dir=s(ue,{optional:!0});_formField=s(dt,{optional:!0,host:!0});_viewportRuler=s(He);_scrollStrategy=s(Rm);_renderer=s(Z);_animationsDisabled=X();_defaults=s(al,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new _;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=oe.EMPTY;_breakpointObserver=s(Ri);_handsetLandscapeSubscription=oe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new _;_overlayPanelClass=lt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&St(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return me(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ie(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ie(()=>this._overlayAttached)):De()).pipe(de(e=>e instanceof Ni?e:null))}optionSelections=_t(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(ae(e),Ae(()=>me(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ae(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new ot(e=>{let t=a=>{let r=_e(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(r))&&(!c||!c.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(a)},i=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{i.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,i=t.keyCode,a=K(t);if(i===27&&!a&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,l=i===38||i===40;i===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,i=t.value;if(t.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(r=>r.selected);if(a){let r=this._getDisplayValue(a.value);i!==r&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Ht()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new ot(i=>{be(()=>{i.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(gt(()=>this._positionStrategy.reapplyLastPosition()),Oa(0))??De();return me(e,t).pipe(Ae(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),ke(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;ri(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new je(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=Ke(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Kr.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!K(e)||e.keyCode===38&&K(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Qe({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=pt(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],r;this.position==="above"?r=a:this.position==="below"?r=t:r=[...t,...a],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,i=On(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let r=a._getHostElement(),l=Fn(r.offsetTop,r.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(l)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&St(this._trackedModal,"aria-owns",t),ri(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;St(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,i){t&1&&N("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(r){return i._handleInput(r)})("keydown",function(r){return i._handleKeydown(r)})("click",function(){return i._handleClick()}),t&2&&y("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",b]},exportAs:["matAutocompleteTrigger"],features:[U([Im]),ne]})}return n})(),ma=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[Le,pi,Ye,pi,P]})}return n})();var Om=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Fm=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Pm(n,o){n&1&&(h(0,"span",3),A(1,1),x())}function Lm(n,o){n&1&&(h(0,"span",6),A(1,2),x())}var Nm=`.mdc-evolution-chip,
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
`,Vm=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Bm=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function zm(n,o){n&1&&q(0,"span",0)}function Hm(n,o){n&1&&(h(0,"span",1),A(1),x())}function jm(n,o){n&1&&(h(0,"span",3),A(1,1),x())}function Wm(n,o){n&1&&A(0,2)}function Um(n,o){n&1&&q(0,"span",7)}function Gm(n,o){if(n&1&&O(0,Wm,1,0)(1,Um,1,0,"span",7),n&2){let e=V();F(e.contentEditInput?0:1)}}function qm(n,o){n&1&&A(0,3)}function Ym(n,o){n&1&&(h(0,"span",6),A(1,4),x())}var dl=["*"],Qm=`.mat-mdc-chip-set {
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
`,ml=new d("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),rl=new d("MatChipAvatar"),sl=new d("MatChipTrailingIcon"),ll=new d("MatChipEdit"),ua=new d("MatChipRemove"),_a=new d("MatChip"),hl=(()=>{class n{_elementRef=s(D);_parentChip=s(_a);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){s(re).load(mt),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,i){t&2&&(y("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),M("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",b],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:we(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),ga=(()=>{class n extends hl{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,i){t&1&&N("click",function(r){return i._handleClick(r)})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(y("tabindex",i._getTabindex()),M("mdc-evolution-chip__action--presentational",!1))},features:[W]})}return n})();var dC=(()=>{class n extends ga{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ie(n)))(i||n)}})();static \u0275dir=v({type:n,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,i){t&2&&y("aria-hidden",null)},features:[U([{provide:ua,useExisting:n}]),W]})}return n})(),pa=(()=>{class n{_changeDetectorRef=s(ee);_elementRef=s(D);_tagName=s(Wa);_ngZone=s(R);_focusMonitor=s(Ve);_globalRippleOptions=s(Li,{optional:!0});_document=s(z);_onFocus=new _;_onBlur=new _;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=X();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=s(Q).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new T;destroyed=new T;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=s(Un);_injector=s(L);constructor(){let e=s(re);e.load(mt),e.load(Dt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=me(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,i,a){if(t&1&&Me(a,rl,5)(a,ll,5)(a,sl,5)(a,ua,5)(a,rl,5)(a,sl,5)(a,ll,5)(a,ua,5),t&2){let r;C(r=w())&&(i.leadingIcon=r.first),C(r=w())&&(i.editIcon=r.first),C(r=w())&&(i.trailingIcon=r.first),C(r=w())&&(i.removeIcon=r.first),C(r=w())&&(i._allLeadingIcons=r),C(r=w())&&(i._allTrailingIcons=r),C(r=w())&&(i._allEditIcons=r),C(r=w())&&(i._allRemoveIcons=r)}},viewQuery:function(t,i){if(t&1&&J(ga,5),t&2){let a;C(a=w())&&(i.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,i){t&1&&N("keydown",function(r){return i._handleKeydown(r)}),t&2&&(xe("id",i.id),y("role",i.role)("aria-label",i.ariaLabel),ye("mat-"+(i.color||"primary")),M("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",b],highlighted:[2,"highlighted","highlighted",b],disableRipple:[2,"disableRipple","disableRipple",b],disabled:[2,"disabled","disabled",b]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[U([{provide:_a,useExisting:n}])],ngContentSelectors:Fm,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,i){t&1&&(Y(Om),q(0,"span",0),h(1,"span",1)(2,"span",2),O(3,Pm,2,0,"span",3),h(4,"span",4),A(5),q(6,"span",5),x()()(),O(7,Lm,2,0,"span",6)),t&2&&(m(3),F(i.leadingIcon?3:-1),m(4),F(i._hasTrailingIcon()?7:-1))},dependencies:[hl],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2,changeDetection:0})}return n})();var ha=(()=>{class n{_elementRef=s(D);_document=s(z);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return n})(),$m=(()=>{class n extends pa{basicChipAttrName="mat-basic-chip-row";_renderer=s(Z);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new T;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(j(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,be(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,i,a){if(t&1&&Me(a,ha,5),t&2){let r;C(r=w())&&(i.contentEditInput=r.first)}},viewQuery:function(t,i){if(t&1&&J(ha,5),t&2){let a;C(a=w())&&(i.defaultEditInput=a.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,i){t&1&&N("focus",function(){return i._handleFocus()})("click",function(r){return i._hasInteractiveActions()?i._handleClick(r):null})("dblclick",function(r){return i._handleDoubleclick(r)}),t&2&&(xe("id",i.id),y("tabindex",i.disabled?null:-1)("aria-label",null)("aria-description",null)("role",i.role),M("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-chip-editing",i._isEditing)("mat-mdc-chip-editable",i.editable)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-leading-action",i._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[U([{provide:pa,useExisting:n},{provide:_a,useExisting:n}]),W],ngContentSelectors:Bm,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,i){t&1&&(Y(Vm),O(0,zm,1,0,"span",0),O(1,Hm,2,0,"span",1),h(2,"span",2),O(3,jm,2,0,"span",3),h(4,"span",4),O(5,Gm,2,1)(6,qm,1,0),q(7,"span",5),x()(),O(8,Ym,2,0,"span",6)),t&2&&(F(i._isEditing?-1:0),m(),F(i._hasLeadingActionIcon()?1:-1),m(),G("disabled",i.disabled),y("aria-description",i.ariaDescription)("aria-label",i.ariaLabel),m(),F(i.leadingIcon?3:-1),m(2),F(i._isEditing?5:6),m(3),F(i._hasTrailingIcon()?8:-1))},dependencies:[ga,ha],styles:[Nm],encapsulation:2,changeDetection:0})}return n})(),Km=(()=>{class n{_elementRef=s(D);_changeDetectorRef=s(ee);_dir=s(ue,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new _;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Ft;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(ae(null),Ae(()=>me(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(ae(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(a=>t.push(a))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Gt(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(j(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(j(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(ae(null),j(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(j(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),r=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),l=a||r;this._isValidIndex(i)&&l&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,i,a){if(t&1&&Me(a,pa,5),t&2){let r;C(r=w())&&(i._chips=r)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,i){t&1&&N("keydown",function(r){return i._handleKeydown(r)}),t&2&&y("role",i.role)},inputs:{disabled:[2,"disabled","disabled",b],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:we(e)]},ngContentSelectors:dl,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&(Y(),fe(0,"div",0),A(1),ve())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2,changeDetection:0})}return n})();var fa=class{source;value;constructor(o,e){this.source=o,this.value=e}},mC=(()=>{class n extends Km{ngControl=s(Ge,{optional:!0,self:!0});controlType="mat-chip-grid";_chipInput;_defaultRole="grid";_errorStateTracker;_uid=s(Q).getId("mat-chip-grid-");_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder="";get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(yt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new T;valueChange=new T;_chips=void 0;stateChanges=new _;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=s(Nt,{optional:!0}),t=s(Vt,{optional:!0}),i=s(Kt);this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new It(i,this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(j(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),me(this.chipFocusChanges,this._chips.changes).pipe(j(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute("aria-describedby");return e?e.split(" "):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,i=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&K(e,"shiftKey")&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),i?this._keyManager.setActiveItem(i):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&i){let a=this._chipActions.filter(c=>c._isPrimary===i._isPrimary&&!this._skipPredicate(c)),r=a.indexOf(i),l=e.keyCode===38?-1:1;e.preventDefault(),r>-1&&this._isValidIndex(r+l)&&this._keyManager.setActiveItem(a[r+l])}else super._handleKeydown(e);this.stateChanges.next()}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new fa(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-chip-grid"]],contentQueries:function(t,i,a){if(t&1&&Me(a,$m,5),t&2){let r;C(r=w())&&(i._chips=r)}},hostAttrs:[1,"mat-mdc-chip-set","mat-mdc-chip-grid","mdc-evolution-chip-set"],hostVars:10,hostBindings:function(t,i){t&1&&N("focus",function(){return i.focus()})("blur",function(){return i._blur()}),t&2&&(y("role",i.role)("tabindex",i.disabled||i._chips&&i._chips.length===0?-1:i.tabIndex)("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState),M("mat-mdc-chip-list-disabled",i.disabled)("mat-mdc-chip-list-invalid",i.errorState)("mat-mdc-chip-list-required",i.required))},inputs:{disabled:[2,"disabled","disabled",b],placeholder:"placeholder",required:[2,"required","required",b],value:"value",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},features:[U([{provide:Yt,useExisting:n}]),W],ngContentSelectors:dl,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&(Y(),fe(0,"div",0),A(1),ve())},styles:[Qm],encapsulation:2,changeDetection:0})}return n})(),hC=(()=>{class n{_elementRef=s(D);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new T;placeholder="";id=s(Q).getId("mat-mdc-chip-list-input-");get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=s(ml),t=s(dt,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add("mat-mdc-form-field-input-control")}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=""}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let i,a;typeof t=="number"?(i=t,a=null):(i=t.keyCode,a=t.modifiers);let r=a?.length?K(e,...a):!K(e);if(i===e.keyCode&&r)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-mdc-chip-input","mat-mdc-input-element","mdc-text-field__input","mat-input-element"],hostVars:8,hostBindings:function(t,i){t&1&&N("keydown",function(r){return i._keydown(r)})("blur",function(){return i._blur()})("focus",function(){return i._focus()})("input",function(){return i._onInput()}),t&2&&(xe("id",i.id),y("disabled",i.disabled&&!i.disabledInteractive?"":null)("placeholder",i.placeholder||null)("aria-invalid",i._chipGrid&&i._chipGrid.ngControl?i._chipGrid.ngControl.invalid:null)("aria-required",i._chipGrid&&i._chipGrid.required||null)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("readonly",i._getReadonlyAttribute())("required",i._chipGrid&&i._chipGrid.required||null))},inputs:{chipGrid:[0,"matChipInputFor","chipGrid"],addOnBlur:[2,"matChipInputAddOnBlur","addOnBlur",b],separatorKeyCodes:[0,"matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",disabled:[2,"disabled","disabled",b],readonly:[2,"readonly","readonly",b],disabledInteractive:[2,"matChipInputDisabledInteractive","disabledInteractive",b]},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[ne]})}return n})();var ba=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({providers:[Kt,{provide:ml,useValue:{separatorKeyCodes:[13]}}],imports:[Rt,P]})}return n})();var va=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[P]})}return n})();var Xm=["mat-menu-item",""],Zm=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],Jm=["mat-icon, [matMenuItemIcon]","*"];function eh(n,o){n&1&&(Ee(),h(0,"svg",2),q(1,"polygon",3),x())}var th=["*"];function ih(n,o){if(n&1){let e=at();fe(0,"div",0),on("click",function(){Te(e);let i=V();return Oe(i.closed.emit("click"))})("animationstart",function(i){Te(e);let a=V();return Oe(a._onAnimationStart(i.animationName))})("animationend",function(i){Te(e);let a=V();return Oe(a._onAnimationDone(i.animationName))})("animationcancel",function(i){Te(e);let a=V();return Oe(a._onAnimationDone(i.animationName))}),fe(1,"div",1),A(2),ve()()}if(n&2){let e=V();ye(e._classList),M("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),xe("id",e.panelId),y("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var Ca=new d("MAT_MENU_PANEL"),ya=(()=>{class n{_elementRef=s(D);_document=s(z);_focusMonitor=s(Ve);_parentMenu=s(Ca,{optional:!0});_changeDetectorRef=s(ee);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new _;_focused=new _;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(re).load(mt),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,i){t&1&&N("click",function(r){return i._checkDisabled(r)})("mouseenter",function(){return i._handleMouseEnter()}),t&2&&(y("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),M("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",b],disableRipple:[2,"disableRipple","disableRipple",b]},exportAs:["matMenuItem"],attrs:Xm,ngContentSelectors:Jm,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,i){t&1&&(Y(Zm),A(0),h(1,"span",0),A(2,1),x(),q(3,"div",1),O(4,eh,2,0,":svg:svg",2)),t&2&&(m(3),G("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),m(),F(i._triggersSubmenu?4:-1))},dependencies:[Tn],encapsulation:2,changeDetection:0})}return n})();var nh=new d("MatMenuContent");var oh=new d("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),xa="_mat-menu-enter",$n="_mat-menu-exit",Kn=(()=>{class n{_elementRef=s(D);_changeDetectorRef=s(ee);_injector=s(L);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=X();_allItems;_directDescendantItems=new Ft;_classList={};_panelAnimationState="void";_animationDone=new _;_isAnimating=$(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,i=I({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{i[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{i[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new T;close=this.closed;panelId=s(Q).getId("mat-menu-panel-");constructor(){let e=s(oh);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Gt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(ae(this._directDescendantItems),Ae(e=>me(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let i=e.toArray(),a=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[a]&&!i[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(ae(this._directDescendantItems),Ae(t=>me(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:K(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=be(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ge(I({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===$n;(t||e===xa)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===xa||e===$n)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone($n),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?xa:$n)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(ae(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-menu"]],contentQueries:function(t,i,a){if(t&1&&Me(a,nh,5)(a,ya,5)(a,ya,4),t&2){let r;C(r=w())&&(i.lazyContent=r.first),C(r=w())&&(i._allItems=r),C(r=w())&&(i.items=r)}},viewQuery:function(t,i){if(t&1&&J(Ze,5),t&2){let a;C(a=w())&&(i.templateRef=a.first)}},hostVars:3,hostBindings:function(t,i){t&2&&y("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",b],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:b(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[U([{provide:Ca,useExisting:n}])],ngContentSelectors:th,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,i){t&1&&(Y(),vi(0,ih,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),ah=new d("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(L);return()=>$e(n)}});var fi=new WeakMap,rh=(()=>{class n{_canHaveBackdrop;_element=s(D);_viewContainerRef=s(Ue);_menuItemInstance=s(ya,{optional:!0,self:!0});_dir=s(ue,{optional:!0});_focusMonitor=s(Ve);_ngZone=s(R);_injector=s(L);_scrollStrategy=s(ah);_changeDetectorRef=s(ee);_animationsDisabled=X();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=oe.EMPTY;_menuCloseSubscription=oe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=s(Ca,{optional:!0});this._parentMaterialMenu=t instanceof Kn?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&fi.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=fi.get(t);fi.set(t,this),i&&i!==this&&i._closeMenu();let a=this._createOverlay(t),r=a.getConfig(),l=r.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Kn&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(j(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Kn&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(ke(1)).subscribe(()=>{t.detach(),fi.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&fi.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Ke(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Kn&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new Qe({positionStrategy:pt(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let a=i.connectionPair.overlayX==="start"?"after":"before",r=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,r)})})}_setPosition(e,t){let[i,a]=e.xPosition==="before"?["end","start"]:["start","end"],[r,l]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,g]=[r,l],[u,B]=[i,a],te=0;if(this._triggersSubmenu()){if(B=i=e.xPosition==="before"?"start":"end",a=u=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let le=this._parentMaterialMenu.items.first;this._parentInnerPadding=le?le._getHostElement().offsetTop:0}te=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(c=r==="top"?"bottom":"top",g=l==="top"?"bottom":"top");t.withPositions([{originX:i,originY:c,overlayX:u,overlayY:r,offsetY:te},{originX:a,originY:c,overlayX:B,overlayY:r,offsetY:te},{originX:i,originY:g,overlayX:u,overlayY:l,offsetY:-te},{originX:a,originY:g,overlayX:B,overlayY:l,offsetY:-te}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:De(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(ie(r=>this._menuOpen&&r!==this._menuItemInstance)):De();return me(e,i,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new je(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return fi.get(e)===this}_triggerIsAriaDisabled(){return b(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Ba()};static \u0275dir=v({type:n})}return n})(),HC=(()=>{class n extends rh{_cleanupTouchstart;_hoverSubscription=oe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new T;onMenuOpen=this.menuOpened;menuClosed=new T;onMenuClose=this.menuClosed;constructor(){super(!0);let e=s(Z);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{zt(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Bt(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=v({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,i){t&1&&N("click",function(r){return i._handleClick(r)})("mousedown",function(r){return i._handleMousedown(r)})("keydown",function(r){return i._handleKeydown(r)}),t&2&&y("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[W]})}return n})();var wa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[Rt,Le,P,Ye]})}return n})();var qC=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=Be(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=Be(e)}_inset=!1;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,i){t&2&&(y("aria-orientation",i.vertical?"vertical":"horizontal"),M("mat-divider-vertical",i.vertical)("mat-divider-horizontal",!i.vertical)("mat-divider-inset",i.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return n})(),Da=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[P]})}return n})();var ul=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=p({imports:[ra,sa,la,na,nt,Qi,qi,Xt,oa,ca,ma,ba,nt,Qi,Xt,aa,va,wa,Da,ra,sa,la,na,nt,Qi,qi,Xt,oa,ca,ma,ba,nt,Qi,Xt,aa,va,wa,Da]})};export{ar as a,yt as b,wh as c,Dh as d,Sh as e,Ul as f,Vt as g,$l as h,Mh as i,Eh as j,Cr as k,H as l,Ri as m,To as n,Q as o,Kr as p,X as q,zo as r,Hc as s,Ho as t,Wc as u,An as v,Et as w,je as x,li as y,ci as z,Qe as A,ui as B,Ke as C,Mt as D,Os as E,Zo as F,Ob as G,Yn as H,Bd as I,Ws as J,x0 as K,na as L,tv as M,wv as N,oa as O,Ly as P,Am as Q,dC as R,$m as S,mC as T,hC as U,Pv as V,ya as W,Kn as X,HC as Y,qC as Z,ul as _};
