const Login = () => {
  return (
    <div>
      <div className="bg-white w-[50%]">
        <div className="flex flex-col">
          <label>Usuario</label>
          <input type="text" name="Name" />
        </div>
        <div className="flex flex-col">
          <label>Contrasena</label>
          <input type="password" name="password" />
        </div>
      </div>
    </div>
  );
};

export default Login;
