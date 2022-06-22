import{_ as n,c as s}from"./app.fc0f621f.js";const a={},p=s(`<h1 id="compose\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#compose\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> compose\u65B9\u6CD5\u5B9E\u73B0</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728\u51FD\u6570\u5F0F\u7F16\u7A0B\u5F53\u4E2D\u6709\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u6982\u5FF5\u5C31\u662F\u51FD\u6570\u7EC4\u5408\uFF0C \u5B9E\u9645\u4E0A\u5C31\u662F\u628A\u5904\u7406\u6570\u636E\u7684\u51FD\u6570\u50CF\u7BA1\u9053\u4E00\u6837\u8FDE\u63A5\u8D77\u6765\uFF0C \u7136\u540E\u8BA9\u6570\u636E\u7A7F\u8FC7\u7BA1\u9053\u5F97\u5230\u6700\u7EC8\u7684\u7ED3\u679C\u3002</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> operate <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>div2<span class="token punctuation">,</span> mul3<span class="token punctuation">,</span> add1<span class="token punctuation">,</span> add1<span class="token punctuation">)</span>
<span class="token function">operate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//=&gt;\u76F8\u5F53\u4E8Ediv2(mul3(add1(add1(0)))) </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u624B\u5199</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">my_compose</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fn_arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>fn_arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token parameter">arg</span> <span class="token operator">=&gt;</span> arg\r
  <span class="token keyword">if</span><span class="token punctuation">(</span>fn_arr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> fn_arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\r
  <span class="token keyword">return</span> fn_arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fn1<span class="token punctuation">,</span>fn2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5);function t(e,o){return p}var r=n(a,[["render",t],["__file","compose.html.vue"]]);export{r as default};
