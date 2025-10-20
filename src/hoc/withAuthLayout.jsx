const withAuthLayout = (WrappedComponent, formTitle = "Auth Layout") => {
  const ComponentWithAuthLayout = (props) => {
    return (
      <section className="min-h-dvh flex items-center justify-center bg-amber-50">
        <div className="w-full max-w-md sm:p-6 p-4 bg-white shadow-md rounded-lg sm:min-h-auto min-h-dvh content-center">
          <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6 text-center text-gray-800">
            {formTitle}
          </h1>
          <WrappedComponent {...props} />
        </div>
      </section>
    );
  };
  return ComponentWithAuthLayout;
};

export default withAuthLayout;
