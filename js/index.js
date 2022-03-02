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
  const product = document.querySelector('.create-product')
  let productName = product.querySelector('input[type=text]').value
  console.log('productName', productName)
  let unitPrice = Number(product.querySelector('input[type=number]').value)
  console.log('unitPrice', unitPrice)
  if (productName.length > 0 && unitPrice > 0) {
    const tr = document.createElement('tr')
    tr.classList.add('product')

    tr.innerHTML = `<td class="name">
  <span>${productName}</span>
</td>
<td class="price">$<span>${unitPrice.toFixed(2)}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`
    document.querySelector('tbody').appendChild(tr)
  }
  product.querySelector('input[type=text]').value = ''
  product.querySelector('input[type=number]').value = 0

  const newProduct = document.querySelector('tbody').lastChild
  const newRemoteButton = newProduct.querySelector('.btn-remove')
  newRemoteButton.addEventListener('click', (event) => removeProduct(event))
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', (event) => removeProduct(event))
  })

  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct)
})
