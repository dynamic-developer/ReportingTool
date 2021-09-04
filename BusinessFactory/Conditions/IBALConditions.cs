using ModelFactory.Conditions;
using System.Collections.Generic;

namespace BusinessFactory.Conditions
{
    public interface IBALConditions
    {
        List<ConditionsCatDetails> GetConditionsCatDetails(int MamberId, string filter);

        List<ConditionsDetails> GetConditionsDetails(int MamberId, int ConditionCatId, string filter);

        List<ConditionsPatients> GetConditionsPatients(int MamberId, int ConditionID, string filter);

        List<PatientConditions> GetPatientConditions(int MamberId, int ConditionID, int PatientId);
    }
}
