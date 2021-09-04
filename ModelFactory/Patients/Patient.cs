using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ModelFactory.Patients
{
    public class Patient
    {
        public int MbrId { get; set; }
        public int PatientID { get; set; }
        public int Age { get; set; }
        public int RefAgeGroupId { get; set; }
        public string Gender { get; set; }
        public int RefGenderId { get; set; }
        public string Ethnicity { get; set; }
        public int RefEthnicityId { get; set; }
        public string Race { get; set; }
        public int RefRaceId { get; set; }
        public string AgeGroupDes { get; set; }
        public string GrnderDes { get; set; }
        public string RaceDes { get; set; }
        public string EthnicityDes { get; set; }
    }
}
