import { AlertCircle, CalendarDays, Clock3 } from "lucide-react";
import { AppointmentConfirmation } from "../../components/AppointmentConfirmation/AppointmentConfirmation";
import { AppointmentForm } from "../../components/AppointmentForm/AppointmentForm";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import { Loading } from "../../components/Loading/Loading";
import { TimeSlot } from "../../components/TimeSlot/TimeSlot";
import { useAppointments } from "../../hooks/useAppointments";

export function Home() {
  const {
    date,
    availableTimes,
    selectedTime,
    appointment,
    loadingTimes,
    creatingAppointment,
    error,
    handleDateChange,
    setSelectedTime,
    handleCreateAppointment,
    reset,
  } = useAppointments();

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-gray-800 p-6 shadow-sm md:p-8">
          {appointment ? (
            <AppointmentConfirmation
              appointment={appointment}
              onReset={reset}
            />
          ) : (
            <>
              <div className="mb-8">
                <div className="flex items-center gap-3">
                  <CalendarDays
                    aria-hidden="true"
                    className="size-7 text-blue-400"
                  />
                  <h1 className="text-3xl font-bold text-gray-200">
                    Agendamento de Consulta
                  </h1>
                </div>

                <p className="mt-2 text-gray-400">
                  Escolha uma data e um horário disponível.
                </p>
              </div>

              <DatePicker value={date} onChange={handleDateChange} />

              {loadingTimes && <Loading />}

              {error && (
                <div className="mt-6 flex gap-3 rounded-lg border border-red-900 bg-red-950/40 p-4">
                  <AlertCircle
                    aria-hidden="true"
                    className="size-5 shrink-0 text-red-400"
                  />
                  <p className="text-sm text-gray-400">{error}</p>
                </div>
              )}

              {!loadingTimes && !error && date && availableTimes.length > 0 && (
                <div className="mt-8">
                  <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-200">
                    <Clock3
                      aria-hidden="true"
                      className="size-5 text-blue-400"
                    />
                    Horários disponíveis
                  </h2>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {availableTimes.map((time) => (
                      <TimeSlot
                        key={time}
                        time={time}
                        selected={selectedTime === time}
                        onSelect={setSelectedTime}
                      />
                    ))}
                  </div>
                </div>
              )}

              {!loadingTimes &&
                !error &&
                date &&
                availableTimes.length === 0 && (
                  <div className="mt-6 rounded-lg border border-gray-700 bg-gray-900 p-4">
                    <div className="flex items-center gap-3">
                      <Clock3
                        aria-hidden="true"
                        className="size-5 text-gray-400"
                      />
                      <p className="text-sm text-gray-400">
                        Não há horários disponíveis para esta data.
                      </p>
                    </div>
                  </div>
                )}

              {date && selectedTime && !error && (
                <div className="mt-8 border-t border-gray-700 pt-8">
                  <AppointmentForm
                    date={date}
                    time={selectedTime}
                    loading={creatingAppointment}
                    onSubmit={handleCreateAppointment}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
