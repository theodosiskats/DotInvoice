﻿using API.DTO;
using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;
using AutoMapper.Execution;

namespace API.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<AppUser, MemberDto>();
        CreateMap<RegisterDto, AppUser>();
        CreateMap<CustomerDto, Customer>()
            .ForMember(dest => dest.Id, opt => opt.Ignore());
        CreateMap<Customer, CustomerDto>();
        CreateMap<Invoice, InvoiceDto>();
        
        CreateMap<DateTime, DateTime>().ConvertUsing(d => DateTime.SpecifyKind(d, DateTimeKind.Utc));
        CreateMap<DateTime?, DateTime?>().ConvertUsing(d => d.HasValue ? DateTime.SpecifyKind(d.Value, DateTimeKind.Utc) : null);
    }
}