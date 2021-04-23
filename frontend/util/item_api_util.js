export const fetchItems = () => {
    return $.ajax({
        url:`/api/items/:id`,
        method: "GET"
    });
};

export const fetchChefsItems = chefId => {
    return $.ajax({
        url:`/api/chefs/${chefId}/items`,
        method: "GET"
    });
};