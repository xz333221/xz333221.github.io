import{_ as n,c as s}from"./app.fc0f621f.js";const a={},p=s(`<h1 id="vue\u7684\u57FA\u7840\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vue\u7684\u57FA\u7840\u5B9E\u73B0" aria-hidden="true">#</a> Vue\u7684\u57FA\u7840\u5B9E\u73B0</h1><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><ul><li>DOM\u4E2D\u6BCF\u4E00\u4E2A\u66F4\u65B0\u7684data\u5BF9\u5E94\u4E00\u4E2Awatcher</li><li>\u5BF9 data \u904D\u5386\u65F6\uFF0C\u6BCF\u6B21\u521B\u5EFA\u4E00\u4E2ADep\u6765\u7BA1\u7406\u5176\u6240\u5BF9\u5E94\u7684watcher</li><li>data\u7684\u52AB\u6301 Object.defineProperty\uFF0C\u6BCF\u6B21\u4FEE\u6539\u65F6\u66F4\u65B0\u5BF9\u5E94watcher</li></ul><h3 id="watcher-\u4E0E-dep\u5173\u7CFB\u7684\u5EFA\u7ACB" tabindex="-1"><a class="header-anchor" href="#watcher-\u4E0E-dep\u5173\u7CFB\u7684\u5EFA\u7ACB" aria-hidden="true">#</a> watcher \u4E0E dep\u5173\u7CFB\u7684\u5EFA\u7ACB</h3><ul><li>\u6BCF\u6B21new Watcher\u65F6\u7ED9Dep\u6DFB\u52A0\u4E00\u4E2A\u9759\u6001\u5C5E\u6027 <code>Dep.target = this</code></li><li>\u663E\u5F0F\u8BFB\u53D6data\u5BF9\u5E94key \uFF0C\u5728get()\u4E2D\u6DFB\u52A0watcher</li><li>\u5220\u9664\u9759\u6001\u5C5E\u6027</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineReactive</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>\r
  <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      Dep<span class="token punctuation">.</span>target <span class="token operator">&amp;&amp;</span> dep<span class="token punctuation">.</span><span class="token function">add_watcher</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span>\r
      <span class="token keyword">return</span> val\r
    <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
    <span class="token function">set</span> <span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>\r
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        val <span class="token operator">=</span> newVal\r
        dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
      <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token comment">// todo:\u54CD\u5E94\u5F0F\u65B0\u589E\u5C5E\u6027</span>\r
<span class="token keyword">function</span> <span class="token function">set</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">function</span> <span class="token function">observe</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">return</span>\r
  <span class="token punctuation">}</span>\r
  <span class="token keyword">new</span> <span class="token class-name">Observe</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name">Observe</span> <span class="token punctuation">{</span>\r
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
\r
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">walk</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
      <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">function</span> <span class="token function">proxy</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>\r
      <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\r
      <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
      <span class="token function">set</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        vm<span class="token punctuation">.</span>$data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> v\r
      <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name">XVue</span> <span class="token punctuation">{</span>\r
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$options <span class="token operator">=</span> options\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$data <span class="token operator">=</span> options<span class="token punctuation">.</span>data\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>el<span class="token punctuation">)</span>\r
\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>dep_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\r
\r
    <span class="token comment">// \u54CD\u5E94\u5F0F\u5904\u7406</span>\r
    <span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span>\r
\r
    <span class="token comment">// \u4EE3\u7406</span>\r
    <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\r
    <span class="token keyword">new</span> <span class="token class-name">Compile</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name">Compile</span> <span class="token punctuation">{</span>\r
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$vm <span class="token operator">=</span> vm\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">=</span> vm<span class="token punctuation">.</span>$el\r
\r
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span>\r
\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">compile</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    node<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">node_item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">is_Interpolation</span><span class="token punctuation">(</span>node_item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span> node_item<span class="token punctuation">,</span> RegExp<span class="token punctuation">.</span>$1<span class="token punctuation">)</span>\r
      <span class="token punctuation">}</span>\r
\r
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">is_element</span><span class="token punctuation">(</span>node_item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">const</span> attrs <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>node_item<span class="token punctuation">.</span>attributes<span class="token punctuation">)</span>\r
        attrs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">attr</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
          <span class="token keyword">if</span> <span class="token punctuation">(</span>attr<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;v-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
            <span class="token keyword">let</span> directive <span class="token operator">=</span> attr<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\r
            <span class="token keyword">const</span> data_key <span class="token operator">=</span> attr<span class="token punctuation">.</span>value\r
\r
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>directive<span class="token punctuation">,</span> node_item<span class="token punctuation">,</span> data_key<span class="token punctuation">)</span>\r
          <span class="token punctuation">}</span>\r
        <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
      <span class="token punctuation">}</span>\r
\r
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node_item<span class="token punctuation">.</span>childNodes<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>node_item<span class="token punctuation">)</span>\r
      <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">is_element</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token comment">// \u5224\u65AD\u662F\u63D2\u503C\u8868\u8FBE\u5F0F</span>\r
  <span class="token function">is_Interpolation</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> reg_Interpolation <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\{\\{(.*)\\}\\}</span><span class="token regex-delimiter">/</span></span>\r
    <span class="token keyword">return</span> node<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> reg_Interpolation<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">update</span> <span class="token punctuation">(</span><span class="token parameter">directive<span class="token punctuation">,</span> node<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>directive<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">Updater</span><span class="token template-punctuation string">\`</span></span>\r
    <span class="token keyword">this</span><span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\r
    <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">this</span><span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">textUpdater</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> value\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">htmlUpdater</span> <span class="token punctuation">(</span>node<span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    node<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> value\r
  <span class="token punctuation">}</span>\r
\r
\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>\r
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$vm <span class="token operator">=</span> vm\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$key <span class="token operator">=</span> key\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$cb <span class="token operator">=</span> cb\r
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>$vm<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>$key<span class="token punctuation">]</span>\r
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$cb</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$key<span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
\r
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>\r
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>watcher_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">add_watcher</span> <span class="token punctuation">(</span><span class="token parameter">watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>watcher_list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
\r
  <span class="token function">notify</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">this</span><span class="token punctuation">.</span>watcher_list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">watcher</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
      watcher<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span>\r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br></div></div>`,6);function t(e,o){return p}var l=n(a,[["render",t],["__file","Vue\u7684\u57FA\u7840\u5B9E\u73B0.html.vue"]]);export{l as default};
