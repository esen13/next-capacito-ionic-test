// import { BarcodeScanner } from '@capacitor-community/barcode-scanner'
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning'
import { Capacitor } from '@capacitor/core'
import {
	IonApp,
	IonButton,
	IonButtons,
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonText,
	IonTitle,
	IonToast,
	IonToolbar,
} from '@ionic/react'
import {
	addCircle,
	addCircleOutline,
	camera,
	cameraOutline,
	menu,
	menuOutline,
} from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ModalComponent from '@/components/ModalComponent'
import HomePage from '../HomePage'
import { productList } from '../HomePage/fake'
import { createStore, setStore, storage } from './store'
import { Product } from './types'

const Main: React.FC = () => {
	const [data, setData] = useState<Product[]>(productList)
	const [toastData, setToastData] = useState({
		isOpen: false,
		message: '',
		duration: 5000,
		color: 'success',
	})
	const isPlatform = Capacitor.isNativePlatform()

	const getStore = async (key: string) => {
		try {
			const listData = await storage.get(key)
			if (listData) {
				const parseData = JSON.parse(listData)
				setData(parseData)
			}
		} catch (error) {
			console.warn('error', error)
		}
	}

	useEffect(() => {
		createStore()
		getStore('mockProducts')
		// BarcodeScanner.installGoogleBarcodeScannerModule().then(res => {
		// 	console.log('barcode', res)
		// })
		// BarcodeScanner.isSupported().then(result => {
		// 	console.log('[isSupported] result', result)
		// })
		// clearStore()
	}, [])

	const handleCreateProduct = async (newProduct: Omit<Product, 'id'>) => {
		const productWithUuid: Product = {
			id: uuidv4(),
			...newProduct,
		}
		setData(prev => {
			setStore('mockProducts', JSON.stringify([...prev, productWithUuid]))
			return [...prev, productWithUuid]
		})
	}

	const handleDeleteProduct = async (id: string) => {
		const tempData = [...data]
		const newData = tempData.filter(t => t.id !== id)
		setStore('mockProducts', JSON.stringify(newData))
		setData(newData)
	}

	const scan = async (): Promise<void> => {
		const status: any = await BarcodeScanner.checkPermissions()
		console.log('status:', status)
		if (status !== 'granted') {
			console.log(
				'some problem with the camera\n',
				'If you want to grant permission for using your camera, enable it in the app settings.'
			)
			const req = await BarcodeScanner.requestPermissions()
			console.log('request:', req)
		} else if (status === 'granted') {
			console.log('camera permission granted!')
		}
		console.log('camera', camera)

		// const { barcodes } = await BarcodeScanner.scan()
		const result: any = await BarcodeScanner.scan()
		console.log('scan [result]', result)
		if (result) {
			const tempData = [...data]
			const newData = tempData.filter(t => t.id === result?.id)
			// TODO: need add redirect to component
			console.log(newData)
		}
	}

	return (
		<IonApp>
			<IonHeader translucent>
				<IonToolbar color='primary' className='ion-padding-vertical flex'>
					<IonButtons slot='start'>
						{/* <IonBackButton default-href='#'></IonBackButton> */}
						<IonButton>
							<IonIcon slot='icon-only' ios={menuOutline} md={menu}></IonIcon>
						</IonButton>
						<IonButton onClick={scan}>
							<IonIcon
								slot='icon-only'
								ios={cameraOutline}
								md={camera}
							></IonIcon>
						</IonButton>
					</IonButtons>
					<IonTitle className='ion-text-center'>Store Mobile App</IonTitle>
					{!isPlatform && (
						<IonButtons slot='end'>
							<IonButton id='open-custom-dialog'>
								<IonIcon
									slot='icon-only'
									ios={addCircleOutline}
									md={addCircle}
								></IonIcon>
							</IonButton>
						</IonButtons>
					)}
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen className='ion-padding-bottom'>
				<IonText color='primary' className='block ion-text-center ion-padding'>
					<h1>Home page</h1>
				</IonText>
				<HomePage
					data={data}
					handleDeleteProduct={handleDeleteProduct}
					setToastData={setToastData}
				/>
				<ModalComponent
					createProduct={handleCreateProduct}
					setToastData={setToastData}
				/>
				<IonToast
					color={toastData.color}
					isOpen={toastData.isOpen}
					message={toastData.message}
					onDidDismiss={() =>
						setToastData(prev => ({ ...prev, message: '', isOpen: false }))
					}
					duration={toastData.duration}
				></IonToast>
				{isPlatform && (
					<IonFab
						slot='fixed'
						vertical='bottom'
						horizontal='end'
						style={{
							marginRight: '1rem',
							marginBottom: '1rem',
						}}
					>
						<IonFabButton id='open-custom-dialog'>
							<IonIcon icon={addCircle}></IonIcon>
						</IonFabButton>
					</IonFab>
				)}
			</IonContent>
		</IonApp>
	)
}

export default Main
