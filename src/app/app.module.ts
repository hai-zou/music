import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TreeFlowComponent } from './tree-flow/tree-flow.component';
import { TreeComponent } from './tree-flow/tree/tree.component';

@NgModule({
    declarations: [	
        AppComponent,
		TreeFlowComponent,
		TreeComponent,
   ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
