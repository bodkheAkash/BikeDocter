using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Area
{
    public int Id { get; set; }

    public string Area1 { get; set; } = null!;

    public int CityId { get; set; }

    public virtual City City { get; set; } = null!;

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual ICollection<ServiceCentre> ServiceCentres { get; set; } = new List<ServiceCentre>();
}
