import { useState } from 'react'
import {
	Box,
	TextField,
	Button,
	Stack,
	List,
	ListItem,
	ListItemText,
	Card,
	IconButton,
	InputAdornment,
} from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import {
	AddRounded as AddRoundedIcon,
	ClearRounded as ClearRoundedIcon,
	DeleteRounded as DeleteRoundedIcon,
} from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'
import { initialTodos } from 'constants/initialTodos'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 16
const ScrollingCard = styled(Card)(({ theme }) => ({
	borderRadius: theme.spacing(0),
	padding: theme.spacing(2),
	width: 560,
	maxHeight: ITEM_HEIGHT * 10.5 + ITEM_PADDING_TOP,
	overflowY: 'auto',
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
	color: theme.palette.text.primary,
	'& label.Mui-focused': {
		color: theme.palette.text.primary,
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: theme.palette.text.primary,
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			color: theme.palette.text.primary,
			borderRadius: theme.spacing(0),
			borderColor: grey[300],
		},
		'&:hover fieldset': {
			color: theme.palette.text.primary,
			borderRadius: theme.spacing(0),
			borderColor: theme.palette.text.primary,
		},
		'&.Mui-focused fieldset': {
			color: theme.palette.text.primary,
			borderRadius: theme.spacing(0),
			borderColor: theme.palette.text.primary,
		},
	},
}))

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: theme.spacing(0),
	fontWeight: theme.typography.fontWeightBold,
	textTransform: 'capitalize',
}))

export default function Home() {
	const [inputValue, setInputValue] = useState('')
	const [todoList, setTodoList] = useState(() => [...initialTodos])

	function handleAddTodo(e) {
		e.stopPropagation()
		if (inputValue.length > 0) {
			const length = todoList.length
			setTodoList(todoList.concat([{ id: length, text: inputValue }]))
			setInputValue('')
		}
	}

	function handleDeleteTodo(todo) {
		setTodoList(todoList.filter(t => t.id !== todo.id))
	}

	return (
		<Box>
			<Stack spacing={8}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Stack direction='row' spacing={2}>
						<Box sx={{ width: { sm: 360, lg: 420 } }}>
							<StyledTextField
								value={inputValue}
								onChange={event => setInputValue(event.target.value)}
								size='small'
								variant='outlined'
								placeholder='Todo'
								fullWidth
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											{inputValue.length > 0 && (
												<IconButton
													size='small'
													aria-label='clear-input'
													onClick={() => setInputValue('')}
												>
													<ClearRoundedIcon />
												</IconButton>
											)}
										</InputAdornment>
									),
								}}
							/>
						</Box>
						<StyledButton
							variant='contained'
							color='primary'
							size='small'
							onClick={handleAddTodo}
							startIcon={<AddRoundedIcon />}
							disableElevation
							disableRipple
						>
							Add
						</StyledButton>
					</Stack>
				</Box>
				{todoList.length > 0 && (
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<ScrollingCard variant='outlined'>
							<List>
								<Stack spacing={1}>
									{todoList.map((todo, index) => (
										<ListItem
											key={todo.id}
											sx={{
												height: 55,
												'& .deleteTodo': { display: 'none' },
												'&:hover': {
													'& .todoText': {
														textDecoration: 'underline',
													},
													'& .deleteTodo': { display: 'block' },
												},
											}}
										>
											<ListItemText className='todoText' primary={todo.text} />
											<IconButton
												aria-label='delete'
												onClick={() => handleDeleteTodo(todo)}
												size='small'
												color='error'
												className='deleteTodo'
											>
												<DeleteRoundedIcon />
											</IconButton>
										</ListItem>
									))}
								</Stack>
							</List>
						</ScrollingCard>
					</Box>
				)}
			</Stack>
		</Box>
	)
}
