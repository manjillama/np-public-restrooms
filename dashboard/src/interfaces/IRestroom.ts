export interface IRestroom {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  address: string;
  phoneNumber: string;
  location: {
    coordinates: [lng: number, lat: number];
  };
  remarks: string;
}