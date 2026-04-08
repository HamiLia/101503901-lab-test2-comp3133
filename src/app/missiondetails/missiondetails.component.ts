import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule
  ],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  // Signals
  mission = signal<Mission | null>(null);
  isLoading = signal<boolean>(true);
  errorMessage = signal<string>('');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexService: SpacexapiService
  ) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('id');
    if (flightNumber) {
      this.loadMissionDetails(Number(flightNumber));
    }
  }

  loadMissionDetails(flightNumber: number): void {
    this.isLoading.set(true);
    this.spacexService.getLaunchById(flightNumber).subscribe({
      next: (data) => {
        this.mission.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.errorMessage.set('Failed to load mission details. Please try again.');
        this.isLoading.set(false);
        console.error(err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
