export const decreaseCount = (currentCount) => {
    return {
        type: "DECREASE_COUNT",
        payload: currentCount - 1
    }
}
export const increaseCount = (currentCount) => {
    return {
        type: "INCREASE_COUNT",
        payload: currentCount + 1
    }
}
export const setCount = (currentCount) => {
    return {
        type: "SET_COUNT",
        payload: currentCount
    }
}