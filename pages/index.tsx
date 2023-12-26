import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import {Capacitor} from "@capacitor/core";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const isPlatform = Capacitor.isNativePlatform();
    console.log('isPlatform', isPlatform)
  return (
    <>
      <Head>
        <title>Create Mobile app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Header</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <h1>Content</h1>
        </IonContent>

      <main className={`${styles.main} ${inter.className}`}>
          <h1>Hi my mobile app 123</h1>
      </main>
    </>
  )
}
