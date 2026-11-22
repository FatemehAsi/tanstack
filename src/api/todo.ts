import httpService from "../services/http";
import type {TodoItem} from "../types";

export const getTodoList=()=>{
    return httpService.get<TodoItem[]>("/api/todo").then((res)=> res.data)
}

export const getTodo = (todoId: string) => {
    return httpService.get<TodoItem>(`/api/todo/${todoId}`).then((res) => res.data)

}