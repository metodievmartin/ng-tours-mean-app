(self.webpackChunkng_tours_mean_app=self.webpackChunkng_tours_mean_app||[]).push([[372],{3372:(n,o,r)=>{"use strict";r.r(o),r.d(o,{AuthModule:()=>T});var t=r(8583),e=r(5406),i=r(665),s=r(7749),a=r(7716),l=r(4220),c=r(8332),g=r(2925);function m(n,o){if(1&n){const n=a.EpF();a.TgZ(0,"app-alert",7),a.NdJ("onClose",function(){return a.CHM(n),a.oxw().onAlertClose()})("onInit",function(){return a.CHM(n),a.oxw().onAlertInit()}),a.qZA()}if(2&n){const n=a.oxw();a.Q6J("message",n.error)}}function d(n,o){1&n&&(a.TgZ(0,"div"),a._UZ(1,"app-spinner"),a.qZA())}function p(n,o){1&n&&(a.TgZ(0,"p",17),a._uU(1," Please provide a valid email "),a.qZA())}function u(n,o){1&n&&(a.TgZ(0,"p",17),a._uU(1," Password must be at least 8 characters long "),a.qZA())}function f(n,o){if(1&n){const n=a.EpF();a.TgZ(0,"form",8),a.NdJ("ngSubmit",function(){return a.CHM(n),a.oxw().onSubmit()}),a.TgZ(1,"div",9),a.TgZ(2,"label",10),a._uU(3,"Email address"),a.qZA(),a._UZ(4,"input",11),a.YNc(5,p,2,0,"p",12),a.qZA(),a.TgZ(6,"div",13),a.TgZ(7,"label",14),a._uU(8,"Password"),a.qZA(),a._UZ(9,"input",15),a.YNc(10,u,2,0,"p",12),a.qZA(),a.TgZ(11,"div",9),a.TgZ(12,"button",16),a._uU(13," Login "),a.qZA(),a.qZA(),a.qZA()}if(2&n){const n=a.oxw();a.Q6J("formGroup",n.loginForm),a.xp6(5),a.Q6J("ngIf",(null==n.loginForm.controls.email.errors?null:n.loginForm.controls.email.errors.email)&&n.loginForm.controls.email.touched),a.xp6(5),a.Q6J("ngIf",(null==n.loginForm.controls.password.errors?null:n.loginForm.controls.password.errors.minlength)&&n.loginForm.controls.password.touched),a.xp6(2),a.Q6J("disabled",!n.loginForm.valid)}}let b=(()=>{class n{constructor(n){this.store=n,this.loading=!1,this.error=null,this.loginForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.minLength(8)])})}ngOnInit(){this.storeSubscription=this.store.select(n=>n.auth).subscribe(n=>{this.loading=n.loading,this.error=n.error})}onSubmit(){if(!this.loginForm.valid)return;const{email:n,password:o}=this.loginForm.value;this.store.dispatch(s.pC.login({email:n,password:o})),this.loginForm.controls.password.reset()}onAlertClose(){this.store.dispatch(s.uQ.clearError())}onAlertInit(){this.store.dispatch(s.uQ.notificationDisplayed())}ngOnDestroy(){this.storeSubscription&&this.storeSubscription.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(a.Y36(l.yh))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-login-page"]],decls:12,vars:3,consts:[["alertType","error",3,"message","onClose","onInit",4,"ngIf"],[1,"login-form"],[1,"heading-secondary","ma-bt-lg"],[4,"ngIf"],["class","form form--login",3,"formGroup","ngSubmit",4,"ngIf"],[1,"small-print"],["routerLink","/auth/register"],["alertType","error",3,"message","onClose","onInit"],[1,"form","form--login",3,"formGroup","ngSubmit"],[1,"form__group"],["for","email",1,"form__label"],["id","email","type","email","placeholder","you@example.com","formControlName","email",1,"form__input"],["class","error-notification",4,"ngIf"],[1,"form__group","ma-bt-md"],["for","password",1,"form__label"],["id","password","type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","formControlName","password",1,"form__input"],["type","submit",1,"btn","btn--green",3,"disabled"],[1,"error-notification"]],template:function(n,o){1&n&&(a.TgZ(0,"main"),a.YNc(1,m,1,1,"app-alert",0),a.TgZ(2,"div",1),a.TgZ(3,"h2",2),a._uU(4,"Log into your account"),a.qZA(),a.YNc(5,d,2,0,"div",3),a.YNc(6,f,14,4,"form",4),a.qZA(),a.TgZ(7,"div",5),a.TgZ(8,"p"),a._uU(9,"Haven't got an account? Create one now, it's free \u279c "),a.TgZ(10,"a",6),a._uU(11,"Sign Up"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(1),a.Q6J("ngIf",o.error),a.xp6(4),a.Q6J("ngIf",o.loading),a.xp6(1),a.Q6J("ngIf",!o.loading))},directives:[t.O5,e.yS,c.w,g.O,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u],styles:["main[_ngcontent-%COMP%]{background-color:#f7f7f7;padding:7rem 6rem 0;min-height:80vh;flex:1;position:relative}.login-form[_ngcontent-%COMP%]{margin:0 auto;max-width:55rem;background-color:#fff;box-shadow:0 2.5rem 8rem 2rem #0000000f;padding:5rem 7rem;border-radius:5px}.heading-secondary[_ngcontent-%COMP%]{font-size:2.25rem;text-transform:uppercase;font-weight:700;background-image:linear-gradient(90deg,#7dd56f,#28b487);-webkit-background-clip:text;color:#0000;letter-spacing:.1rem;line-height:1.3;display:inline-block}.ma-bt-lg[_ngcontent-%COMP%]{margin-bottom:3.5rem!important}.form__group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:2.5rem}.form__label[_ngcontent-%COMP%]{display:block;font-size:1.6rem;font-weight:700;margin-bottom:.75rem}.form__input[_ngcontent-%COMP%]{display:block;font-family:inherit;font-size:1.5rem;color:inherit;padding:1.25rem 1.75rem;width:100%;background-color:#fff;background-color:#f2f2f2;border:3px solid #0000;border-right:none;border-left:none;transition:all .3s;border-radius:4px;box-sizing:border-box}input[_ngcontent-%COMP%]:focus{outline:none}input.ng-dirty.ng-valid[_ngcontent-%COMP%]{border-bottom:3px solid #55c57a}input.ng-dirty.ng-invalid[_ngcontent-%COMP%]{border-bottom:3px solid #ff5c09}.form__input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#bbb}.error-notification[_ngcontent-%COMP%]{padding:.5rem;color:#ff5c09}.btn--green[_ngcontent-%COMP%]{color:#fff}.btn--green[_ngcontent-%COMP%], .btn--green[_ngcontent-%COMP%]:after{background-color:#55c57a}.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited{font-size:1.6rem;padding:1.4rem 3rem;border-radius:10rem;text-transform:uppercase;display:inline-block;text-decoration:none;position:relative;transition:all .4s;font-weight:400;-webkit-backface-visibility:hidden;backface-visibility:hidden;border:none;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 1rem 2rem #00000026}.btn[_ngcontent-%COMP%]:active{transform:translateY(-1px);box-shadow:0 .5rem 1rem #00000026}.btn[_ngcontent-%COMP%]:focus{outline:none;background-color:#2e864b}.btn[_ngcontent-%COMP%]:disabled{background:#999;cursor:default}.small-print[_ngcontent-%COMP%]{margin:0 auto;padding:1rem;max-width:55rem;text-align:end}.small-print[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem}.small-print[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#444}.small-print[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),n})();function _(n,o){if(1&n){const n=a.EpF();a.TgZ(0,"app-alert",7),a.NdJ("onClose",function(){return a.CHM(n),a.oxw().onAlertClose()})("onInit",function(){return a.CHM(n),a.oxw().onAlertInit()}),a.qZA()}if(2&n){const n=a.oxw();a.Q6J("message",n.error)}}function h(n,o){1&n&&(a.TgZ(0,"div"),a._UZ(1,"app-spinner"),a.qZA())}function C(n,o){1&n&&(a.TgZ(0,"p",19),a._uU(1," Name is required. Minimum 2 characters long "),a.qZA())}function w(n,o){1&n&&(a.TgZ(0,"p",19),a._uU(1," Please provide a valid email "),a.qZA())}function Z(n,o){1&n&&(a.TgZ(0,"p",19),a._uU(1," Password must be at least 8 characters long "),a.qZA())}function x(n,o){1&n&&(a.TgZ(0,"p",19),a._uU(1," Passwords don't match "),a.qZA())}const M=function(n){return{"pass-not-match":n}};function O(n,o){if(1&n){const n=a.EpF();a.TgZ(0,"form",8),a.NdJ("ngSubmit",function(){return a.CHM(n),a.oxw().onSubmit()}),a.TgZ(1,"div",9),a.TgZ(2,"label",10),a._uU(3,"Your name"),a.qZA(),a._UZ(4,"input",11),a.YNc(5,C,2,0,"p",12),a.qZA(),a.TgZ(6,"div",9),a.TgZ(7,"label",10),a._uU(8,"Email address"),a.qZA(),a._UZ(9,"input",13),a.YNc(10,w,2,0,"p",12),a.qZA(),a.TgZ(11,"div",14),a.TgZ(12,"label",15),a._uU(13,"Password"),a.qZA(),a._UZ(14,"input",16),a.YNc(15,Z,2,0,"p",12),a.qZA(),a.TgZ(16,"div",14),a.TgZ(17,"label",15),a._uU(18,"Confirm Password"),a.qZA(),a._UZ(19,"input",17),a.YNc(20,x,2,0,"p",12),a.qZA(),a.TgZ(21,"div",9),a.TgZ(22,"button",18),a._uU(23," Sign up "),a.qZA(),a.qZA(),a.qZA()}if(2&n){const n=a.oxw();a.Q6J("formGroup",n.registerForm),a.xp6(5),a.Q6J("ngIf",(null==n.registerForm.controls.name.errors?null:n.registerForm.controls.name.errors.minlength)&&n.registerForm.controls.name.touched),a.xp6(5),a.Q6J("ngIf",(null==n.registerForm.controls.email.errors?null:n.registerForm.controls.email.errors.email)&&n.registerForm.controls.email.touched),a.xp6(5),a.Q6J("ngIf",(null==n.registerForm.controls.password.errors?null:n.registerForm.controls.password.errors.minlength)&&n.registerForm.controls.password.touched),a.xp6(4),a.Q6J("ngClass",a.VKq(7,M,n.registerForm.controls.password.value!==n.registerForm.controls.passwordConfirm.value&&n.registerForm.controls.passwordConfirm.touched)),a.xp6(1),a.Q6J("ngIf",n.registerForm.controls.password.value!==n.registerForm.controls.passwordConfirm.value&&n.registerForm.controls.passwordConfirm.touched),a.xp6(2),a.Q6J("disabled",!n.registerForm.valid)}}let P=(()=>{class n{constructor(n){this.store=n,this.registerForm=new i.cw({name:new i.NI("",[i.kI.required,i.kI.minLength(2)]),email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required,i.kI.minLength(8)]),passwordConfirm:new i.NI("",[i.kI.required,i.kI.minLength(8)])}),this.loading=!1,this.error=null}ngOnInit(){this.storeSubscription=this.store.select(n=>n.auth).subscribe(n=>{this.loading=n.loading,this.error=n.error})}onSubmit(){if(!this.registerForm.valid)return;if(this.registerForm.controls.password.value!==this.registerForm.controls.passwordConfirm.value)return;const{name:n,email:o,password:r,passwordConfirm:t}=this.registerForm.value;this.store.dispatch(s.XQ.register({name:n,email:o,password:r,passwordConfirm:t})),this.registerForm.controls.password.reset(),this.registerForm.controls.passwordConfirm.reset()}onAlertInit(){this.store.dispatch(s.uQ.notificationDisplayed())}onAlertClose(){this.store.dispatch(s.uQ.clearError())}ngOnDestroy(){this.storeSubscription&&this.storeSubscription.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(a.Y36(l.yh))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-register-page"]],decls:12,vars:3,consts:[["alertType","error",3,"message","onClose","onInit",4,"ngIf"],[1,"login-form"],[1,"heading-secondary","ma-bt-lg"],[4,"ngIf"],["class","form form--login",3,"formGroup","ngSubmit",4,"ngIf"],[1,"small-print"],["routerLink","/auth/login"],["alertType","error",3,"message","onClose","onInit"],[1,"form","form--login",3,"formGroup","ngSubmit"],[1,"form__group"],["for","email",1,"form__label"],["id","name","type","text","placeholder","John Doe","formControlName","name",1,"form__input"],["class","error-notification",4,"ngIf"],["id","email","type","email","placeholder","you@example.com","formControlName","email",1,"form__input"],[1,"form__group","ma-bt-md"],["for","password",1,"form__label"],["id","password","type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","formControlName","password",1,"form__input"],["id","passwordConfirm","type","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","formControlName","passwordConfirm",1,"form__input",3,"ngClass"],["type","submit",1,"btn","btn--green",3,"disabled"],[1,"error-notification"]],template:function(n,o){1&n&&(a.TgZ(0,"main"),a.YNc(1,_,1,1,"app-alert",0),a.TgZ(2,"div",1),a.TgZ(3,"h2",2),a._uU(4,"Create your account"),a.qZA(),a.YNc(5,h,2,0,"div",3),a.YNc(6,O,24,9,"form",4),a.qZA(),a.TgZ(7,"div",5),a.TgZ(8,"p"),a._uU(9,"Already have an account? You can log in here \u279c "),a.TgZ(10,"a",6),a._uU(11,"Login"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(1),a.Q6J("ngIf",o.error),a.xp6(4),a.Q6J("ngIf",o.loading),a.xp6(1),a.Q6J("ngIf",!o.loading))},directives:[t.O5,e.yS,c.w,g.O,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,t.mk],styles:["main[_ngcontent-%COMP%]{background-color:#f7f7f7;padding:7rem 6rem 0;min-height:80vh;flex:1;position:relative}.login-form[_ngcontent-%COMP%]{margin:0 auto;max-width:55rem;background-color:#fff;box-shadow:0 2.5rem 8rem 2rem #0000000f;padding:5rem 7rem;border-radius:5px}.heading-secondary[_ngcontent-%COMP%]{font-size:2.25rem;text-transform:uppercase;font-weight:700;background-image:linear-gradient(90deg,#7dd56f,#28b487);-webkit-background-clip:text;color:#0000;letter-spacing:.1rem;line-height:1.3;display:inline-block}.ma-bt-lg[_ngcontent-%COMP%]{margin-bottom:3.5rem!important}.form__group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:2.5rem}.form__label[_ngcontent-%COMP%]{display:block;font-size:1.6rem;font-weight:700;margin-bottom:.75rem}.form__input[_ngcontent-%COMP%]{display:block;font-family:inherit;font-size:1.5rem;color:inherit;padding:1.25rem 1.75rem;width:100%;background-color:#fff;background-color:#f2f2f2;border:3px solid #0000;border-right:none;border-left:none;transition:all .3s;border-radius:4px;box-sizing:border-box}input[_ngcontent-%COMP%]:focus{outline:none}input.ng-dirty.ng-valid[_ngcontent-%COMP%]:not(.pass-not-match){border-bottom:3px solid #55c57a}input.ng-dirty.ng-invalid[_ngcontent-%COMP%], input.pass-not-match[_ngcontent-%COMP%]{border-bottom:3px solid #ff5c09}.form__input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#bbb}.error-notification[_ngcontent-%COMP%]{padding:.5rem;color:#ff5c09}.btn--green[_ngcontent-%COMP%]{color:#fff}.btn--green[_ngcontent-%COMP%], .btn--green[_ngcontent-%COMP%]:after{background-color:#55c57a}.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:link, .btn[_ngcontent-%COMP%]:visited{font-size:1.6rem;padding:1.4rem 3rem;border-radius:10rem;text-transform:uppercase;display:inline-block;text-decoration:none;position:relative;transition:all .4s;font-weight:400;-webkit-backface-visibility:hidden;backface-visibility:hidden;border:none;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 1rem 2rem #00000026}.btn[_ngcontent-%COMP%]:active{transform:translateY(-1px);box-shadow:0 .5rem 1rem #00000026}.btn[_ngcontent-%COMP%]:focus{outline:none;background-color:#2e864b}.btn[_ngcontent-%COMP%]:disabled{background:#999;cursor:default}.small-print[_ngcontent-%COMP%]{margin:0 auto;padding:1rem;max-width:55rem;text-align:end}.small-print[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem}.small-print[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#444}.small-print[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),n})();var v=r(306);const k=[{path:"",redirectTo:"/auth/login",pathMatch:"full"},{path:"login",component:b,canActivate:[v.a],data:{isAuthenticationRequired:!1}},{path:"register",component:P,canActivate:[v.a],data:{isAuthenticationRequired:!1}}];let A=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[e.Bz.forChild(k)],e.Bz]}),n})();var y=r(4466),q=r(1841),I=r(1601);let T=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[t.ez,A,i.UX,q.JF,y.m,I.sQ.forFeature()]]}),n})()}}]);