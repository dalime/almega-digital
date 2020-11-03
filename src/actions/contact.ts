const sendMessage = async (name: string, email: string, message: string, website: string, servicePackage: string): Promise<any> => {
	if (process.env.REACT_APP_SERVER_URL) {
		fetch(`${process.env.REACT_APP_SERVER_URL}/contact` || '', {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify({
				name, email, message, website, servicePackage,
			})
		}).then(() => {
			return 'Success'
		}).catch((reason) => {
			return reason
		})
	} else {
		return "Error"
	}
}

export const sendEmail = async (email: string): Promise<any> => {
	sendMessage('New Inquiry', email, `New inquiry from ${email}`, '', '').then((response) => {
		return response
	}).catch((error: JSON) => {
		return error
	})
}

export const contactAlmega = async (name: string, email: string, message: string, servicePackage: string, website?: string): Promise<any> => {
	sendMessage(name, email, message, website || '', servicePackage).then((response) => {
		return response
	}).catch((error: JSON) => {
		return error
	})
}