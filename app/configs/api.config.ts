export const API_URL = `${process.env.APP_URL}/api`
export const APP_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getFarmUrl = (string: string) => `/farms${string}`
export const getFlightSheetsUrl = (string: string) => `/flight_sheets${string}`
export const getWalletsUrl = (string: string) => `/wallets${string}`
