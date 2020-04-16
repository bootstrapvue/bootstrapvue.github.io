(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{248:function(t,e,n){"use strict";e.a={name:"BVCarbonAd",props:{id:{type:String,default:"_carbonads_js"},url:{type:String,default:"//cdn.carbonads.com/carbon.js"},serve:{type:String,default:"CE7ITK77"},placement:{type:String,default:"bootstrap-vuejsorg"}},computed:{src(){return"".concat(this.url,"?serve=").concat(this.serve,"&placement=").concat(this.placement)}},render(t){return t("aside",{staticClass:"bv-carbon-ad"},[t("client-only",[t("script",{attrs:{id:this.id,async:"async",type:"text/javascript",src:this.src}})])])}}},249:function(t,e,n){"use strict";n(17);var o=n(8),r=n(22),c=t=>{if(t&&"click"===t.type){var e=t.target&&t.target.closest?t.target.closest("a[href]"):null;if(!(!e||"click"!==t.type||e.__vue__||e.closest(".bd-example")||e.closest("pre")||t.defaultPrevented)){var n=e.getAttribute("href");n&&0===n.indexOf("/")&&0!==n.indexOf("//")?(t.preventDefault(),"undefined"!=typeof window&&window.$nuxt&&window.$nuxt.$router.push(n)):n&&0===n.indexOf("#")&&((t,e)=>{t.preventDefault(),t.stopPropagation();var n=(e||"").replace(/#/g,""),o=document.body.querySelector('[id="'.concat(n,'"]'));if(o){var c=document.scrollingElement||document.documentElement||document.body;Object(r.i)(c,Object(r.d)(o)-70,100,()=>{o.tabIndex=-1,o.focus()})}})(t,n)}}};e.a={name:"BVSection",functional:!0,props:{tag:{type:String,default:"section"},play:{type:Boolean,default:!1}},render(t,e){var{props:n,data:data,children:r}=e,l=[];return n.play&&l.push({name:"play"}),t(n.tag,Object(o.a)(data,{class:["bd-content"],directives:l,on:{click:c}}),[r])}}},250:function(t,e,n){"use strict";var o=n(8);e.a={name:"BVMain",functional:!0,props:{tag:{type:String,default:"main"}},render(t,e){var{props:n,data:data,children:r}=e;return t(n.tag,Object(o.a)(data,{staticClass:"bd-main"}),[r])}}},251:function(t,e,n){"use strict";n(17),n(21);var o=n(22),r=n(44),c={};e.a={data:()=>({scrollTimeout:null}),computed:{headTitle(){var t=this.$route.name,title="",section="";return this.meta&&this.meta.title&&(title=this.meta.title),/^docs-components/.test(t)?section="Components":/^docs-directives/.test(t)?section="Directives":/^docs-reference/.test(t)?section="Reference":/^docs-misc/.test(t)&&(section="Miscellaneous"),[title,section,"BootstrapVue"].filter(Boolean).join(" | ")},headMeta(){var section=this.$route.name.split("-")[1],t=section?r.i.find(t=>t.base==="".concat(section,"/")):null,e=this.meta&&this.meta.description?this.meta.description:t&&t.description?t.description:r.c,meta=[{hid:"og:title",name:"og:title",property:"og:title",content:this.headTitle}];return e&&(meta.push({hid:"description",name:"description",content:e}),meta.push({hid:"og:description",name:"og:description",property:"og:description",content:e})),meta}},mounted(){this.clearScrollTimeout(),this.focusScroll(),this.$nextTick(()=>{setTimeout(()=>{var t="".concat(this.$route.name,"_").concat(this.$route.params.slug||""),e=c[t]||(c[t]=Object(o.c)(this.readme||"",this.meta||null));this.$root.$emit("docs-set-toc",e)},50)})},updated(){this.clearScrollTimeout(),this.focusScroll()},beforeDestroy(){this.clearScrollTimeout(),this.$root.$emit("docs-set-toc",{})},methods:{clearScrollTimeout(){this.scrollTimeout&&(clearTimeout(this.scrollTimeout),this.scrollTimeout=null)},focusScroll(){var t=this.$route.hash;this.$nextTick(()=>{var e;t&&(e=this.$el.querySelector('[id="'.concat(t.replace("#",""),'"]')),this.scrollIntoView(e)),e||(e=this.$el.querySelector("h1")),e&&(e.tabIndex=-1,e.focus())})},scrollIntoView(t){if(t){var e=document.scrollingElement||document.documentElement||document.body;this.scrollTimeout=setTimeout(()=>{this.clearScrollTimeout(),Object(o.i)(e,Object(o.d)(t)-70,100)},100)}}},head(){return{title:this.headTitle,meta:this.headMeta}}}},253:function(t,e,n){},255:function(t,e,n){"use strict";n(17);var o=n(22),r={name:"BVQuickLinks",data:()=>({toc:{},offset:0,expanded:!1}),computed:{hasContent(){return!!this.toc.toc},toogleText(){return"".concat(this.expanded?"Hide":"Show"," page table of contents")}},created(){this.$root.$on("docs-set-toc",t=>{this.expanded=!1,this.toc=t})},mounted(){var t=document.body.querySelector("header.navbar");t&&(this.offset=t.offsetHeight+6)},methods:{scrollIntoView(t,e){t.preventDefault(),t.stopPropagation();var n=(e||"").replace(/#/g,""),r=document.body.querySelector('[id="'.concat(n,'"]'));if(r){var c=document.scrollingElement||document.documentElement||document.body;Object(o.i)(c,Object(o.d)(r)-70,100,()=>{r.tabIndex=-1,r.focus()})}}}},c=(n(256),n(23)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:["bd-quick-links","mb-3","d-xl-none",{"d-none":!t.hasContent}],attrs:{"aria-hidden":t.hasContent?null:"true"}},[t.hasContent?n("header",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.bd-quick-links-collapse",modifiers:{"bd-quick-links-collapse":!0}}],staticClass:"font-weight-bold",attrs:{variant:"outline-secondary",size:"sm",block:""}},[t._v("\n      "+t._s(t.toogleText)+"\n    ")])],1):t._e(),t._v(" "),t.hasContent?n("b-collapse",{attrs:{id:"bd-quick-links-collapse",tag:"ul"},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},t._l(t.toc.toc,(function(h2){return n("li",{key:h2.href},[n("b-link",{attrs:{href:h2.href},on:{click:function(e){return t.scrollIntoView(e,h2.href)}}},[n("span",{domProps:{innerHTML:t._s(h2.label)}})]),t._v(" "),h2.toc&&h2.toc.length>0?n("ul",{key:"sub-"+h2.href},t._l(h2.toc,(function(h3){return n("li",{key:h3.href},[n("b-link",{attrs:{href:h3.href},on:{click:function(e){return t.scrollIntoView(e,h3.href)}}},[n("span",{domProps:{innerHTML:t._s(h3.label)}})])],1)})),0):t._e()],1)})),0):t._e()],1)}),[],!1,null,"19ab0554",null);e.a=component.exports},256:function(t,e,n){"use strict";var o=n(253);n.n(o).a},258:function(t,e,n){"use strict";var o=n(248),r=n(250),c=n(255),l=n(249),d=n(22),m=n(8);e.a={name:"BVMainDocs",functional:!0,props:{tag:{type:String,default:"main"},readme:{type:String,default:""},meta:{type:Object,default:null}},render(t,e){var{props:n,data:data,children:h}=e,{tag:f,readme:v,meta:meta}=n,{titleLead:y,body:body}=Object(d.f)(v||""),{version:k}=meta||{},x=t(l.a,{props:{tag:"header",play:!1},domProps:{innerHTML:y||""}}),T=t();k&&(T=t(l.a,{props:{play:!1}},[t("p",{staticClass:"font-italic"},["Available in BootstrapVue since ",t("code",{staticClass:"text-nowrap"},"v".concat(k))])]));var S=t(o.a),w=t(c.a),O=t(l.a,{props:{play:!0},domProps:{innerHTML:body||""}});return t(r.a,Object(m.a)(data,{props:{tag:f}}),[x,T,S,w,O,h])}}},310:function(t,e,n){var map={"./changelog/README.md":[384,61],"./contributing/README.md":[385,62],"./settings/README.md":[386,63],"./third-party/README.md":[387,64]};function o(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=310,t.exports=o},406:function(t,e,n){"use strict";n.r(e);n(17);var o=n(19),r=n(82),c=n(258),l=n(251),d=n(44),m=(t,e)=>void 0===e?null:e;e.default={name:"BDVMisc",layout:"docs",mixins:[l.a],validate(t){var{params:e}=t;return Boolean(d.h[e.slug])},asyncData:t=>Object(o.a)((function*(){var e,{params:o}=t,c=(yield(e=o.slug,n(310)("./".concat(e,"/README.md")))).default;return c=c.replace("{{ defaultConfig }}",r.a.highlight("json",JSON.stringify(d.e||{},m,2)).value),{meta:d.h[o.slug],readme:c}}))(),render(t){return t(c.a,{staticClass:"bd-components",props:{readme:this.readme,meta:this.meta}})}}}}]);