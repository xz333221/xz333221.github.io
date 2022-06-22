import{_ as n,c as s}from"./app.331a3634.js";const a={},p=s(`<h1 id="vuex-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vuex-\u5B9E\u73B0" aria-hidden="true">#</a> Vuex \u5B9E\u73B0</h1><h3 id="vuex\u505A\u4E86\u54EA\u4E9B\u4E8B" tabindex="-1"><a class="header-anchor" href="#vuex\u505A\u4E86\u54EA\u4E9B\u4E8B" aria-hidden="true">#</a> vuex\u505A\u4E86\u54EA\u4E9B\u4E8B</h3><ul><li>\u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u7684state \u53EF\u4EE5\u7528vue\u501F\u9E21\u751F\u86CB</li><li>\u4E3A\u5B9E\u4F8B\u7ED1\u5B9A\u4E86$store</li></ul><p>state \u501F\u7528vue</p><p>_data\u7B49\u540C\u4E8E$data</p><p>commit dispatch \u6539\u53D8this\u6307\u5411</p><p>getters \u5C5E\u6027 \u54CD\u5E94\u5F0F</p><p>\u63D2\u4EF6 plugin.install(Vue,options)</p><p>\u7531\u4E8Enew Vuex.Store({}) \u6240\u4EE5\u89E3\u6784 export default</p><p>\u7B80\u5355\u7248\u672C\u7684vuex\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> Vue\r
\r
<span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>\r
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$options <span class="token operator">=</span> options\r
    <span class="token comment">// todo:\u501F\u9E21\u751F\u86CB</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\r
        <span class="token comment">// $$ \u4E0D\u4F1A\u88AB\u4EE3\u7406\uFF0C\u4F1A\u85CF\u8D77\u6765</span>\r
        <span class="token literal-property property">$$state</span><span class="token operator">:</span> options<span class="token punctuation">.</span>state\r
      <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>commit <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>dispatch <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\r
    <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>\r
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> getter_key <span class="token keyword">in</span> options<span class="token punctuation">.</span>getters<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>getters<span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
        <span class="token punctuation">[</span>getter_key<span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">{</span>\r
          <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token keyword">return</span> options<span class="token punctuation">.</span>getters<span class="token punctuation">[</span>getter_key<span class="token punctuation">]</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>state<span class="token punctuation">)</span>\r
          <span class="token punctuation">}</span>\r
        <span class="token punctuation">}</span>\r
      <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token keyword">get</span> <span class="token function">state</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vm<span class="token punctuation">.</span>_data<span class="token punctuation">.</span>$$state\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token keyword">set</span> <span class="token function">state</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;please use replaceState to reset state&#39;</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">commit</span> <span class="token punctuation">(</span><span class="token parameter">mu_name<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">let</span> target_mutation <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>mutations<span class="token punctuation">[</span>mu_name<span class="token punctuation">]</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target_mutation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token function">target_mutation</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">dispatch</span> <span class="token punctuation">(</span><span class="token parameter">ac_name<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">let</span> target_action <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>actions<span class="token punctuation">[</span>ac_name<span class="token punctuation">]</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target_action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token function">target_action</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">function</span> <span class="token function">install</span> <span class="token punctuation">(</span><span class="token parameter">_vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  Vue <span class="token operator">=</span> _vue\r
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
    <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>store<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$store <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>store\r
      <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> Store<span class="token punctuation">,</span> install <span class="token punctuation">}</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,11);function t(e,o){return p}var l=n(a,[["render",t],["__file","Vuex\u5B9E\u73B0.html.vue"]]);export{l as default};
