export const formartDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }

  return new Date(date).toLocaleDateString('pt-br', options)
}
