import { useEffect, useState } from 'react';
import "./buttonnavbar.css";
import buttonnavbar from './buttonnavbar';


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
        <button className='buttonnavbar' disabled={isLoading} onClick={!isLoading ? handleClick :null}>
            {isLoading ? 'Loading…' : props.text}
        </button>
    </div>

  );
}

export default LoadingButton;