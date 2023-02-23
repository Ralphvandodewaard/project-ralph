module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [{ pattern: /bg-(angular|vue|typescript|tailwind|tcg|riot|php|mysql|csharp|poke|spotify)/ }],
  theme: {
    extend: {
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
        tcg: '#524DD1',
        riot: '#DC291E',
        php: '#4F5B93',
        mysql: '#3E6E93',
        csharp: '#953DAC',
        poke: '#EF5350',
        spotify: '#1ED760'
      },
      fontSize: {
        '3xl': ['1.75rem', '2rem']
      },
      screens: {
        sm: '426px',
        mobile: '820px',
        tablet: '1216px'
      }
    }
  },
  plugins: []
};
