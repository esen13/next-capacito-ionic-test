import { Product } from '../Main/types'

export interface HomePageProps {
	data: Product[]
	handleDeleteProduct: (id: string) => void
	setToastData: any
}
