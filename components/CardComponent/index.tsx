import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonNavLink,
	IonThumbnail,
	IonTitle,
	useIonActionSheet,
} from '@ionic/react'

import ProductPage from '@/pages/ProductPage'
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
	const [present] = useIonActionSheet()

	function canDismiss() {
		return new Promise<boolean>((resolve, reject) => {
			present({
				header: 'Are you sure?',
				buttons: [
					{
						text: 'Yes',
						role: 'confirm',
					},
					{
						text: 'No',
						role: 'cancel',
					},
				],
				onWillDismiss: (ev: { detail: { role: string } }) => {
					if (ev.detail.role === 'confirm') {
						resolve(true)
					} else {
						reject()
					}
				},
			})
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
				onClick={async () => {
					await canDismiss().then(() => {
						handleDeleteProduct(id)
						setToastData((prev: any) => ({
							...prev,
							isOpen: true,
							message: 'Successfully deleted product!',
						}))
					})
				}}
			>
				Delete
			</IonButton>
		</IonCard>
	)
}
export default CardComponent
