using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace DL;

[Table("Usuario")]
public partial class Usuario
{
    [Key]
    public int IdUsuario { get; set; }

    [StringLength(100)]
    public string Nombre { get; set; } = null!;

    [StringLength(100)]
    public string ApellidoPaterno { get; set; } = null!;

    [StringLength(100)]
    public string? ApellidoMaterno { get; set; }

    [StringLength(20)]
    public string? Telefono { get; set; }

    [Column("CURP")]
    [StringLength(18)]
    [Unicode(false)]
    public string Curp { get; set; } = null!;

    public int IdRol { get; set; }

    [ForeignKey("IdRol")]
    [InverseProperty("Usuarios")]
    public virtual Rol IdRolNavigation { get; set; } = null!;
}
