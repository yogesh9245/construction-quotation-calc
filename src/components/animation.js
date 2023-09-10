import React,{useState,useEffect} from 'react'
import './BuildingConstruction.css'
export default function Animation() {
    const[constructionProgress,setConstructionProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate building construction progress
      if (constructionProgress < 100) {
        setConstructionProgress(constructionProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval for the animation speed

    return () => {
      clearInterval(interval);
    };
  }, [constructionProgress]);
  return (
    <div className="building-construction">
      <div className="building">
        <div className="building-progress" style={{ height: `${constructionProgress}%` }}></div>
      </div>
    </div>
  )
}
