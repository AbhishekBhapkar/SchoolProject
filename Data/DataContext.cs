using Demo2.Model;
using Microsoft.EntityFrameworkCore;

namespace Demo2.Data
{
  public class DataContext : DbContext
    {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<Students> Students => Set<Students>();

    }
}
    