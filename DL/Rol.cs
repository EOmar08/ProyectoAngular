using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace DL;

[Table("Rol")]
public partial class Rol
{
    [Key]
    public int IdRol { get; set; }

    [StringLength(50)]
    public string NombreRol { get; set; } = null!;

    [InverseProperty("IdRolNavigation")]
    public virtual ICollection<Usuario> Usuarios { get; set; } = new List<Usuario>();
}
