import Icon from "../components/Icon.jsx"

function Timeline() {
  return (
    <section className="w-full py-20" id="timeline">
      <div className="max-w-[1120px] mx-auto px-margin-mobile md:px-margin">
        <div className="mb-12">
          <div className="text-label-sm text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Icon name="history_edu" className="text-[16px]" />
            <span>Track Record · 经历与背景</span>
          </div>
          <h2 className="text-headline-lg text-text-primary tracking-tight">扎实成长曲线：从地质工科到 AI 产品先锋</h2>
          <p className="text-body-md text-text-secondary mt-1">工科数据建模素养与产业商业化实操的融合。</p>
        </div>

        <div className="relative pl-6 md:pl-8 space-y-12">
          <div className="absolute left-[11px] md:left-[15px] top-3 bottom-3 w-[2px] bg-border-subtle" />

          <div className="relative">
            <div className="absolute -left-6 md:-left-8 top-1 w-6 h-6 rounded-full bg-surface-card flex items-center justify-center ring-4 ring-canvas-bg">
              <span className="w-3 h-3 rounded-full bg-primary-container" />
            </div>
            <div className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-headline-sm text-text-primary">上海数喆数据科技</span>
                  <span className="text-text-tertiary mx-2">·</span>
                  <span className="text-label-md text-primary font-medium">AI 产品经理</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container font-mono text-xs text-text-secondary w-fit">
                  2024.01 - 2026.09
                </span>
              </div>
              <p className="text-body-md text-text-secondary mb-4">
                主导公司 ToB 与 ToG 大模型及 Agent 产品线规划。累计推进 30+ 商业化客户项目，按期高质量交付 20+ 重要系统版本。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-text-primary text-body-sm">
                <div className="p-3 bg-surface rounded-lg">
                  <span className="font-medium text-text-primary">● 标杆突破:</span>{" "}
                  推动高校科研问答系统成功通过客户科研处验收，成为行业 ToG 示范工程。
                </div>
                <div className="p-3 bg-surface rounded-lg">
                  <span className="font-medium text-text-primary">● 人效赋能:</span>{" "}
                  打造自动化评测流程，建立跨部门 10+ 定制智能体矩阵，使内部流转工时缩减 80%。
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 md:-left-8 top-1 w-6 h-6 rounded-full bg-surface-card flex items-center justify-center ring-4 ring-canvas-bg">
              <span className="w-3 h-3 rounded-full bg-secondary" />
            </div>
            <div className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-headline-sm text-text-primary">碧桂园集团</span>
                  <span className="text-text-tertiary mx-2">·</span>
                  <span className="text-label-md text-secondary font-medium">项目运营 / 主数据治理</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container font-mono text-xs text-text-secondary w-fit">
                  2022.06 - 2023.12
                </span>
              </div>
              <p className="text-body-md text-text-secondary mb-4">
                负责跨大区海量工程主数据闭环管理与数据质量治理。将主数据准确性从 60% 系统性提升至 90%+，获评全集团「主数据治理优秀个人」（集团
                4000 余人中仅评选 10 人）。
              </p>
              <div className="p-3 bg-surface rounded-lg text-body-sm text-text-secondary">
                <strong className="text-text-primary font-medium">核心收获:</strong>{" "}
                极度严格的数据敏感性与合规治理意识，深刻理解大型机构复杂数据流转中的真实脏数据现状，为后续精准训练 Text-to-SQL 与 RAG
                奠定基石。
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 md:-left-8 top-1 w-6 h-6 rounded-full bg-surface-card flex items-center justify-center ring-4 ring-canvas-bg">
              <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim" />
            </div>
            <div className="bg-surface-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-headline-sm text-text-primary">中国地质大学（北京）</span>
                  <span className="text-text-tertiary mx-2">·</span>
                  <span className="text-label-md text-text-secondary font-medium">地质工程 · 工学硕士</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container font-mono text-xs text-text-secondary w-fit">
                  2019.09 - 2022.06
                </span>
              </div>
              <p className="text-body-md text-text-secondary">
                扎实系统的工科科研训练。深度参与多项复杂地理地质空间数据建模研究，锤炼了抽丝剥茧的逻辑推演能力、统计学根底以及严谨的工程化解题思维。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
