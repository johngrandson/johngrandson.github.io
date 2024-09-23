import useStore from '../store';

const Loader = () => {
  const { loading: isLoading } = useStore((state) => state);

  return (
    isLoading && (
      <div id="mainpreloader" className="loader-overlay">
        <div className="loader">
          <div className="spinner"></div>
        </div>
      </div>
    )
  );
};

export default Loader;
