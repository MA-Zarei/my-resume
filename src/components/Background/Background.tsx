import { useEffect, useState } from 'react'
import './Background.css'

const Background: React.FC = () => {
  const [repeatCount, setRepeatCount] = useState<number>(0);
  
  useEffect(() => {
    const calculationRepeats = () => {
      const viewportWidth = window.innerWidth;
      const repeatUnit = viewportWidth * 0.1;
      const count = Math.floor(viewportWidth / repeatUnit);
      setRepeatCount(count);
    };
    calculationRepeats();
    window.addEventListener('resize', calculationRepeats);
    return () => window.removeEventListener('resize', calculationRepeats);
  }, []);

  return (
    <div className='bg-layout'>
      {Array.from({ length: repeatCount }, (_, i) => (
        <div key={i} className='bg-lines' />
      ))}
    </div>
  )
}

export default Background