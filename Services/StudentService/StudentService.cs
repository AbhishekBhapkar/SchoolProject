using Demo2.Model;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Demo2.Data;
using Microsoft.AspNetCore.Mvc;
using Demo2.Dtos;

namespace Demo2.Services.StudentService
{
    public class StudentService : IStudentService
    {

        private readonly IMapper _mapper;
        private readonly DataContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public StudentService(IMapper mapper , DataContext context , IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            _mapper = mapper;
        }
        public async Task<ServiceResponse<List<GetStudentsDto>>> GetAllStudents()
        {
            var ServiceResponse = new ServiceResponse<List<GetStudentsDto>>();
            var dbStudents = await _context.Students.ToListAsync();
            ServiceResponse.Data = dbStudents.Select(c => _mapper.Map<GetStudentsDto>(c)).ToList();
            return ServiceResponse; 
        }
        public async Task<ServiceResponse<List<GetStudentsDto>>> AddStudent(AddStudentDto newStudentAdd)
        {
            var ServiceResponse = new ServiceResponse<List<GetStudentsDto>>();
            var student = _mapper.Map<Students>(newStudentAdd);
            //student.User = await _context.Users.FirstOrDefaultAsync(u => u.Id == GetUserId());
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
            return ServiceResponse;

        }
    }
}