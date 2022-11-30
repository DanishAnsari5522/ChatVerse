import RootNavigator from './src/Navigation/RootNavigator';
import { AppContextProvider } from './src/context/AppContext';
export default function App() {
  return (
    <AppContextProvider>
      <RootNavigator />
    </AppContextProvider>
  );
}

