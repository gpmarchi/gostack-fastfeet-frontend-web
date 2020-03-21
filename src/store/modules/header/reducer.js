const INITIAL_STATE = {
  activePage: '/parcels',
};

export default function header(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@header/CHANGE_PAGE':
      return { activePage: action.payload };
    case '@auth/SIGN_OUT':
      return INITIAL_STATE;
    default:
      return state;
  }
}
