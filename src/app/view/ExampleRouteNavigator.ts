import RouteNavigator from 'conbo-routenavigator';
import ExampleView from './ExampleView';
import { ConboEvent, Viewable } from 'conbo';

@Viewable('ExampleRouteNavigator')
export default class ExampleRouteNavigator extends RouteNavigator
{
	protected declarations():void
	{
		this.firstView = ExampleView;
		this.firstViewOptions = {name:'Welcome!'};

		// Routes listed in the format name:ViewClass
		this.routes =
		{
			'/:name': ExampleView
		};
	}

	protected initialize():void
	{
		location.href = '#/Welcome!';
	}

	protected creationComplete():void
	{
		this.router
			.addEventListener(ConboEvent.FAULT, this.faultHandler, {scope:this})
			.start({trigger:false})
			;
	}

	protected faultHandler(event:ConboEvent):void
	{
		this.router.path = '/Unknown';
	}
}
