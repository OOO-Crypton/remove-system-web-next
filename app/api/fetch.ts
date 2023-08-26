import axios from './interceptors'

type TypeInput = {
	link: string
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
	body?: any
}

export const api = async ({ link, method, body }: TypeInput) => {
	return axios({
		method,
		url: link,
		data: body,
	})
}
