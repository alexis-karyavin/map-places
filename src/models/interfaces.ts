export interface Features {
  type: string;
  properties: {
    description: string;
    icon: string;
  };
  geometry: {
    type: string;
    coordinates: Array<number>;
  };
}
