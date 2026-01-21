import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { StdDashboardComponent } from './shared/component/std-dashboard/std-dashboard.component';
import { StdFormComponent } from './shared/component/std-form/std-form.component';
import { StdTableComponent } from './shared/component/std-table/std-table.component';
import { PostDashboardComponent } from './shared/component/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './shared/component/product-form/product-form.component';
import { ProductTableComponent } from './shared/component/product-table/product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent,
    StdDashboardComponent,
    StdFormComponent,
    StdTableComponent,
    PostDashboardComponent,
    PostFormComponent,
    PostCardComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
