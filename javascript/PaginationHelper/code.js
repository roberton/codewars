class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	}

	// returns the number of items within the entire collection
  itemCount() {
    return 0
	}

	// returns the number of pages
	pageCount() {
    return 0
	}

	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	pageItemCount(pageIndex) {
    return -1
	}

	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	pageIndex(itemIndex) {
    return -1
	}
}

export {
  PaginationHelper
}
