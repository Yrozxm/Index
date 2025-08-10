import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          color: { value: "#7aa2f7" },
          opacity: { value: 0.7 },
          links: {
            color: "#7aa2f7",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: "bounce",
          },
          number: {
            density: { enable: true, area: 800 },
            value: 50,
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
