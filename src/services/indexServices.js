export const autosService = async () => {
	try {
		const data = await fetch("http://localhost:8000/apis/autos");
		const autos = await data.json();
		return autos;
	} catch (error) {
		console.error("Error in promise");
		return Promise.reject("Error in promise");
	}
};
export const sucursalesService = async () => {
	try {
		const data = await fetch("http://localhost:8000/apis/sucursales");
		const sucursales = await data.json();
		return sucursales;
	} catch (error) {
		console.error("Error in promise");
		return Promise.reject("Error in promise");
	}
};
export const usersService = async () => {
	try {
		const data = await fetch("http://localhost:8000/apis/users");
		const users = await data.json();
		return users;
	} catch (error) {
        console.error("Error in promise");
		return Promise.reject("Error in promise");
    }
};
