import createPersistedState from 'use-persisted-state';

const useUserState = createPersistedState('user');

export default useUserState;
