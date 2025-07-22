import{k as Ee,l as Oe}from"./chunk-6DOFGYVY.js";import{$ as be,Ca as S,Fa as ze,H as de,L as X,Na as $,Oa as Z,Pa as Se,Q as ge,Ya as Ve,eb as Le,ka as Be,o as Me,ua as U,va as v,x as Fe,y as De,z as J}from"./chunk-53KIEZSV.js";import{$c as re,Ab as h,Ac as z,Cc as Ce,Eb as f,Fb as T,Gb as j,Jb as P,Kb as R,Mb as L,Nb as l,Ob as C,Pa as he,Pb as x,Pc as G,Rc as xe,Sb as D,Tb as N,Ub as g,Uc as ke,V as Q,Va as c,Vb as b,Vc as W,W as I,X as M,Yb as ye,Zb as we,Zc as _,_b as _e,aa as m,ab as K,db as ie,ec as B,fd as Ie,gb as y,gc as H,gd as ce,hb as F,hc as $e,ia as V,id as pe,ja as E,kb as w,kd as ue,lb as fe,ma as p,mb as ne,nb as u,ra as oe,tc as Te,ua as A,ub as d,va as me,vb as r,wb as ve,xb as O,yb as ae,yc as k,zb as q,zc as se}from"./chunk-AKZD5Z4T.js";var Ge=["*"],We=({dt:e})=>`
    .p-fluid{
        width:100%
    }
`,Ue={root:"p-fluid"},je=(()=>{class e extends S{name="fluid";classes=Ue;theme=We;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var Ye=(()=>{class e extends ${_componentStyle=m(je);static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(i,o){i&2&&O("p-fluid",!0)},features:[B([je]),w],ngContentSelectors:Ge,decls:1,vars:0,template:function(i,o){i&1&&(C(),x(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),yo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[Ye]})}return e})();var Je=["previcon"],Xe=["nexticon"],Ze=["content"],et=["prevButton"],tt=["nextButton"],ot=["inkbar"],it=["tabs"],te=["*"],nt=e=>({"p-tablist-viewport":e});function at(e,s){e&1&&P(0)}function st(e,s){if(e&1&&u(0,at,1,0,"ng-container",11),e&2){let t=l(2);r("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function rt(e,s){e&1&&j(0,"ChevronLeftIcon")}function lt(e,s){if(e&1){let t=R();f(0,"button",10,3),L("click",function(){V(t);let o=l();return E(o.onPrevButtonClick())}),u(2,st,1,1,"ng-container")(3,rt,1,0,"ChevronLeftIcon"),T()}if(e&2){let t=l();d("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),c(2),h(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function ct(e,s){e&1&&P(0)}function pt(e,s){if(e&1&&u(0,ct,1,0,"ng-container",11),e&2){let t=l(2);r("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function ut(e,s){e&1&&j(0,"ChevronRightIcon")}function dt(e,s){if(e&1){let t=R();f(0,"button",12,4),L("click",function(){V(t);let o=l();return E(o.onNextButtonClick())}),u(2,pt,1,1,"ng-container")(3,ut,1,0,"ChevronRightIcon"),T()}if(e&2){let t=l();d("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),c(2),h(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function gt(e,s){e&1&&x(0)}var bt=({dt:e})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${e("tabs.tablist.background")};
    border-style: solid;
    border-color: ${e("tabs.tablist.border.color")};
    border-width: ${e("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("tabs.nav.button.background")};
    color: ${e("tabs.nav.button.color")};
    width: ${e("tabs.nav.button.width")};
    transition: color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    box-shadow: ${e("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.nav.button.focus.ring.shadow")};
    outline: ${e("tabs.nav.button.focus.ring.width")} ${e("tabs.nav.button.focus.ring.style")} ${e("tabs.nav.button.focus.ring.color")};
    outline-offset: ${e("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${e("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${e("tabs.tab.gap")};
    background: ${e("tabs.tab.background")};
    border-width: ${e("tabs.tab.border.width")};
    border-color: ${e("tabs.tab.border.color")};
    color: ${e("tabs.tab.color")};
    padding: ${e("tabs.tab.padding")};
    font-weight: ${e("tabs.tab.font.weight")};
    transition: background ${e("tabs.transition.duration")}, border-color ${e("tabs.transition.duration")}, color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    margin: ${e("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.tab.focus.ring.shadow")};
    outline: ${e("tabs.tab.focus.ring.width")} ${e("tabs.tab.focus.ring.style")} ${e("tabs.tab.focus.ring.color")};
    outline-offset: ${e("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${e("tabs.tab.hover.background")};
    border-color: ${e("tabs.tab.hover.border.color")};
    color: ${e("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${e("tabs.tab.active.background")};
    border-color: ${e("tabs.tab.active.border.color")};
    color: ${e("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${e("tabs.tabpanel.background")};
    color: ${e("tabs.tabpanel.color")};
    padding: ${e("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${e("tabs.tabpanel.focus.ring.shadow")};
    outline: ${e("tabs.tabpanel.focus.ring.width")} ${e("tabs.tabpanel.focus.ring.style")} ${e("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${e("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabs.active.bar.bottom")};
    height: ${e("tabs.active.bar.height")};
    background: ${e("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,mt={root:({props:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]},Pe=(()=>{class e extends S{name="tabs";theme=bt;classes=mt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var Ne=(()=>{class e extends ${prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=m(Q(()=>le));isPrevButtonEnabled=K(!1);isNextButtonEnabled=K(!1);resizeObserver;showNavigators=z(()=>this.pcTabs.showNavigators());tabindex=z(()=>this.pcTabs.tabindex());scrollable=z(()=>this.pcTabs.scrollable());constructor(){super(),Ce(()=>{this.pcTabs.value(),re(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&re(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=X(t),o=Math.abs(t.scrollLeft)-i,n=o<=0?0:o;t.scrollLeft=ge(t)?-1*n:n}onNextButtonClick(){let t=this.content.nativeElement,i=X(t)-this.getVisibleButtonWidths(),o=t.scrollLeft+i,n=t.scrollWidth-i,a=o>=n?n:o;t.scrollLeft=ge(t)?-1*a:a}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:o,offsetWidth:n}=t,a=Math.abs(t.scrollLeft),Y=X(t);this.isPrevButtonEnabled.set(a!==0),this.isNextButtonEnabled.set(i.offsetWidth>=n&&a!==o-Y)}updateInkBar(){let t=this.content?.nativeElement,i=this.inkbar?.nativeElement,o=this.tabs?.nativeElement,n=Fe(t,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=Me(n)+"px",i.style.left=de(n).left-de(o).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((o,n)=>n?o+X(n):o,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=y({type:e,selectors:[["p-tablist"]],contentQueries:function(i,o,n){if(i&1&&(D(n,Je,4),D(n,Xe,4),D(n,U,4)),i&2){let a;g(a=b())&&(o.prevIconTemplate=a.first),g(a=b())&&(o.nextIconTemplate=a.first),g(a=b())&&(o.templates=a)}},viewQuery:function(i,o){if(i&1&&(N(Ze,5),N(et,5),N(tt,5),N(ot,5),N(it,5)),i&2){let n;g(n=b())&&(o.content=n.first),g(n=b())&&(o.prevButton=n.first),g(n=b())&&(o.nextButton=n.first),g(n=b())&&(o.inkbar=n.first),g(n=b())&&(o.tabs=n.first)}},hostVars:5,hostBindings:function(i,o){i&2&&(d("data-pc-name","tablist"),O("p-tablist",!0)("p-component",!0))},features:[w],ngContentSelectors:te,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(i,o){if(i&1){let n=R();C(),u(0,lt,4,4,"button",5),f(1,"div",6,0),L("scroll",function(Y){return V(n),E(o.onScroll(Y))}),f(3,"div",7,1),x(5),j(6,"span",8,2),T()(),u(8,dt,4,4,"button",9)}i&2&&(h(o.showNavigators()&&o.isPrevButtonEnabled()?0:-1),c(),r("ngClass",H(4,nt,o.scrollable())),c(5),d("data-pc-section","inkbar"),c(2),h(o.showNavigators()&&o.isNextButtonEnabled()?8:-1))},dependencies:[_,G,W,Ee,Oe,Se,Z,v],encapsulation:2,changeDetection:0})}return e})(),ht=(()=>{class e extends ${value=ie();disabled=A(!1,{transform:k});pcTabs=m(Q(()=>le));pcTabList=m(Q(()=>Ne));el=m(me);ripple=z(()=>this.config.ripple());id=z(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=z(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=z(()=>be(this.pcTabs.value(),this.value()));tabindex=z(()=>this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let o=i?t:t.nextElementSibling;return o?J(o,"data-p-disabled")||J(o,"data-pc-section")==="inkbar"?this.findNextTab(o):o:null}findPrevTab(t,i=!1){let o=i?t:t.previousElementSibling;return o?J(o,"data-p-disabled")||J(o,"data-pc-section")==="inkbar"?this.findPrevTab(o):o:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){De(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){re(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-tab"]],hostVars:16,hostBindings:function(i,o){i&1&&L("focus",function(a){return o.onFocus(a)})("click",function(a){return o.onClick(a)})("keydown",function(a){return o.onKeyDown(a)}),i&2&&(d("data-pc-name","tab")("id",o.id())("aria-controls",o.ariaControls())("role","tab")("aria-selected",o.active())("data-p-disabled",o.disabled())("data-p-active",o.active())("tabindex",o.tabindex()),O("p-tab",!0)("p-tab-active",o.active())("p-disabled",o.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[fe([Z]),w],ngContentSelectors:te,decls:1,vars:0,template:function(i,o){i&1&&(C(),x(0))},dependencies:[_,v],encapsulation:2,changeDetection:0})}return e})(),ft=(()=>{class e extends ${pcTabs=m(Q(()=>le));value=ie(void 0);id=z(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=z(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=z(()=>be(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(i,o){i&2&&(d("data-pc-name","tabpanel")("id",o.id())("role","tabpanel")("aria-labelledby",o.ariaLabelledby())("data-p-active",o.active()),O("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[w],ngContentSelectors:te,decls:1,vars:1,template:function(i,o){i&1&&(C(),u(0,gt,1,0)),i&2&&h(o.active()?0:-1)},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),vt=(()=>{class e extends ${static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(i,o){i&2&&(d("data-pc-name","tabpanels")("role","presentation"),O("p-tabpanels",!0)("p-component",!0))},features:[w],ngContentSelectors:te,decls:1,vars:0,template:function(i,o){i&1&&(C(),x(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e extends ${value=ie(void 0);scrollable=A(!1,{transform:k});lazy=A(!1,{transform:k});selectOnFocus=A(!1,{transform:k});showNavigators=A(!0,{transform:k});tabindex=A(0,{transform:se});id=K(Be("pn_id_"));_componentStyle=m(Pe);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(i,o){i&2&&(d("data-pc-name","tabs")("id",o.id()),O("p-tabs",!0)("p-tabs-scrollable",o.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[B([Pe]),w],ngContentSelectors:te,decls:1,vars:0,template:function(i,o){i&1&&(C(),x(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),Ro=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[le,vt,ft,Ne,ht]})}return e})();var yt=["handle"],wt=["input"],_t=e=>({checked:e});function $t(e,s){e&1&&P(0)}function Tt(e,s){if(e&1&&u(0,$t,1,0,"ng-container",4),e&2){let t=l();r("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",H(2,_t,t.checked()))}}var Ct=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleSwitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggle-switch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,xt={root:{position:"relative"}},kt={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Qe=(()=>{class e extends S{name="toggleswitch";theme=Ct;classes=kt;inlineStyles=xt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var It={provide:ze,useExisting:Q(()=>Ae),multi:!0},Ae=(()=>{class e extends ${style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new oe;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=m(Qe);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(i,o,n){if(i&1&&(D(n,yt,4),D(n,U,4)),i&2){let a;g(a=b())&&(o.handleTemplate=a.first),g(a=b())&&(o.templates=a)}},viewQuery:function(i,o){if(i&1&&N(wt,5),i&2){let n;g(n=b())&&(o.input=n.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",se],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",k],readonly:[2,"readonly","readonly",k],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",k]},outputs:{onChange:"onChange"},features:[B([It,Qe]),ne,w],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){if(i&1){let n=R();f(0,"div",1),L("click",function(Y){return V(n),E(o.onClick(Y))}),f(1,"input",2,0),L("focus",function(){return V(n),E(o.onFocus())})("blur",function(){return V(n),E(o.onBlur())}),T(),f(3,"span",3)(4,"div",3),u(5,Tt,1,4,"ng-container"),T()()()}i&2&&(ae(o.sx("root")),q(o.styleClass),r("ngClass",o.cx("root"))("ngStyle",o.style),d("data-pc-name","toggleswitch")("data-pc-section","root"),c(),r("ngClass",o.cx("input"))("checked",o.checked())("disabled",o.disabled)("pAutoFocus",o.autofocus),d("id",o.inputId)("aria-checked",o.checked())("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("name",o.name)("tabindex",o.tabindex)("data-pc-section","hiddenInput"),c(2),r("ngClass",o.cx("slider")),d("data-pc-section","slider"),c(),r("ngClass",o.cx("handle")),c(),h(o.handleTemplate||o._handleTemplate?5:-1))},dependencies:[_,G,W,ke,Ve,v],encapsulation:2,changeDetection:0})}return e})(),ai=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[Ae,v,v]})}return e})();var Mt=["container"],Ft=["icon"],Dt=["closeicon"],Bt=["*"],zt=(e,s)=>({showTransitionParams:e,hideTransitionParams:s}),St=e=>({value:"visible()",params:e}),Vt=e=>({closeCallback:e});function Et(e,s){e&1&&P(0)}function Ot(e,s){if(e&1&&u(0,Et,1,0,"ng-container",7),e&2){let t=l(2);r("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function Lt(e,s){if(e&1&&j(0,"i",3),e&2){let t=l(2);r("ngClass",t.icon)}}function jt(e,s){if(e&1&&j(0,"span",9),e&2){let t=l(3);r("ngClass",t.cx("text"))("innerHTML",t.text,he)}}function Pt(e,s){if(e&1&&(f(0,"div"),u(1,jt,1,2,"span",8),T()),e&2){let t=l(2);c(),r("ngIf",!t.escape)}}function Rt(e,s){if(e&1&&(f(0,"span",5),we(1),T()),e&2){let t=l(3);r("ngClass",t.cx("text")),c(),_e(t.text)}}function Nt(e,s){if(e&1&&u(0,Rt,2,2,"span",10),e&2){let t=l(2);r("ngIf",t.escape&&t.text)}}function Qt(e,s){e&1&&P(0)}function At(e,s){if(e&1&&u(0,Qt,1,0,"ng-container",11),e&2){let t=l(2);r("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",H(2,Vt,t.close.bind(t)))}}function Ht(e,s){if(e&1&&(f(0,"span",5),x(1),T()),e&2){let t=l(2);r("ngClass",t.cx("text"))}}function Kt(e,s){if(e&1&&j(0,"i",13),e&2){let t=l(3);r("ngClass",t.closeIcon)}}function qt(e,s){e&1&&P(0)}function Gt(e,s){if(e&1&&u(0,qt,1,0,"ng-container",7),e&2){let t=l(3);r("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function Wt(e,s){e&1&&j(0,"TimesIcon",14)}function Ut(e,s){if(e&1){let t=R();f(0,"button",12),L("click",function(o){V(t);let n=l(2);return E(n.close(o))}),u(1,Kt,1,1,"i",13)(2,Gt,1,1,"ng-container")(3,Wt,1,0,"TimesIcon",14),T()}if(e&2){let t=l(2);d("aria-label",t.closeAriaLabel),c(),h(t.closeIcon?1:-1),c(),h(t.closeIconTemplate||t._closeIconTemplate?2:-1),c(),h(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function Yt(e,s){if(e&1&&(f(0,"div",1)(1,"div",2),u(2,Ot,1,1,"ng-container")(3,Lt,1,1,"i",3)(4,Pt,2,1,"div",4)(5,Nt,1,1,"ng-template",null,0,Te)(7,At,1,4,"ng-container")(8,Ht,2,1,"span",5)(9,Ut,4,4,"button",6),T()()),e&2){let t=ye(6),i=l();r("ngClass",i.containerClass)("@messageAnimation",H(13,St,$e(10,zt,i.showTransitionOptions,i.hideTransitionOptions))),d("aria-live","polite")("role","alert"),c(2),h(i.iconTemplate||i._iconTemplate?2:-1),c(),h(i.icon?3:-1),c(),r("ngIf",!i.escape)("ngIfElse",t),c(3),h(i.containerTemplate||i._containerTemplate?7:8),c(2),h(i.closable?9:-1)}}var Jt=({dt:e})=>`
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Xt={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},He=(()=>{class e extends S{name="message";theme=Jt;classes=Xt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var Zt=(()=>{class e extends ${severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new oe;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=K(!0);_componentStyle=m(He);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-message"]],contentQueries:function(i,o,n){if(i&1&&(D(n,Mt,4),D(n,Ft,4),D(n,Dt,4),D(n,U,4)),i&2){let a;g(a=b())&&(o.containerTemplate=a.first),g(a=b())&&(o.iconTemplate=a.first),g(a=b())&&(o.closeIconTemplate=a.first),g(a=b())&&(o.templates=a)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",k],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",k],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[B([He]),ne,w],ngContentSelectors:Bt,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,o){i&1&&(C(),u(0,Yt,10,15,"div",1)),i&2&&h(o.visible()?0:-1)},dependencies:[_,G,xe,W,Le,Z,v],encapsulation:2,data:{animation:[Ie("messageAnimation",[ue(":enter",[pe({opacity:0,transform:"translateY(-25%)"}),ce("{{showTransitionParams}}")]),ue(":leave",[ce("{{hideTransitionParams}}",pe({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})(),Ci=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[Zt,v,v]})}return e})();var eo=["*"],to=({dt:e})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${e("inputgroup.addon.padding")};
    background: ${e("inputgroup.addon.background")};
    color: ${e("inputgroup.addon.color")};
    border-block-start: 1px solid ${e("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${e("inputgroup.addon.border.color")};
    min-width: ${e("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${e("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${e("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${e("inputgroup.addon.border.radius")};
    border-end-start-radius: ${e("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${e("inputgroup.addon.border.radius")};
    border-end-end-radius: ${e("inputgroup.addon.border.radius")};
}
`,oo={root:({props:e})=>["p-inputgroup",{"p-inputgroup-fluid":e.fluid}]},Ke=(()=>{class e extends S{name="inputgroup";theme=to;classes=oo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var io=(()=>{class e extends ${style;styleClass;_componentStyle=m(Ke);static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(i,o){i&2&&(d("data-pc-name","inputgroup"),ae(o.style),q(o.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[B([Ke]),w],ngContentSelectors:eo,decls:1,vars:0,template:function(i,o){i&1&&(C(),x(0))},dependencies:[_,v],encapsulation:2})}return e})(),Ei=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[io,v,v]})}return e})();var no=["*"],ao=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,so={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},ro={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},qe=(()=>{class e extends S{name="divider";theme=ao;classes=ro;inlineStyles=so;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var lo=(()=>{class e extends ${style;styleClass;layout="horizontal";type="solid";align;_componentStyle=m(qe);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(i,o){i&2&&(d("aria-orientation",o.layout)("data-pc-name","divider")("role","separator"),q(o.hostClass),ve("justify-content",o.layout==="horizontal"?o.align==="center"||o.align===void 0?"center":o.align==="left"?"flex-start":o.align==="right"?"flex-end":null:null)("align-items",o.layout==="vertical"?o.align==="center"||o.align===void 0?"center":o.align==="top"?"flex-start":o.align==="bottom"?"flex-end":null:null),O("p-divider",!0)("p-component",!0)("p-divider-horizontal",o.layout==="horizontal")("p-divider-vertical",o.layout==="vertical")("p-divider-solid",o.type==="solid")("p-divider-dashed",o.type==="dashed")("p-divider-dotted",o.type==="dotted")("p-divider-left",o.layout==="horizontal"&&(!o.align||o.align==="left"))("p-divider-center",o.layout==="horizontal"&&o.align==="center"||o.layout==="vertical"&&(!o.align||o.align==="center"))("p-divider-right",o.layout==="horizontal"&&o.align==="right")("p-divider-top",o.layout==="vertical"&&o.align==="top")("p-divider-bottom",o.layout==="vertical"&&o.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[B([qe]),w],ngContentSelectors:no,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(i,o){i&1&&(C(),f(0,"div",0),x(1),T())},dependencies:[_,v],encapsulation:2,changeDetection:0})}return e})(),Ui=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=F({type:e});static \u0275inj=M({imports:[lo]})}return e})();export{Ye as a,yo as b,Ne as c,ht as d,ft as e,vt as f,le as g,Ro as h,Ae as i,ai as j,Zt as k,Ci as l,io as m,Ei as n,lo as o,Ui as p};
