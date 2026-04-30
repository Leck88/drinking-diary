import React, { useState } from 'react';

export interface DrinkRecord {
  name: string;
  quantity: string;
  note: string;
}

interface DrinkRecordModalProps {
  open: boolean;
  date: string | null;
  initialRecord: DrinkRecord | null;
  onSave: (record: DrinkRecord) => void;
  onClose: () => void;
}

export const DrinkRecordModal: React.FC<DrinkRecordModalProps> = ({ open, date, initialRecord, onSave, onClose }) => {
  const [name, setName] = useState(initialRecord?.name || '');
  const [quantity, setQuantity] = useState(initialRecord?.quantity || '');
  const [note, setNote] = useState(initialRecord?.note || '');

  React.useEffect(() => {
    setName(initialRecord?.name || '');
    setQuantity(initialRecord?.quantity || '');
    setNote(initialRecord?.note || '');
  }, [initialRecord, open]);

  if (!open || !date) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded p-6 w-full max-w-xs">
        <div className="mb-2 text-lg font-semibold text-center">{date} 记录</div>
        <div className="space-y-2">
          <input value={name} onChange={e => setName(e.target.value)} className="input input-bordered w-full" placeholder="酒名/饮品" />
          <input value={quantity} onChange={e => setQuantity(e.target.value)} className="input input-bordered w-full" placeholder="数量 (如：2瓶/500ml)" />
          <input value={note} onChange={e => setNote(e.target.value)} className="input input-bordered w-full" placeholder="备注 (可选)" />
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="text-gray-500 hover:underline px-2">取消</button>
          <button onClick={() => onSave({ name, quantity, note })} className="btn btn-blue px-4">保存</button>
        </div>
      </div>
    </div>
  );
};
