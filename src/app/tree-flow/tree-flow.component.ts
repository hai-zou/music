import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-tree-flow',
	templateUrl: './tree-flow.component.html',
	styleUrls: ['./tree-flow.component.scss']
})
export class TreeFlowComponent {

	@Input() entryData = [
		{
			label: 'Root',
			children: [
				{
					label: 'Entry-1', children: [
						{
							label: 'Entry-1-1', children: [
								{ label: 'Entry-1-1-1', children: [] }
							]
						},
						{
							label: 'Entry-1-2', children: [
								{ label: 'Entry-1-2-1', children: [] }
							]
						},
						{
							label: 'Entry-1-3', children: [
								{ label: 'Entry-1-3-1', children: [] }
							]
						}
					]
				},
				{ label: 'Entry-2', children: [] },
				{
					label: 'Entry-3', children: [
						{ label: 'Entry-3-1', children: [] },
						{ label: 'Entry-3-2', children: [] },
						{
							label: 'Entry-3-3', children: [
								{ label: 'Entry-3-3-1', children: [] },
								{
									label: 'Entry-3-3-2', children: [
										{ label: 'Entry-3-3-2-1', children: [] },
										{ label: 'Entry-3-3-2-2', children: [] }
									]
								},
								{ label: 'Entry-3-3-3', children: [] }
							]
						},
						{ label: 'Entry-3-4', children: [] }
					]
				},
				{ label: 'Entry-4', children: [] },
				{ label: 'Entry-5', children: [] }
			]
		}
	];

}
