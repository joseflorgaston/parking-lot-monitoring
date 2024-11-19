import { LastImageResponse } from "../models/last_image_response";

export interface ImageRepository {
    fetchLastImageFromCamera(cameraID: string): Promise<LastImageResponse>;
  }
