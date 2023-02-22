export const getUser = async (token: string) => {
    const url = 'https://studapi.teachmeskills.by/auth/users/me/'
    const params = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    const request = new Request(url, params)
    const response = await fetch(request)
    const result = await response.json()
    return {
        ok: response.ok,
        status: response.status,
        data: result
    }
}