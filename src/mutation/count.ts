const CountNumberMutation = {
  CountNumberMutation( state: any , iNumber: any ) { // state 为储存数据的地方   iNumber为action传来的值
    state.iNumberCount = iNumber;
  },
};


export default CountNumberMutation;
