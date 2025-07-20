import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const LightParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="light-particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#ffffff" } },
        particles: {
          number: { value: 40 },
          color: { value: "#b3b3b3" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            outModes: "out",
          },
        },
        detectRetina: true,
      }}
    />
  );
};