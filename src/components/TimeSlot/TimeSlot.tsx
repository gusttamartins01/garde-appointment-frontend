import { Clock3 } from "lucide-react";

type TimeSlotProps = {
  time: string;
  selected: boolean;
  onSelect: (time: string) => void;
};

export function TimeSlot({ time, selected, onSelect }: TimeSlotProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(time)}
      className={`rounded-lg border px-4 py-3 text-sm font-medium transition ${
        selected
          ? "border-blue-600 bg-blue-600 text-gray-200"
          : "border-gray-600 bg-gray-900 text-gray-200 hover:border-blue-600 hover:bg-gray-950"
      }`}
    >
      <Clock3
        aria-hidden="true"
        className="mr-2 inline-block size-4 align-[-3px] text-blue-400"
      />
      {time}
    </button>
  );
}
