import { Request, Response } from "express";

const users = [
  { id: 0, name: 'Letícia Oliveira', age: 28, gender: 'F' },
  { id: 1, name: 'Marcos Paulo', age: 26, gender: 'M' },
  { id: 2, name: 'Rodrigo Santana', age: 20, gender: 'm' },
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  }
}
