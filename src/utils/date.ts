export function ymd(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function getMonthDays(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const days = [];
  const startDay = first.getDay();
  // 补上月空格
  for (let i = 0; i < startDay; i++) {
    days.push({ date: '', isCurrentMonth: false });
  }
  for (let d = 1; d <= last.getDate(); d++) {
    days.push({
      date: ymd(new Date(year, month, d)),
      isCurrentMonth: true,
    });
  }
  while (days.length % 7 !== 0) {
    days.push({ date: '', isCurrentMonth: false });
  }
  return days;
}
