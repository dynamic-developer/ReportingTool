using ModelFactory.Masters;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessFactory.Masters
{
    public interface IBALMasters
    {
        List<AgeGroup> GetAgeGroup();

        List<Ethnicity> GetEthnicity();

        List<Gender> GetGender();

        List<Race> GetRace();

        List<Condition> GetCondition(int MamberId);

        List<ConditionCategory> GetConditionCategory(int MamberId);
    }
}
