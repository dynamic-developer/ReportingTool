using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelFactory.Masters;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataFactory.Configurations
{
    public class ConditionCategoryConfiguration : IEntityTypeConfiguration<ConditionCategory>
    {
        public void Configure(EntityTypeBuilder<ConditionCategory> modelBuilder)
        {
            modelBuilder.ToTable("RefMbrConditionCategory");
            modelBuilder.Property(s => s.Id).HasColumnName("Id");
            modelBuilder.Property(s => s.MbrId).HasColumnName("MbrId");
            modelBuilder.Property(s => s.ShortDesc).HasColumnName("ShortDesc");
            modelBuilder.Property(s => s.LongDesc).HasColumnName("LongDesc");
        }
    }
}
