import { useEffect, useState } from 'react'
import {
	getAppointments
} from '../services/appointment.api'
import type { Appointment } from '../types/appointment'

export function useAppointments() {
	const [appointments, setAppointments] = useState<Appointment[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		async function loadAppointments() {
			try {
				setLoading(true)
				setError('')

				const data = await getAppointments()

				setAppointments(data)
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message)
				} else {
					setError(
						'Não foi possível buscar os agendamentos.'
					)
				}
			} finally {
				setLoading(false)
			}
		}

		loadAppointments()
	}, [])

	return {
		appointments,
		loading,
		error
	}
}