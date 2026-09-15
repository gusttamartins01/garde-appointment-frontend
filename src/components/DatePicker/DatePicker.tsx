import { CalendarDays } from "lucide-react";

type DatePickerProps = {
  value: string;
  onChange: (date: string) => void;
};

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="date"
        className="flex items-center gap-2 text-sm font-medium text-gray-200"
      >
        <CalendarDays aria-hidden="true" className="size-4 text-blue-400" />
        Data da consulta
      </label>

      <input
        id="date"
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-gray-600 bg-gray-950 px-4 py-3 text-gray-200 outline-none transition hover:border-gray-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
      />
    </div>
  );
}
