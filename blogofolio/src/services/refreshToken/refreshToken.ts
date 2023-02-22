 const fetchRefreshToken = async (refreshToken: string) => {
    const url = 'https://studapi.teachmeskills.by/auth/jwt/refresh/'
    const params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "refresh": refreshToken
        })
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

export default fetchRefreshToken
