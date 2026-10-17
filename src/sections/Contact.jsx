import CopyButton from "../components/CopyButton.jsx"
import Icon from "../components/Icon.jsx"
import { CONTACT } from "../data/site.js"

function Contact() {
  return (
    <section className="w-full py-20 bg-surface-contrast text-on-primary relative overflow-hidden" id="contact">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
      <div className="max-w-[1120px] mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card/10 text-secondary text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              OPEN FOR NEW OPPORTUNITIES
            </div>
            <h2 className="text-headline-lg text-on-primary tracking-tight">
              正在寻找 AI 产品经理机会
              <br />
              <span className="text-primary-fixed-dim">期待与您探讨智能体落地的更多可能</span>
            </h2>
            <p className="text-body-lg text-surface-container-high max-w-xl">
              如果您正在推进 ToB/ToG 场景下的大模型 Agent 架构转型，需要一位懂技术边界、能扛指标、具备 0 到 1
              落地经验的实干派产品经理，欢迎随时联络。
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                className="inline-flex items-center justify-center gap-space-xs h-12 px-6 bg-primary-container text-on-primary rounded-lg text-label-md hover:bg-primary transition-all shadow-lg group"
                href={`mailto:${CONTACT.email}`}
              >
                <Icon name="mail" className="text-[18px]" />
                <span>发送邮件咨询</span>
                <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-xs h-12 px-6 bg-surface-card/10 text-on-primary rounded-lg text-label-md hover:bg-surface-card/20 transition-all"
                href={`tel:${CONTACT.phone}`}
              >
                <Icon name="call" className="text-[18px]" />
                <span>电话沟通 / 微信同号</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-surface-card/5 backdrop-blur-md rounded-2xl p-6">
              <div className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-4">Direct Contact Channels</div>
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-surface-card/5 flex items-center justify-between gap-3 group hover:bg-surface-card/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-card/10 flex items-center justify-center text-secondary">
                      <Icon name="phone_iphone" className="text-[20px]" />
                    </div>
                    <div>
                      <div className="text-xs text-text-tertiary">手机 / 微信同号</div>
                      <div className="text-label-md text-on-primary font-medium select-all">{CONTACT.phone}</div>
                    </div>
                  </div>
                  <CopyButton value={CONTACT.phone} />
                </div>
                <div className="p-3.5 rounded-xl bg-surface-card/5 flex items-center justify-between gap-3 group hover:bg-surface-card/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-card/10 flex items-center justify-center text-primary-fixed-dim">
                      <Icon name="alternate_email" className="text-[20px]" />
                    </div>
                    <div>
                      <div className="text-xs text-text-tertiary">个人电子邮箱</div>
                      <div className="text-label-md text-on-primary font-medium select-all">{CONTACT.email}</div>
                    </div>
                  </div>
                  <CopyButton value={CONTACT.email} />
                </div>
                <div className="p-3.5 rounded-xl bg-surface-card/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-card/10 flex items-center justify-center text-secondary">
                    <Icon name="location_on" className="text-[20px]" />
                  </div>
                  <div>
                    <div className="text-xs text-text-tertiary">期望工作城市</div>
                    <div className="text-label-md text-on-primary font-medium">成都 (现居) · 开放远程协作 / 差旅</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 text-xs text-text-tertiary flex items-center justify-between">
                <span>承诺 24 小时内快速响应</span>
                <span className="font-mono text-secondary">READY TO DEPLOY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
