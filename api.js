import debounce from 'debounce-promise';

const getUserDataFn = username => {
	return fetch(`https://api.github.com/users/${username}`).then(res =>
		res.json()
	);
};
export const getUserData = debounce(getUserDataFn, 700);
