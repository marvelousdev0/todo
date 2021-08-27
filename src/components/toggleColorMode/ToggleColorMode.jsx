import {
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
import {
	Brightness2 as Brightness2Icon,
	Brightness7 as Brightness7Icon,
	SettingsBrightness as SettingsBrightnessIcon,
} from '@material-ui/icons'

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
	color: theme.palette.text.secondary,
	'&.Mui-selected': {
		backgroundColor: blue[100],
		color: theme.palette.primary.main,
	},
}))

const Label = styled(Typography)(({ theme }) => ({
	fontSize: theme.typography.pxToRem(14),
	color: 'inherit',
	textTransform: 'lowercase',
	fontWeight: theme.typography.fontWeightBold,
}))

export default function ToggleColorMode({ mode, colorMode }) {
	return (
		<ToggleButtonGroup
			size='small'
			value={mode}
			exclusive
			onChange={colorMode.toggleColorMode}
			aria-label='color mode'
		>
			<StyledToggleButton value='light' aria-label='light' sx={{ px: 2, py: 1.5 }}>
				<Stack
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={1}
				>
					<Brightness7Icon />
					<Label>light</Label>
				</Stack>
			</StyledToggleButton>
			<StyledToggleButton value='system' aria-label='system' sx={{ px: 2 }}>
				<Stack
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={1}
				>
					<SettingsBrightnessIcon />
					<Label>system</Label>
				</Stack>
			</StyledToggleButton>
			<StyledToggleButton value='dark' aria-label='dark' sx={{ px: 2 }}>
				<Stack
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={1}
				>
					<Brightness2Icon />
					<Label>dark</Label>
				</Stack>
			</StyledToggleButton>
		</ToggleButtonGroup>
	)
}
