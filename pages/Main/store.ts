import { Storage } from '@ionic/storage'
const storage = new Storage()

const createStore = async () => {
	await storage.create()
}
const setStore = async (key: string, value: string) => {
	await storage.set(key, value)
}
const clearStore = async () => {
	await storage.clear()
}
const removeKeyStore = async (key: string) => {
	await storage.remove(key)
}

export { clearStore, createStore, removeKeyStore, setStore, storage }
