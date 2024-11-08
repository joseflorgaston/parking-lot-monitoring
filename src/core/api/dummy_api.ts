import axiosInstance from '../../config/axios_instance';
import { DummyModel } from '../models/dummy_model';

class DummyApi {
  /**
   * Retrieves data from the dummy endpoint.
   * 
   * @returns {Promise<DummyModel[]>} A promise that resolves to an array of DummyModel objects.
   */
  static async getData(): Promise<DummyModel[]> {
    try {
      const response = await axiosInstance.get('/dummy-endpoint');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

export default DummyApi;