import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCoreComponent } from './candidate-core/candidate-core.component';
import { CandidateItemComponent } from './candidate-item/candidate-item.component';
import { CandidateRoutingModule } from './candidate-routing.module';

@NgModule({
	declarations: [CandidateCoreComponent, CandidateItemComponent],
	imports: [CommonModule, CandidateRoutingModule]
})
export class CandidateModule {}
