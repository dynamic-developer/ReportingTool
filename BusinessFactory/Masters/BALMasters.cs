using System;
using System.Collections.Generic;
using System.Text;
using DataFactory;
using ModelFactory.Masters;
using System.Linq;

namespace BusinessFactory.Masters
{
    public class BALMasters : IBALMasters
    {
        MyOwnMedContext objMyOwnMedContext;

        public BALMasters(MyOwnMedContext _MyOwnMedContext)
        {
            objMyOwnMedContext = _MyOwnMedContext;
        }

        public List<AgeGroup> GetAgeGroup()
        {
            try
            {
               return objMyOwnMedContext.AgeGroup.ToList();
            }
            catch (Exception Ex)
            {
                return null;
            }
        }
        
        public List<Ethnicity> GetEthnicity()
        {
            try
            {
                return objMyOwnMedContext.Ethnicity.ToList();
            }
            catch (Exception Ex)
            {
                return null;
            }
        }

        public List<Gender> GetGender()
        {
            try
            {
                return objMyOwnMedContext.Gender.ToList();
            }
            catch (Exception Ex)
            {
                return null;
            }
        }

        public List<Race> GetRace()
        {
            try
            {
                return objMyOwnMedContext.Race.ToList();
            }
            catch (Exception Ex)
            {
                return null;
            }
        }

        public List<Condition> GetCondition(int MamberId)
        {
            try
            {
                return objMyOwnMedContext.Condition.Where(F => F.MbrId == MamberId).ToList();
            }
            catch (Exception Ex)
            {
                return null;
            }
        }

        public List<ConditionCategory> GetConditionCategory(int MamberId)
        {
            try
            {
                return objMyOwnMedContext.ConditionCategory.Where(F => F.MbrId == MamberId).ToList();
            }
            catch (Exception Ex)
            {
                return null;
            }
        }
    }
}