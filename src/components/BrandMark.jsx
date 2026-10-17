import { useState } from "react"

export function LogoMark() {
  return (
    <div className="h-8 w-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center text-sm font-bold shrink-0">
      沈
    </div>
  )
}

export function ProfilePhoto({ src, alt, className }) {
  const [status, setStatus] = useState("loading")

  if (!src || status === "failed") {
    return (
      <div className={`${className} bg-primary-container text-on-primary flex items-center justify-center font-semibold`}>
        沈
      </div>
    )
  }

  return (
    <>
      {status !== "ready" ? (
        <div className={`${className} bg-surface-hover`} aria-hidden="true" />
      ) : null}
      <img
        alt={alt}
        className={status === "ready" ? className : "hidden"}
        src={src}
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("failed")}
      />
    </>
  )
}
