const INITIAL_STATE = {
  activePage: '/parcels',
};

export default function header(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@header/CHANGE_PAGE':
      return { activePage: action.payload };
    default:
      return state;
  }
}
