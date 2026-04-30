import React from 'react';
import { getMonthDays, ymd } from '../utils/date';

interface CalendarProps {
  onDayClick: (date: string) => void;
  records: Record<string, any>;
}

export const Calendar: React.FC<CalendarProps> = ({ onDayClick, records }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const days = getMonthDays(year, month);

  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <div className="font-semibold text-center mb-2">{year}年{month + 1}月</div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {['日','一','二','三','四','五','六'].map(d => (
          <div key={d} className="text-xs text-gray-500">{d}</div>
        ))}
        {days.map(({ date, isCurrentMonth }, i) => (
          <button
            key={i}
            className={`h-10 w-10 flex items-center justify-center rounded-full transition
             ${isCurrentMonth ? 'bg-gray-100 hover:bg-blue-100' : 'bg-gray-50 text-gray-300'}
             ${ymd(today)===date ? 'ring-2 ring-blue-400' : ''}
             ${(records[date]) ? 'border border-green-400' : ''}`}
            disabled={!isCurrentMonth}
            onClick={() => isCurrentMonth && onDayClick(date)}
          >
            {date.slice(-2)}
          </button>
        ))}
      </div>
    </div>
  );
};
