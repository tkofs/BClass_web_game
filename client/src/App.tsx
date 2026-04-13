import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';
import AuthScreen from './components/auth/AuthScreen';
import CharacterSelect from './components/auth/CharacterSelect';
import HomeScreen from './components/home/HomeScreen';
import DungeonSelect from './components/home/DungeonSelect';
import BattleScreen from './components/battle/BattleScreen';
import InventoryScreen from './components/inventory/InventoryScreen';
import BestiaryScreen from './components/bestiary/BestiaryScreen';
import ShopScreen from './components/shop/ShopScreen';

function App() {
  const restoreSession = useAuthStore((s) => s.restoreSession);

  useEffect(() => {
    restoreSession();
  }, [restoreSession]);

  return (
    <Routes>
      <Route path="/" element={<AuthScreen />} />
      <Route path="/select" element={<CharacterSelect />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/dungeon" element={<DungeonSelect />} />
      <Route path="/battle/:dungeonId" element={<BattleScreen />} />
      <Route path="/inventory" element={<InventoryScreen />} />
      <Route path="/bestiary" element={<BestiaryScreen />} />
      <Route path="/shop" element={<ShopScreen />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
