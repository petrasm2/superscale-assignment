# SuperscaleAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Adding new types of tasks and fields
Tasks types can be extended by extending 
[TaskTypeEnum](https://github.com/petrasm2/superscale-assignment/blob/main/src/app/enums/task-type.enum.ts)
and defining fields for new task type in 
[TaskFieldsDesc](https://github.com/petrasm2/superscale-assignment/blob/main/src/app/forms/task.form.config.ts).

Field types can be extended by extending 
[FieldTypeEnum](https://github.com/petrasm2/superscale-assignment/blob/main/src/app/enums/field-type.enum.ts)
and implementing new field types in 
[TaskComponent](https://github.com/petrasm2/superscale-assignment/blob/main/src/app/components/task/task.component.html)
(starting on line 26). For more field types I would extract this to its own component and maybe add property map
similar to
[TaskFieldsDesc](https://github.com/petrasm2/superscale-assignment/blob/main/src/app/forms/task.form.config.ts).
I did not implement this to further details to save time.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
