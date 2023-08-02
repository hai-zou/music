import { Component, OnInit } from '@angular/core';
import { BitrateOption } from 'ngx-videogular';

@Component({
	selector: 'app-my-video',
	templateUrl: './my-video.component.html',
	styleUrls: ['./my-video.component.css']
})
export class MyVideoComponent implements OnInit {

	bitrates: BitrateOption[] = [
		{
			qualityIndex: 1,
			width: 200,
			height: 200,
			bitrate: 1,
			mediaType: 'mp4',
		}
	]

	constructor() { }

	ngOnInit() {
	}

	onBitrateChange(event: any) {

	}

}
