import service from "../util/service";

export const articleList = (params) => {
    return service({
        url:'/api/articleList',
        method:'post',
        params
    })
}

export const articleInfo = (params) => {
    return service({
        url:'/api/articleInfo',
        method:'post',
        params
    })
}

export const addComment = (params) => {
    return service({
        url:'/api/addComment',
        method:'post',
        params
    })
}

export const addModifyArticle = (params) => {
    return service({
        url:'/api/addModifyArticle',
        method:'post',
        params
    })
}

export const userModify = (params) => {
    return service({
        url:'/api/userModify',
        method:'post',
        params
    })
}

export const personInfo = (params) => {
    return service({
        url:'/api/personInfo',
        method:'post',
        params
    })
}