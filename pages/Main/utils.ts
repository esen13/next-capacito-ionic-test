import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning'

const checkPermissions = async () => {
	const { camera } = await BarcodeScanner.checkPermissions()
	console.log('camera', camera)
	return camera
}

const startScan = async () => {
	console.log('[startScan]')
	// Check camera permission
	// This is just a simple example, check out the better checks below
	const permission = checkPermissions()
	console.log('permission', permission)

	// make background of WebView transparent
	// note: if you are using ionic this might not be enough, check below
	// BarcodeScanner.hideBackground()

	const result = await BarcodeScanner.startScan() // start scanning and wait for a result
	console.log('result, result', result)
	// if the result has content
}

const stopScan = async () => {
	console.log('stopScan')
	await BarcodeScanner.stopScan()
}

const isSupported = async () => {
	const { supported } = await BarcodeScanner.isSupported()
	console.log('supported', supported)

	return supported
}

const requestPermissions = async (): Promise<boolean> => {
	const { camera } = await BarcodeScanner.requestPermissions()
	console.log('camera [camera]', camera)
	return camera === 'granted' || camera === 'limited'
}

export {
	checkPermissions,
	isSupported,
	requestPermissions,
	startScan,
	stopScan,
}
