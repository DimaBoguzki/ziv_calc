import { Container } from '@mui/material';
import AppTabs from './components/Tabs';
import SettingProvider from './context/setting';

function App() {
  return (
    <Container maxWidth="sm" sx={{display:'flex', flexDirection:'column', flexFlow:1}}>
      <SettingProvider>
        <AppTabs />
      </SettingProvider>
    </Container>
  );
}

export default App;
