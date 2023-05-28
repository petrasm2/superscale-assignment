import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskComponent} from './components/task/task.component';
import {TaskResolver} from './resolvers/task.resolver';
import {NewTaskResolver} from './resolvers/new-task.resolver';

const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  { path: 'task/new', component: TaskComponent, resolve: { task: NewTaskResolver }, data: { new: true }},
  { path: 'task/:id', component: TaskComponent, resolve: { task: TaskResolver }, data: { new: false}},
  { path: '', redirectTo: 'task-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
