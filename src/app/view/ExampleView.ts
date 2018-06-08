import { View, Bindable, Viewable } from 'conbo';

let counter:number = 0;

@Viewable('conbo.example.routenavigator', 'ExampleView')
export default class ExampleView extends View
{
	@Bindable public name:string;

	protected declarations(options:any):void
	{
		this.className = 'example-view';
		this.name = options.name || counter.toString();

		this.template =
		`
			<h1>{{name}}</h1>
			<p>This view will automatically get updated each time the router detects a change to the current path.</p>
			<p>Click the button below or change the URL to navigate.</p>
			<button cb-onclick="next">Next</button>
		`;
	}

	protected next():void
	{
		location.href = `#!/${++counter}`;
	}
}
