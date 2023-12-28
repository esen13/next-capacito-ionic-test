import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
	appId: 'com.esenarykbaev.app',
	appName: 'next-mobile',
	webDir: 'out',
	server: {
		androidScheme: 'https',
		url: 'http://172.20.10.5:3020',
		cleartext: true,
	},
}

export default config
