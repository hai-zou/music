import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';
import { TreeFlowComponent } from './tree-flow/tree-flow.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
	{ path: 'music-list', component: MusicListComponent },
	{ path: 'tree-flow', component: TreeFlowComponent },
	{ path: 'video-player', component: VideoPlayerComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
