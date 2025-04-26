<script setup>
import { useBookingStore } from '../store/bookings';
import dayjs from 'dayjs'; // Import dayjs
import isBetween from 'dayjs/plugin/isBetween'; // Import the isBetween plugin

dayjs.extend(isBetween); // Extend dayjs with the isBetween plugin

const bookingStore = useBookingStore();

const getBooking = (room, date) => {
    const d = dayjs(date).startOf('day');
    return bookingStore.bookings.find(
        (b) =>
            b.room === room &&
            d.isBetween(dayjs(b.start).startOf('day'), dayjs(b.end).startOf('day'), null, '[]')
    );
};

const openModal = (booking) => {
    bookingStore.setSelectedBooking(booking);
};
</script>

<template>
    <div class="overflow-auto border border-gray-300 rounded shadow">
        <table class="min-w-full table-fixed">
            <thead class="bg-gray-100">
                <tr>
                    <th class="w-40 p-3 text-left text-gray-700 font-semibold">Room</th>
                    <th v-for="(date, index) in Array.from({ length: 14 }, (_, i) => bookingStore.currentDate.add(i, 'day'))" :key="index" class="w-28 p-3 text-center text-gray-700 font-semibold">
                        <div>{{ date.format('ddd') }}</div>
                        <div class="text-sm text-gray-500">{{ date.format('MMM D') }}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-50 hover:bg-gray-100">
                    <td colspan="100%" class="bg-gray-200 text-left font-bold p-3">Delux Rooms</td>
                </tr>
                <tr v-for="room in bookingStore.rooms" :key="room" class="hover:bg-gray-100">
                    <td class="p-3 font-medium text-gray-800 border-r border-gray-300">{{ room }}</td>
                    <td v-for="date in Array.from({ length: 14 }, (_, i) => bookingStore.currentDate.add(i, 'day'))" :key="room + date.toISOString()" class="relative h-12 border border-gray-300">
                        <div v-if="getBooking(room, date)"
                            class="absolute top-1 left-1 right-1 bottom-1 rounded bg-green-600 text-white text-xs flex items-center justify-between cursor-pointer px-2 shadow"
                            @click="openModal(getBooking(room, date))">
                            <span>{{ getBooking(room, date).guest }}</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>