import { useEffect, useState } from 'react'
import {
	createAppointment,
	getAvailableTimes
} from '../services/appointment.api'
import type {
	Appointment,
	CreateAppointment
} from '../types/appointment'

export function useAppointments() {
	const [date, setDate] = useState('')
	const [availableTimes, setAvailableTimes] = useState<string[]>([])
	const [selectedTime, setSelectedTime] = useState('')
	const [appointment, setAppointment] =
		useState<Appointment | null>(null)

	const [loadingTimes, setLoadingTimes] = useState(false)
	const [creatingAppointment, setCreatingAppointment] =
		useState(false)

	const [error, setError] = useState('')

	useEffect(() => {
		if (!date) {
			return
		}

		let cancelled = false

		async function loadAvailableTimes() {
			try {
				setLoadingTimes(true)
				setError('')

				const times = await getAvailableTimes(date)

				if (cancelled) {
					return
				}

				setAvailableTimes(times)
				setSelectedTime('')
			} catch (error) {
				if (cancelled) {
					return
				}

				setAvailableTimes([])
				setSelectedTime('')

				if (error instanceof Error) {
					setError(error.message)
				} else {
					setError(
						'Não foi possível buscar os horários disponíveis.'
					)
				}
			} finally {
				if (!cancelled) {
					setLoadingTimes(false)
				}
			}
		}

		loadAvailableTimes()

		return () => {
			cancelled = true
		}
	}, [date])

	function handleDateChange(value: string) {
		setDate(value)
		setAvailableTimes([])
		setSelectedTime('')
		setError('')
	}

	async function handleCreateAppointment(
		data: CreateAppointment
	) {
		try {
			setCreatingAppointment(true)
			setError('')

			const createdAppointment =
				await createAppointment(data)

			setAppointment(createdAppointment)
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message)
			} else {
				setError(
					'Não foi possível realizar o agendamento.'
				)
			}
		} finally {
			setCreatingAppointment(false)
		}
	}

	function reset() {
		setDate('')
		setAvailableTimes([])
		setSelectedTime('')
		setAppointment(null)
		setError('')
	}

	return {
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
		reset
	}
}