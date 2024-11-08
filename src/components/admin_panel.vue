<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-900 text-white">
            <div class="p-4 text-lg font-bold flex items-center space-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Parking_icon.svg/1024px-Parking_icon.svg.png"
                    alt="Logo" class="h-6 w-6" />
                <span>Parking Lot</span>
            </div>
            <nav class="mt-4">
                <ul>
                    <li class="p-3 hover:bg-gray-700"><a href="/parking-lot-monitoring">Dashboard</a></li>
                    <li class="p-3 hover:bg-gray-700"><a href="/configuration">Configuraciones</a></li>
                    <li class="p-3 hover:bg-gray-700"><a href="/analytics">Analiticas</a></li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 px-6 py-3">
            <!-- Header <Header /> -->
            
            <!-- Here must go the screen content-->
            <router-view />
        </main>
    </div>
</template>

<script lang="ts" setup>
import ElevatedCard from "./elevated_card.vue";
import Header from "./header.vue";
</script>
