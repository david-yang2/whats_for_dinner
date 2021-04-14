// Get Users Cart
export const getCartItems = userId => {
    return $.ajax({
        url: `/api/users/${userId}/cartitems`,
        method: "GET"
    })
}