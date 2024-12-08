import { loadFull } from "tsparticles";

export const particlesInit = async (engine) => {
  await loadFull(engine); // Initialize tsParticles engine
};

export const particlesOptions = {
  background: {
    color: {
      value: "#f9f9f9", // Background color
    },
  },
  particles: {
    number: {
      value: 100, // Number of particles
    },
    color: {
      value: "#007bff", // Particle color
    },
    shape: {
      type: "circle", // Particle shape
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 5,
      random: true,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 100,
      },
      push: {
        quantity: 4,
      },
    },
  },
};
