import CardComponent from '@/components/CardComponent'
import { IonCol, IonGrid, IonRow } from '@ionic/react'
import { Key } from 'react'
import { Product } from '../Main/types'
import styles from './index.module.css'
import { HomePageProps } from './types'

const HomePage: React.FC<HomePageProps> = ({
	data,
	handleDeleteProduct,
	setToastData,
}) => {
	return (
		<>
			<IonGrid className='ion-padding'>
				<IonRow className={`${styles.ionRow} ion-margin-top`}>
					{data.map((dItem: Product, idx: Key) => (
						<IonCol
							key={idx}
							className={`${styles.ionCol}`}
							size='12'
							size-sm='3'
						>
							<CardComponent
								dItem={dItem}
								handleDeleteProduct={handleDeleteProduct}
								setToastData={setToastData}
							/>
						</IonCol>
					))}
				</IonRow>
			</IonGrid>
		</>
	)
}

export default HomePage
