import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HumorPage = React.lazy(() => import("@/modules/lootbox/LootboxPage"));

export const AppRoutes: React.FC = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          {/* Suas rotas aqui */}
          <Route index element={<HumorPage />} />
          <Route path="/users" element={<HumorPage />} />

          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </Suspense>
    </div>
  );
};
