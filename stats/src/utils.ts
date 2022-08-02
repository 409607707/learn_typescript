export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString
  .split('/') // ['28', '10', '2018']
  .map((item: string): number => {
    return parseInt(item)
  })
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}