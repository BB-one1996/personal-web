function Footer() {
  return (
    <footer className="w-full bg-surface-card border-t border-border-subtle py-space-xl">
      <div className="max-w-[1120px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg pb-space-lg border-b border-border-subtle">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="text-headline-sm text-text-primary">沈力钊 · AI PM</span>
              <span className="text-label-sm px-2 py-0.5 rounded bg-surface-container text-primary font-medium">
                ToB / ToG Foundation Model Agents
              </span>
            </div>
            <p className="text-body-sm text-text-secondary">
              聚焦工业级大模型 Agent 架构落地、商业化推理成本优化与可信决策闭环。
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-md text-label-md text-text-secondary">
            <a className="hover:text-primary transition-colors" href="#hero">
              首页
            </a>
            <a className="hover:text-primary transition-colors" href="#projects">
              精选方案
            </a>
            <a className="hover:text-primary transition-colors" href="#capabilities">
              系统架构
            </a>
            <a className="hover:text-primary transition-colors" href="#timeline">
              履历复盘
            </a>
            <a className="hover:text-primary transition-colors" href="#contact">
              业务咨询
            </a>
          </div>
        </div>
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-label-sm text-text-tertiary">
          <div>© 2025 沈力钊 (Lizhao Shen). All rights reserved. 遵循现代高精度工业极简设计准则。</div>
          <div>Driven by Rigorous Systems Thinking & Measurable Execution.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
