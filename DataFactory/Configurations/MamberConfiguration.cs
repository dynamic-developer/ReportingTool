using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelFactory.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataFactory.Configurations
{
    public class MamberConfiguration : IEntityTypeConfiguration<DimMbr>
    {
        public void Configure(EntityTypeBuilder<DimMbr> modelBuilder)
        {
            modelBuilder.ToTable("DimMbr");
            modelBuilder.Property(s => s.MbrId).HasColumnName("MbrId");
            modelBuilder.Property(s => s.MbrName).HasColumnName("MbrName");
            //modelBuilder.Entity<DimMbr>().Property(s => s.CreateTm).HasColumnName("CreateTm");
        }
    }
}
