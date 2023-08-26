using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Bike
{
    public int Id { get; set; }

    public int MakeId { get; set; }

    public string Model { get; set; } = null!;

    public int? MakeIdId { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual Make Make { get; set; } = null!;

    public virtual Make? MakeIdNavigation { get; set; }
}
