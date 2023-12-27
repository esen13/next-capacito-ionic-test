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
	IonToolbar,
} from '@ionic/react'
import { addCircle, addCircleOutline, menu, menuOutline } from 'ionicons/icons'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ModalComponent from '@/components/ModalComponent'
import HomePage from '../HomePage'
import { productList } from '../HomePage/fake'
import { Product } from './types'

const Main: React.FC = () => {
	const [data, setData] = useState<Product[]>(productList)
	const isPlatform = Capacitor.isNativePlatform()

	const handleCreateProduct = (newProduct: Omit<Product, 'id'>) => {
		const productWithUuid: Product = {
			id: uuidv4(),
			...newProduct,
		}
		setData(prev => [...prev, productWithUuid])
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
				<HomePage data={data} />
				{isPlatform && (
					<IonFab slot='fixed' vertical='bottom' horizontal='end'>
						<IonFabButton id='open-custom-dialog'>
							<IonIcon icon={addCircle}></IonIcon>
						</IonFabButton>
					</IonFab>
				)}
				<ModalComponent createProduct={handleCreateProduct} />
			</IonContent>
		</IonApp>
	)
}

export default Main
