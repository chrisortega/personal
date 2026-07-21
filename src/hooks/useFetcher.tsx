interface Invite {
    nombre: string,
    asistencia: string,
    codigo: string
}

async function useFetcher(url: string, data: Invite) {
    let pending = true;
    try {

        const response = await fetch(url + "?name=" + data.nombre, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        })
        if (response.ok) {
            const res = await response.json();
            pending = false;
            return res;
        } else {
            pending = false;
            return null;
        }
    } catch (error) {
        console.error(error);
    }
    return { pending: pending };


}
export default useFetcher;