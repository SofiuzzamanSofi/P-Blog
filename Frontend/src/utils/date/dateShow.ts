export const formatDate = (dateString: string | Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
};

// Function to calculate and format duration
// export const formatDuration = (startDate: Date, endDate: Date) => {
//     const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

//     const start = new Date(startDate).toLocaleDateString(undefined, options);
//     const end = new Date(endDate).toLocaleDateString(undefined, options);

//     const diffInMonths =
//         (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
//     const years = Math.floor(diffInMonths / 12);
//     const months = diffInMonths % 12;

//     const durationString = `${start} - ${end} · ${years > 0 ? `${years} yr` : ''} ${months > 0 ? `${months} mos` : ''}`;

//     return durationString;
// };
