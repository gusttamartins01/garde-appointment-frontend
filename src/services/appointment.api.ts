import type {
	Appointment,
	CreateAppointment
} from '../types/appointment'

const API_URL = import.meta.env.VITE_API_URL

async function getErrorMessage(
	response: Response,
	fallback: string
): Promise<string> {
	try {
		const data = await response.json()

		if (data.message) {
			return data.message
		}
	} catch {
		return fallback
	}

	return fallback
}

export async function getAvailableTimes(
	date: string
): Promise<string[]> {
	const response = await fetch(
		`${API_URL}/available?date=${date}`
	)

	if (!response.ok) {
		const message = await getErrorMessage(
			response,
			'Não foi possível buscar os horários disponíveis.'
		)

		throw new Error(message)
	}

	return await response.json()
}

export async function createAppointment(
	data: CreateAppointment
): Promise<Appointment> {
	const response = await fetch(`${API_URL}/appointments`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	if (!response.ok) {
		const message = await getErrorMessage(
			response,
			'Não foi possível realizar o agendamento.'
		)

		throw new Error(message)
	}

	return await response.json()
}

export async function getAppointments(): Promise<Appointment[]> {
	const response = await fetch(`${API_URL}/appointments`)

	if (!response.ok) {
		const message = await getErrorMessage(
			response,
			'Não foi possível buscar os agendamentos.'
		)

		throw new Error(message)
	}

	return await response.json()
}