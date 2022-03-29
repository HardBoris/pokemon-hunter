import { CapturaProvider } from "./Capturas";
import { DataProvider } from "./Data";
import { ImagoProvider } from "./Imago";

const Providers = ({ children }) => {
  return (
    <DataProvider>
      <ImagoProvider>
        <CapturaProvider>{children}</CapturaProvider>
      </ImagoProvider>
    </DataProvider>
  );
};
export default Providers;
