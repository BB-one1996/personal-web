import GradientASCII from "../components/1-c.jsx"
import { ProfilePhoto } from "../components/BrandMark.jsx"
import Icon from "../components/Icon.jsx"
import { PROFILE_IMAGE } from "../data/site.js"

function Hero() {
  return (
    <section className="w-full relative overflow-hidden py-16 md:py-24 min-h-[640px]" id="hero">
      <div className="absolute inset-0 z-0">
        <GradientASCII
          colors={["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          glyphOpacity={0.85}
          glow={0.2}
          depthOfField={0}
          flicker={0.2}
          softness={0.5}
          scale={1}
          flow={0.5}
          speed={1}
          gradientOpacity={0.9}
          grain={0.08}
          variation={0}
          mouseInteraction
          scrambleRadius={0.1}
          clickEffect="wave"
          intro
          lightMode={false}
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
      <div className="max-w-[1120px] mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-white/12 text-primary-fixed-dim mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
              <span className="text-label-md">ToB / ToG Foundation Model & Agents</span>
            </div>
            <h1 className="text-display-xl text-white tracking-tight mb-4 [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
              把大模型能力
              <br />
              翻译成可交付的业务产品
            </h1>
            <div className="flex items-center gap-space-sm mb-6">
              <span className="text-headline-md text-white">沈力钊</span>
              <span className="text-white/40">/</span>
              <span className="text-headline-sm text-white/70">AI 产品经理</span>
            </div>
            <p className="text-body-lg text-white/75 max-w-xl mb-8">
              3 年 ToB / ToG 大模型产品落地实战，中国地质大学硕士转行。专注于 0→1 场景定义、RAG / SQL Agent
              架构落地、端到端敏捷交付与闭环评测体系构建。用工程化理性消解模型幻觉，用量化指标验证业务价值。
            </p>
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-space-xs h-12 px-6 bg-primary-container text-on-primary rounded-lg text-label-md hover:bg-primary transition-all shadow-md group"
                href="#projects"
              >
                <span>查看标杆项目</span>
                <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-xs h-12 px-6 bg-white text-text-primary rounded-lg text-label-md hover:bg-surface-hover transition-all shadow-sm"
                href="#contact"
              >
                <Icon name="contact_mail" className="text-[18px] text-text-secondary" />
                <span>预约沟通 & 获取完整履历</span>
              </a>
            </div>
            <div className="mt-10 pt-6 flex flex-wrap items-center gap-3 text-white/55 text-label-sm">
              <span className="text-white/80 font-medium">实战专长:</span>
              <span className="px-2.5 py-1 bg-white/12 rounded-md text-white/80">RAG / Text-to-SQL</span>
              <span className="px-2.5 py-1 bg-white/12 rounded-md text-white/80">评测基准设计 (Eval)</span>
              <span className="px-2.5 py-1 bg-white/12 rounded-md text-white/80">Vibe Coding 快速原型</span>
              <span className="px-2.5 py-1 bg-white/12 rounded-md text-white/80">工信部生成式AI认证</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-container/20 to-secondary/20 rounded-2xl blur-xl opacity-70" />
              <div className="relative bg-surface-card rounded-2xl p-4 shadow-xl">
                <div className="relative overflow-hidden rounded-xl aspect-square bg-surface-hover">
                  <ProfilePhoto
                    alt="沈力钊 · AI产品经理肖像照"
                    className="w-full h-full object-cover"
                    src={PROFILE_IMAGE}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-contrast/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-on-primary">
                    <div className="text-headline-sm font-semibold">沈力钊 · Lizhao Shen</div>
                    <div className="text-label-sm text-surface-container-highest">
                      AI Agent / Prompt Engineering / Evaluation
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-surface-container-low rounded-xl flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 animate-pulse" />
                  <div className="flex flex-col">
                    <div className="text-label-md text-text-primary font-medium">💡 正在寻找 AI 产品机会</div>
                    <span className="text-label-sm text-text-secondary">期望 Base: 成都 · 支持完全远程 / 混合办公</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                  <div className="py-2 px-3 bg-surface rounded-lg">
                    <div className="text-label-sm text-text-tertiary">学历底座</div>
                    <div className="text-label-md text-text-primary font-medium mt-0.5">中国地质大学 · 硕士</div>
                  </div>
                  <div className="py-2 px-3 bg-surface rounded-lg">
                    <div className="text-label-sm text-text-tertiary">项目经验</div>
                    <div className="text-label-md text-text-primary font-medium mt-0.5">30+ 商业化版本推进</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
