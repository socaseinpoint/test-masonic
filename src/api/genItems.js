import { v4 as uuidv4 } from 'uuid';

function genItems() {

  const arr = new Array(50).fill('')

  arr.forEach((_, idx) => {
    const colorProbability = Math.random()

    const colorMap = () => {
      if (colorProbability > 0.75) {
        return 'red'
      }

      if (colorProbability > 0.5) {
        return 'blue'
      }

      if (colorProbability > 0.25) {
        return 'green'
      }

      return 'purple'
    }

    arr[idx] = {
      height: Math.round(Math.random(100) * 500),
      id: uuidv4(),
      color: colorMap()
    }
  })

  console.log('!!!arr', arr)

  return arr

}

export default genItems
