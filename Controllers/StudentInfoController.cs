using Demo2.Dtos;
using Demo2.Model;
using Demo2.Services.StudentService;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_rpg.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentInfoController : ControllerBase
    {

        private readonly IStudentService _StudentService;

        public StudentInfoController(IStudentService studentService)
        {
            _StudentService = studentService;
        }

    [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<GetStudentsDto>>>> Get()
        {
            return Ok(await _StudentService.GetAllStudents());
        }
    }
}