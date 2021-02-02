import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/_services/http.service';

@Component({
	selector: 'app-candidate-core',
	templateUrl: './candidate-core.component.html',
	styleUrls: ['./candidate-core.component.scss']
})
export class CandidateCoreComponent implements OnInit {
	public candidates = [];
	constructor(private http: HttpService) {}

	async ngOnInit(): Promise<void> {
		const results = await this.http.getUsers();
		this.candidates = results;
	}
}
