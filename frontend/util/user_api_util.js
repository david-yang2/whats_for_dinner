
export const fetchUser = userId => (
    $.ajax({
        url: `api/users/${userId}`,
        method: `GET`,
        data: { user },
    })
)

export const postUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: "PATCH",
        data: { user }
    })
)