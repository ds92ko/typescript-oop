{
  // javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // javascript
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  } 

  // typescript
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Optional parameter
  // firstName은 필수, lastName은 선택
  // 옵셔널 파라미터 사용시 firstName만 전달 가능
  // 옵셔널 파라미터 대신 string | undefined로 타입 지정시 undefined도 전달해줘야함
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Steve', 'Jobs');
  printName('Ellie');

  // Default parameter
  // 옵셔널 파라미터 사용시 인자를 전달하지 않으면 undefined 출력
  // 디폴트 파라미터 사용시 인자를 전달하지 않으면 디폴트 파라미터값 출력
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  // 개수에 상관 없이 인자를 전달 받고 싶을 경우
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}