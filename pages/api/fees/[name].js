import { Names } from '../../../../data4'

export default function overHandler({ query: { name } }, res) {
  const filtered = Names.filter((p) => p.name === name)

  // User with meter_serialNum exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with name: ${name} not found.` })
  }
}