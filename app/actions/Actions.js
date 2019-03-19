import * as types from './ActionTypes'

let nextTodoId = 0

export const addTodo = text => ({
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: types.SET_VISIBILITY_FILTER,
    filter
})

export const toggleTodo = id => ({
    type: types.TOGGLE_TODO,
    id
})

export const VisibilityFilters = {
    SHOW_ALL: types.SHOW_ALL,
    SHOW_COMPLETED: types.SHOW_COMPLETED,
    SHOW_ACTIVE: types.SHOW_ACTIVE
}