export default function anySample() {
  console.log('any');
  let name: any = 'Shun'
  console.log(typeof name, name);

  name = 1234
  console.log(typeof name, name);

}
