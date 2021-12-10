export default postItem(item) {
    return (dispatch) => {
        dispatch({ type: "POSTING_ITEM_REQUEST" });
        fetch("https://localhost:3010/items", {
            method: 'post',
            header: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                item
            })
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "ADD_ITEM",
                item: item
            })
        })
    }
}