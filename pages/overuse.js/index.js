import { Names } from '../../../../data4'

export default function ohandler(req, res) {
  res.status(200).json(Names)
}
