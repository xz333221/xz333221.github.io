import{_ as n,c as s}from"./app.331a3634.js";const a={},p=s(`<h1 id="call-bind-apply\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#call-bind-apply\u5B9E\u73B0" aria-hidden="true">#</a> call bind apply\u5B9E\u73B0</h1><h4 id="call-bind-apply-\u7684\u57FA\u7840\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#call-bind-apply-\u7684\u57FA\u7840\u5E94\u7528" aria-hidden="true">#</a> call bind apply \u7684\u57FA\u7840\u5E94\u7528</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>\r
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span>\r
  <span class="token function">showName</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">num ==&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>\r
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">arguments ==&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>\r
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">this.name ==&gt; </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>\r
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span>\r
<span class="token punctuation">}</span>\r
obj1<span class="token punctuation">.</span><span class="token function">showName</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">333</span><span class="token punctuation">)</span>\r
obj1<span class="token punctuation">.</span><span class="token function">showName</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token number">444</span><span class="token punctuation">,</span> <span class="token number">555</span><span class="token punctuation">)</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><br><h4 id="call\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#call\u5B9E\u73B0" aria-hidden="true">#</a> call\u5B9E\u73B0</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">my_call</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    context <span class="token operator">=</span> window\r
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\r
    context <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token keyword">const</span> specialProp <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;\u72EC\u7ACB\u5C5E\u6027&#39;</span><span class="token punctuation">)</span>\r
  <span class="token comment">// \u628Athis\u7ED9\u5230obj\u7684\u4E00\u4E2A\u72EC\u7ACB\u5C5E\u6027\u4E0A\uFF0C\u9632\u6B62\u7834\u574F\u539F\u5BF9\u8C61</span>\r
  context<span class="token punctuation">[</span>specialProp<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span>\r
  <span class="token keyword">let</span> result <span class="token operator">=</span> context<span class="token punctuation">[</span>specialProp<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span>\r
  <span class="token keyword">delete</span> context<span class="token punctuation">[</span>specialProp<span class="token punctuation">]</span>\r
  <span class="token keyword">return</span> result\r
<span class="token punctuation">}</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><br><h4 id="bind\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#bind\u5B9E\u73B0" aria-hidden="true">#</a> bind\u5B9E\u73B0</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">my_bind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">const</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>\r
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\r
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> innerArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\r
    <span class="token keyword">const</span> finalArgs <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>innerArgs<span class="token punctuation">)</span>\r
    <span class="token keyword">return</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> finalArgs<span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><br><h4 id="apply\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#apply\u5B9E\u73B0" aria-hidden="true">#</a> apply\u5B9E\u73B0</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">my_apply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span>context <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> context <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    context <span class="token operator">=</span> window <span class="token comment">// \u6307\u5B9A\u4E3A null \u548C undefined \u7684 this \u503C\u4F1A\u81EA\u52A8\u6307\u5411\u5168\u5C40\u5BF9\u8C61(\u6D4F\u89C8\u5668\u4E2D\u4E3Awindow)</span>\r
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\r
    context <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token comment">// \u503C\u4E3A\u539F\u59CB\u503C\uFF08\u6570\u5B57\uFF0C\u5B57\u7B26\u4E32\uFF0C\u5E03\u5C14\u503C\uFF09\u7684 this \u4F1A\u6307\u5411\u8BE5\u539F\u59CB\u503C\u7684\u5B9E\u4F8B\u5BF9\u8C61</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token comment">// JavaScript\u6743\u5A01\u6307\u5357\u5224\u65AD\u662F\u5426\u4E3A\u7C7B\u6570\u7EC4\u5BF9\u8C61</span>\r
  <span class="token keyword">function</span> <span class="token function">isArrayLike</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">&amp;&amp;</span>                                    <span class="token comment">// o\u4E0D\u662Fnull\u3001undefined\u7B49</span>\r
      <span class="token keyword">typeof</span> o <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>                <span class="token comment">// o\u662F\u5BF9\u8C61</span>\r
      <span class="token function">isFinite</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>                   <span class="token comment">// o.length\u662F\u6709\u9650\u6570\u503C</span>\r
      o<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>                        <span class="token comment">// o.length\u4E3A\u975E\u8D1F\u503C</span>\r
      o<span class="token punctuation">.</span>length <span class="token operator">===</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>    <span class="token comment">// o.length\u662F\u6574\u6570</span>\r
      o<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">4294967296</span><span class="token punctuation">)</span>                  <span class="token comment">// o.length &lt; 2^32</span>\r
      <span class="token keyword">return</span> <span class="token boolean">true</span>\r
    <span class="token keyword">else</span>\r
      <span class="token keyword">return</span> <span class="token boolean">false</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token keyword">const</span> specialPrototype <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;\u7279\u6B8A\u5C5E\u6027Symbol&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u7528\u4E8E\u4E34\u65F6\u50A8\u5B58\u51FD\u6570</span>\r
  context<span class="token punctuation">[</span>specialPrototype<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">// \u9690\u5F0F\u7ED1\u5B9Athis\u6307\u5411\u5230context\u4E0A</span>\r
  <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// \u83B7\u53D6\u53C2\u6570\u6570\u7EC4</span>\r
  <span class="token keyword">let</span> result\r
  <span class="token comment">// \u5904\u7406\u4F20\u8FDB\u6765\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token comment">// \u662F\u5426\u4F20\u9012\u7B2C\u4E8C\u4E2A\u53C2\u6570</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isArrayLike</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;myApply \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E0D\u4E3A\u6570\u7EC4\u5E76\u4E14\u4E0D\u4E3A\u7C7B\u6570\u7EC4\u5BF9\u8C61\u629B\u51FA\u9519\u8BEF&#39;</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\r
      args <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token comment">// \u8F6C\u4E3A\u6570\u7EC4</span>\r
      result <span class="token operator">=</span> context<span class="token punctuation">[</span>specialPrototype<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u51FD\u6570\u5E76\u5C55\u5F00\u6570\u7EC4\uFF0C\u4F20\u9012\u51FD\u6570\u53C2\u6570</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\r
    result <span class="token operator">=</span> context<span class="token punctuation">[</span>specialPrototype<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u51FD\u6570</span>\r
  <span class="token punctuation">}</span>\r
  <span class="token keyword">delete</span> context<span class="token punctuation">[</span>specialPrototype<span class="token punctuation">]</span> <span class="token comment">// \u5220\u9664\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u5C5E\u6027</span>\r
  <span class="token keyword">return</span> result <span class="token comment">// \u8FD4\u56DE\u51FD\u6570\u6267\u884C\u7ED3\u679C</span>\r
<span class="token punctuation">}</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,12);function t(e,o){return p}var l=n(a,[["render",t],["__file","bind\u5B9E\u73B0.html.vue"]]);export{l as default};
