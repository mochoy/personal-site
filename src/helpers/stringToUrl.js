/**
 * Format string to be url-friendly by like removing spaces and bad chars
 * 
 * @param {String} string: string to turn into url
 * 
 * @return {String} friendly url
 */
export default function stringToUrl (string) {
  return string
    // Replace " " with _, replace() only replaces the first instance of " "
    .split(' ')
    .join('_')

    .replace(/[^a-zA-Z0-9-_]/g, '')
    .toLowerCase()
}