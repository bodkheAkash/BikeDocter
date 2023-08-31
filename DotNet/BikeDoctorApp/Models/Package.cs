using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Package
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Details { get; set; } = null!;

    public int Cost { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
