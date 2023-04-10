using API.Data;
using API.DTO;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class InvoiceController : BaseApiController
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public InvoiceController(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<InvoiceDto>>> GetAllInvoices()
    {
        var invoices = await _context.Invoices.ToListAsync();

        var result = _mapper.Map<List<InvoiceDto>>(invoices);

        return Ok(result);
    }
}