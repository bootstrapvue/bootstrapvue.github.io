(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{458:function(n,t){n.exports='<h1 id=sizing-props-and-classes class=bv-no-focus-ring><span class=bd-content-title>Sizing props and classes</span></h1> <p class=bd-lead>Bootstrap v4 CSS provides several classes that control the sizing of elements, of which some of these have been translated into props on components.</p> <h2 id=component-size-prop class=bv-no-focus-ring><span class=bd-content-title>Component <code class=text-nowrap translate=no>size</code> prop<a class=anchorjs-link href=#component-size-prop aria-labelledby=component-size-prop></a></span></h2> <p>Various components allow for an optional size (via the <code class=text-nowrap translate=no>size</code> prop). Below are the sizes supported via the default Bootstrap v4 CSS.</p> <p>Available Sizes:</p> <ul> <li><code class=text-nowrap translate=no>sm</code> small</li> <li><code class=text-nowrap translate=no>lg</code> large</li> </ul> <p>When no size is specified, this results in normal sized appearance (usually referred to as <code class=text-nowrap translate=no>md</code>).</p> <p>These size values will be translated into the appropriate Bootstrap CSS class, depending on the component used on, such as <code class=text-nowrap translate=no>.btn-&lt;size&gt;</code> for buttons, <code class=text-nowrap translate=no>.modal-&lt;size&gt;</code> for modal, <code class=text-nowrap translate=no>.form-control-&lt;size&gt;</code> for form elements, <code class=text-nowrap translate=no>.pagination-&lt;size&gt;</code> for pagination buttons, etc.</p> <h2 id=breakpoint-sizes class=bv-no-focus-ring><span class=bd-content-title>Breakpoint sizes<a class=anchorjs-link href=#breakpoint-sizes aria-labelledby=breakpoint-sizes></a></span></h2> <p>Bootstrap v4 also includes viewport breakpoint sizes: <code class=text-nowrap translate=no>xs</code>, <code class=text-nowrap translate=no>sm</code>, <code class=text-nowrap translate=no>md</code>, <code class=text-nowrap translate=no>lg</code>, and <code class=text-nowrap translate=no>xl</code>. which refer to the width of the user&#39;s view port.</p> <p>For details on breakpoint sizes, please check the <a href=/docs/layout/ class=font-weight-bold>Layout and Grid</a> documentation.</p> <h2 id=sizing-utility-classes class=bv-no-focus-ring><span class=bd-content-title>Sizing utility classes<a class=anchorjs-link href=#sizing-utility-classes aria-labelledby=sizing-utility-classes></a></span></h2> <p>Easily make an element as wide or as tall (relative to its parent) with the width and height utilities classes.</p> <p>Width and height utilities are generated from the <code class=text-nowrap translate=no>$sizes</code> Sass map in Bootstrap&#39;s <code class=text-nowrap translate=no>_variables.scss</code>. Includes support for <code class=text-nowrap translate=no>25%</code>, <code class=text-nowrap translate=no>50%</code>, <code class=text-nowrap translate=no>75%</code>, and <code class=text-nowrap translate=no>100%</code> by default. Modify those values as you need to generate different utilities here.</p> <p><strong>Widths:</strong></p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"text-center"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"w-25 p-3 mb-1 bg-secondary text-light"</span>&gt;</span>Width 25%<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"w-50 p-3 mb-1 bg-secondary text-light"</span>&gt;</span>Width 50%<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"w-75 p-3 mb-1 bg-secondary text-light"</span>&gt;</span>Width 75%<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"w-100 p-3 bg-secondary text-light"</span>&gt;</span>Width 100%<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- widths.vue --&gt;</span></pre></div><p><strong>Heights:</strong></p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"height: 100px; background-color: rgba(255,0,0,0.1);"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"h-25 d-inline-block"</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"width: 120px; background-color: rgba(0,0,255,.1)"</span>&gt;</span>\n    Height 25%\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"h-50 d-inline-block"</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"width: 120px; background-color: rgba(0,0,255,.1)"</span>&gt;</span>\n    Height 50%\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"h-75 d-inline-block"</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"width: 120px; background-color: rgba(0,0,255,.1)"</span>&gt;</span>\n    Height 75%\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"h-100 d-inline-block"</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"width: 120px; background-color: rgba(0,0,255,.1)"</span>&gt;</span>\n    Height 100%\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- heights.vue --&gt;</span></pre></div><p><strong>Max width and height:</strong></p> <p>You can also use <code class=text-nowrap translate=no>mw-100</code> (<code class=text-nowrap translate=no>max-width: 100%;</code>) and <code class=text-nowrap translate=no>mh-100</code> (<code class=text-nowrap translate=no>max-height: 100%;</code>) utilities as needed.</p> <h2 id=additional-resources class=bv-no-focus-ring><span class=bd-content-title>Additional resources<a class=anchorjs-link href=#additional-resources aria-labelledby=additional-resources></a></span></h2> <p>Refer to <a href=https://getbootstrap.com/ target=_blank rel=noopener>Bootstrap v4</a> official documentation site for more information.</p> '}}]);