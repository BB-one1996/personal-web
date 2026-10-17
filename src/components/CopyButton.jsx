import { useState } from "react"

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="text-xs text-text-tertiary hover:text-on-primary transition-colors px-2 py-1 bg-surface-card/10 rounded"
    >
      {copied ? "已复制" : "复制"}
    </button>
  )
}

export default CopyButton
