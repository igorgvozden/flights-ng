export interface Aircraft {
    model: string;
    speed: number;
    passengerCapacity: {
      total: number;
      main: number;
      first: number;
    };
  }