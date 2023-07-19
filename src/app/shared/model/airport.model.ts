export interface Airport {
    code: string; // Airport code, typically 3 characters
    city: string; // Airport city name
    timezone: string; // IANA timezone string
    location: Location;
  }