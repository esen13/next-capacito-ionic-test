import CardComponent from '@/components/CardComponent'
import { IonCol, IonGrid, IonRow } from '@ionic/react'
import { Key } from 'react'
import styles from './index.module.css'
import { HomePageProps } from './types'

const HomePage: React.FC<HomePageProps> = ({ data }) => {
	return (
		<>
			<IonGrid className='ion-padding'>
				<IonRow className={`${styles.ionRow}`}>
					{data.map(
						(
							d: {
								subTitle: string
								img: string
								description: string
								title: string
							},
							idx: Key
						) => (
							<IonCol
								key={idx}
								className={`${styles.ionCol}`}
								size='12'
								size-sm='3'
							>
								<CardComponent
									title={d.title}
									subTitle={d.subTitle}
									img={d.img}
									description={d.description}
								/>
							</IonCol>
						)
					)}
				</IonRow>
			</IonGrid>
		</>
	)
}

export default HomePage
