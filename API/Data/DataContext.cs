using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<AppUser> Users { get; set; }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Invoice> Invoices { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<OrderStatus> OrderStatuses { get; set; }
    public DbSet<PaymentStatus> PaymentStatuses { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Customer>()
            .HasMany(i => i.Invoices)
            .WithOne(i => i.Customer);

        builder.Entity<Customer>()
            .HasMany(o => o.Orders);

        builder.Entity<Invoice>()
            .HasMany(p => p.Products);

        builder.Entity<Invoice>()
            .HasOne(ps => ps.PaymentStatus);

        builder.Entity<Invoice>()
            .HasOne(c => c.Customer);

        builder.Entity<Order>()
            .HasMany(p => p.OrderedProducts);

        builder.Entity<Order>()
            .HasMany(os => os.OrderStatus);

        builder.Entity<Product>()
            .HasOne(p => p.Stock);

        builder.Entity<Stock>()
            .HasOne(s => s.Product);
    }
}