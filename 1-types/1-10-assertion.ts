{
  /**
   * Type Assertions
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // jsStrFunc 함수의 리턴 타입이 any이지만 리턴 값의 타입이 string인 것을 확신할 경우
  console.log((result as string).length);
  console.log((<string>result).length);
  // 만약 jsStrFunc 함수의 리턴 값의 타입이 string이 아닌 경우 undefined 반환

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // 실행시 error 발생 -> 어플리케이션 종료

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2); // error
  numbers!.push(2); // number[]타입을 확신할 경우

  const button = document.querySelector('class')!;
  // querySelector의 요소가 존재하면 element 반환, 없으면 null 반환
  // button 요소의 존재를 확신할 경우 뒤에 느낌표(!)를 붙여서 사용
}