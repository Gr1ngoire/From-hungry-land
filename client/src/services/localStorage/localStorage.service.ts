import {LocalStorageItemsNames} from "@/common/enums/enums";

class LocalStorageService {
    public setToken(value: string): void {
        localStorage.setItem(LocalStorageItemsNames.TOKEN, value);
    }

    public getToken(): string | null {
        return localStorage.getItem(LocalStorageItemsNames.TOKEN)
    }

    public clearToken(): void {
        localStorage.removeItem(LocalStorageItemsNames.TOKEN)
    }
}

export {LocalStorageService}