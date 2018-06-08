import RouteNavigator from 'conbo-routenavigator';
import ExampleView from './ExampleView';
import { ConboEvent } from 'conbo';

export default class ExampleRouteNavigator extends RouteNavigator
{
	protected declarations():void
	{
		this.firstView = ExampleView;
		this.firstViewOptions = {name:'Welcome!'};

		this.routes =
		{
			'/:name': 'ExampleView'
		};
	}

	protected initialize():void
	{
		location.href = '#!/Welcome!';
		this.addEventListener(ConboEvent.CREATION_COMPLETE, this.creationCompleteHandler, this);
	}

	protected creationCompleteHandler(event:ConboEvent):void
	{
		this.router
			.addEventListener(ConboEvent.FAULT, this.faultHandler, this)
			.start({trigger:false})
			;
	}

	protected faultHandler(event:ConboEvent):void
	{
		this.router.path = '/Unknown';
	}
}
