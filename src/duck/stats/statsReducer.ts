export default (state: any, action: any) => {
  switch (action.type) {
    case 'SMTH':
      return { ...state };
    default:
      return {
        ...state
      };
  }
};
