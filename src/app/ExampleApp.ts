import { Application, Viewable } from 'conbo';
import MyContext from './core/MyContext';
import './ExampleApp.scss';
import ExampleRouteNavigator from './view/ExampleRouteNavigator';

@Viewable('ExampleApp')
export default class ExampleApp extends Application
{
	protected declarations():void
	{
		this.contextClass = MyContext;
		this.initialView = ExampleRouteNavigator;
	}

	protected initialize():void
	{
		console.info('RouteNavigator example for ConboJS');
	}
}
