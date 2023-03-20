namespace API.Entities;

public class Stock
{
    public int Id { get; set; }
    public float StockAmount { get; set; }
    public int ProductId { get; set; }
    public Product Product { get; set; }
}