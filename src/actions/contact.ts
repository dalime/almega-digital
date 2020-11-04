const sendFeedback = (serviceID: string, templateId: string, variables: { from_name: string, from_email: string, from_website: string, message: string, servicePackage: string, }): Promise<any> => {
	return new Promise((resolve, reject) => {
		(window as any).emailjs.send(
			serviceID, templateId,
			variables
		).then((res: any) => {
			resolve(res)
		}).catch((err: any) => {
			reject(err)
		})
	})
}

const sendMessage = async (name: string, email: string, message: string, website: string, servicePackage: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		sendFeedback(process.env.REACT_APP_EMAILJS_SERVICE_ID || '', process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '', { from_name: name, from_email: email, from_website: website, message, servicePackage, }).then(() => {
			resolve('Success')
		}).catch((error) => {
			reject(error)
		})
	})
}

export const sendEmail = async (email: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		sendMessage('New Inquiry', email, `New inquiry from ${email}`, '', '').then((response) => {
			resolve(response)
		}).catch((error: JSON) => {
			reject(error)
		})
	})
}

export const contactAlmega = async (name: string, email: string, message: string, servicePackage: string, website?: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		sendMessage(name, email, message, website || '', servicePackage).then((response) => {
			resolve(response)
		}).catch((error: JSON) => {
			reject(error)
		})
	})
}