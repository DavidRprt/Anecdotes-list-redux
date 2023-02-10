const getId = () => (100000 * Math.random()).toFixed(0)

export const addVote = anecdote => {
    return{
        type: "ADD_VOTE",
        payload: { ...anecdote, 'votes': anecdote.votes + 1 }
    }
}

export const addAnecdote = anecdote => {
    return {
        type: "ADD_ANECDOTE",
        payload: {
            content: anecdote,
            votes: 0,
            id: getId()
        }
    }
}

export const getAnecdotes = () => {
    return {type: "INIT"}
}

export const filter = string => {
    return{
        type: "FILTER",
        payload: string
    }
}