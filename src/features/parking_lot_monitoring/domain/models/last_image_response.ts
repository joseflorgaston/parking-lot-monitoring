import { ParkingImage } from "../entities/parking_image";

export interface LastImageResponse {
    data: ParkingImage,
    success: boolean,
    message: string
  }
