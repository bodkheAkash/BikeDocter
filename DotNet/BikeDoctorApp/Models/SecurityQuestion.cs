using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class SecurityQuestion
{
    public int Id { get; set; }

    public string Question { get; set; } = null!;

    public virtual ICollection<Login> Logins { get; set; } = new List<Login>();
}
