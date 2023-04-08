using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : IdentityDbContext<AppUser, AppRole, int, 
    IdentityUserClaim<int>,
    AppUserRole,
    IdentityUserLogin<int>, 
    IdentityRoleClaim<int>, 
    IdentityUserToken<int>>
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Customer> Customers { get; set; }
    public DbSet<Invoice> Invoices { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<OrderStatus> OrderStatuses { get; set; }
    public DbSet<PaymentStatus> PaymentStatuses { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<AppUser>()
            .HasMany(ur => ur.UserRoles)
            .WithOne(u => u.User)
            .HasForeignKey(ur => ur.UserId)
            .IsRequired();
        
        builder.Entity<AppRole>()
            .HasMany(ur => ur.UserRoles)
            .WithOne(u => u.Role)
            .HasForeignKey(ur => ur.RoleId)
            .IsRequired();

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
            .HasOne(i => i.Customer)
            .WithMany(c => c.Invoices);

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