export const loginService = (payload) => {
    var data = {
        email: payload.email,
        password: payload.password
    }
    const requestOption = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(data)
    }
    return fetch(`https://admin.barbuddy.dev.gradlesol.com/app/auth/login`, requestOption)
}

