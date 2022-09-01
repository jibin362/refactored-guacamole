/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      width: {
        800: '800px'
      },
      fontSize: {
        base: '14px',
        lg: '16px',
        xl: '20px'
      },
      borderRadius: {
        btn: '48px',
        badge: '36px'
      },
      colors: {
        'yellow-custom': '#FFDD00',
        'green-custom': '#70C050',
        'red-custom': '#FF5858'
      },
      padding: {
        '7px': '7px',
        '16px': '16px'
      }
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/forms')
  ]
};
