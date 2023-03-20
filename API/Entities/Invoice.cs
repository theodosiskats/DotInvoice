using Microsoft.EntityFrameworkCore;

namespace API.Entities;

public class Invoice
{
    public int Id { get; set; }
    public int InvoiceNumber { get; set; }
    public DateTime IssueDate { get; set; } = DateTime.UtcNow;
    public DateTime DueDate { get; set; }
    public List<Product> Products { get; set; }
    public decimal Subtotal { get; set; }
    public decimal ShippingFees { get; set; }
    public decimal TaxAmount { get; set; }
    public decimal TotalAmount { get; set; }
    public string Notes { get; set; }
    public bool IsCompleted { get; set; }
    public PaymentStatus PaymentStatus { get; set; }
    public Customer Customer { get; set; }
}