import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
	appId: 'com.esenarykbaev.app',
	appName: 'next-mobile',
	webDir: 'out',
	server: {
		androidScheme: 'https',
		url: 'http://192.168.0.42:3020', // 172.20.10.5
		cleartext: true,
	},
}

export default config
