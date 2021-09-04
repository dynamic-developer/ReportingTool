//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Metadata.Builders;
//using ModelFactory.Patient;
//using System;
//using System.Collections.Generic;
//using System.Text;

//namespace DataFactory.Configurations
//{
//    public class PatientConfiguration : IEntityTypeConfiguration<Patient>
//    {
//        public void Configure(EntityTypeBuilder<Patient> modelBuilder)
//        {
//            modelBuilder.ToTable("RefGender");
//            modelBuilder.Property(s => s.Id).HasColumnName("Id");
//            modelBuilder.Property(s => s.ShortDescription).HasColumnName("ShortDescription");
//            modelBuilder.Property(s => s.LongDescription).HasColumnName("LongDescription");
//        }
//    }
//}
