const Login = () => {
  return (
    <div>
      <div className="bg-[#000000] p-8 rounded-xl sm:w-96 shadow-2xs
">
        <div className="flex flex-col p-4 text-[#fff] rounded-xl">
          <label>Usuario</label>
          <input type="text" name="Name" />
        </div>
        <div className="flex flex-col p-4 text-[#fff] rounded-xl">
          <label>Contrasena</label>
          <input type="password" name="password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
