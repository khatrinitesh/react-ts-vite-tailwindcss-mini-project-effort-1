const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',    // Small devices (phones)
        'md': '768px',    // Medium devices (tablets)
        'lg': '1024px',   // Large devices (desktops)
        'xl': '1280px',   // Extra large devices (large desktops)
        '2xl': '1536px',  // 2XL devices (larger desktops)
        // Add your custom breakpoints here
        'landscape': {'raw': '(orientation: landscape)'},
        'portrait': {'raw': '(orientation: portrait)'},
        'print': {'raw': 'print'},
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

