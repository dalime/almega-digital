import base64 from 'base-64'

const mailchimpAutomation = (emailAddress: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		if (process.env.REACT_APP_PROXY_SERVER_URL && process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX && process.env.REACT_APP_MAILCHIMP_WORKFLOW_ID && process.env.REACT_APP_MAILCHIMP_WORKFLOW_EMAIL_ID) {
			const requestBody: Object = {
				"email_address": emailAddress,
        "status": "subscribed",
			}
			fetch(`${process.env.REACT_APP_PROXY_SERVER_URL || ''}https://${process.env.REACT_APP_MAILCHIMP_SERVER_PREFIX || ''}.api.mailchimp.com/3.0/automations/${process.env.REACT_APP_MAILCHIMP_WORKFLOW_ID}/emails/${process.env.REACT_APP_MAILCHIMP_WORKFLOW_EMAIL_ID}/queue`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `Basic ${base64.encode('user:' + process.env.REACT_APP_MAILCHIMP_API_KEY || '')}`,
				},
				body: JSON.stringify(requestBody),
			}).then(() => {
				resolve(null)
			}).catch((reason) => {
				reject(reason)
			})
		} else {
			reject()
		}
	})
}

const sendEmail = (serviceID: string, templateId: string, variables: { from_name: string, from_email: string, from_website: string, message: string, servicePackage: string, }, userId: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		(window as any).emailjs.send(
			serviceID,
      templateId,
			variables,
      userId,
		).then((res: any) => {
			resolve(res)
			mailchimpAutomation(variables.from_email)
		}).catch((err: any) => {
			reject(err)
		})
	})
}

const sendMessage = async (name: string, email: string, message: string, website: string, servicePackage: string): Promise<any> => {
	return new Promise((resolve, reject) => {
    sendEmail(process.env.REACT_APP_EMAILJS_SERVICE_ID || '', process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '', { from_name: name, from_email: email, from_website: website, message, servicePackage, }, process.env.REACT_APP_EMAILJS_API_USER_ID || '').then(() => {
			resolve('Success')
		}).catch((error) => {
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