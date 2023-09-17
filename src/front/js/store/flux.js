const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			backendUrl: process.env.BACKEND_URL,
			token: "",
			userData: {},
		},
		actions: {
			registerUser: async (userData) => {
				try {
					const store = getStore(userData);
					const response = await fetch(`${store.backendUrl}/api/register/user`, {
						body: JSON.stringify(userData),
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					});

					const data = await response.json();
					alert(data);
					if (response.status !== 201) {
						return false;
					} else {
						return true;
					}
				} catch (error) {
					console.log(error)
				}
			},

			registerProvider: async (userData) => {
				try {
					const store = getStore();
					console.log(userData)
					const response = await fetch(`${store.backendUrl}/api/register/provider`, {
						body: JSON.stringify(userData),
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					});

					const data = await response.json();
					alert(data);
					if (response.status !== 201) {
						return false;
					} else {
						return true;
					}
				} catch (error) {
					console.log(error)
				}
			},

			loginUser: async (userData) => {
				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/login/user`, {
						body: JSON.stringify(userData),
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					});

					const data = await response.json();
					if (!data.token) return false;
					setStore({ token: data.token })
					return true

				} catch (error) {
					console.log(error)
				}

			},

			loginProvider: async (userData) => {
				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/login/provider`, {
						body: JSON.stringify(userData),
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					});

					const data = await response.json();
					if (!data.token) return false;
					setStore({ token: data.token })
					return true

				} catch (error) {
					console.log(error)
				}

			},



			addWedding: (wedding) => {
				const store = getStore();
				setStore({ weddingForm: [...store.weddingForm, wedding] });
			},

		}
	};
};



export default getState;
