module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '816px'
      },
      fontFamily: {
        averta: ['AvertaStd']
      },
      colors: {
        blue: {
          450: '#58A6FF'
        },
        neutral: {
          850: '#202020',
          950: '#0F0F0F'
        }
      },
      width: {
        90: '22.5rem'
      },
      maxWidth: {
        90: '22.5rem'
      }
    }
  },
  plugins: []
};
