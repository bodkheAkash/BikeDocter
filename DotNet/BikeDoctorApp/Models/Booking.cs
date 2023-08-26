using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Booking
{
    public int Id { get; set; }

    public int CustomerId { get; set; }

    public DateTime BookingDate { get; set; }

    public DateTime? AppointmentDate { get; set; }

    public int PackageId { get; set; }

    public int SerCenId { get; set; }

    public int BikeId { get; set; }

    public string BikeRegNo { get; set; } = null!;

    public int BasePrice { get; set; }

    public int ExtraPrice { get; set; }

    public int EstimatedPrice { get; set; }

    public int Status { get; set; }

    public int? Statusid { get; set; }

    public virtual Bike Bike { get; set; } = null!;

    public virtual Customer Customer { get; set; } = null!;

    public virtual Package Package { get; set; } = null!;

    public virtual ServiceCentre SerCen { get; set; } = null!;

    public virtual Status? Status1 { get; set; }

    public virtual Status StatusNavigation { get; set; } = null!;
}
