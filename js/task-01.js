function listDataRef() {
    const categoriesRef = document.querySelectorAll('h2')
    console.log(`Number of categories: ${categoriesRef.length}`);
    // console.dir(categoriesRef)
    const itemsRef = document.querySelectorAll('.item')
    // console.log(itemsRef);
    itemsRef.forEach(item => {
        const category = item.querySelector('h2')
        // console.dir(category)
        const list = item.querySelectorAll('li')
        console.log(`Category: ${category.innerText}\nElements: ${list.length}`);
    });
}

listDataRef()