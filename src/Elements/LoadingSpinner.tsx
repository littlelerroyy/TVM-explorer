import ILoadingState from "../Interface/ILoadingState";

const LoadingSpinner = ({ IsLoading }: ILoadingState) => {
  if (IsLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          {IsLoading}
        </div>
      </div>
    );
  }
  return <></>;
};
export default LoadingSpinner;
