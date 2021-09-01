import Home from 'pages/home/Home'
import Weather from 'pages/weather/Weather'
import { Switch, Route } from 'react-router'

export const routes = (
	<Switch>
		<Route exact path='/'>
			<Home />
		</Route>
		<Route path='/weather'>
			<Weather />
		</Route>
	</Switch>
)
