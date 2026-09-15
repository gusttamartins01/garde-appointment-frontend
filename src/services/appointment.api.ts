import type { Appointment, CreateAppointment } from '../types/appointment'

const API_URL = import.meta.env.VITE_API_URL

export async function getAvailableTimes(date: string): Promise<string[]> {
	const response = await fetch(`${API_URL}/available?date=${date}`)

	if (!response.ok) {
		throw new Error('Não foi possível buscar os horários disponíveis.')
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
		throw new Error('Não foi possível realizar o agendamento.')
	}

	return await response.json()
}

export async function getAppointments(): Promise<Appointment[]> {
	const response = await fetch(`${API_URL}/appointments`)

	if (!response.ok) {
		throw new Error('Não foi possível buscar os agendamentos.')
	}

	return await response.json()
}