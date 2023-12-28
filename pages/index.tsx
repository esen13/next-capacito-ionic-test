import { IonNav } from '@ionic/react'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from './Main'

const inter = Inter({ subsets: ['latin'] })

export default function Root() {
	return (
		<>
			<Head>
				<title>Store Mobile app</title>
				<meta name='description' content='description' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, viewport-fit=cover'
				/>
				<meta
					name='theme-color'
					media='(prefers-color-scheme: light)'
					content='#3880ff'
				/>
				<meta
					name='theme-color'
					media='(prefers-color-scheme: dark)'
					content='#eb445a'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<IonNav root={() => <Main />}></IonNav>
		</>
	)
}
