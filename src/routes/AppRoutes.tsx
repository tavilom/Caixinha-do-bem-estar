import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LootboxPage = React.lazy(() => import("@/modules/lootbox/LootboxPage"));

export const AppRoutes: React.FC = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          {/* Suas rotas aqui */}
          <Route index element={<LootboxPage />} />
          <Route path="/lootbox" element={<LootboxPage />} />

          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </Suspense>
    </div>
  );
};
