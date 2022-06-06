//封装token方法

export function getAccessToken() {
    return localStorage.getItem('ITEC_TOKEN');
}

export function setAccessToken(accessToken) {
    return localStorage.setItem('ITEC_TOKEN', accessToken);
}

export function removeAccessToken() {
    return localStorage.removeItem('ITEC_TOKEN');
}
