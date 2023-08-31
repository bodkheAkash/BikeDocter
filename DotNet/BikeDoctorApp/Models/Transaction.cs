using System;
using System.Collections.Generic;

namespace BikeDoctorApp.Models;

public partial class Transaction
{
    public int Id { get; set; }

    public int Amount { get; set; }

    public int CustomerId { get; set; }

    public DateTime Date { get; set; }

    public int PaymentModeId { get; set; }

    public string? TransactionNumber { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual PaymentMode PaymentMode { get; set; } = null!;
}
