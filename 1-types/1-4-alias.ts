{
  /**
   * Type Aliases
   * 새로운 타입 정의
   */
  
  // 원시 타입 정의
  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;

  // 오브젝트 타입 정의
  type Student = {
    name: Text;
    age: Num;
  }
  const student: Student = {
    name: 'ellie',
    age: 12,
  }

  /**
   * String Literal Types
   * 기본적인 타입 외에도 데이터를 타입으로도 할당 가능
   */

  // 지정된 문자열만 사용 가능
  type Name = 'name';
  let ellieName: Name;
  // ellieName = 'Name' // error
  ellieName = 'name';

  type JSON = 'json';
  const json: JSON = 'json';
  
  // 지정된 불값만 사용 가능
  type Boal = true;
  // const isCat: Boal = false // error
  const isCat: Boal = true
}