import Icon from "../components/Icon.jsx"

const COLUMNS = [
  {
    icon: "design_services",
    iconWrap: "bg-primary-container/10 text-primary-container",
    checkClass: "text-primary",
    title: "产品设计与业务翻译",
    desc: "把模棱两可的企业诉求解构为可工程化执行的严谨 Agent 链路，定义清晰的人机协作分工边界。",
    items: [
      "0→1 场景定义与高质量 PRD / 高保真原型设计",
      "复杂企业权限隔离与多角色审批工作流治理",
      "多轮对话状态机（State Machine）交互边界把控",
      "商业化成本测算（Token 成本与 ROI 动态模型）",
    ],
    output: "核心输出物: 产品需求规格书 · 业务流程图 · 交互设计",
  },
  {
    icon: "model_training",
    iconWrap: "bg-secondary/15 text-secondary",
    checkClass: "text-secondary",
    title: "AI 技术理解与工程化",
    desc: "深刻洞察大语言模型的局限性，善用工程化手段（RAG、评估流、结构化输出）规避幻觉风险。",
    items: [
      "RAG 知识召回增强（多路召回 / Rerank / 分块策略）",
      "Text-to-SQL 准确率优化（模式注入、Schema 剪枝）",
      "黄金评测基准设计（Eval Benchmark 构建与回归校验）",
      "上下文工程 (Context Engineering) 与高级 Prompt 调优",
    ],
    output: "核心输出物: 评测 Benchmark · 提示词模板流 · SQL 语义词典",
  },
  {
    icon: "groups",
    iconWrap: "bg-primary-container/10 text-primary-container",
    checkClass: "text-primary",
    title: "原型验证与研发协作",
    desc: "能用代码说话，拒绝假大空。独立 Vibe Coding 验证技术可行性，带团队跨职能高效拿结果。",
    items: [
      "Python / FastAPI 极速搭建可跑通的 API 后端 Demo",
      "PostgreSQL / MySQL 复杂数据统计与存储过程编写",
      "带 3 人产品团队，并顺畅协调 9 人算法/前后端敏捷协作",
      "30+ 商业化版本推进经验，强把控项目上线里程碑",
    ],
    output: "核心输出物: 可运行原型 Demo · 迭代双周 Sprint 规划表",
  },
]

function Capabilities() {
  return (
    <section className="w-full py-16 bg-surface-card shadow-sm" id="capabilities">
      <div className="max-w-[1120px] mx-auto px-margin-mobile md:px-margin">
        <div className="mb-12">
          <div className="text-label-sm text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Icon name="account_tree" className="text-[16px]" />
            <span>Core Capabilities · 复合竞争力</span>
          </div>
          <h2 className="text-headline-lg text-text-primary tracking-tight">产品与技术的解耦与粘合能力</h2>
          <p className="text-body-md text-text-secondary mt-1">
            不是单纯写 PRD 的传统 PM，而是兼具模型技术边界直觉与工科工程闭环能力的复合型人才。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLUMNS.map((col) => (
            <div
              key={col.title}
              className="p-6 rounded-2xl bg-surface-bright shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl ${col.iconWrap} flex items-center justify-center mb-5`}>
                  <Icon name={col.icon} className="text-[24px]" />
                </div>
                <h3 className="text-headline-sm text-text-primary mb-3">{col.title}</h3>
                <p className="text-body-sm text-text-secondary mb-4 leading-relaxed">{col.desc}</p>
                <ul className="space-y-2.5 text-text-primary text-body-sm">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Icon name="check_circle" className={`${col.checkClass} text-[18px] shrink-0 mt-0.5`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 text-label-sm text-text-tertiary">{col.output}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
