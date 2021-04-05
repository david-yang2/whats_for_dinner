export const fetchChefs = () => {
    return $.ajax({
        url:`/api/chefs`,
        method: "GET"
    });
};

export const fetchChef = id => {
    return $.ajax({
        url:`/api/chefs/${id}`,
        method: "GET"
    });
};


export const createChefs = chef => {
    return $.ajax({
        url:`/api/chefs`,
        method: "POST",
        data: {chef: chef}
    })
};

export const updateChef = chef => {
    return $.ajax({
        url:`/api/chefs/${chef.id}`,
        method: "POST",
        data: {chef}
    })
};

export const deleteChef = id => {
    console.log(`/api/chefs/${id}`)
    return $.ajax({
        url: `/api/chefs/${id}`,
        method: "DESTROY"
    })
};