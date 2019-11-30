import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TodosService } from './todos/todos.service';
import { NotifyService } from './shared/notify/notify.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    TodosService,
    // Shared Services
    NotifyService
  ],
})
export class CoreDataModule {}
