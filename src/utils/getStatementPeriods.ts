export function getLastThreeMonths() {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const targetMonth = (currentMonth - 2 + 12) % 12;
  const month =
    targetMonth > 9 ? String(targetMonth) : "0" + String(targetMonth);
  const targetYear =
    targetMonth > currentMonth ? today.getFullYear() - 1 : today.getFullYear();
  const year = String(targetYear).slice(-2);
  return year + month;
}

export function getLastSixMonths() {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const targetMonth = (currentMonth - 5 + 12) % 12;
  const month =
    targetMonth > 9 ? String(targetMonth) : "0" + String(targetMonth);
  const targetYear =
    targetMonth > currentMonth ? today.getFullYear() - 1 : today.getFullYear();
  const year = String(targetYear).slice(-2);
  return year + month;
}

export function getLasttwelveMonths() {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const targetMonth = (currentMonth - 11 + 12) % 12;
  const month =
    targetMonth > 9 ? String(targetMonth) : "0" + String(targetMonth);
  const targetYear =
    targetMonth > currentMonth ? today.getFullYear() - 1 : today.getFullYear();
  const year = String(targetYear).slice(-2);
  return year + month;
}

export function getCurrentMonthName(): string {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  return months[currentMonth];
}
