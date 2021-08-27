import { useState, useMemo } from 'react'
import { CssBaseline, Stack, useMediaQuery } from '@material-ui/core'
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import Home from 'pages/home/Home'
import { getTheme } from 'theme/theme'
import { ColorModeContext } from 'context/ColorModeContext'
import Header from 'components/header/Header'

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const [mode, setMode] = useState('light')
	const colorMode = useMemo(
		() => ({
			toggleColorMode: (event, mode) => {
				setMode(mode)
			},
		}),
		[]
	)

	const myTheme = useMemo(() => {
		const color = mode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode
		return responsiveFontSizes(getTheme(color))
	}, [mode])

	console.log(mode, myTheme)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={myTheme}>
				<CssBaseline />
				<Stack spacing={8}>
					<Header mode={mode} />
					<Home />
				</Stack>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App
