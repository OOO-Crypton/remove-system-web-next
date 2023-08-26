export interface IUser {
	'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string
	UserId: string
	jti: string
	Email: string
	'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string
	Role: string
	exp: number
	iss: string
	aud: string
}
