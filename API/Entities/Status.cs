namespace API.Entities;

public class Status
{
    public int Id { get; set; }
    public int StatusBaseId { get; set; }
    public StatusBase StatusBase { get; set; }
}