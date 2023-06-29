{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  /* 
    // 나의 답안
    const printLoginState = (resourceLoadState: ResourceLoadState) => {
      switch(resourceLoadState.state) {
        case 'loading':
          console.log(`👀 ${resourceLoadState.state}...`);
          break;
        case 'success':
          console.log(`😃 ${resourceLoadState.response.body}`);
          break;
        case 'fail':
          console.log(`😱 ${resourceLoadState.reason}`);
          break;
        default:
          throw new Error('unknown state');
      }
    }
   */

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }
  
  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
