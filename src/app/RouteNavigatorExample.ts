import './RouteNavigatorExample.scss';

import * as conbo from 'conbo';
import { Application, Viewable } from 'conbo';

import ExampleRouteNavigator from './view/ExampleRouteNavigator';
import MyContext from './core/MyContext';

@Viewable('conbo.example.routenavigator', 'RouteNavigatorExample')
export default class RouteNavigatorExample extends Application
{
	protected declarations():void
	{
		this.namespace = conbo('conbo.example.routenavigator');
		this.contextClass = MyContext;
		this.initialView = ExampleRouteNavigator;
	}

	protected initialize():void
	{
		console.info('RouteNavigator example for ConboJS');
	}

}
