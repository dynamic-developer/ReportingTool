using System;
using System.Collections.Generic;
using System.Text;

namespace ModelFactory.Conditions
{
    public class PatientConditions
    {
        public Int64 SrNo { get; set; }
        public int mbrid { get; set; }
        public int patientid { get; set; }
        public int ConditionCategoryId { get; set; }
        public string conditioncategory { get; set; }
        public int ConditionID { get; set; }
        public string condition { get; set; }
        public string ConditionOther { get; set; }
    }
}