(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{463:function(e,t){e.exports='<h1 id=form-validation class=bv-no-focus-ring><span class=bd-content-title>Form Validation</span></h1> <p class=bd-lead>BootstrapVue does not include form validation by default; we leave that up to the many existing form validation plugins. Below are some examples of plugins and how they may be integrated.</p> <h2 id=vuelidate class=bv-no-focus-ring><span class=bd-content-title>Vuelidate<a class=anchorjs-link href=#vuelidate aria-labelledby=vuelidate></a></span></h2> <p><a href=https://github.com/vuelidate/vuelidate/ target=_blank rel=noopener>Vuelidate</a> provides &quot;Simple, lightweight model-based validation for Vue.js&quot;. Installation instructions and other documentation can be found at their <a href=https://vuelidate.js.org/ target=_blank rel=noopener>website</a>.</p> <h3 id=vuelidate-example class=bv-no-focus-ring><span class=bd-content-title>Vuelidate example<a class=anchorjs-link href=#vuelidate-example aria-labelledby=vuelidate-example></a></span></h3> <p>This example shows how to add different validation and feedback to two form fields, as well as dynamically disable the submit button based on the form validity.</p> <p>This is a verbose example designed to show how BootstrapVue and Vuelidate interact; in larger applications, you&#39;d likely want to abstract some of the functionality, such as creating a standard error message component.</p> <iframe src="https://codesandbox.io/embed/inspiring-haslett-lzq6p?fontsize=14&hidenavigation=1&module=%2FApp.vue&theme=dark" style=width:100%;height:500px;border:0;border-radius:4px;overflow:hidden title="BootstrapVue Vuelidate example" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe> <h2 id=veevalidate-v2 class=bv-no-focus-ring><span class=bd-content-title>VeeValidate v2<a class=anchorjs-link href=#veevalidate-v2 aria-labelledby=veevalidate-v2></a></span></h2> <p><a href=http://vee-validate.logaretm.com/v2/ target=_blank rel=noopener>VeeValidate</a> is a plugin for Vue.js that allows you to validate input fields and display errors. It has full support for <a href=https://kazupon.github.io/vue-i18n/ target=_blank rel=noopener>Vue I18n</a> and provides fairly good out of the box error messages.</p> <p><strong>Important</strong></p> <p>You <strong>must</strong> configure <code class=text-nowrap translate=no>vee-validate</code>&#39;s <code class=text-nowrap translate=no>fields</code> property or it will conflict with the <code class=text-nowrap translate=no>:fields</code> property of <code class=text-nowrap translate=no>&lt;b-table&gt;</code> (and possibly other components) when it injects itself.</p> <div class=bd-code><pre class="hljs js p-2" translate=no><span class=hljs-keyword>import</span> Vue <span class=hljs-keyword>from</span> <span class=hljs-string>\'vue\'</span>\n<span class=hljs-keyword>import</span> VeeValidate <span class=hljs-keyword>from</span> <span class=hljs-string>\'vee-validate\'</span>\n\nVue.use(VeeValidate, {\n  <span class=hljs-comment>// This is the default</span>\n  <span class=hljs-attr>inject</span>: <span class=hljs-literal>true</span>,\n  <span class=hljs-comment>// Important to name this something other than \'fields\'</span>\n  <span class=hljs-attr>fieldsBagName</span>: <span class=hljs-string>\'veeFields\'</span>,\n  <span class=hljs-comment>// This is not required but avoids possible naming conflicts</span>\n  <span class=hljs-attr>errorBagName</span>: <span class=hljs-string>\'veeErrors\'</span>\n})</pre></div><h3 id=veevalidate-v2-example class=bv-no-focus-ring><span class=bd-content-title>VeeValidate v2 example<a class=anchorjs-link href=#veevalidate-v2-example aria-labelledby=veevalidate-v2-example></a></span></h3> <iframe src="https://codesandbox.io/embed/vigilant-kirch-8lpns?fontsize=14&hidenavigation=1&module=%2FApp.vue" style=width:100%;height:500px;border:0;border-radius:4px;overflow:hidden title="BoostrapVue VeeValidate v2 example" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe> <h2 id=veevalidate-v3 class=bv-no-focus-ring><span class=bd-content-title>VeeValidate v3<a class=anchorjs-link href=#veevalidate-v3 aria-labelledby=veevalidate-v3></a></span></h2> <p><a href=http://vee-validate.logaretm.com/ target=_blank rel=noopener>VeeValidate</a> is a plugin for Vue.js that allows you to validate input fields and display errors. It has full support for <a href=https://kazupon.github.io/vue-i18n/ target=_blank rel=noopener>Vue I18n</a> and provides fairly good out of the box error messages.</p> <h3 id=veevalidate-v3-example class=bv-no-focus-ring><span class=bd-content-title>VeeValidate v3 example<a class=anchorjs-link href=#veevalidate-v3-example aria-labelledby=veevalidate-v3-example></a></span></h3> <iframe src="https://codesandbox.io/embed/boostrapvue-veevalidate-v3-example-xm3et?fontsize=14&hidenavigation=1&module=%2FApp.vue&theme=dark" style=width:100%;height:500px;border:0;border-radius:4px;overflow:hidden title="BoostrapVue VeeValidate v3 example" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe> '}}]);