namespace BL
{
    public class Usuario
    {
        private readonly DL.AngularCrudContext _context;

        public Usuario(DL.AngularCrudContext context)
        {
            _context = context;
        }

        public ML.Result GetAll()
        {
            ML.Result result = new ML.Result();

            try
            {
                var listaUsuarios = (from usuarioDB in _context.Usuarios
                                     join rolDB in _context.Rols on usuarioDB.IdRol equals rolDB.IdRol
                                     select new
                                     {
                                         usuarioDB.IdUsuario,
                                         UsuarioNombre = usuarioDB.Nombre,
                                         usuarioDB.ApellidoPaterno,
                                         usuarioDB.ApellidoMaterno,
                                         usuarioDB.Telefono,
                                         usuarioDB.Curp,
                                         usuarioDB.IdRol,
                                         RolNombre = rolDB.NombreRol
                                     }).ToList();

                if (listaUsuarios.Count > 0)
                {
                    result.Objects = new List<object>();
                    foreach (var obj in listaUsuarios)
                    {
                        ML.Usuario usuario = new ML.Usuario();
                        usuario.IdUsuario = obj.IdUsuario;
                        usuario.Nombre = obj.UsuarioNombre;
                        usuario.ApellidoPaterno = obj.ApellidoPaterno;
                        usuario.ApellidoMaterno = obj.ApellidoMaterno;
                        usuario.Telefono = obj.Telefono;
                        usuario.CURP = obj.Curp;

                        usuario.Rol = new ML.Rol();
                        usuario.Rol.IdRol = obj.IdRol;
                        usuario.Rol.Nombre = obj.RolNombre;

                        result.Objects.Add(usuario);
                    }
                    result.Correct = true;
                }
                else
                {
                    result.Correct = false;
                    result.ErrorMessage = "No se encontraron registros en la tabla Usuario";
                }

            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }

            return result;
        }

        public ML.Result GetById(int IdUsuario)
        {
            ML.Result result = new ML.Result();
            try
            {
                var usuarioDB = (from usuario in _context.Usuarios
                                 join rol in _context.Rols on usuario.IdRol equals rol.IdRol
                                 where usuario.IdUsuario == IdUsuario
                                 select new
                                 {
                                     usuario.IdUsuario,
                                     UsuarioNombre = usuario.Nombre,
                                     usuario.ApellidoPaterno,
                                     usuario.ApellidoMaterno,
                                     usuario.Telefono,
                                     usuario.Curp,
                                     usuario.IdRol,
                                     RolNombre = rol.NombreRol
                                 }).FirstOrDefault();
                if (usuarioDB != null)
                {
                    ML.Usuario usuario = new ML.Usuario();
                    usuario.IdUsuario = usuarioDB.IdUsuario;
                    usuario.Nombre = usuarioDB.UsuarioNombre;
                    usuario.ApellidoPaterno = usuarioDB.ApellidoPaterno;
                    usuario.ApellidoMaterno = usuarioDB.ApellidoMaterno;
                    usuario.Telefono = usuarioDB.Telefono;
                    usuario.CURP = usuarioDB.Curp;
                    usuario.Rol = new ML.Rol();
                    usuario.Rol.IdRol = usuarioDB.IdRol;
                    usuario.Rol.Nombre = usuarioDB.RolNombre;
                    result.Object = usuario;
                    result.Correct = true;
                }
                else
                {
                    result.Correct = false;
                    result.ErrorMessage = "No se encontraron registros en la tabla Usuario";
                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }
            return result;
        }

        public ML.Result Add(ML.Usuario usuario)
        {
            ML.Result result = new ML.Result();
            try
            {
                DL.Usuario usuarioDL = new DL.Usuario();
                usuarioDL.Nombre = usuario.Nombre;
                usuarioDL.ApellidoPaterno = usuario.ApellidoPaterno;
                usuarioDL.ApellidoMaterno = usuario.ApellidoMaterno;
                usuarioDL.Telefono = usuario.Telefono;
                usuarioDL.Curp = usuario.CURP;
                usuarioDL.IdRol = usuario.Rol.IdRol;

                _context.Usuarios.Add(usuarioDL);
                int filasAfectadas = _context.SaveChanges();

                if (filasAfectadas > 0)
                {
                    result.Correct = true;
                }
                else
                {
                    result.Correct = false;
                    result.ErrorMessage = "No se insertó el registro en la tabla Usuario";
                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }
            return result;
        }

        public ML.Result Update(ML.Usuario usuario)
        {
            ML.Result result = new ML.Result();
            try
            {
                var usuarioEncontrado = (from usuarioDB in _context.Usuarios
                                         where usuarioDB.IdUsuario == usuario.IdUsuario
                                         select usuarioDB).FirstOrDefault();

                if (usuarioEncontrado != null)
                {
                    usuarioEncontrado.Nombre = usuario.Nombre;
                    usuarioEncontrado.ApellidoPaterno = usuario.ApellidoPaterno;
                    usuarioEncontrado.ApellidoMaterno = usuario.ApellidoMaterno;
                    usuarioEncontrado.Telefono = usuario.Telefono;
                    usuarioEncontrado.Curp = usuario.CURP;
                    usuarioEncontrado.IdRol = usuario.Rol.IdRol;

                    int filasAfectadas = _context.SaveChanges();
                    if (filasAfectadas > 0)
                    {
                        result.Correct = true;
                    }
                    else
                    {
                        result.Correct = false;
                        result.ErrorMessage = "No se actualizó el registro en la tabla Usuario";
                    }
                }
                else
                {
                    result.Correct = false;
                    result.ErrorMessage = "No se encontró el registro en la tabla Usuario";
                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }
            return result;
        }

        public ML.Result Delete(int IdUsuario)
        {
            ML.Result result = new ML.Result();
            try
            {
                var usuarioEncontrado = (from usuarioDB in _context.Usuarios
                                         where usuarioDB.IdUsuario == IdUsuario
                                         select usuarioDB).FirstOrDefault();
                if (usuarioEncontrado != null)
                {
                    _context.Usuarios.Remove(usuarioEncontrado);
                    int filasAfectadas = _context.SaveChanges();
                    if (filasAfectadas > 0)
                    {
                        result.Correct = true;
                    }
                    else
                    {
                        result.Correct = false;
                        result.ErrorMessage = "No se eliminó el registro en la tabla Usuario";
                    }
                }
                else
                {
                    result.Correct = false;
                    result.ErrorMessage = "No se encontró el registro en la tabla Usuario";
                }
            }
            catch (Exception ex)
            {
                result.Correct = false;
                result.ErrorMessage = ex.Message;
                result.Ex = ex;
            }
            return result;
        }
    }
}
