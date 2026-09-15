import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Appointment } from "../../types/appointment";
import { formatDate } from "../../utils/date";

type AppointmentConfirmationProps = {
  appointment: Appointment;
  onReset: () => void;
};

export function AppointmentConfirmation({
  appointment,
  onReset,
}: AppointmentConfirmationProps) {
  const date = new Date(appointment.dateTime);

  return (
    <div className="rounded-xl border border-emerald-800 bg-gray-900 p-6">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-200">
        <CheckCircle2 aria-hidden="true" className="size-6 text-emerald-400" />
        Agendamento realizado!
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        Sua consulta foi agendada com sucesso.
      </p>

      <div className="mt-4 space-y-2 text-sm text-gray-400">
        <p>
          <strong>Data:</strong> {formatDate(date.toLocaleDateString("en-CA"))}
        </p>

        <p>
          <strong>Horário:</strong>{" "}
          {date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 flex items-center gap-2 rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Novo agendamento
      </button>
    </div>
  );
}
