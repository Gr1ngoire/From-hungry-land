import { toast } from "vue3-toastify";

class Notification {
  public error(message: string): void {
    toast.error(message);
  }
}

export { Notification };
