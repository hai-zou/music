import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';

const routes: Routes = [
	{ path: 'music-list', component: MusicListComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
