(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{401:function(n,t){n.exports='<h1 id=buttons class=bv-no-focus-ring><span class=bd-content-title>Buttons</span></h1> <p class=bd-lead>Use Bootstrap&#39;s custom <code class=text-nowrap translate=no>b-button</code> component for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</p> <h2 id=overview class=bv-no-focus-ring><span class=bd-content-title>Overview<a class=anchorjs-link href=#overview aria-labelledby=overview></a></span></h2> <p>BootstrapVue&#39;s <code class=text-nowrap translate=no>&lt;b-button&gt;</code> component generates either a <code class=text-nowrap translate=no>&lt;button&gt;</code> element, <code class=text-nowrap translate=no>&lt;a&gt;</code> element, or <code class=text-nowrap translate=no>&lt;router-link&gt;</code> component with the styling of a button.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"danger"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-primary"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button.vue --&gt;</span></pre></div><h2 id=element-type class=bv-no-focus-ring><span class=bd-content-title>Element type<a class=anchorjs-link href=#element-type aria-labelledby=element-type></a></span></h2> <p>The <code class=text-nowrap translate=no>&lt;b-button&gt;</code> component generally renders a <code class=text-nowrap translate=no>&lt;button&gt;</code> element. However, you can also render an <code class=text-nowrap translate=no>&lt;a&gt;</code> element by providing an <code class=text-nowrap translate=no>href</code> prop value. You may also generate <code class=text-nowrap translate=no>vue-router</code> <code class=text-nowrap translate=no>&lt;router-link&gt;</code> when providing a value for the <code class=text-nowrap translate=no>to</code> prop (<code class=text-nowrap translate=no>vue-router</code> is required).</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>I am a Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>href</span>=<span class=hljs-string>"#"</span>&gt;</span>I am a Link<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-types.vue --&gt;</span></pre></div><h2 id=type class=bv-no-focus-ring><span class=bd-content-title>Type<a class=anchorjs-link href=#type aria-labelledby=type></a></span></h2> <p>You can specify the button&#39;s type by setting the prop <code class=text-nowrap translate=no>type</code> to <code class=text-nowrap translate=no>&#39;button&#39;</code>, <code class=text-nowrap translate=no>&#39;submit&#39;</code> or <code class=text-nowrap translate=no>&#39;reset&#39;</code>. The default type is <code class=text-nowrap translate=no>&#39;button&#39;</code>.</p> <p>Note the <code class=text-nowrap translate=no>type</code> prop has no effect when either <code class=text-nowrap translate=no>href</code> or <code class=text-nowrap translate=no>to</code> props are set.</p> <h2 id=sizing class=bv-no-focus-ring><span class=bd-content-title>Sizing<a class=anchorjs-link href=#sizing aria-labelledby=sizing></a></span></h2> <p>Fancy larger or smaller buttons? Specify <code class=text-nowrap translate=no>lg</code> or <code class=text-nowrap translate=no>sm</code> via the <code class=text-nowrap translate=no>size</code> prop.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>b-row</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>lg</span>=<span class=hljs-string>"4"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"pb-2"</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span>&gt;</span>Small Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>lg</span>=<span class=hljs-string>"4"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"pb-2"</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>&gt;</span>Default Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-col</span> <span class=hljs-attr>lg</span>=<span class=hljs-string>"4"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"pb-2"</span>&gt;</span><span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"lg"</span>&gt;</span>Large Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-col</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>b-row</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-sizes.vue --&gt;</span></pre></div><h2 id=contextual-variants class=bv-no-focus-ring><span class=bd-content-title>Contextual variants<a class=anchorjs-link href=#contextual-variants aria-labelledby=contextual-variants></a></span></h2> <p>Use the <code class=text-nowrap translate=no>variant</code> prop to generate the various Bootstrap contextual button variants.</p> <p>By default <code class=text-nowrap translate=no>&lt;b-button&gt;</code> will render with the <code class=text-nowrap translate=no>secondary</code> variant.</p> <p>The <code class=text-nowrap translate=no>variant</code> prop adds the Bootstrap v4.3 class <code class=text-nowrap translate=no>.btn-&lt;variant&gt;</code> on the rendered button.</p> <h3 id=solid-color-variants class=bv-no-focus-ring><span class=bd-content-title>Solid color variants<a class=anchorjs-link href=#solid-color-variants aria-labelledby=solid-color-variants></a></span></h3> <p><code class=text-nowrap translate=no>primary</code>, <code class=text-nowrap translate=no>secondary</code>, <code class=text-nowrap translate=no>success</code>, <code class=text-nowrap translate=no>danger</code>, <code class=text-nowrap translate=no>warning</code>, <code class=text-nowrap translate=no>info</code>, <code class=text-nowrap translate=no>light</code> and <code class=text-nowrap translate=no>dark</code>.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span>&gt;</span>Primary<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"secondary"</span>&gt;</span>Secondary<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span>&gt;</span>Success<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"danger"</span>&gt;</span>Danger<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"warning"</span>&gt;</span>Warning<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span>&gt;</span>Info<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"light"</span>&gt;</span>Light<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"dark"</span>&gt;</span>Dark<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-solid.vue --&gt;</span></pre></div><h3 id=outline-color-variants class=bv-no-focus-ring><span class=bd-content-title>Outline color variants<a class=anchorjs-link href=#outline-color-variants aria-labelledby=outline-color-variants></a></span></h3> <p>In need of a button, but not the hefty background colors they bring? Use the <code class=text-nowrap translate=no>outline-*</code> variants to remove all background images and colors on any <code class=text-nowrap translate=no>&lt;b-button&gt;</code>:</p> <p><code class=text-nowrap translate=no>outline-primary</code>, <code class=text-nowrap translate=no>outline-secondary</code>, <code class=text-nowrap translate=no>outline-success</code>, <code class=text-nowrap translate=no>outline-danger</code>, <code class=text-nowrap translate=no>outline-warning</code>, <code class=text-nowrap translate=no>outline-info</code>, <code class=text-nowrap translate=no>outline-light</code> and <code class=text-nowrap translate=no>outline-dark</code>.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-primary"</span>&gt;</span>Primary<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-secondary"</span>&gt;</span>Secondary<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-success"</span>&gt;</span>Success<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-danger"</span>&gt;</span>Danger<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-warning"</span>&gt;</span>Warning<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-info"</span>&gt;</span>Info<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-light"</span>&gt;</span>Light<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-dark"</span>&gt;</span>Dark<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-outline.vue --&gt;</span></pre></div><h3 id=link-variant class=bv-no-focus-ring><span class=bd-content-title>Link variant<a class=anchorjs-link href=#link-variant aria-labelledby=link-variant></a></span></h3> <p>Variant <code class=text-nowrap translate=no>link</code> will render a button with the appearance of a link while maintaining the default padding and size of a button.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"link"</span>&gt;</span>Link<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-link.vue --&gt;</span></pre></div><p><strong>Tip:</strong> remove the hover underline from a link variant button by adding the Bootstrap v4.3 utility class <code class=text-nowrap translate=no>text-decoration-none</code> to <code class=text-nowrap translate=no>&lt;b-button&gt;</code>.</p> <h2 id=block-level-buttons class=bv-no-focus-ring><span class=bd-content-title>Block level buttons<a class=anchorjs-link href=#block-level-buttons aria-labelledby=block-level-buttons></a></span></h2> <p>Create block level buttons — those that span the full width of a parent — by setting the <code class=text-nowrap translate=no>block</code> prop.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>block</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span>&gt;</span>Block Level Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-block.vue --&gt;</span></pre></div><h2 id=pill-style class=bv-no-focus-ring><span class=bd-content-title>Pill style<a class=anchorjs-link href=#pill-style aria-labelledby=pill-style></a></span></h2> <p>Prefer buttons with a more rounded-pill style? Just set the prop <code class=text-nowrap translate=no>pill</code> to true.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>pill</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>pill</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>pill</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-secondary"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>pill</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>pill</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-danger"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>pill</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-pill.vue --&gt;</span></pre></div><p>This prop adds the Bootstrap v4.3 utility class <code class=text-nowrap translate=no>.rounded-pill</code> on the rendered button.</p> <h2 id=squared-style class=bv-no-focus-ring><span class=bd-content-title>Squared style<a class=anchorjs-link href=#squared-style aria-labelledby=squared-style></a></span></h2> <p>Prefer buttons with a more square corner style? Just set the prop <code class=text-nowrap translate=no>squared</code> to true.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>squared</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>squared</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>squared</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-secondary"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>squared</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>squared</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"outline-danger"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>squared</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"info"</span>&gt;</span>Button<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-square.vue --&gt;</span></pre></div><p>The <code class=text-nowrap translate=no>squared</code> prop adds the Bootstrap v4.3 utility class <code class=text-nowrap translate=no>.rounded-0</code> on the rendered button. The <code class=text-nowrap translate=no>pill</code> prop takes precedence over the <code class=text-nowrap translate=no>squared</code> prop.</p> <h2 id=disabled-state class=bv-no-focus-ring><span class=bd-content-title>Disabled state<a class=anchorjs-link href=#disabled-state aria-labelledby=disabled-state></a></span></h2> <p>Set the <code class=text-nowrap translate=no>disabled</code> prop to disable button default functionality. <code class=text-nowrap translate=no>disabled</code> also works with buttons rendered as <code class=text-nowrap translate=no>&lt;a&gt;</code> elements and <code class=text-nowrap translate=no>&lt;router-link&gt;</code> (i.e. with the <code class=text-nowrap translate=no>href</code> or <code class=text-nowrap translate=no>to</code> prop set).</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>disabled</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"lg"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span>&gt;</span>Disabled<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>disabled</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"lg"</span>&gt;</span>Also Disabled<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-disabled.vue --&gt;</span></pre></div><h2 id=pressed-state-and-toggling class=bv-no-focus-ring><span class=bd-content-title>Pressed state and toggling<a class=anchorjs-link href=#pressed-state-and-toggling aria-labelledby=pressed-state-and-toggling></a></span></h2> <p>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when the prop <code class=text-nowrap translate=no>pressed</code> is set to <code class=text-nowrap translate=no>true</code>.</p> <p>The <code class=text-nowrap translate=no>pressed</code> prop can be set to one of three values:</p> <ul> <li><code class=text-nowrap translate=no>true</code>: Sets the <code class=text-nowrap translate=no>.active</code> class and adds the attribute <code class=text-nowrap translate=no>aria-pressed=&quot;true&quot;</code>.</li> <li><code class=text-nowrap translate=no>false</code>: Clears the <code class=text-nowrap translate=no>.active</code> class and adds the attribute <code class=text-nowrap translate=no>aria-pressed=&quot;false&quot;</code>.</li> <li><code class=text-nowrap translate=no>null</code>: (default) Neither the class <code class=text-nowrap translate=no>.active</code> nor the attribute <code class=text-nowrap translate=no>aria-pressed</code> will be set.</li> </ul> <p>To create a button that can be toggled between active and non-active states, use the <code class=text-nowrap translate=no>.sync</code> prop modifier (available in Vue 2.3+) on the <code class=text-nowrap translate=no>pressed</code> property</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>Pressed and un-pressed state<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>:pressed</span>=<span class=hljs-string>"true"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span>&gt;</span>Always Pressed<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>:pressed</span>=<span class=hljs-string>"false"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"success"</span>&gt;</span>Not Pressed<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>Toggleable Button<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> <span class=hljs-attr>:pressed.sync</span>=<span class=hljs-string>"myToggle"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span>&gt;</span>Toggle Me<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>p</span>&gt;</span>Pressed State: <span class=hljs-tag>&lt;<span class=hljs-name>strong</span>&gt;</span>{{ myToggle }}<span class=hljs-tag>&lt;/<span class=hljs-name>strong</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>p</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>h5</span>&gt;</span>In a button group<span class=hljs-tag>&lt;/<span class=hljs-name>h5</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button-group</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span>\n        <span class=hljs-attr>v-for</span>=<span class=hljs-string>"(btn, idx) in buttons"</span>\n        <span class=hljs-attr>:key</span>=<span class=hljs-string>"idx"</span>\n        <span class=hljs-attr>:pressed.sync</span>=<span class=hljs-string>"btn.state"</span>\n        <span class=hljs-attr>variant</span>=<span class=hljs-string>"primary"</span>\n      &gt;</span>\n        {{ btn.caption }}\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-button-group</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>p</span>&gt;</span>Pressed States: <span class=hljs-tag>&lt;<span class=hljs-name>strong</span>&gt;</span>{{ btnStates }}<span class=hljs-tag>&lt;/<span class=hljs-name>strong</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>p</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>myToggle</span>: <span class=hljs-literal>false</span>,\n        <span class=hljs-attr>buttons</span>: [\n          { <span class=hljs-attr>caption</span>: <span class=hljs-string>\'Toggle 1\'</span>, <span class=hljs-attr>state</span>: <span class=hljs-literal>true</span> },\n          { <span class=hljs-attr>caption</span>: <span class=hljs-string>\'Toggle 2\'</span>, <span class=hljs-attr>state</span>: <span class=hljs-literal>false</span> },\n          { <span class=hljs-attr>caption</span>: <span class=hljs-string>\'Toggle 3\'</span>, <span class=hljs-attr>state</span>: <span class=hljs-literal>true</span> },\n          { <span class=hljs-attr>caption</span>: <span class=hljs-string>\'Toggle 4\'</span>, <span class=hljs-attr>state</span>: <span class=hljs-literal>false</span> }\n        ]\n      }\n    },\n    <span class=hljs-attr>computed</span>: {\n      btnStates() {\n        <span class=hljs-keyword>return</span> <span class=hljs-keyword>this</span>.buttons.map(<span class=hljs-function><span class=hljs-params>btn</span> =&gt;</span> btn.state)\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-button-toggles.vue --&gt;</span></pre></div><p>If using toggle button style for a radio or checkbox style interface, it is best to use the built-in <code class=text-nowrap translate=no>button</code> style support of <a href=/docs/components/form-radio class=font-weight-bold><code class=text-nowrap translate=no>&lt;b-form-radio-group&gt;</code></a> and <a href=/docs/components/form-checkbox class=font-weight-bold><code class=text-nowrap translate=no>&lt;b-form-checkbox-group&gt;</code></a>.</p> <h2 id=router-link-support class=bv-no-focus-ring><span class=bd-content-title>Router link support<a class=anchorjs-link href=#router-link-support aria-labelledby=router-link-support></a></span></h2> <p>Refer to the <a href=/docs/reference/router-links class=font-weight-bold><code class=text-nowrap translate=no>Router support</code></a> reference docs for the various supported <code class=text-nowrap translate=no>&lt;router-link&gt;</code> related props.</p> <p>Note the <code class=text-nowrap translate=no>&lt;router-link&gt;</code> prop <code class=text-nowrap translate=no>tag</code> is referred to as <code class=text-nowrap translate=no>router-tag</code> in <code class=text-nowrap translate=no>bootstrap-vue</code>.</p> <h2 id=accessibility class=bv-no-focus-ring><span class=bd-content-title>Accessibility<a class=anchorjs-link href=#accessibility aria-labelledby=accessibility></a></span></h2> <p>When the <code class=text-nowrap translate=no>href</code> prop is set to <code class=text-nowrap translate=no>&#39;#&#39;</code>, <code class=text-nowrap translate=no>&lt;b-button&gt;</code> will render a link (<code class=text-nowrap translate=no>&lt;a&gt;</code>) element with attribute <code class=text-nowrap translate=no>role=&quot;button&quot;</code> set and appropriate keydown listeners (<kbd class=notranslate translate=no>Enter</kbd> and <kbd class=notranslate translate=no>Space</kbd>) so that the link acts like a native HTML <code class=text-nowrap translate=no>&lt;button&gt;</code> for screen reader and keyboard-only users. When disabled, the <code class=text-nowrap translate=no>aria-disabled=&quot;true&quot;</code> attribute will be set on the <code class=text-nowrap translate=no>&lt;a&gt;</code> element.</p> <p>When the <code class=text-nowrap translate=no>href</code> is set to any other value (or the <code class=text-nowrap translate=no>to</code> prop is used), <code class=text-nowrap translate=no>role=&quot;button&quot;</code> will not be added, nor will the keyboard event listeners be enabled.</p> <h2 id=see-also class=bv-no-focus-ring><span class=bd-content-title>See also<a class=anchorjs-link href=#see-also aria-labelledby=see-also></a></span></h2> <ul> <li><a href=/docs/components/button-group class=font-weight-bold><code class=text-nowrap translate=no>&lt;b-button-group&gt;</code></a></li> <li><a href=/docs/components/button-toolbar class=font-weight-bold><code class=text-nowrap translate=no>&lt;b-button-toolbar&gt;</code></a></li> <li><a href=/docs/components/link class=font-weight-bold><code class=text-nowrap translate=no>&lt;b-link&gt;</code></a></li> <li><a href=/docs/reference/router-links class=font-weight-bold>Router Link Support</a></li> <li><a href=/docs/reference/color-variants class=font-weight-bold>Color Variants</a></li> </ul> '}}]);