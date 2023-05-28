import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskComponent} from './components/task/task.component';
import {TaskResolver} from './resolvers/task.resolver';

const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  { path: 'task/new', component: TaskComponent },
  { path: 'task/:id', component: TaskComponent, resolve: { task: TaskResolver }},
  { path: '', redirectTo: 'task-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
