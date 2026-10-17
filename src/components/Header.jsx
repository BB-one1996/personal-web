import { useEffect, useState } from "react"
import { NAV_ITEMS, PROFILE_IMAGE } from "../data/site.js"
import { LogoMark, ProfilePhoto } from "./BrandMark.jsx"
import Icon from "./Icon.jsx"

function Header() {
  const [activeId, setActiveId] = useState("hero")
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean)

    function onScroll() {
      const scrollY = window.scrollY
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (scrollY / max) * 100 : 0)

      let current = NAV_ITEMS[0].id
      for (const section of sections) {
        if (scrollY >= section.offsetTop - 120) {
          current = section.id
        }
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-canvas-bg/85 backdrop-blur-md border-b border-border-subtle">
      <div className="h-14 max-w-[1120px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
        <a href="#hero" className="flex items-center gap-space-sm shrink-0" onClick={closeMenu}>
          <LogoMark />
          <div className="flex flex-col">
            <span className="text-headline-sm text-text-primary tracking-tight leading-none">沈力钊</span>
            <span className="text-label-sm text-text-secondary leading-tight mt-0.5">AI Product Manager</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-space-lg">
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-label-md transition-colors ${
                  active ? "text-primary font-semibold" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-space-md shrink-0">
          <a
            className="hidden sm:inline-flex items-center justify-center gap-space-xs h-9 px-space-md bg-primary-container text-on-primary rounded-lg text-label-md hover:bg-primary transition-all shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
            href="#contact"
          >
            <Icon name="download" className="text-[18px]" />
            <span>下载完整简历 PDF</span>
          </a>
          <ProfilePhoto
            alt="Profile"
            className="hidden sm:block w-8 h-8 rounded-full object-cover ring-1 ring-border-subtle"
            src={PROFILE_IMAGE}
          />
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-text-primary"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="text-[24px]" />
          </button>
        </div>
      </div>

      <div className="h-0.5 bg-border-subtle">
        <div className="h-full bg-primary-container transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      {menuOpen ? (
        <div className="lg:hidden border-t border-border-subtle bg-canvas-bg/95 backdrop-blur-md">
          <nav className="max-w-[1120px] mx-auto px-margin-mobile py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`min-h-11 flex items-center text-label-md ${
                  activeId === item.id ? "text-primary font-semibold" : "text-text-secondary"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-space-xs h-11 px-space-md bg-primary-container text-on-primary rounded-lg text-label-md"
            >
              <Icon name="download" className="text-[18px]" />
              下载完整简历 PDF
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Header
