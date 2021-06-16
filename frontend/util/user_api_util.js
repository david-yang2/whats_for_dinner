
export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: `GET`,
    })
};


// update deliveryInstructions for user
//PATCH  /api/users/:id

export const patchInstructions = user => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: `PATCH`,
        data: {user}
    })
}


// # POST   /api/cartitems
// create new cartitem
export const postCart = cartitem => {
    return $.ajax({
        url: `/api/cartitems`,
        method: "POST",
        data: { cartitem: cartitem }
    })
}


// PATCH  /api/cartitems/:id
// update cartitem
export const updateCart = cartitem => {
    return $.ajax({
        url:`/api/cartitems/${cartitem.id}`,
        method: "PATCH",
        data: {cartitem: cartitem}
    })
};