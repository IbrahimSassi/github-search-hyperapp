import { getUserData } from './api';
const nameChangeAction = name => (state, actions) => ({ ...state, name });

const actions = {
	updateUsername: username => (state, actions) => {
		getUserData(username).then(actions.setUserData);
		return { username };
	},
	setUserData: userData => state => ({ userData })
};

export default actions;
