const NameMutation = {
  nameMutation( state: any , iNumber: any ) { // state 为储存数据的地方   iNumber为action传来的值
    state.name = iNumber;
  },
};


export default NameMutation;
