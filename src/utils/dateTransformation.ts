export function formatDateToMonthYear(dateStr: string): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [year, month] = dateStr.split('-');
  const monthIndex = parseInt(month) - 1;

  return `${months[monthIndex]} of ${year}`;
}