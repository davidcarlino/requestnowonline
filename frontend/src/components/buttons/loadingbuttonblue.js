import { useEffect, useState } from 'react';
import "./loadingbuttonblue.css";


const LoadingButton = (props) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div>
        <button className='btn' disabled={isLoading} onClick={!isLoading ? handleClick :null}>
            {isLoading ? 'Loading…' : props.text}
        </button>
    </div>

  );
}

export default LoadingButton;