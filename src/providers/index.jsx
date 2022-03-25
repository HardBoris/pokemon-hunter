import { DataProvider } from "./Data";
import { ImagoProvider } from "./Imago";

const Providers = ({ children }) => {
  return (
    <DataProvider>
      <ImagoProvider>{children}</ImagoProvider>
    </DataProvider>
  );
};
export default Providers;
