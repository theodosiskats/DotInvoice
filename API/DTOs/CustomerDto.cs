using API.Entities;

namespace API.DTOs;

public class CustomerDto
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
    public string Comments { get; set; }
}