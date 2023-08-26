using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class PaymentMode
{
    public int Id { get; set; }

    public string PaymentMode1 { get; set; } = null!;

    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
}
