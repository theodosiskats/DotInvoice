﻿using API.Extensions;
using Microsoft.AspNetCore.Identity;

namespace API.Entities;

public class AppUser
{
    public int Id { get; set; }
    public string UserName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
}