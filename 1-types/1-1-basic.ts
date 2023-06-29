{
  /**
   * JavaScript 데이터 타입
   * 1. primitive: number, string, boolean, bigint, symbol, null, undefined
   * 2. object
   */
  
  // number
  const num:number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined;         // undefined 타입만 단독적으로 명시 X
  let age: number | undefined; // 옵셔널 타입으로 명시 O
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null;           // null 타입만 단독적으로 명시 X
  let person2: string | null; // 옵셔널 타입으로 명시 O

  // unknown 어떤 타입의 데이터가 담길지 모르는 경우 -> 가능하면 사용 X
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 어떤 타입이든 할당 가능 -> 가능하면 사용 X
  let anything: any = 0;
  anything = 'hello';

  // void 아무런 값도 리턴하지 않는 함수 (생략 가능)
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 변수에는 보통 사용 X

  // never 에러를 던지거나 while문을 돌면서 끝나지 않는 함수에 사용, 리턴 불가
  function throwError(message: string): never {
    // throw new Error(message);
    while(true) {}
  }
  let neverEnding: never; // 변수에 사용 X

  // object 원시타입을 제외한 모든 오브젝트 타입 사용 가능 -> 가능하면 구체적인 타입 명시
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}