export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        royal: '#2563EB',
        cyanx: '#06B6D4',
        violetx: '#7C3AED',
        darkx: '#020617'
      },
      boxShadow: {
        glow: '0 20px 60px rgba(37,99,235,.18)'
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-18px)' } },
        gradient: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite'
      }
    }
  },
  plugins: []
}
