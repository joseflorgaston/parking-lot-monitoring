import DummyApi from '../api/dummy_api';
import { DummyModel } from '../models/dummy_model';

export default async function FetchData(): Promise<DummyModel[]> {
  try {
    return await DummyApi.getData();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
