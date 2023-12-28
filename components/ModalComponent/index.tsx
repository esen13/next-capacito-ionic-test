import {
	IonButton,
	IonContent,
	IonHeader,
	IonInput,
	IonItem,
	IonModal,
	IonTextarea,
	IonTitle,
	IonToolbar,
} from '@ionic/react'
import { useRef, useState } from 'react'
import { ModalInter } from './types'

const DEFAULT_ITEM = {
	title: '',
	subTitle: '',
	img: '',
	description: '',
	price: 0,
}

interface ItemInter {
	title: string
	subTitle: string
	img: string
	description: string
	price: number
}

function ModalComponent({ createProduct, setToastData }: ModalInter) {
	const modal = useRef<HTMLIonModalElement>(null)
	const [item, setItem] = useState(DEFAULT_ITEM)

	function onDismiss() {
		modal.current?.dismiss()
		setItem(DEFAULT_ITEM)
	}

	const onCreateProduct = () => {
		// Assuming 'item' is an object with string properties
		// const isRequired: boolean = Object.keys(item).some(k => item[k].length > 1)
		let isRequired: Boolean = false
		Object.keys(item).forEach(k => {
			const key = k as keyof typeof item
			if (item[key].toString().length > 2) {
				isRequired = true
			} else {
				isRequired = false
			}
		})
		if (isRequired && item) {
			createProduct(item)
			onDismiss()
			setToastData((prev: any) => ({
				...prev,
				message: 'Successfully added product!',
				isOpen: true,
			}))
		} else {
			alert('Fields is required')
		}
	}

	const handleInputChange = (key: string, event: CustomEvent | any) => {
		setItem(prev => ({ ...prev, [key]: event.target.value }))
	}

	return (
		<>
			<IonModal id='example-modal' ref={modal} trigger='open-custom-dialog'>
				<IonHeader>
					<IonToolbar>
						<IonTitle style={{ marginLeft: '1rem' }}>
							Create New Product
						</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonContent className='ion-padding'>
					<IonItem>
						<IonInput
							value={item['title']}
							label='Enter product title'
							labelPlacement='stacked'
							type='text'
							clearInput
							// placeholder='Product title'
							onIonChange={event => handleInputChange('title', event)}
						/>
					</IonItem>
					<IonItem>
						<IonInput
							value={item['subTitle']}
							label='Enter sub title'
							labelPlacement='stacked'
							type='text'
							// placeholder='Sub title'
							onIonChange={event => handleInputChange('subTitle', event)}
						/>
					</IonItem>
					<IonItem>
						<IonTextarea
							value={item['description']}
							label='Enter description'
							labelPlacement='stacked'
							// placeholder='Description'
							onIonChange={event => handleInputChange('description', event)}
						/>
					</IonItem>
					<IonItem>
						<IonInput
							value={item['img']}
							label='Enter image url'
							labelPlacement='stacked'
							type='text'
							// placeholder='Image Url'
							onIonChange={event => handleInputChange('img', event)}
						/>
					</IonItem>
					<IonItem>
						<IonInput
							value={item['price']}
							label='Enter price'
							labelPlacement='stacked'
							type='number'
							min={0}
							// placeholder='Image Url'
							onIonChange={event => handleInputChange('price', event)}
						/>
					</IonItem>
				</IonContent>
				<div className='flex-center ion-margin-bottom gap-1'>
					<IonButton color='dark' onClick={onDismiss}>
						Close
					</IonButton>
					<IonButton color='primary' onClick={onCreateProduct}>
						Create
					</IonButton>
				</div>
			</IonModal>
		</>
	)
}

export default ModalComponent
