module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        averta: ['AvertaStd']
      },
      colors: {
        primary: '#32455A',
        secondary: '#2A2E37',
        cloud: '#F9F7F7'
      },
      width: {
        90: '22.5rem'
      }
    }
  },
  plugins: []
};
