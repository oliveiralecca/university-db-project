import { Request, Response } from "express";

const users = [
  { id: 0, name: 'Avril Lavigne', age: 37, gender: 'F' },
  { id: 1, name: 'Chris Martin', age: 45, gender: 'm' },
  { id: 2, name: 'Letícia Oliveira', age: 28, gender: 'F' },
  { id: 3, name: 'Marcos Paulo', age: 26, gender: 'M' },
  { id: 4, name: 'Rihanna', age: 34, gender: 'f' },
  { id: 5, name: 'Rodrigo Santana', age: 20, gender: 'm' },
  { id: 6, name: 'Slash', age: 57, gender: 'M' },
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  }
}
