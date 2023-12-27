import {
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonImg,
	IonThumbnail,
	IonTitle,
} from '@ionic/react'

import styles from './styles/index.module.css'

interface CardInter {
	title: string
	img: string
	subTitle: string
	description: string
}

const CardComponent: React.FC<CardInter> = ({
	title,
	img,
	subTitle,
	description,
}) => {
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
					src='https://ionicframework.com/docs/img/demos/thumbnail.svg'
				/>
			</IonThumbnail>
			<IonCardContent className='ion-padding'>{description}</IonCardContent>
			<IonTitle color='danger' className='ion-margin-top'>
				1999$
			</IonTitle>
			<IonButton expand='full' className='ion-margin-top'>
				Buy
			</IonButton>
		</IonCard>
	)
}
export default CardComponent
