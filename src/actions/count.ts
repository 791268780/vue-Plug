const CountNumberActions = {
  CountNumberActions( {commit}: any , iNumber: any ) { // commit 将事件提交给mutation   iNumber 为传递的参数
    return commit( 'CountNumberMutation' , iNumber );
  },
};

export default CountNumberActions;

// 如果commit不为对象{commit}  return commit.commit( 'CountNumberMutation' , iNumber)

// ES6精简写法

// export const CountNumberActions = (commit,iNumber) => commit('CountNumberMutation', iNumber);
