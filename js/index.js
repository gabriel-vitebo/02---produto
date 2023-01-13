const viewAnimatedProduct = document.querySelector(".preview")
const closeProduct = document.querySelector(".close-preview")
const ProductStatic = document.querySelector(".productStatic")
const ProductAnimated = document.querySelector(".productAnimed")
const addProduct = document.querySelector(".add-basket")

viewAnimatedProduct.addEventListener('click', () => {
  viewAnimatedProduct.classList.add('hide')
  closeProduct.classList.remove('hide')
  ProductStatic.classList.add("hide")
  ProductAnimated.classList.remove("hide")
})

closeProduct.addEventListener('click', () => {
  viewAnimatedProduct.classList.remove("hide")
  closeProduct.classList.add("hide")
  ProductStatic.classList.remove("hide")
  ProductAnimated.classList.add("hide")
})

addProduct.addEventListener('click', () => {
  prompt = alert('Produto adicionado a sua cesta')
})

