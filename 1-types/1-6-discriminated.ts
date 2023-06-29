{
  /**
   * Discriminated Union 타입을 사용한 리팩토링
   */
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    }
  }
  type FailState = {
    result: 'fail';
    reason: string;
  }
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      }
    }
  }

  function printLoginState(state: LoginState) {
    // result(공통적인 프로퍼티)를 사용해 구분 
    if(state.result === 'success') {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}