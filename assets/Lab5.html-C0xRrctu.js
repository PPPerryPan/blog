import{_ as s,c as a,b as e,o as i}from"./app-CUDFWA7u.js";const l="/blog/assets/image-20220523214457597-Binmre9E.png",t="/blog/assets/image-20220523214538635-CNNl7xFc.png",p="/blog/assets/image-20220523223208493-D4uBR8BH.png",c="/blog/assets/image-20220523223532645-COq4AmU-.png",o="/blog/assets/image-20220523231204833-B72_c62J.png",u="/blog/assets/image-20220524102323143-CkBvWT-B.png",d={};function r(m,n){return i(),a("div",null,n[0]||(n[0]=[e(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">title: 扩展 ACL</span>
<span class="line">date: 2022-05-23</span>
<span class="line">tags:</span>
<span class="line">  - Networking</span>
<span class="line">  - Cisco</span>
<span class="line">categories:</span>
<span class="line">  - tech</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="拓展-acl" tabindex="-1"><a class="header-anchor" href="#拓展-acl"><span>拓展 ACL</span></a></h1><h2 id="拓扑与ip配置" tabindex="-1"><a class="header-anchor" href="#拓扑与ip配置"><span>拓扑与IP配置</span></a></h2><p>参考拓扑：</p><p><img src="`+l+'" alt="image-20220523214457597"></p><p>实际拓扑（IP与上述保留一致）：</p><p><img src="'+t+`" alt="image-20220523214538635"></p><h2 id="router0-配置" tabindex="-1"><a class="header-anchor" href="#router0-配置"><span>Router0 配置</span></a></h2><ul><li>路由总结</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip route 172.26.8.0 255.255.248.0 s2/0 </span></span>
<span class="line">或</span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip route 172.26.8.0 255.255.248.0 10.10.10.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置IP</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int f0/0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 172.26.8.1 255.255.252.0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int f1/0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 172.26.12.0 255.255.252.0</span></span>
<span class="line">Bad mask /22 <span class="token keyword">for</span> address <span class="token number">172.26</span>.12.0</span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet1/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet1/0, changed state to up</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">R0<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int s2/0</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 10.10.10.1 255.255.255.252</span></span>
<span class="line">R0<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="router1-配置" tabindex="-1"><a class="header-anchor" href="#router1-配置"><span>Router1 配置</span></a></h2><ul><li>IP 配置</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">R1<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int s2/0</span></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 10.10.10.2 255.255.255.252</span></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface Serial2/0, changed state to up</span>
<span class="line"></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int fa0/0</span></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip add 172.16.0.9 255.255.255.248</span></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shut</span></span>
<span class="line"></span>
<span class="line">R1<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#</span></span>
<span class="line">%LINK-5-CHANGED: Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span>
<span class="line">%LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/0, changed state to up</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li></li></ol><p><img src="`+p+'" alt="image-20220523223208493"></p><ol start="2"><li></li></ol><p><img src="'+c+'" alt="image-20220523223532645"></p><ol start="3"><li></li></ol><p><img src="'+o+'" alt="image-20220523231204833"></p><ol start="4"><li></li></ol><p><img src="'+u+'" alt="image-20220524102323143"></p>',23)]))}const g=s(d,[["render",r]]),b=JSON.parse('{"path":"/blogs/tech/networking/Cisco/Lab5.html","title":"拓展 ACL","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"拓扑与IP配置","slug":"拓扑与ip配置","link":"#拓扑与ip配置","children":[]},{"level":2,"title":"Router0 配置","slug":"router0-配置","link":"#router0-配置","children":[]},{"level":2,"title":"Router1 配置","slug":"router1-配置","link":"#router1-配置","children":[]}],"git":{"createdTime":1766826955000,"updatedTime":1766890838000,"contributors":[{"name":"PPPerryPan","email":"perrypan0123@outlook.com","commits":2}]},"filePathRelative":"blogs/tech/networking/Cisco/Lab5.md"}');export{g as comp,b as data};
