using Demo2.Dtos;
using Demo2.Model;
using Microsoft.AspNetCore.Mvc;

namespace Demo2.Services.StudentService
{
    public interface IStudentService
    {
        Task<ServiceResponse<List<GetStudentsDto>>> GetAllStudents();
        Task<ServiceResponse<List<GetStudentsDto>>> AddStudent(AddStudentDto newStudentAdd);
    }
}