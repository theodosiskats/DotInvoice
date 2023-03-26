using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers;

public class CustomerController : BaseApiController
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public CustomerController(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<CustomerDto>>> GetAllCustomers()
    {
        var customers = await _context.Customers.ToListAsync();

        var result = _mapper.Map<List<CustomerDto>>(customers);

        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<CustomerDto>> GetCustomer(int id)
    {
        var customer = await _context.Customers.FindAsync(id);

        if (customer is null) return BadRequest("Customer does not exist in the DB");

        var result = _mapper.Map<CustomerDto>(customer);

        return Ok(result);
    }

    [HttpPost("new")]
    public async Task<ActionResult<CustomerDto>> CreateCustomer(CustomerDto customerDto)
    {
        var existingCustomer = await _context.Customers.FirstOrDefaultAsync(c => c.CompanyName == customerDto.CompanyName);
        
        if( existingCustomer is not null) return BadRequest($"A customer with the name '{customerDto.CompanyName}' already exists.");

        var newCustomer = _mapper.Map<Customer>(customerDto);

        _context.Customers.Add(newCustomer);
        await _context.SaveChangesAsync();

        var result = _mapper.Map<CustomerDto>(newCustomer);

        return Ok(result);
    }
}