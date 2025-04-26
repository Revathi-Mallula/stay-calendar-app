import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { bookingsData } from './bookingsData';

export const useBookingStore = defineStore('bookings', {
    state: () => ({
        currentDate: dayjs(), // Set to today's date
        rooms: ['101', '102', '103', '104', '105'],
        bookings: bookingsData,
        selectedBooking: null,
        isEditMode: false,
    }),
    actions: {
        setSelectedBooking(booking) {
            this.selectedBooking = { ...booking };
        },
        clearSelectedBooking() {
            this.selectedBooking = null;
            this.isEditMode = false;
        },
        updateBooking(updatedBooking) {
            const index = this.bookings.findIndex((b) => b.id === updatedBooking.id);
            if (index !== -1) {
                this.bookings[index] = { ...updatedBooking };
            }
        },
        addBooking(newBooking) {
            this.bookings.push(newBooking);
        },
        setEditMode(value) {
            this.isEditMode = value;
        },
        setCurrentDate(date) {
            this.currentDate = date;
        },
        updateTotalAmount(bookingId) {
            const booking = this.bookings.find((b) => b.id === bookingId);
            if (booking) {
                const start = dayjs(booking.start);
                const end = dayjs(booking.end);
                const days = end.diff(start, 'day') + 1; // Include the check-in day
                booking.totalAmount = days * 1000; // Assuming 1000 per day
                booking.due = booking.totalAmount - booking.paid; // Update due amount
            }
        },
    },
});