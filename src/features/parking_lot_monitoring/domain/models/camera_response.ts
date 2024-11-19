import { Camera } from "../entities/camera";

export interface CameraResponse {
    success: boolean,
    message: string,
    data: Camera[]
}
