import{_ as i,c as a,a2 as t,o as n}from"./chunks/framework.CykocqSn.js";const c=JSON.parse('{"title":"ruyi 包管理器功能说明","description":"","frontmatter":{},"headers":[],"relativePath":"zh/Package-Manager/index.md","filePath":"zh/Package-Manager/index.md","lastUpdated":1702452514000}'),e={name:"zh/Package-Manager/index.md"};function h(l,s,p,k,d,r){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="ruyi-包管理器功能说明" tabindex="-1">ruyi 包管理器功能说明 <a class="header-anchor" href="#ruyi-包管理器功能说明" aria-label="Permalink to &quot;ruyi 包管理器功能说明&quot;">​</a></h1><p>ruyi 包管理器提供以下功能。</p><h2 id="命令查询" tabindex="-1">命令查询 <a class="header-anchor" href="#命令查询" aria-label="Permalink to &quot;命令查询&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令</th><th>含义</th><th>注意事项</th></tr></thead><tbody><tr><td><code>ruyi update</code></td><td>更新软件包缓存，使用默认镜像。</td><td>软件包缓存将存放在用户目录中，通常为 <code>~/.cache/ruyi</code>。</td></tr><tr><td><code>ruyi news list -h</code></td><td>查看新闻命令的帮助信息。</td><td></td></tr><tr><td><code>ruyi news list</code></td><td>列出所有新闻。</td><td></td></tr><tr><td><code>ruyi news list --new</code></td><td>仅列出未读新闻。</td><td></td></tr><tr><td><code>ruyi news read -h</code></td><td>查看新闻阅读命令的帮助信息。</td><td></td></tr><tr><td><code>ruyi news read 1</code></td><td>读取特定序号的新闻。</td><td>1 为要读取的新闻条目的序号或 ID。</td></tr><tr><td><code>ruyi news read</code></td><td>读取下一条新闻。</td><td></td></tr><tr><td><code>ruyi news read --quiet</code></td><td>标记新闻为已读，不输出任何信息。</td><td>不输出任何东西，只标记为已读。</td></tr><tr><td><code>ruyi list</code></td><td>列出所有可用软件包。</td><td></td></tr><tr><td><code>ruyi list -v</code></td><td>列出所有软件包的详细信息。</td><td></td></tr><tr><td><code>ruyi list profiles</code></td><td>查看预置的编译环境配置。</td><td>与 Python 虚拟环境类似。</td></tr><tr><td><code>ruyi install gnu-upstream</code></td><td>安装最新的 GNU 上游工具链。</td><td>默认安装最新版本的 gnu-upstream。</td></tr><tr><td><code>ruyi install &#39;gnu-upstream(0.20231118.0)&#39;</code></td><td>安装指定版本的 GNU 上游工具链。</td><td>通过指定版本号安装历史版本。</td></tr><tr><td><code>ruyi install &#39;gnu-upstream(==0.20231118.0)&#39;</code></td><td>安装特定版本的 GNU 上游工具链。</td><td>版本匹配格式应为 <code>&lt;op&gt;&lt;ver&gt;</code>。</td></tr><tr><td><code>ruyi install --reinstall gnu-upstream</code></td><td>重新安装 GNU 上游工具链。</td><td></td></tr><tr><td><code>ruyi extract ruyisdk-demo</code></td><td>下载并解包ruyisdk-demo 源码包。</td><td>解包到当前目录。</td></tr><tr><td><code>ruyi venv --toolchain gnu-upstream --emulator qemu-user-riscv-upstream generic ./ruyi_venv</code></td><td>在指定目录建立包含工具链和模拟器的编译环境。</td><td>使用预置的 generic 配置。</td></tr><tr><td><code>ruyi self uninstall</code></td><td>卸载 ruyi 包管理器。</td><td>命令会询问确认操作。</td></tr><tr><td><code>ruyi self uninstall -y</code></td><td>无需确认直接卸载 ruyi 包管理器。</td><td>无需确认直接执行。</td></tr><tr><td><code>ruyi self uninstall --purge</code></td><td>彻底卸载 ruyi 包管理器，包括缓存和安装的软件包。</td><td>包括缓存和已安装的软件包。</td></tr><tr><td><code>ruyi self uninstall --purge -y</code></td><td>无需确认彻底卸载 ruyi 包管理器。</td><td>无需确认直接执行。</td></tr><tr><td><code>ruyi device provision</code></td><td>下载所需系统镜像，并为设备安装系统。</td><td>按照引导进行系统安装。</td></tr></tbody></table><hr><blockquote><p>以下内容为表格内容详细说明。</p></blockquote><h2 id="刷新软件包缓存" tabindex="-1">刷新软件包缓存 <a class="header-anchor" href="#刷新软件包缓存" aria-label="Permalink to &quot;刷新软件包缓存&quot;">​</a></h2><p>更新软件包缓存，使用默认镜像即可：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><p>软件包缓存将存放在用户目录中，通常为 <code>~/.cache/ruyi</code> ；在 <code>XDG_CACHE_HOME</code> 环境变量被设置时，目录为 <code>$XDG_CACHE_HOME/ruyi</code> 。 在本文档中家目录为 <code>/home/myon</code> 。</p><h2 id="查询包管理器更新内容" tabindex="-1">查询包管理器更新内容 <a class="header-anchor" href="#查询包管理器更新内容" aria-label="Permalink to &quot;查询包管理器更新内容&quot;">​</a></h2><p>查看 ruyi 包管理器的更新信息、阅读新闻或将信息设置为已读：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> news</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> news</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> news</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --new</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		  # 仅列出未读新闻</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> news</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> read</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> news</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> read</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 		      # 1为要读取的新闻条目的序号或ID</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> news</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> read</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   		      # 读取下一条新闻</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> news</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> read</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --quiet</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  	# 不输出任何东西，只标记为已读</span></span></code></pre></div><h2 id="查询可用软件包" tabindex="-1">查询可用软件包 <a class="header-anchor" href="#查询可用软件包" aria-label="Permalink to &quot;查询可用软件包&quot;">​</a></h2><p>查看可用的软件包，该命令将列出所有可用的软件包：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">List</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> available</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> packages:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> source/ruyisdk-demo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231114.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (latest)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> source/coremark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1.0.2-pre.20230125</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (prerelease, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">latest-prerelease</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (latest)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> emulator/qemu-user-riscv-xthead</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6.1.0-ruyi.20231207+g03813c9fe8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (latest)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> emulator/qemu-user-riscv-upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8.1.2-ruyi.20231121</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (latest)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> toolchain/gnu-plct</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231212.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (latest) slug: gnu-plct-20231212</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231118.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () slug: gnu-plct-20231118</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toolchain/gnu-plct-xthead</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231212.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (latest) slug: gnu-plct-xthead-20231212</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231118.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () slug: gnu-plct-xthead-20231118</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toolchain/gnu-upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231212.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (latest) slug: gnu-upstream-20231212</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.20231118.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () slug: gnu-upstream-20231118</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toolchain/llvm-upstream</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 17.0.5-ruyi.20231121</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (latest) slug: llvm-upstream-20231121</span></span></code></pre></div><p>软件包前缀表示分类，其中 <code>source</code> 代表软件源码包， <code>toolchain</code> 代表工具链二进制包， <code>emulator</code> 代表模拟器二进制包，<code>board-image</code> 代表开发板镜像，<code>analyzer</code> 代表分析工具。</p><p>如果软件包显示 “no binary for current host” 则该软件包的当前版本不支持本机架构。</p><p>列出所有软件包的详细信息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><h2 id="查询可用编译环境" tabindex="-1">查询可用编译环境 <a class="header-anchor" href="#查询可用编译环境" aria-label="Permalink to &quot;查询可用编译环境&quot;">​</a></h2><p>与python 的虚拟环境类似，RUYI 包管理器工具使用 <code>venv</code> 命令应用配置到指定的工具链以建立编译环境。</p><p>RUYI 包管理预置的配置可以使用 <code>ruyi list profiles</code> 命令查看：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> profiles</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generic</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">baremetal-rv64ilp32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (needs </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flavor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {&#39;rv64ilp32&#39;}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sipeed-lpi4a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (needs </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flavor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {&#39;xthead&#39;}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">milkv-duo</span></span></code></pre></div><h2 id="安装软件包" tabindex="-1">安装软件包 <a class="header-anchor" href="#安装软件包" aria-label="Permalink to &quot;安装软件包&quot;">​</a></h2><p>使用 <code>install</code> 命令安装软件包，如 GNU 上游工具链：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-upstream</span></span></code></pre></div><p>上述通过指定软件包名安装的方式默认会安装 latest 的 gnu-upstream，如果想安装某个历史版本的 gnu-upstream，则可以通过指定版本来安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gnu-upstream(0.20231118.0)&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;gnu-upstream(==0.20231118.0)&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># match_expr parameter should be in format \`&lt;op&gt;&lt;ver&gt;\`, where \`&lt;op&gt;\` is one of [&#39;&lt;&#39;, &#39;&gt;&#39;, &#39;==&#39;, &#39;&lt;=&#39;, &#39;&gt;=&#39;, &#39;!=&#39;].</span></span></code></pre></div><p>若希望重装一个软件包，则可以加上 <code>--reinstall</code> 参数：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --reinstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-upstream</span></span></code></pre></div><h2 id="安装源码包" tabindex="-1">安装源码包 <a class="header-anchor" href="#安装源码包" aria-label="Permalink to &quot;安装源码包&quot;">​</a></h2><p>ruyi 包管理器同时管理一些源码包，使用 <code>extract</code> 命令下载一个源码包并解包到当前目录：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyisdk-demo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">README.md</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  rvv-autovec</span></span></code></pre></div><h2 id="搭建编译环境" tabindex="-1">搭建编译环境 <a class="header-anchor" href="#搭建编译环境" aria-label="Permalink to &quot;搭建编译环境&quot;">​</a></h2><p>已经安装的工具链与模拟器需要在 ruyi 编译环境中使用，这和 python 的虚拟环境十分类似。 这是由 <code>venv</code> 命令实现的：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --toolchain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-upstream</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --emulator</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi_venv</span></span></code></pre></div><p>这个命令使用预置的 generic 配置，在 <code>./ruyi_venv</code> 目录建立包含 gnu-upstream 工具链和 qemu-user-riscv-upstream 模拟器的编译环境。</p><p>具体使用参见“编译环境”与“具有 QEMU 支持的编译环境”章节。</p><h2 id="卸载软件包" tabindex="-1">卸载软件包 <a class="header-anchor" href="#卸载软件包" aria-label="Permalink to &quot;卸载软件包&quot;">​</a></h2><p>注意 ruyi 包管理器没有实现卸载 ruyi 软件包的功能。若您强制中断 ruyi 软件包安装进程或做了其他非预期操作 而会导致软件包功能异常时，请使用 <code>install --reinstall</code> 以尝试重试安装该软件包。</p><h2 id="卸载-ruyi-包管理器" tabindex="-1">卸载 RUYI 包管理器 <a class="header-anchor" href="#卸载-ruyi-包管理器" aria-label="Permalink to &quot;卸载 RUYI 包管理器&quot;">​</a></h2><p>使用下面的命令卸载 Ruyi 包管理器：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> self</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span></span></code></pre></div><p>这个命令将会询问您以二次确认该操作，如果希望 Ruyi 包管理不询问而直接执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> self</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><p>上面的命令只是删除 Ruyi 本身，并不会删除软件包缓存和安装的 Ruyi 软件包。</p><p>如果希望删除所有缓存和安装了的软件包以实现干净的卸载：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> self</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --purge</span></span></code></pre></div><p>同样的这个命令将会询问您以二次确认该操作，如果希望 Ruyi 包管理不询问而直接执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> self</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --purge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><p>实现 Ruyi 包管理自身的升级可能会需要 <code>sudo</code>，而 Ruyi 包管理被设计为避免进行需要超级用户权限的操作。 故在需要升级 Ruyi 包管理时您需要手动进行该操作，即首先卸载 Ruyi 包管理器，再执行安装 Ruyi 包管理器的过程， 这个过程中您可以自主选择是否保留旧的软件包缓存和 Ruyi 软件包。</p><h2 id="镜像信息的维护与下载、开发板系统的安装引导" tabindex="-1">镜像信息的维护与下载、开发板系统的安装引导 <a class="header-anchor" href="#镜像信息的维护与下载、开发板系统的安装引导" aria-label="Permalink to &quot;镜像信息的维护与下载、开发板系统的安装引导&quot;">​</a></h2><p>执行如下命令并按照引导执行即可下载所需系统镜像，为设备安装系统：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> provision</span></span></code></pre></div>`,55)]))}const g=i(e,[["render",h]]);export{c as __pageData,g as default};