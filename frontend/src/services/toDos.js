import api from "./apiConfig.js"

export const getToDos = async () => {
  try {
    const response = await api.get(`/todos`)
    return response.data
  }
  catch (error) {
    throw error;
  }
}

export const getToDo = async (id) => {
  try {
    const response = await api.get(`/todos/${id}`)
    return response.data
  }
  catch (error) {
    throw error
  }
}

export const createToDo = async () => {
  try {
    const response = api.post(`/todos`)
    return response.data
  }
  catch (error) {
    throw error
  }
}

export const updateToDoComplete = async (id) => {
  try {
    const response = await api.get(`/todos/update/${id}`)
    return response.data
  }
  catch (error) {
    throw error
  }
}

export const deleteToDo = async (id) => {
  try {
    const response = api.get(`/todos/${id}`)
    return response.data
  }
  catch (error){
    throw error
  }
}

