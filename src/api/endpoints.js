
export function login(formData) {
    localStorage.setItem("isAuthDebug", "true");
    
    document.location.href = "/";
}

export function logout() {
    localStorage.removeItem("isAuthDebug");
    document.location.href = "/";
}