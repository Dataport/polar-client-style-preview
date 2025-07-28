import * as polar from '@polar/polar'

export default {
	...polar,
	createMap(...args) {
		return polar.createMap(...args)
	},
}
