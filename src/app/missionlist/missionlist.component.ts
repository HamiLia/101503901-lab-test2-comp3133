import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatRippleModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  // Signals
  missions = signal<Mission[]>([]);
  isLoading = signal<boolean>(true);
  errorMessage = signal<string>('');

  constructor(
    private spacexService: SpacexapiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.isLoading.set(true);
    this.errorMessage.set('');
    this.spacexService.getAllLaunches().subscribe({
      next: (data) => {
        this.missions.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.errorMessage.set('Failed to load missions. Please try again.');
        this.isLoading.set(false);
        console.error(err);
      }
    });
  }

  viewDetails(mission: Mission): void {
    this.router.navigate(['/mission', mission.flight_number]);
  }

  goToFilter(): void {
    this.router.navigate(['/filter']);
  }
}
