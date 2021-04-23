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

export const createChef = chef => {
    return $.ajax({
        url:`/api/chefs`,
        method: "POST",
        data: {chef: chef}
    })
};

export const updateChef = chef => {
    return $.ajax({
        url:`/api/chefs/${chef.id}`,
        method: "PATCH",
        data: {chef: chef}
    })
};

export const deleteChef = id => {
    return $.ajax({
        url: `/api/chefs/${id}`,
        method: "DESTROY"
    })
};