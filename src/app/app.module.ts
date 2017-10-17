import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from'@angular/router';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimecardComponent } from './timecard/timecard.component';
import { ProjectComponent } from './project/project.component';
import { AddprobtnComponent } from './addprobtn/addprobtn.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimecardComponent,
    ProjectComponent,
    AddprobtnComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,HttpModule,
    FormsModule,
    RouterModule.forRoot([
      
      {
        path:'timecard',
        component:TimecardComponent
      },
      {
        path:'project',
        component:ProjectComponent
      },{
        path:'addprobtn',
        component:AddprobtnComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
