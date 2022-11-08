module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        averta: ['AvertaStd']
      },
      colors: {
        gradient: {
          light: '#1E2C38',
          dark: '#1D232F'
        },
        primary: '#0D1117',
        cloud: '#C9D1D9',
        link: '#58A6FF'
      },
      width: {
        90: '22.5rem'
      }
    }
  },
  plugins: []
};
