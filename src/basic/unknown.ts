export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log(typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log(typeof isFoo, isFoo)

}
