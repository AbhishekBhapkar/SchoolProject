using AutoMapper;
using Demo2.Dtos;
using Demo2.Model;

namespace GodProject
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Students,GetStudentsDto>();
  
        }
    }
}