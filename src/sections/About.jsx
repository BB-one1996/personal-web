import Icon from "../components/Icon.jsx"

function About() {
  return (
    <section className="w-full py-16 bg-surface-card shadow-sm" id="about">
      <div className="max-w-[1120px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-label-sm text-primary uppercase tracking-wider flex items-center gap-1.5">
              <Icon name="psychology_alt" className="text-[16px]" />
              <span>Philosophy & Standards · 关于我与方法论</span>
            </div>
            <h2 className="text-headline-lg text-text-primary tracking-tight">
              “先定测评标准，再谈迭代方向；
              <br />
              <span className="text-primary-container">小步验证，避免长链路掩盖缺陷。”</span>
            </h2>
            <p className="text-body-md text-text-secondary">
              AI 产品的最大痛点不是没有思路，而是盲目把长 Prompt 接入复杂 Agent
              框架，遇到结果漂移就不断打补丁。在我的工作字典里，每一个 Agent 上线前必须拥有固化的 Golden Benchmark
              与失败回滚机制。
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-surface-bright flex items-start gap-3">
                <Icon name="verified_user" className="text-secondary text-[22px] shrink-0 mt-0.5" />
                <div>
                  <div className="text-label-md text-text-primary font-semibold">原则一：评测先行 (Eval First)</div>
                  <div className="text-body-sm text-text-secondary mt-0.5">
                    在工程师写第一行代码前，PM 必须先构建至少 100 条真实高频测试用例与自动化准确率评估脚本。
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-bright flex items-start gap-3">
                <Icon name="account_tree" className="text-primary text-[22px] shrink-0 mt-0.5" />
                <div>
                  <div className="text-label-md text-text-primary font-semibold">原则二：链路解耦 (Modular Granularity)</div>
                  <div className="text-body-sm text-text-secondary mt-0.5">
                    严禁黑盒端到端。将「意图识别 → SQL 生成 → 结果校验」完全解耦，确保每个节点的准确率可独立观测与定位。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-surface-bright rounded-2xl p-6 shadow-sm">
              <div className="text-label-md text-text-primary font-semibold mb-4 flex items-center gap-2">
                <Icon name="workspace_premium" className="text-secondary text-[20px]" />
                <span>权威认证与个人荣誉</span>
              </div>
              <div className="space-y-3 text-label-md">
                <div className="p-3 bg-surface-card rounded-xl flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <Icon name="badge" className="text-primary-container text-[20px]" />
                    <span className="text-text-primary font-medium">工信部《生成式 AI 应用工程师》</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-primary text-xs shrink-0">认证证书</span>
                </div>
                <div className="p-3 bg-surface-card rounded-xl flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <Icon name="military_tech" className="text-secondary text-[20px]" />
                    <span className="text-text-primary font-medium">碧桂园主数据治理优秀个人</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed/20 text-secondary text-xs font-semibold shrink-0">
                    Top 10 / 4000
                  </span>
                </div>
                <div className="p-3 bg-surface-card rounded-xl flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <Icon name="translate" className="text-text-secondary text-[20px]" />
                    <span className="text-text-primary font-medium">大学英语六级 (CET-6)</span>
                  </div>
                  <span className="text-text-tertiary text-xs shrink-0">熟练查阅海外 AI 顶会</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-6">
              <div className="text-label-sm text-text-tertiary mb-2 font-mono"># RECRUITMENT STATUS</div>
              <div className="text-headline-sm text-text-primary font-semibold">目前处于开放看机会状态</div>
              <p className="text-body-sm text-text-secondary mt-1">
                乐于加入重视实际业务 ROI、对技术有敬畏心的高速成长型 AI 团队。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
