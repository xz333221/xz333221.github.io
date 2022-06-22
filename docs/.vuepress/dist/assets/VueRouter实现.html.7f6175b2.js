import{_ as n,c as s}from"./app.331a3634.js";const a={},p=s(`<h1 id="vuerouter-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vuerouter-\u5B9E\u73B0" aria-hidden="true">#</a> VueRouter \u5B9E\u73B0</h1><h3 id="vuerouter\u505A\u4E86\u54EA\u4E9B\u4E8B" tabindex="-1"><a class="header-anchor" href="#vuerouter\u505A\u4E86\u54EA\u4E9B\u4E8B" aria-hidden="true">#</a> vueRouter\u505A\u4E86\u54EA\u4E9B\u4E8B</h3><ul><li>\u5B9E\u73B0\u4E86\u5168\u5C40\u7EC4\u4EF6 router-view router-link</li><li>\u4E3A\u5B9E\u4F8B\u7ED1\u5B9A\u4E86$router</li><li>router-link \u70B9\u51FB\u540E\u5207\u6362\u8DEF\u7531\u5E76\u5C55\u793A\u5BF9\u5E94\u7EC4\u4EF6</li></ul><p>\u5168\u5C40\u6DF7\u5165 Vue.mixin({})</p><p>\u63D2\u4EF6 plugin.install(Vue,options)</p><p>render(createElement)</p><p>\u7B80\u5355\u7248\u672C\u7684hash\u8DEF\u7531\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> Vue <span class="token comment">// \u63D2\u4EF6install\u7684\u65F6\u5019\u4FDD\u5B58\u4E0Bvue\u53D8\u91CF</span>\r
<span class="token keyword">class</span> <span class="token class-name">VueRouter</span> <span class="token punctuation">{</span>\r
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$options <span class="token operator">=</span> options\r
    <span class="token keyword">let</span> <span class="token function-variable function">current_obj</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>routes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>path <span class="token operator">===</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\r
    Vue<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;current&#39;</span><span class="token punctuation">,</span> <span class="token function">current_obj</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\r
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">this</span><span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token function">current_obj</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
\r
VueRouter<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">_vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  Vue <span class="token operator">=</span> _vue\r
  <span class="token comment">// todo:\u5B9E\u4F8B\u9700\u8981\u6709$router</span>\r
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
    <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router\r
      <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
\r
  <span class="token comment">// \u6CE8\u518Crouter-view\u548Crouter-link</span>\r
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;router-link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>\r
      <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token punctuation">{</span>\r
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>\r
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>\r
      <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>\r
          <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;#&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to\r
        <span class="token punctuation">}</span>\r
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;router-view&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
    <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token comment">// todo:\u83B7\u53D6\u5F53\u524D\u8DEF\u7531\u5BF9\u5E94\u7EC4\u4EF6</span>\r
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>current<span class="token punctuation">.</span>component<span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">export</span> <span class="token keyword">default</span> VueRouter\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,8);function t(e,o){return p}var u=n(a,[["render",t],["__file","VueRouter\u5B9E\u73B0.html.vue"]]);export{u as default};
