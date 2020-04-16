(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{437:function(n,l){n.exports='<h1 id=progress class=bv-no-focus-ring><span class=bd-content-title>Progress</span></h1> <p class=bd-lead>Use our custom progress component for displaying simple or complex progress bars, featuring support for horizontally stacked bars, animated backgrounds, and text labels.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>show-progress</span> <span class=hljs-attr>animated</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>show-value</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value * (6 / 10)"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value * (2.5 / 10)"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"warning"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value * (1.5 / 10)"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"danger"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span> @<span class=hljs-attr>click</span>=<span class=hljs-string>"randomValue"</span>&gt;</span>Click me<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>value</span>: <span class=hljs-number>45</span>,\n        <span class=hljs-attr>max</span>: <span class=hljs-number>100</span>\n      }\n    },\n    <span class=hljs-attr>methods</span>: {\n      randomValue() {\n        <span class=hljs-keyword>this</span>.value = <span class=hljs-built_in>Math</span>.random() * <span class=hljs-keyword>this</span>.max\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-progress.vue --&gt;</span></pre></div><h2 id=value class=bv-no-focus-ring><span class=bd-content-title>Value<a class=anchorjs-link href=#value aria-labelledby=value></a></span></h2> <p>Set the maximum value with the <code class=text-nowrap translate=no>max</code> prop (default is <code class=text-nowrap translate=no>100</code>), and the current value via the <code class=text-nowrap translate=no>value</code> prop (default <code class=text-nowrap translate=no>0</code>).</p> <p>When creating multiple bars in a single process, place the value prop on the individual <code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code> sub components (see the <strong>Multiple Bars</strong> section below for more details)</p> <h2 id=labels class=bv-no-focus-ring><span class=bd-content-title>Labels<a class=anchorjs-link href=#labels aria-labelledby=labels></a></span></h2> <p>Add labels to your progress bars by either enabling <code class=text-nowrap translate=no>show-progress</code> (percentage of max) or <code class=text-nowrap translate=no>show-value</code>for the current absolute value. You may also set the precision (number of digits after the decimal) via the <code class=text-nowrap translate=no>precision</code> prop (default is <code class=text-nowrap translate=no>0</code>digits after the decimal).</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>No label<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Value label<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>show-value</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Progress label<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>show-progress</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Value label with precision<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>:precision</span>=<span class=hljs-string>"2"</span> <span class=hljs-attr>show-value</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Progress label with precision<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>:precision</span>=<span class=hljs-string>"2"</span> <span class=hljs-attr>show-progress</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>value</span>: <span class=hljs-number>33.333333333</span>,\n        <span class=hljs-attr>max</span>: <span class=hljs-number>50</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-progress-labels.vue --&gt;</span></pre></div><h3 id=custom-progress-label class=bv-no-focus-ring><span class=bd-content-title>Custom progress label<a class=anchorjs-link href=#custom-progress-label aria-labelledby=custom-progress-label></a></span></h3> <p>Need more control over the label? Provide your own label by using the default slot within a <code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code> sub-component, or by using the <code class=text-nowrap translate=no>label</code> or <code class=text-nowrap translate=no>label-html</code> property on <code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code>:</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Custom label via default slot<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>height</span>=<span class=hljs-string>"2rem"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span>&gt;</span>\n        Progress: <span class=hljs-tag>&lt;<span class=hljs-name>strong</span>&gt;</span>{{ value.toFixed(2) }} / {{ max }}<span class=hljs-tag>&lt;/<span class=hljs-name>strong</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>Custom label via property<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>:label</span>=<span class=hljs-string>"`${((value / max) * 100).toFixed(2)}%`"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>Custom label via property (HTML support)<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>:label-html</span>=<span class=hljs-string>"`&lt;del&gt;${value}&lt;/del&gt;`"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>value</span>: <span class=hljs-number>33.333333333</span>,\n        <span class=hljs-attr>max</span>: <span class=hljs-number>50</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-progress-custom-labels.vue --&gt;</span></pre></div><p>Precedence order for label methods (top-most has precedence):</p> <ul> <li>default slot of <code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code></li> <li><code class=text-nowrap translate=no>label</code> prop of <code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code></li> <li><code class=text-nowrap translate=no>show-progress</code> prop of <code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code></li> <li><code class=text-nowrap translate=no>show-value</code> prop of <code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code></li> <li><code class=text-nowrap translate=no>show-progress</code> prop of <code class=text-nowrap translate=no>&lt;b-progress&gt;</code></li> <li><code class=text-nowrap translate=no>show-value</code> prop of <code class=text-nowrap translate=no>&lt;b-progress&gt;</code></li> <li>no label</li> </ul> <h2 id=width-and-height class=bv-no-focus-ring><span class=bd-content-title>Width and height<a class=anchorjs-link href=#width-and-height aria-labelledby=width-and-height></a></span></h2> <p><code class=text-nowrap translate=no>&lt;b-progress&gt;</code> will always expand to the maximum with of its parent container. To change the width, place <code class=text-nowrap translate=no>&lt;b-progress&gt;</code> in a standard Bootstrap column or apply one of the standard Bootstrap width classes.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Default width<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Custom widths<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"w-75 mb-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"w-50 mb-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"w-25"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>value</span>: <span class=hljs-number>75</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-progress-width.vue --&gt;</span></pre></div><p>The height of the progress bar can be controlled with the <code class=text-nowrap translate=no>height</code> prop. The height value should be a standard CSS dimension (<code class=text-nowrap translate=no>px</code>, <code class=text-nowrap translate=no>rem</code>, <code class=text-nowrap translate=no>em</code>, etc). The default height is <code class=text-nowrap translate=no>1rem</code>.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Default height<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>show-progress</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Custom heights<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>height</span>=<span class=hljs-string>"2rem"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>show-progress</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>height</span>=<span class=hljs-string>"20px"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span> <span class=hljs-attr>show-progress</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>height</span>=<span class=hljs-string>"2px"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"value"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>value</span>: <span class=hljs-number>75</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-progress-height.vue --&gt;</span></pre></div><h2 id=backgrounds class=bv-no-focus-ring><span class=bd-content-title>Backgrounds<a class=anchorjs-link href=#backgrounds aria-labelledby=backgrounds></a></span></h2> <p>Use background variants to change the appearance of individual progress bars. The default variant is <code class=text-nowrap translate=no>primary</code>.</p> <h3 id=solid-background-variants class=bv-no-focus-ring><span class=bd-content-title>Solid background variants<a class=anchorjs-link href=#solid-background-variants aria-labelledby=solid-background-variants></a></span></h3> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"bar in bars"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"row mb-1"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"col-sm-2"</span>&gt;</span>{{ bar.variant }}:<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"col-sm-10 pt-1"</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"bar.value"</span> <span class=hljs-attr>:variant</span>=<span class=hljs-string>"bar.variant"</span> <span class=hljs-attr>:key</span>=<span class=hljs-string>"bar.variant"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>bars</span>: [\n          { <span class=hljs-attr>variant</span>: <span class=hljs-string>\'success\'</span>, <span class=hljs-attr>value</span>: <span class=hljs-number>75</span> },\n          { <span class=hljs-attr>variant</span>: <span class=hljs-string>\'info\'</span>, <span class=hljs-attr>value</span>: <span class=hljs-number>75</span> },\n          { <span class=hljs-attr>variant</span>: <span class=hljs-string>\'warning\'</span>, <span class=hljs-attr>value</span>: <span class=hljs-number>75</span> },\n          { <span class=hljs-attr>variant</span>: <span class=hljs-string>\'danger\'</span>, <span class=hljs-attr>value</span>: <span class=hljs-number>75</span> },\n          { <span class=hljs-attr>variant</span>: <span class=hljs-string>\'primary\'</span>, <span class=hljs-attr>value</span>: <span class=hljs-number>75</span> },\n          { <span class=hljs-attr>variant</span>: <span class=hljs-string>\'secondary\'</span>, <span class=hljs-attr>value</span>: <span class=hljs-number>75</span> },\n          { <span class=hljs-attr>variant</span>: <span class=hljs-string>\'dark\'</span>, <span class=hljs-attr>value</span>: <span class=hljs-number>75</span> }\n        ],\n        <span class=hljs-attr>timer</span>: <span class=hljs-literal>null</span>\n      }\n    },\n    mounted() {\n      <span class=hljs-keyword>this</span>.timer = setInterval(<span class=hljs-function><span class=hljs-params>()</span> =&gt;</span> {\n        <span class=hljs-keyword>this</span>.bars.forEach(<span class=hljs-function><span class=hljs-params>bar</span> =&gt;</span> (bar.value = <span class=hljs-number>25</span> + <span class=hljs-built_in>Math</span>.random() * <span class=hljs-number>75</span>))\n      }, <span class=hljs-number>2000</span>)\n    },\n    beforeDestroy() {\n      clearInterval(<span class=hljs-keyword>this</span>.timer)\n      <span class=hljs-keyword>this</span>.timer = <span class=hljs-literal>null</span>\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-progress-backgrounds.vue --&gt;</span></pre></div><h3 id=striped-backgrounds class=bv-no-focus-ring><span class=bd-content-title>Striped backgrounds<a class=anchorjs-link href=#striped-backgrounds aria-labelledby=striped-backgrounds></a></span></h3> <p>Set <code class=text-nowrap translate=no>striped</code> to apply a stripe via CSS gradient over the progress bar&#39;s background variant.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"25"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span> <span class=hljs-attr>:striped</span>=<span class=hljs-string>"striped"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"50"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span> <span class=hljs-attr>:striped</span>=<span class=hljs-string>"striped"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"75"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"warning"</span> <span class=hljs-attr>:striped</span>=<span class=hljs-string>"striped"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"100"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"danger"</span> <span class=hljs-attr>:striped</span>=<span class=hljs-string>"striped"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"secondary"</span> @<span class=hljs-attr>click</span>=<span class=hljs-string>"striped = !striped"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>\n      {{ striped ? \'Remove\' : \'Add\' }} Striped\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>striped</span>: <span class=hljs-literal>true</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-progress-striped.vue --&gt;</span></pre></div><h3 id=animated-backgrounds class=bv-no-focus-ring><span class=bd-content-title>Animated backgrounds<a class=anchorjs-link href=#animated-backgrounds aria-labelledby=animated-backgrounds></a></span></h3> <p>The striped gradient can also be animated by setting the <code class=text-nowrap translate=no>animated</code>prop.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"25"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span> <span class=hljs-attr>striped</span> <span class=hljs-attr>:animated</span>=<span class=hljs-string>"animate"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"50"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span> <span class=hljs-attr>striped</span> <span class=hljs-attr>:animated</span>=<span class=hljs-string>"animate"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"75"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"warning"</span> <span class=hljs-attr>striped</span> <span class=hljs-attr>:animated</span>=<span class=hljs-string>"animate"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"100"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"danger"</span> <span class=hljs-attr>:animated</span>=<span class=hljs-string>"animate"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"secondary"</span> @<span class=hljs-attr>click</span>=<span class=hljs-string>"animate = !animate"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>\n      {{ animate ? \'Stop\' : \'Start\' }} Animation\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>animate</span>: <span class=hljs-literal>true</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-progress-animated.vue --&gt;</span></pre></div><p>Notes:</p> <ul> <li>if <code class=text-nowrap translate=no>animated</code> is true, <code class=text-nowrap translate=no>striped</code> will automatically be enabled.</li> <li>Animated progress bars don&#39;t work in Opera 12 — as they don&#39;t support CSS3 animations.</li> <li>The animation effect of this component is dependent on the <code class=text-nowrap translate=no>prefers-reduced-motion</code> media query. See the <a href=/docs/reference/accessibility class=font-weight-bold>reduced motion section of our accessibility documentation</a> for additional details.</li> </ul> <h2 id=multiple-bars class=bv-no-focus-ring><span class=bd-content-title>Multiple bars<a class=anchorjs-link href=#multiple-bars aria-labelledby=multiple-bars></a></span></h2> <p>Include multiple <code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code> sub-components in a <code class=text-nowrap translate=no>&lt;b-progress&gt;</code> component to build a horizontally stacked set of progress bars.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[0]"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[1]"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[2]"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>show-progress</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[0]"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[1]"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[2]"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>show-value</span> <span class=hljs-attr>striped</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-3"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[0]"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[1]"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[2]"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-progress</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"max"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[0]"</span> <span class=hljs-attr>show-progress</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[1]"</span> <span class=hljs-attr>animated</span> <span class=hljs-attr>show-progress</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-progress-bar</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"values[2]"</span> <span class=hljs-attr>striped</span> <span class=hljs-attr>show-progress</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-progress-bar</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-progress</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>values</span>: [<span class=hljs-number>15</span>, <span class=hljs-number>30</span>, <span class=hljs-number>20</span>],\n        <span class=hljs-attr>max</span>: <span class=hljs-number>100</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-progress-multiple.vue --&gt;</span></pre></div><p><code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code> will inherit most of the props from the <code class=text-nowrap translate=no>&lt;b-progress&gt;</code> parent component, but you can override any of the props by setting them on the <code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code></p> <p>Notes:</p> <ul> <li><code class=text-nowrap translate=no>height</code>, if specified, should always set on the <code class=text-nowrap translate=no>&lt;b-progress&gt;</code> component.</li> <li><code class=text-nowrap translate=no>&lt;b-progress-bar&gt;</code> will not inherit <code class=text-nowrap translate=no>value</code> from <code class=text-nowrap translate=no>&lt;b-progress&gt;</code>.</li> </ul> '}}]);