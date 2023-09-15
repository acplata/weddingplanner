const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			backendUrl: process.env.BACKEND_URL,
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

			addWedding: (wedding) => {
				const store = getStore();
				setStore({ weddingForm: [...store.weddingForm, wedding] });
		},

		}
	};
};

export default getState;
