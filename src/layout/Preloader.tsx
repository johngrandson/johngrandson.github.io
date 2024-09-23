import { ReactNode, useState, useEffect } from 'react';

interface LoaderProps {
  children?: ReactNode;
}

export default function Preloader({ children }: LoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600)
  }, []);

  return (
    <div id='mainpreloader'>
      {loading
        ? <div className='preloader fadeOut'>
          <div className="mainpreloader">
            <span></span>
          </div>
        </div>
        : children}
    </div>
  );
}