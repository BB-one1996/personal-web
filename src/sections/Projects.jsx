import Icon from "../components/Icon.jsx"

function Beat({ icon, iconClass, title, text }) {
  return (
    <div className="p-4 rounded-xl bg-surface-bright">
      <div className="text-label-sm text-text-tertiary mb-1 flex items-center gap-1">
        <Icon name={icon} className={`text-[14px] ${iconClass}`} />
        <span>{title}</span>
      </div>
      <p className="text-body-sm text-text-primary">{text}</p>
    </div>
  )
}

function ResultCard({ label, value, hint, valueClass = "text-text-primary", hintClass = "text-text-secondary" }) {
  return (
    <div className="bg-surface-card p-3 rounded-lg shadow-sm">
      <div className="text-label-sm text-text-tertiary">{label}</div>
      <div className={`text-headline-md font-bold mt-1 tnum ${valueClass}`}>{value}</div>
      <div className={`text-label-sm mt-0.5 ${hintClass}`}>{hint}</div>
    </div>
  )
}

function Projects() {
  return (
    <section className="w-full py-20" id="projects">
      <div className="max-w-[1120px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-label-sm text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Icon name="folder_special" className="text-[16px]" />
              <span>Case Studies · 标杆案例复盘</span>
            </div>
            <h2 className="text-headline-lg text-text-primary tracking-tight">精选项目 · 3 个标杆案例</h2>
            <p className="text-body-md text-text-secondary mt-1">懂大模型边界、端到端上线交付、拿得出量化实效。</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="px-3 py-1 bg-surface-card rounded-md text-label-sm text-text-secondary shadow-sm">
              4-Beat Case Architecture
            </span>
            <span className="px-3 py-1 bg-surface-card rounded-md text-label-sm text-primary font-medium shadow-sm">
              生产级可信评估
            </span>
          </div>
        </div>

        <div className="space-y-12">
          <article className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-primary-container/10 text-primary-container text-label-sm font-semibold">
                  ToG 标杆项目
                </span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-text-secondary text-label-sm">RAG + SQL Agent</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-text-secondary text-label-sm">
                  28 张复杂表多源融合
                </span>
              </div>
              <div className="text-label-md text-text-tertiary flex items-center gap-1">
                <Icon name="school" className="text-[16px]" />
                <span>高等院校科研处 / 智慧校务</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-headline-md text-text-primary mb-2">高校科研问答 Agent（问答 / 取数 / 简报三合一）</h3>
                  <p className="text-body-md text-text-secondary">
                    面向全校师生及科研管理层的智能助手，打通 28 张复杂底层校务与科研表，彻底解决非技术师生无法自助提取复杂跨维科研指标、以及科研政策条目检索低效的顽疾。
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Beat
                    icon="flag"
                    iconClass="text-error"
                    title="业务背景与痛点"
                    text="数据分散于财务、人事、科研等孤岛系统；原先科研秘书需手工跨库导表写 SQL，响应单个教授查询平均耗时 2 小时。"
                  />
                  <Beat
                    icon="psychology"
                    iconClass="text-primary"
                    title="PM 核心设计与动作"
                    text="构建问答（知识库 RAG）与数据（Text-to-SQL）自适应意图双路由架构；搭建语义字典与动态表剪枝；通过分步执行优化延迟 40%。"
                  />
                </div>
                <div className="p-5 rounded-xl bg-surface-container-low">
                  <div className="text-label-sm text-primary font-medium mb-3 flex items-center gap-1.5">
                    <Icon name="verified" className="text-[18px]" />
                    <span>上线落地成效（已通过校方科研处正式验收）</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <ResultCard label="综合问答准确率" value="93%" hint="基线 75% 提升" hintClass="text-secondary font-medium" />
                    <ResultCard label="复杂 SQL 准确率" value="98%" hint="基线 70% 提升" valueClass="text-secondary" />
                    <ResultCard
                      label="科研简报生成"
                      value="5 分钟"
                      hint="原人工 2 天"
                      valueClass="text-primary-container"
                      hintClass="text-secondary font-medium"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-surface-contrast text-on-primary rounded-xl p-5 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-4">
                  <span className="text-label-sm text-text-tertiary uppercase">System Topology / 架构拓扑</span>
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <div className="space-y-3 text-label-sm">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-text-tertiary text-[11px] mb-1 font-mono">STEP 01 · 统一入口 & 意图判定</div>
                    <div className="text-on-primary font-medium flex items-center justify-between gap-2">
                      <span>用户自然语言输入 Query</span>
                      <span className="px-1.5 py-0.5 rounded bg-primary-container text-white text-[10px]">Intent Classifier</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-white/8 rounded-lg">
                      <div className="text-secondary text-[11px] mb-1 font-mono">ROUTER A: 知识问答</div>
                      <div className="text-surface-container-high text-xs">Milvus 向量召回 + 科研规章图谱重排 (Rerank)</div>
                    </div>
                    <div className="p-3 bg-white/8 rounded-lg">
                      <div className="text-secondary-fixed text-[11px] mb-1 font-mono">ROUTER B: 取数查询</div>
                      <div className="text-surface-container-high text-xs">28 表语义字典匹配 + Few-Shot 生成 SQL</div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <div className="text-text-tertiary text-[11px] mb-1 font-mono">STEP 03 · 语法校验与权限隔离</div>
                    <div className="text-on-primary font-medium flex items-center justify-between gap-2">
                      <span>SQL AST 树安全沙箱 + 行级数据脱敏</span>
                      <span className="text-secondary font-mono text-xs">Safe Execution</span>
                    </div>
                  </div>
                  <div className="p-3 bg-surface-container-low text-text-primary rounded-lg font-medium flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5">
                      <Icon name="task_alt" className="text-[16px] text-secondary" />
                      <span>结构化科研图表 / Word 简报自动打包</span>
                    </span>
                    <span className="font-mono text-xs text-text-secondary">Latency &lt; 4.2s</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-secondary/15 text-secondary text-label-sm font-semibold">ToB 企业平台</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-text-secondary text-label-sm">工作流配置平台</span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-text-secondary text-label-sm">
                  300+ 内部跨职能用户
                </span>
              </div>
              <div className="text-label-md text-text-tertiary flex items-center gap-1">
                <Icon name="corporate_fare" className="text-[16px]" />
                <span>数喆数据 · 内部人效智能化变革</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-headline-md text-text-primary mb-2">企业业务辅助 Agent 产品线</h3>
                  <p className="text-body-md text-text-secondary">
                    从 0 到 1 规划并上线的智能体快速编排工作台，沉淀并交付 10+ 垂直领域智能体（招投标质检、行业数据爬洗整理、合同合规初审等），系统性根除跨部门流程阻塞。
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Beat
                    icon="error_outline"
                    iconClass="text-error"
                    title="业务痛点"
                    text="内部各业务团队频繁面临繁复文书审核、招投标文件编制与数据校验，重复度高达 70%，且依赖资深员工逐行抽检。"
                  />
                  <Beat
                    icon="precision_manufacturing"
                    iconClass="text-primary"
                    title="PM 核心动作"
                    text="自研 1500+ 真实业务场景评测基准（Eval Dataset），设计自动化评分与告警流水线；梳理跨部门标准 SOP 并将其节点化、工具化。"
                  />
                </div>
                <div className="p-5 rounded-xl bg-surface-container-low">
                  <div className="text-label-sm text-primary font-medium mb-3 flex items-center gap-1.5">
                    <Icon name="trending_up" className="text-[18px]" />
                    <span>人效跃升量化收益</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <ResultCard label="测试任务评分" value="90+ 分" hint="起初仅 60 分" hintClass="text-secondary font-medium" />
                    <ResultCard label="单批处理工时" value="0.25 人天" hint="从 2.0 人天压缩" valueClass="text-secondary" />
                    <ResultCard
                      label="综合任务耗时"
                      value="-80%"
                      hint="流转周期骤减"
                      valueClass="text-primary-container"
                      hintClass="text-secondary font-medium"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-surface-bright rounded-xl p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-label-md text-text-primary font-semibold">1,500+ 任务自动化评测集进展</span>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed/30 text-secondary text-xs font-mono font-medium">
                    PASS RATE
                  </span>
                </div>
                <div className="p-3 bg-surface-card rounded-lg">
                  <div className="flex items-center justify-between text-xs text-text-secondary mb-1.5 font-mono">
                    <span>Prompt 迭代阶段 (Baseline vs Final)</span>
                    <span>75.2% → 94.8%</span>
                  </div>
                  <div className="w-full bg-surface-hover h-3 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full rounded-full" style={{ width: "94%" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-surface-card rounded-lg">
                    <div className="text-text-tertiary text-label-sm">标注文档任务数</div>
                    <div className="text-headline-sm text-text-primary font-semibold mt-0.5 tnum">1,540 条</div>
                    <div className="text-xs text-text-tertiary mt-1">涵盖 14 个高频业务线</div>
                  </div>
                  <div className="p-3 bg-surface-card rounded-lg">
                    <div className="text-text-tertiary text-label-sm">跨职能调用量</div>
                    <div className="text-headline-sm text-text-primary font-semibold mt-0.5 tnum">10,000+</div>
                    <div className="text-xs text-text-tertiary mt-1">年总调用稳态无事故</div>
                  </div>
                </div>
                <div className="p-3 bg-surface-container rounded-lg text-text-secondary text-label-sm">
                  <strong className="text-text-primary font-medium">PM 复盘认知：</strong>
                  在企业 ToB 智能体工程中，“评测标准本身比模型选型更重要”。只有建立固化且自动重放的黄金测试集，才能支持每周模型提示词的高频安全热更。
                </div>
              </div>
            </div>
          </article>

          <article className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-surface-contrast text-on-primary text-label-sm font-semibold">
                  独立 Vibe Coding
                </span>
                <span className="px-3 py-1 rounded-md bg-surface-container text-text-secondary text-label-sm">经营决策支持</span>
                <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary text-label-sm font-medium">节省开支 8 万元</span>
              </div>
              <div className="text-label-md text-text-tertiary flex items-center gap-1">
                <Icon name="code" className="text-[16px]" />
                <span>FastAPI + Vue + PostgreSQL</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-headline-md text-text-primary mb-2">内部经营数据 Chat BI · 全栈敏捷落地</h3>
                  <p className="text-body-md text-text-secondary">
                    面对企业商用 BI 授权成本高昂且无法灵活适配定制化合同口径的痛点，沈力钊借助 AI
                    编程辅助工具（Vibe Coding 理念），以 PM 兼独立开发者身份快速完成从数据建模、后端 API
                    到前端自然语言问答交互的系统交付。
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Beat
                    icon="monetization_on"
                    iconClass="text-error"
                    title="业务背景与预算限制"
                    text="原有外部商业 BI 采购报价超 8 万元/年，且跨期合同回款与客户多级归属算法需额外二次开发，研发排期滞后 2 个月。"
                  />
                  <Beat
                    icon="terminal"
                    iconClass="text-primary"
                    title="PM 独立研发落地动作"
                    text="独立设计表结构与语义向量映射，搭建 T+1 自动化数据同步脚本；实现「输入自然语言、LLM 生成校验 SQL、前端直出图表」闭环。"
                  />
                </div>
                <div className="p-5 rounded-xl bg-surface-container-low">
                  <div className="text-label-sm text-primary font-medium mb-3 flex items-center gap-1.5">
                    <Icon name="savings" className="text-[18px]" />
                    <span>核心纳管与商业收益</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <ResultCard label="在线纳管项目" value="2,443 个" hint="全量合同台账" />
                    <ResultCard label="服务企业客户" value="1,605 家" hint="多维标签穿透" />
                    <ResultCard
                      label="直接节省采购"
                      value="80,000 元"
                      hint="数据时效至 T+1"
                      valueClass="text-secondary"
                      hintClass="text-secondary font-medium"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-surface-contrast text-on-primary rounded-xl p-5 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-error" />
                    <div className="w-3 h-3 rounded-full bg-secondary-fixed" />
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                  </div>
                  <span className="text-xs font-mono text-text-tertiary">ChatBI_Query_Engine.py</span>
                </div>
                <div className="font-mono text-xs space-y-2 text-surface-dim">
                  <div className="text-text-tertiary"># 真实提问示例 (Natural Language Input)</div>
                  <div className="text-on-primary bg-surface-card/10 p-2 rounded">
                    "统计今年西南片区合同金额超过 50 万且回款率低于 60% 的所有客户列表"
                  </div>
                  <div className="text-text-tertiary mt-2"># LLM + Semantic Schema 自动生成安全 SQL</div>
                  <div className="text-secondary-fixed bg-surface-card/5 p-2 rounded text-[11px] leading-relaxed">
                    SELECT c.name, SUM(con.amount), SUM(con.paid)/SUM(con.amount) AS rate
                    <br />
                    FROM contracts con JOIN clients c ON con.client_id = c.id
                    <br />
                    WHERE con.region = 'Southwest' AND con.year = 2024
                    <br />
                    GROUP BY c.id HAVING SUM(con.amount) &gt; 500000 AND rate &lt; 0.60;
                  </div>
                  <div className="flex items-center justify-between pt-2 text-xs text-text-tertiary gap-2">
                    <span className="flex items-center gap-1 text-secondary">
                      <Icon name="query_stats" className="text-[14px]" />
                      执行耗时: 380ms
                    </span>
                    <span>前端自动渲染柱状透视图</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
