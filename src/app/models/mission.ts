export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface Links {
  mission_patch: string;
  mission_patch_small: string;
  article_link: string;
  wikipedia: string;
  video_link: string;
}

export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface Mission {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_date_utc: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number | null;
  rocket: Rocket;
  ships: string[];
  telemetry: { flight_club: string | null };
  launch_site: LaunchSite;
  launch_success: boolean | null;
  links: Links;
  details: string | null;
  upcoming: boolean;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  timeline: { [key: string]: number | null } | null;
}
