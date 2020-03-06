import express from 'express'
import bodyParser from'body-parser'
import cors from 'cors'

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
	const domain = req.headers.host.split('.'),
		endIdx = domain.indexOf('301'),
		redirectUrl = domain.slice(0, endIdx).join('.')
	
		res.redirect(301, `http://${redirectUrl}/`)
})

app.listen(3000, '0.0.0.0', (e) => {
	if (e) {
		throw new Error('Internal Server Error')
	}
})
