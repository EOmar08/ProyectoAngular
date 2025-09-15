using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly BL.Usuario _usuario;

        public UsuarioController(BL.Usuario usuario)
        {
            _usuario = usuario;
        }

        [HttpGet]
        public IActionResult GetAll()
       {
            ML.Result result = _usuario.GetAll();
            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpGet("{idUsuario}")]
        public IActionResult GetById(int idUsuario)
        {
            ML.Result result = _usuario.GetById(idUsuario);
            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpPost]
        public IActionResult Add([FromBody] ML.Usuario usuario)
        {
            ML.Result result = _usuario.Add(usuario);
            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpPut]
        public IActionResult Update([FromBody] ML.Usuario usuario)
        {
            ML.Result result = _usuario.Update(usuario);
            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpDelete("{idUsuario}")]
        public IActionResult Delete(int idUsuario)
        {
            ML.Result result = _usuario.Delete(idUsuario);
            if (result.Correct)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

    }
}
