using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Login
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int SecurityQuesId { get; set; }

    public string Answer { get; set; } = null!;

    public int UserTypeId { get; set; }

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual SecurityQuestion SecurityQues { get; set; } = null!;

    public virtual ICollection<ServiceCentre> ServiceCentres { get; set; } = new List<ServiceCentre>();

    public virtual Role UserType { get; set; } = null!;
}
