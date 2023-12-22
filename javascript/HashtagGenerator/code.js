export default function generateHashtag (str) {
  const words = str.split(' ').map(word => word.trim()).filter(word => word.length > 0)
  if (!words.length) {
    return false
  }

  const camelCaseWords = words.map(word => word[0].toUpperCase() + word.slice(1))
  const hashtag = `#${camelCaseWords.join('')}`

  if (hashtag.length > 140) {
    return false
  }

  return hashtag
}
