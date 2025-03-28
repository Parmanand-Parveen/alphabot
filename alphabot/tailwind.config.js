// tailwind.config.js
module.exports = {
    content: [
      // your content paths
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('tailwind-scrollbar-hide'), // Add this line
      // other plugins...
    ],
  }