using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelFactory.Masters;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataFactory.Configurations
{
    public class RaceConfiguration : IEntityTypeConfiguration<Race>
    {
        public void Configure(EntityTypeBuilder<Race> modelBuilder)
        {
            modelBuilder.ToTable("RefRace");
            modelBuilder.Property(s => s.Id).HasColumnName("Id");
            modelBuilder.Property(s => s.ShortDescription).HasColumnName("ShortDescription");
            modelBuilder.Property(s => s.LongDescription).HasColumnName("LongDescription");
        }
    }
}
