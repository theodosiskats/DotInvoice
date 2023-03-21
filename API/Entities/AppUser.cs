using API.Extensions;
using Microsoft.AspNetCore.Identity;

namespace API.Entities;

public class AppUser : IdentityUser<int>
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
    public ICollection<AppUserRole> UserRoles { get; set; }
}