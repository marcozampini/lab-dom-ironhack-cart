function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const price = Number(product.querySelector('.price span').textContent)
  const quantity = Number(product.querySelector('.quantity input').value)
  const subtotal = quantity * price
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2)
  return subtotal
}

function calculateAll() {
  const products = document.querySelectorAll('.product')
  let total = 0
  products.forEach((product) => {
    total += updateSubtotal(product)
  })
  document.querySelector('#total-value span').textContent = total.toFixed(2)
  return total
}

function removeProduct(event) {
  const target = event.currentTarget
  const product = target.parentNode.parentNode
  console.log(product)
  const actualTotal = Number(
    document.querySelector('#total-value span').textContent
  )
  const subtotalToRemove = Number(
    product.querySelector('.subtotal span').textContent
  )
  const newTotal = actualTotal - subtotalToRemove
  document.querySelector('#total-value span').textContent = newTotal.toFixed(2)
  product.parentNode.removeChild(product)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', (event) => removeProduct(event))
  })
  //... your code goes here
})
