import { Product } from '../types'

const saveItemToLocalStorage = (product: Product) => {
  let allItemsInCart: Product[] = []
  const serializedItems = localStorage.getItem('itemsInCartLocal')
  if (serializedItems) {
    allItemsInCart = JSON.parse(serializedItems)
  }
  let cartCopy = [...allItemsInCart]
  cartCopy = [...cartCopy, product]
  let stringCart = JSON.stringify(cartCopy)
  localStorage.setItem('itemsInCartLocal', stringCart)
}

const removeItemFromLocalStorage = (itemId: string) => {
  let allItemsInCart: Product[] = []
  const serializedItems = localStorage.getItem('itemsInCartLocal')
  if (serializedItems) {
    allItemsInCart = JSON.parse(serializedItems)
  }
  let cartCopy = [...allItemsInCart]
  cartCopy = cartCopy.filter((item) => item._id !== itemId)
  let stringCart = JSON.stringify(cartCopy)
  localStorage.setItem('itemsInCartLocal', stringCart)
}

export { saveItemToLocalStorage, removeItemFromLocalStorage }
