export const createFollow = follow => {
    
    return $.ajax({
        method: "POST",
        url: "/api/follows",
        data: { follow }
    });
};

export const deleteFollow = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/follows/`,
        data: { id }
    });
};


export const fetchFollows = () => {
    return $.ajax({
        method: "GET",
        url: `/api/follows`,
    });
};