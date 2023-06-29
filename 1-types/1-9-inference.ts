{
  /**
   * Type Inference
   * 타입 추론
   * 타입을 명시하지 않아도 할당된 값을 바탕으로 타입을 지정
   */
  let text = 'hello';
  // text = 0 // error
  
  // 매개변수에 타입을 지정하지 않을 경우 -> any 타입 자동 할당
  function print(message) {
    console.log(message);
  }
  print(text);
  print(1);
  
  // 매개변수에 기본 값을 할당하면 할당된 값을 바탕으로 타입 지정
  function print2(message = 'hi') {
    console.log(message);
  }
  print2('hello');
  // print2(1); // error
  
  function add(x: number, y: number) {
    // number + number 이므로 리턴값에도 자동으로 number 타입 지정
    return x + y;
  }
  // add 함수의 리턴값이 number 타입이므로 result에 자동으로 number 타입 지정
  const result = add(1, 2);
}