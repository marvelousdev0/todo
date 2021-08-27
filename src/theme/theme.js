import { createTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import '@fontsource/plus-jakarta-sans'
import '@fontsource/ibm-plex-sans'

const getTheme = mode => {
	return createTheme({
		typography: {
			fontFamily: [
				'IBM Plex Sans',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
			h1: {
				fontFamily: 'Plus Jakarta Sans',
				fontWeight: 800,
			},
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: ``,
			},
		},
		palette: {
			mode,
			primary: {
				main: blue[900],
			},
			contrastThreshold: 3,
			tonalOffset: 0.2,
		},
	})
}

export { getTheme }
