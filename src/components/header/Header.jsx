import { AppBar, Button, Stack, Toolbar, Typography } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { Box } from '@material-ui/system'
import ToggleColorMode from 'components/toggleColorMode/ToggleColorMode'
import { ColorModeContext } from 'context/ColorModeContext'
import { useContext } from 'react'
import { primaryNav } from 'constants/primaryNav'
import { Link } from 'react-router-dom'
import { UserContext } from 'context/UserContext'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
	color: theme.palette.text.primary,
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[0],
}))

export default function Header({ mode }) {
	const colorMode = useContext(ColorModeContext)
	const { user, setUser } = useContext(UserContext)

	return (
		<Box sx={{ flexGrow: 1 }}>
			<StyledAppBar position='static'>
				<Toolbar style={{ width: '100%' }}>
					<Box
						sx={{
							py: 2,
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Stack
							direction='column'
							justifyContent='center'
							alignItems='center'
							spacing={2}
						>
							<Typography variant='h1' align='center'>
								TODO
							</Typography>
							<ToggleColorMode mode={mode} colorMode={colorMode} />
							<Typography variant='body1' align='center'>
								{user.name}
							</Typography>
							<Button onClick={() => setUser({ ...user, name: 'Jane Doe' })}>
								Set user to Jane Doe
							</Button>
							<nav>
								<ul>
									{primaryNav.map(nav => (
										<li key={nav.id}>
											<Link to={nav.link}>{nav.display}</Link>
										</li>
									))}
								</ul>
							</nav>
						</Stack>
					</Box>
				</Toolbar>
			</StyledAppBar>
		</Box>
	)
}
