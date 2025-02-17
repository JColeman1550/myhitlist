// tailwind.config.js
module.exports = {
  darkMode: 'class',  // Enables dark mode using a class, which we toggle on the root
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Watch all your components and JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
