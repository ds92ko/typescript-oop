{
  // Array 타입 지정 방식
  const fruits: string[] = ['tomato', 'banana'];
  const scores: Array<number> = [1, 2, 3];
  // readonly로 타입 지정시 첫번째 방식만 사용 가능
  function printArray(fruits: readonly string[]) {}

  // Tuple 서로 다른 타입의 값을 담을 수 있는 배열
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123
  // index로 접근하는 방식이 타입을 알기 어렵기 때문에 Tuple 사용 대신 interface, type alias, class로 대체
  const [name, age] = student;
}