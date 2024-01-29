
const ConnectWithGoogle = () => {
  return (
    <button className="w-full">
      <div className="flex flex-row justify-center items-center border border-gray-400 rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-700 transition ease-in-out duration-500">
        <svg
          width="1em"
          height="1em"
          className="m-2.5 cursor-pointer sm:w-2em sm:h-wem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.52 12.275c0-.851-.076-1.67-.218-2.455H12v4.642h6.458a5.52 5.52 0 01-2.394 3.622v3.01h3.878c2.269-2.088 3.578-5.165 3.578-8.82z"
            fill="#4285F4"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.997 24.001c3.24 0 5.956-1.074 7.942-2.907l-3.878-3.01c-1.075.72-2.45 1.145-4.064 1.145-3.125 0-5.77-2.111-6.714-4.948h-4.01v3.11A11.995 11.995 0 0011.997 24z"
            fill="#34A853"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.285 14.278a7.213 7.213 0 01-.376-2.28c0-.79.136-1.56.376-2.28V6.61H1.276A11.995 11.995 0 000 12c0 1.936.464 3.769 1.276 5.389l4.01-3.11z"
            fill="#FBBC05"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.997 4.773c1.762 0 3.344.605 4.587 1.794l3.442-3.442C17.948 1.19 15.232 0 11.997 0 7.307 0 3.248 2.69 1.273 6.61l4.01 3.11c.943-2.836 3.589-4.947 6.714-4.947z"
            fill="#EA4335"
          ></path>
        </svg>
        <h3 className="font-semibold text-lg cursor-pointer">
          Continue with Google
        </h3>
      </div>
    </button>
  );
};

export default ConnectWithGoogle;
