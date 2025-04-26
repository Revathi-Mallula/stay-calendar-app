<template>
    <div v-if="bookingStore.selectedBooking" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg w-[600px] shadow-2xl relative">
            <!-- Modal Header -->
            <div class="p-4 rounded-t-lg">
                <h2 class="text-lg font-bold">Reservation Details</h2>
                <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" @click="closeModal">
                    &times;
                </button>
            </div>
            <!-- Divider -->
            <div class="border-b border-gray-300"></div>

            <!-- Modal Content -->
            <div class="p-6">
                <div class="flex justify-between gap-6">
                    <!-- Transaction Details -->
                    <div class="w-1/2">
                        <h3 class="font-bold mb-4 text-gray-700">Transaction Details</h3>
                        <p class="mb-2"><strong>Transaction ID:</strong> {{ bookingStore.selectedBooking.transactionId }}</p>
                        <p class="mb-2"><strong>Customer Name:</strong>
                            <span v-if="!bookingStore.isEditMode">{{ bookingStore.selectedBooking.guest }}</span>
                            <input
                                v-else
                                type="text"
                                v-model="bookingStore.selectedBooking.guest"
                                class="w-full border rounded p-2"
                            />
                        </p>
                        <p class="mb-2"><strong>Check-In:</strong>
                            <span v-if="!bookingStore.isEditMode">{{ dayjs(bookingStore.selectedBooking.start).format('ddd, MMM D') }}</span>
                            <input
                                v-else
                                type="date"
                                v-model="bookingStore.selectedBooking.start"
                                :min="dayjs().format('YYYY-MM-DD')"
                                class="w-full border rounded p-2"
                            />
                        </p>
                        <p class="mb-2"><strong>Check-Out:</strong>
                            <span v-if="!bookingStore.isEditMode">{{ dayjs(bookingStore.selectedBooking.end).format('ddd, MMM D') }}</span>
                            <input
                                v-else
                                type="date"
                                v-model="bookingStore.selectedBooking.end"
                                :min="bookingStore.selectedBooking.start"
                                class="w-full border rounded p-2"
                                @change="updateTotalAmount"
                            />
                        </p>
                        <p class="mb-2"><strong>Total Amount:</strong> {{ bookingStore.selectedBooking.totalAmount }}</p>
                        <p class="mb-2"><strong>Paid:</strong> {{ bookingStore.selectedBooking.paid }}</p>
                        <p class="mb-2"><strong>Due:</strong> {{ bookingStore.selectedBooking.due }}</p>
                    </div>

                    <!-- Room Details -->
                    <div class="w-1/2">
                        <h3 class="font-bold mb-4 text-gray-700">Room Details</h3>
                        <p class="mb-2"><strong>All Rooms:</strong>
                            <span v-if="!bookingStore.isEditMode">{{ bookingStore.selectedBooking.room }}</span>
                            <select
                                v-else
                                v-model="bookingStore.selectedBooking.room"
                                class="w-full border rounded p-2"
                            >
                                <option v-for="room in bookingStore.rooms" :key="room" :value="room">{{ room }}</option>
                            </select>
                        </p>
                        <p class="mb-2"><strong>Status:</strong> {{ bookingStore.selectedBooking.status }}</p>
                        <p class="mb-2"><strong>Guest Email:</strong> {{ bookingStore.selectedBooking.email }}</p>
                        <p class="mb-2"><strong>Guest Phone:</strong> {{ bookingStore.selectedBooking.phone }}</p>
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="flex justify-end gap-4 p-4 bg-gray-100 rounded-b-lg">
                <button
                    v-if="!bookingStore.isEditMode"
                    class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
                    @click="bookingStore.isEditMode = true"
                >
                    Edit Reservation
                </button>
                <button
                    v-else
                    class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow"
                    @click="saveChanges"
                >
                    Save Changes
                </button>
                <button
                    class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded shadow"
                    @click="closeModal"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useBookingStore } from '../store/bookings';
import dayjs from 'dayjs';

const bookingStore = useBookingStore();

const closeModal = () => {
    bookingStore.clearSelectedBooking();
};

const saveChanges = () => {
    if (!bookingStore.selectedBooking.start || !bookingStore.selectedBooking.end) {
        alert('Both Check-In and Check-Out dates are required.');
        return;
    }

    if (dayjs(bookingStore.selectedBooking.end).isBefore(bookingStore.selectedBooking.start)) {
        alert('Check-out date must be after check-in date.');
        return;
    }

    bookingStore.updateBooking(bookingStore.selectedBooking);
    bookingStore.clearSelectedBooking();
};

const updateTotalAmount = () => {
    const start = dayjs(bookingStore.selectedBooking.start);
    const end = dayjs(bookingStore.selectedBooking.end);
    const days = end.diff(start, 'day') + 1; // Include the check-in day
    bookingStore.selectedBooking.totalAmount = days * 1000; // Assuming 1000 per day
};
</script>