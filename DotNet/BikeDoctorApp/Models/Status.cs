using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Status
{
    public int Id { get; set; }

    public string Status1 { get; set; } = null!;

    public virtual ICollection<Booking> BookingStatus1s { get; set; } = new List<Booking>();

    public virtual ICollection<Booking> BookingStatusNavigations { get; set; } = new List<Booking>();
}
