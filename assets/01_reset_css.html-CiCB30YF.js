import{_ as s,c as a,b as e,o as l}from"./app-CUDFWA7u.js";const i={};function p(c,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="normalize-css" tabindex="-1"><a class="header-anchor" href="#normalize-css"><span>normalize.css</span></a></h1><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Document</span>
<span class="line">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Correct the line height in all browsers.</span>
<span class="line"> * 2. Prevent adjustments of font size after orientation changes in iOS.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.15<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Sections</span>
<span class="line">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Remove the margin in all browsers.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Render the \`main\` element consistently in IE.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">main</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Correct the font size and margin on \`h1\` elements within \`section\` and</span>
<span class="line"> * \`article\` contexts in Chrome, Firefox, and Safari.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0.67em 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Grouping content</span>
<span class="line">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Add the correct box sizing in Firefox.</span>
<span class="line"> * 2. Show the overflow in Edge and IE.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">hr</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Correct the inheritance and scaling of font size in all browsers.</span>
<span class="line"> * 2. Correct the odd \`em\` font sizing in all browsers.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">pre</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> monospace<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Text-level semantics</span>
<span class="line">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Remove the gray background on active links in IE 10.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">a</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Remove the bottom border in Chrome 57-</span>
<span class="line"> * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">abbr[title]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line">  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline dotted<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Add the correct font weight in Chrome, Edge, and Safari.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">b,</span>
<span class="line">strong</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> bolder<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Correct the inheritance and scaling of font size in all browsers.</span>
<span class="line"> * 2. Correct the odd \`em\` font sizing in all browsers.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">code,</span>
<span class="line">kbd,</span>
<span class="line">samp</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> monospace<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Add the correct font size in all browsers.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">small</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Prevent \`sub\` and \`sup\` elements from affecting the line height in</span>
<span class="line"> * all browsers.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">sub,</span>
<span class="line">sup</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">sub</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">bottom</span><span class="token punctuation">:</span> -0.25em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">sup</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">top</span><span class="token punctuation">:</span> -0.5em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Embedded content</span>
<span class="line">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Remove the border on images inside links in IE 10.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">img</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Forms</span>
<span class="line">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Change the font styles in all browsers.</span>
<span class="line"> * 2. Remove the margin in Firefox and Safari.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">button,</span>
<span class="line">input,</span>
<span class="line">optgroup,</span>
<span class="line">select,</span>
<span class="line">textarea</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.15<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Show the overflow in IE.</span>
<span class="line"> * 1. Show the overflow in Edge.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">button,</span>
<span class="line">input</span> <span class="token punctuation">{</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Remove the inheritance of text transform in Edge, Firefox, and IE.</span>
<span class="line"> * 1. Remove the inheritance of text transform in Firefox.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">button,</span>
<span class="line">select</span> <span class="token punctuation">{</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">text-transform</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Correct the inability to style clickable types in iOS and Safari.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">button,</span>
<span class="line">[type=&quot;button&quot;],</span>
<span class="line">[type=&quot;reset&quot;],</span>
<span class="line">[type=&quot;submit&quot;]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Remove the inner border and padding in Firefox.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">button::-moz-focus-inner,</span>
<span class="line">[type=&quot;button&quot;]::-moz-focus-inner,</span>
<span class="line">[type=&quot;reset&quot;]::-moz-focus-inner,</span>
<span class="line">[type=&quot;submit&quot;]::-moz-focus-inner</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Restore the focus styles unset by the previous rule.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">button:-moz-focusring,</span>
<span class="line">[type=&quot;button&quot;]:-moz-focusring,</span>
<span class="line">[type=&quot;reset&quot;]:-moz-focusring,</span>
<span class="line">[type=&quot;submit&quot;]:-moz-focusring</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">outline</span><span class="token punctuation">:</span> 1px dotted ButtonText<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Correct the padding in Firefox.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">fieldset</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 0.35em 0.75em 0.625em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Correct the text wrapping in Edge and IE.</span>
<span class="line"> * 2. Correct the color inheritance from \`fieldset\` elements in IE.</span>
<span class="line"> * 3. Remove the padding so developers are not caught out when they zero out</span>
<span class="line"> *    \`fieldset\` elements in all browsers.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">legend</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 3 */</span></span>
<span class="line">  <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Add the correct vertical alignment in Chrome, Firefox, and Opera.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">progress</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Remove the default vertical scrollbar in IE 10+.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">textarea</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Add the correct box sizing in IE 10.</span>
<span class="line"> * 2. Remove the padding in IE 10.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">[type=&quot;checkbox&quot;],</span>
<span class="line">[type=&quot;radio&quot;]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Correct the cursor style of increment and decrement buttons in Chrome.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">[type=&quot;number&quot;]::-webkit-inner-spin-button,</span>
<span class="line">[type=&quot;number&quot;]::-webkit-outer-spin-button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Correct the odd appearance in Chrome and Safari.</span>
<span class="line"> * 2. Correct the outline style in Safari.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">[type=&quot;search&quot;]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> textfield<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">outline-offset</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Remove the inner padding in Chrome and Safari on macOS.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">[type=&quot;search&quot;]::-webkit-search-decoration</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * 1. Correct the inability to style clickable types in iOS and Safari.</span>
<span class="line"> * 2. Change font properties to \`inherit\` in Safari.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">::-webkit-file-upload-button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span> <span class="token comment">/* 1 */</span></span>
<span class="line">  <span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span> <span class="token comment">/* 2 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Interactive</span>
<span class="line">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * Add the correct display in Edge, IE 10+, and Firefox.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">details</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line"> * Add the correct display in all browsers.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">summary</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> list-item<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Misc</span>
<span class="line">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Add the correct display in IE 10+.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">template</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * Add the correct display in IE 10.</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">[hidden]</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="reset-css" tabindex="-1"><a class="header-anchor" href="#reset-css"><span>Reset.css</span></a></h1><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* http://meyerweb.com/eric/tools/css/reset/ </span>
<span class="line">   v2.0 | 20110126</span>
<span class="line">   License: none (public domain)</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">html, body, div, span, applet, object, iframe,</span>
<span class="line">h1, h2, h3, h4, h5, h6, p, blockquote, pre,</span>
<span class="line">a, abbr, acronym, address, big, cite, code,</span>
<span class="line">del, dfn, em, img, ins, kbd, q, s, samp,</span>
<span class="line">small, strike, strong, sub, sup, tt, var,</span>
<span class="line">b, u, i, center,</span>
<span class="line">dl, dt, dd, ol, ul, li,</span>
<span class="line">fieldset, form, label, legend,</span>
<span class="line">table, caption, tbody, tfoot, thead, tr, th, td,</span>
<span class="line">article, aside, canvas, details, embed, </span>
<span class="line">figure, figcaption, footer, header, hgroup, </span>
<span class="line">menu, nav, output, ruby, section, summary,</span>
<span class="line">time, mark, audio, video</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/* HTML5 display-role reset for older browsers */</span></span>
<span class="line"><span class="token selector">article, aside, details, figcaption, figure, </span>
<span class="line">footer, header, hgroup, menu, nav, section</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">ol, ul</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">blockquote, q</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">quotes</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">blockquote:before, blockquote:after,</span>
<span class="line">q:before, q:after</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">content</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">table</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span></span>
<span class="line">	<span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const o=s(i,[["render",p]]),d=JSON.parse('{"path":"/blogs/tech/programming/web/01_reset_css.html","title":"重置 CSS 模板","lang":"en-US","frontmatter":{"title":"重置 CSS 模板","date":"2024-05-04T00:00:00.000Z","tags":["Programming","CSS"],"categories":["tech"]},"headers":[],"git":{"createdTime":1766826955000,"updatedTime":1766826955000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":1}]},"filePathRelative":"blogs/tech/programming/web/01_reset_css.md"}');export{o as comp,d as data};
