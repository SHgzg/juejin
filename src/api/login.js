import service from "../util/service";

export const register = (params) => {
    return service({
        url:'/api/register',
        method:'post',
        params
    })
}

export const login = (params) => {
    return service({
        url:'/api/login',
        method:'post',
        params
    })
}