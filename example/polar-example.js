import client from '../src/polar-client.ts'

const mapConfiguration = {
	layers: [
		{
			id: '23420',
			visibility: true,
			type: 'background',
			name: 'basemap Farbe',
		},
	],
}
const servicesUrl = 'https://geodienste.hamburg.de/services-internet.json'
await client.createMap(mapConfiguration, servicesUrl)
