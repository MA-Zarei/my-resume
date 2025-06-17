import { useOutlet } from 'react-router-dom';
import { useState } from 'react';

const StableOutlet: React.FC = () => {
  const outlet = useOutlet();
  const [shown] = useState(outlet); // remembers the first render
  return shown;
};

export default StableOutlet;