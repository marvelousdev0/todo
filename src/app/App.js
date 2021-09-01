import { useState, useMemo } from 'react'
import { CssBaseline, Stack, useMediaQuery } from '@material-ui/core'
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import { getTheme } from 'theme/theme'
import { ColorModeContext } from 'context/ColorModeContext'
import Header from 'components/header/Header'
import { routes } from 'routes'
import { UserContext } from 'context/UserContext'

function App() {
	const [user, setUser] = useState({ name: 'John Doe' })

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

	return (
		<ColorModeContext.Provider value={colorMode}>
			<UserContext.Provider value={{ user, setUser }}>
				<ThemeProvider theme={myTheme}>
					<CssBaseline />
					<Stack spacing={8}>
						<Header mode={mode} />
						{routes}
					</Stack>
				</ThemeProvider>
			</UserContext.Provider>
		</ColorModeContext.Provider>
	)
}

export default App
