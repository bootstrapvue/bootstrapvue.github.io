(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{258:function(e,t,r){"use strict";var o=r(248),n=r(250),E=r(255),m=r(249),d=r(22),D=r(8);t.a={name:"BVMainDocs",functional:!0,props:{tag:{type:String,default:"main"},readme:{type:String,default:""},meta:{type:Object,default:null}},render(e,t){var{props:r,data:data,children:M}=t,{tag:c,readme:A,meta:meta}=r,{titleLead:R,body:body}=Object(d.f)(A||""),{version:l}=meta||{},f=e(m.a,{props:{tag:"header",play:!1},domProps:{innerHTML:R||""}}),v=e();l&&(v=e(m.a,{props:{play:!1}},[e("p",{staticClass:"font-italic"},["Available in BootstrapVue since ",e("code",{staticClass:"text-nowrap"},"v".concat(l))])]));var y=e(o.a),h=e(E.a),w=e(m.a,{props:{play:!0},domProps:{innerHTML:body||""}});return e(n.a,Object(D.a)(data,{props:{tag:c}}),[f,v,y,h,w,M])}}},308:function(e,t,r){var map={"./alert/README.md":[330,7],"./aspect/README.md":[331,8],"./avatar/README.md":[332,19],"./badge/README.md":[333,30],"./breadcrumb/README.md":[334,41],"./button-group/README.md":[336,52],"./button-toolbar/README.md":[337,53],"./button/README.md":[335,51],"./calendar/README.md":[338,54],"./card/README.md":[339,55],"./carousel/README.md":[340,9],"./collapse/README.md":[341,10],"./dropdown/README.md":[342,11],"./embed/README.md":[343,12],"./form-checkbox/README.md":[345,14],"./form-datepicker/README.md":[346,15],"./form-file/README.md":[347,16],"./form-group/README.md":[348,17],"./form-input/README.md":[349,18],"./form-radio/README.md":[350,20],"./form-rating/README.md":[351,21],"./form-select/README.md":[352,22],"./form-spinbutton/README.md":[353,23],"./form-tags/README.md":[354,24],"./form-textarea/README.md":[355,25],"./form-timepicker/README.md":[356,26],"./form/README.md":[344,13],"./image/README.md":[357,27],"./input-group/README.md":[358,28],"./jumbotron/README.md":[359,29],"./layout/README.md":[360,31],"./link/README.md":[361,32],"./list-group/README.md":[362,33],"./media/README.md":[363,34],"./modal/README.md":[364,35],"./nav/README.md":[365,36],"./navbar/README.md":[366,37],"./overlay/README.md":[367,38],"./pagination-nav/README.md":[369,40],"./pagination/README.md":[368,39],"./popover/README.md":[370,42],"./progress/README.md":[371,43],"./sidebar/README.md":[372,44],"./spinner/README.md":[373,45],"./table/README.md":[374,46],"./tabs/README.md":[375,47],"./time/README.md":[376,48],"./toast/README.md":[377,49],"./tooltip/README.md":[378,50]};function o(e){if(!r.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],o=t[0];return r.e(t[1]).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=308,e.exports=o},404:function(e,t,r){"use strict";r.r(t);var o=r(19),n=r(260),E=r(276),m=r(270),d=r(258),D=r(249),M=r(251),c=r(44);t.default={name:"BDVComponents",layout:"docs",mixins:[M.a],validate(e){var{params:t}=e;return Boolean(c.d[t.slug])},asyncData:e=>Object(o.a)((function*(){var t,{params:o}=e,n=(yield(t=o.slug,r(308)("./".concat(t,"/README.md")))).default;return{meta:c.d[o.slug],readme:n}}))(),render(e){var t=e(D.a,{class:["bd-component-reference"]},[e(n.a,{props:{id:"component-reference"}},"Component reference"),...this.meta.components.map(t=>{var{component:component,events:r,rootEventListeners:o,slots:n,aliases:m,props:d,version:D}=t;return e(E.a,{props:{component:component,events:r,rootEventListeners:o,slots:n,aliases:m,propsMeta:d,version:D}})}),e(m.a,{props:{meta:this.meta}})]);return e(d.a,{key:this.$route.path,staticClass:"bd-components",props:{readme:this.readme||"",meta:this.meta}},[t])}}}}]);