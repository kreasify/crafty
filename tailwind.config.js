module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
				fadeInDown: 'fadeInDown 900ms ease-in-out',
			},
			keyframes: {
				fadeInDown: {
					'0%': {
						opacity: '0',
						transform: 'translate3d(0, -200%, 0)'
					},
					'100%': {
						opacity: '1',
						transform: 'none'
					},
				},
			},
    }
  },
  plugins: [],
}