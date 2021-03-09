  
import { articles } from '../../../db/data.js'

export default function handler(req, res) {
  res.status(200).json(articles)
}