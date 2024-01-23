class PaginationHelper {

	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
    this.pages = []
    let page = []

    for (let i = 0; i < collection.length; i++) {
      if (page.length === itemsPerPage) {
        this.pages.push(page)
        page = new Array()
      }
      page.push(collection[i])
    }
    if (page.length > 0) {
      this.pages.push(page)
    }
	}

	// returns the number of items within the entire collection
  itemCount() {
    return this.collection.length
	}

	// returns the number of pages
	pageCount() {
    return this.pages.length
	}

	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pages.length) {
      return -1
    }
    return this.pages[pageIndex].length
	}

	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1
    }
    return Math.floor(itemIndex / this.itemsPerPage)
	}
}

export {
  PaginationHelper
}
