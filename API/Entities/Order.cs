namespace API.Entities;

public class Order
{
    public int Id { get; set; }
    public List<Product> OrderedProducts { get; set; }
    public DateTime PlaceDate { get; set; }
    public ICollection<OrderStatus> OrderStatus { get; set; }
}