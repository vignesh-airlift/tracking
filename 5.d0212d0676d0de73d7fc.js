(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{X3zk:function(t,e,i){"use strict";i.r(e),i.d(e,"LoginModule",(function(){return H}));var n=i("ofXK"),o=i("tyNb"),r=i("R0Ic"),s=i("3Pt+"),l=i("fXoL"),a=i("0IaG"),c=i("bSwM"),d=i("bTqV"),u=i("kmnG"),g=i("nLfN"),p=i("8LU1"),h=i("EY2u"),b=i("XNiG");i("xgIS"),i("3UWI"),i("1G5W");const m=Object(g.f)({passive:!0});let f=(()=>{class t{constructor(t,e){this._platform=t,this._ngZone=e,this._monitoredElements=new Map}monitor(t){if(!this._platform.isBrowser)return h.a;const e=Object(p.e)(t),i=this._monitoredElements.get(e);if(i)return i.subject;const n=new b.a,o="cdk-text-field-autofilled",r=t=>{"cdk-text-field-autofill-start"!==t.animationName||e.classList.contains(o)?"cdk-text-field-autofill-end"===t.animationName&&e.classList.contains(o)&&(e.classList.remove(o),this._ngZone.run(()=>n.next({target:t.target,isAutofilled:!1}))):(e.classList.add(o),this._ngZone.run(()=>n.next({target:t.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{e.addEventListener("animationstart",r,m),e.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(e,{subject:n,unlisten:()=>{e.removeEventListener("animationstart",r,m)}}),n}stopMonitoring(t){const e=Object(p.e)(t),i=this._monitoredElements.get(e);i&&(i.unlisten(),i.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}ngOnDestroy(){this._monitoredElements.forEach((t,e)=>this.stopMonitoring(e))}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(g.a),l.Wb(l.A))},t.\u0275prov=Object(l.Ib)({factory:function(){return new t(Object(l.Wb)(g.a),Object(l.Wb)(l.A))},token:t,providedIn:"root"}),t})(),y=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[g.b]]}),t})();var v=i("FKr1");const _=new l.r("MAT_INPUT_VALUE_ACCESSOR"),x=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let C=0;class w{constructor(t,e,i,n){this._defaultErrorStateMatcher=t,this._parentForm=e,this._parentFormGroup=i,this.ngControl=n}}const S=Object(v.x)(w);let O=(()=>{class t extends S{constructor(t,e,i,n,o,r,s,l,a,c){super(r,n,o,i),this._elementRef=t,this._platform=e,this.ngControl=i,this._autofillMonitor=l,this._formField=c,this._uid="mat-input-"+C++,this.focused=!1,this.stateChanges=new b.a,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>Object(g.e)().has(t));const d=this._elementRef.nativeElement,u=d.nodeName.toLowerCase();this._inputValueAccessor=s||d,this._previousNativeValue=this.value,this.id=this.id,e.IOS&&a.runOutsideAngular(()=>{t.nativeElement.addEventListener("keyup",t=>{let e=t.target;e.value||e.selectionStart||e.selectionEnd||(e.setSelectionRange(1,1),e.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===u,this._isTextarea="textarea"===u,this._isNativeSelect&&(this.controlType=d.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=Object(p.c)(t),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(t){this._id=t||this._uid}get required(){return this._required}set required(t){this._required=Object(p.c)(t)}get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Object(g.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(t){t!==this.value&&(this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Object(p.c)(t)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}_focusChanged(t){t===this.focused||this.readonly&&t||(this.focused=t,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var t,e;const i=(null===(e=null===(t=this._formField)||void 0===t?void 0:t._hideControlPlaceholder)||void 0===e?void 0:e.call(t))?null:this.placeholder;if(i!==this._previousPlaceholder){const t=this._elementRef.nativeElement;this._previousPlaceholder=i,i?t.setAttribute("placeholder",i):t.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_validateType(){x.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}return this.focused||!this.empty}setDescribedByIds(t){t.length?this._elementRef.nativeElement.setAttribute("aria-describedby",t.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(l.l),l.Mb(g.a),l.Mb(s.m,10),l.Mb(s.p,8),l.Mb(s.h,8),l.Mb(v.c),l.Mb(_,10),l.Mb(f),l.Mb(l.A),l.Mb(u.a,8))},t.\u0275dir=l.Hb({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(t,e){1&t&&l.Zb("focus",(function(){return e._focusChanged(!0)}))("blur",(function(){return e._focusChanged(!1)}))("input",(function(){return e._onInput()})),2&t&&(l.Vb("disabled",e.disabled)("required",e.required),l.Bb("id",e.id)("data-placeholder",e.placeholder)("readonly",e.readonly&&!e._isNativeSelect||null)("aria-invalid",e.errorState)("aria-required",e.required.toString()),l.Eb("mat-input-server",e._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[l.zb([{provide:u.c,useExisting:t}]),l.xb,l.yb]}),t})(),R=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},providers:[v.c],imports:[[y,u.d],y,u.d]}),t})();var M=i("NFeN");function A(t,e){if(1&t){const t=l.Tb();l.Sb(0,"input",3),l.Zb("keydown",(function(e){return l.sc(t),l.dc(2).onKeyDown(e)}))("keyup",(function(i){l.sc(t);const n=e.index;return l.dc(2).onKeyUp(i,n)})),l.Rb()}if(2&t){const t=e.$implicit,i=e.index,n=l.dc(2);l.Db("otp-input ",n.config.inputClass,""),l.lc("id","otp_",i,"_",n.componentKey,""),l.ic("pattern",n.config.allowNumbersOnly?"\\d*":"")("type",n.inputType)("placeholder",(null==n.config?null:n.config.placeholder)||"")("disabledNumberOnly",!n.config.allowNumbersOnly)("ngStyle",n.config.inputStyles)("formControl",n.otpForm.controls[t])}}function k(t,e){if(1&t&&(l.Sb(0,"div",1),l.Bc(1,A,1,11,"input",2),l.ec(2,"keys"),l.Rb()),2&t){const t=l.dc();l.Db("wrapper ",t.config.containerClass,""),l.kc("id","c_",t.componentKey,""),l.ic("ngStyle",t.config.containerStyles),l.Ab(1),l.ic("ngForOf",l.fc(2,6,null==t.otpForm?null:t.otpForm.controls))}}let P=(()=>{class t{transform(t){return Object.keys(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=l.Lb({name:"keys",type:t,pure:!0}),t})(),N=(()=>{class t{constructor(t){this.keysPipe=t,this.config={length:4},this.onInputChange=new l.o,this.inputControls=new Array(this.config.length),this.componentKey=Math.random().toString(36).substring(2)+(new Date).getTime().toString(36)}ngOnInit(){this.otpForm=new s.g({});for(let t=0;t<this.config.length;t++)this.otpForm.addControl(this.getControlName(t),new s.d);this.inputType=this.getInputType()}ngAfterViewInit(){if(!this.config.disableAutoFocus){const t=document.getElementById("c_"+this.componentKey);if(t){t.addEventListener("paste",t=>this.handlePaste(t));const e=t.getElementsByClassName("otp-input")[0];e&&e.focus&&e.focus()}}}getControlName(t){return"ctrl_"+t}ifLeftArrow(t){return this.ifKeyCode(t,37)}ifRightArrow(t){return this.ifKeyCode(t,39)}ifBackspaceOrDelete(t){return"Backspace"===t.key||"Delete"===t.key||this.ifKeyCode(t,8)||this.ifKeyCode(t,46)}ifKeyCode(t,e){return(t.keyCode||t.charCode)==e}onKeyDown(t){if(this.ifKeyCode(t,32))return!1}onKeyUp(t,e){const i=this.appendKey("otp_"+(e+1)),n=this.appendKey("otp_"+(e-1));if(this.ifRightArrow(t))this.setSelected(i);else{if(!this.ifLeftArrow(t))return this.ifBackspaceOrDelete(t)&&!t.target.value?(this.setSelected(n),void this.rebuildValue()):void(t.target.value&&(this.ifValidEntry(t)&&this.setSelected(i),this.rebuildValue()));this.setSelected(n)}}appendKey(t){return`${t}_${this.componentKey}`}setSelected(t){this.focusTo(t);const e=document.getElementById(t);e&&e.setSelectionRange&&setTimeout(()=>{e.setSelectionRange(0,1)},0)}ifValidEntry(t){const e=String.fromCharCode(t.keyCode);return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/[a-zA-Z0-9-_]/.test(e)||this.config.allowKeyCodes&&this.config.allowKeyCodes.includes(t.keyCode)||t.keyCode>=96&&t.keyCode<=105}focusTo(t){const e=document.getElementById(t);e&&e.focus()}setValue(t){if(!this.config.allowNumbersOnly||!isNaN(t))if(this.otpForm.reset(),t){if(t=t.toString().replace(/\s/g,""),Array.from(t).forEach((t,e)=>{this.otpForm.get(this.getControlName(e))&&this.otpForm.get(this.getControlName(e)).setValue(t)}),!this.config.disableAutoFocus){const i=document.getElementById("c_"+this.componentKey);var e=t.length<this.config.length?t.length:this.config.length-1;let n=i.getElementsByClassName("otp-input")[e];n&&n.focus&&n.focus()}this.rebuildValue()}else this.rebuildValue()}rebuildValue(){let t="";this.keysPipe.transform(this.otpForm.controls).forEach(e=>{this.otpForm.controls[e].value&&(t+=this.otpForm.controls[e].value)}),this.onInputChange.emit(t)}getInputType(){return this.config.isPasswordInput?"password":this.config.allowNumbersOnly?"tel":"text"}handlePaste(t){let e=t.clipboardData||window.clipboardData;if(e)var i=e.getData("Text");t.stopPropagation(),t.preventDefault(),i&&this.setValue(i)}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(P))},t.\u0275cmp=l.Gb({type:t,selectors:[["ng-otp-input"]],inputs:{config:"config"},outputs:{onInputChange:"onInputChange"},decls:1,vars:1,consts:[[3,"class","id","ngStyle",4,"ngIf"],[3,"id","ngStyle"],["numberOnly","","maxlength","1","autocomplete","off",3,"pattern","type","placeholder","disabledNumberOnly","ngStyle","class","formControl","id","keydown","keyup",4,"ngFor","ngForOf"],["numberOnly","","maxlength","1","autocomplete","off",3,"pattern","type","placeholder","disabledNumberOnly","ngStyle","formControl","id","keydown","keyup"]],template:function(t,e){1&t&&l.Bc(0,k,3,8,"div",0),2&t&&l.ic("ngIf",null==e.otpForm?null:e.otpForm.controls)},directives:function(){return[n.k,n.l,n.j,s.b,I,s.j,s.s,s.n,s.e]},pipes:function(){return[P]},styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]}),t})(),I=(()=>{class t{constructor(t,e){this._elRef=t,this._renderer=e}ngOnInit(){this.disabledNumberOnly||this._renderer.setAttribute(this._elRef.nativeElement,"onkeypress","return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0")}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(l.l),l.Mb(l.F))},t.\u0275dir=l.Hb({type:t,selectors:[["","numberOnly",""]],inputs:{disabledNumberOnly:"disabledNumberOnly"}}),t})(),E=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},providers:[P],imports:[[n.c,s.i,s.t]]}),t})();function D(t,e){if(1&t&&l.Nb(0,"img",25),2&t){const t=l.dc();l.ic("src",t.current,l.uc)}}function j(t,e){1&t&&(l.Sb(0,"div",26),l.Dc(1," Enter valid User Id "),l.Rb())}function F(t,e){1&t&&(l.Sb(0,"div",26),l.Dc(1," Enter valid Password "),l.Rb())}const B=function(){return{standalone:!0}};function K(t,e){1&t&&(l.Sb(0,"div"),l.Sb(1,"div",5),l.Dc(2," Forgot Password? "),l.Rb(),l.Sb(3,"div",6),l.Nb(4,"img",7),l.Rb(),l.Sb(5,"div",8),l.Dc(6," Enter the email address associated with your account. "),l.Rb(),l.Sb(7,"div",9),l.Dc(8," We will send your manager/admin a link to reset your password "),l.Rb(),l.Sb(9,"mat-form-field",10),l.Sb(10,"mat-label"),l.Dc(11,"Enter Email Address "),l.Rb(),l.Nb(12,"input",11),l.Sb(13,"mat-icon",12),l.Dc(14,"arrow_forward"),l.Rb(),l.Rb(),l.Rb()),2&t&&l.ic("@myAnimation",void 0)}function V(t,e){if(1&t&&(l.Sb(0,"div"),l.Sb(1,"div",5),l.Dc(2," Email Sent "),l.Rb(),l.Sb(3,"div",6),l.Nb(4,"img",13),l.Rb(),l.Sb(5,"div",8),l.Dc(6," Enter the verification code we just sent you on your email address. "),l.Rb(),l.Sb(7,"div",6),l.Dc(8),l.Rb(),l.Rb()),2&t){const t=l.dc();l.ic("@myAnimation",void 0),l.Ab(8),l.Fc(" ",t.email," ")}}const T=function(t){return{"active-circle":t}},L=".airlift-logo[_ngcontent-%COMP%]{position:relative;left:-18px;width:175px;height:75px;margin:50px 0 30px}.airlift-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.welcome-text[_ngcontent-%COMP%]{height:60px;color:var(--black);display:flex;align-items:center}.back-text[_ngcontent-%COMP%]{color:var(--blue);padding:0 4px}.mail-icon[_ngcontent-%COMP%]{position:relative;top:5px}.container[_ngcontent-%COMP%]{width:100%;height:100%}.img[_ngcontent-%COMP%]{width:100%}.field-90[_ngcontent-%COMP%]{width:90%;height:60px;border:none;border-bottom:1px solid #d6d6d6;outline:none}.field-90[_ngcontent-%COMP%]:focus{border-bottom:1px solid var(--blue);box-shadow:0 4px 4px -4px var(--blue)}.field-margin[_ngcontent-%COMP%]{margin:10px 0}.visible-icon[_ngcontent-%COMP%]{position:relative;right:30px;color:var(--blue)}.login-btn[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #d4d9e2;background-image:linear-gradient(351deg,#1e8fe1 97%,#7bbae6 0)}.margin-container[_ngcontent-%COMP%]{margin:40px 0 15px;padding-left:15px}.color-greyish[_ngcontent-%COMP%]{color:var(--greyish)}.forgot-pwd[_ngcontent-%COMP%]{text-align:right}.login-form[_ngcontent-%COMP%]{margin:10px 0;width:75%}.field-space[_ngcontent-%COMP%]{margin:30px 0 10px}.forgot-title[_ngcontent-%COMP%]{font-size:25px}.email-text[_ngcontent-%COMP%], .forgot-title[_ngcontent-%COMP%]{color:var(--dark);text-align:center}.email-text[_ngcontent-%COMP%]{margin:10px auto;width:48%}.link-text[_ngcontent-%COMP%]{font-size:12px;color:var(--pinkish-grey);width:52%;text-align:center;margin:10px auto}.forgot-email[_ngcontent-%COMP%]{color:#cecece;margin:0 auto;display:flex}.forgot-email[_ngcontent-%COMP%], .mat-form-field-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:#fff}.forgot-circle[_ngcontent-%COMP%]{height:10px;width:10px;border-radius:50%;background-color:#1a1a1a;opacity:.3;margin:0 4px}.active-circle[_ngcontent-%COMP%]{background-color:var(--blue);opacity:1}.center-otp-icon[_ngcontent-%COMP%]{align-self:center;position:relative;left:16px}.forgot-footer[_ngcontent-%COMP%]{margin:5px 0}.copy-right[_ngcontent-%COMP%]{color:var(--greyish);text-align:center}.img-outer[_ngcontent-%COMP%]{width:90%;margin:auto}",q=function(){return{length:4}};let Z=(()=>{class t{constructor(t,e){this.fb=t,this.dialog=e,this.current="",this.in=0,this.img_list=["../assets/login/login-1.png","../assets/login/login-2.png","../assets/login/login-3.png","../assets/login/login-4.png"],this.remember_me=!1,this.showText=!1,this.visible="visibility",this.blueColor="primary"}ngOnInit(){this.loginForm=this.fb.group({email:["",[s.u.required]],password:["",[s.u.required]]}),setInterval(()=>{this.in=++this.in%this.img_list.length,this.current=this.img_list[this.in]},2e3)}rememberMe(){}tooglePwd(t){this.showText=t;const e=document.getElementById("login-pwd");t?(this.visible="visibility_off",e.setAttribute("type","text")):(this.visible="visibility",e.setAttribute("type","password"))}openForgotDialog(){this.dialog.open(G,{width:"492px",disableClose:!0}).afterClosed().subscribe(t=>{console.log("Dialog result: "+t)})}getOtp(){this.dialog.open(U,{width:"492px",disableClose:!0}).afterClosed().subscribe(t=>{console.log("Dialog result: "+t)})}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(s.c),l.Mb(a.b))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-login"]],decls:39,vars:10,consts:[[1,"d-flex","full-height"],[1,"width-60"],[1,"full-height","img-outer"],["class","img full-height",3,"src",4,"ngIf"],[1,"width-40","margin-container"],[1,"airlift-logo"],["src","../../assets/img/logo.png"],[1,"welcome-text","fw-500","f-size"],[1,"back-text"],[1,"d-flex-wrap","login-form",3,"formGroup","ngSubmit"],[1,"fw-500","field-space"],[1,"material-icons","mail-icon"],[1,"field-margin"],["type","text","formControlName","email","placeholder","Enter your User Id",1,"field-90"],["class","error-class ",4,"ngIf"],["id","login-pwd","type","password","formControlName","password","placeholder","Enter your Password",1,"field-90"],[1,"material-icons","visible-icon",3,"click"],["visibility",""],["class","error-class",4,"ngIf"],[1,"d-flex","color-greyish","font-14","field-space"],[1,"example-margin","width-40",3,"color","ngModel","ngModelOptions","change","ngModelChange"],[1,"width-50","forgot-pwd"],[1,"cursor-pointer",3,"click"],["mat-raised-button","","color","primary",1,"field-margin","field-90","login-btn","field-space",3,"disabled"],[1,"copy-right","width-60","font-10"],[1,"img","full-height",3,"src"],[1,"error-class"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Bc(3,D,1,1,"img",3),l.Rb(),l.Rb(),l.Sb(4,"div",4),l.Sb(5,"div",5),l.Nb(6,"img",6),l.Rb(),l.Sb(7,"div",7),l.Dc(8," Hey there! Welcome "),l.Sb(9,"span",8),l.Dc(10," Back."),l.Rb(),l.Rb(),l.Sb(11,"form",9),l.Zb("ngSubmit",(function(){return e.getOtp()})),l.Sb(12,"div",10),l.Sb(13,"span",11),l.Dc(14," mail_outline "),l.Rb(),l.Dc(15," USER ID "),l.Rb(),l.Sb(16,"div",12),l.Nb(17,"input",13),l.Bc(18,j,2,0,"div",14),l.Rb(),l.Sb(19,"div",10),l.Sb(20,"span",11),l.Dc(21," lock "),l.Rb(),l.Dc(22," PASSWORD "),l.Rb(),l.Sb(23,"div",12),l.Nb(24,"input",15),l.Sb(25,"span",16,17),l.Zb("click",(function(){return e.tooglePwd(!e.showText)})),l.Dc(27),l.Rb(),l.Bc(28,F,2,0,"div",18),l.Rb(),l.Sb(29,"div",19),l.Sb(30,"mat-checkbox",20),l.Zb("change",(function(){return e.rememberMe()}))("ngModelChange",(function(t){return e.remember_me=t})),l.Dc(31," Remember Me "),l.Rb(),l.Sb(32,"div",21),l.Sb(33,"span",22),l.Zb("click",(function(){return e.openForgotDialog()})),l.Dc(34," Forgot Password? "),l.Rb(),l.Rb(),l.Rb(),l.Sb(35,"button",23),l.Dc(36,"Login"),l.Rb(),l.Rb(),l.Sb(37,"div",24),l.Dc(38," Copyright \xa9 2020 Airlift USA INC. All rights reserved. "),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.Ab(3),l.ic("ngIf",e.current),l.Ab(8),l.ic("formGroup",e.loginForm),l.Ab(7),l.ic("ngIf","INVALID"==e.loginForm.controls.email.status&&e.loginForm.controls.email.touched),l.Ab(9),l.Fc(" ",e.visible," "),l.Ab(1),l.ic("ngIf","INVALID"==e.loginForm.controls.password.status&&e.loginForm.controls.password.touched),l.Ab(2),l.ic("color",e.blueColor)("ngModel",e.remember_me)("ngModelOptions",l.mc(9,B)),l.Ab(5),l.ic("disabled",!e.loginForm.valid))},directives:[n.k,s.v,s.o,s.h,s.b,s.n,s.f,c.a,s.q,d.a],styles:[L]}),t})(),G=(()=>{class t{constructor(){this.currentNav="email",this.email="surya@airliftusa.com".replace("(?=.*@)/","*")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Gb({type:t,selectors:[["forgot-dialog"]],decls:9,vars:9,consts:[[1,"d-flex","justify-end"],[1,"material-icons","cursor-pointer",3,"mat-dialog-close"],[4,"ngIf"],[1,"d-flex","forgot-footer","justify-center"],[1,"forgot-circle","cursor-pointer",3,"ngClass","click"],[1,"forgot-title","fw-500"],[1,"d-flex","justify-center"],["src","../../assets/login-svg/Airlift-Doubt.svg"],[1,"email-text"],[1,"link-text"],[1,"forgot-email","d-flex","width-50"],["matInput","","type","text"],["matSuffix",""],["src","../../assets/login-svg/Airlift-Happy.svg"]],template:function(t,e){1&t&&(l.Sb(0,"div"),l.Sb(1,"div",0),l.Sb(2,"span",1),l.Dc(3," close "),l.Rb(),l.Rb(),l.Bc(4,K,15,1,"div",2),l.Bc(5,V,9,2,"div",2),l.Sb(6,"div",3),l.Sb(7,"div",4),l.Zb("click",(function(){return e.currentNav="email"})),l.Rb(),l.Sb(8,"div",4),l.Zb("click",(function(){return e.currentNav="emailSent"})),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.Ab(2),l.ic("mat-dialog-close",!0),l.Ab(2),l.ic("ngIf","email"===e.currentNav),l.Ab(1),l.ic("ngIf","emailSent"===e.currentNav),l.Ab(2),l.ic("ngClass",l.nc(5,T,"email"===e.currentNav)),l.Ab(1),l.ic("ngClass",l.nc(7,T,"emailSent"===e.currentNav)))},directives:[a.d,n.k,n.i,u.b,u.e,O,M.a,u.f],styles:[L],data:{animation:[Object(r.n)("myAnimation",[Object(r.m)(":enter",[Object(r.l)({opacity:0}),Object(r.e)("800ms",Object(r.l)({opacity:1}))])])]}}),t})(),U=(()=>{class t{constructor(){this.currentNav="email",this.email="surya@airliftusa.com".replace("(?=.*@)/","*")}onOtpChange(t){console.log(t,"event")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Gb({type:t,selectors:[["otp-dialog"]],decls:16,vars:5,consts:[[1,"d-flex","justify-end"],[1,"material-icons","cursor-pointer",3,"mat-dialog-close"],[1,"forgot-title","fw-500"],[1,"d-flex","justify-center"],["src","../../assets/login-svg/Airlift-Happy.svg"],[1,"email-text"],[1,"d-flex","justify-center",2,"margin","15px 0"],[3,"config","onInputChange"],[1,"center-otp-icon"],["src","../../assets/login-svg/OTP-Correct.svg"]],template:function(t,e){1&t&&(l.Sb(0,"div",0),l.Sb(1,"span",1),l.Dc(2," close "),l.Rb(),l.Rb(),l.Sb(3,"div"),l.Sb(4,"div",2),l.Dc(5," OTP Verification "),l.Rb(),l.Sb(6,"div",3),l.Nb(7,"img",4),l.Rb(),l.Sb(8,"div",5),l.Dc(9," Enter the verification code we just sent you on your email address. "),l.Rb(),l.Sb(10,"div",3),l.Dc(11),l.Rb(),l.Sb(12,"div",6),l.Sb(13,"ng-otp-input",7),l.Zb("onInputChange",(function(t){return e.onOtpChange(t)})),l.Rb(),l.Sb(14,"div",8),l.Nb(15,"img",9),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.Ab(1),l.ic("mat-dialog-close",!0),l.Ab(2),l.ic("@myAnimation",void 0),l.Ab(8),l.Fc(" ",e.email," "),l.Ab(2),l.ic("config",l.mc(4,q)))},directives:[a.d,N],styles:[L],data:{animation:[Object(r.n)("myAnimation",[Object(r.m)(":enter",[Object(r.l)({opacity:0}),Object(r.e)("1000ms",Object(r.l)({opacity:1}))])])]}}),t})();const z=[{path:"",component:Z}];let W=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[o.d.forChild(z)],o.d]}),t})();var J=i("d3UM");let H=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[n.c,W,s.i,s.t,c.b,d.b,a.f,M.b,u.d,R,J.b,E]]}),t})()}}]);