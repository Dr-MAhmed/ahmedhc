"use client"
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react'; // Make sure this is the correct import

const LottieIcon = ({ animationData, animationPath }) => {
  const [animation, setAnimation] = useState(null);

  // Fetch animation data if a path is provided
  useEffect(() => {
    if (animationPath) {
      fetch(animationPath)
        .then(response => response.json())
        .then(data => setAnimation(data))
        .catch(error => console.error('Error fetching animation:', error));
    } else {
      setAnimation(animationData);
    }
  }, [animationPath, animationData]);

  if (!animation) {
    return <div>Loading...</div>;
  }

  return <Lottie animationData={animation} loop={true} style={{ width: '100px', height: '50px' }} />;
};

export default LottieIcon;
