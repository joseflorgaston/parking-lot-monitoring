<template>
    <div>
        <table class="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
            <thead class="bg-gray-100 border-b border-gray-300">
                <tr>
                    <th v-for="(header, index) in headers" :key="index"
                        class="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="border-b hover:bg-gray-50">
                    <td v-for="(column, colIndex) in columns" :key="colIndex"
                        class="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">
                        {{ resolveValue(row, column) }}
                    </td>
                    <td v-if="actionTitle" class="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">
                        <button
                            class="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded shadow focus:outline-none focus:ring"
                            @click="$emit('action', row)">
                            Monitoreo
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
    headers: {
        type: Array as PropType<string[]>,
        required: true,
    },
    columns: {
        type: Array as PropType<string[]>,
        required: true,
    },
    rows: {
        type: Array as PropType<Record<string, any>[]>,
        required: true,
    },
    actionTitle: {
        type: String,
        required: false,
    }
});

const resolveValue = (row: Record<string, any>, column: string) => {
    const keys = column.split(".");
    return keys.reduce((value, key) => value?.[key], row);
};
</script>