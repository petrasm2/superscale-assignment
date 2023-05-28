import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import {HttpClientModule} from '@angular/common/http';
import { TaskTypeTranslationPipe } from './pipes/task-type-translation.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmDeleteTaskComponent } from './modals/confirm-delete-task/confirm-delete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskTypeTranslationPipe,
    HeaderComponent,
    HeaderComponent,
    ConfirmDeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
