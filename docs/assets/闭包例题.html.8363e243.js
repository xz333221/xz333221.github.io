import{_ as n,c as s}from"./app.fc0f621f.js";const a={},p=s(`<h1 id="\u95ED\u5305\u4F8B\u9898" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u4F8B\u9898" aria-hidden="true">#</a> \u95ED\u5305\u4F8B\u9898</h1><p>\u9898\u76EE1</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">0</span>\r
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">v + 1 ==&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> v <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\r
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v<span class="token operator">++</span>\r
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\r
\r
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo() ==&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u9898\u76EE2</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\r
  <span class="token keyword">var</span> i\r
  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">i ==&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span>\r
  <span class="token keyword">return</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\r
<span class="token punctuation">}</span>\r
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u9898\u76EE3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token keyword">null</span>\r
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span>\r
  <span class="token keyword">function</span> <span class="token function">innerFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\r
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a ==&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
  fn <span class="token operator">=</span> innerFoo\r
<span class="token punctuation">}</span>\r
<span class="token keyword">const</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u9898\u76EE4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token keyword">null</span>\r
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span>\r
  <span class="token keyword">function</span> <span class="token function">innerFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\r
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">c ==&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>\r
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a ==&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
  fn <span class="token operator">=</span> innerFoo\r
<span class="token punctuation">}</span>\r
<span class="token keyword">const</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">100</span>\r
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,9);function t(o,e){return p}var l=n(a,[["render",t],["__file","\u95ED\u5305\u4F8B\u9898.html.vue"]]);export{l as default};
