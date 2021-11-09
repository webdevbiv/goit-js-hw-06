const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryRef = document.querySelector('.gallery')
// console.log(galleryRef);
// const imagesNew = []

// images.map((image) => {
//   const imageNew = `<li><img src="${image.url}" alt="${image.alt}"></li>`
//   imagesNew.push(imageNew)
//   console.log(imageNew);
// })
// console.log(imagesNew)
// const html = imagesNew.join('')
// console.log(html);
// galleryRef.insertAdjacentHTML('afterbegin', `${html}`)

// const galleryRef = document.querySelector('.gallery')
// console.dir(galleryRef)
// function createNewItem(image) {
//   const createItem = document.createElement('li')
//   const createImage = document.createElement('img')
//   createImage.src = image.url
//   createImage.alt = image.alt
//   createItem.append(createImage)
//   console.log(createItem);
//   return createItem
// }

// const newList = images.map(createNewItem)
// console.log(...newList);
// galleryRef.append(...newList)

// const galleryRef = document.querySelector('.gallery')
// console.log(galleryRef);
// function createNewList(item) {
//   const list = document.createElement('li')
//   const image = document.createElement('img')
//   image.src = item.url
//   image.alt = item.alt
//   list.append(image)
//   console.log(list);
//   return list
// }
// const newList = images.map(createNewList)
// galleryRef.append(...newList)

const galleryRef = document.querySelector('.gallery')
console.log(galleryRef);
function createNewList(item) {
  const newItem = `<li><img src="${item.url}" alt="${item.alt}"></li>`
  return newItem
}
const newList = images.map(createNewList).join('')
galleryRef.insertAdjacentHTML('afterbegin', newList)