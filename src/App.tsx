import React, { useState } from 'react';
import { Calendar } from './components/Calendar';
import { DrinkRecordModal } from './components/DrinkRecordModal';
import { useDrinkRecords } from './hooks/useDrinkRecords';

function App() {
  const { records, setRecordForDate, getRecordForDate } = useDrinkRecords();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDayClick = (date: string) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Drinking Diary</h1>
      <Calendar onDayClick={handleDayClick} records={records} />
      <DrinkRecordModal
        open={modalOpen}
        date={selectedDate}
        initialRecord={selectedDate ? getRecordForDate(selectedDate) : null}
        onSave={(record) => {
          if (selectedDate) setRecordForDate(selectedDate, record);
          closeModal();
        }}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
