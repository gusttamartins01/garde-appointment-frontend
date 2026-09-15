import type { Appointment } from "../../types/appointment";
import { formatDate } from "../../utils/date";

type AppointmentCardProps = {
  appointment: Appointment;
};

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  const date = new Date(appointment.dateTime);

  const formattedDate = formatDate(date.toLocaleDateString("en-CA"));

  const formattedTime = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Data</p>

          <p className="mt-1 font-semibold text-gray-200">{formattedDate}</p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Horário</p>

          <p className="mt-1 font-semibold text-gray-200">{formattedTime}</p>
        </div>
      </div>
    </div>
  );
}
