import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.CykocqSn.js";const g=JSON.parse('{"title":"ruyi 编译环境","description":"","frontmatter":{},"headers":[],"relativePath":"zh/Package-Manager/Enviroment.md","filePath":"zh/Package-Manager/Enviroment.md","lastUpdated":1702452514000}'),l={name:"zh/Package-Manager/Enviroment.md"};function h(p,s,e,k,F,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="ruyi-编译环境" tabindex="-1">ruyi 编译环境 <a class="header-anchor" href="#ruyi-编译环境" aria-label="Permalink to &quot;ruyi 编译环境&quot;">​</a></h1><p>与 python 的虚拟环境类似，ruyi 包管理器工具使用 <code>venv</code> 命令应用配置到指定的工具链以建立编译环境。</p><p>ruyi 包管理预置的配置可以使用 <code>ruyi list profiles</code> 命令查看：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> profiles</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generic</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">baremetal-rv64ilp32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (needs </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flavor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {&#39;rv64ilp32&#39;}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sipeed-lpi4a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (needs </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">flavor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {&#39;xthead&#39;}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">milkv-duo</span></span></code></pre></div><h2 id="工具链与预置配置组合" tabindex="-1">工具链与预置配置组合 <a class="header-anchor" href="#工具链与预置配置组合" aria-label="Permalink to &quot;工具链与预置配置组合&quot;">​</a></h2><p>ruyi 包管理在建立编译环境之前会检查该环境是否合法，但是并不保证建立成功的环境一定可用于构建。</p><p>这里列出了经过测试可用的配置组合：</p><table tabindex="0"><thead><tr><th style="text-align:center;">工具链(toolchain)</th><th style="text-align:center;">sysroot</th><th style="text-align:center;">预置配置(profile)</th></tr></thead><tbody><tr><td style="text-align:center;">gnu-upstream</td><td style="text-align:center;">自带</td><td style="text-align:center;">generic</td></tr><tr><td style="text-align:center;">gnu-plct</td><td style="text-align:center;">自带</td><td style="text-align:center;">generic</td></tr><tr><td style="text-align:center;">gnu-plct</td><td style="text-align:center;">自带</td><td style="text-align:center;">milkv-duo</td></tr><tr><td style="text-align:center;">gnu-plct</td><td style="text-align:center;">自带</td><td style="text-align:center;">xiangshan-nanhu</td></tr><tr><td style="text-align:center;">gnu-plct-xthead</td><td style="text-align:center;">自带</td><td style="text-align:center;">sipeed-lpi4a</td></tr><tr><td style="text-align:center;">gnu-plct-rv64ilp32-elf</td><td style="text-align:center;">无</td><td style="text-align:center;">baremetal-rv64ilp32</td></tr><tr><td style="text-align:center;">llvm-upstream</td><td style="text-align:center;">gnu-upstream</td><td style="text-align:center;">generic</td></tr><tr><td style="text-align:center;">llvm-upstream</td><td style="text-align:center;">gnu-plct</td><td style="text-align:center;">generic</td></tr></tbody></table><h2 id="创建虚拟环境" tabindex="-1">创建虚拟环境 <a class="header-anchor" href="#创建虚拟环境" aria-label="Permalink to &quot;创建虚拟环境&quot;">​</a></h2><p>ruyiSDK 包管理器工具可使用 <code>ruyi venv</code> 创建虚拟环境，具体的使用方法可通过 <code>help</code> 命令获得：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-h] [--name NAME] [--toolchain TOOLCHAIN] [--emulator EMULATOR] [--with-sysroot] [--without-sysroot]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                 [--sysroot-from SYSROOT_FROM]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                 profile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">positional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arguments:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  profile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">               Profile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  dest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  Path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NAME,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Override</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv&#39;s name</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  --toolchain TOOLCHAIN, -t TOOLCHAIN</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        Specifier (atom) of the toolchain package to use</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  --emulator EMULATOR, -e EMULATOR</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        Specifier (atom) of the emulator package to use</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  --with-sysroot        Provision a fresh sysroot inside the new virtual environment (default)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  --without-sysroot     Do not include a sysroot inside the new virtual environment</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  --sysroot-from SYSROOT_FROM</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        Specifier (atom) of the sysroot package to use, in favor of the toolchain-included one if applicable</span></span></code></pre></div><p>参考上表代入具体的参数，不同的虚拟环境创建如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 GNU 上游工具链配置 RISC-V 编译环境：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./generic-venv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 PLCT 工具链配置 Milkv-Duo 编译环境：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-duo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./milkv-venv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 PLCT 工具链配置香山南湖编译环境：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xiangshan-nanhu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./nanhu-venv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 LLVM 上游工具链配置 RISC-V 编译环境：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> llvm-upstream</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --sysroot-from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./llvm-venv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用平头哥工具链配置荔枝派 4A 编译环境：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct-xthead-20231212</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-lpi4a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./sipeed-venv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用上游 QEMU 模拟器运行交叉编译的 RISC-V 二进制</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generic</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./qemu-venv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用平头哥 QEMU 模拟器运行交叉编译的 RISC-V 二进制</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct-xthead</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-lpi4a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-xthead</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./xthead-qemu-venv</span></span></code></pre></div><h2 id="在虚拟环境下编译" tabindex="-1">在虚拟环境下编译 <a class="header-anchor" href="#在虚拟环境下编译" aria-label="Permalink to &quot;在虚拟环境下编译&quot;">​</a></h2><p>在创建虚拟环境之前，需要先 <code>ruyi install</code> 安装虚拟环境中使用的编译工具链、模拟器等所需的工具。</p><p>下面以任一个编译工具链在虚拟环境中编译程序一般的操作说明操作步骤：</p><ol><li>安装编译工具链</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-upstream</span></span></code></pre></div><ol start="3"><li>建立编译环境</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -t gnu-upstream 指定了编译工具链的类型和版本(版本除非指定，默认最新)；generic 表示 generic 类型的 profile；venv是自定义的虚拟环境名(相对路径目录名)</span></span></code></pre></div><ol start="4"><li>查看可用的工具链二进制</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./venv/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-addr2line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-unknown-linux-gnu-gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            riscv64-unknown-linux-gnu-gfortran</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-unknown-linux-gnu-ranlib</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-unknown-linux-gnu-gcc-ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-unknown-linux-gnu-gprof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     riscv64-unknown-linux-gnu-readelf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-unknown-linux-gnu-gcc-nm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-unknown-linux-gnu-ld</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-unknown-linux-gnu-size</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-unknown-linux-gnu-gcc-ranlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     riscv64-unknown-linux-gnu-ld.bfd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-unknown-linux-gnu-strings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-cc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-unknown-linux-gnu-gcov</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           riscv64-unknown-linux-gnu-ldd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       riscv64-unknown-linux-gnu-strip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-c++filt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-unknown-linux-gnu-gcov-dump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      riscv64-unknown-linux-gnu-lto-dump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-cpp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-unknown-linux-gnu-gcov-tool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      riscv64-unknown-linux-gnu-nm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-elfedit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-unknown-linux-gnu-gdb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            riscv64-unknown-linux-gnu-objcopy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-g++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-unknown-linux-gnu-gdb-add-index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-unknown-linux-gnu-objdump</span></span></code></pre></div><p>除了 <code>ruyi-activate</code> 为激活编译环境用的脚本，其他均为工具链二进制。</p><ol start="5"><li>激活构建环境，激活方式与 python 虚拟环境类似，并且改变提示符以提示当前进入编译环境中：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv/bin/ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span></span></code></pre></div><p>也可以使用 <code>source</code> 命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv/bin/ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span></span></code></pre></div><ol start="6"><li>调用工具链：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">riscv64-unknown-linux-gnu-gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-unknown-linux-gnu-gcc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (RuyiSDK </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20231212</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Upstream-Sources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 13.2.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Free Software Foundation, Inc.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> free</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> software</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">see</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copying</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conditions.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  There</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NO</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warranty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> even</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MERCHANTABILITY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FITNESS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FOR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PARTICULAR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PURPOSE.</span></span></code></pre></div><ol start="7"><li>编译 可按需对指定程序执行编译操作。这里跳过具体事例。</li><li>退出编译环境 在编译或者运行验证完毕后，可以执行如下命令退出编译环境，退出后环境将被还原。</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi-deactivate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span></span></code></pre></div><blockquote><p>实际操作中请注意将上述例子中的参数替换为正确的值。</p></blockquote><h2 id="模拟运行" tabindex="-1">模拟运行 <a class="header-anchor" href="#模拟运行" aria-label="Permalink to &quot;模拟运行&quot;">​</a></h2><p>在 x86-64 环境下使用平头哥工具链配置带 QEMU 支持的荔枝派 4A 编译环境，并使用平头哥 QEMU 运行构建出的 RISC-V 二进制 的操作参考如下：</p><ol><li>安装编译工具链</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct-xthead</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-xthead</span></span></code></pre></div><ol start="2"><li>建立编译环境：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct-xthead</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-lpi4a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-xthead</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./qemu_venv</span></span></code></pre></div><ol start="3"><li>查看可用的二进制：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-addr2line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-plctxthead-linux-gnu-gcc-ranlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     riscv64-plctxthead-linux-gnu-nm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plctxthead-linux-gnu-gcov</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           riscv64-plctxthead-linux-gnu-objcopy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plctxthead-linux-gnu-gcov-dump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      riscv64-plctxthead-linux-gnu-objdump</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plctxthead-linux-gnu-gcov-tool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      riscv64-plctxthead-linux-gnu-ranlib</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-cc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plctxthead-linux-gnu-gdb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            riscv64-plctxthead-linux-gnu-readelf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-c++filt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-plctxthead-linux-gnu-gdb-add-index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-plctxthead-linux-gnu-size</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-cpp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plctxthead-linux-gnu-gfortran</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       riscv64-plctxthead-linux-gnu-strings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-elfedit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-plctxthead-linux-gnu-gprof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          riscv64-plctxthead-linux-gnu-strip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-g++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plctxthead-linux-gnu-ld</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plctxthead-linux-gnu-ld.bfd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         ruyi-qemu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-gcc-ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     riscv64-plctxthead-linux-gnu-ldd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-gcc-nm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     riscv64-plctxthead-linux-gnu-lto-dump</span></span></code></pre></div><p>可以看到 QEMU 模拟器的命令为 <code>ruyi-qemu</code> 。</p><ol start="4"><li>进入编译环境：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv/bin/ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $</span></span></code></pre></div><ol start="5"><li>编译一个简单的 C 程序并使用 QEMU 运行：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#include &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">int main()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    printf(&quot;hello, ruyi&quot;);</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    putchar(&#39;\\n&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">riscv64-plctxthead-linux-gnu-gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi-qemu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hello,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span></span></code></pre></div><ol start="6"><li>退出编译环境：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu_venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi-deactivate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span></span></code></pre></div>`,47)]))}const c=i(l,[["render",h]]);export{g as __pageData,c as default};
