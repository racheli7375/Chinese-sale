
export function addItem(item) {
    return { type: 'addItem', payload: item };
}
export function addDonation(donation) {
    return { type: 'addDonation', payload: donation };
}
export function updateItem(item) {
    return { type: 'updateItem', payload: item };
}
export function initialItems(items) {
    return { type: 'initalItems', payload: items }
}