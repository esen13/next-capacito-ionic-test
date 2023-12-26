import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'next-mobile',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    url: 'http://192.168.0.237:3020',
    cleartext: true
  }
};

export default config;
