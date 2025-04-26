<script setup>
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import Header from './components/Header.vue';
import DateNavigation from './components/DateNavigation.vue';
import CalendarTable from './components/CalendarTable.vue';
import BookingModal from './components/BookingModal.vue';

const pinia = createPinia();
</script>

<template>
    <div class="p-4">
        <Header />
        <DateNavigation />
        <CalendarTable />
        <BookingModal />
    </div>
</template>