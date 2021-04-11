
// Sign up a user
export const postUser = user => {
    $.ajax({
        url:`api/users`,
        method: "POST",
        data: { user },
    })
};

// log in a user
export const postSession = user => {
    $.ajax({
        url:`api/session`,
        method: "POST",
        data: { user },
    })
};

// log a user out
export const deleteSession = () => {
    $.ajax({
        url:`api/session`,
        method: "DELETE",
    })
};
