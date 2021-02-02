import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CandidateCoreComponent } from './candidate-core/candidate-core.component';

const routes = [{ path: '', component: CandidateCoreComponent }];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CandidateRoutingModule {}
