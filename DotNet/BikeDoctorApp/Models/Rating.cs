using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Rating
{
    public int Id { get; set; }

    public int Rating1 { get; set; }

    public string? Comment { get; set; }

    public int CustomerId { get; set; }

    public int ServCenId { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual ServiceCentre ServCen { get; set; } = null!;
}
