using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelFactory.Masters;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataFactory.Configurations
{
    public class LabGroupsConfiguration : IEntityTypeConfiguration<LabGroups>
    {
        public void Configure(EntityTypeBuilder<LabGroups> modelBuilder)
        {
            modelBuilder.ToTable("RefMbrLabGroups");
            modelBuilder.Property(s => s.Id).HasColumnName("Id");
            modelBuilder.Property(s => s.MbrId).HasColumnName("MbrId");
            modelBuilder.Property(s => s.Name).HasColumnName("Name");
            modelBuilder.Property(s => s.Description).HasColumnName("Description");
        }
    }
}
