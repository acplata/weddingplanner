import { toast } from "react-toastify";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			backendUrl: process.env.BACKEND_URL,
			token: JSON.parse(localStorage.getItem("token")) || "",
			userData: {},
			providerData: {},
			userProviders: [],
			contacts: [],
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
					if (data.membership_id) return "/profile/user"
					if (data.wedding_id) return "/membresia/cliente"
					return "/planilla/cliente"

				} catch (error) {
					console.log(error)
				}

			},

			loginProvider: async (providerData) => {
				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/login/provider`, {
						body: JSON.stringify(providerData),
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					});

					const data = await response.json();
					if (!data.token) return false;
					setStore({ token: data.token })
					localStorage.setItem("token", JSON.stringify(data.token))
					if (data.membership_id) return "/profile/provider"
					if (data.provider_sheet_id) return "/membresia/provider"
					console.log(data)
					return "/planilla/provider"


				} catch (error) {
					console.log(error)
				}

			},

			addWedding: async (wedding) => {
				wedding.guests_average = parseInt(wedding.guests_average)
				wedding.presupuesto_estimado = parseInt(wedding.presupuesto_estimado)

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


			addProvider: async (provider) => {

				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/planilla/provider`, {
						body: JSON.stringify(provider),
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

			addUserMembership: async (User_membership) => {

				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/membresia/cliente`, {
						body: JSON.stringify(User_membership),

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

			addProviderMembership: async (Provider_membership) => {

				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/membresia/proveedor`, {
						body: JSON.stringify(Provider_membership),
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

			getUserInfo: async () => {
				console.log("hola que tal");
				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/profile/user`, {
						headers: {
							"Authorization": `Bearer ${store.token}`
						}
					})
					const data = await response.json();
					if (response.status === 401) {
						const actions = getActions()
						actions.logoutUser()
						toast.error("User not autenticated")
						return;
					}
					console.log(data)
					setStore({ userData: data.user_data, weddingData: data.wedding_data })
				} catch (error) {
					console.log(error)
				}
			},

			getProviderInfo: async () => {
				console.log("hola que tal");
				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/profile/provider`, {
						headers: {
							"Authorization": `Bearer ${store.token}`
						}
					})
					const data = await response.json();
					if (response.status === 401) {
						toast.error("User not autenticated")
						return;
					}
					console.log(data)
					setStore({ providerData: data.provider_data, sheetData: data.sheet_data })
				} catch (error) {
					console.log(error)
				}
			},

			logoutUser: () => {
				setStore({ token: "" });
				localStorage.removeItem("token")
			},

			getUserProviders: async () => {
				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/user/providers`, {
						headers: {
							"Authorization": `Bearer ${store.token}`
						}
					})
					const data = await response.json();
					if (response.status !== 200) {
						toast.error("Ha ocurrido un error")
					}
					setStore({ userProviders: data })
				} catch (error) {
					console.log(error)
				}
			},

			createContact: async (provider_id) => {
				const store = getStore()
				const actions = getActions()
				try {
					const response = await fetch(`${store.backendUrl}/api/contact/${provider_id}`, {
						method: "POST",
						headers: {
							"Authorization": `Bearer ${store.token}`,
						},
					})

					if (response.status !== 201) {
						return false;
					} else {
						actions.getContact()
						return true;
					}

				} catch (error) {
					console.log(error)
				}


			},

			getContacts: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.backendUrl}/api/contact`, {
						method: "GET",
						headers: {
							"Authorization": `Bearer ${store.token}`,

						}
					})
					const data = await response.json()
					setStore({ contacts: data.data })

				} catch (error) {
					console.error(error)
				}
			}

		},
	};
};

export default getState;
