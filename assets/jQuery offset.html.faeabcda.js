import{_ as n,c as s}from"./app.a46b8e12.js";var a="/assets/nodeType.0efc5780.png";const p={},e=s(`<h1 id="jquery-offset" tabindex="-1"><a class="header-anchor" href="#jquery-offset" aria-hidden="true">#</a> jQuery offset</h1><p>jQuery\u7528\u4E8E\u8FD4\u56DE\u6216\u8BBE\u7F6E\u5339\u914D\u4E0E\u5143\u7D20\u76F8\u5BF9\u4E8E\u6587\u6863\u7684\u504F\u79FB\uFF0C\u8FD4\u56DE\u5BF9\u8C61\u5305\u542B\u4E24\u4E2A\u6574\u578B\u5C5E\u6027\uFF1Atop\u548Cleft</p><ul><li>\u65B9\u6CD5\u4E00\u901A\u8FC7\u9012\u5F52\u5B9E\u73B0</li></ul><p>\u904D\u5386\u7236\u8282\u70B9\uFF0C\u7D2F\u52A0\u504F\u79FB\u91CF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">offset</span> <span class="token operator">=</span> <span class="token parameter">ele</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/*
  * nodeType \u5C5E\u6027\u8FD4\u56DE\u4EE5\u6570\u5B57\u503C\u8FD4\u56DE\u6307\u5B9A\u8282\u70B9\u7684\u8282\u70B9\u7C7B\u578B\u3002
  * \u5982\u679C\u8282\u70B9\u662F\u5143\u7D20\u8282\u70B9\uFF0C\u5219 nodeType \u5C5E\u6027\u5C06\u8FD4\u56DE 1\u3002
  * \u5982\u679C\u8282\u70B9\u662F\u5C5E\u6027\u8282\u70B9\uFF0C\u5219 nodeType \u5C5E\u6027\u5C06\u8FD4\u56DE 2\u3002
  * \u5982\u679C\u8282\u70B9 node.nodeType \u7C7B\u578B\u4E0D\u662F Element(1)\uFF0C\u5219\u8DF3\u51FA\uFF1B
  * \u5982\u679C\u76F8\u5173\u8282\u70B9\u7684 position \u5C5E\u6027\u4E3A static\uFF0C\u5219\u4E0D\u8BA1\u5165\u8BA1\u7B97\uFF0C\u8FDB\u5165\u4E0B\u4E00\u4E2A\u8282\u70B9\uFF08\u5176\u7236\u8282\u70B9\uFF09\u7684\u9012\u5F52\u3002
  * \u5982\u679C\u76F8\u5173\u5C5E\u6027\u7684 display \u5C5E\u6027\u4E3A none\uFF0C\u5219\u5E94\u8BE5\u76F4\u63A5\u8FD4\u56DE 0 \u4F5C\u4E3A\u7ED3\u679C\u3002
  */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getOffset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> init</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>nodeType <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    position <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;position&#39;</span><span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>init<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> position <span class="token operator">===</span> <span class="token string">&#39;static&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getOffset</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>parentNode<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    result<span class="token punctuation">.</span>top <span class="token operator">=</span> node<span class="token punctuation">.</span>offsetTop <span class="token operator">+</span> result<span class="token punctuation">.</span>top <span class="token operator">-</span> node<span class="token punctuation">.</span>scrollTop
    result<span class="token punctuation">.</span>left <span class="token operator">=</span> node<span class="token punctuation">.</span>offsetLeft <span class="token operator">+</span> result<span class="token punctuation">.</span>left <span class="token operator">-</span> node<span class="token punctuation">.</span>scrollLeft

    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">===</span> <span class="token string">&#39;fixed&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token function">getOffset</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>parentNode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5F53\u524D DOM \u8282\u70B9\u7684 display === &#39;none&#39; \u65F6, \u76F4\u63A5\u8FD4\u56DE {top: 0, left: 0}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;display&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> position

  <span class="token function">getOffset</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> result

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><ul><li>\u65B9\u6CD5\u4E8C \u901A\u8FC7getBoundingClientRect\u5B9E\u73B0</li></ul><p>getBoundingClientRect \u65B9\u6CD5\u7528\u6765\u63CF\u8FF0\u4E00\u4E2ADOM\u5143\u7D20\u7684\u5177\u4F53\u4F4D\u7F6E\uFF0C\u56DB\u4E2A\u5C5E\u6027\u662F\u76F8\u5BF9\u4E8E\u89C6\u53E3\u5DE6\u4E0A\u89D2\u800C\u8A00\u7684 ownerDocument\u662FDOM\u8282\u70B9\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u8FD4\u56DE\u5F53\u524D\u8282\u70B9\u9876\u5C42\u7684document\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">offset</span> <span class="token operator">=</span> <span class="token parameter">ele</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5F53\u524D\u4E3A IE11\u4EE5\u4E0B, \u76F4\u63A5\u8FD4\u56DE {top: 0,left: 0}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ele<span class="token punctuation">.</span><span class="token function">getClientRects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5F53\u524D DOM \u8282\u70B9\u7684 display === &#39;none&#39; \u65F6,\u76F4\u63A5\u8FD4\u56DE {top: 0,left: 0}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;display&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  result <span class="token operator">=</span> ele<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// \u5F97\u5230ele\u6240\u5728\u6587\u6863\u7684HTML\u8282\u70B9</span>
  <span class="token keyword">let</span> document <span class="token operator">=</span> ele<span class="token punctuation">.</span>ownerDocument<span class="token punctuation">.</span>documentElement

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">//docElement.clientTop \u4E00\u4E2A\u5143\u7D20\u9876\u90E8\u8FB9\u6846\u7684\u5BBD\u5EA6\uFF08\u4EE5\u50CF\u7D20\u8868\u793A\uFF09\u3002\u4E0D\u5305\u62EC\u9876\u90E8\u5916\u8FB9\u8DDD\u6216\u5185\u8FB9\u8DDD\u3002clientTop \u662F\u53EA\u8BFB\u7684</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> result<span class="token punctuation">.</span>top <span class="token operator">+</span> window<span class="token punctuation">.</span>pageYOffset <span class="token operator">-</span> document<span class="token punctuation">.</span>clientTop<span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> result<span class="token punctuation">.</span>left <span class="token operator">+</span> window<span class="token punctuation">.</span>pageXOffset <span class="token operator">-</span> document<span class="token punctuation">.</span>clientLeft

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><img src="`+a+'" alt="nodeType"></p>',9);function t(o,l){return e}var r=n(p,[["render",t],["__file","jQuery offset.html.vue"]]);export{r as default};
