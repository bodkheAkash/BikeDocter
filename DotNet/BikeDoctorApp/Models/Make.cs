using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Make
{
    public int Id { get; set; }

    public string Brand { get; set; } = null!;

    public virtual ICollection<Bike> BikeMakeIdNavigations { get; set; } = new List<Bike>();

    public virtual ICollection<Bike> BikeMakes { get; set; } = new List<Bike>();
}
