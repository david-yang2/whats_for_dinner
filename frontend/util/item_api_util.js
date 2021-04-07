export const fetchItems = () => {
    return $.ajax({
        url:`/api/items/:id`,
        method: "GET"
    });
};

export const fetchChefsItems = id => {
    return $.ajax({
        url:`/api/chefs/${id}/items`,
        method: "GET"
    });
};
