import Icon from "../components/Icon.jsx"

const METRICS = [
  {
    label: "智能体产品",
    icon: "smart_toy",
    value: "10+",
    unit: "个项目",
    note: "大模型与Agent完整落地全链路",
    noteClass: "text-secondary",
    accent: "bg-primary/5",
    iconClass: "text-primary",
    valueClass: "text-text-primary",
  },
  {
    label: "高校科研问答准确率",
    icon: "analytics",
    value: "93%",
    badge: "+18% 提升",
    note: "基线 75% 提升至 93% · SQL 达 98%",
    noteClass: "text-text-secondary",
    accent: "bg-secondary/10",
    iconClass: "text-secondary",
    valueClass: "text-secondary",
  },
  {
    label: "首月真实活跃交互",
    icon: "forum",
    value: "970+",
    unit: "次提问",
    note: "全年累计 10,000+ 真实业务调用",
    noteClass: "text-text-secondary",
    accent: "bg-primary/5",
    iconClass: "text-primary",
    valueClass: "text-text-primary",
  },
  {
    label: "Chat BI 运营规模",
    icon: "database",
    value: "2,443",
    badge: "省 ¥80,000",
    badgeClass: "bg-surface-container text-primary",
    note: "纳管项目 · 独立 Vibe Coding 交付",
    noteClass: "text-text-secondary",
    accent: "bg-primary-container/10",
    iconClass: "text-primary-container",
    valueClass: "text-primary-container",
  },
]

function Metrics() {
  return (
    <section className="w-full py-10 bg-surface-card shadow-sm relative z-20" id="metrics">
      <div className="max-w-[1120px] mx-auto px-margin-mobile md:px-margin">
        <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
          <span className="text-label-sm text-text-tertiary uppercase tracking-wider">
            Quantified Engineering & Business Impact
          </span>
          <span className="text-label-sm text-primary font-medium flex items-center gap-1">
            <Icon name="verified" className="text-[16px]" />
            真实生产环境落地数据
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {METRICS.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-xl bg-surface-bright shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-16 h-16 ${item.accent} rounded-bl-3xl transition-transform group-hover:scale-110`} />
              <div className="text-text-tertiary text-label-md mb-2 flex items-center justify-between">
                <span>{item.label}</span>
                <Icon name={item.icon} className={`text-[18px] ${item.iconClass}`} />
              </div>
              <div className="flex items-baseline gap-1 flex-wrap">
                <span className={`text-metric-stat tnum ${item.valueClass}`}>{item.value}</span>
                {item.unit ? <span className="text-label-md text-text-secondary font-medium">{item.unit}</span> : null}
                {item.badge ? (
                  <span
                    className={`px-2 py-0.5 rounded-full font-semibold text-label-sm ${
                      item.badgeClass || "bg-secondary-fixed/20 text-secondary"
                    }`}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <div className={`mt-2 flex items-center gap-1.5 text-label-sm ${item.noteClass}`}>
                {item.label === "智能体产品" ? <Icon name="check_circle" className="text-[16px]" /> : null}
                <span>{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metrics
