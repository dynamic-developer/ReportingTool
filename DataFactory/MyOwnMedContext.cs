using DataFactory.Configurations;
using Microsoft.EntityFrameworkCore;
using ModelFactory.Conditions;
using ModelFactory.Labs;
using ModelFactory.Masters;
using ModelFactory.Medications;
using ModelFactory.Patients;
using ModelFactory.Users;

namespace DataFactory
{
    public class MyOwnMedContext : DbContext
    {
        public MyOwnMedContext(DbContextOptions<MyOwnMedContext> options)
           : base(options)
        { }

        public DbSet<PortalUser> entPortalUser { get; set; }
        public DbSet<DimMbr> entDimMbr { get; set; }

        public DbSet<AgeGroup> AgeGroup { get; set; }
        public DbSet<Ethnicity> Ethnicity { get; set; }
        public DbSet<Gender> Gender { get; set; }
        public DbSet<Race> Race { get; set; }
        public DbSet<Condition> Condition { get; set; }
        public DbSet<ConditionCategory> ConditionCategory { get; set; }
        public DbSet<LabGroups> LabGroups { get; set; }
        public DbSet<LabTypes> LabTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new PortalUserConfiguration());
            modelBuilder.ApplyConfiguration(new MamberConfiguration());
            modelBuilder.ApplyConfiguration(new AgeGroupConfiguration());
            modelBuilder.ApplyConfiguration(new EthnicityConfiguration());
            modelBuilder.ApplyConfiguration(new GenderConfiguration());
            modelBuilder.ApplyConfiguration(new RaceConfiguration());
            modelBuilder.ApplyConfiguration(new ConditionConfiguration());
            modelBuilder.ApplyConfiguration(new ConditionCategoryConfiguration());
            modelBuilder.ApplyConfiguration(new LabTypesConfiguration());
            modelBuilder.ApplyConfiguration(new LabGroupsConfiguration());

            modelBuilder.Query<Patient>();
            modelBuilder.Query<ConditionsCatDetails>();
            modelBuilder.Query<ConditionsDetails>();
            modelBuilder.Query<ConditionsPatients>();
            modelBuilder.Query<PatientConditions>();
            modelBuilder.Query<LabGroupResults>();
            modelBuilder.Query<LabTypeResults>();
            modelBuilder.Query<NonProprietary>();
            modelBuilder.Query<Proprietary>();
            modelBuilder.Query<NDCManufacturer>();
        }
    }
}
