export const type='findHistory'

const findHistory = data => {

    return {
        type,
        payload: data
    }
}

export default findHistory