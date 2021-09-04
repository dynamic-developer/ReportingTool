using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelFactory.Masters;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataFactory.Configurations
{
    public class GenderConfiguration : IEntityTypeConfiguration<Gender>
    {
        public void Configure(EntityTypeBuilder<Gender> modelBuilder)
        {
            modelBuilder.ToTable("RefGender");
            modelBuilder.Property(s => s.Id).HasColumnName("Id");
            modelBuilder.Property(s => s.ShortDescription).HasColumnName("ShortDescription");
            modelBuilder.Property(s => s.LongDescription).HasColumnName("LongDescription");
        }
    }
}
