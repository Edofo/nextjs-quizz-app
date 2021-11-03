// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Data from '../quizz.json'

export default function handler(req : any, res : any) {
  res.status(200).json(Data)
}
