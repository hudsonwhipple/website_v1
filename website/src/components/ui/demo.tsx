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
          colors={["#000000", "#0a0a0a", "#0d1a14", "#0d1520", "#111111"]}
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
            colors={["#7eb8d4", "#6abf7b", "#a8d4e8"]}
            speed={speed}
          />
        </div>
      )}

      {activeEffect === "combined" && (
        <>
          <MeshGradient
            style={fullCover}
            colors={["#000000", "#0a0a0a", "#0d1a14", "#0d1520", "#111111"]}
            speed={speed * 0.5}
          />
          <div style={{ ...fullCover, opacity: 0.6 }}>
            <DotOrbit
              style={fullCover}
              colorBack="transparent"
              colors={["#7eb8d4", "#6abf7b"]}
              speed={speed * 1.5}
            />
          </div>
        </>
      )}
    </div>
  )
}
