namespace API.Entities;

public class PaymentStatus : StatusBase
{
    public new int Id { get; set; }
    public Status Status { get; set; }
}