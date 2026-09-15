import { CalendarDays, Check, Clock3 } from "lucide-react";
import type { FormEvent } from "react";
import type { CreateAppointment } from "../../types/appointment";

type AppointmentFormProps = {
  date: string;
  time: string;
  loading: boolean;
  onSubmit: (data: CreateAppointment) => void;
};

export function AppointmentForm({
  date,
  time,
  loading,
  onSubmit,
}: AppointmentFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      date,
      time,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
        <div className="flex items-center gap-2">
          <CalendarDays aria-hidden="true" className="size-4 text-blue-400" />
          <p className="text-sm text-gray-400">Data selecionada</p>
        </div>

        <p className="mt-1 font-medium text-gray-200">{date}</p>

        <div className="mt-3 flex items-center gap-2">
          <Clock3 aria-hidden="true" className="size-4 text-blue-400" />
          <p className="text-sm text-gray-400">Horário selecionado</p>
        </div>

        <p className="mt-1 font-medium text-gray-200">{time}</p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-gray-200 transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Check aria-hidden="true" className="size-4" />
        {loading ? "Agendando..." : "Confirmar agendamento"}
      </button>
    </form>
  );
}
