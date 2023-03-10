export const SET_USER = "SET_USER";

export const setUserSuccess = (user) => ({
    type: SET_USER,
    payload: { user },
});

export function setUserG(user) {
    return (distpatch) => {
        distpatch(setUserSuccess(user));
    };
}
