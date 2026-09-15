import { z } from 'zod'

export const appointmentSchema = z.object({
	date: z.string().min(1, 'Selecione uma data.'),
	time: z.string().min(1, 'Selecione um horário.')
})

export type AppointmentFormData = z.infer<typeof appointmentSchema>