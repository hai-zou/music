import { Component, ElementRef, Input, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import videojs from 'video.js/dist/video.min.js';
import 'videojs-contrib-quality-levels';

// @ts-ignore
import videojsqualityselector from 'videojs-hls-quality-selector/dist/videojs-hls-quality-selector.min.js';

async function readFile(readableStream: ReadableStream<Uint8Array>) {
	const reader = readableStream.getReader();
	let result = '';

	while (true) {
		const { done, value } = await reader.read();

		if (done) {
			// 数据读取完成，跳出循环
			break;
		}

		// 将 Uint8Array 转换为字符串
		const chunk = new TextDecoder().decode(value);
		result += chunk;
	}

	return result;
}

// SRT to VTT 转换函数
function srtToVtt(srtText: string) {
	// 替换时间码格式，将逗号替换为点号并添加空格
	const vttText = srtText.replace(/,/g, '.');

	// 添加 VTT 文件头部
	return `WEBVTT\n\n${vttText}`;
}

@Component({
	selector: 'app-vjs-player',
	templateUrl: './vjs-player.component.html',
	styleUrls: ['./vjs-player.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class VjsPlayerComponent implements AfterViewInit {

	@ViewChild('target', { static: true }) target!: ElementRef;

	// See options: https://videojs.com/guides/options
	@Input() sources: {
		src: string,
		type: string,
		size: number,
	}[] = [];

	player: any;

	url: string = "";

	constructor(
	) { }

	ngAfterViewInit() {
		// this.player = videojs(
		// 	this.target.nativeElement,
		// 	{ sources: this.sources },
		// 	function onPlayerReady() {
		// 		console.log('onPlayerReady', this);
		// 	}
		// );
		videojs.registerPlugin("hlsQualitySelector", videojsqualityselector);
		this.player = videojs('my-video', {
			controls: true,
		});
		this.player.qualityLevels();
		this.player.hlsQualitySelector = videojsqualityselector;
		this.player.hlsQualitySelector({
			displayCurrentQuality: true,
		});

		// this.player.on('change', () => {
		// 	const currentQuality = this.player.qualityLevels().find((level: any) => level.enabled && level.selected);
		// 	if (currentQuality) {
		// 		console.log('Selected quality:', currentQuality.label);
		// 	}
		// });

		const apiUrl = '/onlineCdnProxy/dreame/file/1.srt';

		fetch(apiUrl)
			.then(response => {
				// 检查响应是否成功
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response;
			})
			.then(data => {
				// 在这里处理响应数据
				readFile(data.body!)
					.then(content => {
						const vttSubtitle = srtToVtt(content);
						this.url = URL.createObjectURL(new Blob([vttSubtitle], { type: 'text/vtt' }));
						// 添加字幕轨道
						this.player.addRemoteTextTrack({
							kind: 'captions',
							label: 'English Captions',
							src: 'assets/1.vtt',
							srclang: 'en',
							default: true
						});
					})
					.catch(error => {
						console.error('Error:', error);
					});
			})
			.catch(error => {
				// 在这里处理错误
				console.error('Error:', error);
			});
	}

	ngOnDestroy() {
		if (this.player) {
			this.player.dispose();
		}
	}
}
