// 增加函数
export function setStorage(key, value) {
    localStorage.setItem(key, value);
}

// 删除函数
export function removeStorage(key) {
    localStorage.removeItem(key);
}

// 获取函数
export function getStorage(key) {
    return localStorage.getItem(key);
}
