namespace API.Entities;

public class OrderStatus: StatusBase
{
    public new int Id { get; set; }
    public Status Status { get; set; }
}