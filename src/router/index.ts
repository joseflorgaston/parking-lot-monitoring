import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ParkingLot from '../features/parking_lot_monitoring/presentation/pages/index.vue';
import CameraMonitoring from '../features/parking_lot_monitoring/presentation/pages/monitoring.vue';
import Configuration from '../features/configuration/presentation/pages/index.vue';
import Analytics from '../features/analytics/presentation/pages/analytics.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: ParkingLot },
  { path: '/parking-lot-monitoring', component: ParkingLot },
  { path: '/parking-lot-monitoring/:camera_id', name: 'CameraMonitoring', component: CameraMonitoring },
  { path: '/configuration', component: Configuration },
  { path: '/analytics', component: Analytics },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
