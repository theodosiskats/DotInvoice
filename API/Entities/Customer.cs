﻿namespace API.Entities;

public class Customer
{
    public int Id { get; set; }
    public string CompanyName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Address { get; set; }
    public string ShippingAddress { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string TaxId { get; set; }
    public List<Invoice> Invoices { get; set; } = new List<Invoice>();
    public List<Order> Orders { get; set; } = new List<Order>();
}