using System;
using System.Collections.Generic;
using System.Text;

namespace ModelFactory.Medications
{
    public class NonProprietary
    {
        public int MbrId { get; set; }
        public int LexiDrugSetID { get; set; }
        public string NonProprietaryName { get; set; }
        public int Count { get; set; }
        public decimal Per { get; set; }
    }
}
