import{_ as i,o as a,c as e,a2 as l}from"./chunks/framework.NxaGTdzX.js";const h=JSON.parse('{"title":"简介","description":"","frontmatter":{},"headers":[],"relativePath":"device_operation.md","filePath":"device_operation.md","lastUpdated":1715877553000}'),t={name:"device_operation.md"},o=l('<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>模拟器进程级api，支持主流安卓模拟器。</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> device_operation</span></span></code></pre></div><h2 id="包含功能-函数用法" tabindex="-1">包含功能&amp;函数用法 <a class="header-anchor" href="#包含功能-函数用法" aria-label="Permalink to &quot;包含功能&amp;函数用法&quot;">​</a></h2><h3 id="函数列表" tabindex="-1">函数列表 <a class="header-anchor" href="#函数列表" aria-label="Permalink to &quot;函数列表&quot;">​</a></h3><ul><li><code>get_adb_address(simulator_type,multi_instance)</code>获取对应的adb地址</li><li><code>get_adb_address_by_uuid(uuid)</code>获取对应的adb地址</li><li><code>get_simulator_commandline_uuid(uuid)</code>获取对应的命令行参数</li><li><code>get_simulator_uuid(uuid)</code>获取模拟器对应的uuid</li><li><code>convert_display_name(simulator_type,multi_instance)</code>输入内部参数，返回用户可读的模拟器名和多开信息</li><li><code>get_display_name_uuid(uuid)</code></li><li><code>auto_scan()</code>自动扫描正在运行的模拟器</li><li><code>autosearch()</code>自动扫描正在运行的模拟器对应的adb地址</li><li><code>preprocess_name(simulator_type,multi_instance)</code>处理可能缺少的参数</li><li><code>mumu12_api_backend(multi_instance,operation)</code>mumumanager包装</li><li><code>simulator_cmd()</code>获取启动模拟器的命令行</li><li><code>process_native_api(input_type,process_input)</code></li><li><code>start_simulator_uuid(uuid)</code>以uuid启动对应模拟器（暂不可用）</li><li><code>start_simulator_classic(simulator_type, multi_instance)</code>给定参数启动模拟器，该函数会直接返回对应的adb端口号。</li><li><code>stop_simulator_classic(simulator_type, multi_instance)</code>给定参数关闭模拟器</li><li><code>config_write(simulator_type, multi_instance, latest_adb_address = None,latest_command_line = None)</code>（给定模拟器类型并写入配置文件）</li><li><code>load_dict(uuid)</code>读取整个uuid对应的数据</li><li><code>return_bluestacks_type(pid)</code>读取pid对应的蓝叠模拟器类型</li></ul><h3 id="通用参数" tabindex="-1">通用参数 <a class="header-anchor" href="#通用参数" aria-label="Permalink to &quot;通用参数&quot;">​</a></h3><p>simulator_type:（模拟器类型）</p><ul><li>bluestacks_nxt：蓝叠模拟器5国际版</li><li>bluestacks_nxt_cn：蓝叠模拟器5中国版</li><li>mumu：MuMu12模拟器</li><li>yeshen：夜神模拟器</li><li>mumu_classic：MuMu 6&amp;MuMu X</li><li>xiaoyao_nat：逍遥模拟器（非桥接模式）</li><li>leidian：雷电模拟器</li><li>wsa：适用于 Android™️ 的 Windows 子系统</li></ul><p>multi_instance：</p><ul><li>mumu, yeshen, xiaoyao_nat, leidian中该参数为多开<strong>数字</strong>，以<strong>0</strong>为初始值</li><li>bluestacks_nxt，bluestacks_nxt_cn中该参数为 蓝叠多开器/BlueStacks Multi-Instance Manager内对应模拟器的显示名称，建议使用编辑-复制粘贴以避免打错。<strong>该参数大小写敏感</strong>。</li><li>wsa中该参数默认为127.0.0.1/localhost，无需填写，如果为其他设备的wsa，填写对应设备的ipv4地址或主机名。</li><li>mumu_classic不支持多开模拟器使用不同adb端口。</li></ul><p>uuid: 来源为 get_simulator_uuid(uuid)的返回值或/config/device.json内对应模拟器的id</p><p>config_write函数的latest_adb_address和latest_command_line如不填写将会自动获取。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>非常不建议使用 process_native_api，直接使用较为危险。</p></div><h2 id="支持的操作" tabindex="-1">支持的操作 <a class="header-anchor" href="#支持的操作" aria-label="Permalink to &quot;支持的操作&quot;">​</a></h2><ul><li>结束模拟器</li><li>启动模拟器</li><li>获取模拟器adb端口</li><li>获取模拟器命令行参数</li><li>为模拟器生成唯一uuid</li></ul>',17),s=[o];function d(c,n,u,_,r,p){return a(),e("div",null,s)}const b=i(t,[["render",d]]);export{h as __pageData,b as default};
