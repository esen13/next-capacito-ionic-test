import type { OverlayEventDetail } from '@ionic/core'
import {
	IonActionSheet,
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonNavLink,
	IonThumbnail,
	IonTitle,
} from '@ionic/react'
import QRCode from 'react-qr-code'

import ProductPage from '@/pages/ProductPage'
import { useState } from 'react'
import styles from './styles/index.module.css'

interface CardInter {
	dItem: any
	handleDeleteProduct: (id: string) => void
	setToastData: any
}

const CardComponent: React.FC<CardInter> = ({
	dItem,
	handleDeleteProduct,
	setToastData,
}) => {
	const { title, subTitle, img, description, price, id } = dItem
	const [isOpen, setIsOpen] = useState(false)

	const onResult = (result: OverlayEventDetail) => {
		return new Promise<boolean>((resolve, reject) => {
			if (result.data.action === 'confirm') {
				resolve(true)
				setToastData((prev: any) => ({
					...prev,
					isOpen: true,
					message: 'Successfully deleted product!',
				}))
				handleDeleteProduct(id)
			} else {
				reject()
			}
			setIsOpen(false)
		})
	}

	return (
		<IonCard className={`${styles.cardContainer} ion-padding-top`}>
			<IonCardHeader className='ion-margin-top'>
				<IonCardTitle>{title}</IonCardTitle>
				<IonCardSubtitle className='ion-padding'>{subTitle}</IonCardSubtitle>
			</IonCardHeader>
			{/* <IonImg
				src='https://docs-demo.ionic.io/assets/madison.jpg'
				alt='The Wisconsin State Capitol building in Madison, WI at night'
			></IonImg> */}
			<IonThumbnail className={styles.ionThumbnail} style={{ height: '200px' }}>
				<img
					alt='Silhouette of mountains'
					src={`${
						img
							? img
							: 'https://ionicframework.com/docs/img/demos/thumbnail.svg'
					} `}
				/>
			</IonThumbnail>
			<IonCardContent className='ion-padding'>{description}</IonCardContent>
			<IonTitle color='danger' className='ion-margin-top'>
				{price}$
			</IonTitle>
			<IonCardContent className='ion-padding'>
				<div
					style={{
						height: 'auto',
						margin: '0 auto',
						maxWidth: 64,
						width: '100%',
					}}
				>
					<QRCode
						size={256}
						style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
						value={id}
						viewBox={`0 0 56 56`}
					/>
				</div>
			</IonCardContent>
			<IonNavLink
				routerDirection='forward'
				component={() => (
					<ProductPage
						dItem={dItem}
						handleDeleteProduct={handleDeleteProduct}
						setToastData={setToastData}
					/>
				)}
			>
				<IonButton expand='full' className='ion-margin-top' color='secondary'>
					View
				</IonButton>
			</IonNavLink>
			<IonButton expand='full' className='ion-margin-top'>
				Buy
			</IonButton>
			<IonButton
				expand='full'
				color='danger'
				className='ion-margin-top'
				onClick={async () => setIsOpen(true)}
			>
				Delete
			</IonButton>
			<IonActionSheet
				isOpen={isOpen}
				header='Are you sure?'
				buttons={[
					{
						text: 'Yes',
						role: 'confirm',
						data: {
							action: 'confirm',
						},
					},
					{
						text: 'No',
						role: 'cancel',
						data: {
							action: 'cancel',
						},
					},
				]}
				onWillDismiss={({ detail }) => onResult(detail)}
			></IonActionSheet>
		</IonCard>
	)
}
export default CardComponent
