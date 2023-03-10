export const SET_SELECTED_TAB = "SET_SELECTED_TAB";

export const setSelectedTabSuccess = (selectedTab) => ({
    type: SET_SELECTED_TAB,
    payload: { selectedTab },
});

export function setSelectedTab(selectedTad) {
    return (distpatch) => {
        distpatch(setSelectedTabSuccess(selectedTad));
    };
}
