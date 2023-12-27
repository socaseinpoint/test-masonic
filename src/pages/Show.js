import { useSelector } from "react-redux"
import { filesSelector } from "../store/filesSlice"

function Show() {
  const files = useSelector(filesSelector)

  return <div>File id: ${'id'}</div>
}

export default Show

