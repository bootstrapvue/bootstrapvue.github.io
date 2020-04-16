(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{413:function(n,t){n.exports='<h1 id=form-file-input class=bv-no-focus-ring><span class=bd-content-title>Form File Input</span></h1> <p class=bd-lead>Customized, cross-browser consistent, file input control that supports single file, multiple files, and directory upload (for browsers that support directory mode)</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-comment>&lt;!-- Styled --&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span>\n      <span class=hljs-attr>v-model</span>=<span class=hljs-string>"file"</span>\n      <span class=hljs-attr>:state</span>=<span class=hljs-string>"Boolean(file)"</span>\n      <span class=hljs-attr>placeholder</span>=<span class=hljs-string>"Choose a file or drop it here..."</span>\n      <span class=hljs-attr>drop-placeholder</span>=<span class=hljs-string>"Drop file here..."</span>\n    &gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>Selected file: {{ file ? file.name : \'\' }}<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n    <span class=hljs-comment>&lt;!-- Plain mode --&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>"file2"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span> <span class=hljs-attr>plain</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-3"</span>&gt;</span>Selected file: {{ file2 ? file2.name : \'\' }}<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>file</span>: <span class=hljs-literal>null</span>,\n        <span class=hljs-attr>file2</span>: <span class=hljs-literal>null</span>\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-file.vue --&gt;</span></pre></div><p>For cross browser consistency, Form file defaults to the Bootstrap custom file input to replace the browser defaults. They&#39;re built on top of semantic and accessible markup, so it is a solid replacement for the default file input.</p> <h2 id=single-file-default class=bv-no-focus-ring><span class=bd-content-title>Single file (default)<a class=anchorjs-link href=#single-file-default aria-labelledby=single-file-default></a></span></h2> <p>On single file mode, when no file is selected or user cancels Browse dialog, <code class=text-nowrap translate=no>v-model</code> is <code class=text-nowrap translate=no>null</code> indicating no file selected. When a file is selected the return value will be a JavaScript <a href=https://developer.mozilla.org/en/docs/Web/API/File target=_blank rel=noopener><code class=text-nowrap translate=no>File</code></a> object instance.</p> <h2 id=multiple-files class=bv-no-focus-ring><span class=bd-content-title>Multiple files<a class=anchorjs-link href=#multiple-files aria-labelledby=multiple-files></a></span></h2> <p>Multiple file uploading is supported by adding <code class=text-nowrap translate=no>multiple</code> prop to component. In this case <code class=text-nowrap translate=no>v-model</code> is <em>always</em> an <code class=text-nowrap translate=no>Array</code>. When no files are selected, an empty array will be returned. When a file or files are selected the return value will be an array of JavaScript <a href=https://developer.mozilla.org/en/docs/Web/API/File target=_blank rel=noopener><code class=text-nowrap translate=no>File</code></a> object instances.</p> <h2 id=directory-mode class=bv-no-focus-ring><span class=bd-content-title>Directory mode<a class=anchorjs-link href=#directory-mode aria-labelledby=directory-mode></a></span></h2> <p>By adding <code class=text-nowrap translate=no>directory</code> prop, the user can select directories instead of files. When a directory is selected, the directory and its entire hierarchy of contents are included in the set of selected items. The selected file system entries can be obtained using the <code class=text-nowrap translate=no>webkitEntries</code> property.</p> <p><strong>CAUTION</strong> This is a non standard feature while being supported by latest Firefox and Chrome versions, and should not be relied for production. <a href=https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory target=_blank rel=noopener>Read more on MDN</a></p> <p>Directory mode is not supported when the file input is in plain mode.</p> <h2 id=drag-and-drop-support class=bv-no-focus-ring><span class=bd-content-title>Drag and Drop support<a class=anchorjs-link href=#drag-and-drop-support aria-labelledby=drag-and-drop-support></a></span></h2> <p>Drop mode is enabled by default. It can disabled by setting the <code class=text-nowrap translate=no>no-drop</code> prop. <code class=text-nowrap translate=no>no-drop</code>has no effect in plain mode.</p> <p>You can optionally set a different placeholder while dragging via the <code class=text-nowrap translate=no>drop-placeholder</code> prop. The default is no drop placeholder text. Only plain text is supported. HTML and components are not supported. The <code class=text-nowrap translate=no>drop-placeholder</code> prop has no effect if <code class=text-nowrap translate=no>no-drop</code>is set or in <code class=text-nowrap translate=no>plain</code> mode,</p> <h2 id=limiting-to-certain-file-types class=bv-no-focus-ring><span class=bd-content-title>Limiting to certain file types<a class=anchorjs-link href=#limiting-to-certain-file-types aria-labelledby=limiting-to-certain-file-types></a></span></h2> <p>You can limit the file types by setting the <code class=text-nowrap translate=no>accept</code> prop to a string containing the allowed file type(s). To specify more than one type, separate the values with a comma.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-comment>&lt;!-- Accept all image formats by IANA media type wildcard--&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>accept</span>=<span class=hljs-string>"image/*"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n\n  <span class=hljs-comment>&lt;!-- Accept specific image formats by IANA type --&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>accept</span>=<span class=hljs-string>"image/jpeg, image/png, image/gif"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n\n  <span class=hljs-comment>&lt;!-- Accept specific image formats by extension --&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>accept</span>=<span class=hljs-string>".jpg, .png, .gif"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span></pre></div><p>To accept any file type, leave <code class=text-nowrap translate=no>accept</code> as null (default). You can mix and match IANA media types and extensions.</p> <p>Refer to <a href=https://www.iana.org/assignments/media-types/ target=_blank rel=noopener>IANA Media Types</a> for a complete list of standard media types.</p> <p><strong>Note:</strong> Not all browsers support or respect the <code class=text-nowrap translate=no>accept</code> attribute on file inputs.</p> <h2 id=customizing class=bv-no-focus-ring><span class=bd-content-title>Customizing<a class=anchorjs-link href=#customizing aria-labelledby=customizing></a></span></h2> <p><code class=text-nowrap translate=no>&lt;b-form-file&gt;</code>, when not in <a href=#non-custom-file-input class=font-weight-bold><code class=text-nowrap translate=no>plain</code> mode</a>, provides several features for customizing its appearance.</p> <h3 id=control-sizing class=bv-no-focus-ring><span class=bd-content-title>Control sizing<a class=anchorjs-link href=#control-sizing aria-labelledby=control-sizing></a></span></h3> <p>Use the <code class=text-nowrap translate=no>size</code> prop to control the visual size of the input. The default size is considered <code class=text-nowrap translate=no>md</code> (medium). Optional sizes are <code class=text-nowrap translate=no>lg</code> (large) and <code class=text-nowrap translate=no>sm</code> (small). These sizes line up with the sizes available on other form controls.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"Small:"</span> <span class=hljs-attr>label-for</span>=<span class=hljs-string>"file-small"</span> <span class=hljs-attr>label-cols-sm</span>=<span class=hljs-string>"2"</span> <span class=hljs-attr>label-size</span>=<span class=hljs-string>"sm"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"file-small"</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"Default:"</span> <span class=hljs-attr>label-for</span>=<span class=hljs-string>"file-default"</span> <span class=hljs-attr>label-cols-sm</span>=<span class=hljs-string>"2"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"file-default"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-group</span> <span class=hljs-attr>label</span>=<span class=hljs-string>"Large:"</span> <span class=hljs-attr>label-for</span>=<span class=hljs-string>"file-large"</span> <span class=hljs-attr>label-cols-sm</span>=<span class=hljs-string>"2"</span> <span class=hljs-attr>label-size</span>=<span class=hljs-string>"lg"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"file-large"</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"lg"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-group</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-file-sizes.vue --&gt;</span></pre></div><p><strong>Note:</strong> Bootstrap v4.x does not natively support sizes for the custom file control. However, BootstrapVue includes custom SCSS/CSS that adds support for sizing the custom file input control.</p> <h3 id=customize-the-placeholder-text class=bv-no-focus-ring><span class=bd-content-title>Customize the placeholder text<a class=anchorjs-link href=#customize-the-placeholder-text aria-labelledby=customize-the-placeholder-text></a></span></h3> <p>Use the prop <code class=text-nowrap translate=no>placeholder</code> to change the prompt text that is shown when no files are selected. Only plain text is supported. HTML and components are not supported.</p> <h3 id=customize-browse-button-label class=bv-no-focus-ring><span class=bd-content-title>Customize browse button label<a class=anchorjs-link href=#customize-browse-button-label aria-labelledby=customize-browse-button-label></a></span></h3> <p>If you want to globally change <code class=text-nowrap translate=no>Browse</code> label, you can add something like this to your global stylesheets. Also it is advised to use <a href=https://developer.mozilla.org/en-US/docs/Web/CSS/:lang target=_blank rel=noopener>:lang()</a> for multi-language sites.</p> <div class=bd-code><pre class="hljs css p-2" translate=no><span class=hljs-selector-class>.custom-file-input</span><span class=hljs-selector-pseudo>:lang(en)</span> ~ <span class=hljs-selector-class>.custom-file-label</span><span class=hljs-selector-pseudo>::after</span> {\n  <span class=hljs-attribute>content</span>: <span class=hljs-string>\'Browse\'</span>;\n}</pre></div><p>Alternatively you can set the content of the custom file browse button text via the <code class=text-nowrap translate=no>browse-text</code> prop. Note, only plain text is supported. HTML and components are not supported.</p> <h3 id=file-name-formatter-function class=bv-no-focus-ring><span class=bd-content-title>File name formatter function<a class=anchorjs-link href=#file-name-formatter-function aria-labelledby=file-name-formatter-function></a></span></h3> <p>Set the prop <code class=text-nowrap translate=no>file-name-formatter</code> to a function that accepts a single argument which is an array of <a href=https://developer.mozilla.org/en-US/docs/Web/API/File target=_blank rel=noopener><code class=text-nowrap translate=no>File</code></a> objects. The function should return a single formatted string (HTML is not supported). The formatter will not be called if no files are selected.</p> <p>Regardless of if the prop <code class=text-nowrap translate=no>multiple</code> is set or not, the argument to the formatter will always be an array.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>multiple</span> <span class=hljs-attr>:file-name-formatter</span>=<span class=hljs-string>"formatNames"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    <span class=hljs-attr>methods</span>: {\n      formatNames(files) {\n        <span class=hljs-keyword>if</span> (files.length === <span class=hljs-number>1</span>) {\n          <span class=hljs-keyword>return</span> files[<span class=hljs-number>0</span>].name\n        } <span class=hljs-keyword>else</span> {\n          <span class=hljs-keyword>return</span> <span class=hljs-string>`<span class=hljs-subst>${files.length}</span> files selected`</span>\n        }\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- file-formatter-function.vue --&gt;</span></pre></div><h3 id=file-name-formatting-via-scoped-slot class=bv-no-focus-ring><span class=bd-content-title>File name formatting via scoped slot<a class=anchorjs-link href=#file-name-formatting-via-scoped-slot aria-labelledby=file-name-formatting-via-scoped-slot></a></span></h3> <p>Alternatively, you can use the scoped slot <code class=text-nowrap translate=no>file-name</code> to render the file names. The scoped slot will receive the following properties:</p> <div class=table-responsive-sm><table class="b-table table table-bordered table-striped bv-docs-table"> <thead class=thead-default> <tr> <th>Property</th> <th>Type</th> <th>Description</th> </tr> </thead> <tbody><tr> <td><code class=text-nowrap translate=no>files</code></td> <td>Array</td> <td>Array of <code class=text-nowrap translate=no>File</code> objects</td> </tr> <tr> <td><code class=text-nowrap translate=no>names</code></td> <td>Array</td> <td>Array of file names</td> </tr> </tbody></table> </div><p>Both properties are always arrays, regardless of the setting of the <code class=text-nowrap translate=no>multiple</code> prop.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>multiple</span>&gt;</span>\n   <span class=hljs-tag>&lt;<span class=hljs-name>template</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>"file-name"</span> <span class=hljs-attr>slot-scope</span>=<span class=hljs-string>"{ names }"</span>&gt;</span>\n     <span class=hljs-tag>&lt;<span class=hljs-name>b-badge</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"dark"</span>&gt;</span>{{ names[0] }}<span class=hljs-tag>&lt;/<span class=hljs-name>b-badge</span>&gt;</span>\n     <span class=hljs-tag>&lt;<span class=hljs-name>b-badge</span> <span class=hljs-attr>v-if</span>=<span class=hljs-string>"names.length &gt; 1"</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>"dark"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"ml-1"</span>&gt;</span>\n       + {{ names.length - 1 }} More files\n     <span class=hljs-tag>&lt;/<span class=hljs-name>b-badge</span>&gt;</span>\n   <span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- file-formatter-slot.vue --&gt;</span></pre></div><p>When using the <code class=text-nowrap translate=no>file-name</code> slot, the <code class=text-nowrap translate=no>file-name-formatter</code> prop is ignored. Also, the slot will not be rendered when there are no file(s) selected.</p> <h2 id=non-custom-file-input class=bv-no-focus-ring><span class=bd-content-title>Non custom file input<a class=anchorjs-link href=#non-custom-file-input aria-labelledby=non-custom-file-input></a></span></h2> <p>You can have <code class=text-nowrap translate=no>&lt;b-form-file&gt;</code> render a browser native file input by setting the <code class=text-nowrap translate=no>plain</code> prop. Note that many of the custom form-file features do not apply when <code class=text-nowrap translate=no>plain</code> is set.</p> <h2 id=contextual-state-feedback class=bv-no-focus-ring><span class=bd-content-title>Contextual state feedback<a class=anchorjs-link href=#contextual-state-feedback aria-labelledby=contextual-state-feedback></a></span></h2> <p>Bootstrap includes validation styles for <code class=text-nowrap translate=no>valid</code> and <code class=text-nowrap translate=no>invalid</code> states on most form controls.</p> <p>Generally speaking, you&#39;ll want to use a particular state for specific types of feedback:</p> <ul> <li><code class=text-nowrap translate=no>false</code> (denotes invalid state) is great for when there&#39;s a blocking or required field. A user must fill in this field properly to submit the form.</li> <li><code class=text-nowrap translate=no>true</code> (denotes valid state) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields.</li> <li><code class=text-nowrap translate=no>null</code> Displays no validation state (neither valid nor invalid)</li> </ul> <p>To apply one of the contextual state icons on <code class=text-nowrap translate=no>&lt;b-form-file&gt;</code>, set the <code class=text-nowrap translate=no>state</code> prop to <code class=text-nowrap translate=no>false</code> (for invalid), <code class=text-nowrap translate=no>true</code> (for valid), or <code class=text-nowrap translate=no>null</code> (no validation state).</p> <p><strong>Note:</strong> Contextual states are <strong>not</strong> supported when in button mode.</p> <h2 id=autofocus class=bv-no-focus-ring><span class=bd-content-title>Autofocus<a class=anchorjs-link href=#autofocus aria-labelledby=autofocus></a></span></h2> <p>When the <code class=text-nowrap translate=no>autofocus</code> prop is set on <code class=text-nowrap translate=no>&lt;b-form-file&gt;</code>, the input will be auto-focused when it is inserted (i.e. <strong>mounted</strong>) into the document, or re-activated when inside a Vue <code class=text-nowrap translate=no>&lt;keep-alive&gt;</code> component. Note that this prop <strong>does not</strong> set the <code class=text-nowrap translate=no>autofocus</code> attribute on the input, nor can it tell when the input becomes visible.</p> <h2 id=accessibility class=bv-no-focus-ring><span class=bd-content-title>Accessibility<a class=anchorjs-link href=#accessibility aria-labelledby=accessibility></a></span></h2> <p>When using the custom version of <code class=text-nowrap translate=no>&lt;b-form-file&gt;</code> input which hides the original input, it is <strong>highly recommended</strong> that you supply a document unique ID string via the <code class=text-nowrap translate=no>id</code> prop. This will automatically render the extra ARIA attributes required to improve usability for persons using assistive technologies.</p> <h2 id=clearing-the-file-selection class=bv-no-focus-ring><span class=bd-content-title>Clearing the file selection<a class=anchorjs-link href=#clearing-the-file-selection aria-labelledby=clearing-the-file-selection></a></span></h2> <p>With inputs of type file, normally the <code class=text-nowrap translate=no>v-model</code> is uni-directional (meaning you cannot pre-set the selected files). However, you can clear the file input&#39;s selected files by setting the <code class=text-nowrap translate=no>v-model</code> to either <code class=text-nowrap translate=no>null</code> (for single mode) or an empty array <code class=text-nowrap translate=no>[]</code> (for multiple/directory mode).</p> <p>Alternatively, <code class=text-nowrap translate=no>&lt;b-form-file&gt;</code> provides a <code class=text-nowrap translate=no>reset()</code> method that can be called to clear the file input. To take advantage of the <code class=text-nowrap translate=no>reset()</code> method, you will need to obtain a reference to the <code class=text-nowrap translate=no>&lt;b-form-file&gt;</code> component.</p> <div class=bd-code><pre class="hljs html p-2" translate=no><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-file</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>"file"</span> <span class=hljs-attr>ref</span>=<span class=hljs-string>"file-input"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mb-2"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-file</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> @<span class=hljs-attr>click</span>=<span class=hljs-string>"clearFiles"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mr-2"</span>&gt;</span>Reset via method<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-button</span> @<span class=hljs-attr>click</span>=<span class=hljs-string>"file = null"</span>&gt;</span>Reset via v-model<span class=hljs-tag>&lt;/<span class=hljs-name>b-button</span>&gt;</span>\n\n    <span class=hljs-tag>&lt;<span class=hljs-name>p</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"mt-2"</span>&gt;</span>Selected file: <span class=hljs-tag>&lt;<span class=hljs-name>b</span>&gt;</span>{{ file ? file.name : \'\' }}<span class=hljs-tag>&lt;/<span class=hljs-name>b</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>p</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>file</span>: <span class=hljs-literal>null</span>\n      }\n    },\n    <span class=hljs-attr>methods</span>: {\n      clearFiles() {\n        <span class=hljs-keyword>this</span>.$refs[<span class=hljs-string>\'file-input\'</span>].reset()\n      }\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- b-form-file-reset.vue --&gt;</span></pre></div><p><strong>Implementation note:</strong> As not all browsers allow setting a value of a file input (even to null or an empty string), <code class=text-nowrap translate=no>b-form-input</code> employs a technique that works cross-browser that involves changing the input type to <code class=text-nowrap translate=no>null</code> and then immediately back to type <code class=text-nowrap translate=no>file</code>.</p> '}}]);