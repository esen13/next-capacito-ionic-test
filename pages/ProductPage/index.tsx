import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonThumbnail,
	IonTitle,
	IonToolbar,
} from '@ionic/react'

import styles from '../../components/CardComponent/styles/index.module.css'

interface CardInter {
	dItem: any
	handleDeleteProduct: (id: string) => void
	setToastData: any
}

const ProductPage: React.FC<CardInter> = ({
	dItem,
	handleDeleteProduct,
	setToastData,
}) => {
	const { title, subTitle, img, description, price, id } = dItem

	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton></IonBackButton>
					</IonButtons>
					<IonTitle>{title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent class='ion-padding'>
				<IonCard className={`${styles.cardContainer} ion-padding-top`}>
					<IonCardHeader className='ion-margin-top'>
						<IonCardTitle>{title}</IonCardTitle>
						<IonCardSubtitle className='ion-padding'>
							{subTitle}
						</IonCardSubtitle>
					</IonCardHeader>
					{/* <IonImg
				src='https://docs-demo.ionic.io/assets/madison.jpg'
				alt='The Wisconsin State Capitol building in Madison, WI at night'
			></IonImg> */}
					<IonThumbnail
						className={styles.ionThumbnail}
						style={{ height: '200px' }}
					>
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
					<IonButton expand='full' className='ion-margin-top'>
						Buy
					</IonButton>
				</IonCard>
			</IonContent>
		</>
	)
}
export default ProductPage
