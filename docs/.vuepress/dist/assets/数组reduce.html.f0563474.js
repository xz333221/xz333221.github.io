import{_ as n,c as s}from"./app.331a3634.js";const a={},p=s(`<h1 id="\u6570\u7EC4reduce\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4reduce\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> \u6570\u7EC4reduce\u65B9\u6CD5\u5B9E\u73B0</h1><h4 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>callback<span class="token punctuation">[</span><span class="token punctuation">,</span>initialValue<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>MDN\u7684polyfill</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;myReduce&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
  <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token comment">//\u7279\u6B8A\u5904\u7406</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;reduce called on null or undefined!&#39;</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>callback <span class="token operator">+</span> <span class="token string">&#39;is not a function!&#39;</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\r
    <span class="token comment">// &gt;&gt;&gt; 0: \u6240\u6709\u975E\u6570\u503C\u8F6C\u6362\u62100\uFF0C\u6240\u6709\u5927\u4E8E\u7B49\u4E8E 0 \u7B49\u6570\u53D6\u6574\u6570\u90E8\u5206</span>\r
    <span class="token keyword">let</span> len <span class="token operator">=</span> o<span class="token punctuation">.</span>length <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span>\r
\r
    <span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span>\r
    <span class="token keyword">let</span> value\r
\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      value <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\r
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\r
      <span class="token comment">// \u5904\u7406\u7A7Aindex</span>\r
      <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>k <span class="token keyword">in</span> o<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        k<span class="token operator">++</span>\r
      <span class="token punctuation">}</span>\r
      <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;=</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Reduce of empty array with no initial value&#39;</span><span class="token punctuation">)</span>\r
      <span class="token punctuation">}</span>\r
      value <span class="token operator">=</span> o<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token keyword">in</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        value <span class="token operator">=</span> <span class="token function">callback</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> o<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> o<span class="token punctuation">)</span>\r
      <span class="token punctuation">}</span>\r
      k<span class="token operator">++</span>\r
    <span class="token punctuation">}</span>\r
    <span class="token keyword">return</span> value\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>\u624B\u5199</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myReduce2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cb_fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\r
  <span class="token keyword">let</span> init_index <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span>\r
  <span class="token keyword">let</span> value <span class="token operator">=</span> init_index <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\r
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> init_index<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> arr<span class="token punctuation">)</span>\r
      value <span class="token operator">=</span> <span class="token function">cb_fn</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
  <span class="token keyword">return</span> value\r
<span class="token punctuation">}</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,7);function e(t,o){return p}var l=n(a,[["render",e],["__file","\u6570\u7EC4reduce.html.vue"]]);export{l as default};
