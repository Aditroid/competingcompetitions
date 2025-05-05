module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      // add other paths if needed
    ],
    theme: {
      extend: {animation: {
        'slide-in': 'slideIn 0.3s ease forwards',
      },
      colors: {
        navy: "#0b1120"
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },},
    },
    plugins: [require("@tailwindcss/line-clamp")],
  };
  