/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b1c22",
        secondary: "#fbb465",
        silver: "#e6e6e6",
        dark: "#0f0f0f",
        accent: "#ff6b6b",
        "glass-bg": "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "spin-slow": "spin 10s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #fbb465, 0 0 10px #fbb465, 0 0 15px #fbb465",
          },
          "100%": {
            boxShadow: "0 0 10px #fbb465, 0 0 20px #fbb465, 0 0 30px #fbb465",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        neon: "0 0 5px #fbb465, 0 0 10px #fbb465, 0 0 15px #fbb465",
        project: "0 10px 30px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
