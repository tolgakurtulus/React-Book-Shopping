export const addBasket = book => {
    return { type: "ADD_BASKET", payload: book };
};

export const removeBasket = key => {
    return { type: "REMOVE_BASKET", payload: key };
};

export const updateBasket = (price, key) => {
    return { type: "UPDATE_BASKET", payload: { selectval: price, keyid: key }};
};