namespace API.Entities;

public class Customer
{
    public int Id { get; set; }
    public string CompanyName { get; set; }
    public string ContactPerson { get; set; }
    public string Telephone { get; set; }
    public string Mobile { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Country { get; set; }
    public string Zip { get; set; }
    public string ShippingAddress { get; set; }
    public string TaxId { get; set; }
    public List<Invoice> Invoices { get; set; } = new List<Invoice>();
    public List<Order> Orders { get; set; } = new List<Order>();
}