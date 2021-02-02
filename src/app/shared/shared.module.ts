import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverDirective } from 'src/_directives/observer.directive';

@NgModule({
  declarations: [ObserverDirective],
  imports: [CommonModule],
  exports: [ObserverDirective],
})
export class SharedModule {}
