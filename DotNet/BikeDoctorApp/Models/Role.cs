using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Role
{
    public int Id { get; set; }

    public string Role1 { get; set; } = null!;

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();
}
