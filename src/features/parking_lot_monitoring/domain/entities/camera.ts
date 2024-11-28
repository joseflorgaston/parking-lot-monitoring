import { ParkingSpot } from "./parking_spot";

export interface Camera {
    _id: string,
    created_at: string,
    identifier: string,
    image_interval: number,
    max_results: number,
    parking_spot: ParkingSpot,
    parking_spot_id: string
}
