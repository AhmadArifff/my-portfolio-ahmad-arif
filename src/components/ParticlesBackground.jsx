// src/components/ParticlesBackground.jsx
import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // load tsparticles engine
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#14b8a6" },
          links: {
            color: "#14b8a6",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 50,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  )
}
