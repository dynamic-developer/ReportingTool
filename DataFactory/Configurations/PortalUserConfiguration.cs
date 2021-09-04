using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModelFactory.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataFactory.Configurations
{
    public class PortalUserConfiguration : IEntityTypeConfiguration<PortalUser>
    {
        public void Configure(EntityTypeBuilder<PortalUser> modelBuilder)
        {
            modelBuilder.ToTable("PortalUser");
            modelBuilder.Property(s => s.MbrId).HasColumnName("MbrId");
            modelBuilder.Property(s => s.UserId).HasColumnName("UserId");
            modelBuilder.Property(s => s.UserName).HasColumnName("UserName");
            modelBuilder.Property(s => s.UserPwd).HasColumnName("UserPwd");
            modelBuilder.Property(s => s.UserFirstName).HasColumnName("UserFirstName");
            modelBuilder.Property(s => s.UserLastName).HasColumnName("UserLastName");
            //modelBuilder.Entity<PortalUser>().Property(s => s.CreateTm).HasColumnName("CreateTm"); throw new NotImplementedException();
        }
    }
}
