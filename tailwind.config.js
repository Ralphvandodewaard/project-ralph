module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [{ pattern: /bg-(angular|vue|typescript|tailwind|pokemon|riot|php|mysql|csharp)/ }],
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
        },
        angular: '#DD0031',
        vue: '#42B883',
        typescript: '#3178C6',
        tailwind: '#0EA5E9',
        pokemon: '#524DD1',
        riot: '#DC291E',
        php: '#4F5B93',
        mysql: '#3E6E93',
        csharp: '#953DAC'
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
