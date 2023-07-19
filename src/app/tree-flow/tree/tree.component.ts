import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

	@Input() entryData: any[] = [];

}
