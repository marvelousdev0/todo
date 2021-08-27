import { AppBar, Stack, Toolbar, Typography } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { Box } from '@material-ui/system'
import ToggleColorMode from 'components/toggleColorMode/ToggleColorMode'
import { ColorModeContext } from 'context/ColorModeContext'
import { useContext } from 'react'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
	color: theme.palette.text.primary,
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[0],
}))

export default function Header({ mode }) {
	const colorMode = useContext(ColorModeContext)

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
						</Stack>
					</Box>
				</Toolbar>
			</StyledAppBar>
		</Box>
	)
}
