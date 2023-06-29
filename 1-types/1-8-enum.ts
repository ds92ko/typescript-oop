{
  /**
   * Enum
   */
  // javascript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // typescript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday); // 1
  const day = Days.Saturday;
  console.log(day); // 5

  // enum 사용시 타입이 보장되지 않으므로 Union Types 사용 권장
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Wednesday';
}