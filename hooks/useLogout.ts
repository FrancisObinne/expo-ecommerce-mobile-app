import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    await SecureStore.deleteItemAsync("authToken");
    router.replace("/(auth)/login");
  };

  return logout;
}
