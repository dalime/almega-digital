import base64 from 'base-64'

export const joinMailList = async (email: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		const requestBody = {
			email_address: email,
			status: 'subscribed',
		}

		fetch(`${process.env.REACT_APP_PROXY_SERVER_URL || ''}https://${process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX || ''}.api.mailchimp.com/3.0/lists/${process.env.REACT_APP_MAILCHIMP_LIST_ID || ''}/members`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Basic ${base64.encode('user:' + process.env.REACT_APP_MAILCHIMP_API_KEY || '')}`,
			},
			body: JSON.stringify(requestBody),
		}).then((value) => {
			resolve(value)
		}).catch((reason) => {
			reject(reason)
		})
	})
}