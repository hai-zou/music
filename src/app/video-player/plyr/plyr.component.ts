import { Component, Input, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Plyr from 'plyr';
import Hls from 'hls.js';

@Component({
	selector: 'app-plyr',
	templateUrl: './plyr.component.html',
	styleUrls: ['./plyr.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class PlyrComponent implements AfterViewInit {

	@ViewChild("player") player!: ElementRef<HTMLVideoElement>;

	@Input() sources: {
		src: string,
		type: string,
	}[] = [];

	constructor() {
	}

	ngAfterViewInit(): void {
		const player = new Plyr('#player', {
		});

		player.source = {
			type: 'video',
			title: 'Example title',
			sources: [
				{
					src: '/testFiles/projectS3/output.m3u8',
					type: 'application/x-mpegURL',
					size: 720,
				},
				{
					src: '/path/to/movie.webm',
					type: 'video/webm',
					size: 1080,
				},
			],
			poster: '/path/to/poster.jpg',
			previewThumbnails: {
				src: '/path/to/thumbnails.vtt',
			},
			tracks: [
				{
					kind: 'captions',
					label: 'English',
					srcLang: 'en',
					src: '/path/to/captions.en.vtt',
					default: true,
				},
				{
					kind: 'captions',
					label: 'French',
					srcLang: 'fr',
					src: '/path/to/captions.fr.vtt',
				},
			],
		};

		// if (Hls.isSupported()) {
		// 	const hls = new Hls();
		// 	hls.attachMedia(this.player.nativeElement);
		// 	hls.loadSource('/testFiles/projectS3/output.m3u8');
		// 	hls.on(Hls.Events.MANIFEST_PARSED, (res, data) => {
		// 		// 可在此处添加逻辑来切换不同清晰度的视频
		// 		console.log(data);

		// 	});
		// }
	}

}
