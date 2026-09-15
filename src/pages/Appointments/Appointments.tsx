import { AlertCircle, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { Loading } from "../../components/Loading/Loading";
import { getAppointments } from "../../services/appointment.api";
import type { Appointment } from "../../types/appointment";

export function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadAppointments() {
      try {
        setLoading(true);
        setError("");

        const data = await getAppointments();

        if (!cancelled) {
          setAppointments(data);
        }
      } catch (requestError) {
        if (cancelled) {
          return;
        }

        setError(
          requestError instanceof Error
            ? requestError.message
            : "Não foi possível carregar os agendamentos.",
        );
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadAppointments();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl bg-gray-800 p-6 shadow-sm md:p-8">
        <div className="mb-8 flex items-center gap-3">
          <CalendarDays aria-hidden="true" className="size-7 text-blue-400" />
          <div>
            <h1 className="text-3xl font-bold text-gray-200">Agendamentos</h1>
            <p className="mt-2 text-gray-400">
              Consulte os agendamentos realizados.
            </p>
          </div>
        </div>

        {loading && <Loading />}

        {error && (
          <div className="flex gap-3 rounded-lg border border-red-900 bg-red-950/40 p-4">
            <AlertCircle
              aria-hidden="true"
              className="size-5 shrink-0 text-red-400"
            />
            <p className="text-sm text-gray-400">{error}</p>
          </div>
        )}

        {!loading && !error && appointments.length === 0 && (
          <p className="rounded-lg border border-gray-700 bg-gray-900 p-4 text-sm text-gray-400">
            Nenhum agendamento encontrado.
          </p>
        )}

        {!loading && !error && appointments.length > 0 && (
          <div className="grid gap-4">
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
