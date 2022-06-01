module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        averta: ['AvertaStd'],
      },
      colors: {
        gradient: {
          light: '#e5e5be',
          dark: '#606c88'
        },
        primary: {
          light: '#3F72AF',
          DEFAULT: '#112D4E'
        },
        cloud: '#F9F7F7'
      }
    }
  },
  plugins: []
};
