import { Product, ItemInCart } from '../types'

const saveItemToLocalStorage = (product: Product) => {
  let allItemsInCart: ItemInCart[] = []
  const serializedItems = localStorage.getItem('itemsInCartLocal')
  if (serializedItems) {
    allItemsInCart = JSON.parse(serializedItems)
  }
  let cartCopy = [...allItemsInCart]
  const itemAdded = cartCopy.find((item) => item.product._id === product._id)
  if (itemAdded) {
    const itemAddedIndex = cartCopy.findIndex(
      (item) => item.product._id == product._id
    )
    itemAdded.quantity += 1
    cartCopy[itemAddedIndex] = itemAdded
  }
  if (!itemAdded) {
    cartCopy.push({ product: product, quantity: 1 })
  }
  let stringCart = JSON.stringify(cartCopy)
  localStorage.setItem('itemsInCartLocal', stringCart)
}
const deleteItemFromLocalStorage = (productId: string) => {
  let allItemsInCart: ItemInCart[] = []
  const serializedItems = localStorage.getItem('itemsInCartLocal')
  if (serializedItems) {
    allItemsInCart = JSON.parse(serializedItems)
  }
  let cartCopy = [...allItemsInCart]
  const itemAdded = cartCopy.find((item) => item.product._id === productId)
  if (itemAdded) {
    const itemAddedIndex = cartCopy.findIndex(
      (item) => item.product._id === productId
    )

    cartCopy.splice(itemAddedIndex, 1)
  }
  let stringCart = JSON.stringify(cartCopy)
  localStorage.setItem('itemsInCartLocal', stringCart)
}

const decreaseItemQuantityFromLocalStorage = (productId: string) => {
  let allItemsInCart: ItemInCart[] = []
  const serializedItems = localStorage.getItem('itemsInCartLocal')
  if (serializedItems) {
    allItemsInCart = JSON.parse(serializedItems)
  }
  let cartCopy = [...allItemsInCart]
  const itemAdded = cartCopy.find((item) => item.product._id === productId)
  if (itemAdded) {
    const itemAddedIndex = cartCopy.findIndex(
      (item) => item.product._id === productId
    )
    if (itemAdded.quantity > 1) {
      itemAdded.quantity -= 1
      cartCopy[itemAddedIndex] = itemAdded
    } else if ((itemAdded.quantity = 1)) {
      cartCopy.splice(itemAddedIndex, 1)
    }
  }
  let stringCart = JSON.stringify(cartCopy)
  localStorage.setItem('itemsInCartLocal', stringCart)
}

export { saveItemToLocalStorage,deleteItemFromLocalStorage, decreaseItemQuantityFromLocalStorage }
