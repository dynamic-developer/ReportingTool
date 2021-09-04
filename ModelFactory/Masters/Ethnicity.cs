using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ModelFactory.Masters
{
    public class Ethnicity
    {
        [Key]
        public int Id { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
    }
}
