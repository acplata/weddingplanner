const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			backendUrl: process.env.BACKEND_URL,
			token: JSON.parse(localStorage.getItem("token")) || "",
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
					localStorage.setItem("token", JSON.stringify(data.token))
					return true

				} catch (error) {
					console.log(error)
				}

			},

			addWedding: async (wedding) => {

				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/planilla/cliente`, {
						body: JSON.stringify(wedding),
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`,
						},
					});

					const data = await response.json();
					if (response.status !== 201) {
						return false;
					} else {
						return true;
					}

				} catch (error) {
					console.log("Hay un error")
				}
			},
		},
	};
};

export default getState;
