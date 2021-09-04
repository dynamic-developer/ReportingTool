using System;
using System.Collections.Generic;
using System.Text;

namespace ModelFactory.Medications
{
    public class Proprietary
    {
        public int MbrId { get; set; }
        public int LexiDrugSetId { get; set; }
        public string DosageFormID { get; set; }
        public string ProprietaryName { get; set; }
        public int Count { get; set; }
        public decimal Per { get; set; }
    }
}
