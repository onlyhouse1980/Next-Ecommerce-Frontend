import { LastNames } from '../../../data1'

export default function overHandler({ query: { last_name } }, res) {
  const filtered = LastNames.filter((p) => p.last_name=== last_name)

  // User with last_name exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with serial number: ${last_name} not found.` })
  }
}