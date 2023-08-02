import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerComponent } from './video-player.component';
import { PlyrComponent } from './plyr/plyr.component';
import { VjsPlayerComponent } from './vjs-player/vjs-player.component';
import { MyVideoComponent } from './my-video/my-video.component';

import { VgControlsModule, VgCoreModule, VgOverlayPlayModule, VgBufferingModule } from 'ngx-videogular';

@NgModule({
	declarations: [
		VideoPlayerComponent,
		PlyrComponent,
		VjsPlayerComponent,
		MyVideoComponent,
	],
	imports: [
		CommonModule,
		VgControlsModule,
		VgCoreModule,
		VgOverlayPlayModule,
		VgBufferingModule,
	]
})
export class VideoPlayerModule { }
