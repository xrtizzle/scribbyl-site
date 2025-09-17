module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        marker: ["'Permanent Marker'", "cursive"], // scribbyl story in about 
      },
      colors: {
        primary: "#73A6E4",
        black: "#0D0D0D",
        lightGray: "#DEE0E4",
        slate: "#526074",
        deepBlue: "#395577",
        midBlue: "#567EAF",
        warmGray: "#AAB1BA"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    }
    
  },
  plugins: []
}


