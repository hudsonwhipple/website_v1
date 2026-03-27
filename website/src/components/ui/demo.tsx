import React, { useState } from "react"
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"

export default function DemoOne() {
  const [speed] = useState(1.0)
  // ↓ EFFECT MODE — change to "dots" or "combined" to switch background style
  const [activeEffect] = useState("mesh")

  const fullCover: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {activeEffect === "mesh" && (
        <MeshGradient
          style={fullCover}
          // ↓ GRADIENT COLORS — swap these hex values to change the background palette
          colors={["#050816", "#0d1117", "#1a1a2e", "#3b82f6", "#8b5cf6"]}
          speed={speed}
        />
      )}

      {activeEffect === "dots" && (
        <div style={{ ...fullCover, background: "#050816" }}>
          <DotOrbit
            style={fullCover}
            // ↓ BACKGROUND COLOR behind dots
            colorBack="#050816"
            // ↓ DOT COLORS
            colors={["#3b82f6", "#8b5cf6", "#06b6d4"]}
            speed={speed}
          />
        </div>
      )}

      {activeEffect === "combined" && (
        <>
          <MeshGradient
            style={fullCover}
            colors={["#050816", "#0d1117", "#1a1a2e", "#3b82f6", "#8b5cf6"]}
            speed={speed * 0.5}
          />
          <div style={{ ...fullCover, opacity: 0.6 }}>
            <DotOrbit
              style={fullCover}
              colorBack="transparent"
              colors={["#3b82f6", "#8b5cf6"]}
              speed={speed * 1.5}
            />
          </div>
        </>
      )}
    </div>
  )
}
