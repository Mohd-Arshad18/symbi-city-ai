import { Dashboard } from '@/components/Dashboard';
import { useDigitalTwin } from '@/stores/useDigitalTwin';
import { useEffect } from 'react';

const Index = () => {
  const { generateRecommendations } = useDigitalTwin();

  // Initialize AI recommendations on load
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return <Dashboard />;
};

export default Index;
