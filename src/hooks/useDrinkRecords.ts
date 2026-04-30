import { useState } from 'react';
import { DrinkRecord } from '../components/DrinkRecordModal';

const STORAGE_KEY = 'drink-diary-data-v1';

function loadRecords(): Record<string, DrinkRecord> {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function useDrinkRecords() {
  const [records, setRecords] = useState<Record<string, DrinkRecord>>(loadRecords());

  const setRecordForDate = (date: string, record: DrinkRecord) => {
    const updated = { ...records, [date]: record };
    setRecords(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const getRecordForDate = (date: string) => records[date] || null;

  return { records, setRecordForDate, getRecordForDate };
}
