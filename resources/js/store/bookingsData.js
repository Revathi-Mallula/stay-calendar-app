import dayjs from 'dayjs';

export const bookingsData = [
    {
        id: 1,
        room: '101',
        guest: 'Anushya',
        start: dayjs('2025-04-26').format('YYYY-MM-DD'),
        end: dayjs('2025-04-29').format('YYYY-MM-DD'),
        transactionId: '67ffa2c9da4c',
        totalAmount: 4000, // 4 days * 1000
        paid: 0.0,
        due: 4000,
        email: 'anushya.123@guest.booking.com',
        phone: '+91 78924 41267',
        status: 'Checked-in',
    },
    {
        id: 2,
        room: '102',
        guest: 'John Doe',
        start: dayjs('2025-04-27').format('YYYY-MM-DD'),
        end: dayjs('2025-04-30').format('YYYY-MM-DD'),
        transactionId: '89bfa3d4e5f6',
        totalAmount: 4000, // 4 days * 1000
        paid: 2000,
        due: 2000,
        email: 'john.doe@guest.booking.com',
        phone: '+91 98765 43210',
        status: 'Checked-in',
    },
    {
        id: 3,
        room: '103',
        guest: 'Jane Smith',
        start: dayjs('2025-04-28').format('YYYY-MM-DD'),
        end: dayjs('2025-05-02').format('YYYY-MM-DD'),
        transactionId: '45cde6f7g8h9',
        totalAmount: 5000, // 5 days * 1000
        paid: 3000,
        due: 2000,
        email: 'jane.smith@guest.booking.com',
        phone: '+91 87654 32109',
        status: 'Checked-out',
    },
    {
        id: 4,
        room: '104',
        guest: 'Aneesh',
        start: dayjs('2025-04-28').format('YYYY-MM-DD'),
        end: dayjs('2025-04-30').format('YYYY-MM-DD'),
        transactionId: '12abc34def56',
        totalAmount: 3000, // 3 days * 1000
        paid: 3000,
        due: 0,
        email: 'aneesh.456@guest.booking.com',
        phone: '+91 78901 23456',
        status: 'Checked-out',
    },
    {
        id: 5,
        room: '105',
        guest: 'Emily Davis',
        start: dayjs('2025-04-25').format('YYYY-MM-DD'),
        end: dayjs('2025-04-28').format('YYYY-MM-DD'),
        transactionId: '78ghi90jkl12',
        totalAmount: 4000, // 4 days * 1000
        paid: 1000,
        due: 3000,
        email: 'emily.davis@guest.booking.com',
        phone: '+91 65432 10987',
        status: 'Checked-in',
    },
];