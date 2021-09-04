using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelFactory.Masters;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataFactory.Configurations
{
    public class LabTypesConfiguration : IEntityTypeConfiguration<LabTypes>
    {
        public void Configure(EntityTypeBuilder<LabTypes> modelBuilder)
        {
            modelBuilder.ToTable("RefMbrLabTypes");
            modelBuilder.Property(s => s.Id).HasColumnName("Id");
            modelBuilder.Property(s => s.MbrId).HasColumnName("MbrId");
            modelBuilder.Property(s => s.Name).HasColumnName("Name");
            modelBuilder.Property(s => s.Description).HasColumnName("Description");
            modelBuilder.Property(s => s.UnitTypeName).HasColumnName("UnitTypeName");
            modelBuilder.Property(s => s.HasSecondaryValue).HasColumnName("HasSecondaryValue");
            modelBuilder.Property(s => s.ValueType).HasColumnName("ValueType");
            modelBuilder.Property(s => s.ResultQual).HasColumnName("ResultQual");
        }
    }
}
