import { Product } from '@/pages/Main/types'

export interface MyElementsProps {
	onInputChange: (key: string, event: CustomEvent) => void
}

export interface ModalInter {
	createProduct: (newProduct: Omit<Product, 'id'>) => void
	setToastData: any
}
