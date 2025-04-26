<script setup>
import { useBookingStore } from '../store/bookings';
import dayjs from 'dayjs'; // Import dayjs

const bookingStore = useBookingStore();

const today = () => {
    bookingStore.setCurrentDate(dayjs()); // Set current date to today
};

const prevDate = () => {
    bookingStore.setCurrentDate(bookingStore.currentDate.subtract(1, 'day'));
};

const nextDate = () => {
    bookingStore.setCurrentDate(bookingStore.currentDate.add(1, 'day'));
};
</script>

<template>
    <div class="flex items-center gap-4 mb-4">
        <button @click="prevDate" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded shadow">&lt;</button>
        <div class="font-semibold text-lg text-gray-800">{{ bookingStore.currentDate.format('DD-MMM-YYYY') }}</div>
        <button @click="today" class="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow">Today</button>
        <button @click="nextDate" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded shadow">&gt;</button>
    </div>
</template>