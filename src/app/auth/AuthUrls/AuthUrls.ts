import {MainUrls} from "../../MainUrls";

export class AuthUrls {
  static login() {
    return MainUrls.mainUrl() + 'all/auth/login';
  }
  static logout(): string {
    return MainUrls.mainUrl() + 'logout';
  }
  static registra(): string {
    return MainUrls.mainUrl() + 'all/auth/registra';
  }
}
