function generateListData() {
    const listRef = document.querySelectorAll('h2')
    // console.log(`Number of categories: ${listRef.length}`);
    const listItemsRef = document.querySelectorAll('.item')
    // console.log(listItemsRef);
    listItemsRef.forEach(element => {
        const categoriesTitle = element.querySelector('h2')
        const categoriesItems = element.querySelectorAll('li')
        // console.log(categoriesTitle.innerText, categoriesItems.length);
        console.log(`Category: ${categoriesTitle.innerText}\nElements: ${categoriesItems.length}`);
    });
}

generateListData()