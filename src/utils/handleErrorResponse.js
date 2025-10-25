export const handleErrorResponse = async (res) => {
    const data = await res.json();

    if (!res.ok) {
        const errorMessage = data.message || data.error || "Something went wrong!";
        throw new Error(errorMessage);
    }
    return data;
}