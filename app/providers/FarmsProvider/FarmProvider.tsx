import { createContext, useContext, useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const FarmsContext = createContext({
	farmsArr: [],
})

export function FarmsWrapper({ children }: any) {
	const { token } = useAuth()

	let sharedState = {
		farmsArr: [],
	}

	useEffect(() => {
		if (token) {
			const socket = new WebSocket(
				`ws://192.168.0.133/api/farms/stats?token=${token}`
			)
			socket.onmessage = async (msg: any) => {
				if (msg.data === 'no farms') {
					sharedState.farmsArr = []
				} else {
					sharedState.farmsArr = JSON.parse(msg.data)
				}
			}

			return () => {
				if (socket?.readyState !== 3) socket.close()
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<FarmsContext.Provider value={sharedState}>
			{children}
		</FarmsContext.Provider>
	)
}

export function useFarmsContext() {
	return useContext(FarmsContext)
}
