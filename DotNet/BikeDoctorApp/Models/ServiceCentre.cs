using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class ServiceCentre
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int AreaId { get; set; }

    public string Phone { get; set; } = null!;

    public string Email { get; set; } = null!;

    public int LoginId { get; set; }

    public int Status { get; set; }

    public virtual Area Area { get; set; } = null!;

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual Login Login { get; set; } = null!;

    public virtual ICollection<Rating> Ratings { get; set; } = new List<Rating>();
}
