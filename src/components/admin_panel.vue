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
                    <!-- Dashboard -->
                    <li class="p-3 hover:bg-gray-700 flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h11M9 21v-6a3 3 0 013-3h8m-7-7h7m0 0v6m0-6l-9 9" />
                        </svg>
                        <a href="/parking-lot-monitoring" class="flex-1">Dashboard</a>
                    </li>
                    <!-- Configuraciones -->
                    <li class="p-3 hover:bg-gray-700 flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a9.937 9.937 0 015.356 5.356c.921.3.921 1.603 0 1.902a9.937 9.937 0 01-5.356 5.356c-.3.921-1.603.921-1.902 0a9.937 9.937 0 01-5.356-5.356c-.921-.3-.921-1.603 0-1.902a9.937 9.937 0 015.356-5.356zM12 8v4m0 4h.01" />
                        </svg>
                        <a href="/configuration" class="flex-1">Configuraciones</a>
                    </li>
                    <!-- Analiticas -->
                    <li class="p-3 hover:bg-gray-700 flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A2 2 0 013 15.382V8.618a2 2 0 011.553-1.894L9 4m6 16l5.447-2.724A2 2 0 0021 15.382V8.618a2 2 0 00-1.553-1.894L15 4m-6 0l6 16m0-16l-6 16" />
                        </svg>
                        <a href="/analytics" class="flex-1">Analiticas</a>
                    </li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 px-6 py-3">
            <router-view />
        </main>
    </div>
</template>

<script lang="ts" setup>
</script>