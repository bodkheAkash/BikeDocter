using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class City
{
    public int Id { get; set; }

    public string City1 { get; set; } = null!;

    public virtual ICollection<Area> Areas { get; set; } = new List<Area>();
}
