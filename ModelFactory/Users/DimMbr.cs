using System;
using System.ComponentModel.DataAnnotations;

namespace ModelFactory.Users
{
    public class DimMbr
    {
        [Key]
        public int MbrId { get; set; }
        public string MbrName { get; set; }
        //public DateTime CreateTm { get; set; }
    }
}
