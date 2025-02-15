// utils/getClientId.ts
export function getClientId(): string {
    const storageKey = "client_id";
    let clientId = localStorage.getItem(storageKey);
    if (!clientId) {
        clientId = "client-" + Date.now() + "-" + Math.floor(Math.random() * 1000000);
        localStorage.setItem(storageKey, clientId);
    }
    return clientId;
}
