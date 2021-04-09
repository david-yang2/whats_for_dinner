const randomChefs = () =>{
    return $.ajax({
        url:`/api/chefs`,
        method:"GET"
    });
};

export default randomChefs;