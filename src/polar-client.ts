import * as polar from '@polar/polar'
import './demo.css'

export default {
	...polar,
	createMap(...args) {
		return polar.createMap(...args)
	},
}
