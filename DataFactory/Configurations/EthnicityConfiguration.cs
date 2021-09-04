using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelFactory.Masters;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataFactory.Configurations
{
    public class EthnicityConfiguration : IEntityTypeConfiguration<Ethnicity>
    {
        public void Configure(EntityTypeBuilder<Ethnicity> modelBuilder)
        {
            modelBuilder.ToTable("RefEthnicity");
            modelBuilder.Property(s => s.Id).HasColumnName("Id");
            modelBuilder.Property(s => s.ShortDescription).HasColumnName("ShortDescription");
            modelBuilder.Property(s => s.LongDescription).HasColumnName("LongDescription");
        }
    }
}
