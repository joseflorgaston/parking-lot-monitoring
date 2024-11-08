import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ParkingLot from '../features/parking_lot_monitoring/presentation/pages/index.vue';
import Configuration from '../features/configuration/presentation/pages/configuration.vue';
import Analytics from '../features/analytics/presentation/pages/analytics.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: ParkingLot },
  { path: '/parking-lot-monitoring', component: ParkingLot },
  { path: '/configuration', component: Configuration },
  { path: '/analytics', component: Analytics },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
